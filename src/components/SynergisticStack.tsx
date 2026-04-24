// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Layers, ThermometerSnowflake, Magnet, Activity, ArrowRight, ArrowDown } from "lucide-react";
// import { Link } from "react-router-dom";

// // --- ACCURATE, ROUTED DATA WITH SOFT COLOR PALETTES ---
// const workflowSteps = [
//   {
//     id: "prep",
//     label: "Step 01 — Preparation",
//     title: "Sample Alignment & Assembly",
//     desc: "Build and pattern your 2D heterostructures with absolute deterministic precision.",
//     icon: Layers,
//     theme: {
//       bg: "bg-emerald-50",
//       text: "text-emerald-700",
//       border: "border-emerald-200",
//       gradient: "from-emerald-400 to-teal-400",
//       lightGlow: "shadow-emerald-500/10"
//     },
//     products: [
//       { 
//         name: "Motorised 2D Transfer System", 
//         desc: "Automated flake mapping and deterministic stacking under full optical control.", 
//         path: "/products/2d-transfer-motorised" 
//       },
//       { 
//         name: "Cryogenic NanoStage", 
//         desc: "Vitrified nano-positioning for complex assemblies and super-resolution imaging.", 
//         path: "/products/nano-stage" 
//       }
//     ]
//   },
//   {
//     id: "environment",
//     label: "Step 02 — Thermal Control",
//     title: "Cryogenic Environment",
//     desc: "Set the ultimate thermodynamic baseline for your physics, from 77K down to millikelvin.",
//     icon: ThermometerSnowflake,
//     theme: {
//       bg: "bg-blue-50",
//       text: "text-blue-700",
//       border: "border-blue-200",
//       gradient: "from-blue-400 to-cyan-400",
//       lightGlow: "shadow-blue-500/10"
//     },
//     products: [
//       { 
//         name: "100 PSM Probe Station", 
//         desc: "Cost-effective, reliable sub-micron electrical probing of nanoelectronic devices.", 
//         path: "/products/psm-100" 
//       },
//       { 
//         name: "Cryogenic Dipstick", 
//         desc: "Precision cryogenic sample control for rapid electrical and materials characterization.", 
//         path: "/products/dipstick" 
//       }
//     ]
//   },
//   {
//     id: "magnetic",
//     label: "Step 03 — Magnetic Field",
//     title: "Field Manipulation",
//     desc: "Steady, homogeneous magnetic fields for Hall, magnetoresistance, and spintronic measurements.",
//     icon: Magnet,
//     theme: {
//       bg: "bg-purple-50",
//       text: "text-purple-700",
//       border: "border-purple-200",
//       gradient: "from-purple-400 to-pink-400",
//       lightGlow: "shadow-purple-500/10"
//     },
//     products: [
//       { 
//         name: "Spectroscopy Electromagnet", 
//         desc: "Ultra-compact dipole delivering exceptional field strength for optical integration.", 
//         path: "/products/spectroscopy-magnet" 
//       },
//       { 
//         name: "Bitter Type Electromagnet", 
//         desc: "High-field air-core DC magnet achieving continuous operation up to 1.1 Tesla.", 
//         path: "/products/bitter-magnet" 
//       }
//     ]
//   },
//   {
//     id: "control",
//     label: "Step 04 — Signal & Power",
//     title: "Data Acquisition & Control",
//     desc: "Galvanically isolated signals and stable power to drive and read your quantum states.",
//     icon: Activity,
//     theme: {
//       bg: "bg-amber-50",
//       text: "text-amber-700",
//       border: "border-amber-200",
//       gradient: "from-amber-400 to-orange-400",
//       lightGlow: "shadow-amber-500/10"
//     },
//     products: [
//       { 
//         name: "QuantumVolt™ DAC", 
//         desc: "Ultra-low-noise gate and bias control through fully isolated bipolar outputs.", 
//         path: "/products/quantum-volt" 
//       },
//       { 
//         name: "CryoClean™ RF Filters", 
//         desc: "Suppress high-frequency EMI before it reaches sensitive quantum devices.", 
//         path: "/products/cryo-clean" 
//       },
//       { 
//         name: "Precision Power Converters", 
//         desc: "High-efficiency AC-DC and DC-DC systems for clean, stable lab power.", 
//         path: "/products/ac-dc-system-low" 
//       }
//     ]
//   }
// ];

