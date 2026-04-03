"use client";

import { usePremium } from "@/context/PremiumContext";
import { motion } from "framer-motion";

export default function Footer() {
    const { lang, theme } = usePremium();

    // Data for the footer (Arabic, French, and English)
    const data = {
        about: {
            title: lang === "ar" ? "سند إداري" : "SANAD IDARI",
            desc: lang === "ar"
                ? "مكتب الاستشارة، التحرير، والمواكبة الإدارية الذكية. ندمج عمق الخبرة القانونية مع أحدث التقنيات لتقديم حلول مبتكرة وحماية استباقية."
                : lang === "fr"
                ? "Cabinet de conseil, de rédaction et d'accompagnement administratif intelligent. Nous allions l'expertise juridique aux dernières technologies pour des solutions innovantes et une protection proactive."
                : "Specialized Administrative Advisory & Expert Support Cabinet. We merge legal depth with advanced technology for innovative solutions and proactive protection.",
        },
        services: {
            title: lang === "ar" ? "روابط مفيدة" : lang === "fr" ? "LIENS UTILES" : "USEFUL LINKS",
            links: [
                lang === "ar" ? "مدونة سند" : lang === "fr" ? "Blog Sanad" : "Sanad Blog",
                lang === "ar" ? "مرصد سند" : lang === "fr" ? "Observatoire Sanad" : "Sanad Observatory",
                lang === "ar" ? "المركز الإعلامي" : lang === "fr" ? "Espace Presse" : "Press Room",
                lang === "ar" ? "انضم إلينا" : lang === "fr" ? "Carreires" : "Careers",
                lang === "ar" ? "مركز المساعدة" : lang === "fr" ? "Centre d'aide" : "Help Center",
                lang === "ar" ? "الأسئلة الشائعة (FAQ)" : lang === "fr" ? "FAQ" : "FAQ",
            ]
        },
        links: {
            title: lang === "ar" ? "من نحن ؟" : lang === "fr" ? "QUI SOMMES-NOUS ?" : "ABOUT US",
            links: [
                lang === "ar" ? "شروط الإستخدام" : lang === "fr" ? "Conditions d'utilisation" : "Terms of Use",
                lang === "ar" ? "سياسة الخصوصية" : lang === "fr" ? "Politique de Confidentialité" : "Privacy Policy",
                lang === "ar" ? "التحذيرات القانونية" : lang === "fr" ? "Mentions Légales" : "Legal Notices",
                lang === "ar" ? "إدارة ملفات تعريف الارتباط" : lang === "fr" ? "Gestion des Cookies" : "Cookie Management",
                lang === "ar" ? "خريطة الموقع" : lang === "fr" ? "Plan du site" : "Sitemap",
                lang === "ar" ? "إمكانية الوصول" : lang === "fr" ? "Accessibilité" : "Accessibility",
            ]
        },
        contact: {
            title: lang === "ar" ? "اتصل بنا" : lang === "fr" ? "CONTACT" : "CONTACT US",
            address: lang === "ar" ? "شارع الحسن الثاني، زنقة أكنسوس، عمارة رقم 1، شقة رقم 2 - الرباط - المغرب" : "Avenue HASSAN II, Rue Akensous, Immeuble n°1, Appartement n°2 - RABAT - Maroc",
            email: "contact@sanadidari.com",
            phone: "+212 675 835 787",
            website: "www.sanadidari.com"
        }
    };

    return (
        <footer
            className={`relative overflow-hidden bg-[#000000] text-white border-t border-[#D4AF37]/20`}
            style={{ paddingTop: '20px', paddingBottom: '20px' }}
        >
            {/* Tech Background Glows & Mesh */}
            <div className="absolute top-0 right-0 w-full h-[500px] bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.1)_0%,transparent_50%)] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-[500px] bg-[radial-gradient(ellipse_at_bottom_left,rgba(130,80,62,0.15)_0%,transparent_50%)] pointer-events-none" />

            {/* Circuit Board / Tech Pattern overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 ps-16 lg:ps-24 lg:px-[8%]">
                <div
                    className={`flex flex-wrap lg:flex-nowrap gap-12 lg:gap-0 justify-between mb-16 w-full`}
                    dir={lang === 'ar' ? 'rtl' : 'ltr'}
                >

                    {/* Column 1: Brand & About */}
                    <div
                        className={`flex flex-col w-full lg:w-[25%] ${lang === 'ar' ? 'items-end text-right' : 'items-start text-left'} ps-4`}
                        style={{ textAlign: lang === 'ar' ? 'right' : 'left', alignItems: lang === 'ar' ? 'flex-end' : 'flex-start' }}
                    >
                        <div className="mb-6 group cursor-pointer relative">
                            {/* Glow behind logo */}
                            <div className="absolute inset-0 bg-[#D4AF37]/20 blur-2xl rounded-full scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <img
                                src={lang === "ar" ? "/images/logo_ar.png" : "/images/logo_fr.png"}
                                alt="Sanad"
                                className="h-16 w-auto object-contain relative z-10 brightness-[2] drop-shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <p className="text-sm text-gray-400 font-light leading-relaxed mb-8 max-w-[280px]">
                            {data.about.desc}
                        </p>

                        {/* Social Links (Tech Nodes) */}
                        <div className="flex gap-4">
                            {[1, 2, 3].map((item) => (
                                <motion.a
                                    key={item}
                                    href="#"
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    className="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center bg-white/5 hover:bg-[#D4AF37] hover:border-[#D4AF37] text-gray-400 hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] group overflow-hidden relative"
                                >
                                    {/* Tech scanner effect on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent translate-y-[-100%] group-hover:animate-[scan_1.5s_ease-in-out_infinite]" />
                                    <svg className="w-4 h-4 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                                        {item === 1 && <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />}
                                        {item === 2 && <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />}
                                        {item === 3 && <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />}
                                    </svg>
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Expertise */}
                    <div
                        className={`flex flex-col w-full lg:w-[20%] ${lang === 'ar' ? 'items-end text-right' : 'items-start text-left'}`}
                        style={{ textAlign: lang === 'ar' ? 'right' : 'left', alignItems: lang === 'ar' ? 'flex-end' : 'flex-start' }}
                    >
                        <ul className="space-y-4">
                            <li className="mb-6">
                                <h4 className="text-[#D4AF37] font-black text-xs tracking-[0.3em] uppercase flex flex-col gap-2">
                                    {data.services.title}
                                    <div className="w-12 h-0.5 bg-gradient-to-r from-[#D4AF37] to-transparent" style={{ marginLeft: lang === 'ar' ? 'auto' : '0', marginRight: lang === 'ar' ? '0' : 'auto' }} />
                                </h4>
                            </li>
                            {data.services.links.map((link, idx) => (
                                <li key={idx}>
                                    <a href="#" className={`text-sm text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group`}>
                                        <span className={`w-0 h-px bg-[#D4AF37] transition-all duration-300 ${lang === 'ar' ? 'group-hover:w-4 order-2' : 'group-hover:w-4 order-1'}`} />
                                        <span className={lang === 'ar' ? 'order-1' : 'order-2'}>{link}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Quick Links */}
                    <div
                        className={`flex flex-col w-full lg:w-[20%] ${lang === 'ar' ? 'items-end text-right' : 'items-start text-left'}`}
                        style={{ textAlign: lang === 'ar' ? 'right' : 'left', alignItems: lang === 'ar' ? 'flex-end' : 'flex-start' }}
                    >
                        <ul className="space-y-4">
                            <li className="mb-6">
                                <h4 className="text-[#D4AF37] font-black text-xs tracking-[0.3em] uppercase flex flex-col gap-2">
                                    {data.links.title}
                                    <div className="w-12 h-0.5 bg-gradient-to-r from-[#D4AF37] to-transparent" style={{ marginLeft: lang === 'ar' ? 'auto' : '0', marginRight: lang === 'ar' ? '0' : 'auto' }} />
                                </h4>
                            </li>
                            {data.links.links.map((link, idx) => (
                                <li key={idx}>
                                    <a href="#" className={`text-sm text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group`}>
                                        <span className={`w-0 h-px bg-[#D4AF37] transition-all duration-300 ${lang === 'ar' ? 'group-hover:w-4 order-2' : 'group-hover:w-4 order-1'}`} />
                                        <span className={lang === 'ar' ? 'order-1' : 'order-2'}>{link}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div
                        className={`flex flex-col w-full lg:w-[30%] ${lang === 'ar' ? 'items-end text-right' : 'items-start text-left'}`}
                        style={{ textAlign: lang === 'ar' ? 'right' : 'left', alignItems: lang === 'ar' ? 'flex-end' : 'flex-start' }}
                    >
                        <div className="space-y-6 w-full">
                            <div className="mb-6">
                                <h4 className="text-[#D4AF37] font-black text-xs tracking-[0.3em] uppercase flex flex-col gap-2">
                                    {data.contact.title}
                                    <div className="w-12 h-0.5 bg-gradient-to-r from-[#D4AF37] to-transparent" style={{ marginLeft: lang === 'ar' ? 'auto' : '0', marginRight: lang === 'ar' ? '0' : 'auto' }} />
                                </h4>
                            </div>
                            {/* Address Node */}
                            <div className={`flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-[#D4AF37]/30 transition-all duration-500 group`}>
                                <div className={`mt-1 text-[#D4AF37] ${lang === 'ar' ? 'order-2' : 'order-1'}`}>
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <span className={`text-sm text-gray-400 group-hover:text-white transition-colors leading-relaxed ${lang === 'ar' ? 'order-1' : 'order-2'}`}>
                                    {data.contact.address}
                                </span>
                            </div>

                            <div className={`flex flex-col gap-2`}>
                                <a href={`mailto:${data.contact.email}`} className={`text-sm text-gray-400 hover:text-[#D4AF37] transition-colors flex items-center gap-3 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                                    <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#D4AF37]/70">
                                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    </span>
                                    {data.contact.email}
                                </a>
                                <a href={`tel:${data.contact.phone.replace(/\s+/g, '')}`} className={`text-sm text-gray-400 hover:text-[#D4AF37] transition-colors flex items-center gap-3 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                                    <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#D4AF37]/70">
                                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    </span>
                                    <span dir="ltr">{data.contact.phone}</span>
                                </a>
                                <a href={`https://${data.contact.website}`} target="_blank" rel="noopener noreferrer" className={`text-sm text-gray-400 hover:text-[#D4AF37] transition-colors flex items-center gap-3 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                                    <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#D4AF37]/70">
                                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                                    </span>
                                    {data.contact.website}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar: Copyright & Tech status */}
                <div className={`mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-gray-600 uppercase tracking-widest ${lang === 'ar' ? 'md:flex-row-reverse' : ''}`}>
                    <p>
                        &copy; {new Date().getFullYear()} {data.about.title}. {lang === 'ar' ? 'جميع الحقوق محفوظة.' : lang === 'fr' ? 'TOUS DROITS RÉSERVÉS.' : 'ALL RIGHTS RESERVED.'}
                    </p>
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                        <span>{lang === 'ar' ? 'الأنظمة تعمل بكفاءة عالية' : lang === 'fr' ? 'SYSTÈMES OPÉRATIONNELS' : 'ALL SYSTEMS OPERATIONAL'}</span>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes scan {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(100%); }
                }
            `}</style>
        </footer>
    );
}
