// import { useState, useEffect } from "react";
// import { Navbar } from "@/components/Navbar";
// import { Footer } from "@/components/Footer";
// import { PageTransition } from "@/components/PageTransition";
// import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
// import { 
//   Phone, Mail, MapPin, Send, Clock, ShieldCheck, Globe2, 
//   ArrowUp, Activity, Terminal, CheckCircle2, ChevronLeft, Lock
// } from "lucide-react";
// import { Link } from "react-router-dom";

// // ==========================================
// // SCROLL TO TOP 
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
//           className="fixed bottom-8 right-8 z-50 p-4 bg-sky-500 text-white rounded-full shadow-lg hover:bg-sky-600 hover:-translate-y-1 transition-all"
//         >
//           <ArrowUp className="w-6 h-6" />
//         </motion.button>
//       )}
//     </AnimatePresence>
//   );
// };

// // ==========================================
// // 1. TOP BRAND HERO (THINK SCIENCE)
// // ==========================================
// const BrandHeroHeader = () => {
//   const highlights = [
//     "Mission-Critical Power Systems",
//     "Aerospace & Defense Engineering",
//     "MIL-STD Validated Architectures",
//     "Global Distributed Power Networks"
//   ];
//   const [activeHighlight, setActiveHighlight] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => setActiveHighlight((prev) => (prev + 1) % highlights.length), 3000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="flex flex-col items-center text-center relative z-20 mb-10">
//        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex flex-col items-center">
//           {/* Custom CRYONANO 3-dot logo */}
//           <div className="font-display text-5xl lg:text-6xl font-black text-slate-900 tracking-tight flex items-center gap-3 mb-2">
//             CRYONANO 
//             <div className="flex gap-1.5 mt-2">
//               <span className="w-3 h-3 bg-sky-500 rounded-full animate-pulse" />
//               <span className="w-3 h-3 bg-sky-500 rounded-full animate-pulse delay-75" />
//               <span className="w-3 h-3 bg-sky-500 rounded-full animate-pulse delay-150" />
//             </div>
//           </div>
//           <div className="text-xl lg:text-2xl font-black text-sky-600 tracking-[0.3em] uppercase mb-6">
//             Think Science
//           </div>
//        </motion.div>

//        {/* Autonomous Highlights Typewriter */}
//        <div className="h-8 relative flex items-center justify-center overflow-hidden">
//          <AnimatePresence mode="wait">
//             <motion.div 
//               key={activeHighlight} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}
//               className="text-sm md:text-base font-bold text-slate-500 uppercase tracking-widest px-6 py-2 bg-slate-50 border border-slate-200 rounded-full shadow-sm"
//             >
//                {highlights[activeHighlight]}
//             </motion.div>
//          </AnimatePresence>
//        </div>
//     </div>
//   );
// };

// // ==========================================
// // 2. ACTIVE COMM CHANNELS (Interactive & Clickable)
// // ==========================================
// const ActiveCommChannels = () => {
//   const channels = [
//     { title: "Technical Sales", desc: "For bulk orders & pricing.", icon: Phone, color: "sky", value: "+91 97481 81485", link: "tel:+919748181485" },
//     { title: "Lab Engineering", desc: "Architecture & MIL-STD support.", icon: Terminal, color: "emerald", value: "contact@cryonano.com", link: "mailto:contact@cryonano.com" },
//     { title: "Global Support", desc: "RMA & troubleshooting.", icon: Globe2, color: "amber", value: "support@cryonano.com", link: "mailto:support@cryonano.com" }
//   ];

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto mt-16 relative z-10">
//       {channels.map((ch, i) => (
//         <motion.a 
//           key={i} href={ch.link} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }}
//           className={`block bg-white rounded-[2.5rem] p-8 border-2 border-slate-100 shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-${ch.color}-300 transition-all duration-300 relative overflow-hidden group`}
//         >
//            {/* Autonomous hover background flow */}
//            <div className={`absolute -right-20 -top-20 w-48 h-48 bg-${ch.color}-100 rounded-full blur-[40px] opacity-40 group-hover:scale-150 transition-transform duration-700 pointer-events-none`} />
           
//            <div className="flex justify-between items-start mb-6 relative z-10">
//               <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border shadow-sm transition-all duration-500 ${`bg-${ch.color}-50 border-${ch.color}-100 text-${ch.color}-500 group-hover:bg-${ch.color}-500 group-hover:text-white group-hover:scale-110`}`}>
//                  <ch.icon className="w-8 h-8" />
//               </div>
//               <div className={`flex items-center gap-1.5 bg-${ch.color}-50 border border-${ch.color}-200 px-3 py-1.5 rounded-full shadow-sm`}>
//                  <div className={`w-2 h-2 rounded-full bg-${ch.color}-500 animate-pulse`} />
//                  <span className={`text-[10px] font-black text-${ch.color}-700 uppercase tracking-widest`}>Live</span>
//               </div>
//            </div>

//            <h4 className="text-2xl font-black text-slate-900 mb-2 relative z-10">{ch.title}</h4>
//            <p className="text-sm font-bold text-slate-500 mb-8 relative z-10">{ch.desc}</p>
           
//            {/* Animated decoding text block */}
//            <div className={`w-full p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between group-hover:bg-${ch.color}-50 group-hover:border-${ch.color}-200 transition-colors relative z-10 overflow-hidden`}>
//               {/* Laser scan effect on hover */}
//               <div className={`absolute left-0 top-0 bottom-0 w-1 bg-${ch.color}-400 opacity-0 group-hover:opacity-100 transition-opacity`} />
//               <span className={`font-mono font-black text-lg text-slate-800 group-hover:text-${ch.color}-800 transition-colors pl-2`}>{ch.value}</span>
//            </div>
//         </motion.a>
//       ))}
//     </div>
//   );
// };

