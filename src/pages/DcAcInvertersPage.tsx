import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  ArrowLeft, ArrowRight, Download, Phone, Mail, 
  Zap, Activity, Cpu, ArrowUp, ShieldAlert,
  Train, Shield, Anchor, Radio, Wind, Settings, 
  Target, CheckCircle2, Lightbulb, Waves, Power,
  Crosshair, BarChart, ShieldCheck
} from "lucide-react";
import { Link } from "react-router-dom";
import { productsData } from "@/data/products";

// ==========================================
// SCROLL TO TOP 
// ==========================================
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 400);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 bg-indigo-500 text-white rounded-full shadow-[0_4px_14px_rgba(99,102,241,0.4)] hover:bg-indigo-600 hover:-translate-y-1 transition-all"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// ==========================================
// 1. PURE WAVEFORM TRANSFORMATION ENGINE
// Unique Pattern: Visualizes flat DC turning into perfect AC sine wave
// ==========================================
const PureWaveTransformation = ({ telemetry }: { telemetry: any }) => {
  return (
    <div className="w-full bg-white rounded-[3rem] border border-slate-200 shadow-xl relative overflow-hidden flex flex-col lg:flex-row items-center p-8 lg:p-12 gap-8">
       {/* Background Grid */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

       {/* Left: DC Input */}
       <div className="w-full lg:w-1/4 bg-slate-50 border border-slate-200 rounded-[2rem] p-6 shadow-sm flex flex-col items-center relative z-10">
          <div className="text-amber-500 font-mono text-2xl font-black mb-4">DC SOURCE</div>
          <div className="w-full h-16 relative flex items-center justify-center bg-white rounded-xl border border-slate-200 overflow-hidden mb-4">
             {/* Flat DC Line */}
             <div className="w-full h-1 bg-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.8)] relative">
                <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} className="absolute top-0 bottom-0 w-1/2 bg-white/60 blur-[2px]" />
             </div>
          </div>
          <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{telemetry.inputDC}</div>
       </div>

       {/* Center: Inversion Core */}
       <div className="w-full lg:w-1/4 flex justify-center relative z-10 py-6 lg:py-0">
          <motion.div animate={{ boxShadow: ["0 0 10px rgba(99,102,241,0.2)", "0 0 40px rgba(99,102,241,0.5)", "0 0 10px rgba(99,102,241,0.2)"] }} transition={{ duration: 3, repeat: Infinity }} className="w-32 h-32 bg-white border-4 border-indigo-200 rounded-full flex flex-col items-center justify-center shadow-xl relative overflow-hidden">
             <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0%,rgba(99,102,241,0.1)_50%,transparent_100%)]" />
             <Cpu className="w-10 h-10 text-indigo-500 mb-1 relative z-10" />
             <span className="text-[9px] font-black text-indigo-700 uppercase tracking-widest relative z-10">{telemetry.efficiency} EFF</span>
          </motion.div>
       </div>

       {/* Right: Pure AC Output */}
       <div className="w-full lg:w-2/4 bg-indigo-50 border border-indigo-100 rounded-[2rem] p-6 shadow-sm flex flex-col items-center relative z-10">
          <div className="flex w-full justify-between items-end mb-4 px-4">
             <div className="text-indigo-600 font-mono text-2xl font-black">PURE AC SINE</div>
             <div className="text-right">
                <div className="text-sm font-black text-indigo-800">{telemetry.outputAC}</div>
                <div className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest">THD {telemetry.distortionTHD}</div>
             </div>
          </div>
          
          <div className="w-full h-32 relative flex items-center justify-center bg-white rounded-xl border border-indigo-200 overflow-hidden shadow-inner">
             {/* Animated Sine Wave SVG */}
             <svg viewBox="0 0 400 100" className="absolute w-full h-full" preserveAspectRatio="none">
               <motion.path 
                 d="M 0 50 Q 25 10, 50 50 T 100 50 T 150 50 T 200 50 T 250 50 T 300 50 T 350 50 T 400 50" 
                 fill="none" stroke="#6366f1" strokeWidth="3"
                 style={{ filter: "drop-shadow(0px 0px 6px rgba(99,102,241,0.6))" }}
                 animate={{ x: [-100, 0] }} 
                 transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} 
               />
             </svg>
             <div className="absolute top-2 left-2 flex items-center gap-2 bg-indigo-50 px-2 py-1 rounded">
                <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                <span className="text-[9px] font-bold text-indigo-700 uppercase tracking-widest">Grid Quality Phase Sync</span>
             </div>
          </div>
       </div>
    </div>
  );
};

