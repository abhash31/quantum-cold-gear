// import { useState } from "react";
// import { ChevronDown, Menu, X, Search } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link, useLocation } from "react-router-dom";
// import { NavAboutUs } from "@/components/navbar/NavAboutUs";

// // FULLY RESTORED MEGA MENU DATA
// const productCategories = [
//   {
//     title: "Quantum Hardware",
//     items: [
//       { name: "QuantumVibe – Isolated Voltage Source DAC", path: "/products/quantum-volt" },
//       { name: "CryoConnect – Cryostat Breakout Box", path: "/products/breakout-box" },
//       { name: "CryoClean – Cryogenic RF Low-Pass Filters", path: "/products/cryo-clean" },
//     ],
//   },
//   {
//     title: "Cryogenics",
//     items: [
//       { name: "Cryogenic Nano Stage", path: "/products/nano-stage" },
//       { name: "2D Transfer System", path: "/products/2d-transfer-system" },
//       { name: "Cryogenic Probe Station", path: "/products/psm-100" },
//       { name: "Cryogenic Dipstick", path: "/products/dipstick" }
//     ],
//   },
//   {
//     title: "Microscopes",
//     items: [
//       { name: "Motorised Controller with Precision Stages", path: "/products/cryoscope-controller" },
//       { name: "4K Microscope", path: "/products/ultraclear-4k" },
//       { name: "2D Transfer System with Motorised Controller", path: "/products/2d-transfer-motorised" },
//     ],
//   },
//   {
//     title: "Electromagnets",
//     items: [
//       { name: "Spectroscopy Electromagnet", path: "/products/spectroscopy-magnet" },
//       { name: "Bitter Electromagnet", path: "/products/bitter-magnet" },
//       { name: "EMC2T-2 Electromagnet", path: "/products/emc2t-2-magnet" },
//     ],
//   },
// ];

// const powerCategories = [
//   {
//     title: "Converters",
//     items: [
//       { name: "AC-DC System – Low Power (0.3kW–6kW)", path: "/products/ac-dc-system-low" },
//       { name: "AC-DC System – High Power (6kW–30kW)", path: "/products/ac-dc-system-high" },
//       { name: "DC-DC System – Low Power (0.3kW–6kW)", path: "/products/dc-dc-system-low" },
//       { name: "DC-DC System – High Power (6kW–30kW)", path: "/products/dc-dc-system-high" },
//     ],
//   },
//   {
//     title: "Inverters",
//     items: [
//       { name: "DC-AC Pure Sine Wave Inverters", path: "/products/dc-ac-inverters" },
//       { name: "400Hz Frequency Inverters", path: "/products/inverter-400hz-rugged" },
//     ],
//   },
//   {
//     title: "Battery Chargers",
//     items: [
//       { name: "Custom Project", path: "/products/power-converters" },
//       { name: "Talk to our Engineers / R&D Team", path: "/contact" },
//     ],
//   },
// ];

// // const navLinks = [
// //   { label: "Products", href: "/products", dropdown: "products" },
// //   { label: "Solutions", dropdown: "solutions" },
// //   { label: "Service & Support", href: "/support" },
// //   { label: "About Us", href: "/about" }, 
// //   { label: "Contact", href: "/contact" },
// // ];


// const navLinks = [
//   { label: "Products", href: "/products", dropdown: "products" },
//   { label: "Solutions", dropdown: "solutions" },
//   { label: "Service & Support", href: "/support" },
//   { label: "About Us", href: "/about", dropdown: "about" }, // <--- ADDED dropdown property
//   { label: "Contact", href: "/contact" },
// ];

// // Helper function to check if the current URL exists in a specific category array
// const isPathInCategories = (categories: any[], currentPath: string) => {
//   return categories.some(cat => cat.items.some((item: any) => item.path === currentPath));
// };

// export function Navbar() {
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [isSearchHovered, setIsSearchHovered] = useState(false);
  
//   const location = useLocation();

//   return (
//     <>
//       {/* Top utility bar - Light theme */}
//       <div className="bg-slate-100 text-slate-600 text-xs relative z-[60]">
//         <div className="container flex items-center justify-end gap-8 py-2.5">
//           {["Global", "Careers", "Contact"].map((item) => (
//             <motion.span
//               key={item}
//               whileHover={{ y: -2, color: "var(--primary)" }}
//               whileTap={{ scale: 0.9, color: "#22d3ee" }}
//               className="opacity-75 cursor-pointer font-medium tracking-wide transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-primary hover:after:w-full after:transition-all after:duration-300"
//             >
//               {item}
//             </motion.span>
//           ))}
//         </div>
//       </div>

