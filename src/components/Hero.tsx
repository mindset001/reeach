"use client";

import { useState } from "react";
import Button from "./Button";
import WaitlistModal from "./WaitlistModal";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="relative min-h-screen flex items-end md:items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/images/hero-bg.jpg)",
          backgroundSize: "cover",
          height: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay - darker on mobile for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 md:bg-gradient-to-r md:from-black/50 md:via-black/30 md:to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-40 md:py-40 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-6 md:pt-12">
            <h1 className="text-[32px] md:text-[44px] lg:text-[56px] font-bold text-white leading-tight">
              Every product.
              <br />
              Every store.
              <br />
              Every transaction.
              <br />
              Connected.
            </h1>

            <p className="text-sm md:text-base text-white/90 max-w-md leading-relaxed">
              The AI-powered platform that connects busy people in Africa find, buy, sell products & services that time. Verified. Simple.
            </p>

            <div className="flex flex-col md:flex-row gap-3 md:gap-4 max-w-sm">
              <Button variant="primary" size="md" onClick={openModal}>
                Join waitlist
              </Button>
              <Button variant="secondary" size="md">
                Learn more
              </Button>
            </div>
          </div>

          {/* Right Content - Waitlist Form - Hidden on mobile */}
          <div className="hidden md:flex justify-center md:justify-end pt-12">
            <div className="w-[595px] h-[652px] border border-white rounded-2xl p-8 w-full max-w-md min-h-[400px] flex flex-col justify-end">
              <button
                onClick={openModal}
                className="w-full px-6 py-4 rounded-full bg-white text-orange-600 font-semibold hover:bg-gray-100 transition-colors"
              >
                Join
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Waitlist Modal */}
      <WaitlistModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
}
