"use client";

import { usePremium } from "@/context/PremiumContext";
import { motion } from "framer-motion";

const categories = [
    {
        id: "core",
        tag:   { en: "Core Protocols", fr: "Protocoles Core", ar: "البروتوكولات الأساسية" },
        title: { en: "Institutional Infrastructure", fr: "Infrastructure Institutionnelle", ar: "البنية التحتية المؤسسية" },
        apps: [
            {
                id: "qrpruf",
                title: "QRPruf",
                description: {
                    en: "Zero-trust proof-of-presence — GPS+timestamp cryptographic certification, on-device AES/SHA-256 hashing, anti-spoofing.",
                    fr: "Protocole de preuve de présence — certification cryptographique GPS+horodatage, hachage AES/SHA-256 local, anti-spoofing.",
                    ar: "بروتوكول إثبات الحضور — توثيق تشفيري GPS مع طابع زمني، تشفير AES/SHA-256 محلي، مقاومة الانتحال.",
                },
                tech: ["Flutter", "Dart", "Riverpod 3", "Supabase"],
                github: "https://github.com/sanadidari/qrpruf",
                live: "https://qrpruf.com",
                external: true,
                icon: "🛡️",
                from: "from-amber-500", to: "to-orange-400",
            },
            {
                id: "governance",
                title: "Governance Platform",
                description: {
                    en: "Judicial management engine for Morocco's bailiff corps — RBAC across 73 courts, 12 regions. Filament 3 dashboards, Sanctum API, Arabic RTL.",
                    fr: "Moteur de gestion judiciaire — RBAC sur 73 tribunaux, 12 régions. Tableaux de bord Filament 3, API Sanctum, RTL arabe.",
                    ar: "منصة الإدارة القضائية — صلاحيات على 73 محكمة وطنية، 12 منطقة. لوحات Filament 3، API Sanctum.",
                },
                tech: ["Laravel 12", "Filament 3", "MySQL", "Sanctum"],
                github: "https://github.com/sanadidari/governance-platform",
                live: "/witi/governance",
                icon: "🏛️",
                from: "from-emerald-500", to: "to-teal-400",
            },
            {
                id: "nour",
                title: "NOUR Mobile",
                description: {
                    en: "Field app for judicial officers — ML Kit CIN scanner, GPS mission tracking, offline-first sync, QRPruf embedded.",
                    fr: "Application terrain pour huissiers — scanner ML Kit CIN, suivi GPS, synchronisation hors-ligne, QRPruf intégré.",
                    ar: "تطبيق ميداني للمحضرين — ماسح CIN بـML Kit، تتبع GPS، مزامنة دون إنترنت، QRPruf مدمج.",
                },
                tech: ["Flutter", "Supabase", "Riverpod 3", "ML Kit"],
                github: "https://github.com/sanadidari/nour-mobile",
                live: "/witi/nour",
                icon: "📱",
                from: "from-blue-500", to: "to-indigo-400",
            },
        ],
    },
    {
        id: "marketplace",
        tag:   { en: "AI Marketplace", fr: "Marketplace IA", ar: "تطبيقات السوق الذكي" },
        title: { en: "AI-Powered Commerce Apps", fr: "Applications Commerce IA", ar: "تطبيقات التجارة الذكية" },
        apps: [
            {
                id: "witi-social",
                title: "WITI Social Assistant",
                description: {
                    en: "AI Social Media Director for Wix — generates captions, image prompts and marketing strategy using Gemini 2.5 Flash and Replicate Flux.",
                    fr: "Directeur créatif IA pour Wix — génère légendes, prompts visuels et stratégie marketing. Gemini 2.5 Flash + Replicate Flux.",
                    ar: "مدير إبداعي ذكي لـ Wix — ينشئ تعليقات، مطالبات صور واستراتيجية تسويقية.",
                },
                tech: ["Node.js", "Gemini 2.5 Flash", "Replicate Flux", "Wix SDK"],
                github: "https://github.com/sanadidari/witi-social-assistant",
                live: "/witi/witi-social",
                icon: "🎨",
                from: "from-sky-500", to: "to-blue-400",
            },
            {
                id: "witi-viral",
                title: "WITI Viral Vision",
                description: {
                    en: "AI product video generation for Wix stores — credit-based system, MongoDB persistence, Replicate video models.",
                    fr: "Génération vidéo IA pour boutiques Wix — système de crédits, persistance MongoDB, modèles vidéo Replicate.",
                    ar: "توليد فيديو ذكاء اصطناعي لمتاجر Wix — نظام رصيد، MongoDB، نماذج فيديو Replicate.",
                },
                tech: ["Node.js", "Replicate", "MongoDB", "Wix SDK"],
                github: "https://github.com/sanadidari/witi-viral-vision",
                live: "/witi/witi-viral",
                icon: "🎬",
                from: "from-purple-500", to: "to-violet-400",
            },
            {
                id: "witi-studio",
                title: "WITI Photo Studio",
                description: {
                    en: "AI product photography for Shopify — background removal and professional studio shot generation using Replicate SDXL.",
                    fr: "Photographie produit IA pour Shopify — suppression d'arrière-plan et génération de studio professionnelle via Replicate SDXL.",
                    ar: "تصوير منتجات ذكي لـ Shopify — إزالة الخلفية وتوليد صور استوديو باستخدام SDXL.",
                },
                tech: ["Node.js", "Replicate SDXL", "Shopify Polaris"],
                github: "https://github.com/sanadidari/witi-photo-studio",
                live: "/witi/witi-studio",
                icon: "📸",
                from: "from-rose-500", to: "to-pink-400",
            },
            {
                id: "witi-shopify",
                title: "WITI Visual Storyteller",
                description: {
                    en: "Transforms Wix product listings into compelling visual narratives using Gemini 2.5 Flash. Connects to live store catalog via Wix Stores API.",
                    fr: "Transforme les fiches produits Wix en narrations visuelles cinématiques via Gemini 2.5 Flash et l'API Wix Stores.",
                    ar: "يحوّل قوائم منتجات Wix إلى سرديات بصرية مقنعة عبر Gemini 2.5 وWix Stores API.",
                },
                tech: ["Gemini 2.5 Flash", "Wix Stores API", "Node.js"],
                github: "https://github.com/sanadidari/witi-visual-storyteller",
                live: "/witi/witi-shopify",
                icon: "🖼️",
                from: "from-green-500", to: "to-emerald-400",
            },
        ],
    },
    {
        id: "workspace",
        tag:   { en: "Google Workspace", fr: "Google Workspace", ar: "مجموعة Google Workspace" },
        title: { en: "AI Automation Suite", fr: "Suite d'Automatisation IA", ar: "مجموعة الأتمتة الذكية" },
        apps: [
            {
                id: "autoscript",
                title: "AutoScript AI",
                description: {
                    en: "Spreadsheet automation and AI code generation for Google Sheets — natural language to Apps Script via Gemini 2.5.",
                    fr: "Automatisation tableur et génération de code IA — langage naturel vers Apps Script via Gemini 2.5.",
                    ar: "أتمتة جداول البيانات وتوليد كود ذكي لـ Google Sheets عبر Gemini 2.5.",
                },
                tech: ["Google Apps Script", "Gemini 2.5", "HTML Service"],
                github: "https://github.com/sanadidari/autoscript",
                live: "/witi/autoscript",
                icon: "⚡",
                from: "from-indigo-500", to: "to-blue-400",
            },
            {
                id: "flashboard",
                title: "FlashBoard AI",
                description: {
                    en: "Instant AI dashboard generation from raw spreadsheet data — charts, KPIs and summaries in seconds.",
                    fr: "Génération instantanée de tableaux de bord IA depuis des données brutes — graphiques, KPIs et résumés en secondes.",
                    ar: "توليد فوري للوحات تحكم ذكية — مخططات ومؤشرات أداء في ثوانٍ.",
                },
                tech: ["Google Apps Script", "Gemini 2.5", "HTML Service"],
                github: "https://github.com/sanadidari/flashboard",
                live: "/witi/flashboard",
                icon: "📊",
                from: "from-orange-500", to: "to-amber-400",
            },
            {
                id: "mailflow",
                title: "MailFlow AI",
                description: {
                    en: "AI email composition and communication director for Gmail — tone adjustment, follow-up suggestions, thread context awareness.",
                    fr: "Directeur de communication IA pour Gmail — ajustement de ton, suggestions de suivi, analyse du fil de discussion.",
                    ar: "مدير تواصل ذكي لـ Gmail — ضبط النبرة، اقتراح المتابعة، تحليل سياق المحادثة.",
                },
                tech: ["Google Apps Script", "Gmail Add-on", "Gemini 2.5"],
                github: "https://github.com/sanadidari/mailflow",
                live: "/witi/mailflow",
                icon: "📧",
                from: "from-cyan-500", to: "to-teal-400",
            },
            {
                id: "sheetradar",
                title: "Sheet Radar AI",
                description: {
                    en: "Data anomaly detection and quality monitoring for Google Sheets — outlier detection, trend analysis, natural language findings report.",
                    fr: "Détection d'anomalies et monitoring qualité pour Google Sheets — outliers, analyse de tendances, rapport en langage naturel.",
                    ar: "كشف الشذوذ ومراقبة جودة البيانات — تحليل الاتجاهات وتقرير النتائج بالغة الطبيعية.",
                },
                tech: ["Google Apps Script", "Gemini 2.5", "HTML Service"],
                github: "https://github.com/sanadidari/sheetradar",
                live: "/witi/sheetradar",
                icon: "🔍",
                from: "from-lime-500", to: "to-green-400",
            },
            {
                id: "smartpaste",
                title: "SmartPaste AI",
                description: {
                    en: "Intelligent copy-paste with data transmutation for Google Sheets — converts CSV, JSON, plain text and PDF tables into structured columns automatically.",
                    fr: "Copier-coller intelligent avec transmutation de données — CSV, JSON, texte brut en colonnes structurées automatiquement.",
                    ar: "لصق ذكي مع تحويل البيانات — يحول CSV وJSON والنص الخام إلى أعمدة منظمة تلقائياً.",
                },
                tech: ["Google Apps Script", "Gemini 2.5", "HTML Service"],
                github: "https://github.com/sanadidari/smartpaste",
                live: "/witi/smartpaste",
                icon: "📌",
                from: "from-teal-500", to: "to-cyan-400",
            },
            {
                id: "resume-ranker",
                title: "Resume Ranker AI",
                description: {
                    en: "AI-powered resume screening and ranking for HR workflow automation — multi-criteria scoring, batch processing, export-ready reports.",
                    fr: "Tri et classement de CV par IA pour l'automatisation RH — scoring multi-critères, traitement en lot, rapports exportables.",
                    ar: "فرز وترتيب السير الذاتية — تقييم متعدد المعايير وتقارير جاهزة للتصدير.",
                },
                tech: ["Google Apps Script", "Gemini 2.5"],
                github: "https://github.com/sanadidari/ai-resume-ranker",
                live: "/witi/resume-ranker",
                icon: "🎯",
                from: "from-violet-500", to: "to-purple-400",
            },
        ],
    },
];

