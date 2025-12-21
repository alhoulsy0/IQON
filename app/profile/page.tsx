"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Download, Shield, Zap, Users, Globe, Crosshair, Scale, Cpu, Network, CheckCircle2, TrendingUp, Lock, Terminal, Activity, FileCheck, ArrowRight, ShieldCheck, Database, Layers, Smartphone, Eye, Server, Code2, Rocket, Briefcase, History, Hexagon } from "lucide-react";
import { toPng } from "html-to-image";
import jsPDF from "jspdf";
import { QertexLogo } from "@/components/QertexLogo"; // Import actual logo

// --- DATA: CORE CAPABILITIES (SERVICES) ---

const SERVICES = [
    {
        id: "SRV-01",
        title: "Software Quality Engineering",
        subtitle: "Resilience by Design",
        icon: Crosshair,
        desc: "We don't just test; we engineer invincibility. Our QA framework integrates directly into the CI/CD pipeline, catching critical defects before they exist.",
        bullets: [
            "Functional & Non-Functional Validation across complex SAP/Oracle ecosystems.",
            "Automated Performance Engineering for high-load national gateways.",
            "Security-First Code Analysis (SAST/DAST) integrated into DevSecOps."
        ],
        stat: "0.01%",
        statLabel: "Defect Leakage Rate"
    },
    {
        id: "SRV-02",
        title: "Process Improvement",
        subtitle: "Operational Maturity (TMMi Level 5)",
        icon: Scale,
        desc: "Elevating your organizational DNA to global standards. We audit, refine, and certify your engineering processes to ensure predictable, high-quality outcomes.",
        bullets: [
            "TMMi Level 5 Assessment & Certification readiness.",
            "ISO 9001 & ISO 27001 Compliance implementation.",
            "Gap Analysis & Process Re-engineering for legacy modernization."
        ],
        stat: "100%",
        statLabel: "Certification Success"
    },
    {
        id: "SRV-03",
        title: "AI Technology",
        subtitle: "Sovereign Intelligence",
        icon: Cpu,
        desc: "Deploying Generative AI that remains under your control. Our AURORA™ engine provides autonomous agents and secure LLMs tailored for government and enterprise data.",
        bullets: [
            "Custom LLM Fine-Tuning on air-gapped infrastructure.",
            "RAG (Retrieval-Augmented Generation) for accurate enterprise search.",
            "Autonomous Agents for back-office automation (HR, Finance, Legal)."
        ],
        stat: "10x",
        statLabel: "Productivity Gain"
    },
    {
        id: "SRV-04",
        title: "Cyber Resilience",
        subtitle: "Zero-Trust Defense",
        icon: ShieldCheck,
        desc: "Proving your security posture against advanced threats. We employ Red Teaming and adversarial simulation to harden your digital perimeter.",
        bullets: [
            "Advanced Red Teaming & Adversarial Simulation.",
            "Cloud Security Hardening (AWS/Azure/GCP).",
            "NCA & FedRAMP Regulatory Compliance Assurance."
        ],
        stat: "0ms",
        statLabel: "Breach Latency"
    },
    {
        id: "SRV-05",
        title: "Technical Staffing",
        subtitle: "Elite Squad Deployment",
        icon: Users,
        desc: "The right expert, exactly when you need them. We deploy TMMi-certified engineering squads to plug directly into your teams and accelerate delivery.",
        bullets: [
            "Rapid 72-Hour Deployment SLA for critical roles.",
            "Top 1% Global Talent Pool (Vetted Technologists).",
            "Flexible Engagement Models: Augmentation or Managed Squads."
        ],
        stat: "50+",
        statLabel: "Active Squads"
    }
];

// --- DATA: MISSION REPORTS (PROJECTS) ---

