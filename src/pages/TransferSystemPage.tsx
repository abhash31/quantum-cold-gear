// import { useState, useEffect } from "react";
// import { Navbar } from "@/components/Navbar";
// import { Footer } from "@/components/Footer";
// import { PageTransition } from "@/components/PageTransition";
// import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
// import { 
//   ArrowLeft, ArrowRight, Download, Phone, Mail, ChevronRight, 
//   Settings, Activity, Cpu, Layers, CheckCircle2, SlidersHorizontal, PackageSearch,
//   Focus, Map, Scaling, ScanFace, Box, Target, Zap, RotateCcw, Camera // <-- New icon imports
// } from "lucide-react";
// import { Link } from "react-router-dom";
// import { productsData } from "@/data/products";

// // ==========================================
// // 1. STAGE TELEMETRY VISUALIZER (Motorised Axes)
// // NEW Pattern: Upgraded simulation visualizer with graphs and linear gauges
// // ==========================================
// const TransferTelemetry = () => {
//   return (
//     <motion.div 
//       initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }}
//       className="w-full bg-white rounded-[2.5rem] border border-slate-200 shadow-xl overflow-hidden font-sans flex flex-col relative"
//     >
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#f1f5f9_2px,transparent_2px)] bg-[size:24px_24px] pointer-events-none" />
      
//       <div className="bg-slate-50 border-b border-slate-200 px-8 py-5 flex items-center justify-between relative z-10">
//         <div className="flex items-center gap-3">
//           <div className="w-3 h-3 rounded-full bg-amber-400 animate-pulse shadow-[0_0_12px_rgba(251,191,36,0.6)]" />
//           <span className="text-slate-600 text-xs font-extrabold tracking-widest uppercase font-mono">Stage Axis Readout</span>
//         </div>
//         <div className="flex gap-4">
//           <span className="text-xs font-bold font-mono text-amber-700 bg-amber-100 border border-amber-200 px-2 py-1 rounded shadow-sm">LINEAR XYZ ACTIVE</span>
//           <span className="text-xs font-bold font-mono text-blue-700 bg-blue-100 border border-blue-200 px-2 py-1 rounded shadow-sm">ROTATION & TILT POSITIONED</span>
//         </div>
//       </div>

//       <div className="p-8 grid lg:grid-cols-3 gap-8 relative z-10 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
        
//         {/* GRAPH 1: XY Coordinate Grid with path */}
//         <div className="px-0 lg:px-6 relative flex flex-col overflow-hidden pb-8 lg:pb-0">
//           <div className="flex justify-between items-start mb-6">
//             <div>
//               <p className="text-amber-600 text-xs font-extrabold uppercase tracking-widest mb-1">Position Mapping</p>
//               <p className="text-2xl font-extrabold text-slate-900 tracking-tight">Active Flake Search</p>
//             </div>
//             <div className="p-3 bg-amber-50 rounded-2xl border border-amber-100"><Map className="w-6 h-6 text-amber-500" /></div>
//           </div>
          
//           <div className="flex-grow w-full h-48 mt-2 border-l-2 border-b-2 border-slate-200 relative overflow-hidden flex items-center justify-center bg-slate-50 rounded-xl">
//              <svg viewBox="0 0 200 200" className="absolute h-40 w-40 text-slate-200">
//                 <line x1="100" y1="0" x2="100" y2="200" stroke="currentColor" strokeWidth="1" />
//                 <line x1="0" y1="100" x2="200" y2="100" stroke="currentColor" strokeWidth="1" />
//              </svg>
//              <motion.div 
//                animate={{ x: [0, 60, -30, 0], y: [0, -40, 50, 0] }}
//                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//                className="w-4 h-4 bg-amber-500 rounded-full flex items-center justify-center shadow-lg border border-white z-20"
//              >
//                 <div className="w-1.5 h-1.5 bg-white rounded-full" />
//              </motion.div>
//             <div className="absolute top-2 left-2 text-[10px] font-bold text-slate-400 uppercase">XY Travel</div>
//           </div>
//         </div>

//         {/* GRAPH 2: Z-Axis Depth Gauge */}
//         <div className="px-0 lg:px-6 relative flex flex-col overflow-hidden py-8 lg:py-0">
//           <div className="flex justify-between items-start mb-6">
//             <div>
//               <p className="text-blue-500 text-xs font-extrabold uppercase tracking-widest mb-1">Depth Gauge</p>
//               <p className="text-2xl font-extrabold text-slate-900 tracking-tight">Motorised Z-Axis</p>
//             </div>
//             <div className="p-3 bg-blue-50 rounded-2xl border border-blue-100"><Focus className="w-6 h-6 text-blue-500" /></div>
//           </div>
          
//           <div className="flex-grow flex flex-col items-center justify-center w-full h-48 mt-2 bg-slate-50 border border-slate-200 rounded-xl relative overflow-hidden p-6 gap-2">
//              <span className="text-[10px] font-extrabold text-slate-400 uppercase self-start">Travel (25mm)</span>
//              <div className="w-full h-4 bg-slate-200 rounded-full overflow-hidden relative">
//                 <motion.div 
//                   className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
//                   animate={{ width: ["0%", "75%", "0%"] }}
//                   transition={{ duration: 6, ease: "linear", repeat: Infinity, repeatDelay: 1 }}
//                 />
//              </div>
//              <span className="text-3xl font-mono font-black text-blue-700">12.500 mm</span>
//           </div>
//         </div>

//         {/* DATA 3: Real-Time Coordinate Counters */}
//         <div className="px-0 lg:px-6 relative flex flex-col overflow-hidden pt-8 lg:pt-0">
//           <div className="flex justify-between items-start mb-6">
//             <div>
//               <p className="text-slate-500 text-xs font-extrabold uppercase tracking-widest mb-1">Encoded Readout</p>
//               <p className="text-2xl font-extrabold text-slate-900 tracking-tight">&lt; 0.1µm Resolution</p>
//             </div>
//             <div className="p-3 bg-slate-100 rounded-2xl border border-slate-200"><Scaling className="w-6 h-6 text-slate-500" /></div>
//           </div>
          
//           <div className="flex-grow flex flex-col justify-center gap-3 w-full h-48 mt-2">
//             {[ {label: 'XY Stage (mm)', value: '100.000'}, {label: 'Rotation (°)', value: '359.99°'}, {label: 'Tilt (°)', value: '±5.00°'} ].map((coord, i) => (
//               <div key={i} className={`bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl flex items-center justify-between transition-colors duration-500 hover:border-amber-200 relative overflow-hidden`}>
//                 <div className={`absolute left-0 top-0 bottom-0 w-1 bg-${i === 1 ? 'blue' : 'amber'}-400 rounded-l-xl`} />
//                 <span className="text-xs font-extrabold text-slate-500 uppercase tracking-widest pl-2">{coord.label}</span>
//                 <span className={`text-lg font-black text-slate-900 font-mono`}>{coord.value}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </motion.div>
//   );
// };

// // ==========================================
// // 2. SUBSYSTEMS VISUALIZER
// // NEW Pattern: Interactive Exploded View Diagram
// // Stagger-Scale entry pattern mixed with interaction
// // ==========================================
// const SubsystemsInteractive = ({ subsystems }: { subsystems: any[] }) => {
//   return (
//     <div className="w-full relative py-12">
//         {/* Conceptual Exploded View Background (Repurposed Center line) */}
//         <svg viewBox="0 0 200 300" className="absolute h-96 w-auto text-slate-300 opacity-60">
//             <line x1="100" y1="20" x2="100" y2="280" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
//             {[40, 150, 190, 240].map(cy => (
//                 <circle key={cy} cx="100" cy={cy} r="4" fill="currentColor" />
//             ))}
//         </svg>