// // ==========================================
// // 2. GLASSMORPHIC FEATURES GRID (Contrast Fixed)
// // ==========================================
// const InverterFeaturesGrid = ({ features }: { features: any[] }) => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
//       {features.map((feat, i) => (
//         <motion.div 
//           key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
//           className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-300 transition-all duration-300 relative overflow-hidden flex flex-col items-center text-center group"
//         >
//            <div className="absolute inset-0 bg-indigo-50/30 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
           
//            <div className="relative z-10 w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 border border-slate-200 group-hover:bg-indigo-100 group-hover:border-indigo-300 transition-all duration-300 shadow-sm">
//              <Waves className="w-8 h-8 text-indigo-500 group-hover:text-indigo-700 transition-colors" />
//            </div>
           
//            <h4 className="text-xl font-black text-slate-900 mb-3 tracking-tight uppercase group-hover:text-indigo-900 transition-colors relative z-10">{feat.title}</h4>
//            <p className="text-sm text-slate-600 font-bold leading-relaxed flex-grow relative z-10">{feat.desc}</p>
           
//            <div className="w-full h-1 bg-slate-100 mt-6 rounded-full group-hover:bg-indigo-500 transition-colors relative z-10" />
//         </motion.div>
//       ))}
//     </div>
//   );
// };
// ==========================================
// 2. INTERACTIVE FEATURE SHOWCASE (Image 1 Fix)
// Unique Pattern: Split-screen active command console
// ==========================================
const FeatureShowcaseInteractive = ({ features }: { features: any[] }) => {
  const [activeIdx, setActiveIndex] = useState(0);

  // Enhancing with extra data directly in the component
  const enhancedFeatures = features.map((f, i) => ({
    ...f,
    metric: i === 0 ? "< 2% THD" : i === 1 ? "CISPR Compliant" : i === 2 ? "96% Peak" : "MIL-STD-810",
    metricLabel: i === 0 ? "Distortion Rate" : i === 1 ? "EMI Rating" : i === 2 ? "Efficiency" : "Durability",
    icon: i === 0 ? Activity : i === 1 ? ShieldCheck : i === 2 ? Cpu : Settings
  }));

  const activeFeat = enhancedFeatures[activeIdx];
  const ActiveIcon = activeFeat.icon;

  return (
    <div className="w-full bg-white rounded-[3rem] border border-slate-200 shadow-xl overflow-hidden mt-12 flex flex-col lg:flex-row min-h-[450px]">
      
      {/* Left: Interactive Selection List */}
      <div className="w-full lg:w-5/12 bg-slate-50 p-8 border-r border-slate-200 flex flex-col justify-center gap-4">
         <div className="mb-4">
           <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">Select Subsystem</span>
         </div>
         {enhancedFeatures.map((feat, i) => (
           <button 
             key={i} onClick={() => setActiveIndex(i)}
             className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${activeIdx === i ? 'bg-indigo-500 border-indigo-600 shadow-md transform scale-[1.02]' : 'bg-white border-slate-200 hover:border-indigo-300 hover:bg-indigo-50'}`}
           >
             <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${activeIdx === i ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500 group-hover:text-indigo-500'}`}>
                   <feat.icon className="w-5 h-5" />
                </div>
                <span className={`font-bold transition-colors ${activeIdx === i ? 'text-white' : 'text-slate-700 group-hover:text-indigo-700'}`}>{feat.title}</span>
             </div>
             {activeIdx === i && <motion.div layoutId="activeDot" className="w-2 h-2 rounded-full bg-white animate-pulse" />}
           </button>
         ))}
      </div>

      {/* Right: Dynamic Display Pane */}
      <div className="w-full lg:w-7/12 bg-white relative p-10 lg:p-16 flex flex-col justify-center overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.08)_0%,transparent_60%)] pointer-events-none" />
         
         <AnimatePresence mode="wait">
            <motion.div key={activeIdx} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.4 }} className="relative z-10">
               
               <div className="w-20 h-20 bg-indigo-50 border border-indigo-100 rounded-3xl flex items-center justify-center mb-8 relative">
                 <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-2 border-dashed border-indigo-200 rounded-3xl opacity-50" />
                 <ActiveIcon className="w-10 h-10 text-indigo-600 relative z-10" />
               </div>
               
               <h3 className="font-display text-4xl font-black text-slate-900 uppercase tracking-tight mb-4">{activeFeat.title}</h3>
               <p className="text-lg font-medium text-slate-600 leading-relaxed max-w-lg mb-10">{activeFeat.desc}</p>
               
               {/* Extra Data Injection */}
               <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 inline-flex items-center gap-6 shadow-sm">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100">
                    <BarChart className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{activeFeat.metricLabel}</span>
                    <span className="text-xl font-mono font-bold text-slate-900">{activeFeat.metric}</span>
                  </div>
               </div>

            </motion.div>
         </AnimatePresence>
      </div>
    </div>
  );
};

