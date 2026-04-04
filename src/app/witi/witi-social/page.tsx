"use client";

import WitiAppShowcase from "@/components/WitiAppShowcase";

export default function WitiSocialPage() {
    return (
        <WitiAppShowcase 
            title={{
                ar: "ويتي سوشيال",
                fr: "WITI Social",
                en: "WITI Social"
            }}
            description={{
                ar: "منصة إدارة المحتوى الاجتماعي الذكية، لضبط الحضور الرقمي وتحليل التفاعل المؤسساتي بدقة.",
                fr: "La plateforme de gestion intelligente du contenu social, pour contrôler la présence numérique et analyser l'interaction institutionnelle.",
                en: "The intelligent social content management platform, to control digital presence and accurately analyze institutional interaction."
            }}
            techStack={["Next.js", "Instagram API", "Tailwind 4", "Node.js"]}
            features={[
                { ar: "نشر ذكي", fr: "Publication intelligente", en: "Smart scheduling" },
                { ar: "تحليل المشاعر", fr: "Analyse sentimentale", en: "Sentiment analysis" },
                { ar: "إدارة الهوية", fr: "Gestion d'image", en: "Brand management" },
                { ar: "تقارير النمو", fr: "Rapports de croissance", en: "Growth reports" }
            ]}
            screenshots={[]}
        />
    );
}