export default function WitiHubPage() {
    const { lang, theme } = usePremium();
    const isDark = theme === "dark";

    const t = (obj: { en: string; fr: string; ar: string }) =>
        lang === "ar" ? obj.ar : lang === "fr" ? obj.fr : obj.en;

    const isRTL = lang === "ar";

    return (
        <div
            className={`min-h-screen ${isDark ? "bg-[#060608]" : "bg-[#F8F6F3]"} transition-colors duration-500`}
            dir={isRTL ? "rtl" : "ltr"}
        >
            {/* Subtle top gradient */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className={`absolute top-0 left-1/4 w-[800px] h-[400px] rounded-full blur-[160px] ${isDark ? "bg-[var(--accent-primary)]/5" : "bg-[var(--accent-primary)]/8"}`} />
            </div>

            <div className="relative z-10 pt-36 pb-24" style={{ maxWidth: '860px', margin: '0 auto', padding: '9rem 2rem 6rem' }}>

                {/* Back */}
                <motion.a
                    href="/"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`inline-flex items-center gap-2 mb-16 text-[0.7rem] font-bold uppercase tracking-[0.3em] ${isDark ? "text-white/30 hover:text-white/60" : "text-black/30 hover:text-black/60"} transition-colors`}
                >
                    <span className={isRTL ? "rotate-180 inline-block" : ""}>←</span>
                    {lang === "ar" ? "العودة للرئيسية" : lang === "fr" ? "RETOUR AU PORTAIL" : "BACK TO THE PORTAL"}
                </motion.a>

                {/* Hero header */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-20 space-y-4"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[0.65rem] font-bold uppercase tracking-widest border"
                        style={{
                            background: "rgba(var(--accent-primary-rgb, 180,140,90), 0.08)",
                            borderColor: "rgba(var(--accent-primary-rgb, 180,140,90), 0.2)",
                            color: "var(--accent-primary)"
                        }}
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] animate-pulse" />
                        {lang === "ar" ? "إيكوسيستم ويتي" : "WITI ECOSYSTEM"}
                    </div>
                    <h1 className={`text-3xl lg:text-5xl font-black leading-[1.1] tracking-tight ${isDark ? "text-white" : "text-[#1A1A2E]"}`}>
                        {lang === "ar" ? "منظومة" : "Institutional"}{" "}
                        <span className="text-[var(--accent-primary)]">
                            {lang === "ar" ? "الثقة الرقمية" : lang === "fr" ? "Intelligence" : "Intelligence"}
                        </span>
                    </h1>
                    <p className={`text-sm leading-relaxed max-w-md ${isDark ? "text-white/50" : "text-black/50"}`}>
                        {lang === "ar"
                            ? "منظومة متكاملة من البروتوكولات والتطبيقات الذكية المبنية على الثقة الصفرية."
                            : lang === "fr"
                            ? "Un écosystème de protocoles institutionnels et d'applications IA construits sur une architecture Zero-Trust."
                            : "A full-stack ecosystem of institutional protocols and AI applications built on Zero-Trust architecture."}
                    </p>
                </motion.div>

                {/* Categories */}
                <div className="space-y-20">
                    {categories.map((cat, catIdx) => (
                        <section key={cat.id}>

                            {/* Section header */}
                            <motion.div
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mb-10"
                            >
                                <span className={`inline-block text-[0.6rem] font-black uppercase tracking-[0.5em] px-3 py-1 rounded-full mb-3 ${isDark ? "bg-white/5 text-white/40" : "bg-black/5 text-black/40"}`}>
                                    {t(cat.tag)}
                                </span>
                                <h2 className={`text-xl font-black uppercase tracking-tight ${isDark ? "text-white/80" : "text-[#1A1A2E]/80"}`}>
                                    {t(cat.title)}
                                </h2>
                            </motion.div>

                            {/* App cards */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                {cat.apps.map((app, idx) => (
                                    <motion.div
                                        key={app.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.06, duration: 0.45 }}
                                        className={`group flex items-start gap-6 p-7 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
                                            isDark
                                                ? "bg-white/[0.03] border-white/8 hover:border-[var(--accent-primary)]/25 hover:bg-white/[0.05]"
                                                : "bg-white border-black/6 hover:border-[var(--accent-primary)]/30 shadow-sm hover:shadow-md"
                                        }`}
                                    >
                                        {/* Icon badge */}
                                        <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${app.from} ${app.to} flex items-center justify-center text-2xl shadow-sm group-hover:scale-105 transition-transform duration-300`}>
                                            {app.icon}
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                                                <div className="space-y-1.5">
                                                    <h3 className={`text-[0.95rem] font-black tracking-tight ${isDark ? "text-white" : "text-[#1A1A2E]"}`}>
                                                        {app.title}
                                                    </h3>
                                                    <p className={`text-sm leading-[1.7] mt-1 ${isDark ? "text-white/45" : "text-black/50"}`}>
                                                        {t(app.description)}
                                                    </p>
                                                    <div className="flex flex-wrap gap-1.5 pt-1">
                                                        {app.tech.map((tech) => (
                                                            <span
                                                                key={tech}
                                                                className={`text-[0.6rem] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                                                                    isDark
                                                                        ? "bg-white/6 text-white/40"
                                                                        : "bg-black/5 text-black/40"
                                                                }`}
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Buttons */}
                                                <div className="flex sm:flex-col gap-2 flex-shrink-0">
                                                    <a
                                                        href={app.live}
                                                        target={app.external ? "_blank" : "_self"}
                                                        rel={app.external ? "noopener noreferrer" : undefined}
                                                        className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-[0.65rem] font-black uppercase tracking-widest bg-[var(--accent-primary)] text-white hover:opacity-85 transition-opacity whitespace-nowrap"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        <span>▶</span>
                                                        {lang === "ar" ? "عرض" : lang === "fr" ? "VOIR" : "LIVE"}
                                                    </a>
                                                    <a
                                                        href={app.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-[0.65rem] font-black uppercase tracking-widest border transition-all whitespace-nowrap ${
                                                            isDark
                                                                ? "border-white/12 text-white/40 hover:border-white/30 hover:text-white/70"
                                                                : "border-black/10 text-black/40 hover:border-[var(--accent-primary)]/40 hover:text-[var(--accent-primary)]"
                                                        }`}
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        <span>⌥</span>
                                                        GitHub
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>

                {/* Footer quote */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className={`mt-24 pt-12 border-t text-center ${isDark ? "border-white/8" : "border-black/8"}`}
                >
                    <p className={`text-[0.75rem] font-medium italic ${isDark ? "text-white/25" : "text-black/30"}`}>
                        {lang === "ar"
                            ? "بناء مستقبل الثقة الرقمية من خلال النزاهة المؤسسية."
                            : lang === "fr"
                            ? "Architecturer l'avenir de la confiance numérique par l'intégrité institutionnelle."
                            : "Architecting the future of digital trust through institutional integrity."}
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
