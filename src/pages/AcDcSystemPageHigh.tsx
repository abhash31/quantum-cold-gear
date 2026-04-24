import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { motion, AnimatePresence, useScroll, useTransform, animate } from "framer-motion";
import { 
  ArrowLeft, ArrowRight, Download, Phone, Mail, 
  Zap, Activity, Cpu, ArrowUp, Radar, Plane, Anchor, Train, Radio, 
  Factory, AlertTriangle, Database, Layers, Server, Settings, Thermometer, Waves, Mountain, Wind,
  CheckCircle2, Network
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
          className="fixed bottom-8 right-8 z-50 p-4 bg-amber-500 text-white rounded-full shadow-[0_4px_14px_rgba(245,158,11,0.4)] hover:bg-amber-600 hover:-translate-y-1 transition-all"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// ==========================================
// 1. DYNAMIC TELEMETRY: MASTER/SLAVE LOAD SHARING
// ==========================================
const MasterSlaveLoadSharing = ({ currentApps }: { currentApps: any }) => {
  const [totalCurrent, setTotalCurrent] = useState(0);
  const [masterLoad, setMasterLoad] = useState(14.25); 
  const [slaveLoad, setSlaveLoad] = useState(14.25);

  useEffect(() => {
    const cycle = async () => {
      while (true) {
        animate(0, currentApps.totalLoad, { duration: 4, ease: "easeInOut", onUpdate: v => setTotalCurrent(Number(v.toFixed(1))) });
        animate(0, currentApps.totalLoad / 2, { duration: 4, ease: "easeInOut", onUpdate: v => setMasterLoad(Number(v.toFixed(2))) });
        await animate(0, currentApps.totalLoad / 2, { duration: 4, ease: "easeInOut", onUpdate: v => setSlaveLoad(Number(v.toFixed(2))) });
        
        await new Promise(r => setTimeout(r, 2000));
        
        await animate(14.25, 28.5, { duration: 1, ease: "easeInOut", onUpdate: v => setMasterLoad(Number(v.toFixed(2))) });
        await animate(14.25, 0, { duration: 0.5, ease: "easeOut", onUpdate: v => setSlaveLoad(Number(v.toFixed(2))) });
        
        await new Promise(r => setTimeout(r, 3000)); 

        await animate(28.5, 0, { duration: 2, ease: "easeInOut", onUpdate: v => setMasterLoad(Number(v.toFixed(2))) });
        animate(0, 0, { duration: 1 });
      }
    };
    if (currentApps) cycle();
  }, [currentApps]);

  const moduleFail = slaveLoad < 0.1 && totalCurrent > 5;
  if (!currentApps) return null;

  return (
    <div className="w-full bg-white rounded-[2.5rem] border border-slate-200 shadow-xl overflow-hidden flex flex-col relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#f1f5f9_2px,transparent_2px)] bg-[size:24px_24px] pointer-events-none opacity-50" />
      
      <div className="bg-slate-50 border-b border-slate-200 px-8 py-5 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-3">
          <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 10, ease: "linear" }} className="w-4 h-4 rounded-full border-2 border-dashed border-emerald-500 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </motion.div>
          <span className="text-slate-600 text-xs font-extrabold tracking-widest uppercase font-mono">Parallel Redundancy Telemetry</span>
        </div>
        <div className="flex gap-3">
          <AnimatePresence>
            {moduleFail && (
              <motion.span initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="text-[10px] font-bold font-mono text-rose-700 bg-rose-100 border border-rose-200 px-2 py-1 rounded shadow-sm">FAILOVER ACTIVE</motion.span>
            )}
          </AnimatePresence>
          <span className="text-[10px] font-bold font-mono text-emerald-700 bg-emerald-100 border border-emerald-200 px-2 py-1 rounded shadow-sm">MASTER ACTIVE</span>
          <span className="text-[10px] font-bold font-mono text-cyan-700 bg-cyan-100 border border-cyan-200 px-2 py-1 rounded shadow-sm">SLAVE ACTIVE</span>
        </div>
      </div>

      <div className="p-8 grid md:grid-cols-3 gap-6 relative z-10">
        <div className="bg-white border-2 border-emerald-300 rounded-3xl p-6 relative flex flex-col shadow-sm">
          <div className="absolute top-2 left-2 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded shadow-sm border border-emerald-100">Master CH.1</div>
          <div className="flex justify-between items-start mb-6 mt-6">
            <div>
              <p className="text-4xl font-extrabold text-slate-900 tracking-tight font-mono">{masterLoad.toFixed(2)} <span className="text-sm text-slate-500 font-bold">kW</span></p>
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Active master load</p>
            </div>
            <Server className="w-8 h-8 text-emerald-500" />
          </div>
          <div className="w-full h-1 bg-slate-100 rounded-full relative overflow-hidden">
             <motion.div animate={{ width: `${(masterLoad / 14.25) * 100}%` }} className="absolute inset-0 bg-emerald-500 rounded-full" />
          </div>
        </div>

        <motion.div animate={moduleFail ? { borderColor: "rgba(239, 68, 68, 0.4)", backgroundColor: "#fef2f2" } : { borderColor: "rgba(6, 182, 212, 0.3)", backgroundColor: "#fff" } } className="bg-white border-2 border-cyan-300 rounded-3xl p-6 relative flex flex-col shadow-sm transition-colors duration-500">
          <div className="absolute top-2 left-2 text-[10px] font-bold text-cyan-700 bg-cyan-50 px-2 py-1 rounded shadow-sm border border-cyan-100">Slave CH.2</div>
          {moduleFail && (
            <div className="absolute top-2 right-2 p-1.5 bg-rose-100 rounded-lg border border-rose-200"><AlertTriangle className="w-4 h-4 text-rose-600" /></div>
          )}
          <div className="flex justify-between items-start mb-6 mt-6">
            <div>
              <p className="text-4xl font-extrabold text-slate-900 tracking-tight font-mono">{slaveLoad.toFixed(2)} <span className="text-sm text-slate-500 font-bold">kW</span></p>
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Synchronized slave load</p>
            </div>
            <motion.div animate={moduleFail ? { color: "#ef4444" } : { color: "#06b6d4" }}><Server className="w-8 h-8" /></motion.div>
          </div>
          <div className="w-full h-1 bg-slate-100 rounded-full relative overflow-hidden">
             <motion.div animate={{ width: `${(slaveLoad / 14.25) * 100}%` }} className={`absolute inset-0 rounded-full ${moduleFail ? 'bg-rose-500' : 'bg-cyan-500'}`} />
          </div>
        </motion.div>

        <div className="bg-white border border-slate-200 rounded-3xl p-6 relative flex flex-col shadow-sm items-center justify-center">
          <div className="absolute top-2 left-2 text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-1 rounded shadow-sm border border-slate-200">System Link</div>
          <div className="text-5xl font-extrabold text-amber-500 font-mono mb-2 mt-4">{totalCurrent.toFixed(1)} <span className="text-sm text-slate-500 font-bold">kW</span></div>
          <div className="text-xs font-bold text-slate-600 uppercase tracking-widest mb-4">Total Output</div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-center text-[10px] font-bold text-slate-500 uppercase tracking-widest">
             <div>Voltage: <strong className="text-slate-900 font-mono text-sm">{currentApps.targetVoltage} V</strong></div>
             <div>PFC: <strong className="text-emerald-700 font-mono text-sm">{currentApps.rippleV.toFixed(2)}</strong></div>
             <div>Ripple: <strong className="text-slate-900 font-mono text-sm">{(totalCurrent > 5 ? currentApps.rippleV / (moduleFail ? 1 : 2) : 0).toFixed(2)} V</strong></div>
             <div>THD: <strong className="text-emerald-700 font-mono text-sm">{totalCurrent > 5 ? currentApps.ripplePct : 0}%</strong></div>
          </div>
        </div>

      </div>
    </div>
  );
};

