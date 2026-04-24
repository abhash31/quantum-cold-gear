// import { useState, useEffect } from "react";
// import { Navbar } from "@/components/Navbar";
// import { Footer } from "@/components/Footer";
// import { PageTransition } from "@/components/PageTransition";
// import { motion, AnimatePresence, useScroll, useTransform, animate } from "framer-motion";
// import { 
//   Zap, Activity, Cpu, ArrowUp, Box, ShieldAlert,
//   Microchip, Antenna, Bot, Radar, Server, Settings, 
//   Target, ZapOff, CheckCircle2, Package, Search, ArrowRight
// } from "lucide-react";
// import { Link } from "react-router-dom";
// import { productsData } from "@/data/products";

// // ==========================================
// // SCROLL TO TOP (Reusable Pattern)
// // ==========================================
// const ScrollToTop = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   useEffect(() => {
//     const toggleVisibility = () => setIsVisible(window.scrollY > 400);
//     window.addEventListener("scroll", toggleVisibility);
//     return () => window.removeEventListener("scroll", toggleVisibility);
//   }, []);
//   const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

//   return (
//     <AnimatePresence>
//       {isVisible && (
//         <motion.button
//           initial={{ opacity: 0, scale: 0.5, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.5, y: 20 }}
//           onClick={scrollToTop}
//           className="fixed bottom-8 right-8 z-50 p-4 bg-emerald-500 text-white rounded-full shadow-lg hover:bg-emerald-600 hover:-translate-y-1 transition-all"
//         >
//           <ArrowUp className="w-6 h-6" />
//         </motion.button>
//       )}
//     </AnimatePresence>
//   );
// };

// // ==========================================
// // 1. LIVE TELEMETRY: NANOGRID OSCILLOSCOPE
// // Unique Pattern: Simulated high-speed regulation response
// // ==========================================
// const NanogridOscilloscope = ({ data }: { data: any }) => {
//   const [ripple, setRipple] = useState(data.simulatedRipple);
//   const [activeNode, setActiveNode] = useState(0);

//   useEffect(() => {
//     const rippleTimer = setInterval(() => {
//       setRipple(data.simulatedRipple + (Math.random() * 20 - 10)); // Simulate micro-ripples
//     }, 1500);
//     const nodeTimer = setInterval(() => {
//       setActiveNode(prev => (prev + 1) % data.regulationNodes.length);
//     }, 2500); // Cycles regulation nodes

//     return () => { clearInterval(rippleTimer); clearInterval(nodeTimer); };
//   }, [data]);

//   const activeNodeData = data.regulationNodes[activeNode];

//   return (
//     <div className="w-full bg-slate-50 rounded-[3rem] border border-emerald-100 p-8 lg:p-12 shadow-inner relative overflow-hidden flex flex-col lg:flex-row gap-10 items-center">
//        {/* Diagnostic Grid Background */}
//        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:25px_25px] opacity-30 pointer-events-none" />

//        {/* Left: Simulated Oscilloscope Display */}
//        <div className="lg:w-2/3 w-full aspect-[16/9] bg-white rounded-3xl p-6 relative border border-emerald-200 shadow-xl group overflow-hidden flex items-center justify-center">
//           {/* Internal Oscilloscope grid */}
//           <div className="absolute inset-4 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:15px_15px] opacity-50 z-0" />
          
//           {/* Center Voltage Line (Simulated Response) */}
//           <div className="w-full h-1 bg-slate-200 relative rounded-full z-10">
//             <motion.div 
//                animate={{ y: [-2, 2, -2], opacity: [0.7, 1, 0.7] }} 
//                transition={{ duration: 0.1, repeat: Infinity }} 
//                className="absolute inset-0 h-1 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.8)]" 
//             />
//             {/* Travelling Pulse mimicking transient response */}
//             <motion.div animate={{ x: ["0%", "100%", "0%"] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="absolute -top-1 bottom-0 w-1/4 h-3 bg-white/60 blur-sm rounded-full" />
//           </div>
          
//           <div className="absolute top-4 left-4 bg-white/80 border border-slate-200 px-3 py-1.5 rounded-lg text-xs font-extrabold tracking-widest uppercase text-slate-600 z-10 shadow-sm">Response Trace</div>
//           <motion.div animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 1, repeat: Infinity }} className="absolute bottom-4 right-4 text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded z-10">SIM_STATUS: ACTIVE</motion.div>
//        </div>

//        {/* Right: Telemetry Nodes */}
//        <div className="lg:w-1/3 flex flex-col gap-6 w-full">
//           <div className="grid grid-cols-2 gap-4">
//              <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm text-center">
//                 <Target className="w-8 h-8 text-emerald-500 mx-auto mb-3" />
//                 <div className="text-3xl font-black text-slate-900 font-mono mb-1">{data.nominalVoltage.toFixed(1)}V</div>
//                 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Target V</div>
//              </div>
//              <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm text-center">
//                 <Zap className="w-8 h-8 text-emerald-500 mx-auto mb-3" />
//                 <div className="text-3xl font-black text-slate-900 font-mono mb-1">{data.inputBus.toFixed(1)}V</div>
//                 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Input Bus</div>
//              </div>
//           </div>
          
//           <div className="bg-white border-2 border-emerald-300 p-6 rounded-3xl shadow-lg relative overflow-hidden group">
//              <div className="absolute top-2 left-2 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded shadow-sm border border-emerald-100">Node: {activeNodeData.id}</div>
//              <AnimatePresence mode="wait">
//                  <motion.div key={activeNode} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} className="flex justify-between items-end mt-4">
//                     <div>
//                        <div className="text-4xl font-extrabold text-slate-900 tracking-tight font-mono">{activeNodeData.voltage.toFixed(2)}V</div>
//                        <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Active Output</p>
//                     </div>
//                     <div>
//                        <div className="text-xl font-bold text-emerald-700 font-mono animate-pulse">{activeNodeData.stability}%</div>
//                        <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Stability</p>
//                     </div>
//                  </motion.div>
//              </AnimatePresence>
//              <div className="w-full h-1 bg-slate-100 mt-4 rounded-full relative overflow-hidden">
//                  <motion.div animate={{ width: `${(ripple / 150) * 100}%` }} className="absolute inset-0 bg-emerald-500 rounded-full" />
//              </div>
//              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1.5 text-center">Ripple: {ripple.toFixed(0)} mV p-p</p>
//           </div>
//        </div>
//     </div>
//   );
// };

