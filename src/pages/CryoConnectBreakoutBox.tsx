import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  ArrowLeft, ArrowRight, Download, Phone, Mail, Settings, CircuitBoard, 
  Shield, Zap, Layers, ChevronLeft, ChevronRight, Cpu, CheckCircle2
} from "lucide-react";
import { Link } from "react-router-dom";
import { productsData } from "@/data/products";

// ==========================================
// 1. LIVE TELEMETRY DASHBOARD
// ==========================================
const BreakoutBoxDashboard = () => {
  return (
    <div className="w-full bg-white/90 backdrop-blur-xl rounded-[2.5rem] border border-blue-100 shadow-[0_20px_60px_-15px_rgba(0,100,255,0.08)] overflow-hidden font-sans flex flex-col">
      <div className="bg-slate-50/80 border-b border-blue-100/50 px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_12px_rgba(16,185,129,0.6)]" />
          <span className="text-slate-600 text-xs font-bold tracking-widest uppercase font-mono">Pristine Signals: Active Routing</span>
        </div>
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-200" />
          <div className="w-2.5 h-2.5 rounded-full bg-blue-200" />
          <div className="w-2.5 h-2.5 rounded-full bg-blue-200" />
        </div>
      </div>

      <div className="p-8 flex flex-col gap-8">
        <div className="bg-blue-50/40 border border-blue-100/60 rounded-3xl p-8 relative overflow-hidden flex flex-col shadow-sm">
          <div className="flex justify-between items-start mb-8">
            <div>
              <p className="text-blue-600 text-xs font-extrabold uppercase tracking-widest mb-2">Spectral Noise Density</p>
              <p className="text-3xl font-extrabold text-slate-800 tracking-tight">&lt; 2.0 <span className="text-sm text-slate-500 font-bold">µV p-p</span></p>
            </div>
            <div className="p-3 bg-blue-100 rounded-2xl">
              <Zap className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div className="flex-grow relative w-full h-36 mt-2">
            <div className="absolute inset-0 flex flex-col justify-between opacity-40 pointer-events-none">
              {[1,2,3,4,5].map(i => <div key={i} className="w-full h-px bg-blue-200" />)}
            </div>
            <svg viewBox="0 0 400 150" className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
              <motion.path d="M 0 30 Q 50 100, 100 120 T 200 130 T 300 135 T 400 135" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5 5" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2, ease: "easeOut" }} />
              <motion.path d="M 0 140 Q 20 145, 50 148 T 150 149 T 250 150 T 400 150" fill="none" stroke="#0284c7" strokeWidth="3" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2, delay: 0.5, ease: "easeOut" }} />
            </svg>
            <div className="absolute bottom-2 right-4 text-[10px] text-white font-bold bg-blue-600 px-3 py-1.5 rounded-lg shadow-sm">CryoNano Profile</div>
            <div className="absolute top-4 right-4 text-[10px] text-slate-500 font-bold bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">Standard SMU</div>
          </div>
        </div>

        <div className="bg-red-50/40 border border-red-100/60 rounded-3xl p-8 relative overflow-hidden flex flex-col shadow-sm">
          <div className="flex justify-between items-start mb-8">
            <div>
              <p className="text-red-600 text-xs font-extrabold uppercase tracking-widest mb-2">Signal Attenuation vs Frequency</p>
              <p className="text-3xl font-extrabold text-slate-800 tracking-tight">&lt; 2.0 <span className="text-sm text-slate-500 font-bold">dB @ 500 MHz</span></p>
            </div>
            <div className="p-3 bg-red-100 rounded-2xl">
              <Layers className="w-6 h-6 text-red-600" />
            </div>
          </div>
          <div className="flex-grow relative w-full h-36 mt-2">
            <div className="absolute inset-0 flex flex-col justify-between opacity-40 pointer-events-none">
              {[1,2,3,4,5].map(i => <div key={i} className="w-full h-px bg-red-200" />)}
            </div>
            <svg viewBox="0 0 400 150" className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
              <motion.line x1="0" y1="140" x2="400" y2="140" stroke="#b91c1c" strokeWidth="2" strokeDasharray="3 3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} />
              <motion.path d="M 0 140 Q 50 142, 100 135 T 200 120 T 300 90 T 400 60" fill="none" stroke="#ef4444" strokeWidth="3" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2, ease: "easeOut" }} />
            </svg>
            <div className="absolute bottom-0 right-0 text-[10px] text-red-900 font-bold bg-red-300 px-3 py-1.5 rounded-l-lg shadow-sm">Frequency (MHz)</div>
            <div className="absolute top-0 right-4 text-[10px] text-white font-bold bg-red-600 px-3 py-1.5 rounded-lg shadow-sm">CryoConnect Trace</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 2. ANIMATED SIGNAL FLOW DIAGRAM
