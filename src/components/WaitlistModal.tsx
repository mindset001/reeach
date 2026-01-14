"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import One from '../../public/images/one.png';
import Two from '../../public/images/one.png';
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
    const [category, setCategory] = useState("");
    const [location, setLocation] = useState("");
    const [outlets, setOutlets] = useState("");
    const [primaryContact, setPrimaryContact] = useState("");
    const [excitedFeature, setExcitedFeature] = useState("");

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            if (initialUserType) {
                setSelectedWaitlist(initialUserType);
            }
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen, initialUserType]);

    const handleBack = () => {
        setSelectedWaitlist(null);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log({ 
            waitlistType: selectedWaitlist,
            fullName, 
            businessName,
            email, 
            phone,
            category,
            location,
            outlets,
            primaryContact,
            excitedFeature
        });
        // Close modal after submission
        onClose();
        // Reset form
        setSelectedWaitlist(null);
        setFullName("");
        setBusinessName("");
        setEmail("");
        setPhone("");
        setCategory("");
        setLocation("");
        setOutlets("");
        setPrimaryContact("");
        setExcitedFeature("");
    };

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
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
                
                <div className="relative bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden p-8">
                    <button
                        onClick={onClose}
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
                                                placeholder="E.g. Tunde Abdul"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm text-[#5F6368] mb-2">Email address*</label>
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="E.g. tunde@gmail.com"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm text-[#5F6368] mb-2">Phone number (Optional)*</label>
                                            <input
                                                type="tel"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                placeholder="+080..."
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm text-[#5F6368] mb-2">What feature are you most excited about*</label>
                                            <select
                                                value={excitedFeature}
                                                onChange={(e) => setExcitedFeature(e.target.value)}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3cpath%20d%3D%22M1%201.5L6%206.5L11%201.5%22%20stroke%3D%22%234A4A4A%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3c%2Fsvg%3E')] bg-[length:12px_8px] bg-[position:calc(100%-16px)_center] bg-no-repeat"
                                                required
                                            >
                                                <option value="">Select</option>
                                                <option value="product-search">Product Search</option>
                                                <option value="price-comparison">Price Comparison</option>
                                                <option value="delivery">Fast Delivery</option>
                                                <option value="tracking">Order Tracking</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm text-[#5F6368] mb-2">Your location*</label>
                                            <select
                                                value={location}
                                                onChange={(e) => setLocation(e.target.value)}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3cpath%20d%3D%22M1%201.5L6%206.5L11%201.5%22%20stroke%3D%22%234A4A4A%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3c%2Fsvg%3E')] bg-[length:12px_8px] bg-[position:calc(100%-16px)_center] bg-no-repeat"
                                                required
                                            >
                                                <option value="">Select your current location</option>
                                                <option value="lagos">Lagos</option>
                                                <option value="abuja">Abuja</option>
                                                <option value="kano">Kano</option>
                                                <option value="ibadan">Ibadan</option>
                                                <option value="port-harcourt">Port Harcourt</option>
                                                <option value="other">Other</option>
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
                                                placeholder="E.g. Tunde Abdul"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent"
                                                required
                                            />
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm text-[#5F6368] mb-2">Category</label>
                                                <select
                                                    value={category}
                                                    onChange={(e) => setCategory(e.target.value)}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3cpath%20d%3D%22M1%201.5L6%206.5L11%201.5%22%20stroke%3D%22%234A4A4A%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3c%2Fsvg%3E')] bg-[length:12px_8px] bg-[position:calc(100%-16px)_center] bg-no-repeat"
                                                >
                                                    <option value="">Select</option>
                                                    <option value="electronics">Electronics</option>
                                                    <option value="fashion">Fashion</option>
                                                    <option value="food">Food & Beverage</option>
                                                    <option value="pharmacy">Pharmacy</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>

                                            <div>
                                                <label className="block text-sm text-[#5F6368] mb-2">Number of outlets</label>
                                                <select
                                                    value={outlets}
                                                    onChange={(e) => setOutlets(e.target.value)}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3cpath%20d%3D%22M1%201.5L6%206.5L11%201.5%22%20stroke%3D%22%234A4A4A%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3c%2Fsvg%3E')] bg-[length:12px_8px] bg-[position:calc(100%-16px)_center] bg-no-repeat"
                                                >
                                                    <option value="">Select</option>
                                                    <option value="1">1</option>
                                                    <option value="2-5">2-5</option>
                                                    <option value="6-10">6-10</option>
                                                    <option value="11+">11+</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm text-[#5F6368] mb-2">Primary store location</label>
                                            <select
                                                value={location}
                                                onChange={(e) => setLocation(e.target.value)}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3cpath%20d%3D%22M1%201.5L6%206.5L11%201.5%22%20stroke%3D%22%234A4A4A%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3c%2Fsvg%3E')] bg-[length:12px_8px] bg-[position:calc(100%-16px)_center] bg-no-repeat"
                                            >
                                                <option value="">Select your current location</option>
                                                <option value="lagos">Lagos</option>
                                                <option value="abuja">Abuja</option>
                                                <option value="kano">Kano</option>
                                                <option value="ibadan">Ibadan</option>
                                                <option value="port-harcourt">Port Harcourt</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm text-[#5F6368] mb-2">Email address*</label>
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="+080..."
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm text-[#5F6368] mb-2">Phone number (Optional)*</label>
                                            <input
                                                type="tel"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                placeholder="+080..."
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm text-[#5F6368] mb-2">What feature are you most excited about*</label>
                                            <select
                                                value={excitedFeature}
                                                onChange={(e) => setExcitedFeature(e.target.value)}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3cpath%20d%3D%22M1%201.5L6%206.5L11%201.5%22%20stroke%3D%22%234A4A4A%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3c%2Fsvg%3E')] bg-[length:12px_8px] bg-[position:calc(100%-16px)_center] bg-no-repeat"
                                            >
                                                <option value="">Select</option>
                                                <option value="inventory">Inventory Management</option>
                                                <option value="visibility">Store Visibility</option>
                                                <option value="analytics">Analytics</option>
                                                <option value="supplier">Supplier Network</option>
                                            </select>
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
                                                placeholder="E.g. Tunde Abdul"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent"
                                                required
                                            />
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm text-[#5F6368] mb-2">Category</label>
                                                <select
                                                    value={category}
                                                    onChange={(e) => setCategory(e.target.value)}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3cpath%20d%3D%22M1%201.5L6%206.5L11%201.5%22%20stroke%3D%22%234A4A4A%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3c%2Fsvg%3E')] bg-[length:12px_8px] bg-[position:calc(100%-16px)_center] bg-no-repeat"
                                                >
                                                    <option value="">Select</option>
                                                    <option value="fmcg">FMCG</option>
                                                    <option value="electronics">Electronics</option>
                                                    <option value="pharmaceuticals">Pharmaceuticals</option>
                                                    <option value="wholesale">Wholesale</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>

                                            <div>
                                                <label className="block text-sm text-[#5F6368] mb-2">Primary location</label>
                                                <select
                                                    value={location}
                                                    onChange={(e) => setLocation(e.target.value)}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3cpath%20d%3D%22M1%201.5L6%206.5L11%201.5%22%20stroke%3D%22%234A4A4A%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3c%2Fsvg%3E')] bg-[length:12px_8px] bg-[position:calc(100%-16px)_center] bg-no-repeat"
                                                >
                                                    <option value="">Select</option>
                                                    <option value="lagos">Lagos</option>
                                                    <option value="abuja">Abuja</option>
                                                    <option value="kano">Kano</option>
                                                    <option value="ibadan">Ibadan</option>
                                                    <option value="port-harcourt">Port Harcourt</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm text-[#5F6368] mb-2">Name of primary contact*</label>
                                            <input
                                                type="text"
                                                value={primaryContact}
                                                onChange={(e) => setPrimaryContact(e.target.value)}
                                                placeholder="Select your current location"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm text-[#5F6368] mb-2">Email address*</label>
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="+080..."
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm text-[#5F6368] mb-2">Phone number (Optional)*</label>
                                            <input
                                                type="tel"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                placeholder="+080..."
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm text-[#5F6368] mb-2">What feature are you most excited about*</label>
                                            <select
                                                value={excitedFeature}
                                                onChange={(e) => setExcitedFeature(e.target.value)}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3cpath%20d%3D%22M1%201.5L6%206.5L11%201.5%22%20stroke%3D%22%234A4A4A%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3c%2Fsvg%3E')] bg-[length:12px_8px] bg-[position:calc(100%-16px)_center] bg-no-repeat"
                                            >
                                                <option value="">Select</option>
                                                <option value="market-intelligence">Market Intelligence</option>
                                                <option value="retailer-network">Retailer Network</option>
                                                <option value="logistics">Logistics</option>
                                                <option value="demand-forecasting">Demand Forecasting</option>
                                            </select>
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
                                                placeholder="E.g. Tunde Abdul"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent"
                                                required
                                            />
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm text-[#5F6368] mb-2">Category</label>
                                                <select
                                                    value={category}
                                                    onChange={(e) => setCategory(e.target.value)}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3cpath%20d%3D%22M1%201.5L6%206.5L11%201.5%22%20stroke%3D%22%234A4A4A%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3c%2Fsvg%3E')] bg-[length:12px_8px] bg-[position:calc(100%-16px)_center] bg-no-repeat"
                                                >
                                                    <option value="">Select</option>
                                                    <option value="food-beverage">Food & Beverage</option>
                                                    <option value="textiles">Textiles</option>
                                                    <option value="electronics">Electronics</option>
                                                    <option value="pharmaceuticals">Pharmaceuticals</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>

                                            <div>
                                                <label className="block text-sm text-[#5F6368] mb-2">Primary location</label>
                                                <select
                                                    value={location}
                                                    onChange={(e) => setLocation(e.target.value)}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3cpath%20d%3D%22M1%201.5L6%206.5L11%201.5%22%20stroke%3D%22%234A4A4A%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3c%2Fsvg%3E')] bg-[length:12px_8px] bg-[position:calc(100%-16px)_center] bg-no-repeat"
                                                >
                                                    <option value="">Select</option>
                                                    <option value="lagos">Lagos</option>
                                                    <option value="abuja">Abuja</option>
                                                    <option value="kano">Kano</option>
                                                    <option value="ibadan">Ibadan</option>
                                                    <option value="port-harcourt">Port Harcourt</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm text-[#5F6368] mb-2">Name of primary contact*</label>
                                            <input
                                                type="text"
                                                value={primaryContact}
                                                onChange={(e) => setPrimaryContact(e.target.value)}
                                                placeholder="Select your current location"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm text-[#5F6368] mb-2">Email address*</label>
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="+080..."
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm text-[#5F6368] mb-2">Phone number (Optional)*</label>
                                            <input
                                                type="tel"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                placeholder="+080..."
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm text-[#5F6368] mb-2">What feature are you most excited about*</label>
                                            <select
                                                value={excitedFeature}
                                                onChange={(e) => setExcitedFeature(e.target.value)}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3cpath%20d%3D%22M1%201.5L6%206.5L11%201.5%22%20stroke%3D%22%234A4A4A%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3c%2Fsvg%3E')] bg-[length:12px_8px] bg-[position:calc(100%-16px)_center] bg-no-repeat"
                                            >
                                                <option value="">Select</option>
                                                <option value="real-time-tracking">Real-time Product Tracking</option>
                                                <option value="consumer-insights">Consumer Insights</option>
                                                <option value="distribution-network">Distribution Network</option>
                                                <option value="sales-analytics">Sales Analytics</option>
                                            </select>
                                        </div>
                                    </>
                                )}

                                <button
                                    type="submit"
                                    className="w-full py-3 bg-[#E64D0B] text-white font-semibold rounded-[4px] hover:bg-[#E64A19] transition-colors mt-6"
                                >
                                    Get early access
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
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
                {/* Close Button */}
                <button
                    onClick={onClose}
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
                            className="border border-gray-200 rounded-lg p-4 hover:border-[#FF5722] transition-colors cursor-pointer"
                        >
                            <h3 className="font-semibold text-[#1C1C1C] mb-2 text-[20px]">
                                For Manufacturers
                            </h3>
                            <div className="aspect-video bg-gray-100 rounded-lg mb-3 overflow-hidden">
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
                            className="border border-gray-200 rounded-lg p-4 hover:border-[#FF5722] transition-colors cursor-pointer"
                        >
                            <h3 className="font-semibold text-[#1C1C1C] mb-2 text-[20px]">
                                For Distributors
                            </h3>
                            <div className="aspect-video bg-gray-100 rounded-lg mb-3 overflow-hidden">
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
                            className="border border-gray-200 rounded-lg p-4 hover:border-[#FF5722] transition-colors cursor-pointer"
                        >
                            <h3 className="font-semibold text-[#1C1C1C] mb-2 text-[20px]">
                                For SMEs/Retailers
                            </h3>
                            <div className="aspect-video bg-gray-100 rounded-lg mb-3 overflow-hidden">

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
                            className="border border-gray-200 rounded-lg p-4 hover:border-[#FF5722] transition-colors cursor-pointer"
                        >
                            <h3 className="font-semibold text-[#1C1C1C] mb-2 text-[20px]">
                                For Consumers
                            </h3>
                            <div className="aspect-video bg-gray-100 rounded-lg mb-3 overflow-hidden">
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
