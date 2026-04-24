import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { motion, AnimatePresence, useScroll, useTransform, animate } from "framer-motion";
import { 
  ArrowLeft, ArrowRight, Download, Phone, Mail, 
  Zap, ShieldAlert, Activity, Cpu, ArrowUp, 
  CheckCircle2, Radar, Plane, Ship, Train, Radio, Factory,
  Thermometer, Waves, Wind, Mountain, Settings, BatteryCharging
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
          className="fixed bottom-8 right-8 z-50 p-4 bg-amber-500 text-white rounded-full shadow-[0_4px_14px_rgba(245,158,11,0.4)] hover:bg-amber-600 hover:shadow-[0_6px_20px_rgba(245,158,11,0.6)] transition-all hover:-translate-y-1"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// ==========================================
// 1. AUTONOMOUS OSCILLOSCOPE TELEMETRY
// Unique Pattern: AC Sine Wave to Flat DC
// ==========================================
const OscilloscopeTelemetry = () => {
  const [efficiency, setEfficiency] = useState(94.8);
  const [ripple, setRipple] = useState(38);

  useEffect(() => {
    const cycle = async () => {
      while (true) {
        await animate(94.8, 95.2, { duration: 2, ease: "easeInOut", onUpdate: v => setEfficiency(Number(v.toFixed(1))) });
        await animate(38, 45, { duration: 1.5, ease: "easeInOut", onUpdate: v => setRipple(Math.round(v)) });
        await animate(95.2, 94.5, { duration: 2, ease: "easeInOut", onUpdate: v => setEfficiency(Number(v.toFixed(1))) });
        await animate(45, 36, { duration: 1.5, ease: "easeInOut", onUpdate: v => setRipple(Math.round(v)) });
      }
    };
    cycle();
  }, []);

  return (
    <div className="w-full bg-white rounded-[2.5rem] border border-slate-200 shadow-xl overflow-hidden flex flex-col relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#f1f5f9_2px,transparent_2px)] bg-[size:24px_24px] pointer-events-none" />
      
      <div className="bg-slate-50 border-b border-slate-200 px-8 py-5 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_12px_rgba(16,185,129,0.6)]" />
          <span className="text-slate-600 text-xs font-extrabold tracking-widest uppercase font-mono">Live Diagnostic Oscilloscope</span>
        </div>
        <div className="flex gap-3">
          <span className="text-[10px] font-bold font-mono text-amber-700 bg-amber-100 border border-amber-200 px-2 py-1 rounded shadow-sm">PFC `{'>'}` 0.99</span>
          <span className="text-[10px] font-bold font-mono text-emerald-700 bg-emerald-100 border border-emerald-200 px-2 py-1 rounded shadow-sm">OUTPUT STABLE</span>
        </div>
      </div>

      <div className="p-8 grid lg:grid-cols-3 gap-6 relative z-10">
        
        {/* Stage 1: Raw AC */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 relative flex flex-col shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-amber-500 text-[10px] font-extrabold uppercase tracking-widest mb-1">Universal AC Input</p>
              <p className="text-3xl font-extrabold text-slate-900 tracking-tight font-mono">220 <span className="text-sm text-slate-500 font-bold">VAC</span></p>
            </div>
            <Activity className="w-6 h-6 text-amber-500" />
          </div>
          <div className="flex-grow w-full h-32 mt-2 bg-slate-900 rounded-xl border border-slate-800 relative overflow-hidden flex items-center justify-center">
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:15px_15px] opacity-50" />
             <svg viewBox="0 0 200 100" className="absolute inset-0 w-full h-full opacity-80" preserveAspectRatio="none">
               <motion.path 
                 d="M 0 50 Q 25 10, 50 50 T 100 50 T 150 50 T 200 50" 
                 fill="none" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round"
                 animate={{ x: [-100, 0] }} transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}
               />
             </svg>
          </div>
        </div>

        {/* Stage 2: Active PFC / Conversion */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 relative flex flex-col shadow-sm justify-center items-center group overflow-hidden">
           <div className="absolute inset-0 bg-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
           <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="w-32 h-32 rounded-full border-4 border-dashed border-emerald-300 flex items-center justify-center relative z-10">
              <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-24 h-24 rounded-full bg-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.4)] flex flex-col items-center justify-center text-white">
                 <Zap className="w-6 h-6 mb-1" />
                 <span className="font-mono font-black text-sm">{efficiency}%</span>
              </motion.div>
           </motion.div>
           <p className="text-emerald-700 text-xs font-extrabold uppercase tracking-widest mt-6 relative z-10 text-center">Active Rectification<br/>& Conversion</p>
        </div>

        {/* Stage 3: Clean DC */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 relative flex flex-col shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-emerald-600 text-[10px] font-extrabold uppercase tracking-widest mb-1">Clean DC Output</p>
              <p className="text-3xl font-extrabold text-slate-900 tracking-tight font-mono">48.0 <span className="text-sm text-slate-500 font-bold">VDC</span></p>
            </div>
            <Cpu className="w-6 h-6 text-emerald-500" />
          </div>
          <div className="flex-grow w-full h-32 mt-2 bg-slate-900 rounded-xl border border-slate-800 relative overflow-hidden flex items-center justify-center">
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:15px_15px] opacity-50" />
             <svg viewBox="0 0 200 100" className="absolute inset-0 w-full h-full opacity-80" preserveAspectRatio="none">
               {/* Flatline DC with micro-ripple simulation */}
               <motion.path 
                 d="M 0 50 L 20 49 L 40 51 L 60 50 L 80 49 L 100 51 L 120 50 L 140 49 L 160 51 L 180 50 L 200 49" 
                 fill="none" stroke="#10b981" strokeWidth="4" strokeLinecap="round"
                 animate={{ x: [-20, 0] }} transition={{ duration: 0.2, repeat: Infinity, ease: "linear" }}
               />
             </svg>
             <div className="absolute bottom-2 right-2 text-[10px] font-bold text-emerald-400 font-mono">Ripple: {ripple} mV</div>
          </div>
        </div>

      </div>
    </div>
  );
};

