"use client";

import WitiAppShowcase from "@/components/WitiAppShowcase";

export default function WitiShopifyPage() {
    return (
        <WitiAppShowcase 
            title={{
                ar: "ويتي شوبيفاي",
                fr: "WITI Shopify",
                en: "WITI Shopify"
            }}
            description={{
                ar: "توسع في التجارة الإلكترونية، حلول شوبيفاي المخصصة للماركات الكبيرة والمؤسسات التجارية الراقية.",
                fr: "Extension e-commerce, solutions Shopify personnalisées pour les grandes marques et institutions commerciales de prestige.",
                en: "E-commerce expansion, customized Shopify solutions for major brands and high-end commercial institutions."
            }}
            techStack={["Shopify Liquid", "Remix", "Polaris", "GraphQL", "Node.js"]}
            features={[
                { ar: "تخصيص كامل", fr: "Customisation Totale", en: "Full Customization" },
                { ar: "أداء عال", fr: "Performance Optimisée", en: "High Performance" },
                { ar: "ربط تقني", fr: "Intégration API", en: "API Integration" },
                { ar: "تجربة مستخدم", fr: "UX Premium", en: "Premium UX" }
            ]}
            screenshots={[]}
        />
    );
}