// // ==========================================
// // 3. SMART INTERACTIVE FORM (Added Data Fields & Autonomy)
// // ==========================================
// const SmartContactForm = () => {
//   const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");
//   const [focusedField, setFocusedField] = useState<string | null>(null);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setFormState("submitting");
//     setTimeout(() => {
//       setFormState("success");
//       setTimeout(() => setFormState("idle"), 5000);
//     }, 2500);
//   };

//   const InputWrapper = ({ children, name }: { children: React.ReactNode, name: string }) => (
//     <div className="relative group">
//        {/* Autonomous tracing border effect */}
//        <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-sky-400 to-indigo-500 opacity-0 blur-[2px] transition-opacity duration-300 ${focusedField === name ? 'opacity-40' : ''}`} />
//        <div className="relative bg-white rounded-2xl">
//          {children}
//        </div>
//     </div>
//   );

//   return (
//     <div className="w-full bg-white rounded-[3rem] border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-8 lg:p-12 relative overflow-hidden">
//        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(14,165,233,0.05)_0%,transparent_60%)] pointer-events-none" />

//        <div className="text-center mb-10 relative z-10 flex flex-col items-center">
//          <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 shadow-md">
//             <Lock className="w-3 h-3 text-sky-400" /> End-to-End Encrypted
//          </div>
//          <h3 className="font-display text-4xl font-black text-slate-900 uppercase tracking-tight">Secure Message Portal</h3>
//          <p className="text-slate-500 font-bold mt-3 max-w-md">Transmit your parameters directly to our engineering matrix.</p>
//        </div>

//        <AnimatePresence mode="wait">
//           {formState === "idle" && (
//              <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 0.95 }} onSubmit={handleSubmit} className="space-y-6 relative z-10">
                
//                 <div className="grid md:grid-cols-2 gap-6">
//                    <div className="space-y-2">
//                      <label className="text-xs font-black text-slate-500 uppercase tracking-widest pl-2">Full Name</label>
//                      <InputWrapper name="name">
//                        <input onFocus={() => setFocusedField("name")} onBlur={() => setFocusedField(null)} required type="text" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 text-slate-800 font-bold focus:outline-none focus:bg-white transition-all relative z-10" placeholder="John Doe" />
//                      </InputWrapper>
//                    </div>
//                    <div className="space-y-2">
//                      <label className="text-xs font-black text-slate-500 uppercase tracking-widest pl-2">Corporate Email</label>
//                      <InputWrapper name="email">
//                        <input onFocus={() => setFocusedField("email")} onBlur={() => setFocusedField(null)} required type="email" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 text-slate-800 font-bold focus:outline-none focus:bg-white transition-all relative z-10" placeholder="john@company.com" />
//                      </InputWrapper>
//                    </div>
//                 </div>

//                 <div className="grid md:grid-cols-2 gap-6">
//                    <div className="space-y-2">
//                      <label className="text-xs font-black text-slate-500 uppercase tracking-widest pl-2">Organization</label>
//                      <InputWrapper name="org">
//                        <input onFocus={() => setFocusedField("org")} onBlur={() => setFocusedField(null)} type="text" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 text-slate-800 font-bold focus:outline-none focus:bg-white transition-all relative z-10" placeholder="Aerospace Dynamics Inc." />
//                      </InputWrapper>
//                    </div>
//                    <div className="space-y-2">
//                      <label className="text-xs font-black text-slate-500 uppercase tracking-widest pl-2">Direct Phone Number</label>
//                      <InputWrapper name="phone">
//                        <input onFocus={() => setFocusedField("phone")} onBlur={() => setFocusedField(null)} required type="tel" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 text-slate-800 font-bold focus:outline-none focus:bg-white transition-all relative z-10" placeholder="+1 (555) 000-0000" />
//                      </InputWrapper>
//                    </div>
//                 </div>

//                 <div className="space-y-2">
//                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest pl-2">Transmission Details</label>
//                    <InputWrapper name="details">
//                      <textarea onFocus={() => setFocusedField("details")} onBlur={() => setFocusedField(null)} required rows={5} className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 text-slate-800 font-bold focus:outline-none focus:bg-white transition-all resize-none relative z-10" placeholder="Provide details regarding power requirements, input/output constraints, and operational environments..."></textarea>
//                    </InputWrapper>
//                 </div>

//                 <button type="submit" className="w-full bg-sky-500 hover:bg-sky-600 text-white font-black text-lg uppercase tracking-widest py-5 rounded-2xl shadow-[0_10px_20px_rgba(14,165,233,0.3)] hover:shadow-[0_15px_30px_rgba(14,165,233,0.4)] transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3 relative overflow-hidden group">
//                    <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="absolute top-0 bottom-0 w-1/4 bg-white/20 blur-md skew-x-12" />
//                    Initiate Transmission <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//                 </button>
//              </motion.form>
//           )}

//           {formState === "submitting" && (
//              <motion.div key="submitting" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center justify-center py-24 relative z-10">
//                 <div className="relative w-32 h-32 mb-8 flex items-center justify-center">
//                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-4 border-dashed border-sky-400 rounded-full opacity-60" />
//                    <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 1.5, repeat: Infinity }} className="absolute inset-4 bg-sky-200 rounded-full" />
//                    <Activity className="w-12 h-12 text-sky-600 relative z-10 animate-pulse" />
//                 </div>
//                 <h3 className="font-display text-2xl font-black text-slate-900 uppercase mb-2 tracking-widest">Encrypting Package</h3>
//                 <p className="text-slate-500 font-bold">Establishing secure relay to engineering servers...</p>
//              </motion.div>
//           )}

