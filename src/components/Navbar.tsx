import { useState } from "react";
import { ChevronDown, Menu, X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const productCategories = [
  {
    title: "Quantum Hardware",
    items: [
      "QuantumVibe – Isolated Voltage Source DAC",
      "CryoConnect – Cryostat Breakout Box",
      "CryoClean – Cryogenic RF Low-Pass Filters",
      "DACsys – Cryogenic Data Acquisition & Control System",
    ],
  },
  {
    title: "Cryogenics",
    items: [
      "Cryogenic Nano Stage",
      "2D Transfer System",
      "Cryogenic Probe Station",
      "Motorised Controller with Precision Stages",
      "Cryogenic Dipstick",
      "4K Microscope",
      "CryoConnect – Cryostat Breakout Box",
      "2D Transfer System with Motorised Controller",
    ],
  },
  {
    title: "Electromagnets",
    items: [
      "Spectroscopy Electromagnet",
      "Transport Electromagnet",
      "Bitter Electromagnet",
      "Custom Solutions",
    ],
  },
];

const powerCategories = [
  {
    title: "Converters",
    items: [
      "AC-DC System – Low Power (0.3kW–6kW)",
      "AC-DC System – High Power (6kW–30kW)",
      "DC-DC System – Low Power (0.3kW–6kW)",
      "DC-DC System – High Power (6kW–30kW)",
    ],
  },
  {
    title: "Inverters",
    items: [
      "DC-AC Pure Sine Wave Inverters",
      "400Hz Frequency Inverters",
    ],
  },
  {
    title: "Battery Chargers",
    items: [
      "Custom Project",
      "Talk to our Engineers / R&D Team",
    ],
  },
];

const navLinks = [
  { label: "Products", dropdown: "products" },
  { label: "Solutions", dropdown: "solutions" },
  { label: "Service & Support", href: "#support" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-foreground text-primary-foreground text-xs">
        <div className="container flex items-center justify-end gap-6 py-2">
          <span className="opacity-70 cursor-pointer hover:opacity-100 transition-opacity">Global</span>
          <span className="opacity-70 cursor-pointer hover:opacity-100 transition-opacity">Careers</span>
          <span className="opacity-70 cursor-pointer hover:opacity-100 transition-opacity">Contact</span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
        <div className="container flex items-center justify-between h-[var(--nav-height)]">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="bg-primary text-primary-foreground font-display font-bold text-xl px-3 py-1.5 rounded">
              QE
            </div>
            <span className="font-display font-semibold text-lg hidden sm:block text-foreground">
              Quantum Engineering
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.dropdown && setOpenDropdown(link.dropdown)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={link.href || "#"}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                  {link.dropdown && <ChevronDown className="h-3.5 w-3.5" />}
                </a>

                {/* Mega dropdown */}
                <AnimatePresence>
                  {link.dropdown && openDropdown === link.dropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 bg-background border border-border shadow-xl rounded-sm min-w-[600px] p-6"
                    >
                      <div className="grid grid-cols-3 gap-6">
                        {(link.dropdown === "products" ? productCategories : powerCategories).map((cat) => (
                          <div key={cat.title}>
                            <h4 className="font-display font-semibold text-sm text-primary mb-3">{cat.title}</h4>
                            <ul className="space-y-2">
                              {cat.items.map((item) => (
                                <li key={item}>
                                  <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                                    {item}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-secondary rounded transition-colors">
              <Search className="h-5 w-5 text-muted-foreground" />
            </button>
            <button
              className="lg:hidden p-2 hover:bg-secondary rounded transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className="lg:hidden overflow-hidden border-t border-border"
            >
              <div className="container py-4 space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href || "#"}
                    className="block py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
