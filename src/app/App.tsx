import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router";
import { AnimatePresence } from "motion/react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { FloatingContact } from "./components/FloatingContact";
import { BackToTopButton } from "./components/BackToTopButton";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import ContactPage from "./pages/ContactPage";
import AdminDashboard from "./pages/AdminDashboard";
import LoginPage from "./pages/LoginPage";

const OBSIDIAN = "#000000";

function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: OBSIDIAN, minHeight: "100vh", fontFamily: "var(--font-body)" }}>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <FloatingContact />
    </div>
  );
}

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: OBSIDIAN, minHeight: "100vh", fontFamily: "var(--font-body)" }}>
      {children}
    </div>
  );
}

function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: OBSIDIAN, minHeight: "100vh", fontFamily: "var(--font-body)" }}>
      {children}
    </div>
  );
}

function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
        {/* ── Public pages ── */}
        <Route path="/" element={<ClientLayout><HomePage /></ClientLayout>} />
        <Route path="/about" element={<ClientLayout><AboutPage /></ClientLayout>} />
        <Route path="/portfolio" element={<ClientLayout><PortfolioPage /></ClientLayout>} />
        <Route path="/testimonials" element={<ClientLayout><TestimonialsPage /></ClientLayout>} />
        <Route path="/contact" element={<ClientLayout><ContactPage /></ClientLayout>} />

        {/* ── Admin ── */}
        <Route path="/admin/login" element={<AuthLayout><LoginPage isAdmin /></AuthLayout>} />
        <Route path="/admin/dashboard" element={<AdminLayout><AdminDashboard /></AdminLayout>} />
        <Route path="/admin" element={<Navigate to="/admin/login" replace />} />

        {/* ── Fallback ── */}
        <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
      <BackToTopButton />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
