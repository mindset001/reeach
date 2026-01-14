"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import FAQHero from "@/components/FAQHero";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import WaitlistModal from "@/components/WaitlistModal";

export default function FAQsPage() {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const openWaitlistModal = () => setIsWaitlistModalOpen(true);
  const closeWaitlistModal = () => setIsWaitlistModalOpen(false);

  return (
    <main>
      <Navbar onJoinWaitlist={openWaitlistModal} />
      <FAQHero />
      <FAQSection />
      <Footer />
      <WaitlistModal isOpen={isWaitlistModalOpen} onClose={closeWaitlistModal} />
    </main>
  );
}
