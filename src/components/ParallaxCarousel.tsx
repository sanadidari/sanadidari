"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

interface CarouselItem {
    id: string;
    title: string;
    description: string;
    image: string;
    link?: string;
}

interface ParallaxCarouselProps {
    items: CarouselItem[];
    theme?: 'light' | 'dark';
}

export default function ParallaxCarousel({ items, theme = 'dark' }: ParallaxCarouselProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(0); // 1 = right (next), -1 = left (prev)

    const len = items.length;

    const nextSlide = () => {
        setDirection(1);
        setActiveIndex((prev) => (prev + 1) % len);
    };

    const prevSlide = () => {
        setDirection(-1);
        setActiveIndex((prev) => (prev - 1 + len) % len);
    };

    const getPosition = (index: number) => {
        let diff = (index - activeIndex + len) % len;
        if (diff > len / 2) diff -= len;
        return diff;
    };

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-10 overflow-hidden min-h-[500px] flex flex-col items-center justify-center relative">

            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#D4AF37] rounded-full blur-[150px] opacity-10 pointer-events-none`} />

            <div className="relative w-full h-[450px] flex items-center justify-center overflow-hidden">
                {items.map((item, index) => {
                    const position = getPosition(index);

                    // Range: -1 (Left Buffer), 0 (Center Active), 1 (Right Buffer), 2 (Right Far Buffer)
                    const isVisible = position >= -1 && position <= 2;
                    if (!isVisible) return null;

                    const isActive = position === 0;

                    // Map position to visual LEFT %
                    // Width: 50%
                    // Gap: 5% (Total stride 55%)

                    // Center (0): start at 25% (Ends at 75%) -> Perfectly centered in 100% container
                    // Right (1): start at 25 + 55 = 80%
                    // Left (-1): start at 25 - 55 = -30%
                    // Right Far (2): start at 25 + 110 = 135%

                    let leftPos = '25%';
                    if (position === -1) leftPos = '-30%';
                    if (position === 0) leftPos = '25%';
                    if (position === 1) leftPos = '80%';
                    if (position === 2) leftPos = '135%';

                    // Wrap-around logic
                    const isWrappingRight = direction === 1 && position === 2;
                    const isWrappingLeft = direction === -1 && position === -1;
                    const isWrapping = isWrappingRight || isWrappingLeft;

                    const initial = isWrapping ? {
                        left: isWrappingRight ? '135%' : '-85%', // Start well off-screen
                        opacity: 0,
                        scale: 0.8
                    } : false;

                    return (
                        <motion.div
                            key={`${item.id}-${isWrapping ? 'wrap' : 'normal'}`}
                            className={`absolute w-[50%] h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-2xl transition-all duration-300
                   border border-[#D4AF37]/30 bg-[var(--bg-primary)]/80 backdrop-blur-xl
                `}
                            initial={initial}
                            animate={{
                                left: leftPos,
                                opacity: isActive ? 1 : 0.5, // Dim neighbors
                                scale: isActive ? 1 : 0.85, // Scale neighbors
                                zIndex: isActive ? 20 : 10,
                                filter: isActive ? 'blur(0px)' : 'blur(2px) grayscale(50%)',
                            }}
                            transition={{
                                duration: 0.6,
                                ease: [0.32, 0.72, 0, 1],
                                type: "tween"
                            }}
                            onClick={() => {
                                if (position === 1) nextSlide();
                                if (position === -1) prevSlide();
                                if (position === 2) nextSlide();
                            }}
                        >
                            {/* Image */}
                            <div className="absolute inset-0 z-0">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
                            </div>

                            {/* Content */}
                            <div className={`absolute bottom-0 left-0 right-0 p-8 z-10 flex flex-col items-center text-center transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                                <div className="flex items-center gap-3 mb-2 justify-center">
                                    <div className="w-8 h-[2px] bg-[#D4AF37]" />
                                    <span className="text-[#D4AF37] tracking-[0.2em] text-[10px] font-bold uppercase">Featured</span>
                                    <div className="w-8 h-[2px] bg-[#D4AF37]" />
                                </div>
                                <h3 className="text-2xl lg:text-4xl font-black text-white uppercase leading-none mb-3 drop-shadow-lg">
                                    {item.title}
                                </h3>
                                <p className="text-gray-300 text-sm font-medium line-clamp-3 max-w-lg mb-6 mx-auto">
                                    {item.description}
                                </p>
                                {item.link && (
                                    <button className="flex items-center gap-2 text-white font-bold tracking-widest text-xs group mx-auto">
                                        <span>VIEW PROJECT</span>
                                        <div className="p-2 rounded-full border border-white/20 group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all">
                                            <ArrowUpRight className="w-4 h-4" />
                                        </div>
                                    </button>
                                )}
                            </div>

                        </motion.div>
                    );
                })}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-8 mt-8 z-50">
                <button onClick={prevSlide} className="p-3 rounded-full border border-[#D4AF37]/30 hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all group">
                    <ChevronLeft className="w-5 h-5 text-[#D4AF37] group-hover:text-white" />
                </button>

                <div className="flex gap-2">
                    {items.map((_, i) => (
                        <div
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${i === activeIndex ? 'w-10 bg-[#D4AF37]' : 'w-2 bg-[#D4AF37]/30 hover:bg-[#D4AF37]/60'}`}
                        />
                    ))}
                </div>

                <button onClick={nextSlide} className="p-3 rounded-full border border-[#D4AF37]/30 hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all group">
                    <ChevronRight className="w-5 h-5 text-[#D4AF37] group-hover:text-white" />
                </button>
            </div>

        </div>
    );
}