// export function SynergisticStack() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);

//   // Autonomous cycling logic
//   useEffect(() => {
//     if (isHovered) return;
//     const timer = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % workflowSteps.length);
//     }, 6000); // Cycles every 6 seconds
//     return () => clearInterval(timer);
//   }, [isHovered]);

//   return (
//     <section className="relative py-24 bg-slate-50 overflow-hidden border-t border-slate-200">
      
//       {/* Soft Background Aesthetics */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.03)_0%,transparent_60%)] pointer-events-none" />
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.03)_0%,transparent_60%)] pointer-events-none" />

//       <div className="container max-w-5xl relative z-10">
        
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-500 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
//             <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
//             Complete Lab Ecosystem
//           </div>
//           <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-800 tracking-tight mb-4">
//             From First Flake to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Publishable Data</span>
//           </h2>
//           <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
//             Every instrument your laboratory needs—engineered to interface flawlessly from sample preparation through to cryogenic transport measurement.
//           </p>
//         </div>

//         {/* The Autonomous Workflow Stack */}
//         <div 
//           className="relative pl-4 md:pl-10"
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           {/* Vertical Connecting Line */}
//           <div className="absolute left-[33px] md:left-[65px] top-8 bottom-12 w-[2px] bg-slate-200 rounded-full" />

//           <div className="space-y-6">
//             {workflowSteps.map((step, index) => {
//               const isActive = activeIndex === index;
//               const StepIcon = step.icon;

//               return (
//                 <div key={step.id} className="relative">
                  
//                   {/* Timeline Node */}
//                   <div className={`absolute -left-[31px] md:-left-[7px] top-6 w-10 h-10 rounded-full border-4 flex items-center justify-center transition-all duration-500 shadow-sm z-10 ${
//                     isActive ? `bg-white ${step.theme.border} scale-110` : 'bg-slate-100 border-slate-200 scale-100'
//                   }`}>
//                     {isActive && (
//                       <motion.div 
//                         layoutId="activeNodeGlow"
//                         className={`absolute inset-0 rounded-full bg-gradient-to-r ${step.theme.gradient} opacity-20 blur-md`}
//                       />
//                     )}
//                     <span className={`text-xs font-black ${isActive ? step.theme.text : 'text-slate-400'}`}>
//                       0{index + 1}
//                     </span>
//                   </div>

//                   {/* Main Card */}
//                   <div className="ml-10 md:ml-16">
//                     <motion.div 
//                       onClick={() => setActiveIndex(index)}
//                       className={`relative rounded-2xl md:rounded-[2rem] overflow-hidden cursor-pointer transition-all duration-500 border ${
//                         isActive 
//                           ? `bg-white ${step.theme.border} shadow-xl ${step.theme.lightGlow}` 
//                           : `bg-white/60 border-slate-200 shadow-sm hover:bg-white hover:shadow-md`
//                       }`}
//                     >
//                       {/* Card Header */}
//                       <div className={`p-6 md:p-8 flex items-start sm:items-center justify-between gap-4 transition-colors duration-500 ${isActive ? step.theme.bg : 'bg-transparent'}`}>
//                         <div className="flex items-center gap-5">
//                           <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-500 shadow-sm ${
//                             isActive ? `bg-white ${step.theme.text}` : 'bg-slate-100 text-slate-400'
//                           }`}>
//                             <StepIcon className="w-6 h-6" />
//                           </div>
//                           <div>
//                             <p className={`text-[10px] font-bold tracking-widest uppercase mb-1 transition-colors duration-500 ${isActive ? step.theme.text : 'text-slate-400'}`}>
//                               {step.label}
//                             </p>
//                             <h3 className="font-display text-xl md:text-2xl font-bold text-slate-800">
//                               {step.title}
//                             </h3>
//                           </div>
//                         </div>
                        
//                         {/* Desktop Only: Short Desc visible when closed */}
//                         {!isActive && (
//                           <p className="hidden lg:block text-sm text-slate-500 flex-grow max-w-sm ml-8 text-right italic line-clamp-1">
//                             {step.desc}
//                           </p>
//                         )}