// // ==========================================
// // 2. SYSTEM ARCHITECTURE MATRIX 
// // (Fixed: Now properly iterates underlines for all 4 cards)
// // ==========================================
// const SystemArchitectureMatrix = ({ data }: { data: any }) => {
//   if (!data) return null;
//   const metrics = [
//     { title: data.powerScaling?.title || "Scaling Density", specs: data.powerScaling?.data || [], icon: Zap, color: "amber" },
//     { title: data.redundancy?.title || "Redundancy", specs: data.redundancy?.data || [], icon: Server, color: "emerald" },
//     { title: data.phaseInput?.title || "Phase Inputs", specs: data.phaseInput?.data || [], icon: Factory, color: "blue" },
//     { title: data.mechanical?.title || "Form Factors", specs: data.mechanical?.data || [], icon: Layers, color: "teal" }
//   ];

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12" style={{ perspective: "1200px" }}>
//       {metrics.map((item, i) => {
//         const Icon = item.icon;
//         return (
//           <motion.div 
//             key={i}
//             initial={{ opacity: 0, rotateY: 30 }} whileInView={{ opacity: 1, rotateY: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1 }}
//             className={`group bg-white rounded-3xl p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col items-center text-center`}
//           >
//              <div className={`absolute top-0 right-0 w-32 h-32 bg-${item.color}-100 rounded-bl-full opacity-0 group-hover:opacity-60 transition-opacity pointer-events-none blur-2xl`} />
//              <div className={`w-16 h-16 rounded-2xl bg-${item.color}-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-${item.color}-100 transition-transform border border-${item.color}-200`}>
//                <Icon className={`w-8 h-8 text-${item.color}-600`} />
//              </div>
//              <h4 className={`text-xl font-extrabold text-slate-900 mb-4 group-hover:text-${item.color}-600 transition-colors`}>{item.title}</h4>
//              <ul className="space-y-3 flex-grow text-sm font-medium text-slate-700">
//                {item.specs.map((spec: string, idx: number) => (
//                  <li key={idx}>{spec}</li>
//                ))}
//              </ul>
//              {/* THE UNDERLINE FIX: This will render perfectly for all 4 cards */}
//              <div className={`w-full h-1 bg-${item.color}-500 mt-6 rounded-full group-hover:h-2 transition-all`} />
//           </motion.div>
//         )
//       })}
//     </div>
//   );
// };
// ==========================================
// 2. SYSTEM ARCHITECTURE MATRIX (Underline Purge Fix)
// ==========================================
const SystemArchitectureMatrix = ({ data }: { data: any }) => {
  if (!data) return null;
  
  // Hardcoded classes prevent Tailwind from purging the colors!
  const metrics = [
    { title: data.powerScaling?.title, specs: data.powerScaling?.data, icon: Zap, bg: "bg-amber-100", text: "text-amber-600", line: "bg-amber-500", hoverLine: "group-hover:bg-amber-400" },
    { title: data.redundancy?.title, specs: data.redundancy?.data, icon: Server, bg: "bg-emerald-100", text: "text-emerald-600", line: "bg-emerald-500", hoverLine: "group-hover:bg-emerald-400" },
    { title: data.phaseInput?.title, specs: data.phaseInput?.data, icon: Factory, bg: "bg-blue-100", text: "text-blue-600", line: "bg-blue-500", hoverLine: "group-hover:bg-blue-400" },
    { title: data.mechanical?.title, specs: data.mechanical?.data, icon: Layers, bg: "bg-rose-100", text: "text-rose-600", line: "bg-rose-500", hoverLine: "group-hover:bg-rose-400" } // Changed from teal to rose to ensure it loads
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12" style={{ perspective: "1200px" }}>
      {metrics.map((item, i) => {
        const Icon = item.icon;
        return (
          <motion.div 
            key={i} initial={{ opacity: 0, rotateY: 30 }} whileInView={{ opacity: 1, rotateY: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1 }}
            className="group bg-white rounded-3xl p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col items-center text-center"
          >
             <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-slate-100 shadow-sm">
               <Icon className={`w-8 h-8 ${item.text}`} />
             </div>
             <h4 className="text-xl font-extrabold text-slate-900 mb-4">{item.title}</h4>
             <ul className="space-y-3 flex-grow text-sm font-medium text-slate-600">
               {item.specs?.map((spec: string, idx: number) => (
                 <li key={idx}>{spec}</li>
               ))}
             </ul>
             {/* GUARANTEED UNDERLINE FIX */}
             <div className={`w-full h-1 mt-6 rounded-full transition-all duration-300 ${item.line} group-hover:h-2 ${item.hoverLine}`} />
          </motion.div>
        )
      })}
    </div>
  );
};