//           {formState === "success" && (
//              <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-24 relative z-10">
//                 <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0.5 }} className="w-32 h-32 bg-emerald-50 border-4 border-emerald-400 rounded-full flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(52,211,153,0.4)]">
//                    <CheckCircle2 className="w-16 h-16 text-emerald-500" />
//                 </motion.div>
//                 <h3 className="font-display text-3xl font-black text-slate-900 uppercase tracking-tight mb-4">Transmission Successful</h3>
//                 <p className="text-slate-600 font-bold text-center max-w-md leading-relaxed border-t border-slate-200 pt-4">Your specifications are logged in our database. A power scientist will analyze your parameters and respond shortly.</p>
//              </motion.div>
//           )}
//        </AnimatePresence>
//     </div>
//   );
// };

// // ==========================================
// // 4. SOCIALS & WHATSAPP NETWORK DOCK
// // ==========================================
// const SocialNetworkDock = () => {
//   const socials = [
//     { name: "X (Twitter)", color: "group-hover:bg-black", path: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />, link: "#" },
//     { name: "LinkedIn", color: "group-hover:bg-[#0a66c2]", path: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>, link: "#" },
//     { name: "Facebook", color: "group-hover:bg-[#1877f2]", path: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>, link: "#" },
//     { name: "YouTube", color: "group-hover:bg-[#ff0000]", path: <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>, link: "#" }
//   ];

//   return (
//     <div className="w-full bg-slate-900 rounded-[2.5rem] p-10 lg:p-14 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10 mt-12 border-4 border-slate-800">
//        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.15)_0%,transparent_60%)] pointer-events-none" />
       
//        <div className="text-center lg:text-left relative z-10">
//           <h3 className="font-display text-4xl font-black text-white mb-2">Let's Work Together</h3>
//           <p className="text-slate-400 font-bold text-lg">Establish a direct connection across our global network.</p>
//        </div>

//        <div className="flex flex-wrap justify-center gap-4 relative z-10">
//           {/* Official Social Links */}
//           {socials.map((social, i) => (
//              <a key={i} href={social.link} target="_blank" rel="noreferrer" className={`group w-14 h-14 bg-white rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-2 shadow-lg ${social.color}`}>
//                 <svg className="w-7 h-7 fill-slate-800 group-hover:fill-white transition-colors" viewBox="0 0 24 24">
//                    {social.path}
//                 </svg>
//              </a>
//           ))}

//           {/* Special WhatsApp Contact */}
//           <a href="https://wa.me/919748181485" target="_blank" rel="noreferrer" className="group h-14 bg-white hover:bg-[#25d366] rounded-2xl px-6 flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 hover:-translate-y-2 shadow-[0_10px_20px_rgba(37,211,102,0.2)] ml-2">
//              <svg className="w-7 h-7 fill-slate-800 group-hover:fill-white transition-colors" viewBox="0 0 24 24">
//                 <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 1.602 5.962L.04 24l6.326-1.654A11.91 11.91 0 0 0 11.944 24a12 12 0 0 0 12-12 12 12 0 0 0-12-12zM12 21.821c-1.666 0-3.238-.426-4.593-1.178l-3.327.873.886-3.245A9.78 9.78 0 0 1 2.182 12 9.82 9.82 0 0 1 12 2.182 9.82 9.82 0 0 1 21.818 12 9.82 9.82 0 0 1 12 21.821zm5.367-7.3c-.294-.147-1.74-.86-2.008-.958-.27-.1-.466-.148-.663.147-.196.295-.76 1.006-.93 1.203-.17.197-.34.22-.635.074-2.14-1.074-3.13-1.89-4.32-3.88-.171-.295-.018-.454.129-.601.134-.134.294-.344.442-.516.147-.172.196-.295.294-.49.098-.197.05-.37-.025-.517-.074-.148-.662-1.597-.908-2.187-.24-.575-.483-.497-.663-.507-.171-.01-.368-.01-.564-.01-.197 0-.515.074-.786.37-.27.294-1.03 1.006-1.03 2.454 0 1.448 1.055 2.846 1.203 3.043.147.196 2.072 3.166 5.018 4.437 2.183.945 2.923.86 3.44.724.577-.153 1.74-.712 1.986-1.401.246-.688.246-1.277.172-1.401-.073-.123-.27-.196-.563-.344z"/>
//              </svg>
//              <span className="font-black text-slate-800 group-hover:text-white uppercase tracking-widest text-sm transition-colors">Chat Direct</span>
//           </a>
//        </div>
//     </div>
//   );
// };

// // ==========================================
// // MAIN CONTACT PAGE COMPONENT
// // ==========================================
// const ContactPage = () => {
//   const { scrollY } = useScroll();
//   const headerOpacity = useTransform(scrollY, [100, 200], [0, 1]);

//   return (
//     <PageTransition>
//       <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-sky-200 selection:text-sky-900">
//         <Navbar />

//         {/* STICKY HEADER WITH BREADCRUMB */}
//         <div className="sticky z-30 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm" style={{ top: '64px' }}>
//           <div className="container py-3 flex items-center justify-between">
//             <div className="flex items-center gap-2">
//                <Link to="/" className="group flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-sky-50 rounded-lg transition-colors border border-slate-200 hover:border-sky-200">
//                  <ChevronLeft className="w-4 h-4 text-slate-500 group-hover:text-sky-600 transition-colors" />
//                  <span className="text-xs font-black text-slate-600 group-hover:text-sky-700 uppercase tracking-widest transition-colors">Home Page</span>
//                </Link>
//                <span className="text-slate-300 font-bold">/</span>
//                <span className="text-sky-600 font-black text-xs uppercase tracking-widest">Contact Us</span>
//             </div>
//             <motion.div style={{ opacity: headerOpacity }} className="flex items-center gap-4 pointer-events-none">
//               <span className="hidden lg:block font-display font-bold text-slate-900 uppercase tracking-widest">Comm Hub Active</span>
//             </motion.div>
//           </div>
//         </div>

