// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowRight, Sparkles, Activity, Layers, Cpu, Zap, BatteryCharging } from "lucide-react";

// // DATA 1: Quantum Hardware
// const featuredQuantum = [
//   {
//     title: "QuantumVolt™",
//     subtitle: "Precision Isolated Voltage Source",
//     description: "Ultra-low-noise gate and bias control for quantum devices. Delivers stable, precise control through fully isolated bipolar outputs.",
//     icon: Cpu,
//     color: "from-cyan-500 to-blue-600",
//     shadow: "shadow-cyan-500/20",
//     image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop"
//   },
//   {
//     title: "CryoClean™",
//     subtitle: "Cryogenic RF Low-Pass Filters",
//     description: "Engineered to suppress high-frequency electromagnetic interference before it reaches sensitive quantum devices. Ensures clean measurements.",
//     icon: Activity,
//     color: "from-blue-500 to-indigo-600",
//     shadow: "shadow-blue-500/20",
//     image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2070&auto=format&fit=crop"
//   },
//   {
//     title: "DACsys",
//     subtitle: "Cryogenic Data Acquisition",
//     description: "Complete data acquisition and control system engineered for cryogenic environments with real-time monitoring and high-speed multi-channel capabilities.",
//     icon: Layers,
//     color: "from-purple-500 to-fuchsia-600",
//     shadow: "shadow-purple-500/20",
//     image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
//   },
// ];

// // DATA 2: Power Systems & Converters
// const featuredPower = [
//   {
//     title: "AC-DC Converters",
//     subtitle: "High-Power Conversion Systems",
//     description: "Industrial-grade AC-DC systems ranging from 0.3kW to 30kW. Engineered for maximum efficiency and stability in mission-critical applications.",
//     icon: Zap,
//     color: "from-red-500 to-orange-600",
//     shadow: "shadow-red-500/20",
//     image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
//   },
//   {
//     title: "Pure Sine Inverters",
//     subtitle: "Precision DC-AC Power",
//     description: "Delivering exceptionally clean AC power for sensitive electronics. Available in standard configurations and specialized 400Hz aerospace setups.",
//     icon: Activity,
//     color: "from-orange-500 to-amber-600",
//     shadow: "shadow-orange-500/20",
//     image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2070&auto=format&fit=crop"
//   },
//   {
//     title: "Custom Power Systems",
//     subtitle: "Engineered to Specification",
//     description: "Tailored battery chargers and custom power electronics designed from the ground up by our R&D team to meet your exact operational requirements.",
//     icon: BatteryCharging,
//     color: "from-yellow-500 to-amber-500",
//     shadow: "shadow-yellow-500/20",
//     image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop"
//   },
// ];

// export function FeaturedProducts() {
//   // Master Category State
//   const [activeCategory, setActiveCategory] = useState<"quantum" | "power">("quantum");
//   // Sub-item State (always resets to 0 when category changes)
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);

//   // Dynamic data selection based on category
//   const activeData = activeCategory === "quantum" ? featuredQuantum : featuredPower;
//   const ActiveProduct = activeData[activeIndex];

//   // Global Showcase Cycler
//   useEffect(() => {
//     if (isHovered) return;
//     const timer = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % activeData.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, [isHovered, activeCategory, activeData.length]);

//   // Handler for category switching to ensure clean reset
//   const handleCategorySwitch = (category: "quantum" | "power") => {
//     setActiveCategory(category);
//     setActiveIndex(0);
//   };

//   return (
//     <section className="relative pt-12 pb-24 bg-background overflow-hidden">
      
//       {/* Background Grid Pattern */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

//       <div className="container relative z-10">
        
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           className="mb-8 md:text-center"
//         >
//           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/80 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-4 md:mx-auto shadow-sm">
//             <Sparkles className="w-4 h-4" />
//             Flagship Instruments
//           </div>
//           <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
//             Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">Innovations</span>
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl md:mx-auto leading-relaxed mb-8">
//             Explore our latest breakthroughs. Select a division below to view flagship systems.
//           </p>
//         </motion.div>

