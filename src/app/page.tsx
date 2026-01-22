"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import UseCasesSection from "@/components/UseCasesSection";
import ManufacturerSection from "@/components/ManufacturerSection";
import DistributorSection from "@/components/DistributorSection";
import RetailerSection from "@/components/RetailerSection";
import ConsumerSection from "@/components/ConsumerSection";
import NotifySection from "@/components/NotifySection";
import Footer from "@/components/Footer";
import WaitlistModal from "@/components/WaitlistModal";

export default function Home() {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const [selectedUserType, setSelectedUserType] = useState<string | undefined>(undefined);

  const openWaitlistModal = (userType?: string) => {
    setSelectedUserType(userType);
    setIsWaitlistModalOpen(true);
  };
  const closeWaitlistModal = () => setIsWaitlistModalOpen(false);

  return (
    <div className="min-h-screen">
      <Navbar onJoinWaitlist={openWaitlistModal} />
      <Hero />
      <ProblemSection />
      <UseCasesSection />
      <ManufacturerSection onJoinWaitlist={openWaitlistModal} />
      <DistributorSection onJoinWaitlist={openWaitlistModal} />
      <RetailerSection onJoinWaitlist={openWaitlistModal} />
      <ConsumerSection onJoinWaitlist={openWaitlistModal} />
      <NotifySection onJoinWaitlist={openWaitlistModal} />
      <Footer onJoinWaitlist={openWaitlistModal} />
      <WaitlistModal isOpen={isWaitlistModalOpen} onClose={closeWaitlistModal} initialUserType={selectedUserType} />
    </div>
  );
}
