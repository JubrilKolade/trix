"use client"

import { motion, AnimatePresence } from "framer-motion"
import {
    Rocket, Server, Database, Shield, Layout, Settings2, Code2,
    Terminal, Search, ChevronLeft, ArrowRight, UserPlus, Send, CheckCircle2, History, X,
    Zap
} from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const setupSteps = [
    { id: 1, title: "Fork & Clone", sub: "Clone your forked repository to your local machine.", code: "git clone https://github.com/JubrilKolade/trix" },
    { id: 2, title: "Install Dependencies", sub: "Install the required node modules.", code: "npm install", warning: "Make sure you are running Node v18 or higher." },
    { id: 3, title: "Local Link", sub: "Link the package locally to test CLI commands.", code: "npm link" },
]

const structureItems = [
    { title: "src/core", desc: "The brain of Trix. Contains configuration builders, file generators, and code injectors." },
    { title: "src/prompts", desc: "Handles the interactive CLI experience and user input validation." },
    { title: "templates", desc: "The blueprint for every project. Framework-specific scaffolds and module definitions." },
    { title: "website", desc: "This very site! Built with Next.js, Framer Motion, and MDX for documentation." },
]

const testingSteps = [
    { title: "Unit Tests", desc: "We use Jest for core logic. Run them frequently during development.", code: "npm test" },
    { title: "Coverage Reports", desc: "Ensure your changes are well-tested by checking the coverage output.", code: "npm run test:coverage" },
    { title: "Validation", desc: "Run the build to ensure TypeScript types are correct across the ecosystem.", code: "npm run build" },
]

const checklist = [
    "Run linter to ensure code style consistency.",
    "Use Conventional Commits for code quality.",
    "Add tests for all new core features."
]

export default function CommunityPage() {
    const [activeTab, setActiveTab] = useState("Setup")

    return (
        <div className="min-h-screen bg-background transition-colors duration-500">
            <header className="h-16 border-b border-border fixed top-0 w-full bg-background/80 backdrop-blur-xl z-50 flex items-center px-6">
                <Link href="/" className="p-2 bg-secondary rounded-xl mr-4 hover:scale-110 transition-transform">
                    <ChevronLeft className="w-5 h-5" />
                </Link>
                <span className="flex-1 text-center font-extrabold text-sm tracking-tight">Contributing Guide</span>
                <div className="w-9 h-9" />
            </header>

            <main className="pt-24 px-6 pb-32 max-w-xl mx-auto">
                {/* Tabs */}
                <div className="flex items-center gap-2 mb-12 p-1.5 bg-secondary/50 border border-border rounded-2xl overflow-x-auto no-scrollbar">
                    {["Setup", "Structure", "Testing"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`flex-1 flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl text-[13px] font-black transition-all whitespace-nowrap shadow-sm ${activeTab === tab ? "bg-primary text-primary-foreground" : "text-muted hover:text-foreground hover:bg-secondary/20 shadow-none"
                                }`}
                        >
                            {tab === "Setup" && <Rocket className="w-4 h-4" />}
                            {tab === "Structure" && <Layout className="w-4 h-4" />}
                            {tab === "Testing" && <Shield className="w-4 h-4" />}
                            {tab}
                        </button>
                    ))}
                </div>

                <motion.section
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-14"
                >
                    <h1 className="text-3xl font-black tracking-tighter mb-4 text-foreground">Contribution Guide</h1>
                    <p className="text-[14px] text-muted-foreground leading-relaxed font-semibold">
                        We're thrilled you want to grow Trix! This guide covers everything needed to set up your dev environment and submit changes.
                    </p>
                </motion.section>

                <section className="space-y-14 relative min-h-[400px]">
                    <AnimatePresence mode="wait">
                        {activeTab === "Setup" && (
                            <motion.div
                                key="setup"
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                className="space-y-12 relative"
                            >
                                <div className="absolute left-4.25 top-8 bottom-8 w-px bg-border group" />
                                {setupSteps.map((step) => (
                                    <div key={step.id} className="relative pl-14">
                                        <div className="absolute left-0 top-0 w-9 h-9 rounded-2xl bg-secondary border border-border flex items-center justify-center text-[13px] font-black z-10 shadow-sm">
                                            {step.id}
                                        </div>
                                        <h3 className="text-base font-extrabold mb-1.5 tracking-tight">{step.title}</h3>
                                        <p className="text-[12px] text-muted-foreground mb-4 font-semibold leading-relaxed">{step.sub}</p>
                                        <div className="bg-secondary/50 p-4 rounded-2xl text-[11px] font-mono font-bold border border-border flex items-center">
                                            <span className="text-primary mr-3 italic">$</span>
                                            <span className="text-cli-text">{step.code}</span>
                                        </div>
                                        {step.warning && (
                                            <div className="mt-4 p-4 rounded-2xl bg-primary/5 border border-primary/20 flex gap-3">
                                                <Zap className="w-4 h-4 text-primary shrink-0" />
                                                <p className="text-[11px] text-primary leading-relaxed font-bold">{step.warning}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </motion.div>
                        )}

                        {activeTab === "Structure" && (
                            <motion.div
                                key="structure"
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                className="grid grid-cols-1 gap-4"
                            >
                                {structureItems.map((item) => (
                                    <div key={item.title} className="p-6 rounded-[2rem] bg-card border border-border/50 stiff-shadow">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                                <Layout className="w-4 h-4" />
                                            </div>
                                            <h3 className="font-black text-sm tracking-tight">{item.title}</h3>
                                        </div>
                                        <p className="text-[12px] text-muted-foreground font-semibold leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </motion.div>
                        )}

                        {activeTab === "Testing" && (
                            <motion.div
                                key="testing"
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                className="space-y-6"
                            >
                                {testingSteps.map((step) => (
                                    <div key={step.title} className="p-6 rounded-[2rem] bg-card border border-border/50 stiff-shadow">
                                        <h3 className="text-sm font-black mb-2 tracking-tight">{step.title}</h3>
                                        <p className="text-[12px] text-muted-foreground mb-4 font-semibold">{step.desc}</p>
                                        <div className="bg-secondary/50 p-4 rounded-xl text-[11px] font-mono font-bold border border-border flex items-center">
                                            <span className="text-primary mr-3 italic">$</span>
                                            <span className="text-cli-text">{step.code}</span>
                                        </div>
                                    </div>
                                ))}
                                <div className="p-6 rounded-[2rem] bg-green-500/5 border border-green-500/20 flex gap-4">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                                    <p className="text-[11px] text-green-600/80 font-bold leading-relaxed">
                                        Always run the full test suite before submitting a Pull Request to ensure no regressions were introduced.
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </section>

                <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-sm z-40">
                    <Link href="https://github.com/JubrilKolade/trix/pulls" target="_blank" className="w-full h-15 bg-primary text-primary-foreground rounded-[1.5rem] font-black text-base flex items-center justify-center shadow-[0_15px_40px_rgba(59,130,246,0.4)] hover:scale-[1.02] active:scale-95 transition-all outline-none">
                        <Send className="w-5 h-5 mr-3" />
                        Open Pull Request
                    </Link>
                </div>
            </main>
        </div>
    )
}
