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
        source: '/metodologia-hamp',
        destination: '/',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
