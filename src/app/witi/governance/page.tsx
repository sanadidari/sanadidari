"use client";

import WitiAppShowcase from "@/components/WitiAppShowcase";

export default function GovernancePage() {
    return (
        <WitiAppShowcase 
            title={{
                ar: "منصة الحكامة",
                fr: "Plateforme de Gouvernance",
                en: "Governance Platform"
            }}
            description={{
                ar: "دشن حقبة جديدة من الإدارة الرقمية والشفافية التامة، لضمان اتخاذ قرارات مدروسة مبنية على بيانات واقعية.",
                fr: "Initiez une nouvelle ère de gestion digitale et de transparence totale, garantissant des prises de décision réfléchies basées sur des données réelles.",
                en: "Begin a new era of digital management and total transparency, ensuring informed decision-making based on real-time data."
            }}
            techStack={["Next.js 15", "Tailwind 4", "Prisma", "PostgreSQL", "Docker"]}
            features={[
                { ar: "تدفقات العمل", fr: "Workflows intelligents", en: "Intelligent workflows" },
                { ar: "تتبع الأداء", fr: "Suivi des KPIs en temps réel", en: "Real-time KPI tracking" },
                { ar: "تقارير الالتزام", fr: "Rapports de conformité auto", en: "Auto compliance reports" },
                { ar: "إدارة المخاطر", fr: "Gestion des risques", en: "Risk assessment" }
            ]}
            landscape={true}
            screenshots={[
                "/images/witi/governance-platform/sc1.png",
                "/images/witi/governance-platform/sc2.png",
                "/images/witi/governance-platform/sc3.png",
                "/images/witi/governance-platform/sc4.png",
                "/images/witi/governance-platform/sc5.png",
                "/images/witi/governance-platform/sc6.png",
                "/images/witi/governance-platform/sc7.png",
                "/images/witi/governance-platform/sc8.png",
                "/images/witi/governance-platform/sc9.png",
                "/images/witi/governance-platform/sc10.png",
                "/images/witi/governance-platform/sc11.png",
                "/images/witi/governance-platform/sc12.png",
                "/images/witi/governance-platform/sc13.png",
                "/images/witi/governance-platform/sc14.png",
                "/images/witi/governance-platform/sc15.png",
                "/images/witi/governance-platform/sc16.png"
            ]}
        />
    );
}