// ==========================================
const SignalFlowDiagram = () => {
  return (
    <div className="bg-slate-900 rounded-[2.5rem] p-8 lg:p-12 relative overflow-hidden shadow-2xl border border-slate-800 mt-16">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <h3 className="font-display text-2xl font-extrabold text-white mb-12 text-center relative z-10">Typical Integration Architecture</h3>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 lg:gap-10">
        
        <div className="flex flex-col items-center gap-4 w-full md:w-1/4">
          <div className="w-20 h-20 rounded-2xl bg-slate-800 border-2 border-slate-600 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <Settings className="w-8 h-8 text-slate-400" />
          </div>
          <div className="text-center"><p className="text-white font-bold">Room Temp</p><p className="text-xs text-slate-400">Electronics</p></div>
        </div>

        <div className="hidden md:flex flex-grow items-center justify-center relative h-10">
          <div className="absolute inset-0 flex items-center"><div className="w-full h-0.5 bg-slate-700 dashed" /></div>
          <motion.div animate={{ x: [0, 150] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} className="w-2 h-2 rounded-full bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.8)] absolute left-0" />
        </div>

        <div className="flex flex-col items-center gap-4 w-full md:w-1/4 relative">
          <motion.div animate={{ boxShadow: ["0 0 20px rgba(59,130,246,0.2)", "0 0 60px rgba(59,130,246,0.6)", "0 0 20px rgba(59,130,246,0.2)"] }} transition={{ duration: 3, repeat: Infinity }} className="w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-600 to-blue-900 border-2 border-blue-400 flex items-center justify-center relative z-10">
            <Shield className="w-10 h-10 text-white" />
          </motion.div>
          <div className="text-center"><p className="text-blue-400 font-extrabold">CryoConnect</p><p className="text-xs text-blue-200">RF Low-Pass Filter</p></div>
        </div>

        <div className="hidden md:flex flex-grow items-center justify-center relative h-10">
          <div className="absolute inset-0 flex items-center"><div className="w-full h-0.5 bg-blue-900/50 dashed" /></div>
          <motion.div animate={{ x: [0, 150] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.75 }} className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] absolute left-0" />
        </div>

        <div className="flex flex-col items-center gap-4 w-full md:w-1/4">
          <div className="w-20 h-20 rounded-2xl bg-slate-800 border-2 border-cyan-800 flex items-center justify-center">
            <Layers className="w-8 h-8 text-cyan-500" />
          </div>
          <div className="text-center"><p className="text-white font-bold">Cryostat</p><p className="text-xs text-slate-400">Wiring / 4K Stage</p></div>
        </div>

        <div className="hidden md:flex flex-grow items-center justify-center relative h-10">
          <div className="absolute inset-0 flex items-center"><div className="w-full h-0.5 bg-blue-900/50 dashed" /></div>
          <motion.div animate={{ x: [0, 150] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.2 }} className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] absolute left-0" />
        </div>

        <div className="flex flex-col items-center gap-4 w-full md:w-1/4">
          <div className="w-20 h-20 rounded-full bg-slate-900 border-4 border-emerald-500 flex items-center justify-center shadow-[0_0_40px_rgba(16,185,129,0.3)]">
            <Cpu className="w-8 h-8 text-emerald-400" />
          </div>
          <div className="text-center"><p className="text-emerald-400 font-extrabold">Quantum</p><p className="text-xs text-emerald-200">Device</p></div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 3. NEW: ANIMATED BENEFITS GRID
// ==========================================
const AnimatedBenefitsGrid = ({ benefits }: { benefits: any[] }) => {
  if (!benefits) return null;
  return (
    <div className="grid md:grid-cols-2 gap-6 mt-12">
      {benefits.map((benefit, i) => {
        const Icon = benefit.icon || CheckCircle2;
        return (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100/50 to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <Icon className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-extrabold text-slate-900 mb-3">{benefit.title}</h4>
            <p className="text-slate-600 font-medium leading-relaxed">{benefit.description}</p>
          </motion.div>
        )
      })}
    </div>
  );
};

// ==========================================
// 4. NEW: APPLICATIONS STAGGERED LIST
// ==========================================
const ApplicationsStaggeredList = ({ applications }: { applications: string[] }) => {
  if (!applications) return null;
  return (
    <div className="flex flex-wrap gap-3 mt-12 justify-center">
      {applications.map((app, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08, type: "spring" }}
          className="px-5 py-3 rounded-full bg-slate-100 text-slate-700 font-bold border border-slate-200 hover:bg-slate-800 hover:text-white hover:border-slate-800 transition-colors duration-300 cursor-default shadow-sm"
        >
          {app}
        </motion.div>
      ))}
    </div>
  );
};

