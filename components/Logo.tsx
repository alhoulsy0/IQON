"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LogoIcon = ({ className }: { className?: string }) => {
    const [logoMode, setLogoMode] = useState<"BRAND" | "AI" | "QA" | "SEC">("BRAND");

    useEffect(() => {
        const interval = setInterval(() => {
            setLogoMode(prev => {
                if (prev === "BRAND") return "AI";
                if (prev === "AI") return "QA";
                if (prev === "QA") return "SEC";
                return "BRAND";
            });
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return <LogoIconContainer mode={logoMode} className={className} />;
};

export const Logo = ({ forceMode, lightMode = false, isStatic = false }: { forceMode?: "BRAND" | "AI" | "QA" | "SEC", lightMode?: boolean, isStatic?: boolean }) => {
    // Logo Rotation State (Synchronized Logic for Text)
    const [logoMode, setLogoMode] = useState<"BRAND" | "AI" | "QA" | "SEC">(forceMode || "BRAND");

    // Cycle through the 4 pillars
    useEffect(() => {
        if (forceMode) {
            setLogoMode(forceMode);
            return;
        }

        const interval = setInterval(() => {
            setLogoMode(prev => {
                if (prev === "BRAND") return "AI";
                if (prev === "AI") return "QA";
                if (prev === "QA") return "SEC";
                return "BRAND";
            });
        }, 5000);
        return () => clearInterval(interval);
    }, [forceMode]);

    // Determine Active Color for Dynamic Styling
    const activeColor =
        logoMode === 'BRAND' ? '#DC2626' : // Red for Trusted Partner
            logoMode === 'AI' ? '#E60023' :
                logoMode === 'QA' ? '#2DD4BF' :
                    '#0EA5E9';

    return (
        <div className="flex items-center gap-2 group cursor-pointer">


            {/* ICON CONTAINER */}
            <div className={`w-14 h-14 ${lightMode ? 'brightness-75 contrast-125' : ''}`}>
                <LogoIconContainer mode={logoMode} isStatic={isStatic} />
            </div>

            {/* TEXT CONTENT - WITH SMART MOTION FILL */}
            <div className="flex flex-col justify-center h-10 w-fit min-w-[120px]">
                {/* 
                    THE KEY UPDATE: 
                    Dynamic Linear Gradient Text that sweeps with the Active Color 
                */}
                <span
                    className="text-2xl font-bold tracking-wide font-sans leading-none relative bg-clip-text text-transparent transition-all duration-700"
                    style={{
                        backgroundImage: `linear-gradient(120deg, ${lightMode ? '#0f172a' : '#ffffff'} 30%, ${activeColor} 50%, ${lightMode ? '#0f172a' : '#ffffff'} 70%)`,
                        backgroundSize: '200% auto',
                        animation: isStatic ? 'none' : 'textShine 5s linear infinite'
                    }}
                >
                    QERTEX
                </span>

                {/* SUBTITLE */}
                <div className="h-4 relative overflow-visible w-full mt-1">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={logoMode}
                            initial={{ y: "100%" }}
                            animate={{ y: "0%" }}
                            exit={{ y: "-100%" }}
                            transition={{ duration: 0.4, ease: "circOut" }}
                            className="absolute inset-0 flex items-center whitespace-nowrap"
                        >
                            <div
                                className="h-[2px] w-4 mr-2 rounded-full flex-shrink-0 transition-colors duration-500"
                                style={{ backgroundColor: activeColor }}
                            />
                            <span
                                className="text-[0.45rem] font-bold uppercase tracking-[0.1em] text-gray-400 transition-colors duration-500 truncate"
                                style={{
                                    // Subtle color tint for the subtitle too
                                    color:
                                        lightMode ? '#475569' : ( // Dark Slate for Light Mode
                                            logoMode === 'BRAND' ? '#E5E7EB' : // Light Gray
                                                logoMode === 'AI' ? '#fecaca' :
                                                    logoMode === 'QA' ? '#ccfbf1' :
                                                        '#bae6fd'
                                        )
                                }}
                            >
                                {logoMode === 'BRAND' && "Trusted Partner"}
                                {logoMode === 'AI' && "Smart AI"}
                                {logoMode === 'QA' && "Software Quality"}
                                {logoMode === 'SEC' && "Cyber Security"}
                            </span>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};


// Internal helper to ensure sync if controlled
const LogoIconContainer = ({ mode, className, isStatic = false }: { mode: "BRAND" | "AI" | "QA" | "SEC", className?: string, isStatic?: boolean }) => {
    return (
        <div className={`relative w-full h-full flex items-center justify-center perspective-[1200px] ${className || ""}`}>
            {/* Reactor Ring (Shared) - Hidden for Gemini Mode to let the spark shine */}
            <svg className={`absolute inset-0 w-full h-full ${!isStatic ? 'animate-[spin_10s_linear_infinite]' : ''} opacity-30 pointer-events-none transition-opacity duration-500 ${mode === 'BRAND' ? 'opacity-0' : 'opacity-30'}`} viewBox="0 0 60 60">
                <circle cx="30" cy="30" r="28" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="4 6" />
            </svg>

            <AnimatePresence mode="wait">
                {mode === "BRAND" && (
                    <motion.div
                        key="BRAND"
                        initial={{ scale: 0.5, opacity: 0, rotate: -90 }}
                        animate={{ scale: 1, opacity: 1, rotate: 0 }}
                        exit={{ scale: 1.5, opacity: 0, rotate: 90 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="absolute inset-0 flex items-center justify-center p-[20%]"
                    >
                        {/* BRAND: GEMINI MOTION (Star Sparkle) */}
                        <div className="relative w-full h-full flex items-center justify-center">
                            {/* Main Star */}
                            <svg viewBox="0 0 24 24" className="w-full h-full drop-shadow-[0_0_15px_rgba(220,38,38,0.6)]">
                                <defs>
                                    <linearGradient id="gemini-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#f8fafc" /> {/* White/Slate-50 */}
                                        <stop offset="50%" stopColor="#DC2626" /> {/* Red */}
                                        <stop offset="100%" stopColor="#475569" /> {/* Slate-600 */}
                                    </linearGradient>
                                </defs>
                                <path
                                    d="M12 0 C12 0 14 8 22 12 C 14 16 12 24 12 24 C 12 24 10 16 2 12 C 10 8 12 0 12 0 Z"
                                    fill="url(#gemini-grad)"
                                >
                                    {!isStatic && (
                                        <animate attributeName="d"
                                            values="M12 0 C12 0 14 8 22 12 C 14 16 12 24 12 24 C 12 24 10 16 2 12 C 10 8 12 0 12 0 Z; 
                                                M12 2 C12 2 15 9 20 12 C 15 15 12 22 12 22 C 12 22 9 15 4 12 C 9 9 12 2 12 2 Z; 
                                                M12 0 C12 0 14 8 22 12 C 14 16 12 24 12 24 C 12 24 10 16 2 12 C 10 8 12 0 12 0 Z"
                                            dur="3s"
                                            repeatCount="indefinite"
                                            calcMode="spline"
                                            keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
                                        />
                                    )}
                                    {isStatic && <path d="M12 0 C12 0 14 8 22 12 C 14 16 12 24 12 24 C 12 24 10 16 2 12 C 10 8 12 0 12 0 Z" />}
                                </path>
                            </svg>
                            {/* Secondary Star (Offset) */}
                            <svg viewBox="0 0 24 24" className="absolute top-0 right-0 w-1/2 h-1/2 -translate-y-1 translate-x-1 opacity-80">
                                <path
                                    d="M12 0 C12 0 14 8 22 12 C 14 16 12 24 12 24 C 12 24 10 16 2 12 C 10 8 12 0 12 0 Z"
                                    fill="url(#gemini-grad)"
                                >
                                    {!isStatic && <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="10s" repeatCount="indefinite" />}
                                </path>
                            </svg>
                        </div>
                    </motion.div>
                )}

                {mode === "AI" && (
                    <motion.div
                        key="AI"
                        initial={{ scale: 0.5, opacity: 0, rotate: -180 }}
                        animate={{ scale: 1, opacity: 1, rotate: 0 }}
                        exit={{ scale: 1.5, opacity: 0 }}
                        transition={{ duration: 0.6, type: "spring" }}
                        className="absolute inset-0 flex items-center justify-center float-animation"
                    >
                        {/* AI: THE 'NEURAL DATA MESH' (RED) */}
                        <svg viewBox="0 0 40 40" className="w-full h-full p-[15%] overflow-visible">
                            <defs>
                                <filter id="node-glow-controlled">
                                    <feDropShadow dx="0" dy="0" stdDeviation="1" floodColor="#E60023" />
                                </filter>
                            </defs>
                            <g stroke="white" strokeWidth="0.5" strokeOpacity="0.4">
                                <path d="M 20 8 L 8 20" />
                                <path d="M 20 8 L 32 20" />
                                <path d="M 20 8 L 20 32" />
                                <path d="M 8 20 L 20 32" />
                                <path d="M 32 20 L 20 32" />
                                <path d="M 8 20 L 32 20" />
                            </g>
                            <g fill="#E60023" filter="url(#node-glow-controlled)">
                                <circle cx="20" cy="8" r="2.5" />
                                <circle cx="8" cy="20" r="2.5" />
                                <circle cx="32" cy="20" r="2.5" />
                                <circle cx="20" cy="32" r="2.5" />
                            </g>
                            {!isStatic && (
                                <>
                                    <circle r="1.5" fill="white">
                                        <animateMotion path="M 20 8 L 8 20" dur="1.5s" repeatCount="indefinite" />
                                        <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite" />
                                    </circle>
                                    <circle r="1.5" fill="white">
                                        <animateMotion path="M 8 20 L 20 32" dur="1.5s" begin="0.5s" repeatCount="indefinite" />
                                        <animate attributeName="opacity" values="0;1;0" dur="1.5s" begin="0.5s" repeatCount="indefinite" />
                                    </circle>
                                    <circle r="1.5" fill="white">
                                        <animateMotion path="M 32 20 L 8 20" dur="2s" begin="0.2s" repeatCount="indefinite" />
                                        <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0.2s" repeatCount="indefinite" />
                                    </circle>
                                    <circle r="1" fill="#E60023">
                                        <animateMotion path="M 20 8 L 20 32" dur="1s" begin="1s" repeatCount="indefinite" />
                                        <animate attributeName="opacity" values="1;0" dur="1s" begin="1s" repeatCount="indefinite" />
                                    </circle>
                                </>
                            )}
                        </svg>
                    </motion.div>
                )}

                {mode === "QA" && (
                    <motion.div
                        key="QA"
                        initial={{ scale: 0.5, opacity: 0, rotate: 180 }}
                        animate={{ scale: 1, opacity: 1, rotate: 0 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.6, type: "spring" }}
                        className="absolute inset-0 flex items-center justify-center p-[15%]"
                    >
                        {/* QA: THE 'PRECISION CRYSTAL' (TEAL/MINT) */}
                        <svg viewBox="0 0 40 40" className="w-full h-full overflow-visible">
                            <defs>
                                <filter id="qa-glow-controlled">
                                    <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#2DD4BF" />
                                </filter>
                            </defs>
                            <g transform="translate(20 20)">
                                <g>
                                    {!isStatic && <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="10s" repeatCount="indefinite" />}
                                    <rect x="-12" y="-12" width="24" height="24" rx="4" fill="none" stroke="#2DD4BF" strokeWidth="1" opacity="0.6" />
                                </g>
                            </g>
                            <path d="M14 20 L18 24 L26 14" stroke="#2DD4BF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" filter="url(#qa-glow-controlled)" fill="none">
                                {!isStatic && <animate attributeName="stroke-dasharray" values="0 20; 20 20" dur="1s" fill="freeze" />}
                            </path>
                            <rect x="28" y="8" width="2" height="2" fill="white" className={!isStatic ? "animate-pulse" : ""} />
                            <rect x="8" y="28" width="2" height="2" fill="white" className={!isStatic ? "animate-pulse" : ""} />
                        </svg>
                    </motion.div>
                )}

                {mode === "SEC" && (
                    <motion.div
                        key="SEC"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 50, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute inset-0 flex items-center justify-center p-[15%]"
                    >
                        {/* SEC: THE 'CYBER SHIELD' (CYBER BLUE/INDIGO) */}
                        <svg viewBox="0 0 40 40" className="w-full h-full overflow-visible">
                            <defs>
                                <filter id="sec-glow-controlled">
                                    <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#0EA5E9" />
                                </filter>
                            </defs>
                            <path d="M20 4 L34 12 V22 L20 36 L6 22 V12 Z" fill="#0EA5E9" fillOpacity="0.1" stroke="#0EA5E9" strokeWidth="1" filter="url(#sec-glow-controlled)" />
                            <rect x="14" y="16" width="12" height="10" rx="2" fill="white" />
                            <path d="M17 16 V13 A3 3 0 0 1 23 13 V16" fill="none" stroke="white" strokeWidth="1.5" />
                            <line x1="0" y1="20" x2="40" y2="20" stroke="#0EA5E9" strokeWidth="1.5" opacity={isStatic ? "0" : "0.8"}>
                                {!isStatic && (
                                    <>
                                        <animate attributeName="y1" values="4;36;4" dur="2s" repeatCount="indefinite" />
                                        <animate attributeName="y2" values="4;36;4" dur="2s" repeatCount="indefinite" />
                                        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
                                    </>
                                )}
                            </line>
                        </svg>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