//                         <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-500 ${isActive ? 'bg-white rotate-180 shadow-sm' : 'bg-slate-100'}`}>
//                           <ArrowDown className={`w-4 h-4 ${isActive ? step.theme.text : 'text-slate-400'}`} />
//                         </div>
//                       </div>

//                       {/* Expandable Content (Products) */}
//                       <AnimatePresence initial={false}>
//                         {isActive && (
//                           <motion.div
//                             initial={{ height: 0, opacity: 0 }}
//                             animate={{ height: "auto", opacity: 1 }}
//                             exit={{ height: 0, opacity: 0 }}
//                             transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
//                             className="overflow-hidden bg-white"
//                           >
//                             <div className="p-6 md:p-8 border-t border-slate-100">
//                               <p className="text-slate-600 mb-6 font-medium max-w-2xl">
//                                 {step.desc}
//                               </p>
                              
//                               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                 {step.products.map((prod, i) => (
//                                   <Link 
//                                     key={i} 
//                                     to={prod.path}
//                                     className="group block p-5 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all duration-300"
//                                   >
//                                     <div className="flex justify-between items-start gap-4">
//                                       <div>
//                                         <h4 className="font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">
//                                           {prod.name}
//                                         </h4>
//                                         <p className="text-xs text-slate-500 leading-relaxed">
//                                           {prod.desc}
//                                         </p>
//                                       </div>
//                                       <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-slate-100 group-hover:bg-blue-50 transition-colors`}>
//                                         <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 group-hover:-rotate-45 transition-all" />
//                                       </div>
//                                     </div>
//                                   </Link>
//                                 ))}
//                               </div>
//                             </div>
//                           </motion.div>
//                         )}
//                       </AnimatePresence>

//                     </motion.div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Global CTA Strip */}
//         <div className="mt-16 bg-white border border-slate-200 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
//           <div>
//             <h3 className="font-display text-2xl font-extrabold text-slate-800 mb-1">Build your lab, stage by stage</h3>
//             <p className="text-sm text-slate-500 font-medium">Start with what you need now. Every instrument integrates as you scale.</p>
//           </div>
//           <div className="flex gap-4 w-full md:w-auto">
//             <Link to="/contact" className="flex-1 md:flex-none text-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md transition-all hover:-translate-y-0.5">
//               Talk to an expert
//             </Link>
//             <Link to="/products" className="flex-1 md:flex-none text-center px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl border border-slate-200 transition-all hover:-translate-y-0.5">
//               View Full Catalog
//             </Link>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }






import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, ThermometerSnowflake, Magnet, Activity, ArrowRight, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

