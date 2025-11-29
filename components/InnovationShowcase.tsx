"use client";

import { motion } from "framer-motion";
import { ArrowRight, Workflow, Shield, Building2, Smartphone } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const items = [
    {
        id: "aurora",
        type: "product",
        title: "Aurora Platform",
        tag: "AI Orchestration",
        icon: Workflow,
        link: "/products/aurora",
        image: "bg-gradient-to-br from-purple-900/50 to-slate-900",
    },
    {
        id: "risk-lens",
        type: "product",
        title: "Risk-Lens",
        tag: "SME Compliance",
        icon: Shield,
        link: "/products/risk-lens",
        image: "bg-gradient-to-br from-green-900/50 to-slate-900",
    },
    {
        id: "taxation",
        type: "project",
        title: "ZATCA Tax Infra",
        tag: "GovTech",
        icon: Building2,
        link: "/projects", // Linking to projects page as specific project pages might not exist yet or are part of the list
        image: "bg-gradient-to-br from-blue-900/50 to-slate-900",
    },
    {
        id: "consumer",
        type: "project",
        title: "LG Electronics QA",
        tag: "Consumer Tech",
        icon: Smartphone,
        link: "/projects",
        image: "bg-gradient-to-br from-red-900/50 to-slate-900",
    },
];

const InnovationShowcase = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    return (
        <section className="py-24 bg-slate-950 border-t border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex justify-between items-end">
                <div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white mb-4"
                    >
                        Innovation & Impact
                    </motion.h2>
                    <div className="w-24 h-1 bg-iqon-red rounded-full" />
                </div>
                <div className="hidden md:flex gap-2">
                    <button
                        onClick={() => scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" })}
                        className="p-3 rounded-full border border-white/10 hover:bg-white/5 text-white transition-colors"
                    >
                        <ArrowRight className="w-5 h-5 rotate-180" />
                    </button>
                    <button
                        onClick={() => scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" })}
                        className="p-3 rounded-full border border-white/10 hover:bg-white/5 text-white transition-colors"
                    >
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <div
                ref={scrollRef}
                className="flex overflow-x-auto gap-6 px-4 sm:px-6 lg:px-8 pb-8 scrollbar-hide snap-x"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                {items.map((item, index) => (
                    <Link href={item.link} key={item.id} className="flex-shrink-0 snap-center">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative w-[300px] h-[400px] rounded-3xl bg-slate-900 border border-white/10 overflow-hidden hover:border-iqon-red/50 transition-all duration-500"
                        >
                            {/* Background */}
                            <div className={`absolute inset-0 ${item.image} opacity-50 group-hover:opacity-70 transition-opacity duration-500`} />

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                                <div className="flex justify-between items-start">
                                    <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-bold text-white uppercase tracking-wider">
                                        {item.tag}
                                    </span>
                                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-iqon-red transition-colors duration-300">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                </div>

                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                                        {item.type}
                                    </p>
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:translate-x-2 transition-transform duration-300">
                                        {item.title}
                                    </h3>
                                    <div className="flex items-center text-sm font-bold text-iqon-red opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                        Explore <ArrowRight className="w-4 h-4 ml-2" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default InnovationShowcase;
