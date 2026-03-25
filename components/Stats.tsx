"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const stats = [
  { value: 2400, suffix: "+", label: "bord delade" },
  { value: 50, suffix: "+", label: "restauranger" },
  { value: 98, suffix: "%", label: "nöjda" },
];

function AnimatedNumber({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const duration = 900;
    const steps = 60;
    const increment = value / steps;
    const interval = duration / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <>
      {count.toLocaleString("sv-SE")}
      {suffix}
    </>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      style={{ padding: "6rem 0", backgroundColor: "var(--bg-primary)" }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
          }}
          className="md:grid-cols-3 md:gap-0"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                textAlign: "center",
                padding: "0 2rem",
                borderRight:
                  i < stats.length - 1
                    ? "1px solid var(--border)"
                    : undefined,
              }}
              className={i < stats.length - 1 ? "md:border-r" : ""}
            >
              <p
                style={{
                  fontFamily: "var(--font-instrument-serif), serif",
                  fontSize: "clamp(3.5rem,6vw,5rem)",
                  letterSpacing: "-0.02em",
                  color: "var(--text-primary)",
                  lineHeight: 1,
                  marginBottom: "0.75rem",
                }}
              >
                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  inView={inView}
                />
              </p>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "var(--text-secondary)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontWeight: 500,
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
