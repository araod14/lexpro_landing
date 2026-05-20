import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Services } from "@/components/Services";
import { WhyLexpro } from "@/components/WhyLexpro";
import { Process } from "@/components/Process";
import { Industries } from "@/components/Industries";
import { Testimonials } from "@/components/Testimonials";
import { Metrics } from "@/components/Metrics";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <WhyLexpro />
        <Process />
        <Industries />
        <Testimonials />
        <Metrics />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
