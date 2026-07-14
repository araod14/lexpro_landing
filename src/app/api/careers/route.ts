import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { SITE } from "@/lib/site";
import { JOB_POSITIONS } from "@/lib/content";

// Nodemailer requiere el runtime de Node (no corre en edge).
export const runtime = "nodejs";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
const ALLOWED_MIME = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);
const ALLOWED_EXT = [".pdf", ".doc", ".docx"];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Solicitud inválida." },
      { status: 400 }
    );
  }

  const nombre = String(form.get("nombre") ?? "").trim();
  const apellido = String(form.get("apellido") ?? "").trim();
  const telefono = String(form.get("telefono") ?? "").trim();
  const telefono2 = String(form.get("telefono2") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const puesto = String(form.get("puesto") ?? "").trim();
  const mensaje = String(form.get("mensaje") ?? "").trim();
  const cv = form.get("cv");
  // Honeypot anti-spam: campo oculto que un humano no rellena.
  const honeypot = String(form.get("website") ?? "").trim();

  if (honeypot) {
    // Fingimos éxito para no dar pistas al bot.
    return NextResponse.json({ ok: true });
  }

  // Validación de campos obligatorios.
  if (!nombre || !apellido || !telefono || !email || !puesto) {
    return NextResponse.json(
      { ok: false, error: "Faltan campos obligatorios." },
      { status: 400 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "El correo electrónico no es válido." },
      { status: 400 }
    );
  }
  if (!JOB_POSITIONS.includes(puesto)) {
    return NextResponse.json(
      { ok: false, error: "El puesto seleccionado no es válido." },
      { status: 400 }
    );
  }

  // Validación del archivo CV.
  if (!(cv instanceof File) || cv.size === 0) {
    return NextResponse.json(
      { ok: false, error: "Debes adjuntar tu currículo." },
      { status: 400 }
    );
  }
  const nameLower = cv.name.toLowerCase();
  const extOk = ALLOWED_EXT.some((ext) => nameLower.endsWith(ext));
  if (!ALLOWED_MIME.has(cv.type) && !extOk) {
    return NextResponse.json(
      { ok: false, error: "El CV debe ser un archivo PDF, DOC o DOCX." },
      { status: 400 }
    );
  }
  if (cv.size > MAX_FILE_SIZE) {
    return NextResponse.json(
      { ok: false, error: "El CV no puede superar los 5 MB." },
      { status: 400 }
    );
  }

  const buffer = Buffer.from(await cv.arrayBuffer());

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error("Faltan variables de entorno SMTP para el envío de correos.");
    return NextResponse.json(
      { ok: false, error: "El servicio de correo no está configurado." },
      { status: 500 }
    );
  }

  const port = Number(SMTP_PORT ?? 587);
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const fullName = `${nombre} ${apellido}`;
  const html = `
    <h2>Nueva postulación de talento — Lexpro</h2>
    <table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
      <tr><td><strong>Nombre</strong></td><td>${esc(fullName)}</td></tr>
      <tr><td><strong>Puesto</strong></td><td>${esc(puesto)}</td></tr>
      <tr><td><strong>Teléfono</strong></td><td>${esc(telefono)}</td></tr>
      ${telefono2 ? `<tr><td><strong>Segundo número</strong></td><td>${esc(telefono2)}</td></tr>` : ""}
      <tr><td><strong>Correo</strong></td><td>${esc(email)}</td></tr>
      ${mensaje ? `<tr><td valign="top"><strong>Mensaje</strong></td><td>${esc(mensaje).replace(/\n/g, "<br>")}</td></tr>` : ""}
    </table>
    <p style="font-family:sans-serif;font-size:13px;color:#6B7280">CV adjunto: ${esc(cv.name)}</p>
  `;

  try {
    await transporter.sendMail({
      from: SMTP_FROM || SMTP_USER,
      to: [...SITE.careersRecipients],
      replyTo: email,
      subject: `Nueva postulación — ${puesto} — ${fullName}`,
      html,
      attachments: [{ filename: cv.name, content: buffer }],
    });
  } catch (err) {
    console.error("Error enviando el correo de postulación:", err);
    return NextResponse.json(
      { ok: false, error: "No se pudo enviar la postulación. Intenta más tarde." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
