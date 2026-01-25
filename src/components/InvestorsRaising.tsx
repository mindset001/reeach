"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  INVESTOR_TABS,
  OPPORTUNITY_SECTIONS,
  OPPORTUNITY_SLIDES,
  SOLUTION_SECTIONS,
  SOLUTION_SLIDES,
  MORE_INFO_ITEMS,
  CONTACT_INFO,
} from "@/constants/investorsContent";

export default function InvestorsRaising() {
  const [activeTab, setActiveTab] = useState<string>(INVESTOR_TABS[0].id);
  const [activeSection, setActiveSection] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [solutionSlide, setSolutionSlide] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (activeTab === "opportunity") {
      interval = setInterval(() => {
        const nextSection = (activeSection + 1) % OPPORTUNITY_SECTIONS.length;
        setActiveSection(nextSection);
        setCurrentSlide(nextSection);
      }, 10000);
    } else if (activeTab === "solution") {
      interval = setInterval(() => {
        const nextSection = (activeSection + 1) % SOLUTION_SECTIONS.length;
        setActiveSection(nextSection);
        setSolutionSlide(nextSection);
      }, 10000);
    }

    return () => clearInterval(interval);
  }, [activeTab, activeSection]);

  const handleSectionClick = (index: number) => {
    setActiveSection(index);
    if (activeTab === "opportunity") {
      setCurrentSlide(index);
    } else if (activeTab === "solution") {
      setSolutionSlide(index);
    }
  };

  const renderOpportunity = () => (
    <div className="grid md:grid-cols-[30%_70%] gap-8">
      {/* Left Sidebar */}
      <div className="space-y-4 order-2 md:order-1">
        {OPPORTUNITY_SECTIONS.map((section, index) => (
          <button
            key={section.id}
            onClick={() => handleSectionClick(index)}
            className={`w-full text-left relative pl-4 py-3 transition-all duration-300 ${
              activeSection === index
                ? "bg-gradient-to-r from-[#FFF7F3] to-transparent"
                : "hover:bg-gray-50/50"
            }`}
          >
            {/* Static border always visible */}
            <div className="absolute left-0 top-5 bottom-0 w-[2px] h-[14px] bg-[#D9D9D9] rounded-sm" />
            
            {/* Animated progress border for active item */}
            {activeSection === index && (
              <div className="absolute left-0 top-0 w-[2px] h-[20px] bg-[#E64D0B] animate-[fillDown_10s_linear_forwards]" />
            )}
            
            <h4 className={`text-[18px] font-[600] mb-2 transition-colors ${
              activeSection === index ? "text-[#E64D0B]" : "text-[#1C1C1C]"
            }`}>
              {section.title}
            </h4>
            {activeSection === index && (
              <p className="text-[#5F6368] text-[16px] font-[400] md:w-[90%] whitespace-pre-line leading-relaxed animate-in fade-in slide-in-from-left-2 duration-300">
                {section.subtitle}
              </p>
            )}
          </button>
        ))}
      </div>

      {/* Right Content Area */}
      <div className="space-y-4 order-1 md:order-2">
        <div className="relative rounded-[16px] overflow-hidden min-h-[500px] bg-[#000000] flex items-start py-10">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{
              backgroundImage: `url(${OPPORTUNITY_SLIDES[currentSlide].image})`,
            }}
          />
          <div className="flex z-50 justify-center text-white px-8">
            {/* Slide counter and nav in top-left */}
            <div className="w-1/5 hidden md:flex flex-col gap-3">
              <button
                onClick={() => {
                  const prevSlide = currentSlide > 0 ? currentSlide - 1 : OPPORTUNITY_SLIDES.length - 1;
                  setCurrentSlide(prevSlide);
                  setActiveSection(prevSlide);
                }}
                className="w-8 h-8 rounded-full border border-white/50 hover:border-white flex items-center justify-center transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 19V5M12 5L5 12M12 5L19 12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className="text-white text-sm font-medium">
                {currentSlide + 1}/{OPPORTUNITY_SLIDES.length}
              </div>
              <button
                onClick={() => {
                  const nextSlide = currentSlide < OPPORTUNITY_SLIDES.length - 1 ? currentSlide + 1 : 0;
                  setCurrentSlide(nextSlide);
                  setActiveSection(nextSlide);
                }}
                className="w-8 h-8 rounded-full border border-white/50 hover:border-white flex items-center justify-center transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 5V19M12 19L19 12M12 19L5 12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* Content */}
           <div className="w-4/5 flex ">
             <div className=" max-w-xl">
              <p className="text-sm font-medium mb-4 opacity-90 text-[#F1D0C2]">
                {OPPORTUNITY_SLIDES[currentSlide].label}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 whitespace-pre-line">
                {OPPORTUNITY_SLIDES[currentSlide].title}
              </h2>
              <hr className="mb-6"/>
              <p className="text-[16px] font-[300] md:text-lg leading-relaxed whitespace-pre-line opacity-90">
                {OPPORTUNITY_SLIDES[currentSlide].description}
              </p>
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSolution = () => (
    <div className="grid md:grid-cols-[40%_60%] gap-8">
      {/* Left Sidebar */}
      <div className="space-y-4 order-2 md:order-1">
        {SOLUTION_SECTIONS.map((section, index) => (
          <button
            key={section.id}
            onClick={() => handleSectionClick(index)}
            className={`w-full text-left relative pl-4 py-3 transition-all duration-300 ${
              activeSection === index
                ? "bg-gradient-to-r from-[#FFF7F3] to-transparent"
                : "hover:bg-gray-50/50"
            }`}
          >
            {/* Static border always visible */}
            <div className="absolute left-0 top-5 bottom-0 w-[2px] h-[14px] bg-[#D9D9D9]" />
            
            {/* Animated progress border for active item */}
            {activeSection === index && (
              <div className="absolute left-0 top-0 w-[2px] h-[20px] bg-[#E64D0B] animate-[fillDown_10s_linear_forwards]" />
            )}
            
            <h4 className={`text-[18px] font-[600] mb-2 transition-colors ${
              activeSection === index ? "text-[#E64D0B]" : "text-[#1C1C1C]"
            }`}>
              {section.title}
            </h4>
            {activeSection === index && (
              <p className="text-[#5F6368] text-[16px] font-[400] md:w-[90%] whitespace-pre-line leading-relaxed animate-in fade-in slide-in-from-left-2 duration-300">
                {section.subtitle}
              </p>
            )}
          </button>
        ))}
      </div>

      {/* Right Content Area */}
      <div className="space-y-4 order-1 md:order-2">
        <div className="relative rounded-[16px] overflow-hidden min-h-[500px] bg-[#76210A] flex  py-10">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{
              backgroundImage: `url(${SOLUTION_SLIDES[solutionSlide].image})`,
            }}
          />
          <div className=" flex justify-center  z-10 text-white px-8 ">
            {/* Slide counter and nav in top-left */}
            <div className="w-1/5 hidden md:flex flex-col gap-3">
              <button
                onClick={() => {
                  const prevSlide = solutionSlide > 0 ? solutionSlide - 1 : SOLUTION_SLIDES.length - 1;
                  setSolutionSlide(prevSlide);
                  setActiveSection(prevSlide);
                }}
                className="w-8 h-8 rounded-full border border-white/50 hover:border-white flex items-center justify-center transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 19V5M12 5L5 12M12 5L19 12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className="text-white text-sm font-medium">
                {solutionSlide + 1}/{SOLUTION_SLIDES.length}
              </div>
              <button
                onClick={() => {
                  const nextSlide = solutionSlide < SOLUTION_SLIDES.length - 1 ? solutionSlide + 1 : 0;
                  setSolutionSlide(nextSlide);
                  setActiveSection(nextSlide);
                }}
                className="w-8 h-8 rounded-full border border-white/50 hover:border-white flex items-center justify-center transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 5V19M12 19L19 12M12 19L5 12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* Content */}
          <div className="w-4/5">
              <div className="max-w-xl">
              <p className="text-sm font-medium mb-4 opacity-90 text-[#F1D0C2]">
                {SOLUTION_SLIDES[solutionSlide].label}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 whitespace-pre-line">
                {SOLUTION_SLIDES[solutionSlide].title}
              </h2>
              <p className="text-base md:text-lg leading-relaxed whitespace-pre-line opacity-90">
                {SOLUTION_SLIDES[solutionSlide].description}
              </p>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMoreInformation = () => (
    <div className="grid md:grid-cols-2 gap-12 md:divide-x divide-gray-300">
      {/* Left Side - What we'll send */}
      <div className="md:pr-12">
        <h3 className="text-2xl font-semibold text-[#1C1C1C] mb-4">
          Learn more about what we're building.
        </h3>
        <p className="text-[#1C1C1C] mb-6">
          When we receive your email, we will be happy to send:
        </p>
        <ul className="space-y-4">
          {MORE_INFO_ITEMS.map((item, index) => (
            <li key={index} className="flex items-start gap-3 border-t pt-4">
              <span className=" bg-[#F9E9CA] rounded-full p-2 ">
                <div className="w-3 h-3 rounded-full bg-[#EA5228] flex-shrink-0" />
              </span>
              <span className="text-[#585757]">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side - Contact */}
      <div className="md:pl-12">
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
