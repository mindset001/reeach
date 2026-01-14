"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import InvestorsHero from "@/components/InvestorsHero";
import InvestorsRaising from "@/components/InvestorsRaising";
import Footer from "@/components/Footer";
import WaitlistModal from "@/components/WaitlistModal";

export default function InvestorsPage() {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const openWaitlistModal = () => setIsWaitlistModalOpen(true);
  const closeWaitlistModal = () => setIsWaitlistModalOpen(false);

  return (
    <div className="min-h-screen">
      <Navbar onJoinWaitlist={openWaitlistModal} />
      <InvestorsHero />
      <InvestorsRaising />
      <Footer />
      <WaitlistModal isOpen={isWaitlistModalOpen} onClose={closeWaitlistModal} />
    </div>
  );
}