// // ==========================================
// // 2. MISSION-CRITICAL BENTO GRID
// // Unique Pattern: Feature Asymmetry with glowing accents
// // ==========================================
// const MissionCriticalBento = ({ data }: { data: any }) => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      
//       {/* Key Features (Spans 2 columns) */}
//       <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-2 bg-amber-50 border border-amber-200 rounded-[2rem] p-8 shadow-sm relative overflow-hidden group hover:shadow-lg transition-all">
//         <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-amber-200/50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
//         <div className="flex items-center gap-3 mb-6 relative z-10">
//           <div className="p-3 bg-amber-100 rounded-xl"><Zap className="w-6 h-6 text-amber-600" /></div>
//           <h3 className="font-display text-2xl font-extrabold text-amber-900">Performance Architecture</h3>
//         </div>
//         <div className="grid sm:grid-cols-2 gap-4 relative z-10">
//           {data.keyFeatures.map((feat: string, i: number) => (
//             <div key={i} className="flex items-start gap-3 bg-white/80 backdrop-blur px-4 py-3 rounded-xl border border-amber-100 shadow-sm text-amber-950 font-bold text-sm">
//               <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" /> {feat}
//             </div>
//           ))}
//         </div>
//       </motion.div>

//       {/* Design Range (Tall column) */}
//       <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-blue-50 border border-blue-200 rounded-[2rem] p-8 shadow-sm relative overflow-hidden group hover:shadow-lg transition-all">
//         <div className="absolute -left-10 -top-10 w-40 h-40 bg-blue-200/50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
//         <div className="p-3 bg-blue-100 rounded-xl w-fit mb-6 relative z-10"><Cpu className="w-6 h-6 text-blue-600" /></div>
//         <h3 className="font-display text-2xl font-extrabold text-blue-900 mb-6 relative z-10">Design Specs</h3>
//         <div className="space-y-4 relative z-10">
//           {data.designRange.map((item: string, i: number) => (
//             <div key={i} className="text-blue-950 font-bold text-sm border-l-2 border-blue-400 pl-3">
//               {item}
//             </div>
//           ))}
//         </div>
//       </motion.div>

//       {/* Protection Grid (Spans full width below) */}
//       <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="lg:col-span-3 bg-rose-50 border border-rose-200 rounded-[2rem] p-8 shadow-sm flex flex-col md:flex-row items-center gap-8 group hover:shadow-lg transition-all">
//          <div className="md:w-1/3 shrink-0 flex flex-col items-center md:items-start text-center md:text-left">
//             <div className="p-4 bg-rose-100 rounded-2xl mb-4"><ShieldAlert className="w-8 h-8 text-rose-600" /></div>
//             <h3 className="font-display text-3xl font-extrabold text-rose-900 mb-2">Comprehensive Protection</h3>
//             <p className="text-rose-700 font-medium text-sm">Automated fail-safes prevent catastrophic hardware failure.</p>
//          </div>
//          <div className="md:w-2/3 flex flex-wrap justify-center md:justify-start gap-3">
//             {data.protection.map((item: string, i: number) => (
//               <div key={i} className="bg-white px-5 py-2.5 rounded-full border border-rose-200 text-rose-800 font-bold text-sm shadow-sm flex items-center gap-2">
//                 <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" /> {item}
//               </div>
//             ))}
//          </div>
//       </motion.div>
//     </div>
//   );
// };


