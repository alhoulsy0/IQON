"use client";

import { motion } from "framer-motion";
import { Globe, Shield, Zap, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

import FoundersVision from "@/components/FoundersVision";

const AboutPage = () => {
    return (
        <main className="min-h-screen bg-slate-950 pt-24">
            {/* Hero Section */}
            <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
                    >
                        Bridging Innovation & <span className="text-iqon-red">Sovereignty</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        Qertex is the premier Digital Assurance & Cognitive Defense firm, empowering nations with sovereign AI and secure infrastructure.
                    </motion.p>
                </div>
                {/* Background Elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-iqon-red/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl" />
                </div>
            </section>

            {/* Founder's Vision */}
            <FoundersVision />

            {/* Mission & Vision */}
            <section className="py-24 bg-slate-900/50 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                To engineer trust in an AI-driven world. We provide the critical infrastructure and assurance needed for nations and enterprises to adopt advanced technologies with confidence and sovereignty.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-gray-300">
                                    <Shield className="w-5 h-5 text-iqon-red" />
                                    <span>Sovereign AI Deployment</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-300">
                                    <Zap className="w-5 h-5 text-iqon-red" />
                                    <span>Critical Infrastructure Protection</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-300">
                                    <Users className="w-5 h-5 text-iqon-red" />
                                    <span>Capacity Building & Training</span>
                                </li>
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative h-[400px] rounded-3xl overflow-hidden border border-white/10 bg-slate-800"
                        >
                            {/* Placeholder for an office or team image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950 flex items-center justify-center">
                                <Globe className="w-32 h-32 text-white/5" />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-slate-950 to-transparent">
                                <p className="text-white font-bold text-xl">Global Reach, Local Impact</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Global Footprint */}
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">Global Footprint</h2>
                    <div className="w-24 h-1 bg-iqon-red mx-auto rounded-full" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {[
                        { city: "UAE", country: "Regional Hub", desc: "Strategic Expansion" },
                    ].map((loc, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-iqon-red/50 transition-all duration-300 group"
                        >
                            <Globe className="w-8 h-8 text-iqon-red mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold text-white mb-2">{loc.city}</h3>
                            <p className="text-iqon-red font-medium mb-2">{loc.country}</p>
                            <p className="text-gray-500 text-sm">{loc.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-iqon-red relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20" />
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl font-bold text-white mb-6">Join Our Mission</h2>
                    <p className="text-white/90 text-xl mb-8">
                        Whether you are a government entity seeking sovereignty or an engineer looking to make an impact, Qertex is your partner.
                    </p>
                    <a
                        href="mailto:info@qertex.com"
                        className="inline-flex items-center px-8 py-4 bg-white text-iqon-red font-bold rounded-full hover:bg-gray-100 transition-colors duration-300"
                    >
                        Contact Us <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                </div>
            </section>
        </main>
    );
};

export default AboutPage;
