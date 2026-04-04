"use client";

import WitiAppShowcase from "@/components/WitiAppShowcase";

export default function SmartPastePage() {
    return (
        <WitiAppShowcase 
            title={{
                ar: "سمارتباست",
                fr: "SmartPaste",
                en: "SmartPaste"
            }}
            description={{
                ar: "الإدراج الذكي للمقالات والنصوص المؤسساتية، لتبسيط وتجويد عمليات النشر والتوثيق.",
                fr: "L'insertion intelligente d'articles et de textes institutionnels, pour simplifier et améliorer les processus de publication.",
                en: "The intelligent insertion of articles and institutional texts, to simplify and enhance publication and documentation processes."
            }}
            features={[
                { ar: "إدراج ذكي", fr: "Insertion intelligente", en: "Smart insertion" },
                { ar: "تحسين النصوص", fr: "Aide à la rédaction", en: "Text refinement" },
                { ar: "التوافق", fr: "Compatibilité universelle", en: "Universal compatibility" },
                { ar: "سرعة النشر", fr: "Publication rapide", en: "Rapid publication" }
            ]}
            screenshots={[]}
        />
    );
}