//         {/* Interaction Component assembly */}
//         <div className="relative w-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 items-start max-w-7xl mx-auto px-6">
//             {subsystems.map((item, i) => {
//                 const isEven = i % 2 === 0;
//                 const Icon = item.icon;
//                 return (
//                     <motion.div
//                         key={item.id}
//                         initial={{ opacity: 0, x: isEven ? -50 : 50, scale: 0.95 }}
//                         whileInView={{ opacity: 1, x: 0, scale: 1 }}
//                         viewport={{ once: true, amount: 0.1 }}
//                         transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
//                         className={`group bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:border-amber-200 hover:shadow-lg transition-all flex flex-col relative ${isEven ? 'text-right' : 'text-left'}`}
//                     >
//                         <div className={`flex items-center gap-4 mb-5 border-b border-slate-100 pb-4 relative z-10 ${isEven ? 'flex-row-reverse' : ''}`}>
//                             <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100"><Icon className="w-6 h-6" /></div>
//                             <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">{item.title}</h3>
//                         </div>
//                         <p className="text-sm text-slate-700 font-bold leading-relaxed">{item.desc}</p>
                        
//                         {/* Staggered Component assembly Visual indicator */}
//                         <div className={`absolute top-[4rem] flex items-center gap-2 ${isEven ? '-left-[4.5rem]' : '-right-[4.5rem] flex-row-reverse'}`}>
//                             <motion.div initial={{ width: 0 }} whileInView={{ width: '3rem' }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 + 0.3 }} className={`h-[2px] bg-amber-300`} />
//                             <div className={`w-3 h-3 rounded-full bg-amber-400 group-hover:scale-125 transition-transform`} />
//                         </div>
//                     </motion.div>
//                 )
//             })}
//         </div>
//     </div>
//   );
// };

// // ==========================================
// // 3. AUTOMATION SEQUENCE DIAGRAM
// // NEW Pattern: Visualizing a theoretical Sequence Logic Flow
// // Deterministic Transfer steps.
// // ==========================================
// const AutomationSequence = ({ steps }: { steps: string[] }) => {
//   return (
//     <motion.div 
//       initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
//       className="w-full bg-slate-950 rounded-[2.5rem] border border-slate-700 shadow-2xl p-10 relative overflow-hidden"
//     >
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#334155_2px,transparent_2px)] bg-[size:20px_20px] opacity-40 pointer-events-none" />
//         <div className="relative z-10 grid grid-cols-1 md:grid-cols-5 gap-8 items-center text-center">
//             {steps.map((step: string, i: number) => {
//                 const isActive = i % 2 === 0; // Simulate auto-playing token flow
//                 return (
//                     <motion.div 
//                         initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
//                         key={step} 
//                         className={`border-2 rounded-xl p-5 flex flex-col items-center gap-3 transition-colors ${isActive ? 'bg-amber-600 border-amber-700 text-white' : 'bg-slate-800 border-slate-700 text-slate-300'}`}
//                     >
//                         <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 border transition-colors ${isActive ? 'bg-amber-700 border-amber-800' : 'bg-slate-700 border-slate-600'}`}>
//                             <span className="text-xl font-mono font-black">{String(i+1).padStart(2,'0')}</span>
//                         </div>
//                         <h4 className="text-sm font-extrabold leading-snug">{step}</h4>
//                         {isActive && <CheckCircle2 className="w-5 h-5 ml-auto text-amber-100" />}
//                     </motion.div>
//                 )
//             })}
//         </div>
//     </motion.div>
//   );
// };

// // ==========================================
// // 4. DESIGN HIGHLIGHTS (Autonomous Playback)
// //Pattern: Approved Pattern (Autonomous display), color refined
// // ==========================================
// const AutonomousDesignHighlights = ({ highlights }: { highlights: any[] }) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const icons = [Cpu, Target, Camera, Layers];

//   // Auto-play interval
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % highlights.length);
//     }, 4000); // Changes every 4 seconds
//     return () => clearInterval(timer);
//   }, [highlights.length]);

//   return (
//     <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-stretch bg-white p-6 rounded-[2.5rem] border border-slate-200 shadow-xl mt-8">
        
//         {/* Left Side: Navigation List */}
//         <div className="w-full md:w-5/12 flex flex-col gap-2 relative">
//             <div className="absolute left-[1.125rem] top-4 bottom-4 w-0.5 bg-slate-100 rounded-full" />
//             {highlights.map((item, i) => (
//                 <div 
//                     key={i} 
//                     onClick={() => setActiveIndex(i)} 
//                     className={`cursor-pointer p-4 rounded-2xl transition-all duration-300 relative z-10 flex items-center gap-4 ${activeIndex === i ? 'bg-slate-50 shadow-sm border border-slate-200' : 'border border-transparent hover:bg-slate-50/50'}`}
//                 >
//                     {/* Progress Indicator Dot */}
//                     <div className="relative flex items-center justify-center shrink-0">
//                        <div className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === i ? 'bg-amber-500 scale-125' : 'bg-slate-300'}`} />
//                        {activeIndex === i && (
//                           <motion.svg className="absolute w-8 h-8 text-amber-500" viewBox="0 0 100 100">
//                              <motion.circle cx="50" cy="50" r="46" fill="transparent" stroke="currentColor" strokeWidth="6" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 4, ease: "linear" }} strokeDasharray="289" strokeDashoffset="0" />
//                           </motion.svg>
//                        )}
//                     </div>
//                     <h4 className={`text-sm font-extrabold leading-tight ${activeIndex === i ? 'text-amber-700' : 'text-slate-500'}`}>{item.title}</h4>
//                 </div>
//             ))}
//         </div>

//         {/* Right Side: Visual & Description Display */}
//         <div className="w-full md:w-7/12 min-h-[300px] bg-slate-50 rounded-3xl border border-slate-200 flex flex-col items-center justify-center p-10 relative overflow-hidden text-center shadow-inner">
//             <AnimatePresence mode="wait">
//                 <motion.div 
//                     key={activeIndex} 
//                     initial={{ opacity: 0, scale: 0.95, y: 10 }} 
//                     animate={{ opacity: 1, scale: 1, y: 0 }} 
//                     exit={{ opacity: 0, scale: 1.05, y: -10 }} 
//                     transition={{ duration: 0.4 }} 
//                     className="relative z-10 flex flex-col items-center"
//                 >
//                     <div className="w-20 h-20 bg-white rounded-[1.25rem] shadow-md border border-amber-100 flex items-center justify-center mb-8 text-amber-500">
//                         {(() => {
//                             const Icon = icons[activeIndex % icons.length];
//                             return <Icon className="w-10 h-10" />
//                         })()}
//                     </div>
//                     <h3 className="text-2xl font-extrabold text-slate-900 mb-4">{highlights[activeIndex].title}</h3>
//                     <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-sm">{highlights[activeIndex].desc}</p>
//                 </motion.div>
//             </AnimatePresence>
//             <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0, 0.2, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute inset-0 bg-amber-100 rounded-full blur-[80px] pointer-events-none" />
//         </div>

//     </div>
//   );
// };

