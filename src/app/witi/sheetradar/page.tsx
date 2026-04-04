"use client";

import WitiAppShowcase from "@/components/WitiAppShowcase";

export default function SheetRadarPage() {
    return (
        <WitiAppShowcase 
            title={{
                ar: "شيترادار",
                fr: "SheetRadar",
                en: "SheetRadar"
            }}
            description={{
                ar: "نظام المراقبة والتحقق من البيانات الضخمة، لضمان صحة المعلومات واستخراج الأنماط بفعالية.",
                fr: "Le système de surveillance et de vérification des macro-données, pour garantir l'intégrité des informations et extraire des tendances.",
                en: "The surveillance and verification system for macro-data, to ensure information integrity and effectively extract patterns."
            }}
            features={[
                { ar: "تحليل الجداول", fr: "Analyse de feuilles", en: "Spreadsheet analysis" },
                { ar: "كشف الأخطاء", fr: "Détection d'erreurs", en: "Error detection" },
                { ar: "أنماط البيانات", fr: "Modèles de données", en: "Data patterns" },
                { ar: "توليد تقارير", fr: "Génération de rapports", en: "Report generation" }
            ]}
            screenshots={[]}
        />
    );
}
