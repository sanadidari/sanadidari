"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useSpring, useMotionValue, useTransform } from "framer-motion";
import PremiumSwitcher from "@/components/PremiumSwitcher";
import { usePremium } from "@/context/PremiumContext";
import Link from "next/link";

const MegaMenuImageCard = ({ item, lang }: { item: any; lang: 'ar' | 'fr' | 'en' }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [30, -30]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-30, 30]), { stiffness: 100, damping: 30 });
  const shineX = useSpring(useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]));
  const shineY = useSpring(useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]));

  const getTitle = () => {
    if (lang === 'ar') return item.tAr;
    if (lang === 'fr') return item.tFr;
    return item.tEn || item.tFr;
  };

  const getDesc = () => {
    if (lang === 'ar') return item.dAr;
    if (lang === 'fr') return item.dFr;
    return item.dEn || item.dFr;
  };

  return (
    <div
      className="relative h-[400px] rounded-xl cursor-pointer group"
      style={{ perspective: "1000px" }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl border border-white/10"
      >
        <img src={item.img} className="w-full h-full object-cover pointer-events-none" />
        <motion.div
          className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${shineX} ${shineY}, rgba(255,255,255,0.4) 0%, transparent 60%)`,
          }}
        />
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500" />
        <div className="absolute inset-0 flex flex-col justify-end" style={{ transform: "translateZ(40px)", padding: "40px" }}>
          <h4 className="text-white font-bold text-xl drop-shadow-lg mb-3">{getTitle()}</h4>
          <div className="w-12 h-[2px] bg-[var(--accent-primary)] mb-4 group-hover:w-full transition-all duration-700" />
          <p className="text-white/80 text-[0.8rem] leading-relaxed">{getDesc()}</p>
        </div>
      </motion.div>
    </div>
  );
};

const content = {
  ar: {
    dir: "rtl" as const,
    menu: [
      { title: "الرئيسية", link: "/" },
      { title: "إيكوسيستم ويتي", link: "/witi" },
      { title: "الخبرة الاستشارية", link: "#" },
      { title: "التحول الرقمي", link: "#" },
      { title: "الشركاء", link: "#" },
      { title: "الفهرس القانوني", link: "https://adala.justice.gov.ma/" },
      { title: "تواصل معنا", link: "#" },
    ]
  },
  fr: {
    dir: "ltr" as const,
    menu: [
      { title: "Accueil", link: "/" },
      { title: "Ecosystème WITI", link: "/witi" },
      { title: "Expertise Conseil", link: "#" },
      { title: "Transformation Digitale", link: "#" },
      { title: "Partenaires", link: "#" },
      { title: "Index Juridique", link: "https://adala.justice.gov.ma/" },
      { title: "Contact", link: "#" },
    ]
  },
  en: {
    dir: "ltr" as const,
    menu: [
      { title: "Home", link: "/" },
      { title: "WITI Ecosystem", link: "/witi" },
      { title: "Strategic Advisory", link: "#" },
      { title: "Digital Evolution", link: "#" },
      { title: "Our Partners", link: "#" },
      { title: "Legal Repository", link: "https://adala.justice.gov.ma/" },
      { title: "Get in Touch", link: "#" },
    ]
  }
};

export default function Header() {
  const { lang, setLang, theme, setTheme } = usePremium();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [activeMegaMenu, setActiveMegaMenu] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileMenuHoverIdx, setMobileMenuHoverIdx] = useState(0);
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const current = content[lang];

  const handleNavMouseEnter = (idx: number | null) => {
    if (megaMenuTimeoutRef.current) clearTimeout(megaMenuTimeoutRef.current);
    setHoveredIdx(idx);
    if (idx !== null && idx >= 2 && idx <= 5) {
      setActiveMegaMenu(idx);
    } else {
      setActiveMegaMenu(null);
    }
  };

  const handleNavMouseLeave = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
      setHoveredIdx(null);
    }, 300);
  };

  return (
    <header className="relative h-[130px] bg-[var(--header-bg)] z-[100] transition-all duration-700 border-b border-[var(--border-color)]/10">
      <div className="flex items-center justify-between h-full px-0">
        <Link href="/" className="flex flex-col items-center justify-center gap-y-1 transition-all duration-500 hover:scale-105 cursor-pointer group mx-[12px]">
          <div className={`h-[1px] transition-all duration-500 ${lang === 'ar' ? 'w-[250px]' : 'w-[300px]'}`} style={{ backgroundColor: theme === 'dark' ? '#d4af37' : '#82503E' }} />
          <div className="flex flex-col items-center">
            <div className={`relative flex items-center justify-center transition-all duration-500 ${lang === 'fr' ? 'w-[300px] h-[60px]' : 'w-[250px] h-[60px]'}`}>
              <img src={lang === "ar" ? "/images/logo_ar.png" : "/images/logo_fr.png"} alt="Sanad Idari" className="relative w-full h-full object-contain" />
            </div>
            <div className="text-center transition-all duration-500 leading-[1.3]">
                {lang === 'ar' ? (
                  <div className="font-bold text-[0.8rem]" style={{ color: '#82503E' }}>
                    <div>مكتب الاستشارة، التحرير، والمواكبة</div>
                    <div>الإدارية الذكية</div>
                  </div>
                ) : lang === 'fr' ? (
                  <div className="font-playfair font-bold text-[0.75rem] tracking-[0.01em]" style={{ color: '#82503E' }}>
                    <div>Cabinet de conseil, de rédaction et</div>
                    <div>d'accompagnement administratif expert</div>
                  </div>
                ) : (
                  <div className="font-playfair font-bold text-[0.75rem] tracking-[0.01em]" style={{ color: '#82503E' }}>
                    <div>Specialized Advisory & Expert</div>
                    <div>Administrative Support Cabinet</div>
                  </div>
                )}
            </div>
          </div>
          <div className={`h-[1px] transition-all duration-500 ${lang === 'ar' ? 'w-[250px]' : 'w-[300px]'}`} style={{ backgroundColor: theme === 'dark' ? '#d4af37' : '#82503E' }} />
        </Link>

        <nav className="relative z-[101] pointer-events-auto hidden lg:block">
          <ul className="flex items-center gap-8 list-none">
            {current.menu.map((item: any, idx: number) => (
              <li key={idx} className="relative py-8" onMouseEnter={() => handleNavMouseEnter(idx)} onMouseLeave={handleNavMouseLeave}>
                <div className="relative group overflow-hidden">
                  <Link href={item.link} className="relative z-10 block whitespace-nowrap px-2">
                    <motion.span
                      animate={{
                        letterSpacing: hoveredIdx === idx ? "0.15em" : "0.01em",
                        color: hoveredIdx === idx ? (theme === 'dark' ? '#d4af37' : '#82503E') : 'var(--text-primary)'
                      }}
                      className="text-[0.95rem] font-bold"
                    >
                      {item.title}
                    </motion.span>
                  </Link>
                  <AnimatePresence>
                    {hoveredIdx === idx && (
                      <motion.div layoutId="nav-needle" initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }} exit={{ scaleX: 0, opacity: 0 }} className="absolute -bottom-2 left-0 right-0 h-[1.5px] z-20 origin-center" style={{ backgroundColor: theme === 'dark' ? '#d4af37' : '#82503E' }} />
                    )}
                  </AnimatePresence>
                </div>
              </li>
            ))}
          </ul>
        </nav>

        <AnimatePresence>
          {activeMegaMenu !== null && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }} 
              animate={{ height: "auto", opacity: 1 }} 
              exit={{ height: 0, opacity: 0 }} 
              transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }} 
              className="absolute top-[130px] left-0 right-0 bg-[var(--header-bg)] border-b border-[var(--border-color)]/20 overflow-hidden z-[40]"
              onMouseEnter={() => handleNavMouseEnter(activeMegaMenu)}
              onMouseLeave={handleNavMouseLeave}
            >
              <div className="max-w-[1400px] mx-auto px-12 py-12">
                {activeMegaMenu === 2 && (
                  <div className="flex flex-col gap-12 animate-in fade-in slide-in-from-top-4 duration-700">
                    <div className="grid grid-cols-2 gap-12 px-12">
                         <div className="space-y-6">
                           <h3 className="text-[var(--accent-primary)] font-bold text-lg mb-8 uppercase tracking-widest border-b border-[var(--accent-primary)]/20 pb-2 inline-block">
                             {lang === 'ar' ? 'التدقيق والتدبير' : lang === 'fr' ? 'Audit & Gestion' : 'Audit & Management'}
                           </h3>
                           <ul className="grid grid-cols-3 gap-4">
                             {['Audit Specialist', 'Performance Optimization', 'Risk Management'].map((item, i) => (
                               <li key={i} className="group cursor-pointer">
                                 <span className="text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-all duration-300 font-medium block">
                                   {lang === 'ar' ? (['تدقيق مؤسساتي', 'تحسين الأداء', 'إدارة المخاطر'][i]) : lang === 'fr' ? (['Audit Institutionnel', 'Optimisation Performance', 'Gestion des Risques'][i]) : item}
                                 </span>
                                 <div className="w-0 group-hover:w-full h-[1px] bg-[var(--accent-primary)]/30 transition-all duration-500 mt-1" />
                               </li>
                             ))}
                           </ul>
                         </div>
                         <div className="space-y-6">
                           <h3 className="text-[var(--accent-primary)] font-bold text-lg mb-8 uppercase tracking-widest border-b border-[var(--accent-primary)]/20 pb-2 inline-block">
                             {lang === 'ar' ? 'المواكبة القانونية' : lang === 'fr' ? 'Accompagnement' : 'Expert Guidance'}
                           </h3>
                           <ul className="grid grid-cols-3 gap-4">
                             {['Contracts & Acts', 'Administrative Disputes', 'Preventive Counsel'].map((item, i) => (
                               <li key={i} className="group cursor-pointer">
                                 <span className="text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-all duration-300 font-medium block">
                                   {lang === 'ar' ? (['صياغة العقود', 'النزاعات الإدارية', 'الاستشارة الوقائية'][i]) : lang === 'fr' ? (['Contrats & Actes', 'Litiges Administratifs', 'Conseil Préventif'][i]) : item}
                                 </span>
                                 <div className="w-0 group-hover:w-full h-[1px] bg-[var(--accent-primary)]/30 transition-all duration-500 mt-1" />
                               </li>
                             ))}
                           </ul>
                         </div>
                    </div>
                    <div className="relative h-[250px] w-full rounded-3xl overflow-hidden group shadow-2xl">
                         <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1400" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                         <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent flex flex-col justify-center p-12">
                           <p className="text-white/60 text-sm mb-2 tracking-widest uppercase">{lang === 'ar' ? 'رؤية استراتيجية' : lang === 'fr' ? 'Vision Stratégique' : 'Strategic Vision'}</p>
                           <h4 className="text-white text-4xl font-bold max-w-xl leading-tight">{lang === 'ar' ? 'التميز في الاستشارة الإدارية والمالية' : lang === 'fr' ? 'L\'Excellence en Conseil et Accompagnement Stratégique' : 'Excellence in Administrative & Financial Advisory'}</h4>
                           <div className="w-24 h-1 bg-[var(--accent-primary)] mt-6" />
                         </div>
                    </div>
                  </div>
                )}
                {activeMegaMenu === 3 && (
                    <div className="grid grid-cols-4 gap-4 px-12 animate-in fade-in zoom-in-95 duration-700">
                       {[
                         {
                           tAr: 'بوابة ذكية', tFr: 'Portail Intelligent', tEn: 'Smart Portal',
                           img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=500',
                           dAr: 'نعمل على تطوير بوابات ذكية متكاملة تسهل الولوج إلى الخدمات الإدارية بكفاءة عالية وأمان تام، مع توفير واجهات مستخدم حدسية تضمن تجربة رقمية فريدة تلبي تطلعات المرتفقين والمؤسسات.',
                           dFr: 'Nous développons des portails intelligents intégrés qui facilitent l\'accès aux services administratifs avec une efficacité maximale et une sécurité totale, offrant des interfaces intuitives.',
                           dEn: 'We build integrated smart portals for efficient administrative access, featuring secure and intuitive user experiences.'
                         },
                         {
                           tAr: 'رقمنة شاملة', tFr: 'Digitalisation Full', tEn: 'Full Digitization',
                           img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=500',
                           dAr: 'تهدف حلولنا للرقمنة الشاملة إلى تحويل كافة المساطر الورقية إلى تدفقات عمل رقمية مؤتمتة، مما يقلل من البيروقراطية ويسرع وقت المعالجة ويضمن دقة البيانات في كل مرحلة من مراحل العمل.',
                           dFr: 'Nos solutions de digitalisation complète visent à transformer toutes les procédures papier en flux de travail numériques automatisés, réduisant ainsi la bureaucratie.',
                           dEn: 'Our end-to-end digitization converts manual paperwork into automated workflows, slashing bureaucracy and accelerating cycle times.'
                         },
                         {
                           tAr: 'أمن البيانات', tFr: 'Data Security', tEn: 'Data Integrity',
                           img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=500',
                           dAr: 'نضع حماية البيانات في صلب استراتيجيتنا الرقمية من خلال أنظمة تشفير متطورة وبروتوكولات أمنية صارمة تضمن سرية المعلومات الحساسة وتحمي المؤسسة من التهديدات السيبرانية المتزايدة.',
                           dFr: 'Nous plaçons la protection des données au cœur de notre stratégie numérique grâce à des systèmes de cryptage avancés et des protocoles de sécurité rigoureux garantissant la confidentialité.',
                           dEn: 'We safeguard sensitive information with advanced encryption and robust security protocols, ensuring institutional resilience against cyber threats.'
                         },
                         {
                           tAr: 'حكامة رقمية', tFr: 'Digital Governance', tEn: 'Digital Governance',
                           img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500',
                           dAr: 'نوفر أدوات متقدمة للحكامة الرقمية تتيح تسييراً فعالاً للموارد ومراقبة دقيقة للأداء، مما يعزز من شفافية المؤسسة ويضمن اتخاذ قرارات مبنية على بيانات واقعية ودقيقة في الوقت الحقيقي.',
                           dFr: 'Nous fournissons des outils avancés de gouvernance numérique permettant une gestion efficace des ressources et un suivi précis des performances, renforçant la transparence.',
                           dEn: 'We provide strategic digital governance tools for resource optimization and real-time performance tracking to ensure data-driven transparency.'
                         }
                       ].map((item, i) => (
                         <MegaMenuImageCard key={i} item={item} lang={lang} />
                       ))}
                    </div>
                )}
                {activeMegaMenu === 4 && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                       <h3 className="text-center text-[var(--accent-primary)] font-bold text-2xl mb-12 uppercase tracking-[0.2em]">
                         {lang === 'ar' ? 'شبكة الشركاء الاستراتيجيين' : lang === 'fr' ? 'Réseau des Partenaires Stratégiques' : 'Strategic Partnership Network'}
                       </h3>
                       <div className="grid grid-cols-3 gap-10 px-12 mx-auto">
                         {[
                           {
                             tAr: 'الشركاء القانونيين', tFr: 'Partenaires Juridiques', tEn: 'Legal Partners',
                             dAr: 'تعاون وثيق مع مكاتب المحاماة والموثقين لضمان أعلى مستويات الحماية والامتثال القانوني الشامل.',
                             dFr: 'Collaboration étroite avec les cabinets d\'avocats et notaires pour garantir protection et conformité.',
                             dEn: 'Close collaboration with law firms and notaries to ensure total protection and compliance.'
                           },
                           {
                             tAr: 'شركاء التنفيذ', tFr: 'Partenaires d\'Exécution', tEn: 'Execution Partners',
                             dAr: 'شبكة من المفوضين القضائيين والوسطاء لتسريع وتيرة المساطر الإدارية وضمان نجاعة التدخل الميداني.',
                             dFr: 'Réseau de commissaires de justice et médiateurs pour accélérer les procédures et l\'efficacité terrain.',
                             dEn: 'A network of judicial officers and mediators to accelerate processes and field efficiency.'
                           },
                           {
                             tAr: 'نقابيين ومهنيين', tFr: 'Syndicalistes & Professionnels', tEn: 'Union & Professionals',
                             dAr: 'شراكات استراتيجية مع الهيئات المهنية والنقابية للدفاع عن حقوق الموظفين والأطر في مختلف القطاعات.',
                             dFr: 'Partenariats avec les instances professionnelles pour la défense des droits des cadres et employés.',
                             dEn: 'Strategic partnerships with professional bodies to defend employee and executive rights.'
                           },
                           {
                             tAr: 'الخبراء والمكونين', tFr: 'Experts & Formateurs', tEn: 'Experts & Trainers',
                             dAr: 'نخبة من الكفاءات الأكاديمية والمهنية لتقديم تكوينات متخصصة ترفع من جودة الأداء الفردي والمؤسساتي.',
                             dFr: 'Élite académique et professionnelle pour des formations spécialisées et l\'excellence institutionnelle.',
                             dEn: 'Academic and professional elites delivering specialized training for institutional excellence.'
                           },
                           {
                             tAr: 'خبراء الرقمنة', tFr: 'Experts Digitalisation', tEn: 'Digital Experts',
                             dAr: 'مواكبة تقنية من طرف كبار المتخصصين في تكنولوجيا المعلومات لرقمنة المساطر وبناء الإدارة الذكية.',
                             dFr: 'Accompagnement technique par des experts IT pour la digitalisation et l\'administration intelligente.',
                             dEn: 'Technical support from top IT specialists for process digitization and smart administration.'
                           },
                           {
                             tAr: 'الجمعويين', tFr: 'Associatifs', tEn: 'Community Partners',
                             dAr: 'تعاون مع جمعيات المجتمع المدني لترسيخ مبادئ الشفافية والمواطنة الإدارية النشطة والحكامة التشاركية.',
                             dFr: 'Coopération associative pour ancrer la transparence, la citoyenneté active et la gouvernance.',
                             dEn: 'Collaboration with civil society to anchor transparency and participatory governance.'
                           }
                         ].map((p, i) => (
                           <div key={i} className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-[var(--accent-primary)]/30 shadow-xl">
                             <h4 className="text-[var(--accent-primary)] font-bold text-lg mb-3 drop-shadow-sm transition-all duration-300 group-hover:pl-2">
                               {lang === 'ar' ? p.tAr : lang === 'fr' ? p.tFr : p.tEn}
                             </h4>
                             <div className="w-8 h-[2px] bg-[var(--accent-primary)]/40 mb-4 transition-all duration-700 group-hover:w-full" />
                             <p className="text-[var(--text-primary)]/70 text-sm leading-relaxed">{lang === 'ar' ? p.dAr : lang === 'fr' ? p.dFr : p.dEn}</p>
                             <motion.div className="absolute top-0 bottom-0 w-16 bg-gradient-to-r from-transparent via-[var(--accent-primary)]/10 to-transparent -skew-x-12 z-10 pointer-events-none" initial={{ left: "-100%" }} whileHover={{ left: "200%" }} transition={{ duration: 1.2, ease: "easeInOut" }} />
                           </div>
                         ))}
                       </div>
                    </div>
                )}
                {activeMegaMenu === 5 && (
                    <div className="relative min-h-[450px] flex items-center justify-center overflow-hidden py-16 px-6">
                       <div className="absolute inset-0 z-0">
                         <motion.div className="absolute inset-0 bg-[#3d251d]/95 backdrop-blur-3xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} />
                         <motion.div className="absolute top-[-20%] left-[-10%] w-[60%] h-[140%] bg-[var(--accent-primary)]/10 blur-[120px] rounded-[100%] rotate-12" animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }} />
                       </div>
                       <div className="relative z-10 w-full max-w-[1280px] flex flex-col items-center gap-12" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
                          <p className="text-white/60 uppercase tracking-[0.4em] text-sm">{lang === 'ar' ? 'الفهرس القانوني الرقمي' : 'Portail Juridique Digital'}</p>
                          <motion.button whileHover={{ scale: 1.05 }} className="px-12 py-4 bg-white/5 border border-[var(--accent-primary)]/40 text-[var(--accent-primary)] font-bold tracking-[0.3em] uppercase">
                             {lang === 'ar' ? 'تصفح البوابة' : 'Accéder au Portail'}
                          </motion.button>
                       </div>
                    </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex-shrink-0 flex flex-col items-center justify-center gap-y-1 font-cairo h-[110px]">
          <div className="scale-[0.85]">
            <PremiumSwitcher lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} />
          </div>
          <div className={`flex items-center gap-2 text-[0.85rem] font-extrabold tracking-tight transition-all ${lang === 'fr' ? 'font-montserrat' : 'font-cairo'}`} style={{ color: theme === 'dark' ? '#d4af37' : 'var(--accent-primary)' }}>
              <a href="#" className="hover:opacity-80 transition-opacity">{lang === 'ar' ? 'تسجيل' : lang === 'fr' ? 'Inscription' : 'Register'}</a>
              <span className="opacity-40">|</span>
              <a href="#" className="hover:opacity-80 transition-opacity">{lang === 'ar' ? 'دخول' : lang === 'fr' ? 'Connexion' : 'Login'}</a>
          </div>
          <div className="flex items-center">
            <div className={`relative flex items-center h-12 w-12 justify-center group cursor-pointer`}>
              <div className={`absolute top-1/2 -translate-y-1/2 transition-all duration-[1200ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] bg-[var(--bg-primary)]/90 backdrop-blur-2xl rounded-full border border-[var(--border-color)]/20 shadow-2xl h-full w-full ${lang === 'ar' ? 'left-0 group-hover:w-64' : 'right-0 group-hover:w-64'}`}>
                <div className={`absolute top-1/2 -translate-y-1/2 p-2.5 rounded-full text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-all duration-[1200ms] z-50 pointer-events-none ${lang === 'ar' ? 'right-1' : 'left-1'}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: theme === 'dark' ? '#d4af37' : '#82503E' }}>
                    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
                  </svg>
                </div>
                <div className="absolute inset-0 flex items-center flex-row px-4">
                  <div className="w-[70px] h-full shrink-0" />
                  <input type="text" placeholder={lang === 'ar' ? 'بحث...' : 'Rechercher...'} className={`flex-1 bg-transparent border-none outline-none text-sm text-[var(--text-primary)] transition-all duration-[1200ms] opacity-0 group-hover:opacity-100 placeholder:text-gray-400 ${lang === 'ar' ? 'text-right' : 'text-left'}`} />
                </div>
              </div>
            </div>

            {/* Premium Hamburger Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-4 z-[201] group lg:hidden"
            >
              <div className="flex flex-col gap-1.5 items-end">
                <motion.div animate={{ width: isMenuOpen ? 32 : 24, rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 8 : 0 }} className="h-0.5 bg-[var(--accent-primary)] rounded-full" />
                <motion.div animate={{ opacity: isMenuOpen ? 0 : 1, width: 32 }} className="h-0.5 bg-[var(--accent-primary)] rounded-full" />
                <motion.div animate={{ width: isMenuOpen ? 32 : 20, rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -8 : 0 }} className="h-0.5 bg-[var(--accent-primary)] rounded-full" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Global Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: lang === 'ar' ? '-100%' : '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: lang === 'ar' ? '-100%' : '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[200] flex bg-[#0a0504] overflow-hidden"
          >
            {/* Panel 1: Links */}
            <motion.div 
              className={`w-full md:w-[60%] h-full flex flex-col justify-center p-10 md:p-20 z-10 ${lang === 'ar' ? 'order-1 md:order-2' : ''}`}
              dir={lang === 'ar' ? 'rtl' : 'ltr'}
            >
               <div className="flex flex-col gap-6">
                {current.menu.map((item, idx) => (
                  <motion.div key={idx} initial={{ opacity: 0, x: lang === 'ar' ? 20 : -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + idx * 0.05 }}>
                    <Link 
                      href={item.link} 
                      onClick={() => setIsMenuOpen(false)}
                      onMouseEnter={() => setMobileMenuHoverIdx(idx)}
                      className="group relative flex flex-col items-start"
                    >
                      <h3 className="text-3xl md:text-5xl font-black text-white group-hover:text-[var(--accent-primary)] transition-all uppercase tracking-tighter">
                        {item.title}
                      </h3>
                      <div className={`mt-2 h-0.5 bg-[var(--accent-primary)] w-0 group-hover:w-full transition-all duration-500`} />
                    </Link>
                  </motion.div>
                ))}
               </div>
            </motion.div>

            {/* Panel 2: Visual & Info */}
            <motion.div className="hidden md:flex md:w-[40%] h-full border-l border-white/10 relative flex-col justify-between p-20 bg-white/5 backdrop-blur-3xl">
               <div className="absolute inset-0 z-0">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={mobileMenuHoverIdx}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 0.3, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.1 }}
                      transition={{ duration: 0.8 }}
                      src={[
                        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070",
                        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072",
                        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070",
                        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070",
                        "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069"
                      ][mobileMenuHoverIdx % 5]}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>
               </div>
               
               <div className="relative z-10">
                 <h4 className="text-[var(--accent-primary)] font-black text-6xl tracking-tighter">SANAD</h4>
                 <p className="text-white/40 tracking-[0.4em] uppercase text-xs">Administrative Expert</p>
               </div>

               <div className="relative z-10 space-y-8">
                 <div>
                   <h5 className="text-[var(--accent-primary)] text-[0.65rem] font-bold uppercase tracking-widest mb-2">{lang === 'ar' ? 'المقر' : 'Location'}</h5>
                   <p className="text-white/60 text-sm font-light leading-relaxed">Avenue Hassan II, Rabat, Morocco</p>
                 </div>
                 <div>
                   <h5 className="text-[var(--accent-primary)] text-[0.65rem] font-bold uppercase tracking-widest mb-2">Connect</h5>
                   <p className="text-white/60 text-sm font-light">contact@sanadidari.com</p>
                 </div>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
