"use client";

import { usePremium } from "@/context/PremiumContext";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Layers, Cpu, ShieldCheck, Zap } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

interface WitiAppShowcaseProps {
    title: { ar: string; fr: string; en: string };
    description: { ar: string; fr: string; en: string };
    screenshots: string[];
    features?: { ar: string; fr: string; en: string }[];
    techStack?: string[];
}

export default function WitiAppShowcase({ title, description, screenshots, features, techStack }: WitiAppShowcaseProps) {
    const { lang, theme } = usePremium();
    const router = useRouter();

    const getTitle = () => {
        if (lang === 'ar') return title.ar;
        if (lang === 'fr') return title.fr;
        return title.en;
    };

    const getDesc = () => {
        if (lang === 'ar') return description.ar;
        if (lang === 'fr') return description.fr;
        return description.en;
    };

    return (
        <div className={`min-h-screen py-24 ${theme === 'dark' ? 'bg-[#050505]' : 'bg-[#F9F5F3]'} transition-colors duration-700`}>
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Elevated Back Link */}
                <motion.button 
                    onClick={() => router.back()}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex items-center gap-4 mb-16 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-[var(--accent-primary)] font-bold uppercase tracking-widest text-[0.65rem] hover:bg-[var(--accent-primary)] hover:text-white transition-all duration-500 shadow-xl backdrop-blur-md"
                >
                    <div className="relative w-6 h-6 flex items-center justify-center">
                        <ArrowLeft className={`w-4 h-4 transition-transform group-hover:-translate-x-1 ${lang === 'ar' ? 'rotate-180 group-hover:translate-x-1' : ''}`} />
                    </div>
                    <span>{lang === 'ar' ? 'الرجوع للقائمة' : lang === 'fr' ? 'RETOUR AU HUB' : 'BACK TO HUB'}</span>
                </motion.button>

                <div className={`flex flex-col lg:flex-row gap-16 items-start ${lang === 'ar' ? 'lg:flex-row-reverse' : ''}`}>
                    
                    {/* Content Section */}
                    <div className="lg:w-1/2 space-y-8">
                        <div className="space-y-4">
                            <motion.div 
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                className={`h-1 bg-[var(--accent-primary)] w-24 ${lang === 'ar' ? 'ml-auto' : ''}`}
                            />
                            <h1 className="text-5xl lg:text-7xl font-black text-[var(--text-primary)] uppercase tracking-tighter leading-none">
                                {getTitle()}
                            </h1>
                            <p className="text-xl text-[var(--text-primary)]/80 leading-relaxed font-medium">
                                {getDesc()}
                            </p>
                        </div>

                        {/* Tech Stack Bubbles */}
                        {techStack && (
                            <div className="flex flex-wrap gap-2 pt-4">
                                {techStack.map((tech, idx) => (
                                    <span key={idx} className="px-4 py-2 rounded-full border border-[var(--accent-primary)]/30 text-[var(--accent-primary)] text-[10px] font-black uppercase tracking-widest bg-[var(--accent-primary)]/5">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        )}

                        {features && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-[var(--accent-primary)]/10">
                                {features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 group hover:border-[var(--accent-primary)]/30 transition-all">
                                        <div className="w-2 h-2 rounded-full bg-[var(--accent-primary)] shadow-[0_0_10px_rgba(212,175,55,0.5)] group-hover:scale-150 transition-transform" />
                                        <span className="text-sm font-bold text-[var(--text-primary)]">
                                            {lang === 'ar' ? feature.ar : lang === 'fr' ? feature.fr : feature.en}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Screenshot Slider Section */}
                    <div className="lg:w-1/2 w-full">
                        <div className="relative group">
                            {/* Decorative Background Glow */}
                            <div className="absolute inset-0 bg-[var(--accent-primary)]/10 blur-[120px] rounded-full scale-110 pointer-events-none" />
                            
                            <Swiper
                                effect={'coverflow'}
                                grabCursor={true}
                                centeredSlides={true}
                                slidesPerView={'auto'}
                                coverflowEffect={{
                                    rotate: 50,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 1,
                                    slideShadows: true,
                                }}
                                autoplay={{
                                    delay: 3500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                    dynamicBullets: true,
                                }}
                                modules={[EffectCoverflow, Pagination, Autoplay]}
                                className="witi-swiper !pb-12"
                            >
                                {screenshots.length > 0 ? screenshots.map((src, idx) => (
                                    <SwiperSlide key={idx} className="!w-[300px] !h-[600px] rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
                                        <img src={src} alt={`${getTitle()} Screenshot ${idx + 1}`} className="w-full h-full object-cover" />
                                    </SwiperSlide>
                                )) : (
                                    /* Placeholders based on app name */
                                    [1, 2, 3].map((_, idx) => (
                                        <SwiperSlide key={idx} className="!w-[300px] !h-[600px] rounded-3xl overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center p-8 text-center backdrop-blur-sm">
                                            <div className="space-y-4">
                                                <div className="w-12 h-12 rounded-full bg-[var(--accent-primary)]/20 mx-auto animate-pulse flex items-center justify-center text-2xl">
                                                    📷
                                                </div>
                                                <p className="text-gray-500 font-bold uppercase text-[10px] tracking-widest">{lang === 'ar' ? 'بانتظار الصور' : 'AWAITING SCREENSHOTS'}</p>
                                                <div className="text-[var(--accent-primary)]/40 text-[9px] font-mono leading-tight">
                                                    public/images/witi/{title.en.toLowerCase().replace(/\s+/g, '-')}/
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                )}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                .witi-swiper .swiper-pagination-bullet {
                    background: var(--accent-primary) !important;
                }
                .witi-swiper .swiper-slide-shadow-left,
                .witi-swiper .swiper-slide-shadow-right {
                    background-image: none !important;
                }
            `}</style>
        </div>
    );
}
