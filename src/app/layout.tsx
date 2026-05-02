import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

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
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
