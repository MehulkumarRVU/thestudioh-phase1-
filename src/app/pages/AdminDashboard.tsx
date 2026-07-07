import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useBreakpoint } from "../hooks/useBreakpoint";
import { Home, Info, Image, Star, Mail, Settings, Save, Menu, X, Camera, LogOut, Plus, Trash2, Eye, Check } from "lucide-react";
import { Link } from "react-router";

const RED = "#bc1823";
const OBSIDIAN = "#000000";
const CHARCOAL = "#000000";
const SILK = "#ffffff";

const sections = [
  { id: "home", label: "Home Page", icon: Home },
  { id: "about", label: "About Us", icon: Info },
  { id: "portfolio", label: "Portfolio", icon: Image },
  { id: "testimonials", label: "Testimonials", icon: Star },
  { id: "contact", label: "Contact", icon: Mail },
  { id: "settings", label: "Site Settings", icon: Settings },
];

const initialContent = {
  home: {
    heroHeading: "We Frame Moments That Last Forever",
    heroSubtext: "Cinematic wedding films. Elegant portraits. Stories told with light, shadow, and soul.",
    heroLabel: "Luxury Photography Studio · Bangalore",
    stat1: "500+", stat1Label: "Weddings Captured",
    stat2: "2000+", stat2Label: "Happy Clients",
    stat3: "15+", stat3Label: "Awards Won",
    stat4: "50K+", stat4Label: "Photos Delivered",
    aboutHeading: "Crafting Visual Stories With Purpose",
    aboutText: "Founded in Bangalore, Studio H is a collective of passionate visual artists who believe every moment deserves to be immortalized with cinematic grace.",
    ctaHeading: "Let's Create Something Extraordinary",
    ctaSubtext: "Reach us via WhatsApp for the fastest response, or drop an email at thestudioh.in@gmail.com",
  },
  about: {
    storyHeading: "From One Camera to a Movement",
    storyText: "Harsh Sharma picked up his first DSLR at 22. Within a year, he was shooting weddings across Karnataka. By 2018, Studio H had become one of Bangalore's most sought-after photography studios.",
    founderName: "Harsh Sharma",
    founderRole: "Founder & Lead Photographer",
    founderQuote: "A photograph is not just a moment captured — it is a feeling preserved. At Studio H, we don't shoot events. We craft memories that outlive us.",
    mission: "We exist to transform ideas, brands, and moments into meaningful visual stories. We help businesses ensure their products and services are seen, heard, and remembered through purposeful product photography and creative visual content. For individuals and events, we capture memories with an artistic perspective, creating timeless imagery that remains meaningful across generations. By combining creativity with practicality, we deliver visually compelling, economically feasible, and high-quality solutions that create lasting value for every client.",
    vision: "To create timeless visual art that transcends trends, preserves stories across generations, and becomes a lasting legacy for individuals, brands, and communities. We aspire to redefine photography by blending artistic excellence, strategic thinking, and accessible solutions that stand the test of time.",
    founded: "2014",
    weddings: "500+",
    artists: "15",
    awards: "10+",
  },
  portfolio: {
    pageHeading: "The Portfolio",
    pageSubtext: "A curated selection of our finest work — weddings, fashion, corporate, and beyond.",
  },
  testimonials: {
    pageHeading: "Stories of Joy",
    pageSubtext: "Every review is a story. Here's what our clients say about their experience with Studio H.",
    ratingLabel: "from 500+ reviews",
  },
  contact: {
    pageHeading: "Let's Connect",
    pageSubtext: "Have a wedding, event, or shoot in mind? Reach us instantly via WhatsApp or drop us an email.",
    email1: "thestudioh.in@gmail.com",
    email2: "thestudioh.in@gmail.com",
    email3: "thestudioh.in@gmail.com",
    whatsapp: "+91 90367 86971",
    replyTime: "Typically replies in minutes",
  },
  settings: {
    studioName: "Studio H",
    tagline: "Photography",
    city: "Bangalore, Karnataka, India",
    instagram: "https://www.instagram.com/thestudioh.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    facebook: "https://facebook.com/thestudioh",
    youtube: "https://youtube.com/@thestudioh",
    privacyUrl: "#",
    termsUrl: "#",
  },
};

type ContentKey = keyof typeof initialContent;
type SavedMap = Partial<Record<ContentKey, boolean>>;