//       {/* Main nav - Distinct Grey Theme */}
//       <nav className="sticky top-0 z-50 bg-slate-100/95 backdrop-blur-md border-b border-slate-300 shadow-md">
//         <div className="container flex items-center justify-between h-[var(--nav-height)] py-4">
          
//           {/* Logo */}
//           <Link to="/" className="flex flex-col items-start justify-center cursor-pointer group">
//             <div className="flex gap-1.5 mb-0.5">
//               {[0, 1, 2].map((i) => (
//                 <motion.div
//                   key={i}
//                   animate={{ opacity: [0.3, 1, 0.3] }}
//                   transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
//                   className="w-2.5 h-2.5 rounded-full bg-primary"
//                 />
//               ))}
//             </div>
//             <span className="font-sans text-3xl font-extrabold tracking-widest text-slate-900 leading-none group-hover:text-primary transition-colors duration-300">
//               CRYONANO
//             </span>
//           </Link>

//           {/* Desktop links */}
//           <div className="hidden lg:flex items-center gap-1 xl:gap-4">
//             {navLinks.map((link) => {
              
//               // NEW: Intelligent Active State Logic
//               let isActive = false;
//               if (location.pathname === link.href) {
//                  isActive = true; // Exact match (e.g. /products, /contact)
//               } else if (link.dropdown === "products") {
//                  isActive = isPathInCategories(productCategories, location.pathname);
//               } else if (link.dropdown === "solutions") {
//                  isActive = isPathInCategories(powerCategories, location.pathname);
//               } else if (link.dropdown) {
//                  isActive = location.pathname.startsWith(`/${link.dropdown}`);
//               }

//               return (
//                 <div
//                   key={link.label}
//                   className="relative group py-2"
//                   onMouseEnter={() => link.dropdown && setOpenDropdown(link.dropdown)}
//                   onMouseLeave={() => setOpenDropdown(null)}
//                 >
//                   <motion.div whileTap={{ scale: 0.92, color: "#22d3ee" }}>
//                     <Link
//                       to={link.href || "#"}
//                       className={`flex items-center gap-1.5 px-3 py-2 text-base font-bold tracking-wide transition-colors rounded-md relative ${isActive ? "text-primary" : "text-slate-600 hover:text-slate-950"}`}
//                     >
//                       {link.label}
//                       {link.dropdown && (
//                         <motion.div
//                           animate={{ rotate: openDropdown === link.dropdown ? 180 : 0 }}
//                           transition={{ duration: 0.2 }}
//                         >
//                           <ChevronDown className={`h-4 w-4 transition-colors ${isActive ? "text-cyan-400 opacity-100" : "opacity-70 group-hover:text-cyan-400"}`} />
//                         </motion.div>
//                       )}
//                       <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary to-cyan-400 transition-all duration-300 ease-out rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)] ${isActive ? "w-3/4" : "w-0 group-hover:w-3/4"}`} />
//                     </Link>
//                   </motion.div>

//                   {/* Mega dropdown */}
//                   <AnimatePresence>
//                     {link.dropdown && openDropdown === link.dropdown && (
//                       <motion.div
//                         initial={{ opacity: 0, y: 10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: 10 }}
//                         transition={{ duration: 0.2 }}
//                         className="absolute top-full left-0 mt-2 bg-white border border-slate-200 shadow-2xl rounded-2xl min-w-[700px] p-8 z-[100]"
//                       >
//                         <div className={`grid gap-8 ${link.dropdown === "products" ? "grid-cols-4" : "grid-cols-3"}`}>
//                           {(link.dropdown === "products" ? productCategories : powerCategories).map((cat) => (
//                             <div key={cat.title}>
//                               <h4 className="font-display font-bold text-sm text-primary uppercase tracking-wider mb-4 pb-2 border-b border-slate-200">
//                                 {cat.title}
//                               </h4>
//                               <ul className="space-y-3">
//                                 {cat.items.map((item: any) => (
//                                   <motion.li 
//                                     key={item.name}
//                                     whileHover={{ x: 4 }}
//                                     whileTap={{ scale: 0.98 }}
//                                     transition={{ duration: 0.2 }}
//                                   >
//                                     <Link to={item.path} onClick={() => setOpenDropdown(null)} className="text-sm font-medium text-slate-600 hover:text-primary transition-colors leading-snug block">
//                                       {item.name}
//                                     </Link>
//                                   </motion.li>
//                                 ))}
//                               </ul>
//                             </div>
//                           ))}
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Right actions */}
//           <div className="flex items-center gap-3 relative">
//             <div 
//               className="flex items-center"
//               onMouseEnter={() => setIsSearchHovered(true)}
//               onMouseLeave={() => setIsSearchHovered(false)}
//             >
//               <AnimatePresence>
//                 {isSearchHovered && (
//                   <motion.div
//                     initial={{ width: 0, opacity: 0 }}
//                     animate={{ width: 180, opacity: 1 }}
//                     exit={{ width: 0, opacity: 0 }}
//                     transition={{ duration: 0.3, ease: "easeOut" }}
//                     className="overflow-hidden mr-2"
//                   >
//                     <input 
//                       type="text" 
//                       placeholder="Search systems..." 
//                       className="w-full bg-white border border-slate-300 text-slate-900 text-sm rounded-full px-4 py-2 outline-none focus:border-primary transition-colors placeholder:text-slate-400 shadow-inner"
//                     />
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//               <motion.button 
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 className={`p-2.5 rounded-full transition-colors ${isSearchHovered ? 'bg-primary text-white' : 'hover:bg-slate-300 text-slate-700 hover:text-slate-900'}`}
//               >
//                 <Search className="h-5 w-5" />
//               </motion.button>
//             </div>

