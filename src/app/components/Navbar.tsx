import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronRight } from "lucide-react";
import { useBreakpoint } from "../hooks/useBreakpoint";
import studioHLogo from "@/imports/TheStudioHLogo_for_circle.png";

const RED = "#bc1823";
const SILK = "#ffffff";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const { isDesktop } = useBreakpoint();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  useEffect(() => {
    if (!menuOpen) return;
    const fn = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, [menuOpen]);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? "rgba(0,0,0,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(188,24,35,0.15)" : "none",
        transition: "all 0.4s ease",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px", padding: "0 1.5rem" }}>

        {/* Logo */}
        <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
          <img src={studioHLogo} alt="The Studio H" style={{ width: "38px", height: "38px", borderRadius: "50%", objectFit: "cover", border: `1px solid rgba(188,24,35,0.35)` }} />
          <div>
            <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.25rem", color: SILK, letterSpacing: "0.04em", lineHeight: 1 }}>
              The Studio <span style={{ color: RED, fontFamily: "var(--font-logo-h)", fontWeight: 800 }}>H</span>
            </div>
            <div style={{ fontSize: "0.52rem", color: RED, letterSpacing: "0.22em", textTransform: "uppercase" }}>Photography</div>
          </div>
        </Link>

        {isDesktop ? (
          /* Desktop nav */
          <div style={{ display: "flex", alignItems: "center", gap: "2.25rem" }}>
            {navLinks.map((link) => {
              const active = location.pathname === link.to;
              return (
                <Link key={link.to} to={link.to} style={{
                  color: active ? RED : "rgba(255,255,255,0.65)",
                  textDecoration: "none",
                  fontSize: "0.76rem",
                  letterSpacing: "0.09em",
                  textTransform: "uppercase",
                  fontWeight: active ? 700 : 500,
                  borderBottom: active ? `1px solid ${RED}` : "1px solid transparent",
                  paddingBottom: "2px",
                  transition: "color 0.25s",
                  whiteSpace: "nowrap",
                }}
                  onMouseEnter={(e) => { if (!active) (e.target as HTMLElement).style.color = SILK; }}
                  onMouseLeave={(e) => { if (!active) (e.target as HTMLElement).style.color = "rgba(255,255,255,0.65)"; }}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link to="/contact" style={{
              background: `linear-gradient(135deg, ${RED}, #8B0010)`,
              color: "#fff", padding: "0.55rem 1.25rem",
              borderRadius: "2px", textDecoration: "none",
              fontSize: "0.72rem", fontWeight: 700,
              letterSpacing: "0.1em", textTransform: "uppercase", whiteSpace: "nowrap",
            }}>
              Book Now
            </Link>
          </div>
        ) : (
          /* Mobile hamburger + dropdown */
          <div ref={menuRef} style={{ position: "relative" }}>
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Open menu"
              style={{
                background: menuOpen ? "rgba(188,24,35,0.18)" : "rgba(255,255,255,0.07)",
                border: `1px solid ${menuOpen ? RED : "rgba(255,255,255,0.12)"}`,
                borderRadius: "4px", cursor: "pointer", color: SILK,
                padding: "0.5rem", display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.2s",
              }}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -6 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.93, y: -6 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  style={{
                    position: "absolute", top: "calc(100% + 10px)", right: 0,
                    width: "220px",
                    background: "rgba(0,0,0,0.99)",
                    backdropFilter: "blur(24px)",
                    border: "1px solid rgba(188,24,35,0.28)",
                    borderRadius: "4px", overflow: "hidden",
                    boxShadow: "0 24px 64px rgba(0,0,0,0.8)",
                    zIndex: 1001,
                  }}
                >
                  <div style={{ padding: "0.4rem 0" }}>
                    {navLinks.map((link, i) => {
                      const active = location.pathname === link.to;
                      return (
                        <motion.div
                          key={link.to}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.04 }}
                        >
                          <Link to={link.to} style={{
                            display: "flex", alignItems: "center", justifyContent: "space-between",
                            padding: "0.8rem 1.25rem",
                            textDecoration: "none",
                            fontSize: "0.85rem", letterSpacing: "0.07em", textTransform: "uppercase",
                            fontWeight: active ? 700 : 400,
                            color: active ? RED : "rgba(255,255,255,0.75)",
                            borderLeft: `2px solid ${active ? RED : "transparent"}`,
                            background: active ? "rgba(188,24,35,0.1)" : "transparent",
                          }}>
                            {link.label}
                            {active && <ChevronRight size={13} color={RED} />}
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                  <div style={{ height: "1px", background: "rgba(188,24,35,0.18)", margin: "0 1rem" }} />
                  <div style={{ padding: "0.75rem 1rem 1rem" }}>
                    <Link to="/contact" style={{
                      display: "flex", alignItems: "center", justifyContent: "center",
                      padding: "0.78rem",
                      background: `linear-gradient(135deg, ${RED}, #8B0010)`,
                      textDecoration: "none", color: "#fff",
                      fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
                    }}>
                      Book a Session
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </motion.nav>
  );
}
