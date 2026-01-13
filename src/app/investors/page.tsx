import Navbar from "@/components/Navbar";
import InvestorsHero from "@/components/InvestorsHero";
import InvestorsRaising from "@/components/InvestorsRaising";
import Footer from "@/components/Footer";

export default function InvestorsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <InvestorsHero />
      <InvestorsRaising />
      <Footer />
    </div>
  );
}