//             <button
//               className="lg:hidden p-2 hover:bg-slate-300 rounded transition-colors text-slate-700"
//               onClick={() => setMobileOpen(!mobileOpen)}
//             >
//               {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         <AnimatePresence>
//           {mobileOpen && (
//             <motion.div
//               initial={{ height: 0, opacity: 0 }}
//               animate={{ height: "auto", opacity: 1 }}
//               exit={{ height: 0, opacity: 0 }}
//               className="lg:hidden overflow-hidden border-t border-slate-300 bg-slate-100 shadow-inner"
//             >
//               <div className="container py-4 space-y-2">
//                 {navLinks.map((link) => {
//                   // Reuse same logic for mobile
//                   let isActive = false;
//                   if (location.pathname === link.href) {
//                      isActive = true;
//                   } else if (link.dropdown === "products") {
//                      isActive = isPathInCategories(productCategories, location.pathname);
//                   } else if (link.dropdown === "solutions") {
//                      isActive = isPathInCategories(powerCategories, location.pathname);
//                   } else if (link.dropdown) {
//                      isActive = location.pathname.startsWith(`/${link.dropdown}`);
//                   }
                  
//                   return (
//                     <Link
//                       key={link.label}
//                       to={link.href || "#"}
//                       onClick={() => setMobileOpen(false)}
//                       className={`block py-3 px-4 rounded-md text-base font-bold transition-colors ${isActive ? "bg-white text-primary border-l-4 border-primary shadow-sm" : "text-slate-600 hover:text-slate-900 hover:bg-white border-l-4 border-transparent"}`}
//                     >
//                       {link.label}
//                     </Link>
//                   );
//                 })}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </nav>
//     </>
//   );
// }










