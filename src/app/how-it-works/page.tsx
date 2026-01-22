"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HowItWorksHero from "@/components/HowItWorksHero";
import HowItWorksContent from "@/components/HowItWorksContent";
import Footer from "@/components/Footer";
import WaitlistModal from "@/components/WaitlistModal";

export default function HowItWorksPage() {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const [selectedUserType, setSelectedUserType] = useState<string | undefined>(undefined);
  
  const openWaitlistModal = (userType?: string) => {
    setSelectedUserType(userType);
    setIsWaitlistModalOpen(true);
  };
  
  const closeWaitlistModal = () => {
    setIsWaitlistModalOpen(false);
    setSelectedUserType(undefined);
  };

  return (
    <main>
      <Navbar variant="dark" onJoinWaitlist={openWaitlistModal} />
     <div className="md:px-40 bg-white">
         <HowItWorksHero />
      <HowItWorksContent />
     </div>
      <Footer onJoinWaitlist={openWaitlistModal} />
      <WaitlistModal isOpen={isWaitlistModalOpen} onClose={closeWaitlistModal} initialUserType={selectedUserType} />
    </main>
  );
}
