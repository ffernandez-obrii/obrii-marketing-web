import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function BlogLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col pt-[5.75rem] sm:pt-24">
        {children}
      </main>
      <Footer />
    </>
  );
}
