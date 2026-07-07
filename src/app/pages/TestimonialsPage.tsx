import { useState } from "react";
import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const GOLD = "#bc1823";
const OBSIDIAN = "#000000";
const CHARCOAL = "#000000";
const SILK = "#ffffff";

const eventTypes = ["All", "Wedding", "Pre-Wedding", "Corporate", "Fashion", "Events"];

const testimonials = [
  { id: 1, name: "Priya & Arjun Kapoor", event: "Wedding", venue: "ITC Windsor, Bangalore", rating: 5, text: "Studio H captured our wedding in a way that felt like a Bollywood film. Every frame was pure gold. We still get compliments from guests who saw our album. The team was so professional and warm — they felt like family by the end of the day.", img: "https://images.unsplash.com/photo-1519741196428-6a2175fa2557?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", year: "2025" },
  { id: 2, name: "Meghna Sharma", event: "Fashion", venue: "Studio Shoot, Bangalore", rating: 5, text: "The team understood my vision perfectly. The lighting, the composition — absolutely magazine-worthy. Highly recommend for any editorial work. Got placed in Vogue India because of this shoot.", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", year: "2026" },
  { id: 3, name: "TechSummit India", event: "Corporate", venue: "NIMHANS Convention Centre", rating: 5, text: "Delivered 800+ edited photos within 48 hours. Professional, punctual, and the quality was exceptional. Will book again for our next event. The team managed a 3000-person event flawlessly.", img: "https://images.unsplash.com/photo-1531058020387-3be344556be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", year: "2026" },
  { id: 4, name: "Deepa & Kiran Reddy", event: "Wedding", venue: "Palace Grounds, Bangalore", rating: 5, text: "Our wedding photos are the most beautiful things I've ever seen. Harsh captured moments we didn't even know were happening. The cinematic video made our entire family cry with joy.", img: "https://images.unsplash.com/photo-1617724975854-70b5d0cedb0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", year: "2025" },
  { id: 5, name: "Nisha & Vikram Singh", event: "Pre-Wedding", venue: "Hampi, Karnataka", rating: 5, text: "The pre-wedding shoot at Hampi was a dream. They scouted the locations in advance, handled all logistics, and the photos came out breathtaking. Worth every rupee!", img: "https://images.unsplash.com/photo-1600270237614-d20aef1c8b14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", year: "2026" },
  { id: 6, name: "Fabindia Brand", event: "Fashion", venue: "Multiple Locations", rating: 5, text: "Studio H handled our 3-city campaign shoot with complete professionalism. The brand imagery they created aligned perfectly with our vision and exceeded all expectations.", img: "https://images.unsplash.com/photo-1606143412458-acc5f86de897?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", year: "2026" },
];

export default function TestimonialsPage() {
  const [activeType, setActiveType] = useState("All");

  const filtered = activeType === "All" ? testimonials : testimonials.filter((t) => t.event === activeType);

  return (
    <div style={{ background: OBSIDIAN, minHeight: "100vh", paddingTop: "80px", color: SILK }}>
      {/* Hero */}
      <section style={{ padding: "5rem 2rem 4rem", textAlign: "center", borderBottom: `1px solid rgba(188,24,35,0.1)` }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div style={{ fontSize: "0.7rem", letterSpacing: "0.3em", color: GOLD, textTransform: "uppercase", marginBottom: "1rem" }}>Client Reviews</div>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 6vw, 5rem)", marginBottom: "1rem" }}>
            Stories of <span style={{ color: GOLD, fontStyle: "italic" }}>Joy</span>
          </h1>
          <p style={{ color: "rgba(245,245,247,0.55)", maxWidth: "500px", margin: "0 auto", lineHeight: 1.8 }}>
            Every review is a story. Here's what our clients say about their experience with Studio H.
          </p>
          {/* Rating Summary */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginTop: "2rem" }}>
            <div style={{ display: "flex", gap: "4px" }}>
              {[1,2,3,4,5].map((s) => <Star key={s} size={20} fill={GOLD} color={GOLD} />)}
            </div>
            <span style={{ fontFamily: "var(--font-heading)", fontSize: "2rem", color: GOLD }}>5.0</span>
            <span style={{ color: "rgba(245,245,247,0.45)", fontSize: "0.85rem" }}>from 500+ reviews</span>
          </div>
        </motion.div>
      </section>

      {/* Filter */}
      <div style={{ position: "sticky", top: "80px", zIndex: 100, background: CHARCOAL, borderBottom: `1px solid rgba(188,24,35,0.1)`, padding: "0 2rem", overflowX: "auto" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", display: "flex" }}>
          {eventTypes.map((type) => (
            <button key={type} onClick={() => setActiveType(type)}
              style={{ padding: "1.1rem 1.5rem", background: "none", border: "none", cursor: "pointer", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, color: activeType === type ? GOLD : "rgba(245,245,247,0.5)", borderBottom: activeType === type ? `2px solid ${GOLD}` : "2px solid transparent", transition: "all 0.3s", whiteSpace: "nowrap" }}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Testimonials Grid */}
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "4rem 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "2rem" }}>
          {filtered.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              style={{ background: CHARCOAL, border: "1px solid rgba(188,24,35,0.12)", padding: "2.5rem", position: "relative" }}
            >
              <Quote size={32} color={GOLD} style={{ opacity: 0.3, position: "absolute", top: "1.5rem", right: "1.5rem" }} />
              <div style={{ display: "flex", gap: "3px", marginBottom: "1rem" }}>
                {Array.from({ length: t.rating }).map((_, j) => <Star key={j} size={14} fill={GOLD} color={GOLD} />)}
              </div>
              <p style={{ color: "rgba(245,245,247,0.75)", lineHeight: 1.9, marginBottom: "2rem", fontSize: "0.9rem", fontStyle: "italic" }}>"{t.text}"</p>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <ImageWithFallback src={t.img} alt={t.name} style={{ width: "52px", height: "52px", borderRadius: "50%", objectFit: "cover", border: `2px solid ${GOLD}` }} />
                <div>
                  <div style={{ color: SILK, fontWeight: 600, fontSize: "0.95rem" }}>{t.name}</div>
                  <div style={{ color: GOLD, fontSize: "0.72rem", letterSpacing: "0.05em" }}>{t.event} — {t.venue}</div>
                  <div style={{ color: "rgba(245,245,247,0.35)", fontSize: "0.72rem", marginTop: "2px" }}>{t.year}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