// --- ACCURATE DATA WITH BRIGHT, EXACT HEX COLORS ---
const workflowSteps = [
  {
    id: "prep",
    label: "Step 01 — Preparation",
    title: "Sample Alignment & Assembly",
    desc: "Build and pattern your 2D heterostructures with absolute deterministic precision.",
    icon: Layers,
    theme: {
      bg: "bg-[#e0f5ee]", 
      text: "text-[#084d3c]", 
      iconBg: "bg-[#0d7a5f] text-white", 
      border: "border-[#0d7a5f]/20",
      gradient: "from-[#0d7a5f] to-teal-400",
      lightGlow: "shadow-[#0d7a5f]/10"
    },
    products: [
      { 
        name: "Motorised 2D Transfer System", 
        desc: "Automated flake mapping and deterministic stacking under full optical control.", 
        path: "/products/2d-transfer-motorised" 
      },
      { 
        name: "Cryogenic NanoStage", 
        desc: "Vitrified nano-positioning for complex assemblies and super-resolution imaging.", 
        path: "/products/nano-stage" 
      }
    ]
  },
  {
    id: "environment",
    label: "Step 02 — Thermal Control",
    title: "Cryogenic Environment",
    desc: "Set the ultimate thermodynamic baseline for your physics, from 77K down to millikelvin.",
    icon: ThermometerSnowflake,
    theme: {
      bg: "bg-[#eee9fb]", 
      text: "text-[#352470]", 
      iconBg: "bg-[#5b3fa6] text-white", 
      border: "border-[#5b3fa6]/20",
      gradient: "from-[#5b3fa6] to-purple-400",
      lightGlow: "shadow-[#5b3fa6]/10"
    },
    products: [
      { 
        name: "100 PSM Probe Station", 
        desc: "Cost-effective, reliable sub-micron electrical probing of nanoelectronic devices.", 
        path: "/products/psm-100" 
      },
      { 
        name: "Cryogenic Dipstick", 
        desc: "Precision cryogenic sample control for rapid electrical and materials characterization.", 
        path: "/products/dipstick" 
      }
    ]
  },
  {
    id: "magnetic",
    label: "Step 03 — Magnetic Field",
    title: "Field Manipulation",
    desc: "Steady, homogeneous magnetic fields for Hall, magnetoresistance, and spintronic measurements.",
    icon: Magnet,
    theme: {
      bg: "bg-[#fceee7]", 
      text: "text-[#7d2c0e]", 
      iconBg: "bg-[#c94c20] text-white", 
      border: "border-[#c94c20]/20",
      gradient: "from-[#c94c20] to-orange-400",
      lightGlow: "shadow-[#c94c20]/10"
    },
    products: [
      { 
        name: "Spectroscopy Electromagnet", 
        desc: "Ultra-compact dipole delivering exceptional field strength for optical integration.", 
        path: "/products/spectroscopy-magnet" 
      },
      { 
        name: "Bitter Type Electromagnet", 
        desc: "High-field air-core DC magnet achieving continuous operation up to 1.1 Tesla.", 
        path: "/products/bitter-magnet" 
      }
    ]
  },
  {
    id: "control",
    label: "Step 04 — Signal & Power",
    title: "Data Acquisition & Control",
    desc: "Galvanically isolated signals and stable power to drive and read your quantum states.",
    icon: Activity,
    theme: {
      bg: "bg-[#e3eef9]", 
      text: "text-[#0d3967]", 
      iconBg: "bg-[#1a5fa8] text-white", 
      border: "border-[#1a5fa8]/20",
      gradient: "from-[#1a5fa8] to-blue-400",
      lightGlow: "shadow-[#1a5fa8]/10"
    },
    products: [
      { 
        name: "QuantumVolt™ DAC", 
        desc: "Ultra-low-noise gate and bias control through fully isolated bipolar outputs.", 
        path: "/products/quantum-volt" 
      },
      { 
        name: "CryoClean™ RF Filters", 
        desc: "Suppress high-frequency EMI before it reaches sensitive quantum devices.", 
        path: "/products/cryo-clean" 
      },
      { 
        name: "Precision Power Converters", 
        desc: "High-efficiency AC-DC and DC-DC systems for clean, stable lab power.", 
        path: "/products/ac-dc-system-low" 
      }
    ]
  }
];

