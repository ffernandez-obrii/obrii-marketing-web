import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
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
    <html
      lang="es"
      className={`${inter.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background font-sans text-foreground">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
