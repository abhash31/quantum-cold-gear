import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  Wrench, FileText, GraduationCap, ShieldCheck, Activity, 
  Search, Download, Clock, Zap, Target, ArrowRight, ChevronLeft, 
  ArrowUp, Server, RefreshCcw, CheckCircle2, Shield, Calendar, MapPin, Send, Settings
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

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
          className="fixed bottom-8 right-8 z-50 p-4 bg-sky-500 text-white rounded-full shadow-lg hover:bg-sky-600 hover:-translate-y-1 transition-all"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// // ==========================================
// // 1. CORE SUPPORT PILLARS (Interactive Hover)
// // ==========================================
// const SupportPillars = () => {
//   const pillars = [
//     { title: "RMA & Diagnostics", desc: "Initiate return material authorizations for recalibration or repair.", icon: RefreshCcw, color: "sky" },
//     { title: "Technical Library", desc: "Access MIL-STD reports, CAD models, and datasheets.", icon: FileText, color: "emerald" },
//     { title: "Field Engineering", desc: "On-site integration support for aerospace and defense platforms.", icon: Wrench, color: "amber" },
//     { title: "System Training", desc: "Operational protocol training for N+1 redundant systems.", icon: GraduationCap, color: "indigo" }
//   ];

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mx-auto relative z-10 mt-12">
//       {pillars.map((pillar, i) => (
//         <motion.div 
//           key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
//           className={`group bg-white rounded-3xl p-8 border-2 border-slate-100 shadow-lg hover:shadow-2xl hover:border-${pillar.color}-300 transition-all duration-300 relative overflow-hidden cursor-pointer flex flex-col`}
//         >
//            <div className={`absolute -right-10 -top-10 w-32 h-32 bg-${pillar.color}-100 rounded-full blur-[30px] opacity-40 group-hover:scale-150 transition-transform duration-700 pointer-events-none`} />
           
//            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border transition-colors duration-300 ${`bg-${pillar.color}-50 border-${pillar.color}-100 text-${pillar.color}-500 group-hover:bg-${pillar.color}-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(0,0,0,0.1)]`}`}>
//               <pillar.icon className="w-7 h-7" />
//            </div>

//            <h4 className="text-xl font-black text-slate-900 mb-3 relative z-10">{pillar.title}</h4>
//            <p className="text-sm font-bold text-slate-500 flex-grow relative z-10">{pillar.desc}</p>
           
//            <div className={`mt-6 flex items-center gap-2 text-xs font-black text-${pillar.color}-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0`}>
//               Access Portal <ArrowRight className="w-4 h-4" />
//            </div>
//         </motion.div>
//       ))}
//     </div>
//   );
// };



// ==========================================
// 1. CORE SUPPORT PILLARS (Interactive & Clickable Routes)
// ==========================================
const SupportPillars = () => {
  const navigate = useNavigate();
  
  // Added 'route' parameters for actual navigation
  const pillars = [
    { title: "RMA & Diagnostics", desc: "Initiate return material authorizations for recalibration or repair.", icon: RefreshCcw, color: "sky", route: "/support/rma" },
    { title: "Technical Library", desc: "Access MIL-STD reports, CAD models, and datasheets.", icon: FileText, color: "emerald", route: "/support/library" },
    { title: "Field Engineering", desc: "On-site integration support for aerospace and defense platforms.", icon: Wrench, color: "amber", route: "/support/field-engineering" },
    { title: "System Training", desc: "Operational protocol training for N+1 redundant systems.", icon: GraduationCap, color: "indigo", route: "/support/training" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mx-auto relative z-10 mt-12">
      {pillars.map((pillar, i) => (
        <motion.div 
          key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
          onClick={() => navigate(pillar.route)}
          className={`group bg-white rounded-3xl p-8 border-2 border-slate-100 shadow-lg hover:shadow-2xl hover:border-${pillar.color}-300 transition-all duration-300 relative overflow-hidden cursor-pointer flex flex-col`}
        >
           <div className={`absolute -right-10 -top-10 w-32 h-32 bg-${pillar.color}-100 rounded-full blur-[30px] opacity-40 group-hover:scale-150 transition-transform duration-700 pointer-events-none`} />
           
           <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border transition-colors duration-300 ${`bg-${pillar.color}-50 border-${pillar.color}-100 text-${pillar.color}-500 group-hover:bg-${pillar.color}-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(0,0,0,0.1)]`}`}>
              <pillar.icon className="w-7 h-7" />
           </div>

           <h4 className="text-xl font-black text-slate-900 mb-3 relative z-10">{pillar.title}</h4>
           <p className="text-sm font-bold text-slate-500 flex-grow relative z-10">{pillar.desc}</p>
           
           <div className={`mt-6 flex items-center gap-2 text-xs font-black text-${pillar.color}-600 uppercase tracking-widest transition-transform transform group-hover:translate-x-2`}>
              Open Portal <ArrowRight className="w-4 h-4" />
           </div>
        </motion.div>
      ))}
    </div>
  );
};

// ==========================================
// 2. AUTONOMOUS RMA & LIFECYCLE TRACKER
// Visualizes the diagnostic/repair flow
// ==========================================
const AutonomousRMATracker = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    { title: "RMA Initiated", detail: "Ticket Generated", icon: FileText },
    { title: "Intake Scan", detail: "Visual & EMI Check", icon: Search },
    { title: "Lab Diagnostics", detail: "Component Level Testing", icon: Activity },
    { title: "Recalibration", detail: "MIL-STD Baseline Reset", icon: Settings },
    { title: "QA Passed", detail: "Ready for Dispatch", icon: ShieldCheck }
  ];

  useEffect(() => {
    const timer = setInterval(() => setActiveStep((prev) => (prev + 1) % steps.length), 2500);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <div className="w-full bg-white border border-slate-200 rounded-[3rem] p-10 lg:p-14 mt-16 shadow-xl relative overflow-hidden flex flex-col items-center">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.05)_0%,transparent_70%)] pointer-events-none" />
       
       <div className="text-center max-w-2xl mx-auto mb-12 relative z-10">
         <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-[10px] font-black uppercase tracking-widest mb-4 shadow-sm">
            <RefreshCcw className="w-3 h-3" /> Lifecycle Sustainment
         </span>
         <h2 className="font-display text-4xl font-black text-slate-900 uppercase tracking-tight">Active RMA Diagnostic Flow</h2>
         <p className="text-slate-500 font-bold mt-3">Live tracking of hardware through our rigorous repair and recalibration pipeline.</p>
       </div>

       {/* Autonomous Progress Tracker */}
       <div className="w-full max-w-5xl relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 mt-4">
          
          {/* Connecting Background Line (Desktop) */}
          <div className="hidden md:block absolute top-10 left-10 right-10 h-1.5 bg-slate-100 rounded-full z-0 overflow-hidden">
             <motion.div 
               className="h-full bg-sky-400"
               animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
               transition={{ duration: 0.5, ease: "easeInOut" }}
             />
          </div>

          {steps.map((step, i) => {
            const isCompleted = i < activeStep;
            const isActive = i === activeStep;
            const isPending = i > activeStep;

            return (
               <div key={i} className="relative z-10 flex flex-col items-center text-center w-full md:w-1/5 group">
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center border-4 transition-all duration-500 mb-4 bg-white relative ${isActive ? 'border-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.4)] scale-110' : isCompleted ? 'border-emerald-400' : 'border-slate-200'}`}>
                     {isActive && <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }} transition={{ duration: 1.5, repeat: Infinity }} className="absolute inset-0 rounded-full bg-sky-200" />}
                     <step.icon className={`w-8 h-8 relative z-10 transition-colors ${isActive ? 'text-sky-500' : isCompleted ? 'text-emerald-500' : 'text-slate-300'}`} />
                  </div>
                  
                  <h4 className={`text-sm font-black uppercase tracking-tight transition-colors ${isActive ? 'text-sky-700' : isCompleted ? 'text-emerald-700' : 'text-slate-400'}`}>{step.title}</h4>
                  <div className={`text-[10px] font-bold uppercase tracking-widest mt-1 transition-colors ${isActive ? 'text-sky-500 animate-pulse' : isCompleted ? 'text-emerald-500' : 'text-slate-300'}`}>
                     {isActive ? "Processing..." : isCompleted ? "Verified" : "Pending"}
                  </div>
               </div>
            )
          })}
       </div>
    </div>
  );
};

