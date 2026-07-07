import { Link } from "react-router";
import { Instagram, Mail, Phone, Settings } from "lucide-react";
import studioHLogo from "@/imports/TheStudioHLogo_for_circle.png";

const RED = "#bc1823";
const SILK = "#ffffff";
const WA = "919036786971";
const PHONE = "+91 90367 86971";
const EMAIL = "thestudioh.in@gmail.com";
const INSTAGRAM = "https://www.instagram.com/thestudioh.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

export function Footer() {
  return (
    <footer style={{ background: "#000000", borderTop: "1px solid rgba(188,24,35,0.12)", padding: "3.5rem 2rem 2rem" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "3rem", marginBottom: "3rem" }}>

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem" }}>
              <img src={studioHLogo} alt="The Studio H" style={{ width: "38px", height: "38px", borderRadius: "50%", objectFit: "cover", border: `1px solid rgba(188,24,35,0.35)` }} />
              <div>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.2rem", color: SILK }}>The Studio <span style={{ color: RED, fontFamily: "var(--font-logo-h)", fontWeight: 800 }}>H</span></div>
                <div style={{ fontSize: "0.55rem", color: RED, letterSpacing: "0.2em", textTransform: "uppercase" }}>Photography</div>
              </div>
            </div>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.82rem", lineHeight: 1.8 }}>
              Luxury cinematic photography & videography. Bangalore, India.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.25rem" }}>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="The Studio H on Instagram" style={{ width: "34px", height: "34px", border: "1px solid rgba(188,24,35,0.3)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: RED, transition: "all 0.3s", textDecoration: "none" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = RED; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = RED; }}>
                <Instagram size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: RED, fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1.25rem" }}>Pages</h4>
            {[["Home", "/"], ["About Us", "/about"], ["Portfolio", "/portfolio"], ["Testimonials", "/testimonials"], ["Contact", "/contact"]].map(([label, to]) => (
              <div key={to} style={{ marginBottom: "0.65rem" }}>
                <Link to={to} style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.82rem", transition: "color 0.3s" }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.color = RED; }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "rgba(255,255,255,0.5)"; }}>
                  {label}
                </Link>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: RED, fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1.25rem" }}>Contact</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              <a href={`mailto:${EMAIL}`} style={{ display: "flex", gap: "0.6rem", alignItems: "center", color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.82rem" }}>
                <Mail size={13} color={RED} /> {EMAIL}
              </a>
              <a href={`tel:${PHONE.replace(/\s/g, "")}`} style={{ display: "flex", gap: "0.6rem", alignItems: "center", color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.82rem" }}>
                <Phone size={13} color={RED} /> {PHONE}
              </a>
              <a
                href={`https://wa.me/${WA}`}
                target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#25D366", color: "#fff", padding: "0.5rem 1rem", textDecoration: "none", fontSize: "0.76rem", fontWeight: 700, marginTop: "0.25rem" }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        <div style={{ height: "1px", background: "rgba(188,24,35,0.1)", marginBottom: "1.5rem" }} />

        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
          <div style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.72rem" }}>
            © {new Date().getFullYear()} Studio H · thestudioh.in · Bangalore, India
          </div>
          <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap" }}>
            {["Privacy Policy", "Terms & Conditions"].map((item) => (
              <a key={item} href="#" style={{ color: "rgba(255,255,255,0.25)", textDecoration: "none", fontSize: "0.72rem" }}>{item}</a>
            ))}
          </div>
          <Link to="/admin/login" style={{ color: "rgba(255,255,255,0.2)", textDecoration: "none", display: "flex", alignItems: "center", gap: "4px", fontSize: "0.68rem", letterSpacing: "0.1em" }} title="Admin Login">
            <Settings size={11} /> Staff
          </Link>
        </div>
      </div>
    </footer>
  );
}
