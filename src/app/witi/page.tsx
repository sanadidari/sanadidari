"use client";

import { usePremium } from "@/context/PremiumContext";
import { motion } from "framer-motion";

const categories = [
    {
        id: "core",
        label: { en: "WITI CORE PROTOCOLS", ar: "البروتوكولات الأساسية", fr: "PROTOCOLES CORE" },
        apps: [
            {
                id: "qrpruf",
                title: "QRPruf",
                description: {
                    en: "Zero-trust proof-of-presence — GPS+timestamp cryptographic certification, on-device AES/SHA-256 hashing, anti-spoofing.",
                    fr: "Protocole de preuve de présence — certification cryptographique GPS+horodatage, hachage AES/SHA-256 local.",
                    ar: "بروتوكول إثبات الحضور — توثيق تشفيري GPS مع طابع زمني، تشفير AES/SHA-256 محلي."
                },
                tech: ["Flutter", "Dart", "Riverpod 3", "Supabase"],
                github: "https://github.com/sanadidari/qrpruf",
                live: "https://qrpruf.com",
                external: true,
                color: "from-amber-600 to-amber-400",
                icon: "🛡️",
            },
            {
                id: "governance",
                title: "Governance Platform",
                description: {
                    en: "Judicial management engine for Morocco's bailiff corps — RBAC across 73 courts, 12 regions. Filament 3 dashboards, Arabic RTL.",
                    fr: "Moteur de gestion judiciaire — RBAC sur 73 tribunaux, 12 régions. Tableaux de bord Filament 3, RTL arabe.",
                    ar: "منصة الإدارة القضائية — صلاحيات على 73 محكمة وطنية، 12 منطقة. لوحات Filament 3، عربي RTL."
                },
                tech: ["Laravel 12", "Filament 3", "MySQL", "Sanctum"],
                github: "https://github.com/sanadidari/governance-platform",
                live: "/witi/governance",
                color: "from-emerald-600 to-emerald-400",
                icon: "🏛️",
            },
            {
                id: "nour",
                title: "NOUR Mobile",
                description: {
                    en: "Field app for judicial officers — ML Kit CIN scanner, GPS mission tracking, offline-first sync, QRPruf embedded.",
                    fr: "Application terrain pour huissiers — scanner ML Kit CIN, suivi GPS, synchronisation hors-ligne, QRPruf intégré.",
                    ar: "تطبيق ميداني للمحضرين — ماسح CIN بـML Kit، تتبع GPS، مزامنة دون إنترنت، QRPruf مدمج."
                },
                tech: ["Flutter", "Supabase", "Riverpod 3", "ML Kit"],
                github: "https://github.com/sanadidari/nour-mobile",
                live: "/witi/nour",
                color: "from-blue-600 to-blue-400",
                icon: "📱",
            },
        ]
    },
    {
        id: "marketplace",
        label: { en: "AI MARKETPLACE APPS", ar: "تطبيقات السوق الذكي", fr: "APPS MARKETPLACE IA" },
        apps: [
            {
                id: "witi-social",
                title: "WITI Social Assistant",
                description: {
                    en: "AI Social Media Director for Wix — generates captions, image prompts and marketing strategy. Gemini 2.5 Flash + Replicate Flux.",
                    fr: "Directeur créatif IA pour Wix — génère légendes, prompts visuels et stratégie marketing. Gemini 2.5 + Replicate Flux.",
                    ar: "مدير إبداعي ذكي لـ Wix — ينشئ تعليقات، مطالبات صور واستراتيجية تسويقية."
                },
                tech: ["Node.js", "Gemini 2.5 Flash", "Replicate Flux"],
                github: "https://github.com/sanadidari/witi-social-assistant",
                live: "/witi/witi-social",
                color: "from-sky-600 to-sky-400",
                icon: "🎨",
            },
            {
                id: "witi-viral",
                title: "WITI Viral Vision",
                description: {
                    en: "AI product video generation for Wix stores — credit system, MongoDB persistence, Replicate video models.",
                    fr: "Génération vidéo IA pour boutiques Wix — système de crédits, persistance MongoDB, modèles vidéo Replicate.",
                    ar: "توليد فيديو ذكاء اصطناعي لمتاجر Wix — نظام رصيد، MongoDB، نماذج فيديو Replicate."
                },
                tech: ["Node.js", "Replicate", "MongoDB", "Wix SDK"],
                github: "https://github.com/sanadidari/witi-viral-vision",
                live: "/witi/witi-viral",
                color: "from-purple-600 to-purple-400",
                icon: "🎬",
            },
            {
                id: "witi-studio",
                title: "WITI Photo Studio",
                description: {
                    en: "AI product photography for Shopify — background removal and professional studio shot generation using Replicate SDXL.",
                    fr: "Photographie produit IA pour Shopify — suppression d'arrière-plan et génération de studio via Replicate SDXL.",
                    ar: "تصوير منتجات ذكي لـ Shopify — إزالة الخلفية وتوليد صور استوديو باستخدام SDXL."
                },
                tech: ["Node.js", "Replicate SDXL", "Shopify Polaris"],
                github: "https://github.com/sanadidari/witi-photo-studio",
                live: "/witi/witi-studio",
                color: "from-rose-600 to-rose-400",
                icon: "📸",
            },
            {
                id: "witi-shopify",
                title: "WITI Visual Storyteller",
                description: {
                    en: "Transforms Wix product listings into compelling visual narratives. Connects to live store catalog via Wix Stores API.",
                    fr: "Transforme les fiches produits Wix en narrations visuelles cinématiques via l'API Wix Stores.",
                    ar: "يحوّل قوائم منتجات Wix إلى سرديات بصرية مقنعة عبر Wix Stores API."
                },
                tech: ["Gemini 2.5 Flash", "Wix Stores API", "Node.js"],
                github: "https://github.com/sanadidari/witi-visual-storyteller",
                live: "/witi/witi-shopify",
                color: "from-green-600 to-green-400",
                icon: "🖼️",
            },
        ]
    },
    {
        id: "workspace",
        label: { en: "GOOGLE WORKSPACE SUITE", ar: "مجموعة Google Workspace", fr: "SUITE GOOGLE WORKSPACE" },
        apps: [
            {
                id: "autoscript",
                title: "AutoScript AI",
                description: {
                    en: "Spreadsheet automation and AI code generation for Google Sheets — natural language to Apps Script via Gemini 2.5.",
                    fr: "Automatisation tableur et génération de code IA pour Google Sheets — langage naturel vers Apps Script via Gemini 2.5.",
                    ar: "أتمتة جداول البيانات وتوليد كود ذكي لـ Google Sheets عبر Gemini 2.5."
                },
                tech: ["Google Apps Script", "Gemini 2.5", "HTML Service"],
                github: "https://github.com/sanadidari/autoscript",
                live: "/witi/autoscript",
                color: "from-indigo-600 to-indigo-400",
                icon: "⚡",
            },
            {
                id: "flashboard",
                title: "FlashBoard AI",
                description: {
                    en: "Instant AI dashboard generation from raw spreadsheet data — charts, KPIs and summaries in seconds.",
                    fr: "Génération instantanée de tableaux de bord IA depuis vos données brutes — graphiques, KPIs et résumés en secondes.",
                    ar: "توليد فوري للوحات تحكم ذكية من بيانات الجداول — مخططات ومؤشرات أداء في ثوانٍ."
                },
                tech: ["Google Apps Script", "Gemini 2.5", "HTML Service"],
                github: "https://github.com/sanadidari/flashboard",
                live: "/witi/flashboard",
                color: "from-orange-600 to-orange-400",
                icon: "📊",
            },
            {
                id: "mailflow",
                title: "MailFlow AI",
                description: {
                    en: "AI email composition and communication director for Gmail — tone adjustment, follow-up suggestions, thread context awareness.",
                    fr: "Directeur de communication IA pour Gmail — ajustement de ton, suggestions de suivi, analyse de fil de discussion.",
                    ar: "مدير تواصل ذكي لـ Gmail — ضبط النبرة، اقتراح المتابعة، تحليل سياق المحادثة."
                },
                tech: ["Google Apps Script", "Gmail Add-on", "Gemini 2.5"],
                github: "https://github.com/sanadidari/mailflow",
                live: "/witi/mailflow",
                color: "from-cyan-600 to-cyan-400",
                icon: "📧",
            },
            {
                id: "sheetradar",
                title: "Sheet Radar AI",
                description: {
                    en: "Data anomaly detection and quality monitoring for Google Sheets — outlier detection, trend analysis, natural language findings report.",
                    fr: "Détection d'anomalies et monitoring qualité pour Google Sheets — détection d'outliers, analyse de tendances.",
                    ar: "كشف الشذوذ ومراقبة جودة البيانات في Google Sheets — تحليل الاتجاهات وتقرير النتائج."
                },
                tech: ["Google Apps Script", "Gemini 2.5", "HTML Service"],
                github: "https://github.com/sanadidari/sheetradar",
                live: "/witi/sheetradar",
                color: "from-lime-600 to-lime-500",
                icon: "🔍",
            },
            {
                id: "smartpaste",
                title: "SmartPaste AI",
                description: {
                    en: "Intelligent copy-paste with data transmutation for Google Sheets — converts CSV, JSON, plain text and PDF tables into structured columns.",
                    fr: "Copier-coller intelligent avec transmutation de données pour Google Sheets — CSV, JSON, texte brut en colonnes structurées.",
                    ar: "لصق ذكي مع تحويل البيانات لـ Google Sheets — يحول CSV وJSON والنص الخام إلى أعمدة منظمة."
                },
                tech: ["Google Apps Script", "Gemini 2.5", "HTML Service"],
                github: "https://github.com/sanadidari/smartpaste",
                live: "/witi/smartpaste",
                color: "from-teal-600 to-teal-400",
                icon: "📌",
            },
            {
                id: "resume-ranker",
                title: "Resume Ranker AI",
                description: {
                    en: "AI-powered resume screening and ranking for HR workflow automation — multi-criteria scoring, batch processing, export-ready reports.",
                    fr: "Tri et classement de CV par IA pour l'automatisation RH — scoring multi-critères, traitement en lot, rapports exportables.",
                    ar: "فرز وترتيب السير الذاتية بالذكاء الاصطناعي — تقييم متعدد المعايير وتقارير جاهزة للتصدير."
                },
                tech: ["Google Apps Script", "Gemini 2.5"],
                github: "https://github.com/sanadidari/ai-resume-ranker",
                live: "/witi/resume-ranker",
                color: "from-violet-600 to-violet-400",
                icon: "🎯",
            },
        ]
    },
];

