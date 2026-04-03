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
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Here we could load from localStorage if we wanted persistence
        // const storedLang = localStorage.getItem("sanad-lang") as Lang;
        // if (storedLang) setLang(storedLang);
        // const storedTheme = localStorage.getItem("sanad-theme") as Theme;
        // if (storedTheme) setTheme(storedTheme);
    }, []);

    // Sync theme with document class for Tailwind dark mode
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    // Sync dir attribute for RTL/LTR
    useEffect(() => {
        document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
        document.documentElement.lang = lang;
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
