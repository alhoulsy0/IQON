"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

// --- Components ---

const CountUp = ({ to, duration = 2 }: { to: number; duration?: number }) => {
    const [count, setCount] = useState(0);
    const nodeRef = useRef(null);
    const isInView = useInView(nodeRef, { once: true, margin: "0px" });

    useEffect(() => {
        if (!isInView) return;

        let startTime: number;
        let animationFrame: number;

        const updateCount = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / (duration * 1000), 1);

            // Ease out quart
            const ease = 1 - Math.pow(1 - percentage, 4);

            setCount(Math.floor(to * ease));

            if (percentage < 1) {
                animationFrame = requestAnimationFrame(updateCount);
            }
        };

        animationFrame = requestAnimationFrame(updateCount);
        return () => cancelAnimationFrame(animationFrame);
    }, [to, duration, isInView]);

    return <span ref={nodeRef}>{count}</span>;
};

const FlippingText = ({ items, color }: { items: string[]; color: string }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % items.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [items.length]);

    return (
        <div className="h-10 relative overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`absolute inset-0 font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent whitespace-nowrap`}
                >
                    {items[index]}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

// --- Data ---

const stats = [
    // --- Row 1: Foundation & Tech Layers ---
    {
        type: "counter",
        label: "Legacy of Quality",
        value: 15,
        suffix: "Years",
        desc: "Of IT Experience in the Gulf Region",
        color: "from-blue-600 to-cyan-400"
    },
    {
        type: "flip",
        label: "AI & Cognitive Systems",
        items: ["Agentic Swarms", "Sovereign LLMs", "Neural Fabrics", "Big Data Analytics", "Digital Twins"],
        suffix: "Intelligence",
        desc: "Autonomous Enterprise Architectures",
        color: "from-violet-600 to-purple-400"
    },
    {
        type: "flip",
        label: "Cybersecurity & Defense",
        items: ["Red Teaming", "Zero Trust", "Threat Hunting", "Military Comms", "Grid Defense"],
        suffix: "Resilience",
        desc: "National-Grade Infrastructure Protection",
        color: "from-red-600 to-rose-400"
    },
    {
        type: "flip",
        label: "Mobile & Gaming Experience",
        items: ["Multiplayer Stress Test", "Anti-Cheat Models", "iOS & Android Farms", "5G Data Ecosystems", "Immersive VR/XR"],
        suffix: "Engagement",
        desc: "High-Performance Digital Interactions",
        color: "from-fuchsia-600 to-pink-400"
    },

    // --- Row 2: Critical Domains ---
    {
        type: "flip",
        label: "Fintech & Fiscal Tech",
        items: ["Sovereign Tax (VAT)", "Corporate Tax (DMTT)", "Excise & Customs", "Core Banking Hubs", "Payment Gateways"],
        suffix: "Economics",
        desc: "Secure Financial & Tax Infrastructure",
        color: "from-indigo-600 to-blue-400"
    },
    {
        type: "flip",
        label: "Public Sector & GovTech",
        items: ["National ID (E-ID)", "Judicial Systems", "Smart City IoT", "E-Government Gates"],
        suffix: "Sovereignty",
        desc: "Digital Backbone for Nation States",
        color: "from-emerald-600 to-green-400"
    },
    {
        type: "flip",
        label: "Healthcare & Life Sciences",
        items: ["EHR Systems", "Medical IoT (IoMT)", "Pharma Compliance", "Telemedicine Core", "Genomic Data"],
        suffix: "Care",
        desc: "Mission-Critical Health Technologies",
        color: "from-teal-600 to-cyan-400"
    },
    {
        type: "flip",
        label: "Enterprise & Infrastructure",
        items: ["SAP S/4HANA", "Aviation GDS", "Smart Energy Grids", "Global Logistics", "Factory Automation"],
        suffix: "Scale",
        desc: "Powering Global Supply Chains & Ops",
        color: "from-orange-600 to-amber-500"
    },
];

const ImpactShowcase = () => {
    return (
        <section className="py-20 bg-slate-950 relative overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        QERTEX TEAM <span className="text-iqon-red">AT A GLANCE</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Combining decades of engineering excellence with cutting-edge AI innovation.
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="relative p-6 rounded-2xl bg-slate-900/40 border border-white/5 overflow-hidden group hover:border-white/10 transition-colors h-full flex flex-col justify-between min-h-[180px]"
                        >
                            <div className="relative z-10">
                                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 truncate">
                                    {stat.label}
                                </div>

                                <div className="text-xl md:text-2xl font-bold text-white mb-2 min-h-[2.5rem] flex items-center">
                                    {stat.type === "counter" && (
                                        <span className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                                            <CountUp to={stat.value as number} />+
                                        </span>
                                    )}
                                    {stat.type === "flip" && (
                                        <div className="w-full">
                                            <FlippingText items={stat.items as string[]} color={stat.color} />
                                        </div>
                                    )}
                                    {stat.type === "static" && (
                                        <span className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                                            {stat.value}
                                        </span>
                                    )}
                                </div>

                                <div className="text-white font-bold text-sm mb-1 opacity-80">
                                    {stat.suffix}
                                </div>
                                <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                                    {stat.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImpactShowcase;
