"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import FAQHero from "@/components/FAQHero";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import WaitlistModal from "@/components/WaitlistModal";

export default function FAQsPage() {
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
      <Navbar onJoinWaitlist={openWaitlistModal} />
      <FAQHero />
      <FAQSection />
      <Footer onJoinWaitlist={openWaitlistModal} />
      <WaitlistModal isOpen={isWaitlistModalOpen} onClose={closeWaitlistModal} initialUserType={selectedUserType} />
    </main>
  );
}
