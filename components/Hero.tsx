"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

function AppStoreBadge() {
  return (
    <svg width="148" height="44" viewBox="0 0 148 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Ladda ner på App Store">
      <rect width="148" height="44" rx="8" fill="#1A1A1A"/>
      <path d="M20.5 22c0-3.2 1.8-6 4.6-7.4-1.1-1.4-2.8-2.3-4.7-2.3-2 0-3.8 1.2-4.8 1.2-1.1 0-2.7-1.2-4.4-1.2-2.8 0-5.2 2.9-5.2 6.5 0 3.3 1.1 6.3 2.8 8.5 1.4 1.9 2.6 3.2 4.2 3.2 1.6 0 2.4-1 4.2-1 1.8 0 2.6 1 4.4 1 1.7 0 2.9-1.4 4.3-3.2.5-.7 1-1.8 1.5-2.9-2.4-.9-4.1-3.3-4.1-6.4zm-.9-12.3c.9-1.4 1.4-2.8.9-3.7-1.2.3-2.8 1.2-3.7 2.5-.9 1.1-1.4 2.5-1 3.7 1.2 0 2.8-.9 3.8-2.5z" fill="white"/>
      <text x="36" y="18" fill="white" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Ladda ned på</text>
      <text x="36" y="31" fill="white" fontSize="15" fontFamily="system-ui, sans-serif" fontWeight="600">App Store</text>
    </svg>
  );
}

function PlayStoreBadge() {
  return (
    <svg width="148" height="44" viewBox="0 0 148 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Hämta på Google Play">
      <rect width="148" height="44" rx="8" fill="#1A1A1A"/>
      <path d="M7 12.2L21.5 22 7 31.8V12.2z" fill="white" opacity="0.2"/>
      <path d="M7 12.2L21.5 22l-7.2 7.2L7 12.2z" fill="#34A853"/>
      <path d="M7 12.2l7.3 3.1L21.5 22 7 12.2z" fill="#4285F4"/>
      <path d="M21.5 22l-7.2 7.2 13.8-7.7L21.5 22z" fill="#FBBC04"/>
      <path d="M21.5 22l6.6-.5L14.3 15.3 21.5 22z" fill="#EA4335"/>
      <text x="36" y="18" fill="white" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Hämta på</text>
      <text x="36" y="31" fill="white" fontSize="15" fontFamily="system-ui, sans-serif" fontWeight="600">Google Play</text>
    </svg>
  );
}

export default function Hero() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoDesktopRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) return;

    let ctx: { revert: () => void } | undefined;

    const init = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      if (!wrapperRef.current || !videoDesktopRef.current) return;
      const video = videoDesktopRef.current;

      ctx = gsap.context(() => {
        const setup = () => {
          ScrollTrigger.create({
            trigger: wrapperRef.current!,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            onUpdate: (self) => {
              if (video.duration) {
                video.currentTime = self.progress * video.duration;
              }
            },
          });
        };

        if (video.readyState >= 1) {
          setup();
        } else {
          video.addEventListener("loadedmetadata", setup, { once: true });
        }
      });
    };

    init();
    return () => ctx?.revert();
  }, []);

  const headline = ["Stadens", "bästa", "bord", "hittar", "dig."];

  return (
    <div ref={wrapperRef} style={{ height: "300vh" }}>
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          backgroundColor: "var(--bg-primary)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3rem",
              alignItems: "center",
            }}
            className="md:grid-cols-2"
          >
            {/* Left */}
            <div style={{ order: 2 }} className="md:order-1">
              <h1
                style={{
                  fontFamily: "var(--font-instrument-serif), serif",
                  fontSize: "clamp(2.5rem, 5.5vw, 5rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                  color: "var(--text-primary)",
                  marginBottom: "1.5rem",
                }}
              >
                {headline.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.1 + i * 0.12,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    style={{ display: "inline-block", marginRight: "0.25em" }}
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                style={{
                  fontSize: "1.125rem",
                  color: "var(--text-secondary)",
                  maxWidth: "42ch",
                  lineHeight: 1.65,
                  marginBottom: "2rem",
                }}
              >
                Knip eftertraktade bord som andra inte kan gå på. Eller överlåt ditt och tjäna tokens.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}
              >
                <a href="#download"><AppStoreBadge /></a>
                <a href="#download"><PlayStoreBadge /></a>
              </motion.div>
            </div>

            {/* Right — iPhone */}
            <div
              style={{
                order: 1,
                display: "flex",
                justifyContent: "center",
              }}
              className="md:order-2 md:justify-end"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3 }}
                style={{ position: "relative", width: "clamp(220px,25vw,320px)" }}
              >
                {/* iPhone frame */}
                <div
                  style={{
                    position: "relative",
                    borderRadius: "3rem",
                    border: "8px solid #1A1A1A",
                    overflow: "hidden",
                    backgroundColor: "#1A1A1A",
                    boxShadow: "0 40px 80px rgba(0,0,0,0.25), 0 0 0 1px rgba(0,0,0,0.05)",
                    aspectRatio: "9/19.5",
                  }}
                >
                  {/* Notch */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "80px",
                      height: "24px",
                      backgroundColor: "#1A1A1A",
                      borderBottomLeftRadius: "14px",
                      borderBottomRightRadius: "14px",
                      zIndex: 10,
                    }}
                  />

                  {/* Desktop: scroll-driven */}
                  <video
                    ref={videoDesktopRef}
                    className="hidden md:block"
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    muted
                    playsInline
                    preload="auto"
                  >
                    <source src="/video/hero-phone.mp4" type="video/mp4" />
                  </video>

                  {/* Mobile: autoplay */}
                  <video
                    className="md:hidden"
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    muted
                    autoPlay
                    playsInline
                    loop
                  >
                    <source src="/video/hero-phone.mp4" type="video/mp4" />
                  </video>

                  {/* Fallback */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(160deg, #2A2020 0%, #1A1A1A 50%, #0A0808 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 0,
                    }}
                  >
                    <div style={{ textAlign: "center", padding: "1.5rem" }}>
                      <div
                        style={{
                          width: "64px",
                          height: "64px",
                          borderRadius: "16px",
                          backgroundColor: "var(--accent)",
                          margin: "0 auto 1rem",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "var(--font-instrument-serif), serif",
                            color: "white",
                            fontSize: "1.75rem",
                          }}
                        >
                          R
                        </span>
                      </div>
                      <p
                        style={{
                          fontFamily: "var(--font-instrument-serif), serif",
                          color: "white",
                          fontSize: "1.25rem",
                        }}
                      >
                        Reslot
                      </p>
                      <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.875rem", marginTop: "0.25rem" }}>
                        Knip ditt bord ikväll
                      </p>
                    </div>
                  </div>
                </div>

                {/* Shadow */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "-2rem",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "60%",
                    height: "40px",
                    background: "rgba(0,0,0,0.2)",
                    filter: "blur(20px)",
                    borderRadius: "999px",
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
