import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const siteDescription =
  "Headhunting ejecutivo y evaluación psicolaboral B2B en Chile. Identificamos y validamos talento estratégico; mitigamos el riesgo de contratación con evaluaciones de alta precisión.";

const defaultTitle =
  "Obrii Consulting | Headhunting Ejecutivo y Evaluación Psicolaboral B2B";

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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
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
