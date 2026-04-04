"use client";

import WitiAppShowcase from "@/components/WitiAppShowcase";

export default function WitiViralPage() {
    return (
        <WitiAppShowcase 
            title={{
                ar: "ويتي فيرال",
                fr: "WITI Viral",
                en: "WITI Viral"
            }}
            description={{
                ar: "قوة الانتشار الرقمي والترويج المؤسساتي، منصة متخصصة لإدارة التأثير الرقمي وحملات التوعية الكبرى.",
                fr: "La force de la diffusion digitale et de la promotion institutionnelle, une plateforme spécialisée pour la gestion de l'influence numérique.",
                en: "The power of digital diffusion and institutional promotion, a specialized platform for digital influence management and major awareness campaigns."
            }}
            techStack={["Next.js", "OpenAI API", "Python", "Redis"]}
            features={[
                { ar: "إدارة الحملات", fr: "Gestion de campagnes", en: "Campaign management" },
                { ar: "تحليل التأثير", fr: "Analyse d'influence", en: "Influence analytics" },
                { ar: "انتشار ذكي", fr: "Diffusion algorithmique", en: "Algorithmic diffusion" },
                { ar: "تقارير فورية", fr: "Statistiques en direct", en: "Live statistics" }
            ]}
            screenshots={[]}
        />
    );
}
