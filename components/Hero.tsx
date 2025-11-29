"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

const ParticleNetwork = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Generate static points for the network
    const points = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg className="w-full h-full opacity-30">
                {points.map((point, i) => (
                    <g key={point.id}>
                        <motion.circle
                            cx={`${point.x}%`}
                            cy={`${point.y}%`}
                            r="2"
                            fill="#E60023"
                            initial={{ opacity: 0.2 }}
                            animate={{
                                opacity: [0.2, 0.8, 0.2],
                                r: [2, 3, 2],
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                        {points.slice(i + 1).map((target) => {
                            const distance = Math.sqrt(
                                Math.pow(point.x - target.x, 2) + Math.pow(point.y - target.y, 2)
                            );
                            if (distance < 20) {
                                return (
                                    <motion.line
                                        key={`${point.id}-${target.id}`}
                                        x1={`${point.x}%`}
                                        y1={`${point.y}%`}
                                        x2={`${target.x}%`}
                                        y2={`${target.y}%`}
                                        stroke="#E60023"
                                        strokeWidth="0.5"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 0.15 }}
                                    />
                                );
                            }
                            return null;
                        })}
                    </g>
                ))}
            </svg>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950" />
        </div>
    );
};

const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-950 pt-20 pb-32">
            <ParticleNetwork />

            <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-4"
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white">
                        INTELLIGENCE. <br className="hidden lg:block" />
                        SWITCHED{" "}
                        <motion.span
                            animate={{
                                opacity: [0.8, 1, 0.8],
                                textShadow: [
                                    "0 0 10px rgba(230,0,35,0.5)",
                                    "0 0 30px rgba(230,0,35,0.8)",
                                    "0 0 10px rgba(230,0,35,0.5)"
                                ]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="text-iqon-red"
                        >
                            ON
                        </motion.span>
                        .
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
                        <span className="text-white font-bold drop-shadow-sm">Deep-Tech Architecture. Beyond Consulting.</span>
                        <br />
                        Re-engineering the enterprise to <span className="text-white font-bold drop-shadow-sm">&apos;AI-Enable&apos;</span> every operational layer.
                        <br />
                        From <span className="text-white font-bold drop-shadow-sm">Automating Quality</span> and <span className="text-white font-bold drop-shadow-sm">Fortifying Infrastructure</span> to deploying <span className="text-white font-bold drop-shadow-sm">Autonomous Agents</span> that run the business.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                >
                    <Link href="#services" className="w-full sm:w-auto px-8 py-4 bg-iqon-red hover:bg-red-700 text-white font-bold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(230,0,35,0.3)] hover:shadow-[0_0_30px_rgba(230,0,35,0.5)] transform hover:-translate-y-1">
                        Explore Our Services
                    </Link>
                    <a href="mailto:alhoulsy@gmail.com" className="w-full sm:w-auto px-8 py-4 border border-iqon-red/50 text-white font-bold rounded-full hover:bg-iqon-red/10 transition-all duration-300 backdrop-blur-sm">
                        Contact Us
                    </a>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
