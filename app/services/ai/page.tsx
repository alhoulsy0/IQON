"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Eye, Activity, Workflow, Bot, Database, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AIServicesPage() {
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
                        AI <br />
                        <span className="text-iqon-red">Technology.</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        We don't just build models; we build the brain of your enterprise. From fine-tuning custom LLMs to deploying autonomous agents that run your back-office.
                    </p>
                </motion.div>
            </section>

            {/* Section 1: AI Development */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
                <div className="flex items-center gap-4 mb-12">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/20" />
                    <h2 className="text-2xl font-bold text-white tracking-widest uppercase">Building the Brain</h2>
                    <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/20" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Custom LLMs",
                            desc: "Fine-tuning open-source models (Llama/Mistral) on your private data for domain-specific intelligence.",
                            icon: BrainCircuit
                        },
                        {
                            title: "Computer Vision",
                            desc: "Visual inspection systems for manufacturing quality control and safety compliance monitoring.",
                            icon: Eye
                        },
                        {
                            title: "Predictive Analytics",
                            desc: "Neural networks that forecast market trends, demand spikes, and operational failures before they happen.",
                            icon: Activity
                        }
                    ].map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-iqon-red/50 transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-iqon-red/10 flex items-center justify-center mb-6 group-hover:bg-iqon-red/20 transition-colors">
                                <service.icon className="w-6 h-6 text-iqon-red" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Section 2: AI Process Integration */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-4 mb-12">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/20" />
                    <h2 className="text-2xl font-bold text-white tracking-widest uppercase">AI-Enablement</h2>
                    <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/20" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Agentic Workflows",
                            desc: "Replacing manual back-office tasks (Invoicing, HR, Scheduling) with autonomous agents that work 24/7.",
                            icon: Workflow
                        },
                        {
                            title: "Intelligent RPAs",
                            desc: "Upgrading 'Dumb Bots' to 'Thinking Agents' that can handle exceptions and unstructured data.",
                            icon: Bot
                        },
                        {
                            title: "Enterprise RAG",
                            desc: "Secure knowledge retrieval systems that act as your 'Corporate Brain', accessible to internal staff.",
                            icon: Database
                        }
                    ].map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-iqon-red/50 transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                                <service.icon className="w-6 h-6 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-4xl mx-auto px-4 text-center mt-32">
                <h2 className="text-3xl font-bold text-white mb-8">Ready to Engineer Your Intelligence?</h2>
                <a
                    href="mailto:info@qertex.com"
                    className="inline-flex items-center px-8 py-4 bg-iqon-red hover:bg-red-700 text-white font-bold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(230,0,35,0.3)] hover:shadow-[0_0_30px_rgba(230,0,35,0.5)]"
                >
                    Start the Transformation <ArrowRight className="w-5 h-5 ml-2" />
                </a>
            </section>
        </main>
    );
}