// ==========================================
// 3. ENVIRONMENTAL STRESS TEST (Strict Light Theme)
// Completely redesigned to be bright, airy, and industrial
// ==========================================
const EnvironmentalChamberTest = ({ envData }: { envData: any }) => {
  const [chamberTemp, setChamberTemp] = useState(25);
  const [vibrationLoad, setVibrationLoad] = useState(0);

  useEffect(() => {
    const cycle = async () => {
      while (true) {
        animate( chamberTemp, 60, { duration: 4, ease: "linear", onUpdate: v => setChamberTemp(Math.round(v)) });
        await new Promise(r => setTimeout(r, 2000));
        animate(chamberTemp, -20, { duration: 6, ease: "linear", onUpdate: v => setChamberTemp(Math.round(v)) });
        await new Promise(r => setTimeout(r, 2000));
        await animate( chamberTemp, 25, { duration: 3, ease: "linear", onUpdate: v => setChamberTemp(Math.round(v)) });

        animate(0, 100, { duration: 1, ease: "linear", onUpdate: v => setVibrationLoad(Number(v.toFixed(0))) });
        await new Promise(r => setTimeout(r, 1500));
        await animate(100, 0, { duration: 1.5, ease: "linear", onUpdate: v => setVibrationLoad(Number(v.toFixed(0))) });
        await new Promise(r => setTimeout(r, 1000));
      }
    };
    cycle();
  }, [chamberTemp]);

  if (!envData) return null;

  return (
    <div className="w-full bg-white rounded-[3rem] border border-slate-200 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] p-8 lg:p-12 mt-10 relative overflow-hidden">
      <div className="text-center mb-10 relative z-10">
        <h3 className="font-display text-3xl font-extrabold text-slate-900 mb-2">MIL-STD Environmental Durability</h3>
        <p className="text-slate-600 font-medium">{envData.desc}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 relative z-10">
         {/* CHAMBER VISUALIZATION (Light Theme) */}
         <div className="aspect-[16/10] bg-slate-50 border-2 border-slate-200 rounded-[2rem] p-6 relative overflow-hidden flex flex-col justify-end shadow-inner">
            {/* Light technical grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:20px_20px] opacity-30" />
            
            {/* Visual effects matching telemetry */}
            <motion.div animate={{ opacity: chamberTemp > 45 ? 0.15 : 0 }} className="absolute inset-0 bg-rose-500 pointer-events-none transition-opacity duration-1000" />
            <motion.div animate={{ opacity: chamberTemp < 0 ? 0.15 : 0 }} className="absolute inset-0 bg-blue-500 pointer-events-none transition-opacity duration-1000" />
            
            <motion.div animate={ vibrationLoad > 10 ? { x: [-4, 4, -4] } : { x: 0 }} transition={{ repeat: Infinity, duration: 0.1, ease: "linear" }} className="w-full h-full border-2 border-dashed border-amber-300 bg-white/50 backdrop-blur-[1px] rounded-2xl p-4 flex items-center justify-center relative z-10 shadow-sm">
               <Server className={`w-20 h-20 transition-colors duration-500 ${chamberTemp > 45 ? 'text-rose-400' : chamberTemp < 0 ? 'text-blue-400' : 'text-slate-400'}`} />
               <motion.div animate={vibrationLoad > 10 ? { y: [0, -20, 0] } : { y: 0 }} className="absolute bottom-6 flex gap-2">
                  {[1,2,3].map(i => <motion.div key={i} animate={{ opacity: vibrationLoad > 10 ? [0,1,0] : 0 }} transition={{ delay: i * 0.2, repeat: Infinity, duration: 0.5 }} className="w-3 h-3 rounded-full bg-amber-500 shadow-sm" />)}
               </motion.div>
            </motion.div>
            
            <div className="absolute top-4 left-4 bg-white border border-slate-200 shadow-sm px-3 py-1.5 rounded-lg text-xs font-extrabold tracking-widest uppercase text-slate-600">
              Status: <span className={vibrationLoad > 10 ? 'text-amber-500' : 'text-emerald-500'}>{vibrationLoad > 10 ? 'VIBRATION' : 'THERMAL'}</span>
            </div>
         </div>

         {/* CHAMBER TELEMETRY */}
         <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 text-center hover:border-amber-300 transition-colors">
               <Thermometer className={`w-10 h-10 mb-4 transition-colors mx-auto ${chamberTemp > 45 ? 'text-rose-500' : chamberTemp < 0 ? 'text-blue-500' : 'text-emerald-500'}`} />
               <div className="text-4xl font-black text-slate-900 font-mono mb-1">{chamberTemp}°C</div>
               <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Baseplate Temp</div>
            </div>
            <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 text-center hover:border-amber-300 transition-colors">
               <Waves className="w-10 h-10 mb-4 text-amber-500 mx-auto" />
               <div className="text-4xl font-black text-slate-900 font-mono mb-1">{vibrationLoad}<span className="text-sm text-slate-500">%</span></div>
               <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Vibration Load</div>
            </div>
            <div className="md:col-span-2 flex flex-wrap justify-center gap-3 mt-2">
              {envData.specs.map((spec: string, i: number) => (
                <div key={i} className="px-4 py-2 bg-slate-100 border border-slate-200 text-slate-700 rounded-lg text-sm font-bold shadow-sm hover:bg-white transition-colors">
                  {spec}
                </div>
              ))}
            </div>
         </div>
      </div>
    </div>
  );
};



