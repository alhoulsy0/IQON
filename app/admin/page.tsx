"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { PenTool, UserCircle, LayoutTemplate, Building2, LogOut, Lock, ArrowRight, ShieldCheck } from "lucide-react";

const AdminCard = ({ title, desc, icon: Icon, href, colorClass }: { title: string, desc: string, icon: any, href: string, colorClass: string }) => (
    <Link href={href} className="block h-full">
        <motion.div
            whileHover={{ y: -5 }}
            className="h-full bg-slate-900 border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all shadow-xl relative overflow-hidden group"
        >
            <div className={`absolute top-0 right-0 w-32 h-32 ${colorClass} opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:opacity-20 transition-opacity`} />

            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 border border-white/10 group-hover:bg-white/10 transition-colors">
                <Icon className="w-6 h-6 text-white" />
            </div>

            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">{desc}</p>

            <div className="flex items-center text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-white transition-colors">
                Access Tool <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
        </motion.div>
    </Link>
);

export default function AdminPage() {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("qertex_admin_token");
        if (!token) {
            router.push("/login"); // Redirect if not logged in
        } else {
            setIsAuthenticated(true);
        }
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem("qertex_admin_token");
        router.push("/login");
    };

    if (!isAuthenticated) return null; // Or a loading spinner

    return (
        <main className="min-h-screen bg-slate-950 pt-32 px-6 pb-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 relative z-10">
                    <div>
                        <div className="flex items-center gap-3 text-iqon-red mb-2">
                            <ShieldCheck className="w-5 h-5" />
                            <span className="text-xs font-bold uppercase tracking-widest">Administrator Access</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-white">Qertex Core Dashboard</h1>
                        <p className="text-slate-400 mt-4 max-w-2xl">Central command for internal tools, generators, and profile management.</p>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white text-sm font-bold flex items-center gap-2 transition-all"
                    >
                        <LogOut className="w-4 h-4" /> Sign Out
                    </button>
                </div>

                {/* Dashboard Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">

                    {/* Card 1: Signature Generator */}
                    <AdminCard
                        title="Signature Generator"
                        desc="Create and download official animated HTML email signatures for staff. Manage variants (Brand, AI, QA, SEC)."
                        icon={PenTool}
                        href="/signature"
                        colorClass="bg-red-500"
                    />

                    {/* Card 2: Profile Deck (The 'Profiles' user mentioned) */}
                    <AdminCard
                        title="Company Deck"
                        desc="View and download the Master Capability Presentation (PDF Mode Avail)."
                        icon={LayoutTemplate}
                        href="/profile"
                        colorClass="bg-blue-500"
                    />

                    {/* Card 3: Design System (Placeholder) */}
                    <AdminCard
                        title="Design System"
                        desc="Manage brand assets, typography tokens, and UI component library."
                        icon={UserCircle}
                        href="/admin/design"
                        colorClass="bg-purple-500"
                    />

                    {/* Card 4: Company Profile (Maybe About? Using About for now) */}
                    <AdminCard
                        title="Company About"
                        desc="Edit company details, history timeline, and public facing 'About' content."
                        icon={Building2}
                        href="/about"
                        colorClass="bg-green-500"
                    />

                </div>
            </div>
        </main>
    );
}
