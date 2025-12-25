"use client";

import { motion } from "framer-motion";
import { Scale, Zap, ShieldCheck, Activity, Users, FileCheck, ArrowRight, Crosshair, Server, Eye } from "lucide-react";
import Link from "next/link";

export default function AssuranceServicesPage() {
    return (
        <main className="min-h-screen bg-slate-950 pt-32 pb-24">
            {/* Hero */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                >
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        Software <br />
                        <span className="text-iqon-red">Quality.</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        We don't just test; we engineer resilience. A complete Quality Command Center ensuring your systems are precise, resilient, and compliant.
                    </p>
                </motion.div>
            </section>

            {/* --- ELITE CERTIFICATION STANDARD --- */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-slate-900 to-slate-950 border border-white/10 p-8 md:p-12">
                    {/* Background Effects */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                        {/* Text Content */}
                        <div className="max-w-xl">
                            <h2 className="text-sm font-bold text-iqon-red uppercase tracking-widest mb-3">Engineering Caliber</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Certified Excellence. <br />
                                <span className="text-slate-400">Without Exception.</span>
                            </h3>
                            <p className="text-lg text-slate-300 leading-relaxed mb-6">
                                We believe quality cannot be improvised—it must be engineered by qualified experts. That is why we maintain an uncompromising standard for our workforce.
                            </p>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
                                    <span className="text-white font-medium">100% of personnel are <strong className="text-green-400">ISTQB Certified</strong></span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
                                    <span className="text-white font-medium">100% of personnel are <strong className="text-blue-400">TMMi Professionals</strong></span>
                                </div>
                            </div>
                        </div>

                        {/* Visual Badges */}
                        <div className="flex flex-wrap gap-6 items-center justify-center">
                            {/* ISTQB Badge */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="w-40 h-40 rounded-xl bg-slate-800/50 border border-white/10 flex flex-col items-center justify-center text-center p-4 backdrop-blur-md shadow-xl group hover:border-green-500/30 transition-all"
                            >
                                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center text-green-400 font-bold text-xl mb-3 group-hover:bg-green-500 group-hover:text-white transition-colors">
                                    Q
                                </div>
                                <div className="text-2xl font-black text-white mb-1">100%</div>
                                <div className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">ISTQB Certified</div>
                            </motion.div>

                            {/* TMMi Badge */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="w-40 h-40 rounded-xl bg-slate-800/50 border border-white/10 flex flex-col items-center justify-center text-center p-4 backdrop-blur-md shadow-xl group hover:border-blue-500/30 transition-all"
                            >
                                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 font-bold text-xl mb-3 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                    T
                                </div>
                                <div className="text-2xl font-black text-white mb-1">100%</div>
                                <div className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">TMMi Professional</div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Capabilities Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Category A: Functional Precision */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
                            <Crosshair className="w-6 h-6 text-blue-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-white tracking-widest uppercase">Functional Precision</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Manual & Exploratory",
                                desc: "Creative edge-case testing by human experts to find what scripts miss.",
                                icon: Users
                            },
                            {
                                title: "Test Automation",
                                desc: "Building robust Selenium/Playwright frameworks for regression speed.",
                                icon: Zap
                            },
                            {
                                title: "API Testing",
                                desc: "Headless verification of microservices and data integrity.",
                                icon: Server
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group"
                            >
                                <item.icon className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-400 text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Category B: Non-Functional Resilience */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-2 bg-purple-500/10 rounded-lg border border-purple-500/20">
                            <Activity className="w-6 h-6 text-purple-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-white tracking-widest uppercase">Non-Functional Resilience</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Performance & Load",
                                desc: "Stress-testing systems (JMeter/K6) to handle millions of users.",
                                icon: Activity
                            },
                            {
                                title: "Chaos Engineering",
                                desc: "Intentionally breaking servers to test recovery and redundancy.",
                                icon: Zap
                            },
                            {
                                title: "Usability (UX) Audits",
                                desc: "Ensuring accessibility (WCAG) and intuitive user flow.",
                                icon: Eye
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group"
                            >
                                <item.icon className="w-8 h-8 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-400 text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Category C: Strategic Governance */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-2 bg-green-500/10 rounded-lg border border-green-500/20">
                            <ShieldCheck className="w-6 h-6 text-green-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-white tracking-widest uppercase">Strategic Governance</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                        {[
                            {
                                title: "TMMi Certification",
                                desc: "Assessing and elevating your organization's maturity level to global standards.",
                                icon: FileCheck
                            },
                            {
                                title: "Process Optimization",
                                desc: "Reducing test cycles from weeks to hours through strategic re-engineering.",
                                icon: Scale
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-green-500/50 transition-all duration-300 group"
                            >
                                <item.icon className="w-8 h-8 text-green-400 mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-400 text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </section>

            {/* CTA */}
            <section className="max-w-4xl mx-auto px-4 text-center mt-12">
                <h2 className="text-3xl font-bold text-white mb-8">Secure Your Quality</h2>
                <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 bg-iqon-red hover:bg-red-700 text-white font-bold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(230,0,35,0.3)] hover:shadow-[0_0_30px_rgba(230,0,35,0.5)]"
                >
                    Contact Assurance Team <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
            </section>
        </main>
    );
}
