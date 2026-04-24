import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  ArrowLeft, ArrowRight, Download, Phone, Mail, ChevronRight, 
  CheckCircle2, Camera, Focus, Crosshair, Maximize, Activity, Zap, Cpu, ScanFace,
  BarChart4, Layers, ShieldCheck, Sparkles, Microscope
} from "lucide-react";
import { Link } from "react-router-dom";
import { productsData } from "@/data/products";

// ==========================================
// 1. CORE ADVANTAGES (Standalone Animated Section)
// Moved below the hero section, upgraded card sizing and hover effects
// ==========================================
const CoreAdvantagesInteractive = ({ advantages }: { advantages: string[] }) => {
  return (
    <section className="py-12 bg-slate-100/50 border-y border-slate-200 relative overflow-hidden">
      <div className="container max-w-6xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
           <span className="text-emerald-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">System Foundation</span>
           <h2 className="font-display text-3xl font-extrabold text-slate-900">Core System Advantages</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5, scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-lg hover:border-emerald-400 flex items-center gap-5 transition-all group cursor-default"
            >
              <div className="bg-emerald-100 border border-emerald-200 p-3.5 rounded-xl shrink-0 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors shadow-sm">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-base font-bold text-slate-800 leading-snug">{adv}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 2. AI MEASUREMENT TELEMETRY (Enhanced Light Mode)
// ==========================================
const SmartMeasurementTelemetry = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }}
      className="w-full bg-white rounded-[2.5rem] border border-slate-200 shadow-xl overflow-hidden font-sans flex flex-col relative"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#e2e8f0_2px,transparent_2px)] bg-[size:24px_24px] pointer-events-none opacity-80" />
      
      <div className="bg-slate-50/90 backdrop-blur border-b border-slate-200 px-8 py-5 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
          <span className="text-slate-700 text-xs font-extrabold tracking-widest uppercase font-mono">Live AI Inspection Feed</span>
        </div>
        <div className="flex gap-3">
          <span className="text-[10px] font-bold font-mono text-emerald-800 bg-emerald-100 border border-emerald-300 px-2 py-1 rounded shadow-sm">EDGE DETECTION: ON</span>
          <span className="text-[10px] font-bold font-mono text-cyan-800 bg-cyan-100 border border-cyan-300 px-2 py-1 rounded shadow-sm">4K @ 60FPS</span>
        </div>
      </div>

      <div className="p-8 grid lg:grid-cols-3 gap-8 relative z-10 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
        
        {/* GRAPH 1: AI Bounding Box & Contour Detection */}
        <div className="px-0 lg:px-6 relative flex flex-col overflow-hidden pb-8 lg:pb-0 lg:col-span-2">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-emerald-600 text-xs font-extrabold uppercase tracking-widest mb-1">Visual Recognition</p>
              <p className="text-2xl font-extrabold text-slate-900 tracking-tight">Automated Defect Analysis</p>
            </div>
            <div className="p-3 bg-white rounded-2xl border border-slate-200 shadow-sm"><ScanFace className="w-6 h-6 text-emerald-600" /></div>
          </div>
          
          <div className="flex-grow w-full h-64 mt-2 bg-slate-50 border-2 border-slate-200 rounded-xl relative overflow-hidden flex items-center justify-center shadow-inner">
            {/* Simulated Microchip Background (Light Theme) */}
            <svg viewBox="0 0 400 200" className="absolute inset-0 w-full h-full text-slate-300 opacity-90">
              <rect x="50" y="50" width="100" height="100" fill="currentColor" />
              <rect x="250" y="80" width="80" height="40" fill="currentColor" />
              <circle cx="200" cy="100" r="30" fill="currentColor" />
            </svg>
            
            {/* Animated Scanning Line */}
            <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="absolute top-0 bottom-0 w-1 bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.9)] z-10" />

            {/* Animated Target Bounding Boxes */}
            <motion.div animate={{ opacity: [0, 1, 1, 0], scale: [1.2, 1, 1, 1.2] }} transition={{ duration: 4, repeat: Infinity, times: [0, 0.1, 0.9, 1] }} className="absolute left-[45px] top-[45px] w-[110px] h-[110px] border-2 border-cyan-500 bg-cyan-500/10 z-20">
                <div className="absolute -top-6 left-0 bg-cyan-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-sm">IC-Chip 01 (Pass)</div>
            </motion.div>
            
            <motion.div animate={{ opacity: [0, 1, 1, 0], scale: [1.2, 1, 1, 1.2] }} transition={{ duration: 4, repeat: Infinity, delay: 1.5, times: [0, 0.1, 0.9, 1] }} className="absolute right-[65px] top-[75px] w-[90px] h-[50px] border-2 border-emerald-500 bg-emerald-500/10 z-20">
                <div className="absolute -top-6 left-0 bg-emerald-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-sm">Weld Point (Calibrating)</div>
            </motion.div>
          </div>
        </div>

        {/* DATA 3: Real-Time Measurement Stream */}
        <div className="px-0 lg:px-6 relative flex flex-col overflow-hidden pt-8 lg:pt-0">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-cyan-600 text-xs font-extrabold uppercase tracking-widest mb-1">Data Stream</p>
              <p className="text-2xl font-extrabold text-slate-900 tracking-tight">Measurements</p>
            </div>
            <div className="p-3 bg-white rounded-2xl border border-slate-200 shadow-sm"><BarChart4 className="w-6 h-6 text-cyan-600" /></div>
          </div>
          
          <div className="flex-grow flex flex-col justify-center gap-4 w-full mt-2">
            {[ 
              {label: 'Parallel Line (Δx)', value: '14.22 µm', color: 'cyan'}, 
              {label: 'Concentric (r)', value: '0.45 mm', color: 'emerald'}, 
              {label: 'Angle (θ)', value: '89.92°', color: 'blue'} 
            ].map((stat, i) => (
              <div key={i} className={`bg-white border border-slate-200 px-4 py-4 rounded-xl flex items-center justify-between relative overflow-hidden shadow-sm`}>
                <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-${stat.color}-500 rounded-l-xl`} />
                <span className="text-xs font-extrabold text-slate-600 uppercase tracking-widest pl-2">{stat.label}</span>
                <span className={`text-lg font-black text-slate-900 font-mono`}>{stat.value}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
};

// ==========================================
// 3. APOCHROMATIC OPTICS & ZOOM (Enhanced Light Mode)
// ==========================================
const OpticalExcellence = ({ data }: { data: any }) => {
  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto pt-8 items-start">
      {/* Zoom System Card */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}
        className="bg-white border border-slate-200 rounded-3xl p-8 lg:p-10 shadow-sm flex flex-col relative overflow-hidden group hover:shadow-lg transition-all h-fit"
      >
        <motion.div animate={{ opacity: [0, 0.15, 0], scale: [1, 1.5, 1] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-100 rounded-full blur-3xl" />
        <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-4 relative z-10">
          <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0 border border-cyan-200 shadow-sm"><Maximize className="w-6 h-6"/></div>
          <h3 className="text-2xl font-extrabold text-slate-900">10:1 Intelligent Zoom</h3>
        </div>
        <ul className="space-y-4 relative z-10">
          {data.zoom.map((item: string, i: number) => (
            <li key={i} className="flex items-start gap-3 text-slate-700 font-bold text-sm leading-relaxed">
              <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" /> {item}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Objectives Card */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-white border border-slate-200 rounded-3xl p-8 lg:p-10 shadow-sm flex flex-col relative overflow-hidden group hover:shadow-lg transition-all h-fit"
      >
        <motion.div animate={{ opacity: [0, 0.15, 0], scale: [1, 1.5, 1] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-100 rounded-full blur-3xl" />
        <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-4 relative z-10">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200 shadow-sm"><Focus className="w-6 h-6"/></div>
          <h3 className="text-2xl font-extrabold text-slate-900">Infinity Plan Semi-APO</h3>
        </div>
        <div className="space-y-4 relative z-10 grid grid-cols-2 gap-4">
          {data.objectives.map((obj: any, i: number) => (
            <div key={i} className="bg-slate-50 border border-slate-200 p-4 rounded-xl shadow-sm hover:border-emerald-300 transition-colors">
               <div className="text-2xl font-black text-emerald-600 mb-2">{obj.mag}</div>
               <div className="text-xs font-bold text-slate-700 mb-1">NA: {obj.na}</div>
               <div className="text-xs text-slate-500 font-medium">WD: {obj.wd}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

// ==========================================
// 4. COMPARISON TABLE (Enhanced Light Mode)
// ==========================================
const ComparisonTable = ({ comparison }: { comparison: any[] }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden mt-8"
    >
      <div className="grid grid-cols-3 bg-slate-100 border-b border-slate-200 p-6">
        <div className="font-extrabold text-slate-600 uppercase tracking-wider text-xs">Feature Comparison</div>
        <div className="font-extrabold text-emerald-700 text-lg text-center">UltraClear 4K</div>
        <div className="font-extrabold text-slate-500 text-lg text-center">Conventional Systems</div>
      </div>
      <div className="divide-y divide-slate-100">
        {comparison.map((row, i) => (
          <motion.div 
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            key={i} className="grid grid-cols-3 p-6 items-center hover:bg-emerald-50/50 transition-colors"
          >
            <div className="font-bold text-slate-800 text-sm">{row.feature}</div>
            <div className="text-center font-extrabold text-slate-900 bg-emerald-50 border border-emerald-200 py-2 rounded-lg text-sm mx-4 shadow-sm">{row.ultra}</div>
            <div className="text-center font-medium text-slate-600 text-sm">{row.conventional}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// ==========================================
// 5. APPLICATIONS GRID 
// ==========================================
const ApplicationsGrid = ({ apps }: { apps: any[] }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto pt-8">
      {apps.map((app, i) => (
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
            key={app.title} 
            className={`border border-slate-200 rounded-3xl overflow-hidden bg-white p-6 group hover:border-cyan-300 hover:shadow-lg transition-all relative`}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-cyan-50 text-cyan-600 mb-4 border border-cyan-200 shadow-sm group-hover:bg-cyan-500 group-hover:text-white transition-colors`}>
              <Crosshair className="w-5 h-5" />
            </div>
            <h4 className="text-md font-extrabold text-slate-900 mb-2 leading-tight">{app.title}</h4>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">{app.desc}</p>
          </motion.div>
      ))}
    </div>
  );
};

