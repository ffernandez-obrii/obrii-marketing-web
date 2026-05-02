import { ConsultantProfile } from "@/components/ConsultantProfile";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { SaaSPromo } from "@/components/SaaSPromo";
import { Services } from "@/components/Services";
import { TrustBanner } from "@/components/TrustBanner";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <TrustBanner />
        <SaaSPromo />
        <Services />
        <ConsultantProfile />
        <Footer />
      </main>
    </>
  );
}
