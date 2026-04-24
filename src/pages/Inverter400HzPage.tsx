import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { motion, AnimatePresence, useScroll, useTransform, animate } from "framer-motion";
import { 
  Zap, Activity, Cpu, ArrowUp, Box, ShieldAlert,
  PlaneTakeoff, CheckCircle2, Package, Search, BarChart3,
  Layers, Target, Waves, Settings, Shield, Power, Server, Network, 
  Thermometer, WavesIcon, Binary, Clock4, BarChart, ArrowRight, Download, Phone, Mail
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
          className="fixed bottom-8 right-8 z-50 p-4 bg-sky-500 text-white rounded-full shadow-[0_4px_14px_rgba(14,165,233,0.4)] hover:bg-sky-600 hover:-translate-y-1 transition-all"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// ==========================================
// 1. ACTIVE CONVERGENCE BOARD (ENHANCED)
// ==========================================
const ActiveParallelSynchroscope = ({ telemetry }: { telemetry: any }) => {
  const [totalKW, setTotalKW] = useState(0);
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    animate(0, 30, { duration: 3, ease: "easeOut", onUpdate: v => setTotalKW(Number(v.toFixed(1))) });
    const interval = setInterval(() => setPulse(prev => (prev + 1) % 360), 50);
    return () => clearInterval(interval);
  }, [telemetry]);

  if (!telemetry) return null;

  return (
    <div className="w-full bg-white border-2 border-slate-200 rounded-[3rem] p-8 lg:p-12 relative overflow-hidden shadow-xl flex flex-col items-center">
      {/* Animated radar sweep background */}
      <motion.div 
        animate={{ rotate: 360 }} 
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }} 
        className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-sky-200/30 border-dashed pointer-events-none"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.08)_0%,transparent_70%)] pointer-events-none" />

      {/* Main Output Readout */}
      <div className="relative z-10 text-center mb-12 flex flex-col items-center">
         <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-sky-50 border border-sky-100 shadow-sm mb-4">
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity }}><Activity className="w-5 h-5 text-sky-500" /></motion.div>
            <span className="text-sky-800 font-mono text-xl font-bold">{telemetry.outputACBus}</span>
            <span className="text-xs text-sky-400">400Hz</span>
         </div>
         <div className="text-6xl lg:text-8xl font-black text-slate-900 font-mono tracking-tighter">
            {totalKW.toFixed(1)} <span className="text-4xl lg:text-5xl text-slate-400">kW</span>
         </div>
      </div>

      {/* Modules Converging */}
      <div className="w-full max-w-5xl relative z-10 grid grid-cols-1 md:grid-cols-4 gap-6">
         {telemetry.modules.map((mod: any, i: number) => {
           const isActive = mod.status === "MASTER" || mod.status === "SYNCED";
           const isStandby = mod.status === "HOT STANDBY";
           return (
             <motion.div 
               key={mod.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
               whileHover={{ y: -8, scale: 1.02 }}
               className={`relative bg-slate-50 border-2 p-6 rounded-[2rem] flex flex-col items-center text-center shadow-sm transition-all duration-500 ${isActive ? 'border-sky-300 shadow-md' : 'border-slate-200 opacity-70'}`}
             >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 border relative z-10 ${isActive ? 'bg-white border-sky-200 text-sky-600 shadow-md' : 'bg-slate-100 border-slate-200 text-slate-400'}`}>
                  <Server className="w-8 h-8" />
                  {isActive && <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-2 border-dashed border-sky-400 rounded-2xl opacity-50" />}
                </div>
                
                <h5 className="font-mono text-lg font-black text-slate-900 mb-1">{mod.id}</h5>
                <span className={`text-[10px] font-extrabold uppercase px-2 py-1 rounded-md mb-4 ${isStandby ? 'bg-slate-200 text-slate-600' : mod.status === "MASTER" ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>{mod.status}</span>
                
                <div className="w-full bg-white rounded-xl border border-slate-200 p-3 flex justify-between items-center mb-4">
                   <span className="text-[10px] font-bold text-slate-400 uppercase">Load</span>
                   <span className="font-mono font-black text-slate-800">{mod.amps.toFixed(1)}A</span>
                </div>

                <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden relative">
                    <motion.div animate={{ width: `${mod.loadPct}%` }} className={`absolute inset-y-0 left-0 rounded-full ${isStandby ? 'bg-slate-400' : 'bg-sky-500'}`} />
                </div>

                {/* Sync pulse indicator */}
                {mod.syncTime && isActive && (
                  <div className="mt-3 flex items-center gap-1 text-[9px] font-mono text-sky-500">
                    <motion.div animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 1, repeat: Infinity }}>●</motion.div>
                    Sync {mod.syncTime}
                  </div>
                )}
             </motion.div>
           )
         })}
      </div>
    </div>
  );
};

