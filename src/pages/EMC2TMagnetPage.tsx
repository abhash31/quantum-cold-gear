import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { motion, AnimatePresence, useScroll, useTransform, animate } from "framer-motion";
import { 
  ArrowLeft, ArrowRight, Download, Phone, Mail, 
  Magnet, Activity, Maximize2, Settings, ArrowUp, 
  Layers, Droplets, Zap, ShieldCheck, Share2, CheckCircle2
} from "lucide-react";
import { Link } from "react-router-dom";
import { productsData } from "@/data/products";

// ==========================================
// SCROLL TO TOP BUTTON 
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
          className="fixed bottom-8 right-8 z-50 p-4 bg-rose-600 text-white rounded-full shadow-[0_4px_14px_rgba(225,29,72,0.4)] hover:bg-rose-700 hover:shadow-[0_6px_20px_rgba(225,29,72,0.6)] transition-all hover:-translate-y-1"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// ==========================================
// 1. MEANINGFUL TELEMETRY (Image 2 Upgrade)
// Gap vs Field Physics Chart
// ==========================================
const MeaningfulTelemetry = () => {
  const [gap, setGap] = useState(50);
  const [field, setField] = useState(0.5);
  const [current, setCurrent] = useState(40);

  useEffect(() => {
    const cycle = async () => {
      while (true) {
        // Closing Gap -> Increasing Field
        animate(50, 10, { duration: 4, ease: "easeInOut", onUpdate: (v) => setGap(Number(v.toFixed(1))) });
        animate(40, 140, { duration: 4, ease: "easeInOut", onUpdate: (v) => setCurrent(Math.round(v)) });
        await animate(0.5, 2.0, { duration: 4, ease: "easeInOut", onUpdate: (v) => setField(Number(v.toFixed(2))) });
        
        await new Promise(r => setTimeout(r, 2000));
        
        // Opening Gap -> Decreasing Field
        animate(10, 50, { duration: 4, ease: "easeInOut", onUpdate: (v) => setGap(Number(v.toFixed(1))) });
        animate(140, 40, { duration: 4, ease: "easeInOut", onUpdate: (v) => setCurrent(Math.round(v)) });
        await animate(2.0, 0.5, { duration: 4, ease: "easeInOut", onUpdate: (v) => setField(Number(v.toFixed(2))) });
        
        await new Promise(r => setTimeout(r, 2000));
      }
    };
    cycle();
  }, []);

  // Calculate percentage for visual mapping
  const fieldPct = ((field - 0.5) / 1.5) * 100;

  return (
    <div className="w-full bg-white rounded-[2.5rem] border border-slate-200 shadow-xl overflow-hidden flex flex-col relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#f1f5f9_2px,transparent_2px)] bg-[size:24px_24px] pointer-events-none" />
      
      <div className="bg-slate-50 border-b border-slate-200 px-8 py-5 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-rose-500 animate-pulse shadow-[0_0_12px_rgba(244,63,94,0.6)]" />
          <span className="text-slate-600 text-xs font-extrabold tracking-widest uppercase font-mono">Autonomous Performance Monitor</span>
        </div>
        <div className="flex gap-4">
          <span className="text-[10px] font-bold font-mono text-cyan-700 bg-cyan-100 border border-cyan-200 px-2 py-1 rounded shadow-sm">WATER COOLED: OPTIMAL</span>
        </div>
      </div>

      <div className="p-8 grid lg:grid-cols-2 gap-8 relative z-10">
        {/* Real-time Values Dashboard */}
        <div className="flex flex-col gap-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-[10px] font-extrabold uppercase tracking-widest mb-1">Variable Pole Gap</p>
              <p className="text-4xl font-extrabold text-slate-900 tracking-tight font-mono">{gap.toFixed(1)} <span className="text-sm text-slate-500 font-bold">mm</span></p>
            </div>
            <Maximize2 className="w-8 h-8 text-rose-400 opacity-50" />
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-[10px] font-extrabold uppercase tracking-widest mb-1">Magnetic Field Output</p>
              <p className="text-4xl font-extrabold text-rose-600 tracking-tight font-mono">{field.toFixed(2)} <span className="text-sm text-rose-400 font-bold">Tesla</span></p>
            </div>
            <Magnet className="w-8 h-8 text-rose-400 opacity-50" />
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-[10px] font-extrabold uppercase tracking-widest mb-1">Continuous Current</p>
              <p className="text-4xl font-extrabold text-amber-500 tracking-tight font-mono">{current} <span className="text-sm text-amber-400 font-bold">Amps</span></p>
            </div>
            <Zap className="w-8 h-8 text-amber-400 opacity-50" />
          </div>
        </div>

        {/* Live Inverse Relationship Chart */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-inner flex flex-col relative overflow-hidden">
          <p className="text-slate-600 text-xs font-extrabold uppercase tracking-widest mb-4">Gap vs. Field Correlation</p>
          <div className="flex-grow relative w-full h-full border-l-2 border-b-2 border-slate-300">
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
               {/* Static background curve indicating the physical limits */}
               <path d="M 10 90 Q 50 80, 90 10" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
               {/* Dynamic moving point representing current state */}
               <motion.circle 
                 cx={10 + (gap - 10) * 2} // maps 10-50mm to X axis
                 cy={90 - fieldPct * 0.8} // maps 0.5-2.0T to Y axis
                 r="4" fill="#f43f5e" 
               />
               {/* Tracing line */}
               <motion.line 
                 x1="10" y1="90" 
                 x2={10 + (gap - 10) * 2} y2={90 - fieldPct * 0.8} 
                 stroke="#f43f5e" strokeWidth="2" 
               />
            </svg>
            <div className="absolute bottom-2 left-2 text-[10px] font-bold text-slate-400">0.5 T / 50 mm</div>
            <div className="absolute top-2 right-2 text-[10px] font-bold text-rose-500">2.0 T / 10 mm</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 2. AUTONOMOUS ROTATING CAROUSEL (Image 3 Upgrade)
// Experimental Integration
// ==========================================
const AutonomousIntegrationCarousel = ({ features }: { features: any[] }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const icons = [Layers, Maximize2, Activity, Settings];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [features.length]);

  if (!features) return null;

  return (
    <div className="w-full bg-white rounded-[2.5rem] border border-slate-200 shadow-lg p-8 lg:p-12 relative overflow-hidden mt-8">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-transparent pointer-events-none" />
      
      <div className="grid lg:grid-cols-2 gap-12 relative z-10 items-center">
        {/* Display Panel */}
        <div className="h-64 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 1.05, y: -20 }} transition={{ duration: 0.4 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-3xl bg-emerald-100 border border-emerald-200 flex items-center justify-center mb-6 text-emerald-600 shadow-sm">
                {(() => { const Icon = icons[activeIdx % icons.length]; return <Icon className="w-10 h-10" />; })()}
              </div>
              <h3 className="text-3xl font-display font-extrabold text-slate-900 mb-4">{features[activeIdx].title}</h3>
              <p className="text-lg text-slate-600 font-medium max-w-md">{features[activeIdx].desc}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Rotating Progress List */}
        <div className="flex flex-col gap-4">
          {features.map((feat, i) => (
            <div key={i} onClick={() => setActiveIdx(i)} className={`relative p-4 rounded-xl cursor-pointer transition-all border ${activeIdx === i ? 'bg-slate-50 border-slate-200 shadow-sm' : 'bg-transparent border-transparent hover:bg-slate-50/50'}`}>
              <h4 className={`text-base font-bold transition-colors ${activeIdx === i ? 'text-emerald-700' : 'text-slate-500'}`}>{feat.title}</h4>
              
              {/* Progress Bar Line */}
              <div className="w-full h-1 bg-slate-100 rounded-full mt-3 overflow-hidden">
                {activeIdx === i && (
                  <motion.div 
                    initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 4, ease: "linear" }}
                    className="h-full bg-emerald-500 rounded-full"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 3. SEQUENTIAL SCANNING MATRIX (Image 4 Upgrade)
// Technical Specifications
// ==========================================
const ScanningSpecsMatrix = ({ specs }: { specs: any }) => {
  const [activeRow, setActiveRow] = useState(0);
  const entries = Object.entries(specs);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveRow((prev) => (prev + 1) % entries.length);
    }, 2000); // Scans down every 2 seconds
    return () => clearInterval(timer);
  }, [entries.length]);

  return (
    <div className="w-full bg-white rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden mt-8 max-w-5xl mx-auto">
      <div className="bg-slate-50 px-8 py-5 border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Settings className="w-6 h-6 text-rose-500" />
          <h3 className="font-display text-2xl font-extrabold text-slate-900">Technical Specifications</h3>
        </div>
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-rose-400 animate-bounce" />
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Auto-Scanning</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-x-12 px-8 py-6">
        {entries.map(([param, spec], i) => (
          <div 
            key={i} 
            className={`flex flex-col sm:flex-row sm:items-center justify-between py-4 border-b border-slate-100 last:border-0 px-4 rounded-xl transition-all duration-500 relative overflow-hidden ${activeRow === i ? 'bg-rose-50 shadow-sm scale-[1.02]' : 'bg-transparent hover:bg-slate-50'}`}
          >
            {/* Soft highlight bar on the left */}
            <div className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-500 ${activeRow === i ? 'bg-rose-500' : 'bg-transparent'}`} />
            
            <span className={`text-xs font-extrabold uppercase tracking-widest sm:w-1/2 mb-1 sm:mb-0 transition-colors ${activeRow === i ? 'text-rose-600' : 'text-slate-500'}`}>
              {param}
            </span>
            <span className="text-sm font-bold text-slate-900 sm:w-1/2 sm:text-right">
              {String(spec)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// // ==========================================
// // 4. RADIAL CONSTELLATION (Image 5 Upgrade)
// // Light-Theme Connected Nodes for Applications
// // ==========================================
// const RadialConstellationNetwork = ({ applications }: { applications: string[] }) => {
//   if (!applications) return null;

//   return (
//     <div className="w-full relative h-[500px] flex items-center justify-center bg-white rounded-[3rem] border border-slate-200 shadow-sm overflow-hidden mt-10">
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#f8fafc_1px,transparent_1px)] bg-[size:30px_30px]" />
      
//       {/* SVG Connecting Lines */}
//       <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="xMidYMid slice">
//         <defs>
//           <radialGradient id="lineGrad" cx="50%" cy="50%" r="50%">
//             <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.6"/>
//             <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0.2"/>
//           </radialGradient>
//         </defs>
//         {applications.map((_, i) => {
//           const angle = (i / applications.length) * Math.PI * 2 - Math.PI / 2;
//           const radius = 160; 
//           const x2 = `calc(50% + ${Math.cos(angle) * radius}px)`;
//           const y2 = `calc(50% + ${Math.sin(angle) * radius}px)`;
          
//           return (
//             <motion.line 
//               key={i} x1="50%" y1="50%" x2={x2} y2={y2} 
//               stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="6 6"
//               initial={{ strokeDashoffset: 100 }} animate={{ strokeDashoffset: 0 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//             />
//           );
//         })}
//       </svg>

//       {/* Central Node */}
//       <motion.div animate={{ boxShadow: ["0 0 20px rgba(244,63,94,0.2)", "0 0 50px rgba(244,63,94,0.5)", "0 0 20px rgba(244,63,94,0.2)"] }} transition={{ duration: 3, repeat: Infinity }} className="absolute w-24 h-24 bg-rose-50 border-2 border-rose-200 rounded-full flex flex-col items-center justify-center z-20 text-rose-600 shadow-xl">
//         <Magnet className="w-8 h-8 mb-1" />
//         <span className="text-[10px] font-bold font-mono">EMC2T</span>
//       </motion.div>

//       {/* Orbiting Application Nodes */}
//       {applications.map((app, i) => {
//         const angle = (i / applications.length) * Math.PI * 2 - Math.PI / 2;
//         const radius = 180;
        
//         return (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15, type: "spring" }}
//             className="absolute z-20 bg-white border border-slate-200 px-5 py-3 rounded-full shadow-lg hover:border-rose-400 hover:shadow-rose-100 transition-all cursor-default flex items-center gap-2"
//             style={{
//               transform: `translate(${Math.cos(angle) * radius}px, ${Math.sin(angle) * radius}px)`
//             }}
//           >
//             <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
//             <span className="text-sm font-bold text-slate-800 whitespace-nowrap">{app}</span>
//           </motion.div>
//         );
//       })}
//     </div>
//   );
// };

// ==========================================
// 4. DATA FLOW CIRCUIT NETWORK (Replaced Radial Constellation)
// Autonomous, non-overlapping connected nodes
// ==========================================
const RadialConstellationNetwork = ({ applications }: { applications: string[] }) => {
  if (!applications) return null;

  return (
    <div className="w-full relative bg-white rounded-[3rem] border border-slate-200 shadow-xl overflow-hidden mt-10 p-8 lg:p-12 flex flex-col md:flex-row items-center gap-8 lg:gap-16">
      {/* Subtle dotted background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#f8fafc_2px,transparent_2px)] bg-[size:30px_30px] pointer-events-none" />

      {/* Left: Central Magnet Hub */}
      <div className="relative z-10 w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-full border-4 border-rose-100 bg-rose-50 flex items-center justify-center shadow-[0_0_40px_rgba(244,63,94,0.2)]">
        <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0 rounded-full bg-rose-200/50 blur-xl pointer-events-none" />
        <div className="text-center">
          <Magnet className="w-10 h-10 md:w-14 md:h-14 text-rose-500 mx-auto mb-1" />
          <span className="text-[10px] md:text-xs font-extrabold font-mono text-rose-700">EMC2T-2</span>
        </div>
      </div>

      {/* Middle: Flowing SVG Data Lines (Hidden on mobile for clean stacking) */}
      <div className="hidden md:block absolute left-[140px] lg:left-[170px] right-1/2 lg:right-[60%] top-16 bottom-16 z-0">
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" preserveAspectRatio="none">
          {applications.map((_, i) => {
            // Calculate perfectly spaced vertical connection points
            const yPos = (i / (Math.max(1, applications.length - 1))) * 100;
            return (
              <g key={i}>
                {/* Background Track */}
                <path d={`M 0 50 C 40 50, 60 ${yPos}, 100 ${yPos}`} vectorEffect="non-scaling-stroke" fill="none" stroke="#f1f5f9" strokeWidth="4" />
                {/* Autonomous Animated Data Flow */}
                <motion.path
                  d={`M 0 50 C 40 50, 60 ${yPos}, 100 ${yPos}`}
                  vectorEffect="non-scaling-stroke"
                  fill="none" stroke="#f43f5e" strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="20 100"
                  animate={{ strokeDashoffset: [120, -20] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: i * 0.3 }}
                />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Right: Application Cards Grid (Flexbox ensures zero overlap) */}
      <div className="w-full relative z-10 flex flex-col justify-between gap-4 md:gap-0" style={{ minHeight: '400px' }}>
        {applications.map((app, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, type: "spring", stiffness: 100 }}
            className="bg-white/90 backdrop-blur-sm border border-slate-200 p-4 lg:p-5 rounded-2xl shadow-sm hover:shadow-lg hover:border-rose-300 transition-all flex items-center gap-4 group cursor-default relative overflow-hidden"
          >
            {/* Hover highlight bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-rose-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            
            <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center shrink-0 border border-rose-100 group-hover:bg-rose-500 transition-colors duration-300">
              <CheckCircle2 className="w-5 h-5 text-rose-500 group-hover:text-white transition-colors duration-300" />
            </div>
            <span className="font-extrabold text-slate-800 text-sm lg:text-base group-hover:text-rose-700 transition-colors">{app}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};


// ==========================================
// MAIN PAGE COMPONENT
// ==========================================
const EMC2TMagnetPage = () => {
  const product = productsData["emc2t-2-magnet"];
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [200, 300], [0, 1]);

  if (!product) return <div className="min-h-screen bg-slate-50"><Navbar /></div>;

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-white via-slate-50/50 to-white text-slate-800 font-sans selection:bg-rose-200 selection:text-rose-900 relative">
        <Navbar />

        {/* STICKY HEADER */}
        <div className="sticky z-30 w-full bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm" style={{ top: '64px' }}>
          <div className="container py-3 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
              <Link to="/" className="hover:text-rose-600 transition-colors">Home</Link> <span>/</span>
              <Link to="/products" className="hover:text-rose-600 transition-colors">Catalog</Link> <span>/</span>
              <span className="hidden sm:inline-block cursor-default">{product.category}</span> <span className="hidden sm:inline-block">/</span>
              <span className="text-rose-600 font-bold">EMC2T- 2 Tesla</span>
            </div>
            <motion.div style={{ opacity: headerOpacity }} className="flex items-center gap-4 pointer-events-none">
              <span className="hidden lg:block font-display font-bold text-slate-900">{product.name}</span>
              <button className="px-5 py-2 rounded-xl font-bold text-white bg-rose-600 text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all pointer-events-auto">
                Request Quote
              </button>
            </motion.div>
          </div>
        </div>
        
        <main className="pt-4 lg:pt-6">
          
          {/* HERO SECTION (Image 1 Refined) */}
          <section className="container pb-12 overflow-hidden relative">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start relative z-10">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="pt-2 lg:pt-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-rose-50 border border-rose-100 text-rose-700 text-[10px] font-extrabold uppercase tracking-widest mb-4">
                  {product.category}
                </div>
                <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 mb-3 tracking-tight leading-[1.05]">
                  {product.name}
                </h1>
                <p className="text-xl text-rose-600 font-extrabold mb-4">{product.subtitle}</p>
                <p className="text-lg font-bold text-slate-700 border-l-4 border-rose-500 pl-4 mb-6">{product.tagline}</p>
                
                <div className="space-y-4 mb-8">
                  {product.overview?.map((p: string, i: number) => (
                    <p key={i} className="text-base text-slate-600 leading-relaxed font-medium">{p}</p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <button className="group px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-rose-600 to-rose-500 shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 hover:-translate-y-0.5">
                    Get a Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="px-6 py-3 rounded-xl font-bold text-slate-700 bg-white border-2 border-slate-200 hover:border-rose-300 hover:bg-rose-50 transition-all duration-300 flex items-center gap-2 shadow-sm hover:-translate-y-0.5">
                    <Download className="w-4 h-4 text-rose-500" /> Full Specs
                  </button>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative w-full aspect-[4/5] flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-rose-100 to-slate-50 rounded-[3rem] transform rotate-2 scale-105 opacity-60 pointer-events-none" />
                <div className="relative w-full h-full rounded-[2rem] bg-white border border-slate-200 shadow-xl overflow-hidden p-6 flex items-center justify-center group">
                   <img src={product.heroImage} alt="EMC2T-2 Electromagnet" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" />
                </div>
              </motion.div>
            </div>
          </section>

          {/* TELEMETRY SECTION (Image 2 Autonomous Chart) */}
          <section className="py-16 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
            <div className="container relative z-10">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <span className="text-rose-500 font-extrabold tracking-widest uppercase text-xs mb-2 block">Dynamic Physics Visualization</span>
                <h2 className="font-display text-3xl font-extrabold text-slate-900">Gap & Field Optimization</h2>
              </div>
              <div className="max-w-6xl mx-auto">
                <MeaningfulTelemetry />
              </div>
            </div>
          </section>

          {/* EXPERIMENTAL INTEGRATION (Image 3 Autonomous Carousel) */}
          <section className="py-16 relative overflow-hidden bg-white">
            <div className="container max-w-6xl mx-auto">
              <div className="text-center mb-4">
                <span className="text-emerald-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">Versatile Setup Options</span>
                <h2 className="font-display text-3xl font-extrabold text-slate-900 mb-2">{product.experimentalIntegration?.header}</h2>
              </div>
              <AutonomousIntegrationCarousel features={product.experimentalIntegration?.features} />
            </div>
          </section>

          {/* MAGNET DESIGN */}
          <section className="py-16 relative overflow-hidden bg-slate-50 border-y border-slate-200">
            <div className="container max-w-6xl mx-auto">
              <div className="text-center mb-10">
                <span className="text-blue-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">Structural Design details</span>
                <h2 className="font-display text-3xl font-extrabold text-slate-900 mb-2">{product.magnetDesign?.header}</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                {product.magnetDesign?.components.map((feat: any, i: number) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5 border border-blue-100">
                      <span className="font-mono text-sm font-black text-blue-600">{feat.id}</span>
                    </div>
                    <h4 className="font-extrabold text-slate-900 text-xl mb-2">{feat.title}</h4>
                    <p className="text-sm font-medium text-slate-600 leading-relaxed">{feat.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* TECHNICAL SPECIFICATIONS (Image 4 Scanning Matrix) */}
          <section className="py-16 bg-white relative">
            <div className="container max-w-6xl mx-auto">
              <div className="text-center mb-8 relative">
                <span className="text-rose-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">Real-time Data Overview</span>
                <h2 className="font-display text-3xl font-extrabold text-slate-900 mb-2">{product.technicalSpecifications?.header}</h2>
              </div>
              <ScanningSpecsMatrix specs={product.technicalSpecifications?.data} />
            </div>
          </section>

          
          {/* <section className="py-16 bg-slate-50 border-t border-slate-200 relative">
            <div className="container max-w-5xl mx-auto relative overflow-hidden">
              <div className="text-center mb-4">
                <span className="text-rose-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">Deployed Environments</span>
                <h2 className="font-display text-3xl font-extrabold text-slate-900">Supported Applications</h2>
              </div>
              <RadialConstellationNetwork applications={product.applications} />
            </div>
          </section> */}

          {/* APPLICATIONS (Data Flow Circuit) */}
          <section className="py-16 bg-slate-50 border-t border-slate-200 relative">
            <div className="container max-w-6xl mx-auto relative overflow-hidden">
              <div className="text-center mb-4">
                <span className="text-rose-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">Deployed Environments</span>
                <h2 className="font-display text-4xl font-extrabold text-slate-900">Supported Applications</h2>
              </div>
              
              {/* Call the new crash-proof, highly animated component here */}
              <RadialConstellationNetwork applications={product.applications} />
              
            </div>
          </section>

          {/* SPEAK TO A SCIENTIST */}
          <section className="container py-16">
            <div className="bg-[#e2e8f0] rounded-[2.5rem] p-8 lg:p-12 flex flex-col lg:flex-row gap-10 items-center justify-between shadow-sm border border-slate-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-100/50 to-transparent pointer-events-none" />
              
              <div className="lg:w-1/2 relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 border border-slate-300 text-slate-800 text-[10px] font-extrabold tracking-widest uppercase mb-5 shadow-sm"><div className="w-2 h-2 rounded-full bg-rose-500" /> Engineering Support</div>
                <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 leading-[1.1]">Speak to a <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-blue-600">Specialist</span></h2>
                <p className="text-base text-slate-700 font-bold mb-8">CRYONANO's systems engineers are available to answer your questions. Discuss your 2 Tesla variable-gap requirements with us today.</p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-6 py-3 rounded-xl font-bold text-white bg-rose-600 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center gap-2">Get a Quote <ArrowRight className="w-4 h-4" /></button>
                </div>
              </div>

              <div className="lg:w-5/12 flex flex-col gap-4 w-full relative z-10">
                <div className="bg-white rounded-2xl p-6 flex items-center gap-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer border border-white hover:border-rose-200 group">
                  <div className="w-12 h-12 rounded-xl border border-slate-100 bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-rose-50 transition-colors"><Phone className="w-5 h-5 text-slate-500 group-hover:text-rose-500 transition-colors" /></div>
                  <div><p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-1">Call Us Directly</p><p className="text-xl font-extrabold text-slate-900">+91 97481 81485</p></div>
                </div>
                <div className="bg-white rounded-2xl p-6 flex items-center gap-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer border border-white hover:border-rose-200 group">
                  <div className="w-12 h-12 rounded-xl border border-slate-100 bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-rose-50 transition-colors"><Mail className="w-5 h-5 text-slate-500 group-hover:text-rose-500 transition-colors" /></div>
                  <div><p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-1">Email Engineering</p><p className="text-lg font-extrabold text-slate-900">contact@cryonano.com</p></div>
                </div>
              </div>
            </div>
          </section>

          {/* BOTTOM NAVIGATION */}
          <section className="border-t border-slate-200 bg-white py-6">
            <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-rose-600 transition-colors px-4 py-2 rounded-lg hover:bg-rose-50">
                <ArrowLeft className="w-4 h-4" /> Back to Homepage
              </Link>
              <Link to="/products" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-rose-600 transition-colors px-4 py-2 rounded-lg hover:bg-rose-50">
                Return to Product Catalog <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

        </main>
        
        <ScrollToTop />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default EMC2TMagnetPage;