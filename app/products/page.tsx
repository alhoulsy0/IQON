"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Shield, Zap, Brain, Activity, FileText, Search } from "lucide-react";
import Link from "next/link";

export default function ProductsPage() {
    return (
        <main className="min-h-screen flex flex-col lg:flex-row bg-slate-950">
            {/* AURORA ENGINE (Left/Top) */}
            <section className="w-full lg:w-1/2 relative overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10 group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-transparent opacity-50" />

                <div className="relative z-10 h-full flex flex-col justify-center p-8 md:p-16 lg:p-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20">
                                <Zap className="w-6 h-6 text-purple-400" />
                            </div>
                            <span className="text-purple-400 font-mono tracking-widest text-sm">THE INNOVATION ENGINE</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            AURORA: <br />
                            <span className="text-gray-400">Autonomous Test Engineering.</span>
                        </h1>

                        <ul className="space-y-4 mb-10">
                            {[
                                { title: "Generative QA", desc: "AI writes test cases from user stories." },
                                { title: "Self-Healing Scripts", desc: "Tests that fix themselves when UI changes." },
                                { title: "Faheem Assistant", desc: "Your AI Business Analyst for requirement gaps." }
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + (i * 0.1) }}
                                    className="flex items-start gap-3"
                                >
                                    <Check className="w-5 h-5 text-purple-400 mt-1 shrink-0" />
                                    <div>
                                        <strong className="text-white block">{item.title}</strong>
                                        <span className="text-gray-500 text-sm">{item.desc}</span>
                                    </div>
                                </motion.li>
                            ))}
                        </ul>

                        <a
                            href="https://aurora-platform.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)]"
                        >
                            Launch Aurora Dashboard <ArrowRight className="w-5 h-5 ml-2" />
                        </a>
                    </motion.div>

                    {/* Visual: Faheem AI Terminal */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="mt-12 relative"
                    >
                        <div className="bg-slate-900 rounded-xl border border-white/10 overflow-hidden shadow-2xl">
                            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                <span className="ml-2 text-xs text-gray-500 font-mono">faheem_ai_agent — bash</span>
                            </div>
                            <div className="p-6 font-mono text-sm h-64 overflow-hidden relative">
                                <div className="space-y-2 text-gray-300">
                                    <p><span className="text-purple-400">➜</span> <span className="text-blue-400">~</span> analyzing user_stories.json...</p>
                                    <p className="text-gray-500">Reading requirements from Jira ticket IQ-402...</p>
                                    <p><span className="text-green-400">✔</span> Requirements parsed successfully.</p>
                                    <p><span className="text-purple-400">➜</span> <span className="text-blue-400">~</span> generating test_cases...</p>
                                    <div className="pl-4 border-l-2 border-purple-500/30 my-2">
                                        <p className="text-gray-400">1. Verify login with valid credentials</p>
                                        <p className="text-gray-400">2. Verify 2FA prompt appears</p>
                                        <p className="text-gray-400">3. Check error handling for invalid OTP</p>
                                    </div>
                                    <p><span className="text-purple-400">➜</span> <span className="text-blue-400">~</span> executing playwright_script.ts</p>
                                    <motion.div
                                        animate={{ opacity: [0, 1, 0] }}
                                        transition={{ duration: 1, repeat: Infinity }}
                                        className="inline-block w-2 h-4 bg-purple-400 align-middle ml-1"
                                    />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-900 to-transparent" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* RISK-LENS ENGINE (Right/Bottom) */}
            <section className="w-full lg:w-1/2 relative overflow-hidden bg-slate-900 group">
                <div className="absolute inset-0 bg-gradient-to-bl from-green-900/10 to-transparent opacity-50" />

                <div className="relative z-10 h-full flex flex-col justify-center p-8 md:p-16 lg:p-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-green-500/10 rounded-xl border border-green-500/20">
                                <Shield className="w-6 h-6 text-green-400" />
                            </div>
                            <span className="text-green-400 font-mono tracking-widest text-sm">THE GOVERNANCE ENGINE</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            RISK-LENS: <br />
                            <span className="text-gray-400">Algorithmic Auditing.</span>
                        </h1>

                        <ul className="space-y-4 mb-10">
                            {[
                                { title: "Standards Mapping", desc: "Instant check against ISO 42001 & TMMi." },
                                { title: "SME Rapid Scan", desc: "15-minute assessment for small enterprises." },
                                { title: "Compliance Radar", desc: "Real-time visualization of risk posture." }
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 + (i * 0.1) }}
                                    className="flex items-start gap-3"
                                >
                                    <Check className="w-5 h-5 text-green-400 mt-1 shrink-0" />
                                    <div>
                                        <strong className="text-white block">{item.title}</strong>
                                        <span className="text-gray-500 text-sm">{item.desc}</span>
                                    </div>
                                </motion.li>
                            ))}
                        </ul>

                        <Link
                            href="/products/risk-lens"
                            className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(22,163,74,0.3)] hover:shadow-[0_0_30px_rgba(22,163,74,0.5)]"
                        >
                            Launch Risk-Lens <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </motion.div>

                    {/* Visual: Compliance Radar Chart */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="mt-12 relative"
                    >
                        <div className="bg-slate-950 rounded-xl border border-white/10 p-6 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-4 right-4 flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-xs text-green-400 font-mono">LIVE MONITORING</span>
                            </div>

                            <div className="flex items-center justify-center py-8">
                                <div className="relative w-64 h-64">
                                    {/* Radar Grid */}
                                    <svg viewBox="0 0 100 100" className="w-full h-full opacity-20">
                                        <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="0.5" />
                                        <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="0.5" />
                                        <circle cx="50" cy="50" r="20" fill="none" stroke="white" strokeWidth="0.5" />
                                        <circle cx="50" cy="50" r="10" fill="none" stroke="white" strokeWidth="0.5" />
                                        <line x1="50" y1="10" x2="50" y2="90" stroke="white" strokeWidth="0.5" />
                                        <line x1="10" y1="50" x2="90" y2="50" stroke="white" strokeWidth="0.5" />
                                    </svg>

                                    {/* Radar Shape */}
                                    <motion.svg
                                        viewBox="0 0 100 100"
                                        className="absolute inset-0 w-full h-full drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]"
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 1, delay: 0.8 }}
                                    >
                                        <polygon
                                            points="50,20 80,50 50,85 25,60"
                                            fill="rgba(34, 197, 94, 0.2)"
                                            stroke="#4ade80"
                                            strokeWidth="2"
                                        />
                                        {/* Points */}
                                        <circle cx="50" cy="20" r="2" fill="#4ade80" />
                                        <circle cx="80" cy="50" r="2" fill="#4ade80" />
                                        <circle cx="50" cy="85" r="2" fill="#4ade80" />
                                        <circle cx="25" cy="60" r="2" fill="#4ade80" />
                                    </motion.svg>

                                    {/* Scanning Effect */}
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-tr from-transparent via-transparent to-green-500/10"
                                        style={{ clipPath: "polygon(50% 50%, 100% 0, 100% 50%)" }}
                                    />
                                </div>
                            </div>

                            <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/5">
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider">Risk Score</p>
                                    <p className="text-2xl font-bold text-white">92<span className="text-sm text-green-400 ml-1">/100</span></p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-gray-500 uppercase tracking-wider">Compliance</p>
                                    <p className="text-sm font-bold text-green-400">ISO 42001 Ready</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
