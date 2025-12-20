"use client";

import { motion } from "framer-motion";
import { Users, Briefcase, Award, ArrowRight, UserCheck } from "lucide-react";
import Link from "next/link";

export default function StaffingServicesPage() {
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
                        Elite <br />
                        <span className="text-iqon-red">Technical Staffing.</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Connecting you with world-class engineering talent. We provide specialized staffing solutions for AI, Cybersecurity, and Software Quality projects.
                    </p>
                </motion.div>
            </section>

            {/* Capabilities Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        {
                            title: "Specialized Talent",
                            desc: "Access to a curated network of top-tier developers, QA engineers, and security analysts.",
                            icon: Users
                        },
                        {
                            title: "Flexible Engagement",
                            desc: "Scale your team up or down with ease. Contract, contract-to-hire, and direct placement.",
                            icon: Briefcase
                        },
                        {
                            title: "Vetted Experts",
                            desc: "Rigorous technical assessments ensuring you get candidates who hit the ground running.",
                            icon: UserCheck
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-iqon-red/50 transition-all duration-300 group"
                        >
                            <item.icon className="w-8 h-8 text-iqon-red mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-gray-400 text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-4xl mx-auto px-4 text-center mt-24">
                <h2 className="text-3xl font-bold text-white mb-8">Build Your Dream Team</h2>
                <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 bg-iqon-red hover:bg-red-700 text-white font-bold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(230,0,35,0.3)] hover:shadow-[0_0_30px_rgba(230,0,35,0.5)]"
                >
                    Contact Staffing Team <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
            </section>
        </main>
    );
}
