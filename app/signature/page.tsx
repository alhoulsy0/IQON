"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { ArrowLeft, Copy, Download, Check, RefreshCw, Image as ImageIcon, Video } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Sora } from "next/font/google";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const sora = Sora({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function SignaturePage() {
    const router = useRouter();

    // --- AUTH CHECK ---
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    React.useEffect(() => {
        try {
            const token = localStorage.getItem("qertex_admin_token");
            if (!token) {
                router.push("/login?redirect=/signature");
            } else {
                setIsAuthenticated(true);
            }
        } catch (e) {
            console.error("Auth check failed", e);
            router.push("/login");
        }
    }, [router]);

    // Prevent rendering until auth is checked
    if (!isAuthenticated) return null;

    const [copied, setCopied] = useState(false);
    const [copiedImage, setCopiedImage] = useState(false);
    const [isGifRecording, setIsGifRecording] = useState(false);
    const signatureRef = useRef<HTMLDivElement>(null);
    const logoContainerRef = useRef<HTMLDivElement>(null);

    // --- STATE FOR INPUTS ---
    const [formData, setFormData] = useState({
        name: "",
        role: "Sales Director",
        company: "Qertex Global Intelligence",
        email: "info@qertex.com",
        phone: "",
        website: "www.qertex.com"
    });

    const [logoVariant, setLogoVariant] = useState<"BRAND" | "AI" | "QA" | "SEC">("BRAND");

    // --- DYNAMIC THEME (COLORS & FONTS) ---
    const getThemeAssets = () => {
        switch (logoVariant) {
            case 'BRAND': return {
                primary: '#DC2626', // Red
                accent: '#E5E7EB',  // Gray
                fontFamily: "'Arial', 'Helvetica', sans-serif",
                fontLabel: "Clean Sans"
            };
            case 'AI': return {
                primary: '#E60023',
                accent: '#fca5a5',
                fontFamily: "'Verdana', 'Geneva', sans-serif", // Wide, Modern, Readable
                fontLabel: "Modern Wide"
            };
            case 'QA': return {
                primary: '#2DD4BF',
                accent: '#5eead4',
                fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', sans-serif", // Tech-forward, Humanist
                fontLabel: "Tech Humanist"
            };
            case 'SEC': return {
                primary: '#DC2626', // Red
                accent: '#9CA3AF',  // Gray
                fontFamily: "'Courier New', 'Courier', monospace",
                fontLabel: "Monospace"
            };
            default: return {
                primary: '#0052FF',
                accent: '#10B981',
                fontFamily: "'Arial', sans-serif",
                fontLabel: "Standard"
            };
        }
    };
    const colors = getThemeAssets();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // --- HTML GENERATION FOR CLIPBOARD/DOWNLOAD ---
    const getSignatureHTML = () => {
        const { name, role, company, email, phone, website } = formData;
        const mainTitle = name ? name : role;
        const theme = getThemeAssets();

        const contactParts = [];
        // Outlook loves standard phone links, but sometimes strips styles. We inline everything carefully.
        if (phone) contactParts.push(`<a href="tel:${phone}" style="color: #64748b; text-decoration: none; font-family: ${theme.fontFamily};">${phone}</a>`);
        if (email) contactParts.push(`<a href="mailto:${email}" style="color: #64748b; text-decoration: none; font-family: ${theme.fontFamily};">${email}</a>`);
        if (website) contactParts.push(`<a href="https://${website.replace(/^https?:\/\//, '')}" style="color: #64748b; text-decoration: none; font-family: ${theme.fontFamily};">${website}</a>`);

        // Outlook Separator: Standard pipe with spacing
        const contactLine = contactParts.join('&nbsp;<span style="color: #cbd5e1;">|</span>&nbsp;');

        // GIF URL: MUST be a publicly hosted URL for Outlook to show animation.
        // Local blobs or Data URIs often fail in Outlook Desktop.
        const logoUrl = `https://qertex-assets.vercel.app/logos/${logoVariant.toLowerCase()}.gif`;

        return `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- Use MSO conditional for Outlook specific font fixing if needed, but standard stacks are safer -->
</head>
<body style="font-family: ${theme.fontFamily}; margin: 0; padding: 0;">
<table cellpadding="0" cellspacing="0" border="0" style="font-family: ${theme.fontFamily}; font-size: 14px; line-height: 1.4; color: #0f172a; mso-line-height-rule: exactly;">
  <tr>
    <!-- LEFT COLUMN: FULL LOGO GIF -->
    <!-- Outlook Motion Fix: Ensure img is block, has dimensions, and uses valid hosted HTTPS URL -->
    <td valign="middle" style="padding-right: 24px;">
       <div style="background-color: #020617; padding: 12px; border-radius: 12px; display: inline-block; mso-element: para-border-div;">
        <a href="https://www.qertex.com" style="text-decoration: none; border: 0;">
            <img src="${logoUrl}" alt="Qertex" width="180" height="54" border="0" style="display: block; border: 0; width: 180px; height: 54px; max-width: 180px;" />
        </a>
       </div>
    </td>
    
    <!-- DIVIDER -->
    <td valign="top" style="border-right: 2px solid ${theme.primary}; width: 0px; padding: 0; font-size: 1px; line-height: 1px;">&nbsp;</td>
    <td width="32" style="width: 32px; font-size: 1px; line-height: 1px;">&nbsp;</td>
    
    <!-- RIGHT COLUMN -->
    <td valign="top" style="font-family: ${theme.fontFamily};">
      <div style="font-size: 18px; font-weight: 700; color: ${theme.primary}; margin-bottom: 6px; display: flex; align-items: center; font-family: ${theme.fontFamily};">
        ${mainTitle}
      </div>
      
      ${name ? `<div style="font-size: 14px; font-weight: 600; color: #334155; margin-bottom: 4px; letter-spacing: -0.01em; font-family: ${theme.fontFamily};">${role}</div>` : ''}
      
      <div style="font-size: 14px; font-weight: 500; color: #64748b; margin-bottom: 12px; font-family: ${theme.fontFamily};">
        ${company}
      </div>
      
      <div style="font-size: 12px; color: #64748b; margin-bottom: 16px; line-height: 1.6; font-family: ${theme.fontFamily};">
        ${contactLine}
      </div>
      
      <!-- FOOTER -->
      <div style="border-top: 1px solid #e2e8f0; padding-top: 12px; font-size: 10px; font-weight: 600; color: #94a3b8; letter-spacing: 0.05em; text-transform: uppercase; font-family: ${theme.fontFamily};">
        UAE <span style="color: ${theme.primary}">&bull;</span> JORDAN <span style="color: ${theme.primary}">&bull;</span> BAHRAIN
      </div>
    </td>
  </tr>
</table>
</body>
</html>
    `.trim();
    };

    const handleCopy = async () => {
        const html = getSignatureHTML();
        try {
            const clipboardItem = new ClipboardItem({
                "text/html": new Blob([html], { type: "text/html" }),
                "text/plain": new Blob([signatureRef.current?.innerText || ""], { type: "text/plain" }),
            });
            await navigator.clipboard.write([clipboardItem]);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy", err);
        }
    };

    const handleDownloadGif = async () => {
        if (!signatureRef.current) return;
        setIsGifRecording(true);

        try {
            // Dynamic Import to avoid SSR/Initial Load Crashing
            // @ts-ignore
            const GIFEncoderModule = (await import('gif-encoder-2'));
            const GIFEncoder = GIFEncoderModule.default || GIFEncoderModule;
            const { toPng } = await import('html-to-image');

            // Setup GIF Encoder
            const width = signatureRef.current.offsetWidth * 2;
            const height = signatureRef.current.offsetHeight * 2;

            const encoder = new GIFEncoder(width, height);
            encoder.setQuality(10);
            encoder.start();

            // Recording loop: Capture for ~3 seconds to get full cycle
            const duration = 3000;
            const startTime = performance.now();
            let lastFrameTime = startTime;

            while (performance.now() - startTime < duration) {
                // Capture element
                const dataUrl = await toPng(signatureRef.current, {
                    pixelRatio: 2,
                    backgroundColor: '#ffffff',
                    cacheBust: true,
                });

                // Calculate accurate delay from last frame
                // This ensures the GIF plays at exactly the recorded speed
                const now = performance.now();
                const actualDelay = now - lastFrameTime;
                lastFrameTime = now;

                encoder.setDelay(actualDelay);

                // Load image to get raw pixel data
                const img = new Image();
                img.src = dataUrl;
                await new Promise(r => img.onload = r);

                const canvas = document.createElement('canvas');
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d', { willReadFrequently: true });
                if (!ctx) continue;

                ctx.drawImage(img, 0, 0);
                // Add Frame to Encoder
                encoder.addFrame(ctx);

                // Minimal yield to let React/Browser render the next animation frame
                await new Promise(r => setTimeout(r, 0));
            }

            encoder.finish();

            // Download logic
            const buffer = encoder.out.getData();
            const blob = new Blob([buffer], { type: 'image/gif' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `qertex-signature-${logoVariant.toLowerCase()}.gif`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);

        } catch (err) {
            console.error("GIF Generation Failed", err);
            alert("Failed to create GIF. Try again.");
        } finally {
            setIsGifRecording(false);
        }
    };

    const handleCopyImage = async () => {
        if (!signatureRef.current) return;
        try {
            const { toBlob } = await import('html-to-image');
            const blob = await toBlob(signatureRef.current, { backgroundColor: '#ffffff', pixelRatio: 2 });
            if (blob) {
                await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
                setCopiedImage(true);
                setTimeout(() => setCopiedImage(false), 2000);
            }
        } catch (err) { console.error(err); }
    };

    const handleDownload = () => {
        const html = getSignatureHTML();
        const blob = new Blob([html], { type: "text/html" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `qertex-signature.html`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };


    return (
        <main className={`min-h-screen relative flex flex-col items-center justify-center pt-32 pb-20 px-6 bg-slate-950 overflow-hidden ${sora.className}`}>

            {/* --- NEBULA MESH BACKGROUND --- */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[#020617]" />
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-900/20 rounded-full blur-[120px]" />
                <div className="absolute top-[20%] right-[30%] w-[30%] h-[30%] bg-[#0052FF]/10 rounded-full blur-[100px]" />
            </div>



            <div className="relative z-10 w-full max-w-6xl flex flex-col lg:flex-row items-start justify-center gap-12 mt-20 lg:mt-0">

                {/* --- LEFT: INPUTS --- */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full lg:w-1/3 flex flex-col gap-6"
                >
                    <div className="text-left space-y-2">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-white/80 font-bold text-lg">Qertex</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white">Signature Generator</h1>
                        <p className="text-white/40 text-sm">Select a brand identity to generate its specific animated signature.</p>
                    </div>

                    <div className="space-y-4 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">

                        {/* LOGO VARIANT SELECTOR */}
                        <div>
                            <label className="block text-xs font-medium text-white/50 mb-3 uppercase tracking-wider">Select Brand Identity</label>
                            <div className="grid grid-cols-4 gap-2">
                                {['BRAND', 'AI', 'QA', 'SEC'].map((variant) => (
                                    <button
                                        key={variant}
                                        onClick={() => setLogoVariant(variant as any)}
                                        className={`flex flex-col items-center justify-center p-3 rounded-lg border transition-all ${logoVariant === variant
                                            ? 'bg-white/10 border-[#0052FF] text-white shadow-[0_0_15px_rgba(0,82,255,0.3)]'
                                            : 'bg-white/5 border-transparent text-white/40 hover:bg-white/10 hover:text-white'
                                            }`}
                                    >
                                        {/* Use Logo Component scaled down for icon preview */}
                                        <div className="w-8 h-8 mb-2 flex items-center justify-center overflow-hidden">
                                            <div className="scale-75">
                                                {/* <Logo forceMode={variant as any} /> */}
                                                <div className="bg-white/10 w-full h-full rounded-full animate-pulse" />
                                            </div>
                                        </div>
                                        <span className="text-[10px] font-bold">{variant}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* INPUT FIELDS */}
                        <div className="grid grid-cols-1 gap-4">
                            {['name', 'role', 'phone', 'email'].map((field) => (
                                <div key={field}>
                                    <label className="block text-xs font-medium text-white/50 mb-1 uppercase tracking-wider">{field}</label>
                                    <input
                                        type={field === 'email' ? 'email' : 'text'}
                                        name={field}
                                        placeholder={`Enter ${field}...`}
                                        value={(formData as any)[field]}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/20 focus:outline-none focus:border-[#0052FF] focus:bg-white/10 transition-all"
                                    />
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={handleDownloadGif}
                            disabled={isGifRecording}
                            className={`w-full flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold text-white rounded-lg transition-all ${isGifRecording ? 'bg-slate-700 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700 shadow-xl shadow-purple-900/20'}`}
                        >
                            {isGifRecording ? (
                                <>
                                    <RefreshCw className="animate-spin w-4 h-4" />
                                    Recording GIF...
                                </>
                            ) : (
                                <>
                                    <Video className="w-4 h-4" />
                                    Download Signature GIF
                                </>
                            )}
                        </button>
                    </div>
                </motion.div>

                {/* --- RIGHT: PREVIEW --- */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="w-full lg:w-2/3 flex flex-col gap-6"
                >
                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl">
                        <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
                            <span className="text-xs font-semibold text-white/50 uppercase tracking-wider">Signature Preview</span>
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                            </div>
                        </div>

                        <div className="p-10 bg-white min-h-[400px] flex items-center justify-center">

                            {/* SIGNATURE CONTAINER */}
                            <div ref={signatureRef} className="bg-white p-8 rounded-lg select-none pointer-events-none sm:select-text sm:pointer-events-auto shadow-sm">
                                <table cellPadding={0} cellSpacing={0} style={{ fontFamily: '"Arial", sans-serif', color: '#0f172a' }}>
                                    <tbody>
                                        <tr>
                                            {/* LEFT: FULL LOGO */}
                                            <td style={{ paddingRight: '32px', verticalAlign: 'middle', textAlign: 'center' }}>
                                                {/* We render the React Component here. html-to-image captures this. */}
                                                <div ref={logoContainerRef} className="bg-[#020617] inline-block p-4 rounded-xl shadow-lg border border-white/10 relative overflow-hidden">
                                                    {/* Background Glow Effect */}
                                                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 pointer-events-none" />
                                                    <div className="relative z-10">
                                                        {/* <Logo forceMode={logoVariant} /> */}
                                                        <div className="text-white text-xs font-bold p-2">QERTEX</div>
                                                    </div>
                                                </div>
                                            </td>

                                            {/* DIVIDER */}
                                            <td style={{ borderRight: `2px solid ${colors.primary}`, padding: '0', width: '0px' }}></td>
                                            <td style={{ width: '32px' }}></td>

                                            {/* RIGHT: INFO */}
                                            <td style={{ verticalAlign: 'top', fontFamily: colors.fontFamily }}>
                                                <div style={{ marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                    <span style={{ fontSize: '18px', fontWeight: 'bold', color: colors.primary, lineHeight: '1.2', fontFamily: colors.fontFamily }}>
                                                        {formData.name || formData.role}
                                                    </span>
                                                </div>

                                                {formData.name && (
                                                    <div style={{ fontSize: '14px', fontWeight: '600', color: '#334155', marginBottom: '4px', border: '0', fontFamily: colors.fontFamily }}>
                                                        {formData.role}
                                                    </div>
                                                )}

                                                <div style={{ fontSize: '14px', fontWeight: '500', color: '#64748b', marginBottom: '12px', fontFamily: colors.fontFamily }}>
                                                    {formData.company}
                                                </div>

                                                <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '16px', lineHeight: '1.6', fontFamily: colors.fontFamily }}>
                                                    {formData.phone && (
                                                        <>
                                                            <a href={`tel:${formData.phone}`} style={{ color: '#64748b', textDecoration: 'none', transition: 'color 0.2s', fontFamily: colors.fontFamily }}>{formData.phone}</a>
                                                            <span style={{ margin: '0 8px', color: '#cbd5e1' }}>|</span>
                                                        </>
                                                    )}
                                                    <a href={`mailto:${formData.email}`} style={{ color: '#64748b', textDecoration: 'none', transition: 'color 0.2s', fontFamily: colors.fontFamily }}>{formData.email}</a>
                                                    <span style={{ margin: '0 8px', color: '#cbd5e1' }}>|</span>
                                                    <a href={`https://${formData.website.replace(/^https?:\/\//, '')}`} style={{ color: '#64748b', textDecoration: 'none', transition: 'color 0.2s', fontFamily: colors.fontFamily }}>{formData.website}</a>
                                                </div>

                                                <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '12px', fontSize: '10px', fontWeight: '600', color: '#94a3b8', letterSpacing: '0.05em', width: '100%', minWidth: '240px', textTransform: 'uppercase', fontFamily: colors.fontFamily }}>
                                                    UAE <span style={{ color: colors.primary }}>&bull;</span> JORDAN <span style={{ color: colors.primary }}>&bull;</span> BAHRAIN
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="px-6 py-4 bg-white/5 border-t border-white/5 flex gap-4 justify-end">
                            <button onClick={handleDownload} className="flex gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded text-sm transition-colors">
                                <Download size={16} /> HTML
                            </button>
                            <button onClick={handleCopy} className="flex gap-2 px-4 py-2 bg-[#0052FF] hover:bg-[#0040D0] text-white rounded text-sm transition-colors font-bold">
                                {copied ? <Check size={16} /> : <Copy size={16} />} Copy Sig
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