// // ==========================================
// // 2. DENSITY BENTO GRID
// // Unique Pattern: Unfolding cards
// // ==========================================
// const DensityBentoGrid = ({ data }: { data: any[] }) => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
//       {data.map((item, i) => {
//         const Icon = item.icon || Box;
//         return (
//           <motion.div 
//             key={i}
//             initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15, type: "spring" }}
//             className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden flex flex-col items-center text-center group"
//           >
//              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-white to-sky-50/50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none blur-3xl" />
//              <div className="w-20 h-20 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 border border-slate-100 group-hover:bg-emerald-500 transition-colors duration-300">
//                <Icon className="w-10 h-10 text-slate-400 group-hover:text-white transition-colors" />
//              </div>
//              <h4 className="text-3xl font-black text-slate-900 mb-4 tracking-tight uppercase group-hover:text-emerald-700 transition-colors">{item.title}</h4>
//              <p className="text-base text-slate-600 font-medium leading-relaxed flex-grow relative z-10">{item.desc}</p>
//              <div className="w-full h-1 bg-emerald-100 mt-8 rounded-full group-hover:bg-emerald-500 transition-colors" />
//           </motion.div>
//         )
//       })}
//     </div>
//   );
// };

// // ==========================================
// // 3. TECH SPEC TYPING CONSOLE
// // Unique Pattern: Autonomous typing mimic
// // ==========================================
// const TypingSpecConsole = ({ specs }: { specs: any }) => {
//   if (!specs) return null;
//   const entries = Object.entries(specs);
//   const [typedIndex, setTypedIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTypedIndex(prev => (prev + 1) % entries.length);
//     }, 1800); // Cycles displayed spec
//     return () => clearInterval(timer);
//   }, [entries.length]);

//   return (
//     <div className="w-full bg-slate-50 border border-slate-200 rounded-[3rem] p-10 mt-12 relative overflow-hidden flex flex-col items-center shadow-inner">
//        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:15px_15px] pointer-events-none" />
       
//        <div className="text-center mb-10 relative z-10">
//           <Settings className="w-10 h-10 text-emerald-500 mx-auto mb-4" />
//           <h3 className="font-display text-4xl font-extrabold text-slate-900 uppercase">Meticulous Regulation Profiles</h3>
//        </div>

//        <div className="relative w-full max-w-3xl aspect-[16/6] bg-slate-900 rounded-3xl p-8 overflow-hidden flex flex-col justify-end shadow-2xl">
//           <motion.div animate={{ top: ["0%", "100%", "0%"] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="absolute left-0 right-0 h-0.5 bg-emerald-400 opacity-60 z-20" />
//           {/* <AnimatePresence mode="wait">
//              <motion.p key={typedIndex} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.5 }} className="text-white font-mono text-xl group hover:text-emerald-400">
//                &gt; <span className="text-slate-400">{entries[typedIndex][0]}::</span> <span className="animate-pulse">{entries[typedIndex][1]}</span>
//              </motion.p>
//           </AnimatePresence> */}

//           <AnimatePresence mode="wait">
//              <motion.p key={typedIndex} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.5 }} className="text-white font-mono text-xl group hover:text-emerald-400">
//                &gt; <span className="text-slate-400">{entries[typedIndex][0]}::</span> <span className="animate-pulse">{String(entries[typedIndex][1])}</span>
//              </motion.p>
//           </AnimatePresence>
//           <div className="flex gap-1.5 mt-auto">
//              {entries.map((_, i) => <div key={i} className={`w-2 h-2 rounded-full transition-colors ${typedIndex === i ? 'bg-emerald-500' : 'bg-slate-700'}`} />)}
//           </div>
//        </div>

//        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 w-full max-w-5xl">
//           {Object.entries(specs).map(([key, value]) => (
//              <div key={key} className="bg-white px-5 py-3 rounded-xl border border-slate-100 shadow-sm flex items-center justify-between text-xs font-bold">
//                  <span className="text-slate-500 uppercase tracking-widest">{key}</span>
//                  <span className="text-slate-900 font-bold">{value}</span>
//              </div>
//           ))}
//        </div> */}


//        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 w-full max-w-5xl">
//           {Object.entries(specs).map(([key, value]) => (
//              <div key={key} className="bg-white px-5 py-3 rounded-xl border border-slate-100 shadow-sm flex items-center justify-between text-xs font-bold">
//                  <span className="text-slate-500 uppercase tracking-widest">{key}</span>
//                  <span className="text-slate-900 font-bold">{String(value)}</span>
//              </div>
//           ))}
//        </div>
//     </div>
//   );
// };

// // ==========================================
// // MAIN PAGE COMPONENT
// // ==========================================
// const DcDcSystemPageLow = () => {
//   const product = productsData["dc-dc-system-low"];
//   const { scrollY } = useScroll();
//   const headerOpacity = useTransform(scrollY, [200, 300], [0, 1]);

//   if (!product) return <div className="min-h-screen bg-slate-50"><Navbar /></div>;

//   return (
//     <PageTransition>
//       <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-emerald-100 selection:text-emerald-900 relative">
//         <Navbar />

//         {/* STICKY HEADER */}
//         <div className="sticky z-30 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm" style={{ top: '64px' }}>
//           <div className="container py-3 flex items-center justify-between">
//             <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
//               <Link to="/" className="hover:text-emerald-600 transition-colors">Home</Link> <span>/</span>
//               <Link to="/products" className="hover:text-emerald-600 transition-colors">Solutions</Link> <span>/</span>
//               <span className="hidden sm:inline-block cursor-default">{product.category}</span> <span className="hidden sm:inline-block">/</span>
//               <span className="text-emerald-600 font-bold">DC-DC System (Low Power)</span>
//             </div>
//             <motion.div style={{ opacity: headerOpacity }} className="flex items-center gap-4 pointer-events-none">
//               <span className="hidden lg:block font-display font-bold text-slate-900 uppercase">DC-DC 5kW Series</span>
//               <button className="px-5 py-2.5 rounded-xl font-bold text-white bg-emerald-500 text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all pointer-events-auto">
//                 Request Quote
//               </button>
//             </motion.div>
//           </div>
//         </div>
        
//         <main className="pt-4 lg:pt-6 relative">
          
