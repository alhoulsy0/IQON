"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const locations = [

    {
        id: "abudhabi",
        city: "UAE",
        country: "Bahrain",
        role: "Gulf Regional Office",
        top: "48%",
        left: "58%",
    },
    {
        id: "abudhabi",
        city: "Abu Dhabi",
        country: "UAE",
        role: "AI Sovereignty Hub",
        top: "50%",
        left: "60%",
    },
    {
        id: "amman",
        city: "Amman",
        country: "Jordan",
        role: "Center of Excellence & Delivery",
        top: "46%",
        left: "56%",
    },
];

const GlobalMap = () => {
    const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-iqon-red tracking-[0.2em] uppercase mb-4">
                        Operational Hubs
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white">
                        Global Presence
                    </h3>
                </div>

                <div className="relative w-full aspect-[16/9] max-w-5xl mx-auto bg-slate-900/50 rounded-3xl border border-white/5 overflow-hidden shadow-2xl">
                    {/* Abstract Dotted Map Background */}
                    <div className="absolute inset-0 opacity-20"
                        style={{
                            backgroundImage: `radial-gradient(#475569 1px, transparent 1px)`,
                            backgroundSize: '20px 20px'
                        }}
                    >
                    </div>

                    {/* World Map Silhouette */}
                    <div className="absolute inset-0 opacity-30 pointer-events-none flex items-center justify-center p-8">
                        <svg viewBox="0 0 1009.6727 665.96301" className="w-full h-full fill-white">
                            <g transform="translate(-150.16365,-200.0185)">
                                {/* North America */}
                                <path d="M 150.16365,260.0185 L 200,250 L 300,220 L 400,200.0185 L 450,250 L 400,400 L 350,450 L 300,400 L 250,350 L 150.16365,260.0185 Z" style={{ display: 'none' }} />
                                {/* Better paths for continents - Simplified for code brevity but recognizable */}
                                <path d="M420.3,310.4c-4.5-1.5-10.2-2.3-15.1-2.3c-15.1,0-28.5,7.6-36.4,19.1c-1.5,2.3-3,4.5-3,7.6c0,1.5,0,3,0.8,4.5
                        c3.8,10.6,13.6,18.2,25.7,18.2c2.3,0,4.5-0.8,6.8-0.8c12.1-3,22-11.4,26.5-22.7C426.4,327.1,424.9,318,420.3,310.4z" style={{ display: 'none' }} />

                                {/* Using a standard simplified world map path */}
                                <path d="M856.3,363.3l-2.3-1.5c-0.8-0.8-2.3-0.8-3-0.8c-0.8,0-2.3,0.8-3,1.5l-3.8,3.8c-0.8,0.8-0.8,2.3,0,3l1.5,1.5
                        c0.8,0.8,2.3,0.8,3,0l3.8-3.8c0.8-0.8,0.8-2.3,0-3L856.3,363.3z M866.9,358.8l-3.8-2.3c-0.8-0.8-2.3-0.8-3,0l-1.5,1.5
                        c-0.8,0.8-0.8,2.3,0,3l3.8,2.3c0.8,0.8,2.3,0.8,3,0l1.5-1.5C867.7,361.1,867.7,359.5,866.9,358.8z" />

                                {/* North America */}
                                <path d="M260,250 L350,250 L380,300 L350,450 L300,420 L250,350 L260,250 Z" className="opacity-0" /> {/* Placeholder for coordinate mapping */}

                                {/* Actual Map Path - Simplified */}
                                <path d="M168,220 Q300,180 450,220 L420,450 L380,500 L350,450 L300,420 L200,350 Z" className="hidden" />

                                {/* Let's use a reliable simplified path string for the whole world */}
                                <path d="M 230 250 L 350 220 L 450 250 L 400 450 L 350 500 L 300 450 Z M 480 480 L 550 480 L 520 650 L 450 600 Z M 580 250 L 700 250 L 680 500 L 600 450 Z M 720 250 L 950 250 L 900 500 L 750 450 Z M 850 550 L 950 550 L 920 650 L 820 600 Z" style={{ display: 'none' }} />

                                {/* I will use a cleaner, manually constructed set of polygons that look like a tech map */}
                                {/* North America */}
                                <path d="M250,250 L450,230 L420,450 L380,480 L300,400 Z" />
                                {/* South America */}
                                <path d="M430,500 L530,500 L500,750 L430,650 Z" />
                                {/* Europe */}
                                <path d="M550,250 L700,250 L680,350 L580,350 Z" />
                                {/* Africa */}
                                <path d="M560,380 L720,380 L700,650 L600,600 Z" />
                                {/* Asia */}
                                <path d="M720,250 L950,250 L900,500 L750,450 Z" />
                                {/* Australia */}
                                <path d="M850,600 L980,600 L950,720 L850,680 Z" />
                            </g>
                        </svg>
                    </div>

                    {/* Locations */}
                    {locations.map((loc) => (
                        <div
                            key={loc.id}
                            className="absolute"
                            style={{ top: loc.top, left: loc.left }}
                            onMouseEnter={() => setHoveredLocation(loc.id)}
                            onMouseLeave={() => setHoveredLocation(null)}
                        >
                            {/* Pulsing Beacon */}
                            <div className="relative flex items-center justify-center w-6 h-6 -translate-x-1/2 -translate-y-1/2 cursor-pointer group">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-iqon-red opacity-75 animate-ping" />
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-iqon-red group-hover:scale-125 transition-transform duration-300" />
                            </div>

                            {/* Tooltip */}
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                animate={{
                                    opacity: hoveredLocation === loc.id ? 1 : 0,
                                    y: hoveredLocation === loc.id ? 0 : 10,
                                    scale: hoveredLocation === loc.id ? 1 : 0.9,
                                    pointerEvents: hoveredLocation === loc.id ? "auto" : "none"
                                }}
                                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 z-20"
                            >
                                <div className="bg-slate-900/80 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-2xl text-center">
                                    <h4 className="text-white font-bold text-lg mb-1">{loc.city}</h4>
                                    <p className="text-iqon-red text-xs font-bold uppercase tracking-wider mb-2">{loc.country}</p>
                                    <p className="text-gray-400 text-xs">{loc.role}</p>

                                    {/* Connecting Line */}
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-px h-4 bg-gradient-to-b from-white/10 to-transparent" />
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GlobalMap;
