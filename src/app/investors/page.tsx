"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import InvestorsHero from "@/components/InvestorsHero";
import InvestorsRaising from "@/components/InvestorsRaising";
import Footer from "@/components/Footer";
import WaitlistModal from "@/components/WaitlistModal";

export default function InvestorsPage() {
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
    <div className="min-h-screen">
      <Navbar onJoinWaitlist={openWaitlistModal} />
      <InvestorsHero />
      <InvestorsRaising />
      <Footer onJoinWaitlist={openWaitlistModal} />
      <WaitlistModal isOpen={isWaitlistModalOpen} onClose={closeWaitlistModal} initialUserType={selectedUserType} />
    </div>
  );
}
