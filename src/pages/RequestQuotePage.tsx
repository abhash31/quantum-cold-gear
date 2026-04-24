// import { useState, useEffect } from "react";
// import { Navbar } from "@/components/Navbar";
// import { Footer } from "@/components/Footer";
// import { PageTransition } from "@/components/PageTransition";
// import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
// import { 
//   ChevronLeft, ArrowRight, ShieldCheck, Zap, Activity, 
//   Send, Server, Cpu, Waves, Target, Binary, CheckCircle2, Lock, 
//   Globe, Calendar, Box
// } from "lucide-react";
// import { Link } from "react-router-dom";

// // ==========================================
// // OUTSIDE COMPONENT: Focus-Safe Input Wrapper
// // ==========================================
// const QuoteInputWrapper = ({ children, isFocused }: { children: React.ReactNode, isFocused: boolean }) => (
//   <div className="relative group z-10">
//      <div className={`absolute -inset-0.5 rounded-xl bg-gradient-to-r from-sky-400 to-indigo-500 blur-[2px] transition-opacity duration-300 pointer-events-none ${isFocused ? 'opacity-40' : 'opacity-0 group-hover:opacity-20'}`} />
//      <div className="relative bg-white rounded-xl z-20">
//        {children}
//      </div>
//   </div>
// );

// // ==========================================
// // MAIN CONFIGURATOR COMPONENT
// // ==========================================
// const QuoteConfigurator = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");
//   const [focusedField, setFocusedField] = useState<string | null>(null);

//   // Quote Data State
//   const [quoteData, setQuoteData] = useState({
//     platform: "",
//     powerRange: "",
//     milStd: false,
//     environment: "",
//     quantity: "",
//     timeline: "",
//     name: "",
//     email: "",
//     company: ""
//   });

//   const handlePlatformSelect = (platform: string) => {
//     setQuoteData({ ...quoteData, platform });
//     setTimeout(() => setCurrentStep(2), 400); // Auto-advance after short delay
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setFormState("submitting");
//     setTimeout(() => {
//       setFormState("success");
//       setTimeout(() => {
//          setFormState("idle");
//          setCurrentStep(1);
//          setQuoteData({ platform: "", powerRange: "", milStd: false, environment: "", quantity: "", timeline: "", name: "", email: "", company: "" });
//       }, 6000);
//     }, 3000);
//   };

// //   // Step Animation Variants
// //   const stepVariants = {
// //     hidden: { opacity: 0, x: 50 },
// //     visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
// //     exit: { opacity: 0, x: -50, transition: { duration: 0.3, ease: "easeIn" } }
// //   };


// // Step Animation Variants (Fixed TypeScript Type)
//   const stepVariants = {
//     hidden: { opacity: 0, x: 50 },
//     visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
//     exit: { opacity: 0, x: -50, transition: { duration: 0.3, ease: "easeIn" as const } }
//   };

//   return (
//     <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mt-12 relative z-10 items-start">
      
//       {/* ========================================== */}
//       {/* LEFT: LIVE CONFIGURATION TELEMETRY SIDEBAR */}
//       {/* ========================================== */}
//       <div className="lg:col-span-4 sticky top-24">
//         <div className="bg-slate-900 rounded-[2.5rem] p-8 shadow-2xl border-4 border-slate-800 relative overflow-hidden">
//            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.15)_0%,transparent_70%)] pointer-events-none" />
           
//            <div className="flex items-center gap-3 mb-8 relative z-10">
//               <div className="w-10 h-10 bg-sky-500/20 rounded-xl border border-sky-400 flex items-center justify-center">
//                 <Activity className="w-5 h-5 text-sky-400 animate-pulse" />
//               </div>
//               <div>
//                  <h3 className="font-black text-white uppercase tracking-widest text-sm">Live Profile</h3>
//                  <p className="text-[10px] text-sky-300 font-mono">Configuration Telemetry</p>
//               </div>
//            </div>

//            <div className="space-y-6 relative z-10">
//               {/* Telemetry Items */}
//               <div className="border-l-2 border-slate-700 pl-4 relative">
//                  <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-4 border-slate-900 ${currentStep >= 1 ? 'bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.8)]' : 'bg-slate-700'}`} />
//                  <span className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Phase 1: Architecture</span>
//                  <span className="font-mono text-sm font-bold text-white">{quoteData.platform || "Awaiting Selection..."}</span>
//               </div>
              
//               <div className="border-l-2 border-slate-700 pl-4 relative">
//                  <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-4 border-slate-900 ${currentStep >= 2 ? 'bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.8)]' : 'bg-slate-700'}`} />
//                  <span className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Phase 2: Parameters</span>
//                  <span className="font-mono text-sm font-bold text-white flex flex-col gap-1">
//                     {quoteData.powerRange && <span>{quoteData.powerRange}</span>}
//                     {quoteData.environment && <span className="text-emerald-400">{quoteData.environment}</span>}
//                     {quoteData.milStd && <span className="text-amber-400 flex items-center gap-1"><ShieldCheck className="w-3 h-3"/> MIL-STD Required</span>}
//                     {!quoteData.powerRange && !quoteData.environment && "Awaiting Data..."}
//                  </span>
//               </div>

//               <div className="border-l-2 border-transparent pl-4 relative">
//                  <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-4 border-slate-900 ${currentStep >= 3 ? 'bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.8)]' : 'bg-slate-700'}`} />
//                  <span className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Phase 3: Logistics</span>
//                  <span className="font-mono text-sm font-bold text-white">
//                    {quoteData.quantity ? `${quoteData.quantity} Units | ${quoteData.timeline}` : "Awaiting Data..."}
//                  </span>
//               </div>
//            </div>

//            {/* Progress Bar */}
//            <div className="mt-10 pt-6 border-t border-slate-800">
//               <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">
//                  <span>Completion</span>
//                  <span>{Math.round(((currentStep - 1) / 2) * 100)}%</span>
//               </div>
//               <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
//                  <motion.div 
//                     className="h-full bg-sky-500" 
//                     initial={{ width: 0 }} 
//                     animate={{ width: `${((currentStep - 1) / 2) * 100}%` }} 
//                     transition={{ duration: 0.5 }}
//                  />
//               </div>
//            </div>
//         </div>
//       </div>

