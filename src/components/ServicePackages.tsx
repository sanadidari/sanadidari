"use client";

import { motion } from "framer-motion";
import { Check, Shield, Zap, TrendingUp } from "lucide-react";
import { usePremium } from "@/context/PremiumContext";

const packages = [
  {
    id: "audit",
    name: {
      fr: "Audit & Roadmap Architecture",
      en: "Audit & Architecture Roadmap",
      ar: "تدقيق مؤسساتي وخارطة طريق"
    },
    price: {
      fr: "À partir de 1 500€",
      en: "From 1,500€",
      ar: "ابتداءً من 15,000 درهم"
    },
    duration: { fr: "2-3 jours", en: "2-3 days", ar: "2-3 أيام" },
    icon: <Shield className="w-8 h-8" />,
    features: {
      fr: [
        "Audit de conformité technique",
        "Analyse de sécurité Zero-Trust",
        "Diagnostic de scalabilité",
        "Rapport de roadmap stratégique"
      ],
      en: [
        "Technical compliance audit",
        "Zero-Trust security analysis",
        "Scalability diagnostic",
        "Strategic roadmap report"
      ],
      ar: [
        "تدقيق المطابقة التقنية",
        "تحليل أمني (Zero-Trust)",
        "تشخيص قابلية التوسع",
        "تقرير خارطة الطريق الاستراتيجية"
      ]
    },
    color: "from-blue-500/20 to-indigo-500/20"
  },
  {
    id: "mvp",
    name: {
      fr: "Pack Transformation Digitale (MVP)",
      en: "Digital Transformation Pack (MVP)",
      ar: "باقة التحول الرقمي (MVP)"
    },
    price: {
      fr: "À partir de 5 000€",
      en: "From 5,000€",
      ar: "ابتداءً من 50,000 درهم"
    },
    duration: { fr: "4-6 semaines", en: "4-6 weeks", ar: "4-6 أسابيع" },
    icon: <Zap className="w-8 h-8" />,
    featured: true,
    features: {
      fr: [
        "Architecture WITI (Modulaire)",
        "Backend souverain (Supabase/Laravel)",
        "App Mobile Flutter (iOS/Android)",
        "Pipeline CI/CD & Tests automatisés"
      ],
      en: [
        "WITI Modular Architecture",
        "Sovereign Backend (Supabase/Laravel)",
        "Flutter Mobile App (iOS/Android)",
        "CI/CD Pipeline & Automated Tests"
      ],
      ar: [
        "هيكلة ويتي (WITI) الوحداتية",
        "خلفية سيادية (Supabase/Laravel)",
        "تطبيق موبايل (iOS/Android)",
        "بيئة تطوير آلية (CI/CD)"
      ]
    },
    color: "from-amber-500/20 to-orange-500/20"
  },
  {
    id: "advisor",
    name: {
      fr: "Accompagnement & Gouvernance",
      en: "Advisory & Governance",
      ar: "المواكبة والحكامة المستدامة"
    },
    price: {
      fr: "Sur Devis (Mensuel)",
      en: "Custom Quote (Monthly)",
      ar: "حسب الطلب (شهري)"
    },
    duration: { fr: "Engagement 6m+", en: "6m+ Engagement", ar: "التزام 6 أشهر+" },
    icon: <TrendingUp className="w-8 h-8" />,
    features: {
      fr: [
        "Support technique Senior (CTO as a Service)",
        "Optimisation continue des performances",
        "Veille sécuritaire & Compliance",
        "Audit trimestriel de croissance"
      ],
      en: [
        "Senior Tech Support (CTO as a Service)",
        "Continuous performance optimization",
        "Security & Compliance monitoring",
        "Quarterly growth audit"
      ],
      ar: [
        "دعم تقني عالي المستوى (CTO as a Service)",
        "تحسين مستمر للأداء",
        "مراقبة الأمن والامتثال القانوني",
        "تدقيق ربع سنوي للنمو"
      ]
    },
    color: "from-emerald-500/20 to-teal-500/20"
  }
];

export default function ServicePackages() {
  const { lang, theme } = usePremium();
  const dir = lang === "ar" ? "rtl" : "ltr";

  const t = {
    fr: {
      title: "Nos Packs d'Expertise",
      sub: "Des solutions architecturées pour la pérennité de vos projets.",
      cta: "Choisir ce pack",
      duration: "Durée estimée :",
    },
    en: {
      title: "Expertise Packages",
      sub: "Architected solutions for the longevity of your projects.",
      cta: "Choose this pack",
      duration: "Estimated duration:",
    },
    ar: {
      title: "باقات الخبرة",
      sub: "حلول مهيكلة لضمان استدامة مشاريعكم.",
      cta: "اختر هذه الباقة",
      duration: "المدة التقديرية:",
    }
  }[lang];

  return (
    <section className={`py-24 relative overflow-hidden transition-colors duration-1000 ${theme === 'light' ? 'bg-[#EEE3DF]' : 'bg-[#050505]'}`} id="services-pricing">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--accent-primary)]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-6xl font-black text-[var(--text-primary)] mb-6 uppercase tracking-tight">
            {t.title}
          </h2>
          <p className="text-xl text-[var(--text-primary)]/60 max-w-2xl mx-auto font-medium">
            {t.sub}
          </p>
          <div className="w-24 h-1 bg-[var(--accent-primary)] mx-auto mt-8 rounded-full" />
        </motion.div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch ${dir === "rtl" ? "md:flex-row-reverse" : ""}`}>
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative p-8 rounded-[2.5rem] border ${pkg.featured ? 'border-[var(--accent-primary)]' : 'border-[var(--text-primary)]/10'} bg-[var(--bg-primary)]/40 backdrop-blur-3xl flex flex-col h-full group transition-all duration-500 hover:shadow-[0_20px_50px_rgba(212,175,55,0.15)]`}
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--accent-primary)] text-black text-[0.7rem] font-black uppercase px-6 py-1.5 rounded-full tracking-[0.2em] shadow-lg">
                  Most Popular
                </div>
              )}

              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pkg.color} flex items-center justify-center text-[var(--accent-primary)] mb-8 group-hover:scale-110 transition-transform duration-500`}>
                {pkg.icon}
              </div>

              <h3 className="text-2xl font-black text-[var(--text-primary)] mb-2 uppercase leading-tight">
                {pkg.name[lang]}
              </h3>
              
              <div className="flex flex-col mb-8">
                <span className="text-3xl font-black text-[var(--accent-primary)] tracking-tight">
                  {pkg.price[lang]}
                </span>
                <span className="text-xs text-[var(--text-primary)]/40 font-bold uppercase tracking-widest mt-1">
                  {t.duration} {pkg.duration[lang]}
                </span>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {pkg.features[lang].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-[var(--accent-primary)]/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-[var(--accent-primary)]" strokeWidth={3} />
                    </div>
                    <span className="text-sm font-medium text-[var(--text-primary)]/80 leading-snug">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-[0.7rem] transition-all duration-300 ${
                pkg.featured 
                ? 'bg-[var(--accent-primary)] text-black hover:bg-white' 
                : 'border border-[var(--accent-primary)] text-[var(--accent-primary)] hover:bg-[var(--accent-primary)] hover:text-black'
              }`}>
                {t.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
