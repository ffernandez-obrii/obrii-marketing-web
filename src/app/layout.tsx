import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const siteDescription =
  "Consultoría boutique en Chile liderada por Francisco Fernández. Evaluación psicológica y Headhunting especializado para mitigar el riesgo operativo en Minería, Energía y Tecnología.";

const defaultTitle =
  "Obrii Consulting | Headhunting B2B & Evaluación Psicolaboral";

export const metadata: Metadata = {
  metadataBase: new URL("https://obriiconsulting.com"),
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  title: {
    default: defaultTitle,
    template: "%s | Obrii Consulting",
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "/",
    title: defaultTitle,
    description: siteDescription,
    images: ["/dashboard-obrii.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: siteDescription,
    images: ["/dashboard-obrii.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background font-sans text-foreground">
        {children}
        <SpeedInsights />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