const PROJECTS = [
    {
        id: "PRJ-01",
        client: "Confidential GovEntity",
        title: "SAP Tax & Revenue Management",
        type: "Fiscal Infrastructure",
        icon: Database,
        challenge: "Implementing a nationwide VAT system with complex regulatory logic and zero room for financial error.",
        solution: "Deployed a 40-person QA squad to validate end-to-end tax calculation logic within SAP TRM, implementing automated regression suites for nightly builds.",
        impact: "$10B+ Secured Annually"
    },
    {
        id: "PRJ-02",
        client: "Regional Authority",
        title: "Global Excise Tax System",
        type: "Compliance Engine",
        icon: Activity,
        challenge: "Ensuring 'Audit-Ready' integrity for a multi-national excise tax engine handling billions in cross-border transactions.",
        solution: "Executed rigorous non-functional testing (Security & Performance) to guarantee data reconciliation and system stability under peak load.",
        impact: "100% Audit Compliance"
    },
    {
        id: "PRJ-03",
        client: "Ministry of Finance",
        title: "DMTT / Pillar Two",
        type: "International Tax",
        icon: Globe,
        challenge: "Validating the intricate calculation logic for the Domestic Minimum Top-up Tax to meet OECD global standards.",
        solution: "Engineered a custom validation framework to verifying tax liability calculations against thousands of edge-case scenarios.",
        impact: "Zero Calculation Errors"
    },
    {
        id: "PRJ-04",
        client: "Enterprise Conglomerate",
        title: "Corporate Income Tax (CIT)",
        type: "Financial Architecture",
        icon: Layers,
        challenge: "Rolling out a unified CIT reporting structure across 15+ subsidiaries with disparate legacy ERP systems.",
        solution: "Led the integration testing strategy, ensuring seamless data flow and accurate consolidated financial reporting.",
        impact: "Seamless Rollout"
    },
    {
        id: "PRJ-05",
        client: "LG Electronics",
        title: "Mobile Ecosystem",
        type: "Consumer Tech",
        icon: Smartphone,
        challenge: "Localizing mobile network capability and app ecosystem for the diverse MENA market fragmentation.",
        solution: "Established a regional device farm and testing lab to validate carrier compatibility and Arabic localization.",
        impact: "Top-Rated UX Regionally"
    }
];

// --- DATA: TIMELINE ---

const HISTORY = [
    { year: "2018", title: "Foundation", desc: "Qertex established as a specialized Quality Engineering boutique in Ottawa, Canada." },
    { year: "2020", title: "Regional Expansion", desc: "Opened operational hubs in Amman and Bahrain to serve growing GCC demand." },
    { year: "2022", title: "AI Integration", desc: "Launched AURORA™ division, integrating GenAI into core QA processes." },
    { year: "2024", title: "Sovereign Focus", desc: "Strategic pivot to specialize in Digital Sovereignty and National Infrastructure." },
    { year: "2025", title: "Global Reach", desc: "Achieved $10B+ transaction value secured and TMMi Level 5 capabilities." },
];

// --- INFOGRAPHIC COMPONENTS ---

const RadarChart = () => (
    <div className="relative w-64 h-64 mx-auto">
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-slate-800 stroke-current stroke-[0.5] fill-none">
            <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" />
            <polygon points="50,20 80,35 80,65 50,80 20,65 20,35" />
            <polygon points="50,35 65,42.5 65,57.5 50,65 35,57.5 35,42.5" />
            <line x1="50" y1="50" x2="50" y2="5" />
            <line x1="50" y1="50" x2="95" y2="27.5" />
            <line x1="50" y1="50" x2="95" y2="72.5" />
            <line x1="50" y1="50" x2="50" y2="95" />
            <line x1="50" y1="50" x2="5" y2="72.5" />
            <line x1="50" y1="50" x2="5" y2="27.5" />
            <motion.polygon
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.6, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                points="50,10 90,30 85,70 50,90 15,70 20,30"
                className="fill-iqon-red/50 stroke-iqon-red stroke-1"
            />
        </svg>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 text-[10px] text-white font-bold">STARTUP SPEED</div>
        <div className="absolute top-[25%] right-0 translate-x-12 text-[10px] text-white font-bold">ENTERPRISE SCALE</div>
        <div className="absolute bottom-[25%] right-0 translate-x-12 text-[10px] text-white font-bold">GOV SECURITY</div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6 text-[10px] text-white font-bold">AI PRECISION</div>
        <div className="absolute bottom-[25%] left-0 -translate-x-12 text-[10px] text-white font-bold">ISO COMPLIANCE</div>
        <div className="absolute top-[25%] left-0 -translate-x-12 text-[10px] text-white font-bold">COST EFFICIENCY</div>
    </div>
);

