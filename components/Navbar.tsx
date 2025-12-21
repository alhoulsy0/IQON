"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Globe, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { QertexLogo } from "./QertexLogo";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeRegion, setActiveRegion] = useState("Global (EN)");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-slate-950/80 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="flex items-center gap-2">
                            <QertexLogo className="w-8 h-8 md:w-10 md:h-10" />
                            <span className="text-2xl font-bold tracking-widest text-white uppercase">
                                Qer<span className="text-iqon-red animate-pulse">tex</span>
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <div className="relative group">
                            <button className="text-sm font-medium text-gray-300 hover:text-white flex items-center gap-1 transition-colors">
                                Services <ChevronDown className="w-4 h-4" />
                            </button>
                            {/* Dropdown */}
                            <div className="absolute top-full left-0 mt-2 w-48 bg-slate-900 border border-white/10 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                                <div className="p-2">
                                    <Link href="/services/assurance" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg">
                                        Software Quality
                                    </Link>
                                    <Link href="/services/ai" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg">
                                        AI Technology
                                    </Link>
                                    <Link href="/services/cyber" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg">
                                        Cybersecurity
                                    </Link>
                                    <Link href="/services/academy" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg">
                                        Qertex Academy
                                    </Link>
                                    <Link href="/services/staffing" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg">
                                        Technical Staffing
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="relative group">
                            <button className="text-sm font-medium text-gray-300 hover:text-white flex items-center gap-1 transition-colors">
                                Products <ChevronDown className="w-4 h-4" />
                            </button>
                            {/* Dropdown */}
                            <div className="absolute top-full left-0 mt-2 w-56 bg-slate-900 border border-white/10 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                                <div className="p-2">
                                    <Link href="/products/aurora" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg">
                                        AURORA™ Platform
                                    </Link>
                                    <Link href="/products/risk-lens" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg">
                                        Qertex Assessment™
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <Link href="/projects" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                            Projects
                        </Link>
                        <Link href="/profile" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                            Profile
                        </Link>
                        <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                            About
                        </Link>
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-6">
                        <Link
                            href="/contact"
                            className="px-6 py-2.5 bg-white/10 hover:bg-iqon-red text-white text-sm font-bold rounded-full transition-all duration-300 border border-white/5 hover:border-iqon-red/50"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-slate-950 border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-4 py-6 space-y-4">
                            <div className="space-y-2">
                                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Services</span>
                                <Link href="/services/staffing" className="block text-lg font-medium text-gray-300 hover:text-white">
                                    Technical Staffing
                                </Link>
                                <Link href="/services/ai" className="block text-lg font-medium text-gray-300 hover:text-white">
                                    AI & Cyber
                                </Link>
                            </div>

                            <div className="space-y-2 pt-4 border-t border-white/5">
                                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Products</span>
                                <Link href="/products/aurora" className="block text-lg font-medium text-gray-300 hover:text-white">
                                    AURORA™ Platform
                                </Link>
                                <Link href="/products/risk-lens" className="block text-lg font-medium text-gray-300 hover:text-white">
                                    Qertex Assessment™
                                </Link>
                            </div>

                            <div className="space-y-2 pt-4 border-t border-white/5">
                                <Link href="/projects" className="block text-lg font-medium text-gray-300 hover:text-white">
                                    Projects
                                </Link>
                                <Link href="/profile" className="block text-lg font-medium text-gray-300 hover:text-white">
                                    Company Profile
                                </Link>
                                <Link href="/about" className="block text-lg font-medium text-gray-300 hover:text-white">
                                    About
                                </Link>
                            </div>

                            <div className="pt-6">
                                <Link
                                    href="/contact"
                                    className="flex items-center justify-center w-full px-6 py-3 bg-iqon-red text-white font-bold rounded-lg hover:bg-red-700 transition-colors"
                                >
                                    Contact Us <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