// // ==========================================
// // 4. CONTROL INTERFACE PACKET VISUALIZER (Strict Light Theme)
// // ==========================================
// const ControlInterfacePackets = ({ interfaces }: { interfaces: any[] }) => {
//   const [packetsSent, setPacketsSent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setPacketsSent(prev => prev + 1);
//     }, 800);
//     return () => clearInterval(timer);
//   }, []);

//   if (!interfaces) return null;

//   return (
//     <div className="w-full bg-slate-50 border border-slate-200 rounded-[3rem] p-10 mt-12 relative overflow-hidden flex flex-col items-center shadow-inner">
//       {/* Light animated background */}
//       <motion.div animate={{ opacity: [0.3, 0.6, 0.3], backgroundPosition: ["0% 0%", "100% 100%"] }} transition={{ repeat: Infinity, duration: 15 }} className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_2px,transparent_2px)] bg-[size:40px_40px] pointer-events-none" />
      
//       <div className="text-center max-w-3xl mx-auto mb-10 relative z-10">
//         <h3 className="font-display text-3xl font-extrabold text-slate-900 mb-2">Industrial Control Plane</h3>
//         <p className="text-slate-600 font-medium">Seamless Master/Slave orchestration via CANbus, Modbus TCP, and RS485 interfaces.</p>
//       </div>

//       <div className="grid md:grid-cols-3 gap-8 w-full relative z-10">
//         {interfaces.map((int, i) => {
//           const Icon = int.icon;
//           return (
//             <motion.div key={i} whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg relative group flex flex-col items-center text-center transition-all">
//                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 border border-blue-100 group-hover:bg-blue-100 transition-colors">
//                   <Icon className="w-8 h-8 text-blue-600" />
//                </div>
//                <h4 className="text-2xl font-extrabold text-slate-900 mb-2">{int.name}</h4>
//                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Standard: <span className="text-slate-700">{int.standard}</span></p>
//                <div className="text-sm font-bold text-blue-700 font-mono py-1.5 px-3 bg-blue-50 rounded-lg border border-blue-200">Latency: {int.latency}</div>
               
//                <div className="absolute top-1/2 -right-4 w-4 h-16 bg-slate-100 border border-slate-200 rounded flex items-center p-1 md:hidden">
//                   <motion.div animate={{ height: packetsSent % (i+1) === 0 ? "100%" : "20%" }} className="w-full bg-blue-500 rounded transition-all" />
//                </div>
//             </motion.div>
//           )
//         })}
//       </div>
      
//       {/* Light packet flow lines */}
//       <div className="w-full h-16 mt-12 relative flex items-center justify-center max-w-6xl mx-auto">
//         {[1,2,3,4,5,6,7,8].map(idx => (
//           <motion.div 
//             key={idx}
//             animate={{ x: packetsSent * 50 }}
//             className={`absolute top-0 w-4 h-4 rounded-full border-2 border-white ${packetsSent % idx === 0 ? 'bg-blue-500 scale-125 z-20 shadow-md' : 'bg-slate-300 z-10'} transition-all`}
//             style={{ left: `${idx * 12.5}%` }}
//           />
//         ))}
//          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-1.5 bg-slate-200 rounded-full" />
//       </div>
//     </div>
//   );
// };