import { useState } from "react";
import { ChevronDown, Menu, X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

// FULLY RESTORED MEGA MENU DATA
const productCategories = [
  {
    title: "Quantum Hardware",
    items: [
      { name: "QuantumVibe – Isolated Voltage Source DAC", path: "/products/quantum-volt" },
      { name: "CryoConnect – Cryostat Breakout Box", path: "/products/breakout-box" },
      { name: "CryoClean – Cryogenic RF Low-Pass Filters", path: "/products/cryo-clean" },
    ],
  },
  {
    title: "Cryogenics",
    items: [
      { name: "Cryogenic Nano Stage", path: "/products/nano-stage" },
      { name: "2D Transfer System", path: "/products/2d-transfer-system" },
      { name: "Cryogenic Probe Station", path: "/products/psm-100" },
      { name: "Cryogenic Dipstick", path: "/products/dipstick" }
    ],
  },
  {
    title: "Microscopes",
    items: [
      { name: "Motorised Controller with Precision Stages", path: "/products/cryoscope-controller" },
      { name: "4K Microscope", path: "/products/ultraclear-4k" },
      { name: "2D Transfer System with Motorised Controller", path: "/products/2d-transfer-motorised" },
    ],
  },
  {
    title: "Electromagnets",
    items: [
      { name: "Spectroscopy Electromagnet", path: "/products/spectroscopy-magnet" },
      { name: "Bitter Electromagnet", path: "/products/bitter-magnet" },
      { name: "EMC2T-2 Electromagnet", path: "/products/emc2t-2-magnet" },
    ],
  },
];

const powerCategories = [
  {
    title: "Converters",
    items: [
      { name: "AC-DC System – Low Power (0.3kW–6kW)", path: "/products/ac-dc-system-low" },
      { name: "AC-DC System – High Power (6kW–30kW)", path: "/products/ac-dc-system-high" },
      { name: "DC-DC System – Low Power (0.3kW–6kW)", path: "/products/dc-dc-system-low" },
      { name: "DC-DC System – High Power (6kW–30kW)", path: "/products/dc-dc-system-high" },
    ],
  },
  {
    title: "Inverters",
    items: [
      { name: "DC-AC Pure Sine Wave Inverters", path: "/products/dc-ac-inverters" },
      { name: "400Hz Frequency Inverters", path: "/products/inverter-400hz-rugged" },
    ],
  },
  {
    title: "Battery Chargers",
    items: [
      { name: "Custom Project", path: "/products/power-converters" },
      { name: "Talk to our Engineers / R&D Team", path: "/contact" },
    ],
  },
];

// NEW HORIZONTAL DATA FOR "ABOUT US"
const aboutCategories = [
  { name: "Cryonano at a Glance", path: "/about/our-story" },
  { name: "Founders & Leadership", path: "/about/leadership" },
  { name: "Research & Technology", path: "/research/overview" },
  { name: "Innovation & Patents", path: "/research/innovation" },
  { name: "R&D & Manufacturing", path: "/research/rnd-manufacturing" },
  { name: "Quality & Compliance", path: "/about/quality" },
  { name: "News & Press", path: "/contact/media" }
];

const navLinks = [
  { label: "Products", href: "/products", dropdown: "products" },
  { label: "Solutions", dropdown: "solutions" },
  { label: "Service & Support", href: "/support" },
  { label: "About Us", href: "/about", dropdown: "about" }, 
  { label: "Contact", href: "/contact" },
];

const isPathInCategories = (categories: any[], currentPath: string) => {
  return categories.some(cat => cat.items.some((item: any) => item.path === currentPath));
};

export function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isSearchHovered, setIsSearchHovered] = useState(false);
  
  const location = useLocation();

  return (
    <>
      <div className="bg-slate-100 text-slate-600 text-xs relative z-[60]">
        <div className="container flex items-center justify-end gap-8 py-2.5">
          {["Global", "Careers", "Contact"].map((item) => (
            <motion.span
              key={item}
              whileHover={{ y: -2, color: "var(--primary)" }}
              whileTap={{ scale: 0.9, color: "#22d3ee" }}
              className="opacity-75 cursor-pointer font-medium tracking-wide transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-primary hover:after:w-full after:transition-all after:duration-300"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Main nav */}
      <nav className="sticky top-0 z-50 bg-slate-100/95 backdrop-blur-md border-b border-slate-300 shadow-md relative">
        <div className="container flex items-center justify-between h-[var(--nav-height)] py-4">
          
          <Link to="/" className="flex flex-col items-start justify-center cursor-pointer group">
            <div className="flex gap-1.5 mb-0.5">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  className="w-2.5 h-2.5 rounded-full bg-primary"
                />
              ))}
            </div>
            <span className="font-sans text-3xl font-extrabold tracking-widest text-slate-900 leading-none group-hover:text-primary transition-colors duration-300">
              CRYONANO
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-4">
            {navLinks.map((link) => {
              
              // FIXED ACTIVE STATE LOGIC
              let isActive = false;
              if (location.pathname === link.href) {
                 isActive = true; 
              } else if (link.dropdown && location.pathname !== "/contact") {
                 // The above condition prevents dropdowns from highlighting when on the Contact page
                 if (link.dropdown === "products") {
                    isActive = isPathInCategories(productCategories, location.pathname);
                 } else if (link.dropdown === "solutions") {
                    isActive = isPathInCategories(powerCategories, location.pathname);
                 } else if (link.dropdown === "about") {
                    isActive = aboutCategories.some(cat => cat.path === location.pathname);
                 }
              }

              return (
                <div
                  key={link.label}
                  className="relative group py-2"
                  onMouseEnter={() => link.dropdown && setOpenDropdown(link.dropdown)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <motion.div whileTap={{ scale: 0.92, color: "#22d3ee" }}>
                    <Link
                      to={link.href || "#"}
                      className={`flex items-center gap-1.5 px-3 py-2 text-base font-bold tracking-wide transition-colors rounded-md relative ${isActive ? "text-primary" : "text-slate-600 hover:text-slate-950"}`}
                    >
                      {link.label}
                      {link.dropdown && (
                        <motion.div
                          animate={{ rotate: openDropdown === link.dropdown ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className={`h-4 w-4 transition-colors ${isActive ? "text-cyan-400 opacity-100" : "opacity-70 group-hover:text-cyan-400"}`} />
                        </motion.div>
                      )}
                      <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary to-cyan-400 transition-all duration-300 ease-out rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)] ${isActive ? "w-3/4" : "w-0 group-hover:w-3/4"}`} />
                    </Link>
                  </motion.div>

                  {/* Mega dropdown for Products & Solutions ONLY */}
                  <AnimatePresence>
                    {link.dropdown && link.dropdown !== "about" && openDropdown === link.dropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 bg-white border border-slate-200 shadow-2xl rounded-2xl min-w-[700px] p-8 z-[100]"
                      >
                        <div className={`grid gap-8 ${link.dropdown === "products" ? "grid-cols-4" : "grid-cols-3"}`}>
                          {(link.dropdown === "products" ? productCategories : powerCategories).map((cat) => (
                            <div key={cat.title}>
                              <h4 className="font-display font-bold text-sm text-primary uppercase tracking-wider mb-4 pb-2 border-b border-slate-200">
                                {cat.title}
                              </h4>
                              <ul className="space-y-3">
                                {cat.items.map((item: any) => (
                                  <motion.li 
                                    key={item.name}
                                    whileHover={{ x: 4 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ duration: 0.2 }}
                                  >
                                    <Link to={item.path} onClick={() => setOpenDropdown(null)} className="text-sm font-medium text-slate-600 hover:text-primary transition-colors leading-snug block">
                                      {item.name}
                                    </Link>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="flex items-center gap-3 relative">
            <div 
              className="flex items-center"
              onMouseEnter={() => setIsSearchHovered(true)}
              onMouseLeave={() => setIsSearchHovered(false)}
            >
              <AnimatePresence>
                {isSearchHovered && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 180, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden mr-2"
                  >
                    <input 
                      type="text" 
                      placeholder="Search systems..." 
                      className="w-full bg-white border border-slate-300 text-slate-900 text-sm rounded-full px-4 py-2 outline-none focus:border-primary transition-colors placeholder:text-slate-400 shadow-inner"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2.5 rounded-full transition-colors ${isSearchHovered ? 'bg-primary text-white' : 'hover:bg-slate-300 text-slate-700 hover:text-slate-900'}`}
              >
                <Search className="h-5 w-5" />
              </motion.button>
            </div>

            <button
              className="lg:hidden p-2 hover:bg-slate-300 rounded transition-colors text-slate-700"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* NEW FULL-WIDTH HORIZONTAL BAR FOR "ABOUT US" */}
        <AnimatePresence>
          {openDropdown === "about" && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-full left-0 right-0 w-full bg-white border-b border-slate-200 shadow-xl overflow-hidden z-[100]"
              onMouseEnter={() => setOpenDropdown("about")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <div className="container flex items-center justify-center gap-8 py-5 flex-wrap">
                {aboutCategories.map((item) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setOpenDropdown(null)}
                      className="text-sm font-extrabold text-slate-600 hover:text-primary transition-colors tracking-wide relative after:absolute after:-bottom-1.5 after:left-0 after:w-0 after:h-[2px] after:bg-primary hover:after:w-full after:transition-all after:duration-300"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="w-full h-1 bg-gradient-to-r from-primary via-cyan-400 to-blue-500 opacity-80" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden border-t border-slate-300 bg-slate-100 shadow-inner absolute top-full left-0 w-full z-[100]"
            >
              <div className="container py-4 space-y-2">
                {navLinks.map((link) => {
                  let isActive = false;
                  if (location.pathname === link.href) {
                     isActive = true;
                  } else if (link.dropdown && location.pathname !== "/contact") {
                     if (link.dropdown === "products") {
                        isActive = isPathInCategories(productCategories, location.pathname);
                     } else if (link.dropdown === "solutions") {
                        isActive = isPathInCategories(powerCategories, location.pathname);
                     } else if (link.dropdown === "about") {
                        isActive = aboutCategories.some(cat => cat.path === location.pathname);
                     }
                  }
                  
                  return (
                    <Link
                      key={link.label}
                      to={link.href || "#"}
                      onClick={() => setMobileOpen(false)}
                      className={`block py-3 px-4 rounded-md text-base font-bold transition-colors ${isActive ? "bg-white text-primary border-l-4 border-primary shadow-sm" : "text-slate-600 hover:text-slate-900 hover:bg-white border-l-4 border-transparent"}`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}