"use client";

import { usePremium } from "@/context/PremiumContext";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

interface WitiAppShowcaseProps {
    title: { ar: string; fr: string; en: string };
    description: { ar: string; fr: string; en: string };
    screenshots: string[];
    features?: { ar: string; fr: string; en: string }[];
    techStack?: string[];
    landscape?: boolean;
}

export default function WitiAppShowcase({ title, description, screenshots, features, techStack, landscape = false }: WitiAppShowcaseProps) {
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

    const slideW = landscape ? "!w-[420px]" : "!w-[240px]";
    const slideH = landscape ? "!h-[240px]" : "!h-[480px]";
    const imgFit = landscape ? "w-full h-full object-cover object-top" : "w-full h-full object-cover";

    return (
        <div className={`min-h-screen py-32 px-12 sm:px-24 md:px-32 lg:px-64 ${theme === 'dark' ? 'bg-[#050505]' : 'bg-[var(--bg-primary)]'} transition-colors duration-700 overflow-x-hidden`}>
            <div className="w-full">

                <motion.button
                    onClick={() => router.back()}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex border-2 border-[var(--accent-primary)]/20 items-center gap-4 mb-20 px-8 py-3 rounded-none bg-white/5 text-[var(--accent-primary)] font-bold uppercase tracking-widest text-[0.7rem] hover:bg-[var(--accent-primary)] hover:text-white transition-all duration-500 shadow-xl backdrop-blur-md"
                >
                    <div className="relative w-6 h-6 flex items-center justify-center">
                        <ArrowLeft className={`w-4 h-4 transition-transform group-hover:-translate-x-1 ${lang === 'ar' ? 'rotate-180 group-hover:translate-x-1' : ''}`} />
                    </div>
                    <span>{lang === 'ar' ? 'الرجوع للقائمة' : lang === 'fr' ? 'RETOUR AU HUB' : 'BACK TO HUB'}</span>
                </motion.button>

                <div className={`flex flex-col lg:flex-row gap-24 items-start ${lang === 'ar' ? 'lg:flex-row-reverse' : ''}`}>

                    {/* Content Section */}
                    <div className="lg:w-1/2 space-y-12">
                        <div className="space-y-8">
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                className={`h-2 bg-[var(--accent-primary)] w-16 ${lang === 'ar' ? 'ml-auto' : ''}`}
                            />
                            <h1 className="text-3xl lg:text-4xl font-black text-[var(--text-primary)] uppercase tracking-tight leading-tight">
                                {getTitle()}
                            </h1>
                            <p className="text-[1.1rem] text-[var(--text-primary)]/80 leading-relaxed font-medium">
                                {getDesc()}
                            </p>
                        </div>

                        {techStack && (
                            <div className="mt-40 mb-40 overflow-hidden rounded-none border-2 border-[var(--accent-primary)]/20 bg-white/5 backdrop-blur-sm shadow-2xl">
                                <div className="bg-[var(--accent-primary)]/10 px-10 py-6 border-b-2 border-[var(--accent-primary)]/20">
                                    <h3 className="text-[0.7rem] font-black uppercase tracking-[0.5em] text-[var(--accent-primary)]">
                                        {lang === 'ar' ? 'بنيان التكنولوجيا' : lang === 'fr' ? 'ARCHITECTURE TECHNIQUE' : 'TECHNICAL STACK'}
                                    </h3>
                                </div>
                                <div className="p-12">
                                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-12">
                                        {techStack.map((tech, idx) => (
                                            <div key={idx} className="flex flex-col gap-3 group cursor-default">
                                                <div className="text-[10px] text-[var(--text-primary)]/30 font-extrabold uppercase tracking-widest group-hover:text-[var(--accent-primary)] transition-colors">Module 0{idx + 1}</div>
                                                <div className="text-[0.95rem] font-black text-[var(--text-primary)] group-hover:translate-x-1 transition-all duration-300">{tech}</div>
                                                <div className="w-10 h-[2.5px] bg-[var(--accent-primary)]/30 group-hover:w-16 group-hover:bg-[var(--accent-primary)] transition-all duration-300" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {features && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-10">
                                {features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-5 p-7 rounded-3xl bg-white/5 border border-white/10 group hover:border-[var(--accent-primary)]/30 transition-all shadow-lg hover:-translate-y-1 duration-300">
                                        <div className="w-4 h-4 rounded-full bg-[var(--accent-primary)] shadow-[0_0_20px_rgba(212,175,55,0.6)] group-hover:scale-125 transition-transform" />
                                        <span className="text-[0.95rem] font-black text-[var(--text-primary)] leading-tight">
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
                                autoplay={{ delay: 3500, disableOnInteraction: false }}
                                pagination={{ clickable: true, dynamicBullets: true }}
                                modules={[EffectCoverflow, Pagination, Autoplay]}
                                className="witi-swiper !pb-12"
                            >
                                {screenshots.length > 0 ? screenshots.map((src, idx) => (
                                    <SwiperSlide key={idx} className={`${slideW} ${slideH} rounded-2xl overflow-hidden border border-white/20 shadow-2xl`}>
                                        <img src={src} alt={`${getTitle()} Screenshot ${idx + 1}`} className={imgFit} />
                                    </SwiperSlide>
                                )) : (
                                    [1, 2, 3].map((_, idx) => (
                                        <SwiperSlide key={idx} className="!w-[240px] !h-[480px] rounded-3xl overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center p-8 text-center backdrop-blur-sm">
                                            <div className="space-y-4">
                                                <div className="w-12 h-12 rounded-full bg-[var(--accent-primary)]/20 mx-auto animate-pulse flex items-center justify-center text-2xl">📷</div>
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
