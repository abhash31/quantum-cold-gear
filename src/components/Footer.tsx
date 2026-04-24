// import { motion } from "framer-motion";
// import { MapPin, Mail, Phone, ExternalLink, Clock, Building } from "lucide-react";

// const footerLinks = [
//   {
//     title: "Quantum Hardware",
//     links: ["QuantumVolt™", "CryoConnect", "CryoClean™", "DACsys"],
//   },
//   {
//     title: "Cryogenics",
//     links: ["Nano Stage", "Probe Station", "4K Microscope", "Dipstick", "Electromagnets"],
//   },
//   {
//     title: "Power Systems",
//     links: ["AC-DC Converters", "DC-DC Converters", "Inverters", "Battery Chargers"],
//   },
//   {
//     title: "Company",
//     links: ["About Us", "Careers", "Service & Support", "Contact Engineering"],
//   },
// ];

// export function Footer() {
//   return (
//     <footer className="relative bg-slate-950 text-slate-300 border-t border-white/10 overflow-hidden">
      
//       {/* Subtle Ambient Glows */}
//       <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
//       <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

//       <div className="container relative z-10 py-20">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
//           {/* BRAND & CONTACT (Spans 3 cols) */}
//           <div className="lg:col-span-3 flex flex-col">
            
//             {/* Animated CryoNano Logo - FIXED FONT TO MATCH NAVBAR */}
//             <a href="/" className="flex flex-col items-start justify-center cursor-pointer group mb-6 w-fit">
//               <div className="flex gap-1.5 mb-1">
//                 {[0, 1, 2].map((i) => (
//                   <motion.div
//                     key={i}
//                     animate={{ opacity: [0.3, 1, 0.3] }}
//                     transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
//                     className="w-2.5 h-2.5 rounded-full bg-primary"
//                   />
//                 ))}
//               </div>
//               <span className="font-sans text-3xl font-extrabold tracking-widest text-white leading-none transition-colors duration-300">
//                 CRYONANO
//               </span>
//               <span className="text-[0.65rem] font-bold text-primary tracking-[0.2em] uppercase mt-1">
//                 Think Science
//               </span>
//             </a>
            
//             <p className="text-sm text-slate-400 leading-relaxed mb-8">
//               Engineering the future of quantum & cryogenic technology. Building the core hardware modern science depends on.
//             </p>

//             {/* Quick Contact Info & Opening Hours */}
//             <div className="space-y-4">
//               <a href="mailto:contact@cryonano.com" className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors group">
//                 <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors">
//                   <Mail className="w-4 h-4 text-primary" />
//                 </div>
//                 <div>
//                   <p className="text-white font-semibold text-xs mb-0.5">Email Us</p>
//                   contact@cryonano.com
//                 </div>
//               </a>
              
//               <a href="tel:+9109748181485" className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors group">
//                 <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors">
//                   <Phone className="w-4 h-4 text-primary" />
//                 </div>
//                 <div>
//                   <p className="text-white font-semibold text-xs mb-0.5">Call Us</p>
//                   +91 97481 81485
//                 </div>
//               </a>

//               {/* SMART OPENING HOURS */}
//               <div className="flex items-center gap-3 text-sm text-slate-400 mt-2 border-t border-white/5 pt-4">
//                 <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
//                   <Clock className="w-4 h-4 text-primary" />
//                 </div>
//                 <div>
//                   <p className="text-white font-semibold text-xs mb-0.5">Opening Hours</p>
//                   Mon - Fri: 8:00 am – 4:30 pm
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* LINK COLUMNS (Spans 6 cols total) */}
//           <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-4 gap-8">
//             {footerLinks.map((col, idx) => (
//               <div key={col.title}>
//                 <h4 className="font-display font-bold text-white text-sm tracking-wider uppercase mb-6 border-b border-white/10 pb-2">
//                   {col.title}
//                 </h4>
//                 <ul className="space-y-3">
//                   {col.links.map((link) => (
//                     <motion.li 
//                       key={link}
//                       whileHover={{ x: 5 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <a href="#" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2 group">
//                         <span className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-cyan-400 transition-colors" />
//                         {link}
//                       </a>
//                     </motion.li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>

//           {/* LOCATIONS & MAP SECTION (Spans 3 cols) */}
//           <div className="lg:col-span-3 flex flex-col">
//             <h4 className="font-display font-bold text-white text-sm tracking-wider uppercase mb-6 border-b border-white/10 pb-2 flex items-center gap-2">
//               <Building className="w-4 h-4 text-primary" /> Global Locations
//             </h4>
            
//             {/* Square Interactive Map Container */}
//             <a 
//               href="https://maps.google.com/?q=Sector+V,Bidhannagar,Kolkata" 
//               target="_blank" 
//               rel="noreferrer"
//               className="relative block w-full aspect-video md:aspect-square rounded-2xl overflow-hidden border border-white/10 group cursor-pointer shadow-xl mb-6"
//             >
//               {/* Google Map iFrame with CSS filters to force a Dark/Tech aesthetic */}
//               <iframe 
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14736.315183427389!2d88.4230116!3d22.5761393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275b020703c0d%3A0xece6f8e0fc2e1613!2sSector%20V%2C%20Bidhannagar%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
//                 title="CryoNano HQ Map"
//                 className="absolute inset-0 w-full h-full pointer-events-none"
//                 style={{ filter: "invert(100%) hue-rotate(180deg) brightness(95%) contrast(90%) opacity(80%)" }}
//               />
              