// ==========================================
// 5. INTERACTIVE HOVER-GLOW SPECS TABLE
// ==========================================
const InteractiveSpecsTable = ({ specs }: { specs: any }) => {
  if (!specs) return null;
  const entries = Object.entries(specs);

  return (
    <div className="w-full bg-white rounded-[2.5rem] border border-slate-200 shadow-xl overflow-hidden mt-16">
      <div className="bg-slate-50 px-8 py-6 border-b border-slate-200">
        <h3 className="font-display text-2xl font-extrabold text-slate-900">Technical Specifications</h3>
      </div>
      <div className="flex flex-col">
        {entries.map(([param, spec], i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.3 }}
            className="group flex flex-col sm:flex-row sm:items-center justify-between px-8 py-5 border-b border-slate-100 hover:bg-blue-50 transition-colors duration-300 last:border-0 cursor-default relative overflow-hidden"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            <span className="text-sm font-extrabold text-slate-500 uppercase tracking-widest group-hover:text-blue-600 transition-colors w-1/3">
              {param}
            </span>
            <span className="text-lg font-bold text-slate-900 sm:w-2/3 sm:text-right mt-1 sm:mt-0">
              {String(spec)}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};


// ==========================================
// 6. MAIN PRODUCT DETAIL PAGE
// ==========================================
const CryoConnectBreakoutBoxPage = () => {
  const product = productsData["breakout-box"];
  const [currentImg, setCurrentImg] = useState(0);
  const images = product ? [product.heroImage, ...(product.gallery || [])].filter(Boolean) : [];
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [200, 300], [0, 1]);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => setCurrentImg((prev) => (prev + 1) % images.length), 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  if (!product) return <div className="min-h-screen bg-slate-50"><Navbar /></div>;

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-slate-50/50 text-slate-800 font-sans selection:bg-blue-200 selection:text-blue-900 relative">
        <Navbar />

        <div 
          className="sticky z-30 w-full bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm"
          style={{ top: '64px' }}
        >
          <div className="container py-3 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
              <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <span>/</span>
              <Link to="/products" className="hover:text-blue-600 transition-colors">Catalog</Link>
              <span>/</span>
              <span className="hidden sm:inline-block cursor-default">{product.category}</span>
              <span className="hidden sm:inline-block">/</span>
              <span className="text-blue-600 font-bold">{product.name}</span>
            </div>

            <motion.div style={{ opacity: headerOpacity }} className="flex items-center gap-4 pointer-events-none">
              <span className="hidden lg:block font-display font-bold text-slate-900">{product.name}</span>
              <button className="px-5 py-2.5 rounded-xl font-bold text-white bg-blue-600 text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all pointer-events-auto">
                Request Quote
              </button>
            </motion.div>
          </div>
        </div>
        
        <main>
          {/* HERO SECTION */}
          <section className="container pt-12 pb-16 lg:pb-24 overflow-hidden relative">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.05]">
                  {product.name}
                </h1>
                <p className="text-2xl text-blue-600 font-medium mb-8">{product.subtitle}</p>
                
                <div className="space-y-6 mb-12">
                  {product.overview?.map((p: string, i: number) => (
                    <p key={i} className="text-lg text-slate-600 leading-relaxed font-medium">{p}</p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <button className="group px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 to-blue-500 shadow-[0_10px_30px_-10px_rgba(37,99,235,0.4)] hover:shadow-[0_10px_40px_-10px_rgba(37,99,235,0.6)] transition-all duration-300 flex items-center gap-2 hover:-translate-y-1">
                    Get a Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="px-8 py-4 rounded-xl font-bold text-slate-700 bg-white border-2 border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 flex items-center gap-2 shadow-sm hover:-translate-y-1">
                    <Download className="w-5 h-5 text-blue-500" /> Full Specs
                  </button>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative w-full aspect-[4/3] lg:aspect-square">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-yellow-50 rounded-[3rem] transform rotate-3 scale-105 opacity-60 pointer-events-none" />
                <div className="relative w-full h-full rounded-[2.5rem] bg-white border border-slate-200 shadow-2xl overflow-hidden group">
                  <AnimatePresence mode="wait">
                    {images.length > 0 && (
                      <motion.img key={currentImg} src={images[currentImg]} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.6 }} className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" />
                    )}
                  </AnimatePresence>
                  <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
                    {images.map((_, idx) => (
                      <button key={idx} onClick={() => setCurrentImg(idx)} className={`w-2.5 h-2.5 rounded-full transition-all duration-300 shadow-sm ${idx === currentImg ? "bg-blue-600 w-8" : "bg-white/80 hover:bg-white"}`} />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* PERFORMANCE DASHBOARD + SIGNAL FLOW */}
          <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
            <div className="container relative z-10">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-blue-600 font-extrabold tracking-widest uppercase text-xs mb-3 block">Performance Analytics</span>
                <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">Pristine Signal Fidelity</h2>
                <p className="text-lg text-slate-600 font-medium">Explore the engineered quietude. See how CryoConnect suppresses noise, maintains stability, and guarantees minimal attenuation across the frequency spectrum.</p>
              </div>
              
              <div className="max-w-6xl mx-auto">
                <BreakoutBoxDashboard />
                <SignalFlowDiagram />
              </div>
            </div>
          </section>

          {/* NEW: APPLICATIONS & BENEFITS */}
          <section className="py-24 relative overflow-hidden">
            <div className="container max-w-5xl mx-auto">
              
              <div className="text-center mb-10">
                <span className="text-blue-600 font-extrabold tracking-widest uppercase text-xs mb-3 block">Capabilities</span>
                <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">Engineered Benefits</h2>
              </div>
              <AnimatedBenefitsGrid benefits={product.benefits} />

              <div className="text-center mt-20 mb-8">
                <h2 className="font-display text-3xl font-extrabold text-slate-900">Deployed Applications</h2>
              </div>
              <ApplicationsStaggeredList applications={product.applications} />

            </div>
          </section>

          {/* COLORFUL MASONRY TECHNICAL SPECS */}
          <section className="py-24 bg-slate-50 border-y border-slate-200 relative">
            <div className="container max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">Precision Engineered</h2>
                <p className="text-lg text-slate-600 font-medium">Hover over specifications to inspect parameters.</p>
              </div>
              
              <InteractiveSpecsTable specs={product.specs} />
            </div>
          </section>

          {/* SPEAK TO A SCIENTIST */}
          <section className="container py-24">
            <div className="bg-[#e2e8f0] rounded-[3rem] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 items-center justify-between shadow-sm border border-slate-300">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 border border-slate-300 text-red-600 text-xs font-extrabold tracking-widest uppercase mb-6 shadow-sm"><div className="w-2 h-2 rounded-full bg-red-600" /> Expert Consultation</div>
                <h2 className="font-display text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-[1.1]">Speak to a <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-600">Scientist</span></h2>
                <p className="text-lg text-slate-700 font-bold mb-6">CRYONANO's analytical scientists are available to answer your questions. Have a project you'd like to discuss? Give us a call or email us!</p>
                <p className="text-slate-600 font-medium mb-10">We are happy to talk to you about any of your applications and instruments. Please write us an email with your question, drawing requirements, etc., and we will get back to you as soon as possible.</p>
                <div className="flex flex-wrap gap-4"><button className="px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-red-600 to-red-500 shadow-[0_10px_20px_-10px_rgba(220,38,38,0.5)] hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center gap-2">Get a Quote <ArrowRight className="w-4 h-4" /></button><button className="px-8 py-4 rounded-xl font-bold text-slate-800 bg-white border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">Technical Support</button></div>
              </div>
              <div className="lg:w-5/12 flex flex-col gap-6 w-full"><div className="bg-white rounded-3xl p-8 flex items-center gap-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-white hover:border-slate-200 group"><div className="w-16 h-16 rounded-2xl border-2 border-slate-100 flex items-center justify-center shrink-0 bg-slate-50 group-hover:border-blue-100 group-hover:bg-blue-50 transition-colors"><Phone className="w-7 h-7 text-slate-700 group-hover:text-blue-600 transition-colors" /></div><div><p className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-1.5 group-hover:text-slate-600 transition-colors">Call Us Directly</p><p className="text-2xl font-extrabold text-slate-900">+91 97481 81485</p></div></div><div className="bg-white rounded-3xl p-8 flex items-center gap-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-white hover:border-slate-200 group"><div className="w-16 h-16 rounded-2xl border-2 border-slate-100 flex items-center justify-center shrink-0 bg-slate-50 group-hover:border-red-100 group-hover:bg-red-50 transition-colors"><Mail className="w-7 h-7 text-slate-700 group-hover:text-red-600 transition-colors" /></div><div><p className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-1.5 group-hover:text-slate-600 transition-colors">Email Engineering</p><p className="text-xl md:text-2xl font-extrabold text-slate-900">contact@cryonano.com</p></div></div></div>
            </div>
          </section>

          {/* BOTTOM NAVIGATION */}
          <section className="border-t border-slate-200 bg-white py-6">
            <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors px-4 py-2 rounded-lg hover:bg-blue-50">
                <ArrowLeft className="w-4 h-4" /> Back to Homepage
              </Link>
              <Link to="/products" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors px-4 py-2 rounded-lg hover:bg-blue-50">
                Return to Product Catalog <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default CryoConnectBreakoutBoxPage;