//         <main className="relative pb-24">
          
//           {/* HERO SECTION: Global Communications Network */}
//           <section className="relative pt-16 pb-32 overflow-hidden bg-white border-b border-slate-200 shadow-sm">
//              {/* Animated Network Background */}
//              <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:40px_40px] z-0" />
//              <motion.div animate={{ backgroundPosition: ["0px 0px", "100px 100px"] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.05)_0%,transparent_70%)] z-0" />
             
//              <div className="container relative z-10 text-center flex flex-col items-center">
//                 {/* Custom Brand Header injected here */}
//                 <BrandHeroHeader />

//                 <h1 className="font-display text-5xl lg:text-7xl font-black text-slate-900 mb-6 tracking-tight uppercase">
//                   Establish <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">Connection</span>
//                 </h1>
//                 <p className="text-xl lg:text-2xl text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
//                   Direct access to our power scientists, mission-critical sales team, and global support architecture.
//                 </p>
//              </div>

//              {/* Overlapping Active Channels */}
//              <div className="container relative mt-[-20px]">
//                 <ActiveCommChannels />
//              </div>
//           </section>

//           {/* MAIN CONTENT: Form, HQ Radar, Socials */}
//           <section className="container py-24">
//              <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                
//                 {/* LEFT: Smart Contact Form (Takes up 7 cols) */}
//                 <div className="lg:col-span-7">
//                    <SmartContactForm />
//                 </div>

//                 {/* RIGHT: HQ Radar, Info & Socials (Takes up 5 cols) */}
//                 <div className="lg:col-span-5 flex flex-col gap-8">
                   
//                    {/* Autonomous Radar Map (IMAGE 4 FIX) */}
//                    <div className="w-full bg-white border border-slate-200 rounded-[3rem] p-8 shadow-xl relative overflow-hidden flex flex-col items-center justify-center min-h-[400px]">
//                       <div className="absolute inset-0 bg-slate-50" />
//                       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />
                      
//                       {/* Deep Radar sweep animation */}
//                       <motion.div animate={{ rotate: 360 }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} className="absolute inset-0 m-auto w-[450px] h-[450px] rounded-full border-2 border-sky-500/20 pointer-events-none">
//                          <div className="absolute inset-4 rounded-full border border-sky-400/10" />
//                          <div className="absolute inset-12 rounded-full border border-sky-400/10" />
//                          <div className="absolute top-0 right-1/2 w-[50%] h-[50%] bg-gradient-to-tr from-sky-500/30 to-transparent origin-bottom-right" style={{ clipPath: "polygon(100% 100%, 0 0, 100% 0)" }} />
//                       </motion.div>

//                       {/* HQ Map Pin with Custom Logo */}
//                       <div className="relative z-10 flex flex-col items-center text-center">
//                          <div className="w-20 h-20 bg-sky-500 text-white rounded-[1.5rem] flex items-center justify-center shadow-[0_0_40px_rgba(14,165,233,0.5)] mb-6 relative">
//                             <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }} transition={{ duration: 2.5, repeat: Infinity }} className="absolute inset-0 bg-sky-400 rounded-[1.5rem]" />
//                             <MapPin className="w-10 h-10 relative z-10" />
//                          </div>
                         
//                          {/* CRYONANO 3-dot logo representation */}
//                          <div className="font-display text-3xl font-black text-slate-900 tracking-tight flex items-center justify-center gap-2 mb-2">
//                            CRYONANO 
//                            <div className="flex gap-1 mt-1">
//                              <span className="w-2 h-2 bg-sky-500 rounded-full" />
//                              <span className="w-2 h-2 bg-sky-500 rounded-full" />
//                              <span className="w-2 h-2 bg-sky-500 rounded-full" />
//                            </div>
//                          </div>
//                          <h4 className="text-sm font-black text-sky-600 uppercase tracking-widest mb-3">Laboratories HQ</h4>
                         
//                          <p className="text-slate-600 font-bold px-6 py-2 bg-white/80 backdrop-blur rounded-xl border border-slate-200">
//                             Bhubaneswar, West Bengal<br/>India
//                          </p>
//                       </div>
//                    </div>

//                    {/* Quick Info Cards */}
//                    <div className="grid sm:grid-cols-2 gap-6">
//                       <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm hover:shadow-lg transition-shadow group">
//                          <Clock className="w-8 h-8 text-amber-500 mb-4 group-hover:scale-110 transition-transform" />
//                          <h5 className="font-black text-slate-900 uppercase mb-1">Operating Hours</h5>
//                          <p className="text-sm font-bold text-slate-500">Mon - Fri<br/>09:00 - 18:00 IST</p>
//                       </div>
//                       <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm hover:shadow-lg transition-shadow group">
//                          <ShieldCheck className="w-8 h-8 text-emerald-500 mb-4 group-hover:scale-110 transition-transform" />
//                          <h5 className="font-black text-slate-900 uppercase mb-1">Secure Comms</h5>
//                          <p className="text-sm font-bold text-slate-500">All portal transmissions are end-to-end encrypted.</p>
//                       </div>
//                    </div>
//                 </div>
//              </div>

//              {/* Brand Socials & WhatsApp Dock (IMAGE 5 FIX) */}
//              <SocialNetworkDock />

//           </section>

//         </main>
        
//         <ScrollToTop />
//         <Footer />
//       </div>
//     </PageTransition>
//   );
// };

// export default ContactPage;













import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  Phone, Mail, Send, Clock, ShieldCheck, Globe2, 
  ArrowUp, Activity, Terminal, CheckCircle2, ChevronLeft, Lock, ArrowRight, Compass, HeartHandshake
} from "lucide-react";
import { Link } from "react-router-dom";

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