//               {/* Hover Overlay */}
//               <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500 flex items-center justify-center">
//                 <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-slate-900/90 backdrop-blur-md border border-primary/50 text-white text-xs font-bold px-4 py-2 rounded-full flex items-center gap-2 shadow-[0_0_15px_rgba(var(--primary),0.4)]">
//                   Open in Maps <ExternalLink className="w-3 h-3" />
//                 </div>
//               </div>
              
//               {/* Glowing Border effect */}
//               <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-2xl transition-colors duration-500 pointer-events-none" />
//             </a>

//             {/* DUAL OFFICE ADDRESSES */}
//             <div className="space-y-5">
//               <div className="flex gap-3">
//                 <MapPin className="w-4 h-4 text-cyan-500 shrink-0 mt-1" />
//                 <div>
//                   <p className="text-white font-bold text-sm mb-1">Kolkata (HQ)</p>
//                   <p className="text-xs text-slate-400 leading-relaxed">
//                     1st Floor, WTL Building, BP-5, BP Block,<br/>
//                     Sector V, Bidhannagar, Kolkata,<br/>
//                     West Bengal 700091
//                   </p>
//                 </div>
//               </div>

//               <div className="flex gap-3">
//                 <MapPin className="w-4 h-4 text-primary shrink-0 mt-1" />
//                 <div>
//                   <p className="text-white font-bold text-sm mb-1">Bangalore Office</p>
//                   <p className="text-xs text-slate-400 leading-relaxed">
//                     [Building Name/Floor], [Street Name],<br/>
//                     [Tech Park or Area Name],<br/>
//                     Bangalore, Karnataka 560001
//                   </p>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>

//       {/* COPYRIGHT & BOTTOM BAR */}
//       <div className="border-t border-white/10 bg-black/20">
//         <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          
//           <div className="flex items-center gap-3">
//             {/* Dynamic System Status Indicator */}
//             <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
//               <motion.div 
//                 animate={{ opacity: [1, 0.4, 1] }}
//                 transition={{ duration: 2, repeat: Infinity }}
//                 className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" 
//               />
//               <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Systems Online</span>
//             </div>
//             <p className="text-xs text-slate-500">
//               © {new Date().getFullYear()} CryoNano. All rights reserved.
//             </p>
//           </div>

//           <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
//             <a href="#" className="text-xs text-slate-500 hover:text-white transition-colors">Privacy Policy</a>
//             <a href="#" className="text-xs text-slate-500 hover:text-white transition-colors">Terms of Service</a>
//             <a href="#" className="text-xs text-slate-500 hover:text-white transition-colors">ISO 9001:2015 Certified</a>
//           </div>
          
//         </div>
//       </div>
//     </footer>
//   );
// }










import { motion } from "framer-motion";
import { MapPin, Mail, Phone, ExternalLink, Clock, Building } from "lucide-react";
import { Link } from "react-router-dom"; // <-- ADDED

