"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";

// Sanadidari brand palette
const C = "#82503E";   // maroon (accent)
const CD = "#5C3628";  // maroon dark
const BG = "#EEE3DF";  // cream background
const DARK = "#1C0A06"; // deep dark section
const TEXT = "#2A0A0A"; // main text
const GOLD = "#D4AF37"; // gold highlight

const SCREENS = [
  { src: "/images/witi/governance-platform/sc1.png",  label: "Main Dashboard" },
  { src: "/images/witi/governance-platform/sc3.png",  label: "Analytics · Distribution Charts" },
  { src: "/images/witi/governance-platform/sc9.png",  label: "Commissioners Directory" },
  { src: "/images/witi/governance-platform/sc4.png",  label: "New Procedure · Date Picker" },
  { src: "/images/witi/governance-platform/sc5.png",  label: "Procedure Type Selection" },
  { src: "/images/witi/governance-platform/sc6.png",  label: "Procedure Form" },
  { src: "/images/witi/governance-platform/sc8.png",  label: "Complaint Entry Form" },
  { src: "/images/witi/governance-platform/sc12.png", label: "Add Regional Officer" },
  { src: "/images/witi/governance-platform/sc10.png", label: "Settings" },
];

export default function GovernancePage() {
  const revealRefs = useRef<HTMLElement[]>([]);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = useCallback((i: number) => setLightbox(i), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);
  const prev = useCallback(() => setLightbox((i) => (i === null ? null : (i - 1 + SCREENS.length) % SCREENS.length)), []);
  const next = useCallback(() => setLightbox((i) => (i === null ? null : (i + 1) % SCREENS.length)), []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).style.opacity = "1";
          (e.target as HTMLElement).style.transform = "translateY(0)";
        }
      }),
      { threshold: 0.1 }
    );
    revealRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, closeLightbox, prev, next]);

  const reveal = (el: HTMLElement | null) => {
    if (!el || revealRefs.current.includes(el)) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(28px)";
    el.style.transition = "opacity 0.65s ease, transform 0.65s ease";
    revealRefs.current.push(el);
  };

  return (
    <div style={{ fontFamily: "'Inter', 'Cairo', sans-serif", background: BG, color: TEXT, overflowX: "hidden" }}>

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "rgba(238,227,223,0.94)", backdropFilter: "blur(14px)",
        borderBottom: `1px solid rgba(130,80,62,0.18)`,
        padding: "14px 48px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{
            width: 38, height: 38, borderRadius: 10,
            background: `linear-gradient(135deg, ${C} 0%, ${CD} 100%)`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 17, color: "white",
          }}>⚖</div>
          <span style={{ fontWeight: 800, fontSize: 18, color: TEXT, fontFamily: "var(--font-montserrat, 'Montserrat', sans-serif)" }}>
            Governance Platform
          </span>
        </div>
        <Link href="/witi" style={{ color: `rgba(42,10,10,0.45)`, fontSize: 13, textDecoration: "none" }}>
          ← WITI Hub
        </Link>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        minHeight: "100vh",
        background: `linear-gradient(150deg, ${DARK} 0%, #2E0F08 55%, #3A1A0C 100%)`,
        display: "flex", alignItems: "center",
        padding: "110px 48px 70px",
        position: "relative", overflow: "hidden", color: "white",
      }}>
        {/* Warm glow */}
        <div style={{ position: "absolute", top: "-15%", right: "0%", width: 700, height: 700, background: `radial-gradient(circle, rgba(130,80,62,0.18) 0%, transparent 70%)`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-10%", left: "15%", width: 500, height: 500, background: `radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%)`, pointerEvents: "none" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 72, flexWrap: "wrap" }}>

            {/* Text */}
            <div style={{ flex: "1 1 400px" }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: `rgba(130,80,62,0.2)`, border: `1px solid rgba(130,80,62,0.4)`,
                borderRadius: 30, padding: "6px 14px",
                fontSize: 12, color: "#E8A88A", fontWeight: 600, marginBottom: 28, letterSpacing: "0.5px",
              }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#E8A88A", display: "inline-block", animation: "pulse 2s infinite" }} />
                Institutional Governance · Moroccan Judicial Commissioners
              </div>

              <h1 style={{
                fontSize: "clamp(36px, 5vw, 62px)", fontWeight: 700, lineHeight: 1.15, marginBottom: 24,
                fontFamily: "var(--font-playfair, 'Playfair Display', serif)",
              }}>
                A complete{" "}
                <span style={{ color: "#E8A88A" }}>governance</span>
                <br />platform for the<br />
                <span style={{
                  background: `linear-gradient(135deg, ${GOLD} 0%, #F0D060 100%)`,
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                }}>justice system.</span>
              </h1>

              <p style={{ fontSize: 17, color: "rgba(255,255,255,0.6)", lineHeight: 1.75, marginBottom: 44, maxWidth: 500 }}>
                The National Platform centralizes the management of judicial commissioner workflows — from procedure tracking to KPI analytics and institutional directory governance.
              </p>

              <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 52 }}>
                <a href="#features" style={{
                  background: `linear-gradient(135deg, ${C} 0%, ${CD} 100%)`,
                  color: "white", borderRadius: 12,
                  padding: "14px 28px", fontSize: 15, fontWeight: 700,
                  textDecoration: "none", boxShadow: `0 8px 28px rgba(130,80,62,0.4)`,
                }}>Explore the Platform →</a>
                <a href="#screenshots" style={{
                  background: "rgba(255,255,255,0.07)", color: "white",
                  border: "1px solid rgba(255,255,255,0.14)",
                  borderRadius: 12, padding: "14px 28px", fontSize: 15, fontWeight: 600,
                  textDecoration: "none",
                }}>View Screenshots</a>
              </div>

              <div style={{ display: "flex", gap: 44 }}>
                {[
                  { n: "4", label: "Core modules" },
                  { n: "81.03", label: "Law aligned" },
                  { n: "16+", label: "Dashboard views" },
                ].map((s) => (
                  <div key={s.label}>
                    <div style={{ fontSize: 30, fontWeight: 800, color: "#E8A88A" }}>{s.n}</div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Browser mockup */}
            <div style={{ flex: "1 1 500px", maxWidth: 620 }}>
              <div style={{
                borderRadius: 14, overflow: "hidden",
                border: `2px solid rgba(130,80,62,0.5)`,
                boxShadow: `0 40px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(130,80,62,0.2)`,
              }}>
                {/* Browser chrome */}
                <div style={{
                  background: "#2A1208", padding: "10px 16px",
                  display: "flex", alignItems: "center", gap: 10,
                  borderBottom: "1px solid rgba(130,80,62,0.3)",
                }}>
                  <div style={{ display: "flex", gap: 6 }}>
                    {["#FF5F57","#FEBC2E","#28C840"].map((c) => (
                      <div key={c} style={{ width: 12, height: 12, borderRadius: "50%", background: c }} />
                    ))}
                  </div>
                  <div style={{
                    flex: 1, background: "rgba(255,255,255,0.07)", borderRadius: 6,
                    padding: "4px 12px", fontSize: 11, color: "rgba(255,255,255,0.4)",
                    fontFamily: "monospace",
                  }}>المنصة الوطنية &nbsp;·&nbsp; لوحة التحكم</div>
                </div>
                {/* Screenshot */}
                <div style={{ position: "relative", width: "100%", paddingBottom: "60%" }}>
                  <Image src="/images/witi/governance-platform/sc1.png" alt="Dashboard" fill style={{ objectFit: "cover", objectPosition: "top" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" style={{ padding: "100px 48px", background: BG }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div ref={reveal} style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: C, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: 16 }}>Four Modules</div>
            <h2 style={{
              fontSize: "clamp(28px, 4vw, 50px)", fontWeight: 700, color: TEXT,
              fontFamily: "var(--font-playfair, 'Playfair Display', serif)",
            }}>
              One platform.<br />Total institutional control.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(245px, 1fr))", gap: 28 }}>
            {[
              {
                icon: "📊",
                title: "Real-time KPI Dashboard",
                desc: "Live metrics on procedure volumes, commissioner activity, compliance rates and regional distribution — all on a single screen.",
              },
              {
                icon: "⚙️",
                title: "Intelligent Workflows",
                desc: "Structured إجراءات forms with type classification, deadline tracking, court assignment and party management built in.",
              },
              {
                icon: "👥",
                title: "Institutional Directory",
                desc: "Complete management of the judicial commissioner registry — profiles, jurisdictions, regional council bureaus and contact data.",
              },
              {
                icon: "📈",
                title: "Analytics & Compliance",
                desc: "Distribution charts by level and status, auto-generated compliance reports and risk-flagging tools for governance oversight.",
              },
            ].map((f, i) => (
              <div key={i} ref={reveal} style={{
                background: "white",
                borderRadius: 20, padding: "30px 26px",
                border: `1px solid rgba(130,80,62,0.12)`,
                borderTop: `3px solid ${C}`,
                boxShadow: "0 2px 16px rgba(42,10,10,0.06)",
              }}>
                <div style={{ fontSize: 34, marginBottom: 18 }}>{f.icon}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10, color: TEXT, fontFamily: "var(--font-playfair, serif)" }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: "#7A5A4A", lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCREENSHOT GALLERY ── */}
      <section id="screenshots" style={{ padding: "100px 48px", background: "#F5EDE8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div ref={reveal} style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: C, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: 16 }}>Platform in Action</div>
            <h2 style={{
              fontSize: "clamp(28px, 4vw, 50px)", fontWeight: 700, color: TEXT,
              fontFamily: "var(--font-playfair, 'Playfair Display', serif)",
            }}>
              Real screens.<br />Real institutional data.
            </h2>
            <p style={{ fontSize: 14, color: "#9A7A6A", marginTop: 12 }}>Click any screen to enlarge</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 28 }}>
            {SCREENS.map((s, i) => (
              <div key={i} ref={reveal} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {/* Browser frame */}
                <div
                  onClick={() => openLightbox(i)}
                  style={{
                    borderRadius: 12, overflow: "hidden",
                    border: `2px solid rgba(130,80,62,0.2)`,
                    boxShadow: "0 4px 24px rgba(42,10,10,0.1)",
                    cursor: "zoom-in",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "scale(1.02)";
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 40px rgba(130,80,62,0.25)`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(42,10,10,0.1)";
                  }}
                >
                  {/* Mini browser bar */}
                  <div style={{
                    background: "#2A1208", padding: "7px 12px",
                    display: "flex", alignItems: "center", gap: 7,
                  }}>
                    <div style={{ display: "flex", gap: 4 }}>
                      {["#FF5F57","#FEBC2E","#28C840"].map((c) => (
                        <div key={c} style={{ width: 8, height: 8, borderRadius: "50%", background: c }} />
                      ))}
                    </div>
                    <div style={{
                      flex: 1, background: "rgba(255,255,255,0.07)", borderRadius: 4,
                      padding: "2px 8px", fontSize: 9, color: "rgba(255,255,255,0.3)", fontFamily: "monospace",
                    }}>المنصة الوطنية</div>
                    {/* Zoom hint */}
                    <div style={{ fontSize: 12 }}>🔍</div>
                  </div>
                  {/* Screenshot */}
                  <div style={{ position: "relative", width: "100%", paddingBottom: "62%" }}>
                    <Image src={s.src} alt={s.label} fill style={{ objectFit: "cover", objectPosition: "top" }} />
                  </div>
                </div>
                <span style={{ fontSize: 12, color: "#7A5A4A", fontWeight: 600, textAlign: "center" }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DASHBOARD HIGHLIGHT ── */}
      <section style={{ padding: "100px 48px", background: DARK, color: "white" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", gap: 80, flexWrap: "wrap" }}>

          <div style={{ flex: 1, minWidth: 300 }} ref={reveal}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#E8A88A", letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: 20 }}>Core Feature</div>
            <h2 style={{
              fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, marginBottom: 24, lineHeight: 1.2,
              fontFamily: "var(--font-playfair, 'Playfair Display', serif)",
            }}>
              Institutional analytics<br />
              <span style={{
                background: `linear-gradient(135deg, ${GOLD} 0%, #F0D060 100%)`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>built for the judiciary.</span>
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.75, marginBottom: 36, maxWidth: 460 }}>
              The dashboard delivers live KPIs on procedure counts, commissioner activity, compliance rates and case distribution — enabling the council to govern with real data, not estimates.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                "Live procedure counters per commissioner",
                "Donut charts by status and judicial level",
                "Regional distribution heat maps",
                "Compliance trend over time",
              ].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#E8A88A", flexShrink: 0 }} />
                  <span style={{ color: "rgba(255,255,255,0.72)", fontSize: 15 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div ref={reveal} style={{ flex: "1 1 460px", maxWidth: 560 }}>
            <div style={{
              borderRadius: 14, overflow: "hidden",
              border: `2px solid rgba(130,80,62,0.5)`,
              boxShadow: `0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(212,175,55,0.15)`,
            }}>
              <div style={{
                background: "#2A1208", padding: "10px 16px",
                display: "flex", alignItems: "center", gap: 10,
              }}>
                <div style={{ display: "flex", gap: 6 }}>
                  {["#FF5F57","#FEBC2E","#28C840"].map((c) => (
                    <div key={c} style={{ width: 12, height: 12, borderRadius: "50%", background: c }} />
                  ))}
                </div>
                <div style={{
                  flex: 1, background: "rgba(255,255,255,0.07)", borderRadius: 6,
                  padding: "4px 12px", fontSize: 11, color: "rgba(255,255,255,0.4)", fontFamily: "monospace",
                }}>Analytics · توزيع المفوضين</div>
              </div>
              <div style={{ position: "relative", width: "100%", paddingBottom: "62%" }}>
                <Image src="/images/witi/governance-platform/sc3.png" alt="Analytics" fill style={{ objectFit: "cover", objectPosition: "top" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section style={{ padding: "72px 48px", background: BG }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <div ref={reveal} style={{ fontSize: 11, fontWeight: 700, color: C, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: 32 }}>Technical Foundation</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            {["Next.js 15", "Tailwind CSS 4", "Prisma ORM", "PostgreSQL", "Docker", "Filament Admin", "RTL / Arabic UI"].map((t) => (
              <div key={t} style={{
                padding: "11px 22px", borderRadius: 30,
                background: "white", border: `1px solid rgba(130,80,62,0.2)`,
                fontSize: 13, fontWeight: 600, color: TEXT,
                boxShadow: "0 2px 8px rgba(42,10,10,0.06)",
              }}>{t}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{
        padding: "100px 48px",
        background: `linear-gradient(150deg, ${DARK} 0%, #2E0F08 100%)`,
        textAlign: "center", color: "white",
      }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div ref={reveal} style={{ fontSize: 52, marginBottom: 20, fontFamily: "var(--font-playfair, serif)" }}>⚖</div>
          <h2 ref={reveal} style={{
            fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, marginBottom: 16,
            fontFamily: "var(--font-playfair, 'Playfair Display', serif)",
          }}>
            Interested in the Governance Platform?
          </h2>
          <p ref={reveal} style={{ fontSize: 17, color: "rgba(255,255,255,0.6)", lineHeight: 1.75, marginBottom: 44 }}>
            Deployed and actively used in institutional governance. Contact us to discuss adaptation for your organisation.
          </p>
          <a href="mailto:contact@sanadidari.com" style={{
            display: "inline-block",
            background: `linear-gradient(135deg, ${C} 0%, ${CD} 100%)`,
            color: "white", borderRadius: 14,
            padding: "16px 36px", fontSize: 16, fontWeight: 700,
            textDecoration: "none",
            boxShadow: `0 8px 32px rgba(130,80,62,0.5)`,
          }}>Contact Sanadidari →</a>
          <div style={{ marginTop: 20, fontSize: 13, color: "rgba(255,255,255,0.25)" }}>contact@sanadidari.com</div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        padding: "28px 48px",
        background: "#0F0402",
        display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16,
        borderTop: `1px solid rgba(130,80,62,0.2)`,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 700, fontSize: 15, color: "white" }}>
          <div style={{ width: 30, height: 30, borderRadius: 8, background: C, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>⚖</div>
          Governance Platform
        </div>
        <p style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>© 2026 Sanadidari SARL — Casablanca, Morocco</p>
        <Link href="/witi" style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>← WITI Hub</Link>
      </footer>

      {/* ── LIGHTBOX ── */}
      {lightbox !== null && (
        <div onClick={closeLightbox} style={{
          position: "fixed", inset: 0, zIndex: 1000,
          background: "rgba(28,10,6,0.95)",
          display: "flex", alignItems: "center", justifyContent: "center",
          animation: "fadeIn 0.25s ease",
        }}>
          {/* Prev */}
          <button onClick={(e) => { e.stopPropagation(); prev(); }} style={{
            position: "absolute", left: 24, top: "50%", transform: "translateY(-50%)",
            background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "50%", width: 52, height: 52, color: "white", fontSize: 22,
            cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
            transition: "background 0.2s",
          }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = `rgba(130,80,62,0.4)`; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)"; }}
          >‹</button>

          {/* Browser frame */}
          <div onClick={(e) => e.stopPropagation()} style={{
            width: "min(900px, 92vw)",
            borderRadius: 14, overflow: "hidden",
            border: `2px solid rgba(130,80,62,0.6)`,
            boxShadow: `0 40px 100px rgba(0,0,0,0.85)`,
            animation: "scaleIn 0.25s ease",
          }}>
            <div style={{
              background: "#2A1208", padding: "10px 16px",
              display: "flex", alignItems: "center", gap: 10,
            }}>
              <div style={{ display: "flex", gap: 6 }}>
                {["#FF5F57","#FEBC2E","#28C840"].map((c) => (
                  <div key={c} style={{ width: 12, height: 12, borderRadius: "50%", background: c }} />
                ))}
              </div>
              <div style={{
                flex: 1, background: "rgba(255,255,255,0.07)", borderRadius: 6,
                padding: "4px 12px", fontSize: 11, color: "rgba(255,255,255,0.4)", fontFamily: "monospace",
              }}>المنصة الوطنية &nbsp;·&nbsp; {SCREENS[lightbox].label}</div>
            </div>
            <div style={{ position: "relative", width: "100%", paddingBottom: "62%" }}>
              <Image src={SCREENS[lightbox].src} alt={SCREENS[lightbox].label} fill style={{ objectFit: "cover", objectPosition: "top" }} />
            </div>
          </div>

          {/* Next */}
          <button onClick={(e) => { e.stopPropagation(); next(); }} style={{
            position: "absolute", right: 24, top: "50%", transform: "translateY(-50%)",
            background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "50%", width: 52, height: 52, color: "white", fontSize: 22,
            cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
            transition: "background 0.2s",
          }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = `rgba(130,80,62,0.4)`; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)"; }}
          >›</button>

          {/* Label + dots */}
          <div style={{
            position: "absolute", bottom: 28,
            display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
          }}>
            <span style={{ color: "white", fontWeight: 600, fontSize: 14 }}>{SCREENS[lightbox].label}</span>
            <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 12 }}>{lightbox + 1} / {SCREENS.length}</span>
            <div style={{ display: "flex", gap: 6, marginTop: 4 }}>
              {SCREENS.map((_, i) => (
                <div key={i} onClick={(e) => { e.stopPropagation(); setLightbox(i); }} style={{
                  width: i === lightbox ? 20 : 6, height: 6, borderRadius: 3, cursor: "pointer",
                  background: i === lightbox ? C : "rgba(255,255,255,0.25)",
                  transition: "all 0.2s",
                }} />
              ))}
            </div>
          </div>

          {/* Close */}
          <button onClick={closeLightbox} style={{
            position: "absolute", top: 20, right: 20,
            background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "50%", width: 44, height: 44, color: "white", fontSize: 18,
            cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
          }}>✕</button>
        </div>
      )}

      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
      `}</style>
    </div>
  );
}