// ==========================================
// 1. BRAND HERO HEADER (Image 1 & Text Fix)
// Exact red-dot layout + autonomous highlights
// ==========================================
const BrandHeroHeader = () => {
  const highlights = [
    "Precision AC Power for Aerospace, Defense & Testing",
    "Mission-Critical High Density DC-DC Platforms",
    "MIL-STD Validated Operational Resilience",
    "Global Distributed Power Network Architecture"
  ];
  const [activeHighlight, setActiveHighlight] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActiveHighlight((prev) => (prev + 1) % highlights.length), 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col items-center text-center relative z-20 mb-12">
       {/* Exact CRYONANO Logo Representation */}
       <div className="flex flex-col items-start mb-4">
          <div className="flex gap-1.5 mb-1 ml-1">
            <span className="w-3.5 h-3.5 bg-rose-500 rounded-full" />
            <span className="w-3.5 h-3.5 bg-rose-500 rounded-full" />
            <span className="w-3.5 h-3.5 bg-rose-500 rounded-full" />
          </div>
          <div className="font-display text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-none">
            CRYONANO
          </div>
       </div>

       {/* Autonomous Highlights Typewriter */}
       <div className="h-8 relative flex items-center justify-center overflow-hidden w-full max-w-2xl mt-2">
         <AnimatePresence mode="wait">
            <motion.div 
              key={activeHighlight} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.4 }}
              className="text-sm md:text-base font-extrabold text-sky-700 tracking-wide"
            >
               {highlights[activeHighlight]}
            </motion.div>
         </AnimatePresence>
       </div>
    </motion.div>
  );
};

