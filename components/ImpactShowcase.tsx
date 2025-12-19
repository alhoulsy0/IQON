"use client";

import { motion } from "framer-motion";

const stats = [
    {
        label: "Legacy of Quality",
        value: "15+",
        suffix: "Years",
        desc: "Of IT Experience in the Gulf Region",
        color: "from-blue-500 to-cyan-400"
    },
    {
        label: "Artificial Intelligence",
        value: "Agentic",
        suffix: "AI",
        desc: "Building Sovereign Autonomous Enterprise Systems",
        color: "from-violet-500 to-fuchsia-400"
    },
    {
        label: "Cybersecurity",
        value: "Offensive",
        suffix: "Ops",
        desc: "Elite Red Teaming & Infrastructure Hardening",
        color: "from-red-500 to-rose-400"
    },
    {
        label: "Domain Expertise",
        value: "Fintech",
        suffix: "Experts",
        desc: "Specialized in Taxation, VAT, & Banking Systems",
        color: "from-emerald-500 to-green-400"
    },
    {
        label: "Global Reach",
        value: "3",
        suffix: "Regions",
        desc: "Operational presence across Middle East & North America",
        color: "from-purple-500 to-pink-400"
    },
    {
        label: "Process Maturity",
        value: "TMMi",
        suffix: "Certified",
        desc: "World-class Testing Maturity Model Integration",
        color: "from-orange-500 to-yellow-400"
    },
];

const ImpactShowcase = () => {
    return (
        <section className="py-32 bg-slate-950 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative p-8 rounded-3xl bg-slate-900/50 border border-white/5 overflow-hidden group hover:border-white/10 transition-colors h-full"
                        >
                            <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity bg-gradient-to-br ${stat.color} bg-clip-text text-transparent font-black text-6xl select-none`}>
                                {index + 1}
                            </div>

                            <div className="relative z-10">
                                <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">
                                    {stat.label}
                                </div>
                                <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                                    {stat.value}
                                </div>
                                <div className="text-white font-bold text-lg mb-4">
                                    {stat.suffix}
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">
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
