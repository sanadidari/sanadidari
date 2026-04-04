"use client";

import WitiAppShowcase from "@/components/WitiAppShowcase";

export default function AutoScriptPage() {
    return (
        <WitiAppShowcase 
            title={{
                ar: "أوتوسكربت",
                fr: "AutoScript",
                en: "AutoScript"
            }}
            description={{
                ar: "أتمتة المهام المعقدة والمملة، منصة برمجية لرفع الكفاءة التشغيلية عبر السيناريوهات الذكية.",
                fr: "Automatisez les tâches complexes et répétitives, une plateforme logicielle pour accroître l'efficacité opérationnelle via des scénarios intelligents.",
                en: "Automate complex and repetitive tasks, a software platform to increase operational efficiency through intelligent scenarios."
            }}
            features={[
                { ar: "أتمتة المهام", fr: "Automatisation avancée", en: "Advanced automation" },
                { ar: "برمجة مرئية", fr: "Scripting visuel", en: "Visual scripting" },
                { ar: "توفير الوقت", fr: "Optimisation du temps", en: "Time optimization" },
                { ar: "سير عمل مرن", fr: "Workflows flexibles", en: "Flexible workflows" }
            ]}
            screenshots={[]}
        />
    );
}
