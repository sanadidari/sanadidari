"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";

const G = "#D4AF37";
const GD = "#B8960C";
const N = "#0D1F3C";

const SCREENS = [
  { src: "/images/witi/nour/news_home.jpeg", label: "News & Activities" },
  { src: "/images/witi/nour/nour2.jpeg", label: "Dashboard · Light" },
  { src: "/images/witi/nour/nour1.jpeg", label: "Dashboard · Dark" },
  { src: "/images/witi/nour/nour3.jpeg", label: "Legal Library" },
  { src: "/images/witi/nour/nour6.jpeg", label: "Service Form" },
  { src: "/images/witi/nour/nour7.jpeg", label: "Service Details" },
  { src: "/images/witi/nour/nour8.jpeg", label: "GPS Proof Summary" },
  { src: "/images/witi/nour/dark_mode_settings.jpeg", label: "Settings · Dark" },
  { src: "/images/witi/nour/light_mode_settings.jpeg", label: "Settings · Light" },
];

export default function NourPage() {
  const revealRefs = useRef<HTMLElement[]>([]);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = useCallback((i: number) => setLightbox(i), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);
  const prev = useCallback(() => setLightbox((i) => (i === null ? null : (i - 1 + SCREENS.length) % SCREENS.length)), []);
  const next = useCallback(() => setLightbox((i) => (i === null ? null : (i + 1) % SCREENS.length)), []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.opacity = "1";
            (e.target as HTMLElement).style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.12 }
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
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    revealRefs.current.push(el);
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: N, color: "white", overflowX: "hidden" }}>

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "rgba(13,31,60,0.93)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(212,175,55,0.15)",
        padding: "14px 48px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{
            width: 38, height: 38, borderRadius: "50%",
            background: `linear-gradient(135deg, ${G} 0%, ${GD} 100%)`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 18, fontWeight: 900, color: N,
          }}>ن</div>
          <span style={{ fontWeight: 800, fontSize: 20 }}>NOUR</span>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", fontWeight: 400 }}>for Justice</span>
        </div>
        <Link href="/witi" style={{ color: "rgba(255,255,255,0.45)", fontSize: 13, textDecoration: "none" }}>
          ← WITI Hub
        </Link>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        minHeight: "100vh",
        background: `linear-gradient(135deg, ${N} 0%, #152847 55%, #1B3A60 100%)`,
        display: "flex", alignItems: "center",
        padding: "110px 48px 70px",
        position: "relative", overflow: "hidden",
      }}>
        {/* Gold glow */}
        <div style={{
          position: "absolute", top: "-20%", right: "-5%",
          width: 700, height: 700,
          background: "radial-gradient(circle, rgba(212,175,55,0.11) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        {/* Bottom glow */}
        <div style={{
          position: "absolute", bottom: "-10%", left: "20%",
          width: 500, height: 500,
          background: "radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", gap: 80, width: "100%", position: "relative", zIndex: 1 }}>

          {/* Text */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(212,175,55,0.12)", border: "1px solid rgba(212,175,55,0.3)",
              borderRadius: 30, padding: "6px 14px",
              fontSize: 12, color: G, fontWeight: 600, marginBottom: 28, letterSpacing: "0.5px",
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: G, display: "inline-block", animation: "pulse 2s infinite" }} />
              Live field testing · Moroccan Judicial Commissioners
            </div>

            <h1 style={{ fontSize: "clamp(38px, 5vw, 66px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 24 }}>
              The{" "}
              <span style={{
                background: `linear-gradient(135deg, ${G} 0%, #F0D060 100%)`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>institutional</span>
              <br />operations platform
              <br />for Justice.
            </h1>

            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.62)", lineHeight: 1.75, marginBottom: 44, maxWidth: 500 }}>
              NOUR digitalizes the complete field workflow of Moroccan judicial commissioners — from mission creation to GPS‑stamped photographic proof, with embedded legal library and council governance.
            </p>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 52 }}>
              <a href="#features" style={{
                background: `linear-gradient(135deg, ${G} 0%, ${GD} 100%)`,
                color: N, borderRadius: 12,
                padding: "14px 28px", fontSize: 15, fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 8px 28px rgba(212,175,55,0.35)",
              }}>Explore the App →</a>
              <a href="#partnership" style={{
                background: "rgba(255,255,255,0.07)", color: "white",
                border: "1px solid rgba(255,255,255,0.14)",
                borderRadius: 12, padding: "14px 28px", fontSize: 15, fontWeight: 600,
                textDecoration: "none",
              }}>Our Partnership</a>
            </div>

            <div style={{ display: "flex", gap: 44 }}>
              {[
                { n: "4", label: "Core modules" },
                { n: "81.03", label: "Law coverage" },
                { n: "100%", label: "Field-tested" },
              ].map((s) => (
                <div key={s.label}>
                  <div style={{ fontSize: 30, fontWeight: 800, color: G }}>{s.n}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Phone mockups */}
          <div style={{ flex: "0 0 460px", position: "relative", height: 520, display: "flex", justifyContent: "center" }}>
            {/* Back-left phone */}
            <div style={{
              position: "absolute", left: 0, top: 40,
              width: 195, height: 408,
              borderRadius: 28, overflow: "hidden",
              border: "6px solid rgba(212,175,55,0.25)",
              transform: "rotate(-7deg)",
              boxShadow: "0 24px 60px rgba(0,0,0,0.55)",
            }}>
              <Image src="/images/witi/nour/nour3.jpeg" alt="Legal Library" fill style={{ objectFit: "cover" }} />
            </div>
            {/* Center phone */}
            <div style={{
              position: "absolute", left: "50%", top: 0,
              transform: "translateX(-50%)",
              zIndex: 2,
              width: 220, height: 460,
              borderRadius: 34, overflow: "hidden",
              border: `6px solid ${G}`,
              boxShadow: `0 32px 80px rgba(0,0,0,0.65), 0 0 0 1px rgba(212,175,55,0.25)`,
            }}>
              <Image src="/images/witi/nour/nour2.jpeg" alt="Dashboard" fill style={{ objectFit: "cover" }} />
            </div>
            {/* Back-right phone */}
            <div style={{
              position: "absolute", right: 0, top: 50,
              width: 185, height: 390,
              borderRadius: 26, overflow: "hidden",
              border: "6px solid rgba(212,175,55,0.2)",
              transform: "rotate(7deg)",
              boxShadow: "0 20px 50px rgba(0,0,0,0.45)",
            }}>
              <Image src="/images/witi/nour/nour8.jpeg" alt="GPS Proof" fill style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" style={{ padding: "100px 48px", background: "white", color: N }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div ref={reveal} style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: G, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: 16 }}>Four Modules</div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 50px)", fontWeight: 800, color: N }}>
              Everything a bailiff needs.<br />In one app.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 28 }}>
            {[
              {
                icon: "📋",
                title: "Mission Dashboard",
                desc: "Start and track field operations. Monitor photo count, daily file activity and mission history in real time — in dark or light mode.",
              },
              {
                icon: "📚",
                title: "Legal Library",
                desc: "Full searchable access to Law 81.03, regulatory decrees and professional glossary. Offline‑ready for field work.",
              },
              {
                icon: "📍",
                title: "Service Process",
                desc: "Structured مسطرة التبليغ workflow: reference, type, parties, court and GPS location — all captured and validated before transmission.",
              },
              {
                icon: "🏛️",
                title: "Council & Directory",
                desc: "The regional council management bureau and a searchable bailiff directory with direct one-tap call access.",
              },
            ].map((f, i) => (
              <div
                key={i}
                ref={reveal}
                style={{
                  background: "#F8F9FA",
                  borderRadius: 20, padding: "28px 24px",
                  border: "1px solid #EAECEF",
                  borderTop: `3px solid ${G}`,
                }}
              >
                <div style={{ fontSize: 34, marginBottom: 18 }}>{f.icon}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10, color: N }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCREENSHOT GALLERY ── */}
      <section style={{ padding: "100px 48px", background: "#F0F4F8" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div ref={reveal} style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: G, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: 16 }}>App in Action</div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 50px)", fontWeight: 800, color: N }}>
              Real screens.<br />Real field operations.
            </h2>
            <p style={{ fontSize: 14, color: "#9CA3AF", marginTop: 12 }}>Click any screen to enlarge</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(155px, 1fr))", gap: 24, justifyItems: "center" }}>
            {SCREENS.map((s, i) => (
              <div
                key={i}
                ref={reveal}
                style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}
              >
                <div
                  onClick={() => openLightbox(i)}
                  style={{
                    width: 150, height: 316,
                    borderRadius: 22, overflow: "hidden",
                    border: "4px solid white",
                    boxShadow: "0 8px 28px rgba(0,0,0,0.14)",
                    position: "relative",
                    cursor: "zoom-in",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "scale(1.04)";
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 40px rgba(212,175,55,0.3)`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(0,0,0,0.14)";
                  }}
                >
                  <Image src={s.src} alt={s.label} fill style={{ objectFit: "cover" }} />
                  {/* Hover overlay */}
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "rgba(212,175,55,0.12)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    opacity: 0, transition: "opacity 0.2s",
                  }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0"; }}
                  >
                    <div style={{
                      width: 44, height: 44, borderRadius: "50%",
                      background: "rgba(255,255,255,0.9)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 20,
                    }}>🔍</div>
                  </div>
                </div>
                <span style={{ fontSize: 11, color: "#6B7280", fontWeight: 600, textAlign: "center" }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      {lightbox !== null && (
        <div
          onClick={closeLightbox}
          style={{
            position: "fixed", inset: 0, zIndex: 1000,
            background: "rgba(0,0,0,0.92)",
            display: "flex", alignItems: "center", justifyContent: "center",
            animation: "fadeIn 0.25s ease",
          }}
        >
          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            style={{
              position: "absolute", left: 24, top: "50%", transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "50%", width: 52, height: 52,
              color: "white", fontSize: 22, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = `rgba(212,175,55,0.3)`; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)"; }}
          >‹</button>

          {/* Image */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "min(380px, 90vw)",
              height: "min(780px, 85vh)",
              borderRadius: 28,
              overflow: "hidden",
              border: `4px solid ${G}`,
              boxShadow: `0 40px 100px rgba(0,0,0,0.8), 0 0 0 1px rgba(212,175,55,0.3)`,
              animation: "scaleIn 0.25s ease",
            }}
          >
            <Image src={SCREENS[lightbox].src} alt={SCREENS[lightbox].label} fill style={{ objectFit: "cover" }} />
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            style={{
              position: "absolute", right: 24, top: "50%", transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "50%", width: 52, height: 52,
              color: "white", fontSize: 22, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = `rgba(212,175,55,0.3)`; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)"; }}
          >›</button>

          {/* Label + counter */}
          <div style={{
            position: "absolute", bottom: 32,
            display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
          }}>
            <span style={{ color: "white", fontWeight: 700, fontSize: 15 }}>{SCREENS[lightbox].label}</span>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>{lightbox + 1} / {SCREENS.length}</span>
            <div style={{ display: "flex", gap: 6, marginTop: 4 }}>
              {SCREENS.map((_, i) => (
                <div
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
                  style={{
                    width: i === lightbox ? 20 : 6, height: 6,
                    borderRadius: 3, cursor: "pointer",
                    background: i === lightbox ? G : "rgba(255,255,255,0.3)",
                    transition: "all 0.2s",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Close */}
          <button
            onClick={closeLightbox}
            style={{
              position: "absolute", top: 20, right: 20,
              background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "50%", width: 44, height: 44,
              color: "white", fontSize: 20, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >✕</button>
        </div>
      )}

      {/* ── GPS PROOF HIGHLIGHT ── */}
      <section style={{ padding: "100px 48px", background: N }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", gap: 80, flexWrap: "wrap" }}>

          <div style={{ flex: 1, minWidth: 300 }} ref={reveal}>
            <div style={{ fontSize: 11, fontWeight: 700, color: G, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: 20 }}>Core Feature</div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 800, marginBottom: 24, lineHeight: 1.2 }}>
              GPS-stamped<br />
              <span style={{
                background: `linear-gradient(135deg, ${G} 0%, #F0D060 100%)`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>photographic proof.</span>
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.62)", lineHeight: 1.75, marginBottom: 36, maxWidth: 460 }}>
              Every photo captured in NOUR is automatically watermarked with the exact timestamp, GPS coordinates and city — creating an irrefutable field record attached to the service file before transmission.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                "Automatic GPS coordinate embedding",
                "Date & time watermark in Arabic",
                "City-level reverse geocoding",
                "One-tap review before sending",
              ].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: G, flexShrink: 0 }} />
                  <span style={{ color: "rgba(255,255,255,0.72)", fontSize: 15 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ flex: "0 0 auto" }} ref={reveal}>
            <div style={{
              width: 255, height: 528,
              borderRadius: 36, overflow: "hidden",
              border: `5px solid ${G}`,
              boxShadow: `0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(212,175,55,0.3)`,
              position: "relative",
            }}>
              <Image src="/images/witi/nour/nour8.jpeg" alt="GPS Proof Summary" fill style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── PARTNERSHIP ── */}
      <section id="partnership" style={{ padding: "100px 48px", background: "white" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>

          <div ref={reveal} style={{
            display: "inline-flex", alignItems: "center", gap: 20,
            background: "linear-gradient(135deg, rgba(212,175,55,0.07) 0%, rgba(212,175,55,0.02) 100%)",
            border: "2px solid rgba(212,175,55,0.35)",
            borderRadius: 24, padding: "36px 52px",
            marginBottom: 64, textAlign: "left",
          }}>
            <div style={{ fontSize: 52 }}>🤝</div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: G, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 8 }}>Official Partnership</div>
              <h3 style={{ fontSize: 22, fontWeight: 800, color: N, marginBottom: 6, lineHeight: 1.3 }}>
                National Council of Moroccan<br />Judicial Commissioners
              </h3>
              <p style={{ fontSize: 13, color: "#9CA3AF", fontFamily: "'Cairo', sans-serif" }}>المجلس الجهوي للمفوضين القضائيين</p>
            </div>
          </div>

          <h2 ref={reveal} style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, color: N, marginBottom: 24 }}>
            Built with the profession,<br />for the profession.
          </h2>
          <p ref={reveal} style={{ fontSize: 18, color: "#6B7280", lineHeight: 1.75, maxWidth: 600, margin: "0 auto 56px" }}>
            NOUR was co-developed following a national convention with the Moroccan Judicial Commissioners Council, ensuring the app reflects real field constraints and institutional compliance requirements.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 28, maxWidth: 720, margin: "0 auto" }}>
            {[
              { icon: "⚖️", title: "Institutionally validated", desc: "Co-designed with practising judicial commissioners" },
              { icon: "🏛️", title: "Law 81.03 aligned", desc: "Fully compliant with the profession's legal framework" },
              { icon: "🔒", title: "Sovereign data", desc: "No third-party data sharing or cloud dependency" },
            ].map((c) => (
              <div key={c.title} ref={reveal} style={{
                padding: "28px 22px", background: "#F8F9FA",
                borderRadius: 18, border: "1px solid #EAECEF",
                borderTop: `3px solid ${G}`,
              }}>
                <div style={{ fontSize: 30, marginBottom: 14 }}>{c.icon}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: N, marginBottom: 8 }}>{c.title}</div>
                <div style={{ fontSize: 13, color: "#9CA3AF", lineHeight: 1.55 }}>{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section style={{ padding: "72px 48px", background: "#F8F9FA" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <div ref={reveal} style={{ fontSize: 11, fontWeight: 700, color: G, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: 32 }}>Technical Stack</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            {["Flutter · Dart", "Riverpod (AsyncNotifier)", "Supabase RLS & Storage", "ML Kit Document OCR", "GPS Geocoding", "Dark / Light Mode"].map((t) => (
              <div key={t} style={{
                padding: "11px 22px", borderRadius: 30,
                background: "white", border: "1px solid #E5E7EB",
                fontSize: 13, fontWeight: 600, color: N,
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              }}>{t}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{
        padding: "100px 48px",
        background: `linear-gradient(135deg, ${N} 0%, #1B3A60 100%)`,
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div ref={reveal} style={{ fontSize: 56, marginBottom: 20, fontFamily: "'Cairo', sans-serif" }}>نور</div>
          <h2 ref={reveal} style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 800, marginBottom: 16 }}>
            Interested in NOUR?
          </h2>
          <p ref={reveal} style={{ fontSize: 17, color: "rgba(255,255,255,0.62)", lineHeight: 1.75, marginBottom: 44 }}>
            Currently in active field testing with real judicial commissioners. Contact us to discuss institutional deployment or request a demonstration.
          </p>
          <a
            href="mailto:contact@sanadidari.com"
            style={{
              display: "inline-block",
              background: `linear-gradient(135deg, ${G} 0%, ${GD} 100%)`,
              color: N, borderRadius: 14,
              padding: "16px 36px", fontSize: 16, fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 8px 32px rgba(212,175,55,0.4)",
            }}
          >
            Contact Sanadidari →
          </a>
          <div style={{ marginTop: 20, fontSize: 13, color: "rgba(255,255,255,0.28)" }}>contact@sanadidari.com</div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        padding: "28px 48px",
        background: "#060E1C",
        display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16,
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 700, fontSize: 16 }}>
          <div style={{ width: 30, height: 30, borderRadius: "50%", background: G, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, color: N, fontWeight: 900 }}>ن</div>
          NOUR
        </div>
        <p style={{ fontSize: 12, color: "rgba(255,255,255,0.28)" }}>© 2026 Sanadidari SARL — Casablanca, Morocco</p>
        <Link href="/witi" style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>← WITI Hub</Link>
      </footer>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.88); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