// // ==========================================
// // 5. APPLICATIONS GRID 
// //Pattern: Scale-entry staggered grid pattern
// // ==========================================
// const ApplicationsGrid = ({ apps }: { apps: any[] }) => {
//   return (
//     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto pt-8">
//       {apps.map((app, i) => (
//         <motion.div 
//             initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
//             key={app.title} 
//             className={`border border-slate-200 rounded-3xl overflow-hidden bg-white p-6 group hover:border-amber-300 hover:shadow-lg transition-all relative`}
//           >
//             <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-amber-50 text-amber-600 mb-4 border border-amber-100`}>
//               <Box className="w-5 h-5" />
//             </div>
//             <h4 className="text-md font-extrabold text-slate-900 mb-2 leading-tight">{app.title}</h4>
//             <p className="text-sm text-slate-600 font-medium leading-relaxed">{app.desc}</p>
//           </motion.div>
//       ))}
//     </div>
//   );
// };

// // ==========================================
// // 6. MODULARITY & SPECS TABS
// // Pattern: Multi-tab accordion/tab system with refined accents for Microscope
// // ==========================================
// const ModularitySpecsTabs = ({ specsStructured }: { specsStructured: any }) => {
//   if (!specsStructured) return null;
//   const categories = Object.keys(specsStructured);
//   const [activeTab, setActiveTab] = useState(categories[0]);
//   const accentColors = [ "border-amber-200 text-amber-700 bg-amber-50", "border-blue-200 text-blue-700 bg-blue-50", "border-emerald-200 text-emerald-700 bg-emerald-50", "border-violet-200 text-violet-700 bg-violet-50" ];

//   return (
//     <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 mt-10">
//       <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible hide-scrollbar lg:w-1/3 shrink-0 pb-2 lg:pb-0">
//         {categories.map((cat, index) => {
//           const colorClass = accentColors[index % accentColors.length];
//           return (
//             <button key={cat} onClick={() => setActiveTab(cat)} className={`relative px-5 py-4 text-left rounded-2xl font-bold transition-all duration-300 flex items-center justify-between whitespace-nowrap outline-none ${activeTab === cat ? `${colorClass} shadow-sm border` : "text-slate-600 bg-white hover:bg-slate-50 border border-slate-200"}`}>
//               <span className="relative z-10 text-sm">{cat}</span>
//               {activeTab === cat && <ChevronRight className="w-4 h-4" />}
//             </button>
//           )
//         })}
//       </div>

//       <div className="lg:w-2/3 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden min-h-[350px]">
//         <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center gap-3">
//           <Settings className="w-5 h-5 text-slate-500" />
//           <h3 className="font-display font-extrabold text-slate-900 text-lg">{activeTab} Details</h3>
//         </div>
//         <div className="p-8">
//           <AnimatePresence mode="wait">
//             <motion.div key={activeTab} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.2 }} className="space-y-4">
//               {specsStructured[activeTab].map((item: any, i: number) => {
//                 const titleKey = Object.keys(item)[0];
//                 const specValue = Object.keys(item)[1];
//                 const resValue = Object.keys(item)[2];

//                 return (
//                   <motion.div 
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: i * 0.05 }}
//                     key={i} 
//                     className="flex gap-4 p-4 bg-slate-50 border border-slate-200 rounded-xl justify-between items-center"
//                   >
//                     <div className="flex items-center gap-3">
//                       <div className={`w-2 h-2 rounded-full ${activeTab === categories[0] ? 'bg-amber-500' : 'bg-blue-500'} shrink-0`} />
//                       <span className="text-sm font-bold text-slate-800 leading-relaxed">{item[titleKey]}</span>
//                     </div>
//                     <div className="text-right flex flex-col">
//                         <span className="text-base font-black text-slate-900 font-mono">{item[specValue]}</span>
//                         <span className="text-xs font-bold text-slate-500 uppercase font-mono">{item[resValue]}</span>
//                     </div>
//                   </motion.div>
//                 )
//               })}
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </motion.div>
//   );
// };


// // ==========================================
// // MAIN PAGE COMPONENT
// // ==========================================
// const TransferSystemPage = () => {
//   const product = productsData["2d-transfer-motorised"];
//   const { scrollY } = useScroll();
//   const headerOpacity = useTransform(scrollY, [200, 300], [0, 1]);
//   // Parallax transform for Hero model
//   const modelY = useTransform(scrollY, [0, 500], [0, 80]); 

//   if (!product) return <div className="min-h-screen bg-slate-50"><Navbar /></div>;

//   return (
//     <PageTransition>
//       <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-800 font-sans selection:bg-amber-100 selection:text-amber-900 relative">
//         <Navbar />

//         {/* Sticky Header */}
//         <div className="sticky z-30 w-full bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm" style={{ top: '64px' }}>
//           <div className="container py-3 flex items-center justify-between">
//             <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
//               <Link to="/" className="hover:text-amber-600 transition-colors">Home</Link> <span>/</span>
//               <Link to="/products" className="hover:text-amber-600 transition-colors">Catalog</Link> <span>/</span>
//               <span className="hidden sm:inline-block cursor-default text-slate-400">{product.category}</span> <span>/</span>
//               <span className="text-amber-600 font-bold">{product.name}</span>
//             </div>
//             <motion.div style={{ opacity: headerOpacity }} className="flex items-center gap-4 pointer-events-none">
//               <span className="hidden lg:block font-display font-bold text-slate-900">{product.name}</span>
//               <button className="px-5 py-2 rounded-xl font-bold text-white bg-amber-600 text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all pointer-events-auto">Request Quote</button>
//             </motion.div>
//           </div>
//         </div>
        
//         <main className="pt-8 lg:pt-12">
//           {/* HERO SECTION */}
//           <section className="container pb-12 lg:pb-16 overflow-hidden relative">
//             <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
//               <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
//                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-[10px] font-extrabold tracking-widest uppercase mb-6 shadow-sm">CRYO MICRO-NANO PROTOTYPING</div>
//                 <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight leading-[1.1]">
//                   {product.name}
//                 </h1>
//                 <p className="text-xl text-amber-600 font-bold mb-6">{product.subtitle}</p>
//                 <div className="space-y-4 mb-8">
//                   {product.overview?.map((p: string, i: number) => (
//                     <p key={i} className="text-base text-slate-600 leading-relaxed font-medium">{p}</p>
//                   ))}
//                 </div>
                
//                 <div className="flex flex-wrap gap-3">
//                   <button className="group px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-amber-600 to-amber-700 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2 hover:-translate-y-0.5">
//                     Get a Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                   </button>
//                   <button className="px-6 py-3 rounded-xl font-bold text-slate-700 bg-white border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all duration-300 flex items-center gap-2 shadow-sm hover:-translate-y-0.5">
//                     <Download className="w-4 h-4 text-amber-500" /> Full Specs
//                   </button>
//                 </div>
//               </motion.div>

//               {/* Parallax Hero Model */}
//               <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} style={{ y: modelY }} className="relative w-full aspect-[3/4] lg:aspect-square flex items-center justify-center">
//                 <div className="absolute inset-0 bg-gradient-to-tr from-amber-50 to-slate-100 rounded-[2.5rem] transform rotate-3 scale-105 opacity-60 pointer-events-none" />
//                 <div className="relative w-full h-full flex justify-center items-center">
//                     {/* Placeholder image of 2D Transfer system from brochure */}
//                     <img src={product.heroImage} alt="2D Transfer System Station" className="h-full object-contain mix-blend-multiply drop-shadow-2xl" />
//                 </div>
//               </motion.div>
//             </div>
//           </section>