//           {/* HERO SECTION: NANOGRID ASSEMBLY (Unique Pattern) */}
//           <section className="container pb-16 overflow-hidden relative border-b border-slate-100">
//             <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
//               <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="pt-2 lg:pt-6">
//                 <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-extrabold uppercase tracking-widest mb-4">
//                   <Package className="w-3 h-3" /> Promissing High Density configuration
//                 </div>
//                 <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 mb-3 tracking-tight uppercase leading-[1.05]">
//                   {product.name}
//                 </h1>
//                 <p className="text-2xl text-emerald-600 font-black mb-4 uppercase tracking-wide">{product.subtitle}</p>
//                 <p className="text-lg font-bold text-slate-700 border-l-4 border-sky-400 pl-4 mb-6">{product.tagline}</p>
                
//                 <div className="space-y-4 mb-8">
//                   {product.overview?.map((p: string, i: number) => (
//                     <motion.p key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="text-base text-slate-600 leading-relaxed font-medium">{p}</motion.p>
//                   ))}
//                 </div>

//                 <div className="flex flex-wrap gap-4">
//                   <button className="px-8 py-4 rounded-xl font-black text-white bg-emerald-500 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all uppercase tracking-wide flex items-center gap-2">
//                     Request Pricing <ArrowRight className="w-5 h-5" />
//                   </button>
//                   <button className="px-8 py-4 rounded-xl font-bold text-slate-700 bg-white border-2 border-slate-200 hover:border-emerald-400 hover:bg-emerald-50 transition-all flex items-center gap-2 shadow-sm hover:-translate-y-1">
//                     <Settings className="w-5 h-5 text-emerald-500" /> Full System Matrix
//                   </button>
//                 </div>
//               </motion.div>

//               <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative w-full aspect-[4/3] flex items-center justify-center mt-8 lg:mt-0">
//                 {/* Circuit Board Background Pattern */}
//                 <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#ecfdf5_0%,transparent_70%)] opacity-40 pointer-events-none" />
                
//                 <div className="relative w-full h-full rounded-[2.5rem] bg-white border-2 border-emerald-100 shadow-2xl p-8 flex items-center justify-center group overflow-hidden">
//                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute -right-20 -top-20 w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-50" />
//                    <img src={product.heroImage} alt="DC-DC Converter High Density" className="w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700 relative z-10 max-h-[350px]" />
//                 </div>
//               </motion.div>
//             </div>
//           </section>

//           {/* TELEMETRY: NANOGRID OSCILLOSCOPE */}
//           <section className="py-20 relative overflow-hidden bg-white">
//             <div className="container relative z-10">
//               <div className="text-center max-w-3xl mx-auto mb-12">
//                 <span className="text-sky-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">Precise Regulation Monitoring</span>
//                 <h2 className="font-display text-4xl font-black text-slate-900 uppercase tracking-tight">Active Promissing Electrical Stability</h2>
//               </div>
//               <div className="max-w-6xl mx-auto">
//                 <NanogridOscilloscope data={product.liveOscilloscope} />
//               </div>
//             </div>
//           </section>

//           {/* KEY VALUE PROPOSITION: BENTO GRID */}
//           <section className="py-16 relative overflow-hidden bg-slate-50 border-y border-slate-200 shadow-inner">
//             <div className="container max-w-6xl mx-auto">
//               <div className="text-center mb-4">
//                 <span className="text-emerald-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">Optimized Platform</span>
//                 <h2 className="font-display text-4xl font-black text-slate-900 uppercase tracking-tight">Core Performance Drivers</h2>
//               </div>
//               <DensityBentoGrid data={product.keyVlaueProposition || product.keyValueProposition} />
//             </div>
//           </section>

//           {/* TYPING SPEC CONSOLE */}
//           <section className="py-20 bg-white relative overflow-hidden">
//             <div className="container max-w-6xl mx-auto relative z-10">
//                <TypingSpecConsole specs={product.technicalSpecifications.inputData} />
//             </div>
//           </section>

//           {/* FLATTENED TECHNICAL SPECS GRID (Full Matrix) */}
//           <section className="py-20 bg-slate-50 border-t border-slate-200 shadow-inner relative overflow-hidden">
//              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.1)_0%,transparent_70%)] opacity-30 pointer-events-none" />
//              <div className="container max-w-6xl mx-auto relative z-10">
//                 <div className="text-center mb-12">
//                    <Target className="w-10 h-10 text-emerald-500 mx-auto mb-4" />
//                    <h2 className="font-display text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-tight">Full System Integration Matrix</h2>
//                 </div>
                
//                 <div className="grid lg:grid-cols-2 gap-10">
//                    {[product.technicalSpecifications.outputData, product.technicalSpecifications.mechanicalEnv].map((specGroup, groupIdx) => (
//                       <div key={groupIdx} className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-6 space-y-1">
//                           <h4 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-4 px-3 flex items-center gap-2">
//                              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
//                              {groupIdx === 0 ? 'Output Precision Metrics' : 'Mechanical & Environmental Profile'}
//                           </h4>
//                           {Object.entries(specGroup).map(([param, spec], i) => (
//                               <div key={i} className="flex flex-col md:flex-row md:items-center justify-between py-3 px-4 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors rounded-lg group">
//                                 <span className="text-xs font-extrabold text-slate-500 uppercase tracking-widest md:w-1/2 group-hover:text-emerald-700">
//                                   {param}
//                                 </span>
//                                 <span className="text-sm font-bold text-slate-900 md:w-1/2 md:text-right mt-1 md:mt-0">
//                                   {String(spec)}
//                                 </span>
//                               </div>
//                           ))}
//                       </div>
//                    ))}
//                 </div>
//              </div>
//           </section>

