"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import One from '../../public/images/one.png';
import Two from '../../public/images/retailer.jpg';
import Three from '../../public/images/two.png';
import Four from '../../public/images/three.png';

import Five from '../../public/images/four.jpg';
import Six from '../../public/images/five.jpg';
import Seven from '../../public/images/six.jpg';
import Eight from '../../public/images/seven.jpg';

interface WaitlistModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialUserType?: string;
}

export default function WaitlistModal({ isOpen, onClose, initialUserType }: WaitlistModalProps) {
    const [selectedWaitlist, setSelectedWaitlist] = useState<string | null>(null);
    
    // Form fields
    const [fullName, setFullName] = useState("");
    const [businessName, setBusinessName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [category, setCategory] = useState<string[]>([]);
    const [location, setLocation] = useState("");
    const [outlets, setOutlets] = useState("");
    const [primaryContact, setPrimaryContact] = useState("");
    const [excitedFeature, setExcitedFeature] = useState<string[]>([]);
    
    // Dropdown states
    const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
    const [featureDropdownOpen, setFeatureDropdownOpen] = useState(false);
    
    // Submission states
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState("");

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            if (initialUserType) {
                setSelectedWaitlist(initialUserType);
            } else {
                setSelectedWaitlist(null);
            }
        } else {
            document.body.style.overflow = "unset";
            setSelectedWaitlist(null);
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen, initialUserType]);

    const handleBack = () => {
        setSelectedWaitlist(null);
    };

    const handleClose = () => {
        setSelectedWaitlist(null);
        setFullName("");
        setBusinessName("");
        setEmail("");
        setPhone("");
        setCategory([]);
        setLocation("");
        setOutlets("");
        setPrimaryContact("");
        setExcitedFeature([]);
        setCategoryDropdownOpen(false);
        setFeatureDropdownOpen(false);
        onClose();
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError("");
        
        try {
            // Prepare submission data based on user type
            const submissionData: any = {
                userType: selectedWaitlist,
                email,
                phone: phone || undefined,
                location: location || undefined,
            };

            // Add type-specific fields
            if (selectedWaitlist === 'consumer') {
                submissionData.fullName = fullName;
                submissionData.excitedFeatures = excitedFeature;
            } else {
                // Business types (retailer, distributor, manufacturer)
                submissionData.businessName = businessName;
                submissionData.category = category;
                submissionData.outlets = outlets || undefined;
                
                if (selectedWaitlist === 'distributor' || selectedWaitlist === 'manufacturer') {
                    submissionData.primaryContact = primaryContact;
                }
                
                submissionData.excitedFeatures = excitedFeature;
            }

            // Submit to backend API
            const response = await fetch('http://localhost:5000/api/waitlist/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(submissionData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to join waitlist');
            }

            // Show success state
            setSubmitSuccess(true);
            
            // Reset form after 2 seconds and close modal
            setTimeout(() => {
                handleClose();
                setSubmitSuccess(false);
            }, 2000);

        } catch (error: any) {
            setSubmitError(error.message || 'An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const toggleCategory = (value: string) => {
        setCategory(prev => 
            prev.includes(value) 
                ? prev.filter(item => item !== value)
                : [...prev, value]
        );
    };

    const toggleFeature = (value: string) => {
        setExcitedFeature(prev => 
            prev.includes(value) 
                ? prev.filter(item => item !== value)
                : [...prev, value]
        );
    };

    const categoryOptions = [
        { value: "multiple", label: "Multiple categories" },
        { value: "packaged-consumer-goods", label: "Packaged consumer goods" },
        { value: "fashion-apparel", label: "Fashion & Apparel" },
        { value: "electronics-phones", label: "Electronics & Phones" },
        { value: "pharmacy-health", label: "Pharmacy & Health" },
        { value: "food-beverage", label: "Food & Beverage Beverages" },
        { value: "drinks", label: "Drinks (Alcohol / Non-Alcohol)" },
        { value: "home-kitchen", label: "Home & Kitchen" },
        { value: "beauty-personal-care", label: "Beauty & Personal Care" },
        { value: "books-stationery", label: "Books & Stationery" },
        { value: "sports-outdoors", label: "Sports & Outdoors" },
        { value: "toys-games", label: "Toys & Games" },
        { value: "automotive-accessories", label: "Automotive & Accessories" },
        { value: "hardware-building", label: "Hardware & Building Materials" },
        { value: "services", label: "Services (Hair, Tailoring, Repairs etc.)" },
        { value: "groceries-supermarket", label: "Groceries & Supermarket" },
        { value: "agriculture-farming", label: "Agriculture & Farming Supplies" },
        { value: "cosmetics-skincare", label: "Cosmetics & Skincare" },
        { value: "furniture-home-decor", label: "Furniture & Home Decor" },
        { value: "mobile-airtime-data", label: "Mobile Airtime & Data" },
        { value: "other", label: "Other" }
    ];

    const retailerFeatureOptions = [
        { value: "be-found", label: "Be found by customers searching right now." },
        { value: "accept-payments", label: "Accept payments seamlessly" },
        { value: "build-loan-records", label: "Build loan-qualifying sales records" },
        { value: "manage-prices", label: "Manage product prices automatically" },
        { value: "manage-business", label: "Manage physical & online business together" },
        { value: "multiple-stores", label: "Manage multiple stores from one app" }
    ];

    const distributorFeatureOptions = [
        { value: "all", label: "All" },
        { value: "connect-manufacturers", label: "Connect with Reeach-vetted manufacturers" },
        { value: "optimize-supply-chain", label: "Optimize your supply chain" },
        { value: "supply-certainty", label: "Supply with intelligent certainty" },
        { value: "real-time-demand", label: "Real-time demand across retail network" },
        { value: "product-adoption", label: "See new product adoption rates in real time" },
        { value: "forecast-dead-stock", label: "Forecast dead stock possibilities" }
    ];

    const manufacturerFeatureOptions = [
        { value: "all", label: "All" },
        { value: "complete-visibility", label: "Complete visibility across supply chain" },
        { value: "real-time-market", label: "Real-time market demand intelligence" },
        { value: "discover-distributors", label: "Discover and manage new distributors" },
        { value: "reduce-waste", label: "Reduce production waste dramatically" },
        { value: "validate-ideas", label: "Validate product ideas easily" },
        { value: "micro-market-reward", label: "Micro-Market Reward-ability" },
        { value: "geography-basket", label: "Geography-based basket analysis" }
    ];

    if (!isOpen) return null;

    // Render form based on selected waitlist
    if (selectedWaitlist) {
        const getTitle = () => {
            switch(selectedWaitlist) {
                case 'consumer': return "Join Reeach's Consumers' waitlist";
                case 'retailer': return "Join Reeach's SME/Retailers' waitlist";
                case 'distributor': return "Join Reeach's Distributors' waitlist";
                case 'manufacturer': return "Join Reeach's Manufacturers' waitlist";
                default: return "";
            }
        };

        const getImage = () => {
            switch(selectedWaitlist) {
                case 'consumer': return One;
                case 'retailer': return Two;
                case 'distributor': return Three;
                case 'manufacturer': return Four;
                default: return "";
            }
        };

        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={handleClose} />
                
                <div className="relative bg-white shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden p-8">
                    <button
                        onClick={handleClose}
                        className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors z-10"
                        aria-label="Close modal"
                    >
                        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="grid md:grid-cols-2 h-full max-h-[calc(90vh-4rem)]">
                        {/* Left - Image */}
                        <div className="hidden md:block relative rounded-l-lg overflow-hidden">
                            {(() => {
                                const image = getImage();
                                return typeof image === 'string' ? (
                                    <img 
                                        src={image} 
                                        alt={getTitle()} 
                                        className="w-full h-full object-cover" 
                                    />
                                ) : (
                                    <Image 
                                        src={image} 
                                        alt={getTitle()} 
                                        className="w-full h-full object-cover"
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                );
                            })()}
                        </div>

                        {/* Right - Form */}
                        <div className="p-8 md:p-10 overflow-y-auto max-h-[calc(90vh-4rem)]">
                            <button
                                onClick={handleBack}
                                className="flex items-center text-gray-600 hover:text-gray-800 mb-6 text-sm"
                            >
                                <svg className="w-4 h-4 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M15 19l-7-7 7-7" />
                                </svg>
                                Back
                            </button>

                            <h2 className="text-xl font-semibold text-[#1C1C1C] mb-6">{getTitle()}</h2>

                            {/* Success Message */}
                            {submitSuccess && (
                                <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-[1px]">
                                    <p className="text-green-700 font-medium">✓ Successfully joined the waitlist!</p>
                                    <p className="text-green-600 text-sm mt-1">We'll notify you when we launch.</p>
                                </div>
                            )}

                            {/* Error Message */}
                            {submitError && (
                                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-[1px]">
                                    <p className="text-red-700 font-medium">✗ {submitError}</p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-4">{/* Consumer Form */}
                                {/* Consumer Form */}
                                {selectedWaitlist === 'consumer' && (
                                    <>
                                        <div>
                                            <label className="block text-sm text-[#5F6368] mb-2">Full name*</label>
                                            <input
                                                type="text"
                                                value={fullName}
                                                onChange={(e) => setFullName(e.target.value)}
                                                placeholder="e.g. Tunde Abdul"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-[1px] text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm text-[#5F6368] mb-2">Email address*</label>
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="e.g. tunde@gmail.com"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-[1px] text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm text-[#5F6368] mb-2">Phone number (Optional)*</label>
                                            <input
                                                type="tel"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                placeholder="080..."
                                                className="w-full px-4 py-3 border border-gray-300 rounded-[1px] text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent"
                                            />
                                        </div>

                                        <div className="relative">
                                            <label className="block text-sm text-[#5F6368] mb-2">What feature are you most excited about*</label>
                                            <div className="relative">
                                                <button
                                                    type="button"
                                                    onClick={() => setFeatureDropdownOpen(!featureDropdownOpen)}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-[1px] text-sm text-[#454545] hover:bg-[#FFF6F2] focus:bg-[#FFF6F2] focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent text-left flex justify-between items-center"
                                                >
                                                    <span className={excitedFeature.length === 0 ? "text-gray-400" : ""}>
                                                        {excitedFeature.length === 0 ? "Select features" : `${excitedFeature.length} selected`}
                                                    </span>
                                                    <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>
                                                {featureDropdownOpen && (
                                                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-[1px] shadow-lg max-h-60 overflow-y-auto">
                                                        <label className="flex items-center px-4 py-2 hover:bg-[#FFF6F2] cursor-pointer">
                                                            <input
                                                                type="checkbox"
                                                                checked={excitedFeature.includes('find-products')}
                                                                onChange={() => toggleFeature('find-products')}
                                                                className="mr-3 w-4 h-4 text-[#FF5722] border-gray-300 rounded focus:ring-[#FF5722]"
                                                            />
                                                            <span className="text-sm text-[#454545]">Find products or services in seconds, not hours</span>
                                                        </label>
                                                        <label className="flex items-center px-4 py-2 hover:bg-[#FFF6F2] cursor-pointer">
                                                            <input
                                                                type="checkbox"
                                                                checked={excitedFeature.includes('no-pos-friction')}
                                                                onChange={() => toggleFeature('no-pos-friction')}
                                                                className="mr-3 w-4 h-4 text-[#FF5722] border-gray-300 rounded focus:ring-[#FF5722]"
                                                            />
                                                            <span className="text-sm text-[#454545]">Buy without POS friction</span>
                                                        </label>
                                                        <label className="flex items-center px-4 py-2 hover:bg-[#FFF6F2] cursor-pointer">
                                                            <input
                                                                type="checkbox"
                                                                checked={excitedFeature.includes('buying-experience')}
                                                                onChange={() => toggleFeature('buying-experience')}
                                                                className="mr-3 w-4 h-4 text-[#FF5722] border-gray-300 rounded focus:ring-[#FF5722]"
                                                            />
                                                            <span className="text-sm text-[#454545]">Harmonized, superior buying experience</span>
                                                        </label>
                                                        <label className="flex items-center px-4 py-2 hover:bg-[#FFF6F2] cursor-pointer">
                                                            <input
                                                                type="checkbox"
                                                                checked={excitedFeature.includes('local-businesses')}
                                                                onChange={() => toggleFeature('local-businesses')}
                                                                className="mr-3 w-4 h-4 text-[#FF5722] border-gray-300 rounded focus:ring-[#FF5722]"
                                                            />
                                                            <span className="text-sm text-[#454545]">Discover the best local businesses</span>
                                                        </label>
                                                        <label className="flex items-center px-4 py-2 hover:bg-[#FFF6F2] cursor-pointer">
                                                            <input
                                                                type="checkbox"
                                                                checked={excitedFeature.includes('one-app')}
                                                                onChange={() => toggleFeature('one-app')}
                                                                className="mr-3 w-4 h-4 text-[#FF5722] border-gray-300 rounded focus:ring-[#FF5722]"
                                                            />
                                                            <span className="text-sm text-[#454545]">Do all commerce from one app</span>
                                                        </label>
                                                        <label className="flex items-center px-4 py-2 hover:bg-[#FFF6F2] cursor-pointer">
                                                            <input
                                                                type="checkbox"
                                                                checked={excitedFeature.includes('bnpl')}
                                                                onChange={() => toggleFeature('bnpl')}
                                                                className="mr-3 w-4 h-4 text-[#FF5722] border-gray-300 rounded focus:ring-[#FF5722]"
                                                            />
                                                            <span className="text-sm text-[#454545]">Unlock Buy Now Pay Later possibilities</span>
                                                        </label>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm text-[#5F6368] mb-2">Your location*</label>
                                            <select
                                                value={location}
                                                onChange={(e) => setLocation(e.target.value)}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-[1px] text-sm text-[#454545] hover:bg-[#FFF6F2] focus:bg-[#FFF6F2] focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3cpath%20d%3D%22M1%201.5L6%206.5L11%201.5%22%20stroke%3D%22%234A4A4A%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3c%2Fsvg%3E')] bg-[length:12px_8px] bg-[position:calc(100%-16px)_center] bg-no-repeat"
                                                required
                                            >
                                                <option value="">Select your current location</option>
                                                <option value="outside-nigeria">Outside Nigeria</option>
                                                <option value="abia">Abia</option>
                                                <option value="adamawa">Adamawa</option>
                                                <option value="akwa-ibom">Akwa Ibom</option>
                                                <option value="anambra">Anambra</option>
                                                <option value="bauchi">Bauchi</option>
                                                <option value="bayelsa">Bayelsa</option>
                                                <option value="benue">Benue</option>
                                                <option value="borno">Borno</option>
                                                <option value="cross-river">Cross River</option>
                                                <option value="delta">Delta</option>
                                                <option value="ebonyi">Ebonyi</option>
                                                <option value="edo">Edo</option>
                                                <option value="ekiti">Ekiti</option>
                                                <option value="enugu">Enugu</option>
                                                <option value="fct">FCT (Abuja)</option>
                                                <option value="gombe">Gombe</option>
                                                <option value="imo">Imo</option>
                                                <option value="jigawa">Jigawa</option>
                                                <option value="kaduna">Kaduna</option>
                                                <option value="kano">Kano</option>
                                                <option value="katsina">Katsina</option>
                                                <option value="kebbi">Kebbi</option>
                                                <option value="kogi">Kogi</option>
                                                <option value="kwara">Kwara</option>
                                                <option value="lagos">Lagos</option>
                                                <option value="nasarawa">Nasarawa</option>
                                                <option value="niger">Niger</option>
                                                <option value="ogun">Ogun</option>
                                                <option value="ondo">Ondo</option>
                                                <option value="osun">Osun</option>
                                                <option value="oyo">Oyo</option>
                                                <option value="plateau">Plateau</option>
                                                <option value="rivers">Rivers</option>
                                                <option value="sokoto">Sokoto</option>
                                                <option value="taraba">Taraba</option>
                                                <option value="yobe">Yobe</option>
                                                <option value="zamfara">Zamfara</option>
                                            </select>
                                        </div>
                                    </>
                                )}

                                {/* SME/Retailer Form */}
                                {selectedWaitlist === 'retailer' && (
                                    <>
                                        <div>
                                            <label className="block text-sm text-[#5F6368] mb-2">Business name*</label>
                                            <input
                                                type="text"
                                                value={businessName}
                                                onChange={(e) => setBusinessName(e.target.value)}
                                                placeholder="e.g. Tunde Abdul"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-[1px] text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent"
                                                required
                                            />
                                        </div>

                                        <div className="relative">
                                            <label className="block text-sm text-[#5F6368] mb-2">Category</label>
                                            <div className="relative">
                                                <button
                                                    type="button"
                                                    onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-[1px] text-sm text-[#454545] hover:bg-[#FFF6F2] focus:bg-[#FFF6F2] focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent text-left flex justify-between items-center"
                                                >
                                                    <span className={category.length === 0 ? "text-gray-400" : ""}>
                                                        {category.length === 0 ? "Select categories" : `${category.length} selected`}
                                                    </span>
                                                    <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>
                                                {categoryDropdownOpen && (
                                                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-[1px] shadow-lg max-h-60 overflow-y-auto">
                                                        {categoryOptions.map((option) => (
                                                            <label
                                                                key={option.value}
                                                                className="flex items-center px-4 py-2 hover:bg-[#FFF6F2] cursor-pointer"
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    checked={category.includes(option.value)}
                                                                    onChange={() => toggleCategory(option.value)}
                                                                    className="mr-3 w-4 h-4 text-[#FF5722] border-gray-300 rounded focus:ring-[#FF5722]"
                                                                />
                                                                <span className="text-sm text-[#454545]">{option.label}</span>
                                                            </label>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm text-[#5F6368] mb-2">Number of outlets</label>
                                            <select
                                                value={outlets}
                                                onChange={(e) => setOutlets(e.target.value)}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-[1px] text-sm text-[#454545] hover:bg-[#FFF6F2] focus:bg-[#FFF6F2] focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3cpath%20d%3D%22M1%201.5L6%206.5L11%201.5%22%20stroke%3D%22%234A4A4A%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3c%2Fsvg%3E')] bg-[length:12px_8px] bg-[position:calc(100%-16px)_center] bg-no-repeat"
                                            >
                                                <option value="">Select</option>
                                                <option value="0">0 (No shop)</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5+">5 or more</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm text-[#5F6368] mb-2">Primary store location</label>
                                            <select
                                                value={location}
                                                onChange={(e) => setLocation(e.target.value)}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-[1px] text-sm text-[#454545] hover:bg-[#FFF6F2] focus:bg-[#FFF6F2] focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3cpath%20d%3D%22M1%201.5L6%206.5L11%201.5%22%20stroke%3D%22%234A4A4A%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3c%2Fsvg%3E')] bg-[length:12px_8px] bg-[position:calc(100%-16px)_center] bg-no-repeat"
                                            >
                                                <option value="">Select your current location</option>
                                                <option value="outside-nigeria">Outside Nigeria</option>
                                                <option value="multiple-locations">Multiple locations (in more than one state)</option>
                                                <option value="abia">Abia</option>
                                                <option value="adamawa">Adamawa</option>
                                                <option value="akwa-ibom">Akwa Ibom</option>
                                                <option value="anambra">Anambra</option>
                                                <option value="bauchi">Bauchi</option>
                                                <option value="bayelsa">Bayelsa</option>
                                                <option value="benue">Benue</option>
                                                <option value="borno">Borno</option>
                                                <option value="cross-river">Cross River</option>
                                                <option value="delta">Delta</option>
                                                <option value="ebonyi">Ebonyi</option>
                                                <option value="edo">Edo</option>
                                                <option value="ekiti">Ekiti</option>
                                                <option value="enugu">Enugu</option>
                                                <option value="fct">FCT (Abuja)</option>
                                                <option value="gombe">Gombe</option>
                                                <option value="imo">Imo</option>
                                                <option value="jigawa">Jigawa</option>
                                                <option value="kaduna">Kaduna</option>
                                                <option value="kano">Kano</option>
                                                <option value="katsina">Katsina</option>
                                                <option value="kebbi">Kebbi</option>
                                                <option value="kogi">Kogi</option>
                                                <option value="kwara">Kwara</option>
                                                <option value="lagos">Lagos</option>
                                                <option value="nasarawa">Nasarawa</option>
                                                <option value="niger">Niger</option>
                                                <option value="ogun">Ogun</option>
                                                <option value="ondo">Ondo</option>
                                                <option value="osun">Osun</option>
                                                <option value="oyo">Oyo</option>
                                                <option value="plateau">Plateau</option>
                                                <option value="rivers">Rivers</option>
                                                <option value="sokoto">Sokoto</option>
                                                <option value="taraba">Taraba</option>
                                                <option value="yobe">Yobe</option>
                                                <option value="zamfara">Zamfara</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm text-[#5F6368] mb-2">Email address*</label>
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="e.g. tunde@gmail.com"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-[1px] text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm text-[#5F6368] mb-2">Phone number (Optional)*</label>
                                            <input
                                                type="tel"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                placeholder="080..."
                                                className="w-full px-4 py-3 border border-gray-300 rounded-[1px] text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent"
                                            />
                                        </div>

                                        <div className="relative">
                                            <label className="block text-sm text-[#5F6368] mb-2">What feature are you most excited about*</label>
                                            <div className="relative">
                                                <button
                                                    type="button"
                                                    onClick={() => setFeatureDropdownOpen(!featureDropdownOpen)}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-[1px] text-sm text-[#454545] hover:bg-[#FFF6F2] focus:bg-[#FFF6F2] focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent text-left flex justify-between items-center"
                                                >
                                                    <span className={excitedFeature.length === 0 ? "text-gray-400" : ""}>
                                                        {excitedFeature.length === 0 ? "Select features" : `${excitedFeature.length} selected`}
                                                    </span>
                                                    <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>
                                                {featureDropdownOpen && (
                                                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-[1px] shadow-lg max-h-60 overflow-y-auto">
                                                        {retailerFeatureOptions.map((option) => (
                                                            <label
                                                                key={option.value}
                                                                className="flex items-center px-4 py-2 hover:bg-[#FFF6F2] cursor-pointer"
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    checked={excitedFeature.includes(option.value)}
                                                                    onChange={() => toggleFeature(option.value)}
                                                                    className="mr-3 w-4 h-4 text-[#FF5722] border-gray-300 rounded focus:ring-[#FF5722]"
                                                                />
                                                                <span className="text-sm text-[#454545]">{option.label}</span>
                                                            </label>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </>
                                )}

                                {/* Distributor Form */}
                                {selectedWaitlist === 'distributor' && (
                                    <>
                                        <div>
                                            <label className="block text-sm text-[#5F6368] mb-2">Business name*</label>
                                            <input
                                                type="text"
                                                value={businessName}
                                                onChange={(e) => setBusinessName(e.target.value)}
                                                placeholder="e.g. Tunde Abdul"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-[1px] text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent"
                                                required
                                            />
                                        </div>

                                        <div className="relative">
                                            <label className="block text-sm text-[#5F6368] mb-2">Category</label>
                                            <div className="relative">
                                                <button
                                                    type="button"
                                                    onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-[1px] text-sm text-[#454545] hover:bg-[#FFF6F2] focus:bg-[#FFF6F2] focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent text-left flex justify-between items-center"
                                                >
                                                    <span className={category.length === 0 ? "text-gray-400" : ""}>
                                                        {category.length === 0 ? "Select categories" : `${category.length} selected`}
                                                    </span>
                                                    <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>
                                                {categoryDropdownOpen && (
                                                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-[1px] shadow-lg max-h-60 overflow-y-auto">
                                                        {categoryOptions.map((option) => (
                                                            <label
                                                                key={option.value}
                                                                className="flex items-center px-4 py-2 hover:bg-[#FFF6F2] cursor-pointer"
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    checked={category.includes(option.value)}
                                                                    onChange={() => toggleCategory(option.value)}
                                                                    className="mr-3 w-4 h-4 text-[#FF5722] border-gray-300 rounded focus:ring-[#FF5722]"
                                                                />
                                                                <span className="text-sm text-[#454545]">{option.label}</span>
                                                            </label>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm text-[#5F6368] mb-2">Number of outlets</label>
                                            <select
                                                value={outlets}
                                                onChange={(e) => setOutlets(e.target.value)}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-[1px] text-sm text-[#454545] hover:bg-[#FFF6F2] focus:bg-[#FFF6F2] focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3cpath%20d%3D%22M1%201.5L6%206.5L11%201.5%22%20stroke%3D%22%234A4A4A%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3c%2Fsvg%3E')] bg-[length:12px_8px] bg-[position:calc(100%-16px)_center] bg-no-repeat"
                                            >
                                                <option value="">Select</option>
                                                <option value="0">0 (No shop)</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5+">5 or more</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm text-[#5F6368] mb-2">Primary location</label>
                                            <select
                                                value={location}
                                                onChange={(e) => setLocation(e.target.value)}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-[1px] text-sm text-[#454545] hover:bg-[#FFF6F2] focus:bg-[#FFF6F2] focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3cpath%20d%3D%22M1%201.5L6%206.5L11%201.5%22%20stroke%3D%22%234A4A4A%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3c%2Fsvg%3E')] bg-[length:12px_8px] bg-[position:calc(100%-16px)_center] bg-no-repeat"
                                            >
                                                <option value="">Select your current location</option>
                                                <option value="outside-nigeria">Outside Nigeria</option>
                                                <option value="multiple-locations">Multiple locations (in more than one state)</option>
                                                <option value="abia">Abia</option>
                                                <option value="adamawa">Adamawa</option>
                                                <option value="akwa-ibom">Akwa Ibom</option>
                                                <option value="anambra">Anambra</option>
                                                <option value="bauchi">Bauchi</option>
                                                <option value="bayelsa">Bayelsa</option>
                                                <option value="benue">Benue</option>
                                                <option value="borno">Borno</option>
                                                <option value="cross-river">Cross River</option>
                                                <option value="delta">Delta</option>
                                                <option value="ebonyi">Ebonyi</option>
                                                <option value="edo">Edo</option>
                                                <option value="ekiti">Ekiti</option>
                                                <option value="enugu">Enugu</option>
                                                <option value="fct">FCT (Abuja)</option>
                                                <option value="gombe">Gombe</option>
                                                <option value="imo">Imo</option>
                                                <option value="jigawa">Jigawa</option>
                                                <option value="kaduna">Kaduna</option>
                                                <option value="kano">Kano</option>
                                                <option value="katsina">Katsina</option>
                                                <option value="kebbi">Kebbi</option>
                                                <option value="kogi">Kogi</option>
                                                <option value="kwara">Kwara</option>
                                                <option value="lagos">Lagos</option>
                                                <option value="nasarawa">Nasarawa</option>
                                                <option value="niger">Niger</option>
                                                <option value="ogun">Ogun</option>
                                                <option value="ondo">Ondo</option>
                                                <option value="osun">Osun</option>
                                                <option value="oyo">Oyo</option>
                                                <option value="plateau">Plateau</option>
                                                <option value="rivers">Rivers</option>
                                                <option value="sokoto">Sokoto</option>
                                                <option value="taraba">Taraba</option>
                                                <option value="yobe">Yobe</option>
                                                <option value="zamfara">Zamfara</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm text-[#5F6368] mb-2">Name of primary contact*</label>
                                            <input
                                                type="text"
                                                value={primaryContact}
                                                onChange={(e) => setPrimaryContact(e.target.value)}
                                                placeholder="e.g. Tunde Abdul"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-[1px] text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm text-[#5F6368] mb-2">Email address*</label>
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="e.g. tunde@gmail.com"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-[1px] text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm text-[#5F6368] mb-2">Phone number (Optional)*</label>
                                            <input
                                                type="tel"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                placeholder="080..."
                                                className="w-full px-4 py-3 border border-gray-300 rounded-[1px] text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent"
                                            />
                                        </div>

                                        <div className="relative">
                                            <label className="block text-sm text-[#5F6368] mb-2">What feature are you most excited about*</label>
                                            <div className="relative">
                                                <button
                                                    type="button"
                                                    onClick={() => setFeatureDropdownOpen(!featureDropdownOpen)}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-[1px] text-sm text-[#454545] hover:bg-[#FFF6F2] focus:bg-[#FFF6F2] focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent text-left flex justify-between items-center"
                                                >
                                                    <span className={excitedFeature.length === 0 ? "text-gray-400" : ""}>
                                                        {excitedFeature.length === 0 ? "Select features" : `${excitedFeature.length} selected`}
                                                    </span>
                                                    <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>
                                                {featureDropdownOpen && (
                                                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-[1px] shadow-lg max-h-60 overflow-y-auto">
                                                        {distributorFeatureOptions.map((option) => (
                                                            <label
                                                                key={option.value}
                                                                className="flex items-center px-4 py-2 hover:bg-[#FFF6F2] cursor-pointer"
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    checked={excitedFeature.includes(option.value)}
                                                                    onChange={() => toggleFeature(option.value)}
                                                                    className="mr-3 w-4 h-4 text-[#FF5722] border-gray-300 rounded focus:ring-[#FF5722]"
                                                                />
                                                                <span className="text-sm text-[#454545]">{option.label}</span>
                                                            </label>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </>
                                )}

                                {/* Manufacturer Form */}
                                {selectedWaitlist === 'manufacturer' && (
                                    <>
                                        <div>
                                            <label className="block text-sm text-[#5F6368] mb-2">Business name*</label>
                                            <input
                                                type="text"
                                                value={businessName}
                                                onChange={(e) => setBusinessName(e.target.value)}
                                                placeholder="e.g. Tunde Abdul"
                                                className="w-full px-4 py-3 border text-[#fff] border-gray-300 rounded-[1px] text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent"
                                                required
                                            />
                                        </div>

                                        <div className="relative">
                                            <label className="block text-sm text-[#5F6368] mb-2">Category</label>
                                            <div className="relative">
                                                <button
                                                    type="button"
                                                    onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-[1px] text-sm text-[#454545] hover:bg-[#FFF6F2] focus:bg-[#FFF6F2] focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent text-left flex justify-between items-center"
                                                >
                                                    <span className={category.length === 0 ? "text-gray-400" : ""}>
                                                        {category.length === 0 ? "Select categories" : `${category.length} selected`}
                                                    </span>
                                                    <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>
                                                {categoryDropdownOpen && (
                                                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-[1px] shadow-lg max-h-60 overflow-y-auto">
                                                        {categoryOptions.map((option) => (
                                                            <label
                                                                key={option.value}
                                                                className="flex items-center px-4 py-2 hover:bg-[#FFF6F2] cursor-pointer"
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    checked={category.includes(option.value)}
                                                                    onChange={() => toggleCategory(option.value)}
                                                                    className="mr-3 w-4 h-4 text-[#FF5722] border-gray-300 rounded focus:ring-[#FF5722]"
                                                                />
                                                                <span className="text-sm text-[#454545]">{option.label}</span>
                                                            </label>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm text-[#5F6368] mb-2">Primary location</label>
                                            <select
                                                value={location}
                                                onChange={(e) => setLocation(e.target.value)}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-[1px] text-sm text-[#454545] hover:bg-[#FFF6F2] focus:bg-[#FFF6F2] focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3cpath%20d%3D%22M1%201.5L6%206.5L11%201.5%22%20stroke%3D%22%234A4A4A%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3c%2Fsvg%3E')] bg-[length:12px_8px] bg-[position:calc(100%-16px)_center] bg-no-repeat"
                                            >
                                                <option value="">Select your current location</option>
                                                <option value="outside-nigeria">Outside Nigeria</option>
                                                <option value="multiple-locations">Multiple locations (in more than one state)</option>
                                                <option value="abia">Abia</option>
                                                <option value="adamawa">Adamawa</option>
                                                <option value="akwa-ibom">Akwa Ibom</option>
                                                <option value="anambra">Anambra</option>
                                                <option value="bauchi">Bauchi</option>
                                                <option value="bayelsa">Bayelsa</option>
                                                <option value="benue">Benue</option>
                                                <option value="borno">Borno</option>
                                                <option value="cross-river">Cross River</option>
                                                <option value="delta">Delta</option>
                                                <option value="ebonyi">Ebonyi</option>
                                                <option value="edo">Edo</option>
                                                <option value="ekiti">Ekiti</option>
                                                <option value="enugu">Enugu</option>
                                                <option value="fct">FCT (Abuja)</option>
                                                <option value="gombe">Gombe</option>
                                                <option value="imo">Imo</option>
                                                <option value="jigawa">Jigawa</option>
                                                <option value="kaduna">Kaduna</option>
                                                <option value="kano">Kano</option>
                                                <option value="katsina">Katsina</option>
                                                <option value="kebbi">Kebbi</option>
                                                <option value="kogi">Kogi</option>
                                                <option value="kwara">Kwara</option>
                                                <option value="lagos">Lagos</option>
                                                <option value="nasarawa">Nasarawa</option>
                                                <option value="niger">Niger</option>
                                                <option value="ogun">Ogun</option>
                                                <option value="ondo">Ondo</option>
                                                <option value="osun">Osun</option>
                                                <option value="oyo">Oyo</option>
                                                <option value="plateau">Plateau</option>
                                                <option value="rivers">Rivers</option>
                                                <option value="sokoto">Sokoto</option>
                                                <option value="taraba">Taraba</option>
                                                <option value="yobe">Yobe</option>
                                                <option value="zamfara">Zamfara</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm text-[#5F6368] mb-2">Name of primary contact*</label>
                                            <input
                                                type="text"
                                                value={primaryContact}
                                                onChange={(e) => setPrimaryContact(e.target.value)}
                                                placeholder="e.g. Tunde Abdul"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-[1px] text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm text-[#5F6368] mb-2">Email address*</label>
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="e.g. tunde@gmail.com"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-[1px] text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm text-[#5F6368] mb-2">Phone number (Optional)*</label>
                                            <input
                                                type="tel"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                placeholder="080..."
                                                className="w-full px-4 py-3 border border-gray-300 rounded-[1px] text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent"
                                            />
                                        </div>

                                        <div className="relative">
                                            <label className="block text-sm text-[#5F6368] mb-2">What feature are you most excited about*</label>
                                            <div className="relative">
                                                <button
                                                    type="button"
                                                    onClick={() => setFeatureDropdownOpen(!featureDropdownOpen)}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-[1px] text-sm text-[#454545] hover:bg-[#FFF6F2] focus:bg-[#FFF6F2] focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent text-left flex justify-between items-center"
                                                >
                                                    <span className={excitedFeature.length === 0 ? "text-gray-400" : ""}>
                                                        {excitedFeature.length === 0 ? "Select features" : `${excitedFeature.length} selected`}
                                                    </span>
                                                    <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>
                                                {featureDropdownOpen && (
                                                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-[1px] shadow-lg max-h-60 overflow-y-auto">
                                                        {manufacturerFeatureOptions.map((option) => (
                                                            <label
                                                                key={option.value}
                                                                className="flex items-center px-4 py-2 hover:bg-[#FFF6F2] cursor-pointer"
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    checked={excitedFeature.includes(option.value)}
                                                                    onChange={() => toggleFeature(option.value)}
                                                                    className="mr-3 w-4 h-4 text-[#FF5722] border-gray-300 rounded focus:ring-[#FF5722]"
                                                                />
                                                                <span className="text-sm text-[#454545]">{option.label}</span>
                                                            </label>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting || submitSuccess}
                                    className={`w-full py-3 text-white font-semibold rounded-[4px] transition-colors mt-6 ${
                                        isSubmitting || submitSuccess
                                            ? 'bg-gray-400 cursor-not-allowed'
                                            : 'bg-[#E64D0B] hover:bg-[#E64A19]'
                                    }`}
                                >
                                    {isSubmitting ? 'Submitting...' : submitSuccess ? 'Success!' : 'Get early access'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={handleClose}
            />

            {/* Modal */}
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors z-10"
                    aria-label="Close modal"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Modal Content */}
                <div className="p-8 md:p-12">
                    {/* Heading */}
                    <h2 className="text-3xl md:text-[24px] font-bold text-[#1C1C1C] mb-3">
                        Be an early user, Join a waitlist
                    </h2>

                    <p className="text-[#5F6368] mb-6 md:w-[55%] text-[16px]">
                        We are working hard to bring Reeach to businesses and consumers in Africa
                        as soon as possible. Join our waitlist and get notified immediately we launch.
                    </p>

                    <p className="text-[16px] text-[#5F6368] mb-8">
                        Select a waitlist to join, below
                    </p>

                    {/* Waitlist Options */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                        {/* For Manufacturers */}
                        <div 
                            onClick={() => setSelectedWaitlist('manufacturer')}
                            className="border border-gray-200 rounded-[1px] p-4 hover:border-[#FF5722] transition-colors cursor-pointer"
                        >
                            <h3 className="font-semibold text-[#1C1C1C] mb-2 text-[20px]">
                                For Manufacturers
                            </h3>
                            <div className="aspect-video bg-gray-100 rounded-[1px] mb-3 overflow-hidden">
                                <img
                                    src={Five.src}
                                    alt="For Manufacturers"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = "none";
                                    }}
                                />
                            </div>

                            <p className="text-sm text-[#5F6368]">
                                Know where your products are. How they're selling. What customers actually want. In real time.
                            </p>
                        </div>

                        {/* For Distributors */}
                        <div 
                            onClick={() => setSelectedWaitlist('distributor')}
                            className="border border-gray-200 rounded-[1px] p-4 hover:border-[#FF5722] transition-colors cursor-pointer"
                        >
                            <h3 className="font-semibold text-[#1C1C1C] mb-2 text-[20px]">
                                For Distributors
                            </h3>
                            <div className="aspect-video bg-gray-100 rounded-[1px] mb-3 overflow-hidden">
                                <img
                                    src={Six.src}
                                    alt="For Distributors"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = "none";
                                    }}
                                />
                            </div>

                            <p className="text-sm text-[#5F6368]">
                                See the market. Know what retailers need. Own the distribution.
                            </p>
                        </div>

                        {/* For SMEs/Retailers */}
                        <div 
                            onClick={() => setSelectedWaitlist('retailer')}
                            className="border border-gray-200 rounded-[1px] p-4 hover:border-[#FF5722] transition-colors cursor-pointer"
                        >
                            <h3 className="font-semibold text-[#1C1C1C] mb-2 text-[20px]">
                                For SMEs/Retailers
                            </h3>
                            <div className="aspect-video bg-gray-100 rounded-[1px] mb-3 overflow-hidden">

                                <img
                                    src={Seven.src}
                                    alt="For SMEs/Retailers"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = "none";
                                    }}
                                />
                            </div>

                            <p className="text-sm text-[#5F6368]">
                                Be completely visible, inventory, locations(s), availability. 24/7.
                            </p>
                        </div>

                        {/* For Consumers */}
                        <div 
                            onClick={() => setSelectedWaitlist('consumer')}
                            className="border border-gray-200 rounded-[1px] p-4 hover:border-[#FF5722] transition-colors cursor-pointer"
                        >
                            <h3 className="font-semibold text-[#1C1C1C] mb-2 text-[20px]">
                                For Consumers
                            </h3>
                            <div className="aspect-video bg-gray-100 rounded-[1px] mb-3 overflow-hidden">
                                <img
                                    src={Eight.src}
                                    alt="For Consumers"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = "none";
                                    }}
                                />
                            </div>

                            <p className="text-sm text-[#5F6368]">
                                Find it, buy it, get it, send it. Be in charge of all your consumer concerns. One app. Total control.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
