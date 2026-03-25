"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Överlåt",
    description:
      "Kan du inte gå? Lägg upp din bokning på 30 sekunder och rädda din deposition. Någon annan får en grym kväll.",
    accent: "#D4552A",
  },
  {
    number: "02",
    title: "Knip",
    description:
      "Bläddra bland bord som precis blivit lediga. Se ett du gillar? Ett tryck. Bordet är ditt.",
    accent: "#2D7A4F",
  },
  {
    number: "03",
    title: "Tjäna",
    description:
      "Varje bokning du delar ger dig tokens. Samla ihop dem och lås upp fördelar, tidig tillgång och mer.",
    accent: "#C4993B",
  },
];

function PhoneFrame({ step }: { step: (typeof steps)[0] }) {
  return (
    <div
      style={{
        position: "relative",
        borderRadius: "3rem",
        border: "8px solid #1A1A1A",
        overflow: "hidden",
        backgroundColor: "#1A1A1A",
        boxShadow: "0 40px 80px rgba(0,0,0,0.2)",
        aspectRatio: "9/19.5",
        width: "100%",
      }}
    >
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
      <AnimatePresence mode="wait">
        <motion.div
          key={step.number}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.35 }}
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(160deg, ${step.accent}18 0%, var(--bg-primary) 60%)`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
          }}
        >
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "20px",
              backgroundColor: step.accent,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1.25rem",
              boxShadow: `0 8px 24px ${step.accent}40`,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                color: "white",
                fontSize: "2rem",
              }}
            >
              {step.number}
            </span>
          </div>
          <p
            style={{
              fontFamily: "var(--font-instrument-serif), serif",
              fontSize: "1.75rem",
              color: "var(--text-primary)",
              textAlign: "center",
              marginBottom: "0.75rem",
            }}
          >
            {step.title}
          </p>
          <p
            style={{
              fontSize: "0.875rem",
              color: "var(--text-secondary)",
              textAlign: "center",
              lineHeight: 1.6,
            }}
          >
            {step.description}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function HowItWorks() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) return;

    let ctx: { revert: () => void } | undefined;

    const init = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: wrapperRef.current!,
          start: "top top",
          end: "bottom bottom",
          pin: "#how-it-works-sticky",
          scrub: true,
          onUpdate: (self) => {
            const raw = self.progress * 3;
            const step = Math.min(2, Math.floor(raw));
            setActiveStep(step);
            setProgress(self.progress);
          },
        });
      });
    };

    init();
    return () => ctx?.revert();
  }, [isMounted]);

  return (
    <section
      id="how-it-works"
      ref={wrapperRef}
      style={{ height: "400vh", backgroundColor: "var(--bg-secondary)" }}
    >
      <div
        id="how-it-works-sticky"
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          backgroundColor: "var(--bg-secondary)",
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
          {/* Desktop */}
          <div
            className="hidden md:grid"
            style={{
              gridTemplateColumns: "1fr 1fr",
              gap: "5rem",
              alignItems: "center",
            }}
          >
            {/* Left — text */}
            <div style={{ position: "relative" }}>
              <span
                style={{
                  position: "absolute",
                  top: "-3rem",
                  left: "-1rem",
                  fontFamily: "var(--font-instrument-serif), serif",
                  fontSize: "10rem",
                  color: "var(--text-primary)",
                  opacity: 0.04,
                  lineHeight: 1,
                  pointerEvents: "none",
                  userSelect: "none",
                }}
              >
                {steps[activeStep].number}
              </span>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.35 }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-jetbrains-mono), monospace",
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      marginBottom: "1rem",
                    }}
                  >
                    {steps[activeStep].number}
                  </p>
                  <h2
                    style={{
                      fontFamily: "var(--font-instrument-serif), serif",
                      fontSize: "clamp(3rem,5vw,4.5rem)",
                      lineHeight: 1.05,
                      letterSpacing: "-0.02em",
                      color: "var(--text-primary)",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {steps[activeStep].title}
                  </h2>
                  <p
                    style={{
                      fontSize: "1.125rem",
                      color: "var(--text-secondary)",
                      maxWidth: "38ch",
                      lineHeight: 1.65,
                    }}
                  >
                    {steps[activeStep].description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Progress */}
              <div
                style={{
                  marginTop: "3rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.5rem",
                }}
              >
                <div style={{ display: "flex", gap: "8px" }}>
                  {steps.map((_, i) => (
                    <div
                      key={i}
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor:
                          i === activeStep ? "var(--accent)" : "var(--border)",
                        transform: i === activeStep ? "scale(1.4)" : "scale(1)",
                        transition: "all 0.3s",
                        cursor: "pointer",
                      }}
                    />
                  ))}
                </div>
                <div
                  style={{
                    flex: 1,
                    height: "1px",
                    backgroundColor: "var(--border)",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      height: "100%",
                      backgroundColor: "var(--accent)",
                      width: `${progress * 100}%`,
                      transition: "width 0.05s linear",
                    }}
                  />
                </div>
                <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                  Steg {activeStep + 1} av {steps.length}
                </span>
              </div>
            </div>

            {/* Right — phone */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ position: "relative", width: "clamp(220px,22vw,300px)" }}>
                <PhoneFrame step={steps[activeStep]} />
                <div
                  style={{
                    position: "absolute",
                    bottom: "-2rem",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "55%",
                    height: "36px",
                    background: "rgba(0,0,0,0.15)",
                    filter: "blur(18px)",
                    borderRadius: "999px",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Mobile — horizontal scroll */}
          <div className="md:hidden">
            <h2
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                fontSize: "2.5rem",
                color: "var(--text-primary)",
                marginBottom: "2rem",
              }}
            >
              Så funkar det
            </h2>
            <div
              className="hide-scrollbar"
              style={{
                display: "flex",
                gap: "1.25rem",
                overflowX: "auto",
                paddingBottom: "1rem",
                scrollSnapType: "x mandatory",
              }}
            >
              {steps.map((step, i) => (
                <div
                  key={i}
                  style={{
                    flexShrink: 0,
                    width: "78vw",
                    backgroundColor: "var(--bg-primary)",
                    borderRadius: "1.5rem",
                    padding: "2rem",
                    scrollSnapAlign: "start",
                    border: "1px solid var(--border)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-jetbrains-mono), monospace",
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {step.number}
                  </p>
                  <h3
                    style={{
                      fontFamily: "var(--font-instrument-serif), serif",
                      fontSize: "2.25rem",
                      color: "var(--text-primary)",
                      marginBottom: "1rem",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.65 }}>
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
