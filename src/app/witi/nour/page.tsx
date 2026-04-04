"use client";

import WitiAppShowcase from "@/components/WitiAppShowcase";

export default function NourPage() {
    return (
        <WitiAppShowcase 
            title={{
                ar: "نور موبايل",
                fr: "NOUR Mobile",
                en: "NOUR Mobile"
            }}
            description={{
                ar: "تطبيق التواصل الآمن والمؤسساتي، المصمم لنخبة الأطر والمؤسسات لضمان تشفير تام للرسائل والبيانات السيادية.",
                fr: "L'application de communication sécurisée et institutionnelle, conçue pour l'élite des cadres et des institutions afin de garantir le cryptage total des messages et des données souveraines.",
                en: "The secure and institutional communication application, designed for elite executives and institutions to ensure full encryption of messages and sovereign data."
            }}
            techStack={["React Native", "Node.js", "Socket.io", "AES-256", "PostgreSQL"]}
            features={[
                { ar: "تشفير تام", fr: "Cryptage de bout en bout", en: "End-to-end encryption" },
                { ar: "هوية رقمية", fr: "Identité institutionnelle", en: "Institutional identity" },
                { ar: "قنوات خاصة", fr: "Canaux prioritaires", en: "Priority channels" },
                { ar: "تنبيهات عاجلة", fr: "Notifications urgentes", en: "Urgent notifications" }
            ]}
            screenshots={[
                "/images/witi/nour/screenshot-1.png",
                "/images/witi/nour/screenshot-2.png",
                "/images/witi/nour/screenshot-3.png"
            ]}
        />
    );
}