// SYNCED WITH NAVBAR & PRODUCTS CATALOG
const footerLinks = [
  {
    title: "Research Hardware",
    links: [
      { name: "QuantumVolt™ DAC", path: "/products/quantum-volt" },
      { name: "CryoClean™ Filters", path: "/products/cryo-clean" },
      { name: "CryoConnect Box", path: "/products/breakout-box" },
      { name: "Cryogenic NanoStage", path: "/products/nano-stage" },
      { name: "100 PSM Probe Station", path: "/products/psm-100" },
    ],
  },
  {
    title: "Advanced Systems",
    links: [
      { name: "UltraClear 4K Microscope", path: "/products/ultraclear-4k" },
      { name: "Motorised 2D Transfer", path: "/products/2d-transfer-motorised" },
      { name: "Spectroscopy Magnet", path: "/products/spectroscopy-magnet" },
      { name: "Bitter Electromagnet", path: "/products/bitter-magnet" },
      { name: "EMC2T-2 Magnet", path: "/products/emc2t-2-magnet" },
    ],
  },
  {
    title: "Power Solutions",
    links: [
      { name: "AC-DC Systems", path: "/products/ac-dc-system-high" },
      { name: "DC-DC Converters", path: "/products/dc-dc-system-high" },
      { name: "Pure Sine Inverters", path: "/products/dc-ac-inverters" },
      { name: "400Hz Frequency Inverters", path: "/products/inverter-400hz-rugged" },
      { name: "Custom Battery Chargers", path: "/products/power-converters" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", path: "/about" },
      { name: "Service & Support", path: "/support" },
      { name: "Request a Quote", path: "/request-quote" },
      { name: "Contact Engineering", path: "/contact" },
    ],
  },
];

export function Footer() {
  
  // Helper to ensure pages load at the top
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-950 text-slate-300 border-t border-white/10 overflow-hidden">
      
      {/* Subtle Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* BRAND & CONTACT (Spans 3 cols) */}
          <div className="lg:col-span-3 flex flex-col">
            
            {/* Animated CryoNano Logo */}
            <Link to="/" onClick={handleScrollToTop} className="flex flex-col items-start justify-center cursor-pointer group mb-6 w-fit">
              <div className="flex gap-1.5 mb-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    className="w-2.5 h-2.5 rounded-full bg-primary"
                  />
                ))}
              </div>
              <span className="font-sans text-3xl font-extrabold tracking-widest text-white leading-none transition-colors duration-300">
                CRYONANO
              </span>
              <span className="text-[0.65rem] font-bold text-primary tracking-[0.2em] uppercase mt-1">
                Think Science
              </span>
            </Link>
            
            <p className="text-sm text-slate-400 leading-relaxed mb-8">
              Engineering the future of quantum & cryogenic technology. Building the core hardware modern science depends on.
            </p>

            {/* Quick Contact Info & Opening Hours */}
            <div className="space-y-4">
              <a href="mailto:contact@cryonano.com" className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors group">
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-white font-semibold text-xs mb-0.5">Email Us</p>
                  contact@cryonano.com
                </div>
              </a>
              
              <a href="tel:+9109748181485" className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors group">
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-white font-semibold text-xs mb-0.5">Call Us</p>
                  +91 97481 81485
                </div>
              </a>

              {/* SMART OPENING HOURS */}
              <div className="flex items-center gap-3 text-sm text-slate-400 mt-2 border-t border-white/5 pt-4">
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-white font-semibold text-xs mb-0.5">Opening Hours</p>
                  Mon - Fri: 8:00 am – 4:30 pm
                </div>
              </div>
            </div>
          </div>

          {/* LINK COLUMNS (Spans 5 cols total to give the map more room) */}
          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {footerLinks.map((col) => (
              <div key={col.title}>
                <h4 className="font-display font-bold text-white text-sm tracking-wider uppercase mb-6 border-b border-white/10 pb-2">
                  {col.title}
                </h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <motion.li 
                      key={link.name}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* UPDATED: Fully routed Links */}
                      <Link to={link.path} onClick={handleScrollToTop} className="text-sm text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                        <span className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-cyan-400 transition-colors shrink-0" />
                        <span className="leading-tight">{link.name}</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* LOCATIONS & MAP SECTION (Spans 4 cols) */}
          <div className="lg:col-span-4 flex flex-col">
            <h4 className="font-display font-bold text-white text-sm tracking-wider uppercase mb-6 border-b border-white/10 pb-2 flex items-center gap-2">
              <Building className="w-4 h-4 text-primary" /> Global Locations
            </h4>
            
            {/* UPDATED: Fixed short height (h-36) instead of massive aspect-square */}
            <a 
              href="https://maps.google.com/?q=Sector+V,Bidhannagar,Kolkata" 
              target="_blank" 
              rel="noreferrer"
              className="relative block w-full h-36 rounded-2xl overflow-hidden border border-white/10 group cursor-pointer shadow-xl mb-6"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14736.315183427389!2d88.4230116!3d22.5761393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275b020703c0d%3A0xece6f8e0fc2e1613!2sSector%20V%2C%20Bidhannagar%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
                title="CryoNano HQ Map"
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ filter: "invert(100%) hue-rotate(180deg) brightness(95%) contrast(90%) opacity(80%)" }}
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-slate-900/90 backdrop-blur-md border border-primary/50 text-white text-xs font-bold px-4 py-2 rounded-full flex items-center gap-2 shadow-[0_0_15px_rgba(var(--primary),0.4)]">
                  Open in Maps <ExternalLink className="w-3 h-3" />
                </div>
              </div>
              
              {/* Glowing Border effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-2xl transition-colors duration-500 pointer-events-none" />
            </a>

            {/* UPDATED: DUAL OFFICE ADDRESSES (Grid side-by-side alignment) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
              
              <div className="flex gap-3">
                <MapPin className="w-4 h-4 text-cyan-500 shrink-0 mt-1" />
                <div>
                  <p className="text-white font-bold text-sm mb-1">Kolkata (HQ)</p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    1st Floor, WTL Building, BP-5, BP Block, Sector V, Kolkata, WB 700091
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-1" />
                <div>
                  <p className="text-white font-bold text-sm mb-1">Bangalore Office</p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    [Building Name], [Street Name], [Tech Park], Bangalore, KA 560001
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* COPYRIGHT & BOTTOM BAR */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            {/* Dynamic System Status Indicator */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <motion.div 
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" 
              />
              <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Systems Online</span>
            </div>
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} CryoNano. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <Link to="#" className="text-xs text-slate-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-xs text-slate-500 hover:text-white transition-colors">Terms of Service</Link>
            <Link to="#" className="text-xs text-slate-500 hover:text-white transition-colors">ISO 9001:2015 Certified</Link>
          </div>
          
        </div>
      </div>
    </footer>
  );
}