import { useState, useEffect, useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  ArrowLeft, ArrowRight, Download, Phone, Mail, SlidersHorizontal, Map, 
  Target as Reticle, Focus, CheckCircle2, Layers, Cpu, Wrench, 
  Settings, Activity, Zap, ChevronRight, Binary, Target, ShieldCheck,
  ArrowLeftCircle, ArrowRightCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import { productsData } from "@/data/products";

// ==========================================
// 1. FORMAL TELEMETRY (formal graphics, varied clinical palette)
// ==========================================
const MicroscopeTelemetry = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      className="w-full bg-white rounded-[2.5rem] border border-slate-200 shadow-xl overflow-hidden font-sans flex flex-col relative"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#f1f5f9_2px,transparent_2px)] bg-[size:24px_24px] pointer-events-none" />
      
      <div className="bg-slate-50 border-b border-slate-200 px-8 py-5 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_12px_rgba(52,211,153,0.6)]" />
          <span className="text-slate-600 text-xs font-extrabold tracking-widest uppercase font-mono">Formal diagnostics</span>
        </div>
        <div className="flex gap-4">
          <span className="text-xs font-bold font-mono text-emerald-700 bg-emerald-100 border border-emerald-200 px-2 py-1 rounded shadow-sm">CLOSED LOOP</span>
          <span className="text-xs font-bold font-mono text-blue-700 bg-blue-100 border border-blue-200 px-2 py-1 rounded shadow-sm">XYZ LOCKED</span>
        </div>
      </div>

      <div className="p-8 grid lg:grid-cols-3 gap-8 relative z-10 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
        
        {/* GRAPH 1: Live Focus Intensity */}
        <div className="px-0 lg:px-6 relative flex flex-col shadow-inner overflow-hidden pb-8 lg:pb-0">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-emerald-500 text-xs font-extrabold uppercase tracking-widest mb-1">Formal Diagnostics</p>
              <p className="text-2xl font-extrabold text-slate-900 tracking-tight">Active Focus</p>
            </div>
            <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-100"><Focus className="w-6 h-6 text-emerald-500" /></div>
          </div>
          
          <div className="flex-grow w-full h-48 mt-2 border-l-2 border-b-2 border-slate-200 relative">
            <svg viewBox="0 0 400 200" className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
              <motion.path 
                d="M 0 180 Q 50 180, 100 170 T 200 170 T 300 170 Q 320 170, 330 100 T 340 30 T 350 100 Q 360 170, 400 170" 
                fill="none" stroke="#10b981" strokeWidth="4" 
                animate={{ strokeDashoffset: [0, 800, 0] }} 
                strokeDasharray="10 10"
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <path d="M 0 180 Q 50 180, 100 170 T 200 170 T 300 170 Q 320 170, 330 100 T 340 30 T 350 100 Q 360 170, 400 170 L 400 200 L 0 200 Z" fill="rgba(16, 185, 129, 0.1)"/>
            </svg>
            <div className="absolute top-0 -left-12 transform -translate-y-full origin-bottom-right -rotate-90 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Focus Found</div>
            <div className="absolute top-2 right-2 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded shadow-sm border border-emerald-100">Score Found (Z=450µm)</div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Z-Displacement (µm)</div>
          </div>
        </div>

        {/* GRAPH 2: Wafer minimap Relocation Monitor */}
        <div className="px-0 lg:px-6 relative flex flex-col shadow-inner overflow-hidden py-8 lg:py-0">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-blue-500 text-xs font-extrabold uppercase tracking-widest mb-1">Grid Navigation</p>
              <p className="text-2xl font-extrabold text-slate-900 tracking-tight">Relocation Map</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-2xl border border-blue-100"><Map className="w-6 h-6 text-blue-500" /></div>
          </div>
          
          <div className="flex-grow flex items-center justify-center w-full h-48 mt-2 bg-slate-50 border-2 border-slate-100 rounded-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_2px,transparent_2px),linear-gradient(to_bottom,#e2e8f0_2px,transparent_2px)] bg-[size:16.66%_16.66%]" />
            <Reticle className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 text-slate-300 opacity-50" />
            
            <motion.div 
              className="absolute w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.6)] border-2 border-white z-20"
              animate={{ x: [0, 80, -40, 0], y: [0, -60, 40, 0], rotate: [0, 45, -45, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <Reticle className="w-2.5 h-2.5 text-white" />
            </motion.div>
            <div className="absolute bottom-2 left-2 text-[10px] font-bold text-blue-700 bg-white px-2 py-1 rounded shadow-sm border border-blue-100">Confirmed (Grid A4)</div>
            <div className="absolute top-1 left-1 text-[10px] font-bold text-slate-400 font-mono">A</div>
            <div className="absolute top-1 left-[16.66%] text-[10px] font-bold text-slate-400 font-mono">B</div>
            <div className="absolute top-1 right-[16.66%] text-[10px] font-bold text-slate-400 font-mono">C</div>
          </div>
        </div>

        {/* DATA 3: Real-Time Coordinate Counters */}
        <div className="px-0 lg:px-6 relative flex flex-col shadow-inner overflow-hidden pt-8 lg:pt-0">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-amber-500 text-xs font-extrabold uppercase tracking-widest mb-1">Encoded Feedback</p>
              <p className="text-2xl font-extrabold text-slate-900 tracking-tight">&lt; 50nm Res.</p>
            </div>
            <div className="p-3 bg-amber-50 rounded-2xl border border-amber-100"><SlidersHorizontal className="w-6 h-6 text-amber-500" /></div>
          </div>
          
          <div className="flex-grow flex flex-col justify-center gap-3 w-full h-48 mt-2">
            {[ {label: 'X (mm)', value: [0, 24.3821, -12.9431, 0]}, {label: 'Y (mm)', value: [0, -15.2234, 18.0022, 0]}, {label: 'Z (µm)', value: [0, 1000.5, 450.2, 0]} ].map((coord, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 px-4 py-3 rounded-xl flex items-center justify-between transition-colors duration-500 hover:border-amber-200">
                <span className="text-xs font-extrabold text-slate-500 uppercase tracking-widest">{coord.label}</span>
                <motion.span 
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 4, repeat: Infinity, times: [0.1, 0.15, 0.2], delay: i * 0.3 }}
                  className="text-xl font-black text-slate-900 font-mono"
                >
                  {coord.value[1]} 
                </motion.span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
};

// ==========================================
// 2. CAPABILITIES TRIPTYCH
// ==========================================
const CapabilitiesTriptych = ({ features }: { features: string[] }) => {
  if (!features) return null;
  const categories = [ 
    { title: "Positioning Excellence", desc: features[0] || "Sub-micron positioning capability", color: "emerald", icon: Target }, 
    { title: "Movement Integrity", desc: features[1] || "Closed-loop electronic feedback", color: "blue", icon: Activity }, 
    { title: "System Reliability", desc: features[2] || "Compact, integration-ready design", color: "amber", icon: ShieldCheck } 
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto py-8">
      {categories.map((cat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className={`bg-white border border-slate-200 rounded-3xl p-8 shadow-sm group hover:border-${cat.color}-300 hover:shadow-md transition-all duration-300 flex flex-col gap-4`}
        >
          <div className={`w-12 h-12 rounded-xl bg-${cat.color}-50 text-${cat.color}-600 flex items-center justify-center shrink-0 border border-${cat.color}-100`}>
             <cat.icon className="w-6 h-6"/>
          </div>
          <div>
            <h4 className="text-xl font-extrabold text-slate-900 mb-2">{cat.title}</h4>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">{cat.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// ==========================================
// 3. MOTION CONTROL & ACCURACY (HORIZONTAL ROWS PATTERN)
// ==========================================
const AnimatedMotionGrid = ({ motionControl }: { motionControl: any }) => {
  if (!motionControl) return null;
  // const sections = [ 
  //   { title: "Positioning Performance", icon: Target, color: "emerald", list: motionControl.performance }, 
  //   { title: "Motion Modes", icon: SlidersHorizontal, color: "blue", list: motionControl.modes }, 
  //   { title: "Controller Electronics", icon: Cpu, color: "amber", list: motionControl.electronics?.items || [], desc: motionControl.electronics?.description } 
  // ];



  const sections = [ 
    { 
      title: "Positioning Performance", 
      icon: Target, 
      color: "emerald", 
      list: motionControl.performance,
      desc: "Engineered for stable long-term operation, ensuring consistent positioning performance across repeated cycles." // Added explanation
    }, 
    { 
      title: "Motion Modes", 
      icon: SlidersHorizontal, 
      color: "blue", 
      list: motionControl.modes,
      desc: "Programmable multi-mode operation optimized for alignment, continuous scanning, and synchronized tasks." // Added explanation
    }, 
    { 
      title: "Controller Electronics", 
      icon: Cpu, 
      color: "amber", 
      list: motionControl.electronics?.items || [], 
      desc: motionControl.electronics?.description 
    } 
  ];

  return (
    <div className="flex flex-col gap-8 pt-8 max-w-6xl mx-auto">
      {sections.map((section, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: i * 0.1 }}
          className="flex flex-col md:flex-row bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden group hover:shadow-lg transition-all duration-500"
        >
          {/* Animated Header Section (Left Side) */}
          <div className={`md:w-1/3 p-8 bg-slate-50 border-r border-slate-100 flex flex-col justify-center relative overflow-hidden`}>
            {/* Auto-animated background sweeps */}
            <motion.div 
              animate={{ x: ["-100%", "200%"] }} 
              transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: i * 1.5 }} 
              className={`absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-${section.color}-100/50 to-transparent skew-x-12`} 
            />
            
            <div className={`w-14 h-14 rounded-2xl bg-white text-${section.color}-500 flex items-center justify-center shrink-0 border border-slate-200 mb-6 relative z-10 shadow-sm`}>
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }}>
                <section.icon className="w-7 h-7"/>
              </motion.div>
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 relative z-10">{section.title}</h3>
            {section.desc && <p className="text-xs text-slate-500 mt-3 font-bold relative z-10">{section.desc}</p>}
          </div>
          
          {/* Animated Data Grid (Right Side) */}
          <div className="md:w-2/3 p-8 flex items-center">
            {/* <motion.ul 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
              className="grid sm:grid-cols-2 gap-x-8 gap-y-3 w-full"
            > */}


            <motion.ul 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
              className="grid sm:grid-cols-2 gap-x-8 gap-y-3 content-center w-full"
            >
              {section.list.map((item: string, j: number) => (
                <motion.li 
                  key={j} 
                  variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} 
                  className="flex items-start gap-3 text-slate-700 font-bold text-base leading-relaxed"
                >
                  <motion.div 
                    animate={{ scale: [1, 1.3, 1] }} 
                    transition={{ duration: 2, repeat: Infinity, delay: j * 0.3 }} 
                    className={`w-2 h-2 rounded-full bg-${section.color}-500 shrink-0 mt-1.5`}
                  />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
};


// // ==========================================
// // 4. ENGINEERED STABILITY (IMAGE 2 DATA)
// // ==========================================
// const EngineeredStability = ({ architecture }: { architecture: any }) => {
//   if (!architecture) return null;

//   const hoverVariants = {
//     hover: {
//       scale: 1.02,
//       transition: {
//         duration: 0.3,
//         ease: "easeInOut",
//         when: "beforeChildren", 
//         staggerChildren: 0.1 
//       }
//     }
//   };

//   return (
//     <div className="flex flex-col gap-10 max-w-6xl mx-auto">
      
//       {/* Top Animated Hub (Horizontal Pattern) */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.95 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//         className="w-full h-40 bg-white border border-slate-200 rounded-[2.5rem] shadow-sm flex items-center justify-around relative overflow-hidden"
//       >
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:20px_20px]" />
        
//         {/* Animated Connecting Lines */}
//         <div className="absolute h-1 bg-slate-100 w-full top-1/2 -translate-y-1/2 left-0 z-0" />
//         <motion.div 
//           animate={{ width: ["0%", "100%", "0%"], left: ["0%", "0%", "100%"] }} 
//           transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} 
//           className="absolute h-1 bg-emerald-400 top-1/2 -translate-y-1/2 z-0" 
//         />

//         {/* 3 Animated Nodes */}
//         <div className="z-10 w-20 h-20 bg-white rounded-full border-4 border-emerald-100 flex items-center justify-center shadow-md">
//           <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}><Wrench className="w-8 h-8 text-emerald-500" /></motion.div>
//         </div>
//         <div className="z-10 w-24 h-24 bg-white rounded-full border-4 border-blue-100 flex items-center justify-center shadow-lg relative">
//            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0 border-2 border-blue-200 rounded-full" />
//            <Layers className="w-10 h-10 text-blue-500" />
//         </div>
//         <div className="z-10 w-20 h-20 bg-white rounded-full border-4 border-slate-100 flex items-center justify-center shadow-md">
//           <motion.div animate={{ rotate: -360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}><Settings className="w-8 h-8 text-slate-500" /></motion.div>
//         </div>
//       </motion.div>

//       {/* Bottom Side-by-Side Cards (Horizontal Pattern) */}
//       <div className="grid md:grid-cols-2 gap-8">
//         {[ {title: "Mechanical Construction", icon: Wrench, color: "emerald", list: architecture.mechanical}, {title: "Modular Integration", icon: Layers, color: "blue", list: architecture.modular}].map((card, i) => (
//           <motion.div 
//             key={i}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: i * 0.2 }}
//             variants={hoverVariants} 
//             whileHover="hover" 
//             className={`rounded-3xl p-8 lg:p-10 shadow-sm transition-colors border transition-all duration-300 ${
//               card.color === 'emerald' 
//                 ? 'bg-slate-50 border-slate-200 hover:bg-emerald-50 hover:border-emerald-200' 
//                 : 'bg-slate-50 border-slate-200 hover:bg-blue-50 hover:border-blue-200'
//             }`}
//           >
//             <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-200">
//               <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
//                 <card.icon className={`w-6 h-6 text-${card.color}-600`} />
//               </div>
//               <h3 className="text-2xl font-extrabold text-slate-900">{card.title}</h3>
//             </div>
//             <ul className="space-y-4">
//               {card.list.map((item: string, j: number) => (
//                 <li key={j} className="flex items-start gap-3 text-slate-700 font-medium text-sm">
//                   <CheckCircle2 className={`w-5 h-5 text-${card.color}-500 shrink-0 mt-0.5`} />
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };


// ==========================================
// 4. ENGINEERED STABILITY (IMAGE 2 DATA)
// ==========================================
const EngineeredStability = ({ architecture }: { architecture: any }) => {
  if (!architecture) return null;

  // FIX 1: Added "as const" to fix the TypeScript strict typing error
  const hoverVariants = {
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const,
        when: "beforeChildren" as const, 
        staggerChildren: 0.1 
      }
    }
  };

  return (
    <div className="flex flex-col gap-10 max-w-6xl mx-auto">
      
      {/* Top Animated Hub (Horizontal Pattern) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full h-40 bg-white border border-slate-200 rounded-[2.5rem] shadow-sm flex items-center justify-around relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:20px_20px]" />
        
        {/* Animated Connecting Lines */}
        <div className="absolute h-1 bg-slate-100 w-full top-1/2 -translate-y-1/2 left-0 z-0" />
        <motion.div 
          animate={{ width: ["0%", "100%", "0%"], left: ["0%", "0%", "100%"] }} 
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} 
          className="absolute h-1 bg-emerald-400 top-1/2 -translate-y-1/2 z-0" 
        />

        {/* 3 Animated Nodes */}
        <div className="z-10 w-20 h-20 bg-white rounded-full border-4 border-emerald-100 flex items-center justify-center shadow-md">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}><Wrench className="w-8 h-8 text-emerald-500" /></motion.div>
        </div>
        <div className="z-10 w-24 h-24 bg-white rounded-full border-4 border-blue-100 flex items-center justify-center shadow-lg relative">
           <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0 border-2 border-blue-200 rounded-full" />
           <Layers className="w-10 h-10 text-blue-500" />
        </div>
        <div className="z-10 w-20 h-20 bg-white rounded-full border-4 border-slate-100 flex items-center justify-center shadow-md">
          <motion.div animate={{ rotate: -360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}><Settings className="w-8 h-8 text-slate-500" /></motion.div>
        </div>
      </motion.div>

      {/* Bottom Side-by-Side Cards (Horizontal Pattern) */}
      <div className="grid md:grid-cols-2 gap-8">
        {[ {title: "Mechanical Construction", icon: Wrench, color: "emerald", list: architecture.mechanical}, {title: "Modular Integration", icon: Layers, color: "blue", list: architecture.modular}].map((card, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            variants={hoverVariants} 
            whileHover="hover" 
            // FIX 2: Removed "transition-colors" to fix the Tailwind CSS conflict warning
            className={`rounded-3xl p-8 lg:p-10 shadow-sm border transition-all duration-300 ${
              card.color === 'emerald' 
                ? 'bg-slate-50 border-slate-200 hover:bg-emerald-50 hover:border-emerald-200' 
                : 'bg-slate-50 border-slate-200 hover:bg-blue-50 hover:border-blue-200'
            }`}
          >
            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                <card.icon className={`w-6 h-6 text-${card.color}-600`} />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">{card.title}</h3>
            </div>
            <ul className="space-y-4">
              {card.list.map((item: string, j: number) => (
                <li key={j} className="flex items-start gap-3 text-slate-700 font-medium text-sm">
                  <CheckCircle2 className={`w-5 h-5 text-${card.color}-500 shrink-0 mt-0.5`} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};


// ==========================================
// 5. SCALABLE INTEGRATION (Network & Marquee Pattern)
// ==========================================
const ScalableIntegrationPattern = ({ integration, applications }: { integration: any, applications: string[] }) => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  const scrollMarquee = (direction: 'left' | 'right') => {
    if (marqueeRef.current) {
      const scrollAmount = 400; 
      const newScrollPos = direction === 'left' 
        ? marqueeRef.current.scrollLeft - scrollAmount
        : marqueeRef.current.scrollLeft + scrollAmount;

      marqueeRef.current.scrollTo({
        left: newScrollPos,
        behavior: 'smooth' 
      });
    }
  };

  return (
    <div className="flex flex-col gap-8 max-w-6xl mx-auto pt-8">
      {/* Network Grid for Features */}
      <div className="relative">
        <h3 className="text-xl font-extrabold text-slate-900 mb-8 text-center flex items-center justify-center gap-2">
          <Binary className="w-6 h-6 text-emerald-600" /> Integration Capabilities
        </h3>
        <div className="flex flex-wrap justify-center gap-4 relative z-10">
          {integration?.features.map((feature: string, i: number) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-emerald-200 px-6 py-4 rounded-2xl shadow-sm flex items-center gap-3 hover:shadow-md transition-shadow"
            >
              <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }} className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
              <span className="text-sm font-bold text-slate-700">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Applications Section with Interactive Marquee Controls */}
      <div className="relative w-full bg-slate-50 border-y border-slate-200 py-10 flex flex-col group">
        
        {/* Combined Header/Navigation Container */}
        <div className="container max-w-6xl mx-auto flex items-center justify-between mb-8 px-4 w-full">
          <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
            <Map className="w-6 h-6 text-blue-600" /> Target Applications
          </h3>
          
          <div className="flex gap-3 text-blue-600">
            {/* Left Button */}
            <button 
              onClick={() => scrollMarquee('left')}
              className="p-2 bg-white rounded-full shadow-md border border-slate-200 hover:bg-blue-50 hover:border-blue-300 hover:scale-110 transition-all duration-300" 
              aria-label="Scroll applications left"
            >
              <ArrowLeftCircle className="w-7 h-7" strokeWidth={1.5} />
            </button>

            {/* Right Button */}
            <button 
              onClick={() => scrollMarquee('right')}
              className="p-2 bg-white rounded-full shadow-md border border-slate-200 hover:bg-blue-50 hover:border-blue-300 hover:scale-110 transition-all duration-300"
              aria-label="Scroll applications right"
            >
              <ArrowRightCircle className="w-7 h-7" strokeWidth={1.5} />
            </button>
          </div>
        </div>
        
        {/* Applications Container */}
        <div 
          ref={marqueeRef}
          className="flex whitespace-nowrap overflow-hidden hide-scrollbar w-full relative z-10 scroll-smooth" 
        >
          <motion.div 
            animate={{ x: [0, -2000] }} 
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }} 
            className="flex gap-4 shrink-0 px-4"
          >
            {applications?.concat(applications).map((app: string, i: number) => (
              <div key={i} className="px-6 py-3 rounded-full bg-white border border-blue-200 text-blue-700 font-bold shadow-sm">
                {app}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 6. COMPREHENSIVE SPECS TABS
// ==========================================
const ComprehensiveSpecsTabs = ({ specs }: { specs: any }) => {
  if (!specs) return null;
  const categories = Object.keys(specs);
  const [activeTab, setActiveTab] = useState(categories[0]);
  
  const accentColors = [
    "border-emerald-200 text-emerald-700 bg-emerald-50", 
    "border-blue-200 text-blue-700 bg-blue-50", 
    "border-amber-200 text-amber-700 bg-amber-50",
    "border-slate-200 text-slate-700 bg-slate-100"
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 mt-10"
    >
      <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible hide-scrollbar lg:w-1/3 shrink-0 pb-2 lg:pb-0">
        {categories.map((cat, index) => {
          const colorClass = accentColors[index % accentColors.length];
          return (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`relative px-5 py-3 text-left rounded-2xl font-bold transition-all duration-300 flex items-center justify-between whitespace-nowrap outline-none ${
                activeTab === cat 
                  ? `${colorClass} shadow-sm border` 
                  : "text-slate-600 bg-white hover:bg-slate-50 border border-slate-200"
              }`}
            >
              <span className="relative z-10 text-sm">{cat}</span>
              {activeTab === cat && <ChevronRight className={`w-4 h-4`} />}
            </button>
          )
        })}
      </div>

      <div className="lg:w-2/3 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden min-h-[350px]">
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center gap-3">
          <Settings className="w-5 h-5 text-slate-500" />
          <h3 className="font-display font-extrabold text-slate-900 text-lg">{activeTab} Parameters</h3>
        </div>
        <div className="p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col"
            >
              {Object.entries(specs[activeTab] || {}).map(([param, val]: [string, any], i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-slate-100 last:border-0 hover:bg-slate-50 rounded-lg px-2 -mx-2 transition-colors">
                  <span className="text-[11px] font-extrabold text-slate-500 uppercase tracking-widest sm:w-1/2 pr-4 mb-1 sm:mb-0">
                    {param}
                  </span>
                  <span className="text-sm font-bold text-slate-900 sm:w-1/2 sm:text-right">
                    {val}
                  </span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

// ==========================================
// 7. MAIN PAGE COMPONENT
// ==========================================
const MicroscopeMotorisedController = () => {
  const product = productsData["cryoscope-controller"];
  const [currentImg, setCurrentImg] = useState(0);
  const images = product ? [product.heroImage, ...(product.gallery || [])].filter(Boolean) : [];
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [200, 300], [0, 1]);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => setCurrentImg((prev) => (prev + 1) % images.length), 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  if (!product) return <div className="min-h-screen bg-slate-50"><Navbar /></div>;

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-800 font-sans selection:bg-emerald-100 selection:text-emerald-900 relative">
        <Navbar />

        {/* Sticky Header */}
        <div 
          className="sticky z-30 w-full bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm"
          style={{ top: '64px' }}
        >
          <div className="container py-3 flex items-center justify-between">
            <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              <Link to="/" className="hover:text-emerald-600 transition-colors">Home</Link>
              <span>/</span>
              <Link to="/products" className="hover:text-emerald-600 transition-colors">Catalog</Link>
              <span>/</span>
              <span className="hidden sm:inline-block cursor-default">{product.category}</span>
              <span className="hidden sm:inline-block">/</span>
              <span className="text-emerald-600 font-bold">{product.name}</span>
            </div>

            <motion.div style={{ opacity: headerOpacity }} className="flex items-center gap-4 pointer-events-none">
              <span className="hidden lg:block font-display font-bold text-slate-900">{product.name}</span>
              <button className="px-5 py-2 rounded-xl font-bold text-white bg-emerald-600 text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all pointer-events-auto">
                Request Quote
              </button>
            </motion.div>
          </div>
        </div>
        
        <main className="pt-8 lg:pt-12">
          {/* HERO SECTION */}
          <section className="container pb-8 overflow-hidden relative">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
                <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight leading-[1.1]">
                  {product.name}
                </h1>
                <p className="text-xl text-emerald-600 font-bold mb-6">{product.subtitle}</p>
                
                <div className="space-y-4 mb-8">
                  {product.overview?.map((p: string, i: number) => (
                    <p key={i} className="text-base text-slate-600 leading-relaxed font-medium">{p}</p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <button className="group px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-emerald-600 to-emerald-700 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2 hover:-translate-y-0.5">
                    Get a Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="px-6 py-3 rounded-xl font-bold text-slate-700 bg-white border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-300 flex items-center gap-2 shadow-sm hover:-translate-y-0.5">
                    <Download className="w-4 h-4 text-emerald-500" /> Full Specs
                  </button>
                </div>
              </motion.div>

              {/* Clean Hero Image */}
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative w-full aspect-[4/3] lg:aspect-square">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-50 to-slate-100 rounded-[2.5rem] transform rotate-3 scale-105 opacity-60 pointer-events-none" />
                <div className="relative w-full h-full rounded-3xl bg-white border border-slate-200 shadow-lg overflow-hidden group">
                  <AnimatePresence mode="wait">
                    {images.length > 0 && (
                      <motion.img key={currentImg} src={images[currentImg]} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.5 }} className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" />
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </section>

          {/* CAPABILITIES TRIPTYCH */}
          <section className="bg-slate-50 border-y border-slate-200 py-10 relative overflow-hidden">
             <div className="container relative z-10">
                <CapabilitiesTriptych features={product.coreFeatures} />
             </div>
          </section>

          {/* TELEMETRY SECTION */}
          <section className="py-12 lg:py-16 bg-white relative overflow-hidden">
            <div className="container relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, amount: 0.1 }} 
                transition={{ duration: 0.5 }} 
                className="text-center max-w-3xl mx-auto mb-10"
              >
                <span className="text-emerald-500 font-extrabold tracking-widest uppercase text-xs mb-2 block">Formal Performance Diagnostics</span>
                <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">Deterministic. Precise. Automated.</h2>
                <p className="text-base text-slate-600 font-medium">Analyze formal system feedback including precise focus intensity readouts and formalized grid relocation mapping data.</p>
              </motion.div>
              <div className="max-w-6xl mx-auto">
                <MicroscopeTelemetry />
              </div>
            </div>
          </section>

          {/* ENGINEERED STABILITY (Animated Horizontal Flow) */}
          <section className="py-12 lg:py-16 relative overflow-hidden bg-slate-50 border-y border-slate-200">
            <div className="container max-w-6xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, amount: 0.1 }} 
                transition={{ duration: 0.5 }} 
                className="text-center mb-12"
              >
                <span className="text-emerald-500 font-extrabold tracking-widest uppercase text-xs mb-2 block">Architecture & Mechanical Design</span>
                <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">Engineered Stability</h2>
                <p className="text-base text-slate-600 font-medium max-w-2xl mx-auto">{product.architecture?.description}</p>
              </motion.div>
              
              <EngineeredStability architecture={product.architecture} />
            </div>
          </section>

          {/* MOTION CONTROL & ACCURACY (Animated Horizontal Rows) */}
          <section className="py-12 lg:py-16 relative overflow-hidden bg-white">
            <div className="container max-w-6xl mx-auto relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, amount: 0.1 }} 
                transition={{ duration: 0.5 }} 
                className="text-center max-w-2xl mx-auto"
              >
                <span className="text-emerald-500 font-extrabold tracking-widest uppercase text-xs mb-2 block">Sub-Micron Precision</span>
                <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">Motion Control & Accuracy</h2>
                <p className="text-base text-slate-600 font-medium">{product.motionControl?.description}</p>
              </motion.div>

              <AnimatedMotionGrid motionControl={product.motionControl} />
            </div>
          </section>

          {/* INTEGRATION & APPLICATIONS (Animated Network & Marquee) */}
          <section className="py-12 lg:py-16 relative overflow-hidden bg-white border-t border-slate-200">
            <div className="container max-w-6xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, amount: 0.1 }} 
                transition={{ duration: 0.5 }} 
                className="text-center mb-8"
              >
                <span className="text-emerald-500 font-extrabold tracking-widest uppercase text-xs mb-2 block">Scalable Integration</span>
                <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">Optical & Instrument Integration</h2>
                <p className="text-base text-slate-600 font-medium max-w-3xl mx-auto">{product.integration?.description}</p>
              </motion.div>

              <ScalableIntegrationPattern integration={product.integration} applications={product.applications} />
            </div>
          </section>

          {/* MASSIVE TECHNICAL SPECS TABS */}
          <section className="py-12 lg:py-16 bg-slate-50 relative border-t border-slate-200">
            <div className="container mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, amount: 0.1 }} 
                transition={{ duration: 0.5 }} 
                className="text-center max-w-2xl mx-auto"
              >
                <span className="text-emerald-500 font-extrabold tracking-widest uppercase text-xs mb-2 block">Clinical Precision Parameters</span>
                <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 mb-2">Technical Specifications</h2>
                <p className="text-base text-slate-600 font-medium">Explore the comprehensive engineering parameters below.</p>
              </motion.div>
              
              <ComprehensiveSpecsTabs specs={product.detailedSpecs} />
            </div>
          </section>

          {/* SPEAK TO A SCIENTIST CTA */}
          <section className="container py-12 lg:py-16 border-t border-slate-200 bg-white">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, amount: 0.1 }} 
              transition={{ duration: 0.5 }} 
              className="bg-[#e2e8f0] rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row gap-10 items-center justify-between shadow-sm border border-slate-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/50 to-transparent pointer-events-none" />
              
              <div className="lg:w-1/2 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 border border-slate-300 text-slate-800 text-[10px] font-extrabold tracking-widest uppercase mb-4 shadow-sm"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Engineering Support</div>
                <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">Speak to a <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-700">Specialist</span></h2>
                <p className="text-base text-slate-700 font-medium mb-8">CRYONANO's systems engineers are available to answer your questions. Discuss your microscopy integration requirements today.</p>
                <div className="flex flex-wrap gap-3">
                  <button className="px-6 py-3 rounded-xl font-bold text-white bg-emerald-600 shadow-sm hover:shadow-md transition-all flex items-center gap-2">Get a Quote <ArrowRight className="w-4 h-4" /></button>
                </div>
              </div>

              <div className="lg:w-5/12 flex flex-col gap-4 w-full relative z-10">
                <div className="bg-white rounded-2xl p-6 flex items-center gap-5 shadow-sm border border-white hover:border-emerald-200 transition-colors">
                  <div className="w-12 h-12 rounded-xl border border-slate-100 bg-slate-50 flex items-center justify-center shrink-0"><Phone className="w-5 h-5 text-emerald-600" /></div>
                  <div><p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-1">Call Us Directly</p><p className="text-xl font-extrabold text-slate-900">+91 97481 81485</p></div>
                </div>
                <div className="bg-white rounded-2xl p-6 flex items-center gap-5 shadow-sm border border-white hover:border-emerald-200 transition-colors">
                  <div className="w-12 h-12 rounded-xl border border-slate-100 bg-slate-50 flex items-center justify-center shrink-0"><Mail className="w-5 h-5 text-emerald-600" /></div>
                  <div><p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-1">Email Engineering</p><p className="text-lg font-extrabold text-slate-900">contact@cryonano.com</p></div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* BOTTOM NAVIGATION */}
          <section className="border-t border-slate-200 bg-white py-6">
            <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-emerald-600 transition-colors px-4 py-2 rounded-lg hover:bg-emerald-50">
                <ArrowLeft className="w-4 h-4" /> Back to Homepage
              </Link>
              <Link to="/products" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-emerald-600 transition-colors px-4 py-2 rounded-lg hover:bg-emerald-50">
                Return to Product Catalog <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default MicroscopeMotorisedController;