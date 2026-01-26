"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TrademarkPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 h-[66px] left-0 right-0 z-50 bg-black">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              {/* Logo */}
              <a href="/" className="flex items-center gap-2">
                <img
                  src="/images/white-logo.png"
                  alt="Reeach Logo"
                  className="h-4 w-auto"
                />
              </a>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-6">
                <a href="/" className="text-white hover:text-white/80 transition-colors text-sm">
                  Use cases
                </a>
                <a href="/how-it-works" className="text-white hover:text-white/80 transition-colors text-sm">
                  How Reeach works
                </a>
                <a href="/faqs" className="text-white hover:text-white/80 transition-colors text-sm">
                  FAQs
                </a>
                <a href="/investors" className="text-white hover:text-white/80 transition-colors text-sm">
                  Investors
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* CTA Button - Desktop */}
              <button className="hidden md:block px-6 py-2 rounded-full border border-white text-white hover:bg-white hover:text-black transition-colors text-sm">
                Be an early user
              </button>

              {/* Hamburger Menu Button - Mobile */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden w-[36px] h-[26px] flex items-center justify-center bg-white/10 rounded-[12px] hover:bg-white/20 transition-colors"
                aria-label="Toggle menu"
              >
                <div className="w-5 flex flex-col gap-[2px]">
                  <span className={`h-[2px] w-full bg-white rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                  <span className={`h-[2px] w-full bg-white rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                  <span className={`h-[2px] w-full bg-white rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-[100] overflow-y-auto">
          {/* Header with Logo and Close Button */}
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <a href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
              <img
                src="/images/logo.png"
                alt="Reeach Logo"
                className="h-6 w-auto"
              />
            </a>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 5L5 15M5 5L15 15" stroke="#4A4A4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col px-6 py-6 pb-32">
            <a
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-[#5F6368] text-[15px] font-normal hover:text-[#FF5722] transition-colors py-3"
            >
              Use cases
            </a>
            <a
              href="/how-it-works"
              onClick={() => setIsMenuOpen(false)}
              className="text-[#5F6368] text-[15px] font-normal hover:text-[#FF5722] transition-colors py-3"
            >
              How Reeach works
            </a>
            <a
              href="/faqs"
              onClick={() => setIsMenuOpen(false)}
              className="text-[#5F6368] text-[15px] font-normal hover:text-[#FF5722] transition-colors py-3"
            >
              FAQs
            </a>
            <a
              href="/investors"
              onClick={() => setIsMenuOpen(false)}
              className="text-[#5F6368] text-[15px] font-normal hover:text-[#FF5722] transition-colors py-3"
            >
              Investors
            </a>
          </div>

          {/* Bottom Button */}
          <div className="fixed bottom-0 left-0 right-0 px-6 py-8 bg-white border-t">
            <button 
              className="w-full bg-[#E64D0B] text-white rounded-[24px] py-3 font-semibold text-[16px] hover:bg-[#E64A19] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Be an early user
            </button>
          </div>
        </div>
      )}
      
      <main className="container mx-auto px-6 py-20 pt-32">{/* Added pt-32 for navbar spacing */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Reeach Trademarks & Copyrights
          </h1>

          <div className="space-y-8 text-gray-700 leading-relaxed mt-12">
            {/* Header Info */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Reeach Technologies & Innovations Limited
              </h2>
              <p className="text-sm text-gray-600 mb-1">
                Effective Date: January 2026
              </p>
              <p className="text-sm text-gray-600">
                Last Updated: January 2026
              </p>
            </section>

            {/* 1. Overview */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Overview
              </h2>
              <p>
                This page provides information about the trademarks, service marks, copyrights, and other intellectual 
                property owned by Reeach Technologies & Innovations ("Reeach," "We," "Us," or "Our"). These intellectual 
                property rights are protected by Nigerian law, international treaties, and applicable laws in other 
                jurisdictions. Respect for intellectual property is fundamental to innovation. We protect our intellectual 
                property vigorous.
              </p>
            </section>

            {/* 2. Reeach Trademarks */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Reeach Trademarks
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                2.1 Registered and Pending Trademarks
              </h3>
              <p className="mb-3">
                The following trademarks are owned by Reeach Technologies & Innovations and are registered or pending 
                registration with the Nigerian Trademarks Registry and/or other trademark authorities:
              </p>
              <p className="text-sm text-gray-600 mb-4">
                Trademark|Status|Registration Number|REEACH|Registered/Pending|[Registration No.]SAYLES|Registered/
                Pending|Registration No.|SAYLES POINT|Registered/Pending|Registration No.|SCHAIN|Registered/
                Pending|Registration No.|RUIS|Registered/Pending|[Registration No.]
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                2.2 Word Marks
              </h3>
              <p className="mb-3">The following word marks are trademarks of Reeach:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>REEACH™</strong> — Our primary company and consumer app brand</li>
                <li><strong>SAYLES™</strong> — Our retailer operations and management platform</li>
                <li><strong>SAYLES POINT™</strong> — Our QR code-based retail interaction system</li>
                <li><strong>SCHAIN™</strong> — Our supply chain intelligence platform</li>
                <li><strong>RUIS™</strong> — Reeach Universal Inventory System, our master product database</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                2.3 Logos and Design Marks
              </h3>
              <p className="mb-3">The following visual marks are trademarks of Reeach:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Reeach Logo — The stylized REEACH wordmark and associated design elements</li>
                <li>Reeach App Icon — The distinctive icon used for our mobile applications</li>
                <li>SAYLES Logo — The stylized SAYLES wordmark and design</li>
                <li>SCHAIN Logo — The stylized SCHAIN wordmark and design</li>
                <li>RUIS Logo — The stylized RUIS wordmark and design</li>
                <li>Sayles Point QR Code Holder Design — The distinctive design of our physical QR code holders</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                2.4 Product and Service Names
              </h3>
              <p className="mb-3">The following product and service names are trademarks or trade names of Reeach:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Reeach Consumer App</li>
                <li>Reeach for Consumers</li>
                <li>SAYLES Retailer Platform</li>
                <li>SAYLES Command Center</li>
                <li>SCHAIN Supply Chain Intelligence</li>
                <li>RUIS Universal Inventory</li>
                <li>Mariana (internal operations platform)</li>
              </ul>
            </section>

            {/* 3. Trademark Usage Guidelines */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Trademark Usage Guidelines
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                3.1 General Rules
              </h3>
              <p className="mb-3">When referencing Reeach trademarks:</p>
              
              <p className="font-semibold mb-2">DO:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Use the trademark as an adjective followed by a generic noun (e.g., "SAYLES platform," "Reeach app")</li>
                <li>Use the correct trademark symbol (™ or ®) on first reference</li>
                <li>Use the trademark exactly as shown, including capitalization</li>
                <li>Distinguish the trademark from surrounding text (through capitalization, bold, or italics)</li>
              </ul>

              <p className="font-semibold mb-2">DO NOT:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use Reeach trademarks as nouns or verbs</li>
                <li>Modify, abbreviate, or alter the trademarks</li>
                <li>Use the trademarks in a way that suggests endorsement or sponsorship without permission</li>
                <li>Combine our trademarks with other words to create new terms</li>
                <li>Use our trademarks in your company name, product name, or domain name</li>
                <li>Use our trademarks in any manner that disparages Reeach or our products</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                3.2 Attribution Statement
              </h3>
              <p className="mb-3">When using our trademarks, include the following attribution statement:</p>
              <p className="italic text-gray-600 bg-gray-50 p-4 rounded">
                "REEACH, SAYLES, SAYLES POINT, SCHAIN, and RUIS are trademarks of Reeach Technologies & Innovations. 
                All rights reserved."
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                3.3 Authorized Uses
              </h3>
              <p className="mb-3"><strong>Without Permission:</strong> You may use our trademarks in the following ways without prior written permission:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Truthful references to Reeach, our products, or services (nominative fair use)</li>
                <li>News reporting and journalistic commentary</li>
                <li>Comparative advertising that is accurate and not misleading</li>
                <li>Academic and educational purposes</li>
              </ul>

              <p className="mb-3"><strong>With Permission Required:</strong> The following uses require prior written permission from Reeach:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-3">
                <li>Incorporating our trademarks in your own products, services, or marketing materials</li>
                <li>Using our trademarks in advertisements (other than comparative advertising)</li>
                <li>Creating logos or design marks incorporating our trademarks</li>
                <li>Using our trademarks in merchandise (t-shirts, promotional items, etc.)</li>
                <li>Using our trademarks in domain names, social media handles, or app names</li>
              </ul>
              <p className="text-sm">
                To request permission, contact us at operations@reeach.co.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                3.4 Partner and Integration Guidelines
              </h3>
              <p className="mb-3">If you are a business partner or have integrated with Reeach Services:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use only approved logos and assets provided by Reeach</li>
                <li>Follow any brand guidelines provided in your partnership agreement</li>
                <li>Obtain approval for marketing materials that feature our trademarks</li>
                <li>Do not imply a partnership or endorsement beyond what has been agreed</li>
              </ul>
            </section>

            {/* 4. Copyright Information */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Copyright Information
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                4.1 Reeach Copyrighted Works
              </h3>
              <p className="mb-4">
                The following categories of works are protected by copyright and owned by Reeach Technologies & 
                Innovations:
              </p>

              <p className="font-semibold mb-2">Software and Technology:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Reeach mobile applications (iOS and Android)</li>
                <li>SAYLES web and mobile platforms</li>
                <li>SCHAIN web platform</li>
                <li>RUIS database architecture and systems</li>
                <li>Internal developer tools</li>
                <li>AI algorithms and models</li>
                <li>Source code and object code</li>
              </ul>

              <p className="font-semibold mb-2">Content and Documentation:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Website content and design (www.reeach.co)</li>
                <li>User interface designs and graphics</li>
                <li>User guides, manuals, and help documentation</li>
                <li>Marketing materials and promotional content</li>
                <li>Training materials and videos</li>
                <li>Blog posts and articles</li>
                <li>Product descriptions created by Reeach</li>
              </ul>

              <p className="font-semibold mb-2">Visual Assets:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Logos and brand identity elements</li>
                <li>Icons and illustrations</li>
                <li>Photographs and images</li>
                <li>Videos and animations</li>
                <li>Infographics and data visualizations</li>
              </ul>

              <p className="font-semibold mb-2">Data and Databases:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>RUIS product database structure and compilation</li>
                <li>Service provider listings and categorizations</li>
                <li>Data organization and classification systems</li>
                <li>Analytics and reporting frameworks</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                4.2 Copyright Notice
              </h3>
              <p className="mb-2">
                All copyrighted materials bear or should be understood to include the following notice:
              </p>
              <p className="italic text-gray-600">
                © 2025-2026 Reeach Technologies & Innovations Limited. All Rights Reserved.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                4.3 Permitted Uses
              </h3>
              <p className="mb-3"><strong>Without Permission:</strong> You may use our copyrighted materials in the following ways:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Personal, non-commercial viewing of our website and applications</li>
                <li>Printing single copies for personal reference</li>
                <li>Sharing links to our content</li>
                <li>Fair use purposes (criticism, commentary, news reporting, education)</li>
                <li>As expressly permitted through our Services</li>
              </ul>

              <p className="mb-3"><strong>With Permission Required:</strong> The following uses require prior written permission:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-3">
                <li>Reproducing, distributing, or displaying our content</li>
                <li>Creating derivative works based on our content</li>
                <li>Using our content in commercial applications</li>
                <li>Incorporating our content in other products or services</li>
                <li>Translating our content into other languages</li>
              </ul>
              <p className="text-sm">
                To request permission, contact us at operations@reeach.co.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                4.4 User-Generated Content
              </h3>
              <p className="mb-3">
                Content created by users of our Services (reviews, photos, business information) is subject to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>The terms outlined in our Terms of Service</li>
                <li>The license granted to Reeach for platform operation</li>
                <li>The original creator's ownership rights</li>
                <li>Our moderation and content policies</li>
              </ul>
            </section>

            {/* 5. Third-Party Intellectual Property */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Third-Party Intellectual Property
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                5.1 Respect for Others' Rights
              </h3>
              <p className="mb-4">
                Reeach respects the intellectual property rights of others and expects our users to do the same. Our Services 
                must not be used to infringe on third-party intellectual property rights.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                5.2 Third-Party Trademarks
              </h3>
              <p className="mb-3">Our Services may display trademarks of third parties, including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-3">
                <li>Product brand names from manufacturers</li>
                <li>Logos of partner organizations</li>
                <li>Payment processor marks</li>
                <li>App store logos</li>
              </ul>
              <p>
                These trademarks remain the property of their respective owners and are used under license, fair use 
                principles, or with permission.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                5.3 Open Source Software
              </h3>
              <p>
                Our Services may incorporate open source software components. Information about open source licenses 
                and attributions is available upon request at operations@reeach.co.
              </p>
            </section>

            {/* 6. Reporting Intellectual Property Concerns */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Reporting Intellectual Property Concerns
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                6.1 DMCA and Copyright Infringement
              </h3>
              <p className="mb-3">
                If you believe that content on our Services infringes your copyright, please submit a notice containing:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4 mb-3">
                <li>Identification of the copyrighted work claimed to be infringed</li>
                <li>Identification of the material that is claimed to be infringing</li>
                <li>Your contact information (address, phone number, email)</li>
                <li>A statement that you have a good faith belief that the use is not authorized</li>
                <li>A statement that the information is accurate and that you are authorized to act on behalf of the copyright owner</li>
                <li>Your physical or electronic signature</li>
              </ol>
              <p className="mb-4">
                Submit copyright notices to: Email: operations@reeach.co
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                6.2 Trademark Concerns
              </h3>
              <p className="mb-3">
                If you believe that content on our Services infringes your trademark, please contact us at 
                operations@reeach.co with:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Identification of your trademark (registration details if applicable)</li>
                <li>Identification of the infringing content or use</li>
                <li>Your contact information</li>
                <li>A statement of your good faith belief that the use is unauthorized</li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                6.3 Counter-Notification
              </h3>
              <p className="mb-3">
                If you believe your content was wrongly removed due to a copyright claim, you may submit a counter-notification containing:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Identification of the material that was removed</li>
                <li>Your contact information</li>
                <li>A statement under penalty of perjury that you have a good faith belief the material was removed by mistake</li>
                <li>Consent to jurisdiction of Nigerian courts</li>
                <li>Your physical or electronic signature</li>
                <li>If Enforcement</li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                7.1 Protection of Rights
              </h3>
              <p className="mb-3">
                Reeach actively monitors and enforces its intellectual property rights. We may take action against 
                unauthorized use, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Sending cease and desist notices</li>
                <li>Pursuing administrative remedies</li>
                <li>Filing civil lawsuits</li>
                <li>Reporting criminal violations to authorities</li>
                <li>Seeking injunctive relief and damages</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                7.2 Consequences of Infringement
              </h3>
              <p className="mb-3">
                Unauthorized use of Reeach intellectual property may result in:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Account suspension or termination</li>
                <li>Legal action and liability for damages</li>
                <li>Criminal penalties under applicable law</li>
                <li>Injunctions prohibiting further use</li>
              </ul>
            </section>

            {/* 8. Licensing Inquiries */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Licensing Inquiries
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                8.1 Commercial Licensing
              </h3>
              <p className="mb-3">
                For commercial licensing of Reeach trademarks, logos, or copyrighted materials, please contact:
              </p>
              <p className="mb-3">Email: operations@reeach.co</p>
              <p className="mb-2">Include in your request:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Description of intended use</li>
                <li>Scope and duration of use</li>
                <li>Territory where materials will be used</li>
                <li>Your company information</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                8.2 Media and Press
              </h3>
              <p className="mb-3">
                For media inquiries, interviews, or press-related use of our trademarks and materials:
              </p>
              <p>Email: operations@reeach.co</p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                8.3 Partnership Opportunities
              </h3>
              <p className="mb-3">
                For strategic partnerships that may involve intellectual property arrangements:
              </p>
              <p>Email: operations@reeach.co</p>
            </section>

            {/* 9. Updates to This Notice */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Updates to This Notice
              </h2>
              <p className="mb-3">
                We may update this Trademarks & Copyrights notice to reflect:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-3">
                <li>New trademark registrations</li>
                <li>Updates to our intellectual property portfolio</li>
                <li>Changes in applicable laws</li>
                <li>Revisions to our usage guidelines</li>
              </ul>
              <p>
                Check this page periodically for updates. Material changes will be announced through our website.
              </p>
            </section>

            {/* 10. Contact Information */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                10. Contact Information
              </h2>
              <p className="mb-4 font-semibold">Reeach Technologies & Innovations</p>
              <p className="mb-2">General Inquiries:</p>
              <p className="mb-1">Email: operations@reeach.co</p>
              <p className="mb-4">Website: www.reeach.co</p>
            </section>

            {/* 11. Intellectual Property Statement */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                11. Intellectual Property Statement
              </h2>
              <p className="mb-4">
                All intellectual property rights in and to the Reeach name, logos, products, services, websites, applications, 
                and related materials are the exclusive property of Reeach Technologies & Innovations or its licensors.
              </p>
              <p className="mb-4">
                Nothing in these pages should be construed as granting any license or right to use any trademark, logo, or 
                other intellectual property without the express written permission of Reeach.
              </p>
              <p className="mb-4">
                The absence of a trademark, service mark, or copyright notice does not indicate that the intellectual property 
                is not protected. Reeach reserves all rights not expressly granted herein.
              </p>
              <p className="italic text-gray-600">
                © 2025-2026 Reeach Technologies & Innovations Limited. All Rights Reserved.<br />
                REEACH™, SAYLES™, SAYLES POINT™, SCHAIN™, and RUIS™ are trademarks of Reeach Technologies & 
                Innovations.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer onJoinWaitlist={() => {}} />
    </div>
  );
}