//           {/* DEPLOYMENT APPLICATIONS GRID */}
//           <section className="py-20 bg-white border-b border-slate-200 relative overflow-hidden">
//             <div className="container max-w-6xl mx-auto relative z-10">
//               <div className="text-center mb-12">
//                 <span className="text-sky-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">Critical Embedded Deployment Suitability</span>
//                 <h2 className="font-display text-4xl font-black text-slate-900 uppercase tracking-tight">Ideally suited Environments</h2>
//               </div>
//               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//                 {product.applicationGrid.map((app, i) => {
//                   const Icon = app.icon || Zap;
//                   return (
//                     <motion.div 
//                       key={app.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.1 }}
//                       className="group bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:border-emerald-400 hover:shadow-xl hover:-translate-y-2 transition-all cursor-default flex items-center gap-6"
//                     >
//                       <div className="w-16 h-16 rounded-xl bg-slate-100 flex items-center justify-center border border-slate-200 group-hover:bg-emerald-500 transition-colors shrink-0">
//                          <Icon className="w-8 h-8 text-slate-400 group-hover:text-white transition-colors" />
//                       </div>
//                       <div>
//                         <h4 className="text-xl font-extrabold text-slate-900 mb-1 group-hover:text-emerald-700">{app.name}</h4>
//                         <p className="text-sm text-slate-600 font-medium leading-relaxed">{app.desc}</p>
//                       </div>
//                     </motion.div>
//                   )
//                 })}
//               </div>
//             </div>
//           </section>

//           {/* FIXED AUTONOMOUS FOOTER TELEMETRY (Sequential Relay Pattern) */}
//           <section className="bg-slate-50 py-12 overflow-hidden relative border-t border-slate-200 shadow-inner">
//              {/* Background subtle technical grid */}
//              <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px] opacity-50 pointer-events-none" />
//              <div className="container max-w-6xl mx-auto relative z-10">
//                {/* Fixed Grid for the 3 tags */}
//                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
//                  {product.footers?.slice(0, 3).map((footer: string, i: number) => (
//                      <div key={i} className={`flex flex-col items-center text-center p-6 rounded-3xl border bg-white border-slate-200 shadow-sm hover:border-emerald-300 transition-all`}>
//                        {/* Icon container */}
//                        <div className={`relative w-14 h-14 rounded-2xl flex items-center justify-center mb-5 border bg-slate-50 border-slate-100`}>
//                           <Settings className={`w-7 h-7 text-emerald-500`} />
//                        </div>
//                        {/* Text */}
//                        <span className={`text-sm font-black tracking-widest uppercase text-slate-900`}>
//                          {footer}
//                        </span>
//                      </div>
//                  ))}
//                </div>
//              </div>
//           </section>

//         </main>
        
//         <ScrollToTop />
//         <Footer />
//       </div>
//     </PageTransition>
//   );
// };

// export default DcDcSystemPageLow;













