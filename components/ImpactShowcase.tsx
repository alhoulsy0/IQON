"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        id: "taxation",
        client: "ZATCA",
        metric: "99.999%",
        metricLabel: "Uptime",
        title: "Taxation Infra",
        link: "/projects/taxation",
    },
    {
        id: "labor",
        client: "HRSD",
        metric: "5M+",
        metricLabel: "Users Served",
        title: "Labor Market",
        link: "/projects/labor",
    },
    {
        id: "defense",
        client: "MOD",
        metric: "0",
        metricLabel: "Breaches",
        title: "Sovereign Cloud",
        link: "/projects/defense",
    },
    {
        id: "energy",
        client: "ARAMCO",
        metric: "40%",
        metricLabel: "Efficiency",
        title: "Predictive Maint.",
        link: "/projects/energy",
    },
    {
        id: "finance",
        client: "SAMA",
        metric: "20ms",
        metricLabel: "Latency",
        title: "HFT Network",
        link: "/projects/finance",
    },
];

const ImpactShowcase = () => {
    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Featured Projects
                    </h2>
                    <div className="w-24 h-1 bg-iqon-red rounded-full" />
                </motion.div>
            </div>

            {/* Horizontal Scroll Container */}
            <div className="relative w-full overflow-x-auto pb-12 hide-scrollbar">
                <div className="flex gap-6 px-4 sm:px-6 lg:px-8 w-max">
                    {projects.map((project, index) => (
                        <Link href={project.link} key={project.id}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative w-64 h-80 rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm transition-all duration-300 hover:border-red-500/50 hover:shadow-[0_0_20px_-10px_rgba(230,0,35,0.3)] overflow-hidden transform hover:scale-105"
                            >
                                {/* Red Status Line */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)] group-hover:shadow-[0_0_20px_rgba(220,38,38,0.8)] transition-all duration-300" />

                                <div className="p-6 h-full flex flex-col justify-between relative z-10">
                                    {/* Top: Client Name (Watermark) */}
                                    <div>
                                        <h3 className="text-4xl font-black text-white/5 uppercase tracking-tighter absolute top-4 left-4 select-none pointer-events-none">
                                            {project.client}
                                        </h3>
                                        <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 relative z-10">
                                            {project.client}
                                        </div>
                                    </div>

                                    {/* Middle: Metric */}
                                    <div className="my-auto">
                                        <div className="text-4xl font-bold text-white mb-1">
                                            {project.metric}
                                        </div>
                                        <div className="text-sm text-gray-400 font-medium">
                                            {project.metricLabel}
                                        </div>
                                    </div>

                                    {/* Bottom: Title + Button */}
                                    <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
                                        <span className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors">
                                            {project.title}
                                        </span>
                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-iqon-red transition-colors duration-300">
                                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImpactShowcase;
