"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { ArrowUpRight, Zap, Database, Globe, Smartphone, ShieldCheck, CheckCircle2, Layers, Coins, Gamepad2, Building2, Lock, Cpu, Server, Briefcase, FileCode, Users } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

// --- EXISTING FEATURED PROJECTS (STICKY SCROLL) ---
const projects = [
    {
        id: "sap-vat",
        title: "SAP Tax & Revenue Management",
        subtitle: "VAT E2E Quality Assurance",
        category: "Fiscal Technology",
        description: "Spearheaded the comprehensive Quality Assurance lifecycle for VAT implementation within the SAP Tax & Revenue Management (TRM) ecosystem across the GCC. Bridged the gap between complex regional laws and technical configuration.",
        techEdge: "Managed the full testing stack including Functional, Integration, and User Acceptance Testing (UAT).",
        impact: "Guaranteed 100% accuracy in tax calculation logic and regulatory compliance, ensuring a risk-free go-live for multi-national entities.",
        color: "from-blue-600 to-indigo-900",
        icon: Database
    },
    {
        id: "excise-tax",
        title: "Global Excise Tax System",
        subtitle: "Audit-Ready Integrity",
        category: "Global Compliance",
        description: "Delivered end-to-end QA services for high-stakes Excise Tax projects globally. Focused on 'Audit-Ready' integrity to secure reliable tax engines for complex regional environments.",
        techEdge: "Implemented SAP Automation for regression testing and executed rigorous non-functional testing to validate system performance and data reconciliation.",
        impact: "Delivered seamless end-to-end integrations that maintain absolute data integrity across governmental and corporate platforms.",
        color: "from-emerald-600 to-teal-900",
        icon: ShieldCheck
    },
    {
        id: "dmtt",
        title: "Domestic Minimum Top-up Tax",
        subtitle: "DMTT (Pillar Two) - Full Spectrum QA",
        category: "International Tax",
        description: "Expert-level QA for the implementation of DMTT (Pillar Two) frameworks. Validated intricate calculation logic designed to meet evolving international tax standards.",
        techEdge: "Deployed automated SAP testing protocols covering functional, integration, and security layers across all business process touchpoints.",
        impact: "Secured the integrity of business-critical tax reporting, ensuring that stakeholder liabilities were accurate and compliant with global mandates.",
        color: "from-purple-600 to-violet-900",
        icon: Globe
    },

    {
        id: "lg-mobile",
        title: "LG Electronics MENA",
        subtitle: "Mobile Network & App Localization",
        category: "Mobile & Telecommunications",
        description: "Strategic partnership providing elite-level QA for mobile networks and native application ecosystems. Deep technical knowledge of regional infrastructure and hardware interoperability.",
        techEdge: "Conducted extensive localization, performance, and compatibility testing across a fragmented device landscape.",
        impact: "Optimized network reliability and user experience (UX) for the MENA market, ensuring high-quality, market-ready mobile solutions.",
        color: "from-pink-600 to-rose-900",
        icon: Smartphone
    },
];

