"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, Sparkles } from "lucide-react";

type Message = {
    id: string;
    text: React.ReactNode; // Changed to ReactNode to support bold text
    sender: "bot" | "user";
    type?: "text" | "link";
    linkUrl?: string;
};

const FloatingAgent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "welcome",
            text: "Welcome to Qertex Global. I am your AI Consultant. How can I assist you today?",
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

    const handleAction = (action: string) => {
        // Add user message
        const userMsg: Message = {
            id: Date.now().toString(),
            text: action,
            sender: "user",
        };
        setMessages((prev) => [...prev, userMsg]);

        // Simulate bot response
        setTimeout(() => {
            let botMsg: Message;

            switch (action) {
                case "Software Testing":
                    botMsg = {
                        id: (Date.now() + 1).toString(),
                        text: (
                            <span>
                                Our <strong>Aurora Platform</strong> uses Faheem AI to automate testing. Would you like to see a video of Faheem in action?
                            </span>
                        ),
                        sender: "bot",
                    };
                    break;
                case "Compliance/ISO":
                    botMsg = {
                        id: (Date.now() + 1).toString(),
                        text: (
                            <span>
                                Our <strong>Risk-Lens</strong> tool covers ISO 27001 and TMMi standards for SMEs. I can send you a sample assessment report.
                            </span>
                        ),
                        sender: "bot",
                    };
                    break;
                case "Schedule a Demo":
                    botMsg = {
                        id: (Date.now() + 1).toString(),
                        text: "I can arrange a briefing with our Canadian or Bahraini team. Please select a time below.",
                        sender: "bot",
                        type: "link",
                        linkUrl: "https://calendly.com", // Mock link
                    };
                    break;
                default:
                    botMsg = {
                        id: (Date.now() + 1).toString(),
                        text: "I'm sorry, I didn't quite catch that. Could you please select an option?",
                        sender: "bot",
                    };
            }
            setMessages((prev) => [...prev, botMsg]);
        }, 600);
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
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${msg.sender === "user"
                                                ? "bg-iqon-red text-white rounded-tr-none"
                                                : "bg-white/10 text-gray-200 rounded-tl-none"
                                            }`}
                                    >
                                        <div>{msg.text}</div>
                                        {msg.type === "link" && msg.linkUrl && (
                                            <a
                                                href={msg.linkUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block mt-2 text-xs underline opacity-80 hover:opacity-100"
                                            >
                                                Open Link &rarr;
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Actions */}
                        <div className="p-4 border-t border-white/10 bg-white/5 space-y-2">
                            <p className="text-xs text-gray-500 mb-2">Suggested Actions:</p>
                            <div className="flex flex-wrap gap-2">
                                {["Software Testing", "Compliance/ISO", "Schedule a Demo"].map((action) => (
                                    <button
                                        key={action}
                                        onClick={() => handleAction(action)}
                                        className="px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-xs text-gray-300 hover:text-white transition-colors"
                                    >
                                        {action}
                                    </button>
                                ))}
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
                {/* Pulse Effect */}
                <span className="absolute inline-flex h-full w-full rounded-full bg-iqon-red opacity-75 animate-ping group-hover:animate-none" />

                <div className="relative z-10 text-white">
                    {isOpen ? <X className="w-8 h-8" /> : <Sparkles className="w-8 h-8" />}
                </div>
            </motion.button>
        </div>
    );
};

export default FloatingAgent;
