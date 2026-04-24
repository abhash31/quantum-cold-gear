import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { motion, AnimatePresence, useScroll, useTransform, animate } from "framer-motion";
import { 
  ArrowLeft, ArrowRight, Download, Phone, Mail, 
  Zap, ShieldAlert, Activity, Cpu, ArrowUp, 
  CheckCircle2, Radar, Plane, Ship, Train, Radio, Factory, 
  Network, Server, Settings, Thermometer, Waves
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
// 1. UNDERSTANDABLE TELEMETRY: LOAD SHARING TOPOLOGY
// Highly professional block diagram showing load balancing
// ==========================================
const LoadSharingTopology = ({ telemetry }: { telemetry: any }) => {
  const [totalAmps, setTotalAmps] = useState(0);

  useEffect(() => {
    animate(0, telemetry?.totalAmps || 600, { duration: 3, ease: "easeOut", onUpdate: v => setTotalAmps(Math.round(v)) });
  }, [telemetry]);

  if (!telemetry) return null;

  return (
    <div className="w-full bg-white rounded-[2rem] border border-slate-200 shadow-xl p-8 relative overflow-hidden flex flex-col items-center">
      {/* Subtle blueprint grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      
      <div className="flex w-full items-center justify-between gap-4 relative z-10">
        
        {/* INPUT SOURCE */}
        <div className="w-1/6 flex flex-col items-center">
          <div className="w-20 h-20 bg-slate-50 border-2 border-slate-200 rounded-2xl flex flex-col items-center justify-center shadow-sm relative overflow-hidden">
            <motion.div animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0 bg-amber-100" />
            <Zap className="w-6 h-6 text-amber-500 mb-1 relative z-10" />
            <span className="text-[10px] font-black text-slate-700 font-mono relative z-10">{telemetry.voltageIn}V</span>
          </div>
          <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-3 text-center">HVDC Input<br/>Source</div>
        </div>

        {/* DISTRIBUTION BUS (Animated Lines) */}
        <div className="flex-grow h-1 bg-slate-200 relative rounded-full">
           <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} className="absolute top-0 bottom-0 w-1/4 bg-amber-400 blur-[2px] rounded-full" />
        </div>

        {/* PARALLEL MODULES */}
        <div className="w-1/2 grid grid-cols-2 gap-4">
          {telemetry.modules.slice(0, 4).map((mod: any, i: number) => {
            const isStandby = mod.status === "HOT STANDBY";
            return (
              <motion.div key={i} whileHover={{ scale: 1.05 }} className={`bg-white border p-4 rounded-xl flex items-center justify-between shadow-sm ${isStandby ? 'border-slate-200' : 'border-sky-200'}`}>
                <div>
                  <h5 className="font-mono text-xs font-black text-slate-800">{mod.id}</h5>
                  <span className={`text-[8px] font-extrabold uppercase px-1.5 py-0.5 rounded ${isStandby ? 'bg-slate-100 text-slate-500' : 'bg-emerald-50 text-emerald-600'}`}>{mod.status}</span>
                </div>
                <div className="text-right">
                  <div className="font-mono text-sm font-black text-slate-900">{mod.amps.toFixed(1)}A</div>
                  <div className="w-16 h-1.5 bg-slate-100 rounded-full mt-1 overflow-hidden">
                     <motion.div animate={{ width: `${mod.loadPct}%` }} className={`h-full rounded-full ${isStandby ? 'bg-slate-300' : 'bg-sky-500'}`} />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* OUTPUT BUS (Animated Lines) */}
        <div className="flex-grow h-1 bg-slate-200 relative rounded-full">
           <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.5 }} className="absolute top-0 bottom-0 w-1/4 bg-emerald-400 blur-[2px] rounded-full" />
        </div>

        {/* SYSTEM OUTPUT */}
        <div className="w-1/6 flex flex-col items-center">
          <div className="w-24 h-24 bg-white border-2 border-emerald-300 rounded-2xl flex flex-col items-center justify-center shadow-lg relative overflow-hidden">
            <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 3, repeat: Infinity }} className="absolute inset-0 bg-emerald-200 rounded-full" />
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest relative z-10 mb-1">Total Sync</span>
            <span className="text-xl font-black text-slate-900 font-mono relative z-10">{totalAmps}A</span>
            <span className="text-xs font-bold text-emerald-600 font-mono relative z-10 mt-1">{telemetry.voltageOut}V</span>
          </div>
        </div>

      </div>
    </div>
  );
};

