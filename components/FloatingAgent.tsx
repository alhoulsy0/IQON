"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Sparkles, Send } from "lucide-react";
import Link from "next/link";
import { findResponse } from "./ChatKnowledgeBase";

type Message = {
    id: string;
    text: React.ReactNode;
    sender: "bot" | "user";
    type?: "text" | "link";
    linkUrl?: string;
    linkText?: string;
};

const FloatingAgent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "welcome",
            text: "Welcome to Qertex Global. I am your AI Consultant. Ask me about our Products, Services, or Projects!",
            sender: "bot",
        },
    ]);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = (text: string) => {
        if (!text.trim()) return;

        // Add user message
        const userMsg: Message = {
            id: Date.now().toString(),
            text: text,
            sender: "user",
        };
        setMessages((prev) => [...prev, userMsg]);
        setInputValue("");

        // Simulate thinking delay
        setTimeout(() => {
            const response = findResponse(text);
            let botMsg: Message;

            if (response) {
                // If we found a match in the knowledge base
                botMsg = {
                    id: (Date.now() + 1).toString(),
                    text: <span dangerouslySetInnerHTML={{
                        // Simple parse for **bold** text
                        __html: response.response.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    }} />,
                    sender: "bot",
                    type: response.link ? "link" : "text",
                    linkUrl: response.link?.url,
                    linkText: response.link?.text
                };
            } else {
                // Fallback
                botMsg = {
                    id: (Date.now() + 1).toString(),
                    text: "I specialize in Qertex's offerings. Try asking about 'AURORA', 'Staffing', 'VAT Projects', or 'Compliance'.",
                    sender: "bot",
                };
            }
            setMessages((prev) => [...prev, botMsg]);
        }, 600);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleSend(inputValue);
        }
    };

    return (
        <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="w-80 sm:w-96 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[600px]"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-white/10 bg-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-2 h-2 bg-green-500 rounded-full absolute bottom-0 right-0 border border-slate-900 animate-pulse" />
                                    <div className="w-8 h-8 rounded-full bg-iqon-red/20 flex items-center justify-center text-iqon-red">
                                        <Bot className="w-5 h-5" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-white">Qertex Assistant</h3>
                                    <p className="text-xs text-green-500 font-medium">Online</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px]">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${msg.sender === "user"
                                            ? "bg-iqon-red text-white rounded-tr-none"
                                            : "bg-white/10 text-gray-200 rounded-tl-none"
                                            }`}
                                    >
                                        <div>{msg.text}</div>
                                        {msg.type === "link" && msg.linkUrl && (
                                            <Link
                                                href={msg.linkUrl}
                                                className="inline-flex items-center mt-3 px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-bold text-white transition-colors"
                                            >
                                                {msg.linkText || "View Details"} <span className="ml-1">&rarr;</span>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Actions */}
                        <div className="p-4 border-t border-white/10 bg-white/5 space-y-2">
                            <div className="flex flex-wrap gap-2 mb-3">
                                {["AURORA Platform", "Technical Staffing", "VAT Implementation", "Assessment Tool"].map((action) => (
                                    <button
                                        key={action}
                                        onClick={() => handleSend(action)}
                                        className="px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-[10px] font-bold text-gray-400 hover:text-white transition-colors"
                                    >
                                        {action}
                                    </button>
                                ))}
                            </div>

                            <div className="relative">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={handleKeyPress}
                                    placeholder="Type your question..."
                                    className="w-full bg-slate-800/50 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-iqon-red/50 focus:ring-1 focus:ring-iqon-red/50 transition-all"
                                />
                                <button
                                    onClick={() => handleSend(inputValue)}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-iqon-red text-white rounded-lg hover:bg-red-700 transition-colors"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Trigger Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-16 h-16 bg-iqon-red rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(230,0,35,0.4)] hover:shadow-[0_0_30px_rgba(230,0,35,0.6)] transition-shadow group"
            >
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-950 z-20" />
                <span className="absolute inline-flex h-full w-full rounded-full bg-iqon-red opacity-75 animate-ping group-hover:animate-none" />

                <div className="relative z-10 text-white">
                    {isOpen ? <X className="w-8 h-8" /> : <Sparkles className="w-8 h-8" />}
                </div>
            </motion.button>
        </div>
    );
};

export default FloatingAgent;
