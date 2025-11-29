"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

const AuroraCard = () => {
    return (
        <Link href="/products/aurora" className="block h-full">
            <motion.div
                whileHover={{ y: -10 }}
                className="group relative h-full p-8 rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm transition-all duration-300 hover:border-red-500/50 hover:shadow-[0_0_20px_-10px_rgba(230,0,35,0.3)] overflow-hidden flex flex-col justify-between"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                    <h3 className="text-3xl font-bold text-white mb-2">The Aurora Platform</h3>
                    <p className="text-gray-400 mb-8">AI Test Generation</p>

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

                <div className="relative z-10 mt-8 flex items-center text-iqon-red font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore Platform <ArrowRight className="w-4 h-4 ml-2" />
                </div>
            </motion.div>
        </Link>
    );
};

const RiskLensCard = () => {
    return (
        <Link href="/products/risk-lens" className="block h-full">
            <motion.div
                whileHover={{ y: -10 }}
                className="group relative h-full p-8 rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm transition-all duration-300 hover:border-red-500/50 hover:shadow-[0_0_20px_-10px_rgba(230,0,35,0.3)] overflow-hidden flex flex-col justify-between"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                    <h3 className="text-3xl font-bold text-white mb-2">Risk-Lens</h3>
                    <p className="text-gray-400 mb-8">Scanning for Risk</p>

                    {/* Radar Scan Animation */}
                    <div className="relative w-32 h-32 mx-auto rounded-full border border-white/10 bg-slate-950/50 flex items-center justify-center overflow-hidden">
                        {/* Grid lines */}
                        <div className="absolute inset-0 border border-white/5 rounded-full scale-75" />
                        <div className="absolute inset-0 border border-white/5 rounded-full scale-50" />
                        <div className="absolute w-full h-[1px] bg-white/5 top-1/2 -translate-y-1/2" />
                        <div className="absolute h-full w-[1px] bg-white/5 left-1/2 -translate-x-1/2" />

                        {/* Scanning Line */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 w-full h-full bg-gradient-to-tr from-transparent via-transparent to-green-500/50 rounded-full"
                            style={{ clipPath: "polygon(50% 50%, 100% 0, 100% 50%)" }}
                        />

                        {/* Blip */}
                        <motion.div
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                            className="absolute top-1/3 right-1/3 w-2 h-2 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.8)]"
                        />
                    </div>
                </div>

                <div className="relative z-10 mt-8 flex items-center text-iqon-red font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore Engine <ArrowRight className="w-4 h-4 ml-2" />
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <AuroraCard />
                    <RiskLensCard />
                </div>
            </div>
        </section>
    );
};

export default ProprietaryProducts;
