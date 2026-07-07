import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Eye, Target, Heart } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const GOLD = "#bc1823";
const CHARCOAL = "#000000";
const SILK = "#ffffff";

const values = [
  { icon: Eye, title: "Vision", desc: "We see beyond the frame — the emotion, the fleeting light, the story unfolding in real time." },
  { icon: Target, title: "Precision", desc: "Every frame is intentional. We plan meticulously so that when the moment comes, we're ready." },
  { icon: Heart, title: "Passion", desc: "Photography is not just our profession — it's our obsession, our art, and our love language." },
];

const team = [
  { name: "Harsh Sharma", role: "Founder & Lead Photographer", img: "https://images.unsplash.com/photo-1519741196428-6a2175fa2557?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", bio: "With 10+ years behind the lens, Harsh founded Studio H to redefine visual storytelling in India." },
  { name: "Preethi Nair", role: "Creative Director & Videographer", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", bio: "Preethi brings a cinematic eye to every project, weaving narratives that move and inspire." },
  { name: "Rohan Mehta", role: "Senior Photographer", img: "https://images.unsplash.com/photo-1531058020387-3be344556be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", bio: "Corporate and fashion specialist with a keen eye for light and architectural composition." },
];

export default function AboutPage() {
  return (
    <div style={{ background: "#000000", minHeight: "100vh", paddingTop: "80px", color: SILK }}>
      {/* Hero */}
      <section style={{ position: "relative", padding: "6rem 2rem", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1617724975854-70b5d0cedb0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="About Studio H"
            style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.15)" }}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ position: "relative", maxWidth: "800px", margin: "0 auto", textAlign: "center", padding: "4rem 0" }}
        >
          <div style={{ fontSize: "0.7rem", letterSpacing: "0.3em", color: GOLD, textTransform: "uppercase", marginBottom: "1rem" }}>Our Story</div>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1.1, marginBottom: "1.5rem" }}>
            Born from a Love of <span style={{ color: GOLD, fontStyle: "italic" }}>Light</span>
          </h1>
          <p style={{ color: "rgba(245,245,247,0.65)", lineHeight: 1.9, fontSize: "1.05rem" }}>
            Studio H was born in 2014 in a small apartment in Koramangala, Bangalore — with one camera, one dream, and an unshakeable belief that every love story deserves a cinematic frame.
          </p>
        </motion.div>
      </section>

      {/* Company Story */}
      <section style={{ maxWidth: "1400px", margin: "0 auto", padding: "6rem 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))", gap: "3rem", alignItems: "center" }}>
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div style={{ fontSize: "0.7rem", letterSpacing: "0.3em", color: GOLD, textTransform: "uppercase", marginBottom: "1rem" }}>The Beginning</div>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", lineHeight: 1.2, marginBottom: "1.5rem" }}>
              From One Camera<br />to a <span style={{ color: GOLD, fontStyle: "italic" }}>Movement</span>
            </h2>
            <p style={{ color: "rgba(245,245,247,0.65)", lineHeight: 1.9, marginBottom: "1rem" }}>
              Harsh Sharma picked up his first DSLR at 22. Within a year, he was shooting weddings across Karnataka. By 2018, Studio H had become one of Bangalore's most sought-after photography studios.
            </p>
            <p style={{ color: "rgba(245,245,247,0.65)", lineHeight: 1.9, marginBottom: "2rem" }}>
              Today, we are a full-service visual media company — 15 artists strong — with a portfolio spanning luxury weddings, Bollywood productions, Fortune 500 companies, and editorial campaigns for India's top fashion houses.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: "1rem" }}>
              {[["2014", "Founded"], ["500+", "Weddings"], ["15", "Artists"], ["10+", "Awards"]].map(([val, label]) => (
                <div key={label} style={{ padding: "1.25rem", border: "1px solid rgba(188,24,35,0.2)", background: CHARCOAL }}>
                  <div style={{ fontFamily: "var(--font-heading)", fontSize: "2rem", color: GOLD }}>{val}</div>
                  <div style={{ color: "rgba(245,245,247,0.5)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1622277583249-4c1fad490804?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
              alt="Studio H story"
              style={{ width: "100%", height: "500px", objectFit: "cover" }}
            />
          </motion.div>
        </div>
      </section>

      {/* Founder Message */}
      <section style={{ background: CHARCOAL, padding: "6rem 2rem", borderTop: "1px solid rgba(188,24,35,0.1)", borderBottom: "1px solid rgba(188,24,35,0.1)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div style={{ width: "80px", height: "80px", borderRadius: "50%", border: `2px solid ${GOLD}`, overflow: "hidden", margin: "0 auto 1.5rem" }}>
              <ImageWithFallback src="https://images.unsplash.com/photo-1519741196428-6a2175fa2557?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200" alt="Founder" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <blockquote style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.5rem, 3vw, 2rem)", color: SILK, lineHeight: 1.5, fontStyle: "italic", marginBottom: "2rem" }}>
              "A photograph is not just a moment captured — it is a feeling preserved. At Studio H, we don't shoot events. We craft memories that outlive us."
            </blockquote>
            <div style={{ color: GOLD, fontWeight: 600 }}>Harsh Sharma</div>
            <div style={{ color: "rgba(245,245,247,0.45)", fontSize: "0.8rem", marginTop: "0.25rem" }}>Founder & Lead Photographer, Studio H</div>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section style={{ maxWidth: "1400px", margin: "0 auto", padding: "6rem 2rem" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", color: SILK }}>
            Mission, Vision & <span style={{ color: GOLD, fontStyle: "italic" }}>Values</span>
          </h2>
        </motion.div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem", marginBottom: "4rem" }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: CHARCOAL, border: "1px solid rgba(188,24,35,0.15)", padding: "2.5rem" }}>
            <div style={{ fontSize: "0.7rem", letterSpacing: "0.3em", color: GOLD, textTransform: "uppercase", marginBottom: "1rem" }}>Mission</div>
            <p style={{ color: "rgba(245,245,247,0.7)", lineHeight: 1.9 }}>
              We exist to transform ideas, brands, and moments into meaningful visual stories. We help businesses ensure their products and services are seen, heard, and remembered through purposeful product photography and creative visual content. For individuals and events, we capture memories with an artistic perspective, creating timeless imagery that remains meaningful across generations. By combining creativity with practicality, we deliver visually compelling, economically feasible, and high-quality solutions that create lasting value for every client.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} style={{ background: CHARCOAL, border: "1px solid rgba(188,24,35,0.15)", padding: "2.5rem" }}>
            <div style={{ fontSize: "0.7rem", letterSpacing: "0.3em", color: GOLD, textTransform: "uppercase", marginBottom: "1rem" }}>Vision</div>
            <p style={{ color: "rgba(245,245,247,0.7)", lineHeight: 1.9 }}>
              To create timeless visual art that transcends trends, preserves stories across generations, and becomes a lasting legacy for individuals, brands, and communities. We aspire to redefine photography by blending artistic excellence, strategic thinking, and accessible solutions that stand the test of time.
            </p>
          </motion.div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
          {values.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
              <div style={{ width: "48px", height: "48px", border: `1px solid ${GOLD}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon size={20} color={GOLD} />
              </div>
              <div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.15rem", color: SILK, marginBottom: "0.5rem" }}>{title}</h3>
                <p style={{ color: "rgba(245,245,247,0.55)", fontSize: "0.85rem", lineHeight: 1.8 }}>{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section style={{ background: CHARCOAL, padding: "6rem 2rem", borderTop: "1px solid rgba(188,24,35,0.1)" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div style={{ fontSize: "0.7rem", letterSpacing: "0.3em", color: GOLD, textTransform: "uppercase", marginBottom: "1rem" }}>The Artists</div>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", color: SILK }}>
              Meet the <span style={{ color: GOLD, fontStyle: "italic" }}>Team</span>
            </h2>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            {team.map((member, i) => (
              <motion.div key={member.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} style={{ background: "#000000", border: "1px solid rgba(188,24,35,0.1)", overflow: "hidden" }}>
                <ImageWithFallback src={member.img} alt={member.name} style={{ width: "100%", height: "300px", objectFit: "cover", filter: "grayscale(20%)" }} />
                <div style={{ padding: "1.5rem" }}>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.2rem", color: SILK, marginBottom: "0.25rem" }}>{member.name}</h3>
                  <div style={{ color: GOLD, fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>{member.role}</div>
                  <p style={{ color: "rgba(245,245,247,0.55)", fontSize: "0.85rem", lineHeight: 1.7 }}>{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "5rem 2rem", textAlign: "center" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", color: SILK, marginBottom: "1.5rem" }}>
            Ready to Work With Us?
          </h2>
          <Link to="/book-service" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: `linear-gradient(135deg, ${GOLD}, #8B0010)`, color: "#ffffff", padding: "1rem 2.5rem", textDecoration: "none", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Book a Session <ArrowRight size={14} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
