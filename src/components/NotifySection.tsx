"use client";

import { useState } from "react";
import Link from "next/link";

interface NotifySectionProps {
  onJoinWaitlist?: () => void;
}

export default function NotifySection({ onJoinWaitlist }: NotifySectionProps) {
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState("All of Reeach's products");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ email, product });
  };

  return (
    <section className="py-20 bg-[#F8F5F4]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-medium text-[#1C1C1C] mb-8">
            Get notified immediately we launch
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Two Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email Field */}
              <div className="text-left">
                <label htmlFor="email" className="block text-sm font-medium text-[#333333] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border bg-[white] border-[#E0E0E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E64D0B] text-[#333333] placeholder:text-[#333333]"
                  required
                />
              </div>

              {/* Product of Interest Field */}
              <div className="text-left">
                <label htmlFor="product" className="block text-sm font-medium text-[#333333] mb-2">
                  Product of interest
                </label>
                <select
                  id="product"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E64D0B] text-[#333333] bg-white appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%23333333' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                    backgroundPosition: "right 0.5rem center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "1.5em 1.5em",
                    paddingRight: "2.5rem"
                  }}
                >
                  <option value="All of Reeach's products">All of Reeach&apos;s products</option>
                  <option value="Consumer">Consumer</option>
                  <option value="Manufacturer">Manufacturer</option>
                  <option value="Distributor">Distributor</option>
                  <option value="Retailer">Retailer</option>
                </select>
              </div>
            </div>

            {/* Privacy Notice */}
            <p className="text-xs text-[#888888] text-left">
              I understand that my personal data will be processed <br className="hidden md:block"/> in accordance with Reeach&apos;s{" "}
              <Link href="/privacy" className="text-[#E64D0B] underline">
                Privacy Policy
              </Link>
            </p>

            {/* Submit Button */}
           <div className="flex justify-end">
             <div className="flex justify-center">
              <button
                type="submit"
                className="px-8 py-3 bg-[#E64D0B] text-white text-[14px] font-medium rounded-full hover:bg-[#FF5722] transition-colors"
              >
                Join launch list
              </button>
            </div>
           </div>
          </form>
        </div>
      </div>
    </section>
  );
}