export default function WitiHubPage() {
    const { lang, theme } = usePremium();
    const isDark = theme === "dark";

    const t = (obj: { en: string; fr: string; ar: string }) =>
        lang === "ar" ? obj.ar : lang === "fr" ? obj.fr : obj.en;

    return (
        <div className={`min-h-screen py-32 relative overflow-hidden ${isDark ? "bg-[#050505]" : "bg-[#F9F5F3]"} transition-colors duration-700`}>

            {/* Background gradients */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0], x: [0, 100, 0] }}
                    transition={{ duration: 20, repeat: Infinity }}
                    className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[var(--accent-primary)]/10 blur-[150px] rounded-full"
                />
                <motion.div
                    animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0], x: [0, -100, 0] }}
                    transition={{ duration: 25, repeat: Infinity }}
                    className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-500/10 blur-[150px] rounded-full"
                />
            </div>

            <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">

                {/* Back */}
                <motion.a
                    href="/"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ x: -10 }}
                    className="group flex items-center gap-4 mb-16 text-[var(--text-primary)]/40 hover:text-[var(--accent-primary)] transition-colors text-[0.65rem] font-black uppercase tracking-[0.4em]"
                >
                    <div className="w-10 h-10 rounded-full border border-[var(--text-primary)]/10 flex items-center justify-center group-hover:border-[var(--accent-primary)]/40 group-hover:bg-[var(--accent-primary)]/5 transition-all">
                        <span className={`text-lg font-light ${lang === "ar" ? "rotate-180" : ""}`}>←</span>
                    </div>
                    {lang === "ar" ? "العودة للرئيسية" : "BACK TO THE PORTAL"}
                </motion.a>

                {/* Header */}
                <div className="text-center mb-24 space-y-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl lg:text-7xl font-black text-[var(--text-primary)] uppercase tracking-tighter leading-[0.9]"
                    >
                        {lang === "ar" ? "إيكوسيستم" : "WITI"}<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] to-[#82503E]">
                            {lang === "ar" ? "ويتي المتكامل" : "ECOSYSTEM"}
                        </span>
                    </motion.h1>
                    <div className="flex items-center justify-center gap-6">
                        <div className="h-[1px] bg-[var(--accent-primary)]/20 w-16" />
                        <p className="text-[var(--text-primary)]/40 font-black uppercase tracking-[0.6em] text-[0.6rem]">
                            {lang === "ar" ? "الابتكار • الأمان • التميز" : "INNOVATION • SECURITY • EXCELLENCE"}
                        </p>
                        <div className="h-[1px] bg-[var(--accent-primary)]/20 w-16" />
                    </div>
                </div>

                {/* Categories */}
                <div className="space-y-20">
                    {categories.map((cat, catIdx) => (
                        <div key={cat.id}>
                            {/* Category header */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-4 mb-8"
                            >
                                <div className="h-[2px] w-8 bg-[var(--accent-primary)]" />
                                <span className="text-[0.6rem] font-black uppercase tracking-[0.5em] text-[var(--accent-primary)]">
                                    {t(cat.label)}
                                </span>
                                <div className="h-[1px] flex-1 bg-[var(--text-primary)]/10" />
                            </motion.div>

                            {/* App cards */}
                            <div className="space-y-4">
                                {cat.apps.map((app, idx) => (
                                    <motion.div
                                        key={app.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.07, duration: 0.5 }}
                                        className={`group flex ${lang === "ar" ? "flex-row-reverse" : "flex-row"} rounded-2xl overflow-hidden border border-[var(--text-primary)]/8 hover:border-[var(--accent-primary)]/30 transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-1 ${isDark ? "bg-white/3" : "bg-white/60"} backdrop-blur-sm`}
                                    >
                                        {/* Left visual panel */}
                                        <div className={`relative w-24 sm:w-32 flex-shrink-0 bg-gradient-to-br ${app.color} flex items-center justify-center overflow-hidden`}>
                                            <div className="absolute inset-0 bg-black/20" />
                                            <span className="relative text-4xl group-hover:scale-110 transition-transform duration-500">
                                                {app.icon}
                                            </span>
                                        </div>

                                        {/* Right content */}
                                        <div className={`flex-1 px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4 ${lang === "ar" ? "text-right" : ""}`}>
                                            <div className="flex-1 space-y-2">
                                                <h3 className="text-base font-black text-[var(--text-primary)] uppercase tracking-tight">
                                                    {app.title}
                                                </h3>
                                                <p className="text-[0.82rem] text-[var(--text-primary)]/60 leading-relaxed">
                                                    {t(app.description)}
                                                </p>
                                                <div className={`flex flex-wrap gap-2 pt-1 ${lang === "ar" ? "justify-end" : ""}`}>
                                                    {app.tech.map((t) => (
                                                        <span key={t} className="text-[0.6rem] font-black uppercase tracking-wider px-2 py-0.5 rounded border border-[var(--accent-primary)]/20 text-[var(--accent-primary)]/70 bg-[var(--accent-primary)]/5">
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Buttons */}
                                            <div className={`flex sm:flex-col gap-2 flex-shrink-0 ${lang === "ar" ? "items-end" : "items-start sm:items-end"}`}>
                                                <a
                                                    href={app.live}
                                                    target={app.external ? "_blank" : "_self"}
                                                    rel={app.external ? "noopener noreferrer" : undefined}
                                                    className="flex items-center gap-2 px-4 py-2 text-[0.65rem] font-black uppercase tracking-widest bg-[var(--accent-primary)] text-white rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <span>▶</span>
                                                    {lang === "ar" ? "عرض مباشر" : lang === "fr" ? "VOIR LIVE" : "LIVE DEMO"}
                                                </a>
                                                <a
                                                    href={app.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`flex items-center gap-2 px-4 py-2 text-[0.65rem] font-black uppercase tracking-widest rounded-lg border border-[var(--text-primary)]/15 hover:border-[var(--accent-primary)]/40 text-[var(--text-primary)]/50 hover:text-[var(--accent-primary)] transition-all whitespace-nowrap ${isDark ? "bg-white/3" : "bg-black/3"}`}
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <span>⌥</span>
                                                    GitHub
                                                </a>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
