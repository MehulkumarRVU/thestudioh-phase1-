import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { motion } from "motion/react";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import studioHLogo from "@/imports/TheStudioHLogo_for_circle.png";

const GOLD = "#bc1823";
const OBSIDIAN = "#000000";
const CHARCOAL = "#000000";
const SILK = "#ffffff";

interface LoginPageProps {
  isAdmin?: boolean;
}

export default function LoginPage({ isAdmin = false }: LoginPageProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [isForgot, setIsForgot] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isForgot) { setSubmitted(true); return; }
    navigate(isAdmin ? "/admin/dashboard" : "/client-dashboard");
  };

  return (
    <div style={{ background: OBSIDIAN, minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem", position: "relative", overflow: "hidden" }}>
      {/* Background pattern */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(circle at 20% 50%, rgba(188,24,35,0.04) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(188,24,35,0.04) 0%, transparent 50%)` }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(rgba(188,24,35,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(188,24,35,0.03) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ background: CHARCOAL, border: "1px solid rgba(188,24,35,0.2)", padding: "3rem", width: "100%", maxWidth: "420px", position: "relative" }}
      >
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <Link to="/" style={{ textDecoration: "none", display: "inline-flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
            <img src={studioHLogo} alt="The Studio H" style={{ width: "64px", height: "64px", borderRadius: "50%", objectFit: "cover" }} />
            <div>
              <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", color: SILK }}>The Studio <span style={{ color: GOLD, fontFamily: "var(--font-logo-h)", fontWeight: 800 }}>H</span></div>
              {isAdmin && <div style={{ fontSize: "0.65rem", color: GOLD, letterSpacing: "0.25em", textTransform: "uppercase" }}>Admin Portal</div>}
            </div>
          </Link>
        </div>

        {/* Title */}
        <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", color: SILK, textAlign: "center", marginBottom: "0.5rem" }}>
          {isForgot ? "Reset Password" : isRegister ? "Create Account" : isAdmin ? "Admin Login" : "Client Login"}
        </h2>
        <p style={{ color: "rgba(245,245,247,0.4)", fontSize: "0.82rem", textAlign: "center", marginBottom: "2rem" }}>
          {isForgot ? "Enter your email to receive a reset link" : isRegister ? "Join Studio H as a new client" : "Access your bookings and galleries"}
        </p>

        {submitted ? (
          <div style={{ textAlign: "center", padding: "1.5rem 0" }}>
            <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "rgba(188,24,35,0.1)", border: `1px solid ${GOLD}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem" }}>
              <ArrowRight size={22} color={GOLD} />
            </div>
            <p style={{ color: SILK, marginBottom: "0.5rem" }}>Reset link sent!</p>
            <p style={{ color: "rgba(245,245,247,0.45)", fontSize: "0.82rem" }}>Check your email at <strong style={{ color: GOLD }}>{email}</strong></p>
            <button onClick={() => { setIsForgot(false); setSubmitted(false); }} style={{ marginTop: "1.5rem", background: "none", border: "none", cursor: "pointer", color: GOLD, textDecoration: "underline", fontSize: "0.85rem" }}>Back to Login</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {isRegister && (
              <div style={{ marginBottom: "1.25rem" }}>
                <label style={{ display: "block", fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(245,245,247,0.5)", marginBottom: "0.5rem" }}>Full Name</label>
                <input required placeholder="Your name" style={{ width: "100%", background: OBSIDIAN, border: "1px solid rgba(188,24,35,0.2)", padding: "0.85rem 1rem", color: SILK, fontSize: "0.9rem", outline: "none", boxSizing: "border-box" }} />
              </div>
            )}
            <div style={{ marginBottom: "1.25rem" }}>
              <label style={{ display: "block", fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(245,245,247,0.5)", marginBottom: "0.5rem" }}>Email Address</label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                style={{ width: "100%", background: OBSIDIAN, border: "1px solid rgba(188,24,35,0.2)", padding: "0.85rem 1rem", color: SILK, fontSize: "0.9rem", outline: "none", boxSizing: "border-box" }}
              />
            </div>
            {!isForgot && (
              <div style={{ marginBottom: "1.5rem" }}>
                <label style={{ display: "block", fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(245,245,247,0.5)", marginBottom: "0.5rem" }}>Password</label>
                <div style={{ position: "relative" }}>
                  <input
                    required
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    style={{ width: "100%", background: OBSIDIAN, border: "1px solid rgba(188,24,35,0.2)", padding: "0.85rem 3rem 0.85rem 1rem", color: SILK, fontSize: "0.9rem", outline: "none", boxSizing: "border-box" }}
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} style={{ position: "absolute", right: "1rem", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "rgba(245,245,247,0.4)", padding: 0 }}>
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                {!isRegister && !isForgot && (
                  <button type="button" onClick={() => setIsForgot(true)} style={{ background: "none", border: "none", cursor: "pointer", color: GOLD, fontSize: "0.78rem", marginTop: "0.5rem", textDecoration: "underline", padding: 0 }}>
                    Forgot password?
                  </button>
                )}
              </div>
            )}
            <button
              type="submit"
              style={{ width: "100%", background: `linear-gradient(135deg, ${GOLD}, #8B0010)`, color: "#ffffff", padding: "1rem", border: "none", cursor: "pointer", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}
            >
              {isForgot ? "Send Reset Link" : isRegister ? "Create Account" : "Sign In"}
            </button>
          </form>
        )}

        {!isAdmin && !submitted && (
          <div style={{ marginTop: "1.75rem", textAlign: "center", borderTop: "1px solid rgba(188,24,35,0.1)", paddingTop: "1.5rem" }}>
            {isForgot ? (
              <button onClick={() => setIsForgot(false)} style={{ background: "none", border: "none", cursor: "pointer", color: GOLD, fontSize: "0.82rem", textDecoration: "underline" }}>Back to Login</button>
            ) : (
              <span style={{ color: "rgba(245,245,247,0.4)", fontSize: "0.82rem" }}>
                {isRegister ? "Already have an account? " : "New client? "}
                <button onClick={() => setIsRegister(!isRegister)} style={{ background: "none", border: "none", cursor: "pointer", color: GOLD, fontSize: "0.82rem", textDecoration: "underline" }}>
                  {isRegister ? "Sign in" : "Create account"}
                </button>
              </span>
            )}
          </div>
        )}

        <div style={{ marginTop: "1.5rem", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link to="/" style={{ color: "rgba(245,245,247,0.28)", fontSize: "0.72rem", textDecoration: "none" }}>← Back to site</Link>
          {!isAdmin ? (
            <Link
              to="/admin/login"
              style={{ color: "rgba(188,24,35,0.55)", fontSize: "0.68rem", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "4px" }}
              title="Staff / Admin portal"
            >
              🔐 Staff Login
            </Link>
          ) : (
            <Link to="/login" style={{ color: "rgba(245,245,247,0.28)", fontSize: "0.72rem", textDecoration: "none" }}>Client Login</Link>
          )}
        </div>
      </motion.div>
    </div>
  );
}
