"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Brain, Shield, Users, Building, ArrowRight, Award, Terminal } from "lucide-react";
import Link from "next/link";

export default function AcademyServicesPage() {
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
                        Qertex <br />
                        <span className="text-iqon-red">Academy.</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        The Qertex Academy is a Center of Excellence dedicated to upskilling your teams in the era of AI and Autonomous Quality.
                    </p>
                </motion.div>
            </section>

            {/* Course Tracks */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Track 1: Certification */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 group"
                    >
                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                            <Award className="w-6 h-6 text-blue-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-6">The Certification Track</h2>
                        <ul className="space-y-4">
                            {[
                                "Official SITQB/ISTQB Foundation",
                                "ISTQB Advanced Levels",
                                "Agile Tester Extension"
                            ].map((course, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-400">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                                    <span>{course}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Track 2: AI-Native */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 group relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Brain className="w-32 h-32 text-purple-500" />
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors relative z-10">
                            <Terminal className="w-6 h-6 text-purple-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-6 relative z-10">The AI-Native Track</h2>
                        <ul className="space-y-4 relative z-10">
                            {[
                                "Testing AI Systems (CT-AI)",
                                "Prompt Engineering for Leaders",
                                "Building Agents with LangChain"
                            ].map((course, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-400">
                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0" />
                                    <span>{course}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Track 3: Executive */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 group"
                    >
                        <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                            <Shield className="w-6 h-6 text-green-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-6">The Executive Track</h2>
                        <ul className="space-y-4">
                            {[
                                "AI Governance for Boardrooms",
                                "Managing Cyber Risk",
                                "Strategic Digital Transformation"
                            ].map((course, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-400">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                                    <span>{course}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                </div>
            </section>

            {/* Corporate Portal */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl border border-white/10 p-8 md:p-16 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-iqon-red/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="md:w-2/3">
                            <div className="flex items-center gap-3 mb-6">
                                <Building className="w-6 h-6 text-iqon-red" />
                                <span className="text-iqon-red font-bold tracking-widest uppercase text-sm">Enterprise Solutions</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Corporate Portal</h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                We build custom Learning Management Systems (LMS) tailored to your organization's specific tech stack and compliance needs. Track progress, certify teams, and maintain a culture of continuous excellence.
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                {[
                                    "Custom Curriculum Design",
                                    "Progress Tracking & Analytics",
                                    "White-labeled LMS",
                                    "On-premise Deployment Options"
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-gray-400">
                                        <div className="w-1 h-1 rounded-full bg-white" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="md:w-1/3 flex justify-center">
                            <a
                                href="mailto:info@qertex.com"
                                className="inline-flex items-center px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-gray-100 transition-colors shadow-xl"
                            >
                                Request Demo <ArrowRight className="w-5 h-5 ml-2" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