import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { motion, AnimatePresence, useScroll, useTransform, animate } from "framer-motion";
import { 
  ArrowLeft, ArrowRight, Download, Phone, Mail, 
  Zap, Activity, Cpu, ArrowUp, Box, ShieldAlert,
  Microchip, Antenna, Bot, Radar, Server, Settings, 
  Target, CheckCircle2, Package, BatteryCharging, FlaskConical, Layers, Waves
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
          className="fixed bottom-8 right-8 z-50 p-4 bg-emerald-500 text-white rounded-full shadow-lg hover:bg-emerald-600 hover:-translate-y-1 transition-all"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// // ==========================================
// // 1. LIVE TELEMETRY: NANOGRID OSCILLOSCOPE
// // ==========================================
// const NanogridOscilloscope = ({ data }: { data: any }) => {
//   const [ripple, setRipple] = useState(data.simulatedRipple);
//   const [activeNode, setActiveNode] = useState(0);

//   useEffect(() => {
//     const rippleTimer = setInterval(() => {
//       setRipple(data.simulatedRipple + (Math.random() * 20 - 10)); 
//     }, 1500);
//     const nodeTimer = setInterval(() => {
//       setActiveNode(prev => (prev + 1) % data.regulationNodes.length);
//     }, 2500); 

//     return () => { clearInterval(rippleTimer); clearInterval(nodeTimer); };
//   }, [data]);

//   const activeNodeData = data.regulationNodes[activeNode];

//   return (
//     <div className="w-full bg-slate-50 rounded-[3rem] border border-emerald-100 p-8 lg:p-12 shadow-inner relative overflow-hidden flex flex-col lg:flex-row gap-10 items-center">
//        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:25px_25px] opacity-30 pointer-events-none" />

//        <div className="lg:w-2/3 w-full aspect-[16/9] bg-white rounded-3xl p-6 relative border border-emerald-200 shadow-xl group overflow-hidden flex items-center justify-center">
//           <div className="absolute inset-4 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:15px_15px] opacity-50 z-0" />
          
//           <div className="w-full h-1 bg-slate-200 relative rounded-full z-10">
//             <motion.div 
//                animate={{ y: [-2, 2, -2], opacity: [0.7, 1, 0.7] }} 
//                transition={{ duration: 0.1, repeat: Infinity }} 
//                className="absolute inset-0 h-1 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.8)]" 
//             />
//             <motion.div animate={{ x: ["0%", "100%", "0%"] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="absolute -top-1 bottom-0 w-1/4 h-3 bg-white/60 blur-sm rounded-full" />
//           </div>
          
//           <div className="absolute top-4 left-4 bg-white/80 border border-slate-200 px-3 py-1.5 rounded-lg text-xs font-extrabold tracking-widest uppercase text-slate-600 z-10 shadow-sm">Response Trace</div>
//           <motion.div animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 1, repeat: Infinity }} className="absolute bottom-4 right-4 text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded z-10">SIM_STATUS: ACTIVE</motion.div>
//        </div>

//        <div className="lg:w-1/3 flex flex-col gap-6 w-full">
//           <div className="grid grid-cols-2 gap-4">
//              <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm text-center">
//                 <Target className="w-8 h-8 text-emerald-500 mx-auto mb-3" />
//                 <div className="text-3xl font-black text-slate-900 font-mono mb-1">{data.nominalVoltage.toFixed(1)}V</div>
//                 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Target V</div>
//              </div>
//              <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm text-center">
//                 <Zap className="w-8 h-8 text-emerald-500 mx-auto mb-3" />
//                 <div className="text-3xl font-black text-slate-900 font-mono mb-1">{data.inputBus.toFixed(1)}V</div>
//                 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Input Bus</div>
//              </div>
//           </div>
          
//           <div className="bg-white border-2 border-emerald-300 p-6 rounded-3xl shadow-lg relative overflow-hidden group">
//              <div className="absolute top-2 left-2 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded shadow-sm border border-emerald-100">Node: {activeNodeData.id}</div>
//              <AnimatePresence mode="wait">
//                  <motion.div key={activeNode} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} className="flex justify-between items-end mt-4">
//                     <div>
//                        <div className="text-4xl font-extrabold text-slate-900 tracking-tight font-mono">{activeNodeData.voltage.toFixed(2)}V</div>
//                        <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Active Output</p>
//                     </div>
//                     <div>
//                        <div className="text-xl font-bold text-emerald-700 font-mono animate-pulse">{activeNodeData.stability}%</div>
//                        <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Stability</p>
//                     </div>
//                  </motion.div>
//              </AnimatePresence>
//              <div className="w-full h-1 bg-slate-100 mt-4 rounded-full relative overflow-hidden">
//                  <motion.div animate={{ width: `${(ripple / 150) * 100}%` }} className="absolute inset-0 bg-emerald-500 rounded-full" />
//              </div>
//              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1.5 text-center">Ripple: {ripple.toFixed(0)} mV p-p</p>
//           </div>
//        </div>
//     </div>
//   );
// };


// ==========================================
// 1. LIVE TELEMETRY: DUAL-CHANNEL ANALYZER
// Highly professional, rich animated oscilloscope
// ==========================================
const NanogridOscilloscope = ({ data }: { data: any }) => {
  const [ripple, setRipple] = useState(data.simulatedRipple);
  const [activeNode, setActiveNode] = useState(0);

  useEffect(() => {
    const rippleTimer = setInterval(() => setRipple(data.simulatedRipple + (Math.random() * 15 - 7)), 800);
    const nodeTimer = setInterval(() => setActiveNode(prev => (prev + 1) % data.regulationNodes.length), 3000); 
    return () => { clearInterval(rippleTimer); clearInterval(nodeTimer); };
  }, [data]);

  const activeNodeData = data.regulationNodes[activeNode];

  return (
    <div className="w-full bg-white rounded-[3rem] border border-slate-200 shadow-xl relative overflow-hidden flex flex-col lg:flex-row gap-10 p-8 lg:p-12">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#ecfdf5_0%,transparent_50%)] pointer-events-none opacity-50" />

       {/* LEFT: DUAL-SCOPE VISUALIZER */}
       <div className="lg:w-2/3 w-full bg-slate-50 rounded-[2rem] border border-slate-200 shadow-inner p-6 relative overflow-hidden flex flex-col gap-6">
          <div className="flex justify-between items-center z-10 relative">
             <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
                <Activity className="w-4 h-4 text-emerald-500" />
                <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest">Signal Fidelity Analysis</span>
             </div>
             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
          </div>

          {/* Scope 1: Noisy Input */}
          <div className="w-full h-32 bg-white rounded-xl border border-amber-100 relative overflow-hidden flex items-center justify-center shadow-sm">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#fef3c7_1px,transparent_1px),linear-gradient(to_bottom,#fef3c7_1px,transparent_1px)] bg-[size:20px_20px] opacity-40 z-0" />
            <span className="absolute top-2 left-3 text-[9px] font-black text-amber-500 uppercase tracking-widest z-10">CH1: Raw Input (110V)</span>
            <svg viewBox="0 0 400 100" className="absolute w-full h-full z-10" preserveAspectRatio="none">
              <motion.path 
                d="M 0 50 Q 20 10, 40 50 T 80 50 T 120 50 T 160 50 T 200 50 T 240 50 T 280 50 T 320 50 T 360 50 T 400 50" 
                fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 4"
                animate={{ x: [-100, 0], d: [
                  "M 0 50 Q 20 0, 40 60 T 80 30 T 120 80 T 160 20 T 200 70 T 240 40 T 280 90 T 320 10 T 360 50 T 400 50",
                  "M 0 50 Q 20 80, 40 20 T 80 70 T 120 10 T 160 90 T 200 30 T 240 80 T 280 20 T 320 60 T 360 50 T 400 50"
                ]}} 
                transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }} 
              />
            </svg>
          </div>

          {/* Scope 2: Clean Output */}
          <div className="w-full h-32 bg-white rounded-xl border border-emerald-100 relative overflow-hidden flex items-center justify-center shadow-sm">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#d1fae5_1px,transparent_1px),linear-gradient(to_bottom,#d1fae5_1px,transparent_1px)] bg-[size:20px_20px] opacity-50 z-0" />
            <motion.div animate={{ left: ["-10%", "110%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="absolute top-0 bottom-0 w-1 bg-emerald-400 opacity-30 shadow-[0_0_20px_rgba(16,185,129,1)] z-10" />
            
            <span className="absolute top-2 left-3 text-[9px] font-black text-emerald-600 uppercase tracking-widest z-10">CH2: Regulated Output (48V)</span>
            <div className="w-full h-1 bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)] relative z-10 rounded-full mx-4" />
          </div>
       </div>

       {/* RIGHT: DATA NODES */}
       <div className="lg:w-1/3 flex flex-col gap-5 w-full relative z-10">
          <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl shadow-sm">
             <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-black text-emerald-700 uppercase tracking-widest bg-emerald-100 px-2 py-1 rounded">Active Node: {activeNodeData.id}</span>
                <Target className="w-5 h-5 text-emerald-600" />
             </div>
             <AnimatePresence mode="wait">
                 <motion.div key={activeNode} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} className="flex justify-between items-end">
                    <div>
                       <div className="text-4xl font-black text-slate-900 tracking-tight font-mono">{activeNodeData.voltage.toFixed(2)}V</div>
                       <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Output Voltage</p>
                    </div>
                    <div className="text-right">
                       <div className="text-xl font-bold text-emerald-600 font-mono">{activeNodeData.stability}%</div>
                       <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Stability</p>
                    </div>
                 </motion.div>
             </AnimatePresence>
          </div>
          
          <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm flex items-center justify-between">
             <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Peak Ripple</p>
                <div className="text-2xl font-black text-slate-900 font-mono">{ripple.toFixed(0)} <span className="text-sm">mV</span></div>
             </div>
             <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center">
               <Waves className="w-6 h-6 text-sky-500" />
             </div>
          </div>
       </div>
    </div>
  );
};

// // ==========================================
// // 2. DENSITY BENTO GRID
// // ==========================================
// const DensityBentoGrid = ({ data }: { data: any[] }) => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
//       {data.map((item, i) => {
//         const Icon = item.icon || Box;
//         return (
//           <motion.div 
//             key={i}
//             className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden flex flex-col items-center text-center group"
//           >
//              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-white to-sky-50/50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none blur-3xl" />
//              <div className="w-20 h-20 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 border border-slate-100 group-hover:bg-emerald-500 transition-colors duration-300">
//                <Icon className="w-10 h-10 text-slate-400 group-hover:text-white transition-colors" />
//              </div>
//              <h4 className="text-3xl font-black text-slate-900 mb-4 tracking-tight uppercase group-hover:text-emerald-700 transition-colors">{item.title}</h4>
//              <p className="text-base text-slate-600 font-medium leading-relaxed flex-grow relative z-10">{item.desc}</p>
//              <div className="w-full h-1 bg-emerald-100 mt-8 rounded-full group-hover:bg-emerald-500 transition-colors" />
//           </motion.div>
//         )
//       })}
//     </div>
//   );
// };


// ==========================================
// 2. DENSITY BENTO GRID (Fixed Hover Visibility)
// Professional contrast with no white-washout
// ==========================================
const DensityBentoGrid = ({ data }: { data: any[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
      {data.map((item, i) => {
        const Icon = item.icon || Box;
        return (
          <motion.div 
            key={i}
            className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-md hover:shadow-2xl hover:border-emerald-300 transition-all duration-300 relative overflow-hidden flex flex-col items-center text-center group"
          >
             {/* Soft background tint on hover, removing the heavy white gradient */}
             <div className="absolute inset-0 bg-emerald-50/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
             
             {/* FIX: Removed 'group-hover:text-white'. Uses bold emerald-700 on a soft emerald-100 background */}
             <div className="relative z-10 w-20 h-20 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 border border-slate-200 group-hover:bg-emerald-100 group-hover:border-emerald-300 transition-all duration-300 shadow-sm">
               <Icon className="w-10 h-10 text-emerald-600 group-hover:text-emerald-700 transition-colors" />
             </div>
             
             {/* Text styling stays crisp and dark */}
             <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight uppercase group-hover:text-emerald-800 transition-colors relative z-10">{item.title}</h4>
             <p className="text-base text-slate-600 font-bold leading-relaxed flex-grow relative z-10">{item.desc}</p>
             
             {/* Bottom accent line */}
             <div className="w-full h-1 bg-slate-100 mt-8 rounded-full group-hover:bg-emerald-500 transition-colors relative z-10" />
          </motion.div>
        )
      })}
    </div>
  );
};

// ==========================================
// 3. LIGHT SPEC TERMINAL (FIX FOR IMAGE 1)
// Clean, bright, layout-safe autonomous scanner
// ==========================================
const LightSpecTerminal = ({ specs }: { specs: any }) => {
  if (!specs) return null;
  const entries = Object.entries(specs);
  const [typedIndex, setTypedIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTypedIndex(prev => (prev + 1) % entries.length);
    }, 2000); 
    return () => clearInterval(timer);
  }, [entries.length]);

  return (
    <div className="w-full bg-white border border-slate-200 rounded-[3rem] p-10 mt-12 relative overflow-hidden flex flex-col shadow-xl">
       <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:15px_15px] pointer-events-none" />
       
       <div className="flex flex-col md:flex-row items-center justify-between border-b border-slate-100 pb-6 mb-8 relative z-10">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
             <div className="p-3 bg-sky-50 rounded-xl border border-sky-100"><Settings className="w-8 h-8 text-sky-500" /></div>
             <h3 className="font-display text-3xl font-extrabold text-slate-900 uppercase">Meticulous Regulation Profiles</h3>
          </div>
          <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full border border-slate-200">
             <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
             <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Live Diagnostic Active</span>
          </div>
       </div>

       {/* Active Highlight Display Box */}
       <div className="relative w-full aspect-[21/6] md:aspect-[21/3] bg-slate-50 border border-slate-200 rounded-3xl p-8 overflow-hidden flex flex-col justify-center shadow-inner mb-8">
          <motion.div animate={{ left: ["-10%", "110%", "-10%"] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="absolute top-0 bottom-0 w-1 bg-sky-400 opacity-60 z-20 shadow-[0_0_15px_rgba(56,189,248,0.8)]" />
          <AnimatePresence mode="wait">
             <motion.div key={typedIndex} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.02 }} transition={{ duration: 0.3 }} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 w-full">
               <span className="text-sky-600 font-black uppercase tracking-widest text-lg md:text-xl md:w-1/3 whitespace-nowrap truncate">{entries[typedIndex][0]}</span>
               <span className="text-slate-800 font-mono font-bold text-xl md:text-3xl md:w-2/3">{String(entries[typedIndex][1])}</span>
             </motion.div>
          </AnimatePresence>
       </div>

       {/* Static Grid */}
       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {entries.map(([key, value]) => (
             <div key={key} className={`px-5 py-4 rounded-xl border transition-all duration-300 flex flex-col justify-center ${typedIndex === Object.keys(specs).indexOf(key) ? 'bg-sky-50 border-sky-300 shadow-md scale-105' : 'bg-white border-slate-100 shadow-sm'}`}>
                 <span className={`text-[10px] uppercase tracking-widest mb-1 ${typedIndex === Object.keys(specs).indexOf(key) ? 'text-sky-600 font-black' : 'text-slate-500 font-bold'}`}>{key}</span>
                 <span className={`font-bold ${typedIndex === Object.keys(specs).indexOf(key) ? 'text-slate-900' : 'text-slate-700'}`}>{String(value)}</span>
             </div>
          ))}
       </div>
    </div>
  );
};