// ==========================================
// 2. ACTIVE COMM CHANNELS (Image 2 Fix)
// Highly animated, explicit CTA to tap/click
// ==========================================
const ActiveCommChannels = () => {
  const channels = [
    { title: "Technical Sales", desc: "For bulk orders & pricing.", icon: Phone, color: "sky", value: "+91 97481 81485", link: "tel:+919748181485", cta: "Tap to Call" },
    { title: "Lab Engineering", desc: "Architecture & MIL-STD support.", icon: Terminal, color: "emerald", value: "contact@cryonano.com", link: "mailto:contact@cryonano.com", cta: "Tap to Email" },
    { title: "Global Support", desc: "RMA & troubleshooting.", icon: Globe2, color: "amber", value: "support@cryonano.com", link: "mailto:support@cryonano.com", cta: "Tap for Support" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto mt-16 relative z-10">
      {channels.map((ch, i) => (
        <motion.a 
          key={i} href={ch.link} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: i * 0.1 }}
          className={`block bg-white rounded-[2.5rem] p-8 border-2 border-slate-100 shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-${ch.color}-300 transition-all duration-300 relative overflow-hidden group`}
        >
           <div className={`absolute -right-20 -top-20 w-48 h-48 bg-${ch.color}-100 rounded-full blur-[40px] opacity-40 group-hover:scale-150 transition-transform duration-700 pointer-events-none`} />
           
           <div className="flex justify-between items-start mb-6 relative z-10">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border shadow-sm transition-all duration-500 ${`bg-${ch.color}-50 border-${ch.color}-100 text-${ch.color}-500 group-hover:bg-${ch.color}-500 group-hover:text-white group-hover:scale-110`}`}>
                 <ch.icon className="w-8 h-8" />
              </div>
              <div className={`flex items-center gap-1.5 bg-${ch.color}-50 border border-${ch.color}-200 px-3 py-1.5 rounded-full shadow-sm`}>
                 <div className={`w-2 h-2 rounded-full bg-${ch.color}-500 animate-pulse`} />
                 <span className={`text-[10px] font-black text-${ch.color}-700 uppercase tracking-widest`}>Live</span>
              </div>
           </div>

           <h4 className="text-2xl font-black text-slate-900 mb-2 relative z-10">{ch.title}</h4>
           <p className="text-sm font-bold text-slate-500 mb-6 relative z-10">{ch.desc}</p>
           
           <div className={`w-full p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between group-hover:bg-${ch.color}-50 group-hover:border-${ch.color}-200 transition-colors relative z-10 overflow-hidden`}>
              <span className={`font-mono font-black text-lg text-slate-800 group-hover:text-${ch.color}-800 transition-colors`}>{ch.value}</span>
           </div>

           {/* NEW: Explicit, animated CTA to indicate clickability */}
           <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} className={`mt-5 flex items-center gap-2 text-sm font-black text-${ch.color}-600 uppercase tracking-widest relative z-10`}>
              {ch.cta} <ArrowRight className="w-4 h-4" />
           </motion.div>
        </motion.a>
      ))}
    </div>
  );
};



// ==========================================
// 3. SMART INTERACTIVE FORM (Fixed Focus & Added Modal)
// ==========================================

// FIX: Moved InputWrapper OUTSIDE the main component so it doesn't re-render on every keystroke
const InputWrapper = ({ children, isFocused }: { children: React.ReactNode, isFocused: boolean }) => (
  <div className="relative group z-10">
     <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-sky-400 to-indigo-500 blur-[3px] transition-opacity duration-300 pointer-events-none ${isFocused ? 'opacity-50' : 'opacity-0 group-hover:opacity-20'}`} />
     <div className="relative bg-white rounded-2xl z-20">
       {children}
     </div>
  </div>
);

const SmartContactForm = () => {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Controlled component state for inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    org: "",
    phone: "",
    details: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    
    // Simulate Encryption/Transmission
    setTimeout(() => {
      setFormState("success");
      
      // Autonomous Modal Close and Form Reset after 5 seconds
      setTimeout(() => {
         setFormState("idle");
         setFormData({ name: "", email: "", org: "", phone: "", details: "" });
      }, 5000);
    }, 2500);
  };

  return (
    <>
      <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="w-full bg-white rounded-[3rem] border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-8 lg:p-12 relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(14,165,233,0.05)_0%,transparent_60%)] pointer-events-none" />

         <div className="text-center mb-10 relative z-10 flex flex-col items-center">
           <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 shadow-md">
              <Lock className="w-3 h-3 text-sky-400" /> End-to-End Encrypted
           </div>
           <h3 className="font-display text-4xl font-black text-slate-900 uppercase tracking-tight">Secure Message Portal</h3>
           <p className="text-slate-500 font-bold mt-3 max-w-md">Transmit your parameters directly to our engineering matrix.</p>
         </div>

         <form onSubmit={handleSubmit} className="space-y-6 relative z-20">
            <div className="grid md:grid-cols-2 gap-6">
               <div className="space-y-2">
                 <label className="text-xs font-black text-slate-500 uppercase tracking-widest pl-2">Full Name</label>
                 <InputWrapper isFocused={focusedField === "name"}>
                   <input name="name" value={formData.name} onChange={handleChange} onFocus={() => setFocusedField("name")} onBlur={() => setFocusedField(null)} required type="text" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 text-slate-800 font-bold focus:outline-none focus:bg-white transition-all relative z-20" placeholder="John Doe" />
                 </InputWrapper>
               </div>
               <div className="space-y-2">
                 <label className="text-xs font-black text-slate-500 uppercase tracking-widest pl-2">Corporate Email</label>
                 <InputWrapper isFocused={focusedField === "email"}>
                   <input name="email" value={formData.email} onChange={handleChange} onFocus={() => setFocusedField("email")} onBlur={() => setFocusedField(null)} required type="email" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 text-slate-800 font-bold focus:outline-none focus:bg-white transition-all relative z-20" placeholder="john@company.com" />
                 </InputWrapper>
               </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
               <div className="space-y-2">
                 <label className="text-xs font-black text-slate-500 uppercase tracking-widest pl-2">Organization</label>
                 <InputWrapper isFocused={focusedField === "org"}>
                   <input name="org" value={formData.org} onChange={handleChange} onFocus={() => setFocusedField("org")} onBlur={() => setFocusedField(null)} type="text" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 text-slate-800 font-bold focus:outline-none focus:bg-white transition-all relative z-20" placeholder="Aerospace Dynamics Inc." />
                 </InputWrapper>
               </div>
               <div className="space-y-2">
                 <label className="text-xs font-black text-slate-500 uppercase tracking-widest pl-2">Direct Phone Number</label>
                 <InputWrapper isFocused={focusedField === "phone"}>
                   <input name="phone" value={formData.phone} onChange={handleChange} onFocus={() => setFocusedField("phone")} onBlur={() => setFocusedField(null)} required type="tel" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 text-slate-800 font-bold focus:outline-none focus:bg-white transition-all relative z-20" placeholder="+1 (555) 000-0000" />
                 </InputWrapper>
               </div>
            </div>

            <div className="space-y-2">
               <label className="text-xs font-black text-slate-500 uppercase tracking-widest pl-2">Transmission Details</label>
               <InputWrapper isFocused={focusedField === "details"}>
                 <textarea name="details" value={formData.details} onChange={handleChange} onFocus={() => setFocusedField("details")} onBlur={() => setFocusedField(null)} required rows={5} className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 text-slate-800 font-bold focus:outline-none focus:bg-white transition-all resize-none relative z-20" placeholder="Provide details regarding power requirements, input/output constraints, and operational environments..."></textarea>
               </InputWrapper>
            </div>

            <button type="submit" className="w-full bg-sky-500 hover:bg-sky-600 text-white font-black text-lg uppercase tracking-widest py-5 rounded-2xl shadow-[0_10px_20px_rgba(14,165,233,0.3)] hover:shadow-[0_15px_30px_rgba(14,165,233,0.4)] transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3 relative overflow-hidden group">
               <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="absolute top-0 bottom-0 w-1/4 bg-white/20 blur-md skew-x-12" />
               Initiate Transmission <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
         </form>

         {/* SUBMITTING OVERLAY (Blocks form while loading) */}
         <AnimatePresence>
            {formState === "submitting" && (
               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 z-30 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center rounded-[3rem]">
                  <div className="relative w-32 h-32 mb-8 flex items-center justify-center">
                     <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-4 border-dashed border-sky-400 rounded-full opacity-60" />
                     <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 1.5, repeat: Infinity }} className="absolute inset-4 bg-sky-200 rounded-full" />
                     <Activity className="w-12 h-12 text-sky-600 relative z-10 animate-pulse" />
                  </div>
                  <h3 className="font-display text-2xl font-black text-slate-900 uppercase mb-2 tracking-widest">Encrypting Package</h3>
                  <p className="text-slate-500 font-bold">Establishing secure relay to engineering servers...</p>
               </motion.div>
            )}
         </AnimatePresence>
      </motion.div>

      {/* FULL-SCREEN AUTONOMOUS SUCCESS MODAL */}
      <AnimatePresence>
         {formState === "success" && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
               {/* Glassmorphic Backdrop */}
               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-slate-900/40 backdrop-blur-md" />
               
               {/* Modal Content */}
               <motion.div initial={{ scale: 0.9, y: 50, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.9, y: 20, opacity: 0 }} transition={{ type: "spring", damping: 25, stiffness: 300 }} className="bg-white rounded-[3rem] p-10 md:p-14 max-w-2xl w-full text-center shadow-2xl relative overflow-hidden border border-slate-200 z-10">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(52,211,153,0.1)_0%,transparent_70%)] pointer-events-none" />
                  
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }} className="w-28 h-28 bg-emerald-50 border-4 border-emerald-400 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(52,211,153,0.4)]">
                     <CheckCircle2 className="w-14 h-14 text-emerald-500" />
                  </motion.div>

                  <h3 className="font-display text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight mb-4">Thank You For Your Attention</h3>
                  <p className="text-lg md:text-xl text-slate-600 font-bold mb-10 leading-relaxed">
                    Our engineering team has received your parameters and will reach out to you shortly.
                  </p>
                  
                  {/* Autonomous Closing Progress Bar */}
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                     <motion.div initial={{ width: "100%" }} animate={{ width: "0%" }} transition={{ duration: 5, ease: "linear" }} className="h-full bg-emerald-500" />
                  </div>
                  <div className="mt-4 text-[10px] font-black text-slate-400 uppercase tracking-widest animate-pulse">
                     Autoclosing Secure Session...
                  </div>
               </motion.div>
            </div>
         )}
      </AnimatePresence>
    </>
  );
};

