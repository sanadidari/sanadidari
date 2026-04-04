"use client";

import WitiAppShowcase from "@/components/WitiAppShowcase";

export default function FlashBoardPage() {
    return (
        <WitiAppShowcase 
            title={{
                ar: "فلاشبورد",
                fr: "FlashBoard",
                en: "FlashBoard"
            }}
            description={{
                ar: "للوحة مراقبة فورية فائقة السرعة، توفر رؤية شاملة وتفاعلية لكافة مؤشرات الأداء الحيوية.",
                fr: "Un tableau de bord interactif ultra-rapide, offrant une vision globale et interactive de tous les indicateurs clés de performance.",
                en: "An ultra-fast interactive dashboard, providing a global and interactive view of all key performance indicators."
            }}
            features={[
                { ar: "تفاعل فوري", fr: "Interaction instantanée", en: "Instant interaction" },
                { ar: "مؤشرات حية", fr: "KPIs en temps réel", en: "Live KPIs" },
                { ar: "تحليل بصري", fr: "Visualisation avancée", en: "Advanced visualization" },
                { ar: "تنبيهات فورية", fr: "Alertes immédiates", en: "Failsafe alerts" }
            ]}
            screenshots={[]}
        />
    );
}