// ==========================================
// 2. MISSION-CRITICAL BENTO GRID (Highly Animated)
// Unique Pattern: Feature Asymmetry with glowing autonomous accents
// ==========================================
const MissionCriticalBento = ({ data }: { data: any }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      
      {/* Key Features (Spans 2 columns) */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-2 bg-amber-50/50 border border-amber-200 rounded-[2rem] p-8 shadow-sm relative overflow-hidden group hover:shadow-[0_12px_40px_rgba(245,158,11,0.15)] transition-all duration-500">
        {/* Autonomous moving blob */}
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3], x: [0, 50, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute -right-20 -bottom-20 w-80 h-80 bg-amber-200/60 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-400/50 rounded-[2rem] transition-colors duration-500" />
        
        <div className="flex items-center gap-3 mb-6 relative z-10">
          <motion.div animate={{ rotateY: 360 }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} className="p-3 bg-amber-100 rounded-xl border border-amber-200 shadow-sm">
            <Zap className="w-6 h-6 text-amber-600" />
          </motion.div>
          <h3 className="font-display text-2xl font-extrabold text-amber-900">Performance Architecture</h3>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 relative z-10">
          {data.keyFeatures.map((feat: string, i: number) => (
            <motion.div key={i} whileHover={{ scale: 1.02, x: 5 }} className="flex items-start gap-3 bg-white/90 backdrop-blur px-4 py-3 rounded-xl border border-amber-100 shadow-sm text-amber-950 font-bold text-sm cursor-default">
              <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" /> {feat}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Design Range (Tall column) */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-blue-50/50 border border-blue-200 rounded-[2rem] p-8 shadow-sm relative overflow-hidden group hover:shadow-[0_12px_40px_rgba(59,130,246,0.15)] transition-all duration-500">
        <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3], y: [0, -30, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute -left-20 -top-20 w-64 h-64 bg-blue-200/60 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400/50 rounded-[2rem] transition-colors duration-500" />
        
        <div className="p-3 bg-blue-100 rounded-xl w-fit mb-6 relative z-10 border border-blue-200 shadow-sm">
          <motion.div animate={{ rotate: 180 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}><Cpu className="w-6 h-6 text-blue-600" /></motion.div>
        </div>
        <h3 className="font-display text-2xl font-extrabold text-blue-900 mb-6 relative z-10">Design Specs</h3>
        <div className="space-y-4 relative z-10">
          {data.designRange.map((item: string, i: number) => (
            <motion.div key={i} whileHover={{ x: 5 }} className="text-blue-950 font-bold text-sm border-l-4 border-blue-400 pl-3 bg-white/60 py-2 pr-2 rounded-r-lg">
              {item}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Protection Grid (Spans full width below) */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="lg:col-span-3 bg-rose-50/50 border border-rose-200 rounded-[2rem] p-8 shadow-sm flex flex-col md:flex-row items-center gap-8 group hover:shadow-[0_12px_40px_rgba(244,63,94,0.15)] transition-all duration-500 relative overflow-hidden">
         <motion.div animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.1)_2px,transparent_2px)] bg-[size:30px_30px] pointer-events-none" />
         
         <div className="md:w-1/3 shrink-0 flex flex-col items-center md:items-start text-center md:text-left relative z-10">
            <div className="p-4 bg-rose-100 border border-rose-200 rounded-2xl mb-4 relative overflow-hidden shadow-sm">
              <motion.div animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0 bg-rose-200 rounded-2xl" />
              <ShieldAlert className="w-8 h-8 text-rose-600 relative z-10" />
            </div>
            <h3 className="font-display text-3xl font-extrabold text-rose-900 mb-2">Comprehensive Protection</h3>
            <p className="text-rose-700 font-medium text-sm">Automated fail-safes prevent catastrophic hardware failure.</p>
         </div>
         <div className="md:w-2/3 flex flex-wrap justify-center md:justify-start gap-4 relative z-10">
            {data.protection.map((item: string, i: number) => (
              <motion.div key={i} whileHover={{ scale: 1.05, y: -2 }} className="bg-white/90 backdrop-blur px-5 py-3 rounded-full border border-rose-200 text-rose-800 font-bold text-sm shadow-sm flex items-center gap-3 cursor-default">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.8)] animate-pulse" /> {item}
              </motion.div>
            ))}
         </div>
      </motion.div>
    </div>
  );
};

// ==========================================
// 3. ENVIRONMENTAL STRESS TEST MATRIX
// Invented Pattern: Autonomous flashing test readouts
// ==========================================
const EnvironmentalStressTest = ({ envData }: { envData: any }) => {
  const [temp, setTemp] = useState(25);
  const [vibration, setVibration] = useState(0);

  useEffect(() => {
    const cycle = async () => {
      while (true) {
        animate(0, 20, { duration: 1, onUpdate: v => setVibration(Number(v.toFixed(1))) });
        await animate(25, 85, { duration: 2, ease: "linear", onUpdate: v => setTemp(Math.round(v)) });
        await new Promise(r => setTimeout(r, 1000));
        animate(20, 0, { duration: 1, onUpdate: v => setVibration(Number(v.toFixed(1))) });
        await animate(85, -40, { duration: 3, ease: "linear", onUpdate: v => setTemp(Math.round(v)) });
        await new Promise(r => setTimeout(r, 1000));
        await animate(-40, 25, { duration: 2, ease: "linear", onUpdate: v => setTemp(Math.round(v)) });
      }
    };
    cycle();
  }, []);

  return (
    <div className="w-full bg-white rounded-[2.5rem] border border-slate-200 shadow-xl p-8 lg:p-12 mt-10">
      <div className="text-center mb-10">
        <h3 className="font-display text-3xl font-extrabold text-slate-900 mb-2">MIL-STD Environmental Durability</h3>
        <p className="text-slate-600 font-medium">{envData.desc}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {/* Temp Gauge */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center text-center shadow-inner relative overflow-hidden">
          <Thermometer className={`w-8 h-8 mb-4 ${temp > 50 ? 'text-rose-500' : temp < 0 ? 'text-blue-500' : 'text-emerald-500'}`} />
          <div className="text-3xl font-black text-slate-900 font-mono mb-1">{temp}°C</div>
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Baseplate Temp</div>
        </div>
        {/* Vibration Gauge */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center text-center shadow-inner">
          <Waves className="w-8 h-8 text-amber-500 mb-4" />
          <div className="text-3xl font-black text-slate-900 font-mono mb-1">{vibration}G</div>
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Shock / Vibration</div>
        </div>
        {/* Altitude (Static) */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center text-center shadow-inner">
          <Mountain className="w-8 h-8 text-blue-500 mb-4" />
          <div className="text-3xl font-black text-slate-900 font-mono mb-1">30k</div>
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Altitude (Ft)</div>
        </div>
        {/* Dust (Static) */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center text-center shadow-inner">
          <Wind className="w-8 h-8 text-slate-500 mb-4" />
          <div className="text-3xl font-black text-slate-900 font-mono mb-1">IP6X</div>
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Ingress / Coating</div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
         {envData.specs.map((spec: string, i: number) => (
           <div key={i} className="px-4 py-2 bg-slate-800 text-white rounded-lg text-sm font-bold shadow-sm">
             {spec}
           </div>
         ))}
      </div>
    </div>
  );
};

// ==========================================
// 4. POWER RAIL APPLICATIONS GRID
// Invented Pattern: Plugged-in Industry Modules
// ==========================================
const PowerRailApplications = ({ apps }: { apps: any[] }) => {
  const getIcon = (name: string) => {
    if (name.includes("Defense")) return Radar;
    if (name.includes("Aerospace")) return Plane;
    if (name.includes("Marine")) return Ship;
    if (name.includes("Railways")) return Train;
    if (name.includes("Telecom")) return Radio;
    return Factory;
  };

  return (
    <div className="relative max-w-5xl mx-auto mt-12 py-10">
      {/* Central Power Rail (Vertical on mobile, horizontal on Desktop) */}
      <div className="absolute left-8 lg:left-0 lg:right-0 lg:top-1/2 lg:-translate-y-1/2 w-2 lg:w-full h-full lg:h-2 bg-amber-200 rounded-full flex items-center justify-center">
         <motion.div animate={{ x: ["-100%", "100%"], y: ["-100%", "100%"] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="w-full h-full lg:h-full lg:w-1/4 bg-amber-500 rounded-full blur-sm opacity-50" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-10 lg:gap-x-8 lg:gap-y-16 pl-20 lg:pl-0 relative z-10">
        {apps.map((app, i) => {
          const Icon = getIcon(app.name);
          return (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-3xl border-2 border-slate-200 shadow-lg relative group hover:border-amber-400 hover:-translate-y-2 transition-all cursor-default"
            >
              {/* Connector "Plug" to the rail */}
              <div className="absolute top-1/2 -translate-y-1/2 -left-12 lg:-left-auto lg:top-auto lg:-bottom-8 lg:left-1/2 lg:-translate-x-1/2 w-12 h-2 lg:w-2 lg:h-8 bg-slate-300 group-hover:bg-amber-400 transition-colors" />
              
              <div className="w-14 h-14 rounded-xl bg-slate-100 flex items-center justify-center mb-4 group-hover:bg-amber-50 transition-colors">
                <Icon className="w-7 h-7 text-slate-600 group-hover:text-amber-500 transition-colors" />
              </div>
              <h4 className="font-extrabold text-slate-900 text-lg mb-2">{app.name}</h4>
              <p className="text-sm font-medium text-slate-600">{app.desc}</p>
            </motion.div>
          )
        })}
      </div>
    </div>
  );
};

// // ==========================================
// // 5. SCANNING TECHNICAL SPECS MATRIX
// // ==========================================
// const ScanningSpecsMatrix = ({ specs }: { specs: any }) => {
//   if (!specs) return null;
//   const entries = Object.entries(specs);

//   return (
//     <div className="w-full bg-white rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden mt-10 max-w-5xl mx-auto relative">
//       <motion.div animate={{ left: ["-100%", "100%"] }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }} className="absolute h-full w-full bg-gradient-to-r from-transparent via-amber-100/30 to-transparent pointer-events-none opacity-40 z-20" />
      
//       <div className="bg-slate-50 px-8 py-5 border-b border-slate-200 flex items-center gap-3">
//         <Settings className="w-6 h-6 text-amber-500" />
//         <h3 className="font-display text-2xl font-extrabold text-slate-900">Comprehensive Specifications</h3>
//       </div>
//       <div className="grid md:grid-cols-2 gap-x-8 px-8 py-6 gap-y-2 relative z-10">
//         {entries.map(([param, spec], i) => (
//           <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between py-4 border-b border-slate-100 last:border-0 hover:bg-amber-50/50 transition-colors px-3 rounded-lg group">
//             <span className="text-xs font-extrabold text-slate-500 uppercase tracking-widest sm:w-1/2 mb-1 sm:mb-0 group-hover:text-amber-600 transition-colors">
//               {param}
//             </span>
//             <span className="text-sm font-bold text-slate-900 sm:w-1/2 sm:text-right">
//               {String(spec)}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// ==========================================
// 5. SCANNING TECHNICAL SPECS MATRIX (Upgraded)
// Autonomous sequential row highlighting 
// ==========================================
const ScanningSpecsMatrix = ({ specs }: { specs: any }) => {
  if (!specs) return null;
  const entries = Object.entries(specs);
  const [activeIndex, setActiveIndex] = useState(0);

  // Autonomous scanning effect
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % entries.length);
    }, 1500); // Moves down one row every 1.5 seconds
    return () => clearInterval(timer);
  }, [entries.length]);

  return (
    <div className="w-full bg-white rounded-[2.5rem] border border-slate-200 shadow-[0_15px_50px_-15px_rgba(245,158,11,0.2)] overflow-hidden mt-10 max-w-5xl mx-auto relative group">
      {/* Background scanner sweep */}
      <motion.div animate={{ left: ["-100%", "100%"] }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }} className="absolute h-full w-full bg-gradient-to-r from-transparent via-amber-50/50 to-transparent pointer-events-none opacity-60 z-0" />
      
      <div className="bg-slate-50 px-8 py-6 border-b border-slate-200 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-4">
          <div className="p-2.5 bg-amber-100 rounded-xl border border-amber-200 shadow-sm"><Settings className="w-6 h-6 text-amber-600" /></div>
          <h3 className="font-display text-2xl font-extrabold text-slate-900">Comprehensive Specifications</h3>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Auto-Scan Active</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-x-12 px-8 py-8 gap-y-3 relative z-10">
        {entries.map(([param, spec], i) => (
          <motion.div 
            key={i} 
            whileHover={{ scale: 1.02, backgroundColor: "rgba(254, 243, 199, 0.5)" }} // amber-50
            className={`flex flex-col sm:flex-row sm:items-center justify-between py-4 px-5 rounded-xl border transition-all duration-500 relative overflow-hidden ${activeIndex === i ? 'bg-amber-50 border-amber-200 shadow-sm scale-[1.01]' : 'bg-white border-transparent hover:border-amber-100'}`}
          >
            {/* Active Highlight Laser Line */}
            <div className={`absolute left-0 top-0 bottom-0 w-1.5 transition-colors duration-300 ${activeIndex === i ? 'bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.8)]' : 'bg-transparent'}`} />
            
            <span className={`text-xs font-extrabold uppercase tracking-widest sm:w-1/2 mb-1 sm:mb-0 transition-colors duration-300 ${activeIndex === i ? 'text-amber-700' : 'text-slate-500 group-hover:text-amber-600'}`}>
              {param}
            </span>
            <span className={`text-sm font-bold sm:w-1/2 sm:text-right transition-colors duration-300 ${activeIndex === i ? 'text-slate-900' : 'text-slate-700'}`}>
              {String(spec)}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// ==========================================
// MAIN PAGE COMPONENT
// ==========================================
const AcDcSystemPageLow = () => {
  const product = productsData["ac-dc-system-low"];
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [200, 300], [0, 1]);

  if (!product) return <div className="min-h-screen bg-slate-50"><Navbar /></div>;

  return (
    <PageTransition>
      <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-amber-200 selection:text-amber-900">
        <Navbar />

        {/* STICKY HEADER */}
        <div className="sticky z-30 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm" style={{ top: '64px' }}>
          <div className="container py-3 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
              <Link to="/" className="hover:text-amber-600 transition-colors">Home</Link> <span>/</span>
              <Link to="/products" className="hover:text-amber-600 transition-colors">Catalogue</Link> <span>/</span>
              <span className="hidden sm:inline-block cursor-default">{product.category}</span> <span className="hidden sm:inline-block">/</span>
              <span className="text-amber-600 font-bold">AC-DC System (Low Power)</span>
            </div>
            <motion.div style={{ opacity: headerOpacity }} className="flex items-center gap-4 pointer-events-none">
              <span className="hidden lg:block font-display font-bold text-slate-900">AC-DC 6kW Series</span>
              <button className="px-5 py-2.5 rounded-xl font-bold text-white bg-amber-500 text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all pointer-events-auto">
                Request Quote
              </button>
            </motion.div>
          </div>
        </div>
        
        <main className="pt-4 lg:pt-6">
          
          {/* HERO SECTION (Split like Products, but Industrial Pattern) */}
          <section className="container pb-16 overflow-hidden relative">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start relative z-10">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="pt-2 lg:pt-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-100 text-amber-700 text-[10px] font-extrabold uppercase tracking-widest mb-4">
                  <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" /> Mission Critical Power
                </div>
                <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-black text-slate-900 mb-3 tracking-tight uppercase leading-[1.05]">
                  {product.name}
                </h1>
                <p className="text-2xl text-amber-600 font-black mb-4 uppercase tracking-wide">{product.subtitle}</p>
                <p className="text-lg font-bold text-slate-700 border-l-4 border-amber-500 pl-4 mb-6">{product.tagline}</p>
                
                <div className="space-y-4 mb-8">
                  {product.overview?.map((p: string, i: number) => (
                    <motion.p key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="text-base text-slate-600 leading-relaxed font-medium">{p}</motion.p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <button className="group px-8 py-4 rounded-xl font-black text-slate-900 bg-amber-400 shadow-[0_10px_20px_rgba(245,158,11,0.3)] hover:shadow-[0_15px_30px_rgba(245,158,11,0.5)] transition-all duration-300 flex items-center gap-2 hover:-translate-y-1 uppercase tracking-wide">
                    Get a Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="px-8 py-4 rounded-xl font-bold text-slate-700 bg-white border-2 border-slate-200 hover:border-amber-400 hover:bg-amber-50 transition-all duration-300 flex items-center gap-2 shadow-sm hover:-translate-y-1">
                    <Download className="w-5 h-5 text-amber-500" /> Full Specs
                  </button>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative w-full aspect-[4/3] flex items-center justify-center mt-8 lg:mt-0">
                {/* Circuit Board Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#fde68a_0%,transparent_70%)] opacity-40 pointer-events-none" />
                <div className="absolute inset-4 border-2 border-slate-100 rounded-[3rem] dashed pointer-events-none" />
                
                <div className="relative w-full h-full rounded-[2.5rem] bg-white border border-slate-200 shadow-2xl p-8 flex items-center justify-center group overflow-hidden">
                   <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute -right-20 -top-20 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-50" />
                   <img src={product.heroImage} alt="AC-DC Converter" className="w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700 relative z-10 max-h-[350px]" />
                </div>
              </motion.div>
            </div>
          </section>

          {/* TELEMETRY: OSCILLOSCOPE */}
          <section className="py-16 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
            <div className="container relative z-10">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <span className="text-amber-500 font-extrabold tracking-widest uppercase text-xs mb-2 block">Real-time Optimization</span>
                <h2 className="font-display text-3xl font-black text-slate-900 uppercase tracking-tight">Power Conversion Telemetry</h2>
              </div>
              <div className="max-w-6xl mx-auto">
                <OscilloscopeTelemetry />
              </div>
            </div>
          </section>

          {/* ASYMMETRIC BENTO GRID (Key Features, Design, Protection) */}
          <section className="py-16 relative overflow-hidden bg-white">
            <div className="container max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <span className="text-blue-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">System Architecture</span>
                <h2 className="font-display text-3xl font-black text-slate-900 uppercase tracking-tight">Mission Critical Design</h2>
                <p className="text-base text-slate-600 font-medium max-w-3xl mx-auto mt-4">Engineered from the ground up to provide clean, isolated power to sensitive instrumentation and heavy industrial loads.</p>
              </div>
              <MissionCriticalBento data={product} />
            </div>
          </section>

          {/* ENVIRONMENTAL STRESS TEST */}
          <section className="py-16 bg-slate-50 border-y border-slate-200 relative">
            <div className="container max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <span className="text-emerald-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">Ruggedized Standards</span>
                <h2 className="font-display text-3xl font-black text-slate-900 uppercase tracking-tight">Environmental Performance</h2>
              </div>
              <EnvironmentalStressTest envData={product.environmental} />
            </div>
          </section>

          {/* TECHNICAL SPECIFICATIONS MATRIX */}
          <section className="py-16 bg-white relative">
            <div className="container max-w-6xl mx-auto">
              <div className="text-center mb-8 relative">
                <span className="text-rose-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">Full Data Matrix</span>
                <h2 className="font-display text-3xl font-black text-slate-900 uppercase tracking-tight">Technical Specifications</h2>
              </div>
              <ScanningSpecsMatrix specs={product.technicalSpecifications} />
            </div>
          </section>

          {/* POWER RAIL APPLICATIONS */}
          <section className="py-16 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
            <div className="container max-w-6xl mx-auto relative z-10">
              <div className="text-center mb-4">
                <span className="text-amber-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">Deployed Ecosystem</span>
                <h2 className="font-display text-3xl font-black text-slate-900 uppercase tracking-tight">Industrial & Defense Applications</h2>
              </div>
              <PowerRailApplications apps={product.applications} />
            </div>
          </section>

          {/* HIGH POWER TIER CALLOUT (Sleek Banner) */}
          {/* <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.15)_0%,transparent_50%)] pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-amber-500/10 skew-x-12 transform translate-x-1/2 pointer-events-none" />
            
            <div className="container max-w-5xl mx-auto text-center relative z-10">
              <div className="w-20 h-20 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg border border-slate-700 transform rotate-3">
                <BatteryCharging className="w-10 h-10 text-amber-500 transform -rotate-3" />
              </div>
              <span className="text-amber-500 font-extrabold tracking-widest uppercase text-sm mb-4 block">Require Mission-Critical Capacity?</span>
              <h2 className="font-display text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">{product.highPowerTier?.title}</h2>
              <p className="text-xl font-bold text-slate-300 max-w-2xl mx-auto mb-10">{product.highPowerTier?.desc}</p>
              
              <button className="px-10 py-4 rounded-xl font-black text-slate-900 bg-amber-400 hover:bg-amber-300 hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] hover:-translate-y-1 transition-all uppercase tracking-wider flex items-center gap-3 mx-auto">
                Explore High Power Systems <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </section> */}

          {/* HIGH POWER TIER CALLOUT (Strict Light Theme, Vibrant Animations) */}
          <section className="py-24 bg-gradient-to-br from-amber-50 via-white to-emerald-50 border-y border-amber-200 relative overflow-hidden">
            {/* Animated Light Pattern */}
            <motion.div animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.1)_2px,transparent_2px)] bg-[size:40px_40px] pointer-events-none" />
            
            {/* Soft background light blooms */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-emerald-100/40 to-transparent pointer-events-none blur-3xl" />
            <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-amber-100/40 to-transparent pointer-events-none blur-3xl" />

            <div className="container max-w-5xl mx-auto text-center relative z-10">
              <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="w-24 h-24 bg-white rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-xl border border-amber-200 transform rotate-3">
                <BatteryCharging className="w-12 h-12 text-amber-500 transform -rotate-3" />
              </motion.div>
              
              <span className="text-emerald-700 font-extrabold tracking-widest uppercase text-sm mb-6 block bg-emerald-100/60 w-fit mx-auto px-5 py-2 rounded-full border border-emerald-200 backdrop-blur-sm shadow-sm">
                Require Mission-Critical Capacity?
              </span>
              
              <h2 className="font-display text-5xl md:text-6xl lg:text-[4.5rem] font-black text-slate-900 mb-6 uppercase tracking-tight">
                {product.highPowerTier?.title}
              </h2>
              
              <p className="text-xl md:text-2xl font-bold text-slate-600 max-w-3xl mx-auto leading-relaxed">
                {product.highPowerTier?.desc}
              </p>
              
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-12 px-10 py-5 rounded-2xl font-black text-white bg-gradient-to-r from-amber-500 to-emerald-500 shadow-[0_10px_30px_rgba(245,158,11,0.4)] hover:shadow-[0_15px_40px_rgba(16,185,129,0.5)] transition-all uppercase tracking-wider flex items-center gap-3 mx-auto border-2 border-white/50">
                Explore High Power Systems <ArrowRight className="w-6 h-6 text-white" />
              </motion.button>
            </div>
          </section>


          {/* SPEAK TO AN ENGINEER */}
          <section className="container py-16">
            <div className="bg-white rounded-[3rem] p-8 lg:p-16 flex flex-col lg:flex-row gap-12 items-center justify-between shadow-xl border border-slate-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.1)_0%,transparent_60%)] pointer-events-none" />
              
              <div className="lg:w-1/2 relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-[10px] font-extrabold tracking-widest uppercase mb-6 shadow-sm"><div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" /> Direct Engineering Line</div>
                <h2 className="font-display text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight uppercase">Speak to a <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">Power Expert</span></h2>
                <p className="text-lg text-slate-600 font-bold mb-10">CRYONANO's industrial systems engineers are available to answer your questions. Discuss custom voltage configurations, MIL-STD compliance, and rack integrations today.</p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-4 rounded-xl font-black text-slate-900 bg-amber-400 shadow-[0_4px_14px_rgba(245,158,11,0.3)] hover:shadow-lg hover:-translate-y-0.5 transition-all uppercase tracking-wide">Request Consultation</button>
                </div>
              </div>

              <div className="lg:w-5/12 flex flex-col gap-6 w-full relative z-10">
                <div className="bg-slate-50 rounded-3xl p-6 flex items-center gap-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer border border-slate-200 hover:border-amber-400 group">
                  <div className="w-14 h-14 rounded-2xl border border-slate-200 bg-white flex items-center justify-center shrink-0 group-hover:bg-amber-50 transition-colors"><Phone className="w-6 h-6 text-slate-500 group-hover:text-amber-500 transition-colors" /></div>
                  <div><p className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest mb-1.5">Call Us Directly</p><p className="text-2xl font-black text-slate-900">+91 97481 81485</p></div>
                </div>
                <div className="bg-slate-50 rounded-3xl p-6 flex items-center gap-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer border border-slate-200 hover:border-amber-400 group">
                  <div className="w-14 h-14 rounded-2xl border border-slate-200 bg-white flex items-center justify-center shrink-0 group-hover:bg-amber-50 transition-colors"><Mail className="w-6 h-6 text-slate-500 group-hover:text-amber-500 transition-colors" /></div>
                  <div><p className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest mb-1.5">Email Engineering</p><p className="text-xl font-black text-slate-900">contact@cryonano.com</p></div>
                </div>
              </div>
            </div>
          </section>

          {/* BOTTOM NAVIGATION */}
          <section className="border-t border-slate-200 bg-white py-6">
            <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-amber-600 transition-colors px-4 py-2 rounded-lg hover:bg-amber-50">
                <ArrowLeft className="w-4 h-4" /> Back to Homepage
              </Link>
              <Link to="/products" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-amber-600 transition-colors px-4 py-2 rounded-lg hover:bg-amber-50">
                Return to Solutions Catalog <ArrowRight className="w-4 h-4" />
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

export default AcDcSystemPageLow;