// ==========================================
// 4. AUTONOMOUS SITE WAYFINDER (Image 3 Fix)
// Replaces static HQ with animated website guide
// ==========================================
const SiteWayfinderBeacon = () => {
  const hints = [
    { q: "Need Technical Specs?", a: "Explore DC-DC & Inverter Products" },
    { q: "Require Custom Power?", a: "Use the Secure Transmission Portal" },
    { q: "Looking for Certifications?", a: "Check our MIL-STD Profiles" },
    { q: "Want to Speak Directly?", a: "Call our Technical Sales Line" }
  ];
  const [activeHint, setActiveHint] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActiveHint((prev) => (prev + 1) % hints.length), 4000);
    return () => clearInterval(timer);
  }, [hints.length]);

  return (
    <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="w-full bg-white border border-slate-200 rounded-[3rem] p-8 shadow-xl relative overflow-hidden flex flex-col items-center justify-center min-h-[400px]">
        <div className="absolute inset-0 bg-slate-50" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />
        
        {/* Deep Radar sweep animation */}
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }} className="absolute inset-0 m-auto w-[450px] h-[450px] rounded-full border-2 border-emerald-500/20 pointer-events-none">
            <div className="absolute inset-4 rounded-full border border-emerald-400/10" />
            <div className="absolute inset-12 rounded-full border border-emerald-400/10" />
            <div className="absolute top-0 right-1/2 w-[50%] h-[50%] bg-gradient-to-tr from-emerald-500/30 to-transparent origin-bottom-right" style={{ clipPath: "polygon(100% 100%, 0 0, 100% 0)" }} />
        </motion.div>

        {/* Wayfinder Content */}
        <div className="relative z-10 flex flex-col items-center text-center w-full">
            <div className="w-20 h-20 bg-emerald-500 text-white rounded-[1.5rem] flex items-center justify-center shadow-[0_0_40px_rgba(16,185,129,0.5)] mb-6 relative">
              <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }} transition={{ duration: 2.5, repeat: Infinity }} className="absolute inset-0 bg-emerald-400 rounded-[1.5rem]" />
              <Compass className="w-10 h-10 relative z-10" />
            </div>
            
            <h4 className="text-xs font-black text-emerald-600 uppercase tracking-widest mb-6">Navigation Beacon</h4>
            
            {/* Autonomous Cycling Hints */}
            <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 w-full shadow-lg h-[120px] flex flex-col justify-center">
               <AnimatePresence mode="wait">
                  <motion.div key={activeHint} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }}>
                     <span className="block text-sm font-bold text-slate-500 mb-1">{hints[activeHint].q}</span>
                     <span className="block text-lg font-black text-slate-900">{hints[activeHint].a}</span>
                  </motion.div>
               </AnimatePresence>
            </div>
        </div>
    </motion.div>
  );
};

