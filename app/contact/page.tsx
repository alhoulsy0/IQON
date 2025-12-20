"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Mail, MapPin, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        topic: "General Inquiry",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate creating a mailto link with the form data
        const subject = encodeURIComponent(`New Inquiry from ${formData.name}: ${formData.topic}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n` +
            `Company: ${formData.company}\n` +
            `Topic: ${formData.topic}\n\n` +
            `Message:\n${formData.message}`
        );

        // Slightly delayed to simulate processing/UX "feel" before opening link
        setTimeout(() => {
            window.location.href = `mailto:info@qertex.com?subject=${subject}&body=${body}`;
            setIsSubmitting(false);
            setIsSent(true);
        }, 1000);
    };

    return (
        <main className="min-h-screen bg-slate-950 text-white selection:bg-iqon-red/30">
            <Navbar />

            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 relative inline-block">
                        Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-iqon-red to-red-600">Touch</span>
                        {/* Decorative dash */}
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-iqon-red to-transparent"></div>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mt-8">
                        Ready to elevate your digital resilience? Connect with our experts to discuss your QA, AI, and Cybersecurity needs.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Contact Information & Context */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-iqon-red/30 transition-colors">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <span className="w-10 h-10 rounded-full bg-iqon-red/20 flex items-center justify-center text-iqon-red">
                                    <Mail className="w-5 h-5" />
                                </span>
                                Direct Contact
                            </h3>
                            <p className="text-gray-400 mb-2">For general inquiries and partnerships:</p>
                            <a href="mailto:info@qertex.com" className="text-xl font-bold text-white hover:text-iqon-red transition-colors flex items-center gap-2">
                                info@qertex.com
                            </a>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                                <h4 className="text-lg font-bold mb-2 text-white">Office Hours</h4>
                                <p className="text-gray-400">Mon - Fri</p>
                                <p className="text-gray-400">9:00 AM - 6:00 PM (GST)</p>
                            </div>
                            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                                <h4 className="text-lg font-bold mb-2 text-white">Location</h4>
                                <p className="text-gray-400">Dubai Internet City</p>
                                <p className="text-gray-400">Dubai, UAE</p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-white/5 rounded-2xl p-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-iqon-red/10 blur-3xl rounded-full"></div>
                            <h4 className="text-xl font-bold mb-4 z-10 relative">Operational Excellence</h4>
                            <p className="text-gray-400 z-10 relative">
                                "We don't just verify code; we engineer confidence. Reach out to see how our AI-driven testing frameworks can transform your delivery pipeline."
                            </p>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden"
                    >
                        {/* Subtle grid background */}
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none"></div>

                        {isSent ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-20">
                                <motion.div
                                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                                    className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 mb-6"
                                >
                                    <CheckCircle className="w-10 h-10" />
                                </motion.div>
                                <h3 className="text-3xl font-bold mb-4">Message Initiated</h3>
                                <p className="text-gray-400 max-w-md">
                                    Your email client should have opened with the message drafted. We look forward to hearing from you.
                                </p>
                                <button
                                    onClick={() => setIsSent(false)}
                                    className="mt-8 text-iqon-red hover:text-white transition-colors text-sm font-semibold underline underline-offset-4"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-semibold text-gray-300 ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-iqon-red/50 focus:ring-1 focus:ring-iqon-red/50 transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="company" className="text-sm font-semibold text-gray-300 ml-1">Company</label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            placeholder="Tech Corp Inc."
                                            className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-iqon-red/50 focus:ring-1 focus:ring-iqon-red/50 transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-semibold text-gray-300 ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-iqon-red/50 focus:ring-1 focus:ring-iqon-red/50 transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="topic" className="text-sm font-semibold text-gray-300 ml-1">Topic</label>
                                    <div className="relative">
                                        <select
                                            id="topic"
                                            name="topic"
                                            value={formData.topic}
                                            onChange={handleChange}
                                            className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white appearance-none focus:outline-none focus:border-iqon-red/50 focus:ring-1 focus:ring-iqon-red/50 transition-all cursor-pointer"
                                        >
                                            <option value="General Inquiry" className="bg-slate-900">General Inquiry</option>
                                            <option value="Software Quality" className="bg-slate-900">Software Quality Services</option>
                                            <option value="AI Solutions" className="bg-slate-900">AI Technology Solutions</option>
                                            <option value="Cybersecurity" className="bg-slate-900">Cybersecurity Assessment</option>
                                            <option value="Partnership" className="bg-slate-900">Partnership Proposal</option>
                                            <option value="Careers" className="bg-slate-900">Careers</option>
                                        </select>
                                        {/* Custom chevron */}
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-semibold text-gray-300 ml-1">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="How can we help you achieve your goals?"
                                        className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-iqon-red/50 focus:ring-1 focus:ring-iqon-red/50 transition-all resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-iqon-red hover:bg-red-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-red-900/20 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                    ) : (
                                        <>
                                            Send Message <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </button>

                                <p className="text-center text-xs text-gray-500 mt-4">
                                    By submitting this form, you agree to our <a href="/privacy" className="underline hover:text-white">Privacy Policy</a>.
                                </p>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>

            <Footer />
        </main>
    );
};

export default ContactPage;
