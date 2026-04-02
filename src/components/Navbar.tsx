import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Results", href: "/results" },
  { label: "Pricing", href: "/pricing" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: "#FFFFFF",
        boxShadow: scrolled ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
      }}
    >
      <div className="container-narrow flex items-center justify-between h-14 px-6 md:px-16">
        <Link to="/" className="text-[16px]" style={{ color: "#111827", fontWeight: 800 }}>
          Auxo Advisory
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.href} to={item.href} className="text-[14px] hover:text-foreground transition-colors duration-200" style={{ color: "#6B7280", fontWeight: 500 }}>
              {item.label}
            </Link>
          ))}
          <Link to="/contact" className="ml-2 inline-flex items-center justify-center h-9 px-[22px] text-[14px] rounded-lg text-white transition-colors duration-200" style={{ backgroundColor: "#2563EB", fontWeight: 600 }}>
            Book a Call
          </Link>
        </div>

        <button className="md:hidden transition-colors" style={{ color: "#6B7280" }} onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }} className="md:hidden overflow-hidden" style={{ backgroundColor: "#FFFFFF", borderTop: "1px solid #E5E7EB" }}>
            <div className="px-6 py-4 space-y-1">
              {navItems.map((item) => (
                <Link key={item.href} to={item.href} onClick={() => setMobileOpen(false)} className="block py-2 text-[14px]" style={{ color: "#6B7280" }}>
                  {item.label}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setMobileOpen(false)} className="block mt-3 text-center h-10 leading-10 text-[14px] rounded-lg text-white" style={{ backgroundColor: "#2563EB", fontWeight: 600 }}>
                Book a Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