// ==========================================
// 4. FIXED FOOTER RELAY (FIX FOR IMAGE 2)
// Fixed, autonomous sequential highlighting grid
// ==========================================
const FixedFooterRelay = ({ footers }: { footers: string[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!footers || footers.length === 0) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % footers.length);
    }, 2500); 
    return () => clearInterval(timer);
  }, [footers]);

  if (!footers) return null;

  return (
    <section className="bg-slate-50 py-16 overflow-hidden relative border-t border-slate-200 shadow-inner">
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px] opacity-50 pointer-events-none" />

       <div className="container max-w-6xl mx-auto relative z-10">
         {/* Continuous Energy Line */}
         <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 rounded-full hidden md:block z-0 overflow-hidden">
            <motion.div animate={{ x: ["-100%", "300%"] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="w-1/3 h-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
           {footers.slice(0, 3).map((footer, i) => {
             const isActive = activeIndex === i;
             return (
               <motion.div
                 key={i} animate={{ y: isActive ? -8 : 0 }}
                 className={`flex flex-col items-center text-center p-8 rounded-3xl border transition-all duration-500 bg-white ${isActive ? 'border-emerald-300 shadow-[0_15px_40px_rgba(16,185,129,0.15)]' : 'border-slate-200 shadow-sm'}`}
               >
                 <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border transition-all duration-500 ${isActive ? 'bg-emerald-50 border-emerald-200 scale-110' : 'bg-slate-50 border-slate-100'}`}>
                    <Settings className={`w-8 h-8 transition-colors duration-500 ${isActive ? 'text-emerald-500' : 'text-slate-400'}`} />
                    {isActive && <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-2xl border-2 border-dashed border-emerald-400 opacity-60" />}
                 </div>
                 <span className={`text-sm md:text-base font-black tracking-widest uppercase transition-colors duration-500 ${isActive ? 'text-slate-900' : 'text-slate-500'}`}>
                   {footer}
                 </span>
                 <div className={`mt-6 w-16 h-1.5 rounded-full transition-all duration-500 ${isActive ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)] w-24' : 'bg-slate-200'}`} />
               </motion.div>
             )
           })}
         </div>
       </div>
    </section>
  );
};



