"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, BrainCircuit } from "lucide-react";
import Link from "next/link";

const FaheemCard = () => {
    return (
        <Link href="/products/aurora" className="block h-full">
            <motion.div
                whileHover={{ y: -10 }}
                className="group relative h-full p-8 rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_20px_-10px_rgba(168,85,247,0.3)] overflow-hidden flex flex-col justify-between"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                    <h3 className="text-3xl font-bold text-white mb-2">AURORA<span className="text-sm align-top">TM</span></h3>
                    <p className="text-gray-400 mb-6">The Faheem AI Engine</p>

                    {/* --- SAIP BADGE (Card Version) --- */}
                    <div className="mb-8 inline-flex items-center gap-3 bg-emerald-900/10 border border-emerald-500/20 rounded-lg px-3 py-1.5 backdrop-blur-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-[pulse_2s_infinite]" />
                        <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">SAIP Certified</span>
                    </div>

                    {/* Code Lines Animation */}
                    <div className="bg-slate-950/50 rounded-xl p-4 font-mono text-xs border border-white/5 h-32 relative overflow-hidden">
                        <div className="space-y-2">
                            {[1, 2, 3].map((i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.5, duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
                                    className="h-2 bg-gray-700 rounded w-3/4"
                                />
                            ))}
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 2, duration: 0.3, repeat: Infinity, repeatDelay: 3 }}
                                className="flex items-center gap-2 text-green-400 mt-4"
                            >
                                <Check className="w-4 h-4" />
                                <span>Tests Passed</span>
                            </motion.div>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 mt-8 flex items-center text-purple-400 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore Platform <span className="text-xs ml-1 opacity-70">(Beta)</span> <ArrowRight className="w-4 h-4 ml-2" />
                </div>
            </motion.div>
        </Link>
    );
};

const AssessmentToolCard = () => {
    return (
        <Link href="/products/risk-lens" className="block h-full">
            <motion.div
                whileHover={{ y: -10 }}
                className="group relative h-full p-8 rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_20px_-10px_rgba(59,130,246,0.3)] overflow-hidden flex flex-col justify-between"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                    <h3 className="text-3xl font-bold text-white mb-2">Qertex Assessment™</h3>
                    <p className="text-gray-400 mb-8">AI Compliance Consultant</p>

                    {/* Animation: Standards -> AI -> Strategic Plan */}
                    <div className="bg-slate-950/50 rounded-xl p-4 relative overflow-hidden h-40 flex items-center justify-center border border-white/5">
                        {/* Grid Background */}
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />

                        {/* Phase 1: Standards Ingestion (Orbiting Icons) */}
                        <motion.div
                            animate={{ opacity: [1, 0, 0, 1], scale: [1, 0.5, 0.5, 1] }}
                            transition={{ duration: 6, repeat: Infinity, times: [0, 0.3, 0.8, 1] }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            {[
                                { label: "ISO", x: -60, y: -20 },
                                { label: "TMMi", x: 60, y: -20 },
                                { label: "Qiyas", x: 0, y: 40 }
                            ].map((std, i) => (
                                <motion.div
                                    key={i}
                                    animate={{ x: [std.x, 0, 0, std.x], y: [std.y, 0, 0, std.y], opacity: [1, 0, 0, 1] }}
                                    transition={{ duration: 6, repeat: Infinity, times: [0, 0.3, 0.8, 1] }}
                                    className="absolute bg-slate-800 border border-white/10 px-2 py-1 rounded text-[10px] font-bold text-gray-300 shadow-lg z-20"
                                >
                                    {std.label}
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Phase 2: AI Processing (Central Brain) */}
                        <div className="relative z-10">
                            <motion.div
                                animate={{
                                    scale: [0, 1.2, 0],
                                    opacity: [0, 1, 0],
                                    rotate: [0, 180, 360]
                                }}
                                transition={{ duration: 6, repeat: Infinity, times: [0.2, 0.5, 0.8] }}
                                className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center border border-blue-500/30"
                            >
                                <BrainCircuit className="w-8 h-8 text-blue-400" />
                            </motion.div>
                        </div>

                        {/* Phase 3: Results & Plan (Document + Arrow) */}
                        <motion.div
                            animate={{ opacity: [0, 0, 1, 0], y: [10, 10, 0, -10] }}
                            transition={{ duration: 6, repeat: Infinity, times: [0.5, 0.6, 0.8, 1] }}
                            className="absolute inset-0 flex items-center justify-center z-30"
                        >
                            <div className="flex flex-col items-center gap-2">
                                <div className="bg-green-500/20 p-3 rounded-lg border border-green-500/50 backdrop-blur-md flex items-center gap-2 shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                                    <Check className="w-5 h-5 text-green-400" />
                                    <span className="text-xs font-bold text-green-300">Plan Generated</span>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>

                <div className="relative z-10 mt-8 flex items-center text-blue-400 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Generate Plan <span className="text-xs ml-1 opacity-70">(AI)</span> <ArrowRight className="w-4 h-4 ml-2" />
                </div>
            </motion.div>
        </Link>
    );
};

const ProprietaryProducts = () => {
    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Proprietary Platforms
                    </h2>
                    <div className="w-24 h-1 bg-iqon-red mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
                    <FaheemCard />
                    <AssessmentToolCard />
                </div>


            </div>
        </section>
    );
};

export default ProprietaryProducts;
