export type FAQItem = {
    id: string;
    keywords: string[];
    answer: {
        fr: string;
        ar: string;
        en: string;
    };
};

export const faqData: FAQItem[] = [
    {
        id: "greeting",
        keywords: ["bonjour", "salut", "salam", "mrahba", "coucou", "bijour", "hola", "ahlan", "مرحبا", "هلا", "السلام", "تحياتي", "hello", "hi", "hey", "greetings"],
        answer: {
            fr: "Bonjour ! Bienvenue chez Sanad. Comment puis-je vous aider aujourd'hui ? 😊",
            ar: "مرحبا بك في سند ! كيف يمكنني مساعدتك اليوم ؟ 😊",
            en: "Hello! Welcome to Sanad. How can I assist you today? 😊"
        }
    },
    {
        id: "identity",
        keywords: ["qui es tu", "t'es qui", "tes qui", "c'est quoi sanad", "cest quoi sanad", "activite", "mission", "faites quoi", "service", "man ant", "chkoune", "من انت", "ما هي سند", "شنو كديرو", "خدمات", "who are you", "what is sanad", "services", "mission"],
        answer: {
            fr: "Sanad est une plateforme digitale qui simplifie la vie des entrepreneurs au Maroc. Nous nous occupons de la création de votre entreprise, de sa domiciliation et de toute la gestion administrative et juridique. 🚀",
            ar: "سند هي منصة رقمية تسهل حياة المقاولين في المغرب. نتكلف بإنشاء مقاولتكم، توطينها (Domiciliation) وجميع الإجراءات الإدارية والقانونية. 🚀",
            en: "Sanad is a digital platform that simplifies life for entrepreneurs in Morocco. We handle company creation, domiciliation, and all administrative and legal management. 🚀"
        }
    },
    {
        id: "creation",
        keywords: ["creation", "creer", "monter", "ouvrir", "societe", "entreprise", "sarl", "personne physique", "incha", "tassis", "ebda", "إنشاء", "تأسيس", "شركة", "مقاولة", "سارل", "creation", "create", "setup", "company", "business"],
        answer: {
            fr: "Excellent choix ! La création d'entreprise est notre spécialité. Nous pouvons créer votre société en 48h sans que vous ayez à vous déplacer. Voulez-vous qu'un conseiller vous appelle pour lancer la procédure ?",
            ar: "اختيار ممتاز ! إنشاء الشركات هو تخصصنا. يمكننا تأسيس شركتكم في 48 ساعة دون الحاجة لتنقلكم. هل ترغبون أن يتصل بكم مستشار لبدء الإجراءات ؟",
            en: "Excellent choice! Company creation is our specialty. We can set up your company in 48 hours without you needing to travel. Would you like a consultant to call you to start the process?"
        }
    },
    {
        id: "domiciliation",
        keywords: ["domiciliation", "domicilier", "siege", "adresse", "tawtin", "3onwan", "توطين", "عنوان", "مقر", "domiciliation", "address", "hq", "headquarters"],
        answer: {
            fr: "Nous proposons un service de domiciliation prestigieux à Casablanca à partir de 2500 DHS/an. Cela inclut une adresse fiscale, la réception du courrier et une salle de réunion. Intéressé ?",
            ar: "نوفر لكم خدمة توطين راقية في الدار البيضاء ابتداءً من 2500 درهم للسنة. يشمل ذلك العنوان الضريبي، استلام البريد وقاعة اجتماعات. مهتم ؟",
            en: "We offer prestigious domiciliation services in Casablanca starting from 2500 DHS/year. This includes a fiscal address, mail handling, and meeting room access. Interested?"
        }
    },
    {
        id: "accounting",
        keywords: ["comptabilite", "comptable", "bilan", "cnss", "tva", "impot", "declaration", "mouhasaba", "dariba", "محاسبة", "محاسب", "ضريبة", "تضريب", "تصريح", "accounting", "accountant", "tax", "vat"],
        answer: {
            fr: "Nos experts comptables partenaires s'occupent de tout : tenue de comptabilité, déclarations fiscales et sociales. Concentrez-vous sur votre business, on gère la paperasse !",
            ar: "خبراء المحاسبة الشركاء يتكلفون بكل شيء : مسك المحاسبة، التصريحات الضريبية والاجتماعية. ركزوا على مشروعكم، ونحن نتكلف بالأوراق !",
            en: "Our partner accountants handle everything: bookkeeping, tax filings, and social declarations. Focus on your business while we manage the paperwork!"
        }
    },
    {
        id: "pricing",
        keywords: ["prix", "tarif", "cout", "combien", "budget", "ch7al", "bach", "tmman", "sa3r", "kholas", "سعر", "ثمن", "بكام", "تكلفة", "price", "cost", "quote", "budget", "pricing"],
        answer: {
            fr: "Nos tarifs sont transparents : Création SARL à 0 DHS (hors frais administratifs), Domiciliation à 2500 DHS/an. Pour un devis sur mesure, contactez-nous !",
            ar: "أثمنتنا شفافة : إنشاء SARL بـ 0 درهم (دون احتساب المصاريف الإدارية)، التوطين بـ 2500 درهم/سنة. للحصول على عرض مفصل، تواصلوا معنا !",
            en: "Our prices are transparent: SARL creation at 0 DHS (excluding admin fees), Domiciliation at 2500 DHS/year. Contact us for a custom quote!"
        }
    },
    {
        id: "contact",
        keywords: ["contact", "telephone", "email", "mail", "appeler", "joindre", "numero", "num", "adresse", "locatisation", "siege", "tawasol", "hatif", "fin", "تواصل", "هاتف", "رقم", "ايميل", "بريد", "مكان", "موقع", "contact", "phone", "email", "location", "address"],
        answer: {
            fr: "📞 Téléphone : +212 5 22 22 22 22\n📧 Email : contact@sanad.ma\n📍 Adresse : 123 Bd Anfa, Casablanca.\nOu remplissez simplement le formulaire sur cette page !",
            ar: "📞 الهاتف : +212 5 22 22 22 22\n📧 البريد : contact@sanad.ma\n📍 العنوان : 123 شارع أنفا، الدار البيضاء.\nأو املؤوا الاستمارة الموجودة في الصفحة !",
            en: "📞 Phone: +212 5 22 22 22 22\n📧 Email: contact@sanad.ma\n📍 Address: 123 Bd Anfa, Casablanca.\nOr simply fill out the form on this page!"
        }
    },
    {
        id: "thanks",
        keywords: ["merci", "top", "super", "cool", "genial", "chokran", "thx", "شكرا", "ممتاز", "رائع", "جيد", "thanks", "thank you", "great", "awesome"],
        answer: {
            fr: "Avec plaisir ! N'hésitez pas si vous avez d'autres questions. 😊",
            ar: "على الرحب والسعة ! لا تترددوا إذا كانت لديكم أسئلة أخرى. 😊",
            en: "You're welcome! Don't hesitate if you have any other questions. 😊"
        }
    },
    // --- NOUVEAUX CONTENUS DU SITE ---
    {
        id: "audit",
        keywords: ["audit", "expert", "تدقيق", "مؤسساتي", "iftihass", "audit expert", "audit", "internal audit"],
        answer: {
            fr: "Notre service d'Audit Expert renforce l'intégrité et la transparence de votre structure. Nous examinons vos procédures pour garantir leur conformité aux standards internationaux et recommandons des améliorations pratiques.",
            ar: "خدمة التدقيق المؤسساتي تهدف لتعزيز النزاهة والشفافية. نقوم بفحص دقيق للمساطر لضمان مطابقتها للمعايير الدولية ونقدم توصيات عملية لتحسين الأداء.",
            en: "Our Expert Audit service strengthens the integrity and transparency of your organization. We examine your procedures to ensure compliance with international standards and recommend practical improvements."
        }
    },
    {
        id: "digital",
        keywords: ["digital", "transformation", "numerique", "raqmana", "tahawol", "رقمنة", "تحول رقمي", "بوابة", "portail", "digitalization", "digitization", "smart portal"],
        answer: {
            fr: "Nous menons votre transformation digitale en numérisant les procédures et en créant des infrastructures technologiques souveraines. Portails interactifs, sécurité des données et réduction de la bureaucratie sont nos priorités.",
            ar: "نقود التحول الرقمي الشامل عبر رقمنة المساطر وبناء بنية تحتية تكنولوجية ذكية. نركز على البوابات التفاعلية، أمن البيانات وتقليل البيروقراطية.",
            en: "We lead your digital transformation by digitizing processes and creating sovereign technological infrastructures. Interactive portals, data security, and bureaucracy reduction are our priorities."
        }
    },
    {
        id: "gouvernance",
        keywords: ["gouvernance", "hakama", "pilotage", "strategie", "حكامة", "تسيير", "قيادة", "governance", "strategy"],
        answer: {
            fr: "Nous mettons en place une bonne gouvernance basée sur la responsabilité et la transparence. Nous développons des cadres réglementaires et des indicateurs de performance pour un équilibre optimal entre stratégie et opérationnel.",
            ar: "نسعى لإرساء حكامة رشيدة مبنية على المسؤولية والشفافية. نطور أطراً تنظيمية ومؤشرات أداء لضمان التوازن بين الأهداف الاستراتيجية والتدبير اليومي.",
            en: "We establish good governance based on accountability and transparency. We develop regulatory frameworks and performance indicators for an optimal balance between strategy and operations."
        }
    },
    {
        id: "conseil",
        keywords: ["conseil", "strategie", "istichara", "tawjih", "استشارة", "توجيه", "نصيحة", "consulting", "advisory", "advice"],
        answer: {
            fr: "Notre Conseil Stratégique se base sur l'analyse de données pour anticiper les tendances. Nous vous accompagnons dans la vision à long terme et transformons les obstacles en opportunités de croissance.",
            ar: "نقدم استشارات استراتيجية معمقة تعتمد على تحليل البيانات واستشراف المستقبل. نرافقكم في صياغة الرؤية بعيدة المدى وتحويل العقبات إلى فرص نمو.",
            en: "Our Strategic Advisory is based on data analysis to anticipate trends. We support your long-term vision and transform obstacles into growth opportunities."
        }
    },
    {
        id: "controle",
        keywords: ["controle", "interne", "mouraqaba", "tahqiq", "رقابة", "تفتيش", "مراقبة", "control", "internal control"],
        answer: {
            fr: "Notre système de Contrôle Interne est votre soupape de sécurité. Nous concevons des procédures rigoureuses pour garantir le respect des lois et protéger les actifs de votre institution.",
            ar: "نظام الرقابة الداخلية لدينا يضمن اليقظة المستمرة. نصمم مساطر صارمة لضمان الامتثال للقوانين وحماية أصول المؤسسة من أي تجاوزات.",
            en: "Our Internal Control system is your safety valve. We design rigorous procedures to ensure legal compliance and protect your institution's assets."
        }
    },
    {
        id: "developpement",
        keywords: ["developpement", "formation", "tatwir", "tanmia", "تطوير", "تكوين", "تدريب", "development", "training", "coaching"],
        answer: {
            fr: "Nous misons sur le développement continu des compétences humaines et techniques. Formations spécialisées et outils modernes pour booster l'efficacité et la compétitivité.",
            ar: "نركز على التطوير المستمر للطاقات البشرية والتقنية. برامج تدريب متخصصة وأدوات عمل حديثة لرفع الكفاءة وتعزيز التنافسية.",
            en: "We focus on the continuous development of human and technical skills. Specialized training and modern tools to boost efficiency and competitiveness."
        }
    },
    {
        id: "compliance",
        keywords: ["compliance", "conformite", "imtital", "qanoun", "امتثال", "مطابقة", "قانون", "compliance", "conformity"],
        answer: {
            fr: "Nous garantissons votre conformité totale aux lois nationales et internationales. Nous actualisons vos politiques internes pour vous protéger contre tout risque juridique ou financier.",
            ar: "نضمن المطابقة الكاملة مع القوانين والأنظمة. نقوم بتحيين السياسات الداخلية لتأمين المؤسسة ضد المخاطر القانونية والمالية.",
            en: "We guarantee your total compliance with national and international laws. We update your internal policies to protect you against any legal or financial risks."
        }
    },
    {
        id: "securite",
        keywords: ["securite", "cyber", "protection", "amn", "himaya", "أمن", "حماية", "سلامة", "security", "cybersecurity"],
        answer: {
            fr: "Nous assurons une protection complète de vos actifs (physiques et immatériels) contre les cybermenaces. Cryptage des données et sécurisation des canaux de communication sont au cœur de notre stratégie.",
            ar: "نوفر حماية شاملة للأصول ضد التهديدات السيبرانية. تشفير البيانات وتأمين قنوات الاتصال هي في صلب استراتيجيتنا الأمنية.",
            en: "We ensure complete protection of your assets (physical and intangible) against cyber threats. Data encryption and securing communication channels are at the heart of our strategy."
        }
    }
];