// ==========================================
// 2. INTERACTIVE ARCHITECTURE X-RAY (ENHANCED)
// ==========================================
const InteractiveArchitectureXRay = ({ features }: { features: any[] }) => {
  const [hoveredIdx, setHoveredIdx] = useState<number>(0);

  const enhancedFeatures = features.map((feat, i) => ({
    ...feat,
    icon: i === 0 ? Layers : i === 1 ? Shield : i === 2 ? Settings : Target,
    details: i === 0 
      ? ["Autonomous N+1 parallel current sharing", "Seamless fault-tolerant transition", "Hot-swappable power modules"]
      : i === 1 
      ? ["30kW compact 2U chassis", "MIL-STD-461G low EMI design", "-40°C to +60°C operation"]
      : i === 2 
      ? ["CANbus / RS485 / Ethernet", "<2ms sync latency", "Real-time telemetry & diagnostics"]
      : ["<2% THD linear load", "±1% voltage regulation", "Active input filtering"]
  }));

  const activeFeat = enhancedFeatures[hoveredIdx];
  const ActiveIcon = activeFeat.icon;

  return (
    <div className="w-full bg-white border border-slate-200 rounded-[3rem] p-6 lg:p-8 shadow-xl flex flex-col lg:flex-row gap-6 mt-10">
       
       {/* LEFT: Selector List */}
       <div className="lg:w-1/2 flex flex-col gap-3">
          {enhancedFeatures.map((feat, i) => (
             <div 
               key={i} onMouseEnter={() => setHoveredIdx(i)}
               className={`flex items-start gap-4 p-6 rounded-[2rem] transition-all duration-300 cursor-pointer border-2 ${hoveredIdx === i ? 'bg-sky-50 border-sky-300 shadow-md' : 'bg-slate-50 border-transparent hover:border-slate-200'}`}
             >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors ${hoveredIdx === i ? 'bg-sky-500 text-white shadow-lg' : 'bg-white border border-slate-200 text-slate-400'}`}>
                   <feat.icon className="w-6 h-6" />
                </div>
                <div>
                   <h4 className={`text-xl font-black mb-1 transition-colors ${hoveredIdx === i ? 'text-sky-900' : 'text-slate-700'}`}>{feat.title}</h4>
                   <p className="text-sm font-medium text-slate-500">{feat.desc}</p>
                </div>
             </div>
          ))}
       </div>

       {/* RIGHT: Dynamic Visual Panel */}
       <div className="lg:w-1/2 bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-[2rem] p-8 relative overflow-hidden shadow-inner min-h-[400px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.05)_0%,transparent_70%)] pointer-events-none" />
          
          <AnimatePresence mode="wait">
             <motion.div key={hoveredIdx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="relative z-10 w-full">
                <div className="flex flex-col items-center text-center">
                  <div className="w-28 h-28 mx-auto bg-white border-2 border-sky-200 shadow-xl rounded-[2rem] flex items-center justify-center mb-6 relative">
                    <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0 bg-sky-100 rounded-[2rem]" />
                    <ActiveIcon className="w-12 h-12 text-sky-500 relative z-10" />
                  </div>
                  <h3 className="font-display text-2xl font-black text-slate-900 uppercase tracking-tight mb-6">{activeFeat.title}</h3>
                  
                  {/* Bullet points with icons */}
                  <div className="space-y-3 text-left w-full">
                    {activeFeat.details.map((point: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-100 shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-slate-700">{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Mini diagram / visualization */}
                  <div className="mt-8 w-full h-16 bg-slate-100 rounded-xl flex items-center justify-around px-4">
                    <div className="flex flex-col items-center"><div className="w-8 h-8 rounded-full bg-sky-200 flex items-center justify-center"><Zap className="w-4 h-4 text-sky-600"/></div><span className="text-[9px]">Power</span></div>
                    <div className="w-12 h-0.5 bg-sky-300"></div>
                    <div className="flex flex-col items-center"><div className="w-8 h-8 rounded-full bg-amber-200 flex items-center justify-center"><Activity className="w-4 h-4 text-amber-600"/></div><span className="text-[9px]">Sync</span></div>
                    <div className="w-12 h-0.5 bg-sky-300"></div>
                    <div className="flex flex-col items-center"><div className="w-8 h-8 rounded-full bg-emerald-200 flex items-center justify-center"><Shield className="w-4 h-4 text-emerald-600"/></div><span className="text-[9px]">Load</span></div>
                  </div>
                </div>
             </motion.div>
          </AnimatePresence>
       </div>
    </div>
  );
};

// ==========================================
// 3. ENVIRONMENTAL SIMULATION THEATER (ENHANCED)
// ==========================================
const EnvironmentalSimulationTheater = () => {
  const [currentTest, setCurrentTest] = useState(0);
  const [simValue, setSimValue] = useState(0);
  const tests = [
    { name: "Vibration / Shock", icon: WavesIcon, color: "amber", std: "MIL-STD-810G", unit: "g RMS", valueRange: [2, 15] },
    { name: "Thermal Extremes", icon: Thermometer, color: "rose", std: "MIL-STD-810G", unit: "°C", valueRange: [-55, 85] },
    { name: "EMI Shielding", icon: ShieldAlert, color: "indigo", std: "MIL-STD-461G", unit: "dBμV", valueRange: [20, 60] }
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrentTest((prev) => (prev + 1) % tests.length), 3000);
    return () => clearInterval(timer);
  }, [tests.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSimValue(prev => {
        const range = tests[currentTest].valueRange;
        const newVal = prev + (Math.random() - 0.5) * 2;
        return Math.min(range[1], Math.max(range[0], newVal));
      });
    }, 200);
    return () => clearInterval(interval);
  }, [currentTest, tests]);

  return (
    <div className="w-full bg-white border border-slate-200 rounded-[3rem] p-10 lg:p-16 shadow-xl relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.05)_0%,transparent_60%)] pointer-events-none" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mx-auto relative z-10">
        {tests.map((test, i) => {
          const isActive = currentTest === i;
          const currentVal = isActive ? simValue : (test.valueRange[0] + test.valueRange[1]) / 2;
          const percent = ((currentVal - test.valueRange[0]) / (test.valueRange[1] - test.valueRange[0])) * 100;
          
          // Map color to tailwind classes (dynamic classes avoided, using direct)
          const colorMap: Record<string, string> = { amber: "amber", rose: "rose", indigo: "indigo" };
          const color = colorMap[test.color];
          
          return (
            <div key={i} className={`relative p-6 rounded-[2rem] border-2 transition-all duration-500 flex flex-col items-center text-center overflow-hidden ${isActive ? `bg-gradient-to-br from-${color}-50 to-white border-${color}-300 shadow-xl scale-105` : 'bg-white border-slate-100 opacity-70'}`}>
              {isActive && <div className={`absolute top-0 left-0 w-full h-1 bg-${color}-500 animate-pulse`} />}
              
              <div className={`relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 border-2 ${isActive ? `bg-${color}-100 border-${color}-200 shadow-md` : 'bg-slate-50 border-slate-200'}`}>
                <test.icon className={`w-10 h-10 transition-colors ${isActive ? `text-${color}-500` : 'text-slate-400'}`} />
              </div>
              
              <h4 className={`text-xl font-black mb-1 ${isActive ? 'text-slate-900' : 'text-slate-500'}`}>{test.name}</h4>
              
              {/* Animated gauge */}
              <div className="w-full mt-4">
                <div className="flex justify-between text-[10px] font-mono">
                  <span>{test.valueRange[0]}</span>
                  <span>{test.valueRange[1]}</span>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden mt-1">
                  <motion.div 
                    animate={{ width: `${percent}%` }} 
                    transition={{ type: "spring", stiffness: 100 }}
                    className={`h-full rounded-full ${isActive ? `bg-${color}-500` : 'bg-slate-400'}`} 
                  />
                </div>
                <div className="text-center mt-2 font-mono font-bold text-sm">
                  {currentVal.toFixed(1)} {test.unit}
                </div>
              </div>
              
              <div className={`mt-4 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${isActive ? `bg-${color}-100 text-${color}-700 border border-${color}-200` : 'bg-slate-100 text-slate-400'}`}>
                {test.std} {isActive && <span className="ml-1 animate-pulse">● LIVE</span>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ==========================================
// 4. AUTONOMOUS COMMAND CONSOLE (ENHANCED)
// ==========================================
const CommandControlConsole = ({ interfaces }: { interfaces: any[] }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActiveIdx((prev) => (prev + 1) % interfaces.length), 2000);
    return () => clearInterval(timer);
  }, [interfaces.length]);

  return (
    <div className="w-full bg-white border-2 border-slate-200 rounded-[3rem] p-10 lg:p-16 shadow-xl flex flex-col items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,#e2e8f0_1px,transparent_1px),linear-gradient(135deg,#e2e8f0_1px,transparent_1px)] bg-[size:30px_30px] opacity-30" />
      
      <div className="grid lg:grid-cols-2 gap-12 w-full max-w-5xl items-center relative z-10">
        
        {/* Central Hub with radiating pulses */}
        <div className="flex justify-center relative">
          <div className="w-48 h-48 bg-white border-4 border-indigo-200 rounded-full flex flex-col items-center justify-center shadow-xl relative z-10">
            <Network className="w-12 h-12 text-indigo-500 mb-2 animate-pulse" />
            <span className="text-xs font-black text-indigo-900 uppercase">Master Controller</span>
          </div>
          {/* Radiating beams */}
          {interfaces.map((_, idx) => (
            <motion.div
              key={idx}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: idx * 0.5 }}
              className="absolute top-1/2 left-1/2 w-64 h-64 -m-32 border border-dashed border-indigo-300 rounded-full flex items-center justify-start"
              style={{ transformOrigin: 'center' }}
            >
              <div className={`w-3 h-3 rounded-full ${activeIdx === idx ? 'bg-indigo-500 shadow-lg' : 'bg-indigo-300'}`} />
            </motion.div>
          ))}
        </div>

        {/* Interface Cards with animated bars */}
        <div className="flex flex-col gap-4">
          {interfaces.map((int, i) => (
            <motion.div 
              key={i} 
              animate={{ scale: activeIdx === i ? 1.02 : 1, opacity: activeIdx === i ? 1 : 0.7 }}
              transition={{ duration: 0.3 }}
              className={`p-5 rounded-2xl border-2 transition-all duration-300 ${activeIdx === i ? 'bg-indigo-50 border-indigo-400 shadow-lg' : 'bg-white border-slate-200'}`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className={`text-lg font-black ${activeIdx === i ? 'text-indigo-800' : 'text-slate-800'}`}>{int.name}</h4>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Protocol Active</span>
                </div>
                <div className="flex items-center gap-3">
                  {/* Signal strength bars */}
                  <div className="flex gap-0.5">
                    {[1,2,3,4].map(bar => (
                      <motion.div 
                        key={bar}
                        animate={{ height: activeIdx === i ? 12 + bar*2 : 6 }}
                        className={`w-1.5 rounded-full ${activeIdx === i ? 'bg-indigo-500' : 'bg-slate-300'}`}
                        style={{ height: activeIdx === i ? 12 + bar*2 : 6 }}
                      />
                    ))}
                  </div>
                  <span className="font-mono text-xs font-bold text-indigo-600">{int.latency}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 5. LASER-TRACED DATA MATRIX (ENHANCED)
// ==========================================
const LaserTracedDataMatrix = ({ specs, title }: { specs: any, title: string }) => {
  if (!specs) return null;
  const entries = Object.entries(specs);
  const [typedIndex, setTypedIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setTypedIndex((prev) => (prev + 1) % entries.length), 1500);
    return () => clearInterval(timer);
  }, [entries.length]);

  const getParamColor = (param: string) => {
    if (param.includes("Input") || param.includes("Voltage")) return "sky";
    if (param.includes("Output") || param.includes("Power")) return "emerald";
    if (param.includes("Temp") || param.includes("Env")) return "amber";
    return "slate";
  };

  return (
    <div className="w-full bg-white rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden mt-12 max-w-5xl mx-auto relative group">
      <div className="bg-slate-50 px-8 py-5 border-b border-slate-200 flex items-center justify-between relative z-10">
        <h3 className="font-display text-xl font-black text-sky-900 flex items-center gap-3 uppercase">
          <Settings className="w-5 h-5 text-sky-500" /> {title}
        </h3>
        <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm">
          <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Active Scan</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-x-6 px-8 py-6 gap-y-3 relative z-10">
        {entries.map(([param, spec], i) => {
          const isActive = typedIndex === i;
          const color = getParamColor(param);
          return (
            <motion.div
              key={i}
              animate={isActive ? { scale: 1.01, borderColor: `#${color === 'sky' ? '0ea5e9' : color === 'emerald' ? '10b981' : 'f59e0b'}` } : {}}
              className={`flex flex-col sm:flex-row sm:items-center justify-between py-4 px-6 rounded-xl border transition-all duration-300 relative overflow-hidden ${isActive ? `bg-${color}-50 border-${color}-300 shadow-md` : 'bg-white border-slate-100 hover:border-slate-300 hover:shadow-sm'}`}
            >
              <div className={`absolute left-0 top-0 bottom-0 w-1.5 transition-colors duration-300 ${isActive ? `bg-${color}-500 shadow-[0_0_8px]` : 'bg-slate-200'}`} />
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${isActive ? `bg-${color}-500 animate-pulse` : 'bg-slate-300'}`} />
                <span className={`text-xs font-black uppercase tracking-widest transition-colors ${isActive ? `text-${color}-800` : 'text-slate-500'}`}>
                  {param}
                </span>
              </div>
              <span className={`text-sm font-bold font-mono mt-1 sm:mt-0 transition-all ${isActive ? `text-slate-900 bg-white px-3 py-1 rounded-lg border border-${color}-100 shadow-sm` : 'text-slate-700'}`}>
                {String(spec)}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

// ==========================================
// 6. ENHANCED CHEVRON ACCORDION (ENHANCED)
// ==========================================
const EnhancedChevronAccordion = ({ data }: { data: any }) => {
  const [hoveredSector, setHoveredSector] = useState<"GSE" | "Mobile" | null>("GSE"); 

  const sectors = [
    { key: "GSE", title: "Hangar GSE Auxiliary", items: data.hangarGSE, icon: PlaneTakeoff, color: "sky", gradient: "from-sky-50 to-white" },
    { key: "Mobile", title: "Military Mobile Racks", items: data.mobileMilitary, icon: Shield, color: "amber", gradient: "from-amber-50 to-white" }
  ];

  return (
    <div className="flex flex-col lg:flex-row h-[500px] lg:h-[450px] w-full gap-6 mt-12 max-w-6xl mx-auto">
      {sectors.map((sector, i) => {
        const isHovered = hoveredSector === sector.key;
        const IconComponent = sector.icon;
        
        return (
          <motion.div
            key={i} 
            onHoverStart={() => setHoveredSector(sector.key as any)} 
            animate={{ flex: isHovered ? 4 : 1 }} 
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`relative overflow-hidden cursor-pointer flex flex-col justify-end transition-all duration-500 rounded-[2.5rem] border-2 shadow-lg ${isHovered ? `bg-gradient-to-br ${sector.gradient} border-${sector.color}-400` : 'bg-white border-slate-200'}`}
          >
            {/* Background large icon */}
            <IconComponent className={`absolute -right-8 -bottom-8 w-48 h-48 transition-all duration-700 pointer-events-none ${isHovered ? `text-${sector.color}-200 scale-110` : 'text-slate-100'}`} />
            
            <div className="relative z-10 p-10 flex flex-col justify-end h-full">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 shadow-md ${isHovered ? `bg-${sector.color}-500 text-white rotate-3` : 'bg-slate-100 text-slate-400'}`}>
                <IconComponent className="w-8 h-8" />
              </div>
              
              <h4 className={`font-display font-black uppercase transition-all duration-500 ${isHovered ? `text-4xl text-${sector.color}-800 mb-4 tracking-tight` : 'text-xl text-slate-700'}`}>
                {sector.title}
              </h4>
              
              <AnimatePresence>
                {isHovered && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                    <div className="space-y-3 mt-4">
                      {sector.items.map((item: string, idx: number) => (
                        <motion.div 
                          key={idx} 
                          initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: idx * 0.1 }}
                          className={`flex items-center gap-3 bg-${sector.color}-50 px-4 py-2.5 rounded-xl border border-${sector.color}-200 shadow-sm`}
                        >
                          <CheckCircle2 className={`w-5 h-5 shrink-0 text-${sector.color}-600`} />
                          <span className={`font-bold text-sm md:text-base text-${sector.color}-900`}>{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Active pulse dot when not hovered */}
              {!isHovered && (
                <div className="absolute bottom-6 right-6 flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[8px] font-mono text-slate-400">ready</span>
                </div>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

// ==========================================
// 7. INTERCONNECTED POWER GRID FOOTER (LIGHT, NO MARQUEE)
// ==========================================
const InterconnectedPowerGridFooter = ({ footers }: { footers: string[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!footers || footers.length === 0) return;
    const timer = setInterval(() => setActiveIndex((prev) => (prev + 1) % footers.length), 2500);
    return () => clearInterval(timer);
  }, [footers]);

  if (!footers) return null;

  return (
    <section className="bg-white py-24 overflow-hidden relative border-t-2 border-slate-200 shadow-inner">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:40px_40px] opacity-60 pointer-events-none" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Connection lines between cards (static, no marquee) */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-slate-200 -translate-y-1/2 hidden md:block z-0" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {footers.slice(0, 3).map((footer, i) => {
            const isActive = activeIndex === i;
            return (
              <div key={i} className={`flex flex-col items-center text-center p-8 rounded-[2rem] border-2 transition-all duration-500 ${isActive ? 'bg-sky-50 border-sky-400 shadow-xl scale-105 z-20' : 'bg-white border-slate-200 shadow-md opacity-80 hover:opacity-100'}`}>
                <div className="relative">
                  {/* Pulse ring */}
                  {isActive && (
                    <motion.div 
                      animate={{ scale: [1, 1.4, 1], opacity: [0.8, 0, 0.8] }} 
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="absolute inset-0 rounded-full border-2 border-sky-400"
                    />
                  )}
                  <div className={`relative w-20 h-20 rounded-[1.5rem] flex items-center justify-center mb-6 border-2 transition-all duration-500 ${isActive ? 'bg-sky-500 border-sky-600 shadow-lg' : 'bg-slate-100 border-slate-200'}`}>
                    <Power className={`w-10 h-10 transition-colors duration-500 ${isActive ? 'text-white drop-shadow-md' : 'text-slate-500'}`} />
                  </div>
                </div>
                <span className={`text-base font-black tracking-widest uppercase transition-colors duration-500 ${isActive ? 'text-sky-800' : 'text-slate-600'}`}>{footer}</span>
                <div className={`mt-6 h-1 rounded-full transition-all duration-500 ${isActive ? 'bg-sky-400 w-2/3' : 'bg-slate-300 w-1/3'}`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// MAIN PAGE COMPONENT
// ==========================================
const Inverter400HzPage = () => {
  const product = productsData["inverter-400hz-rugged"];
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [200, 300], [0, 1]);

  // Hero Carousel Logic
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const heroImages = [
    product?.heroImage, 
    "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=1000&auto=format&fit=crop"  
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrentHeroImage((prev) => (prev + 1) % heroImages.length), 3500); 
    return () => clearInterval(timer);
  }, [heroImages.length]);

  if (!product) return <div className="min-h-screen bg-slate-50"><Navbar /></div>;

  return (
    <PageTransition>
      <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-sky-200 selection:text-sky-900 relative">
        <Navbar />

        {/* STICKY HEADER */}
        <div className="sticky z-30 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm" style={{ top: '64px' }}>
          <div className="container py-3 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
              <Link to="/" className="hover:text-sky-600 transition-colors">Home</Link> <span>/</span>
              <Link to="/products" className="hover:text-sky-600 transition-colors">Catalogue</Link> <span>/</span>
              <span className="hidden sm:inline-block cursor-default">{product.category || 'Inverters'}</span> <span className="hidden sm:inline-block">/</span>
              <span className="text-sky-600 font-bold">400Hz Frequency Inverter</span>
            </div>
            <motion.div style={{ opacity: headerOpacity }} className="flex items-center gap-4 pointer-events-none">
              <span className="hidden lg:block font-display font-bold text-slate-900 uppercase">400Hz Inverter 30kW</span>
              <button className="px-5 py-2.5 rounded-xl font-bold text-white bg-sky-500 text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all pointer-events-auto">
                Request Quote
              </button>
            </motion.div>
          </div>
        </div>
        
        <main className="pt-2 lg:pt-4 relative">
          
          {/* 1. HERO SECTION WITH ENHANCED CAROUSEL */}
          <section className="container pb-16 overflow-hidden relative border-b border-slate-100">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10 mt-6">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="pt-2 lg:pt-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-sky-50 border border-sky-100 text-sky-700 text-[10px] font-extrabold uppercase tracking-widest mb-4">
                  <Package className="w-3 h-3" /> DEMANDING MOBILE PLATFORMS & AEROSPACE GSE
                </div>
                <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 mb-3 tracking-tight uppercase leading-[1.05]">
                  400Hz Frequency Inverter
                </h1>
                <p className="text-2xl text-amber-600 font-black mb-4 uppercase tracking-wide">{product.subtitle}</p>
                <p className="text-lg font-bold text-slate-700 border-l-4 border-sky-400 pl-4 mb-6">{product.tagline}</p>
                
                <div className="space-y-4 mb-8">
                  {product.overview?.map((p: string, i: number) => (
                    <motion.p key={i} className="text-base text-slate-600 leading-relaxed font-medium">{p}</motion.p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-4 rounded-xl font-black text-white bg-sky-500 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all flex items-center gap-2 uppercase tracking-wide">
                    Configure System <Waves className="w-5 h-5" />
                  </button>
                  <button className="px-8 py-4 rounded-xl font-bold text-slate-700 bg-white border-2 border-slate-200 hover:border-sky-400 hover:bg-sky-50 transition-all flex items-center gap-2 shadow-sm hover:-translate-y-1">
                    <Power className="w-5 h-5 text-sky-500" /> System Data Matrix
                  </button>
                </div>
              </motion.div>

              {/* ENHANCED MULTI-IMAGE CAROUSEL WITH FEATURE OVERLAY */}
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative w-full flex flex-col gap-4 mt-8 lg:mt-0">
                {/* Main Stage */}
                <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-slate-50 to-sky-50/50 border-2 border-sky-100 shadow-xl rounded-[2.5rem] p-8 flex items-center justify-center overflow-hidden group">
                  <motion.div animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="absolute inset-0 bg-[linear-gradient(to_right,#e0f2fe_1px,transparent_1px),linear-gradient(to_bottom,#e0f2fe_1px,transparent_1px)] bg-[size:40px_40px] opacity-60" />
                  
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={currentHeroImage}
                      initial={{ opacity: 0, y: 20, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -20, scale: 1.1 }} transition={{ duration: 0.4 }}
                      src={heroImages[currentHeroImage]} alt="400Hz Inverter" 
                      className="w-[85%] object-contain mix-blend-multiply relative z-10 max-h-[300px] drop-shadow-2xl" 
                    />
                  </AnimatePresence>

                  {/* Feature overlay on active image */}
                  <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between gap-2 text-[10px] font-black uppercase bg-white/80 backdrop-blur-sm p-2 rounded-xl border border-sky-200">
                    <span className="flex items-center gap-1"><Zap className="w-3 h-3 text-amber-500"/> 30kW</span>
                    <span className="flex items-center gap-1"><Activity className="w-3 h-3 text-sky-500"/> 400Hz</span>
                    <span className="flex items-center gap-1"><Shield className="w-3 h-3 text-emerald-500"/> N+1</span>
                  </div>
                </div>

                {/* Thumbnails with hover zoom */}
                <div className="grid grid-cols-3 gap-4 h-24">
                  {heroImages.map((img, i) => (
                    <div 
                      key={i} 
                      onClick={() => setCurrentHeroImage(i)}
                      className={`cursor-pointer rounded-2xl border-2 overflow-hidden flex items-center justify-center bg-white transition-all duration-300 ${currentHeroImage === i ? 'border-sky-500 shadow-md scale-105' : 'border-slate-200 hover:border-sky-300 opacity-70 hover:opacity-100 hover:scale-105'}`}
                    >
                      <img src={img} className="h-[80%] object-contain mix-blend-multiply pointer-events-none transition-transform duration-300 group-hover:scale-110" alt={`Thumb ${i}`} />
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* 2. TELEMETRY: ACTIVE PARALLEL SYNCHROSCOPE (ENHANCED) */}
          <section className="py-20 bg-white relative overflow-hidden border-b border-slate-200">
            <div className="container relative z-10">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-sky-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">Modular Rack Synchronization</span>
                <h2 className="font-display text-4xl font-black text-slate-900 uppercase tracking-tight">Active Parallel Current Sharing</h2>
              </div>
              <ActiveParallelSynchroscope telemetry={product.parallelSyncTelemetry} />
            </div>
          </section>

          {/* 3. ARCHITECTURE: INTERACTIVE X-RAY (ENHANCED) */}
          <section className="py-20 relative overflow-hidden bg-white">
            <div className="container max-w-6xl mx-auto">
              <div className="text-center mb-4">
                <span className="text-sky-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">Promising High Density</span>
                <h2 className="font-display text-4xl font-black text-slate-900 uppercase tracking-tight">MISSION CRITICAL ARCHITECTURE</h2>
              </div>
              <InteractiveArchitectureXRay features={product.keyValueProposition} />
            </div>
          </section>

          {/* 4. ENVIRONMENTAL SIMULATION THEATER (ENHANCED) */}
          <section className="py-20 bg-white border-y border-slate-200 relative">
            <div className="container max-w-6xl mx-auto relative z-10">
              <div className="text-center max-w-2xl mx-auto mb-12 relative z-10">
                <span className="text-amber-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">Autonomous Validation Facility</span>
                <h2 className="font-display text-4xl font-black text-slate-900 uppercase tracking-tight mb-4">Rugged Operational Resilience</h2>
              </div>
              <EnvironmentalSimulationTheater />
            </div>
          </section>

          {/* 5. CONTROL: AUTONOMOUS COMMAND CONSOLE (ENHANCED) */}
          <section className="py-20 bg-white relative">
            <div className="container max-w-6xl mx-auto relative z-10">
              <CommandControlConsole interfaces={product.controlInterfaces} />
            </div>
          </section>

          {/* 6. TECHNICAL SPECIFICATIONS (ENHANCED MATRIX) */}
          <section className="py-20 bg-slate-50 relative border-y border-slate-200 shadow-inner">
            <div className="container max-w-6xl mx-auto">
              <div className="text-center mb-4">
                <span className="text-sky-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">System Profile Matrix</span>
                <h2 className="font-display text-4xl font-black text-slate-900 uppercase tracking-tight">Technical Data Readout</h2>
              </div>
              <LaserTracedDataMatrix specs={product.technicalSpecifications.inputData} title="Input Source Data" />
              <LaserTracedDataMatrix specs={product.technicalSpecifications.outputData} title="Output Precision Metrics" />
            </div>
          </section>

          {/* 7. APPLICATIONS: ENHANCED ACCORDION */}
          <section className="py-24 bg-white relative overflow-hidden">
            <div className="container relative z-10">
              <div className="text-center mb-4">
                <span className="text-slate-500 font-extrabold tracking-widest uppercase text-xs mb-2 block">DEPLOYMENT ECOSYSTEMS</span>
                <h2 className="font-display text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-tight">HIGH-FREQUENCY AEROSPACE APPLICATION</h2>
              </div>
              <EnhancedChevronAccordion data={product.deploymentApplications} />
            </div>
          </section>

          {/* 9. FIXED VALUE CORE RELAY (LIGHT, NO MARQUEE) */}
          <InterconnectedPowerGridFooter footers={product.footers} />

          {/* 8. SPEAK TO AN ENGINEER */}
          <section className="container py-24 bg-white relative">
            <div className="bg-slate-50 rounded-[3rem] p-10 lg:p-20 flex flex-col lg:flex-row gap-12 items-center justify-between shadow-xl border border-slate-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.1)_0%,transparent_60%)] rounded-full blur-[50px] pointer-events-none" />
              
              <div className="lg:w-1/2 relative z-10">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-black tracking-widest uppercase mb-8 shadow-sm">
                   <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Direct Engineering Line
                </div>
                <h2 className="font-display text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-[1.1] uppercase tracking-tight">Speak to a <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-amber-600">Power Scientist</span></h2>
                <p className="text-xl text-slate-600 font-medium mb-10 leading-relaxed">CRYONANO's systems engineers are available to discuss autonomous N+1 current sharing, 400Hz wave fidelity requirements, and custom mobile platform integration.</p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-10 py-5 rounded-2xl font-black text-white bg-slate-900 shadow-xl hover:bg-slate-800 hover:-translate-y-1 transition-all uppercase tracking-wider">Request Technical Consultation</button>
                </div>
              </div>

              <div className="lg:w-5/12 flex flex-col gap-6 w-full relative z-10">
                {[ { icon: Phone, label: "Call Us Directly", value: "+91 97481 81485" }, { icon: Mail, label: "Email Engineering", value: "contact@cryonano.com" } ].map((item, i) => (
                    <div key={i} className="bg-white rounded-[2rem] p-8 flex items-center gap-6 shadow-sm border border-slate-200 hover:border-sky-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                      <div className="w-16 h-16 rounded-2xl border border-slate-100 bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-sky-50 transition-colors">
                        <item.icon className="w-8 h-8 text-slate-400 group-hover:text-sky-600 transition-colors" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1.5">{item.label}</p>
                        <p className={`${i === 0 ? 'text-2xl' : 'text-xl'} font-black text-slate-900`}>{item.value}</p>
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </section>

        </main>
        
        <ScrollToTop />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Inverter400HzPage;