// ==========================================
// 6. AUTONOMOUS DESIGN HIGHLIGHTS 
// ==========================================
const AutonomousDesignHighlights = ({ highlights }: { highlights: any[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const icons = [Cpu, ShieldCheck, Layers, Zap, Activity];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % highlights.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [highlights.length]);

  return (
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-stretch bg-white p-6 rounded-[2.5rem] border border-slate-200 shadow-xl mt-8">
        
        {/* Left Side: Navigation List */}
        <div className="w-full md:w-5/12 flex flex-col gap-2 relative">
            <div className="absolute left-[1.125rem] top-4 bottom-4 w-0.5 bg-slate-200 rounded-full" />
            {highlights.map((item, i) => (
                <div 
                    key={i} 
                    onClick={() => setActiveIndex(i)} 
                    className={`cursor-pointer p-4 rounded-2xl transition-all duration-300 relative z-10 flex items-center gap-4 ${activeIndex === i ? 'bg-slate-50 shadow-sm border border-slate-200' : 'border border-transparent hover:bg-slate-50/50'}`}
                >
                    <div className="relative flex items-center justify-center shrink-0">
                       <div className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === i ? 'bg-emerald-500 scale-125' : 'bg-slate-300'}`} />
                       {activeIndex === i && (
                          <motion.svg className="absolute w-8 h-8 text-emerald-500" viewBox="0 0 100 100">
                             <motion.circle cx="50" cy="50" r="46" fill="transparent" stroke="currentColor" strokeWidth="6" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 4, ease: "linear" }} strokeDasharray="289" strokeDashoffset="0" />
                          </motion.svg>
                       )}
                    </div>
                    <h4 className={`text-sm font-extrabold leading-tight ${activeIndex === i ? 'text-emerald-700' : 'text-slate-500'}`}>{item.title}</h4>
                </div>
            ))}
        </div>

        {/* Right Side: Visual & Description Display */}
        <div className="w-full md:w-7/12 min-h-[300px] bg-slate-50 rounded-3xl border border-slate-200 flex flex-col items-center justify-center p-10 relative overflow-hidden text-center shadow-inner">
            <AnimatePresence mode="wait">
                <motion.div 
                    key={activeIndex} 
                    initial={{ opacity: 0, scale: 0.95, y: 10 }} 
                    animate={{ opacity: 1, scale: 1, y: 0 }} 
                    exit={{ opacity: 0, scale: 1.05, y: -10 }} 
                    transition={{ duration: 0.4 }} 
                    className="relative z-10 flex flex-col items-center"
                >
                    <div className="w-20 h-20 bg-white rounded-[1.25rem] shadow-md border border-emerald-200 flex items-center justify-center mb-8 text-emerald-600">
                        {(() => {
                            const Icon = icons[activeIndex % icons.length];
                            return <Icon className="w-10 h-10" />
                        })()}
                    </div>
                    <h3 className="text-2xl font-extrabold text-slate-900 mb-4">{highlights[activeIndex].title}</h3>
                    <p className="text-lg text-slate-700 font-medium leading-relaxed max-w-sm">{highlights[activeIndex].desc}</p>
                </motion.div>
            </AnimatePresence>
            <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0, 0.25, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute inset-0 bg-emerald-200 rounded-full blur-[80px] pointer-events-none" />
        </div>

    </div>
  );
};

// ==========================================
// MAIN PAGE COMPONENT
// ==========================================
const UltraClear4KPage = () => {
  const product = productsData["ultraclear-4k"];
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [200, 300], [0, 1]);

  if (!product) return <div className="min-h-screen bg-slate-50"><Navbar /></div>;

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-800 font-sans selection:bg-emerald-200 selection:text-emerald-900 relative">
        <Navbar />

        {/* Sticky Header */}
        <div className="sticky z-30 w-full bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm" style={{ top: '64px' }}>
          <div className="container py-3 flex items-center justify-between">
            <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-600 uppercase tracking-wider">
              <Link to="/" className="hover:text-emerald-700 transition-colors">Home</Link> <span>/</span>
              <Link to="/products" className="hover:text-emerald-700 transition-colors">Catalog</Link> <span>/</span>
              <span className="hidden sm:inline-block cursor-default text-slate-400">{product.category}</span> <span>/</span>
              <span className="text-emerald-700 font-bold">{product.name}</span>
            </div>
            <motion.div style={{ opacity: headerOpacity }} className="flex items-center gap-4 pointer-events-none">
              <span className="hidden lg:block font-display font-bold text-slate-900">{product.name}</span>
              {/* <button className="px-5 py-2 rounded-xl font-bold text-white bg-emerald-600 text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all pointer-events-auto">Request Quote</button> */}
              <Link to="/request-quote" className="px-5 py-2 rounded-xl font-bold text-white bg-emerald-600 text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all pointer-events-auto">
                Request Quote
              </Link>
            </motion.div>
          </div>
        </div>
        
        <main className="pt-2 lg:pt-4">
          {/* HERO SECTION */}
          <section className="container pt-8 pb-10 overflow-hidden relative">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-[10px] font-extrabold tracking-widest uppercase mb-6 shadow-sm">CRYONANO LABS</div>
                <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight leading-[1.1]">
                  UltraClear 4K <span className="text-emerald-600">Smart Microscope</span>
                </h1>
                <p className="text-xl text-slate-700 font-bold mb-6">{product.subtitle}</p>
                <div className="space-y-4 mb-8">
                  {product.overview?.map((p: string, i: number) => (
                    <p key={i} className="text-lg text-slate-700 leading-relaxed font-medium">{p}</p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 mt-8">
                  <button className="group px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-emerald-600 to-emerald-700 shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 hover:-translate-y-1">
                    Get a Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="px-8 py-4 rounded-xl font-bold text-slate-700 bg-white border-2 border-slate-200 hover:border-emerald-400 hover:bg-emerald-50 transition-all duration-300 flex items-center gap-2 shadow-sm hover:-translate-y-1">
                    <Download className="w-5 h-5 text-emerald-600" /> Full Specs
                  </button>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100 to-transparent rounded-full blur-[100px] opacity-60 pointer-events-none" />
                <img src={product.heroImage} alt="UltraClear 4K Microscope" className="relative z-10 w-full h-full object-contain drop-shadow-2xl mix-blend-multiply" />
              </motion.div>
            </div>
          </section>

          {/* NEW: Standalone Interactive Core Advantages */}
          <CoreAdvantagesInteractive advantages={product.coreAdvantages} />

          {/* AI TELEMETRY SECTION */}
          <section className="py-12 lg:py-16 bg-white relative overflow-hidden border-t border-slate-200">
            <div className="container relative z-10">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="text-center max-w-3xl mx-auto mb-10">
                <span className="text-cyan-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">Smart Measurement & AI Analysis</span>
                <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">Intelligent Hardware Platform.</h2>
                <p className="text-base text-slate-700 font-medium">Transform visualization into actionable analysis with real-time automated edge detection, object recognition, and calibrated overlays.</p>
              </motion.div>
              <div className="max-w-6xl mx-auto">
                <SmartMeasurementTelemetry />
              </div>
            </div>
          </section>

          {/* APOCHROMATIC OPTICS SECTION */}
          <section className="py-12 lg:py-16 relative overflow-hidden bg-slate-50 border-t border-slate-200">
            <div className="container max-w-6xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="text-center mb-8">
                <span className="text-emerald-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">Apochromatic Optical Excellence</span>
                <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">True-Color Fidelity & Precision Focus.</h2>
              </motion.div>
              <OpticalExcellence data={product.opticalExcellence} />
            </div>
          </section>

          {/* COMPARISON TABLE */}
          <section className="py-12 lg:py-16 bg-white relative border-y border-slate-200">
            <div className="container mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="text-center max-w-2xl mx-auto">
                <span className="text-cyan-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">Competitive Advantage</span>
                <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 mb-2">Comparison Overview.</h2>
              </motion.div>
              <ComparisonTable comparison={product.comparison} />
            </div>
          </section>

          {/* APPLICATIONS GRID */}
          <section className="py-12 lg:py-16 relative overflow-hidden bg-slate-50 border-b border-slate-200">
            <div className="container max-w-6xl mx-auto relative z-10">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="text-center max-w-2xl mx-auto mb-8">
                <span className="text-emerald-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">Target Environments</span>
                <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">Applications</h2>
              </motion.div>
              <ApplicationsGrid apps={product.applications} />
            </div>
          </section>

          {/* AUTONOMOUS DESIGN HIGHLIGHTS */}
          <section className="py-12 lg:py-16 relative overflow-hidden bg-white">
            <div className="container max-w-6xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="text-center mb-8">
                <span className="text-cyan-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">System Architecture</span>
                <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">Design Highlights</h2>
              </motion.div>
              <AutonomousDesignHighlights highlights={product.designHighlights} />
            </div>
          </section>

          {/* CTA SECTION */}
          <section className="container py-12 lg:py-16 border-t border-slate-200 bg-white">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="bg-emerald-50 border border-emerald-200 rounded-[2.5rem] p-8 lg:p-12 flex flex-col lg:flex-row gap-10 items-center justify-between shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#d1fae5_0%,transparent_50%)] pointer-events-none" />
              <div className="lg:w-1/2 relative z-10 text-slate-900">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-emerald-300 text-emerald-800 text-[10px] font-extrabold tracking-widest uppercase mb-6 shadow-sm"><div className="w-2 h-2 rounded-full bg-emerald-500" /> Optical Engineering Support</div>
                <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">Speak to a <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">Specialist</span></h2>
                <p className="text-lg text-slate-700 font-medium mb-8">Discuss your imaging integration and intelligent measurement requirements today.</p>
                <button className="px-8 py-4 rounded-xl font-bold text-white bg-emerald-600 shadow-md hover:bg-emerald-700 hover:-translate-y-1 transition-all flex items-center gap-2">Get a Quote <ArrowRight className="w-5 h-5" /></button>
              </div>
              <div className="lg:w-5/12 flex flex-col gap-5 w-full relative z-10">
                <div className="bg-white rounded-3xl p-6 flex items-center gap-6 shadow-sm border border-emerald-200 hover:border-emerald-400 hover:shadow-md transition-all">
                  <div className="w-16 h-16 rounded-2xl border border-slate-100 bg-slate-50 flex items-center justify-center shrink-0"><Phone className="w-7 h-7 text-emerald-600" /></div>
                  <div><p className="text-xs font-extrabold text-slate-500 uppercase tracking-widest mb-1">Call Us Directly</p><p className="text-2xl font-extrabold text-slate-900">+91 97481 81485</p></div>
                </div>
                <div className="bg-white rounded-3xl p-6 flex items-center gap-6 shadow-sm border border-emerald-200 hover:border-emerald-400 hover:shadow-md transition-all">
                  <div className="w-16 h-16 rounded-2xl border border-slate-100 bg-slate-50 flex items-center justify-center shrink-0"><Mail className="w-7 h-7 text-emerald-600" /></div>
                  <div><p className="text-xs font-extrabold text-slate-500 uppercase tracking-widest mb-1">Email Engineering</p><p className="text-xl font-extrabold text-slate-900">contact@cryonano.com</p></div>
                </div>
              </div>
            </motion.div>
          </section>

          <Footer />
        </main>
      </div>
    </PageTransition>
  );
};

export default UltraClear4KPage;