// ==========================================
// 2. PROFESSIONAL ARCHITECTURE GRID
// Clean hover-reveal enterprise cards
// ==========================================
const EnterpriseArchitectureGrid = ({ data }: { data: any }) => {
  if (!data) return null;
  const metrics = [
    { title: data.powerScaling.title, specs: data.powerScaling.data, icon: Zap, color: "sky" },
    { title: data.redundancy.title, specs: data.redundancy.data, icon: Server, color: "emerald" },
    { title: data.inputFlex.title, specs: data.inputFlex.data, icon: Factory, color: "amber" },
    { title: data.cooling.title, specs: data.cooling.data, icon: Activity, color: "indigo" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
      {metrics.map((item, i) => {
        const Icon = item.icon;
        return (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`group bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-${item.color}-300 transition-all duration-500 relative overflow-hidden flex flex-col items-center text-center`}
          >
             {/* Autonomous Background Pulse */}
             <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0, 0.05, 0] }} transition={{ duration: 4, repeat: Infinity, delay: i }} className={`absolute inset-0 bg-${item.color}-500 rounded-full`} />
             
             <div className={`w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 border border-slate-100 group-hover:bg-${item.color}-50 group-hover:scale-110 transition-all duration-300`}>
               <Icon className={`w-8 h-8 text-slate-400 group-hover:text-${item.color}-600 transition-colors`} />
             </div>
             <h4 className="text-xl font-extrabold text-slate-900 mb-4">{item.title}</h4>
             
             <div className="w-full flex-grow relative">
               <ul className="space-y-3 text-sm font-medium text-slate-600 relative z-10">
                 {item.specs.map((spec: string, idx: number) => (
                   <li key={idx} className="flex items-center justify-center gap-2">
                     <div className={`w-1.5 h-1.5 rounded-full bg-${item.color}-400 opacity-0 group-hover:opacity-100 transition-opacity`} />
                     {spec}
                   </li>
                 ))}
               </ul>
             </div>
          </motion.div>
        )
      })}
    </div>
  );
};

