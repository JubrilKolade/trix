"use client"

import { Navbar } from "@/components/navbar"
import { motion } from "framer-motion"
import {
    Rocket, Server, Database, Shield, Layout, Settings2, Code2,
    Terminal, Search, ChevronLeft, ArrowRight, History, Zap, CheckCircle2, Send
} from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const examples = [
    {
        name: "Modern Pro Stack",
        desc: "Full-stack type-safety with maximum developer experience.",
        image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=800",
        command: "trix init --template modern-pro",
        stack: [
            { name: "Framework", val: "Next.js 14+" },
            { name: "Database", val: "PostgreSQL" },
            { name: "ORM", val: "Prisma / Drizzle" },
            { name: "Auth", val: "NextAuth.js" }
        ],
        structure: "src/{app,components,lib,services}",
        testing: "Jest + Playwright",
        status: "STABLE"
    },
    {
        name: "Fast Backend Stack",
        desc: "High-performance API server with minimal overhead.",
        image: "https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80&w=800",
        command: "trix init --template fast-backend",
        stack: [
            { name: "Runtime", val: "Bun / Node" },
            { name: "Framework", val: "Elysia / Hono" },
            { name: "Database", val: "SQLite / Redis" },
            { name: "Validation", val: "Zod / TypeBox" }
        ],
        structure: "src/{routes,models,utils}",
        testing: "Bun Test / Vitest",
        status: "PERFORMANCE"
    },
    {
        name: "Cross-Platform Mobile",
        desc: "Native performance with rapid React development workflow.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
        command: "trix init --template react-native",
        stack: [
            { name: "Framework", val: "React Native" },
            { name: "Navigation", val: "Expo Router" },
            { name: "Styling", val: "NativeWind" },
            { name: "State", val: "TanStack Query" }
        ],
        structure: "app/(tabs)/index.tsx",
        testing: "Jest + Expo Test",
        status: "MOBILE"
    }
]

export default function ExamplesPage() {
    return (
        <div className="min-h-screen bg-background">
            <header className="h-16 border-b border-border fixed top-0 w-full bg-background/80 backdrop-blur-xl z-50 flex items-center px-6">
                <Link href="/" className="p-2 bg-secondary rounded-xl mr-4 hover:scale-110 transition-transform">
                    <ChevronLeft className="w-5 h-5" />
                </Link>
                <span className="flex-1 text-center font-extrabold text-sm tracking-tight">Project Examples</span>
                <div className="w-9 h-9" />
            </header>

            <main className="pt-24 px-6 pb-32 max-w-6xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-3xl font-black tracking-tighter mb-4 text-foreground">Premium Stacks</h1>
                    <p className="text-[14px] text-muted-foreground leading-relaxed font-semibold">
                        Explore battle-tested configurations for web and mobile.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {examples.map((ex, i) => (
                        <motion.div
                            key={ex.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group p-1 rounded-[2.5rem] bg-card border border-border/50 overflow-hidden stiff-shadow hover:border-primary/40 transition-all cursor-pointer h-full"
                        >
                            <div className="relative aspect-16/9 rounded-[2.25rem] overflow-hidden mb-6">
                                <img src={ex.image} alt={ex.name} className="w-full h-full object-cover grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100" />
                                <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />

                                <div className="absolute top-4 right-4">
                                    <span className="text-[9px] font-black bg-background text-primary px-3 py-1.5 rounded-full border border-primary/20 uppercase tracking-widest">
                                        {ex.status}
                                    </span>
                                </div>

                                <div className="absolute bottom-6 left-6">
                                    <h3 className="text-xl font-black text-foreground tracking-tight">{ex.name}</h3>
                                </div>
                            </div>

                            <div className="px-6 pb-8">
                                <p className="text-[13px] text-muted-foreground font-semibold leading-relaxed mb-8">
                                    {ex.desc}
                                </p>

                                <div className="grid grid-cols-2 gap-6 mb-8 bg-secondary/30 p-6 rounded-3xl border border-border">
                                    <div>
                                        <span className="text-[9px] font-black text-muted-foreground uppercase tracking-[0.2em] block mb-2">Structure</span>
                                        <h5 className="text-[11px] font-bold text-foreground font-mono">{ex.structure}</h5>
                                    </div>
                                    <div>
                                        <span className="text-[9px] font-black text-muted-foreground uppercase tracking-[0.2em] block mb-2">Testing</span>
                                        <h5 className="text-[11px] font-bold text-foreground font-mono">{ex.testing}</h5>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 overflow-hidden bg-secondary/50 p-4 rounded-2xl border border-border">
                                        <Terminal className="w-4 h-4 text-primary shrink-0" />
                                        <span className="text-[11px] font-bold font-mono text-muted-foreground truncate">{ex.command}</span>
                                    </div>

                                    <div className="grid grid-cols-2 gap-y-3 gap-x-6 px-1">
                                        {ex.stack.map(s => (
                                            <div key={s.name}>
                                                <span className="text-[9px] font-black text-muted/60 uppercase tracking-widest">{s.name}</span>
                                                <h5 className="text-[11px] font-bold text-foreground mt-1">{s.val}</h5>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-sm z-40">
                    <Link href="/docs/quick-start" className="w-full h-15 bg-primary text-primary-foreground rounded-[1.5rem] font-black text-base flex items-center justify-center shadow-[0_15px_40px_rgba(59,130,246,0.4)] hover:scale-[1.02] active:scale-95 transition-all outline-none">
                        Try Trix Now
                        <ArrowRight className="w-5 h-5 ml-2.5" />
                    </Link>
                </div>
            </main>
        </div>
    )
}