// --- BRANDING OVERLAY ---
const BrandingOverlay = ({ slideIndex, totalSlides, showLogo = true }: { slideIndex: number, totalSlides: number, showLogo?: boolean }) => (
    <div className="absolute inset-0 pointer-events-none z-50 flex flex-col justify-between p-8">
        {/* HEADER */}
        <div className="flex justify-between items-start">
            {/* LOGO */}
            <div className={`flex items-center gap-3 text-white ${!showLogo ? 'opacity-0' : ''}`}>
                <QertexLogo className="w-10 h-10 md:w-12 md:h-12" /> {/* Real Logo */}
                <div className="flex flex-col leading-none">
                    <span className="font-black text-xl md:text-2xl tracking-widest uppercase">
                        Qer<span className="text-iqon-red">tex</span>
                    </span>
                    <span className="text-[9px] font-mono text-slate-400 tracking-[0.1em] lowercase relative -top-0.5">Intelligence. Switched On.</span>
                </div>
            </div>
            {/* CONFIDENTIAL MARKER */}
            <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-slate-700" />
                <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">Confidential // 2025</span>
            </div>
        </div>

        {/* FOOTER */}
        <div className="flex justify-between items-end">
            {/* URL */}
            <div className="text-[10px] font-mono text-slate-600">www.qertex.com</div>
            {/* PAGE NUMBER */}
            <div className="text-[10px] font-mono text-slate-400">{String(slideIndex + 1).padStart(2, '0')} / {totalSlides}</div>
        </div>
    </div>
);

// --- SLIDE COMPONENTS ---

// 1. SECTION HEADER
const SlideSectionHeader = ({ title, subtitle, bgClass }: { title: string, subtitle: string, bgClass?: string }) => (
    <div className={`flex flex-col justify-center items-center h-full text-center relative overflow-hidden ${bgClass || ''}`}>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
        >
            <h2 className="text-xs font-bold text-iqon-red uppercase tracking-[0.5em] mb-6">{subtitle}</h2>
            <h1 className="text-7xl md:text-9xl font-black text-white leading-none tracking-tighter mb-8 shadow-2xl drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">{title}</h1>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-iqon-red to-transparent mx-auto" />
        </motion.div>
    </div>
);

const SlideCover = () => (
    <div className="flex flex-col justify-center h-full px-12 md:px-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pointer-events-none" />
        <div className="absolute right-0 top-0 w-2/3 h-full bg-gradient-to-l from-blue-900/10 to-transparent pointer-events-none" />
        <div className="mb-6 flex items-center gap-3 relative z-10">
            <div className="w-2 h-12 bg-iqon-red" />
            <h2 className="text-slate-400 uppercase tracking-[0.3em] text-sm font-bold">Confidential Capability Statement</h2>
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-white leading-none mb-8 relative z-10">
            MASTERS OF <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-slate-400">DIGITAL SOVEREIGNTY</span>
        </h1>
        <p className="text-2xl text-slate-300 max-w-3xl leading-relaxed border-l border-white/20 pl-6 relative z-10">
            We don't just build systems. We engineer the impossible for nations and enterprises that cannot afford to fail.
        </p>
    </div>
);

