import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";

const GOLD = "#bc1823";
const OBSIDIAN = "#000000";
const CHARCOAL = "#000000";
const SILK = "#ffffff";

const categories = ["Photography", "Videography", "Add-Ons"];

const services: Record<string, Array<{ name: string; desc: string; packages: { name: string; price: string; deliverables: string[]; team: string; hours: string }[] }>> = {
  Photography: [
    {
      name: "Wedding Photography",
      desc: "Full-day coverage of your wedding with our award-winning photographers.",
      packages: [
        { name: "Basic", price: "₹45,000", deliverables: ["400 edited photos", "8 hours coverage", "1 Photographer", "Online gallery"], team: "1 Photographer", hours: "8 hrs" },
        { name: "Premium", price: "₹85,000", deliverables: ["800 edited photos", "12 hours coverage", "2 Photographers", "Premium album", "Same-day highlights"], team: "2 Photographers", hours: "12 hrs" },
        { name: "Luxury", price: "₹1,50,000", deliverables: ["1200+ edited photos", "Full-day coverage", "3 Photographers", "Luxury album", "Drone shots", "2 locations"], team: "3 Photographers", hours: "Full day" },
      ],
    },
    {
      name: "Pre-Wedding Shoot",
      desc: "Intimate couple portraits in stunning Bangalore or outstation locations.",
      packages: [
        { name: "Basic", price: "₹20,000", deliverables: ["100 edited photos", "4 hours", "1 location"], team: "1 Photographer", hours: "4 hrs" },
        { name: "Premium", price: "₹40,000", deliverables: ["250 edited photos", "Full day", "2 locations"], team: "1 Photographer", hours: "8 hrs" },
        { name: "Luxury", price: "₹75,000", deliverables: ["400+ edited photos", "2 days", "Outstation", "Drone"], team: "2 Photographers", hours: "2 days" },
      ],
    },
    {
      name: "Corporate Events",
      desc: "Professional event coverage for conferences, product launches, and brand milestones.",
      packages: [
        { name: "Basic", price: "₹15,000", deliverables: ["200 edited photos", "4 hours", "1 Photographer"], team: "1 Photographer", hours: "4 hrs" },
        { name: "Premium", price: "₹28,000", deliverables: ["400 edited photos", "8 hours", "2 Photographers"], team: "2 Photographers", hours: "8 hrs" },
        { name: "Luxury", price: "₹55,000", deliverables: ["600+ photos", "Full day", "3 team members", "Same-day delivery"], team: "3 Members", hours: "Full day" },
      ],
    },
    {
      name: "Fashion & Editorial",
      desc: "High-fashion portfolio shoots for models, designers, and brands.",
      packages: [
        { name: "Basic", price: "₹25,000", deliverables: ["60 edited photos", "4 hours", "1 look"], team: "1 Photographer", hours: "4 hrs" },
        { name: "Premium", price: "₹50,000", deliverables: ["150 edited photos", "Full day", "3 looks"], team: "1 Photographer + 1 Assistant", hours: "8 hrs" },
        { name: "Luxury", price: "₹1,00,000", deliverables: ["300+ edited photos", "2 days", "Studio + outdoor", "Video teaser"], team: "Full crew", hours: "2 days" },
      ],
    },
  ],
  Videography: [
    {
      name: "Wedding Films",
      desc: "Cinematic wedding films that capture the emotion and grandeur of your day.",
      packages: [
        { name: "Basic", price: "₹35,000", deliverables: ["5-7 min highlight film", "Raw footage", "1 Videographer"], team: "1 Videographer", hours: "8 hrs" },
        { name: "Premium", price: "₹70,000", deliverables: ["10-15 min feature film", "Highlights reel", "Drone footage"], team: "2 Videographers", hours: "12 hrs" },
        { name: "Luxury", price: "₹1,40,000", deliverables: ["Full documentary", "Trailer", "Same-day edit", "Drone + Gimbal"], team: "3 Videographers", hours: "Full day" },
      ],
    },
    {
      name: "Corporate Films & Reels",
      desc: "Brand videos, testimonials, and social media reels for businesses.",
      packages: [
        { name: "Basic", price: "₹20,000", deliverables: ["2-3 min corporate video", "1 revision"], team: "1 Videographer", hours: "4 hrs" },
        { name: "Premium", price: "₹40,000", deliverables: ["5 min brand film", "3 short reels", "2 revisions"], team: "2 Members", hours: "8 hrs" },
        { name: "Luxury", price: "₹80,000", deliverables: ["Full brand story", "5 reels", "Unlimited revisions", "Color grading"], team: "Full crew", hours: "2 days" },
      ],
    },
  ],
  "Add-Ons": [
    {
      name: "Add-On Services",
      desc: "Enhance your package with premium add-ons tailored to your needs.",
      packages: [
        { name: "Drone Coverage", price: "₹12,000", deliverables: ["Aerial photography", "4K video", "2 hours"], team: "1 Drone Pilot", hours: "2 hrs" },
        { name: "Premium Album", price: "₹18,000", deliverables: ["40-page luxury album", "Custom design", "Flush mount"], team: "Design team", hours: "—" },
        { name: "Express Editing", price: "₹8,000", deliverables: ["48-hour delivery", "Priority queue", "Full gallery"], team: "Editor team", hours: "—" },
      ],
    },
  ],
};

