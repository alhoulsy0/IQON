"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ClipboardCheck, ShieldCheck, Scale, FileText, ArrowRight, BrainCircuit, Check } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const standards = [
    {
        title: "TMMi Maturity Assessment",
        description: "Automated Test Maturity Model integration assessment to elevate your QA processes to Level 5.",
        icon: Scale,
        color: "text-blue-400"
    },
    {
        title: "Qiyas Compliance",
        description: "Specialized validation for National Testing Center standards, ensuring rigorous assessment integrity.",
        icon: FileText,
        color: "text-green-400"
    },
    {
        title: "ISO 9001 & 27001",
        description: "Unified audit capability for Quality Management (9001) and Information Security (27001).",
        icon: ShieldCheck,
        color: "text-purple-400"
    },
    {
        title: "Regulatory Gap Analysis",
        description: "Real-time scanning of your operational procedures against evolving regional mandates.",
        icon: ClipboardCheck,
        color: "text-red-400"
    },
];

const ConsultantVisual = () => {
    return (
        <div className="relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center">
            {/* Abstract Brain/Network */}
            <div className="absolute inset-0 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />

            <div className="relative z-10 w-64 h-64 bg-slate-900 border border-white/10 rounded-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-full h-full border border-dashed border-white/20 rounded-full"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute w-48 h-48 border border-white/10 rounded-full"
                />
                <BrainCircuit className="w-24 h-24 text-iqon-red relative z-20" />
            </div>

            {/* Floating Standards Chips */}
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-10 right-0 bg-slate-800/90 border border-white/10 px-4 py-2 rounded-lg text-xs font-bold text-blue-400 backdrop-blur-md shadow-xl"
            >
                TMMi Level 5
            </motion.div>
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute bottom-20 left-0 bg-slate-800/90 border border-white/10 px-4 py-2 rounded-lg text-xs font-bold text-purple-400 backdrop-blur-md shadow-xl"
            >
                ISO 27001 Ready
            </motion.div>
            <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
                className="absolute top-1/2 -right-12 bg-slate-800/90 border border-white/10 px-4 py-2 rounded-lg text-xs font-bold text-green-400 backdrop-blur-md shadow-xl"
            >
                Qiyas Verified
            </motion.div>
        </div>
    );
};

export default function QertexAssessmentPage() {
    return (
        <main className="min-h-screen bg-slate-950 pt-24">
            <Navbar />

            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-iqon-red mb-6 uppercase tracking-wider">
                            <ShieldCheck className="w-3 h-3" />
                            AI Compliance Consultant
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            QERTEX <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">ASSESSMENT</span><span className="text-sm align-top text-blue-400">TM</span>
                        </h1>
                        <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                            More than a tool—it's your dedicated AI Consultant. We've built and tuned this engine to serve as a specialized auditor for TMMi, Qiyas, and ISO standards, delivering expert-level gap analysis in seconds.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/contact"
                                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] flex items-center"
                            >
                                Start Assessment <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <ConsultantVisual />
                    </motion.div>
                </div>
            </section>

            {/* Standards Grid */}
            <section className="py-24 bg-slate-900/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">Your Sovereign Compliance Expert</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Trained on thousands of audit parameters to deliver instant, actionable intelligence.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {standards.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 rounded-2xl bg-slate-950 border border-white/5 hover:border-white/10 transition-colors group"
                            >
                                <div className={`w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 ${item.color} group-hover:scale-110 transition-transform`}>
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