export function SynergisticStack() {
  // Keeping 0 as default so the first one opens, but auto-scroll is completely removed
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden border-t border-slate-200">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.03)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.03)_0%,transparent_60%)] pointer-events-none" />

      <div className="container max-w-5xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-500 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Complete Lab Ecosystem
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-800 tracking-tight mb-4">
            From First Flake to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Publishable Data</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Every instrument your laboratory needs—engineered to interface flawlessly from sample preparation through to cryogenic transport measurement.
          </p>
        </div>

        <div className="relative pl-4 md:pl-10">
          {/* Vertical Connecting Line */}
          <div className="absolute left-[33px] md:left-[65px] top-8 bottom-12 w-[2px] bg-slate-200 rounded-full" />

          <div className="space-y-6">
            {workflowSteps.map((step, index) => {
              const isActive = activeIndex === index;
              const StepIcon = step.icon;

              return (
                <div key={step.id} className="relative">
                  
                  {/* Timeline Node */}
                  <div className={`absolute -left-[31px] md:-left-[7px] top-6 w-10 h-10 rounded-full border-4 flex items-center justify-center transition-all duration-500 shadow-sm z-10 ${
                    isActive ? `bg-white ${step.theme.border} scale-110` : 'bg-slate-100 border-slate-200 scale-100'
                  }`}>
                    {isActive && (
                      <motion.div 
                        layoutId="activeNodeGlow"
                        className={`absolute inset-0 rounded-full bg-gradient-to-r ${step.theme.gradient} opacity-20 blur-md`}
                      />
                    )}
                    <span className={`text-xs font-black transition-colors ${isActive ? step.theme.text : 'text-slate-400'}`}>
                      0{index + 1}
                    </span>
                  </div>

                  {/* Main Card */}
                  <div className="ml-10 md:ml-16">
                    <motion.div 
                      onClick={() => setActiveIndex(isActive ? null : index)}
                      className={`relative rounded-2xl md:rounded-[1.5rem] overflow-hidden cursor-pointer transition-all duration-500 border ${
                        isActive 
                          ? `bg-white ${step.theme.border} shadow-xl ${step.theme.lightGlow}` 
                          : `bg-white border-transparent shadow-sm hover:shadow-md hover:border-slate-200`
                      }`}
                    >
                      {/* Card Header */}
                      <div className={`p-6 md:p-8 flex items-start sm:items-center justify-between gap-4 transition-colors duration-500 ${step.theme.bg}`}>
                        <div className="flex items-center gap-5">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm transition-colors duration-500 ${step.theme.iconBg}`}>
                            <StepIcon className="w-6 h-6" />
                          </div>
                          <div>
                            <p className={`text-[10px] font-bold tracking-widest uppercase mb-1 ${step.theme.text}`}>
                              {step.label}
                            </p>
                            <h3 className={`font-display text-xl md:text-2xl font-extrabold ${step.theme.text}`}>
                              {step.title}
                            </h3>
                          </div>
                        </div>
                        
                        {!isActive && (
                          <p className={`hidden lg:block text-sm flex-grow max-w-sm ml-8 text-right italic line-clamp-1 opacity-80 ${step.theme.text}`}>
                            {step.desc}
                          </p>
                        )}

                        {/* HIGHLY ANIMATED TOGGLE BUTTON */}
                        <motion.div 
                          animate={isActive ? { rotate: 180, y: 0 } : { y: [0, 5, 0] }}
                          transition={isActive ? { duration: 0.4 } : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors duration-500 shadow-md border ${
                            isActive ? 'bg-white/80 border-transparent' : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-lg'
                          }`}
                        >
                          <ArrowDown className={`w-5 h-5 ${step.theme.text}`} />
                        </motion.div>
                      </div>

                      {/* Expandable Content (Products) */}
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                            className="overflow-hidden bg-white"
                          >
                            <div className="p-6 md:p-8 border-t border-slate-100">
                              <p className="text-slate-600 mb-6 font-medium max-w-2xl">
                                {step.desc}
                              </p>
                              
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {step.products.map((prod, i) => (
                                  <Link 
                                    key={i} 
                                    to={prod.path}
                                    onClick={(e) => e.stopPropagation()} 
                                    className="group block p-5 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all duration-300"
                                  >
                                    <div className="flex justify-between items-start gap-4">
                                      <div>
                                        <h4 className={`font-bold mb-1 transition-colors ${step.theme.text}`}>
                                          {prod.name}
                                        </h4>
                                        <p className="text-xs text-slate-500 leading-relaxed">
                                          {prod.desc}
                                        </p>
                                      </div>
                                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-slate-100 transition-colors group-hover:${step.theme.bg}`}>
                                        <ArrowRight className={`w-3.5 h-3.5 text-slate-400 group-hover:-rotate-45 transition-all group-hover:${step.theme.text}`} />
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Global CTA Strip */}
        <div className="mt-16 bg-white border border-slate-200 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h3 className="font-display text-2xl font-extrabold text-slate-800 mb-1">Build your lab, stage by stage</h3>
            <p className="text-sm text-slate-500 font-medium">Start with what you need now. Every instrument integrates as you scale.</p>
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <Link to="/contact" className="flex-1 md:flex-none text-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md transition-all hover:-translate-y-0.5">
              Talk to an expert
            </Link>
            <Link to="/products" className="flex-1 md:flex-none text-center px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl border border-slate-200 transition-all hover:-translate-y-0.5">
              View Full Catalog
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}