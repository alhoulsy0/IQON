"use client";

import React, { useState, useRef } from "react";
import { Download, FileText, Check, Loader2, Image as ImageIcon, FileType, Presentation, Share2, LayoutTemplate } from "lucide-react";
import { toPng, toSvg } from "html-to-image";
import { Document, Packer, Paragraph, TextRun, ImageRun, Header, Footer, AlignmentType, BorderStyle } from "docx";
import { saveAs } from "file-saver";
import pptxgen from "pptxgenjs";
import { Logo } from "@/components/Logo";
import { motion } from "framer-motion";

type BrandVariant = "BRAND" | "AI" | "QA" | "SEC";

const BRAND_VARIANTS: { id: BrandVariant; label: string; desc: string; color: string }[] = [
    { id: "BRAND", label: "Trusted Partner", desc: "Main Corporate Identity. Red & Gray.", color: "bg-red-500" },
    { id: "AI", label: "Smart AI", desc: "Aurora Platform & AI Services.", color: "bg-red-600" },
    { id: "QA", label: "Quality Engineering", desc: "Assurance & Testing Services.", color: "bg-teal-400" },
    { id: "SEC", label: "Cyber Security", desc: "Security & Defense Operations.", color: "bg-blue-500" },
];

export default function DesignSystemPage() {
    const [generating, setGenerating] = useState<string | null>(null);
    const logoRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
    const lightLogoRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
    const socialLogoRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
    const bannerLogoRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

    // --- LOGO DOWNLOAD ---
    const handleDownloadLogo = async (variant: BrandVariant, format: "PNG" | "SVG") => {
        const ref = logoRefs.current[variant];
        if (!ref) return;

        setGenerating(`${variant}-${format}`);
        try {
            let dataUrl;
            let filename = `qertex-${variant.toLowerCase()}-logo`;

            if (format === "SVG") {
                // SVG export is tricky with complex React nodes (animations), 
                // but html-to-image supports basic SVG serialization.
                dataUrl = await toSvg(ref, { backgroundColor: 'transparent' });
                filename += ".svg";
            } else {
                // HD PNG (4x scale)
                dataUrl = await toPng(ref, {
                    pixelRatio: 4,
                    backgroundColor: 'transparent',
                    cacheBust: true
                });
                filename += ".png";
            }

            const link = document.createElement('a');
            link.download = filename;
            link.href = dataUrl;
            link.click();

        } catch (err) {
            console.error("Download failed", err);
            alert("Failed to generate image.");
        } finally {
            setGenerating(null);
        }
    };

    // --- DOCX GENERATION ---
    // --- DOCX GENERATION (PREMIUM) ---
    const handleGenerateDoc = async (variant: BrandVariant) => {
        setGenerating(`${variant}-DOC`);
        const ref = lightLogoRefs.current[variant];
        if (!ref) return;

        try {
            const logoDataUrl = await toPng(ref, { pixelRatio: 4, backgroundColor: 'transparent' });
            const response = await fetch(logoDataUrl);
            const blob = await response.blob();
            const arrayBuffer = await blob.arrayBuffer();

            const accentColor = variant === "BRAND" ? "DC2626" : variant === "AI" ? "E60023" : variant === "QA" ? "2DD4BF" : "0EA5E9";

            const doc = new Document({
                styles: {
                    default: {
                        heading1: {
                            run: { font: "Calibri", size: 56, bold: true, color: "1e293b" },
                            paragraph: { spacing: { before: 240, after: 120 } },
                        },
                        heading2: {
                            run: { font: "Calibri", size: 36, bold: true, color: accentColor, smallCaps: true },
                            paragraph: { spacing: { before: 240, after: 120 } },
                        },
                        document: {
                            run: { font: "Calibri", size: 22, color: "334155" },
                            paragraph: { spacing: { line: 276 } }, // 1.15 spacing
                        },
                    },
                },
                sections: [{
                    properties: {
                        page: {
                            margin: { top: 800, right: 1440, bottom: 800, left: 1440 }, // 1 inch margins horizontal
                        }
                    },
                    headers: {
                        default: new Header({
                            children: [
                                // Top Color Band
                                new Paragraph({
                                    border: { top: { style: BorderStyle.SINGLE, size: 48, space: 0, color: accentColor } }, // Thick top border
                                    spacing: { after: 400 },
                                    children: [],
                                }),
                                // Logo & Address Table
                                new Paragraph({
                                    children: [
                                        new ImageRun({
                                            data: arrayBuffer,
                                            transformation: { width: 180, height: 50 },
                                            type: "png",
                                        }),
                                    ],
                                    alignment: AlignmentType.RIGHT,
                                }),
                            ],
                        }),
                    },
                    footers: {
                        default: new Footer({
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({ text: "Qertex Global Intelligence", bold: true, color: "cbd5e1" }),
                                        new TextRun({ text: "  |  London • Riyadh • Singapore • New York", color: "64748b" }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                    spacing: { before: 300, after: 100 },
                                    border: { top: { style: BorderStyle.SINGLE, size: 6, space: 10, color: "334155" } },
                                }),
                                new Paragraph({
                                    children: [
                                        new TextRun({ text: "CONFIDENTIAL // OFFICIAL MEMORANDUM // " + new Date().getFullYear(), size: 16, color: accentColor }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                    },
                    children: [
                        // Date formatted
                        new Paragraph({
                            children: [new TextRun({ text: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }).toUpperCase(), size: 20, color: "94a3b8" })],
                            spacing: { after: 400 },
                        }),

                        // Title
                        new Paragraph({
                            text: "STRATEGIC DIRECTIVE",
                            heading: "Heading1",
                        }),

                        // Subtitle with Accent Color
                        new Paragraph({
                            text: "OPERATIONAL MEMORANDUM :: DIVISION " + variant,
                            heading: "Heading2",
                        }),

                        new Paragraph({
                            children: [new TextRun({ text: "", size: 10 })], // Spacer
                            border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "e2e8f0" } },
                            spacing: { after: 400 },
                        }),


                        // Body Text
                        new Paragraph({
                            children: [
                                new TextRun({ text: "EXECUTIVE SUMMARY", bold: true, color: "0f172a" }),
                            ],
                            spacing: { after: 120 },
                        }),
                        new Paragraph({
                            text: "This document outlines critical strategic initiatives for Q2 2025. It serves as a binding directive for all relevant stakeholders within the Qertex ecosystem. Please review the attached protocols regarding Data Sovereignty and Autonomous Compliance.",
                        }),
                        new Paragraph({ text: "" }), // spacing
                        new Paragraph({
                            text: "Our commitment to high-assurance engineering remains paramount. As we expand our 'Aurora' agentic capabilities, strict adherence to the TMMi Level 5 framework is mandatory.",
                        }),

                        new Paragraph({ text: "" }), // spacing
                        // Signoff
                        new Paragraph({
                            children: [
                                new TextRun({ text: "Authorized By:", size: 20, color: "94a3b8" }),
                            ],
                            spacing: { before: 600, after: 100 },
                        }),
                        new Paragraph({
                            children: [new TextRun({ text: "Office of the CTO", bold: true, size: 24, color: "0f172a" })],
                            spacing: { after: 0 },
                        }),
                        new Paragraph({
                            children: [new TextRun({ text: "Qertex Global Intelligence", size: 20, color: accentColor })],
                        }),
                    ],
                }],
            });

            const buffer = await Packer.toBlob(doc);
            saveAs(buffer, `Qertex_Official_${variant}.docx`);
        } catch (err) {
            console.error("Doc Gen Failed", err);
            alert("Failed to generate document.");
        } finally {
            setGenerating(null);
        }
    };


    // --- PPTX GENERATION (AVANT-GARDE) ---
    const handleGeneratePPTX = async (variant: BrandVariant) => {
        setGenerating(`${variant}-PPTX`);
        const ref = logoRefs.current[variant];
        if (!ref) return;

        try {
            const logoDataUrl = await toPng(ref, { pixelRatio: 4, backgroundColor: 'transparent' });
            const pres = new pptxgen();

            pres.author = 'Qertex Global';
            pres.company = 'Qertex';
            pres.title = 'Qertex Master Deck 2025';

            const accentColor = variant === "BRAND" ? "DC2626" : variant === "AI" ? "E60023" : variant === "QA" ? "2DD4BF" : "0EA5E9";

            // --- MASTER LAYOUT (Dark Aesthetic) ---
            pres.defineSlideMaster({
                title: 'MASTER_DARK',
                background: { color: "020617" },
                slideNumber: { x: "95%", y: "94%", w: 0.5, fontSize: 9, color: "DC2626", fontFace: "Courier New", bold: true },
                objects: [
                    // Dynamic Corner Shape (The "Shard")
                    { rect: { x: "85%", y: -0.5, w: 4, h: 4, rotate: 45, fill: { color: accentColor }, line: { color: "FFFFFF", width: 2 } } },

                    // Grid Elements (Subtle Tech Lines)
                    { rect: { x: 0.5, y: 0.5, w: "90%", h: 0.01, fill: { color: "1e293b" } } }, // Top Line
                    { rect: { x: 0.5, y: "90%", w: "90%", h: 0.01, fill: { color: "1e293b" } } }, // Bottom Line

                    // Logo (Top Left)
                    { image: { data: logoDataUrl, x: 0.5, y: 0.4, w: 1.5, h: 0.45 } },

                    // Footer Info
                    { text: { text: "CONFIDENTIAL // STRATEGY 2025", options: { x: 0.5, y: "94%", w: 5, fontSize: 9, color: "475569", fontFace: "Courier New" } } },
                    { text: { text: "SLIDE", options: { x: "90%", y: "94%", w: 1, fontSize: 9, color: "64748b", fontFace: "Courier New", align: "right" } } },
                ]
            });

            // --- TITLE SLIDE ---
            const slide1 = pres.addSlide({ masterName: 'MASTER_DARK' });
            // Big Hero Text
            slide1.addText(variant === "BRAND" ? "THE FUTURE\nIS SOVEREIGN." : variant, {
                x: 0.5, y: 2.5, w: 9, h: 3,
                fontSize: 60, color: "FFFFFF", bold: true, fontFace: "Arial Black",
                shadow: { type: "outer", color: accentColor, blur: 20, offset: 0, opacity: 0.4 }
            });

            slide1.addText("QERTEX GLOBAL INTELLIGENCE", { x: 0.5, y: 2.2, fontSize: 14, color: accentColor, fontFace: "Courier New" });

            // --- AGENDA SLIDE ---
            const slide2 = pres.addSlide({ masterName: 'MASTER_DARK' });
            slide2.addText("STRATEGIC AGENDA", { x: 0.5, y: 1.0, fontSize: 32, color: "FFFFFF", bold: true, fontFace: "Arial" });

            // Styled Items
            const items = ["Digital Sovereignty", "Autonomous Compliance", "High-Assurance AI", "Global Operations"];
            items.forEach((item, i) => {
                // Bullet
                slide2.addShape(pres.ShapeType.rect, { x: 0.5, y: 2.0 + (i * 0.8), w: 0.15, h: 0.15, fill: { color: accentColor } });
                // Text
                slide2.addText(item, { x: 0.8, y: 1.9 + (i * 0.8), fontSize: 20, color: "e2e8f0", bold: true });
                // Subtext
                slide2.addText("Restricted Access // Level 5 Clearance", { x: 0.8, y: 2.25 + (i * 0.8), fontSize: 12, color: "64748b" });
            });


            await pres.writeFile({ fileName: `Qertex_Deck_${variant}.pptx` });

        } catch (err) {
            console.error("PPT Gen Failed", err);
            alert("Failed to generate presentation.");
        } finally {
            setGenerating(null);
        }
    };


    // --- SOCIAL MEDIA IMAGE GENERATION ---
    const handleDownloadSocial = async (variant: BrandVariant) => {
        setGenerating(`${variant}-SOCIAL`);
        const ref = socialLogoRefs.current[variant]; // Use the dedicated HD container
        if (!ref) return;

        try {
            const dataUrl = await toPng(ref, {
                pixelRatio: 1, // Already 1080px native, no need to upscale further
                // backgroundColor is handled by the container div itself
            });

            const link = document.createElement('a');
            link.download = `qertex-${variant.toLowerCase()}-social.png`;
            link.href = dataUrl;
            link.click();
        } catch (err) {
            console.error("Social Gen Failed", err);
            alert("Failed to generate social image.");
        } finally {
            setGenerating(null);
        }
    };


    // --- BANNER GENERATION ---
    const handleDownloadBanner = async (variant: BrandVariant) => {
        setGenerating(`${variant}-BANNER`);
        const ref = bannerLogoRefs.current[variant];
        if (!ref) return;

        try {
            const dataUrl = await toPng(ref, { pixelRatio: 1 });
            const link = document.createElement('a');
            link.download = `qertex-${variant.toLowerCase()}-banner.png`;
            link.href = dataUrl;
            link.click();
        } catch (err) {
            console.error("Banner Gen Failed", err);
            alert("Failed to generate banner.");
        } finally {
            setGenerating(null);
        }
    };


    return (
        <main className="min-h-screen bg-slate-950 pt-32 px-6 pb-20 relative text-white">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl font-black mb-4">Design System Hub</h1>
                    <p className="text-slate-400 max-w-2xl">
                        Central repository for Qertex brand assets. Download source files or generate official documentation templates.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {BRAND_VARIANTS.map((variant) => (
                        <div key={variant.id} className="bg-slate-900 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all shadow-xl flex flex-col gap-6">
                            {/* Header Info */}
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-bold flex items-center gap-2">
                                        <span className={`w-2 h-2 rounded-full ${variant.color}`}></span>
                                        {variant.label}
                                    </h3>
                                    <p className="text-sm text-slate-500 mt-1">{variant.desc}</p>
                                </div>
                                <div className="text-xs font-mono bg-white/5 px-2 py-1 rounded text-slate-400">{variant.id}</div>
                            </div>

                            {/* Preview Stage (Hidden overflow, but we capture the child) */}
                            <div className="bg-slate-950/50 rounded-xl p-8 flex items-center justify-center border border-white/5 relative overflow-hidden h-40 group">
                                {/* Capture Target */}
                                {/* We add a white-bg wrapper specifically for the capture if needed, 
                                     but Logo component is designed to work on dark primarily. 
                                     For docs, we might want Dark-on-White? 
                                     The Logo component text is White by default.
                                     For the Word Doc we need a dark-text version ideally, or we capture it on dark and paste it on white...
                                     Let's stick to the current Logo design which is White text. 
                                     Wait, a word doc is usually white paper. White text logo won't show!
                                     
                                     Fix: The <Logo /> component uses dynamic text colors (gradients). 
                                     However, the main text is usually light. 
                                     We might need a 'light-mode' flag for the Logo component?
                                     Currently `Logo` is `use client` and styles are internal.
                                     
                                     Workaround: We will capture it as is (White Text) and for the Docx, 
                                     we might put a dark rectangle in the doc header? Or we accept it's a "Dark Mode" digital doc?
                                     
                                     The user asked for "Professional Company Document". Usually white background.
                                     If the Qertex logo is white text, we need a dark background wrapper in the word doc header image.
                                 */}
                                <div ref={(el) => { logoRefs.current[variant.id] = el; }} className="p-4 inline-block">
                                    <Logo forceMode={variant.id} />
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto">
                                {/* Image Downloads */}
                                <div className="flex flex-col gap-2">
                                    <span className="text-[10px] uppercase font-bold text-slate-600 tracking-widest">Assets</span>
                                    <button
                                        onClick={() => handleDownloadLogo(variant.id, "PNG")}
                                        disabled={!!generating}
                                        className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 py-2 rounded-lg text-xs font-medium transition-colors"
                                    >
                                        {generating === `${variant.id}-PNG` ? <Loader2 className="w-3 h-3 animate-spin" /> : <ImageIcon className="w-3 h-3" />}
                                        Download PNG (HD)
                                    </button>
                                    <button
                                        onClick={() => handleDownloadLogo(variant.id, "SVG")}
                                        disabled={!!generating}
                                        className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 py-2 rounded-lg text-xs font-medium transition-colors"
                                    >
                                        {generating === `${variant.id}-SVG` ? <Loader2 className="w-3 h-3 animate-spin" /> : <FileType className="w-3 h-3" />}
                                        Download SVG
                                    </button>
                                    <div className="grid grid-cols-2 gap-2 mt-1">
                                        <button
                                            onClick={() => handleDownloadSocial(variant.id)}
                                            disabled={!!generating}
                                            className="flex items-center justify-center gap-2 bg-violet-600/20 hover:bg-violet-600/30 border border-violet-500/30 text-violet-200 py-2 rounded-lg text-xs font-medium transition-colors col-span-1"
                                        >
                                            {generating === `${variant.id}-SOCIAL` ? <Loader2 className="w-3 h-3 animate-spin" /> : <Share2 className="w-3 h-3" />}
                                            Social (Square)
                                        </button>
                                        <button
                                            onClick={() => handleDownloadBanner(variant.id)}
                                            disabled={!!generating}
                                            className="flex items-center justify-center gap-2 bg-pink-600/20 hover:bg-pink-600/30 border border-pink-500/30 text-pink-200 py-2 rounded-lg text-xs font-medium transition-colors col-span-1"
                                        >
                                            {generating === `${variant.id}-BANNER` ? <Loader2 className="w-3 h-3 animate-spin" /> : <LayoutTemplate className="w-3 h-3" />}
                                            Banner (Cover)
                                        </button>
                                    </div>
                                </div>

                                {/* Doc Gen */}
                                <div className="flex flex-col gap-2">
                                    <span className="text-[10px] uppercase font-bold text-slate-600 tracking-widest">Documents</span>
                                    <button
                                        onClick={() => handleGenerateDoc(variant.id)}
                                        disabled={!!generating}
                                        className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white py-2 rounded-lg text-xs font-bold shadow-lg transition-all h-full"
                                    >
                                        {generating === `${variant.id}-DOC` ? <Loader2 className="w-4 h-4 animate-spin" /> : <FileText className="w-4 h-4" />}
                                        Letterhead (DOCX)
                                    </button>
                                    <button
                                        onClick={() => handleGeneratePPTX(variant.id)}
                                        disabled={!!generating}
                                        className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white py-2 rounded-lg text-xs font-bold shadow-lg transition-all h-full"
                                    >
                                        {generating === `${variant.id}-PPTX` ? <Loader2 className="w-4 h-4 animate-spin" /> : <Presentation className="w-4 h-4" />}
                                        Slide Deck (PPTX)
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Hidden Light Mode Capture Area (Off-screen) */}
            <div className="fixed top-[-9999px] left-[-9999px] pointer-events-none opacity-0">
                {BRAND_VARIANTS.map((variant) => (
                    <div key={variant.id} ref={(el) => { lightLogoRefs.current[variant.id] = el; }} className="p-4 inline-block">
                        <Logo forceMode={variant.id} lightMode={true} isStatic={true} />
                    </div>
                ))}
            </div>

            {/* Hidden HD Social Media Capture Area (Off-screen) */}
            <div className="fixed top-[-15000px] left-[-15000px] pointer-events-none opacity-0">
                {BRAND_VARIANTS.map((variant) => (
                    // 1080x1080 Social Square Canvas
                    <div
                        key={variant.id}
                        ref={(el) => { socialLogoRefs.current[variant.id] = el; }}
                        className="w-[1080px] h-[1080px] bg-[#020617] flex items-center justify-center"
                    >
                        {/* Scale up the vector logo to fill the canvas */}
                        <div className="scale-[5] transform origin-center">
                            <Logo forceMode={variant.id} isStatic={true} />
                        </div>
                    </div>
                ))}
            </div>
            {/* Hidden Banner Capture Area (Off-screen) */}
            <div className="fixed top-[-20000px] left-[-20000px] pointer-events-none opacity-0">
                {BRAND_VARIANTS.map((variant) => (
                    // 1500x500 Banner Canvas
                    <div
                        key={variant.id}
                        ref={(el) => { bannerLogoRefs.current[variant.id] = el; }}
                        className="w-[1500px] h-[500px] bg-[#020617] relative flex items-center justify-center overflow-hidden"
                    >
                        {/* Creative Background Elements */}
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                        {/* Glow Blob */}
                        {/* Glow Blob */}
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-${variant.id === 'BRAND' ? 'red-600' : variant.id === 'AI' ? 'red-600' : variant.id === 'QA' ? 'teal-400' : 'blue-600'}/20 blur-[100px] rounded-full`} />

                        {/* Content */}
                        <div className="scale-[3] transform origin-center relative z-10">
                            <Logo forceMode={variant.id} isStatic={true} />
                        </div>
                    </div>
                ))}
            </div>
        </main >
    );
}
