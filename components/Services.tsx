"use client";

import { motion } from "framer-motion";
import { ShieldAlert, BrainCircuit, Activity, BookOpen, Plus } from "lucide-react";
import Link from "next/link";

const services = [
    {
        id: "cyber",
        title: "Offensive Cyber",
        description: "Adversarial simulations and Red Teaming to exploit vulnerabilities before attackers do.",
        icon: ShieldAlert,
        link: "/services/cyber",
    },
    {
        id: "ai",
        title: "Agentic AI",
        description: "Deployment of autonomous agents and secure RAG systems for enterprise automation.",
        icon: BrainCircuit,
        link: "/services/ai",
    },
    {
        id: "assurance",
        title: "Digital Assurance",
        description: "Shift-left engineering with AI-generated test cases and automated self-healing scripts.",
        icon: Activity,
        link: "/services/assurance",
    },
    {
        id: "academy",
        title: "IQON Academy",
        description: "Center of Excellence providing SITQB certification and executive AI upskilling.",
        icon: BookOpen,
        link: "/services/academy",
    },
];

const Services = () => {
    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden" id="services">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-white tracking-tight mb-2">
                        OPERATIONAL CAPABILITIES
                    </h2>
                    <p className="text-sm text-zinc-400 mb-8">
                        Deep-tech disciplines engineered for autonomous resilience.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((service, index) => (
                        <Link href={service.link} key={service.id} className="block group">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="relative h-64 rounded-xl border border-zinc-700 bg-gradient-to-br from-zinc-900 to-zinc-950 backdrop-blur-sm transition-all duration-300 hover:bg-zinc-800 hover:border-red-600/50 hover:shadow-lg hover:shadow-red-900/10 p-6 flex flex-col justify-between overflow-hidden"
                            >
                                <div>
                                    {/* Top Left Icon */}
                                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-iqon-red/20 transition-colors duration-300 mb-4">
                                        <service.icon className="w-6 h-6 text-white group-hover:text-iqon-red transition-colors duration-300" />
                                    </div>

                                    {/* Title & Status */}
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                        </span>
                                        <h3 className="text-lg font-bold text-white uppercase tracking-wider group-hover:text-iqon-red transition-colors duration-300">
                                            {service.title}
                                        </h3>
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm text-zinc-400 leading-relaxed line-clamp-2">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Bottom Right Plus Icon */}
                                <div className="absolute bottom-6 right-6 text-red-500 transition-colors duration-300">
                                    <Plus className="w-6 h-6" />
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
