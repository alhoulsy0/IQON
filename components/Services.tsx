"use client";

import { motion } from "framer-motion";
import { ShieldAlert, BrainCircuit, Activity, BookOpen, Plus, Users } from "lucide-react";
import Link from "next/link";

const services = [
    {
        id: "assurance",
        title: "Software Quality",
        description: "Engineering flawless digital experiences. We orchestrate comprehensive testing strategies, from automated regression to chaos engineering, ensuring your software not only functions but excels under pressure.",
        icon: Activity,
        link: "/services/assurance",
    },
    {
        id: "ai",
        title: "AI Technology",
        description: "Architecting the cognitive enterprise. We deploy sovereign large language models and autonomous agentic workflows that redefine operational efficiency and decision-making intelligence.",
        icon: BrainCircuit,
        link: "/services/ai",
    },
    {
        id: "cyber",
        title: "Cybersecurity",
        description: "Fortifying your digital perimeter. Our offensive security teams mimic advanced persistent threats to expose vulnerabilities, hardening your infrastructure against the evolving landscape of cyber warfare.",
        icon: ShieldAlert,
        link: "/services/cyber",
    },
    {
        id: "academy",
        title: "Qertex Academy",
        description: "Cultivating the next generation of tech leaders. A premier center of excellence delivering specialized certification tracks and executive upskilling in AI, quality engineering, and cyber resilience.",
        icon: BookOpen,
        link: "/services/academy",
    },
    {
        id: "staffing",
        title: "Strategic Staffing",
        description: "Mobilizing elite technical talent. We connect you with a vetted network of world-class engineers and visionaries, scaling your capabilities to meet the demands of mission-critical projects.",
        icon: Users,
        link: "/services/staffing",
    },
];

const Services = () => {
    return (
        <section className="py-32 bg-slate-950 relative overflow-hidden" id="services">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-iqon-red/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6">
                        OPERATIONAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-iqon-red to-red-600">CAPABILITIES</span>.
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl leading-relaxed border-l-2 border-iqon-red/50 pl-6">
                        Deep-tech disciplines engineered for autonomous resilience. We deploy military-grade architecture to secure, automate, and scale your digital enterprise.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <Link
                            href={service.link}
                            key={service.id}
                            className={`block group ${index === 0 || index === 1 ? 'md:col-span-1 lg:col-span-1' : ''}`}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative h-full min-h-[320px] rounded-3xl border border-white/5 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:bg-white/10 hover:border-iqon-red/30 hover:shadow-[0_0_30px_rgba(230,0,35,0.1)] p-8 flex flex-col justify-between overflow-hidden group-hover:-translate-y-1"
                            >
                                {/* Hover Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-iqon-red/0 via-iqon-red/0 to-iqon-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div>
                                    {/* Icon Container */}
                                    <div className="w-14 h-14 rounded-2xl bg-slate-900/50 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-iqon-red group-hover:border-iqon-red transition-all duration-500 relative z-10 shadow-lg">
                                        <service.icon className="w-7 h-7 text-gray-300 group-hover:text-white transition-colors duration-500" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-iqon-red transition-colors duration-300 relative z-10">
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-400 leading-relaxed relative z-10">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Arrow Icon */}
                                <div className="mt-8 flex items-center gap-2 text-sm font-bold text-gray-500 group-hover:text-white transition-colors duration-300 uppercase tracking-widest relative z-10">
                                    Explore <Plus className="w-4 h-4 text-iqon-red" />
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
