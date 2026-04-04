"use client";

import { usePremium } from "@/context/PremiumContext";
import { motion } from "framer-motion";

const apps = [
    { id: "nour", title: "NOUR Mobile", icon: "📱", link: "/witi/nour", color: "bg-blue-500" },
    { id: "governance", title: "Governance", icon: "🏛️", link: "/witi/governance", color: "bg-emerald-500" },
    { id: "qrpruf", title: "QRPRUF", icon: "🛡️", link: "https://qrpruf.com", color: "bg-amber-500", external: true },
    { id: "witi-viral", title: "WITI Viral", icon: "🚀", link: "/witi/witi-viral", color: "bg-purple-500" },
    { id: "witi-social", title: "WITI Social", icon: "💬", link: "/witi/witi-social", color: "bg-sky-500" },
    { id: "witi-studio", title: "WITI Studio", icon: "🎥", link: "/witi/witi-studio", color: "bg-rose-500" },
    { id: "witi-shopify", title: "WITI Shopify", icon: "🛍️", link: "/witi/witi-shopify", color: "bg-green-500" },
    { id: "autoscript", title: "AutoScript", icon: "🤖", link: "/witi/autoscript", color: "bg-indigo-500" },
    { id: "flashboard", title: "FlashBoard", icon: "📊", link: "/witi/flashboard", color: "bg-orange-500" },
    { id: "mailflow", title: "MailFlow", icon: "📧", link: "/witi/mailflow", color: "bg-cyan-500" },
    { id: "sheetradar", title: "SheetRadar", icon: "📡", link: "/witi/sheetradar", color: "bg-lime-500" },
    { id: "smartpaste", title: "SmartPaste", icon: "📋", link: "/witi/smartpaste", color: "bg-teal-500" },
    { id: "resume-ranker", title: "Resume Ranker", icon: "🎯", link: "/witi/resume-ranker", color: "bg-violet-500" },
];

export default function WitiHubPage() {
    const { lang, theme } = usePremium();

    return (
        <div className={`min-h-screen py-32 ${theme === 'dark' ? 'bg-[#050505]' : 'bg-[#F9F5F3]'} transition-colors duration-700`}>
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Header */}
                <div className="text-center mb-24 space-y-4">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl lg:text-8xl font-black text-[var(--text-primary)] uppercase tracking-tighter"
                    >
                        {lang === 'ar' ? 'إيكوسيستم ويتي' : 'WITI ECOSYSTEM'}
                    </motion.h1>
                    <motion.div 
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        className="h-1 bg-[var(--accent-primary)] w-32 mx-auto"
                    />
                    <p className="text-[var(--text-primary)]/60 font-bold uppercase tracking-[0.3em] text-xs">
                        {lang === 'ar' ? 'الابتكار • الأمان • التميز' : 'INNOVATION • SECURITY • EXCELLENCE'}
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {apps.map((app, idx) => (
                        <motion.a
                            key={app.id}
                            href={app.link}
                            target={app.external ? "_blank" : "_self"}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="relative group p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-[var(--accent-primary)]/50 transition-all duration-300 overflow-hidden flex flex-col items-center justify-center text-center backdrop-blur-md"
                        >
                            {/* App Icon Circle */}
                            <div className={`w-24 h-24 rounded-full ${app.color} bg-opacity-20 flex items-center justify-center text-5xl mb-6 shadow-inner group-hover:scale-110 transition-transform duration-500`}>
                                {app.icon}
                            </div>
                            
                            <h3 className="text-xl font-black text-[var(--text-primary)] mb-2 uppercase tracking-tight">
                                {app.title}
                            </h3>
                            <div className="w-8 h-[2px] bg-[var(--accent-primary)]/20 mb-4 group-hover:w-16 transition-all duration-500" />
                            
                            <span className="text-[10px] font-black text-[var(--accent-primary)] tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                                {lang === 'ar' ? 'استكشاف الآن' : 'EXPLORE NOW'}
                            </span>

                            {/* Glow Effect on Hover */}
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-[var(--accent-primary)] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        </motion.a>
                    ))}
                </div>
            </div>
        </div>
    );
}