//       {/* ========================================== */}
//       {/* RIGHT: INTERACTIVE FORM STEPS */}
//       {/* ========================================== */}
//       <div className="lg:col-span-8 bg-white border border-slate-200 rounded-[3rem] p-8 lg:p-12 shadow-xl relative overflow-hidden min-h-[500px]">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.03)_0%,transparent_70%)] pointer-events-none" />

//         <AnimatePresence mode="wait">
          
//           {/* --- PHASE 1: PLATFORM --- */}
//           {currentStep === 1 && (
//             <motion.div key="step1" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="relative z-10">
//                <h2 className="font-display text-3xl lg:text-4xl font-black text-slate-900 uppercase tracking-tight mb-2">Select Platform Architecture</h2>
//                <p className="text-slate-500 font-bold mb-8">Choose the base system for your high-density requirements.</p>

//                <div className="grid md:grid-cols-2 gap-5">
//                   {[
//                     { id: "DC-DC Converter", desc: "Low & High Power Tiers", icon: Cpu, color: "sky" },
//                     { id: "DC-AC Sine Wave Inverter", desc: "Mission-Critical Output", icon: Waves, color: "emerald" },
//                     { id: "400Hz Frequency Inverter", desc: "Aerospace & GSE Validated", icon: Zap, color: "amber" },
//                     { id: "Custom Architecture", desc: "Built to specifications", icon: Target, color: "indigo" }
//                   ].map((sys, i) => (
//                     <div 
//                       key={i} onClick={() => handlePlatformSelect(sys.id)}
//                       className={`cursor-pointer p-6 rounded-[2rem] border-2 transition-all duration-300 flex flex-col gap-4 group ${quoteData.platform === sys.id ? `bg-${sys.color}-50 border-${sys.color}-400 shadow-md` : 'bg-slate-50 border-slate-100 hover:border-slate-300 hover:bg-white'}`}
//                     >
//                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center border transition-colors ${quoteData.platform === sys.id ? `bg-${sys.color}-500 border-${sys.color}-600 text-white` : `bg-white border-slate-200 text-slate-400 group-hover:text-${sys.color}-500`}`}>
//                           <sys.icon className="w-7 h-7" />
//                        </div>
//                        <div>
//                          <h4 className="text-xl font-black text-slate-900 leading-tight">{sys.id}</h4>
//                          <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{sys.desc}</span>
//                        </div>
//                     </div>
//                   ))}
//                </div>
//             </motion.div>
//           )}

//           {/* --- PHASE 2: TECHNICAL PARAMETERS --- */}
//           {currentStep === 2 && (
//             <motion.div key="step2" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="relative z-10">
//                <h2 className="font-display text-3xl lg:text-4xl font-black text-slate-900 uppercase tracking-tight mb-2">Define Technical Parameters</h2>
//                <p className="text-slate-500 font-bold mb-8">Establish baseline power and compliance targets.</p>

//                <div className="space-y-6">
//                   {/* Power Range */}
//                   <div>
//                     <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2 block mb-2">Target Power Rating</label>
//                     <div className="grid grid-cols-3 gap-3">
//                        {["< 5 kW (Low Power)", "6 kW - 15 kW", "> 15 kW (High Power)"].map((pwr) => (
//                          <div 
//                            key={pwr} onClick={() => setQuoteData({ ...quoteData, powerRange: pwr })}
//                            className={`cursor-pointer px-4 py-3 rounded-xl border text-center text-sm font-bold transition-all ${quoteData.powerRange === pwr ? 'bg-sky-50 border-sky-400 text-sky-700 shadow-sm' : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-white'}`}
//                          >
//                            {pwr}
//                          </div>
//                        ))}
//                     </div>
//                   </div>

//                   {/* Environment */}
//                   <div>
//                     <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2 block mb-2">Deployment Environment</label>
//                     <select 
//                        value={quoteData.environment} onChange={(e) => setQuoteData({ ...quoteData, environment: e.target.value })}
//                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-5 py-4 text-slate-800 font-bold focus:outline-none focus:border-sky-400 focus:bg-white transition-all appearance-none"
//                     >
//                        <option value="" disabled>Select Environment...</option>
//                        <option value="Industrial Control Rack">Industrial Control Rack</option>
//                        <option value="Military Mobile Vehicle">Military Mobile Vehicle</option>
//                        <option value="Naval / Shipboard">Naval / Shipboard</option>
//                        <option value="Aerospace Ground Support">Aerospace Ground Support</option>
//                        <option value="Telecom Infrastructure">Telecom Infrastructure</option>
//                     </select>
//                   </div>

//                   {/* MIL-STD Toggle */}
//                   <div 
//                      onClick={() => setQuoteData({ ...quoteData, milStd: !quoteData.milStd })}
//                      className={`cursor-pointer p-5 rounded-2xl border-2 transition-all flex items-center justify-between ${quoteData.milStd ? 'bg-amber-50 border-amber-300 shadow-sm' : 'bg-slate-50 border-slate-100 hover:bg-white'}`}
//                   >
//                      <div className="flex items-center gap-4">
//                        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${quoteData.milStd ? 'bg-amber-500 text-white' : 'bg-slate-200 text-slate-400'}`}>
//                          <ShieldCheck className="w-6 h-6" />
//                        </div>
//                        <div>
//                          <h5 className={`font-black text-lg ${quoteData.milStd ? 'text-amber-900' : 'text-slate-800'}`}>MIL-STD Validation Required</h5>
//                          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">810G Shock/Vibe & 461G EMI</span>
//                        </div>
//                      </div>
//                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${quoteData.milStd ? 'border-amber-500 bg-amber-500 text-white' : 'border-slate-300'}`}>
//                         {quoteData.milStd && <CheckCircle2 className="w-4 h-4" />}
//                      </div>
//                   </div>
//                </div>

//                <div className="flex justify-between mt-10">
//                   <button onClick={() => setCurrentStep(1)} className="px-6 py-3 rounded-xl font-bold text-slate-500 hover:bg-slate-100 transition-colors flex items-center gap-2 uppercase tracking-widest text-sm">
//                     <ChevronLeft className="w-4 h-4" /> Back
//                   </button>
//                   <button 
//                      disabled={!quoteData.powerRange || !quoteData.environment}
//                      onClick={() => setCurrentStep(3)} 
//                      className="px-8 py-3 rounded-xl bg-slate-900 text-white font-black uppercase tracking-widest text-sm shadow-lg hover:bg-sky-600 transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
//                   >
//                     Next Phase <ArrowRight className="w-4 h-4" />
//                   </button>
//                </div>
//             </motion.div>
//           )}

