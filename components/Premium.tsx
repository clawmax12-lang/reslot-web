"use client";
import { motion } from "framer-motion";

const features = [
  "Tidig tillgång till nya bord",
  "Anpassade aviseringar i realtid",
  "Fler aktiva bokningar parallellt",
  "Dubbla tokens på varje överlåtelse",
  "Prioriterad kö vid populära tillfällen",
];

const notifications = [
  { restaurant: "Sushi Sho", time: "Ikväll 19:30", persons: "2 pers", new: true },
  { restaurant: "Taverna Brillo", time: "Imorgon 20:00", persons: "4 pers", new: false },
  { restaurant: "Ekstedt", time: "Fredag 19:00", persons: "2 pers", new: false },
];

export default function Premium() {
  return (
    <section
      id="premium"
      style={{
        padding: "7rem 0",
        backgroundColor: "var(--bg-primary)",
      }}
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
            gap: "4rem",
            alignItems: "center",
          }}
          className="md:grid-cols-2"
        >
          {/* Left */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                fontSize: "clamp(2.25rem,4vw,3.25rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "var(--text-primary)",
                marginBottom: "2.5rem",
              }}
            >
              Gör mer med
              <br />
              Reslot Premium
            </motion.h2>

            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "1.125rem",
                marginBottom: "2.5rem",
              }}
            >
              {features.map((f, i) => (
                <motion.li
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <span style={{ color: "var(--premium-gold)", flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M4 10l4 4 8-8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span
                    style={{ fontSize: "1.0625rem", color: "var(--text-primary)" }}
                  >
                    {f}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              href="#download"
              style={{
                display: "inline-block",
                fontSize: "0.9375rem",
                fontWeight: 500,
                backgroundColor: "var(--premium-gold)",
                color: "white",
                borderRadius: "999px",
                padding: "12px 32px",
                textDecoration: "none",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#B8862E")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--premium-gold)")
              }
            >
              Prova Premium
            </motion.a>
          </div>

          {/* Right — floating phone */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
            className="md:justify-end"
          >
            {/* Gold glow */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle at center, rgba(196,153,59,0.08) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />

            <div
              className="float-animate"
              style={{ position: "relative", width: "clamp(220px,22vw,290px)" }}
            >
              <div
                style={{
                  position: "relative",
                  borderRadius: "3rem",
                  border: "8px solid #1A1A1A",
                  overflow: "hidden",
                  backgroundColor: "#1A1A1A",
                  boxShadow: "0 40px 80px rgba(0,0,0,0.2)",
                  aspectRatio: "9/19.5",
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
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "var(--bg-primary)",
                    padding: "2.5rem 1.25rem 1.25rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  <div style={{ marginBottom: "0.5rem" }}>
                    <p
                      style={{
                        fontFamily: "var(--font-instrument-serif), serif",
                        fontSize: "1.125rem",
                        color: "var(--text-primary)",
                      }}
                    >
                      Aviseringar
                    </p>
                    <p style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>
                      3 nya bord matchade dina preferenser
                    </p>
                  </div>
                  {notifications.map((n, i) => (
                    <div
                      key={i}
                      style={{
                        borderRadius: "12px",
                        padding: "12px",
                        border: "1px solid var(--border)",
                        backgroundColor: n.new ? "var(--bg-secondary)" : "white",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginBottom: "4px",
                        }}
                      >
                        <p
                          style={{
                            fontSize: "0.875rem",
                            fontWeight: 500,
                            color: "var(--text-primary)",
                          }}
                        >
                          {n.restaurant}
                        </p>
                        <span
                          style={{
                            fontSize: "0.65rem",
                            fontWeight: 600,
                            backgroundColor: "var(--premium-gold)",
                            color: "white",
                            borderRadius: "999px",
                            padding: "2px 8px",
                          }}
                        >
                          Premium
                        </span>
                      </div>
                      <p style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>
                        {n.time} · {n.persons}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
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
      </div>
    </section>
  );
}
