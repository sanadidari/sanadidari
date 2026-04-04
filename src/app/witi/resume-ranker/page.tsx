"use client";

import WitiAppShowcase from "@/components/WitiAppShowcase";

export default function ResumeRankerPage() {
    return (
        <WitiAppShowcase 
            title={{
                ar: "مصنف السير الذاتية",
                fr: "AI Resume Ranker",
                en: "AI Resume Ranker"
            }}
            description={{
                ar: "تحليل وتصنيف السير الذاتية باستخدام الذكاء الاصطناعي، للعثور على النخبة من الكفاءات بسرعة ودقة.",
                fr: "Analyse et classement des CV grâce à l'intelligence artificielle, pour trouver l'élite des compétences avec rapidité et précision.",
                en: "Analyze and rank resumes using artificial intelligence, to find elite talent with speed and precision."
            }}
            features={[
                { ar: "تحليل لغوي", fr: "Analyse sémantique", en: "Semantic analysis" },
                { ar: "تصنيف آلي", fr: "Classement automatique", en: "Automated ranking" },
                { ar: "فرز ذكي", fr: "Filtrage intelligent", en: "Smart filtering" },
                { ar: "توفير الوقت", fr: "Optimisation RH", en: "HR optimization" }
            ]}
            screenshots={[]}
        />
    );
}
