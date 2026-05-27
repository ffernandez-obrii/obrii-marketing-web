import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/nosotros",
        destination: "/",
        permanent: true,
      },
      {
        source: "/contacto",
        destination: "/",
        permanent: true,
      },
      {
        source: "/soluciones",
        destination: "/",
        permanent: true,
      },
      {
        // Pivot comercial 2026: Metodología HAMP deprecada. Mantenemos este redirect 301 activo para transferir todo el Link Equity y tráfico de las URLs indexadas en Google hacia la landing principal.
        source: "/metodologia-hamp",
        destination: "/",
        permanent: true,
      },
      // Consultoría y páginas corporativas retiradas (GA 404)
      {
        source: "/servicios",
        destination: "/",
        permanent: true,
      },
      {
        source: "/consultoria",
        destination: "/",
        permanent: true,
      },
      {
        source: "/quienes-somos",
        destination: "/",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/",
        permanent: true,
      },
      {
        source: "/metodologia",
        destination: "/",
        permanent: true,
      },
      {
        source: "/hamp",
        destination: "/",
        permanent: true,
      },
      {
        source: "/metodo-hamp",
        destination: "/",
        permanent: true,
      },
      {
        source: "/productos",
        destination: "/",
        permanent: true,
      },
      {
        source: "/precios",
        destination: "/",
        permanent: true,
      },
      {
        source: "/landing",
        destination: "/",
        permanent: true,
      },
      {
        source: "/evaluacion",
        destination: "/",
        permanent: true,
      },
      {
        source: "/headhunting",
        destination: "/",
        permanent: true,
      },
      {
        source: "/recursos",
        destination: "/",
        permanent: true,
      },
      {
        source: "/casos",
        destination: "/",
        permanent: true,
      },
      {
        source: "/equipo",
        destination: "/",
        permanent: true,
      },
      {
        source: "/team",
        destination: "/",
        permanent: true,
      },
      // SaaS / app — conservar intención comercial hacia la landing del producto
      {
        source: "/app",
        destination: "/obrii-app",
        permanent: true,
      },
      {
        source: "/plataforma",
        destination: "/obrii-app",
        permanent: true,
      },
      {
        source: "/saas",
        destination: "/obrii-app",
        permanent: true,
      },
      {
        source: "/obrii",
        destination: "/obrii-app",
        permanent: true,
      },
      {
        source: "/demo",
        destination: "/obrii-app",
        permanent: true,
      },
      {
        source: "/software",
        destination: "/obrii-app",
        permanent: true,
      },
      {
        source: "/pricing",
        destination: "/obrii-app",
        permanent: true,
      },
      {
        source: "/signup",
        destination: "/obrii-app",
        permanent: true,
      },
      {
        source: "/register",
        destination: "/obrii-app",
        permanent: true,
      },
      {
        source: "/login",
        destination: "/obrii-app",
        permanent: true,
      },
      {
        source: "/auth",
        destination: "/obrii-app",
        permanent: true,
      },
      // Blog — slugs legacy indexados
      {
        source: "/blog/metodologia-hamp",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/hamp",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/star",
        destination: "/blog/star-y-trazabilidad",
        permanent: true,
      },
      {
        source: "/blog/talento",
        destination: "/blog/talento-critico-b2b",
        permanent: true,
      },
      {
        source: "/blog/obrii",
        destination: "/blog/lanzamiento-obrii-app-rrhh",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
