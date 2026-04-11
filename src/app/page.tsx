"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useSpring, useMotionValue, useTransform } from "framer-motion";
import PremiumSwitcher from "@/components/PremiumSwitcher";
import { usePremium } from "@/context/PremiumContext";
import ExpandableDeck from "@/components/ExpandableDeck";
import ParallaxCarousel from "@/components/ParallaxCarousel";
import LiquidSlider from "@/components/LiquidSlider";
import ServicePackages from "@/components/ServicePackages";

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

        {/* Dynamic Shine Layer */}
        <motion.div
          className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${shineX} ${shineY}, rgba(255,255,255,0.4) 0%, transparent 60%)`,
          }}
        />

        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500" />
        <div
          className="absolute inset-0 flex flex-col justify-end"
          style={{ transform: "translateZ(40px)", padding: "40px" }}
        >
          <h4 className="text-white font-bold text-xl drop-shadow-lg mb-3">{getTitle()}</h4>
          <div className="w-12 h-[2px] bg-[var(--accent-primary)] mb-4 group-hover:w-full transition-all duration-700" />
          <p className="text-white/80 text-[0.8rem] leading-relaxed">
            {getDesc()}
          </p>
        </div>
      </motion.div>
    </div>
  );
};


const content = {
  ar: {
    dir: "rtl" as const,
    langLabel: "English / Français",
    themeLabels: { light: "وضع النهار", dark: "وضع الليل" },
    menu: [
      { title: "الرئيسية", link: "#" },
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
    langLabel: "English / العربية",
    themeLabels: { light: "Mode Clair", dark: "Mode Sombre" },
    menu: [
      { title: "Accueil", link: "#" },
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
    langLabel: "Français / العربية",
    themeLabels: { light: "Day View", dark: "Night Watch" },
    menu: [
      { title: "Home", link: "#" },
      { title: "WITI Ecosystem", link: "/witi" },
      { title: "Strategic Advisory", link: "#" },
      { title: "Digital Evolution", link: "#" },
      { title: "Our Partners", link: "#" },
      { title: "Legal Repository", link: "https://adala.justice.gov.ma/" },
      { title: "Get in Touch", link: "#" },
    ]
  }
};


const LuminescentParticle = ({ i, mX, mY }: { i: number, mX: any, mY: any }) => {
  const x = useSpring(useTransform(mX, [-0.5, 0.5], [i * 3, -i * 3]));
  const y = useSpring(useTransform(mY, [-0.5, 0.5], [i * 3, -i * 3]));

  // Stable pseudo-random values based on index to avoid hydration mismatch
  const seed = (val: number) => (Math.sin(val) * 10000) % 1;
  const initX = Math.abs(seed(i * 13.37)) * 100 + "%";
  const initY = Math.abs(seed(i * 37.13)) * 100 + "%";
  const initOpacity = Math.abs(seed(i * 7.77)) * 0.3 + 0.1;
  const initScale = Math.abs(seed(i * 9.99)) * 0.5 + 0.5;
  const animX1 = (Math.abs(seed(i * 2.22)) - 0.5) * 20 + "%";
  const animX2 = (Math.abs(seed(i * 4.44)) - 0.5) * 20 + "%";
  const duration = 20 + Math.abs(seed(i * 5.55)) * 30;

  return (
    <motion.div
      initial={{
        x: initX,
        y: initY,
        opacity: initOpacity,
        scale: initScale
      }}
      animate={{
        y: ["-10%", "110%"],
        x: [animX1, animX2],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{ x, y }}
      className="absolute w-1 h-1 bg-[var(--accent-primary)] rounded-full blur-[1px]"
    />
  );
};


export default function Home() {
  const { lang, setLang, theme, setTheme } = usePremium();
  const [hoveredSubIdx, setHoveredSubIdx] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const mX = useMotionValue(0);
  const mY = useMotionValue(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [hoveredOrbital, setHoveredOrbital] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    console.log("Sanad ID: v2.3 - Section 6: Force Sync");
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) - 0.5;
    const y = ((e.clientY - rect.top) / rect.height) - 0.5;
    setMousePos({ x, y });

    // Smooth motion values for particles
    mX.set(x);
    mY.set(y);
  };

  const current = content[lang];


  const serviceData = [
    {
      titleAr: 'تدقيق مؤسساتي', titleFr: 'AUDIT EXPERT', titleEn: 'INSTITUTIONAL AUDIT',
      descAr: 'نقدم خدمات تدقيق مؤسساتي شاملة تهدف إلى تعزيز مستويات النزاهة والشفافية داخل الهياكل الإدارية. يتضمن عملنا فحصاً دقيقاً للمساطر المالية والإدارية المعمول بها لضمان مطابقتها للمعايير الدولية، مع التركيز على تحديد نقاط الضعف وتقديم توصيات عملية لتحسين الأداء العام وتحقيق أقصى درجات الكفاءة التنافسية في بيئة عمل معقدة ومتغيرة باستمرار.',
      descFr: 'Nous proposons des services d\'audit institutionnel approfondis visant à renforcer les niveaux d\'intégrité et de transparence au sein des structures administratives. Notre travail comprend un examen rigoureux des procédures financières et administratives en vigueur pour garantir leur conformité aux standards internationaux, tout en mettant l\'accent sur l\'identification des points de vulnérabilité et la fourniture de recommandations pratiques pour améliorer la performance globale.',
      descEn: 'We provide comprehensive institutional audit services aimed at strengthening levels of integrity and transparency within administrative structures. Our work includes a rigorous examination of financial and administrative procedures to ensure compliance with international standards.',
      img1: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015',
      img2: 'https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2070'
    },
    {
      titleAr: 'تحول رقمي', titleFr: 'TRANSFORMATION DIGITALE', titleEn: 'DIGITAL TRANSFORMATION',
      descAr: 'نعمل على قيادة التحول الرقمي الشامل من خلال رقمنة المساطر الإدارية وبناء بنية تحتية تكنولوجية ذكية تدعم التوجهات السيادية. تشمل خدماتنا تطوير بوابات تفاعلية متطورة تضمن سلاسة الخدمات العمomية وأمان البيانات، مع التركيز على تقليل البيروقراطية وتسريع وتيرة العمل الإداري من خلال حلول تقنية مبتكرة تلبي تطلعات المرتفقين وتواكب التطورات العالمية في الحكامة الرقمية.',
      descFr: 'Nous menons une transformation digitale globale en numérisant les procédures administratives et en construisant une infrastructure technologique intelligente qui soutient les orientations souveraines. Nos services incluent le développement de portails interactifs avancés garantissant la fluidité des services publics et la sécurité des données, tout en mettant l\'accent sur la réduction de la bureaucratie et l\'accélération du rythme administratif.',
      descEn: 'We lead global digital transformation by digitizing administrative processes and building sovereign tech infrastructures. We focus on interactive portals, data security, and bureaucracy reduction.',
      img1: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070',
      img2: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070'
    },
    {
      titleAr: 'حكامة', titleFr: 'GOUVERNANCE', titleEn: 'GOVERNANCE',
      descAr: 'نسعى إلى إرساء آليات حكامة رشيدة قائمة على مبادئ المسؤولية والشفافية في اتخاذ القرار. نقوم بتطوير أطر تنظيمية تضمن التوازن المثالي بين الأهداف الاستراتيجية الكبرى والمتطلبات التشغيلية اليومية. يشمل ذلك تفعيل لجان الرقابة التشاركية وتطوير مؤشرات أداء دقيقة تتيح تسييراً فعالاً للموارد، مما يعزز الثقة المؤسساتية ويضمن استمرارية التميز في الأداء الحكومي والخاص على حد سواء.',
      descFr: 'Nous nous efforçons de mettre en place des mécanismes de bonne gouvernance basés sur les principes de responsabilité et de transparence. Nous développons des cadres réglementaires qui garantissent un équilibre parfait entre les grands objectifs stratégiques et les exigences opérationnelles quotidiennes. Cela inclut l\'activation de comités de contrôle participatif et le développement d\'indicateurs de performance précis.',
      descEn: 'We implement good governance frameworks based on accountability and transparency. We develop regulatory structures ensuring a perfect balance between strategic goals and operational efficiency.',
      img1: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069',
      img2: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070'
    },
    {
      titleAr: 'استشارة', titleFr: 'CONSEIL STRATÉGIQUE', titleEn: 'STRATEGIC ADVISORY',
      descAr: 'نقدم استشارات استراتيجية معمقة تعتمد على تحليل البيانات الضخمة واستشراف الاتجاهات المستقبلية لتقديم حلول مخصصة. يرافق خبراؤنا المؤسسات في صياغة رؤاها بعيدة المدى وتجاوز التحديات المعقدة من خلال منهجية عمل نقدية ومبتكرة. نهدف إلى تحويل العقبات إلى فرص نمو حقيقية، مع توفير الدعم اللازم لاتخاذ قرارات مدروسة تضمن التفوق في السوق وتحقيق الاستدامة المالية والإدارية المنشودة.',
      descFr: 'Nous fournissons des conseils stratégiques approfondis basés sur l\'analyse de données massives et la prospective des tendances futures pour proposer des solutions personnalisées. Nos experts accompagnent les institutions dans la formulation de leurs visions à long terme et le dépassement des défis complexes grâce à une méthodologie critique. Nous visons à transformer les obstacles en réelles opportunités de croissance.',
      descEn: 'We provide data-driven strategic advisory to anticipate trends and tailor solutions. We support institutions in crafting long-term visions and transforming challenges into growth opportunities.',
      img1: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070',
      img2: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070'
    },
    {
      titleAr: 'رقابة', titleFr: 'CONTRÔLE INTERNE', titleEn: 'INTERNAL CONTROL',
      descAr: 'يعد نظام الرقابة الداخلية لدينا بمثابة صمام أمان لضمان اليقظة المستمرة وتقييم المخاطر بفعالية. نعمل على تصميم وتفعيل مساطر مراقبة صارمة تضمن الامتثال الكامل للقوانين والأنظمة المعمول بها، بالإضافة إلى ترسيخ أخلاقيات العمل في كافة مفاصل التدبير. تهدف خدماتنا إلى حماية المال العام والأصول المؤسساتية من أي تجاوزات، مع السعي الدائم لتجويد العمليات الداخلية وضمان شفافية كافة المعاملات.',
      descFr: 'Notre système de contrôle interne sert de soupape de sécurité pour garantir une vigilance constante et une évaluation efficace des risques. Nous travaillons à concevoir et à activer des procédures de contrôle rigoureuses qui garantissent le plein respect des lois et réglementations en vigueur, tout en ancrant l\'éthique de travail à tous les niveaux de la gestion institutionnelle.',
      descEn: 'Our internal control system acts as a safeguard for constant vigilance and risk assessment. We design rigorous procedures to ensure regulatory compliance and protect institutional assets.',
      img1: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070',
      img2: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=2070'
    },
    {
      titleAr: 'تطوير', titleFr: 'DÉVELOPPEMENT', titleEn: 'DEVELOPMENT',
      descAr: 'نركز على التطوير المستمر للطاقات البشرية والتقنية كركيزة أساسية لضمان استدامة المشاريع المؤسساتية الكبرى. تشمل برامجنا التدريب المتخصص وتبني أحدث أدوات العمل لرفع الكفاءة وتعزيز التنافسية في بيئة اقتصادية متسارعة. نؤمن بأن الاستثمار في التحديث هو الطريق الوحيد لمواكبة الطلب المتزايد على الجودة والابتكار، مما يضمن للمؤسسة قدرة عالية على التكيف والنمو في ظل المتغيرات العالمية.',
      descFr: 'Nous nous concentrons sur le développement continu des capacités humaines et techniques comme pilier essentiel pour garantir la durabilité des grands projets. Nos programmes incluent des formations spécialisées et l\'adoption des derniers outils de travail pour accroître l\'efficacité. Nous croyons que l\'investissement dans la modernisation est le seul moyen de répondre à la demande croissante de qualité.',
      descEn: 'We focus on the continuous development of human and technical capital. Our specialized training and modern tools enhance efficiency and competitiveness in a rapidly changing environment.',
      img1: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070',
      img2: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070'
    },
    {
      titleAr: 'امتثال', titleFr: 'COMPLIANCE', titleEn: 'REGULATORY COMPLIANCE',
      descAr: 'نضمن المطابقة الكاملة مع القوانين والأنظمة الوطنية والدولية لتأمين المؤسسة ضد المخاطر القانونية والمالية المحتملة. نقوم بمراجعة وتحيين السياسات الداخلية لتتماشى مع التزامات الامتثال المتغيرة، مع توفير تدريب مستمر للفرق لضمان استيعاب كافة المتطلبات التنظيمية. هدفنا هو بناء ثقافة امتثال قوية تعزز من سمعة المؤسسة وتضمن لها مساراً قانونياً آمناً ومستداماً في عالم مليء بالتعقيدات التشريعية.',
      descFr: 'Nous garantissons une conformité totale avec les lois nationales et internationales pour protéger l\'institution contre les risques juridiques et financiers potentiels. Nous révisons et actualisons les politiques internes pour répondre aux obligations de conformité changeantes, tout en assurant une formation continue des équipes. Notre objectif est de bâtir une culture de conformité solide.',
      descEn: 'We ensure full compliance with national and international regulations. We update internal policies to mitigate legal and financial risks, fostering a strong culture of integrity.',
      img1: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070',
      img2: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070'
    },
    {
      titleAr: 'أمن', titleFr: 'SÉCURITÉ', titleEn: 'CYBERSECURITY',
      descAr: 'نوفر حماية شاملة للأصول المعنوية والمادية من خلال أنظمة أمنية متكاملة تواجه التهديدات السيبرانية والتقليدية المتطورة. تتضمن استراتيجيتنا تأمين قنوات الاتصال وتشفير البيانات الحساسة لضمان سرية المعلومات السيادية. نعمل بيقظة تامة على رصد الثغرات استباقياً وتقديم حلول دفاعية متطورة تضمن استمرارية العمل في أحلك الظروف، مما يعزز من مرونة المؤسسة وقدرتها على حماية مكتسباتها من أي تدخل غير مشروع.',
      descFr: 'Nous assurons une protection complète des actifs immatériels et matériels grâce à des systèmes de sécurité intégrés qui font face aux cybermenaces. Notre stratégie comprend la sécurisation des canaux de communication et le cryptage des données sensibles pour garantir la confidentialité des informations souveraines. Nous travaillons proactivement à détecter les vulnérabilités.',
      descEn: 'We provide comprehensive asset protection against evolving cyber threats. Our strategy secures communication channels and encrypts sensitive data to guarantee sovereign information safety.',
      img1: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070',
      img2: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070'
    }
  ];

  // Multimedia assets for Design 4 & 5
  const menuMedia: any = {
    structure: {
      video: "https://player.vimeo.com/external/494252666.sd.mp4?s=bc43ea4144356e6d3066607d0f9836a9928a6f3b&profile_id=165&oauth2_token_id=57447761",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      slides: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1556761175-5973bcad5c2a?q=80&w=2032&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
      ]
    },
    services: {
      video: "https://player.vimeo.com/external/494252666.sd.mp4?s=bc43ea4144356e6d3066607d0f9836a9928a6f3b&profile_id=165&oauth2_token_id=57447761",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
      slides: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1554435493-93422e8220c8?q=80&w=2071&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
      ],
      keywords: [
        { ar: 'تدقيق مؤسساتي', fr: 'AUDIT INSTITUTIONNEL', en: 'INSTITUTIONAL AUDIT' },
        { ar: 'استشارة استراتيجية', fr: 'CONSEIL STRATÉGIQUE', en: 'STRATEGIC ADVISORY' },
        { ar: 'تحول رقمي', fr: 'TRANSFORMATION DIGITALE', en: 'DIGITAL TRANSFORMATION' },
        { ar: 'مواكبة إدارية', fr: 'ACCOMPAGNEMENT EXPERT', en: 'EXPERT GUIDANCE' },
        { ar: 'تميز قانوني', fr: 'EXCELLENCE JURIDIQUE', en: 'LEGAL EXCELLENCE' },
        { ar: 'حكامة مستدامة', fr: 'GOUVERNANCE DURABLE', en: 'SUSTAINABLE GOVERNANCE' }
      ]
    },
    heikala: {
      video: "https://player.vimeo.com/external/420077884.sd.mp4?s=a0808a2fe6177e60d970e7047f524e16d44c8d5a&profile_id=165&oauth2_token_id=57447761",
      image: "https://images.unsplash.com/photo-1454165833767-1516763bafdf?q=80&w=2070&auto=format&fit=crop",
      slides: [
        "https://images.unsplash.com/photo-1454165833767-1516763bafdf?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
      ]
    }
  };

  // Slider Auto-play logic (Permanent for Homepage Persistence)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 6);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Testimonials Data
  const testimonials = [
    {
      nameAr: "عبد الكريم بنشقرون", nameFr: "Abdelkrim Benchekroun", nameEn: "Abdelkrim Benchekroun",
      roleAr: "موظف بمؤسسة عمومية", roleFr: "Fonctionnaire", roleEn: "Public Official",
      testiAr: "الجميل في سند إداري أنهم لا يكتفون بكتابة الشكاية، بل يشرحون لك خلفية كل إجراء، حتى تفهم حقك وتتصرف بثقة. أشعر اليوم أنني أكثر وعيًا بموقفي القانوني.",
      testiFr: "Ce qui est beau chez Sanad Idari, c'est qu'ils ne se contentent pas de rédiger la plainte, mais vous expliquent le contexte de chaque procédure.",
      testiEn: "The remarkable thing about Sanad Idari is their dedication; they don't just draft documents, they empower you with legal clarity and confidence.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop"
    },
    {
      nameAr: "نزهة العماري", nameFr: "Nezha El Amrani", nameEn: "Nezha El Amrani",
      roleAr: "موظفة بقطاع المالية", roleFr: "Employée au secteur financier", roleEn: "Finance Professional",
      testiAr: "كنت أظن أن الإنذارات الإدارية أمر نهائي، لكن المكتب أثبت لي أن لكل قرار حق الرد القانوني. تمت صياغة جوابي بشكل محكم وجرى سحب الإنذار. تجربة مهنية راقية جداً.",
      testiFr: "Je pensais que les avertissements administratifs étaient définitifs, mais le cabinet m'a prouvé que chaque décision a un droit de réponse légal.",
      testiEn: "I thought administrative warnings were final, but Sanad Idari proved otherwise. Their strategic response led to the warning being withdrawn.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
    },
    {
      nameAr: "محمد فلاح", nameFr: "Mohamed Fellah", nameEn: "Mohamed Fellah",
      roleAr: "ممرض رئيسي بقطاع الصحة", roleFr: "Infirmier Chef", roleEn: "Senior Health Officer",
      testiAr: "تلقيت تنبيهًا تأديبيًا بسبب سوء فهم إداري داخلي. تدخل فريق سند إداري بسرعة، حرّر مذكرة توضيحية قوية، وتم سحب التنبيه في ظرف أسبوع. أشعر فعلاً أن هناك من يحمي الموظف بالعلم والحكمة.",
      testiFr: "J'ai reçu un avertissement disciplinaire suite à un malentendu. L'équipe Sanad Idari est intervenue rapidement et l'avertissement a été retiré en une semaine.",
      testiEn: "Their rapid intervention and solid clarification memo resolved a disciplinary misunderstanding in just one week. Truly professional protection.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
    },
    {
      nameAr: "فاطمة الزهراء بنطالب", nameFr: "Fatima Zahra Bentaleb", nameEn: "Fatima Zahra Bentaleb",
      roleAr: "أستاذة التعليم الثانوي", roleFr: "Professeure de l'enseignement secondaire", roleEn: "Academic Professor",
      testiAr: "كنت على وشك الوقوع في خطأ إداري بعد أن تلقيت استفسارًا من المديرية. بفضل التوجيه المهني من سند إداري، تمت صياغة الرد بشكل قانوني دقيق، وتم حفظ الملف دون أي أثر سلبي في مساري المهني.",
      testiFr: "J'étais sur le point de commettre une erreur administrative. Grâce à l'orientation professionnelle de Sanad Idari, la réponse a été formulée avec précision juridique.",
      testiEn: "Thanks to Sanad Idari's expert guidance, a complex administrative inquiry was settled without any impact on my career path.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
    }
  ];

  const orbitalNodes = [
    { labelAr: 'تدقيق مؤسساتي', labelFr: 'AUDIT EXPERT', labelEn: 'AUDIT EXPERT', t: '85%', l: '45%', w: 'w-48', h: 'h-48', color: 'bg-blue-500', delay: '0s', link: '/audit', icon: (<svg className="w-6 h-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>) },
    { labelAr: 'تحول رقمي', labelFr: 'DIGITAL', labelEn: 'DIGITAL', t: '70%', l: '15%', w: 'w-40', h: 'h-40', color: 'bg-purple-500', delay: '0.2s', link: '/digital', icon: (<svg className="w-6 h-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>) },
    { labelAr: 'حكامة', labelFr: 'GOUVERNANCE', labelEn: 'GOVERNANCE', t: '25%', l: '85%', w: 'w-52', h: 'h-52', color: 'bg-green-500', delay: '0.4s', link: '/gouvernance', icon: (<svg className="w-6 h-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>) },
    { labelAr: 'استشارة', labelFr: 'CONSEIL', labelEn: 'ADVISORY', t: '75%', l: '70%', w: 'w-44', h: 'h-44', color: 'bg-amber-500', delay: '0.6s', link: '/conseil', icon: (<svg className="w-6 h-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>) },
    { labelAr: 'رقابة', labelFr: 'CONTRÔLE', labelEn: 'CONTROL', t: '45%', l: '10%', w: 'w-36', h: 'h-36', color: 'bg-rose-500', delay: '0.1s', link: '/controle', icon: (<svg className="w-6 h-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>) },
    { labelAr: 'تطوير', labelFr: 'STRATÉGIE', labelEn: 'STRATEGY', t: '60%', l: '82%', w: 'w-56', h: 'h-56', color: 'bg-indigo-500', delay: '0.3s', link: '/strategie', icon: (<svg className="w-6 h-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>) },
    { labelAr: 'امتثال', labelFr: 'COMPLIANCE', labelEn: 'COMPLIANCE', t: '30%', l: '55%', w: 'w-40', h: 'h-40', color: 'bg-cyan-500', delay: '0.5s', link: '/compliance', icon: (<svg className="w-6 h-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1.01.707V19a2 2 0 01-2 2z" /></svg>) },
    { labelAr: 'أمن', labelFr: 'SÉCURITÉ', labelEn: 'SECURITY', t: '25%', l: '25%', w: 'w-32', h: 'h-32', color: 'bg-emerald-500', delay: '0.7s', link: '/securite', icon: (<svg className="w-6 h-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>) }
  ];

  if (!mounted) return null;

  return (
    <main dir={current.dir} onMouseMove={handleMouseMove} className="min-h-screen bg-[var(--bg-primary)] font-cairo transition-all duration-700">


      {/* HOMEPAGE CONTENT STRUCTURE */}
      <div className="flex flex-col transition-all duration-700">

        {/* SECTION 0: IMMERSIVE CINEMATIC HOOK - MULTISENSORY EXPERIENCE */}
        <section className={`relative h-[100vh] flex items-center justify-center overflow-hidden transition-colors duration-1000 z-[46] group ${theme === 'light' ? 'bg-[#EEE3DF]' : 'bg-[#050505]'}`}>
          <div className="absolute inset-0 z-0">
            <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-${theme === 'light' ? '[#EEE3DF]/60' : '[#050505]/60'} to-${theme === 'light' ? '[#EEE3DF]' : '[#050505]'} z-10`} />

            {/* Cinematic Background Video - Looping High Fidelity - FORCE VISIBLE */}
            <div className="absolute inset-0 w-full h-full">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover grayscale opacity-40 mix-blend-darken scale-110"
              >
                <source src="https://player.vimeo.com/external/494252666.sd.mp4?s=bc43ea4144356e6d3066607d0f9836a9928a6f3b&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
              </video>
            </div>

            {/* Atmospheric Montage Overlay - CRYSTAL CLEAR SEAMLESS CROSSFADE */}
            <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden">
              <AnimatePresence>
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 1, scale: 1, x: lang === 'ar' ? 20 : -20 }}
                  animate={{ opacity: 0.45, scale: 1.05, x: 0 }}
                  exit={{ opacity: 0, scale: 1.1, x: lang === 'ar' ? -20 : 20, transition: { duration: 2.5 } }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <img src={menuMedia.services.slides[activeSlide]} className="w-full h-full object-cover" />

                  {/* Prominent Kinetic Context Keyword - THE CENTRAL MESSAGE */}
                  <motion.div
                    key={`msg-${activeSlide}`}
                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -50, scale: 1.2 }}
                    transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
                    className="absolute top-[35%] w-full text-center pointer-events-none"
                  >
                    <span className="text-[#000000] font-black text-xl lg:text-3xl tracking-[1.2em] uppercase backdrop-blur-sm px-8 py-2 border-y border-[var(--text-primary)]/20 shadow-2xl">
                      {lang === 'ar' ? menuMedia.services.keywords[activeSlide].ar : menuMedia.services.keywords[activeSlide].fr}
                    </span>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Digital Dust Particle System - LUMINESCENT ATMOSPHERE */}
            <div className="absolute inset-0 z-[8] pointer-events-none overflow-hidden">
              {mounted && [...Array(20)].map((_, i) => (
                <LuminescentParticle key={i} i={i} mX={mX} mY={mY} />
              ))}
            </div>

            {/* Atmosphere: Pulsing Golden Aura & Fallback Glow */}
            <motion.div
              animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.1, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.25)_0%,rgba(130,80,62,0.1)_40%,transparent_70%)] pointer-events-none"
            />

          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative z-20 text-center px-6 max-w-6xl w-full"
          >
            {/* Innovative Reveal Title - LETTER BY LETTER REVEAL */}
            <div className="flex flex-col items-center">
              <div className="flex flex-wrap justify-center overflow-hidden mb-2">
                {(lang === 'ar' ? 'البعد الجديد' : 'LA NOUVELLE').split('').map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: "150%", rotate: 15 }}
                    whileInView={{ y: 0, rotate: 0 }}
                    transition={{ duration: 1, delay: i * 0.05, ease: [0.19, 1, 0.22, 1] }}
                    className="inline-block text-transparent bg-clip-text bg-gradient-to-b from-[var(--text-primary)] to-[var(--text-primary)]/20 text-6xl lg:text-[9rem] font-black uppercase italic leading-none"
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </div>
              <div className="flex flex-wrap justify-center overflow-hidden -mt-4 lg:-mt-10">
                {(lang === 'ar' ? 'للحكامة' : 'DIMENSION').split('').map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: "150%", rotate: -15 }}
                    whileInView={{ y: 0, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.5 + (i * 0.05), ease: [0.19, 1, 0.22, 1] }}
                    className="inline-block text-[var(--accent-primary)] text-7xl lg:text-[10rem] font-black uppercase italic leading-none drop-shadow-[0_0_50px_rgba(212,175,55,0.4)]"
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Kinetic Sub-description */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="mt-12 flex flex-col items-center"
            >
              <div className="w-48 h-px bg-gradient-to-r from-transparent via-[var(--accent-primary)] to-transparent mb-8" />
              <p className="text-[var(--text-primary)]/80 text-lg lg:text-2xl font-bold tracking-[0.4em] uppercase">
                {lang === 'ar' ? 'رؤية • تميز • استمرارية' : lang === 'fr' ? 'VISION • EXCELLENCE • INFINITÉ' : 'VISION • EXCELLENCE • INFINITY'}
              </p>
            </motion.div>

          </motion.div>

          <style jsx>{`
            @keyframes slowZoom {
              0% { transform: scale(1.1) rotate(0deg); }
              50% { transform: scale(1.3) rotate(2deg); }
              100% { transform: scale(1.1) rotate(0deg); }
            }
            @keyframes scrollLine {
              0% { transform: translateY(-100%); opacity: 0; }
              50% { transform: translateY(0); opacity: 1; }
              100% { transform: translateY(100%); opacity: 0; }
            }
            .vertical-text {
              writing-mode: vertical-rl;
              text-orientation: mixed;
            }
          `}</style>
        </section>

        {/* SECTION 1: HOMEPAGE HERO */}
        <section className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-1000 z-[45] ${theme === 'light' ? 'bg-[#EEE3DF]' : 'bg-[#050505]'}`}>

          {/* Background Mesh */}
          <div className={`absolute inset-0 transition-opacity duration-[2000ms] pointer-events-none opacity-20`}>
            <svg className="w-full h-full">
              <defs>
                <pattern id="heroGrid" width="80" height="80" patternUnits="userSpaceOnUse">
                  <circle cx="1.5" cy="1.5" r="1.5" fill={theme === 'dark' ? '#d4af37' : '#82503E'} />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#heroGrid)" />
            </svg>
          </div>

          {/* Interactive Hero Content */}
          <div className="relative z-[50] w-full max-w-7xl px-10 flex items-center justify-center min-h-[80vh]">

            {/* Centered Interactive Nodes */}
            <div className="relative w-full max-w-6xl aspect-square lg:aspect-[2/1] flex items-center justify-center overflow-visible">

              {selectedService !== null ? (
                /* SERVICE DETAIL VIEW */
                <div className={`w-full h-full flex flex-col lg:flex-row items-center gap-0 animate-[fadeIn_1s_ease-out] relative ${lang === 'ar' ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>

                  {/* BLOCK 1: BACK NAVIGATION - BOTH DOCKED TO THE LEFT EDGE */}
                  <div className={`w-full lg:w-[20%] flex flex-col items-center justify-center relative translate-x-[-30%]`}>
                    <div
                      role="button"
                      onClick={() => setSelectedService(null)}
                      className="group cursor-pointer relative w-72 h-72 flex items-center justify-center p-0"
                    >
                      <div className="absolute inset-0 rounded-full border border-[#D4AF37]/10 scale-95 group-hover:scale-110 transition-transform duration-1000 animate-pulse" />
                      <div className="relative w-64 h-64 flex items-center justify-center">
                        <div className={`w-60 h-60 rounded-full border-2 border-[#D4AF37] bg-gradient-to-br from-[#D4AF37]/20 via-[var(--bg-primary)]/40 to-[#D4AF37]/10 backdrop-blur-xl flex flex-col items-center justify-center shadow-[0_0_50px_rgba(212,175,55,0.3)] transition-all duration-700 group-hover:scale-105 z-20 relative overflow-hidden`}>
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-100 transition-opacity duration-700">
                            <img src={lang === "ar" ? "/images/logo_ar.png" : "/images/logo_fr.png"} alt="Sanad Base" className="w-[140px] h-auto object-contain transition-all duration-500 opacity-20" style={{ mixBlendMode: theme === 'light' ? 'multiply' : 'normal' }} />
                          </div>
                          <div className="relative z-30 flex flex-col items-center p-4">
                            <div className="w-10 h-10 flex items-center justify-center text-[var(--text-primary)] opacity-80 scale-[1.2] mb-4 transition-transform group-hover:scale-[1.3]">
                              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <span className="text-[var(--text-primary)] font-black text-sm tracking-tight text-center leading-tight uppercase max-w-[150px]">
                              {lang === 'ar' ? serviceData[selectedService].titleAr : lang === 'fr' ? serviceData[selectedService].titleFr : serviceData[selectedService].titleEn}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className={`absolute bottom-0 flex flex-col items-center opacity-40 group-hover:opacity-100 transition-all`}>
                        <svg className={`w-5 h-5 mb-2 text-[#D4AF37] ${lang === 'ar' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
                        <span className="text-[9px] font-black tracking-[0.4em] text-[#D4AF37]">{lang === 'ar' ? 'الرجوع للقائمة' : lang === 'fr' ? 'RETOUR AU MENU' : 'BACK TO MENU'}</span>
                      </div>
                    </div>
                  </div>

                  {/* BLOCK 2: CONTENT & IMAGES - MASSIVE FOCUS */}
                  <div className={`w-full lg:w-[80%] flex flex-col justify-center gap-10 px-6 lg:px-20 ${lang === 'ar' ? 'lg:pl-32 lg:pr-10 text-right' : 'lg:pr-32 lg:pl-10 text-left'}`}>
                    <div className="space-y-4">
                      {/* DECORATIVE HEADER (Option 1) */}
                      <div className={`flex items-end gap-4 mb-4 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                        <span className="text-5xl font-black text-[#D4AF37]/20 leading-none">
                          {String(selectedService + 1).padStart(2, '0')}
                        </span>
                        <div className="flex flex-col gap-1 pb-1">
                          <span className="text-[var(--accent-primary)] font-bold tracking-[0.4em] text-[0.65rem] uppercase leading-none">
                            {lang === 'ar' ? 'فصل التميز' : lang === 'fr' ? 'CHAPITRE D\'EXCELLENCE' : 'EXCELLENCE CHAPTER'}
                          </span>
                          <div className={`h-[1px] bg-gradient-to-r from-[#D4AF37] to-transparent ${lang === 'ar' ? 'w-full' : 'w-24'}`} />
                        </div>
                      </div>

                      <h2 className="text-3xl lg:text-4xl font-black text-[var(--text-primary)] uppercase tracking-tight mb-4 leading-tight">
                        {lang === 'ar' ? serviceData[selectedService].titleAr : lang === 'fr' ? serviceData[selectedService].titleFr : serviceData[selectedService].titleEn}
                      </h2>
                      <div className={`w-16 h-0.5 bg-[#D4AF37] opacity-60 mb-6 ${lang === 'ar' ? 'ml-auto' : ''}`} />
                      <p className="text-[17px] text-[var(--text-primary)]/90 font-medium leading-[2.4] max-w-5xl">
                        {lang === 'ar' ? serviceData[selectedService].descAr : lang === 'fr' ? serviceData[selectedService].descFr : serviceData[selectedService].descEn}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 w-full">
                      <div className="flex-1 aspect-[16/9] rounded-3xl overflow-hidden border border-[#D4AF37]/20 shadow-xl group/img">
                        <img src={serviceData[selectedService].img1} className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover/img:scale-110 grayscale opacity-80 hover:grayscale-0 hover:opacity-100" />
                      </div>
                      <div className="flex-1 aspect-[16/9] rounded-3xl overflow-hidden border border-[#D4AF37]/20 shadow-xl group/img">
                        <img src={serviceData[selectedService].img2} className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover/img:scale-110 grayscale opacity-80 hover:grayscale-0 hover:opacity-100" />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className={`w-80 h-80 rounded-full border-2 border-[#D4AF37] flex items-center justify-center relative shadow-[0_0_150px_rgba(212,175,55,0.3)] bg-gradient-to-br from-[#D4AF37]/15 via-transparent to-[#D4AF37]/5 group transition-all duration-1000 z-10 overflow-hidden`}>
                    <div className="absolute inset-0 rounded-full border border-[#D4AF37]/5 animate-ping group-hover:animate-none group-hover:scale-125 transition-transform" />
                    <div className="absolute -inset-8 border border-[#D4AF37]/5 rounded-full animate-[spin_30s_linear_infinite]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)]" />
                    <div className="flex flex-col items-center relative z-20">
                      <img
                        src={lang === "ar" ? "/images/logo_ar.png" : "/images/logo_fr.png"}
                        alt="Sanad Logo"
                        className="w-[220px] h-auto object-contain transition-all duration-700 group-hover:scale-105"
                        style={{ mixBlendMode: theme === 'light' ? 'multiply' : 'normal' }}
                      />
                      <div className="mt-4 w-12 h-px bg-[#D4AF37]/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                    </div>
                  </div>

                  {orbitalNodes.map((tile, i) => {
                    const isHovered = hoveredOrbital === i;
                    return (
                      <div key={i} className="absolute inset-0 pointer-events-none">
                        {/* STATIC HITBOX */}
                        <div
                          role="button"
                          onClick={() => setSelectedService(i)}
                          onMouseEnter={() => setHoveredOrbital(i)}
                          style={{ top: tile.t, left: tile.l }}
                          className={`absolute ${tile.w} ${tile.h} -translate-x-1/2 -translate-y-1/2 cursor-pointer pointer-events-auto z-[200] opacity-0`}
                        />
                        {/* VISUAL CIRCLE (STATIC POSITION) */}
                        <div
                          role="button"
                          onClick={() => setSelectedService(i)}
                          onMouseEnter={() => setHoveredOrbital(i)}
                          style={{
                            top: tile.t,
                            left: tile.l,
                            animationDelay: tile.delay,
                            borderColor: isHovered ? '#D4AF37' : (theme === 'light' ? '#82503E' : '#82503E'),
                            zIndex: isHovered ? 30 : 10
                          }}
                          className={`absolute ${tile.w} ${tile.h} -translate-x-1/2 -translate-y-1/2 bg-[var(--bg-primary)]/40 backdrop-blur-3xl border-2 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center pointer-events-auto cursor-pointer`}
                        >
                          <div className={`w-full h-full flex flex-col items-center justify-center transition-all`}>
                            <div className="flex flex-col items-center gap-1 p-4 pointer-events-none">
                              <div className={`text-[var(--text-primary)] opacity-80 transition-all duration-500`}>
                                {tile.icon}
                              </div>
                              <span className="text-[var(--text-primary)] font-black text-sm tracking-tight text-center leading-tight">{lang === 'ar' ? tile.labelAr : lang === 'fr' ? tile.labelFr : tile.labelEn}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </>
              )}
            </div >
          </div >
        </section >
        
        {/* SECTION 2: SERVICE PACKAGES (NEW) */}
        <ServicePackages />

        {/* SECTION 3: SLIDER (NEW) */}
        <section className="relative transition-colors duration-700 bg-[#000000]" style={{ padding: '40px 0' }}>
          <div className="max-w-7xl mx-auto px-10 flex flex-col items-center" style={{ marginTop: '20px', marginBottom: '30px' }}>
            <h2
              className="uppercase mb-4 text-center text-white"
              style={{ fontSize: '24px', fontWeight: '800', letterSpacing: '0.1em' }}
            >
              {lang === 'ar' ? 'أحدث التقنيات' : lang === 'fr' ? 'INNOVATIONS & EXPERTISE' : 'INNOVATIONS & EXPERTISE'}
            </h2>
            <div className="w-20 h-1 bg-[#D4AF37]" />
          </div>

          <ExpandableDeck
            theme={theme}
            items={[
              {
                id: '1',
                title: lang === 'ar' ? 'الذكاء الاصطناعي' : lang === 'fr' ? 'INTELLIGENCE ARTIFICIELLE' : 'ARTIFICIAL INTELLIGENCE',
                description: lang === 'ar' ? 'دمج حلول الذكاء الاصطناعي لتحسين الكفاءة واتخاذ القرارات الاستراتيجية.' : lang === 'fr' ? 'Intégration de solutions IA avancées pour optimiser l\'efficacité opérationnelle et la prise de décision stratégique.' : 'Integration of advanced AI solutions to optimize operational efficiency and strategic decision-making.',
                image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop',
                link: '#'
              },
              {
                id: '2',
                title: lang === 'ar' ? 'الأمن السيبراني' : lang === 'fr' ? 'CYBERSÉCURITÉ AVANCÉE' : 'ADVANCED CYBERSECURITY',
                description: lang === 'ar' ? 'حماية بياناتك وبنيتك التحتية بأحدث بروتوكولات الأمان العالمية.' : lang === 'fr' ? 'Protection robuste de vos données et infrastructures critiques grâce aux derniers protocoles de sécurité mondiaux.' : 'Robust protection of your data and critical infrastructure using the latest global security protocols.',
                image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
                link: '#'
              },
              {
                id: '3',
                title: lang === 'ar' ? 'التحول الرقمي' : lang === 'fr' ? 'TRANSFORMATION DIGITALE' : 'DIGITAL TRANSFORMATION',
                description: lang === 'ar' ? 'رقمنة العمليات لزيادة الإنتاجية وتقليل التكاليف التشغيلية.' : lang === 'fr' ? 'Digitalisation complète des processus métiers pour maximiser la productivité et réduire les coûts opérationnels.' : 'Complete digitization of business processes to maximize productivity and reduce operational costs.',
                image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
                link: '#'
              },
              {
                id: '4',
                title: lang === 'ar' ? 'الحوسبة السحابية' : lang === 'fr' ? 'CLOUD COMPUTING' : 'CLOUD COMPUTING',
                description: lang === 'ar' ? 'حلول سحابية مرنة وقابلة للتوسع لتلبية احتياجات نمو مؤسستك.' : lang === 'fr' ? 'Solutions cloud scalables et flexibles pour accompagner la croissance rapide de votre entreprise.' : 'Scalable and flexible cloud solutions to support the rapid growth of your business.',
                image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop',
                link: '#'
              }
            ]}
          />
        </section>





        {/* SECTION 1.5: TESTIMONIALS (STATIC) */}
        < section className={`min-h-[60vh] flex flex-col items-center justify-center py-24 bg-[var(--bg-primary)] transition-colors duration-1000 border-t border-[var(--border-color)]/10`}>
          <div className="max-w-7xl w-full mx-auto">
            <div className={`w-full flex flex-col ${lang === 'ar' ? 'items-end' : 'items-center'} justify-center text-center mb-10 space-y-4`}>
              <div className="h-10 w-full" />
              <p className={`w-full text-[var(--accent-primary)] ${lang === 'ar' ? 'text-right' : 'text-center'} text-base font-bold max-w-4xl mx-auto leading-relaxed`} style={{ textAlign: lang === 'ar' ? 'right' : 'center', display: 'block' }}>
                "{lang === 'ar' ? 'نفتخر بثقة عملائنا وبما يعبرون عنه من ارتسامات صادقة حول جودة خدماتنا واستجابتنا لاحتياجاتهم.' : lang === 'fr' ? 'Nous sommes fiers de la confiance de nos clients et de leurs témoignages sincères sur la qualité de nos services.' : 'We are proud of our clients\' trust and their sincere testimonials about the quality of our services.'}"
              </p>
            </div>

            <div className="h-10 w-full" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full" style={{ marginBottom: '20px' }}>
              {testimonials.map((item, idx) => (
                <div key={idx} className="bg-[var(--bg-primary)] border border-[#82503E] px-6 py-[34px] rounded-2xl hover:border-[#D4AF37] transition-all duration-500 hover:-translate-y-2 hover:shadow-xl group flex flex-col items-center text-center" style={{ padding: '30px' }}>
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-[var(--accent-primary)]/20 group-hover:border-[var(--accent-primary)] transition-colors duration-500">
                    <img src={item.image} alt={lang === 'ar' ? item.nameAr : item.nameFr} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">
                    {lang === 'ar' ? item.nameAr : lang === 'fr' ? item.nameFr : item.nameEn}
                  </h3>
                  <span className="text-xs text-[var(--accent-primary)] font-bold uppercase tracking-wider mb-4 block">
                    {lang === 'ar' ? item.roleAr : lang === 'fr' ? item.roleFr : item.roleEn}
                  </span>
                  <p className="text-sm text-[var(--text-primary)]/70 leading-relaxed font-medium">
                    "{lang === 'ar' ? item.testiAr : lang === 'fr' ? item.testiFr : item.testiEn}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section >



        {/* SECTION 6: DID YOU KNOW? (FINAL) */}
        <section className="relative overflow-hidden bg-[#000000] transition-colors duration-700" style={{ padding: '0' }}>
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent-primary)]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--accent-primary)]/3 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="w-full relative z-10 flex flex-col items-center" style={{ padding: '30px 8% 20px 8%' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center w-full"
              style={{ marginTop: '0', marginBottom: '30px' }}
            >
              <h2 className="text-xl lg:text-2xl font-black mb-6 text-[#EEE3DF] tracking-tight text-center uppercase">
                {lang === 'ar' ? 'هل تعرف ؟' : lang === 'fr' ? 'LE SAVIEZ-VOUS ?' : 'DID YOU KNOW ?'}
              </h2>
              <div className="w-20 h-1 bg-[#D4AF37] mx-auto rounded-full" />
            </motion.div>

            {/* Blog Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 w-full mx-auto" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
              {[
                {
                  title: lang === 'ar' ? 'الإنذار القانوني' : lang === 'fr' ? 'Avertissement Légal' : 'Legal Warning',
                  contentAr: 'هل تعرف أن حقوقك قد تُنتزع بـ "إنذار قانوني" واحد بدلاً من شهور من الجدل؟ مكتب "سند إداري" يُحوّل تجاربك إلى وعي قانوني، ليعلمك كيف تسترجع كامل حقوقك، بالمسطرة المنضبطة لا بالتسول، ضامناً أمنك من عناء المحاكم.',
                  contentFr: 'Saviez-vous que vos droits peuvent être exercés par une seule « mise en demeure » au lieu de mois de polémiques ? Le bureau « Sanad Idari » transforme vos expériences en conscience juridique.',
                  contentEn: 'Did you know that a single "Legal Warning" can resolve rights disputes faster than months of arguments? Sanad Idari empowers you with legal awareness to reclaim your rights.',
                  image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2670&auto=format&fit=crop',
                  icon: (
                    <svg className="w-8 h-8 text-[#EEE3DF]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  )
                },
                {
                  title: lang === 'ar' ? 'الأمان الوظيفي' : lang === 'fr' ? 'Sécurité Professionnelle' : 'Job Security',
                  contentAr: 'هل تعرف كيف يصبح الخطأ الإداري البسيط جرحاً مهنياً مفتوحاً يهدد استقرارك الوظيفي؟ "سند إداري" يمنع هذا الانزلاق عبر التسوية السلمية المؤطرة قانونياً، ليضمن لك الأمان ويوقف الصراع قبل أن يكلفك مسيرتك.',
                  contentFr: 'Savez-vous comment une simple erreur administrative devient une blessure professionnelle qui menace votre stabilité ? « Sanad Idari » empêche ce dérapage par un règlement pacifique.',
                  contentEn: 'Do you know how a minor administrative error can threaten your job stability? Sanad Idari prevents this through legally framed amicable settlements.',
                  image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2574&auto=format&fit=crop',
                  icon: (
                    <svg className="w-8 h-8 text-[#EEE3DF]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  )
                },
                {
                  title: lang === 'ar' ? 'الوقاية القانونية' : lang === 'fr' ? 'Prévention Juridique' : 'Legal Prevention',
                  contentAr: 'إن الوقاية القانونية ليست رفاهية، بل هي أول درجات الحكمة وأقل تكلفة من العلاج، و جوهر التحول النموذجي في إدارة المخاطر الحكومية؛ ومكتب سند إداري هنا ليحوّل هذه الحكمة إلى درع عملي، فيؤسس للتسوية السلمية المؤطرة قانونياً قبل أن ينفلت أي نزاع.',
                  contentFr: 'La prévention juridique n\'est pas un luxe, mais le premier degré de sagesse. « Sanad Idari » transforme cette sagesse en un bouclier pratique.',
                  contentEn: 'Legal prevention is not a luxury, but the highest form of wisdom. Sanad Idari converts this wisdom into a practical shield for your interests.',
                  image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2670&auto=format&fit=crop',
                  icon: (
                    <svg className="w-8 h-8 text-[#EEE3DF]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                  )
                }
              ].map((blog, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className={`group relative overflow-hidden rounded-none border border-[#82503F]/5 bg-white hover:bg-white/95 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] flex flex-col`}
                >
                  {/* Item Image */}
                  <div className="relative h-64 w-full overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
                    <div className="absolute top-4 right-4 p-2 rounded-full bg-black/5 backdrop-blur-md">
                      {blog.icon}
                    </div>
                  </div>

                  <div
                    className={`flex flex-col items-${lang === 'ar' ? 'end' : 'start'} flex-grow`}
                    style={{
                      paddingTop: '50px',
                      paddingBottom: '50px',
                      paddingLeft: lang === 'ar' ? '40px' : '80px',
                      paddingRight: lang === 'ar' ? '80px' : '40px',
                      width: '100%'
                    }}
                  >
                    <h3 className={`text-xl font-bold mb-4 text-[#82503F] ${lang === 'ar' ? 'text-right' : 'text-left'} w-full`}>
                      {blog.title}
                    </h3>
                    <p className={`text-[0.95rem] leading-relaxed mb-8 text-[#82503F]/80 group-hover:text-[#82503F] transition-colors duration-500 flex-grow ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                      {lang === 'ar' ? blog.contentAr : lang === 'fr' ? blog.contentFr : blog.contentEn}
                    </p>
                    <a
                      href="#"
                      className={`inline-flex items-center gap-2 text-[#82503F] font-bold text-xs uppercase tracking-[0.2em] group/link`}
                    >
                      <span className="relative">
                        {lang === 'ar' ? 'إقرأ المزيد' : lang === 'fr' ? 'Lire la suite' : 'Read More'}
                        <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-[#82503F] group-hover/link:w-full transition-all duration-500" />
                      </span>
                      <svg className={`w-4 h-4 transition-transform duration-500 ${lang === 'ar' ? 'group-hover/link:-translate-x-2 rotate-180' : 'group-hover/link:translate-x-2'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              ))}

            </div>
          </div>
        </section>

        {/* SECTION 5: LIQUID SLIDER (NEW) */}
        <section className={`relative transition-colors duration-700 ${theme === 'light' ? 'bg-[#F9F5F3]' : 'bg-[#0a0a0a]'}`} style={{ padding: '30px 0' }}>
          <div className="max-w-7xl mx-auto px-10 flex flex-col items-center justify-center w-full text-center" style={{ marginBottom: '30px' }}>
            <h2 className={`text-xl lg:text-2xl font-black uppercase tracking-tight mb-4 text-center w-full ${theme === 'dark' ? 'text-white' : 'text-[#82503E]'}`}>
              {lang === 'ar' ? 'رؤية المستقبل' : lang === 'fr' ? 'VISION DU FUTUR' : 'FUTURE VISION'}
            </h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto" />
          </div>

          <LiquidSlider
            theme={theme}
            items={[
              {
                id: 'l1',
                title: lang === 'ar' ? 'مختبرات الابتكار' : lang === 'fr' ? 'LABORATOIRES D\'INNOVATION' : 'INNOVATION LABS',
                subtitle: lang === 'ar' ? 'بحث وتطوير / 2030' : lang === 'fr' ? 'R&D / HORIZON 2030' : 'R&D / HORIZON 2030',
                description: lang === 'ar' ? 'نستثمر في البحث والتطوير لصياغة حلول الغد اليوم.' : lang === 'fr' ? 'Nous investissons massivement dans la R&D pour concevoir dès aujourd\'hui les solutions technologiques de demain.' : 'We invest heavily in R&D to design tomorrow\'s technological solutions today.',
                image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2670&auto=format&fit=crop',
                link: '#'
              },
              {
                id: 'l2',
                title: lang === 'ar' ? 'تحليل البيانات' : lang === 'fr' ? 'ANALYSE DE DONNÉES' : 'DATA ANALYSIS',
                subtitle: 'INSIGHTS',
                description: lang === 'ar' ? 'تحليل متقدم للبيانات للكشف عن فرص غير مسبوقة.' : lang === 'fr' ? 'Analyse de données de pointe pour révéler des opportunités de croissance inexploitées.' : 'Cutting-edge data analysis to reveal untapped growth opportunities.',
                image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2574&auto=format&fit=crop',
                link: '#'
              },
              {
                id: 'l4',
                title: lang === 'ar' ? 'الأمن السيبراني' : lang === 'fr' ? 'CYBERSÉCURITÉ' : 'CYBERSECURITY',
                subtitle: lang === 'ar' ? 'حماية / ثقة' : lang === 'fr' ? 'PROTECTION / CONFIANCE' : 'PROTECTION / TRUST',
                description: lang === 'ar' ? 'أنظمة حماية متطورة لضمان سلامة البيانات والبنية التحتية.' : lang === 'fr' ? 'Systèmes de protection avancés pour garantir l\'intégrité des données et des infrastructures.' : 'Advanced protection systems to ensure data and infrastructure integrity.',
                image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop',
                link: '#'
              },
              {
                id: 'l5',
                title: lang === 'ar' ? 'المدن الذكية' : lang === 'fr' ? 'VILLES INTELLIGENTES' : 'SMART CITIES',
                subtitle: lang === 'ar' ? 'استدامة / تكنولوجيا' : lang === 'fr' ? 'DURABILITÉ / TECH' : 'SUSTAINABILITY / TECH',
                description: lang === 'ar' ? 'حلول متكاملة لبناء مدن مستدامة تعتمد على التكنولوجيا الذكية.' : lang === 'fr' ? 'Solutions intégrées pour bâtir des villes durables connectées par la technologie intelligente.' : 'Integrated solutions for building sustainable cities connected by smart technology.',
                image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2670&auto=format&fit=crop',
                link: '#'
              }
            ]}
          />
        </section>

      </div>



    </main>
  );
}
