"use client";

import { motion } from "framer-motion";
import { Bot, Bug, FileCode, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const features = [
    {
        title: "Faheem AI Assistant",
        description: "Your digital QA Business Analyst. Faheem understands your requirements and automatically generates test scenarios.",
        icon: Bot,
    },
    {
        title: "Defect Prediction",
        description: "Predict potential bugs before they happen by analyzing code complexity and historical data.",
        icon: Bug,
    },
    {
        title: "TMMi Alignment",
        description: "Ensure your testing processes meet international TMMi maturity standards automatically.",
        icon: CheckCircle2,
    },
];

const CodeAnimation = () => {
    const [code, setCode] = useState("");
    const fullCode = `// Generating Test Case TC-104
describe('Login Flow', () => {
  it('should validate 2FA', async () => {
    await page.goto('/login');
    await page.type('#email', 'user@iqon.sa');
    await page.click('#submit');
    // Faheem AI: Checking for SQL Injection...
    // Faheem AI: Validating 2FA Token...
    expect(page).toHaveURL('/dashboard');
  });
});`;

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= fullCode.length) {
                setCode(fullCode.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    currentIndex = 0;
                    setCode("");
                    // Restart loop
                    // But useEffect runs once, so we need a way to loop. 
                    // For simplicity in this snippet, let's just stop or reset.
                    // Let's reset via state change trigger if needed, but simple typing is fine.
                }, 3000);
            }
        }, 50);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="font-mono text-sm text-green-400 p-6 bg-slate-950 rounded-xl border border-white/10 shadow-2xl h-full overflow-hidden relative">
            <div className="absolute top-0 left-0 right-0 h-8 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-xs text-gray-500">test_runner.ts — Faheem AI</span>
            </div>
            <pre className="mt-8 whitespace-pre-wrap">{code}<span className="animate-pulse">|</span></pre>
        </div>
    );
};

export default function AuroraPage() {
    return (
        <main className="min-h-screen bg-slate-950 pt-24">
            <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-iqon-red/10 border border-iqon-red/20 text-iqon-red text-xs font-bold uppercase tracking-wider mb-6">
                            <Bot className="w-4 h-4" />
                            The AI Test Engineer
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                            AURORA™ <br />
                            <span className="text-slate-500">Platform</span>
                        </h1>
                        <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                            Accelerate your QA cycles with Faheem AI. From requirement analysis to automated test execution, Aurora handles the heavy lifting.
                        </p>

                        {/* --- SAIP CERTIFICATION BADGE --- */}
                        <div className="mb-12 inline-block">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-900/40 to-slate-900/40 border border-emerald-500/30 backdrop-blur-xl p-4 pr-6 flex items-center gap-4 shadow-[0_0_20px_rgba(16,185,129,0.1)] transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] hover:border-emerald-500/50"
                            >
                                {/* Shine Effect */}
                                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />

                                <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center shadow-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                        <path d="m9 12 2 2 4-4" />
                                    </svg>
                                </div>
                                <div className="relative z-10">
                                    <div className="text-[10px] uppercase font-bold text-emerald-400 tracking-widest mb-0.5">Certified & Registered</div>
                                    <div className="text-sm font-bold text-white leading-tight">Saudi Authority for<br />Intellectual Property</div>
                                </div>

                                <div className="absolute right-0 top-0 p-2 opacity-20">
                                    {/* Abstract Pattern */}
                                    <div className="flex gap-1">
                                        <div className="w-1 h-3 bg-emerald-500 rounded-full" />
                                        <div className="w-1 h-5 bg-emerald-500 rounded-full" />
                                        <div className="w-1 h-2 bg-emerald-500 rounded-full" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <div className="space-y-8 mb-12">
                            {features.map((feature, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-iqon-red">
                                        <feature.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                                        <p className="text-gray-400">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/contact"
                            className="inline-flex items-center px-8 py-4 bg-iqon-red text-white font-bold rounded-lg hover:bg-red-700 transition-colors duration-300 shadow-[0_0_30px_rgba(230,0,35,0.3)] hover:shadow-[0_0_50px_rgba(230,0,35,0.5)]"
                        >
                            Request Access <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </motion.div>

                    {/* Right Side: Animation */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative h-[500px] w-full"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-iqon-red/20 to-transparent rounded-3xl blur-3xl opacity-30" />
                        <CodeAnimation />
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