// ==========================================
// 3. USE CASE INSIGHT BLOCK
// Unique Pattern: Glowing highlight box
// ==========================================
const UseCaseInsight = ({ insight }: { insight: any }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
      className="w-full bg-gradient-to-br from-amber-50 to-white rounded-[2.5rem] border-2 border-amber-200 p-8 lg:p-12 shadow-lg relative overflow-hidden flex flex-col md:flex-row items-center gap-8 mt-16 max-w-5xl mx-auto"
    >
       <div className="absolute -right-20 -top-20 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-60 pointer-events-none" />
       
       <div className="w-24 h-24 shrink-0 bg-white rounded-full border-4 border-amber-100 shadow-inner flex items-center justify-center relative z-10">
          <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0 bg-amber-100 rounded-full blur-md" />
          <Lightbulb className="w-10 h-10 text-amber-500 relative z-10" />
       </div>
       
       <div className="relative z-10 text-center md:text-left">
          <h3 className="text-amber-700 font-black uppercase tracking-widest text-sm mb-2">Use Case Insight</h3>
          <p className="text-slate-800 font-medium text-lg lg:text-xl leading-relaxed">{insight.desc}</p>
       </div>
    </motion.div>
  );
};

// ==========================================
// 4. TECHNICAL OVERVIEW SCANNER
// ==========================================
const TechnicalOverviewScanner = ({ specs }: { specs: any }) => {
  if (!specs) return null;
  const entries = Object.entries(specs);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (entries.length === 0) return;
    const timer = setInterval(() => setActiveIndex((prev) => (prev + 1) % entries.length), 1500); 
    return () => clearInterval(timer);
  }, [entries.length]);

  return (
    <div className="w-full bg-white rounded-[2.5rem] border border-slate-200 shadow-xl overflow-hidden mt-10 max-w-5xl mx-auto relative group">
      <motion.div animate={{ top: ["-100%", "100%"] }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }} className="absolute w-full h-1/2 bg-gradient-to-b from-transparent via-indigo-50/50 to-transparent pointer-events-none opacity-60 z-0" />
      
      <div className="bg-slate-50 px-8 py-6 border-b border-slate-200 flex items-center justify-between relative z-10">
        <h3 className="font-display text-2xl font-extrabold text-slate-900 flex items-center gap-3">
          <Settings className="w-6 h-6 text-indigo-600" /> Technical Overview
        </h3>
        <div className="hidden sm:flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
          <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Auto-Scan</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-x-12 px-8 py-8 gap-y-3 relative z-10">
        {entries.map(([param, spec], i) => (
          <div key={i} className={`flex flex-col sm:flex-row sm:items-center justify-between py-4 px-5 rounded-xl border transition-all duration-500 relative overflow-hidden ${activeIndex === i ? 'bg-indigo-50 border-indigo-200 shadow-sm scale-[1.01]' : 'bg-white border-transparent hover:border-slate-100 hover:bg-slate-50'}`}>
            <div className={`absolute left-0 top-0 bottom-0 w-1.5 transition-colors duration-300 ${activeIndex === i ? 'bg-indigo-500' : 'bg-transparent'}`} />
            <span className={`text-xs font-extrabold uppercase tracking-widest sm:w-1/2 mb-1 sm:mb-0 transition-colors duration-300 ${activeIndex === i ? 'text-indigo-700' : 'text-slate-500'}`}>
              {param}
            </span>
            <span className={`text-sm font-bold sm:w-1/2 sm:text-right transition-colors duration-300 ${activeIndex === i ? 'text-slate-900' : 'text-slate-700'}`}>
              {String(spec)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// // ==========================================
// // 5. FIXED FOOTER RELAY 
// // ==========================================
// const FixedFooterRelay = ({ footers }: { footers: string[] }) => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     if (!footers || footers.length === 0) return;
//     const timer = setInterval(() => setActiveIndex((prev) => (prev + 1) % footers.length), 2500); 
//     return () => clearInterval(timer);
//   }, [footers]);

//   if (!footers) return null;

//   return (
//     <section className="bg-slate-50 py-16 overflow-hidden relative border-t border-slate-200 shadow-inner">
//        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px] opacity-50 pointer-events-none" />
//        <div className="container max-w-6xl mx-auto relative z-10">
//          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 rounded-full hidden md:block z-0 overflow-hidden">
//             <motion.div animate={{ x: ["-100%", "300%"] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="w-1/3 h-full bg-gradient-to-r from-transparent via-indigo-400 to-transparent" />
//          </div>
//          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
//            {footers.slice(0, 3).map((footer, i) => {
//              const isActive = activeIndex === i;
//              return (
//                <motion.div
//                  key={i} animate={{ y: isActive ? -8 : 0 }}
//                  className={`flex flex-col items-center text-center p-8 rounded-3xl border transition-all duration-500 bg-white ${isActive ? 'border-indigo-300 shadow-[0_15px_40px_rgba(99,102,241,0.15)]' : 'border-slate-200 shadow-sm'}`}
//                >
//                  <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border transition-all duration-500 ${isActive ? 'bg-indigo-50 border-indigo-200 scale-110' : 'bg-slate-50 border-slate-100'}`}>
//                     <Power className={`w-8 h-8 transition-colors duration-500 ${isActive ? 'text-indigo-500' : 'text-slate-400'}`} />
//                     {isActive && <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-2xl border-2 border-dashed border-indigo-400 opacity-60" />}
//                  </div>
//                  <span className={`text-sm md:text-base font-black tracking-widest uppercase transition-colors duration-500 ${isActive ? 'text-slate-900' : 'text-slate-500'}`}>
//                    {footer}
//                  </span>
//                  <div className={`mt-6 w-16 h-1.5 rounded-full transition-all duration-500 ${isActive ? 'bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)] w-24' : 'bg-slate-200'}`} />
//                </motion.div>
//              )
//            })}
//          </div>
//        </div>
//     </section>
//   );
// };
// ==========================================
// 6. INTERLOCKING VALUE CORES (Image 3 Fix)
// Unique Pattern: Floating overlapping glassmorphic pillars
// ==========================================
const InterlockingValueCores = ({ footers }: { footers: string[] }) => {
  if (!footers) return null;

  return (
    <section className="bg-slate-50 py-24 overflow-hidden relative border-t border-slate-200 shadow-inner">
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px] opacity-50 pointer-events-none" />
       
       <div className="container max-w-5xl mx-auto relative z-10">
         <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 relative">
           
           {footers.slice(0, 3).map((footer, i) => {
             // Create an overlapping visual effect
             const isCenter = i === 1;
             const zIndex = isCenter ? 'z-20' : 'z-10';
             const transform = !isCenter ? (i === 0 ? 'md:translate-x-8' : 'md:-translate-x-8') : 'md:-translate-y-6';
             const bgColor = isCenter ? 'bg-indigo-500 border-indigo-400 text-white shadow-2xl' : 'bg-white border-slate-200 text-slate-800 shadow-lg';
             const iconColor = isCenter ? 'text-indigo-100' : 'text-indigo-500';

             return (
               <motion.div
                 key={i} 
                 animate={{ y: [0, -10, 0] }} 
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                 className={`w-full md:w-1/3 flex flex-col items-center text-center p-10 rounded-[2.5rem] border backdrop-blur-md relative ${zIndex} ${transform} ${bgColor}`}
               >
                 <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border ${isCenter ? 'bg-white/20 border-white/30' : 'bg-indigo-50 border-indigo-100'}`}>
                    <Power className={`w-8 h-8 ${iconColor}`} />
                 </div>
                 <span className="text-lg font-black tracking-widest uppercase leading-snug">
                   {footer}
                 </span>
                 
                 {/* Internal Autonomous Pulse */}
                 {isCenter && (
                    <motion.div animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="absolute -top-4 -right-4 w-12 h-12 bg-sky-400 rounded-full blur-2xl pointer-events-none" />
                 )}
               </motion.div>
             )
           })}
           
         </div>
       </div>
    </section>
  );
};




// ==========================================
// 6. SECTOR DEPLOYMENT DASHBOARD (Image 2 Fix)
// Unique Pattern: Active Targeting Radar
// ==========================================
const SectorDeploymentDashboard = ({ applications }: { applications: any[] }) => {
  const [hoveredApp, setHoveredApp] = useState(0);

  // Injecting rich extra data
  const augmentedApps = applications.map((app, i) => ({
    ...app,
    priority: i === 0 ? "Vibration Immunity" : i === 1 ? "EMP Shielding" : i === 2 ? "Corrosion Resistance" : "Uptime Guarantee",
    icon: i === 0 ? Train : i === 1 ? Shield : i === 2 ? Anchor : Radio
  }));

  const activeData = augmentedApps[hoveredApp];
  const ActiveIcon = activeData.icon;

  return (
    <div className="w-full mt-12 bg-white border border-slate-200 rounded-[3rem] p-4 lg:p-6 shadow-xl flex flex-col lg:flex-row gap-6 relative overflow-hidden">
       {/* Left: Sector Radar List */}
       <div className="w-full lg:w-1/3 flex flex-col gap-3">
          {augmentedApps.map((app, i) => (
             <div 
               key={i} onMouseEnter={() => setHoveredApp(i)}
               className={`cursor-pointer p-5 rounded-2xl transition-all duration-300 border flex items-center gap-4 ${hoveredApp === i ? 'bg-sky-50 border-sky-300 shadow-md' : 'bg-slate-50 border-slate-100 hover:border-sky-200'}`}
             >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${hoveredApp === i ? 'bg-sky-500 text-white' : 'bg-white border border-slate-200 text-slate-400'}`}>
                  <app.icon className="w-5 h-5" />
                </div>
                <span className={`font-extrabold text-sm uppercase tracking-wide transition-colors ${hoveredApp === i ? 'text-sky-900' : 'text-slate-600'}`}>{app.name}</span>
             </div>
          ))}
       </div>

       {/* Right: Targeting Screen */}
       <div className="w-full lg:w-2/3 bg-slate-900 rounded-[2rem] p-8 lg:p-12 relative overflow-hidden flex flex-col justify-center min-h-[350px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15)_0%,transparent_70%)] pointer-events-none" />
          
          {/* Animated targeting reticle */}
          <motion.div animate={{ rotate: 90 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute -right-20 -top-20 w-96 h-96 border border-sky-500/20 rounded-full flex items-center justify-center pointer-events-none">
             <div className="w-full h-[1px] bg-sky-500/20 absolute" />
             <div className="h-full w-[1px] bg-sky-500/20 absolute" />
          </motion.div>

          <AnimatePresence mode="wait">
             <motion.div key={hoveredApp} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Crosshair className="w-5 h-5 text-sky-400" />
                  <span className="text-sky-400 font-mono text-[10px] font-bold uppercase tracking-widest">Sector Lock Active</span>
                </div>
                <h3 className="font-display text-4xl font-black text-white uppercase tracking-tight mb-4">{activeData.name}</h3>
                <p className="text-lg font-medium text-slate-300 leading-relaxed max-w-lg mb-8">{activeData.desc}</p>
                
                <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur border border-white/20 px-5 py-3 rounded-xl">
                   <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                   <span className="text-sm font-bold text-white uppercase tracking-widest">Design Priority: <span className="text-sky-300">{activeData.priority}</span></span>
                </div>
             </motion.div>
          </AnimatePresence>
       </div>
    </div>
  );
};

// ==========================================
// MAIN PAGE COMPONENT
// ==========================================
const DcAcInvertersPage = () => {
  const product = productsData["dc-ac-inverters"];
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [200, 300], [0, 1]);

  // Hero Image Carousel Logic
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const heroImages = [
    product?.heroImage,
    "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop", // placeholder
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop"  // placeholder
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrentHeroImage((prev) => (prev + 1) % heroImages.length), 3500); 
    return () => clearInterval(timer);
  }, [heroImages.length]);

  if (!product) return <div className="min-h-screen bg-slate-50"><Navbar /></div>;

  return (
    <PageTransition>
      <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-indigo-200 selection:text-indigo-900 relative">
        <Navbar />

        {/* STICKY HEADER */}
        <div className="sticky z-30 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm" style={{ top: '64px' }}>
          <div className="container py-3 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
              <Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link> <span>/</span>
              <Link to="/products" className="hover:text-indigo-600 transition-colors">Solutions</Link> <span>/</span>
              <span className="hidden sm:inline-block cursor-default">{product.category || 'Inverters'}</span> <span className="hidden sm:inline-block">/</span>
              <span className="text-indigo-600 font-bold">DC-AC Sine Wave Inverters</span>
            </div>
            <motion.div style={{ opacity: headerOpacity }} className="flex items-center gap-4 pointer-events-none">
              <span className="hidden lg:block font-display font-bold text-slate-900 uppercase">DC-AC Inverters</span>
              <button className="px-5 py-2.5 rounded-xl font-bold text-white bg-indigo-500 text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all pointer-events-auto">
                Request Quote
              </button>
            </motion.div>
          </div>
        </div>
        
        <main className="pt-2 lg:pt-4 relative">
          
          {/* 1. HERO SECTION */}
          <section className="container pb-16 overflow-hidden relative border-b border-slate-100">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#eef2ff_0%,transparent_60%)] pointer-events-none" />
            
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10 mt-6">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-[10px] font-black uppercase tracking-widest mb-6 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" /> Grid-Quality Power
                </div>
                <h1 className="font-display text-5xl lg:text-7xl font-black text-slate-900 mb-4 tracking-tight uppercase leading-[1.05]">
                  DC-AC Pure Sine Wave
                </h1>
                <p className="text-2xl lg:text-3xl text-indigo-600 font-black mb-6 uppercase tracking-wide">
                  Inverter Systems
                </p>
                <p className="text-lg font-bold text-slate-600 border-l-4 border-sky-400 pl-4 mb-6">
                  {product.subtitle}
                </p>
                <p className="text-base text-slate-500 font-medium mb-8 leading-relaxed max-w-lg">
                  {product.overview[0]} {product.overview[1]}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-4 rounded-xl font-black text-white bg-indigo-500 shadow-[0_10px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_15px_30px_rgba(99,102,241,0.5)] transition-all duration-300 flex items-center gap-2 hover:-translate-y-1 uppercase tracking-wide">
                    Configure System <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="px-8 py-4 rounded-xl font-bold text-slate-700 bg-white border-2 border-slate-200 hover:border-indigo-400 hover:bg-indigo-50 transition-all duration-300 flex items-center gap-2 shadow-sm hover:-translate-y-1">
                    <Download className="w-5 h-5 text-indigo-500" /> Specs
                  </button>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative w-full aspect-square md:aspect-[4/3] flex items-center justify-center">
                 <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute w-[80%] h-[80%] border-2 border-dashed border-indigo-200 rounded-full" />
                 <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute w-[60%] h-[60%] border border-sky-200 rounded-full" />
                 
                 <div className="relative z-10 w-full h-full flex items-center justify-center overflow-hidden rounded-[3rem] bg-white/50 backdrop-blur-sm border border-slate-100 shadow-2xl p-8">
                    <AnimatePresence mode="wait">
                       <motion.img 
                          key={currentHeroImage} src={heroImages[currentHeroImage]} 
                          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.1 }} transition={{ duration: 0.5 }}
                          alt="DC-AC Inverter" className="w-[80%] object-contain drop-shadow-2xl mix-blend-multiply" 
                       />
                    </AnimatePresence>
                    <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
                      {heroImages.map((_, i) => (
                        <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${currentHeroImage === i ? "w-6 bg-indigo-500" : "w-1.5 bg-slate-300"}`} />
                      ))}
                    </div>
                 </div>
              </motion.div>
            </div>
          </section>

          {/* 2. TELEMETRY: WAVEFORM TRANSFORMATION */}
          <section className="py-20 relative overflow-hidden bg-slate-50 border-y border-slate-200">
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7 }} className="container relative z-10">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-indigo-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">High-Fidelity Power Processing</span>
                <h2 className="font-display text-4xl font-black text-slate-900 uppercase tracking-tight">Pure Waveform Transformation</h2>
              </div>
              <PureWaveTransformation telemetry={product.waveTelemetry} />
            </motion.div>
          </section>

          {/* 3. KEY FEATURES GRID */}
          <section className="py-20 relative overflow-hidden bg-white">
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7 }} className="container max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <span className="text-sky-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">Design Highlights</span>
                <h2 className="font-display text-4xl font-black text-slate-900 uppercase tracking-tight">Core System Capabilities</h2>
              </div>
              <FeatureShowcaseInteractive features={product.keyFeatures} />
              
              {/* USE CASE INSIGHT BLOCK */}
              <UseCaseInsight insight={product.useCaseInsight} />
            </motion.div>
          </section>

          {/* 4. TECHNICAL OVERVIEW SCANNER */}
          <section className="py-20 bg-slate-50 relative overflow-hidden border-y border-slate-200 shadow-inner">
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7 }} className="container max-w-6xl mx-auto relative z-10">
               <div className="text-center mb-4 relative">
                 <span className="text-indigo-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">System Matrix</span>
                 <h2 className="font-display text-4xl font-black text-slate-900 uppercase tracking-tight">Technical Data Readout</h2>
               </div>
               <TechnicalOverviewScanner specs={product.technicalSpecs} />
            </motion.div>
          </section>

          {/* 5. DEPLOYMENT APPLICATIONS GRID */}
          {/* <section className="py-20 bg-white border-b border-slate-200 relative overflow-hidden">
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7 }} className="container max-w-6xl mx-auto relative z-10">
              <div className="text-center mb-12">
                <span className="text-sky-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">Mission-Critical Environments</span>
                <h2 className="font-display text-4xl font-black text-slate-900 uppercase tracking-tight">Industrial & Defense Applications</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {product.applications.map((app: any, i: number) => {
                  // Map specific icons to the applications
                  let Icon = Zap;
                  if (app.name.includes("Railway")) Icon = Train;
                  if (app.name.includes("Defense")) Icon = Shield;
                  if (app.name.includes("Marine")) Icon = Anchor;
                  if (app.name.includes("Control")) Icon = Radio;
                  if (app.name.includes("HVAC")) Icon = Wind;

                  return (
                    <motion.div 
                      key={app.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="group bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:border-indigo-400 hover:shadow-xl hover:-translate-y-2 transition-all cursor-default flex items-center gap-6"
                    >
                      <div className="w-16 h-16 rounded-xl bg-slate-100 flex items-center justify-center border border-slate-200 group-hover:bg-indigo-500 transition-colors shrink-0">
                         <Icon className="w-8 h-8 text-slate-400 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="text-xl font-extrabold text-slate-900 mb-1 group-hover:text-indigo-700">{app.name}</h4>
                        <p className="text-sm text-slate-600 font-medium leading-relaxed">{app.desc}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </section> */}



          {/* 5. DEPLOYMENT APPLICATIONS GRID (Replaced with Dashboard) */}
          <section className="py-20 bg-white border-b border-slate-200 relative overflow-hidden">
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7 }} className="container max-w-6xl mx-auto relative z-10">
              <div className="text-center mb-4">
                <span className="text-sky-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">Mission-Critical Environments</span>
                <h2 className="font-display text-4xl font-black text-slate-900 uppercase tracking-tight">Industrial & Defense Applications</h2>
              </div>
              <SectorDeploymentDashboard applications={product.applications} />
            </motion.div>
          </section>

             {/* 7. FIXED AUTONOMOUS FOOTER TELEMETRY */}
          <InterlockingValueCores footers={product.footers} />

          {/* 6. SPEAK TO A POWER SCIENTIST */}
          <section className="container py-24">
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7 }} className="bg-gradient-to-br from-white via-indigo-50 to-sky-50 rounded-[3rem] p-10 lg:p-20 flex flex-col lg:flex-row gap-12 items-center justify-between shadow-2xl border border-indigo-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-200/40 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-80 h-80 bg-sky-200/40 rounded-full blur-[80px] pointer-events-none" />
              
              <div className="lg:w-1/2 relative z-10 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-indigo-200 text-indigo-700 text-xs font-black tracking-widest uppercase mb-8 shadow-sm">
                   <Activity className="w-4 h-4 text-indigo-500" /> Technical Consultation
                </div>
                <h2 className="font-display text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-[1.1] uppercase tracking-tight">Speak to a <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-sky-500">Power Scientist</span></h2>
                <p className="text-xl text-slate-600 font-medium mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">Our engineering team is ready to discuss EMI profiling, custom DC input ranges, and exact AC wave tolerances for your sensitive equipment.</p>
                <div className="flex justify-center lg:justify-start gap-4">
                  <button className="px-10 py-5 rounded-2xl font-black text-white bg-slate-900 shadow-xl hover:bg-slate-800 hover:-translate-y-1 transition-all uppercase tracking-wider flex items-center gap-2">
                    Contact Engineering <ArrowRight className="w-5 h-5 text-indigo-400" />
                  </button>
                </div>
              </div>

              <div className="lg:w-5/12 flex flex-col gap-6 w-full relative z-10">
                <div className="bg-white/80 backdrop-blur-md rounded-[2rem] p-8 flex items-center gap-6 shadow-lg border border-white hover:border-indigo-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="relative">
                    <motion.div animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0 bg-indigo-400 rounded-2xl" />
                    <div className="w-16 h-16 rounded-2xl border border-indigo-100 bg-indigo-50 flex items-center justify-center relative z-10 group-hover:bg-indigo-500 transition-colors"><Phone className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors" /></div>
                  </div>
                  <div><p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1.5">Direct Line</p><p className="text-2xl font-black text-slate-900">+91 97481 81485</p></div>
                </div>
                
                <div className="bg-white/80 backdrop-blur-md rounded-[2rem] p-8 flex items-center gap-6 shadow-lg border border-white hover:border-sky-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="relative">
                    <motion.div animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} className="absolute inset-0 bg-sky-400 rounded-2xl" />
                    <div className="w-16 h-16 rounded-2xl border border-sky-100 bg-sky-50 flex items-center justify-center relative z-10 group-hover:bg-sky-500 transition-colors"><Mail className="w-8 h-8 text-sky-600 group-hover:text-white transition-colors" /></div>
                  </div>
                  <div><p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1.5">Email Lab Support</p><p className="text-xl font-black text-slate-900">contact@cryonano.com</p></div>
                </div>
              </div>
            </motion.div>
          </section>

        </main>
        
        <ScrollToTop />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default DcAcInvertersPage;