const portfolioImages = [
  { id: 1, url: "https://images.unsplash.com/photo-1617724975854-70b5d0cedb0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", category: "Wedding", title: "Priya & Arjun — ITC Windsor" },
  { id: 2, url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", category: "Fashion", title: "Editorial — Vogue India" },
  { id: 3, url: "https://images.unsplash.com/photo-1622277583249-4c1fad490804?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", category: "Pre-Wedding", title: "Meghna & Rahul — Coorg" },
  { id: 4, url: "https://images.unsplash.com/photo-1537633468298-d86f0c2d4173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", category: "Wedding", title: "Deepa & Kiran — Palace Grounds" },
  { id: 5, url: "https://images.unsplash.com/photo-1531058020387-3be344556be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", category: "Corporate", title: "TechSummit 2026" },
  { id: 6, url: "https://images.unsplash.com/photo-1519741196428-6a2175fa2557?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", category: "Wedding", title: "Sanya & Dev — Leela Palace" },
];

const initialTestimonials = [
  { id: 1, name: "Priya & Arjun Kapoor", event: "Wedding", venue: "ITC Windsor", rating: 5, text: "Studio H captured our wedding in a way that felt like a Bollywood film. Every frame was pure gold.", year: "2025" },
  { id: 2, name: "Meghna Sharma", event: "Fashion", venue: "Studio Shoot", rating: 5, text: "The team understood my vision perfectly. Absolutely magazine-worthy.", year: "2026" },
  { id: 3, name: "TechSummit India", event: "Corporate", venue: "NIMHANS", rating: 5, text: "Delivered 800+ edited photos within 48 hours. Exceptional quality.", year: "2026" },
];

function Field({ label, value, onChange, multiline = false }: { label: string; value: string; onChange: (v: string) => void; multiline?: boolean }) {
  return (
    <div style={{ marginBottom: "1.25rem" }}>
      <label style={{ display: "block", fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: "0.4rem" }}>{label}</label>
      {multiline ? (
        <textarea rows={3} value={value} onChange={(e) => onChange(e.target.value)}
          style={{ width: "100%", background: "#000000", border: "1px solid rgba(188,24,35,0.2)", padding: "0.75rem 0.9rem", color: SILK, fontSize: "0.88rem", outline: "none", resize: "vertical", boxSizing: "border-box", fontFamily: "inherit", lineHeight: 1.6 }} />
      ) : (
        <input value={value} onChange={(e) => onChange(e.target.value)}
          style={{ width: "100%", background: "#000000", border: "1px solid rgba(188,24,35,0.2)", padding: "0.75rem 0.9rem", color: SILK, fontSize: "0.88rem", outline: "none", boxSizing: "border-box" }} />
      )}
    </div>
  );
}

export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState<ContentKey>("home");
  const [content, setContent] = useState(initialContent);
  const [saved, setSaved] = useState<SavedMap>({});
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [portfolioList, setPortfolioList] = useState(portfolioImages);
  const [testimonialList, setTestimonialList] = useState(initialTestimonials);
  const { isDesktop } = useBreakpoint();

  const update = (section: ContentKey, key: string, val: string) => {
    setContent((prev) => ({ ...prev, [section]: { ...prev[section], [key]: val } }));
    setSaved((prev) => ({ ...prev, [section]: false }));
  };

  const save = (section: ContentKey) => {
    setSaved((prev) => ({ ...prev, [section]: true }));
    setTimeout(() => setSaved((prev) => ({ ...prev, [section]: false })), 2500);
  };

  const c = content[activeSection] as Record<string, string>;

  const SidebarContent = () => (
    <>
      <div style={{ padding: "1.5rem 1.5rem 1rem", borderBottom: "1px solid rgba(188,24,35,0.1)", marginBottom: "0.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{ width: "28px", height: "28px", background: `linear-gradient(135deg, ${RED}, #8B0010)`, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Camera size={13} color="#fff" />
          </div>
          <div>
            <div style={{ color: SILK, fontSize: "0.82rem", fontWeight: 600 }}>Studio H</div>
            <div style={{ color: RED, fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>Admin Panel</div>
          </div>
        </div>
        {!isDesktop && (
          <button onClick={() => setSidebarOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", color: SILK }}><X size={18} /></button>
        )}
      </div>

      <div style={{ padding: "0.5rem 0" }}>
        {sections.map(({ id, label, icon: Icon }) => (
          <button key={id} onClick={() => { setActiveSection(id as ContentKey); setSidebarOpen(false); }}
            style={{
              width: "100%", display: "flex", alignItems: "center", gap: "0.75rem",
              padding: "0.8rem 1.5rem",
              background: activeSection === id ? "rgba(188,24,35,0.12)" : "none",
              border: "none", borderLeft: activeSection === id ? `2px solid ${RED}` : "2px solid transparent",
              cursor: "pointer", color: activeSection === id ? RED : "rgba(255,255,255,0.5)",
              fontSize: "0.82rem", textAlign: "left", transition: "all 0.2s",
            }}>
            <Icon size={15} /> {label}
            {saved[id as ContentKey] && <Check size={13} color="#4ade80" style={{ marginLeft: "auto" }} />}
          </button>
        ))}
      </div>

      <div style={{ padding: "1rem 1.5rem", marginTop: "auto", borderTop: "1px solid rgba(188,24,35,0.1)" }}>
        <Link to="/" target="_blank" style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.4)", textDecoration: "none", fontSize: "0.78rem", marginBottom: "0.75rem" }}>
          <Eye size={14} /> Preview Site
        </Link>
        <Link to="/admin/login" style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.3)", textDecoration: "none", fontSize: "0.75rem" }}>
          <LogOut size={13} /> Sign Out
        </Link>
      </div>
    </>
  );

  return (
    <div style={{ background: OBSIDIAN, minHeight: "100vh", display: "flex" }}>
      {/* Desktop sidebar */}
      {isDesktop && (
        <aside style={{ width: "230px", background: "#000000", borderRight: "1px solid rgba(188,24,35,0.1)", flexShrink: 0, display: "flex", flexDirection: "column", height: "100vh", position: "sticky", top: 0, overflowY: "auto" }}>
          <SidebarContent />
        </aside>
      )}

      {/* Mobile sidebar */}
      <AnimatePresence>
        {!isDesktop && sidebarOpen && (
          <motion.div initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }} transition={{ duration: 0.28 }}
            style={{ position: "fixed", inset: 0, zIndex: 1100, display: "flex" }}>
            <aside style={{ width: "240px", background: "#000000", height: "100%", display: "flex", flexDirection: "column", borderRight: "1px solid rgba(188,24,35,0.15)", overflowY: "auto" }}>
              <SidebarContent />
            </aside>
            <div onClick={() => setSidebarOpen(false)} style={{ flex: 1, background: "rgba(5,5,5,0.75)" }} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main */}
      <main style={{ flex: 1, overflowY: "auto", minWidth: 0 }}>
        {/* Top bar */}
        <div style={{ borderBottom: "1px solid rgba(188,24,35,0.1)", padding: "1rem 1.5rem", display: "flex", alignItems: "center", gap: "1rem", position: "sticky", top: 0, background: OBSIDIAN, zIndex: 100 }}>
          {!isDesktop && (
            <button onClick={() => setSidebarOpen(true)} style={{ background: "none", border: "1px solid rgba(188,24,35,0.25)", padding: "0.45rem", cursor: "pointer", color: SILK }}>
              <Menu size={18} />
            </button>
          )}
          <div>
            <div style={{ color: SILK, fontWeight: 600, fontSize: "0.95rem" }}>{sections.find(s => s.id === activeSection)?.label}</div>
            <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.72rem" }}>Content Management System</div>
          </div>
          <button
            onClick={() => save(activeSection)}
            style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "7px", background: saved[activeSection] ? "#166534" : `linear-gradient(135deg, ${RED}, #8B0010)`, color: "#fff", padding: "0.6rem 1.25rem", border: "none", cursor: "pointer", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", transition: "background 0.3s" }}
          >
            {saved[activeSection] ? <><Check size={13} /> Saved!</> : <><Save size={13} /> Save Changes</>}
          </button>
        </div>

        <div style={{ padding: "2rem 1.5rem", maxWidth: "800px" }}>
          <AnimatePresence mode="wait">
            <motion.div key={activeSection} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>

              {/* ── HOME ── */}
              {activeSection === "home" && (
                <div>
                  <SectionTitle>Hero Section</SectionTitle>
                  <Field label="Eye-brow Label" value={c.heroLabel} onChange={(v) => update("home", "heroLabel", v)} />
                  <Field label="Main Heading" value={c.heroHeading} onChange={(v) => update("home", "heroHeading", v)} multiline />
                  <Field label="Subtext" value={c.heroSubtext} onChange={(v) => update("home", "heroSubtext", v)} multiline />
                  <SectionTitle>Stats</SectionTitle>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem" }}>
                    {[["stat1", "stat1Label"], ["stat2", "stat2Label"], ["stat3", "stat3Label"], ["stat4", "stat4Label"]].map(([val, lbl]) => (
                      <div key={val} style={{ background: CHARCOAL, border: "1px solid rgba(188,24,35,0.12)", padding: "1rem" }}>
                        <Field label="Number" value={c[val]} onChange={(v) => update("home", val, v)} />
                        <Field label="Label" value={c[lbl]} onChange={(v) => update("home", lbl, v)} />
                      </div>
                    ))}
                  </div>
                  <SectionTitle>About Preview</SectionTitle>
                  <Field label="Heading" value={c.aboutHeading} onChange={(v) => update("home", "aboutHeading", v)} />
                  <Field label="Text" value={c.aboutText} onChange={(v) => update("home", "aboutText", v)} multiline />
                  <SectionTitle>Contact CTA</SectionTitle>
                  <Field label="CTA Heading" value={c.ctaHeading} onChange={(v) => update("home", "ctaHeading", v)} />
                  <Field label="CTA Subtext" value={c.ctaSubtext} onChange={(v) => update("home", "ctaSubtext", v)} multiline />
                </div>
              )}

              {/* ── ABOUT ── */}
              {activeSection === "about" && (
                <div>
                  <SectionTitle>Our Story</SectionTitle>
                  <Field label="Story Heading" value={c.storyHeading} onChange={(v) => update("about", "storyHeading", v)} />
                  <Field label="Story Text" value={c.storyText} onChange={(v) => update("about", "storyText", v)} multiline />
                  <SectionTitle>Stats</SectionTitle>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "1rem" }}>
                    {[["founded", "Founded"], ["weddings", "Weddings"], ["artists", "Artists"], ["awards", "Awards"]].map(([key, label]) => (
                      <div key={key} style={{ background: CHARCOAL, border: "1px solid rgba(188,24,35,0.12)", padding: "1rem" }}>
                        <Field label={label} value={c[key]} onChange={(v) => update("about", key, v)} />
                      </div>
                    ))}
                  </div>
                  <SectionTitle>Founder</SectionTitle>
                  <Field label="Founder Name" value={c.founderName} onChange={(v) => update("about", "founderName", v)} />
                  <Field label="Founder Role" value={c.founderRole} onChange={(v) => update("about", "founderRole", v)} />
                  <Field label="Founder Quote" value={c.founderQuote} onChange={(v) => update("about", "founderQuote", v)} multiline />
                  <SectionTitle>Mission & Vision</SectionTitle>
                  <Field label="Mission" value={c.mission} onChange={(v) => update("about", "mission", v)} multiline />
                  <Field label="Vision" value={c.vision} onChange={(v) => update("about", "vision", v)} multiline />
                </div>
              )}

              {/* ── PORTFOLIO ── */}
              {activeSection === "portfolio" && (
                <div>
                  <SectionTitle>Page Content</SectionTitle>
                  <Field label="Page Heading" value={c.pageHeading} onChange={(v) => update("portfolio", "pageHeading", v)} />
                  <Field label="Page Subtext" value={c.pageSubtext} onChange={(v) => update("portfolio", "pageSubtext", v)} multiline />
                  <SectionTitle>Portfolio Images ({portfolioList.length})</SectionTitle>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
                    {portfolioList.map((img) => (
                      <div key={img.id} style={{ background: CHARCOAL, border: "1px solid rgba(188,24,35,0.1)", overflow: "hidden" }}>
                        <div style={{ height: "110px", overflow: "hidden", position: "relative" }}>
                          <img src={img.url} alt={img.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                          <div style={{ position: "absolute", top: "6px", right: "6px" }}>
                            <span style={{ background: RED, color: "#fff", padding: "0.15rem 0.5rem", fontSize: "0.6rem", fontWeight: 700, borderRadius: "2px" }}>{img.category}</span>
                          </div>
                        </div>
                        <div style={{ padding: "0.6rem" }}>
                          <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.7rem", marginBottom: "0.4rem" }}>{img.title}</div>
                          <button onClick={() => setPortfolioList((l) => l.filter((i) => i.id !== img.id))}
                            style={{ display: "flex", alignItems: "center", gap: "4px", background: "none", border: "none", cursor: "pointer", color: "rgba(255,100,100,0.7)", fontSize: "0.68rem", padding: 0 }}>
                            <Trash2 size={11} /> Remove
                          </button>
                        </div>
                      </div>
                    ))}
                    {/* Add placeholder */}
                    <div style={{ background: CHARCOAL, border: "1px dashed rgba(188,24,35,0.2)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.5rem", height: "150px", cursor: "pointer", color: "rgba(255,255,255,0.25)", fontSize: "0.72rem" }}>
                      <Plus size={20} color={RED} />
                      Add Image
                    </div>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.75rem" }}>In production, images are uploaded via Cloudinary integration.</p>
                </div>
              )}

              {/* ── TESTIMONIALS ── */}
              {activeSection === "testimonials" && (
                <div>
                  <SectionTitle>Page Content</SectionTitle>
                  <Field label="Page Heading" value={c.pageHeading} onChange={(v) => update("testimonials", "pageHeading", v)} />
                  <Field label="Page Subtext" value={c.pageSubtext} onChange={(v) => update("testimonials", "pageSubtext", v)} multiline />
                  <Field label="Rating Label" value={c.ratingLabel} onChange={(v) => update("testimonials", "ratingLabel", v)} />
                  <SectionTitle>Reviews ({testimonialList.length})</SectionTitle>
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1.5rem" }}>
                    {testimonialList.map((t) => (
                      <div key={t.id} style={{ background: CHARCOAL, border: "1px solid rgba(188,24,35,0.1)", padding: "1.25rem" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                          <div>
                            <div style={{ color: SILK, fontWeight: 600, fontSize: "0.88rem" }}>{t.name}</div>
                            <div style={{ color: RED, fontSize: "0.72rem" }}>{t.event} — {t.venue} · {t.year}</div>
                          </div>
                          <button onClick={() => setTestimonialList((l) => l.filter((i) => i.id !== t.id))}
                            style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,100,100,0.6)" }}>
                            <Trash2 size={14} />
                          </button>
                        </div>
                        <div style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.82rem", fontStyle: "italic" }}>"{t.text}"</div>
                      </div>
                    ))}
                  </div>
                  <button style={{ display: "flex", alignItems: "center", gap: "8px", background: "rgba(188,24,35,0.12)", border: `1px solid rgba(188,24,35,0.3)`, color: RED, padding: "0.7rem 1.25rem", cursor: "pointer", fontSize: "0.78rem", fontWeight: 600 }}>
                    <Plus size={14} /> Add Testimonial
                  </button>
                </div>
              )}

              {/* ── CONTACT ── */}
              {activeSection === "contact" && (
                <div>
                  <SectionTitle>Page Content</SectionTitle>
                  <Field label="Page Heading" value={c.pageHeading} onChange={(v) => update("contact", "pageHeading", v)} />
                  <Field label="Page Subtext" value={c.pageSubtext} onChange={(v) => update("contact", "pageSubtext", v)} multiline />
                  <SectionTitle>Contact Details</SectionTitle>
                  <Field label="General Email" value={c.email1} onChange={(v) => update("contact", "email1", v)} />
                  <Field label="Bookings Email" value={c.email2} onChange={(v) => update("contact", "email2", v)} />
                  <Field label="Gallery Email" value={c.email3} onChange={(v) => update("contact", "email3", v)} />
                  <Field label="WhatsApp Number" value={c.whatsapp} onChange={(v) => update("contact", "whatsapp", v)} />
                  <Field label="WhatsApp Reply Time" value={c.replyTime} onChange={(v) => update("contact", "replyTime", v)} />
                </div>
              )}

              {/* ── SETTINGS ── */}
              {activeSection === "settings" && (
                <div>
                  <SectionTitle>Brand</SectionTitle>
                  <Field label="Studio Name" value={c.studioName} onChange={(v) => update("settings", "studioName", v)} />
                  <Field label="Tagline" value={c.tagline} onChange={(v) => update("settings", "tagline", v)} />
                  <Field label="Location / City" value={c.city} onChange={(v) => update("settings", "city", v)} />
                  <SectionTitle>Social Media</SectionTitle>
                  <Field label="Instagram URL" value={c.instagram} onChange={(v) => update("settings", "instagram", v)} />
                  <Field label="Facebook URL" value={c.facebook} onChange={(v) => update("settings", "facebook", v)} />
                  <Field label="YouTube URL" value={c.youtube} onChange={(v) => update("settings", "youtube", v)} />
                  <SectionTitle>Legal Pages</SectionTitle>
                  <Field label="Privacy Policy URL" value={c.privacyUrl} onChange={(v) => update("settings", "privacyUrl", v)} />
                  <Field label="Terms & Conditions URL" value={c.termsUrl} onChange={(v) => update("settings", "termsUrl", v)} />
                </div>
              )}

            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontSize: "0.68rem", letterSpacing: "0.2em", color: RED, textTransform: "uppercase", marginBottom: "1rem", marginTop: "1.75rem", paddingBottom: "0.5rem", borderBottom: "1px solid rgba(188,24,35,0.12)" }}>
      {children}
    </div>
  );
}
