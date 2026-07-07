import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, ChevronRight, Calendar, Package, Plus, CreditCard, FileText, ArrowLeft } from "lucide-react";

const GOLD = "#bc1823";
const OBSIDIAN = "#000000";
const CHARCOAL = "#000000";
const SILK = "#ffffff";

const steps = ["Service", "Package", "Add-Ons", "Date & Time", "Review", "Payment"];

const serviceCategories = [
  { id: "wedding", label: "Wedding Photography", icon: "💍", startPrice: "₹45,000" },
  { id: "prewedding", label: "Pre-Wedding Shoot", icon: "🌸", startPrice: "₹20,000" },
  { id: "engagement", label: "Engagement", icon: "💒", startPrice: "₹18,000" },
  { id: "reception", label: "Reception", icon: "🥂", startPrice: "₹35,000" },
  { id: "corporate", label: "Corporate Events", icon: "🏢", startPrice: "₹15,000" },
  { id: "fashion", label: "Fashion & Editorial", icon: "✨", startPrice: "₹25,000" },
  { id: "birthday", label: "Birthday Celebrations", icon: "🎂", startPrice: "₹12,000" },
  { id: "weddingfilm", label: "Wedding Films", icon: "🎬", startPrice: "₹35,000" },
];

const packages = [
  {
    id: "basic", name: "Basic", price: 45000, tag: null,
    features: ["400 edited photos", "8 hours coverage", "1 Photographer", "Online gallery delivery", "1-week delivery"],
    team: "1 Photographer", hours: "8 hrs",
  },
  {
    id: "premium", name: "Premium", price: 85000, tag: "Popular",
    features: ["800 edited photos", "12 hours coverage", "2 Photographers", "Premium album included", "Same-day highlights reel", "5-day delivery"],
    team: "2 Photographers", hours: "12 hrs",
  },
  {
    id: "luxury", name: "Luxury", price: 150000, tag: "Best Value",
    features: ["1200+ edited photos", "Full-day coverage", "3 Photographers", "Luxury flush mount album", "Drone coverage included", "2 Locations", "3-day delivery"],
    team: "3 Photographers", hours: "Full day",
  },
];

const addOns = [
  { id: "drone", name: "Drone Coverage", price: 12000, icon: "🚁", desc: "Stunning aerial shots & 4K video" },
  { id: "album", name: "Premium Album", price: 18000, icon: "📖", desc: "40-page luxury flush mount album" },
  { id: "extra_photographer", name: "Extra Photographer", price: 8000, icon: "📸", desc: "Additional photographer for better coverage" },
  { id: "extra_videographer", name: "Extra Videographer", price: 10000, icon: "🎥", desc: "Full videography team addition" },
  { id: "express", name: "Express Editing", price: 8000, icon: "⚡", desc: "48-hour delivery guarantee" },
  { id: "streaming", name: "Live Streaming", price: 15000, icon: "📡", desc: "Professional live stream for remote guests" },
];

const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];

