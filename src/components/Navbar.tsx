"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Button from "./Button";
import { NAV_LINKS } from "@/constants/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 h-[66px] left-0 right-0 z-50 bg-transparent backdrop-blur-[4px]">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
           <div className="flex items-center gap-8">
               {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/white-logo.png"
                alt="Reeach Logo"
                width={60}
                height={40}
                className="h-8 w-auto"
              />
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white text-[17px] font-medium hover:text-white/80 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
           </div>

            <div className="flex items-center gap-4">
              {/* CTA Button - hidden on mobile */}
              <Button variant="outline" size="sm" className="hidden md:inline-flex text-[16px]">
                Be an early user
              </Button>

              {/* Hamburger Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden w-[36px] h-[26px] flex items-center justify-center bg-[#EFEFEF1A] rounded-[12px] hover:bg-[#5A6A6F] transition-colors"
                aria-label="Toggle menu"
              >
                <div className="w-5 flex flex-col gap-[2px]">
                  <span className={`h-[2px] w-full bg-white rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                  <span className={`h-[2px] w-full bg-white rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                  <span className={`h-[2px] w-full bg-white rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-[100] overflow-y-auto">
          {/* Header with Logo and Close Button */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
              <Image
                src="/images/logo.png"
                alt="Reeach Logo"
                width={100}
                height={32}
                className="h-6 w-auto"
              />
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 5L5 15M5 5L15 15" stroke="#4A4A4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col px-6 py-6 pb-32">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-[#5F6368] text-[15px] font-normal hover:text-[#FF5722] transition-colors py-3"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Bottom Buttons */}
          <div className="fixed bottom-0 left-0 right-0 px-6 py-8 bg-white border-t border-gray-200">
            <div className="flex gap-4">
              <Button variant="primary" size="md" className="flex-1" onClick={() => setIsMenuOpen(false)}>
                Join waitlist
              </Button>
              <Button variant="secondary" size="md" className="flex-1" onClick={() => setIsMenuOpen(false)}>
                Learn more
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
