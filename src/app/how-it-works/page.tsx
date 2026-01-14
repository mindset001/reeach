"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HowItWorksHero from "@/components/HowItWorksHero";
import HowItWorksContent from "@/components/HowItWorksContent";
import Footer from "@/components/Footer";
import WaitlistModal from "@/components/WaitlistModal";

export default function HowItWorksPage() {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const openWaitlistModal = () => setIsWaitlistModalOpen(true);
  const closeWaitlistModal = () => setIsWaitlistModalOpen(false);

  return (
    <main>
      <Navbar variant="dark" onJoinWaitlist={openWaitlistModal} />
     <div className="md:px-40 bg-white">
         <HowItWorksHero />
      <HowItWorksContent />
     </div>
      <Footer />
      <WaitlistModal isOpen={isWaitlistModalOpen} onClose={closeWaitlistModal} />
    </main>
  );
}
