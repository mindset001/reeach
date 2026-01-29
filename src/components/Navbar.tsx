"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Button from "./Button";
import { NAV_LINKS } from "@/constants/navigation";

interface NavbarProps {
  variant?: "default" | "dark";
  onJoinWaitlist?: () => void;
}

export default function Navbar({ variant = "default", onJoinWaitlist }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      // Check if scrolled past hero section (approximate height)
      setIsScrolled(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = variant === "dark";
  const logoSrc = (isDark && !isScrolled && isMounted) ? "/images/black-logo.png" : "/images/white-logo.png";
  const textColor = (isDark && !isScrolled && isMounted) ? "text-[#5F6368]" : "text-white";
  const hoverColor = (isDark && !isScrolled && isMounted) ? "hover:text-[#1C1C1C]" : "hover:text-white/80";
  const hamburgerBg = (isDark && !isScrolled && isMounted) ? "bg-gray-100" : "bg-[#EFEFEF1A]";
  const hamburgerHoverBg = (isDark && !isScrolled && isMounted) ? "hover:bg-gray-200" : "hover:bg-[#5A6A6F]";
  const hamburgerIconColor = (isDark && !isScrolled && isMounted) ? "bg-gray-800" : "bg-white";

  return (
    <>
      <nav className={`fixed top-0 h-[66px] left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black opacity-60" : "bg-transparent backdrop-blur-[4px]"
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
           <div className="flex items-center gap-8">
               {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={logoSrc}
                alt="Reeach Logo"
                width={60}
                height={40}
                className="h-4 w-auto"
              />
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${textColor} text-[17px] font-medium ${hoverColor} transition-colors`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
           </div>

            <div className="flex items-center gap-4 border py-2 px-4 rounded-[24px]">
              {/* CTA Button - hidden on mobile */}
              <button
               
                className={`hidden md:inline-flex text-[16px] ${
                  isDark && !isScrolled 
                    ? "border-[#5F6368] text-[#5F6368] hover:bg-gray-100 hover:text-[#1C1C1C]" 
                    : "border-white/30 text-white hover:bg-white/10"
                }`}
                onClick={() => onJoinWaitlist?.()}
              >
                Be an early user
              </button>

              {/* Hamburger Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`md:hidden w-[36px] h-[26px] flex items-center justify-center ${hamburgerBg} rounded-[12px] ${hamburgerHoverBg} transition-colors`}
                aria-label="Toggle menu"
              >
                <div className="w-5 flex flex-col gap-[2px]">
                  <span className={`h-[2px] w-full ${hamburgerIconColor} rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                  <span className={`h-[2px] w-full ${hamburgerIconColor} rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                  <span className={`h-[2px] w-full ${hamburgerIconColor} rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
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
          <div className="flex items-center justify-between px-6 py-4 ">
            <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
              <Image
                src="/images/logo.png"
                alt="Reeach Logo"
                width={100}
                height={32}
                className="h-4 w-auto"
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
          <div className="fixed bottom-0 left-0 right-0 px-6 py-8 bg-white ">
            <div className="flex gap-4">
              <button className="bg-[#E64D0B] rounded-[24px] flex-1 p-2" onClick={() => { setIsMenuOpen(false); onJoinWaitlist?.(); }}>
                <p className="font-SemiBold text-[16px]">Join waitlist</p>
              </button>
              <button className="flex-1" onClick={() => setIsMenuOpen(false)}>
                <p className="font-SemiBold text-[#1C1C1C] text-[16px]">Learn More</p>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
