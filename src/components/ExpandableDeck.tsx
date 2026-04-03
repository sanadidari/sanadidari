"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface DeckItem {
    id: string;
    title: string;
    description: string;
    image: string;
    link?: string;
}

interface ExpandableDeckProps {
    items: DeckItem[];
    theme?: 'light' | 'dark';
}

export default function ExpandableDeck({ items, theme = 'dark' }: ExpandableDeckProps) {
    const [activeCard, setActiveCard] = useState<string>(items[0].id);

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-20">
            <div className="flex flex-col lg:flex-row gap-4 h-[600px] lg:h-[500px]">
                {items.map((item) => {
                    const isActive = activeCard === item.id;

                    return (
                        <motion.div
                            key={item.id}
                            onClick={() => setActiveCard(item.id)}
                            onMouseEnter={() => setActiveCard(item.id)}
                            className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-out border shadow-2xl
                ${isActive ? "lg:flex-[3]" : "lg:flex-[1]"}
                ${theme === 'dark' ? 'border-[#D4AF37]/30' : 'border-[#82503E]/30'}
              `}
                            layout
                            style={{
                                borderRadius: "1.5rem",
                            }}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className={`w-full h-full object-cover transition-transform duration-1000 ${isActive ? "scale-100" : "scale-125 grayscale"}`}
                                />
                                <div className={`absolute inset-0 bg-gradient-to-b ${theme === 'dark' ? 'from-black/20 via-black/40 to-black/90' : 'from-black/10 via-black/20 to-black/80'}`} />
                            </div>

                            {/* Vertical Title (Inactive State) */}
                            {!isActive && (
                                <div className="absolute inset-0 flex items-center justify-center z-10 p-4">
                                    <h3 className="text-white font-bold text-xl tracking-widest uppercase [writing-mode:vertical-rl] rotate-180 opacity-80 decoration-slice">
                                        {item.title}
                                    </h3>
                                </div>
                            )}

                            {/* Content (Active State) */}
                            <AnimatePresence>
                                {isActive && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ delay: 0.2, duration: 0.3 }}
                                        className="absolute bottom-0 left-0 right-0 p-8 z-20 flex flex-col justify-end h-full bg-gradient-to-t from-black/80 via-transparent to-transparent"
                                    >
                                        <div className="transform transition-all duration-500 translate-y-0">
                                            <div className="flex items-center gap-3 mb-2 opacity-80">
                                                <div className="w-8 h-[1px] bg-[#D4AF37]" />
                                                <span className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase">Découvrir</span>
                                            </div>
                                            <h3 className={`text-4xl font-black text-white uppercase tracking-tight mb-4 leading-none`}>
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-300 text-sm font-medium leading-relaxed max-w-md mb-6 line-clamp-3">
                                                {item.description}
                                            </p>

                                            {item.link && (
                                                <button className="group flex items-center gap-2 px-6 py-3 rounded-full bg-[#D4AF37] text-white font-bold text-sm tracking-widest hover:bg-white hover:text-black transition-all">
                                                    <span>EXPLORER</span>
                                                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
                                                </button>
                                            )}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Gold Border Highlight on Hover */}
                            <div className={`absolute inset-0 border-2 border-[#D4AF37] opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none ${isActive ? 'opacity-100' : ''}`} />
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
