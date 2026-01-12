import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import UseCasesSection from "@/components/UseCasesSection";
import ManufacturerSection from "@/components/ManufacturerSection";
import DistributorSection from "@/components/DistributorSection";
import RetailerSection from "@/components/RetailerSection";
import ConsumerSection from "@/components/ConsumerSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProblemSection />
      <UseCasesSection />
      <ManufacturerSection />
      <DistributorSection />
      <RetailerSection />
      <ConsumerSection />
      <Footer />
    </div>
  );
}