// ==========================================
// 3. ENVIRONMENTAL DASHBOARD
// Clean, professional diagnostic gauges
// ==========================================
const EnvironmentalDashboard = ({ envData }: { envData: any }) => {
  const [temp, setTemp] = useState(25);
  const [vibe, setVibe] = useState(0);

  useEffect(() => {
    const cycle = async () => {
      while (true) {
        animate(25, 60, { duration: 3, onUpdate: v => setTemp(Math.round(v)) });
        animate(0, 40, { duration: 2, onUpdate: v => setVibe(Math.round(v)) });
        await new Promise(r => setTimeout(r, 3500));
        animate(60, -20, { duration: 4, onUpdate: v => setTemp(Math.round(v)) });
        animate(40, 10, { duration: 2, onUpdate: v => setVibe(Math.round(v)) });
        await new Promise(r => setTimeout(r, 4500));
        await animate(-20, 25, { duration: 2, onUpdate: v => setTemp(Math.round(v)) });
      }
    };
    cycle();
  }, []);

  return (
    <div className="w-full bg-slate-50 rounded-[3rem] border border-slate-200 shadow-inner p-8 lg:p-12 mt-10">
      <div className="grid lg:grid-cols-3 gap-10 items-center">
        
        {/* Title and Specs */}
        <div className="lg:col-span-1">
          <h3 className="font-display text-3xl font-extrabold text-slate-900 mb-4">MIL-STD Durability</h3>
          <div className="space-y-3">
            {envData?.validatedSpecs?.map((spec: string, i: number) => (
              <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-xl border border-slate-100 shadow-sm">
                <ShieldAlert className="w-4 h-4 text-emerald-500" />
                <span className="text-sm font-bold text-slate-700">{spec}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gauges */}
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
           <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm flex flex-col items-center relative overflow-hidden group">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute -top-10 -right-10 w-32 h-32 bg-sky-50 rounded-full blur-2xl" />
              <Thermometer className={`w-10 h-10 mb-4 ${temp > 45 ? 'text-rose-500' : temp < 0 ? 'text-sky-500' : 'text-emerald-500'}`} />
              <div className="text-5xl font-black text-slate-900 font-mono mb-2">{temp}°C</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Thermal Chamber Test</div>
           </div>
           
           <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm flex flex-col items-center relative overflow-hidden group">
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute -bottom-10 -left-10 w-32 h-32 bg-amber-50 rounded-full blur-2xl" />
              <Waves className="w-10 h-10 mb-4 text-amber-500" />
              <div className="text-5xl font-black text-slate-900 font-mono mb-2">{vibe}G</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Shock / Vibe Profile</div>
           </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 4. STRUCTURED CONTROL PLANE VISUALIZER
// Clean network flow mimicking enterprise software
// ==========================================
const StructuredControlPlane = ({ interfaces }: { interfaces: any[] }) => {
  const [activeNode, setActiveNode] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveNode(prev => (prev + 1) % interfaces.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [interfaces.length]);

  return (
    <div className="w-full bg-white rounded-[3rem] border border-slate-200 p-10 lg:p-16 mt-12 relative overflow-hidden flex flex-col items-center shadow-lg">
      <div className="text-center max-w-3xl mx-auto mb-12 relative z-10">
        <h3 className="font-display text-3xl font-extrabold text-slate-900 mb-2">Industrial Control Protocols</h3>
        <p className="text-slate-600 font-medium">Seamless Master/Slave orchestration interfacing securely with plant SCADA systems.</p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-8 relative z-10">
        {/* Nodes */}
        <div className="flex flex-col gap-4 w-full lg:w-1/3">
          {interfaces.map((int, i) => (
            <div key={i} className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-500 ${activeNode === i ? 'bg-sky-50 border-sky-300 shadow-md scale-105' : 'bg-slate-50 border-slate-200 opacity-60'}`}>
               <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${activeNode === i ? 'bg-sky-500 text-white' : 'bg-slate-200 text-slate-500'}`}>
                 <Network className="w-6 h-6" />
               </div>
               <div>
                 <h4 className="font-extrabold text-slate-900">{int.name}</h4>
                 <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{int.type}</p>
               </div>
            </div>
          ))}
        </div>

        {/* Connecting visual */}
        <div className="w-full lg:w-1/4 flex justify-center py-8 lg:py-0">
           <div className="w-full max-w-[150px] h-1.5 bg-slate-100 rounded-full relative overflow-hidden">
             <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="absolute top-0 bottom-0 w-1/2 bg-sky-400 rounded-full" />
           </div>
        </div>

        {/* Central Controller */}
        <div className="w-full lg:w-1/3 flex flex-col items-center bg-slate-50 border border-slate-200 p-8 rounded-[2rem] shadow-sm">
           <div className="relative w-24 h-24 mb-6">
             <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-4 border-dashed border-sky-300 rounded-full" />
             <div className="absolute inset-2 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-md">
               <Cpu className="w-8 h-8 text-sky-600" />
             </div>
           </div>
           <h4 className="font-extrabold text-slate-900 text-xl mb-2">Master Controller</h4>
           <div className="bg-emerald-50 text-emerald-700 font-mono text-xs font-bold px-3 py-1.5 rounded-lg border border-emerald-200 flex items-center gap-2">
             <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" /> Sync Active ({interfaces[activeNode]?.latency})
           </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 5. SCANNING TECH MATRIX (Professional Data Table)
// ==========================================
const ProfessionalTechMatrix = ({ specs }: { specs: any }) => {
  if (!specs) return null;
  const entries = Object.entries(specs);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % entries.length);
    }, 1500); 
    return () => clearInterval(timer);
  }, [entries.length]);

  return (
    <div className="w-full bg-white rounded-[2.5rem] border border-slate-200 shadow-xl overflow-hidden mt-12 max-w-5xl mx-auto relative group">
      {/* Background scanner sweep */}
      <motion.div animate={{ top: ["-100%", "100%"] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="absolute w-full h-1/2 bg-gradient-to-b from-transparent via-sky-50/50 to-transparent pointer-events-none opacity-60 z-0" />
      
      <div className="bg-slate-50 px-8 py-6 border-b border-slate-200 flex items-center justify-between relative z-10">
        <h3 className="font-display text-2xl font-extrabold text-slate-900 flex items-center gap-3">
          <Settings className="w-6 h-6 text-sky-600" /> Hardware Specifications
        </h3>
        <div className="hidden sm:flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
          <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Diagnostic Sweep</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-x-12 px-8 py-8 gap-y-2 relative z-10">
        {entries.map(([param, spec], i) => (
          <div key={i} className={`flex flex-col sm:flex-row sm:items-center justify-between py-3 px-5 rounded-xl border transition-all duration-500 relative overflow-hidden ${activeIndex === i ? 'bg-sky-50 border-sky-200 shadow-sm' : 'bg-white border-transparent hover:border-slate-100 hover:bg-slate-50'}`}>
            <div className={`absolute left-0 top-0 bottom-0 w-1 transition-colors duration-300 ${activeIndex === i ? 'bg-sky-500' : 'bg-transparent'}`} />
            <span className="text-xs font-extrabold uppercase tracking-widest sm:w-1/2 mb-1 sm:mb-0 text-slate-500">
              {param}
            </span>
            <span className={`text-sm font-bold sm:w-1/2 sm:text-right transition-colors duration-300 ${activeIndex === i ? 'text-sky-800' : 'text-slate-800'}`}>
              {String(spec)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// ==========================================
// 6. ENHANCED ACCORDION APPLICATIONS
// Deeply structured, animated on hover, high-contrast text
// ==========================================
const EnhancedAccordionApplications = ({ apps }: { apps: any[] }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);

  return (
    <div className="flex flex-col lg:flex-row h-[700px] lg:h-[450px] w-full gap-4 mt-12 max-w-7xl mx-auto">
      {apps.map((app, i) => {
        const isHovered = hoveredIndex === i;
        const Icon = app.icon || Factory;

        return (
          <motion.div
            key={i}
            onHoverStart={() => setHoveredIndex(i)}
            animate={{ flex: isHovered ? 4 : 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`relative overflow-hidden rounded-[2rem] border-2 cursor-pointer flex flex-col justify-end transition-all duration-500 ${isHovered ? 'border-sky-400 shadow-2xl' : 'border-slate-200 shadow-sm'}`}
          >
             {/* Dynamic Backgrounds */}
             <div className="absolute inset-0 bg-slate-50 z-0" />
             <motion.div animate={{ opacity: isHovered ? 1 : 0 }} className="absolute inset-0 bg-gradient-to-br from-sky-500 to-indigo-600 z-0 transition-opacity duration-500" />
             
             {/* Large background icon decoration */}
             <Icon className={`absolute -right-10 -top-10 w-56 h-56 transition-all duration-700 pointer-events-none z-0 ${isHovered ? 'text-white opacity-20 scale-110' : 'text-slate-200 opacity-50 scale-100'}`} />
             
             {/* Content */}
             <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-end">
               <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-500 border ${isHovered ? 'bg-white border-white/20 shadow-lg' : 'bg-white border-slate-200'}`}>
                 <Icon className={`w-7 h-7 transition-colors duration-500 ${isHovered ? 'text-sky-600' : 'text-slate-400'}`} />
               </div>
               
               <h4 className={`font-display font-black uppercase transition-colors duration-500 ${isHovered ? 'text-3xl text-white mb-3 tracking-tight' : 'text-lg text-slate-700 truncate'}`}>
                 {app.name}
               </h4>
               
               <AnimatePresence>
                 {isHovered && (
                   <motion.div initial={{ opacity: 0, y: 10, height: 0 }} animate={{ opacity: 1, y: 0, height: "auto" }} exit={{ opacity: 0, y: 10, height: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                     <p className="text-sky-50 font-medium text-sm md:text-base leading-relaxed border-l-2 border-sky-300 pl-4 mt-2">
                       {app.desc}
                     </p>
                   </motion.div>
                 )}
               </AnimatePresence>
             </div>
          </motion.div>
        );
      })}
    </div>
  );
};


// ==========================================
// 9. FIXED FOOTER TELEMETRY (Sequential Relay Pattern)
// Autonomous highlight cycling without marquee scrolling
// ==========================================
const SequentialFooterRelay = ({ footers }: { footers: string[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!footers || footers.length === 0) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % footers.length);
    }, 3000); // Cycles every 3 seconds
    return () => clearInterval(timer);
  }, [footers]);

  if (!footers) return null;

  return (
    <section className="bg-slate-50 py-12 overflow-hidden relative border-t border-slate-200 shadow-inner">
       {/* Background subtle technical grid */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px] opacity-50 pointer-events-none" />

       <div className="container max-w-6xl mx-auto relative z-10">
         {/* Background connecting power line (Hidden on mobile) */}
         <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 rounded-full hidden md:block z-0" />

         {/* Travelling Energy Pulse flowing through the line */}
         <div className="absolute top-1/2 left-0 w-full h-1 -translate-y-1/2 rounded-full hidden md:block overflow-hidden z-0">
            <motion.div
              animate={{ x: ["-100%", "300%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="w-1/3 h-full bg-gradient-to-r from-transparent via-sky-400 to-transparent"
            />
         </div>

         {/* Fixed Grid for the 3 tags */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
           {footers.slice(0, 3).map((footer, i) => {
             const isActive = activeIndex === i;
             return (
               <motion.div
                 key={i}
                 animate={{ y: isActive ? -8 : 0 }}
                 className={`flex flex-col items-center text-center p-6 rounded-3xl border transition-all duration-500 bg-white ${isActive ? 'border-sky-300 shadow-[0_15px_40px_rgba(14,165,233,0.15)]' : 'border-slate-200 shadow-sm'}`}
               >
                 {/* Icon container with autonomous spin when active */}
                 <div className={`relative w-14 h-14 rounded-2xl flex items-center justify-center mb-5 border transition-all duration-500 ${isActive ? 'bg-sky-50 border-sky-200 scale-110' : 'bg-slate-50 border-slate-100'}`}>
                    <Settings className={`w-7 h-7 transition-colors duration-500 ${isActive ? 'text-sky-500' : 'text-slate-400'}`} />
                    {isActive && (
                       <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-2xl border-2 border-dashed border-sky-400 opacity-60" />
                    )}
                 </div>

                 {/* Text */}
                 <span className={`text-sm font-black tracking-widest uppercase transition-colors duration-500 ${isActive ? 'text-slate-900' : 'text-slate-500'}`}>
                   {footer}
                 </span>

                 {/* Status LED Bar */}
                 <div className={`mt-5 w-16 h-1.5 rounded-full transition-all duration-500 ${isActive ? 'bg-sky-500 shadow-[0_0_10px_rgba(14,165,233,0.8)]' : 'bg-slate-200'}`} />
               </motion.div>
             )
           })}
         </div>
       </div>
    </section>
  );
}

// ==========================================
// MAIN PAGE COMPONENT
// ==========================================
const DcDcSystemPageHigh = () => {
  const product = productsData["dc-dc-system-high"];
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [200, 300], [0, 1]);

  // Hero Image Carousel State
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const heroImages = [
    product?.heroImage,
    "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop", // Professional placeholder 1
    "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=1000&auto=format&fit=crop"  // Professional placeholder 2
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 3500); 
    return () => clearInterval(timer);
  }, [heroImages.length]);

  if (!product) return <div className="min-h-screen bg-slate-50"><Navbar /></div>;

  return (
    <PageTransition>
      <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-sky-200 selection:text-sky-900">
        <Navbar />

        {/* STICKY HEADER */}
        <div className="sticky z-30 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm" style={{ top: '64px' }}>
          <div className="container py-3 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
              <Link to="/" className="hover:text-sky-600 transition-colors">Home</Link> <span>/</span>
              <Link to="/products" className="hover:text-sky-600 transition-colors">Catalogue</Link> <span>/</span>
              <span className="hidden sm:inline-block cursor-default">{product.category}</span> <span className="hidden sm:inline-block">/</span>
              <span className="text-sky-600 font-bold">DC-DC System (High Power)</span>
            </div>
            <motion.div style={{ opacity: headerOpacity }} className="flex items-center gap-4 pointer-events-none">
              <span className="hidden lg:block font-display font-bold text-slate-900 uppercase">DC-DC 30kW</span>
              <button className="px-5 py-2.5 rounded-xl font-bold text-white bg-sky-500 text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all pointer-events-auto">
                Request Quote
              </button>
            </motion.div>
          </div>
        </div>
        
        <main className="pt-4 lg:pt-6 relative">
          
          {/* 1. PROFESSIONAL HERO SECTION (Left Text, Right Carousel) */}
          <section className="container pb-16 overflow-hidden relative border-b border-slate-100">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
              
              {/* Left side: Structured Typography */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="pt-2 lg:pt-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-sky-50 border border-sky-100 text-sky-700 text-[10px] font-extrabold uppercase tracking-widest mb-4">
                  <div className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" /> Mission Critical Density
                </div>
                <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 mb-3 tracking-tight uppercase leading-[1.05]">
                  {product.name}
                </h1>
                <p className="text-2xl text-sky-600 font-black mb-4 uppercase tracking-wide">{product.subtitle}</p>
                <p className="text-lg font-bold text-slate-700 border-l-4 border-emerald-500 pl-4 mb-6">{product.tagline}</p>
                
                <div className="space-y-4 mb-8">
                  {product.overview?.map((p: string, i: number) => (
                    <motion.p key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="text-base text-slate-600 leading-relaxed font-medium">{p}</motion.p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <button className="group px-8 py-4 rounded-xl font-black text-white bg-sky-500 shadow-[0_4px_14px_rgba(14,165,233,0.3)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 uppercase tracking-wide">
                    Configure System <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="px-8 py-4 rounded-xl font-bold text-slate-700 bg-white border-2 border-slate-200 hover:border-sky-400 hover:bg-sky-50 transition-all duration-300 flex items-center gap-2 shadow-sm hover:-translate-y-1">
                    <Download className="w-5 h-5 text-sky-500" /> Full Specs
                  </button>
                </div>
              </motion.div>

              {/* Right side: Multi-Image Swap Box */}
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative w-full aspect-[4/3] flex items-center justify-center mt-8 lg:mt-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#f1f5f9_0%,transparent_70%)] opacity-40 pointer-events-none" />
                
                <div className="relative w-full h-full rounded-[2.5rem] bg-white border border-slate-200 shadow-xl p-8 flex items-center justify-center group overflow-hidden">
                   <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute -right-20 -top-20 w-80 h-80 bg-sky-50 rounded-full blur-3xl opacity-50" />
                   
                   <AnimatePresence mode="wait">
                     <motion.img 
                        key={currentHeroImage}
                        src={heroImages[currentHeroImage]} 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                        alt="DC-DC System Visual" 
                        className="w-full object-contain mix-blend-multiply relative z-10 max-h-[350px]" 
                     />
                   </AnimatePresence>

                   {/* Clean Carousel Indicators */}
                   <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
                     {heroImages.map((_, i) => (
                       <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${currentHeroImage === i ? "w-6 bg-sky-500" : "w-1.5 bg-slate-200"}`} />
                     ))}
                   </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* 2. TELEMETRY: UNDERSTANDABLE LOAD SHARING TOPOLOGY */}
          <section className="py-20 bg-slate-50 relative overflow-hidden border-b border-slate-200">
            <div className="container relative z-10">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-sky-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">Autonomous load balancing</span>
                <h2 className="font-display text-4xl font-black text-slate-900 uppercase tracking-tight">Active Current Sharing Topology</h2>
              </div>
              <div className="max-w-6xl mx-auto">
                <LoadSharingTopology telemetry={product.modulePulse} />
              </div>
            </div>
          </section>

          {/* 3. ARCHITECTURE: PROFESSIONAL GRID */}
          <section className="py-20 relative overflow-hidden bg-white">
            <div className="container max-w-6xl mx-auto">
              <div className="text-center mb-4">
                <span className="text-emerald-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">Promising High Density</span>
                <h2 className="font-display text-4xl font-black text-slate-900 uppercase tracking-tight">Mission Critical Architecture</h2>
              </div>
              <EnterpriseArchitectureGrid data={product.systemArchitecture} />
            </div>
          </section>

          {/* 4. ENVIRONMENTAL: PROFESSIONAL DASHBOARD */}
          <section className="py-20 bg-slate-50 border-y border-slate-200 relative">
            <div className="container max-w-6xl mx-auto">
              <div className="text-center mb-4">
                <span className="text-amber-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">Severe Environments</span>
                <h2 className="font-display text-4xl font-black text-slate-900 uppercase tracking-tight">Rugged Operational Resilience</h2>
              </div>
              <EnvironmentalDashboard envData={product.environmental} />
            </div>
          </section>

          {/* 5. CONTROL PLANE: STRUCTURED FLOW */}
          <section className="py-20 bg-white relative">
            <div className="container max-w-6xl mx-auto relative z-10">
              <div className="text-center mb-4">
                <span className="text-indigo-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">Master Control Plan</span>
                <h2 className="font-display text-4xl font-black text-slate-900 uppercase tracking-tight">Industrial Sync & Control</h2>
              </div>
              <StructuredControlPlane interfaces={product.controlInterfaces} />
            </div>
          </section>

          {/* 6. TECHNICAL SPECIFICATIONS (Table Scanner) */}
          <section className="py-20 bg-slate-50 relative border-y border-slate-200">
            <div className="container max-w-6xl mx-auto">
              <div className="text-center mb-4 relative">
                <span className="text-sky-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">Full Data Matrix</span>
                <h2 className="font-display text-4xl font-black text-slate-900 uppercase tracking-tight">Technical Profile</h2>
              </div>
              <ProfessionalTechMatrix specs={product.technicalSpecifications} />
            </div>
          </section>

          {/* 7. APPLICATIONS: ENHANCED ACCORDION */}
          <section className="py-24 bg-white relative overflow-hidden">
            <div className="container relative z-10">
              <div className="text-center mb-4">
                <span className="text-slate-500 font-extrabold tracking-widest uppercase text-xs mb-2 block">DEPLOYMENT ENVIRONMENTS</span>
                <h2 className="font-display text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-tight">HIGH-POWER INDUSTRIAL APPLICATION</h2>
              </div>
              <EnhancedAccordionApplications apps={product.applications} />
            </div>
          </section>


          {/* FIXED AUTONOMOUS FOOTER TELEMETRY */}
          <SequentialFooterRelay footers={product.footers} />

          {/* 8. SPEAK TO AN ENGINEER (Clean Glassmorphism) */}
          <section className="container py-24">
            <div className="bg-slate-50 rounded-[3rem] p-10 lg:p-20 flex flex-col lg:flex-row gap-12 items-center justify-between shadow-xl border border-slate-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.1)_0%,transparent_60%)] rounded-full blur-[50px] pointer-events-none" />
              
              <div className="lg:w-1/2 relative z-10">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-black tracking-widest uppercase mb-8 shadow-sm">
                   <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Direct Engineering Line
                </div>
                <h2 className="font-display text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-[1.1] uppercase tracking-tight">Speak to a <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-700">Power Expert</span></h2>
                <p className="text-xl text-slate-600 font-medium mb-10 leading-relaxed">CRYONANO's industrial systems engineers are available to answer questions on parallel N+1 architecture, wide-range DC inputs, and custom rack integrations.</p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-10 py-5 rounded-2xl font-black text-white bg-slate-900 shadow-xl hover:bg-slate-800 hover:-translate-y-1 transition-all uppercase tracking-wider">Request Technical Consultation</button>
                </div>
              </div>

              <div className="lg:w-5/12 flex flex-col gap-6 w-full relative z-10">
                <div className="bg-white rounded-[2rem] p-8 flex items-center gap-6 shadow-sm border border-slate-200 hover:border-sky-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-16 h-16 rounded-2xl border border-slate-100 bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-sky-50 transition-colors"><Phone className="w-8 h-8 text-slate-400 group-hover:text-sky-600 transition-colors" /></div>
                  <div><p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1.5">Call Us Directly</p><p className="text-2xl font-black text-slate-900">+91 97481 81485</p></div>
                </div>
                <div className="bg-white rounded-[2rem] p-8 flex items-center gap-6 shadow-sm border border-slate-200 hover:border-sky-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-16 h-16 rounded-2xl border border-slate-100 bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-sky-50 transition-colors"><Mail className="w-8 h-8 text-slate-400 group-hover:text-sky-600 transition-colors" /></div>
                  <div><p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1.5">Email Engineering</p><p className="text-xl font-black text-slate-900">contact@cryonano.com</p></div>
                </div>
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

export default DcDcSystemPageHigh;