export default function BookingPage() {
  const [step, setStep] = useState(0);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [selectedAddOns, setSelectedAddOns] = useState<Set<string>>(new Set());
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [paymentType, setPaymentType] = useState<"advance" | "full">("advance");
  const [booked, setBooked] = useState(false);

  const pkg = packages.find((p) => p.id === selectedPackage);
  const addOnTotal = Array.from(selectedAddOns).reduce((sum, id) => {
    const ao = addOns.find((a) => a.id === id);
    return sum + (ao?.price || 0);
  }, 0);
  const basePrice = pkg?.price || 0;
  const totalPrice = basePrice + addOnTotal;
  const advanceAmount = Math.round(totalPrice * 0.3);

  const toggleAddOn = (id: string) => {
    const next = new Set(selectedAddOns);
    next.has(id) ? next.delete(id) : next.add(id);
    setSelectedAddOns(next);
  };

  const canNext = () => {
    if (step === 0) return !!selectedService;
    if (step === 1) return !!selectedPackage;
    if (step === 2) return true;
    if (step === 3) return !!selectedDate && !!selectedTime;
    return true;
  };

  const handleNext = () => {
    if (step === 5) { setBooked(true); return; }
    setStep((s) => s + 1);
  };

  if (booked) {
    return (
      <div style={{ background: OBSIDIAN, minHeight: "100vh", paddingTop: "80px", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} style={{ textAlign: "center", maxWidth: "500px" }}>
          <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: `linear-gradient(135deg, ${GOLD}, #8B0010)`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 2rem" }}>
            <Check size={36} color={"#ffffff"} strokeWidth={3} />
          </div>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", color: SILK, marginBottom: "1rem" }}>Booking Confirmed!</h1>
          <p style={{ color: "rgba(245,245,247,0.65)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
            Your booking reference is <strong style={{ color: GOLD }}>SH-{Date.now().toString().slice(-6)}</strong>. A confirmation has been sent to your email and WhatsApp.
          </p>
          <div style={{ background: CHARCOAL, border: "1px solid rgba(188,24,35,0.2)", padding: "1.5rem", marginBottom: "2rem", textAlign: "left" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
              <span style={{ color: "rgba(245,245,247,0.5)", fontSize: "0.85rem" }}>Service</span>
              <span style={{ color: SILK, fontSize: "0.85rem" }}>{serviceCategories.find((s) => s.id === selectedService)?.label}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
              <span style={{ color: "rgba(245,245,247,0.5)", fontSize: "0.85rem" }}>Package</span>
              <span style={{ color: SILK, fontSize: "0.85rem" }}>{pkg?.name}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
              <span style={{ color: "rgba(245,245,247,0.5)", fontSize: "0.85rem" }}>Date</span>
              <span style={{ color: SILK, fontSize: "0.85rem" }}>{selectedDate} at {selectedTime}</span>
            </div>
            <div style={{ height: "1px", background: "rgba(188,24,35,0.15)", margin: "1rem 0" }} />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: GOLD, fontWeight: 600 }}>Paid Now</span>
              <span style={{ color: GOLD, fontWeight: 600 }}>₹{(paymentType === "advance" ? advanceAmount : totalPrice).toLocaleString()}</span>
            </div>
          </div>
          <button onClick={() => { setBooked(false); setStep(0); setSelectedService(null); setSelectedPackage(null); setSelectedAddOns(new Set()); setSelectedDate(""); setSelectedTime(""); }} style={{ background: `linear-gradient(135deg, ${GOLD}, #8B0010)`, color: "#ffffff", padding: "0.9rem 2.5rem", border: "none", cursor: "pointer", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Book Another Session
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div style={{ background: OBSIDIAN, minHeight: "100vh", paddingTop: "80px", color: SILK }}>
      {/* Header */}
      <section style={{ padding: "3rem 2rem 2rem", textAlign: "center", borderBottom: `1px solid rgba(188,24,35,0.1)` }}>
        <div style={{ fontSize: "0.7rem", letterSpacing: "0.3em", color: GOLD, textTransform: "uppercase", marginBottom: "0.5rem" }}>Online Booking</div>
        <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
          Book Your <span style={{ color: GOLD, fontStyle: "italic" }}>Session</span>
        </h1>
      </section>

      {/* Progress Steps */}
      <div style={{ background: CHARCOAL, borderBottom: `1px solid rgba(188,24,35,0.1)`, padding: "1.5rem 2rem", overflowX: "auto" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", alignItems: "center", gap: "0" }}>
          {steps.map((s, i) => (
            <div key={s} style={{ display: "flex", alignItems: "center", flex: 1 }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", flex: "none" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", border: `2px solid ${i <= step ? GOLD : "rgba(188,24,35,0.25)"}`, background: i < step ? GOLD : i === step ? "rgba(188,24,35,0.15)" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s" }}>
                  {i < step ? <Check size={14} color={"#ffffff"} strokeWidth={3} /> : <span style={{ color: i === step ? GOLD : "rgba(188,24,35,0.4)", fontSize: "0.75rem", fontWeight: 700 }}>{i + 1}</span>}
                </div>
                <span style={{ color: i === step ? GOLD : "rgba(245,245,247,0.4)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", whiteSpace: "nowrap" }}>{s}</span>
              </div>
              {i < steps.length - 1 && (
                <div style={{ flex: 1, height: "1px", background: i < step ? GOLD : "rgba(188,24,35,0.15)", margin: "0 0.5rem", marginBottom: "18px", transition: "background 0.3s" }} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "3rem 2rem" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Step 0: Service */}
            {step === 0 && (
              <div>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.75rem", marginBottom: "0.5rem" }}>Select a Service</h2>
                <p style={{ color: "rgba(245,245,247,0.5)", marginBottom: "2rem", fontSize: "0.9rem" }}>What type of photography or videography are you looking for?</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "1rem" }}>
                  {serviceCategories.map((svc) => (
                    <button
                      key={svc.id}
                      onClick={() => setSelectedService(svc.id)}
                      style={{ background: selectedService === svc.id ? "rgba(188,24,35,0.12)" : CHARCOAL, border: `1px solid ${selectedService === svc.id ? GOLD : "rgba(188,24,35,0.15)"}`, padding: "1.5rem 1.25rem", cursor: "pointer", textAlign: "left", transition: "all 0.25s", color: SILK }}
                    >
                      <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{svc.icon}</div>
                      <div style={{ fontWeight: 600, fontSize: "0.9rem", marginBottom: "0.3rem" }}>{svc.label}</div>
                      <div style={{ color: GOLD, fontSize: "0.78rem" }}>from {svc.startPrice}</div>
                      {selectedService === svc.id && <Check size={16} color={GOLD} style={{ position: "absolute", top: "1rem", right: "1rem" }} />}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 1: Package */}
            {step === 1 && (
              <div>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.75rem", marginBottom: "0.5rem" }}>Choose Your Package</h2>
                <p style={{ color: "rgba(245,245,247,0.5)", marginBottom: "2rem", fontSize: "0.9rem" }}>Select the package that best fits your needs and budget.</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
                  {packages.map((pkg) => (
                    <button
                      key={pkg.id}
                      onClick={() => setSelectedPackage(pkg.id)}
                      style={{ background: selectedPackage === pkg.id ? "rgba(188,24,35,0.1)" : CHARCOAL, border: `1px solid ${selectedPackage === pkg.id ? GOLD : "rgba(188,24,35,0.15)"}`, padding: "2rem", cursor: "pointer", textAlign: "left", color: SILK, position: "relative", transition: "all 0.25s" }}
                    >
                      {pkg.tag && <div style={{ position: "absolute", top: "-10px", left: "50%", transform: "translateX(-50%)", background: GOLD, color: "#ffffff", padding: "0.2rem 0.8rem", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", whiteSpace: "nowrap" }}>{pkg.tag}</div>}
                      <div style={{ fontSize: "0.7rem", letterSpacing: "0.2em", color: GOLD, textTransform: "uppercase", marginBottom: "0.5rem" }}>{pkg.name}</div>
                      <div style={{ fontFamily: "var(--font-heading)", fontSize: "2rem", marginBottom: "0.25rem" }}>₹{pkg.price.toLocaleString()}</div>
                      <div style={{ color: "rgba(245,245,247,0.4)", fontSize: "0.75rem", marginBottom: "1.5rem" }}>{pkg.team} · {pkg.hours}</div>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        {pkg.features.map((f) => (
                          <li key={f} style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "0.6rem", fontSize: "0.82rem", color: "rgba(245,245,247,0.7)" }}>
                            <Check size={12} color={GOLD} style={{ flexShrink: 0 }} /> {f}
                          </li>
                        ))}
                      </ul>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Add-Ons */}
            {step === 2 && (
              <div>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.75rem", marginBottom: "0.5rem" }}>Enhance Your Package</h2>
                <p style={{ color: "rgba(245,245,247,0.5)", marginBottom: "2rem", fontSize: "0.9rem" }}>Add optional services to make your experience even more special.</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" }}>
                  {addOns.map((ao) => {
                    const isSelected = selectedAddOns.has(ao.id);
                    return (
                      <button
                        key={ao.id}
                        onClick={() => toggleAddOn(ao.id)}
                        style={{ background: isSelected ? "rgba(188,24,35,0.1)" : CHARCOAL, border: `1px solid ${isSelected ? GOLD : "rgba(188,24,35,0.15)"}`, padding: "1.5rem", cursor: "pointer", textAlign: "left", color: SILK, display: "flex", gap: "1rem", alignItems: "flex-start", transition: "all 0.25s" }}
                      >
                        <span style={{ fontSize: "1.75rem" }}>{ao.icon}</span>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.25rem" }}>
                            <span style={{ fontWeight: 600, fontSize: "0.9rem" }}>{ao.name}</span>
                            <span style={{ color: GOLD, fontSize: "0.82rem" }}>+₹{ao.price.toLocaleString()}</span>
                          </div>
                          <div style={{ color: "rgba(245,245,247,0.5)", fontSize: "0.78rem" }}>{ao.desc}</div>
                        </div>
                        <div style={{ width: "24px", height: "24px", borderRadius: "50%", border: `2px solid ${isSelected ? GOLD : "rgba(188,24,35,0.3)"}`, background: isSelected ? GOLD : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          {isSelected ? <Check size={12} color={"#ffffff"} strokeWidth={3} /> : <Plus size={12} color={GOLD} />}
                        </div>
                      </button>
                    );
                  })}
                </div>
                {selectedAddOns.size === 0 && (
                  <p style={{ textAlign: "center", color: "rgba(245,245,247,0.3)", marginTop: "1rem", fontSize: "0.85rem" }}>No add-ons selected — you can skip this step.</p>
                )}
              </div>
            )}

            {/* Step 3: Date & Time */}
            {step === 3 && (
              <div>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.75rem", marginBottom: "0.5rem" }}>Pick a Date & Time</h2>
                <p style={{ color: "rgba(245,245,247,0.5)", marginBottom: "2rem", fontSize: "0.9rem" }}>Choose your preferred date. We'll confirm availability within 2 hours.</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: GOLD, marginBottom: "0.75rem" }}>Event Date *</label>
                    <input
                      type="date"
                      value={selectedDate}
                      min={new Date().toISOString().split("T")[0]}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      style={{ width: "100%", background: CHARCOAL, border: "1px solid rgba(188,24,35,0.25)", padding: "1rem", color: SILK, fontSize: "0.9rem", outline: "none", boxSizing: "border-box" }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: GOLD, marginBottom: "0.75rem" }}>Start Time *</label>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                      {timeSlots.map((t) => (
                        <button
                          key={t}
                          onClick={() => setSelectedTime(t)}
                          style={{ padding: "0.65rem", background: selectedTime === t ? "rgba(188,24,35,0.15)" : CHARCOAL, border: `1px solid ${selectedTime === t ? GOLD : "rgba(188,24,35,0.15)"}`, cursor: "pointer", color: selectedTime === t ? GOLD : "rgba(245,245,247,0.6)", fontSize: "0.82rem", transition: "all 0.25s" }}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div style={{ background: CHARCOAL, border: "1px solid rgba(188,24,35,0.15)", padding: "1.5rem", marginTop: "2rem" }}>
                  <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <Calendar size={20} color={GOLD} style={{ flexShrink: 0, marginTop: "2px" }} />
                    <div style={{ fontSize: "0.85rem", color: "rgba(245,245,247,0.6)", lineHeight: 1.7 }}>
                      <strong style={{ color: SILK }}>Availability Check:</strong> We'll confirm your booking within 2 hours of submission. If the date isn't available, we'll suggest the nearest alternatives.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Review */}
            {step === 4 && (
              <div>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.75rem", marginBottom: "0.5rem" }}>Review Your Order</h2>
                <p style={{ color: "rgba(245,245,247,0.5)", marginBottom: "2rem", fontSize: "0.9rem" }}>Please review all details before proceeding to payment.</p>
                <div style={{ background: CHARCOAL, border: "1px solid rgba(188,24,35,0.15)", padding: "2rem", marginBottom: "1.5rem" }}>
                  <h3 style={{ fontFamily: "var(--font-heading)", color: GOLD, fontSize: "1rem", marginBottom: "1.5rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>Booking Summary</h3>
                  {[
                    ["Service", serviceCategories.find((s) => s.id === selectedService)?.label || ""],
                    ["Package", pkg?.name || ""],
                    ["Coverage", `${pkg?.team} · ${pkg?.hours}`],
                    ["Date", selectedDate],
                    ["Time", selectedTime],
                  ].map(([label, value]) => (
                    <div key={label} style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.85rem", paddingBottom: "0.85rem", borderBottom: "1px solid rgba(188,24,35,0.08)" }}>
                      <span style={{ color: "rgba(245,245,247,0.5)", fontSize: "0.85rem" }}>{label}</span>
                      <span style={{ color: SILK, fontSize: "0.85rem", fontWeight: 500 }}>{value}</span>
                    </div>
                  ))}
                  {selectedAddOns.size > 0 && (
                    <div style={{ marginBottom: "0.85rem", paddingBottom: "0.85rem", borderBottom: "1px solid rgba(188,24,35,0.08)" }}>
                      <span style={{ color: "rgba(245,245,247,0.5)", fontSize: "0.85rem", display: "block", marginBottom: "0.5rem" }}>Add-Ons</span>
                      {Array.from(selectedAddOns).map((id) => {
                        const ao = addOns.find((a) => a.id === id);
                        return ao ? (
                          <div key={id} style={{ display: "flex", justifyContent: "space-between" }}>
                            <span style={{ color: SILK, fontSize: "0.82rem" }}>{ao.name}</span>
                            <span style={{ color: GOLD, fontSize: "0.82rem" }}>+₹{ao.price.toLocaleString()}</span>
                          </div>
                        ) : null;
                      })}
                    </div>
                  )}
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                    <span style={{ color: "rgba(245,245,247,0.5)", fontSize: "0.85rem" }}>Package</span>
                    <span style={{ color: SILK, fontSize: "0.85rem" }}>₹{basePrice.toLocaleString()}</span>
                  </div>
                  {addOnTotal > 0 && (
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                      <span style={{ color: "rgba(245,245,247,0.5)", fontSize: "0.85rem" }}>Add-Ons</span>
                      <span style={{ color: SILK, fontSize: "0.85rem" }}>₹{addOnTotal.toLocaleString()}</span>
                    </div>
                  )}
                  <div style={{ height: "1px", background: "rgba(188,24,35,0.2)", margin: "1rem 0" }} />
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: GOLD, fontWeight: 700, fontSize: "1rem" }}>Total</span>
                    <span style={{ color: GOLD, fontWeight: 700, fontSize: "1.2rem", fontFamily: "var(--font-heading)" }}>₹{totalPrice.toLocaleString()}</span>
                  </div>
                </div>
                <div style={{ background: "rgba(188,24,35,0.05)", border: "1px solid rgba(188,24,35,0.15)", padding: "1.5rem" }}>
                  <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", fontSize: "0.82rem", color: "rgba(245,245,247,0.6)", lineHeight: 1.6 }}>
                    <FileText size={16} color={GOLD} style={{ flexShrink: 0, marginTop: "2px" }} />
                    A PDF quote will be emailed to you. 30% advance secures your date. Balance due before the shoot.
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Payment */}
            {step === 5 && (
              <div>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.75rem", marginBottom: "0.5rem" }}>Secure Payment</h2>
                <p style={{ color: "rgba(245,245,247,0.5)", marginBottom: "2rem", fontSize: "0.9rem" }}>Choose how much to pay now. Your date will be confirmed upon payment.</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "2rem" }}>
                  <button
                    onClick={() => setPaymentType("advance")}
                    style={{ background: paymentType === "advance" ? "rgba(188,24,35,0.12)" : CHARCOAL, border: `1px solid ${paymentType === "advance" ? GOLD : "rgba(188,24,35,0.15)"}`, padding: "2rem 1.5rem", cursor: "pointer", textAlign: "left", color: SILK, transition: "all 0.25s" }}
                  >
                    <div style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "0.3rem" }}>Pay Advance (30%)</div>
                    <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.75rem", color: GOLD, marginBottom: "0.3rem" }}>₹{advanceAmount.toLocaleString()}</div>
                    <div style={{ color: "rgba(245,245,247,0.45)", fontSize: "0.78rem" }}>Balance ₹{(totalPrice - advanceAmount).toLocaleString()} due before shoot</div>
                  </button>
                  <button
                    onClick={() => setPaymentType("full")}
                    style={{ background: paymentType === "full" ? "rgba(188,24,35,0.12)" : CHARCOAL, border: `1px solid ${paymentType === "full" ? GOLD : "rgba(188,24,35,0.15)"}`, padding: "2rem 1.5rem", cursor: "pointer", textAlign: "left", color: SILK, transition: "all 0.25s", position: "relative" }}
                  >
                    <div style={{ position: "absolute", top: "-10px", left: "50%", transform: "translateX(-50%)", background: GOLD, color: "#ffffff", padding: "0.15rem 0.75rem", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", whiteSpace: "nowrap" }}>Recommended</div>
                    <div style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "0.3rem" }}>Pay Full Amount</div>
                    <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.75rem", color: GOLD, marginBottom: "0.3rem" }}>₹{totalPrice.toLocaleString()}</div>
                    <div style={{ color: "rgba(245,245,247,0.45)", fontSize: "0.78rem" }}>No balance due — priority booking guaranteed</div>
                  </button>
                </div>
                <div style={{ background: CHARCOAL, border: "1px solid rgba(188,24,35,0.15)", padding: "2rem", marginBottom: "1.5rem" }}>
                  <h4 style={{ color: GOLD, fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1.25rem" }}>Payment Methods</h4>
                  <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
                    {["UPI", "Credit Card", "Debit Card", "Net Banking", "Wallets"].map((method) => (
                      <span key={method} style={{ background: "rgba(188,24,35,0.08)", border: "1px solid rgba(188,24,35,0.2)", padding: "0.35rem 0.9rem", fontSize: "0.75rem", color: "rgba(245,245,247,0.65)", borderRadius: "2px" }}>{method}</span>
                    ))}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                    <CreditCard size={16} color={GOLD} />
                    <span style={{ color: "rgba(245,245,247,0.5)", fontSize: "0.8rem" }}>Powered by Razorpay · 100% Secure</span>
                  </div>
                  <div style={{ color: "rgba(245,245,247,0.35)", fontSize: "0.75rem" }}>Your payment is encrypted and secured by RazorPay's PCI-DSS Level 1 infrastructure.</div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid rgba(188,24,35,0.1)" }}>
          <button
            onClick={() => setStep((s) => s - 1)}
            disabled={step === 0}
            style={{ display: "flex", alignItems: "center", gap: "8px", background: "none", border: "1px solid rgba(188,24,35,0.25)", color: step === 0 ? "rgba(245,245,247,0.2)" : "rgba(245,245,247,0.6)", padding: "0.85rem 1.75rem", cursor: step === 0 ? "default" : "pointer", fontSize: "0.85rem" }}
          >
            <ArrowLeft size={16} /> Back
          </button>

          {/* Price Summary */}
          {selectedPackage && (
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ textAlign: "right" }}>
                <div style={{ color: "rgba(245,245,247,0.4)", fontSize: "0.7rem" }}>Total</div>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.25rem", color: GOLD }}>₹{totalPrice.toLocaleString()}</div>
              </div>
            </div>
          )}

          <button
            onClick={handleNext}
            disabled={!canNext()}
            style={{ display: "flex", alignItems: "center", gap: "8px", background: canNext() ? `linear-gradient(135deg, ${GOLD}, #8B0010)` : "rgba(188,24,35,0.15)", color: canNext() ? "#ffffff" : "rgba(188,24,35,0.3)", border: "none", padding: "0.85rem 2rem", cursor: canNext() ? "pointer" : "default", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}
          >
            {step === 5 ? "Confirm & Pay" : step === 4 ? "Proceed to Payment" : "Continue"}
            {step < 5 && <ChevronRight size={16} />}
          </button>
        </div>
      </div>
    </div>
  );
}
