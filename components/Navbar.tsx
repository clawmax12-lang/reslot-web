"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Så funkar det", href: "#how-it-works" },
    { label: "Premium", href: "#premium" },
    { label: "Om oss", href: "#about" },
  ];

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "all 0.3s ease",
          padding: scrolled ? "12px 0" : "20px 0",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          backgroundColor: scrolled ? "rgba(250,250,247,0.85)" : "transparent",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-instrument-serif), serif",
              fontSize: "1.25rem",
              color: "var(--text-primary)",
              textDecoration: "none",
              letterSpacing: "-0.01em",
            }}
          >
            Reslot
          </Link>

          {/* Desktop nav */}
          <nav
            style={{ display: "flex", alignItems: "center", gap: "2rem" }}
            className="hidden md:flex"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--text-primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-secondary)")
                }
              >
                {link.label}
              </a>
            ))}
            <a
              href="#download"
              style={{
                fontSize: "0.875rem",
                fontWeight: 500,
                backgroundColor: "var(--accent)",
                color: "white",
                borderRadius: "999px",
                padding: "8px 24px",
                textDecoration: "none",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--accent-hover)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--accent)")
              }
            >
              Ladda ner
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Öppna meny"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              padding: "8px",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            <span
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                backgroundColor: "var(--text-primary)",
                transition: "all 0.3s",
                transform: mobileOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                backgroundColor: "var(--text-primary)",
                transition: "all 0.3s",
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                backgroundColor: "var(--text-primary)",
                transition: "all 0.3s",
                transform: mobileOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
              }}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 40,
              backgroundColor: "var(--bg-primary)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "2.5rem",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: "var(--font-instrument-serif), serif",
                  fontSize: "2.5rem",
                  color: "var(--text-primary)",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#download"
              onClick={() => setMobileOpen(false)}
              style={{
                marginTop: "1rem",
                fontSize: "1.125rem",
                fontWeight: 500,
                backgroundColor: "var(--accent)",
                color: "white",
                borderRadius: "999px",
                padding: "12px 32px",
                textDecoration: "none",
              }}
            >
              Ladda ner
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
