"use client";

import Link from "next/link";
import { Linkedin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-slate-950 border-t border-white/5 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 items-start">
                    {/* Column 1: Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2 group">
                            <span className="text-2xl font-bold tracking-widest text-white">
                                IQ<span className="text-iqon-red animate-pulse">ON</span>
                            </span>
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Intelligence. Switched On.
                        </p>
                    </div>

                    {/* Column 2: Locations */}
                    <div className="space-y-6">
                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                            Offshore & Onshore
                        </h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li>Canada (HQ)</li>
                            <li>UAE (AI Hub)</li>
                            <li>Bahrain (Regional)</li>
                            <li>Jordan (Delivery)</li>
                        </ul>
                    </div>

                    {/* Column 3: Expertise */}
                    <div className="space-y-6">
                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                            Expertise
                        </h4>
                        <ul className="space-y-3">
                            <li><Link href="/services/cyber" className="text-sm text-gray-400 hover:text-white transition-colors">Cyber Defense</Link></li>
                            <li><Link href="/services/ai" className="text-sm text-gray-400 hover:text-white transition-colors">AI Engineering</Link></li>
                            <li><Link href="/services/assurance" className="text-sm text-gray-400 hover:text-white transition-colors">Quality Assurance</Link></li>
                            <li><Link href="/services/academy" className="text-sm text-gray-400 hover:text-white transition-colors">Academy</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Legal & Social */}
                    <div className="space-y-6">
                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                            Legal
                        </h4>
                        <ul className="space-y-3">
                            <li><Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
                        </ul>
                        <div className="pt-4">
                            <a href="#" className="text-gray-400 hover:text-iqon-red transition-colors inline-block">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-white/5 text-center md:text-left">
                    <p className="text-xs text-gray-600">
                        &copy; 2025 IQON.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
