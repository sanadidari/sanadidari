import { NextResponse } from "next/server";
import { faqData, FAQItem } from "@/data/faq";

export async function POST(req: Request) {
    try {
        const { message, lang } = await req.json();

        if (!message) {
            return NextResponse.json(
                { error: "Message is required" },
                { status: 400 }
            );
        }

        // Helper to remove accents/diacritics and normalize text
        const normalizeText = (text: string) => {
            return text
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase();
        };

        const normalizedMessage = normalizeText(message);
        console.log("Normalized message:", normalizedMessage);

        const isAr = lang === 'ar';

        // Default matches
        let bestMatch: FAQItem | null = null;
        let maxScore = 0;

        // Scoring algorithm: count how many keywords from an item appear in the message
        faqData.forEach((item) => {
            let score = 0;
            item.keywords.forEach((keyword) => {
                if (normalizedMessage.includes(keyword)) {
                    // Bonus points for exact word matches (surrounded by spaces or start/end)
                    // But simple includes is robust for partial entries like "creer"
                    score += 1;
                }
            });

            if (score > maxScore) {
                maxScore = score;
                bestMatch = item;
            }
        });

        // Threshold for accepting a match (at least one keyword must match)
        let reply = "";

        if (bestMatch && maxScore > 0) {
            if (lang === 'ar') reply = (bestMatch as FAQItem).answer.ar;
            else if (lang === 'en') reply = (bestMatch as FAQItem).answer.en;
            else reply = (bestMatch as FAQItem).answer.fr;
        } else {
            // Fallback response
            if (lang === 'ar') {
                reply = "شكرا لرسالتك. سؤالكم محدد جداً، سيقوم أحد مستشارينا بالرد عليك قريبا.";
            } else if (lang === 'en') {
                reply = "Thank you for your message. Your request is specific; one of our consultants will respond to you shortly.";
            } else {
                reply = "Merci pour votre message. Votre demande est spécifique, un de nos consultants vous répondra sous peu.";
            }
        }

        // Simulation d'un délai de "réflexion"
        await new Promise((resolve) => setTimeout(resolve, 800));

        return NextResponse.json({ reply });
    } catch (error) {
        console.error("Error in chat API:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
