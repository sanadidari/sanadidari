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
        <div className={`min-h-screen py-32 relative overflow-hidden ${theme === 'dark' ? 'bg-[#050505]' : 'bg-[#F9F5F3]'} transition-colors duration-700`}>
            
            {/* Animated Mesh Gradients */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <motion.div 
                    animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        x: [0, 100, 0]
                    }} 
                    transition={{ duration: 20, repeat: Infinity }}
                    className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[var(--accent-primary)]/10 blur-[150px] rounded-full" 
                />
                <motion.div 
                    animate={{ 
                        scale: [1.2, 1, 1.2],
                        rotate: [0, -90, 0],
                        x: [0, -100, 0]
                    }} 
                    transition={{ duration: 25, repeat: Infinity }}
                    className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-500/10 blur-[150px] rounded-full" 
                />
            </div>

            <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-24 relative z-10">
                
                {/* Back to Home Navigation */}
                <motion.a 
                    href="/"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ x: -10 }}
                    className="group flex items-center gap-4 mb-16 text-[var(--text-primary)]/40 hover:text-[var(--accent-primary)] transition-colors text-[0.65rem] font-black uppercase tracking-[0.4em]"
                >
                    <div className="w-10 h-10 rounded-full border border-[var(--text-primary)]/10 flex items-center justify-center group-hover:border-[var(--accent-primary)]/40 group-hover:bg-[var(--accent-primary)]/5 transition-all shadow-sm">
                        <span className={`text-lg font-light ${lang === 'ar' ? 'rotate-180' : ''}`}>←</span>
                    </div>
                    {lang === 'ar' ? 'العودة للرئيسية' : 'BACK TO THE PORTAL'}
                </motion.a>

                {/* Header Section */}
                <div className="text-center mb-24 space-y-8">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="space-y-4"
                    >
                        <h1 className="text-5xl lg:text-7xl font-black text-[var(--text-primary)] uppercase tracking-tighter leading-[0.9]">
                            {lang === 'ar' ? 'إيكوسيستم' : 'WITI'}<br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] to-[#82503E]">
                                {lang === 'ar' ? 'ويتي المتكامل' : 'ECOSYSTEM'}
                            </span>
                        </h1>
                        <div className="flex items-center justify-center gap-6 pt-4">
                            <div className="h-[1px] bg-[var(--accent-primary)]/20 w-16" />
                            <p className="text-[var(--text-primary)]/40 font-black uppercase tracking-[0.6em] text-[0.6rem]">
                                {lang === 'ar' ? 'الابتكار • الأمان • التميز' : 'INNOVATION • SECURITY • EXCELLENCE'}
                            </p>
                            <div className="h-[1px] bg-[var(--accent-primary)]/20 w-16" />
                        </div>
                    </motion.div>
                </div>

                {/* Applications Modern Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {apps.map((app, idx) => (
                        <motion.a
                            key={app.id}
                            href={app.link}
                            target={app.external ? "_blank" : "_self"}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05, duration: 0.6 }}
                            whileHover={{ y: -15, scale: 1.02 }}
                            className="relative group p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:border-[var(--accent-primary)]/40 transition-all duration-500 overflow-hidden flex flex-col items-center justify-center text-center backdrop-blur-xl shadow-2xl"
                        >
                            {/* Animated Background Pulse */}
                            <div className={`absolute inset-0 ${app.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700`} />
                            
                            {/* Icon Mastery */}
                            <div className={`relative w-28 h-28 rounded-full ${app.color} bg-opacity-10 flex items-center justify-center text-5xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-inner overflow-hidden`}>
                                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                {app.icon}
                            </div>
                            
                            <div className="space-y-4">
                                <h3 className="text-2xl font-black text-[var(--text-primary)] uppercase tracking-tight leading-tight">
                                    {app.title}
                                </h3>
                                <div className="w-10 h-[2px] bg-[var(--accent-primary)]/20 mx-auto group-hover:w-24 group-hover:bg-[var(--accent-primary)] transition-all duration-700" />
                                
                                <div className="flex flex-col items-center gap-1 opacity-40 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                    <span className="text-[9px] font-black text-[var(--accent-primary)] tracking-[0.3em] uppercase">
                                        {lang === 'ar' ? 'استكشاف الحل' : 'EXPLORE SOLUTION'}
                                    </span>
                                    <div className="h-[1px] w-4 bg-[var(--accent-primary)]" />
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>

            {/* Floating Particles for Texture */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [-20, 20],
                        opacity: [0.1, 0.3, 0.1],
                        scale: [1, 1.5, 1]
                    }}
                    transition={{
                        duration: 5 + Math.random() * 10,
                        repeat: Infinity,
                        delay: Math.random() * 5
                    }}
                    className="absolute w-1 h-1 bg-[var(--accent-primary)] rounded-full blur-[1px] z-0"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`
                    }}
                />
            ))}
        </div>
    );
}