// ==========================================
// 3. SLA & WARRANTY TIERS (Interactive Matrix)
// ==========================================
const SLATiers = () => {
  const [activeTier, setActiveTier] = useState(1); // Default center

  const tiers = [
    { name: "Standard Base", target: "Commercial Edge", icon: Shield, price: "Included", features: ["1-Year Hardware Defect", "Standard 14-Day RMA", "Email Ticket Support", "Firmware Updates"] },
    { name: "Mission Critical", target: "Defense & Aerospace", icon: ShieldCheck, price: "Tier 1 SLA", features: ["5-Year Extended Coverage", "Advanced Replacement (24h)", "24/7 Dedicated Priority Line", "On-Site Engineering Disptach", "Annual Recalibration"], highlight: true },
    { name: "Lifecycle Plus", target: "Industrial Infrastructure", icon: Clock, price: "Tier 2 SLA", features: ["3-Year Extended Coverage", "Expedited 5-Day RMA", "Priority Phone Support", "Remote Diagnostic Access"] }
  ];

  return (
    <div className="w-full mt-24 relative z-10">
       <div className="text-center max-w-2xl mx-auto mb-12">
         <h2 className="font-display text-4xl font-black text-slate-900 uppercase tracking-tight">Service Level Agreements</h2>
         <p className="text-slate-500 font-bold mt-3">Guaranteed response times and extended coverage for critical power architectures.</p>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {tiers.map((tier, i) => (
             <div 
               key={i} onMouseEnter={() => setActiveTier(i)}
               className={`relative bg-white rounded-[2.5rem] p-8 border-2 transition-all duration-500 cursor-default ${activeTier === i ? (tier.highlight ? 'border-sky-500 shadow-2xl scale-105 z-20' : 'border-slate-300 shadow-xl scale-[1.02] z-10') : 'border-slate-100 shadow-sm opacity-80 z-0'}`}
             >
                {tier.highlight && activeTier === i && (
                   <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sky-500 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-md flex items-center gap-1.5">
                      <Zap className="w-3 h-3" /> Recommended Protocol
                   </div>
                )}
                
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors ${activeTier === i ? (tier.highlight ? 'bg-sky-50 text-sky-600' : 'bg-slate-100 text-slate-700') : 'bg-slate-50 text-slate-400'}`}>
                   <tier.icon className="w-8 h-8" />
                </div>

                <h4 className={`text-2xl font-black uppercase tracking-tight mb-1 ${activeTier === i ? 'text-slate-900' : 'text-slate-600'}`}>{tier.name}</h4>
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">{tier.target}</p>
                
                <div className="mb-8 pb-8 border-b border-slate-100">
                   <span className={`text-3xl font-display font-black ${activeTier === i && tier.highlight ? 'text-sky-600' : 'text-slate-800'}`}>{tier.price}</span>
                </div>

                <ul className="space-y-4 mb-8">
                   {tier.features.map((feat, idx) => (
                     <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className={`w-5 h-5 shrink-0 ${activeTier === i ? (tier.highlight ? 'text-sky-500' : 'text-slate-700') : 'text-slate-300'}`} />
                        <span className={`text-sm font-bold ${activeTier === i ? 'text-slate-700' : 'text-slate-500'}`}>{feat}</span>
                     </li>
                   ))}
                </ul>

                <button className={`w-full py-4 rounded-xl font-black uppercase tracking-widest text-sm transition-all duration-300 ${activeTier === i ? (tier.highlight ? 'bg-sky-500 text-white shadow-lg hover:bg-sky-600 hover:-translate-y-1' : 'bg-slate-900 text-white hover:bg-slate-800') : 'bg-slate-100 text-slate-400'}`}>
                   Request SLA Profile
                </button>
             </div>
          ))}
       </div>
    </div>
  );
};

// // ==========================================
// // 4. AUTONOMOUS TECHNICAL LIBRARY SEARCH
// // Visualizes a live knowledge base
// // ==========================================
// const TechnicalResourceLibrary = () => {
//   const [searchPhase, setSearchPhase] = useState(0);
//   const searches = ["DC-DC Isolation Specs", "MIL-STD-461G Test Reports", "400Hz Inverter CAD Models"];
  
//   useEffect(() => {
//     const timer = setInterval(() => setSearchPhase((prev) => (prev + 1) % searches.length), 3000);
//     return () => clearInterval(timer);
//   }, [searches.length]);

//   return (
//     <div className="w-full bg-slate-900 border-4 border-slate-800 rounded-[3rem] p-10 lg:p-16 mt-24 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center gap-12">
//        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.15)_0%,transparent_60%)] pointer-events-none" />
       
//        <div className="w-full lg:w-1/2 relative z-10">
//           <h2 className="font-display text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mb-4">Technical Resource Matrix</h2>
//           <p className="text-lg text-slate-400 font-medium mb-8">Instant access to comprehensive datasheets, thermal application notes, and integration manuals.</p>
          
//           {/* Simulated Search Bar */}
//           <div className="bg-slate-800 border-2 border-slate-700 rounded-2xl p-4 flex items-center gap-4 shadow-inner mb-6">
//              <Search className="w-6 h-6 text-sky-400 animate-pulse" />
//              <div className="font-mono font-bold text-sky-200 tracking-wide">
//                 <AnimatePresence mode="wait">
//                    <motion.span key={searchPhase} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }}>
//                      {searches[searchPhase]}_
//                    </motion.span>
//                 </AnimatePresence>
//              </div>
//           </div>

//           <div className="flex gap-3">
//              {["Datasheets", "CAD Step Files", "App Notes"].map((tag, i) => (
//                <span key={i} className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 text-xs font-black uppercase tracking-widest border border-slate-700 hover:bg-slate-700 cursor-pointer transition-colors">
//                  {tag}
//                </span>
//              ))}
//           </div>
//        </div>

//        <div className="w-full lg:w-1/2 relative z-10 flex flex-col gap-4">
//           {[
//             { title: "30kW High-Density DC-DC Reference Design", type: "PDF Manual", size: "4.2 MB" },
//             { title: "Thermal Dissipation Strategies for Embedded Racks", type: "App Note", size: "1.8 MB" },
//             { title: "400Hz Inverter 3D Step Package", type: "CAD Asset", size: "28.5 MB" }
//           ].map((doc, i) => (
//             <motion.div key={i} whileHover={{ scale: 1.02 }} className="bg-slate-800/80 backdrop-blur border border-slate-700 p-5 rounded-2xl flex items-center justify-between group cursor-pointer">
//                <div className="flex items-center gap-4">
//                  <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-colors">
//                    <FileText className="w-6 h-6" />
//                  </div>
//                  <div>
//                    <h5 className="font-bold text-white text-sm lg:text-base mb-1 line-clamp-1">{doc.title}</h5>
//                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{doc.type} • {doc.size}</span>
//                  </div>
//                </div>
//                <Download className="w-5 h-5 text-slate-500 group-hover:text-sky-400 transition-colors" />
//             </motion.div>
//           ))}
//        </div>
//     </div>
//   );
// };



// ==========================================
// 4. AUTONOMOUS TECHNICAL LIBRARY SEARCH (Light Theme Fix)
// Realistic search input, randomized backend logic
// ==========================================
const TechnicalResourceLibrary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [displayDocs, setDisplayDocs] = useState<any[]>([]);

  // Simulated Backend Database
  const allResources = [
    { title: "30kW High-Density DC-DC Reference Design", type: "PDF Manual", size: "4.2 MB" },
    { title: "Thermal Dissipation Strategies for Embedded Racks", type: "App Note", size: "1.8 MB" },
    { title: "400Hz Inverter 3D Step Package", type: "CAD Asset", size: "28.5 MB" },
    { title: "MIL-STD-810G Vibration Test Protocol", type: "Test Report", size: "6.1 MB" },
    { title: "DC-AC Inverter Wiring Schematic", type: "Schematic", size: "2.4 MB" },
    { title: "N+1 Redundancy Configuration Guide", type: "Integration Guide", size: "3.7 MB" }
  ];

  // Randomize 3 resources on component mount
  useEffect(() => {
    const shuffled = [...allResources].sort(() => 0.5 - Math.random());
    setDisplayDocs(shuffled.slice(0, 3));
  }, []);

  return (
    <div className="w-full bg-slate-50 border border-slate-200 rounded-[3rem] p-10 lg:p-16 mt-24 shadow-xl relative overflow-hidden flex flex-col lg:flex-row items-start gap-12">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.05)_0%,transparent_60%)] pointer-events-none" />
       
       {/* Left: Search & Filter Logic */}
       <div className="w-full lg:w-1/2 relative z-10">
          <span className="text-sky-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">Documentation Hub</span>
          <h2 className="font-display text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-tight mb-4">Technical Resource Matrix</h2>
          <p className="text-lg text-slate-600 font-medium mb-8">Search our live database for datasheets, thermal application notes, and integration manuals.</p>
          
          {/* Realistic Interactive Search Bar */}
          <div className="bg-white border-2 border-slate-200 hover:border-sky-300 transition-colors rounded-2xl p-2 flex items-center gap-3 shadow-sm mb-6 focus-within:ring-4 focus-within:ring-sky-500/20 focus-within:border-sky-400">
             <div className="bg-slate-100 p-3 rounded-xl">
               <Search className="w-5 h-5 text-slate-500" />
             </div>
             <input 
               type="text" 
               placeholder="Search 'DC-DC Specs'..." 
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               className="w-full bg-transparent border-none focus:outline-none text-slate-800 font-bold font-mono text-sm placeholder:text-slate-400"
             />
          </div>

          <div className="flex flex-wrap gap-3">
             {["Datasheets", "CAD Step Files", "App Notes"].map((tag, i) => (
               <span key={i} className="px-4 py-2 rounded-lg bg-white text-slate-600 text-xs font-black uppercase tracking-widest border border-slate-200 hover:bg-sky-50 hover:text-sky-700 hover:border-sky-200 cursor-pointer transition-colors shadow-sm">
                 {tag}
               </span>
             ))}
          </div>
       </div>

       {/* Right: Dynamic Document Display */}
       <div className="w-full lg:w-1/2 relative z-10 flex flex-col h-full">
          <div className="flex flex-col gap-4 flex-grow">
            {displayDocs.map((doc, i) => (
              <motion.div key={i} whileHover={{ scale: 1.02 }} className="bg-white border border-slate-200 p-5 rounded-2xl flex items-center justify-between group cursor-pointer shadow-sm hover:shadow-md hover:border-sky-300 transition-all">
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                     <FileText className="w-6 h-6" />
                   </div>
                   <div>
                     <h5 className="font-bold text-slate-900 text-sm lg:text-base mb-1 line-clamp-1">{doc.title}</h5>
                     <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{doc.type} • {doc.size}</span>
                   </div>
                 </div>
                 <Download className="w-5 h-5 text-slate-400 group-hover:text-sky-500 transition-colors" />
              </motion.div>
            ))}
          </div>

          {/* New "See All" Action Button */}
          <button className="mt-6 w-full bg-slate-900 hover:bg-slate-800 text-white font-black text-sm uppercase tracking-widest py-4 rounded-2xl shadow-lg transition-all hover:-translate-y-1 flex items-center justify-center gap-3">
             See All Downloadable Resources <ArrowRight className="w-4 h-4" />
          </button>
       </div>
    </div>
  );
};






// // ==========================================
// // 5. SERVICE APPOINTMENT SCHEDULER
// // High-end, autonomous booking interface
// // ==========================================
// const ServiceAppointmentBooking = () => {
//   const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setFormState("submitting");
//     setTimeout(() => {
//       setFormState("success");
//       setTimeout(() => setFormState("idle"), 5000);
//     }, 2500);
//   };

//   return (
//     <div className="w-full bg-white border border-slate-200 rounded-[3rem] p-10 lg:p-16 mt-24 shadow-2xl relative overflow-hidden grid lg:grid-cols-12 gap-12 items-center">
//        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.05)_0%,transparent_60%)] pointer-events-none" />

//        {/* Left: Info */}
//        <div className="lg:col-span-5 relative z-10">
//           <div className="w-16 h-16 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center justify-center mb-6">
//              <Calendar className="w-8 h-8 text-emerald-500" />
//           </div>
//           <h2 className="font-display text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-tight mb-4">Schedule Lab Service</h2>
//           <p className="text-lg text-slate-600 font-medium mb-8">Book an active window with our field engineering team for on-site recalibration or depot repairs.</p>
          
//           <div className="space-y-4">
//              <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
//                 <MapPin className="w-6 h-6 text-emerald-500 shrink-0" />
//                 <span className="font-bold text-slate-700 text-sm">Depot Drop-off Available at HQ</span>
//              </div>
//              <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
//                 <Clock className="w-6 h-6 text-sky-500 shrink-0" />
//                 <span className="font-bold text-slate-700 text-sm">Expedited 48h Turnaround for Tier 1 SLA</span>
//              </div>
//           </div>
//        </div>

//        {/* Right: Booking Form */}
//        <div className="lg:col-span-7 relative z-10">
//           <AnimatePresence mode="wait">
//              {formState === "idle" && (
//                 <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={handleSubmit} className="bg-slate-50 border border-slate-200 rounded-[2.5rem] p-8 shadow-inner space-y-5">
//                    <div className="grid md:grid-cols-2 gap-5">
//                       <div className="space-y-1.5">
//                         <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Hardware S/N</label>
//                         <input required type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 font-bold focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/10 transition-all" placeholder="e.g. DCDC-2026-X9" />
//                       </div>
//                       <div className="space-y-1.5">
//                         <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Service Type</label>
//                         <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 font-bold focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/10 transition-all appearance-none">
//                            <option>Annual Recalibration</option>
//                            <option>Hardware Repair</option>
//                            <option>Firmware Upgrade</option>
//                            <option>On-Site Integration</option>
//                         </select>
//                       </div>
//                    </div>
//                    <div className="space-y-1.5">
//                       <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Requested Service Date</label>
//                       <input required type="date" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 font-bold focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/10 transition-all" />
//                    </div>
//                    <div className="space-y-1.5">
//                       <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Fault / Diagnostic Notes</label>
//                       <textarea required rows={3} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 font-bold focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/10 transition-all resize-none" placeholder="Briefly describe the operational anomaly..."></textarea>
//                    </div>
//                    <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-black uppercase tracking-widest py-4 rounded-xl shadow-lg transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
//                       Secure Appointment <Send className="w-4 h-4" />
//                    </button>
//                 </motion.form>
//              )}

//              {formState === "submitting" && (
//                <motion.div key="submitting" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-slate-50 border border-slate-200 rounded-[2.5rem] p-16 flex flex-col items-center justify-center text-center">
//                   <Activity className="w-12 h-12 text-emerald-500 animate-pulse mb-4" />
//                   <h3 className="font-display text-2xl font-black text-slate-900 uppercase">Syncing Calendar</h3>
//                   <p className="text-sm font-bold text-slate-500">Checking lab availability...</p>
//                </motion.div>
//              )}

//              {formState === "success" && (
//                <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-emerald-50 border border-emerald-200 rounded-[2.5rem] p-16 flex flex-col items-center justify-center text-center">
//                   <CheckCircle2 className="w-16 h-16 text-emerald-500 mb-4" />
//                   <h3 className="font-display text-3xl font-black text-emerald-900 uppercase tracking-tight mb-2">Slot Reserved</h3>
//                   <p className="text-emerald-700 font-bold">Your hardware has been logged. An engineer will confirm the time within 1 hour.</p>
//                </motion.div>
//              )}
//           </AnimatePresence>
//        </div>
//     </div>
//   );
// };



// ==========================================
// FIX: MOVE INPUT WRAPPER OUTSIDE 
// Defining this outside the main component permanently fixes the focus-loss bug.
// ==========================================
const ServiceInputWrapper = ({ children, isFocused }: { children: React.ReactNode, isFocused: boolean }) => (
  <div className="relative group z-10">
     <div className={`absolute -inset-0.5 rounded-xl bg-gradient-to-r from-emerald-400 to-sky-500 blur-[2px] transition-opacity duration-300 pointer-events-none ${isFocused ? 'opacity-40' : 'opacity-0'}`} />
     <div className="relative bg-white rounded-xl z-20">
       {children}
     </div>
  </div>
);

// // ==========================================
// // 5. SERVICE APPOINTMENT SCHEDULER (Fixed Focus & Modal)
// // ==========================================
// const ServiceAppointmentBooking = () => {
//   const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");
//   const [focusedField, setFocusedField] = useState<string | null>(null);

//   // Controlled component state for seamless typing
//   const [formData, setFormData] = useState({
//     contactName: "",
//     email: "",
//     serialNumber: "",
//     location: "",
//     priority: "Standard",
//     serviceType: "Annual Recalibration",
//     notes: ""
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setFormState("submitting");
    
//     // Simulate Encryption/Transmission
//     setTimeout(() => {
//       setFormState("success");
      
//       // Autonomous Modal Close and Form Reset after 6 seconds
//       setTimeout(() => {
//          setFormState("idle");
//          setFormData({ contactName: "", email: "", serialNumber: "", location: "", priority: "Standard", serviceType: "Annual Recalibration", notes: "" });
//       }, 6000);
//     }, 3000);
//   };

//   return (
//     <>
//       <div className="w-full bg-white border border-slate-200 rounded-[3rem] p-10 lg:p-16 mt-24 shadow-2xl relative overflow-hidden grid lg:grid-cols-12 gap-12 items-start">
//          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.05)_0%,transparent_60%)] pointer-events-none" />

//          {/* Left Side: Context & Service Points */}
//          <div className="lg:col-span-5 relative z-10 lg:sticky lg:top-24">
//             <div className="w-16 h-16 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center justify-center mb-6">
//                <Calendar className="w-8 h-8 text-emerald-500" />
//             </div>
//             <h2 className="font-display text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-tight mb-4 leading-tight">Schedule <br/>Lab Service</h2>
//             <p className="text-lg text-slate-600 font-medium mb-10">Secure a priority window with our specialized power scientists for high-density platform recalibration.</p>
            
//             <div className="space-y-4">
//                {[
//                  { icon: MapPin, text: "Global Depot & On-Site Engineering", color: "text-emerald-500" },
//                  { icon: Clock, text: "Tier 1 SLA: 48h Rapid Turnaround", color: "text-sky-500" },
//                  { icon: ShieldCheck, text: "NIST Traceable Recalibration", color: "text-amber-500" }
//                ].map((item, i) => (
//                  <div key={i} className="flex items-center gap-4 bg-slate-50 p-5 rounded-2xl border border-slate-100 shadow-sm">
//                     <item.icon className={`w-6 h-6 ${item.color} shrink-0`} />
//                     <span className="font-bold text-slate-700 text-sm">{item.text}</span>
//                  </div>
//                ))}
//             </div>
//          </div>

//          {/* Right Side: High-End Service Form */}
//          <div className="lg:col-span-7 relative z-10">
//             <form onSubmit={handleSubmit} className="bg-slate-50 border border-slate-200 rounded-[2.5rem] p-8 lg:p-10 shadow-inner space-y-5">
               
//                <div className="grid md:grid-cols-2 gap-5">
//                   <div className="space-y-1.5">
//                     <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Contact Person</label>
//                     <ServiceInputWrapper isFocused={focusedField === "contactName"}>
//                       <input name="contactName" value={formData.contactName} onChange={handleChange} onFocus={() => setFocusedField("contactName")} onBlur={() => setFocusedField(null)} required type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 font-bold focus:outline-none transition-all relative z-20" placeholder="Enter Full Name" />
//                     </ServiceInputWrapper>
//                   </div>
//                   <div className="space-y-1.5">
//                     <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Corporate Email</label>
//                     <ServiceInputWrapper isFocused={focusedField === "email"}>
//                       <input name="email" value={formData.email} onChange={handleChange} onFocus={() => setFocusedField("email")} onBlur={() => setFocusedField(null)} required type="email" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 font-bold focus:outline-none transition-all relative z-20" placeholder="name@organization.com" />
//                     </ServiceInputWrapper>
//                   </div>
//                </div>

//                <div className="grid md:grid-cols-2 gap-5">
//                   <div className="space-y-1.5">
//                     <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Hardware S/N</label>
//                     <ServiceInputWrapper isFocused={focusedField === "serialNumber"}>
//                       <input name="serialNumber" value={formData.serialNumber} onChange={handleChange} onFocus={() => setFocusedField("serialNumber")} onBlur={() => setFocusedField(null)} required type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 font-bold focus:outline-none transition-all relative z-20" placeholder="e.g. CRYO-DCDC-091" />
//                     </ServiceInputWrapper>
//                   </div>
//                   <div className="space-y-1.5">
//                     <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Deployment Location</label>
//                     <ServiceInputWrapper isFocused={focusedField === "location"}>
//                       <input name="location" value={formData.location} onChange={handleChange} onFocus={() => setFocusedField("location")} onBlur={() => setFocusedField(null)} required type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 font-bold focus:outline-none transition-all relative z-20" placeholder="City, Country" />
//                     </ServiceInputWrapper>
//                   </div>
//                </div>

//                <div className="grid md:grid-cols-3 gap-5">
//                   <div className="space-y-1.5 md:col-span-1">
//                     <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Urgency Level</label>
//                     <ServiceInputWrapper isFocused={focusedField === "priority"}>
//                       <select name="priority" value={formData.priority} onChange={handleChange} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 font-bold focus:outline-none appearance-none relative z-20">
//                          <option>Standard</option>
//                          <option>Expedited (Tier 2)</option>
//                          <option>Mission Critical (Tier 1)</option>
//                          <option>AOG Emergency</option>
//                       </select>
//                     </ServiceInputWrapper>
//                   </div>
//                   <div className="space-y-1.5 md:col-span-2">
//                     <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Service Requirement</label>
//                     <ServiceInputWrapper isFocused={focusedField === "serviceType"}>
//                       <select name="serviceType" value={formData.serviceType} onChange={handleChange} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 font-bold focus:outline-none appearance-none relative z-20">
//                          <option>Annual Recalibration</option>
//                          <option>Hardware Failure Repair</option>
//                          <option>Custom Modification</option>
//                          <option>MIL-STD Compliance Audit</option>
//                       </select>
//                     </ServiceInputWrapper>
//                   </div>
//                </div>

//                <div className="space-y-1.5">
//                   <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Diagnostic Notes</label>
//                   <ServiceInputWrapper isFocused={focusedField === "notes"}>
//                     <textarea name="notes" value={formData.notes} onChange={handleChange} onFocus={() => setFocusedField("notes")} onBlur={() => setFocusedField(null)} rows={3} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 font-bold focus:outline-none resize-none relative z-20" placeholder="Describe environmental conditions or anomaly observations..."></textarea>
//                   </ServiceInputWrapper>
//                </div>

//                <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-black uppercase tracking-widest py-5 rounded-2xl shadow-lg transition-all hover:-translate-y-1 flex items-center justify-center gap-3 relative overflow-hidden group">
//                   <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="absolute top-0 bottom-0 w-1/4 bg-white/20 blur-md skew-x-12" />
//                   Initiate Secure Booking <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//                </button>
//             </form>

//             {/* SUBMITTING OVERLAY */}
//             <AnimatePresence>
//                {formState === "submitting" && (
//                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 z-30 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center rounded-[2.5rem] p-10 text-center">
//                     <div className="relative w-24 h-24 mb-6">
//                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-4 border-dashed border-emerald-400 rounded-full" />
//                        <Activity className="w-10 h-10 text-emerald-500 absolute inset-0 m-auto animate-pulse" />
//                     </div>
//                     <h3 className="font-display text-2xl font-black text-slate-900 uppercase tracking-widest">Syncing with Lab Core</h3>
//                     <p className="text-slate-500 font-bold mt-2">Checking engineer availability & serial validation...</p>
//                  </motion.div>
//                )}
//             </AnimatePresence>
//          </div>
//       </div>

//       {/* FULL-SCREEN AUTONOMOUS SUCCESS MODAL */}
//       <AnimatePresence>
//          {formState === "success" && (
//             <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
//                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-slate-900/40 backdrop-blur-md" />
               
//                <motion.div initial={{ scale: 0.9, y: 30, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.9, y: 20, opacity: 0 }} transition={{ type: "spring", damping: 25, stiffness: 300 }} className="bg-white rounded-[3rem] p-12 md:p-16 max-w-3xl w-full text-center shadow-2xl relative overflow-hidden border border-slate-200 z-10">
//                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.1)_0%,transparent_70%)] pointer-events-none" />
                  
//                   <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }} className="w-28 h-28 bg-emerald-50 border-4 border-emerald-400 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(52,211,153,0.4)]">
//                      <CheckCircle2 className="w-14 h-14 text-emerald-500" />
//                   </motion.div>

//                   <h3 className="font-display text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tight mb-6">THANK YOU FOR BOOKING AN APPOINTMENT</h3>
                  
//                   <div className="space-y-4 mb-10">
//                      <p className="text-xl text-slate-600 font-bold leading-relaxed">
//                        Our engineering team has received your parameters and will reach out to you shortly.
//                      </p>
//                      <p className="text-base text-emerald-700 font-black uppercase tracking-widest py-2 bg-emerald-50 rounded-xl inline-block px-6">
//                        Further Information Shared Via Email
//                      </p>
//                   </div>
                  
//                   {/* Closing Progress Visual */}
//                   <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden relative">
//                      <motion.div initial={{ width: "100%" }} animate={{ width: "0%" }} transition={{ duration: 6, ease: "linear" }} className="h-full bg-emerald-500" />
//                   </div>
//                   <p className="mt-4 text-[10px] font-black text-slate-400 uppercase tracking-widest animate-pulse">Session Handshake Completing...</p>
//                </motion.div>
//             </div>
//          )}
//       </AnimatePresence>
//     </>
//   );
// };

// ==========================================
// 5. SERVICE APPOINTMENT SCHEDULER (Fixed Success Modal)
// ==========================================
const ServiceAppointmentBooking = () => {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    contactName: "",
    email: "",
    serialNumber: "",
    location: "",
    priority: "Standard",
    serviceType: "Annual Recalibration",
    notes: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    
    // Simulate Encryption/Transmission
    setTimeout(() => {
      setFormState("success");
      
      // Autonomous Modal Close and Form Reset after 6 seconds
      setTimeout(() => {
         setFormState("idle");
         setFormData({ contactName: "", email: "", serialNumber: "", location: "", priority: "Standard", serviceType: "Annual Recalibration", notes: "" });
      }, 6000);
    }, 3000);
  };

  return (
    <div className="w-full bg-white border border-slate-200 rounded-[3rem] p-10 lg:p-16 mt-24 shadow-2xl relative overflow-hidden grid lg:grid-cols-12 gap-12 items-start">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.05)_0%,transparent_60%)] pointer-events-none" />

       {/* Left Side: Context & Service Points */}
       <div className="lg:col-span-5 relative z-10 lg:sticky lg:top-24">
          <div className="w-16 h-16 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center justify-center mb-6">
             <Calendar className="w-8 h-8 text-emerald-500" />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-tight mb-4 leading-tight">Schedule <br/>Lab Service</h2>
          <p className="text-lg text-slate-600 font-medium mb-10">Secure a priority window with our specialized power scientists for high-density platform recalibration.</p>
          
          <div className="space-y-4">
             {[
               { icon: MapPin, text: "Global Depot & On-Site Engineering", color: "text-emerald-500" },
               { icon: Clock, text: "Tier 1 SLA: 48h Rapid Turnaround", color: "text-sky-500" },
               { icon: ShieldCheck, text: "NIST Traceable Recalibration", color: "text-amber-500" }
             ].map((item, i) => (
               <div key={i} className="flex items-center gap-4 bg-slate-50 p-5 rounded-2xl border border-slate-100 shadow-sm">
                  <item.icon className={`w-6 h-6 ${item.color} shrink-0`} />
                  <span className="font-bold text-slate-700 text-sm">{item.text}</span>
               </div>
             ))}
          </div>
       </div>

       {/* Right Side: High-End Service Form & Overlays */}
       <div className="lg:col-span-7 relative z-10">
          <form onSubmit={handleSubmit} className="bg-slate-50 border border-slate-200 rounded-[2.5rem] p-8 lg:p-10 shadow-inner space-y-5">
             
             <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Contact Person</label>
                  <ServiceInputWrapper isFocused={focusedField === "contactName"}>
                    <input name="contactName" value={formData.contactName} onChange={handleChange} onFocus={() => setFocusedField("contactName")} onBlur={() => setFocusedField(null)} required type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 font-bold focus:outline-none transition-all relative z-20" placeholder="Enter Full Name" />
                  </ServiceInputWrapper>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Corporate Email</label>
                  <ServiceInputWrapper isFocused={focusedField === "email"}>
                    <input name="email" value={formData.email} onChange={handleChange} onFocus={() => setFocusedField("email")} onBlur={() => setFocusedField(null)} required type="email" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 font-bold focus:outline-none transition-all relative z-20" placeholder="name@organization.com" />
                  </ServiceInputWrapper>
                </div>
             </div>

             <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Hardware S/N</label>
                  <ServiceInputWrapper isFocused={focusedField === "serialNumber"}>
                    <input name="serialNumber" value={formData.serialNumber} onChange={handleChange} onFocus={() => setFocusedField("serialNumber")} onBlur={() => setFocusedField(null)} required type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 font-bold focus:outline-none transition-all relative z-20" placeholder="e.g. CRYO-DCDC-091" />
                  </ServiceInputWrapper>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Deployment Location</label>
                  <ServiceInputWrapper isFocused={focusedField === "location"}>
                    <input name="location" value={formData.location} onChange={handleChange} onFocus={() => setFocusedField("location")} onBlur={() => setFocusedField(null)} required type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 font-bold focus:outline-none transition-all relative z-20" placeholder="City, Country" />
                  </ServiceInputWrapper>
                </div>
             </div>

             <div className="grid md:grid-cols-3 gap-5">
                <div className="space-y-1.5 md:col-span-1">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Urgency Level</label>
                  <ServiceInputWrapper isFocused={focusedField === "priority"}>
                    <select name="priority" value={formData.priority} onChange={handleChange} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 font-bold focus:outline-none appearance-none relative z-20">
                       <option>Standard</option>
                       <option>Expedited (Tier 2)</option>
                       <option>Mission Critical (Tier 1)</option>
                       <option>AOG Emergency</option>
                    </select>
                  </ServiceInputWrapper>
                </div>
                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Service Requirement</label>
                  <ServiceInputWrapper isFocused={focusedField === "serviceType"}>
                    <select name="serviceType" value={formData.serviceType} onChange={handleChange} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 font-bold focus:outline-none appearance-none relative z-20">
                       <option>Annual Recalibration</option>
                       <option>Hardware Failure Repair</option>
                       <option>Custom Modification</option>
                       <option>MIL-STD Compliance Audit</option>
                    </select>
                  </ServiceInputWrapper>
                </div>
             </div>

             <div className="space-y-1.5">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Diagnostic Notes</label>
                <ServiceInputWrapper isFocused={focusedField === "notes"}>
                  <textarea name="notes" value={formData.notes} onChange={handleChange} onFocus={() => setFocusedField("notes")} onBlur={() => setFocusedField(null)} rows={3} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 font-bold focus:outline-none resize-none relative z-20" placeholder="Describe environmental conditions or anomaly observations..."></textarea>
                </ServiceInputWrapper>
             </div>

             <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-black uppercase tracking-widest py-5 rounded-2xl shadow-lg transition-all hover:-translate-y-1 flex items-center justify-center gap-3 relative overflow-hidden group">
                <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="absolute top-0 bottom-0 w-1/4 bg-white/20 blur-md skew-x-12" />
                Initiate Secure Booking <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
             </button>
          </form>

          {/* DYNAMIC OVERLAYS (Perfectly contained within the right column) */}
          <AnimatePresence>
             {/* 1. Submitting Loading State */}
             {formState === "submitting" && (
               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 z-30 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center rounded-[2.5rem] p-10 text-center border border-slate-200 shadow-xl">
                  <div className="relative w-24 h-24 mb-6">
                     <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-4 border-dashed border-emerald-400 rounded-full" />
                     <Activity className="w-10 h-10 text-emerald-500 absolute inset-0 m-auto animate-pulse" />
                  </div>
                  <h3 className="font-display text-2xl font-black text-slate-900 uppercase tracking-widest">Syncing with Lab Core</h3>
                  <p className="text-slate-500 font-bold mt-2">Checking engineer availability & serial validation...</p>
               </motion.div>
             )}

             {/* 2. Success Modal State (FIXED: Now contained cleanly inside the form area) */}
             {formState === "success" && (
               <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="absolute inset-0 z-40 bg-white rounded-[2.5rem] p-8 md:p-12 flex flex-col items-center justify-center text-center shadow-2xl border border-emerald-200 overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.05)_0%,transparent_70%)] pointer-events-none" />
                  
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }} className="w-24 h-24 bg-emerald-50 border-4 border-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(52,211,153,0.3)]">
                     <CheckCircle2 className="w-12 h-12 text-emerald-500" />
                  </motion.div>

                  <h3 className="font-display text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight mb-4">THANK YOU FOR BOOKING AN APPOINTMENT</h3>
                  
                  <p className="text-slate-600 font-bold leading-relaxed mb-6">
                     Our engineering team has received your parameters and will reach out to you shortly.
                  </p>
                  <p className="text-xs text-emerald-700 font-black uppercase tracking-widest py-2 bg-emerald-50 rounded-xl inline-block px-6 mb-8 border border-emerald-100">
                     Further Information Shared Via Email
                  </p>
                  
                  {/* Closing Progress Visual */}
                  <div className="w-full max-w-sm h-1.5 bg-slate-100 rounded-full overflow-hidden relative">
                     <motion.div initial={{ width: "100%" }} animate={{ width: "0%" }} transition={{ duration: 6, ease: "linear" }} className="h-full bg-emerald-500" />
                  </div>
                  <p className="mt-4 text-[10px] font-black text-slate-400 uppercase tracking-widest animate-pulse">Session Handshake Completing...</p>
               </motion.div>
             )}
          </AnimatePresence>
       </div>
    </div>
  );
};

// ==========================================
// MAIN SUPPORT PAGE COMPONENT
// ==========================================
const ServiceSupportPage = () => {
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [100, 200], [0, 1]);

  return (
    <PageTransition>
      <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-sky-200 selection:text-sky-900">
        <Navbar />

        {/* STICKY HEADER WITH EXACT BREADCRUMB */}
        <div className="sticky z-30 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm" style={{ top: '64px' }}>
          <div className="container py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
               <Link to="/" className="group flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-sky-50 rounded-lg transition-colors border border-slate-200 hover:border-sky-200">
                 <ChevronLeft className="w-4 h-4 text-slate-500 group-hover:text-sky-600 transition-colors" />
                 <span className="text-xs font-black text-slate-600 group-hover:text-sky-700 uppercase tracking-widest transition-colors">HOME PAGE</span>
               </Link>
               <span className="text-slate-300 font-bold">/</span>
               <span className="text-sky-600 font-black text-xs uppercase tracking-widest">SUPPORT ARCHITECTURE</span>
            </div>
            <motion.div style={{ opacity: headerOpacity }} className="flex items-center gap-4 pointer-events-none">
              <span className="hidden lg:block font-display font-bold text-slate-900 uppercase tracking-widest">Support Portal</span>
            </motion.div>
          </div>
        </div>

        <main className="relative pb-24">
          
          {/* HERO SECTION */}
          <section className="relative pt-16 pb-24 overflow-hidden bg-white border-b border-slate-200 shadow-sm">
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:40px_40px] z-0" />
             <motion.div animate={{ backgroundPosition: ["0px 0px", "100px 100px"] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)] z-0" />
             
             <div className="container relative z-10 text-center flex flex-col items-center">
                
                {/* Brand Logo */}
                {/* <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col items-center mb-10">
                   <div className="flex flex-col items-start mb-2">
                      <div className="flex gap-1.5 mb-1 ml-1">
                        <span className="w-3.5 h-3.5 bg-emerald-500 rounded-full animate-pulse" />
                        <span className="w-3.5 h-3.5 bg-emerald-500 rounded-full animate-pulse delay-75" />
                        <span className="w-3.5 h-3.5 bg-emerald-500 rounded-full animate-pulse delay-150" />
                      </div>
                      <div className="font-display text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-none">
                        CRYONANO
                      </div>
                   </div>
                   <div className="text-sm font-extrabold text-emerald-600 tracking-[0.2em] uppercase bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-100">
                     Global Support Architecture
                   </div>
                </motion.div> */}

                <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col items-center mb-10">
                   <div className="flex flex-col items-start mb-2">
                      <div className="flex gap-1.5 mb-1 ml-1">
                        <span className="w-3.5 h-3.5 bg-rose-500 rounded-full" />
                        <span className="w-3.5 h-3.5 bg-rose-500 rounded-full" />
                        <span className="w-3.5 h-3.5 bg-rose-500 rounded-full" />
                      </div>
                      <div className="font-display text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-none">
                        CRYONANO
                      </div>
                   </div>
                   <div className="text-sm font-extrabold text-emerald-600 tracking-[0.2em] uppercase bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-100 mt-2">
                     Global Support Architecture
                   </div>
                </motion.div>

                <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="font-display text-4xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight uppercase max-w-4xl leading-[1.1]">
                  Mission-Critical <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-sky-600">Lifecycle Sustainment</span>
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
                  Comprehensive engineering support, RMA diagnostics, and technical documentation to ensure zero-downtime operation.
                </motion.p>
             </div>
          </section>

          {/* MAIN CONTENT CONTAINERS */}
          <section className="container">
             {/* 1. Core Pillars Grid */}
             <SupportPillars />

             {/* 2. RMA Tracker */}
             <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }}>
                <AutonomousRMATracker />
             </motion.div>

             {/* 3. SLA Matrix */}
             <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }}>
                <SLATiers />
             </motion.div>

             {/* 4. Tech Resource Library */}
             {/* <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }}>
                <TechnicalResourceLibrary />
             </motion.div>
          </section> */}



          {/* 4. Tech Resource Library (UPDATED) */}
             <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }}>
                <TechnicalResourceLibrary />
             </motion.div>


             {/* 5. NEW: Service Appointment Booking */}
             <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }}>
                <ServiceAppointmentBooking />
             </motion.div>
          </section>

          {/* ESCALATION BANNER */}
          <section className="container pt-24 pb-10">
             <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="w-full bg-emerald-50 border-2 border-emerald-100 rounded-[3rem] p-12 text-center flex flex-col items-center relative overflow-hidden shadow-inner">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-200/50 rounded-full blur-[80px] pointer-events-none" />
                <Server className="w-16 h-16 text-emerald-500 mb-6 relative z-10" />
                <h2 className="font-display text-3xl lg:text-4xl font-black text-emerald-950 uppercase tracking-tight mb-4 relative z-10">Require Immediate Escalation?</h2>
                <p className="text-lg text-emerald-800 font-bold mb-8 relative z-10">Tier-1 SLA holders have access to the 24/7 AOG (Aircraft On Ground) emergency engineering line.</p>
                <Link to="/contact" className="bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm uppercase tracking-widest px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 relative z-10 flex items-center gap-2">
                   Access Secure Portal <ArrowRight className="w-4 h-4" />
                </Link>
             </motion.div>
          </section>

        </main>
        
        <ScrollToTop />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default ServiceSupportPage;