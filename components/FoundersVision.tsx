"use client";

import { motion } from "framer-motion";
import { Fingerprint } from "lucide-react";

const FoundersVision = () => {
    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative pl-8 md:pl-12 border-l-4 border-iqon-red"
                >
                    {/* Headline */}
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight font-sans">
                        Engineering the Era of Autonomous Excellence.
                    </h2>

                    {/* Body Text - Serif for Editorial Look */}
                    <div className="space-y-6 text-lg md:text-xl text-gray-300 font-serif leading-relaxed">
                        <p>
                            We didn’t build Qertex to be just another consultancy. We built it because we saw a fundamental flaw in how the industry operates.
                        </p>
                        <p>
                            For too long, businesses have relied on reactive security and manual quality assurance. The traditional consulting model—selling hours and bodies—is obsolete.
                        </p>
                        <p>
                            At Qertex, we are field experts with deep roots in <strong className="text-white">Cybersecurity</strong>, <strong className="text-white">Artificial Intelligence</strong>, and <strong className="text-white">Global Standards</strong>. Our philosophy is simple: <strong className="text-white italic">If a process is manual, it is a risk.</strong>
                        </p>
                        <p>
                            Our mission is to &apos;AI-enable&apos; every layer of your operation. We don&apos;t just secure your network; we deploy autonomous agents to hunt threats. We are here to switch on the intelligence dormant in your systems.
                        </p>
                    </div>

                    {/* Sign-off & Visual */}
                    <div className="mt-12 flex items-end justify-between">
                        <div>
                            <p className="text-iqon-red font-bold text-lg font-sans tracking-widest uppercase">
                                — The Founder, Qertex
                            </p>
                        </div>

                        {/* Abstract Signature Visual */}
                        <div className="opacity-50">
                            <Fingerprint className="w-16 h-16 text-white/20" strokeWidth={1} />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FoundersVision;