//           {/* KEY FEATURES (Scale-In staggered pattern) */}
//           <section className="py-12 lg:py-16 bg-white relative overflow-hidden border-t border-slate-200">
//             <div className="container relative z-10">
//               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="text-center max-w-3xl mx-auto mb-10">
//                 <span className="text-amber-500 font-extrabold tracking-widest uppercase text-xs mb-2 block">Deterministic Placement</span>
//                 <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">Key System Features.</h2>
//               </motion.div>
//               <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
//                 {product.keyFeatures?.map((feature: string, i: number) => (
//                     <motion.div 
//                         initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
//                         key={feature} 
//                         className="flex items-start gap-4 p-5 bg-slate-50 border border-slate-200 rounded-xl hover:border-amber-300 transition-colors group"
//                     >
//                         <div className="p-2.5 bg-white rounded-lg border border-slate-200 shrink-0 text-amber-500 shadow-sm group-hover:bg-amber-600 group-hover:text-white transition-colors"><CheckCircle2 className="w-5 h-5"/></div>
//                         <span className="text-base font-bold text-slate-800 leading-snug pt-1">{feature}</span>
//                     </motion.div>
//                 ))}
//               </div>
//             </div>
//           </section>

//           {/* TELEMETRY SECTION (Motorised Stages controller visualization) */}
//           <section className="py-12 lg:py-16 bg-white relative overflow-hidden border-y border-slate-200">
//             <div className="container relative z-10">
//               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="text-center max-w-3xl mx-auto mb-10">
//                 <span className="text-amber-500 font-extrabold tracking-widest uppercase text-xs mb-2 block">Integrated Design Diagnostics</span>
//                 <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">Motorised Multi-Axis Controller Feedback.</h2>
//                 <p className="text-base text-slate-600 font-medium max-w-2xl mx-auto">Analyze active formal system diagnostics from fully fully motorised stages including travel depth, 360° rotation feedback, and ±5° tilt position readouts.</p>
//               </motion.div>
//               <div className="max-w-6xl mx-auto">
//                 <TransferTelemetry />
//               </div>
//             </div>
//           </section>

//           {/* SUBSYSTEMS (Interactive Diagram) Section */}
//           <section className="py-12 lg:py-16 relative overflow-hidden bg-slate-50">
//             <div className="container mx-auto">
//               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="text-center mb-12">
//                 <span className="text-amber-500 font-extrabold tracking-widest uppercase text-xs mb-2 block">Customisable Architecture</span>
//                 <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">Core System Subsystems.</h2>
//               </motion.div>
//               <div className="max-w-7xl mx-auto">
//                 <SubsystemsInteractive subsystems={product.subsystems} />
//               </div>
//             </div>
//           </section>

//           {/* AUTOMATION SEQUENCE SECTION */}
//           <section className="py-12 lg:py-16 bg-white relative overflow-hidden border-t border-slate-200">
//             <div className="container relative z-10">
//               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="text-center max-w-3xl mx-auto mb-12">
//                 <span className="text-cyan-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">Advanced capabilities</span>
//                 <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">Deterministic Process Logic Flow.</h2>
//               </motion.div>
//               <div className="max-w-7xl mx-auto">
//                 <AutomationSequence steps={product.automationProcess} />
//               </div>
//             </div>
//           </section>

//           {/* DESIGN HIGHLIGHTS (Autonomous Playback) Section */}
//           <section className="py-12 lg:py-16 bg-slate-50 relative overflow-hidden border-t border-slate-200">
//             <div className="container mx-auto relative z-10">
//               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="text-center max-w-3xl mx-auto mb-10">
//                 <span className="text-amber-500 font-extrabold tracking-widest uppercase text-xs mb-2 block">Precision Prototyping</span>
//                 <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">Integrated Advanced Capabilities.</h2>
//               </motion.div>
//               <div className="max-w-7xl mx-auto">
//                 <AutonomousDesignHighlights highlights={product.designHighlights} />
//               </div>
//             </div>
//           </section>

//           {/* MODULARITY & TECHNICAL SPECS TABS Section */}
//           <section className="py-12 lg:py-16 bg-white relative border-y border-slate-200 overflow-hidden">
//             <div className="container mx-auto">
//               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="text-center max-w-2xl mx-auto mb-8">
//                 <span className="text-amber-500 font-extrabold tracking-widest uppercase text-xs mb-2 block">Advanced Specifications</span>
//                 <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 mb-2">Technical Specs & Configuration.</h2>
//               </motion.div>
              
//               {/* Mult-Tab/accordion Specs visualizations */}
//               <ModularitySpecsTabs specsStructured={product.technicalSpecsStructured} />

//               <div className="max-w-6xl mx-auto mt-12 bg-slate-50 border border-slate-200 rounded-3xl p-8">
//                 <h3 className="text-xl font-extrabold text-slate-900 mb-6 flex items-center gap-3"><Scaling className="w-5 h-5 text-slate-500"/>Additional Customisable Options</h3>
//                 <ul className="space-y-4">
//                   {product.modularitySpecs["Technical Specifications"].map((item: string, i: number) => (
//                     <li key={i} className="flex gap-3 text-sm font-medium text-slate-700 leading-relaxed bg-white border border-slate-200 p-4 rounded-xl">
//                       <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" /> {item}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </section>

//           {/* APPLICATIONS SECTION */}
//           <section className="py-12 lg:py-16 relative overflow-hidden bg-slate-50">
//             <div className="container mx-auto relative z-10">
//               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="text-center max-w-2xl mx-auto mb-8">
//                 <span className="text-amber-500 font-extrabold tracking-widest uppercase text-xs mb-2 block">Ideal for materials</span>
//                 <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">Applications</h2>
//               </motion.div>
//               <div className="max-w-6xl mx-auto">
//                 <ApplicationsGrid apps={product.applications} />
//               </div>
//             </div>
//           </section>

//           {/* CTA SECTION */}
//           <section className="container py-12 lg:py-16 border-t border-slate-200 bg-white">
//             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="bg-[#fffbeb] rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row gap-10 items-center justify-between shadow-lg relative overflow-hidden">
//               <div className="absolute inset-0 bg-gradient-to-r from-amber-100 to-transparent pointer-events-none" />
//               <div className="lg:w-1/2 relative z-10 text-slate-900">
//                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 border border-slate-300 text-slate-800 text-[10px] font-extrabold tracking-widest uppercase mb-4 shadow-sm"><div className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Advanced Engineering Support</div>
//                 <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">Speak to an <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">Specialist</span></h2>
//                 <p className="text-base text-slate-700 font-medium mb-8">Discuss your fully customised 2D material transfer requirements and twistronics research today.</p>
//                 <button className="px-6 py-3 rounded-xl font-bold text-white bg-amber-600 shadow-sm hover:shadow-md transition-all flex items-center gap-2 hover:-translate-y-1">Get a Quote <ArrowRight className="w-4 h-4" /></button>
//               </div>
//               <div className="lg:w-5/12 flex flex-col gap-4 w-full relative z-10">
//                 <div className="bg-white rounded-2xl p-6 flex items-center gap-5 shadow-sm border border-slate-200 hover:border-amber-200 transition-colors">
//                   <div className="w-12 h-12 rounded-xl border border-slate-100 bg-slate-50 flex items-center justify-center shrink-0"><Phone className="w-5 h-5 text-amber-600" /></div>
//                   <div><p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-1">Call Us Directly</p><p className="text-xl font-extrabold text-slate-900">+91 97481 81485</p></div>
//                 </div>
//                 <div className="bg-white rounded-2xl p-6 flex items-center gap-5 shadow-sm border border-slate-200 hover:border-amber-200 transition-colors">
//                   <div className="w-12 h-12 rounded-xl border border-slate-100 bg-slate-50 flex items-center justify-center shrink-0"><Mail className="w-5 h-5 text-amber-600" /></div>
//                   <div><p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-1">Email Engineering</p><p className="text-lg font-extrabold text-slate-900">contact@cryonano.com</p></div>
//                 </div>
//               </div>
//             </motion.div>
//           </section>

