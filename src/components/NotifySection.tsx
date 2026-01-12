"use client";

import { useState } from "react";
import Link from "next/link";

export default function NotifySection() {
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState("all");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ email, product });
  };

  return (
    <section className="py-20 bg-[#F9F9F9]">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-medium text-[#1C1C1C] mb-8">
            Get notified immediately we launch
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Form Fields */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-[14px] text-[#5F6368] mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-[14px] text-[#1C1C1C] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent"
                  required
                />
              </div>

              {/* Product Dropdown */}
              <div>
                <label
                  htmlFor="product"
                  className="block text-[14px] text-[#5F6368] mb-2"
                >
                  Product of interest
                </label>
                <select
                  id="product"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-[14px] text-[#1C1C1C] focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3cpath%20d%3D%22M1%201.5L6%206.5L11%201.5%22%20stroke%3D%22%234A4A4A%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3c%2Fsvg%3E')] bg-[length:12px_8px] bg-[position:calc(100%-16px)_center] bg-no-repeat"
                >
                  <option value="all">All of Reeach&apos;s products</option>
                  <option value="manufacturer">Manufacturer Solutions</option>
                  <option value="distributor">Distributor Solutions</option>
                  <option value="retailer">Retailer Solutions</option>
                  <option value="consumer">Consumer Platform</option>
                </select>
              </div>
            </div>

            {/* Privacy Policy Text */}
            <p className="text-[12px] text-[#999999]">
              I understand that my personal data will be processed in accordance
              with Reeach&apos;s{" "}
              <Link
                href="/privacy-policy"
                className="text-[#FF5722] underline hover:text-[#E64A19]"
              >
                Privacy Policy
              </Link>
            </p>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-8 py-3 bg-[#1C1C1C] text-white text-[14px] font-medium rounded-full hover:bg-[#2C2C2C] transition-colors"
              >
                Join launch list
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
