"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
                    <p className="text-gray-400 mb-8">The Faheem AI Engine</p>

                    {/* Checkmark Animation */}
                    <div className="bg-slate-950/50 rounded-xl p-6 font-mono text-xs border border-white/5 relative overflow-hidden flex items-center justify-center min-h-[160px]">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0.5 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                            className="bg-purple-500/10 p-4 rounded-full"
                        >
                            <div className="text-purple-400 text-center space-y-2">
                                <div className="text-2xl font-bold">AI Core</div>
                                <div className="text-xs text-purple-300">Active & Learning</div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="relative z-10 mt-8 flex items-center text-purple-400 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Request Demo <ArrowRight className="w-4 h-4 ml-2" />
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
                className="group relative h-full p-8 rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm transition-all duration-300 hover:border-red-500/50 hover:shadow-[0_0_20px_-10px_rgba(230,0,35,0.3)] overflow-hidden flex flex-col justify-between"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                    <h3 className="text-3xl font-bold text-white mb-2">Qertex Assessment™</h3>
                    <p className="text-gray-400 mb-8">Scanning for Risk</p>

                    {/* Radar Animation */}
                    <div className="bg-slate-950/50 rounded-xl p-6 relative overflow-hidden flex items-center justify-center min-h-[160px] border border-white/5">
                        <div className="relative w-24 h-24 rounded-full border border-white/10 flex items-center justify-center">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 w-full h-full bg-gradient-to-tr from-transparent via-transparent to-red-500/50 rounded-full"
                                style={{ clipPath: "polygon(50% 50%, 100% 0, 100% 50%)" }}
                            />
                            <div className="w-2 h-2 bg-red-500 rounded-full shadow-[0_0_10px_red]"></div>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 mt-8 flex items-center text-iqon-red font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Start Assessment <ArrowRight className="w-4 h-4 ml-2" />
                </div>
            </motion.div>
        </Link>
    );
};

const ProductsPage = () => {
    return (
        <main className="min-h-screen bg-slate-950 pt-24">
            <Navbar />

            <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                {/* Background Texture */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-20"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                            Proprietary <span className="text-transparent bg-clip-text bg-gradient-to-r from-iqon-red to-red-600">Platforms</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            Engineered for sovereignty. Deployed for resilience. Explore our flagship AI and Risk Assessment engines.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <FaheemCard />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <AssessmentToolCard />
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default ProductsPage;
