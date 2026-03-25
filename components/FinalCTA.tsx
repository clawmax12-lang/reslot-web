"use client";
import { motion } from "framer-motion";

function AppStoreBadge() {
  return (
    <svg width="158" height="48" viewBox="0 0 158 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="158" height="48" rx="9" fill="white" fillOpacity="0.08" stroke="white" strokeOpacity="0.2"/>
      <path d="M22 24c0-3.4 1.9-6.4 4.9-7.9-1.2-1.5-3-2.5-5-2.5-2.1 0-4 1.3-5.1 1.3-1.1 0-2.9-1.3-4.7-1.3C9 13.6 6.3 16.7 6.3 20.6c0 3.5 1.2 6.7 3 9 1.5 2 2.8 3.4 4.5 3.4 1.7 0 2.5-1 4.4-1s2.8 1 4.6 1c1.8 0 3.1-1.5 4.6-3.4.5-.8 1.1-1.9 1.6-3.1-2.5-1-4.4-3.5-4.4-6.8l.4.3zm-1-13.1c1-1.5 1.5-3 1-4-1.3.3-3 1.3-4 2.7-.9 1.2-1.5 2.7-1 4 1.3 0 3-1 4-2.7z" fill="white"/>
      <text x="40" y="21" fill="white" fontSize="10" fontFamily="system-ui, sans-serif" opacity="0.65">Ladda ned på</text>
      <text x="40" y="35" fill="white" fontSize="16" fontFamily="system-ui, sans-serif" fontWeight="600">App Store</text>
    </svg>
  );
}

function PlayStoreBadge() {
  return (
    <svg width="158" height="48" viewBox="0 0 158 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="158" height="48" rx="9" fill="white" fillOpacity="0.08" stroke="white" strokeOpacity="0.2"/>
      <path d="M7.5 13.5L23 24 7.5 34.5V13.5z" fill="white" opacity="0.15"/>
      <path d="M7.5 13.5L23 24l-7.8 7.8L7.5 13.5z" fill="#34A853"/>
      <path d="M7.5 13.5l7.8 3.3L23 24 7.5 13.5z" fill="#4285F4"/>
      <path d="M23 24l-7.8 7.8 14.9-8.3L23 24z" fill="#FBBC04"/>
      <path d="M23 24l7.1-.5-7.8-7.8L23 24z" fill="#EA4335"/>
      <text x="40" y="21" fill="white" fontSize="10" fontFamily="system-ui, sans-serif" opacity="0.65">Hämta på</text>
      <text x="40" y="35" fill="white" fontSize="16" fontFamily="system-ui, sans-serif" fontWeight="600">Google Play</text>
    </svg>
  );
}

const words = ["Knip", "ditt", "bord", "ikväll."];

export default function FinalCTA() {
  return (
    <section
      id="download"
      style={{
        padding: "8rem 0",
        backgroundColor: "var(--dark-section)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-instrument-serif), serif",
            fontSize: "clamp(2.5rem,6vw,5.5rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "white",
            marginBottom: "3rem",
          }}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              style={{ display: "inline-block", marginRight: "0.25em" }}
            >
              {word}
            </motion.span>
          ))}
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <a href="#" aria-label="Ladda ner på App Store">
            <AppStoreBadge />
          </a>
          <a href="#" aria-label="Hämta på Google Play">
            <PlayStoreBadge />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
