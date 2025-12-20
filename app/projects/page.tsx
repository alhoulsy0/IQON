"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { ArrowUpRight, Zap, Database, Globe, Smartphone, ShieldCheck, CheckCircle2, Layers } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

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
        id: "cit-rollout",
        title: "Multi-Regional CIT Rollout",
        subtitle: "Corporate Income Tax Architecture",
        category: "Enterprise Finance",
        description: "Engineered the QA architecture for a global Corporate Income Tax rollout. Focused on creating a transparent, reliable, and secure reporting structure within SAP.",
        techEdge: "Specialized in process verification and automated data reconciliation to ensure financial reporting mirrored real-world tax liabilities.",
        impact: "Enabled organizations to achieve an audit-ready CIT rollout by identifying and resolving integration bottlenecks before deployment.",
        color: "from-orange-600 to-red-900",
        icon: Layers
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

const ProjectCard = ({ project, index, range, targetScale }: { project: any, index: number, range: any, targetScale: number }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const scale = useTransform(range, [0, 1], [1, targetScale]);

    return (
        <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
            <motion.div
                style={{ scale, top: `calc(-5% + ${index * 25}px)` }}
                className="flex flex-col relative w-full max-w-6xl mx-auto px-4 h-auto min-h-[500px] md:h-[600px] rounded-3xl origin-top bg-slate-900 border border-white/10 overflow-hidden shadow-2xl"
            >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />

                <div className="flex h-full flex-col md:flex-row p-12 gap-12 relative z-10">
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

            <div className="relative px-4 sm:px-6 lg:px-8 pb-32">
                {projects.map((project, index) => {
                    const targetScale = 1 - ((projects.length - index) * 0.05);
                    return <ProjectCard key={index} index={index} project={project} range={scrollYProgress} targetScale={targetScale} />;
                })}
            </div>

            <section className="h-[50vh] flex items-center justify-center relative z-10 bg-slate-950">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-white mb-8">Ready for your impact?</h2>
                    <Link href="/contact" className="px-8 py-4 bg-white text-black text-xl font-bold rounded-full hover:scale-105 transition-transform inline-block">
                        Start a Project
                    </Link>
                </div>
            </section>

        </main>
    );
}
