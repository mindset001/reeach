"use client";

import { useState } from "react";
import { FAQ_CATEGORIES } from "@/constants/faqContent";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState("general");
  const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(0);

  const activeCategory = FAQ_CATEGORIES.find((cat) => cat.id === activeTab);

  const toggleQuestion = (index: number) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  return (
    <>
      <section className="pb-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 ">
            Frequently Asked Questions
          </h2>
        </div>
      </section>

      {/* Tabs - Sticky */}
      <div className="sticky top-[66px] z-40 bg-gray-50 pb-4 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex justify-center overflow-x-auto">
            <div className="inline-flex border border-[#F1D0C2] rounded-[88px] p-2 shadow-sm bg-white">
              <div className="flex justify-center gap-3 whitespace-nowrap">
                {FAQ_CATEGORIES.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveTab(category.id);
                      setOpenQuestionIndex(0);
                    }}
                    className={`px-6 py-3 rounded-full text-[14px] font-medium transition-all duration-200 flex-shrink-0 ${
                      activeTab === category.id
                        ? "bg-[#FFF7F3] text-[#1C1C1C]"
                        : "text-[#5F6368] hover:text-[#1C1C1C] hover:bg-[#E64D0B] cursor-pointer"
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-6 ">
          {/* Category Title */}
          {activeCategory && (
            <div className="max-w-4xl mx-auto mb-8 border-t border-b border-gray-200 py-4">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-700">
                {activeCategory.label === "General"
                  ? "General questions"
                  : activeCategory.label === "Manufacturers/Distributors"
                  ? `Manufacturers/Distributors - ${activeCategory.questions.length} related questions`
                  : activeCategory.label}
              </h3>
            </div>
          )}

          {/* Questions */}
          <div className="max-w-4xl mx-auto space-y-4 bg-[#FCFCFC]">
          {activeCategory?.questions.map((faq, index) => (
            <div
              key={index}
              className="bg-[#FCFCFC]  border-b border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-base md:text-lg font-medium text-gray-800 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-orange-500 flex-shrink-0 transition-transform duration-300 ${
                    openQuestionIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openQuestionIndex === index
                    ? "max-h-[1000px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed whitespace-pre-line">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>
    </>
  );
}
