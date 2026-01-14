"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  INVESTOR_TABS,
  OPPORTUNITY_SECTIONS,
  OPPORTUNITY_SLIDES,
  SOLUTION_SECTIONS,
  SOLUTION_CONTENT,
  MORE_INFO_ITEMS,
  CONTACT_INFO,
} from "@/constants/investorsContent";

export default function InvestorsRaising() {
  const [activeTab, setActiveTab] = useState<string>(INVESTOR_TABS[0].id);
  const [activeSection, setActiveSection] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (activeTab === "opportunity") {
      interval = setInterval(() => {
        setActiveSection((prev) => (prev + 1) % OPPORTUNITY_SECTIONS.length);
      }, 5000);
    } else if (activeTab === "solution") {
      interval = setInterval(() => {
        setActiveSection((prev) => (prev + 1) % SOLUTION_SECTIONS.length);
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [activeTab]);

  const handleSectionClick = (index: number) => {
    setActiveSection(index);
  };

  const renderOpportunity = () => (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Left Sidebar */}
      <div className="space-y-4 order-2 md:order-1">
        {OPPORTUNITY_SECTIONS.map((section, index) => (
          <button
            key={section.id}
            onClick={() => handleSectionClick(index)}
            className={`w-full text-left border-l-4 pl-4 py-3 transition-all ${
              activeSection === index
                ? "border-[#E64D0B]"
                : "border-[#D9D9D9]"
            }`}
          >
            <h4 className="text-[#1C1C1C] text-[18px] font-[600] mb-2">
              {section.title}
            </h4>
            {activeSection === index && (
              <p className="text-[#5F6368] text-[16px] font-[400] md:w-[90%] whitespace-pre-line leading-relaxed">
                {section.subtitle}
              </p>
            )}
          </button>
        ))}
      </div>

      {/* Right Content Area */}
      <div className="relative rounded-[16px] overflow-hidden min-h-[400px] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center order-1 md:order-2">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: `url(${OPPORTUNITY_SLIDES[currentSlide].image})`,
          }}
        />
        <div className="relative z-10 text-center text-white px-8 py-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {OPPORTUNITY_SLIDES[currentSlide].title}
          </h2>
          <p className="text-lg md:text-2xl font-light leading-relaxed max-w-2xl mx-auto">
            {OPPORTUNITY_SLIDES[currentSlide].subtitle}
          </p>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
          {OPPORTUNITY_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === index ? "bg-white w-8" : "bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Arrow Navigation */}
        <button
          onClick={() =>
            setCurrentSlide((prev) =>
              prev > 0 ? prev - 1 : OPPORTUNITY_SLIDES.length - 1
            )
          }
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-colors"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 16L6 10L12 4"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          onClick={() =>
            setCurrentSlide((prev) =>
              prev < OPPORTUNITY_SLIDES.length - 1 ? prev + 1 : 0
            )
          }
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-colors"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 4L14 10L8 16"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );

  const renderSolution = () => (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Left Sidebar */}
      <div className="space-y-4 order-2 md:order-1">
        {SOLUTION_SECTIONS.map((section, index) => (
          <button
            key={section.id}
            onClick={() => handleSectionClick(index)}
            className={`w-full text-left border-l-4 pl-4 py-3 transition-all ${
              activeSection === index
                ? "border-[#E64D0B]"
                : "border-[#D9D9D9]"
            }`}
          >
            <h4 className="text-[#1C1C1C] text-[18px] font-[600] mb-2">
              {section.title}
            </h4>
            {activeSection === index && (
              <p className="text-[#5F6368] text-[16px] font-[400] md:w-[90%] whitespace-pre-line leading-relaxed">
                {section.subtitle}
              </p>
            )}
          </button>
        ))}
      </div>

      {/* Right Content Area */}
      <div className="relative rounded-[16px] overflow-hidden min-h-[400px] bg-[#E64D0B] flex items-center justify-center p-8 order-1 md:order-2">
        <div className="text-center text-white max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {SOLUTION_CONTENT.title}
            <br />
            {SOLUTION_CONTENT.subtitle}
          </h2>
          <p className="text-xl md:text-2xl font-semibold mb-6">
            {SOLUTION_CONTENT.tagline}
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            {SOLUTION_CONTENT.description}
          </p>
        </div>

        {/* Navigation Arrows */}
        <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-colors">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 16L6 10L12 4"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-colors">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 4L14 10L8 16"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );

  const renderMoreInformation = () => (
    <div className="grid md:grid-cols-2 gap-12">
      {/* Left Side - What we'll send */}
      <div>
        <h3 className="text-2xl font-semibold text-[#1C1C1C] mb-4">
          Learn more about what we're building.
        </h3>
        <p className="text-[#5F6368] mb-6">
          When we receive your email, we will be happy to send:
        </p>
        <ul className="space-y-4">
          {MORE_INFO_ITEMS.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[#E64D0B] mt-2 flex-shrink-0" />
              <span className="text-[#1C1C1C]">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side - Contact */}
      <div>
        <h3 className="text-2xl font-semibold text-[#1C1C1C] mb-6">
          Contact us:
        </h3>
        <div className="space-y-6">
          <div>
            <p className="text-[#5F6368] mb-2">Email:</p>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="text-[#E64D0B] hover:underline"
            >
              {CONTACT_INFO.email}
            </a>
          </div>
          <div>
            <p className="text-[#5F6368] mb-2">Founder Direct:</p>
            <a
              href={`mailto:${CONTACT_INFO.founderEmail}`}
              className="text-[#E64D0B] hover:underline"
            >
              {CONTACT_INFO.founderEmail}
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-[#F9F9F9]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1C1C1C] mb-8">
            Here's why we're raising a pre seed round.
          </h2>
        </div>

        {/* Tabs - Sticky */}
        <div className="sticky top-[66px] z-40 py-4 mb-8">
          <div className="flex justify-center">
            <div className="inline-flex bg-white rounded-full p-1 shadow-sm shadow-[#00000040] border border-gray-200">
              {INVESTOR_TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setActiveSection(0);
                  }}
                  className={`px-6 py-2 rounded-full text-[14px] font-medium transition-all ${
                    activeTab === tab.id
                      ? "bg-[#FFF7F3] text-[#1C1C1C]"
                      : "text-[#5F6368] hover:text-[#1C1C1C] hover:bg-[#E64D0B] corsor-pointer"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#1C1C1C] border-b border-t border-gray-300 py-4">
              {INVESTOR_TABS.find((tab) => tab.id === activeTab)?.label}
            </h3>
          </div>

          {activeTab === "opportunity" && renderOpportunity()}
          {activeTab === "solution" && renderSolution()}
          {activeTab === "information" && renderMoreInformation()}
        </div>
      </div>
    </section>
  );
}
