"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Lock, ArrowRight, ShieldCheck } from "lucide-react";
import { QertexLogo } from "@/components/QertexLogo";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        // Hardcoded credentials as requested
        // In a real production app, use proper authentication (NextAuth, etc.)
        if (username === "qertexadmin" && password === "Optimal754232") {
            // Set cookie/localstorage
            localStorage.setItem("qertex_admin_token", "valid");
            router.push("/admin");
        } else {
            setError("Invalid credentials. Access denied.");
        }
    };

    return (
        <main className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-iqon-red/5 rounded-full blur-[120px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md bg-slate-900 border border-white/10 rounded-2xl p-8 shadow-2xl relative z-10 backdrop-blur-xl"
            >
                <div className="flex justify-center mb-8">
                    <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center border border-white/10 shadow-inner">
                        <Lock className="w-8 h-8 text-iqon-red" />
                    </div>
                </div>

                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-white mb-2">Restricted Access</h1>
                    <p className="text-slate-400 text-sm">Enter administrative credentials to continue.</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full bg-slate-950 text-white px-4 py-3 rounded-lg border border-white/10 focus:border-iqon-red focus:outline-none focus:ring-1 focus:ring-iqon-red transition-all"
                            placeholder="Identify User"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-slate-950 text-white px-4 py-3 rounded-lg border border-white/10 focus:border-iqon-red focus:outline-none focus:ring-1 focus:ring-iqon-red transition-all"
                            placeholder="Enter Key"
                        />
                    </div>

                    {error && (
                        <div className="p-3 bg-red-900/50 border border-red-500/50 rounded-lg text-red-200 text-sm text-center">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-iqon-red to-red-700 text-white font-bold py-3 rounded-lg hover:shadow-[0_0_20px_rgba(220,38,38,0.5)] transition-all flex items-center justify-center gap-2 group"
                    >
                        Authenticate <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </form>

                <div className="mt-6 pt-6 border-t border-white/5 text-center">
                    <div className="flex items-center justify-center gap-2 text-[10px] text-slate-600 uppercase tracking-widest">
                        <ShieldCheck className="w-3 h-3" />
                        Secure Gateway // QERTEX CORE
                    </div>
                </div>
            </motion.div>
        </main>
    );
}
