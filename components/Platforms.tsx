"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, ClipboardCheck, CheckCircle2, AlertTriangle, FileCode2 } from "lucide-react";
import Link from "next/link";

const AuroraVisual = () => {
    return (
        <div className="relative w-full h-64 bg-slate-950 rounded-lg border border-white/10 overflow-hidden flex flex-col">
            {/* Window Header */}
            <div className="h-8 bg-slate-900 border-b border-white/5 flex items-center px-3 gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
                <div className="ml-4 text-[10px] text-gray-500 font-mono">aurora-agent.tsx</div>
            </div>

            <div className="flex-1 flex overflow-hidden">
                {/* Sidebar */}
                <div className="w-1/3 bg-slate-900/50 border-r border-white/5 p-3 space-y-2">
                    <div className="text-[10px] font-bold text-gray-500 uppercase mb-2">Test Cases</div>
                    {["TC-001: Login", "TC-002: Auth", "TC-003: API", "TC-004: DB"].map((tc, i) => (
                        <div key={i} className="flex items-center gap-2 text-[10px] text-gray-400 p-1.5 rounded hover:bg-white/5 cursor-default">
                            <FileCode2 className="w-3 h-3 text-iqon-red" />
                            {tc}
                        </div>
                    ))}
                </div>

                {/* Main Chat Area */}
                <div className="flex-1 p-4 relative">
                    <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-iqon-red/20 flex items-center justify-center flex-shrink-0">
                            <Bot className="w-4 h-4 text-iqon-red" />
                        </div>
                        <div className="space-y-1">
                            <div className="text-[10px] font-bold text-white">Faheem AI</div>
                            <div className="bg-white/5 rounded-lg rounded-tl-none p-3 text-xs text-gray-300 leading-relaxed border border-white/5">
                                I have generated 50 test cases and detected 3 defects in the latest commit.
                            </div>
                        </div>
                    </div>

                    {/* Typing Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute bottom-4 left-16 flex gap-1"
                    >
                        <div className="w-1 h-1 bg-gray-500 rounded-full" />
                        <div className="w-1 h-1 bg-gray-500 rounded-full" />
                        <div className="w-1 h-1 bg-gray-500 rounded-full" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

const RiskLensVisual = () => {
    return (
        <div className="relative w-full h-64 bg-slate-950 rounded-lg border border-white/10 overflow-hidden p-6 flex flex-col items-center">
            {/* Gauge */}
            <div className="relative w-32 h-16 overflow-hidden mb-6">
                <div className="absolute top-0 left-0 w-32 h-32 rounded-full border-[12px] border-white/5" />
                <motion.div
                    initial={{ rotate: 0 }}
                    whileInView={{ rotate: 150 }} // Approx 85%
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute top-0 left-0 w-32 h-32 rounded-full border-[12px] border-transparent border-t-iqon-red border-r-iqon-red"
                    style={{ transformOrigin: "center", rotate: "-45deg" }} // Start position adjustment
                />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
                    <div className="text-2xl font-bold text-white">85%</div>
                    <div className="text-[8px] text-gray-400 uppercase">TMMi Level 3</div>
                </div>
            </div>

            {/* Checklist */}
            <div className="w-full space-y-3">
                <div className="flex items-center justify-between p-2 bg-white/5 rounded border border-white/5">
                    <span className="text-xs text-gray-300 font-medium">ISO 27001</span>
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                </div>
                <div className="flex items-center justify-between p-2 bg-white/5 rounded border border-white/5">
                    <span className="text-xs text-gray-300 font-medium">TMMi Maturity</span>
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                </div>
                <div className="flex items-center justify-between p-2 bg-white/5 rounded border border-iqon-red/30">
                    <span className="text-xs text-gray-300 font-medium">GDPR Compliance</span>
                    <AlertTriangle className="w-4 h-4 text-iqon-red" />
                </div>
            </div>
        </div>
    );
};

const Platforms = () => {
    return (
        <section className="py-24 bg-slate-950 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Proprietary Products
                    </h2>
                    <div className="w-24 h-1 bg-iqon-red mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Aurora Platform */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group relative bg-slate-900 border border-white/10 rounded-2xl overflow-hidden hover:border-iqon-red transition-colors duration-300"
                    >
                        <div className="p-8 flex flex-col h-full">
                            <div className="mb-8">
                                <AuroraVisual />
                            </div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-white/5 rounded-lg text-iqon-red">
                                    <Bot className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">
                                    AURORA™: AI Test Engineering Agent
                                </h3>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                                Meet Faheem AI—your digital QA Business Analyst. Aurora automatically generates test cases, identifies defects, and finds discrepancies between code and requirements. It answers complex business logic questions instantly.
                            </p>
                            <Link
                                href="/products/aurora"
                                className="inline-flex justify-center items-center w-full py-3 bg-iqon-red text-white font-bold rounded-lg hover:bg-red-700 transition-colors duration-300"
                            >
                                Explore Aurora <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Risk-Lens Platform */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group relative bg-slate-900 border border-white/10 rounded-2xl overflow-hidden hover:border-iqon-red transition-colors duration-300"
                    >
                        <div className="p-8 flex flex-col h-full">
                            <div className="mb-8">
                                <RiskLensVisual />
                            </div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-white/5 rounded-lg text-iqon-red">
                                    <ClipboardCheck className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">
                                    RISK-LENS™: SME Standards Auditor
                                </h3>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                                A specialized assessment engine for SMEs. We map your current processes against International Standards (ISO, TMMi) to identify gaps, risks, and compliance failures in real-time.
                            </p>
                            <Link
                                href="/products/risk-lens"
                                className="inline-flex justify-center items-center w-full py-3 bg-transparent border border-iqon-red text-iqon-red font-bold rounded-lg hover:bg-iqon-red hover:text-white transition-colors duration-300"
                            >
                                Audit Your Business <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Platforms;
