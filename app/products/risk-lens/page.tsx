"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ClipboardCheck, ShieldAlert, ScanSearch, ArrowRight, Gauge } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const features = [
    {
        title: "ISO 42001 Assessment",
        description: "Automated gap analysis for the new AI Management System standard. Get certified faster.",
        icon: ClipboardCheck,
    },
    {
        title: "Algorithmic Bias Detection",
        description: "Scan your models for fairness and ethical risks before deployment.",
        icon: ShieldAlert,
    },
    {
        title: "SME Quick-Scan",
        description: "A simplified risk assessment workflow tailored for Small and Medium Enterprises.",
        icon: ScanSearch,
    },
];

const RiskGauge = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "center center"],
    });

    const rotation = useTransform(scrollYProgress, [0, 1], [-90, 90]);
    const color = useTransform(scrollYProgress, [0, 0.5, 1], ["#ef4444", "#eab308", "#22c55e"]);

    return (
        <div ref={containerRef} className="relative w-64 h-32 overflow-hidden mx-auto">
            <div className="absolute bottom-0 left-0 w-full h-full bg-white/10 rounded-t-full" />
            <motion.div
                style={{ rotate: rotation, backgroundColor: color }}
                className="absolute bottom-0 left-1/2 w-2 h-full origin-bottom rounded-full"
            />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-8 h-8 bg-slate-900 rounded-full border-4 border-white/20" />

            <div className="absolute bottom-4 left-4 text-xs font-bold text-red-500">HIGH RISK</div>
            <div className="absolute bottom-4 right-4 text-xs font-bold text-green-500">COMPLIANT</div>
        </div>
    );
};

export default function RiskLensPage() {
    return (
        <main className="min-h-screen bg-slate-950 pt-24">
            <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden text-center">
                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/5 border border-white/10 mb-8"
                    >
                        <Gauge className="w-10 h-10 text-green-400" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
                    >
                        RISK-LENS™ <br />
                        <span className="text-slate-500">The Compliance Engine</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto mb-16"
                    >
                        Navigate the complex landscape of AI regulation. From EU AI Act to ISO 42001, we keep you compliant.
                    </motion.p>

                    {/* Interactive Gauge Section */}
                    <div className="py-16 bg-slate-900/50 rounded-3xl border border-white/10 mb-16">
                        <h3 className="text-2xl font-bold text-white mb-8">Real-Time Compliance Score</h3>
                        <RiskGauge />
                        <p className="text-sm text-gray-500 mt-8">Scroll to see risk mitigation in action</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 rounded-2xl bg-white/5 border border-white/10 text-left"
                            >
                                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-6 text-green-400">
                                    <feature.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-gray-400 text-sm">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <Link
                        href="https://sme-ai-risk-demo.vercel.app/"
                        target="_blank"
                        className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors duration-300 shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_50px_rgba(34,197,94,0.5)]"
                    >
                        Start Free Assessment <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                </div>
            </section>
        </main>
    );
}