//         {/* ========================================= */}
//         {/* CATEGORY SWITCHER TABS (The "Liquid" Buttons) */}
//         {/* ========================================= */}
//         <div className="flex flex-wrap justify-center gap-4 mb-12">
          
//           <button
//             onClick={() => handleCategorySwitch("quantum")}
//             className={`group relative flex items-center gap-3 px-8 py-4 rounded-xl font-bold transition-all duration-300 overflow-hidden outline-none ${
//               activeCategory === "quantum"
//                 ? "text-white shadow-[0_10px_40px_-10px_rgba(6,182,212,0.6)]"
//                 : "bg-white text-slate-600 border border-slate-200 hover:border-cyan-400 hover:text-cyan-600 hover:shadow-md"
//             }`}
//           >
//             {activeCategory === "quantum" && (
//               <motion.div layoutId="activeCategoryBg" className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 z-0" />
//             )}
//             <Cpu className="w-5 h-5 relative z-10" />
//             <span className="relative z-10">Quantum & Cryogenics</span>
//           </button>

//           <button
//             onClick={() => handleCategorySwitch("power")}
//             className={`group relative flex items-center gap-3 px-8 py-4 rounded-xl font-bold transition-all duration-300 overflow-hidden outline-none ${
//               activeCategory === "power"
//                 ? "text-white shadow-[0_10px_40px_-10px_rgba(239,68,68,0.6)]"
//                 : "bg-white text-slate-600 border border-slate-200 hover:border-red-400 hover:text-red-600 hover:shadow-md"
//             }`}
//           >
//             {activeCategory === "power" && (
//               <motion.div layoutId="activeCategoryBg" className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 z-0" />
//             )}
//             <Zap className="w-5 h-5 relative z-10" />
//             <span className="relative z-10">Power Electronics</span>
//           </button>

//         </div>

//         {/* ========================================= */}
//         {/* MAIN CONTENT GRID                         */}
//         {/* ========================================= */}
//         <AnimatePresence mode="wait">
//           <motion.div 
//             key={activeCategory} // Changing this key triggers the exit/enter animations
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.4 }}
//             className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:h-[500px]"
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//           >
            
//             {/* LEFT SIDE: Large Media Box */}
//             <div className="lg:col-span-8 relative rounded-3xl overflow-hidden border border-border bg-slate-950 shadow-xl group">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={activeIndex} // Crossfades when individual items change
//                   initial={{ opacity: 0, scale: 1.05 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.98 }}
//                   transition={{ duration: 0.6, ease: "easeInOut" }}
//                   className="absolute inset-0 w-full h-full"
//                 >
//                   <img 
//                     src={ActiveProduct.image} 
//                     alt={ActiveProduct.title} 
//                     className="absolute inset-0 w-full h-full object-cover opacity-90"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />

//                   <div className="absolute bottom-0 left-0 w-full p-6 lg:p-8">
//                     <motion.div
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.2, duration: 0.5 }}
//                       className="max-w-lg bg-white/5 backdrop-blur-md p-6 lg:p-8 rounded-2xl border border-white/20 shadow-2xl"
//                     >
//                       <p className={`text-xs font-bold uppercase tracking-widest mb-2 drop-shadow-md ${activeCategory === 'quantum' ? 'text-cyan-300' : 'text-orange-300'}`}>
//                         {ActiveProduct.subtitle}
//                       </p>
//                       <h3 className="font-display text-3xl font-bold text-white mb-3 drop-shadow-lg">
//                         {ActiveProduct.title}
//                       </h3>
//                       <p className="text-slate-200 text-sm leading-relaxed mb-6 font-medium drop-shadow-md">
//                         {ActiveProduct.description}
//                       </p>
                      