//           {/* --- PHASE 3: LOGISTICS & SUBMISSION --- */}
//           {currentStep === 3 && (
//             <motion.div key="step3" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="relative z-10">
//                <h2 className="font-display text-3xl lg:text-4xl font-black text-slate-900 uppercase tracking-tight mb-2">Logistics & Contact</h2>
//                <p className="text-slate-500 font-bold mb-8">Finalize your volume requirements to establish connection.</p>

//                <form onSubmit={handleSubmit} className="space-y-5">
//                   <div className="grid md:grid-cols-2 gap-5">
//                      <div className="space-y-1.5">
//                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Volume Requirement</label>
//                        <QuoteInputWrapper isFocused={focusedField === "quantity"}>
//                          <select name="quantity" value={quoteData.quantity} onChange={(e) => setQuoteData({...quoteData, quantity: e.target.value})} onFocus={() => setFocusedField("quantity")} onBlur={() => setFocusedField(null)} required className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 text-slate-800 font-bold focus:outline-none appearance-none relative z-20">
//                             <option value="" disabled>Select Volume...</option>
//                             <option value="1-5 Units (Prototype)">1-5 Units (Prototype)</option>
//                             <option value="10-50 Units (Pilot)">10-50 Units (Pilot)</option>
//                             <option value="100+ Units (Production)">100+ Units (Production)</option>
//                          </select>
//                        </QuoteInputWrapper>
//                      </div>
//                      <div className="space-y-1.5">
//                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Target Timeline</label>
//                        <QuoteInputWrapper isFocused={focusedField === "timeline"}>
//                          <select name="timeline" value={quoteData.timeline} onChange={(e) => setQuoteData({...quoteData, timeline: e.target.value})} onFocus={() => setFocusedField("timeline")} onBlur={() => setFocusedField(null)} required className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 text-slate-800 font-bold focus:outline-none appearance-none relative z-20">
//                             <option value="" disabled>Select Timeline...</option>
//                             <option value="Immediate (ASAP)">Immediate (ASAP)</option>
//                             <option value="Within 3 Months">Within 3 Months</option>
//                             <option value="Planning Phase (6+ Months)">Planning Phase (6+ Months)</option>
//                          </select>
//                        </QuoteInputWrapper>
//                      </div>
//                   </div>

//                   <div className="space-y-1.5">
//                     <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Full Name</label>
//                     <QuoteInputWrapper isFocused={focusedField === "name"}>
//                       <input name="name" value={quoteData.name} onChange={(e) => setQuoteData({...quoteData, name: e.target.value})} onFocus={() => setFocusedField("name")} onBlur={() => setFocusedField(null)} required type="text" className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 text-slate-800 font-bold focus:outline-none relative z-20" placeholder="Jane Doe" />
//                     </QuoteInputWrapper>
//                   </div>

//                   <div className="grid md:grid-cols-2 gap-5">
//                      <div className="space-y-1.5">
//                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Corporate Email</label>
//                        <QuoteInputWrapper isFocused={focusedField === "email"}>
//                          <input name="email" value={quoteData.email} onChange={(e) => setQuoteData({...quoteData, email: e.target.value})} onFocus={() => setFocusedField("email")} onBlur={() => setFocusedField(null)} required type="email" className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 text-slate-800 font-bold focus:outline-none relative z-20" placeholder="jane@company.com" />
//                        </QuoteInputWrapper>
//                      </div>
//                      <div className="space-y-1.5">
//                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Organization</label>
//                        <QuoteInputWrapper isFocused={focusedField === "company"}>
//                          <input name="company" value={quoteData.company} onChange={(e) => setQuoteData({...quoteData, company: e.target.value})} onFocus={() => setFocusedField("company")} onBlur={() => setFocusedField(null)} required type="text" className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 text-slate-800 font-bold focus:outline-none relative z-20" placeholder="Company Name" />
//                        </QuoteInputWrapper>
//                      </div>
//                   </div>

//                   <div className="flex justify-between items-center mt-10 pt-6 border-t border-slate-100">
//                      <button type="button" onClick={() => setCurrentStep(2)} className="px-6 py-3 rounded-xl font-bold text-slate-500 hover:bg-slate-100 transition-colors flex items-center gap-2 uppercase tracking-widest text-sm">
//                        <ChevronLeft className="w-4 h-4" /> Back
//                      </button>
//                      <button type="submit" className="px-8 py-4 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-black uppercase tracking-widest text-sm shadow-[0_10px_20px_rgba(14,165,233,0.3)] transition-all hover:-translate-y-1 flex items-center gap-2 relative overflow-hidden group">
//                         <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="absolute top-0 bottom-0 w-1/4 bg-white/20 blur-md skew-x-12" />
//                         Transmit Secure Quote <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                      </button>
//                   </div>
//                </form>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* --- OVERLAYS --- */}
//         <AnimatePresence>
//            {formState === "submitting" && (
//              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 z-30 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center rounded-[3rem] text-center border border-slate-200">
//                 <div className="relative w-24 h-24 mb-6">
//                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-4 border-dashed border-sky-400 rounded-full" />
//                    <Binary className="w-10 h-10 text-sky-500 absolute inset-0 m-auto animate-pulse" />
//                 </div>
//                 <h3 className="font-display text-2xl font-black text-slate-900 uppercase tracking-widest">Generating Profile</h3>
//                 <p className="text-slate-500 font-bold mt-2">Relaying technical requirements to engineering matrix...</p>
//              </motion.div>
//            )}
//         </AnimatePresence>
//       </div>

//       {/* --- SUCCESS MODAL --- */}
//       <AnimatePresence>
//          {formState === "success" && (
//             <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
//                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" />
//                <motion.div initial={{ scale: 0.9, y: 30, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.9, y: 20, opacity: 0 }} transition={{ type: "spring", damping: 25, stiffness: 300 }} className="bg-white rounded-[3rem] p-12 md:p-16 max-w-2xl w-full text-center shadow-2xl relative overflow-hidden border border-slate-200 z-10">
//                   <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }} className="w-24 h-24 bg-emerald-50 border-4 border-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
//                      <CheckCircle2 className="w-12 h-12 text-emerald-500" />
//                   </motion.div>
//                   <h3 className="font-display text-3xl font-black text-slate-900 uppercase tracking-tight mb-4">Transmission Successful</h3>
//                   <p className="text-slate-600 font-bold leading-relaxed mb-6">Your system profile has been logged. A power scientist will review your parameters and provide a comprehensive quotation shortly.</p>
//                   <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden relative">
//                      <motion.div initial={{ width: "100%" }} animate={{ width: "0%" }} transition={{ duration: 6, ease: "linear" }} className="h-full bg-emerald-500" />
//                   </div>
//                   <p className="mt-4 text-[10px] font-black text-slate-400 uppercase tracking-widest animate-pulse">Closing Secure Session...</p>
//                </motion.div>
//             </div>
//          )}
//       </AnimatePresence>

