"use client";

import { useState } from "react";
import Button from "./Button";

export default function Hero() {
  const [email, setEmail] = useState("");

  const handleJoinWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle waitlist submission
    console.log("Email:", email);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/images/hero-bg.jpg)",
          backgroundSize: "cover",
          height: "100%",
          backgroundPosition: "center left",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-40 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-6 pt-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Every product.
              <br />
              Every store.
              <br />
              Every transaction.
              <br />
              Connected
            </h1>

            <p className="text-base text-white/90 max-w-md leading-relaxed">
              The AI-powered platform that connects how Africans find, buy, sell
              products & services. Real-time. Verified. Simple.
            </p>

            <div className="flex gap-4">
              <Button variant="primary" size="md">
                Join waitlist
              </Button>
              <Button variant="secondary" size="md">
                Learn more
              </Button>
            </div>
          </div>

          {/* Right Content - Waitlist Form */}
          <div className="flex justify-center md:justify-end pt-12 ">
            <div className="w-[595px] h-[652px] border border-white rounded-2xl p-8 w-full max-w-md min-h-[400px] flex flex-col justify-end">
              <form onSubmit={handleJoinWaitlist} className="space-y-6">
               

                <button
                  type="submit"
                  className="w-full px-6 py-4 rounded-full bg-white text-orange-600 font-semibold hover:bg-gray-100 transition-colors"
                >
                  Join waitlist
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
