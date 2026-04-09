import type { Metadata } from "next";
import { Cairo, Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ConditionalChrome from "@/components/ConditionalChrome";
import { PremiumProvider } from "@/context/PremiumContext";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Sanad | Portail Premium",
  description: "Cabinet de conseil, de rédaction et d'accompagnement administratif expert",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <body className={`${cairo.variable} ${playfair.variable} ${montserrat.variable} font-cairo antialiased flex flex-col min-h-screen`}>
        <PremiumProvider>
          <ConditionalChrome><Header /></ConditionalChrome>
          <div className="flex-grow">
            {children}
          </div>
          <ConditionalChrome><Footer /><Chatbot /></ConditionalChrome>
        </PremiumProvider>
      </body>
    </html>
  );
}