//     </div>
//   );
// };

// // ==========================================
// // MAIN PAGE COMPONENT
// // ==========================================
// const RequestQuotePage = () => {
//   const { scrollY } = useScroll();
//   const headerOpacity = useTransform(scrollY, [100, 200], [0, 1]);

//   return (
//     <PageTransition>
//       <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-sky-200 selection:text-sky-900">
//         <Navbar />

//         {/* STICKY HEADER WITH EXACT BREADCRUMB */}
//         <div className="sticky z-30 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm" style={{ top: '64px' }}>
//           <div className="container py-3 flex items-center justify-between">
//             <div className="flex items-center gap-2">
//                <Link to="/" className="group flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-sky-50 rounded-lg transition-colors border border-slate-200 hover:border-sky-200">
//                  <ChevronLeft className="w-4 h-4 text-slate-500 group-hover:text-sky-600 transition-colors" />
//                  <span className="text-xs font-black text-slate-600 group-hover:text-sky-700 uppercase tracking-widest transition-colors">HOME PAGE</span>
//                </Link>
//                <span className="text-slate-300 font-bold">/</span>
//                <span className="text-sky-600 font-black text-xs uppercase tracking-widest">REQUEST QUOTE</span>
//             </div>
//             <motion.div style={{ opacity: headerOpacity }} className="flex items-center gap-4 pointer-events-none">
//               <span className="hidden lg:block font-display font-bold text-slate-900 uppercase tracking-widest">Quote Configurator</span>
//             </motion.div>
//           </div>
//         </div>

//         <main className="relative pb-24">
          
//           {/* HERO SECTION */}
//           <section className="relative pt-16 pb-20 overflow-hidden bg-white border-b border-slate-200 shadow-sm">
//              <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:40px_40px] z-0" />
//              <div className="container relative z-10 text-center flex flex-col items-center">
//                 <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col items-center mb-8">
//                    <div className="flex gap-1.5 mb-2">
//                      <span className="w-3.5 h-3.5 bg-rose-500 rounded-full" />
//                      <span className="w-3.5 h-3.5 bg-rose-500 rounded-full" />
//                      <span className="w-3.5 h-3.5 bg-rose-500 rounded-full" />
//                    </div>
//                    <div className="font-display text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-none mb-4">
//                      CRYONANO
//                    </div>
//                    <div className="text-sm font-extrabold text-sky-600 tracking-[0.2em] uppercase bg-sky-50 px-4 py-1.5 rounded-full border border-sky-100">
//                      System Architecture Quoting
//                    </div>
//                 </motion.div>

//                 <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="font-display text-4xl lg:text-6xl font-black text-slate-900 mb-4 tracking-tight uppercase">
//                   Custom Power. <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">Exacting Standards.</span>
//                 </motion.h1>
//                 <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
//                   Configure your baseline hardware profile to initiate a formal engineering review and quotation process.
//                 </motion.p>
//              </div>
//           </section>

//           {/* CONFIGURATOR SECTION */}
//           <section className="container">
//              <QuoteConfigurator />
//           </section>

//         </main>
        
//         <Footer />
//       </div>
//     </PageTransition>
//   );
// };

// export default RequestQuotePage;









import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  ChevronLeft, ArrowRight, ShieldCheck, Zap, Activity, 
  Send, Server, Cpu, Waves, Target, Binary, CheckCircle2, Lock, 
  Globe, Calendar, Box, Thermometer, Database
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

// ==========================================
// OUTSIDE GLOBAL: Quote Data Configurations (Realistic Spec Matrix)
// Based on industry standards for critical power systems
// ==========================================
const quoteConfig = {
  "DC-DC_SYSTEM": {
    name: "DC-DC Converter System",
    inputs: [
      { id: "in_volt", label: "Input Voltage Range", type: "select", options: ["18-36V", "36-72V", "9-36V Ultra-Wide", "180-420V HVDC"] },
      { id: "out_volt", label: "Desired Output Voltage", type: "select", options: ["12V", "24V", "28V (MIL Standard)", "48V", "Custom"] },
      { id: "power_load", label: "Maximum Power Load (Watts)", type: "select", options: ["<1kW", "1kW - 5kW", "5kW - 15kW", ">15kW"] }
    ],
    environmental: ["MIL-STD-810G Vibe/Shock", "Extended Temp (-40 to +85C)", "EMI MIL-STD-461G"]
  },
  "DC-AC_SYSTEM": {
    name: "DC-AC Sine Wave Inverter",
    inputs: [
      { id: "in_volt_dc", label: "Input DC Voltage", type: "select", options: ["24V", "28V", "48V", "110V", "270V HVDC"] },
      { id: "out_volt_ac", label: "Output AC Voltage", type: "select", options: ["115V AC Single Phase", "230V AC Single Phase", "Custom"] },
      { id: "power_rating", label: "Power Rating (kVA)", type: "select", options: ["<1 kVA", "1 kVA - 3 kVA", "3 kVA - 10 kVA", ">10 kVA"] }
    ],
    environmental: ["Extended Temp (-40 to +70C)", "MIL-STD-461G Compliant", "Low Harmonic Distortion"]
  },
  "INVERTER_400Hz": {
    name: "400Hz Frequency Inverter",
    inputs: [
      { id: "gse_in", label: "Input Source (GSE standard)", type: "select", options: ["3-Phase 380/415V AC", "3-Phase 200/208V AC", "DC Input (270V/28V)"] },
      { id: "out_cfg", label: "Output Configuration (Aircraft Standard)", type: "select", options: ["3-Phase 115V/200V", "Single Phase 115V", "Custom"] },
      { id: "out_pwr", label: "Output Power Rating (kVA)", type: "select", options: ["<10 kVA", "10 kVA - 30 kVA (Standard)", "30 kVA - 90 kVA", ">90 kVA"] }
    ],
    environmental: ["Aerospace Grade Components", "Transient Voltage Protection", "EMI/EMC MIL-STD-461F"]
  }
};

