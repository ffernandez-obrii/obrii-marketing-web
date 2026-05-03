import { ConsultantProfile } from "@/components/ConsultantProfile";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Methodology } from "@/components/Methodology";
import { Navbar } from "@/components/Navbar";
import { SaaSPromo } from "@/components/SaaSPromo";
import { Services } from "@/components/Services";
import { TrustBanner } from "@/components/TrustBanner";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col pt-0">
        <Hero />
        <TrustBanner />
        <SaaSPromo />
        <Services />
        <Methodology />
        <ConsultantProfile />
        <Footer />
      </main>
    </>
  );
}
