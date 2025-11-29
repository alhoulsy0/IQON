"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        id: "taxation",
        title: "Taxation Infrastructure Overhaul",
        client: "ZATCA",
        category: "Government / FinTech",
        description: "Re-engineering the national e-invoicing backbone to handle 10M+ daily transactions with 99.999% uptime.",
        image: "bg-gradient-to-br from-blue-900 to-slate-900",
        size: "large", // spans 2 columns
    },
    {
        id: "labor",
        title: "Labor Market Transformation",
        client: "QIWA",
        category: "Government / Employment",
        description: "AI-driven job matching platform serving 5M+ users and 1M+ companies.",
        image: "bg-gradient-to-br from-green-900 to-slate-900",
        size: "normal",
    },
    {
        id: "defense",
        title: "Sovereign Cloud Defense",
        client: "Ministry of Defense",
        category: "Defense / Cyber",
        description: "Zero-Trust architecture implementation for a classified air-gapped network.",
        image: "bg-gradient-to-br from-red-900 to-slate-900",
        size: "normal",
    },
    {
        id: "smart-city",
        title: "Smart City IoT Grid",
        client: "NEOM",
        category: "IoT / AI",
        description: "Real-time sensor data processing for autonomous traffic management.",
        image: "bg-gradient-to-br from-purple-900 to-slate-900",
        size: "normal",
    },
    {
        id: "banking",
        title: "Next-Gen Digital Banking",
        client: "Leading Regional Bank",
        category: "FinTech",
        description: "Cloud-native core banking transformation with microservices architecture.",
        image: "bg-gradient-to-br from-indigo-900 to-slate-900",
        size: "large",
    },
];

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-slate-950 pt-24">
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-16"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                            Selected <span className="text-iqon-red">Work</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl">
                            Engineering impact at national scale. Explore our case studies across Government, Defense, and FinTech.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[400px]">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`group relative rounded-3xl overflow-hidden border border-white/10 ${project.size === "large" ? "md:col-span-2" : ""
                                    }`}
                            >
                                {/* Background Image Placeholder */}
                                <div className={`absolute inset-0 ${project.image} transition-transform duration-700 group-hover:scale-105`} />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

                                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-bold text-white uppercase tracking-wider">
                                            {project.category}
                                        </span>
                                        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <ArrowUpRight className="w-5 h-5 text-white" />
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-3xl font-bold text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-300 text-lg mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                            {project.description}
                                        </p>
                                        <p className="text-sm font-bold text-iqon-red uppercase tracking-widest">
                                            {project.client}
                                        </p>
                                    </div>
                                </div>

                                <Link href={`/projects/${project.id}`} className="absolute inset-0 z-10">
                                    <span className="sr-only">View Project</span>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