// ==========================================
// 5. SOCIALS & WHATSAPP NETWORK DOCK (Image 4 Fix)
// Original brand colors restored on hover!
// ==========================================
const SocialNetworkDock = () => {
  const socials = [
    { name: "X (Twitter)", defaultFill: "fill-slate-800", hoverClass: "hover:bg-black group-hover:fill-white", path: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />, link: "#" },
    { name: "LinkedIn", defaultFill: "fill-[#0a66c2]", hoverClass: "hover:bg-[#0a66c2] group-hover:fill-white", path: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>, link: "#" },
    { name: "Facebook", defaultFill: "fill-[#1877f2]", hoverClass: "hover:bg-[#1877f2] group-hover:fill-white", path: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>, link: "#" },
    { name: "YouTube", defaultFill: "fill-[#ff0000]", hoverClass: "hover:bg-[#ff0000] group-hover:fill-white", path: <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>, link: "#" }
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="w-full bg-slate-900 rounded-[2.5rem] p-10 lg:p-14 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10 mt-12 border-4 border-slate-800">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.15)_0%,transparent_60%)] pointer-events-none" />
       
       <div className="text-center lg:text-left relative z-10">
          <h3 className="font-display text-4xl font-black text-white mb-2">Let's Work Together</h3>
          <p className="text-slate-400 font-bold text-lg">Establish a direct connection across our global network.</p>
       </div>

       <div className="flex flex-wrap justify-center gap-4 relative z-10">
          {/* Official Social Links (Colors fixed!) */}
          {socials.map((social, i) => (
             <a key={i} href={social.link} target="_blank" rel="noreferrer" className={`group w-14 h-14 bg-white rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-2 shadow-lg ${social.hoverClass}`}>
                <svg className={`w-7 h-7 transition-colors ${social.defaultFill} group-hover:fill-white`} viewBox="0 0 24 24">
                   {social.path}
                </svg>
             </a>
          ))}

          {/* Special WhatsApp Contact */}
          <a href="https://wa.me/919748181485" target="_blank" rel="noreferrer" className="group h-14 bg-white hover:bg-[#25d366] rounded-2xl px-6 flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 hover:-translate-y-2 shadow-[0_10px_20px_rgba(37,211,102,0.2)] ml-2">
             <svg className="w-7 h-7 fill-[#25d366] group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 1.602 5.962L.04 24l6.326-1.654A11.91 11.91 0 0 0 11.944 24a12 12 0 0 0 12-12 12 12 0 0 0-12-12zM12 21.821c-1.666 0-3.238-.426-4.593-1.178l-3.327.873.886-3.245A9.78 9.78 0 0 1 2.182 12 9.82 9.82 0 0 1 12 2.182 9.82 9.82 0 0 1 21.818 12 9.82 9.82 0 0 1 12 21.821zm5.367-7.3c-.294-.147-1.74-.86-2.008-.958-.27-.1-.466-.148-.663.147-.196.295-.76 1.006-.93 1.203-.17.197-.34.22-.635.074-2.14-1.074-3.13-1.89-4.32-3.88-.171-.295-.018-.454.129-.601.134-.134.294-.344.442-.516.147-.172.196-.295.294-.49.098-.197.05-.37-.025-.517-.074-.148-.662-1.597-.908-2.187-.24-.575-.483-.497-.663-.507-.171-.01-.368-.01-.564-.01-.197 0-.515.074-.786.37-.27.294-1.03 1.006-1.03 2.454 0 1.448 1.055 2.846 1.203 3.043.147.196 2.072 3.166 5.018 4.437 2.183.945 2.923.86 3.44.724.577-.153 1.74-.712 1.986-1.401.246-.688.246-1.277.172-1.401-.073-.123-.27-.196-.563-.344z"/>
             </svg>
             <span className="font-black text-slate-800 group-hover:text-white uppercase tracking-widest text-sm transition-colors">Chat Direct</span>
          </a>
       </div>
    </motion.div>
  );
};

// ==========================================
// MAIN CONTACT PAGE COMPONENT
// ==========================================
const ContactPage = () => {
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
               <span className="text-sky-600 font-black text-xs uppercase tracking-widest">CONTACT US</span>
            </div>
            <motion.div style={{ opacity: headerOpacity }} className="flex items-center gap-4 pointer-events-none">
              <span className="hidden lg:block font-display font-bold text-slate-900 uppercase tracking-widest">Comm Hub Active</span>
            </motion.div>
          </div>
        </div>

        <main className="relative pb-10">
          
          {/* HERO SECTION: Global Communications Network */}
          <section className="relative pt-16 pb-32 overflow-hidden bg-white border-b border-slate-200 shadow-sm">
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:40px_40px] z-0" />
             <motion.div animate={{ backgroundPosition: ["0px 0px", "100px 100px"] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.05)_0%,transparent_70%)] z-0" />
             
             <div className="container relative z-10 text-center flex flex-col items-center">
                {/* Brand Logo & Highlights */}
                <BrandHeroHeader />

                <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="font-display text-5xl lg:text-7xl font-black text-slate-900 mb-6 tracking-tight uppercase">
                  Establish <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">Connection</span>
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="text-xl lg:text-2xl text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
                  Direct access to our power scientists, mission-critical sales team, and global support architecture.
                </motion.p>
             </div>

             {/* Overlapping Active Channels */}
             <div className="container relative mt-[-20px]">
                <ActiveCommChannels />
             </div>
          </section>

          {/* MAIN CONTENT: Form, Radar Guide, Socials */}
          <section className="container py-24">
             <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                
                {/* LEFT: Smart Contact Form */}
                <div className="lg:col-span-7">
                   <SmartContactForm />
                </div>

                {/* RIGHT: Site Wayfinder Radar & Info */}
                <div className="lg:col-span-5 flex flex-col gap-8">
                   
                   {/* Autonomous Site Wayfinder Radar (Replaces basic map) */}
                   <SiteWayfinderBeacon />

                   {/* Quick Info Cards */}
                   <div className="grid sm:grid-cols-2 gap-6">
                      <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm hover:shadow-lg transition-shadow group">
                         <Clock className="w-8 h-8 text-amber-500 mb-4 group-hover:scale-110 transition-transform" />
                         <h5 className="font-black text-slate-900 uppercase mb-1">Operating Hours</h5>
                         <p className="text-sm font-bold text-slate-500">Mon - Fri<br/>09:00 - 18:00 IST</p>
                      </motion.div>
                      <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm hover:shadow-lg transition-shadow group">
                         <ShieldCheck className="w-8 h-8 text-emerald-500 mb-4 group-hover:scale-110 transition-transform" />
                         <h5 className="font-black text-slate-900 uppercase mb-1">Secure Comms</h5>
                         <p className="text-sm font-bold text-slate-500">All portal transmissions are end-to-end encrypted.</p>
                      </motion.div>
                   </div>
                </div>
             </div>

             {/* Brand Socials & WhatsApp Dock */}
             <SocialNetworkDock />

          </section>

          {/* FINAL THANK YOU BANNER */}
          <section className="container pb-10">
             <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="w-full bg-sky-50 border-2 border-sky-100 rounded-[3rem] p-12 text-center flex flex-col items-center relative overflow-hidden shadow-inner">
                <HeartHandshake className="w-16 h-16 text-sky-500 mb-6" />
                <h2 className="font-display text-4xl lg:text-5xl font-black text-sky-950 uppercase tracking-tight mb-4">Thank You For Visiting</h2>
                <p className="text-xl text-sky-800 font-medium">We look forward to powering your next mission-critical architecture.</p>
             </motion.div>
          </section>

        </main>
        
        <ScrollToTop />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default ContactPage;