// --- NEW PORTFOLIO DATA (GROUPED) ---
const portfolioGroups = [
    {
        group: "Taxation & Revenue Management",
        desc: "The financial backbone of the nation. Complete coverage of key fiscal systems.",
        icon: Coins,
        accent: "text-amber-400",
        border: "group-hover:border-amber-500/50",
        items: [
            {
                title: "The VAT System (KSA)",
                client: "Zakat, Tax and Customs Authority (ZATCA/GAZT)",
                domain: "Taxation / Finance",
                scope: "System Testing, UAT, Quality Management, Efficiency Testing.",
                impact: "Validating the core infrastructure for Value Added Tax implementation across the Kingdom."
            },
            {
                title: "VAT Implementation (Bahrain)",
                client: "National Bureau for Revenue (Bahrain)",
                domain: "International Taxation",
                scope: "System Testing, UAT, Quality Team Management.",
                impact: "Successfully exporting quality expertise to manage the VAT rollout for the Kingdom of Bahrain."
            },
            {
                title: "Excise Tax System (Saudi & Bahrain)",
                client: "Zakat, Tax and Customs Authority (ZATCA) & NBR",
                domain: "Specialized Taxation",
                scope: "System Testing, UAT, QA Management.",
                impact: "Ensuring precision in the calculation and collection of selective taxes on specific goods."
            },
            {
                title: "ERAD Revenue System",
                client: "Zakat, Tax and Customs Authority",
                domain: "Government Revenue",
                scope: "System Testing, UAT, Performance Efficiency.",
                impact: "Optimizing the digital gateway for government revenue management and reporting."
            }
        ]
    },
    {
        group: "Gaming & Digital Media",
        desc: "Testing performance where user experience is everything.",
        icon: Gamepad2,
        accent: "text-purple-400",
        border: "group-hover:border-purple-500/50",
        items: [
            {
                title: "Global Game Efficiency",
                client: "Logrus IT (South Korea)",
                domain: "Gaming / Private Sector",
                scope: "Compatibility Testing, Performance Testing, Localization/Language Testing.",
                impact: "Pushing boundaries for international gaming giants to ensure lag-free, culturally accurate gaming experiences."
            }
        ]
    },
    {
        group: "Mega-Government Platforms",
        desc: "Large-scale digital transformation serving millions of users.",
        icon: Building2,
        accent: "text-blue-400",
        border: "group-hover:border-blue-500/50",
        items: [
            {
                title: "Balady Platform",
                client: "Ministry of Municipal and Rural Affairs (MOMRAH)",
                domain: "Smart Cities / Municipal",
                scope: "Automation (UFT/LoadRunner), Performance, System Integration.",
                impact: "A massive digital ecosystem connecting municipalities, enabling permits, and powering the 'Smart City' vision."
            },
            {
                title: "Qiwa Platform",
                client: "Takamol Holding",
                domain: "Labor Market / Economy",
                scope: "System Testing, UAT, Quality Management.",
                impact: "The central hub for the Ministry of Human Resources, managing millions of visas, contracts, and labor regulations."
            },
            {
                title: "Citizen Account (CA)",
                client: "Ministry of Human Resources / Social Affairs",
                domain: "Social Welfare",
                scope: "High-Load Performance Testing (JMeter), UAT, System Testing.",
                impact: "Critical validation of the Kingdom's largest social safety net program, ensuring stability during peak traffic."
            },
            {
                title: "SPL (Saudi Post) Services",
                client: "Saudi Post (SPL)",
                domain: "Logistics",
                scope: "System Testing, UAT, Quality Team Management.",
                impact: "Transforming traditional postal services into a modern, digital-first logistics powerhouse."
            }
        ]
    },
    {
        group: "Cybersecurity & Secure Systems",
        desc: "Protecting sensitive data and financial assets.",
        icon: Lock,
        accent: "text-red-400",
        border: "group-hover:border-red-500/50",
        items: [
            {
                title: "Ministry of Finance Ecosystem",
                client: "Ministry of Finance",
                domain: "Government Finance / Security",
                scope: "Penetration Testing (Security), Code Review, UAT.",
                impact: "Securing high-sensitivity systems including Aid Management, Damage Assessment, and Financial Committees."
            },
            {
                title: "Electronic Records & Investigation",
                client: "Public Prosecution (Bureau of Investigation)",
                domain: "Legal / Security",
                scope: "App-Level Hacking Protection, Security Testing.",
                impact: "Ensuring the absolute integrity and secrecy of criminal records and legal case files."
            }
        ]
    },
    {
        group: "Automation, AI-Readiness & Performance",
        desc: "Using advanced tools (JMeter, Katalon, Selenium) to drive efficiency.",
        icon: Cpu,
        accent: "text-green-400",
        border: "group-hover:border-green-500/50",
        items: [
            {
                title: "Hafiz (National Labor Program)",
                client: "HRDF",
                domain: "Employment Logic / Big Data",
                scope: "Algorithmic Eligibility Testing, Performance, Integration.",
                impact: "Validating complex logic engines that match job seekers to benefits, training, and employment opportunities."
            },
            {
                title: "Saber Platform",
                client: "SASO (Standards & Metrology)",
                domain: "Quality Standards / Automation",
                scope: "Test Automation, System Testing.",
                impact: "Automating the conformity assessment process for goods entering the Saudi market."
            },
            {
                title: "Sakani",
                client: "Ministry of Housing",
                domain: "Real Estate / Housing",
                scope: "Performance & Load Testing (JMeter).",
                impact: "Stress-testing the platform that enables Saudi families to apply for and secure housing support."
            },
            {
                title: "International Banking & Telecom",
                client: "Confidential (Addiko Bank, Hyperoptic, Energy)",
                domain: "International / Fintech",
                scope: "Automation (Katalon, Selenium, Gatling), Functional Testing.",
                impact: "Delivering global-standard quality assurance for European banking and telecommunication giants."
            }
        ]
    }
];

