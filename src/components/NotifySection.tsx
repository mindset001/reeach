"use client";

import Link from "next/link";

interface NotifySectionProps {
  onJoinWaitlist?: () => void;
}

export default function NotifySection({ onJoinWaitlist }: NotifySectionProps) {
  const handleClick = () => {
    onJoinWaitlist?.();
  };

  return (
    <section className="py-20 bg-[#F9F9F9]">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-medium text-[#1C1C1C] mb-6">
            Get notified immediately we launch
          </h2>

          <p className="text-[16px] text-[#5F6368] mb-8 max-w-xl mx-auto">
            Be among the first to know when Reeach goes live. Join our waitlist to get early access and exclusive updates.
          </p>

          {/* Call to Action Button */}
          <button
            onClick={handleClick}
            className="px-8 py-3 bg-[#1C1C1C] text-white text-[14px] font-medium rounded-full hover:bg-[#2C2C2C] transition-colors"
          >
            Join our waitlist
          </button>
        </div>
      </div>
    </section>
  );
}
