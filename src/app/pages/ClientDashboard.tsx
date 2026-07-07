import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { Calendar, CreditCard, Image, Download, Clock, CheckCircle, AlertCircle, Star, Eye, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const GOLD = "#bc1823";
const OBSIDIAN = "#000000";
const CHARCOAL = "#000000";
const SILK = "#ffffff";

const bookings = [
  {
    id: "SH-241101", service: "Wedding Photography", package: "Luxury", date: "Dec 15, 2026", venue: "Leela Palace, Bangalore",
    status: "Confirmed", paid: 150000, total: 150000, stage: "Shoot Scheduled",
    stages: ["Booked", "Advance Paid", "Shoot Scheduled", "Editing", "Delivered"],
    currentStage: 2,
  },
  {
    id: "SH-241089", service: "Pre-Wedding Shoot", package: "Premium", date: "Oct 22, 2026", venue: "Hampi, Karnataka",
    status: "Delivered", paid: 40000, total: 40000, stage: "Delivered",
    stages: ["Booked", "Advance Paid", "Shoot Scheduled", "Editing", "Delivered"],
    currentStage: 4,
  },
];

const galleries = [
  { id: "gal-001", title: "Priya & Arjun — Wedding", date: "Oct 22, 2026", photos: 842, cover: "https://images.unsplash.com/photo-1519741196428-6a2175fa2557?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", status: "Ready" },
  { id: "gal-002", title: "Pre-Wedding — Hampi", date: "Aug 10, 2026", photos: 256, cover: "https://images.unsplash.com/photo-1600270237614-d20aef1c8b14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", status: "Ready" },
];

const payments = [
  { id: "pay-001", date: "Nov 1, 2026", amount: 45000, type: "Advance", status: "Paid", booking: "SH-241101" },
  { id: "pay-002", date: "Dec 1, 2026", amount: 105000, type: "Balance", status: "Paid", booking: "SH-241101" },
  { id: "pay-003", date: "Sep 15, 2026", amount: 40000, type: "Full Payment", status: "Paid", booking: "SH-241089" },
];

const tabs = [
  { id: "overview", label: "Overview", icon: Calendar },
  { id: "bookings", label: "Bookings", icon: Calendar },
  { id: "galleries", label: "Galleries", icon: Image },
  { id: "payments", label: "Payments", icon: CreditCard },
];

export default function ClientDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div style={{ background: OBSIDIAN, minHeight: "100vh", paddingTop: "80px", color: SILK }}>
      {/* Header */}
      <div style={{ background: CHARCOAL, borderBottom: `1px solid rgba(188,24,35,0.1)`, padding: "2rem" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <div style={{ fontSize: "0.7rem", letterSpacing: "0.3em", color: GOLD, textTransform: "uppercase", marginBottom: "0.25rem" }}>Client Portal</div>
            <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "2rem", color: SILK }}>Welcome back, Priya ✨</h1>
          </div>
          <Link to="/book-service" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: `linear-gradient(135deg, ${GOLD}, #8B0010)`, color: "#ffffff", padding: "0.75rem 1.5rem", textDecoration: "none", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Book New Session <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "2rem" }}>
        {/* Tabs */}
        <div style={{ display: "flex", borderBottom: `1px solid rgba(188,24,35,0.12)`, marginBottom: "2.5rem", overflowX: "auto" }}>
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              style={{ display: "flex", alignItems: "center", gap: "8px", padding: "1rem 1.5rem", background: "none", border: "none", cursor: "pointer", fontSize: "0.85rem", color: activeTab === id ? GOLD : "rgba(245,245,247,0.5)", borderBottom: activeTab === id ? `2px solid ${GOLD}` : "2px solid transparent", fontWeight: activeTab === id ? 600 : 400, whiteSpace: "nowrap", transition: "color 0.3s" }}
            >
              <Icon size={16} /> {label}
            </button>
          ))}
        </div>

        {/* Overview */}
        {activeTab === "overview" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.25rem", marginBottom: "3rem" }}>
              {[
                { label: "Active Bookings", value: "1", icon: Calendar, color: GOLD },
                { label: "Galleries Ready", value: "2", icon: Image, color: "#4ade80" },
                { label: "Total Photos", value: "1,098", icon: Image, color: "#60a5fa" },
                { label: "Total Spent", value: "₹1,90,000", icon: CreditCard, color: GOLD },
              ].map(({ label, value, icon: Icon, color }) => (
                <div key={label} style={{ background: CHARCOAL, border: "1px solid rgba(188,24,35,0.1)", padding: "1.5rem" }}>
                  <Icon size={20} color={color} style={{ marginBottom: "0.75rem" }} />
                  <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.75rem", color: SILK, marginBottom: "0.25rem" }}>{value}</div>
                  <div style={{ color: "rgba(245,245,247,0.45)", fontSize: "0.78rem" }}>{label}</div>
                </div>
              ))}
            </div>

            {/* Current Booking Status */}
            <div style={{ background: CHARCOAL, border: "1px solid rgba(188,24,35,0.15)", padding: "2rem", marginBottom: "2rem" }}>
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.2rem", color: SILK, marginBottom: "1.5rem" }}>Upcoming: Wedding Photography</h3>
              <div style={{ marginBottom: "0.5rem", color: "rgba(245,245,247,0.5)", fontSize: "0.8rem" }}>Dec 15, 2026 · Leela Palace, Bangalore</div>
              <div style={{ display: "flex", alignItems: "center", gap: "0", marginTop: "2rem" }}>
                {bookings[0].stages.map((stage, i) => (
                  <div key={stage} style={{ display: "flex", alignItems: "center", flex: 1 }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
                      <div style={{
                        width: "28px", height: "28px", borderRadius: "50%",
                        background: i < bookings[0].currentStage ? GOLD : i === bookings[0].currentStage ? "rgba(188,24,35,0.2)" : "rgba(255,255,255,0.05)",
                        border: `2px solid ${i <= bookings[0].currentStage ? GOLD : "rgba(188,24,35,0.2)"}`,
                        display: "flex", alignItems: "center", justifyContent: "center"
                      }}>
                        {i < bookings[0].currentStage ? <CheckCircle size={14} color={"#ffffff"} fill={"#ffffff"} /> : <span style={{ fontSize: "0.65rem", color: i === bookings[0].currentStage ? GOLD : "rgba(188,24,35,0.4)" }}>{i + 1}</span>}
                      </div>
                      <span style={{ fontSize: "0.62rem", color: i <= bookings[0].currentStage ? GOLD : "rgba(245,245,247,0.3)", textAlign: "center", maxWidth: "60px", lineHeight: 1.3 }}>{stage}</span>
                    </div>
                    {i < bookings[0].stages.length - 1 && <div style={{ flex: 1, height: "2px", background: i < bookings[0].currentStage ? GOLD : "rgba(188,24,35,0.1)", margin: "0 4px", marginBottom: "22px" }} />}
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Galleries */}
            <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.25rem", color: SILK, marginBottom: "1.25rem" }}>Your Galleries</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
              {galleries.map((g) => (
                <div key={g.id} style={{ background: CHARCOAL, border: "1px solid rgba(188,24,35,0.1)", overflow: "hidden" }}>
                  <div style={{ position: "relative", height: "180px" }}>
                    <ImageWithFallback src={g.cover} alt={g.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    <div style={{ position: "absolute", top: "1rem", right: "1rem", background: "#4ade80", color: "#000", padding: "0.2rem 0.6rem", fontSize: "0.65rem", fontWeight: 700, borderRadius: "2px" }}>{g.status}</div>
                  </div>
                  <div style={{ padding: "1.25rem" }}>
                    <div style={{ fontWeight: 600, marginBottom: "0.3rem" }}>{g.title}</div>
                    <div style={{ color: "rgba(245,245,247,0.45)", fontSize: "0.78rem", marginBottom: "1rem" }}>{g.photos} photos · {g.date}</div>
                    <div style={{ display: "flex", gap: "0.75rem" }}>
                      <button style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", padding: "0.6rem", background: "rgba(188,24,35,0.1)", border: `1px solid ${GOLD}`, color: GOLD, cursor: "pointer", fontSize: "0.78rem" }}>
                        <Eye size={14} /> View
                      </button>
                      <button style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", padding: "0.6rem", color: "#ffffff", cursor: "pointer", fontSize: "0.78rem", fontWeight: 700 }}>
                        <Download size={14} /> Download
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Bookings Tab */}
        {activeTab === "bookings" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {bookings.map((b) => (
                <div key={b.id} style={{ background: CHARCOAL, border: "1px solid rgba(188,24,35,0.12)", padding: "2rem" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", marginBottom: "1.5rem" }}>
                    <div>
                      <div style={{ fontSize: "0.7rem", color: GOLD, letterSpacing: "0.15em", marginBottom: "0.3rem" }}>{b.id}</div>
                      <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.2rem", color: SILK, marginBottom: "0.25rem" }}>{b.service}</h3>
                      <div style={{ color: "rgba(245,245,247,0.5)", fontSize: "0.83rem" }}>{b.package} Package · {b.date} · {b.venue}</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ background: b.status === "Delivered" ? "rgba(74,222,128,0.15)" : "rgba(188,24,35,0.15)", border: `1px solid ${b.status === "Delivered" ? "#4ade80" : GOLD}`, color: b.status === "Delivered" ? "#4ade80" : GOLD, padding: "0.3rem 0.9rem", fontSize: "0.72rem", fontWeight: 600, marginBottom: "0.5rem", display: "inline-block" }}>
                        {b.status === "Delivered" ? <CheckCircle size={12} style={{ display: "inline", marginRight: "4px" }} /> : <Clock size={12} style={{ display: "inline", marginRight: "4px" }} />}
                        {b.stage}
                      </div>
                      <div style={{ color: GOLD, fontFamily: "var(--font-heading)", fontSize: "1.2rem" }}>₹{b.total.toLocaleString()}</div>
                    </div>
                  </div>
                  {/* Progress */}
                  <div style={{ display: "flex", alignItems: "center" }}>
                    {b.stages.map((stage, i) => (
                      <div key={stage} style={{ display: "flex", alignItems: "center", flex: 1 }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                          <div style={{ width: "22px", height: "22px", borderRadius: "50%", background: i <= b.currentStage ? GOLD : "transparent", border: `2px solid ${i <= b.currentStage ? GOLD : "rgba(188,24,35,0.2)"}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                            {i < b.currentStage && <CheckCircle size={11} color={"#ffffff"} fill={"#ffffff"} />}
                          </div>
                          <span style={{ fontSize: "0.6rem", color: i <= b.currentStage ? GOLD : "rgba(245,245,247,0.3)", textAlign: "center", maxWidth: "55px", lineHeight: 1.2 }}>{stage}</span>
                        </div>
                        {i < b.stages.length - 1 && <div style={{ flex: 1, height: "1px", background: i < b.currentStage ? GOLD : "rgba(188,24,35,0.1)", margin: "0 4px", marginBottom: "16px" }} />}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Galleries Tab */}
        {activeTab === "galleries" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
              {galleries.map((g) => (
                <div key={g.id} style={{ background: CHARCOAL, border: "1px solid rgba(188,24,35,0.1)", overflow: "hidden" }}>
                  <div style={{ position: "relative", height: "220px" }}>
                    <ImageWithFallback src={g.cover} alt={g.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    <div style={{ position: "absolute", inset: 0, background: "rgba(5,5,5,0.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Star size={28} color={GOLD} fill={GOLD} style={{ opacity: 0.7 }} />
                    </div>
                  </div>
                  <div style={{ padding: "1.5rem" }}>
                    <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", color: SILK, marginBottom: "0.5rem" }}>{g.title}</h3>
                    <div style={{ color: "rgba(245,245,247,0.45)", fontSize: "0.78rem", marginBottom: "1.25rem" }}>{g.photos} photos · Delivered {g.date}</div>
                    <div style={{ display: "flex", gap: "0.75rem" }}>
                      <button style={{ flex: 1, padding: "0.7rem", background: "transparent", border: `1px solid ${GOLD}`, color: GOLD, cursor: "pointer", fontSize: "0.8rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
                        <Eye size={15} /> View All
                      </button>
                      <button style={{ flex: 1, padding: "0.7rem", color: "#ffffff", cursor: "pointer", fontSize: "0.8rem", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
                        <Download size={15} /> Download
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Payments Tab */}
        {activeTab === "payments" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div style={{ background: CHARCOAL, border: "1px solid rgba(188,24,35,0.12)", overflow: "hidden" }}>
              <div style={{ overflowX: "auto" }}>
              <div style={{ padding: "1.25rem 1.75rem", borderBottom: "1px solid rgba(188,24,35,0.1)", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", color: GOLD, fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", minWidth: "500px" }}>
                <span>Booking</span><span>Date</span><span>Type</span><span>Amount</span><span>Status</span>
              </div>
              {payments.map((p) => (
                <div key={p.id} style={{ padding: "1.25rem 1.75rem", borderBottom: "1px solid rgba(188,24,35,0.06)", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", alignItems: "center", minWidth: "500px" }}>
                  <span style={{ color: GOLD, fontSize: "0.82rem" }}>{p.booking}</span>
                  <span style={{ color: "rgba(245,245,247,0.55)", fontSize: "0.82rem" }}>{p.date}</span>
                  <span style={{ color: "rgba(245,245,247,0.55)", fontSize: "0.82rem" }}>{p.type}</span>
                  <span style={{ color: SILK, fontWeight: 600, fontSize: "0.9rem" }}>₹{p.amount.toLocaleString()}</span>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <CheckCircle size={13} color="#4ade80" />
                    <span style={{ color: "#4ade80", fontSize: "0.78rem" }}>{p.status}</span>
                  </div>
                </div>
              ))}
              </div>
              <div style={{ padding: "1.25rem 1.75rem", display: "flex", justifyContent: "flex-end", gap: "1rem", alignItems: "center" }}>
                <span style={{ color: "rgba(245,245,247,0.5)", fontSize: "0.85rem" }}>Total Paid</span>
                <span style={{ fontFamily: "var(--font-heading)", fontSize: "1.4rem", color: GOLD }}>₹{payments.reduce((s, p) => s + p.amount, 0).toLocaleString()}</span>
              </div>
            </div>
            <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
              <button style={{ display: "flex", alignItems: "center", gap: "8px", padding: "0.8rem 1.5rem", background: "transparent", border: `1px solid ${GOLD}`, color: GOLD, cursor: "pointer", fontSize: "0.8rem" }}>
                <Download size={14} /> Download All Invoices
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
