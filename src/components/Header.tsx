import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo-osisalud.png";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Acerca de", href: "#acerca" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contáctanos", href: "#contacto" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6">
          <a href="#inicio" className="flex items-center gap-3">
            <img
              src={logo}
              alt="OSISALUD"
              className={`w-auto transition-all duration-300 ${
                isScrolled ? "h-10" : "h-[60px]"
              }`}
            />
            <span
              className={`block text-xs italic font-light tracking-widest transition-colors duration-200 ${
                isScrolled ? "text-muted-foreground" : "text-primary-foreground/70"
              }`}
            >
              Salud y Seguridad Laboral
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isScrolled
                    ? "text-foreground/70 hover:text-secondary"
                    : "text-primary-foreground/90 hover:text-primary-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden relative z-[1000]"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? (
              <X className="h-6 w-6 text-primary" strokeWidth={1.5} />
            ) : (
              <Menu
                className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}
                strokeWidth={1.5}
              />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-white z-[999] flex flex-col items-center justify-center md:hidden"
          >
            <button
              onClick={() => setIsMobileOpen(false)}
              className="absolute top-6 right-6"
              aria-label="Close menu"
            >
              <X className="h-7 w-7 text-primary" strokeWidth={1.5} />
            </button>

            <nav className="flex flex-col items-center gap-10">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                  onClick={() => handleNavClick(item.href)}
                  className="text-2xl font-display font-semibold text-primary hover:text-secondary transition-colors"
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