// ==========================================
// NEW: PROTECTION PROTOCOLS MATRIX
// Highly animated safety mechanism readout
// ==========================================
const ProtectionProtocolsMatrix = ({ protocols }: { protocols: any[] }) => {
  if (!protocols) return null;
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mx-auto">
      {protocols.map((prot, i) => (
        <motion.div 
          key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
          className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 relative overflow-hidden group"
        >
           <motion.div animate={{ height: ["0%", "100%", "0%"] }} transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: i * 0.5 }} className="absolute left-0 top-0 w-1 bg-sky-400 opacity-0 group-hover:opacity-100 transition-opacity" />
           <div className="w-12 h-12 bg-sky-50 rounded-xl border border-sky-100 flex items-center justify-center mb-5 group-hover:bg-sky-500 transition-colors">
              <ShieldAlert className="w-6 h-6 text-sky-600 group-hover:text-white transition-colors" />
           </div>
           <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4 h-10">{prot.name}</h4>
           <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 mb-3">
              <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Threshold Limit</span>
              <span className="text-sm font-bold text-slate-800">{prot.threshold}</span>
           </div>
           <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-3">
              <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">System Action</span>
              <span className="text-sm font-bold text-emerald-700">{prot.recovery}</span>
           </div>
        </motion.div>
      ))}
    </div>
  );
};