//           <Footer />
//         </main>
//       </div>
//     </PageTransition>
//   );
// };

// export default TransferSystemPage;















import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  ArrowLeft, ArrowRight, Download, Phone, Mail, ChevronRight, 
  Settings, Activity, Cpu, Layers, CheckCircle2, SlidersHorizontal, PackageSearch,
  Focus, Map, Scaling, ScanFace, Box, Target, Zap, RotateCcw, Camera, Eye, Beaker 
} from "lucide-react";
import { Link } from "react-router-dom";
import { productsData } from "@/data/products";

// ==========================================
// 1. STAGE TELEMETRY VISUALIZER
// REFINED: Unique visual patterns for all 3 boxes with relative data
// ==========================================
const TransferTelemetry = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }}
      className="w-full bg-white rounded-[2.5rem] border border-slate-200 shadow-xl overflow-hidden font-sans flex flex-col relative"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#f1f5f9_2px,transparent_2px)] bg-[size:24px_24px] pointer-events-none" />
      
      <div className="bg-slate-50 border-b border-slate-200 px-8 py-5 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-amber-400 animate-pulse shadow-[0_0_12px_rgba(251,191,36,0.6)]" />
          <span className="text-slate-600 text-xs font-extrabold tracking-widest uppercase font-mono">Stage Axis Readout</span>
        </div>
        <div className="flex gap-4">
          <span className="text-xs font-bold font-mono text-amber-700 bg-amber-100 border border-amber-200 px-2 py-1 rounded shadow-sm">LINEAR XYZ ACTIVE</span>
          <span className="text-xs font-bold font-mono text-blue-700 bg-blue-100 border border-blue-200 px-2 py-1 rounded shadow-sm">ROTATION & TILT POSITIONED</span>
        </div>
      </div>

      <div className="p-8 grid lg:grid-cols-3 gap-8 relative z-10 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
        
        {/* GRAPH 1: Animated Flake Alignment Target */}
        <div className="px-0 lg:px-6 relative flex flex-col overflow-hidden pb-8 lg:pb-0">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-amber-600 text-xs font-extrabold uppercase tracking-widest mb-1">XY Plane</p>
              <p className="text-2xl font-extrabold text-slate-900 tracking-tight">Flake Alignment</p>
            </div>
            <div className="p-3 bg-amber-50 rounded-2xl border border-amber-100"><Target className="w-6 h-6 text-amber-500" /></div>
          </div>
          
          <div className="flex-grow w-full h-48 mt-2 border-2 border-slate-100 relative overflow-hidden flex items-center justify-center bg-slate-50 rounded-xl shadow-inner">
             {/* Dynamic Targeting SVG */}
             <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
                {/* Target Outline */}
                <rect x="70" y="70" width="60" height="60" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="6 6" />
                <line x1="100" y1="0" x2="100" y2="200" stroke="#cbd5e1" strokeWidth="1" />
                <line x1="0" y1="100" x2="200" y2="100" stroke="#cbd5e1" strokeWidth="1" />
                
                {/* Animated 2D Flake (Hexagon) */}
                <motion.polygon 
                  points="100,50 125,65 125,95 100,110 75,95 75,65" 
                  fill="rgba(245,158,11,0.2)" 
                  stroke="#f59e0b" 
                  strokeWidth="3" 
                  animate={{ x: [ -40, 0, -40 ], y: [ -30, 10, -30 ] }} 
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} 
                />
             </svg>
             
            <div className="absolute top-2 left-2 flex flex-col gap-1 text-[10px] font-bold font-mono">
                <span className="bg-white text-slate-600 px-2 py-1 rounded shadow-sm border border-slate-200">X: <motion.span animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 1, repeat: Infinity }}>45.231 µm</motion.span></span>
                <span className="bg-white text-slate-600 px-2 py-1 rounded shadow-sm border border-slate-200">Y: 12.095 µm</span>
            </div>
          </div>
        </div>

        {/* GRAPH 2: Radial Z-Axis Gauge */}
        <div className="px-0 lg:px-6 relative flex flex-col overflow-hidden py-8 lg:py-0">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-blue-500 text-xs font-extrabold uppercase tracking-widest mb-1">Depth Control</p>
              <p className="text-2xl font-extrabold text-slate-900 tracking-tight">Z-Axis Approach</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-2xl border border-blue-100"><Focus className="w-6 h-6 text-blue-500" /></div>
          </div>
          
          <div className="flex-grow flex items-center justify-center w-full h-48 mt-2 bg-slate-50 border-2 border-slate-100 rounded-xl relative overflow-hidden shadow-inner">
             {/* Radial Gauge SVG */}
             <div className="relative flex items-center justify-center">
                 <svg viewBox="0 0 100 100" className="h-32 w-32 drop-shadow-md">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#e2e8f0" strokeWidth="8" />
                    <motion.circle 
                        cx="50" cy="50" r="40" fill="none" stroke="#3b82f6" strokeWidth="8" 
                        strokeDasharray="251.2" 
                        animate={{ strokeDashoffset: [251.2, 50, 251.2] }} 
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} 
                        strokeLinecap="round" 
                        transform="rotate(-90 50 50)" 
                    />
                 </svg>
                 <div className="absolute flex flex-col items-center">
                    <span className="text-2xl font-black text-blue-600 font-mono">Z</span>
                 </div>
             </div>
             <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-xs font-bold text-slate-600 bg-white px-3 py-1 rounded-full shadow-sm border border-slate-200">
                Gap: 1.050 mm
             </div>
          </div>
        </div>

        {/* DATA 3: Digital Terminal Readout */}
        <div className="px-0 lg:px-6 relative flex flex-col overflow-hidden pt-8 lg:pt-0">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-slate-500 text-xs font-extrabold uppercase tracking-widest mb-1">Encoded Data</p>
              <p className="text-2xl font-extrabold text-slate-900 tracking-tight">Angular Metrics</p>
            </div>
            <div className="p-3 bg-slate-100 rounded-2xl border border-slate-200"><Scaling className="w-6 h-6 text-slate-500" /></div>
          </div>
          
          <div className="flex-grow flex flex-col justify-center w-full h-48 mt-2">
            <div className="bg-slate-900 w-full h-full rounded-xl shadow-inner border-2 border-slate-800 p-5 flex flex-col justify-between font-mono text-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600" />
                <div className="flex justify-between items-center text-emerald-400">
                    <span className="text-xs uppercase opacity-70">Rotation (θ)</span>
                    <span className="text-lg font-bold">120.05°</span>
                </div>
                <div className="w-full h-px bg-slate-800" />
                <div className="flex justify-between items-center text-blue-400">
                    <span className="text-xs uppercase opacity-70">Tilt X (φ)</span>
                    <span className="text-lg font-bold">+1.04°</span>
                </div>
                <div className="w-full h-px bg-slate-800" />
                <div className="flex justify-between items-center text-blue-400">
                    <span className="text-xs uppercase opacity-70">Tilt Y (ψ)</span>
                    <span className="text-lg font-bold">-0.82°</span>
                </div>
                <div className="w-full h-px bg-slate-800" />
                <div className="flex justify-between items-center text-amber-400">
                    <span className="text-xs uppercase opacity-70">VACUUM CHUCK</span>
                    <span className="text-sm font-bold bg-amber-500/20 px-2 py-0.5 rounded">LOCKED</span>
                </div>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
};