const SlideVision = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        <div className="flex flex-col justify-center p-12 md:p-24 bg-gradient-to-br from-slate-900 to-slate-950">
            <h2 className="text-4xl font-bold text-white mb-8 border-b border-white/10 pb-4">Our Vision</h2>
            <p className="text-lg text-slate-300 leading-loose mb-8">
                To be the global benchmark for <strong>Sovereign Digital Infrastructure</strong>. We align directly with national visions for economic diversification and technological independence, ensuring that critical data and AI capabilities remain within your borders and under your control.
            </p>
            <div className="grid grid-cols-2 gap-8">
                <div>
                    <h3 className="text-3xl font-bold text-white mb-1">2030</h3>
                    <p className="text-xs text-slate-500 uppercase tracking-widest">Strategic Horizon</p>
                </div>
                <div>
                    <h3 className="text-3xl font-bold text-white mb-1">100%</h3>
                    <p className="text-xs text-slate-500 uppercase tracking-widest">Data Residency</p>
                </div>
            </div>
        </div>
        <div className="relative bg-slate-950 flex items-center justify-center p-12 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
            <RadarChart />
        </div>
    </div>
);

const SlideHistory = () => (
    <div className="flex flex-col justify-center h-full px-12 md:px-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-iqon-red/5 rounded-full blur-[120px]" />
        <div className="text-center mb-16 relative z-10">
            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">Our Evolution</h2>
            <h3 className="text-4xl font-bold text-white">The Path to Sovereignty</h3>
        </div>
        <div className="relative border-t border-white/10 mt-12 pt-12 z-10">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-iqon-red to-transparent transform -translate-y-px shadow-[0_0_10px_rgba(220,38,38,0.5)]" />
            <div className="grid grid-cols-5 gap-4">
                {HISTORY.map((item, i) => (
                    <div key={i} className="relative pt-8 group">
                        <div className="absolute top-0 left-1/2 w-4 h-4 bg-slate-900 border-2 border-white/20 rounded-full -translate-x-1/2 -translate-y-1/2 group-hover:bg-iqon-red group-hover:border-iqon-red transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,1)] group-hover:shadow-[0_0_20px_rgba(220,38,38,0.6)]" />
                        <div className="text-center">
                            <div className="text-2xl font-bold text-white mb-2">{item.year}</div>
                            <div className="text-sm font-bold text-blue-400 mb-2">{item.title}</div>
                            <p className="text-xs text-slate-500 leading-relaxed group-hover:text-slate-300 transition-colors">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const SlideHierarchy = () => (
    <div className="flex flex-col justify-center h-full px-12 md:px-24 bg-slate-900/20 relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
            <div className="w-[800px] h-[800px] border border-white/10 rounded-full flex items-center justify-center animate-[spin_60s_linear_infinite]">
                <div className="w-[600px] h-[600px] border border-white/10 rounded-full flex items-center justify-center animate-[spin_40s_linear_infinite_reverse]">
                    <div className="w-[400px] h-[400px] border border-white/10 rounded-full animate-[pulse_5s_infinite]"></div>
                </div>
            </div>
        </div>

        <div className="text-center mb-16 relative z-10 w-full">
            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">Command Structure</h2>
            <h3 className="text-4xl font-bold text-white">Operational Node Hierarchy</h3>
        </div>

        <div className="relative max-w-5xl mx-auto w-full h-[500px] z-10">
            {/* Center Node: Executive */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-slate-950 border border-white/20 rounded-full flex flex-col items-center justify-center z-20 shadow-[0_0_50px_rgba(255,255,255,0.1)] group hover:border-iqon-red/50 transition-colors duration-500"
            >
                <div className="w-16 h-16 bg-iqon-red rounded-full flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(220,38,38,0.5)] group-hover:scale-110 transition-transform duration-300">
                    <QertexLogo className="w-8 h-8 text-white fill-white/20" />
                </div>
                <div className="font-bold text-white text-lg">QERTEX CORE</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Central Command</div>
            </motion.div>

            {/* Satellite Node 1: AI */}
            <motion.div
                initial={{ x: 0, y: 0, opacity: 0 }}
                animate={{ x: -250, y: -150, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute top-1/2 left-1/2 w-40 h-40 bg-slate-900/80 border border-blue-500/30 rounded-full flex flex-col items-center justify-center backdrop-blur-sm -ml-20 -mt-20 hover:bg-blue-900/20 transition-colors"
            >
                <Cpu className="w-8 h-8 text-blue-400 mb-2" />
                <div className="font-bold text-white">AI Division</div>
                <div className="text-[10px] text-blue-400">AURORA™</div>
            </motion.div>
            <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-blue-500/20 stroke-1" style={{ overflow: "visible" }}>
                <line x1="50%" y1="50%" x2="25%" y2="20%" />
            </svg>

            {/* Satellite Node 2: Quality */}
            <motion.div
                initial={{ x: 0, y: 0, opacity: 0 }}
                animate={{ x: 250, y: -150, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute top-1/2 left-1/2 w-40 h-40 bg-slate-900/80 border border-green-500/30 rounded-full flex flex-col items-center justify-center backdrop-blur-sm -ml-20 -mt-20 hover:bg-green-900/20 transition-colors"
            >
                <Crosshair className="w-8 h-8 text-green-400 mb-2" />
                <div className="font-bold text-white">Quality Eng.</div>
                <div className="text-[10px] text-green-400">Resilience</div>
            </motion.div>
            <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-green-500/20 stroke-1" style={{ overflow: "visible" }}>
                <line x1="50%" y1="50%" x2="75%" y2="20%" />
            </svg>

            {/* Satellite Node 3: Cyber */}
            <motion.div
                initial={{ x: 0, y: 0, opacity: 0 }}
                animate={{ x: 250, y: 150, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute top-1/2 left-1/2 w-40 h-40 bg-slate-900/80 border border-red-500/30 rounded-full flex flex-col items-center justify-center backdrop-blur-sm -ml-20 -mt-20 hover:bg-red-900/20 transition-colors"
            >
                <ShieldCheck className="w-8 h-8 text-red-400 mb-2" />
                <div className="font-bold text-white">Cyber Ops</div>
                <div className="text-[10px] text-red-400">Defense</div>
            </motion.div>
            <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-red-500/20 stroke-1" style={{ overflow: "visible" }}>
                <line x1="50%" y1="50%" x2="75%" y2="80%" />
            </svg>

            {/* Satellite Node 4: Product */}
            <motion.div
                initial={{ x: 0, y: 0, opacity: 0 }}
                animate={{ x: -250, y: 150, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute top-1/2 left-1/2 w-40 h-40 bg-slate-900/80 border border-purple-500/30 rounded-full flex flex-col items-center justify-center backdrop-blur-sm -ml-20 -mt-20 hover:bg-purple-900/20 transition-colors"
            >
                <Rocket className="w-8 h-8 text-purple-400 mb-2" />
                <div className="font-bold text-white">Product Labs</div>
                <div className="text-[10px] text-purple-400">Innovation</div>
            </motion.div>
            <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-purple-500/20 stroke-1" style={{ overflow: "visible" }}>
                <line x1="50%" y1="50%" x2="25%" y2="80%" />
            </svg>
        </div>
    </div>
);

const SlideService = ({ service }: { service: typeof SERVICES[0] }) => (
    <div className="grid grid-cols-1 md:grid-cols-12 h-full">
        <div className="md:col-span-4 bg-slate-900 border-r border-white/10 p-12 pt-32 flex flex-col justify-center relative overflow-hidden group">
            <div className={`absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-colors duration-700`} />
            <service.icon className="w-16 h-16 text-iqon-red mb-8 relative z-10" />
            <h3 className="text-3xl font-bold text-white mb-2 relative z-10">{service.title}</h3>
            <p className="text-blue-400 font-mono text-sm relative z-10">{service.subtitle}</p>
        </div>
        <div className="md:col-span-8 p-12 md:p-24 pt-32 flex flex-col justify-center bg-slate-950">
            <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-slate-700" />
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Core Capability // {service.id}</h4>
            </div>

            <p className="text-2xl text-white font-light leading-relaxed mb-12 border-l-2 border-iqon-red pl-6">
                {service.desc}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <ul className="space-y-4">
                    {service.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3 group">
                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                            <span className="text-slate-300 text-sm group-hover:text-white transition-colors">{bullet}</span>
                        </li>
                    ))}
                </ul>
                <div className="bg-slate-900 rounded-xl p-8 border border-white/10 text-center flex flex-col justify-center shadow-2xl hover:border-iqon-red/30 transition-colors">
                    <div className="text-5xl font-black text-white mb-2">{service.stat}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider">{service.statLabel}</div>
                </div>
            </div>
        </div>
    </div>
);

const SlideProduct = ({ title, subtitle, desc, features }: { title: string, subtitle: string, desc: string, features: string[] }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        <div className="p-12 md:p-24 pt-32 flex flex-col justify-center bg-slate-950 relative overflow-hidden">
            <div className="absolute inset-0 bg-purple-900/10" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]" />
            <div className="relative z-10">
                <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs text-white mb-6 uppercase tracking-wider border border-white/10 backdrop-blur-sm">Proprietary IP</div>
                <h2 className="text-5xl font-bold text-white mb-2">{title}</h2>
                <h3 className="text-xl text-purple-400 font-mono mb-8">{subtitle}</h3>
                <p className="text-lg text-slate-300 leading-relaxed mb-8">{desc}</p>
            </div>
        </div>
        <div className="p-12 md:p-24 pt-32 flex flex-col justify-center bg-slate-900/50 backdrop-blur-xl">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-8">Key Features</h4>
            <div className="grid grid-cols-1 gap-6">
                {features.map((f, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-slate-950 border border-white/10 rounded-lg group hover:border-purple-500/50 transition-colors">
                        <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-xs group-hover:bg-purple-500 group-hover:text-white transition-colors">{i + 1}</div>
                        <div className="text-white text-sm">{f}</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const SlideProject = ({ project }: { project: typeof PROJECTS[0] }) => (
    <div className="flex flex-col h-full bg-slate-950">
        <div className="h-1/2 w-full relative overflow-hidden p-12 md:p-24 pt-44 flex flex-col justify-end border-b border-white/10">
            <div className="absolute inset-0 bg-blue-900/10" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                    <project.icon className="w-8 h-8 text-blue-400" />
                    <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white uppercase tracking-wider">{project.type}</span>
                </div>
                <h3 className="text-4xl md:text-6xl font-black text-white mb-2">{project.title}</h3>
                <p className="text-xl text-slate-400">{project.client}</p>
            </div>
        </div>
        <div className="h-1/2 w-full grid grid-cols-1 md:grid-cols-3 divide-x divide-white/10">
            <div className="p-12 hover:bg-slate-900 transition-colors">
                <h4 className="text-xs font-bold text-iqon-red uppercase tracking-widest mb-4">The Challenge</h4>
                <p className="text-slate-300 text-sm leading-relaxed">{project.challenge}</p>
            </div>
            <div className="p-12 hover:bg-slate-900 transition-colors">
                <h4 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-4">The Solution</h4>
                <p className="text-slate-300 text-sm leading-relaxed">{project.solution}</p>
            </div>
            <div className="p-12 bg-slate-900 flex flex-col justify-center text-center">
                <h4 className="text-xs font-bold text-green-500 uppercase tracking-widest mb-2">Impact Delivered</h4>
                <div className="text-3xl font-bold text-white">{project.impact}</div>
            </div>
        </div>
    </div>
);

const SlideEngagement = () => (
    <div className="flex flex-col justify-center h-full px-12 md:px-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="text-center mb-16 relative z-10">
            <h2 className="text-4xl font-bold text-white">Engagement Models</h2>
            <p className="text-slate-400 mt-4">Flexible partnership structures designed for speed, scale, or outcome.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            <div className="bg-slate-900 border border-white/10 p-8 rounded-xl hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 shadow-xl">
                <Users className="w-10 h-10 text-blue-500 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Staff Augmentation</h3>
                <p className="text-sm text-slate-400 mb-6">Rapidly scale your existing teams with specific technical expertise. You manage, we provide top 1% talent.</p>
                <div className="text-xs font-mono text-white bg-blue-500/20 px-3 py-1 rounded inline-block">SLA: 72 Hours</div>
            </div>
            <div className="bg-slate-900 border border-white/10 p-8 rounded-xl hover:border-purple-500 hover:-translate-y-2 transition-all duration-300 relative shadow-2xl">
                <div className="absolute top-0 right-0 bg-purple-600 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-bl-lg">Most Popular</div>
                <Briefcase className="w-10 h-10 text-purple-500 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Managed Squads</h3>
                <p className="text-sm text-slate-400 mb-6">Autonomous, cross-functional pods (PM + Dev + QA) that own a specific feature or product stream completely.</p>
                <div className="text-xs font-mono text-white bg-purple-500/20 px-3 py-1 rounded inline-block">End-to-End Ownership</div>
            </div>
            <div className="bg-slate-900 border border-white/10 p-8 rounded-xl hover:border-green-500 hover:-translate-y-2 transition-all duration-300 shadow-xl">
                <Rocket className="w-10 h-10 text-green-500 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Outcome Based</h3>
                <p className="text-sm text-slate-400 mb-6">Project-based delivery with defined deliverables and milestones. We take the implementation risk.</p>
                <div className="text-xs font-mono text-white bg-green-500/20 px-3 py-1 rounded inline-block">Fixed Cost / Timeline</div>
            </div>
        </div>
    </div>
);

const SlideContact = () => (
    <div className="flex flex-col items-center justify-center h-full text-center relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-t from-iqon-red/10 to-transparent pointer-events-none" />
        <div className="w-24 h-24 bg-iqon-red rounded-full flex items-center justify-center mb-8 animate-pulse shadow-[0_0_50px_rgba(220,38,38,0.5)]">
            <Terminal className="w-10 h-10 text-white" />
        </div>
        <h2 className="text-5xl font-bold text-white mb-6">Initiate Partnership</h2>
        <p className="text-xl text-slate-400 max-w-xl mb-12">
            Scale your capabilities with the region's elite engineering force.
        </p>
        <div className="space-y-4">
            <div className="text-2xl text-white font-mono bg-white/5 px-8 py-4 rounded-full border border-white/10 backdrop-blur-md">info@qertex.com</div>
            <div className="text-sm text-slate-500 uppercase tracking-widest flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Encrypted Channel Open
            </div>
        </div>
    </div>
);

// --- MAIN PAGE COMPONENT ---

export default function ProfilePage() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPrintMode, setIsPrintMode] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // RAW SLIDES (Unwrapped)
    const rawSlides = [
        // 1. COMPANY
        <SlideCover key="cover" />,
        <SlideSectionHeader key="about-header" title="THE COMPANY" subtitle="Origins & Vision" />,
        <SlideVision key="vision" />,
        <SlideHistory key="history" />,
        <SlideHierarchy key="org" />,

        // 2. SERVICES
        <SlideSectionHeader key="services-header" title="CAPABILITIES" subtitle="Service Spectrum" bgClass="bg-blue-900/20" />,
        ...SERVICES.map(s => <SlideService key={s.id} service={s} />),

        // 3. PRODUCTS
        <SlideSectionHeader key="products-header" title="PROPRIETARY IP" subtitle="Technology Assets" bgClass="bg-purple-900/20" />,
        <SlideProduct
            key="aurora"
            title="AURORA™"
            subtitle="The AI Engine"
            desc="A sovereign GenAI platform designed for secure, air-gapped enterprise environments. It powers our test automation and autonomous agents."
            features={["Self-Healing Test Scripts", "Automated Root Cause Analysis", "Local LLM Hosting (No Data Exit)"]}
        />,
        <SlideProduct
            key="assessment"
            title="Qertex Assessment™"
            subtitle="Risk Lens"
            desc="An automated compliance auditing tool that scans your processes against international standards (TMMi, ISO) and regional mandates."
            features={["Instant Gap Analysis", "TMMi Level 5 Roadmap", "Regulatory Compliance checks"]}
        />,

        // 4. PROJECTS
        <SlideSectionHeader key="projects-header" title="MISSION REPORTS" subtitle="Proven Impact" bgClass="bg-green-900/20" />,
        ...PROJECTS.map(p => <SlideProject key={p.id} project={p} />),

        // 5. ENGAGEMENT
        <SlideSectionHeader key="engagement-header" title="ENGAGEMENT" subtitle="Partnership Models" />,
        <SlideEngagement key="models" />,
        <SlideContact key="contact" />
    ];

    // WRAP SLIDES WITH BRANDING
    const slides = rawSlides.map((slide, index) => (
        <div key={index} className="w-full h-full relative">
            <BrandingOverlay slideIndex={index} totalSlides={rawSlides.length} />
            {slide}
        </div>
    ));

    const nextSlide = () => setCurrentSlide(prev => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") nextSlide();
            if (e.key === "ArrowLeft") prevSlide();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [slides.length]);

    const handleDownloadPDF = async () => {
        setIsGenerating(true);
        setIsPrintMode(true);

        setTimeout(async () => {
            if (!containerRef.current) return;
            try {
                const imgData = await toPng(containerRef.current, {
                    quality: 1.0,
                    pixelRatio: 4, // Full HD / 4K Quality
                    backgroundColor: "#020617",
                    cacheBust: true,
                });

                const pdf = new jsPDF("p", "mm", "a4");
                const pdfWidth = pdf.internal.pageSize.getWidth();

                const img = new Image();
                img.src = imgData;
                await new Promise((resolve) => { img.onload = resolve; });

                const ratio = pdfWidth / img.width;
                const calculatedPdfHeight = img.height * ratio;

                const longPdf = new jsPDF('p', 'mm', [pdfWidth, calculatedPdfHeight]);
                longPdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, calculatedPdfHeight);
                longPdf.save("Qertex_Master_Deck_2025.pdf");

            } catch (error) {
                console.error("PDF Export Failed:", error);
                alert("Export failed.");
            } finally {
                setIsPrintMode(false);
                setIsGenerating(false);
            }
        }, 1000);
    };

    return (
        <main className="bg-slate-950 min-h-screen relative text-white overflow-hidden font-sans selection:bg-iqon-red selection:text-white">

            {/* CONTROLS */}
            {!isPrintMode && (
                <>
                    <div className="absolute top-24 right-8 z-50 flex gap-2">
                        <button
                            onClick={handleDownloadPDF}
                            disabled={isGenerating}
                            className="bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition-colors"
                            title="Download Full Deck"
                        >
                            {isGenerating ? <Activity className="w-5 h-5 animate-spin" /> : <Download className="w-5 h-5" />}
                        </button>
                    </div>

                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-4 items-center bg-slate-900/80 px-6 py-3 rounded-full border border-white/10 backdrop-blur-md">
                        <button onClick={prevSlide} className="hover:text-iqon-red transition-colors"><ChevronLeft className="w-5 h-5" /></button>
                        <div className="flex gap-2 text-xs font-mono text-slate-400">
                            {currentSlide + 1} / {slides.length}
                        </div>
                        <button onClick={nextSlide} className="hover:text-iqon-red transition-colors"><ChevronRight className="w-5 h-5" /></button>
                    </div>
                </>
            )}

            {/* VIEWPORT */}
            <div ref={containerRef} className={`${isPrintMode ? "w-full h-auto py-20" : "w-full h-screen relative"}`}>

                {isPrintMode ? (
                    // PRINT MODE
                    <div className="space-y-0">
                        {slides.map((slide, index) => (
                            <div key={index} className="w-full h-[700px] border-b border-slate-900 relative bg-slate-950 overflow-hidden break-after-page">
                                {slide}
                            </div>
                        ))}
                    </div>
                ) : (
                    // INTERACTIVE MODE
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.4, ease: "circOut" }}
                            className="w-full h-full pt-16"
                        >
                            {slides[currentSlide]}
                        </motion.div>
                    </AnimatePresence>
                )}
            </div>
        </main>
    );
}