// ==========================================
// MAIN PAGE COMPONENT
// ==========================================
const DcDcSystemPageLow = () => {
  const product = productsData["dc-dc-system-low"];
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [200, 300], [0, 1]);

  // Hero Image Carousel Logic
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const heroImages = [
    product?.heroImage,
    "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=1000&auto=format&fit=crop"  
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
      <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-emerald-200 selection:text-emerald-900 relative">
        <Navbar />

        {/* STICKY HEADER */}
        <div className="sticky z-30 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm" style={{ top: '64px' }}>
          <div className="container py-3 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
              <Link to="/" className="hover:text-emerald-600 transition-colors">Home</Link> <span>/</span>
              <Link to="/products" className="hover:text-emerald-600 transition-colors">Catalogue</Link> <span>/</span>
              <span className="hidden sm:inline-block cursor-default">{product.category || 'Converters'}</span> <span className="hidden sm:inline-block">/</span>
              <span className="text-emerald-600 font-bold">DC-DC System (Low Power)</span>
            </div>
            <motion.div style={{ opacity: headerOpacity }} className="flex items-center gap-4 pointer-events-none">
              <span className="hidden lg:block font-display font-bold text-slate-900 uppercase">DC-DC 6kW Series</span>
              <button className="px-5 py-2.5 rounded-xl font-bold text-white bg-emerald-500 text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all pointer-events-auto">
                Request Quote
              </button>
            </motion.div>
          </div>
        </div>
        
        {/* Adjusted padding to remove excess top whitespace */}
        <main className="pt-2 lg:pt-4 relative">
          
          {/* 1. HERO SECTION (Fix for Image 3) */}
          <section className="container pb-16 overflow-hidden relative border-b border-slate-100">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#ecfdf5_0%,transparent_60%)] pointer-events-none" />
            
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10 mt-6">
              
              {/* Enhanced Description and Spacing */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-[10px] font-black uppercase tracking-widest mb-6 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Embedded Power Systems
                </div>
                <h1 className="font-display text-5xl lg:text-7xl font-black text-slate-900 mb-4 tracking-tight uppercase leading-[1.05]">
                  DC-DC System
                </h1>
                <p className="text-2xl lg:text-3xl text-emerald-600 font-black mb-6 uppercase tracking-wide">
                  Low Power (0.3 kW – 6 kW)
                </p>
                <p className="text-lg font-bold text-slate-600 border-l-4 border-sky-400 pl-4 mb-6">
                  Compact, high-efficiency converters meticulously designed for embedded and distributed power systems.
                </p>
                <p className="text-base text-slate-500 font-medium mb-8 leading-relaxed max-w-lg">
                  Built with advanced regulation and ultra-low noise architecture to ensure your sensitive instrumentation receives pure, uninterrupted DC power in the most space-constrained environments.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-4 rounded-xl font-black text-white bg-emerald-500 shadow-[0_10px_20px_rgba(16,185,129,0.3)] hover:shadow-[0_15px_30px_rgba(16,185,129,0.5)] transition-all duration-300 flex items-center gap-2 hover:-translate-y-1 uppercase tracking-wide">
                    Configure Module <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="px-8 py-4 rounded-xl font-bold text-slate-700 bg-white border-2 border-slate-200 hover:border-emerald-400 hover:bg-emerald-50 transition-all duration-300 flex items-center gap-2 shadow-sm hover:-translate-y-1">
                    <Download className="w-5 h-5 text-emerald-500" /> Datasheet
                  </button>
                </div>
              </motion.div>

              {/* Multi-Image Carousel Hero Box */}
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative w-full aspect-square md:aspect-[4/3] flex items-center justify-center">
                 <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute w-[80%] h-[80%] border-2 border-dashed border-emerald-200 rounded-full" />
                 <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute w-[60%] h-[60%] border border-sky-200 rounded-full" />
                 
                 <div className="relative z-10 w-full h-full flex items-center justify-center overflow-hidden rounded-[3rem] bg-white/50 backdrop-blur-sm border border-slate-100 shadow-2xl p-8">
                    <AnimatePresence mode="wait">
                       <motion.img 
                          key={currentHeroImage}
                          src={heroImages[currentHeroImage]} 
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                          alt="DC-DC System Visual" 
                          className="w-[80%] object-contain drop-shadow-2xl mix-blend-multiply" 
                       />
                    </AnimatePresence>

                    {/* Carousel Indicators */}
                    <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
                      {heroImages.map((_, i) => (
                        <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${currentHeroImage === i ? "w-6 bg-emerald-500" : "w-1.5 bg-slate-300"}`} />
                      ))}
                    </div>
                 </div>
              </motion.div>
            </div>
          </section>

          {/* 2. TELEMETRY: RIPPLE SUPPRESSION (With Scroll Animation) */}
          <section className="py-20 relative overflow-hidden bg-slate-50 border-y border-slate-200">
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7 }} className="container relative z-10">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-sky-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">Active Signal Conditioning</span>
                <h2 className="font-display text-4xl font-black text-slate-900 uppercase tracking-tight">Precision Ripple Suppression</h2>
              </div>
              <NanogridOscilloscope data={product.liveOscilloscope} />
            </motion.div>
          </section>

          {/* 3. ARCHITECTURE: BENTO GRID (With Scroll Animation) */}
          <section className="py-20 relative overflow-hidden bg-white">
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7 }} className="container max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <span className="text-emerald-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">Design Architecture</span>
                <h2 className="font-display text-4xl font-black text-slate-900 uppercase tracking-tight">Compact High-Density Platform</h2>
              </div>
              <DensityBentoGrid data={product.keyValueProposition} />
            </motion.div>
          </section>

          {/* 4. LIGHT SPEC TERMINAL (FIX FOR IMAGE 1) */}
          <section className="py-20 bg-slate-50 relative overflow-hidden border-y border-slate-200">
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7 }} className="container max-w-6xl mx-auto relative z-10">
               <LightSpecTerminal specs={product.technicalSpecifications.inputData} />
            </motion.div>
          </section>

          {/* NEW DATA SECTION: PROTECTION PROTOCOLS */}
          <section className="py-20 relative overflow-hidden bg-slate-50 border-b border-slate-200">
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7 }} className="container relative z-10">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-sky-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">Fail-Safe Engineering</span>
                <h2 className="font-display text-4xl font-black text-slate-900 uppercase tracking-tight">Active Protection Protocols</h2>
              </div>
              {/* Only render if the data exists (prevents crashes if Step 1 was missed) */}
              {product.protectionProtocols && (
                <ProtectionProtocolsMatrix protocols={product.protectionProtocols} />
              )}
            </motion.div>
          </section>

          {/* 5. DEPLOYMENT APPLICATIONS GRID */}
          <section className="py-20 bg-white border-b border-slate-200 relative overflow-hidden">
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7 }} className="container max-w-6xl mx-auto relative z-10">
              <div className="text-center mb-12">
                <span className="text-sky-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">Critical Embedded Deployment Suitability</span>
                <h2 className="font-display text-4xl font-black text-slate-900 uppercase tracking-tight">Ideally suited Environments</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {product.applicationGrid.map((app: any, i: number) => {
                  const Icon = app.icon || Zap;
                  return (
                    <motion.div 
                      key={app.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="group bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:border-emerald-400 hover:shadow-xl hover:-translate-y-2 transition-all cursor-default flex items-center gap-6"
                    >
                      <div className="w-16 h-16 rounded-xl bg-slate-100 flex items-center justify-center border border-slate-200 group-hover:bg-emerald-500 transition-colors shrink-0">
                         <Icon className="w-8 h-8 text-slate-400 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="text-xl font-extrabold text-slate-900 mb-1 group-hover:text-emerald-700">{app.name}</h4>
                        <p className="text-sm text-slate-600 font-medium leading-relaxed">{app.desc}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </section>


           {/* 7. FIXED AUTONOMOUS FOOTER TELEMETRY (FIX FOR IMAGE 2) */}
          <FixedFooterRelay footers={product.footers} />

          {/* 6. SPEAK TO A POWER SCIENTIST (Beautiful Light Theme) */}
          <section className="container py-24">
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7 }} className="bg-gradient-to-br from-white via-sky-50 to-emerald-50 rounded-[3rem] p-10 lg:p-20 flex flex-col lg:flex-row gap-12 items-center justify-between shadow-2xl border border-sky-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-200/40 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-80 h-80 bg-sky-200/40 rounded-full blur-[80px] pointer-events-none" />
              
              <div className="lg:w-1/2 relative z-10 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-sky-200 text-sky-700 text-xs font-black tracking-widest uppercase mb-8 shadow-sm">
                   <FlaskConical className="w-4 h-4 text-sky-500" /> Technical Consultation
                </div>
                <h2 className="font-display text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-[1.1] uppercase tracking-tight">Speak to a <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-sky-500">Power Scientist</span></h2>
                <p className="text-xl text-slate-600 font-medium mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">Our R&D team is ready to discuss custom voltage rails, precise ripple requirements, and embedded form-factor modifications for your specific instrumentation.</p>
                <div className="flex justify-center lg:justify-start gap-4">
                  <button className="px-10 py-5 rounded-2xl font-black text-white bg-slate-900 shadow-xl hover:bg-slate-800 hover:-translate-y-1 transition-all uppercase tracking-wider flex items-center gap-2">
                    Contact Engineering <ArrowRight className="w-5 h-5 text-sky-400" />
                  </button>
                </div>
              </div>

              <div className="lg:w-5/12 flex flex-col gap-6 w-full relative z-10">
                <div className="bg-white/80 backdrop-blur-md rounded-[2rem] p-8 flex items-center gap-6 shadow-lg border border-white hover:border-emerald-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="relative">
                    <motion.div animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0 bg-emerald-400 rounded-2xl" />
                    <div className="w-16 h-16 rounded-2xl border border-emerald-100 bg-emerald-50 flex items-center justify-center relative z-10 group-hover:bg-emerald-500 transition-colors"><Phone className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors" /></div>
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

export default DcDcSystemPageLow;