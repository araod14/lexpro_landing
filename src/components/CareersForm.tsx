"use client";

import { useRef, useState } from "react";
import { ArrowRight, CheckCircle2, Loader2, Upload } from "lucide-react";
import { JOB_POSITIONS } from "@/lib/content";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
const ALLOWED_EXT = [".pdf", ".doc", ".docx"];

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-lg border border-ink/10 bg-white px-4 py-3 text-sm text-ink-deep placeholder:text-ink-soft transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:border-teal";
const labelClass = "block text-sm font-semibold text-ink-deep mb-1.5";

export function CareersForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);

  function validateFile(file: File | undefined): string | null {
    if (!file) return "Debes adjuntar tu currículo.";
    const nameLower = file.name.toLowerCase();
    if (!ALLOWED_EXT.some((ext) => nameLower.endsWith(ext))) {
      return "El CV debe ser un archivo PDF, DOC o DOCX.";
    }
    if (file.size > MAX_FILE_SIZE) {
      return "El CV no puede superar los 5 MB.";
    }
    return null;
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    const err = validateFile(file);
    if (err) {
      setError(err);
      setFileName("");
      e.target.value = "";
      return;
    }
    setError("");
    setFileName(file!.name);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const data = new FormData(formEl);

    const fileErr = validateFile(data.get("cv") as File | undefined);
    if (fileErr) {
      setError(fileErr);
      return;
    }

    setStatus("submitting");
    setError("");
    try {
      const res = await fetch("/api/careers", { method: "POST", body: data });
      const json = await res.json().catch(() => ({ ok: false }));
      if (!res.ok || !json.ok) {
        setStatus("error");
        setError(json.error || "No se pudo enviar la postulación. Intenta más tarde.");
        return;
      }
      setStatus("success");
      formEl.reset();
      setFileName("");
    } catch {
      setStatus("error");
      setError("Ocurrió un error de red. Intenta más tarde.");
    }
  }

  if (status === "success") {
    return (
      <div className="mx-auto max-w-xl rounded-2xl bg-white border border-teal/30 shadow-card p-8 text-center">
        <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-teal-light text-teal">
          <CheckCircle2 size={28} aria-hidden="true" />
        </div>
        <h3 className="mt-4 text-xl font-bold text-ink-deep">
          ¡Postulación enviada!
        </h3>
        <p className="mt-2 text-sm text-ink-soft">
          Gracias por tu interés en Lexpro. Hemos recibido tu CV y nos pondremos
          en contacto contigo si tu perfil encaja con nuestras vacantes.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg font-semibold text-teal hover:text-teal-dark transition-colors"
        >
          Enviar otra postulación
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="mx-auto max-w-2xl rounded-2xl bg-white border border-ink/5 shadow-card p-7 sm:p-9"
    >
      {/* Honeypot anti-spam: oculto para usuarios reales. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nombre" className={labelClass}>
            Nombre <span className="text-teal">*</span>
          </label>
          <input id="nombre" name="nombre" type="text" required autoComplete="given-name" className={inputClass} placeholder="Tu nombre" />
        </div>
        <div>
          <label htmlFor="apellido" className={labelClass}>
            Apellido <span className="text-teal">*</span>
          </label>
          <input id="apellido" name="apellido" type="text" required autoComplete="family-name" className={inputClass} placeholder="Tu apellido" />
        </div>
        <div>
          <label htmlFor="telefono" className={labelClass}>
            Teléfono de contacto <span className="text-teal">*</span>
          </label>
          <input id="telefono" name="telefono" type="tel" required autoComplete="tel" className={inputClass} placeholder="+58 424-0000000" />
        </div>
        <div>
          <label htmlFor="telefono2" className={labelClass}>
            Segundo número / WhatsApp
          </label>
          <input id="telefono2" name="telefono2" type="tel" className={inputClass} placeholder="Opcional" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="email" className={labelClass}>
            Correo electrónico <span className="text-teal">*</span>
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} placeholder="tucorreo@ejemplo.com" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="puesto" className={labelClass}>
            Puesto al que postulas <span className="text-teal">*</span>
          </label>
          <select id="puesto" name="puesto" required defaultValue="" className={`${inputClass} appearance-none`}>
            <option value="" disabled>
              Selecciona un puesto…
            </option>
            {JOB_POSITIONS.map((position) => (
              <option key={position} value={position}>
                {position}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="mensaje" className={labelClass}>
            Mensaje
          </label>
          <textarea id="mensaje" name="mensaje" rows={4} className={`${inputClass} resize-y`} placeholder="Cuéntanos brevemente sobre tu experiencia (opcional)" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="cv" className={labelClass}>
            Currículo (CV) <span className="text-teal">*</span>
          </label>
          <label
            htmlFor="cv"
            className="flex cursor-pointer items-center gap-3 rounded-lg border border-dashed border-ink/20 bg-surface-alt px-4 py-3.5 text-sm text-ink-soft transition-colors hover:border-teal hover:bg-teal-light/40"
          >
            <Upload size={18} className="shrink-0 text-teal" aria-hidden="true" />
            <span className="truncate">
              {fileName || "Adjunta tu CV (PDF, DOC o DOCX · máx. 5 MB)"}
            </span>
          </label>
          <input
            id="cv"
            name="cv"
            type="file"
            required
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            onChange={handleFileChange}
            className="sr-only"
          />
        </div>
      </div>

      {error && (
        <p role="alert" className="mt-4 text-sm font-medium text-red-600">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-teal px-7 py-3.5 text-base font-semibold tracking-tight text-white transition-all duration-200 ease-out hover:bg-teal-dark hover:-translate-y-0.5 hover:shadow-card-hover active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={18} className="animate-spin" aria-hidden="true" />
            Enviando…
          </>
        ) : (
          <>
            Enviar postulación
            <ArrowRight size={18} aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  );
}
