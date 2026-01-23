"use client";

import Image from "next/image";
import FeatureCard from "./FeatureCard";
import {
  CONSUMER_FEATURES,
  ADDITIONAL_CONSUMER_FEATURES,
} from "@/constants/consumerFeatures";

interface ConsumerSectionProps {
  onJoinWaitlist?: () => void;
}

export default function ConsumerSection({ onJoinWaitlist }: ConsumerSectionProps) {

  return (
    <section className="py-20 bg-gray-50" id="consumer-section">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Reeach for Consumers
          </h2>
          <p className="text-lg text-gray-600">
            Shop smarter. Save time. Save money. Find anything you need from
            verified stores near you.
          </p>
        </div>

        {/* Main Features */}
        <div className="space-y-20 mb-20">
          {CONSUMER_FEATURES.map((feature) => (
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
        <div className="rounded-3xl md:p-8 md:p-12">
          <h3 className="text-2xl md:text-center md:text-[28px] font-semibold text-[#585757] mb-8">
            There's more for consumers
          </h3>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {ADDITIONAL_CONSUMER_FEATURES.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-[16px] p-6 hover:shadow-md transition-shadow border border-[#D9D9D9]"
              >
                <div className="bg-[#F6F3F3] rounded-[12px] min-h-[200px] mb-4 flex items-center justify-center overflow-hidden relative">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={400}
                    height={200}
                    className="object-contain w-full h-full"
                  />
                </div>
                <h4 className="text-[18px] font-[600] text-[#1C1C1C] mb-2">
                  {feature.title}
                </h4>
                <p className="text-[#5F6368] text-[14px] font-[400]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

           <div className="flex flex-col justify-start items-start mt-10">
            <div className="text-left mb-6">
            <p className="text-[#5F6368] text-[14px]">
              There are more than 18 unique features for retailers.
            </p>
          </div>

          <div className="text-left mt-6">
            <button
              onClick={onJoinWaitlist}
              className="bg-[#E64D0B] text-white px-6 py-3 rounded-full font-[500] text-[16px] hover:bg-orange-700 transition-colors"
            >
              Be an early user
            </button>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
