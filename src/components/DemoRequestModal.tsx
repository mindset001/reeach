"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface DemoRequestModalProps {
    isOpen: boolean;
    onClose: () => void;
    userType: 'manufacturer' | 'distributor' | 'retailer';
}

export default function DemoRequestModal({ isOpen, onClose, userType }: DemoRequestModalProps) {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [location, setLocation] = useState("");
    const [excitedFeature, setExcitedFeature] = useState("");
    const [discussTopic, setDiscussTopic] = useState("");
    const [meetingTime, setMeetingTime] = useState("");

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const handleClose = () => {
        setFullName("");
        setEmail("");
        setLocation("");
        setExcitedFeature("");
        setDiscussTopic("");
        setMeetingTime("");
        onClose();
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({
            userType,
            fullName,
            email,
            location,
            excitedFeature,
            discussTopic,
            meetingTime
        });
        handleClose();
    };

    const getTitle = () => {
        switch(userType) {
            case 'manufacturer': return "Request a demo - Manufacturers";
            case 'distributor': return "Request a demo - Distributors";
            case 'retailer': return "Request a demo - Retailers";
        }
    };

    const getImageText = () => {
        switch(userType) {
            case 'manufacturer': return "manufacturers";
            case 'distributor': return "distributors";
            case 'retailer': return "retailers";
        }
    };

    if (!isOpen) return null;

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
                    {/* Left - Image with overlay text */}
                    <div className="hidden md:block relative rounded-l-lg overflow-hidden">
                        {/* Background Image */}
                        <Image 
                            src="/images/investor1.jpg"
                            alt="Demo background"
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* White Overlay */}
                        <div className="absolute inset-0 bg-white/70 z-[1]"></div>
                        
                        {/* Content */}
                        <div className="absolute inset-0 flex items-center justify-center p-12 z-10">
                            <div className="text-center space-y-2">
                                <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                                    Like to learn more?<br />
                                    We are happy to show you<br />
                                    around our solution
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    Request a demo to learn more over a dedicated<br />
                                    needs discovery session.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right - Form */}
                    <div className="p-8 md:p-10 overflow-y-auto max-h-[calc(90vh-4rem)]">
                        <h2 className="text-xl font-semibold text-[#1C1C1C] mb-6">
                            Request a demo for {getImageText()}
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
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
                                <label className="block text-sm text-[#5F6368] mb-2">Your location*</label>
                                <select
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-[#454545] hover:bg-[#FFF6F2] focus:bg-[#FFF6F2] focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent appearance-none bg-white bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3cpath%20d%3D%22M1%201.5L6%206.5L11%201.5%22%20stroke%3D%22%234A4A4A%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3c%2Fsvg%3E')] bg-[length:12px_8px] bg-[position:calc(100%-16px)_center] bg-no-repeat"
                                    required
                                >
                                    <option value="">Select your current location</option>
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
                                    <option value="outside-nigeria">Outside Nigeria</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm text-[#5F6368] mb-2">What feature are you most excited about*</label>
                                <select
                                    value={excitedFeature}
                                    onChange={(e) => setExcitedFeature(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-[#454545] hover:bg-[#FFF6F2] focus:bg-[#FFF6F2] focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent appearance-none bg-white bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3cpath%20d%3D%22M1%201.5L6%206.5L11%201.5%22%20stroke%3D%22%234A4A4A%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3c%2Fsvg%3E')] bg-[length:12px_8px] bg-[position:calc(100%-16px)_center] bg-no-repeat"
                                    required
                                >
                                    <option value="">Select</option>
                                    <option value="all">All</option>
                                    <option value="supply-chain-visibility">Complete visibility across supply chain</option>
                                    <option value="market-demand">Real-time market demand intelligence</option>
                                    <option value="distributors">Discover and manage new distributors</option>
                                    <option value="reduce-waste">Reduce production waste dramatically</option>
                                    <option value="validate-ideas">Validate product ideas easily</option>
                                    <option value="micro-market">Micro-Market Reward-ability</option>
                                    <option value="geography-basket">Geography-based basket analysis</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm text-[#5F6368] mb-2">What else would you like to discuss about?</label>
                                <textarea
                                    value={discussTopic}
                                    onChange={(e) => setDiscussTopic(e.target.value)}
                                    placeholder="Enter..."
                                    rows={4}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent resize-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-[#5F6368] mb-2">When would you like to have a meeting</label>
                                <input
                                    type="datetime-local"
                                    value={meetingTime}
                                    onChange={(e) => setMeetingTime(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-[#454545] focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 bg-[#E64D0B] text-white font-semibold rounded-[4px] hover:bg-[#E64A19] transition-colors mt-6"
                            >
                                Request demo
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
