import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, Send, CheckCircle } from "lucide-react";

const GOLD = "#bc1823";
const OBSIDIAN = "#000000";
const CHARCOAL = "#000000";
const SILK = "#ffffff";

const WHATSAPP_NUMBER = "919036786971";
const EMAIL_BOOKING = "thestudioh.in@gmail.com";
const EMAIL_HELLO = "thestudioh.in@gmail.com";
const PHONE = "+91 90367 86971";

function buildGmailComposeUrl(to: string, subject: string, body: string) {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to,
    su: subject,
    body,
  });

  return `https://mail.google.com/mail/?${params.toString()}`;
}

function buildBookingBody(formData: { name: string; email: string; service: string; message: string }) {
  const serviceLabel = formData.service
    ? formData.service.charAt(0).toUpperCase() + formData.service.slice(1)
    : "Not specified";

  return [
    "I am interested in booking your photography services for an upcoming event. Please find the event details below:",
    "",
    "- Event Type: [Event Type]",
    "- Event Date: [DD/MM/YYYY]",
    "- Event Duration: [Start Time – End Time / Total Hours]",
    "- Event Location: [Venue/City]",
    "- Additional Requirements: [Brief description of the event, photography style, special requests, or any other relevant details.]",
    "",
    `Name: ${formData.name || ""}`,
    `Email: ${formData.email || ""}`,
    `Service: ${serviceLabel}`,
    "",
    formData.message || "",
  ].join("\n");
}

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Photography inquiry from ${formData.name || "Website visitor"}`;
    const body = buildBookingBody(formData);

    window.open(buildGmailComposeUrl(EMAIL_BOOKING, subject, body), "_blank", "noopener,noreferrer");
  };

  return (
    <div style={{ background: OBSIDIAN, minHeight: "100vh", paddingTop: "80px", color: SILK }}>
      {/* Hero */}
      <section style={{ padding: "5rem 2rem 4rem", textAlign: "center", borderBottom: `1px solid rgba(188,24,35,0.1)` }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div style={{ fontSize: "0.7rem", letterSpacing: "0.3em", color: GOLD, textTransform: "uppercase", marginBottom: "1rem" }}>Get in Touch</div>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 6vw, 5rem)", marginBottom: "1rem" }}>
            Let's <span style={{ color: GOLD, fontStyle: "italic" }}>Connect</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.5)", maxWidth: "480px", margin: "0 auto", lineHeight: 1.8 }}>
            Have a wedding, event, or shoot in mind? Reach us instantly via WhatsApp or drop us an email.
          </p>
        </motion.div>
      </section>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "4rem 2rem" }}>
        {/* ── Two contact cards ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "1.5rem", marginBottom: "4rem" }}>

          {/* WhatsApp card */}
          <motion.a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Studio%20H%2C%20I%27d%20like%20to%20inquire%20about%20a%20photography%20session.`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            whileHover={{ y: -4 }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "1.25rem",
              padding: "3rem 2rem",
              background: "#075E54",
              textDecoration: "none",
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="#ffffff">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <div>
              <div style={{ color: "#ffffff", fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.4rem" }}>Chat on WhatsApp</div>
              <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.82rem" }}>+91 90367 86971</div>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.75rem", marginTop: "0.3rem" }}>Typically replies in minutes</div>
            </div>
            <div style={{ background: "rgba(255,255,255,0.2)", color: "#ffffff", padding: "0.55rem 1.5rem", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", borderRadius: "2px" }}>
              Open WhatsApp →
            </div>
          </motion.a>

          {/* Email card */}
          <motion.a
            href={buildGmailComposeUrl(EMAIL_BOOKING, "Photography inquiry", buildBookingBody(formData))}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            whileHover={{ y: -4 }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "1.25rem",
              padding: "3rem 2rem",
              background: CHARCOAL,
              border: `1px solid rgba(188,24,35,0.3)`,
              textDecoration: "none",
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "rgba(188,24,35,0.12)", border: `1px solid rgba(188,24,35,0.4)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Mail size={28} color={GOLD} />
            </div>
            <div>
              <div style={{ color: SILK, fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.4rem" }}>Send an Email</div>
              <div style={{ color: GOLD, fontSize: "0.82rem" }}>{EMAIL_BOOKING}</div>
              <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem", marginTop: "0.3rem" }}>We reply within 2 hours</div>
            </div>
            <div style={{ background: `linear-gradient(135deg, ${GOLD}, #8B0010)`, color: "#ffffff", padding: "0.55rem 1.5rem", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Compose Email →
            </div>
          </motion.a>
        </div>

        {/* ── Contact Form ── */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <div style={{ fontSize: "0.7rem", letterSpacing: "0.3em", color: GOLD, textTransform: "uppercase", marginBottom: "0.75rem" }}>Or fill this form</div>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2rem", color: SILK }}>Send Us a Message</h2>
          </div>

          <form onSubmit={handleSubmit} style={{ background: CHARCOAL, border: "1px solid rgba(188,24,35,0.12)", padding: "2.5rem", maxWidth: "700px", margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))", gap: "1.25rem", marginBottom: "1.25rem" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: "0.5rem" }}>Your Name *</label>
                <input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Full name"
                  style={{ width: "100%", background: OBSIDIAN, border: "1px solid rgba(188,24,35,0.2)", padding: "0.85rem 1rem", color: SILK, fontSize: "0.9rem", outline: "none", boxSizing: "border-box" }}
                />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: "0.5rem" }}>Email Address *</label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  style={{ width: "100%", background: OBSIDIAN, border: "1px solid rgba(188,24,35,0.2)", padding: "0.85rem 1rem", color: SILK, fontSize: "0.9rem", outline: "none", boxSizing: "border-box" }}
                />
              </div>
            </div>
            <div style={{ marginBottom: "1.25rem" }}>
              <label style={{ display: "block", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: "0.5rem" }}>Service Interested In</label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                style={{ width: "100%", background: OBSIDIAN, border: "1px solid rgba(188,24,35,0.2)", padding: "0.85rem 1rem", color: formData.service ? SILK : "rgba(255,255,255,0.3)", fontSize: "0.9rem", outline: "none", boxSizing: "border-box" }}
              >
                <option value="">Select a service...</option>
                <option value="wedding">Wedding Photography</option>
                <option value="prewedding">Pre-Wedding Shoot</option>
                <option value="corporate">Corporate Events</option>
                <option value="fashion">Fashion & Editorial</option>
                <option value="videography">Videography</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div style={{ marginBottom: "2rem" }}>
              <label style={{ display: "block", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: "0.5rem" }}>Message *</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about your event, date, location, and vision..."
                style={{ width: "100%", background: OBSIDIAN, border: "1px solid rgba(188,24,35,0.2)", padding: "0.85rem 1rem", color: SILK, fontSize: "0.9rem", outline: "none", resize: "vertical", boxSizing: "border-box", fontFamily: "inherit" }}
              />
            </div>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <button
                type="submit"
                style={{ flex: 1, minWidth: "160px", background: `linear-gradient(135deg, ${GOLD}, #8B0010)`, color: "#ffffff", padding: "1rem", border: "none", cursor: "pointer", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}
              >
                <Send size={15} /> Send Message
              </button>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Studio%20H!`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ flex: 1, minWidth: "160px", background: "#25D366", color: "#ffffff", padding: "1rem", textDecoration: "none", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#ffffff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp Instead
              </a>
            </div>
          </form>
        </motion.div>

        {/* ── Quick contact strip ── */}
        <div style={{ marginTop: "3rem", padding: "1.5rem 2rem", background: "rgba(188,24,35,0.06)", border: "1px solid rgba(188,24,35,0.15)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "2rem" }}>
          <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem" }}>Direct contact:</div>
          {[
            { label: "Email", value: EMAIL_HELLO, href: `mailto:${EMAIL_HELLO}`, icon: Mail },
            { label: "Phone", value: PHONE, href: `tel:${PHONE.replace(/\s/g, "")}`, icon: Phone },
          ].map(({ label, value, href, icon: Icon }) => (
            <a key={label} href={href} style={{ textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" }}>
              <Icon size={15} color={GOLD} />
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>{label}</span>
              <span style={{ color: GOLD, fontSize: "0.82rem" }}>{value}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
