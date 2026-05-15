import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/nosotros',
        destination: '/',
        permanent: true,
      },
      {
        source: '/contacto',
        destination: '/',
        permanent: true,
      },
      {
        source: '/soluciones',
        destination: '/',
        permanent: true,
      },
      {
        // Pivot comercial 2026: Metodología HAMP deprecada. Mantenemos este redirect 301 activo para transferir todo el Link Equity y tráfico de las URLs indexadas en Google hacia la landing principal.
        source: "/metodologia-hamp",
        destination: "/",
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
