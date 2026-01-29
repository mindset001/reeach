"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import FeatureCard from "./FeatureCard";
import DemoRequestModal from "./DemoRequestModal";
import {
  MANUFACTURER_FEATURES,
  ADDITIONAL_MANUFACTURER_FEATURES,
} from "@/constants/manufacturerFeatures";

interface ManufacturerSectionProps {
  onJoinWaitlist?: (userType?: string) => void;
}

export default function ManufacturerSection({ onJoinWaitlist }: ManufacturerSectionProps) {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => 
        (prev + 1) % ADDITIONAL_MANUFACTURER_FEATURES.length
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleFeatureClick = (index: number) => {
    setActiveFeature(index);
  };

  return (
    <section className="py-20 bg-[#fff]" id="manufacturer-section">
      <div className="container mx-auto ">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 px-6">
          <h2 className="text-[22px] md:text-[28px]font-bold text-gray-900 mb-4">
            Reeach for Manufacturers
          </h2>
          <p className="text-[14px] md:text-[16px] text-gray-600">
            Know where your products are. How they're selling. What customers
            actually want.<br className="font-[700] text-[#000]"/> In real time.
          </p>
        </div>

        {/* Main Features */}
        <div className="space-y-20 mb-20 md:px-20 px-8">
          {MANUFACTURER_FEATURES.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              image={feature.image}
              imagePosition={feature.imagePosition}
              onCtaClick={onJoinWaitlist}
            />
          ))}
      
        </div>

        {/* Additional Features */}
        <div className="bg-[#F6F7F6B2]  p-8 md:p-20">
          <h3 className="text-2xl md:text-center md:text-[28px] font-semibold text-[#585757] mb-8">
            There's more for manufacturers
          </h3>

          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <div className="md:w-[30%] space-y-4">
              {ADDITIONAL_MANUFACTURER_FEATURES.map((feature, index) => (
                <button
                  key={index}
                  onClick={() => handleFeatureClick(index)}
                  className={`w-full text-left relative pl-4 py-3 transition-all duration-300 ${
                    activeFeature === index
                      ? "bg-gradient-to-r from-[#FFF7F3] to-transparent"
                      : "hover:bg-gray-50/50"
                  }`}
                >
                  {/* Static border always visible */}
                  <div className="absolute left-0 top-4 bottom-0 w-[2px] h-[15px] bg-[#D9D9D9]" />
                  
                  {/* Animated progress border for active item */}
                  {activeFeature === index && (
                    <div className="absolute left-0  w-[2px] h-[2px] bg-[#E64D0B] animate-[fillDown_10s_linear_forwards]" />
                  )}
                  
                  <h4 className={`text-[18px] font-[600] mb-2 transition-colors ${
                    activeFeature === index ? "text-[#E64D0B]" : "text-[#1C1C1C]"
                  }`}>
                    {feature.title}
                  </h4>
                  {activeFeature === index && (
                    <p className="text-[#5F6368] text-[16px] font-[400] md:w-[90%] animate-in fade-in slide-in-from-left-2 duration-300">{feature.description}</p>
                  )}
                </button>
              ))}
                  <p className="text-[#5F6368] text-[16px]">See other unique features for manufacturers • <span className="text-[#E64D0B] cursor-pointer hover:underline" onClick={() => setIsDemoModalOpen(true)}>Request a demo / presentation</span></p>
            </div>

            <div className="md:w-[70%] flex items-center justify-center rounded-[16px]  md:min-h-[300px]  overflow-hidden">
              {ADDITIONAL_MANUFACTURER_FEATURES[activeFeature].image && (
                <Image
                  src={ADDITIONAL_MANUFACTURER_FEATURES[activeFeature].image}
                  alt={ADDITIONAL_MANUFACTURER_FEATURES[activeFeature].title}
                  width={400}
                  height={400}
                  className="w-full h-auto object-contain"
                />
              )}
              {!ADDITIONAL_MANUFACTURER_FEATURES[activeFeature].image && (
                <div className="text-center">
                  <h4 className="font-bold text-gray-900 mb-4 text-xl">
                    {ADDITIONAL_MANUFACTURER_FEATURES[activeFeature].title}
                  </h4>
                  <p className="text-gray-600">
                    {ADDITIONAL_MANUFACTURER_FEATURES[activeFeature].description}
                  </p>
                </div>
              )}
            </div>
          </div>

         <div className="text-center flex mt-6">
            <button
              onClick={() => onJoinWaitlist?.("manufacturer")}
              className="bg-[#E64D0B] text-white px-6 py-3 rounded-full font-[500] text-[16px] hover:bg-orange-700 transition-colors"
            >
              Be an early user
            </button>
          </div>
        </div>
      </div>

      <DemoRequestModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
        userType="manufacturer" 
      />
    </section>
  );
}