// ==========================================
// 4. CONTROL INTERFACE PACKET VISUALIZER (NEW PATTERN)
// Unique Pattern: Master Control Hub with Live SVG Data Routing
// ==========================================
const ControlInterfacePackets = ({ interfaces }: { interfaces: any[] }) => {
  if (!interfaces) return null;

  return (
    <div className="w-full bg-white rounded-[3rem] p-8 lg:p-12 mt-12 relative overflow-hidden flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 shadow-xl border border-slate-200">
       {/* Background light grid */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:20px_20px] opacity-60" />

       {/* LEFT: Master Control Hub */}
       <div className="relative z-10 flex flex-col items-center bg-slate-50 p-6 rounded-[2rem] border border-slate-200 shadow-sm w-full lg:w-auto">
          <motion.div animate={{ boxShadow: ["0 0 0px rgba(59,130,246,0)", "0 0 40px rgba(59,130,246,0.3)", "0 0 0px rgba(59,130,246,0)"] }} transition={{ duration: 2, repeat: Infinity }} className="w-24 h-24 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg border-4 border-blue-100 relative overflow-hidden">
             <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0%,rgba(255,255,255,0.3)_50%,transparent_100%)]" />
             <Network className="w-10 h-10 text-white relative z-10" />
          </motion.div>
          <div className="mt-5 text-center">
            <h4 className="font-black text-slate-900 text-xl uppercase tracking-tight">Master Sync Plane</h4>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest bg-white border border-slate-200 px-3 py-1 rounded-full mt-2 shadow-sm">Orchestration Hub</p>
          </div>
       </div>

       {/* MIDDLE: Live SVG Routing Lines (Hidden on Mobile for cleaner stacking) */}
       <div className="hidden lg:block w-32 h-64 relative z-0">
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
             {/* Static Tracks */}
             <path d="M 0 128 C 64 128, 64 32, 128 32" fill="none" stroke="#e2e8f0" strokeWidth="4" strokeDasharray="6 6" />
             <path d="M 0 128 L 128 128" fill="none" stroke="#e2e8f0" strokeWidth="4" strokeDasharray="6 6" />
             <path d="M 0 128 C 64 128, 64 224, 128 224" fill="none" stroke="#e2e8f0" strokeWidth="4" strokeDasharray="6 6" />

             {/* Animated Flowing Packets */}
             <motion.circle cx="0" cy="0" r="5" fill="#3b82f6" className="shadow-[0_0_10px_rgba(59,130,246,0.8)]" animate={{ offsetDistance: ["0%", "100%"] }} style={{ offsetPath: "path('M 0 128 C 64 128, 64 32, 128 32')" }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} />
             <motion.circle cx="0" cy="0" r="5" fill="#3b82f6" className="shadow-[0_0_10px_rgba(59,130,246,0.8)]" animate={{ offsetDistance: ["0%", "100%"] }} style={{ offsetPath: "path('M 0 128 L 128 128')" }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.5 }} />
             <motion.circle cx="0" cy="0" r="5" fill="#3b82f6" className="shadow-[0_0_10px_rgba(59,130,246,0.8)]" animate={{ offsetDistance: ["0%", "100%"] }} style={{ offsetPath: "path('M 0 128 C 64 128, 64 224, 128 224')" }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 1 }} />
          </svg>
       </div>

       {/* RIGHT: Interface Protocol Nodes */}
       <div className="flex flex-col gap-4 relative z-10 w-full lg:w-auto">
         {interfaces.map((int, i) => {
           const Icon = int.icon;
           return (
             <motion.div key={i} whileHover={{ x: 10, scale: 1.02 }} className="bg-white border border-slate-200 p-4 rounded-2xl flex items-center gap-5 shadow-sm hover:border-blue-400 hover:shadow-lg transition-all cursor-default">
               <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center border border-blue-100 shrink-0">
                 <Icon className="w-7 h-7 text-blue-600" />
               </div>
               <div className="flex-grow pr-4">
                 <h4 className="font-extrabold text-slate-900 text-lg">{int.name}</h4>
                 <div className="flex flex-wrap gap-2 mt-1.5">
                   <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-md">{int.standard}</span>
                   <span className="text-[10px] font-bold text-blue-700 uppercase tracking-widest bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-md">{int.latency} Sync</span>
                 </div>
               </div>
             </motion.div>
           )
         })}
       </div>
    </div>
  );
};

// ==========================================
// 5. SCANNING TECHNICAL SPECS MATRIX (High Power Tier)
// Autonomous sequential row highlighting
// ==========================================
// const ScanningSpecsMatrixHighPower = ({ specs }: { specs: any }) => {

