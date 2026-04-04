"use client";

import WitiAppShowcase from "@/components/WitiAppShowcase";

export default function WitiStudioPage() {
    return (
        <WitiAppShowcase 
            title={{
                ar: "ويتي استوديو",
                fr: "WITI Studio",
                en: "WITI Studio"
            }}
            description={{
                ar: "مختبر الإنتاج البصري والمحتوى الإبداعي، لرفع مستوى الجودة في التواصل المؤسساتي.",
                fr: "Le laboratoire de production visuelle et de contenu créatif, pour élever le niveau de qualité dans la communication institutionnelle.",
                en: "The visual production and creative content lab, to elevate the quality of institutional communication."
            }}
            techStack={["Next.js", "Canvas API", "FFmpeg", "Adobe SDK", "Framer Motion"]}
            features={[
                { ar: "مونتاج فيديو", fr: "Montage vidéo expert", en: "Expert video editing" },
                { ar: "تصميم غرافيك", fr: "Design graphique Premium", en: "Premium graphic design" },
                { ar: "تدفق العمل", fr: "Workflows créatifs", en: "Creative workflows" },
                { ar: "مكتبة الأصول", fr: "Banque d'actifs", en: "Asset library" }
            ]}
            screenshots={[]}
        />
    );
}