const ProjectCard = ({ project, index, range, targetScale }: { project: any, index: number, range: any, targetScale: number }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    });

    const scale = useTransform(range, [0, 1], [1, targetScale]);

    return (
        <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
            <motion.div
                style={{ scale, top: `calc(-5% + ${index * 25}px)` }}
                className="flex flex-col relative w-full max-w-6xl mx-auto px-4 h-auto min-h-[500px] md:h-[600px] rounded-3xl origin-top bg-slate-900 border border-white/10 overflow-hidden shadow-2xl"
            >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />

                <div className="flex h-full flex-col md:flex-row p-6 md:p-12 gap-8 md:gap-12 relative z-10">
                    <div className="flex-1 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className={`p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/10`}>
                                    <project.icon className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-sm font-bold tracking-widest text-white/60 uppercase">{project.category}</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">{project.title}</h2>
                            <h3 className="text-xl text-white/80 font-medium mb-8">{project.subtitle}</h3>

                            <p className="text-lg text-gray-300 leading-relaxed mb-8 border-l-2 border-white/20 pl-6">
                                {project.description}
                            </p>
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col gap-6 justify-center">
                        <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-colors">
                            <h4 className="flex items-center gap-2 text-sm font-bold text-iqon-red uppercase tracking-wider mb-3">
                                <Zap className="w-4 h-4" /> Technical Edge
                            </h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {project.techEdge}
                            </p>
                        </div>

                        <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-colors">
                            <h4 className="flex items-center gap-2 text-sm font-bold text-green-400 uppercase tracking-wider mb-3">
                                <CheckCircle2 className="w-4 h-4" /> Team Impact
                            </h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {project.impact}
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default function ProjectsPage() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    return (
        <main ref={container} className="bg-slate-950 relative">

            <section className="h-[70vh] flex items-center justify-center pt-20">
                <div className="text-center px-4 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tighter">
                            Work that <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-iqon-red to-rose-600">Matters.</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            From ensuring sovereign tax compliance to optimizing national mobile networks. We engineer trust at scale.
                        </p>
                    </motion.div>
                </div>
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 pointer-events-none" />
                <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent" />
            </section>

            {/* STICKY SCROLL SECTION */}
            <div className="relative px-4 sm:px-6 lg:px-8 pb-32">
                {projects.map((project, index) => {
                    const targetScale = 1 - ((projects.length - index) * 0.05);
                    return <ProjectCard key={index} index={index} project={project} range={scrollYProgress} targetScale={targetScale} />;
                })}
            </div>

            {/* --- NEW EXTENSIVE PORTFOLIO SECTION --- */}
            <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/50" />
                <div className="max-w-7xl mx-auto relative z-10">

                    <div className="text-center mb-24">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 text-white/60 mb-8"
                        >
                            <Layers className="w-4 h-4" />
                            <span className="text-sm font-bold uppercase tracking-widest">Full Case Archive</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold text-white mb-6"
                        >
                            Impact Across <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Critical Sectors</span>
                        </motion.h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                            Our engineering teams have participated in the nation's most pivotal digital transformations.
                        </p>
                    </div>

                    <div className="space-y-24">
                        {portfolioGroups.map((group, groupIndex) => (
                            <div key={groupIndex}>
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="flex items-start gap-4 mb-12"
                                >
                                    <div className={`p-4 rounded-2xl bg-slate-800 border border-white/10 ${group.accent}`}>
                                        <group.icon className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2">{group.group}</h3>
                                        <p className="text-slate-400 text-lg">{group.desc}</p>
                                    </div>
                                </motion.div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {group.items.map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                            className="group relative h-full bg-slate-900/40 backdrop-blur-sm rounded-3xl border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden"
                                        >

                                            {/* Hover Spotlight Effect */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl" />

                                            <div className="relative p-8 h-full flex flex-col">

                                                {/* Header: Domain Tag */}
                                                <div className="flex justify-between items-start mb-6">
                                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10 backdrop-blur-md">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                                        <span className="text-[10px] font-bold text-white tracking-widest uppercase opacity-80">{item.domain.split('/')[0]}</span>
                                                    </div>
                                                    <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                                                </div>

                                                {/* Title & Client */}
                                                <div className="mb-8">
                                                    <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all duration-300">
                                                        {item.title}
                                                    </h4>
                                                    <p className="text-slate-400 text-sm font-medium flex items-center gap-2">
                                                        <span className="w-4 h-px bg-slate-600" /> {item.client}
                                                    </p>
                                                </div>

                                                <div className="mt-auto space-y-4">
                                                    {/* Scope */}
                                                    <div className="pl-4 border-l border-white/10">
                                                        <span className="text-[10px] uppercase text-slate-500 font-bold tracking-wider mb-1 block">Scope</span>
                                                        <p className="text-xs text-slate-300 leading-relaxed font-light">
                                                            {item.scope}
                                                        </p>
                                                    </div>

                                                    {/* Impact (Highly Visible) */}
                                                    <div className={`mt-4 p-4 rounded-xl bg-gradient-to-r from-white/5 to-transparent border border-white/5 group-hover:border-${group.accent ? group.accent.split('-')[1] : 'blue'}-500/30 transition-colors`}>
                                                        <span className={`text-[10px] uppercase font-bold tracking-wider mb-1 block ${group.accent} flex items-center gap-2`}>
                                                            <Zap className="w-3 h-3" /> Impact
                                                        </span>
                                                        <p className="text-sm text-white font-medium leading-relaxed">
                                                            {item.impact}
                                                        </p>
                                                    </div>
                                                </div>

                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            <section className="h-[50vh] flex items-center justify-center relative z-10 bg-slate-950 border-t border-white/10">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-white mb-8">Ready for your impact?</h2>
                    <Link href="/contact" className="px-8 py-4 bg-white text-black text-xl font-bold rounded-full hover:scale-105 transition-transform inline-block shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                        Start a Project
                    </Link>
                </div>
            </section>

        </main>
    );
}
