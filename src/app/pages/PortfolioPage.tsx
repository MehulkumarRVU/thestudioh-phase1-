import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ZoomIn } from "lucide-react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const GOLD = "#bc1823";
const OBSIDIAN = "#000000";
const CHARCOAL = "#000000";
const SILK = "#ffffff";

const categories = ["All", "Wedding", "Pre-Wedding", "Corporate", "Fashion", "Events"];

const portfolio = [
  { id: 1, url: "https://images.unsplash.com/photo-1617724975854-70b5d0cedb0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", category: "Wedding", title: "Priya & Arjun — ITC Windsor" },
  { id: 2, url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", category: "Fashion", title: "Editorial — Vogue India" },
  { id: 3, url: "https://images.unsplash.com/photo-1622277583249-4c1fad490804?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", category: "Pre-Wedding", title: "Meghna & Rahul — Coorg" },
  { id: 4, url: "https://images.unsplash.com/photo-1537633468298-d86f0c2d4173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", category: "Wedding", title: "Deepa & Kiran — Palace Grounds" },
  { id: 5, url: "https://images.unsplash.com/photo-1633381521050-26bb467d9d5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", category: "Fashion", title: "Studio Series — SS 2026" },
  { id: 6, url: "https://images.unsplash.com/photo-1531058020387-3be344556be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", category: "Corporate", title: "TechSummit 2026 — NIMHANS" },
  { id: 7, url: "https://images.unsplash.com/photo-1519741196428-6a2175fa2557?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", category: "Wedding", title: "Sanya & Dev — Leela Palace" },
  { id: 8, url: "https://images.unsplash.com/photo-1603775020644-eb8decd79994?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", category: "Fashion", title: "Brand Campaign — Myntra" },
  { id: 9, url: "https://images.unsplash.com/photo-1561489411-c0ce86e994bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", category: "Corporate", title: "Product Launch — Samsung" },
  { id: 10, url: "https://images.unsplash.com/photo-1606143412458-acc5f86de897?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", category: "Fashion", title: "Lookbook — Fabindia" },
  { id: 11, url: "https://images.unsplash.com/photo-1581841064838-a470c740e8ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", category: "Fashion", title: "Actress Portfolio" },
  { id: 12, url: "https://images.unsplash.com/photo-1700514077430-3659e38eb5e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", category: "Events", title: "Grand Reception — Taj Hotel" },
  { id: 13, url: "https://images.unsplash.com/photo-1600270237614-d20aef1c8b14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", category: "Pre-Wedding", title: "Nisha & Vikram — Hampi" },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxItem, setLightboxItem] = useState<typeof portfolio[0] | null>(null);

  const filtered = activeCategory === "All" ? portfolio : portfolio.filter((p) => p.category === activeCategory);

  return (
    <div style={{ background: OBSIDIAN, minHeight: "100vh", paddingTop: "80px" }}>
      {/* Hero */}
      <section style={{ padding: "5rem 2rem 3rem", textAlign: "center", borderBottom: `1px solid rgba(188,24,35,0.1)` }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div style={{ fontSize: "0.7rem", letterSpacing: "0.3em", color: GOLD, textTransform: "uppercase", marginBottom: "1rem" }}>Our Work</div>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 6vw, 5rem)", color: SILK, marginBottom: "1rem" }}>
            The <span style={{ color: GOLD, fontStyle: "italic" }}>Portfolio</span>
          </h1>
          <p style={{ color: "rgba(245,245,247,0.55)", maxWidth: "500px", margin: "0 auto", lineHeight: 1.8 }}>
            A curated selection of our finest work — weddings, fashion, corporate, and beyond.
          </p>
        </motion.div>
      </section>

      {/* Filter Tabs */}
      <div style={{ position: "sticky", top: "80px", zIndex: 100, background: CHARCOAL, borderBottom: `1px solid rgba(188,24,35,0.1)`, padding: "0 2rem", overflowX: "auto" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", display: "flex", gap: "0" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{ padding: "1.1rem 1.5rem", background: "none", border: "none", cursor: "pointer", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, color: activeCategory === cat ? GOLD : "rgba(245,245,247,0.5)", borderBottom: activeCategory === cat ? `2px solid ${GOLD}` : "2px solid transparent", transition: "all 0.3s", whiteSpace: "nowrap" }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Grid */}
      <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "3rem 1.5rem" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 640: 2, 900: 3, 1200: 4 }}>
              <Masonry gutter="10px">
                {filtered.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    style={{ position: "relative", overflow: "hidden", cursor: "pointer" }}
                    onClick={() => setLightboxItem(item)}
                    whileHover="hover"
                  >
                    <ImageWithFallback
                      src={item.url}
                      alt={item.title}
                      style={{ width: "100%", display: "block", transition: "transform 0.5s" }}
                    />
                    <motion.div
                      variants={{ hover: { opacity: 1 } }}
                      initial={{ opacity: 0 }}
                      style={{ position: "absolute", inset: 0, background: "rgba(5,5,5,0.65)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.75rem", padding: "1rem" }}
                    >
                      <ZoomIn size={28} color={GOLD} />
                      <div style={{ color: SILK, fontFamily: "var(--font-heading)", fontSize: "0.9rem", textAlign: "center" }}>{item.title}</div>
                      <div style={{ color: GOLD, fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>{item.category}</div>
                    </motion.div>
                  </motion.div>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: "fixed", inset: 0, background: "rgba(5,5,5,0.95)", zIndex: 2000, display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}
            onClick={() => setLightboxItem(null)}
          >
            <button
              onClick={() => setLightboxItem(null)}
              style={{ position: "absolute", top: "1.5rem", right: "1.5rem", background: "none", border: "none", cursor: "pointer", color: SILK }}
            >
              <X size={28} />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              style={{ maxWidth: "1000px", width: "100%" }}
            >
              <ImageWithFallback src={lightboxItem.url} alt={lightboxItem.title} style={{ width: "100%", maxHeight: "80vh", objectFit: "contain" }} />
              <div style={{ marginTop: "1rem", textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.2rem", color: SILK }}>{lightboxItem.title}</div>
                <div style={{ color: GOLD, fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", marginTop: "0.25rem" }}>{lightboxItem.category}</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
