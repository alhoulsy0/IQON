"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { ArrowLeft, Copy, Download, Check, RefreshCw, Image as ImageIcon } from "lucide-react";
import { QertexLogo } from "@/components/QertexLogo";
import { Sora } from "next/font/google";
import { motion } from "framer-motion";
import { toBlob } from "html-to-image";

const sora = Sora({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function SignaturePage() {
    const [copied, setCopied] = useState(false);
    const [copiedImage, setCopiedImage] = useState(false);
    const signatureRef = useRef<HTMLDivElement>(null);

    // --- STATE FOR INPUTS ---
    const [formData, setFormData] = useState({
        name: "", // Default empty to keep "current layout" if desired, or user can input
        role: "Sales Director",
        company: "Qertex Global Intelligence",
        email: "info@qertex.com",
        phone: "",
        website: "www.qertex.com"
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // --- HTML GENERATION FOR CLIPBOARD/DOWNLOAD ---
    const getSignatureHTML = () => {
        const { name, role, company, email, phone, website } = formData;

        const mainTitle = name ? name : role;

        // Contact Line construction
        const contactParts = [];
        if (phone) contactParts.push(`<a href="tel:${phone}" style="color: #475569; text-decoration: none;">${phone}</a>`);
        if (email) contactParts.push(`<a href="mailto:${email}" style="color: #475569; text-decoration: none;">${email}</a>`);
        if (website) contactParts.push(`<a href="https://${website.replace(/^https?:\/\//, '')}" style="color: #475569; text-decoration: none;">${website}</a>`);

        const contactLine = contactParts.join('&nbsp;|&nbsp;');

        return `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
<body style="font-family: 'Arial', sans-serif;">
<table cellpadding="0" cellspacing="0" border="0" style="font-family: 'Arial', sans-serif; font-size: 14px; line-height: 1.4; color: #020617;">
  <tr>
    <!-- LEFT COLUMN: LOGO & SLOGAN -->
    <td valign="top" style="padding-right: 20px; text-align: center;">
      <div style="width: 48px; height: 48px; background-color: #020617; border-radius: 4px; margin: 0 auto; text-align: center; line-height: 48px;">
        <span style="color: white; font-weight: bold; font-size: 24px;">Q</span>
      </div>
      <div style="margin-top: 8px; font-size: 10px; font-weight: 600; color: #64748b; font-family: 'Courier New', monospace; letter-spacing: -0.5px; white-space: nowrap;">
        Intelligence.<br/>Switched On.
      </div>
    </td>
    
    <!-- DIVIDER -->
    <td valign="top" style="border-right: 2px solid #0052FF; width: 0px; padding: 0;"></td>
    <td width="20"></td>
    
    <!-- RIGHT COLUMN -->
    <td valign="top">
      <div style="font-size: 18px; font-weight: 700; color: #0052FF; margin-bottom: 4px; display: flex; align-items: center;">
        ${mainTitle}
        <span style="display: inline-block; width: 8px; height: 8px; background-color: #10B981; border-radius: 50%; margin-left: 8px;"></span>
      </div>
      
      ${name ? `<div style="font-size: 14px; font-weight: 600; color: #020617; margin-bottom: 2px;">${role}</div>` : ''}
      
      <div style="font-size: 14px; font-weight: ${name ? '400' : '600'}; color: #020617; margin-bottom: 8px;">
        ${company}
      </div>
      
      <div style="font-size: 13px; color: #475569; margin-bottom: 12px;">
        ${contactLine}
      </div>
      
      <!-- FOOTER -->
      <div style="border-top: 1px solid #E2E8F0; padding-top: 8px; font-size: 11px; color: #94A3B8; letter-spacing: 0.05em;">
        <span style="font-weight: 600;">UAE | JORDAN | BAHRAIN</span>
      </div>
    </td>
  </tr>
</table>
</body>
</html>
    `.trim();
    };

    const handleCopy = async () => {
        if (!signatureRef.current) return;

        try {
            const clipboardItem = new ClipboardItem({
                "text/html": new Blob([signatureRef.current.innerHTML], { type: "text/html" }),
                "text/plain": new Blob([signatureRef.current.innerText], { type: "text/plain" }),
            });
            await navigator.clipboard.write([clipboardItem]);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy", err);
            navigator.clipboard.writeText(signatureRef.current.innerText);
        }
    };

    const handleCopyImage = async () => {
        if (!signatureRef.current) return;

        try {
            const blob = await toBlob(signatureRef.current, {
                backgroundColor: '#ffffff',
                cacheBust: true,
                pixelRatio: 2 // High res
            });

            if (blob) {
                await navigator.clipboard.write([
                    new ClipboardItem({ 'image/png': blob })
                ]);
                setCopiedImage(true);
                setTimeout(() => setCopiedImage(false), 2000);
            }
        } catch (err) {
            console.error("Failed to copy image", err);
            alert("Could not create image. Please try again.");
        }
    };

    const handleDownload = () => {
        const html = getSignatureHTML();
        const blob = new Blob([html], { type: "text/html" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "qertex-signature.html";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <main className={`min-h-screen relative flex flex-col items-center justify-center p-6 bg-slate-950 overflow-hidden ${sora.className}`}>

            {/* --- NEBULA MESH BACKGROUND --- */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[#020617]" />
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-900/20 rounded-full blur-[120px]" />
                <div className="absolute top-[20%] right-[30%] w-[30%] h-[30%] bg-[#0052FF]/10 rounded-full blur-[100px]" />
            </div>

            {/* --- HEADER --- */}
            <div className="absolute top-6 left-6 z-20">
                <Link href="/">
                    <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors bg-white/5 hover:bg-white/10 rounded-full border border-white/10 backdrop-blur-md">
                        <ArrowLeft size={16} />
                        Back to Home
                    </button>
                </Link>
            </div>

            <div className="relative z-10 w-full max-w-6xl flex flex-col lg:flex-row items-start justify-center gap-12 mt-20 lg:mt-0">

                {/* --- LEFT: INPUTS --- */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full lg:w-1/3 flex flex-col gap-6"
                >
                    <div className="text-left space-y-2">
                        <div className="flex items-center gap-2 mb-2">
                            <QertexLogo className="w-6 h-6" animated={false} />
                            <span className="text-white/80 font-bold text-lg">Qertex</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white">Signature Generator</h1>
                        <p className="text-white/40 text-sm">Enter your details to generate your professional signature.</p>
                    </div>

                    <div className="space-y-4 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
                        <div className="grid grid-cols-1 gap-4">
                            <div>
                                <label className="block text-xs font-medium text-white/50 mb-1 uppercase tracking-wider">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="e.g. John Doe"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/20 focus:outline-none focus:border-[#0052FF] focus:bg-white/10 transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-white/50 mb-1 uppercase tracking-wider">Role</label>
                                <input
                                    type="text"
                                    name="role"
                                    value={formData.role}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/20 focus:outline-none focus:border-[#0052FF] focus:bg-white/10 transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-white/50 mb-1 uppercase tracking-wider">Phone</label>
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="+1 234 567 890"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/20 focus:outline-none focus:border-[#0052FF] focus:bg-white/10 transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-white/50 mb-1 uppercase tracking-wider">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/20 focus:outline-none focus:border-[#0052FF] focus:bg-white/10 transition-all"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* --- RIGHT: TITLE & PREVIEW --- */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="w-full lg:w-2/3 flex flex-col gap-6"
                >
                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl">

                        {/* Card Header */}
                        <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
                            <span className="text-xs font-semibold text-white/50 uppercase tracking-wider">Live Preview</span>
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50" />
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50" />
                            </div>
                        </div>

                        {/* --- SIGNATURE PREVIEW AREA --- */}
                        <div className="p-10 bg-white/80 min-h-[400px] flex items-center justify-center">

                            {/* THIS IS THE RENDERED SIGNATURE WRAPPED FOR COPYING */}
                            <div ref={signatureRef} className="bg-white p-6 rounded-lg select-none pointer-events-none sm:select-text sm:pointer-events-auto">
                                <table cellPadding={0} cellSpacing={0} style={{ fontFamily: '"Arial", sans-serif', color: '#0f172a' }}>
                                    <tbody>
                                        <tr>
                                            {/* Left Column: Logo & Slogan */}
                                            <td style={{ paddingRight: '24px', verticalAlign: 'top', textAlign: 'center' }}>
                                                <div className="flex flex-col items-center">
                                                    {/* Logo Container */}
                                                    <div className="flex items-center justify-center w-12 h-12 bg-slate-950 rounded-md">
                                                        <QertexLogo className="w-8 h-8" animated={false} />
                                                    </div>

                                                    {/* Slogan */}
                                                    <div style={{ marginTop: '8px', fontSize: '10px', fontWeight: '600', color: '#64748b', fontFamily: 'monospace', letterSpacing: '-0.5px', lineHeight: '1.2', whiteSpace: 'nowrap' }}>
                                                        Intelligence.<br />Switched On.
                                                    </div>
                                                </div>
                                            </td>

                                            {/* Middle Column: Vertical Line */}
                                            <td style={{ borderRight: '2px solid #0052FF', padding: '0', width: '0px' }}></td>
                                            <td style={{ width: '24px' }}></td>

                                            {/* Right Column: Info */}
                                            <td style={{ verticalAlign: 'top' }}>
                                                <div style={{ marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                    <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#0052FF', lineHeight: '1.2' }}>
                                                        {formData.name || formData.role}
                                                    </span>
                                                    {/* Pulsing Dot */}
                                                    <span className="relative flex h-2.5 w-2.5">
                                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                                                    </span>
                                                </div>

                                                {/* If Name is provided, show role below it. If no name, role is header so we skip this line to avoid dupe */}
                                                {formData.name && (
                                                    <div style={{ fontSize: '14px', fontWeight: '600', color: '#0f172a', marginBottom: '2px' }}>
                                                        {formData.role}
                                                    </div>
                                                )}

                                                <div style={{ fontSize: '14px', fontWeight: formData.name ? '400' : '600', color: '#0f172a', marginBottom: '8px' }}>
                                                    {formData.company}
                                                </div>

                                                <div style={{ fontSize: '13px', color: '#475569', marginBottom: '14px' }}>
                                                    {formData.phone && (
                                                        <>
                                                            <a href={`tel:${formData.phone}`} style={{ color: '#475569', textDecoration: 'none', transition: 'color 0.2s' }}>{formData.phone}</a>
                                                            <span style={{ margin: '0 8px', color: '#cbd5e1' }}>|</span>
                                                        </>
                                                    )}
                                                    <a href={`mailto:${formData.email}`} style={{ color: '#475569', textDecoration: 'none', transition: 'color 0.2s' }}>{formData.email}</a>
                                                    <span style={{ margin: '0 8px', color: '#cbd5e1' }}>|</span>
                                                    <a href={`https://${formData.website.replace(/^https?:\/\//, '')}`} style={{ color: '#475569', textDecoration: 'none', transition: 'color 0.2s' }}>{formData.website}</a>
                                                </div>

                                                {/* Footer Line */}
                                                <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '10px', fontSize: '11px', color: '#64748b', letterSpacing: '0.05em', width: '100%', minWidth: '240px' }}>
                                                    <span style={{ fontWeight: '600' }}>UAE | JORDAN | BAHRAIN</span>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>

                        {/* --- FOOTER CONTROLS --- */}
                        <div className="px-6 py-4 bg-white/5 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <p className="text-xs text-white/40">Ready to use in Gmail, Outlook, and Apple Mail.</p>

                            <div className="flex gap-3 w-full sm:w-auto">
                                <button
                                    onClick={handleCopyImage}
                                    title="Copy as Image"
                                    className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-white/80 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-all hover:border-white/20 active:scale-95"
                                >
                                    {copiedImage ? <Check size={16} className="text-green-400" /> : <ImageIcon size={16} />}
                                    <span className="hidden sm:inline">Copy Img</span>
                                </button>

                                <button
                                    onClick={handleDownload}
                                    className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-white/80 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-all hover:border-white/20 active:scale-95"
                                >
                                    <Download size={16} />
                                    <span className="hidden sm:inline">HTML</span>
                                </button>

                                <button
                                    onClick={handleCopy}
                                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-[#0052FF] hover:bg-[#0040D0] shadow-lg shadow-blue-500/20 rounded-lg border border-blue-400/20 transition-all hover:scale-105 active:scale-95"
                                >
                                    {copied ? <Check size={16} strokeWidth={3} /> : <Copy size={16} />}
                                    {copied ? "Copied!" : "Copy Sig"}
                                </button>
                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </main>
    );
}
