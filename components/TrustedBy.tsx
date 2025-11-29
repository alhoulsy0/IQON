"use client";

import { motion } from "framer-motion";

const clients = [
    "QIWA",
    "ZATCA",
    "GAZT",
    "NBR",
    "CITIZEN ACCOUNT",
    "TAQAT",
    "VAT & TAXATION",
    "LG ELECTRONICS",
];

const TrustedBy = () => {
    return (
        <section className="py-16 bg-slate-950 border-y border-white/5 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
                <h3 className="text-sm font-bold text-iqon-red tracking-widest uppercase">
                    Trusted By Governments & Innovators
                </h3>
            </div>

            <div
                className="relative flex overflow-hidden"
                style={{
                    maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                    WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                }}
            >
                {/* Marquee Content */}
                <motion.div
                    className="flex gap-16 whitespace-nowrap items-center"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 40,
                            ease: "linear",
                        },
                    }}
                >
                    {[...clients, ...clients, ...clients, ...clients].map((client, index) => (
                        <span
                            key={index}
                            className="text-2xl md:text-3xl font-black text-slate-600 uppercase tracking-tight hover:text-white transition-colors duration-300 cursor-default"
                        >
                            {client}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TrustedBy;
