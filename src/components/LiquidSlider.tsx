"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue, useVelocity, PanInfo } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface LiquidItem {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    link?: string;
}

interface LiquidSliderProps {
    items: LiquidItem[];
    theme?: 'light' | 'dark';
}

export default function LiquidSlider({ items, theme = 'dark' }: LiquidSliderProps) {
    const [index, setIndex] = useState(0);
    const x = useMotionValue(0);
    const xVelocity = useVelocity(x);

    // Transform velocity into skew/scale for "liquid" feel
    const skew = useTransform(xVelocity, [-1000, 1000], [10, -10]);
    const scale = useTransform(xVelocity, [-1000, 1000], [0.95, 0.95]); // Shrink slightly on fast drag

    // Spring physics for smooth "gooey" return
    const springConfig = { damping: 50, stiffness: 400, mass: 1 };

    const activeItem = items[index];

    // Autoplay Effect
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % items.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [items.length]);

    const handleDragEnd = (event: any, info: PanInfo) => {
        const threshold = 100;
        if (info.offset.x < -threshold) {
            setIndex((prev) => (prev + 1) % items.length);
        } else if (info.offset.x > threshold) {
            setIndex((prev) => (prev - 1 + items.length) % items.length);
        }
    };

    return (
        <div className="w-full py-10 lg:py-16 relative overflow-hidden flex items-center justify-center">
            {/* Background Blur/Goo Effect */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeItem.id}
                        className="absolute inset-0"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "circOut" }}
                    >
                        {activeItem.image && (
                            <img src={activeItem.image} className="w-full h-full object-cover opacity-40 blur-sm" />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="relative z-10 w-full mx-auto" style={{ paddingLeft: '6%', paddingRight: '6%' }}>
                {/* The "Liquid" Card */}
                <motion.div
                    className="w-full aspect-[16/9] lg:aspect-[21/9] bg-[#1a1a1a] border border-[#D4AF37]/20 rounded-[3rem] overflow-hidden relative shadow-2xl cursor-grab active:cursor-grabbing"
                    style={{ skewX: skew, scale, x }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2} // Rubbery feel
                    onDragEnd={handleDragEnd}
                >
                    <AnimatePresence mode='popLayout'>
                        <motion.div
                            key={activeItem.id}
                            className="absolute inset-0 flex flex-col lg:flex-row h-full"
                            initial={{ opacity: 0, x: 200 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -200 }}
                            transition={{
                                type: "spring",
                                ...springConfig
                            }}
                        >
                            {/* Image Half */}
                            <div className="flex-1 relative overflow-hidden bg-gray-900">
                                <img
                                    src={activeItem.image}
                                    alt={activeItem.title}
                                    className="w-full h-full object-cover absolute inset-0 z-10"
                                />
                            </div>

                            {/* Text Half */}
                            <div className="flex-1 p-8 flex flex-col justify-center items-start text-left bg-gradient-to-br from-transparent to-black/50">
                                <motion.span
                                    className="text-[#D4AF37] tracking-[0.3em] text-xs font-bold uppercase mb-2 block"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    {activeItem.subtitle}
                                </motion.span>

                                <motion.h2
                                    className="text-3xl lg:text-5xl font-black text-white leading-[0.9] mb-4"
                                    initial={{ opacity: 0, y: 30, skewX: 20 }}
                                    animate={{ opacity: 1, y: 0, skewX: 0 }}
                                    transition={{ delay: 0.3, type: "spring" }}
                                >
                                    {activeItem.title}
                                </motion.h2>

                                <motion.p
                                    className="text-gray-400 text-xs lg:text-sm leading-relaxed max-w-sm"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    {activeItem.description}
                                </motion.p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Liquid Navigation Controls */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6 z-20">
                        <button
                            onClick={() => setIndex((prev) => (prev - 1 + items.length) % items.length)}
                            className="p-3 rounded-full border border-white/20 hover:bg-white/10 transition-all group backdrop-blur-sm"
                        >
                            <ChevronLeft className="w-5 h-5 text-white group-hover:text-[#D4AF37]" />
                        </button>

                        <div className="flex gap-3">
                            {items.map((_, i) => (
                                <div
                                    key={i}
                                    onClick={() => setIndex(i)}
                                    className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${i === index ? 'w-12 bg-[#D4AF37]' : 'w-2 bg-white/20 hover:bg-white/40'}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={() => setIndex((prev) => (prev + 1) % items.length)}
                            className="p-3 rounded-full border border-white/20 hover:bg-white/10 transition-all group backdrop-blur-sm"
                        >
                            <ChevronRight className="w-5 h-5 text-white group-hover:text-[#D4AF37]" />
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
