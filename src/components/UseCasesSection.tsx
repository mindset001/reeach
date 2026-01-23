"use client";

import { useState, useEffect } from "react";
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

  useEffect(() => {
    const handleScroll = () => {
      const sections = USER_TYPES.map((type) => {
        const element = document.getElementById(`${type.id}-section`);
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            id: type.id,
            top: rect.top,
            bottom: rect.bottom,
          };
        }
        return null;
      }).filter((section) => section !== null);

      // Find the section that is most visible in the viewport
      const viewportMiddle = window.innerHeight / 2;
      let closestSection = sections[0];
      let minDistance = Math.abs(sections[0]?.top || 0);

      sections.forEach((section) => {
        if (section) {
          // Check if section is in viewport
          if (section.top < viewportMiddle && section.bottom > 0) {
            const distance = Math.abs(section.top);
            if (distance < minDistance) {
              minDistance = distance;
              closestSection = section;
            }
          }
        }
      });

      if (closestSection && closestSection.id !== activeTab) {
        setActiveTab(closestSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeTab]);

  return (
    <>
      <section className="py-4 bg-white " id="use-cases">
        {/* Header */}
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-[16px] md:text-[16px] font-regular text-[#585757] md:text-[#1C1C1C] md:mb-4">
              Reeach is built to serve every player in the downstream supply
              chain.
            </h2>
            <p className="text-[16px] text-[#5F6368]">
              Here's what Reeach can do for you:
            </p>
          </div>
        </div>
      </section>

      {/* Tabs - Sticky - Outside section to work across all following sections */}
      <div className="sticky top-[66px] z-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-center ">
            <div className="inline-flex border overflow-x-auto scrollbar-hide border-[#F1D0C2] rounded-[88px] p-2 min-w-full md:min-w-0">
              <div className="flex justify-start md:justify-center gap-3 whitespace-nowrap w-full">
                {USER_TYPES.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => handleTabClick(type.id)}
                    className={`px-4 md:px-6 py-3 rounded-full text-[14px] font-medium transition-all duration-200 flex-shrink-0 ${
                      activeTab === type.id
                        ? "bg-[#FFF7F3] text-[#1C1C1C]"
                        : "text-[#5F6368] hover:text-[#1C1C1C] hover:bg-[#E64D0B] corsor-pointer"
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