// ==========================================
// 2. AUTOMATION SEQUENCE DIAGRAM
// REFINED: Light theme, staggered entrance, hover effects
// ==========================================
const AutomationSequence = ({ steps }: { steps: string[] }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
      className="w-full bg-white rounded-[2.5rem] border border-amber-200 shadow-xl p-10 relative overflow-hidden"
    >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#fef3c7_2px,transparent_2px)] bg-[size:20px_20px] opacity-60 pointer-events-none" />
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-5 gap-6 items-stretch text-center">
            {steps.map((step: string, i: number) => {
                return (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        key={step} 
                        className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex flex-col items-center justify-start gap-4 shadow-sm relative overflow-hidden group cursor-pointer"
                    >
                        {/* Animated active pulse */}
                        <motion.div animate={{ opacity: [0, 0.4, 0] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }} className="absolute inset-0 bg-gradient-to-b from-amber-200 to-transparent" />
                        
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 border border-amber-300 text-amber-600 font-black z-10 shadow-sm group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500 transition-colors">
                            {String(i+1).padStart(2,'0')}
                        </div>
                        <h4 className="text-sm font-extrabold text-slate-800 leading-snug z-10">{step}</h4>
                        <CheckCircle2 className="w-5 h-5 mt-auto text-amber-300 group-hover:text-amber-200 transition-colors z-10" />
                    </motion.div>
                )
            })}
        </div>
    </motion.div>
  );
};

