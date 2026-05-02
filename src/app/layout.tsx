import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const siteDescription =
  "Consultoría boutique en Chile liderada por Francisco Fernández. Evaluación psicológica y Headhunting especializado para mitigar el riesgo operativo en Minería, Energía y Tecnología.";

const defaultTitle =
  "Obrii Consulting | Headhunting B2B & Evaluación Psicolaboral";

export const metadata: Metadata = {
  title: {
    default: defaultTitle,
    template: "%s | Obrii Consulting",
  },
  description: siteDescription,
  openGraph: {
    title: defaultTitle,
    description: siteDescription,
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col bg-background font-sans text-foreground">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