//                       <button className="group relative w-full sm:w-auto overflow-hidden text-white font-bold px-6 py-4 rounded-xl transition-all duration-300 hover:scale-105 border border-white/30 shadow-lg flex items-center justify-center">
//                         <div className={`absolute inset-0 bg-gradient-to-r ${ActiveProduct.color} opacity-80 group-hover:opacity-100 transition-opacity duration-300`} />
//                         <span className="relative z-10 flex items-center gap-2">
//                           Explore {ActiveProduct.title} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                         </span>
//                       </button>
//                     </motion.div>
//                   </div>
//                 </motion.div>
//               </AnimatePresence>
//             </div>

//             {/* RIGHT SIDE: Sub-Item List Tabs */}
//             <div className="lg:col-span-4 flex flex-col gap-4">
//               {activeData.map((product, i) => {
//                 const isActive = activeIndex === i;
//                 const TabIcon = product.icon;
                
//                 return (
//                   <div
//                     key={product.title}
//                     onClick={() => setActiveIndex(i)}
//                     className={`relative flex-1 p-5 rounded-2xl border cursor-pointer overflow-hidden transition-all duration-500 flex flex-col justify-center ${
//                       isActive 
//                         ? `bg-card border-primary/50 shadow-lg scale-[1.02] ${product.shadow} z-10` 
//                         : "bg-secondary/30 border-border hover:bg-secondary/80 hover:border-primary/30"
//                     }`}
//                   >
//                     <div className="relative z-10 flex items-center gap-4">
//                       <div className={`p-3 rounded-xl transition-all duration-500 ${isActive ? `bg-gradient-to-br ${product.color} text-white shadow-md` : "bg-background border border-border text-primary"}`}>
//                         <TabIcon className="w-5 h-5" />
//                       </div>
//                       <div>
//                         <h4 className={`font-display text-lg font-extrabold transition-colors duration-300 ${isActive ? "text-foreground" : "text-foreground/70"}`}>
//                           {product.title}
//                         </h4>
//                         <p className={`text-[10px] mt-0.5 font-bold tracking-wide uppercase transition-colors duration-300 ${isActive ? "text-primary" : "text-muted-foreground"}`}>
//                           {product.subtitle}
//                         </p>
//                       </div>
//                     </div>
//                     {/* Animated Progress Bar at the bottom of the active tab */}
//                     {isActive && (
//                       <div className="absolute bottom-0 left-0 h-1 bg-secondary w-full">
//                         <motion.div
//                           initial={{ width: "0%" }}
//                           animate={isHovered ? { width: "var(--current-width)" } : { width: "100%" }}
//                           transition={{ duration: 5, ease: "linear" }}
//                           className={`h-full bg-gradient-to-r ${product.color}`}
//                         />
//                       </div>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
            
//           </motion.div>
//         </AnimatePresence>

//         {/* Global Action Button */}
//         <div className="mt-20 flex justify-center">
//           <button className="group relative px-8 py-5 rounded-2xl bg-slate-950 overflow-hidden transition-all duration-500 hover:scale-105 shadow-xl hover:shadow-[0_0_30px_rgba(220,38,38,0.3)]">
//             <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-cyan-500/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//             <span className="relative z-10 flex items-center gap-3 font-display text-lg font-bold text-white transition-colors duration-300">
//               View All Instruments <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-2 transition-all duration-300" />
//             </span>
//             <motion.div 
//               initial={{ width: 0 }}
//               whileInView={{ width: "100%" }}
//               className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-cyan-500"
//             />
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// }




// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------



import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Activity, Layers, Cpu, Zap, BatteryCharging, Snowflake, Magnet } from "lucide-react";
import { Link } from "react-router-dom"; // <-- ADDED ROUTING

