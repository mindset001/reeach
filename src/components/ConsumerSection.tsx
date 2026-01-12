"use client";

import { useState } from "react";
import FeatureCard from "./FeatureCard";
import {
  CONSUMER_FEATURES,
  ADDITIONAL_CONSUMER_FEATURES,
} from "@/constants/consumerFeatures";

export default function ConsumerSection() {
  const [activeFeature, setActiveFeature] = useState(0);

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
            />
          ))}
        </div>

        {/* Additional Features */}
        <div className=" rounded-3xl p-8 md:p-12 ">
          <h3 className="text-2xl text-center md:text-[28px] font-semibold text-[#585757] mb-8">
            There's more for consumers
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {ADDITIONAL_CONSUMER_FEATURES.map((feature, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`w-full text-left border-l-4 pl-4 py-3 transition-all ${
                    activeFeature === index
                      ? "border-[#E64D0B]"
                      : "border-[#D9D9D9]"
                  }`}
                >
                  <h4 className=" text-[#1C1C1C] text-[18px] font-[600] mb-2">
                    {feature.title}
                  </h4>
                  {activeFeature === index && (
                    <p className="text-[#5F6368] text-[16px] font-[400] w-[50%]">{feature.description}</p>
                  )}
                </button>
              ))}
            </div>

            <div className="bg-[#F6F3F3] flex items-center justify-center rounded-[16px] min-h-[300px] p-8">
              <div className="text-center">
                <h4 className="font-semibold text-[#585757] mb-4 text-xl">
                  {ADDITIONAL_CONSUMER_FEATURES[activeFeature].title}
                </h4>
                <p className="text-gray-600">
                  {ADDITIONAL_CONSUMER_FEATURES[activeFeature].description}
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <button className="text-[#E64D0B] font-regular text-[16px] hover:text-orange-700 transition-colors">
              Join waitlist
            </button>
            <button className="text-[#E64D0B] font-regular text-[16px] hover:text-gray-700 transition-colors">
              How it all works
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
