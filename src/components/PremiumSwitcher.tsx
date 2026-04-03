"use client";

import { useEffect, useState } from "react";

interface PremiumSwitcherProps {
    lang: "ar" | "fr" | "en";
    setLang: (lang: "ar" | "fr" | "en") => void;
    theme: "light" | "dark";
    setTheme: (theme: "light" | "dark") => void;
}

export default function PremiumSwitcher({
    lang,
    setLang,
    theme,
    setTheme,
}: PremiumSwitcherProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    // Premium Color Definitions
    const colors = {
        light: {
            background: "#82503E", 
            pill: "#EEE3DF",       
            activeText: "#82503E", 
            inactiveText: "#EEE3DF", 
            separator: "rgba(238, 227, 223, 0.3)", 
            langTrack: "rgba(0, 0, 0, 0.15)", 
        },
        dark: {
            background: "rgba(238, 227, 223, 0.12)", 
            pill: "#EEE3DF", 
            activeText: "#82503E", 
            inactiveText: "rgba(238, 227, 223, 0.5)", 
            separator: "rgba(238, 227, 223, 0.2)",
            langTrack: "rgba(255, 255, 255, 0.08)",
        }
    };

    const currentColors = theme === 'light' ? colors.light : colors.dark;

    // Helper for pill position
    // Width: 150px total. 3 segments of 48px + paddings.
    const getPillTransform = () => {
        if (lang === 'en') return 'translate-x-0';
        if (lang === 'fr') return 'translate-x-[48px]';
        return 'translate-x-[96px]';
    };

    return (
        <div
            dir="ltr"
            className="flex items-center gap-4 px-3 py-1.5 rounded-full shadow-[0_10px_35px_rgba(0,0,0,0.2)] backdrop-blur-xl border border-white/10 transition-all duration-500"
            style={{ backgroundColor: currentColors.background }}
        >

            {/* Theme Toggle Button */}
            <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="relative w-9 h-9 flex items-center justify-center rounded-full overflow-hidden transition-all active:scale-90 hover:bg-white/10"
                aria-label="Toggle Theme"
            >
                <div className={`absolute transition-all duration-700 ease-in-out ${theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EEE3DF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                    </svg>
                </div>
                <div className={`absolute transition-all duration-700 ease-in-out ${theme === 'light' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-0'}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EEE3DF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="6" y="6" width="12" height="12" rx="1" transform="rotate(0 12 12)" />
                        <rect x="6" y="6" width="12" height="12" rx="1" transform="rotate(45 12 12)" />
                        <circle cx="12" cy="12" r="2" fill="#EEE3DF" stroke="none" />
                    </svg>
                </div>
            </button>

            {/* Separator */}
            <div className="w-[1px] h-6" style={{ backgroundColor: currentColors.separator }} />

            {/* Language Switcher Track (3 States) */}
            <div
                className="relative flex items-center w-[148px] h-[34px] rounded-full p-[2px] cursor-pointer transition-colors duration-300"
                style={{ backgroundColor: currentColors.langTrack }}
            >
                {/* Sliding Pill */}
                <div
                    className={`absolute top-[2px] bottom-[2px] w-[46px] rounded-full shadow-lg transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${getPillTransform()}`}
                    style={{ backgroundColor: currentColors.pill, left: '2px' }}
                />

                {/* EN Button */}
                <button
                    onClick={() => setLang('en')}
                    className="flex-1 text-center z-10 text-[0.65rem] font-bold tracking-widest transition-colors duration-300 outline-none"
                    style={{ color: lang === 'en' ? currentColors.activeText : currentColors.inactiveText }}
                >
                    EN
                </button>

                {/* FR Button */}
                <button
                    onClick={() => setLang('fr')}
                    className="flex-1 text-center z-10 text-[0.65rem] font-bold tracking-widest transition-colors duration-300 outline-none"
                    style={{ color: lang === 'fr' ? currentColors.activeText : currentColors.inactiveText }}
                >
                    FR
                </button>

                {/* AR Button */}
                <button
                    onClick={() => setLang('ar')}
                    className="flex-1 text-center z-10 text-[0.7rem] font-black font-cairo transition-colors duration-300 outline-none"
                    style={{ color: lang === 'ar' ? currentColors.activeText : currentColors.inactiveText }}
                >
                    AR
                </button>
            </div>
        </div>
    );
}
