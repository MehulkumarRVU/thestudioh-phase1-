import { useState } from "react";
import { Link } from "react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Star, Play, ChevronDown, Award, Users, Camera, Image } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const RED = "#bc1823";
const OBSIDIAN = "#000000";
const CHARCOAL = "#000000";
const SILK = "#ffffff";
const WA = "919036786971";

const heroImages = [
  "https://images.unsplash.com/photo-1617724975854-70b5d0cedb0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
  "https://images.unsplash.com/photo-1519741196428-6a2175fa2557?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
  "https://images.unsplash.com/photo-1600270237614-d20aef1c8b14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
];

const portfolioPreview = [
  { url: "https://images.unsplash.com/photo-1617724975854-70b5d0cedb0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", category: "Wedding" },
  { url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", category: "Fashion" },
  { url: "https://images.unsplash.com/photo-1622277583249-4c1fad490804?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", category: "Pre-Wedding" },
  { url: "https://images.unsplash.com/photo-1537633468298-d86f0c2d4173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", category: "Wedding" },
  { url: "https://images.unsplash.com/photo-1633381521050-26bb467d9d5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", category: "Fashion" },
  { url: "https://images.unsplash.com/photo-1531058020387-3be344556be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", category: "Corporate" },
];

const testimonials = [
  { name: "Priya & Arjun", event: "Wedding – ITC Windsor, Bangalore", rating: 5, text: "Studio H captured our wedding in a way that felt like a Bollywood film. Every frame was pure magic. We still get compliments from guests.", img: "https://images.unsplash.com/photo-1519741196428-6a2175fa2557?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" },
  { name: "Meghna Sharma", event: "Fashion Portfolio Shoot", rating: 5, text: "The team understood my vision perfectly. The lighting, the composition — absolutely magazine-worthy.", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" },
  { name: "TechSummit India", event: "Corporate Conference", rating: 5, text: "800+ edited photos within 48 hours. Professional, punctual, exceptional quality. Will book again.", img: "https://images.unsplash.com/photo-1531058020387-3be344556be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" },
];

const stats = [
  { value: "500+", label: "Weddings Captured", icon: Camera },
  { value: "2000+", label: "Happy Clients", icon: Users },
  { value: "15+", label: "Awards Won", icon: Award },
  { value: "50K+", label: "Photos Delivered", icon: Image },
];

export default function HomePage() {
  const [currentHero, setCurrentHero] = useState(0);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  return (
    <div style={{ background: OBSIDIAN, color: SILK, minHeight: "100vh" }}>

      {/* ── HERO ── */}
      <section style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
        <motion.div style={{ y: heroY, position: "absolute", inset: 0 }}>
          <ImageWithFallback
            src={heroImages[currentHero]}
            alt="Studio H cinematic hero"
            style={{ width: "100%", height: "110%", objectFit: "cover", filter: "brightness(0.32)" }}
          />
        </motion.div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(5,5,5,0.2) 0%, transparent 40%, rgba(5,5,5,0.85) 100%)" }} />
        <div style={{ position: "absolute", top: "80px", left: "50%", transform: "translateX(-50%)", width: "1px", height: "100px", background: `linear-gradient(to bottom, transparent, ${RED})` }} />

        <motion.div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 1.5rem", opacity: heroOpacity }}>
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            style={{ fontSize: "0.68rem", letterSpacing: "0.4em", color: RED, textTransform: "uppercase", marginBottom: "1.5rem" }}>
            Luxury Photography Studio · Bangalore
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}
            style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.8rem, 8vw, 7rem)", lineHeight: 1.05, color: SILK, marginBottom: "1.5rem", maxWidth: "900px" }}>
            We Frame <span style={{ color: RED, fontStyle: "italic" }}>Moments</span><br />That Last Forever
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
            style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.05rem", maxWidth: "520px", lineHeight: 1.85, marginBottom: "2.5rem" }}>
            Cinematic wedding films. Elegant portraits. Stories told with light, shadow, and soul.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1 }}
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            <a href={`https://wa.me/${WA}?text=Hi%20Studio%20H!`} target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: `linear-gradient(135deg, ${RED}, #8B0010)`, color: "#fff", padding: "1rem 2.25rem", textDecoration: "none", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              WhatsApp Us <ArrowRight size={15} />
            </a>
            <Link to="/portfolio"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: `1px solid ${RED}`, color: RED, padding: "1rem 2.25rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              <Play size={13} fill={RED} /> View Work
            </Link>
          </motion.div>

          {/* Image indicators */}
          <div style={{ position: "absolute", bottom: "4rem", display: "flex", gap: "8px" }}>
            {heroImages.map((_, i) => (
              <button key={i} onClick={() => setCurrentHero(i)}
                style={{ width: i === currentHero ? "32px" : "8px", height: "3px", background: i === currentHero ? RED : "rgba(255,255,255,0.25)", border: "none", cursor: "pointer", borderRadius: "2px", transition: "all 0.4s" }} />
            ))}
          </div>
        </motion.div>

        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}
          style={{ position: "absolute", bottom: "1.5rem", left: "50%", transform: "translateX(-50%)", color: "rgba(255,255,255,0.35)" }}>
          <ChevronDown size={20} />
        </motion.div>
      </section>

      {/* ── STATS BAND ── */}
      <section style={{ background: CHARCOAL, borderTop: "1px solid rgba(188,24,35,0.12)", borderBottom: "1px solid rgba(188,24,35,0.12)", padding: "2.75rem 2rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "2rem" }}>
          {stats.map(({ value, label, icon: Icon }, i) => (
            <motion.div key={label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} style={{ textAlign: "center" }}>
              <Icon size={22} color={RED} style={{ margin: "0 auto 0.6rem" }} />
              <div style={{ fontFamily: "var(--font-heading)", fontSize: "2.25rem", color: RED, lineHeight: 1 }}>{value}</div>
              <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "0.4rem" }}>{label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── ABOUT PREVIEW ── */}
      <section style={{ padding: "6rem 2rem", maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: "4rem", alignItems: "center" }}>
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ position: "relative" }}>
            <ImageWithFallback src="https://images.unsplash.com/photo-1519741196428-6a2175fa2557?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" alt="Studio H photographer" style={{ width: "100%", height: "500px", objectFit: "cover" }} />
            <div style={{ position: "absolute", bottom: "1.5rem", right: "-1.5rem", background: CHARCOAL, border: "1px solid rgba(188,24,35,0.25)", padding: "1.25rem", width: "160px" }}>
              <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.8rem", color: RED }}>10+</div>
              <div style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.75rem" }}>Years of Excellence</div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div style={{ fontSize: "0.68rem", letterSpacing: "0.3em", color: RED, textTransform: "uppercase", marginBottom: "1rem" }}>About Studio H</div>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 4vw, 3.25rem)", color: SILK, lineHeight: 1.2, marginBottom: "1.5rem" }}>
              Crafting Visual Stories<br /><span style={{ color: RED, fontStyle: "italic" }}>With Purpose</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.9, marginBottom: "2rem", fontSize: "0.95rem" }}>
              Founded in Bangalore, Studio H is a collective of passionate visual artists who believe every moment deserves to be immortalized with cinematic grace. From intimate pre-wedding shoots to grand palace weddings — our lens captures the soul of every occasion.
            </p>
            <Link to="/about" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: RED, textDecoration: "none", fontSize: "0.82rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, borderBottom: `1px solid ${RED}`, paddingBottom: "2px" }}>
              Our Story <ArrowRight size={13} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── PORTFOLIO PREVIEW ── */}
      <section style={{ background: CHARCOAL, padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div style={{ fontSize: "0.68rem", letterSpacing: "0.3em", color: RED, textTransform: "uppercase", marginBottom: "1rem" }}>Our Work</div>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 4vw, 3rem)", color: SILK }}>
              Selected <span style={{ color: RED, fontStyle: "italic" }}>Portfolio</span>
            </h2>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "8px" }}>
            {portfolioPreview.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                style={{ position: "relative", overflow: "hidden", height: "260px" }} whileHover="hover">
                <motion.div variants={{ hover: { scale: 1.05 } }} transition={{ duration: 0.5 }} style={{ width: "100%", height: "100%" }}>
                  <ImageWithFallback src={item.url} alt={item.category} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </motion.div>
                <motion.div variants={{ hover: { opacity: 1 } }} initial={{ opacity: 0 }}
                  style={{ position: "absolute", inset: 0, background: "rgba(5,5,5,0.62)", display: "flex", alignItems: "flex-end", padding: "1.25rem" }}>
                  <span style={{ color: RED, fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>{item.category}</span>
                </motion.div>
              </motion.div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link to="/portfolio" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: `linear-gradient(135deg, ${RED}, #8B0010)`, color: "#fff", padding: "0.9rem 2.25rem", textDecoration: "none", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              View Full Portfolio <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS PREVIEW ── */}
      <section style={{ padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div style={{ fontSize: "0.68rem", letterSpacing: "0.3em", color: RED, textTransform: "uppercase", marginBottom: "1rem" }}>Client Love</div>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 4vw, 3rem)", color: SILK }}>
              What They <span style={{ color: RED, fontStyle: "italic" }}>Say</span>
            </h2>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "1.75rem" }}>
            {testimonials.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                style={{ background: CHARCOAL, border: "1px solid rgba(188,24,35,0.1)", padding: "2rem" }}>
                <div style={{ display: "flex", gap: "3px", marginBottom: "1rem" }}>
                  {Array.from({ length: t.rating }).map((_, j) => <Star key={j} size={13} fill={RED} color={RED} />)}
                </div>
                <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.85, marginBottom: "1.5rem", fontSize: "0.88rem", fontStyle: "italic" }}>"{t.text}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                  <ImageWithFallback src={t.img} alt={t.name} style={{ width: "44px", height: "44px", borderRadius: "50%", objectFit: "cover", border: `2px solid ${RED}` }} />
                  <div>
                    <div style={{ color: SILK, fontWeight: 600, fontSize: "0.88rem" }}>{t.name}</div>
                    <div style={{ color: RED, fontSize: "0.72rem" }}>{t.event}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link to="/testimonials" style={{ color: RED, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "0.82rem", borderBottom: `1px solid ${RED}`, paddingBottom: "2px" }}>
              Read All Reviews <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section style={{ background: CHARCOAL, padding: "5rem 2rem", textAlign: "center", borderTop: "1px solid rgba(188,24,35,0.12)" }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ maxWidth: "650px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.68rem", letterSpacing: "0.3em", color: RED, textTransform: "uppercase", marginBottom: "1rem" }}>Get in Touch</div>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.25rem, 5vw, 3.75rem)", color: SILK, lineHeight: 1.2, marginBottom: "1.25rem" }}>
            Let's Create Something <span style={{ color: RED, fontStyle: "italic" }}>Extraordinary</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.85, marginBottom: "2.5rem", fontSize: "0.95rem" }}>
            Reach us via WhatsApp for the fastest response, or drop an email at <span style={{ color: RED }}>thestudioh.in@gmail.com</span>
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={`https://wa.me/${WA}?text=Hi%20Studio%20H!`} target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#25D366", color: "#fff", padding: "1rem 2.25rem", textDecoration: "none", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              WhatsApp Now
            </a>
            <Link to="/contact"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: `1px solid ${RED}`, color: RED, padding: "1rem 2.25rem", textDecoration: "none", fontSize: "0.85rem", fontWeight: 600 }}>
              Contact Page <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
