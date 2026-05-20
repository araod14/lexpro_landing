# Lexpro Soluciones — Landing Page

Landing page corporativa para **Lexpro Soluciones, C.A.** — desarrollo de software SaaS y automatización de procesos empresariales.

## Stack

- **Next.js 14+** (App Router) + **TypeScript**
- **TailwindCSS v3** con paleta personalizada (teal `#1FA8A8`, ink `#4A4A4A`)
- **Framer Motion** para animaciones suaves (fade-in, scroll-triggered, contadores)
- **lucide-react** para íconos
- Tipografía **Montserrat** vía `next/font/google`

## Arranque rápido (local)

```bash
npm install
npm run dev   # http://localhost:3000
npm run build # compilar producción
npm run start # servir build localmente
```

O usa el Makefile:

```bash
make dev      # desarrollo
make build    # compilar
make lint     # lint
```

## Estructura

```
src/
├── app/
│   ├── layout.tsx        # Montserrat, metadata SEO, JSON-LD
│   ├── page.tsx          # Composición de 11 secciones
│   ├── globals.css
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── Navbar.tsx, Hero.tsx, HeroIllustration.tsx
│   ├── TrustBar.tsx, Services.tsx, WhyLexpro.tsx
│   ├── Process.tsx, Industries.tsx, Testimonials.tsx
│   ├── Metrics.tsx, FinalCTA.tsx, Footer.tsx
│   ├── LexproLogo.tsx
│   └── ui/
│       ├── Button.tsx, Container.tsx, SectionTitle.tsx
│       ├── FadeIn.tsx, Counter.tsx
└── lib/
    ├── site.ts           # ⭐ Datos de contacto (EDITAR AQUÍ)
    └── content.ts        # Textos de secciones (servicios, industrias, etc.)
```

## ¿Dónde edito qué?

| Quiero cambiar... | Archivo |
|---|---|
| Correo, WhatsApp, teléfono, dirección, RIF, redes sociales | `src/lib/site.ts` |
| Textos de servicios, industrias, testimonios, métricas, proceso | `src/lib/content.ts` |
| Paleta de colores, sombras, tipografía | `tailwind.config.ts` |
| Metadatos SEO (title, description, OG) | `src/app/layout.tsx` |
| Logos de clientes en barra de confianza | `public/logos/client-1..6.svg` |
| Logo principal | `src/components/LexproLogo.tsx` |
| Ilustración del hero | `src/components/HeroIllustration.tsx` |

## CTAs

Los botones (`Solicitar Demo`, `Agenda consultoría`, `Hablemos hoy`) abren:
- `mailto:` con asunto y cuerpo prellenados, o
- `wa.me/<número>?text=...` con mensaje sugerido

Reemplaza los datos en `src/lib/site.ts` para apuntarlos a los canales reales.

## Despliegue

### Opción A — Docker (recomendado para servidores propios)

La imagen usa el [output standalone](https://nextjs.org/docs/app/api-reference/next-config-js/output) de Next.js: pesa ~100 MB y no requiere `node_modules` en producción.

```bash
# Construir y levantar con Docker Compose (un solo comando)
make up

# O manualmente con Docker
make docker-build
make docker-run          # http://localhost:3000

# Ver logs
make logs

# Detener
make down
```

Para publicar en un registry (Docker Hub, GHCR, ECR…):

```bash
# Edita REGISTRY en el Makefile, luego:
make docker-push

# O pasa el registry como argumento:
make docker-push REGISTRY=docker.io/miusuario
```

El archivo `docker-compose.yml` incluye un **healthcheck** automático (`/` cada 30 s) y `restart: unless-stopped`.

---

### Opción B — Vercel / Netlify / Cloudflare Pages

Compatible sin configuración extra. Retira `output: "standalone"` de `next.config.mjs` si usas Vercel (no es necesario allí).

```bash
npx vercel
```

---

### Variables de entorno

No hay variables de entorno requeridas en este estado. Si añades integraciones (analytics, SMTP, etc.) crea un `.env.local` en desarrollo y configura las mismas variables en tu plataforma de despliegue. El `.gitignore` ya excluye todos los archivos `.env`.

## Notas técnicas

- 100% responsive (mobile-first).
- Accesibilidad AA: foco visible (anillo teal), `aria-label` en navegación, contraste verificado.
- Performance: SVG inline para hero/ilustraciones, `next/font` para Montserrat (sin FOUT), animaciones respetan `prefers-reduced-motion`.
- SEO: metadata completa, JSON-LD `Organization`, `sitemap.ts`, `robots.ts`.