// DATA 1: Quantum & Cryogenics (Replaced DACsys with real products, expanded to 6)
const featuredQuantum = [
  {
    title: "QuantumVolt™",
    subtitle: "Precision Isolated Voltage Source",
    description: "Ultra-low-noise gate and bias control for quantum devices. Delivers stable, precise control through fully isolated bipolar outputs.",
    icon: Cpu, color: "from-cyan-500 to-blue-600", shadow: "shadow-cyan-500/20",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
    path: "/products/quantum-volt"
  },
  {
    title: "CryoClean™",
    subtitle: "Cryogenic RF Low-Pass Filters",
    description: "Engineered to suppress high-frequency electromagnetic interference before it reaches sensitive quantum devices.",
    icon: Activity, color: "from-blue-500 to-indigo-600", shadow: "shadow-blue-500/20",
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2070&auto=format&fit=crop",
    path: "/products/cryo-clean"
  },
  {
    title: "CryoConnect",
    subtitle: "Cryostat Breakout Box",
    description: "High-performance, fully shielded breakout solution extending your cryostat's Faraday cage for clean multi-channel measurements.",
    icon: Layers, color: "from-indigo-500 to-purple-600", shadow: "shadow-indigo-500/20",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    path: "/products/breakout-box"
  },
  {
    title: "Cryogenic NanoStage",
    subtitle: "Vitrified Cryogenic Microscopy",
    description: "A liquid-nitrogen-cooled nano-positioning platform engineered for Cryo-CLEM and super-resolution imaging.",
    icon: Snowflake, color: "from-purple-500 to-fuchsia-600", shadow: "shadow-purple-500/20",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    path: "/products/nano-stage"
  },
  {
    title: "2D Transfer System",
    subtitle: "Deterministic Heterostructure Stacking",
    description: "A precision-engineered motorized transfer system designed for the deterministic placement of 2D materials.",
    icon: Layers, color: "from-fuchsia-500 to-pink-600", shadow: "shadow-fuchsia-500/20",
    image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2070&auto=format&fit=crop",
    path: "/products/2d-transfer-system"
  },
  {
    title: "Spectroscopy Magnet",
    subtitle: "Precision Dipole Architecture",
    description: "Ultra-compact dipole electromagnet delivering exceptional magnetic field strength, ideal for spectroscopy and optics.",
    icon: Magnet, color: "from-sky-400 to-cyan-500", shadow: "shadow-sky-400/20",
    image: "https://images.unsplash.com/photo-1579316168884-60c70edc260f?q=80&w=2070&auto=format&fit=crop",
    path: "/products/spectroscopy-magnet"
  }
];

// DATA 2: Power Systems & Converters (Replaced custom with real products, expanded to 6)
const featuredPower = [
  {
    title: "AC-DC System (Low)",
    subtitle: "0.3kW - 6kW Power Conversion",
    description: "High-efficiency AC to DC power conversion modules designed for stable, continuous industrial delivery.",
    icon: Zap, color: "from-red-500 to-orange-600", shadow: "shadow-red-500/20",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    path: "/products/ac-dc-system-low"
  },
  {
    title: "AC-DC System (High)",
    subtitle: "6kW - 30kW Scalable Solutions",
    description: "Rugged, parallel-redundant AC-DC power systems delivering master-synchronized high current for heavy loads.",
    icon: Zap, color: "from-orange-500 to-amber-600", shadow: "shadow-orange-500/20",
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2070&auto=format&fit=crop",
    path: "/products/ac-dc-system-high"
  },
  {
    title: "DC-DC System (Low)",
    subtitle: "Up to 5kW Compact Solutions",
    description: "Space-optimized, high-efficiency DC-DC systems engineered for precise regulation in critical instrumentation.",
    icon: BatteryCharging, color: "from-amber-500 to-yellow-500", shadow: "shadow-amber-500/20",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
    path: "/products/dc-dc-system-low"
  },
  {
    title: "DC-DC System (High)",
    subtitle: "6kW - 30kW Redundant",
    description: "Rugged, N+1 redundant DC-DC systems for severe industrial and defense loads, featuring master load sharing.",
    icon: BatteryCharging, color: "from-yellow-500 to-orange-500", shadow: "shadow-yellow-500/20",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    path: "/products/dc-dc-system-high"
  },
  {
    title: "Pure Sine Inverters",
    subtitle: "Precision DC-AC Power",
    description: "Delivering exceptionally clean AC power for sensitive electronics with pure sine wave conversion.",
    icon: Activity, color: "from-orange-600 to-red-600", shadow: "shadow-orange-600/20",
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2070&auto=format&fit=crop",
    path: "/products/dc-ac-inverters"
  },
  {
    title: "400Hz Frequency Inverters",
    subtitle: "Aerospace Grade Output",
    description: "Deliver crystal-controlled AC power with exceptional frequency accuracy for aerospace, defense, and testing.",
    icon: Activity, color: "from-red-600 to-rose-700", shadow: "shadow-red-600/20",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
    path: "/products/inverter-400hz-rugged"
  },
];

