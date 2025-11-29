"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, Cloud, Code2, ArrowRight } from "lucide-react";
import Link from "next/link";

const tabs = [
    {
        id: "vapt",
        label: "VAPT & Red Teaming",
        icon: ShieldAlert,
        content: "We don't just scan; we exploit. Manual penetration testing for high-security banking apps, critical infrastructure, and government portals. Our Red Team simulations mimic real-world APTs to test your detection and response capabilities.",
    },
    {
        id: "cloud",
        label: "Cloud Hardening",
        icon: Cloud,
        content: "Zero-Trust Architecture implementation for AWS, Azure, and GCP. We secure your cloud perimeter, configure IAM policies, and ensure compliance with regional data sovereignty regulations.",
    },
    {
        id: "code",
        label: "Source Code Review",
        icon: Code2,
        content: "Finding vulnerabilities in the CI/CD pipeline before they reach production. We perform static and dynamic analysis (SAST/DAST) to identify logic flaws and security anti-patterns.",
    },
];

export default function CyberPage() {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <main className="min-h-screen bg-slate-950 pt-24">
            {/* Hero Section */}
            <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
                    >
                        Adversarial Simulation <br />
                        <span className="text-iqon-red">& Red Teaming</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 max-w-3xl mx-auto mb-12"
                    >
                        Proving your security posture against advanced persistent threats.
                    </motion.p>
                </div>
            </section>

            {/* Interactive Tabs */}
            <section className="py-24 bg-slate-900/50 border-y border-white/5">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`relative px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === tab.id
                                        ? "text-white bg-white/10 border border-iqon-red/50"
                                        : "text-gray-500 hover:text-white hover:bg-white/5 border border-transparent"
                                    }`}
                            >
                                <span className="flex items-center gap-2">
                                    <tab.icon className="w-4 h-4" />
                                    {tab.label}
                                </span>
                                {activeTab === tab.id && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 rounded-full border border-iqon-red shadow-[0_0_20px_rgba(230,0,35,0.3)]"
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="relative min-h-[300px]">
                        <AnimatePresence mode="wait">
                            {tabs.map((tab) => (
                                activeTab === tab.id && (
                                    <motion.div
                                        key={tab.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="bg-slate-950 border border-white/10 rounded-3xl p-8 md:p-12 text-center"
                                    >
                                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-iqon-red/10 text-iqon-red mb-8">
                                            <tab.icon className="w-10 h-10" />
                                        </div>
                                        <h3 className="text-3xl font-bold text-white mb-6">{tab.label}</h3>
                                        <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
                                            {tab.content}
                                        </p>
                                        <Link
                                            href="/contact"
                                            className="inline-flex items-center px-8 py-4 bg-iqon-red text-white font-bold rounded-lg hover:bg-red-700 transition-colors duration-300"
                                        >
                                            Deploy a Red Team <ArrowRight className="w-5 h-5 ml-2" />
                                        </Link>
                                    </motion.div>
                                )
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
        </main>
    );
}
