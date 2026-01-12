"use client";

import { useState } from "react";
import { USER_TYPES } from "@/constants/userTypes";

export default function UseCasesSection() {
  const [activeTab, setActiveTab] = useState<string>(USER_TYPES[0].id);

  const activeUserType = USER_TYPES.find((type) => type.id === activeTab);

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    const sectionId = `${id}-section`;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="py-20 bg-white" id="use-cases">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-[16px] font-regular text-[#1C1C1C] mb-4">
            Reeach is built to serve every player in the downstream supply
            chain.
          </h2>
          <p className="text-[16px] text-[#5F6368]">
            Here's what Reeach can do for you:
          </p>
        </div>

        {/* Tabs - Sticky */}
   <div className="flex justify-center">
         <div className="sticky top-0 z-40 bg-white w-[60%] py-2 border border-[#F1D0C2] rounded-[88px] mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {USER_TYPES.map((type) => (
              <button
                key={type.id}
                onClick={() => handleTabClick(type.id)}
                className={`px-6 py-3 rounded-full text-[14px] font-medium transition-all duration-200 ${
                  activeTab === type.id
                    ? "bg-[#FFF7F3] text-[#1C1C1C]"
                    : "text-[#585757]"
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>
   </div>

        {/* Content */}
        {/* <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              {activeUserType?.title}
            </h3>
            <ul className="space-y-4">
              {activeUserType?.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700 leading-relaxed">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div> */}
      </div>
    </section>
  );
}
