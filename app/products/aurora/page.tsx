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
                        <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                            Accelerate your QA cycles with Faheem AI. From requirement analysis to automated test execution, Aurora handles the heavy lifting.
                        </p>

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
