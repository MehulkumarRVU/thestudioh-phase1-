import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Clock, User } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const GOLD = "#bc1823";
const OBSIDIAN = "#000000";
const CHARCOAL = "#000000";
const SILK = "#ffffff";

const categories = ["All", "Tips", "Videography", "Wedding", "Corporate", "Behind the Scenes"];

const posts = [
  { id: 1, title: "10 Tips for the Perfect Pre-Wedding Shoot Location in Bangalore", category: "Tips", author: "Harsh Sharma", date: "Jun 15, 2026", readTime: "5 min", img: "https://images.unsplash.com/photo-1622277583249-4c1fad490804?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", excerpt: "Choosing the right location can make or break your pre-wedding shoot. We've scouted over 200 locations across Karnataka — here are our top picks." },
  { id: 2, title: "Why Cinematic Wedding Films Are Worth Every Rupee", category: "Videography", author: "Preethi Nair", date: "Jun 8, 2026", readTime: "7 min", img: "https://images.unsplash.com/photo-1617724975854-70b5d0cedb0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", excerpt: "Still photos freeze a moment. But a film? A film lets you relive the emotion, the music, the laughter, the tears — over and over again." },
  { id: 3, title: "How to Prepare for Your Corporate Event Photography", category: "Corporate", author: "Rohan Mehta", date: "May 28, 2026", readTime: "4 min", img: "https://images.unsplash.com/photo-1531058020387-3be344556be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", excerpt: "Great corporate photography doesn't happen by accident. Here's what the best-prepared clients do before their event shoot." },
  { id: 4, title: "Behind the Lens: Our Most Challenging Wedding Shoot", category: "Behind the Scenes", author: "Harsh Sharma", date: "May 20, 2026", readTime: "8 min", img: "https://images.unsplash.com/photo-1537633468298-d86f0c2d4173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", excerpt: "A monsoon wedding, 3 venue changes, and a power outage. Here's how our team delivered despite the odds." },
  { id: 5, title: "Fashion Photography: From Concept to Final Edit", category: "Tips", author: "Preethi Nair", date: "May 10, 2026", readTime: "6 min", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", excerpt: "The secret to a great fashion shoot isn't just the camera — it's the pre-production. Here's our full process, step by step." },
  { id: 6, title: "Choosing the Right Wedding Photography Package: A Complete Guide", category: "Wedding", author: "Harsh Sharma", date: "Apr 30, 2026", readTime: "9 min", img: "https://images.unsplash.com/photo-1519741196428-6a2175fa2557?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", excerpt: "Basic, Premium, or Luxury? This comprehensive guide helps you find the package that fits your vision and budget." },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? posts : posts.filter((p) => p.category === activeCategory);
  const featured = posts[0];

  return (
    <div style={{ background: OBSIDIAN, minHeight: "100vh", paddingTop: "80px", color: SILK }}>
      {/* Hero */}
      <section style={{ padding: "5rem 2rem 3rem", textAlign: "center", borderBottom: `1px solid rgba(188,24,35,0.1)` }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div style={{ fontSize: "0.7rem", letterSpacing: "0.3em", color: GOLD, textTransform: "uppercase", marginBottom: "1rem" }}>Journal</div>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 6vw, 5rem)", marginBottom: "1rem" }}>
            The <span style={{ color: GOLD, fontStyle: "italic" }}>Studio H Blog</span>
          </h1>
          <p style={{ color: "rgba(245,245,247,0.55)", maxWidth: "500px", margin: "0 auto", lineHeight: 1.8 }}>
            Tips, stories, behind-the-scenes insights, and everything photography from our team.
          </p>
        </motion.div>
      </section>

      {/* Featured Post */}
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "3rem 2rem 0" }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: "0", border: "1px solid rgba(188,24,35,0.15)", overflow: "hidden", marginBottom: "3rem" }}>
          <div style={{ position: "relative", height: "380px", overflow: "hidden" }}>
            <ImageWithFallback src={featured.img} alt={featured.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", top: "1.5rem", left: "1.5rem", background: GOLD, color: "#ffffff", padding: "0.3rem 0.8rem", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
              Featured
            </div>
          </div>
          <div style={{ background: CHARCOAL, padding: "2.5rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ color: GOLD, fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem" }}>{featured.category}</div>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.75rem", color: SILK, lineHeight: 1.3, marginBottom: "1rem" }}>{featured.title}</h2>
            <p style={{ color: "rgba(245,245,247,0.6)", lineHeight: 1.8, fontSize: "0.9rem", marginBottom: "1.5rem" }}>{featured.excerpt}</p>
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", color: "rgba(245,245,247,0.4)", fontSize: "0.75rem", marginBottom: "1.5rem" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "5px" }}><User size={12} /> {featured.author}</span>
              <span style={{ display: "flex", alignItems: "center", gap: "5px" }}><Clock size={12} /> {featured.readTime} read</span>
              <span>{featured.date}</span>
            </div>
            <Link to="/blog" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: GOLD, textDecoration: "none", fontSize: "0.85rem", borderBottom: `1px solid ${GOLD}`, paddingBottom: "2px", width: "fit-content" }}>
              Read Article <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Category Tabs */}
      <div style={{ position: "sticky", top: "80px", zIndex: 100, background: CHARCOAL, borderBottom: `1px solid rgba(188,24,35,0.1)`, padding: "0 2rem", overflowX: "auto" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", display: "flex" }}>
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              style={{ padding: "1rem 1.25rem", background: "none", border: "none", cursor: "pointer", fontSize: "0.78rem", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600, color: activeCategory === cat ? GOLD : "rgba(245,245,247,0.5)", borderBottom: activeCategory === cat ? `2px solid ${GOLD}` : "2px solid transparent", transition: "all 0.3s", whiteSpace: "nowrap" }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Posts Grid */}
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "3rem 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
          {filtered.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              style={{ background: CHARCOAL, border: "1px solid rgba(188,24,35,0.1)", overflow: "hidden", cursor: "pointer" }}
              whileHover={{ y: -4 }}
            >
              <div style={{ position: "relative", height: "220px", overflow: "hidden" }}>
                <ImageWithFallback src={post.img} alt={post.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s" }} />
                <div style={{ position: "absolute", top: "1rem", left: "1rem", background: GOLD, color: "#ffffff", padding: "0.25rem 0.75rem", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>{post.category}</div>
              </div>
              <div style={{ padding: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", color: "rgba(245,245,247,0.4)", fontSize: "0.72rem", marginBottom: "0.75rem" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><User size={11} /> {post.author}</span>
                  <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><Clock size={11} /> {post.readTime}</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", color: SILK, lineHeight: 1.4, marginBottom: "0.75rem" }}>{post.title}</h3>
                <p style={{ color: "rgba(245,245,247,0.5)", fontSize: "0.82rem", lineHeight: 1.7, marginBottom: "1rem" }}>{post.excerpt}</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ color: "rgba(245,245,247,0.35)", fontSize: "0.72rem" }}>{post.date}</span>
                  <Link to="/blog" style={{ color: GOLD, textDecoration: "none", fontSize: "0.78rem", display: "flex", alignItems: "center", gap: "4px" }}>
                    Read <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