type ProductKey = keyof typeof quoteConfig;

// ==========================================
// OUTSIDE COMPONENT: Focus-Safe Input Wrapper
// ==========================================
const QuoteInputWrapper = ({ children, isFocused }: { children: React.ReactNode, isFocused: boolean }) => (
  <div className="relative group z-10">
     <div className={`absolute -inset-0.5 rounded-xl bg-gradient-to-r from-sky-400 to-indigo-500 blur-[2px] transition-opacity duration-300 pointer-events-none ${isFocused ? 'opacity-50' : 'opacity-0'}`} />
     <div className="relative bg-white rounded-xl z-20">
       {children}
     </div>
  </div>
);

// ==========================================
// SUB-COMPONENT: Intelligent Header (Refinement 1)
// Automated content & taglines
// ==========================================
const IntelligentQuoteHeader = () => {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const taglines = [
    "Configuring for Exacting Defense & Aerospace Standards.",
    "Mission-Critical Architectures. Zero Downtime Targets.",
    "MIL-STD Validated. Lab Certified. Globally Deployed.",
    "Autonomous System Review. Rapid Engineering Feedback."
  ];

  useEffect(() => {
    const timer = setInterval(() => setTaglineIndex((prev) => (prev + 1) % taglines.length), 4000);
    return () => clearInterval(timer);
  }, [taglines.length]);

  return (
    <section className="relative pt-16 pb-20 overflow-hidden bg-white border-b border-slate-200 shadow-sm">
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:40px_40px] z-0" />
       
       <div className="container relative z-10 text-center flex flex-col items-center">
          
          {/* Animated Brand Logo (Refinement 1: Left-aligned and Animated) */}
          {/* <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center gap-3 mb-8 bg-slate-50 border border-slate-100 p-3 pr-6 rounded-full shadow-inner">
             <div className="flex gap-1.5 ml-1">
               <span className="w-3.5 h-3.5 bg-rose-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(244,63,94,0.6)]" />
               <span className="w-3.5 h-3.5 bg-rose-500 rounded-full animate-pulse delay-75" />
               <span className="w-3.5 h-3.5 bg-rose-500 rounded-full animate-pulse delay-150" />
             </div>
             <div className="font-display text-4xl font-black text-slate-900 tracking-tight leading-none">
               CRYONANO
             </div>
          </motion.div> */}



          {/* Animated Brand Logo (Fixed: Dots stacked top-left like Navbar) */}
          <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col items-center mb-8">
             <div className="flex flex-col items-start">
                <div className="flex gap-1.5 mb-1.5 ml-1">
                  <span className="w-3.5 h-3.5 bg-rose-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(244,63,94,0.4)]" />
                  <span className="w-3.5 h-3.5 bg-rose-500 rounded-full animate-pulse delay-75" />
                  <span className="w-3.5 h-3.5 bg-rose-500 rounded-full animate-pulse delay-150" />
                </div>
                <div className="font-display text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-none">
                  CRYONANO
                </div>
             </div>
          </motion.div>

          {/* Autonomous Content Animation */}
          <AnimatePresence mode="wait">
             <motion.div key={taglineIndex} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto">
                <h1 className="font-display text-4xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight uppercase leading-[1.1]">
                  System <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">Architecture</span> Quoting
                </h1>
                
                <p className="text-lg lg:text-xl text-sky-800 font-bold bg-sky-50 px-6 py-2.5 rounded-full border border-sky-100 inline-block shadow-sm">
                  {taglines[taglineIndex]}
                </p>
             </motion.div>
          </AnimatePresence>
       </div>
    </section>
  );
};