const packageColors = { Basic: "rgba(255,255,255,0.08)", Premium: "rgba(188,24,35,0.08)", Luxury: `rgba(188,24,35,0.18)` };
const packageBorders = { Basic: "rgba(255,255,255,0.1)", Premium: "rgba(188,24,35,0.3)", Luxury: GOLD };

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("Photography");

  return (
    <div style={{ background: OBSIDIAN, minHeight: "100vh", paddingTop: "80px" }}>
      {/* Hero */}
      <section style={{ padding: "5rem 2rem 4rem", textAlign: "center", borderBottom: `1px solid rgba(188,24,35,0.1)` }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div style={{ fontSize: "0.7rem", letterSpacing: "0.3em", color: GOLD, textTransform: "uppercase", marginBottom: "1rem" }}>Services & Pricing</div>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 6vw, 5rem)", color: SILK, marginBottom: "1.5rem" }}>
            What We <span style={{ color: GOLD, fontStyle: "italic" }}>Create</span>
          </h1>
          <p style={{ color: "rgba(245,245,247,0.6)", maxWidth: "550px", margin: "0 auto", lineHeight: 1.8 }}>
            Every package is tailored to your vision. Choose your service, select a package, and customize with add-ons.
          </p>
        </motion.div>
      </section>

      {/* Category Tabs */}
      <div style={{ position: "sticky", top: "80px", zIndex: 100, background: CHARCOAL, borderBottom: `1px solid rgba(188,24,35,0.1)`, padding: "0 2rem" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", display: "flex", gap: "0" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{ padding: "1.2rem 2rem", background: "none", border: "none", cursor: "pointer", fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, color: activeCategory === cat ? GOLD : "rgba(245,245,247,0.5)", borderBottom: activeCategory === cat ? `2px solid ${GOLD}` : "2px solid transparent", transition: "all 0.3s" }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Services */}
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "4rem 2rem" }}>
        {services[activeCategory]?.map((service, si) => (
          <motion.div
            key={service.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: si * 0.1 }}
            style={{ marginBottom: "5rem" }}
          >
            <div style={{ marginBottom: "2rem" }}>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2rem", color: SILK, marginBottom: "0.5rem" }}>{service.name}</h2>
              <p style={{ color: "rgba(245,245,247,0.55)", fontSize: "0.9rem" }}>{service.desc}</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
              {service.packages.map((pkg) => {
                const isLuxury = pkg.name === "Luxury";
                return (
                  <div
                    key={pkg.name}
                    style={{
                      background: packageColors[pkg.name as keyof typeof packageColors] || "rgba(255,255,255,0.05)",
                      border: `1px solid ${packageBorders[pkg.name as keyof typeof packageBorders] || "rgba(255,255,255,0.1)"}`,
                      padding: "2rem",
                      position: "relative",
                      transition: "transform 0.3s",
                    }}
                  >
                    {isLuxury && (
                      <div style={{ position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)", background: GOLD, color: "#ffffff", padding: "0.2rem 1rem", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
                        Most Popular
                      </div>
                    )}
                    <div style={{ fontSize: "0.7rem", letterSpacing: "0.2em", color: GOLD, textTransform: "uppercase", marginBottom: "0.5rem" }}>{pkg.name}</div>
                    <div style={{ fontFamily: "var(--font-heading)", fontSize: "2.2rem", color: SILK, marginBottom: "0.25rem" }}>{pkg.price}</div>
                    <div style={{ color: "rgba(245,245,247,0.4)", fontSize: "0.75rem", marginBottom: "1.5rem" }}>{pkg.team} · {pkg.hours}</div>
                    <div style={{ height: "1px", background: "rgba(188,24,35,0.15)", marginBottom: "1.5rem" }} />
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, marginBottom: "2rem" }}>
                      {pkg.deliverables.map((d) => (
                        <li key={d} style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem", color: "rgba(245,245,247,0.75)", fontSize: "0.85rem" }}>
                          <Check size={14} color={GOLD} style={{ flexShrink: 0 }} />
                          {d}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/book-service"
                      style={{
                        display: "block",
                        textAlign: "center",
                        padding: "0.85rem",
                        textDecoration: "none",
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        background: isLuxury ? `linear-gradient(135deg, ${GOLD}, #8B0010)` : "transparent",
                        color: isLuxury ? OBSIDIAN : GOLD,
                        border: isLuxury ? "none" : `1px solid ${GOLD}`,
                        transition: "opacity 0.3s",
                      }}
                    >
                      Book This Package
                    </Link>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <section style={{ background: CHARCOAL, padding: "4rem 2rem", textAlign: "center", borderTop: `1px solid rgba(188,24,35,0.1)` }}>
        <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "2rem", color: SILK, marginBottom: "1rem" }}>
          Need a Custom Package?
        </h3>
        <p style={{ color: "rgba(245,245,247,0.55)", marginBottom: "2rem", fontSize: "0.9rem" }}>Let's craft something perfectly tailored for your vision.</p>
        <Link to="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: `linear-gradient(135deg, ${GOLD}, #8B0010)`, color: "#ffffff", padding: "0.9rem 2.5rem", textDecoration: "none", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Get Custom Quote <ArrowRight size={14} />
        </Link>
      </section>
    </div>
  );
}
