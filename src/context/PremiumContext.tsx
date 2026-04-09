"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Lang = "ar" | "fr" | "en";
type Theme = "light" | "dark";

interface PremiumContextType {
    lang: Lang;
    setLang: (lang: Lang) => void;
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const PremiumContext = createContext<PremiumContextType | undefined>(undefined);

export function PremiumProvider({ children }: { children: ReactNode }) {
    // Default to 'en' and 'light' initially
    const [lang, setLang] = useState<Lang>("en");
    const [theme, setTheme] = useState<Theme>("light");

    // Restore persisted preferences on first mount
    useEffect(() => {
        const storedLang = localStorage.getItem("sanad-lang") as Lang | null;
        if (storedLang && ["ar", "fr", "en"].includes(storedLang)) setLang(storedLang);
        const storedTheme = localStorage.getItem("sanad-theme") as Theme | null;
        if (storedTheme && ["light", "dark"].includes(storedTheme)) setTheme(storedTheme);
    }, []);

    // Sync theme with document class for Tailwind dark mode + persist
    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("sanad-theme", theme);
    }, [theme]);

    // Sync dir attribute for RTL/LTR + persist
    useEffect(() => {
        document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
        document.documentElement.lang = lang;
        localStorage.setItem("sanad-lang", lang);
    }, [lang]);



    return (
        <PremiumContext.Provider value={{ lang, setLang, theme, setTheme }}>
            {children}
        </PremiumContext.Provider>
    );
}

export function usePremium() {
    const context = useContext(PremiumContext);
    if (context === undefined) {
        throw new Error("usePremium must be used within a PremiumProvider");
    }
    return context;
}