// ==========================================
// MAIN CONFIGURATOR COMPONENT (Refinement 2)
// Context-aware step filtering
// ==========================================
const QuoteConfigurator = () => {
  const location = useLocation();
  const [currentStep, setCurrentStep] = useState(1);
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Dynamic state management
  const [productContext, setProductContext] = useState<ProductKey | null>(null);
  const [quoteData, setQuoteData] = useState<Record<string, any>>({ milStd: false });

  // Refinement 2: Context Fetching Logic
  useEffect(() => {
    // Check location.state for product information (e.g., passed from Inverter400HzPage)
    // outside this component <Link to="/request-quote" state={{ productFamily: "INVERTER_400Hz" }}>
    if (location.state && location.state.productFamily && quoteConfig[location.state.productFamily as ProductKey]) {
      const familyKey = location.state.productFamily as ProductKey;
      setProductContext(familyKey);
      setQuoteData((prev) => ({ ...prev, platform: quoteConfig[familyKey].name }));
      setCurrentStep(2); // Auto-advance to technical specs
    } else {
      setProductContext(null); // Reset if no state is passed
      setCurrentStep(1);
    }
  }, [location.state]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setQuoteData({ ...quoteData, [e.target.name]: e.target.value });
  };

  const handlePlatformSelect = (key: ProductKey) => {
    setProductContext(key);
    setQuoteData({ ...quoteData, platform: quoteConfig[key].name });
    setTimeout(() => setCurrentStep(2), 400); // Auto-advance after small delay
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setTimeout(() => {
      setFormState("success");
      setTimeout(() => {
         setFormState("idle");
         // Keep the fetched context, just reset form values
         setQuoteData({ milStd: false }); 
         setCurrentStep(productContext ? 2 : 1);
      }, 6000);
    }, 3000);
  };

  const stepVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.3, ease: "easeIn" as const } }
  };

  return (
    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mt-12 relative z-10 items-start">
      
      {/* ========================================== */}
      {/* LEFT: LIVE CONFIGURATION TELEMETRY */}
      {/* ========================================== */}
      <div className="lg:col-span-4 sticky top-24">
        <div className="bg-slate-900 rounded-[2.5rem] p-8 shadow-2xl border-4 border-slate-800 relative overflow-hidden">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.15)_0%,transparent_70%)] pointer-events-none" />
           
           <div className="flex items-center gap-3 mb-8 relative z-10">
              <div className="w-10 h-10 bg-sky-500/20 rounded-xl border border-sky-400 flex items-center justify-center">
                <Activity className="w-5 h-5 text-sky-400 animate-pulse" />
              </div>
              <div>
                 <h3 className="font-black text-white uppercase tracking-widest text-sm">System Profile</h3>
                 <p className="text-[10px] text-sky-300 font-mono">Live Configuration Telemetry</p>
              </div>
           </div>

           <div className="space-y-6 relative z-10">
              <div className="border-l-2 border-slate-700 pl-4 relative">
                 <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-4 border-slate-900 ${currentStep >= 1 ? 'bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.8)]' : 'bg-slate-700'}`} />
                 <span className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Architecture</span>
                 <span className="font-mono text-sm font-bold text-white leading-tight block">
                   {quoteData.platform || "Awaiting Selection..."}
                   {productContext && <span className="text-[10px] text-emerald-400 font-bold uppercase block mt-1">(Context Auto-Fetched)</span>}
                 </span>
              </div>
              
              <div className="border-l-2 border-slate-700 pl-4 relative">
                 <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-4 border-slate-900 ${currentStep >= 2 ? 'bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.8)]' : 'bg-slate-700'}`} />
                 <span className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Technical Specs</span>
                 <span className="font-mono text-xs font-bold text-white flex flex-col gap-1.5">
                    {productContext ? (
                      quoteConfig[productContext].inputs.map((input) => (
                        <div key={input.id} className="flex items-center gap-2">
                          <CheckCircle2 className={`w-3.5 h-3.5 ${quoteData[input.id] ? "text-sky-400" : "text-slate-600"}`} />
                          <span className={`${quoteData[input.id] ? "text-white" : "text-slate-400"}`}>{input.label}: {quoteData[input.id] || "_"}</span>
                        </div>
                      ))
                    ) : "Select architecture first."}
                 </span>
              </div>

              <div className="border-l-2 border-transparent pl-4 relative">
                 <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-4 border-slate-900 ${currentStep >= 3 ? 'bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.8)]' : 'bg-slate-700'}`} />
                 <span className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Deployment</span>
                 <span className="font-mono text-xs font-bold text-white flex flex-col gap-1.5">
                   {quoteData.quantity && <span>Volume: {quoteData.quantity} Units</span>}
                   {quoteData.timeline && <span>Timeline: {quoteData.timeline}</span>}
                   {quoteData.location && <span className="text-emerald-400">Location: {quoteData.location}</span>}
                   {quoteData.milStd && <span className="text-amber-400 flex items-center gap-1 mt-1"><ShieldCheck className="w-3.5 h-3.5"/> MIL-STD Protocol Enabled</span>}
                   {!quoteData.quantity && "Awaiting Data..."}
                 </span>
              </div>
           </div>

           {/* Progress */}
           <div className="mt-10 pt-6 border-t border-slate-800">
              <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">
                 <span>Sync Level</span>
                 <span>{Math.round(((currentStep - 1) / 2) * 100)}%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                 <motion.div className="h-full bg-sky-500" initial={{ width: 0 }} animate={{ width: `${((currentStep - 1) / 2) * 100}%` }} transition={{ duration: 0.5 }} />
              </div>
           </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* RIGHT: CONFIGURATOR STEPS */}
      {/* ========================================== */}
      <div className="lg:col-span-8 bg-white border border-slate-200 rounded-[3rem] p-8 lg:p-12 shadow-xl relative overflow-hidden min-h-[500px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.03)_0%,transparent_70%)] pointer-events-none" />

        <AnimatePresence mode="wait">
          
          {/* --- PHASE 1: ARCHITECTURE (Context-Filtered) --- */}
          {currentStep === 1 && (
            <motion.div key="step1" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="relative z-10">
               <h2 className="font-display text-3xl lg:text-4xl font-black text-slate-900 uppercase tracking-tight mb-2 leading-tight">Identify System<br/>Architecture</h2>
               <p className="text-slate-500 font-bold mb-8 max-w-lg">Choose the platform base for your requirements or allow the system to guide your selection.</p>

               <div className="grid md:grid-cols-2 gap-5">
                  {[
                    { key: "DC-DC_SYSTEM", desc: "Low & High Power Tiers", icon: Cpu, color: "sky" },
                    { key: "DC-AC_SYSTEM", desc: "Mission-Critical Output", icon: Waves, color: "emerald" },
                    { key: "INVERTER_400Hz", desc: "Aerospace & GSE Validated", icon: Zap, color: "amber" }
                  ].map((sys) => {
                    const cfg = quoteConfig[sys.key as ProductKey];
                    return (
                      <div 
                        key={sys.key} onClick={() => handlePlatformSelect(sys.key as ProductKey)}
                        className={`cursor-pointer p-6 rounded-[2rem] border-2 transition-all duration-300 flex flex-col gap-4 group ${productContext === sys.key ? `bg-${sys.color}-50 border-${sys.color}-400 shadow-md` : 'bg-slate-50 border-slate-100 hover:border-slate-300 hover:bg-white'}`}
                      >
                         <div className={`w-14 h-14 rounded-xl flex items-center justify-center border transition-colors ${productContext === sys.key ? `bg-${sys.color}-500 border-${sys.color}-600 text-white` : `bg-white border-slate-200 text-slate-400 group-hover:text-${sys.color}-500`}`}>
                            <sys.icon className="w-7 h-7" />
                         </div>
                         <div>
                           <h4 className="text-xl font-black text-slate-900 leading-tight">{cfg.name}</h4>
                           <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{sys.desc}</span>
                         </div>
                      </div>
                    )
                  })}
               </div>
            </motion.div>
          )}

          {/* --- PHASE 2: TECHNICAL PARAMETERS (Dynamic Based on Product Context) --- */}
          {currentStep === 2 && productContext && (
            <motion.div key="step2" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="relative z-10">
               <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                  <div>
                    <h2 className="font-display text-3xl lg:text-4xl font-black text-slate-900 uppercase tracking-tight leading-tight">Technical<br/>Specifications</h2>
                    <p className="text-slate-500 font-bold mt-1">Configure deep specs for the {quoteConfig[productContext].name}.</p>
                  </div>
                  {productContext && (
                     <span className="text-emerald-700 font-extrabold uppercase text-[11px] px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center gap-2 shadow-sm">
                        <Cpu className="w-3.5 h-3.5" /> Platform Context Locked
                     </span>
                  )}
               </div>

               {/* Dynamic Spec Input Grid (Research from competitor pages) */}
               <div className="grid md:grid-cols-2 gap-6 bg-slate-50 p-8 rounded-[2rem] border border-slate-100 shadow-inner">
                  {quoteConfig[productContext].inputs.map((input) => (
                    <div key={input.id} className="space-y-1.5">
                       <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">{input.label}</label>
                       <QuoteInputWrapper isFocused={focusedField === input.id}>
                         <select name={input.id} value={quoteData[input.id] || ""} onChange={handleChange} onFocus={() => setFocusedField(input.id)} onBlur={() => setFocusedField(null)} required className="w-full bg-white border-2 border-slate-100 rounded-xl px-4 py-3 text-slate-800 font-bold focus:outline-none focus:border-sky-400 Transition-all appearance-none relative z-20">
                            <option value="" disabled>Select Parameter...</option>
                            {input.options.map((opt) => (
                              <option key={opt} value={opt}>{opt}</option>
                            ))}
                         </select>
                       </QuoteInputWrapper>
                    </div>
                  ))}
               </div>

               {/* Dynamic Compliance/Environmental Toggles */}
               <div className="mt-8 space-y-4">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block pl-2 mb-3">Compliance & Deployment Profiles</span>
                  <div className="grid md:grid-cols-3 gap-4">
                     {quoteConfig[productContext].environmental.map((env) => (
                        <div key={env} className="bg-white border border-slate-200 p-4 rounded-xl flex items-center gap-3">
                           <Thermometer className="w-4 h-4 text-emerald-500 shrink-0" />
                           <span className="text-xs font-bold text-slate-700 line-clamp-1">{env}</span>
                        </div>
                     ))}
                  </div>

                  {/* MIL-STD Active Toggle */}
                  <div 
                     onClick={() => setQuoteData({ ...quoteData, milStd: !quoteData.milStd })}
                     className={`cursor-pointer mt-6 p-5 rounded-2xl border-2 transition-all flex items-center justify-between ${quoteData.milStd ? 'bg-amber-50 border-amber-300 shadow-sm' : 'bg-white border-slate-100 hover:border-slate-300'}`}
                  >
                     <div className="flex items-center gap-4">
                       <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${quoteData.milStd ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-400'}`}>
                         <ShieldCheck className="w-6 h-6" />
                       </div>
                       <div>
                         <h5 className={`font-black text-lg ${quoteData.milStd ? 'text-amber-900' : 'text-slate-800'}`}>Enable MIL-STD Protocol Validation</h5>
                         <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Activate full qualification report & testing matrix.</span>
                       </div>
                     </div>
                     <CheckCircle2 className={`w-7 h-7 ${quoteData.milStd ? 'text-amber-500' : 'text-slate-200'}`} />
                  </div>
               </div>

               <div className="flex justify-between mt-12 pt-6 border-t border-slate-100">
                  <button onClick={() => setCurrentStep(1)} className="px-6 py-3 rounded-xl font-bold text-slate-500 hover:bg-slate-100 transition-colors flex items-center gap-2 uppercase tracking-widest text-sm">
                    <ChevronLeft className="w-4 h-4" /> Reset Architecture
                  </button>
                  <button 
                     disabled={!quoteData.platform || !quoteConfig[productContext].inputs.every(i => quoteData[i.id])}
                     onClick={() => setCurrentStep(3)} 
                     className="px-8 py-3 rounded-xl bg-slate-900 text-white font-black uppercase tracking-widest text-sm shadow-lg hover:bg-sky-600 transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Define Deployment <ArrowRight className="w-4 h-4" />
                  </button>
               </div>
            </motion.div>
          )}

          {/* --- PHASE 3: LOGISTICS & SECURE TRANSMISSION --- */}
          {currentStep === 3 && (
            <motion.div key="step3" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="relative z-10">
               <h2 className="font-display text-3xl lg:text-4xl font-black text-slate-900 uppercase tracking-tight mb-2 leading-tight">Deployment<br/>& Connection</h2>
               <p className="text-slate-500 font-bold mb-8">Provide required metrics to synchronize the quoting session.</p>

               <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5 bg-slate-50 border border-slate-100 rounded-2xl p-6">
                     <div className="space-y-1.5">
                       <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Volume Requirement</label>
                       <QuoteInputWrapper isFocused={focusedField === "quantity"}>
                         <select name="quantity" value={quoteData.quantity || ""} onChange={handleChange} onFocus={() => setFocusedField("quantity")} onBlur={() => setFocusedField(null)} required className="w-full bg-white border-2 border-slate-100 rounded-xl px-4 py-3 text-slate-800 font-bold focus:outline-none appearance-none relative z-20">
                            <option value="" disabled>Select Volume...</option>
                            <option value="1-5 Units (Prototype)">1-5 Units (Prototype)</option>
                            <option value="10-50 Units (Pilot)">10-50 Units (Pilot)</option>
                            <option value="100+ Units (Production)">100+ Units (Production)</option>
                         </select>
                       </QuoteInputWrapper>
                     </div>
                     <div className="space-y-1.5">
                       <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Timeline</label>
                       <QuoteInputWrapper isFocused={focusedField === "timeline"}>
                         <select name="timeline" value={quoteData.timeline || ""} onChange={handleChange} onFocus={() => setFocusedField("timeline")} onBlur={() => setFocusedField(null)} required className="w-full bg-white border-2 border-slate-100 rounded-xl px-4 py-3 text-slate-800 font-bold focus:outline-none appearance-none relative z-20">
                            <option value="" disabled>Select Timeline...</option>
                            <option value="Immediate (AOG/Critical)">Immediate (AOG/Critical)</option>
                            <option value="< 3 Months">3 Months</option>
                            <option value="6-12 Months (Planning)">6-12 Months (Planning)</option>
                         </select>
                       </QuoteInputWrapper>
                     </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Primary Deployment Location</label>
                    <QuoteInputWrapper isFocused={focusedField === "location"}>
                      <input name="location" value={quoteData.location || ""} onChange={handleChange} onFocus={() => setFocusedField("location")} onBlur={() => setFocusedField(null)} required type="text" className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 text-slate-800 font-bold focus:outline-none relative z-20" placeholder="e.g. Nellis AFB, Nevada / Hamburg GSE Site" />
                    </QuoteInputWrapper>
                  </div>

                  {/* Encrypted Contact Matrix (Realistic data fetching from other pages) */}
                  <div className="space-y-5 border-t border-slate-100 pt-6 mt-6">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block pl-2 mb-3">Transmission Matrix</span>
                    <QuoteInputWrapper isFocused={focusedField === "name"}>
                      <input name="name" value={quoteData.name || ""} onChange={handleChange} onFocus={() => setFocusedField("name")} onBlur={() => setFocusedField(null)} required type="text" className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 text-slate-800 font-bold focus:outline-none relative z-20" placeholder="Contact Full Name" />
                    </QuoteInputWrapper>
                    <QuoteInputWrapper isFocused={focusedField === "email"}>
                      <input name="email" value={quoteData.email || ""} onChange={handleChange} onFocus={() => setFocusedField("email")} onBlur={() => setFocusedField(null)} required type="email" className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 text-slate-800 font-bold focus:outline-none relative z-20" placeholder="jane.doe@organization.com" />
                    </QuoteInputWrapper>
                    <QuoteInputWrapper isFocused={focusedField === "company"}>
                      <input name="company" value={quoteData.company || ""} onChange={handleChange} onFocus={() => setFocusedField("company")} onBlur={() => setFocusedField(null)} required type="text" className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 text-slate-800 font-bold focus:outline-none relative z-20" placeholder="Corporate / Organization Name" />
                    </QuoteInputWrapper>
                  </div>

                  <div className="flex justify-between items-center mt-12 pt-6 border-t border-slate-100">
                     <button type="button" onClick={() => setCurrentStep(2)} className="px-6 py-3 rounded-xl font-bold text-slate-500 hover:bg-slate-100 transition-colors flex items-center gap-2 uppercase tracking-widest text-sm">
                       <ChevronLeft className="w-4 h-4" /> Back
                     </button>
                     <button type="submit" className="px-10 py-4 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-black uppercase tracking-widest text-sm shadow-[0_10px_20px_rgba(14,165,233,0.3)] hover:shadow-[0_15px_30px_rgba(14,165,233,0.4)] transition-all hover:-translate-y-1 flex items-center gap-3 relative overflow-hidden group">
                        <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="absolute top-0 bottom-0 w-1/4 bg-white/20 blur-md skew-x-12" />
                        Transmit Secure Profile <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                     </button>
                  </div>
               </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- OVERLAYS --- */}
        <AnimatePresence>
           {formState === "submitting" && (
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 z-30 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center rounded-[3rem] text-center border border-slate-200">
                <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
                   <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-4 border-dashed border-sky-400 rounded-full" />
                   <Binary className="w-10 h-10 text-sky-500 animate-pulse" />
                </div>
                <h3 className="font-display text-2xl font-black text-slate-900 uppercase tracking-widest">Generating Profile</h3>
                <p className="text-slate-500 font-bold mt-2">Relaying technical requirements to engineering matrix...</p>
             </motion.div>
           )}
        </AnimatePresence>
      </div>

      {/* --- SUCCESS MODAL --- */}
      <AnimatePresence>
         {formState === "success" && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" />
               <motion.div initial={{ scale: 0.9, y: 30, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.9, y: 20, opacity: 0 }} transition={{ type: "spring", damping: 25, stiffness: 300 }} className="bg-white rounded-[3rem] p-12 md:p-16 max-w-2xl w-full text-center shadow-2xl relative overflow-hidden border border-slate-200 z-10">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }} className="w-24 h-24 bg-emerald-50 border-4 border-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
                     <CheckCircle2 className="w-12 h-12 text-emerald-500" />
                  </motion.div>
                  <h3 className="font-display text-3xl font-black text-slate-900 uppercase tracking-tight mb-4">Transmission Successful</h3>
                  <p className="text-slate-600 font-bold leading-relaxed mb-6">Your system profile has been logged. A power scientist will review your parameters and provide a comprehensive quotation shortly.</p>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden relative">
                     <motion.div initial={{ width: "100%" }} animate={{ width: "0%" }} transition={{ duration: 6, ease: "linear" }} className="h-full bg-emerald-500" />
                  </div>
                  <p className="mt-4 text-[10px] font-black text-slate-400 uppercase tracking-widest animate-pulse">Closing Secure Session...</p>
               </motion.div>
            </div>
         )}
      </AnimatePresence>

    </div>
  );
};

