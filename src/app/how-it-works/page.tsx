import Navbar from "@/components/Navbar";
import HowItWorksHero from "@/components/HowItWorksHero";
import HowItWorksContent from "@/components/HowItWorksContent";
import Footer from "@/components/Footer";

export default function HowItWorksPage() {
  return (
    <main>
      <Navbar variant="dark" />
     <div className="md:px-40 bg-white">
         <HowItWorksHero />
      <HowItWorksContent />
     </div>
      <Footer />
    </main>
  );
}