// ==========================================
// 3. NEW: TRANSFER METHODOLOGY DEEP-DIVE
// Injecting the missing brochure data gracefully
// ==========================================
const MethodologyDeepDive = () => {
    const data = [
        {
            title: "PDMS-Based Viscoelastic Transfer",
            icon: Beaker,
            points: [
                "Kinetically controlled adhesion for deterministic pickup and release.",
                "Rapid peel-off promotes flake pickup from source.",
                "Slow peel-off enables controlled release to target.",
                "Solvent-free dry transfer compatible with diverse substrates."
            ]
        },
        {
            title: "Flake Identification & Contrast",
            icon: Eye,
            points: [
                "Identified using reflected-light optical microscopy.",
                "Si/SiO₂ substrates (90nm or 290nm oxide) engineered to enhance contrast.",
                "Monolayer and few-layer flakes exhibit distinct optical signatures.",
                "Thickness confirmation via integrated Raman or PL spectroscopy paths."
            ]
        }
    ];

    return (
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto pt-8">
            {data.map((section, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.2 }}
                    className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm hover:shadow-lg hover:border-amber-300 transition-all"
                >
                    <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-4">
                        <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 border border-amber-100"><section.icon className="w-6 h-6"/></div>
                        <h3 className="text-2xl font-extrabold text-slate-900">{section.title}</h3>
                    </div>
                    <ul className="space-y-4">
                        {section.points.map((pt, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-700 font-bold text-sm leading-relaxed">
                                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" /> {pt}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            ))}
        </div>
    );
};

// ==========================================
// 4. SUBSYSTEMS VISUALIZER
// ==========================================
const SubsystemsInteractive = ({ subsystems }: { subsystems: any[] }) => {
  return (
    <div className="w-full relative py-12">
        <svg viewBox="0 0 200 300" className="absolute h-96 w-auto text-slate-300 opacity-60">
            <line x1="100" y1="20" x2="100" y2="280" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
            {[40, 150, 190, 240].map(cy => (
                <circle key={cy} cx="100" cy={cy} r="4" fill="currentColor" />
            ))}
        </svg>

        <div className="relative w-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 items-start max-w-7xl mx-auto px-6">
            {subsystems.map((item, i) => {
                const isEven = i % 2 === 0;
                const Icon = item.icon;
                return (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: isEven ? -50 : 50, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                        className={`group bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:border-amber-200 hover:shadow-lg transition-all flex flex-col relative ${isEven ? 'text-right' : 'text-left'}`}
                    >
                        <div className={`flex items-center gap-4 mb-5 border-b border-slate-100 pb-4 relative z-10 ${isEven ? 'flex-row-reverse' : ''}`}>
                            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100"><Icon className="w-6 h-6" /></div>
                            <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">{item.title}</h3>
                        </div>
                        <p className="text-sm text-slate-700 font-bold leading-relaxed">{item.desc}</p>
                        
                        <div className={`absolute top-[4rem] flex items-center gap-2 ${isEven ? '-left-[4.5rem]' : '-right-[4.5rem] flex-row-reverse'}`}>
                            <motion.div initial={{ width: 0 }} whileInView={{ width: '3rem' }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 + 0.3 }} className={`h-[2px] bg-amber-300`} />
                            <div className={`w-3 h-3 rounded-full bg-amber-400 group-hover:scale-125 transition-transform`} />
                        </div>
                    </motion.div>
                )
            })}
        </div>
    </div>
  );
};


// ==========================================
// 5. DESIGN HIGHLIGHTS (Autonomous Playback)
// ==========================================
const AutonomousDesignHighlights = ({ highlights }: { highlights: any[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const icons = [Cpu, Target, Camera, Layers];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % highlights.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [highlights.length]);

  return (
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-stretch bg-white p-6 rounded-[2.5rem] border border-slate-200 shadow-xl mt-8">
        
        <div className="w-full md:w-5/12 flex flex-col gap-2 relative">
            <div className="absolute left-[1.125rem] top-4 bottom-4 w-0.5 bg-slate-100 rounded-full" />
            {highlights.map((item, i) => (
                <div 
                    key={i} 
                    onClick={() => setActiveIndex(i)} 
                    className={`cursor-pointer p-4 rounded-2xl transition-all duration-300 relative z-10 flex items-center gap-4 ${activeIndex === i ? 'bg-slate-50 shadow-sm border border-slate-200' : 'border border-transparent hover:bg-slate-50/50'}`}
                >
                    <div className="relative flex items-center justify-center shrink-0">
                       <div className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === i ? 'bg-amber-500 scale-125' : 'bg-slate-300'}`} />
                       {activeIndex === i && (
                          <motion.svg className="absolute w-8 h-8 text-amber-500" viewBox="0 0 100 100">
                             <motion.circle cx="50" cy="50" r="46" fill="transparent" stroke="currentColor" strokeWidth="6" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 4, ease: "linear" }} strokeDasharray="289" strokeDashoffset="0" />
                          </motion.svg>
                       )}
                    </div>
                    <h4 className={`text-sm font-extrabold leading-tight ${activeIndex === i ? 'text-amber-700' : 'text-slate-500'}`}>{item.title}</h4>
                </div>
            ))}
        </div>

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
                    <div className="w-20 h-20 bg-white rounded-[1.25rem] shadow-md border border-amber-100 flex items-center justify-center mb-8 text-amber-500">
                        {(() => {
                            const Icon = icons[activeIndex % icons.length];
                            return <Icon className="w-10 h-10" />
                        })()}
                    </div>
                    <h3 className="text-2xl font-extrabold text-slate-900 mb-4">{highlights[activeIndex].title}</h3>
                    <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-sm">{highlights[activeIndex].desc}</p>
                </motion.div>
            </AnimatePresence>
            <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0, 0.2, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute inset-0 bg-amber-100 rounded-full blur-[80px] pointer-events-none" />
        </div>

    </div>
  );
};

// ==========================================
// 6. APPLICATIONS GRID 
// ==========================================
const ApplicationsGrid = ({ apps }: { apps: any[] }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto pt-8">
      {apps.map((app, i) => (
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
            key={app.title} 
            className={`border border-slate-200 rounded-3xl overflow-hidden bg-white p-6 group hover:border-amber-300 hover:shadow-lg transition-all relative`}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-amber-50 text-amber-600 mb-4 border border-amber-100`}>
              <Box className="w-5 h-5" />
            </div>
            <h4 className="text-md font-extrabold text-slate-900 mb-2 leading-tight">{app.title}</h4>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">{app.desc}</p>
          </motion.div>
      ))}
    </div>
  );
};

// ==========================================
// 7. MODULARITY & SPECS TABS
// ==========================================
const ModularitySpecsTabs = ({ specsStructured }: { specsStructured: any }) => {
  if (!specsStructured) return null;
  const categories = Object.keys(specsStructured);
  const [activeTab, setActiveTab] = useState(categories[0]);
  const accentColors = [ "border-amber-200 text-amber-700 bg-amber-50", "border-blue-200 text-blue-700 bg-blue-50", "border-emerald-200 text-emerald-700 bg-emerald-50", "border-violet-200 text-violet-700 bg-violet-50" ];

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 mt-10">
      <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible hide-scrollbar lg:w-1/3 shrink-0 pb-2 lg:pb-0">
        {categories.map((cat, index) => {
          const colorClass = accentColors[index % accentColors.length];
          return (
            <button key={cat} onClick={() => setActiveTab(cat)} className={`relative px-5 py-4 text-left rounded-2xl font-bold transition-all duration-300 flex items-center justify-between whitespace-nowrap outline-none ${activeTab === cat ? `${colorClass} shadow-sm border` : "text-slate-600 bg-white hover:bg-slate-50 border border-slate-200"}`}>
              <span className="relative z-10 text-sm">{cat}</span>
              {activeTab === cat && <ChevronRight className="w-4 h-4" />}
            </button>
          )
        })}
      </div>

      <div className="lg:w-2/3 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden min-h-[350px]">
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center gap-3">
          <Settings className="w-5 h-5 text-slate-500" />
          <h3 className="font-display font-extrabold text-slate-900 text-lg">{activeTab} Details</h3>
        </div>
        <div className="p-8">
          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.2 }} className="space-y-4">
              {specsStructured[activeTab].map((item: any, i: number) => {
                const titleKey = Object.keys(item)[0];
                const specValue = Object.keys(item)[1];
                const resValue = Object.keys(item)[2];

                return (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} key={i} 
                    className="flex gap-4 p-4 bg-slate-50 border border-slate-200 rounded-xl justify-between items-center"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${activeTab === categories[0] ? 'bg-amber-500' : 'bg-blue-500'} shrink-0`} />
                      <span className="text-sm font-bold text-slate-800 leading-relaxed">{item[titleKey]}</span>
                    </div>
                    <div className="text-right flex flex-col">
                        <span className="text-base font-black text-slate-900 font-mono">{item[specValue]}</span>
                        <span className="text-xs font-bold text-slate-500 uppercase font-mono">{item[resValue]}</span>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};


// ==========================================
// MAIN PAGE COMPONENT
// ==========================================
const TransferSystemPage = () => {
  const product = productsData["2d-transfer-motorised"];
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [200, 300], [0, 1]);
  const modelY = useTransform(scrollY, [0, 500], [0, 80]); 

  if (!product) return <div className="min-h-screen bg-slate-50"><Navbar /></div>;

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-800 font-sans selection:bg-amber-100 selection:text-amber-900 relative">
        <Navbar />

        {/* Sticky Header */}
        <div className="sticky z-30 w-full bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm" style={{ top: '64px' }}>
          <div className="container py-3 flex items-center justify-between">
            <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              <Link to="/" className="hover:text-amber-600 transition-colors">Home</Link> <span>/</span>
              <Link to="/products" className="hover:text-amber-600 transition-colors">Catalog</Link> <span>/</span>
              <span className="hidden sm:inline-block cursor-default text-slate-400">{product.category}</span> <span>/</span>
              <span className="text-amber-600 font-bold">{product.name}</span>
            </div>
            <motion.div style={{ opacity: headerOpacity }} className="flex items-center gap-4 pointer-events-none">
              <span className="hidden lg:block font-display font-bold text-slate-900">{product.name}</span>
              <button className="px-5 py-2 rounded-xl font-bold text-white bg-amber-600 text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all pointer-events-auto">Request Quote</button>
            </motion.div>
          </div>
        </div>
        
        <main className="pt-2 lg:pt-4">
          {/* HERO SECTION */}
          <section className="container pt-8 pb-12 lg:pb-16 overflow-hidden relative">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-[10px] font-extrabold tracking-widest uppercase mb-6 shadow-sm">CRYO MICRO-NANO PROTOTYPING</div>
                
                {/* REFINED: Colorful Hero Title Gradient */}
                <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 tracking-tight leading-[1.1]">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500">
                    2D TRANSFER SYSTEM
                  </span>
                  <br />
                  <span className="text-slate-900 text-3xl lg:text-4xl mt-2 block">with Motorised Controller</span>
                </h1>
                
                <p className="text-xl text-amber-600 font-bold mb-6">{product.subtitle}</p>
                <div className="space-y-4 mb-8">
                  {product.overview?.map((p: string, i: number) => (
                    <p key={i} className="text-base text-slate-600 leading-relaxed font-medium">{p}</p>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <button className="group px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-amber-600 to-amber-700 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2 hover:-translate-y-0.5">
                    Get a Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="px-6 py-3 rounded-xl font-bold text-slate-700 bg-white border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all duration-300 flex items-center gap-2 shadow-sm hover:-translate-y-0.5">
                    <Download className="w-4 h-4 text-amber-500" /> Full Specs
                  </button>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} style={{ y: modelY }} className="relative w-full aspect-[3/4] lg:aspect-square flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-100 to-transparent rounded-[2.5rem] transform rotate-3 scale-105 opacity-40 pointer-events-none" />
                <div className="relative w-full h-full flex justify-center items-center">
                    <img src={product.heroImage} alt="2D Transfer System Station" className="h-full object-contain mix-blend-multiply drop-shadow-2xl" />
                </div>
              </motion.div>
            </div>
          </section>

          {/* KEY FEATURES */}
          <section className="py-12 lg:py-16 bg-white relative overflow-hidden border-t border-slate-200">
            <div className="container relative z-10">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="text-center max-w-3xl mx-auto mb-10">
                <span className="text-amber-500 font-extrabold tracking-widest uppercase text-xs mb-2 block">Deterministic Placement</span>
                <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">Key System Features.</h2>
              </motion.div>
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {product.keyFeatures?.map((feature: string, i: number) => (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
                        key={feature} 
                        className="flex items-start gap-4 p-5 bg-slate-50 border border-slate-200 rounded-xl hover:border-amber-300 hover:shadow-sm transition-all group"
                    >
                        <div className="p-2.5 bg-white rounded-lg border border-slate-200 shrink-0 text-amber-500 shadow-sm group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500 transition-colors"><CheckCircle2 className="w-5 h-5"/></div>
                        <span className="text-base font-bold text-slate-800 leading-snug pt-1">{feature}</span>
                    </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* TELEMETRY SECTION (Upgraded visual patterns) */}
          <section className="py-12 lg:py-16 bg-slate-50 relative overflow-hidden border-y border-slate-200">
            <div className="container relative z-10">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="text-center max-w-3xl mx-auto mb-10">
                <span className="text-amber-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">Integrated Design Diagnostics</span>
                <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">Motorised Multi-Axis Controller Feedback.</h2>
                <p className="text-base text-slate-600 font-medium max-w-2xl mx-auto">Analyze active formal system diagnostics from fully motorised stages including targeted alignment travel, z-axis approach, and digital angular readouts.</p>
              </motion.div>
              <div className="max-w-7xl mx-auto">
                <TransferTelemetry />
              </div>
            </div>
          </section>

          {/* SUBSYSTEMS VISUALIZER */}
          <section className="py-12 lg:py-16 relative overflow-hidden bg-white border-b border-slate-200">
            <div className="container mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="text-center mb-12">
                <span className="text-amber-500 font-extrabold tracking-widest uppercase text-xs mb-2 block">Customisable Architecture</span>
                <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">Core System Subsystems.</h2>
              </motion.div>
              <div className="max-w-7xl mx-auto">
                <SubsystemsInteractive subsystems={product.subsystems} />
              </div>
            </div>
          </section>

          {/* NEW: METHODOLOGY DEEP-DIVE (Injecting missing brochure content) */}
          <section className="py-12 lg:py-16 bg-slate-50 relative overflow-hidden border-b border-slate-200">
            <div className="container relative z-10">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="text-center max-w-3xl mx-auto mb-8">
                <span className="text-amber-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">Process Mechanics</span>
                <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">Transfer Methodology & Identification.</h2>
                <p className="text-base text-slate-600 font-medium max-w-2xl mx-auto">Engineered for deterministic, dry transfer of two-dimensional materials utilizing viscoelastic stamping and optical contrast screening.</p>
              </motion.div>
              <MethodologyDeepDive />
            </div>
          </section>

          {/* AUTOMATION SEQUENCE SECTION (REFINED: Light Theme + Hover Animations) */}
          <section className="py-12 lg:py-16 bg-white relative overflow-hidden border-b border-slate-200">
            <div className="container relative z-10">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-cyan-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">Advanced capabilities</span>
                <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">Deterministic Process Logic Flow.</h2>
              </motion.div>
              <div className="max-w-7xl mx-auto">
                <AutomationSequence steps={product.automationProcess} />
              </div>
            </div>
          </section>

          {/* DESIGN HIGHLIGHTS (Autonomous Playback) Section */}
          <section className="py-12 lg:py-16 bg-slate-50 relative overflow-hidden border-b border-slate-200">
            <div className="container mx-auto relative z-10">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="text-center max-w-3xl mx-auto mb-10">
                <span className="text-amber-500 font-extrabold tracking-widest uppercase text-xs mb-2 block">Precision Prototyping</span>
                <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">Integrated Advanced Capabilities.</h2>
              </motion.div>
              <div className="max-w-7xl mx-auto">
                <AutonomousDesignHighlights highlights={product.designHighlights} />
              </div>
            </div>
          </section>

          {/* MODULARITY & TECHNICAL SPECS TABS Section */}
          <section className="py-12 lg:py-16 bg-white relative border-b border-slate-200 overflow-hidden">
            <div className="container mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="text-center max-w-2xl mx-auto mb-8">
                <span className="text-amber-500 font-extrabold tracking-widest uppercase text-xs mb-2 block">Advanced Specifications</span>
                <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 mb-2">Technical Specs & Configuration.</h2>
              </motion.div>
              
              <ModularitySpecsTabs specsStructured={product.technicalSpecsStructured} />

              {/* REFINED: Additional Options with animation and hover effects */}
              <div className="max-w-6xl mx-auto mt-12 bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-sm">
                <h3 className="text-xl font-extrabold text-slate-900 mb-6 flex items-center gap-3"><Scaling className="w-5 h-5 text-amber-500"/>Additional Customisable Options</h3>
                <ul className="space-y-4">
                  {product.modularitySpecs["Technical Specifications"].map((item: string, i: number) => (
                    <motion.li 
                      key={i} 
                      initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1, duration: 0.4 }}
                      whileHover={{ x: 10, scale: 1.01, backgroundColor: "#fffbeb", borderColor: "#fcd34d" }}
                      className="flex gap-4 text-sm font-bold text-slate-700 leading-relaxed bg-white border border-slate-200 p-5 rounded-2xl shadow-sm cursor-default transition-colors"
                    >
                      <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" /> 
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* APPLICATIONS SECTION */}
          <section className="py-12 lg:py-16 relative overflow-hidden bg-slate-50">
            <div className="container mx-auto relative z-10">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="text-center max-w-2xl mx-auto mb-8">
                <span className="text-amber-500 font-extrabold tracking-widest uppercase text-xs mb-2 block">Ideal for materials</span>
                <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">Applications</h2>
              </motion.div>
              <div className="max-w-6xl mx-auto">
                <ApplicationsGrid apps={product.applications} />
              </div>
            </div>
          </section>

          {/* CTA SECTION */}
          <section className="container py-12 lg:py-16 border-t border-slate-200 bg-white">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="bg-[#fffbeb] rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row gap-10 items-center justify-between shadow-lg relative overflow-hidden border border-amber-100">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-200/50 to-transparent pointer-events-none" />
              <div className="lg:w-1/2 relative z-10 text-slate-900">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-amber-200 text-amber-800 text-[10px] font-extrabold tracking-widest uppercase mb-4 shadow-sm"><div className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Advanced Engineering Support</div>
                <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">Speak to an <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">Specialist</span></h2>
                <p className="text-base text-slate-700 font-medium mb-8">Discuss your fully customised 2D material transfer requirements and twistronics research today.</p>
                <button className="px-6 py-3 rounded-xl font-bold text-white bg-amber-600 shadow-md hover:shadow-lg hover:bg-amber-500 transition-all flex items-center gap-2 hover:-translate-y-1">Get a Quote <ArrowRight className="w-4 h-4" /></button>
              </div>
              <div className="lg:w-5/12 flex flex-col gap-4 w-full relative z-10">
                <div className="bg-white rounded-2xl p-6 flex items-center gap-5 shadow-sm border border-slate-100 hover:border-amber-300 hover:shadow-md transition-all">
                  <div className="w-14 h-14 rounded-xl border border-slate-100 bg-slate-50 flex items-center justify-center shrink-0"><Phone className="w-6 h-6 text-amber-500" /></div>
                  <div><p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-1">Call Us Directly</p><p className="text-xl font-extrabold text-slate-900">+91 97481 81485</p></div>
                </div>
                <div className="bg-white rounded-2xl p-6 flex items-center gap-5 shadow-sm border border-slate-100 hover:border-amber-300 hover:shadow-md transition-all">
                  <div className="w-14 h-14 rounded-xl border border-slate-100 bg-slate-50 flex items-center justify-center shrink-0"><Mail className="w-6 h-6 text-amber-500" /></div>
                  <div><p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-1">Email Engineering</p><p className="text-lg font-extrabold text-slate-900">contact@cryonano.com</p></div>
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

export default TransferSystemPage;