// ==========================================
// MAIN PAGE COMPONENT
// ==========================================
const RequestQuotePage = () => {
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [100, 200], [0, 1]);

  return (
    <PageTransition>
      <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-sky-200 selection:text-sky-900">
        <Navbar />

        {/* STICKY HEADER */}
        <div className="sticky z-30 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm" style={{ top: '64px' }}>
          <div className="container py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
               <Link to="/" className="group flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-sky-50 rounded-lg transition-colors border border-slate-200 hover:border-sky-200">
                 <ChevronLeft className="w-4 h-4 text-slate-500 group-hover:text-sky-600 transition-colors" />
                 <span className="text-xs font-black text-slate-600 group-hover:text-sky-700 uppercase tracking-widest transition-colors">HOME PAGE</span>
               </Link>
               <span className="text-slate-300 font-bold">/</span>
               <span className="text-sky-600 font-black text-xs uppercase tracking-widest">REQUEST QUOTE</span>
            </div>
            <motion.div style={{ opacity: headerOpacity }} className="flex items-center gap-4 pointer-events-none">
              <span className="hidden lg:block font-display font-bold text-slate-900 uppercase tracking-widest">Quote Configurator Active</span>
            </motion.div>
          </div>
        </div>

        <main className="relative pb-24">
          
          {/* Intelligent Animated Header */}
          <IntelligentQuoteHeader />

          {/* Configurator Section */}
          <section className="container">
             <QuoteConfigurator />
          </section>

          {/* New: Technical Data Disclaimer Section (Refinement 2: Realistic) */}
          <section className="container mt-24">
             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="bg-white border border-slate-200 rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center gap-8 shadow-sm">
                <div className="w-16 h-16 bg-amber-50 rounded-xl border border-amber-100 flex items-center justify-center text-amber-500 shrink-0">
                  <Database className="w-8 h-8" />
                </div>
                <div>
                   <h5 className="font-display text-xl font-black text-slate-900 uppercase tracking-tight mb-1">Technical Review Protocol</h5>
                   <p className="text-slate-600 font-medium text-sm leading-relaxed max-w-3xl">All submitted system profiles undergo immediate autonomous validation followed by a senior engineering review (12-24 hour window). This initial review is essential to verify MIL-STD constraints and platform feasibility before generating the formal quotation. All technical data provided is held under strict non-disclosure.</p>
                </div>
             </motion.div>
          </section>

        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default RequestQuotePage;