const ScanningSpecsMatrixHighPower = ({ specs, accentData }: { specs: any, accentData?: any }) => {
  if (!specs) return null;
  const allEntries = [
    ...Object.entries(specs.electricalInput || {}),
    ...Object.entries(specs.electricalOutput || {}),
    ...Object.entries(specs.mechanicalEnv || {})
  ];
  
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if(allEntries.length === 0) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % allEntries.length);
    }, 1500); 
    return () => clearInterval(timer);
  }, [allEntries.length]);

  if (allEntries.length === 0) return null;

  return (
    <div className="w-full bg-white rounded-[2.5rem] border border-slate-200 shadow-xl overflow-hidden mt-10 max-w-5xl mx-auto relative group">
      <motion.div animate={{ left: ["-100%", "100%"] }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }} className="absolute h-full w-full bg-gradient-to-r from-transparent via-amber-50/60 to-transparent pointer-events-none opacity-60 z-0" />
      
      <div className="bg-slate-50 px-8 py-6 border-b border-slate-200 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-4">
          <div className="p-2.5 bg-amber-100 rounded-xl border border-amber-200 shadow-sm"><Settings className="w-6 h-6 text-amber-600" /></div>
          <h3 className="font-display text-2xl font-extrabold text-slate-900">Comprehensive Specifications</h3>
        </div>
        <div className="hidden sm:flex items-center gap-3">
          <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Auto-Scan Active</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-x-12 px-8 py-8 gap-y-3 relative z-10">
        {allEntries.map(([param, spec], i) => (
          <motion.div 
            key={i} 
            whileHover={{ scale: 1.02, backgroundColor: "rgba(254, 243, 199, 0.5)" }} 
            className={`flex flex-col sm:flex-row sm:items-center justify-between py-4 px-5 rounded-xl border transition-all duration-500 relative overflow-hidden ${activeIndex === i ? 'bg-amber-50 border-amber-200 shadow-sm scale-[1.01]' : 'bg-white border-transparent hover:border-amber-100'}`}
          >
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

// // ==========================================
// // 6. POWER RAIL APPLICATIONS GRID
// // ==========================================
// const PowerRailApplications = ({ apps }: { apps: any[] }) => {
//   const getIcon = (name: string) => {
//     if (name.includes("Defense")) return Radar;
//     if (name.includes("Aerospace")) return Plane;
//     if (name.includes("Marine")) return Anchor;
//     if (name.includes("Railways")) return Train;
//     if (name.includes("Telecom")) return Radio;
//     return Factory;
//   };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12 relative max-w-5xl mx-auto py-10">
//       <div className="absolute left-8 lg:left-0 lg:right-0 lg:top-1/2 lg:-translate-y-1/2 w-2 lg:w-full h-full lg:h-2 bg-slate-200 rounded-full flex items-center justify-center">
//           <motion.div animate={{ x: ["-100%", "100%"] }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} className="w-full h-full lg:h-full lg:w-1/4 bg-amber-500 rounded-full blur-sm opacity-50" />
//       </div>
      
//       {apps.map((app: any, i: number) => {
//         const Icon = getIcon(app.name);
//         return (
//           <motion.div 
//             key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
//             className="group bg-white rounded-3xl p-8 border border-slate-200 shadow-lg relative group hover:border-amber-400 hover:-translate-y-2 transition-all cursor-default overflow-hidden"
//           >
//             <div className="absolute top-1/2 -translate-y-1/2 -left-12 lg:-left-auto lg:top-auto lg:-bottom-8 lg:left-1/2 lg:-translate-x-1/2 w-12 h-2 lg:w-2 lg:h-8 bg-slate-300 group-hover:bg-amber-400 transition-colors" />
            
//             <div className="w-16 h-16 rounded-xl bg-slate-50 border border-slate-100 text-slate-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
//               <Icon className="w-8 h-8" />
//             </div>
//             <h4 className="text-xl font-extrabold text-slate-900 mb-2 relative z-10">{app.name}</h4>
//             <p className="text-sm text-slate-600 font-medium leading-relaxed relative z-10">{app.desc}</p>
//           </motion.div>
//         )
//       })}
//     </div>
//   );
// };
// ==========================================
// 6. POWER RAIL APPLICATIONS GRID (Gap Fixed)
// ==========================================
const PowerRailApplications = ({ apps }: { apps: any[] }) => {
  const getIcon = (name: string) => {
    if (name.includes("Defense")) return Radar;
    if (name.includes("Aerospace")) return Plane;
    if (name.includes("Marine")) return Anchor;
    if (name.includes("Railways")) return Train;
    if (name.includes("Telecom")) return Radio;
    return Factory;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12 lg:gap-x-16 mt-16 relative max-w-6xl mx-auto py-10">
      {/* Visual Power Rails */}
      <div className="absolute left-8 lg:left-0 lg:right-0 lg:top-1/2 lg:-translate-y-1/2 w-2 lg:w-full h-full lg:h-3 bg-slate-100 border border-slate-200 rounded-full flex items-center justify-center">
          <motion.div animate={{ x: ["-100%", "100%"] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="w-full h-full lg:h-full lg:w-1/3 bg-emerald-400 rounded-full blur-[2px] opacity-70" />
      </div>
      
      {apps.map((app: any, i: number) => {
        const Icon = getIcon(app.name);
        return (
          <motion.div 
            key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group bg-white rounded-[2rem] p-8 border-2 border-slate-100 shadow-md relative hover:border-emerald-400 hover:shadow-xl hover:-translate-y-2 transition-all cursor-default overflow-visible"
          >
            {/* Connector "Plug" to the rail - Fixed positioning */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-12 lg:-left-auto lg:top-auto lg:-bottom-8 lg:left-1/2 lg:-translate-x-1/2 w-12 h-3 lg:w-3 lg:h-8 bg-slate-200 group-hover:bg-emerald-400 transition-colors z-0 rounded-full" />
            
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 relative z-10">
              <Icon className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-extrabold text-slate-900 mb-2 relative z-10">{app.name}</h4>
            <p className="text-sm text-slate-600 font-medium leading-relaxed relative z-10">{app.desc}</p>
          </motion.div>
        )
      })}
    </div>
  );
};

// ==========================================
// MAIN PAGE COMPONENT
// ==========================================
const AcDcSystemPageHigh = () => {
  const product = productsData["ac-dc-system-high"];
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [200, 300], [0, 1]);

  // ADD THIS BLOCK: Auto-changing hero images array and timer
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const heroImages = [
    product?.heroImage,
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop", // Industrial rack placeholder
    "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop"  // Electronics placeholder
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 3500); // Changes every 3.5 seconds
    return () => clearInterval(timer);
  }, [heroImages.length]);

  if (!product) return <div className="min-h-screen bg-slate-50"><Navbar /></div>;

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-white via-slate-50/50 to-white text-slate-800 font-sans selection:bg-amber-200 selection:text-amber-900 relative">
        <Navbar />

        {/* STICKY HEADER */}
        <div className="sticky z-30 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm" style={{ top: '64px' }}>
          <div className="container py-3 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
              <Link to="/" className="hover:text-amber-600 transition-colors">Home</Link> <span>/</span>
              <Link to="/products" className="hover:text-amber-600 transition-colors">Catalogue</Link> <span>/</span>
              <span className="hidden sm:inline-block cursor-default">{product.category}</span> <span className="hidden sm:inline-block">/</span>
              <span className="text-amber-600 font-bold">{product.name} (High Power Tier)</span>
            </div>
            <motion.div style={{ opacity: headerOpacity }} className="flex items-center gap-4 pointer-events-none">
              <span className="hidden lg:block font-display font-bold text-slate-900">AC-DC 30kW Series</span>
              <button className="px-5 py-2.5 rounded-xl font-bold text-white bg-amber-500 text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all pointer-events-auto">
                Request Quote
              </button>
            </motion.div>
          </div>
        </div>
        
        <main className="pt-4 lg:pt-6">
          
          {/* HERO SECTION */}
          <section className="container pb-16 overflow-hidden relative">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start relative z-10">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="pt-2 lg:pt-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-100 text-amber-700 text-[10px] font-extrabold uppercase tracking-widest mb-4">
                  <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" /> Mission Critical Power
                </div>
                <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 mb-3 tracking-tight uppercase leading-[1.05]">
                  {product.name}
                </h1>
                <p className="text-2xl md:text-3xl text-amber-600 font-black mb-4 uppercase tracking-wide">{product.subtitle}</p>
                <p className="text-lg font-bold text-slate-700 border-l-4 border-amber-500 pl-4 mb-6">{product.tagline}</p>
                
                <div className="space-y-4 mb-8">
                  {product.overview?.map((p: string, i: number) => (
                    <motion.p key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="text-base text-slate-600 leading-relaxed font-medium">{p}</motion.p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <button className="group px-8 py-4 rounded-xl font-black text-slate-900 bg-amber-400 shadow-[0_10px_20px_rgba(245,158,11,0.3)] hover:shadow-[0_15px_30px_rgba(245,158,11,0.5)] transition-all duration-300 flex items-center gap-2 hover:-translate-y-1 uppercase tracking-wide">
                    Configure System <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="px-8 py-4 rounded-xl font-bold text-slate-700 bg-white border-2 border-slate-200 hover:border-amber-400 hover:bg-amber-50 transition-all duration-300 flex items-center gap-2 shadow-sm hover:-translate-y-1">
                    <Download className="w-5 h-5 text-amber-500" /> Full Specs
                  </button>
                </div>
              </motion.div>

              {/* <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative w-full aspect-[4/3] flex items-center justify-center mt-8 lg:mt-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#fde68a_0%,transparent_70%)] opacity-40 pointer-events-none" />
                <div className="relative w-full h-full rounded-[2.5rem] bg-white border border-slate-200 shadow-2xl p-8 flex items-center justify-center group overflow-hidden">
                   <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute -right-20 -top-20 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-50" />
                   <img src={product.heroImage} alt="AC-DC Converter" className="w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700 relative z-10 max-h-[350px]" />
                </div>
              </motion.div> */}

              
              {/* IMAGE CAROUSEL FOR HERO */}
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative w-full aspect-[4/3] flex items-center justify-center mt-8 lg:mt-0">
                {/* Circuit Board Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#fde68a_0%,transparent_70%)] opacity-40 pointer-events-none" />
                
                <div className="relative w-full h-full rounded-[2.5rem] bg-white border border-slate-200 shadow-2xl p-8 flex items-center justify-center group overflow-hidden">
                   <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute -right-20 -top-20 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-50" />
                   
                   {/* AUTONOMOUS IMAGE BATCH */}
                   <AnimatePresence mode="wait">
                     <motion.img 
                        key={currentHeroImage}
                        src={heroImages[currentHeroImage]} 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                        alt="AC-DC Converter Batch" 
                        className="w-full object-contain mix-blend-multiply relative z-10 max-h-[350px] drop-shadow-xl" 
                     />
                   </AnimatePresence>

                   {/* Carousel Indicators */}
                   <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
                     {heroImages.map((_, i) => (
                       <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${currentHeroImage === i ? "w-6 bg-amber-500" : "w-1.5 bg-slate-300"}`} />
                     ))}
                   </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* TELEMETRY: LOAD SHARING */}
          <section className="py-16 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
            <div className="container relative z-10">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <span className="text-amber-500 font-extrabold tracking-widest uppercase text-xs mb-2 block">Autonomous Orchestration</span>
                <h2 className="font-display text-4xl font-black text-slate-900 uppercase tracking-tight">Active Current Sharing Telemetry</h2>
              </div>
              <div className="max-w-6xl mx-auto">
                <MasterSlaveLoadSharing currentApps={product.telemetryPatterns?.loadSharing} />
              </div>
            </div>
          </section>

          {/* ARCHITECTURE MATRIX GRID */}
          <section className="py-16 relative overflow-hidden bg-white">
            <div className="container max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <span className="text-blue-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">System Engineering</span>
                <h2 className="font-display text-4xl font-black text-slate-900 uppercase tracking-tight">Modular Power Architecture</h2>
                <p className="text-base text-slate-600 font-medium max-w-3xl mx-auto mt-4">Scalable, fault-tolerant conversion logic validated by real-world load scenarios.</p>
              </div>
              <SystemArchitectureMatrix data={product.systemArchitecture} />
            </div>
          </section>

          {/* ENVIRONMENTAL STRESS TEST */}
          <section className="py-16 bg-slate-50 border-y border-slate-200 relative">
            <div className="container max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <span className="text-emerald-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">Severe Environments</span>
                <h2 className="font-display text-4xl font-black text-slate-900 uppercase tracking-tight">Rugged Operational Resilience</h2>
              </div>
              <EnvironmentalChamberTest envData={product.environmental} />
            </div>
          </section>

          {/* CONTROL INTERFACE PACKET FLOW (Light Theme) */}
          <section className="py-16 bg-white border-b border-slate-200 relative">
            <div className="container max-w-6xl mx-auto relative z-10">
              <div className="text-center mb-4">
                <span className="text-amber-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">Master Control Plan</span>
                <h2 className="font-display text-4xl font-black text-slate-900 uppercase tracking-tight">Industrial Sync & Control</h2>
              </div>
              <ControlInterfacePackets interfaces={product.controlInterfaces} />
            </div>
          </section>

          {/* TECHNICAL SPECIFICATIONS MATRIX */}
          <section className="py-16 bg-slate-50 relative border-b border-slate-200">
            <div className="container max-w-6xl mx-auto">
              <div className="text-center mb-8 relative">
                <span className="text-rose-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">Full Data Matrix</span>
                <h2 className="font-display text-3xl font-black text-slate-900 uppercase tracking-tight">Technical Specifications</h2>
              </div>
              <ScanningSpecsMatrixHighPower specs={product.technicalSpecifications} accentData={product.telemetryPatterns?.tableSpecs} />
            </div>
          </section>

          {/* APPLICATIONS GRID */}
          <section className="py-16 bg-white relative overflow-hidden">
            <div className="container max-w-6xl mx-auto relative z-10">
              <div className="text-center mb-4">
                <span className="text-slate-500 font-extrabold tracking-widest uppercase text-xs mb-2 block">DEPLOYMENT ENVIRONMENTS</span>
                <h2 className="font-display text-4xl font-black text-slate-900 uppercase tracking-tight">HIGH-POWER INDUSTRIAL APPLICATIONS</h2>
              </div>
              <PowerRailApplications apps={product.applications} />
            </div>
          </section>




          {/* DYNAMIC FOOTER TAGS (Enhanced Industrial Marquee moved ABOVE Contact section) */}
          <section className="bg-amber-400 py-5 overflow-hidden relative border-y-4 border-slate-900 shadow-inner">
             {/* Added Diagonal hazard stripes overlay */}
             <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#000_10px,#000_20px)] pointer-events-none" />
             <div className="flex whitespace-nowrap overflow-hidden relative z-10">
               <motion.div animate={{ x: [0, -1000] }} transition={{ repeat: Infinity, duration: 15, ease: "linear" }} className="flex gap-16 px-6">
                 {product.footers?.concat(product.footers, product.footers).map((footer: string, i: number) => (
                   <span key={i} className="text-xl font-black text-slate-900 tracking-widest uppercase flex items-center gap-3">
                     <Settings className="h-6 w-6" /> {footer}
                   </span>
                 ))}
               </motion.div>
             </div>
          </section>

          {/* SPEAK TO AN ENGINEER (Light Theme) */}
          <section className="container py-16">
            <div className="bg-white rounded-[3rem] p-8 lg:p-16 flex flex-col lg:flex-row gap-12 items-center justify-between shadow-2xl border border-slate-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.15)_0%,transparent_60%)] pointer-events-none" />
              
              <div className="lg:w-1/2 relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-[10px] font-extrabold tracking-widest uppercase mb-6 shadow-sm"><div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" /> Direct Engineering Line</div>
                <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight uppercase">Speak to a <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">Power Expert</span></h2>
                <p className="text-lg text-slate-600 font-bold mb-10">CRYONANO's industrial systems engineers are available to answer your questions. Discuss custom voltage configurations, MIL-STD compliance, and rack integrations today.</p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-4 rounded-xl font-black text-slate-900 bg-amber-400 shadow-[0_4px_14px_rgba(245,158,11,0.3)] hover:shadow-lg hover:-translate-y-0.5 transition-all uppercase tracking-wide">Request Consultation</button>
                </div>
              </div>

              <div className="lg:w-5/12 flex flex-col gap-6 w-full relative z-10">
                <div className="bg-slate-50 rounded-3xl p-6 flex items-center gap-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer border border-slate-200 hover:border-amber-300 group">
                  <div className="w-14 h-14 rounded-2xl border border-slate-200 bg-white flex items-center justify-center shrink-0 group-hover:bg-amber-50 transition-colors"><Phone className="w-6 h-6 text-slate-500 group-hover:text-amber-500 transition-colors" /></div>
                  <div><p className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest mb-1.5">Call Us Directly</p><p className="text-2xl font-black text-slate-900">+91 97481 81485</p></div>
                </div>
                <div className="bg-slate-50 rounded-3xl p-6 flex items-center gap-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer border border-slate-200 hover:border-amber-300 group">
                  <div className="w-14 h-14 rounded-2xl border border-slate-200 bg-white flex items-center justify-center shrink-0 group-hover:bg-amber-50 transition-colors"><Mail className="w-6 h-6 text-slate-500 group-hover:text-amber-500 transition-colors" /></div>
                  <div><p className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest mb-1.5">Email Engineering</p><p className="text-xl font-black text-slate-900">contact@cryonano.com</p></div>
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

export default AcDcSystemPageHigh;