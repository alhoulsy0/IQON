"use client";

import React, { useState, useRef } from "react";
import { Download, FileText, Check, Loader2, Image as ImageIcon, FileType, Presentation } from "lucide-react";
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
    const handleGenerateDoc = async (variant: BrandVariant) => {
        setGenerating(`${variant}-DOC`);
        // Use Light Mode Ref for Documents (Dark text on White paper)
        const ref = lightLogoRefs.current[variant];
        if (!ref) return;

        try {
            // 1. Capture Logo as Buffer for Header
            const logoDataUrl = await toPng(ref, { pixelRatio: 4, backgroundColor: 'transparent' });
            // Convert DataURL to ArrayBuffer
            const response = await fetch(logoDataUrl);
            const blob = await response.blob();
            const arrayBuffer = await blob.arrayBuffer();

            // 2. Define Styles based on Variant
            // (Simulated mapping since docx handles fonts differently, we stick to standard fonts)
            const accentColor = variant === "BRAND" ? "DC2626" : variant === "AI" ? "E60023" : variant === "QA" ? "2DD4BF" : "0EA5E9";

            // 3. Create Document
            const doc = new Document({
                sections: [{
                    properties: {},
                    headers: {
                        default: new Header({
                            children: [
                                new Paragraph({
                                    children: [
                                        new ImageRun({
                                            data: arrayBuffer,
                                            transformation: { width: 150, height: 45 },
                                            type: "png", // Explicitly state type
                                        }),
                                    ],
                                    alignment: AlignmentType.RIGHT, // Logo top-right standard corporate
                                }),
                                // Accent Line
                                new Paragraph({
                                    text: "",
                                    border: {
                                        bottom: { color: accentColor, space: 10, style: BorderStyle.SINGLE, size: 12 }
                                    },
                                    spacing: { after: 200 }
                                })
                            ],
                        }),
                    },
                    footers: {
                        default: new Footer({
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Qertex Global Intelligence | www.qertex.com | info@qertex.com",
                                            size: 16, // 8pt
                                            color: "64748b"
                                        })
                                    ],
                                    alignment: AlignmentType.CENTER,
                                    border: {
                                        top: { color: "e2e8f0", space: 10, style: BorderStyle.SINGLE, size: 6 }
                                    },
                                    spacing: { before: 200 }
                                }),
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Confidential & Proprietary. 2025 All Rights Reserved.",
                                            size: 14,
                                            color: "94a3b8",
                                            italics: true
                                        })
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                    },
                    children: [
                        // Date
                        new Paragraph({
                            children: [new TextRun({ text: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }), size: 22 })],
                            spacing: { after: 400 },
                        }),

                        // Title
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "OFFICIAL STRATEGIC MEMORANDUM",
                                    bold: true,
                                    size: 28,
                                    color: "0f172a"
                                }),
                            ],
                            spacing: { after: 300 },
                        }),

                        // Body Text
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "Dear Stakeholder,",
                                    size: 24,
                                }),
                            ],
                            spacing: { after: 200 },
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "This document serves as a placeholder for official Qertex communications. The header confirms the specific operational division issuing this directive.",
                                    size: 24,
                                }),
                            ],
                            spacing: { after: 200 },
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "As a leader in Digital Sovereignty and High-Assurance Engineering, we adhere to strict documentation standards. This template ensures brand consistency across all external deliverables.",
                                    size: 24,
                                }),
                            ],
                            spacing: { after: 400 },
                        }),

                        // Signoff
                        new Paragraph({
                            children: [new TextRun({ text: "Sincerely,", size: 24 })],
                            spacing: { after: 600 },
                        }),

                        new Paragraph({
                            children: [new TextRun({ text: "The Qertex Team", bold: true, size: 24 })],
                        }),
                        new Paragraph({
                            children: [new TextRun({ text: "Office of the CTO", size: 20, color: "64748b" })],
                        }),
                    ],
                }],
            });

            // 4. Export
            const buffer = await Packer.toBlob(doc);
            saveAs(buffer, `Qertex_Letterhead_${variant}.docx`);

        } catch (err) {
            console.error("Doc Gen Failed", err);
            alert("Failed to generate document.");
        } finally {
            setGenerating(null);
        }
    };


    // --- PPTX GENERATION ---
    const handleGeneratePPTX = async (variant: BrandVariant) => {
        setGenerating(`${variant}-PPTX`);
        const ref = logoRefs.current[variant]; // Use Dark Mode Logo (White Text) for PPT (Dark BG)
        if (!ref) return;

        try {
            // 1. Capture Logo
            const logoDataUrl = await toPng(ref, { pixelRatio: 4, backgroundColor: 'transparent' });

            // 2. Initialize PPTX
            const pres = new pptxgen();

            // Set Metadata
            pres.author = 'Qertex Global Intelligence';
            pres.company = 'Qertex';
            pres.subject = 'Corporate Presentation';
            pres.title = 'Qertex Master Deck';

            // Define Colors
            const accentColor = variant === "BRAND" ? "DC2626" : variant === "AI" ? "E60023" : variant === "QA" ? "2DD4BF" : "0EA5E9";

            // 3. Define Master Slide (Theme)
            pres.defineSlideMaster({
                title: 'MASTER_DARK',
                background: { color: "020617" }, // Slate-950
                slideNumber: { x: "95%", y: "92%", w: 1, fontSize: 8, color: "64748b", fontFace: "Courier New" },
                objects: [
                    // Grid Bg (Optional, simplistic version)
                    // Logo Top Left
                    { image: { data: logoDataUrl, x: 0.5, y: 0.4, w: 1.5, h: 0.45 } },
                    // Confidential Footer Left
                    { text: { text: "CONFIDENTIAL // 2025", options: { x: 0.5, y: "92%", w: 3, fontSize: 8, color: "64748b", fontFace: "Courier New" } } },
                    // Web Footer Right
                    { text: { text: "www.qertex.com", options: { x: "85%", y: "92%", w: 2, fontSize: 8, color: "475569", align: "right", fontFace: "Courier New" } } },
                    // Accent Line Top
                    { rect: { x: 0, y: 0, w: "100%", h: 0.05, fill: { color: accentColor } } }
                ]
            });

            // 4. Slide 1: Title Slide
            const slide1 = pres.addSlide({ masterName: 'MASTER_DARK' });
            slide1.addText(variant === "BRAND" ? "The Company" : variant, { x: 0.5, y: 3.5, fontSize: 44, color: "FFFFFF", bold: true, fontFace: "Arial" });
            slide1.addText("Origins & Vision", { x: 0.5, y: 4.2, fontSize: 14, color: accentColor, fontFace: "Courier New" }); // Subtitle

            // 5. Slide 2: Content Slide
            const slide2 = pres.addSlide({ masterName: 'MASTER_DARK' });
            slide2.addText("Strategic Overview", { x: 0.5, y: 1.0, fontSize: 24, color: "FFFFFF", bold: true });

            slide2.addText([
                { text: "Core Objectives", options: { fontSize: 18, color: accentColor, bold: true, breakLine: true } },
                { text: "   • Digital Sovereignty First", options: { fontSize: 14, color: "94a3b8", breakLine: true } },
                { text: "   • High-Assurance Engineering", options: { fontSize: 14, color: "94a3b8", breakLine: true } },
                { text: "   • Autonomous AI Deployment", options: { fontSize: 14, color: "94a3b8" } }
            ], { x: 0.5, y: 2.0, w: 9, h: 4 });

            // 6. Export
            await pres.writeFile({ fileName: `Qertex_Deck_${variant}.pptx` });

        } catch (err) {
            console.error("PPT Gen Failed", err);
            alert("Failed to generate presentation.");
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
                        <Logo forceMode={variant.id} lightMode={true} />
                    </div>
                ))}
            </div>
        </main >
    );
}