export function FeaturedProducts() {
  const [activeCategory, setActiveCategory] = useState<"quantum" | "power">("quantum");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const activeData = activeCategory === "quantum" ? featuredQuantum : featuredPower;
  const ActiveProduct = activeData[activeIndex];

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % activeData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered, activeCategory, activeData.length]);

  const handleCategorySwitch = (category: "quantum" | "power") => {
    setActiveCategory(category);
    setActiveIndex(0);
  };

  return (
    <section className="relative pt-12 pb-24 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="container relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-8 md:text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/80 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-4 md:mx-auto shadow-sm">
            <Sparkles className="w-4 h-4" />
            Flagship Instruments
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">Innovations</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl md:mx-auto leading-relaxed mb-8">
            Explore our latest breakthroughs. Select a division below to view flagship systems.
          </p>
        </motion.div>

        {/* CATEGORY SWITCHER */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => handleCategorySwitch("quantum")}
            className={`group relative flex items-center gap-3 px-8 py-4 rounded-xl font-bold transition-all duration-300 overflow-hidden outline-none ${
              activeCategory === "quantum"
                ? "text-white shadow-[0_10px_40px_-10px_rgba(6,182,212,0.6)]"
                : "bg-white text-slate-600 border border-slate-200 hover:border-cyan-400 hover:text-cyan-600 hover:shadow-md"
            }`}
          >
            {activeCategory === "quantum" && (
              <motion.div layoutId="activeCategoryBg" className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 z-0" />
            )}
            <Cpu className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Quantum & Cryogenics</span>
          </button>

          <button
            onClick={() => handleCategorySwitch("power")}
            className={`group relative flex items-center gap-3 px-8 py-4 rounded-xl font-bold transition-all duration-300 overflow-hidden outline-none ${
              activeCategory === "power"
                ? "text-white shadow-[0_10px_40px_-10px_rgba(239,68,68,0.6)]"
                : "bg-white text-slate-600 border border-slate-200 hover:border-red-400 hover:text-red-600 hover:shadow-md"
            }`}
          >
            {activeCategory === "power" && (
              <motion.div layoutId="activeCategoryBg" className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 z-0" />
            )}
            <Zap className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Power Electronics</span>
          </button>
        </div>

        {/* MAIN CONTENT GRID */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:h-[650px]" // <-- Height increased for 6 items
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            
            {/* LEFT SIDE: Media Box */}
            <div className="lg:col-span-8 relative rounded-3xl overflow-hidden border border-border bg-slate-950 shadow-xl group min-h-[400px] lg:min-h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex} 
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img 
                    src={ActiveProduct.image} 
                    alt={ActiveProduct.title} 
                    className="absolute inset-0 w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/30 to-transparent" />

                  <div className="absolute bottom-0 left-0 w-full p-6 lg:p-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="max-w-lg bg-white/5 backdrop-blur-md p-6 lg:p-8 rounded-2xl border border-white/20 shadow-2xl"
                    >
                      <p className={`text-xs font-bold uppercase tracking-widest mb-2 drop-shadow-md ${activeCategory === 'quantum' ? 'text-cyan-300' : 'text-orange-300'}`}>
                        {ActiveProduct.subtitle}
                      </p>
                      <h3 className="font-display text-3xl font-bold text-white mb-3 drop-shadow-lg">
                        {ActiveProduct.title}
                      </h3>
                      <p className="text-slate-200 text-sm leading-relaxed mb-6 font-medium drop-shadow-md">
                        {ActiveProduct.description}
                      </p>
                      
                      {/* SPECIFIC PRODUCT LINK */}
                      <Link to={ActiveProduct.path} className="block w-full sm:w-auto">
                        <button className="group/btn relative w-full overflow-hidden text-white font-bold px-6 py-4 rounded-xl transition-all duration-300 hover:scale-105 border border-white/30 shadow-lg flex items-center justify-center">
                          <div className={`absolute inset-0 bg-gradient-to-r ${ActiveProduct.color} opacity-80 group-hover/btn:opacity-100 transition-opacity duration-300`} />
                          <span className="relative z-10 flex items-center gap-2">
                            Explore {ActiveProduct.title} <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </span>
                        </button>
                      </Link>

                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* RIGHT SIDE: Sub-Item List Tabs (Adjusted for 6 items) */}
            <div className="lg:col-span-4 flex flex-col gap-2"> {/* <-- Reduced gap */}
              {activeData.map((product, i) => {
                const isActive = activeIndex === i;
                const TabIcon = product.icon;
                
                return (
                  <div
                    key={product.title}
                    onClick={() => setActiveIndex(i)}
                    className={`relative flex-1 p-3 rounded-2xl border cursor-pointer overflow-hidden transition-all duration-500 flex flex-col justify-center ${ // <-- Reduced padding to p-3
                      isActive 
                        ? `bg-card border-primary/50 shadow-lg scale-[1.02] ${product.shadow} z-10` 
                        : "bg-secondary/30 border-border hover:bg-secondary/80 hover:border-primary/30"
                    }`}
                  >
                    <div className="relative z-10 flex items-center gap-3"> {/* <-- Reduced gap */}
                      <div className={`p-2.5 rounded-xl transition-all duration-500 ${isActive ? `bg-gradient-to-br ${product.color} text-white shadow-md` : "bg-background border border-border text-primary"}`}> {/* <-- Reduced icon padding to p-2.5 */}
                        <TabIcon className="w-4 h-4" /> {/* <-- Slightly smaller icon */}
                      </div>
                      <div>
                        <h4 className={`font-display text-base font-extrabold transition-colors duration-300 ${isActive ? "text-foreground" : "text-foreground/70"}`}> {/* <-- Reduced font to text-base */}
                          {product.title}
                        </h4>
                        <p className={`text-[9px] mt-0.5 font-bold tracking-wide uppercase transition-colors duration-300 ${isActive ? "text-primary" : "text-muted-foreground"}`}> {/* <-- Reduced font to text-[9px] */}
                          {product.subtitle}
                        </p>
                      </div>
                    </div>
                    {isActive && (
                      <div className="absolute bottom-0 left-0 h-1 bg-secondary w-full">
                        <motion.div
                          initial={{ width: "0%" }}
                          animate={isHovered ? { width: "var(--current-width)" } : { width: "100%" }}
                          transition={{ duration: 5, ease: "linear" }}
                          className={`h-full bg-gradient-to-r ${product.color}`}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            
          </motion.div>
        </AnimatePresence>

        {/* Global Action Button (Linked to Products with Filter State) */}
        <div className="mt-16 flex justify-center">
          <Link 
            to="/products"
            state={{ 
              filter: activeCategory === "quantum" ? "RESEARCH" : "INDUSTRY",
              category: activeCategory === "quantum" ? "All Systems" : "All Solutions"
            }}
          >
            <button className="group relative px-8 py-5 rounded-2xl bg-slate-950 overflow-hidden transition-all duration-500 hover:scale-105 shadow-xl hover:shadow-[0_0_30px_rgba(220,38,38,0.3)]">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-cyan-500/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 flex items-center gap-3 font-display text-lg font-bold text-white transition-colors duration-300">
                View All Instruments <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-2 transition-all duration-300" />
              </span>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-cyan-500"
              />
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}

// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------







