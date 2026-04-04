"use client";

import WitiAppShowcase from "@/components/WitiAppShowcase";

export default function MailFlowPage() {
    return (
        <WitiAppShowcase 
            title={{
                ar: "ميلفلو",
                fr: "MailFlow",
                en: "MailFlow"
            }}
            description={{
                ar: "إدارة تدفق المراسلات المؤسساتية الذكية، لضمان استجابة سريعة وتتبع دقيق لكافة الرسائل.",
                fr: "La gestion intelligente du flux de correspondance institutionnelle, pour garantir une réponse rapide et un suivi précis de tous les messages.",
                en: "The intelligent management of institutional correspondence flow, to ensure a rapid response and precise tracking of all messages."
            }}
            features={[
                { ar: "تتبع البريد", fr: "Suivi des emails", en: "Email tracking" },
                { ar: "استجابة ذكية", fr: "Réponses intelligentes", en: "Smart replies" },
                { ar: "تدفق العمل", fr: "Flux de travail Mail", en: "Mail workflow" },
                { ar: "أمان المراسلة", fr: "Communication sécurisée", en: "Secure communication" }
            ]}
            screenshots={[]}
        />
    );
}
