@AGENTS.md

# CLAUDE.md — obrii-marketing-web

> ## ⚠️ Este repositorio está CONGELADO
>
> El 2026-05-30 la web pública de Obrii se migró al monorepo **`obrii-growth`**, donde
> vive en **`apps/web`**. Ese es el código que se despliega en
> `www.obriiconsulting.com` vía Vercel.
>
> Este repo quedó detenido en el commit `b4b7155` (2026-05-30) y **no se despliega**.
> Se conserva por historial y por el tag `pre-merge-backup`.
>
> **Antes de editar aquí, detente y confirma con el usuario.** Salvo que te pidan
> explícitamente trabajar sobre este repo histórico, el cambio va en
> `obrii-growth/apps/web/` (y ahí manda `obrii-growth/CLAUDE.md`). No portes cambios
> desde `obrii-growth` hacia acá: las dos bases divergieron mucho (i18n, Obrii Care,
> herramientas, tests, API de leads) y sincronizarlas no aporta nada.

El resto de este documento describe el estado del repo tal como quedó congelado.

---

## Qué es

Web pública de Obrii Consulting (headhunting ejecutivo y evaluación psicolaboral B2B
en Chile/LATAM): landing, servicios, blog y páginas legales. Next.js 16 App Router,
React 19, Tailwind 4, contenido en MDX. Idioma único: **español de Chile** (no hay
i18n en esta versión).

## Comandos

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm run start
npm run lint    # eslint flat config (core-web-vitals + typescript)
```

No hay suite de tests en este repo.

## Regla dura de Next.js

Ver `AGENTS.md`, incluido arriba: **esta no es la versión de Next.js que conoces.**
Next 16 trae breaking changes respecto a los datos de entrenamiento — lee la guía
relevante en `node_modules/next/dist/docs/` antes de escribir código y respeta los
avisos de deprecación. En concreto: App Router, layout raíz en `src/app/layout.tsx`,
`params`/`searchParams` asíncronos.

## Estructura

```
src/
  app/
    layout.tsx           # metadata global: title template, OG/Twitter, verificación GSC
    page.tsx             # home
    servicios/page.tsx   # catálogo de servicios (headhunting + evaluación)
    obrii-app/page.tsx   # landing del SaaS
    blog/
      layout.tsx
      page.tsx           # índice
      [slug]/page.tsx    # artículo, render MDX vía next-mdx-remote
    cookies|terminos|privacidad/page.tsx
    sitemap.ts  robots.ts  globals.css  icon.png  apple-icon.png
  components/
    Hero, Services, Methodology, RolesTrayectoria, ConsultantProfile,
    TrustBanner, SaaSPromo, SaaSBridgeBanner, Navbar, Footer
    blog/ArticleShell.tsx        # shell de artículo
    legal/LegalDocShell.tsx      # shell de documentos legales
    mdx/MdxComponents.tsx        # mapping de componentes para MDX
    ui/{button, ExpandableVideo, SaaSPopup}.tsx
  content/blog/*.mdx             # 11 posts
  lib/
    site.ts                      # fuente única de URLs y contacto
    mdx.ts                       # gray-matter + orden por fecha + formatPostDate
public/                          # logo, PDFs de propuesta, demo mp4, verificación Google
```

Alias de imports: `@/*` → `./src/*` (`tsconfig.json`).

## Convenciones

- **URLs de marca desde `src/lib/site.ts`**, nunca hardcodeadas: `SITE_URL`
  (`https://obriiconsulting.com` — ojo, sin `www`; en `obrii-growth` el canónico pasó a
  `www`), `APP_URL`, `APP_SIGNUP_URL`, `APP_TRIAL_URL`, `AGENDAR_ASESORIA_URL`,
  `CONTACT_EMAIL`.
- **Frontmatter MDX** leído por `src/lib/mdx.ts`:
  ```yaml
  title, date (YYYY-MM-DD), excerpt, coverImage, author, tags: [...],
  seoTitle, seoDescription
  ```
  Los posts se ordenan por `date` descendente; `formatPostDate` formatea en `es-CL` /
  `America/Santiago`.
- **Redirects:** `next.config.ts` mantiene 301 de URLs legacy indexadas (`/nosotros`,
  `/contacto`, `/metodologia-hamp`, `/consultoria`, `/app`…). Existen para transferir
  link equity; no se borran «por limpieza».
- **Analítica:** GA4 vía `@next/third-parties`, Speed Insights de Vercel.
- **Secretos:** los `.env*` están gitignoreados. La única variable usada es
  `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`.
- **Commits en español, formato convencional con scope:** `feat(servicios):`,
  `fix(blog):`, `refactor(servicios):`, `style(home):`.
