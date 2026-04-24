
import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  ArrowLeft, ArrowRight, Download, Phone, Mail, Crosshair, 
  Thermometer, Target, CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import { productsData } from "@/data/products";

// ==========================================
// 1. LIVE TELEMETRY: LIGHT THEME
// ==========================================
const TransferSystemTelemetry = () => {
  return (
    <div className="w-full bg-white rounded-[2.5rem] border border-slate-200 shadow-xl overflow-hidden font-sans flex flex-col relative">
      {/* Subtle light background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#f1f5f9_2px,transparent_2px)] bg-[size:24px_24px] pointer-events-none" />
      
      <div className="bg-slate-50 border-b border-slate-200 px-8 py-5 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-amber-400 animate-pulse shadow-[0_0_12px_rgba(251,191,36,0.6)]" />
          <span className="text-slate-600 text-xs font-extrabold tracking-widest uppercase font-mono">Transfer Diagnostics</span>
        </div>
        <div className="flex gap-4">
          <span className="text-xs font-bold font-mono text-amber-700 bg-amber-100 border border-amber-200 px-2 py-1 rounded shadow-sm">OPTICAL LOCK</span>
          <span className="text-xs font-bold font-mono text-blue-700 bg-blue-100 border border-blue-200 px-2 py-1 rounded shadow-sm">CHUCK ACTIVE</span>
        </div>
      </div>

      <div className="p-8 grid lg:grid-cols-2 gap-8 relative z-10">
        
        {/* GRAPH 1: Optical Targeting Reticle (Light Theme) */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 relative flex flex-col shadow-sm hover:shadow-md transition-shadow overflow-hidden">
          <div className="flex justify-between items-start mb-6 relative z-10">
            <div>
              <p className="text-amber-500 text-xs font-extrabold uppercase tracking-widest mb-1">Optical Alignment</p>
              <p className="text-3xl font-extrabold text-slate-900 tracking-tight">0.000 <span className="text-sm text-slate-500 font-bold">µm Error</span></p>
            </div>
            <div className="p-3 bg-amber-50 rounded-2xl border border-amber-100">
              <Crosshair className="w-6 h-6 text-amber-500" />
            </div>
          </div>
          
          <div className="flex-grow w-full h-48 mt-2 bg-slate-50 border-2 border-slate-200 rounded-xl relative overflow-hidden flex items-center justify-center">
            {/* Crosshairs */}
            <div className="absolute inset-0 flex items-center justify-center opacity-40">
              <div className="w-full h-px bg-amber-400" />
              <div className="h-full w-px bg-amber-400 absolute" />
              <div className="w-24 h-24 border border-amber-400 rounded-full absolute" />
            </div>

            {/* Simulated 2D Flake moving into position (Light Blue/Emerald) */}
            <motion.div 
              animate={{ 
                x: [-60, 0, 0, -60], 
                y: [40, 0, 0, 40],
                rotate: [-15, 0, 0, -15]
              }}
              transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
              className="absolute w-16 h-12 bg-blue-400/30 border-2 border-blue-400 opacity-80"
              style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}
            />

            {/* Target Reticle snapping onto it */}
            <motion.div 
              animate={{ scale: [1.5, 1, 1, 1.5], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 6, ease: "easeOut", repeat: Infinity }}
              className="absolute w-16 h-16 border-2 border-amber-500 border-dashed rounded-full"
            />

            <div className="absolute bottom-3 left-3 flex flex-col gap-1 text-[10px] font-bold font-mono text-slate-500">
              <motion.span animate={{ opacity: [1,1,1] }}>X: 0.000</motion.span>
              <motion.span animate={{ opacity: [1,1,1] }}>Y: 0.000</motion.span>
              <motion.span animate={{ opacity: [1,1,1] }}>θ: 0.01°</motion.span>
            </div>
          </div>
        </div>

        {/* GRAPH 2: Thermo-Vacuum Bonding Profile (Light Theme) */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 relative flex flex-col shadow-sm hover:shadow-md transition-shadow overflow-hidden">
          <div className="flex justify-between items-start mb-6 relative z-10">
            <div>
              <p className="text-blue-500 text-xs font-extrabold uppercase tracking-widest mb-1">Thermo-Vacuum Profile</p>
              <p className="text-3xl font-extrabold text-slate-900 tracking-tight">130 <span className="text-sm text-slate-500 font-bold">°C</span></p>
            </div>
            <div className="p-3 bg-blue-50 rounded-2xl border border-blue-100">
              <Thermometer className="w-6 h-6 text-blue-500" />
            </div>
          </div>
          
          <div className="flex-grow relative w-full h-48 mt-2 border-l-2 border-b-2 border-slate-200">
            {/* Grid Lines */}
            <div className="absolute inset-0 flex flex-col justify-between opacity-50 pointer-events-none">
              {[1,2,3,4].map(i => <div key={i} className="w-full h-px bg-slate-100" />)}
            </div>
            
            <svg viewBox="0 0 400 200" className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
              {/* Temperature Curve (Amber) */}
              <motion.path 
                d="M 0 180 L 100 180 C 150 180, 180 40, 250 40 L 400 40" 
                fill="none" stroke="#f59e0b" strokeWidth="3" 
                initial={{ pathLength: 0 }} 
                whileInView={{ pathLength: 1 }} 
                transition={{ duration: 2, ease: "easeInOut" }} 
              />
              {/* Temp Fill */}
              <motion.path 
                d="M 0 180 L 100 180 C 150 180, 180 40, 250 40 L 400 40 L 400 200 L 0 200 Z" 
                fill="rgba(245, 158, 11, 0.1)" 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                transition={{ duration: 1, delay: 1 }} 
              />

              {/* Vacuum Curve (Blue) */}
              <motion.path 
                d="M 0 20 L 200 20 C 220 20, 240 180, 300 180 L 400 180" 
                fill="none" stroke="#3b82f6" strokeWidth="3" strokeDasharray="5 5"
                initial={{ pathLength: 0 }} 
                whileInView={{ pathLength: 1 }} 
                transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }} 
              />
            </svg>
            
            <div className="absolute top-2 left-2 text-[10px] font-bold text-amber-600 bg-amber-50/80 backdrop-blur px-2.5 py-1 rounded shadow-sm">Heater (°C)</div>
            <div className="absolute bottom-2 right-2 text-[10px] font-bold text-blue-600 bg-blue-50/80 backdrop-blur px-2.5 py-1 rounded shadow-sm">Vacuum (mBar)</div>
          </div>
        </div>

      </div>
    </div>
  );
};

// ==========================================
// 2. NEW: UNIFORM CAPABILITIES GRID
// Replacing the asymmetrical Bento Box for perfect squares
// ==========================================
const CapabilitiesGrid = ({ benefits }: { benefits: any[] }) => {
  if (!benefits) return null;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto">
      {benefits.map((benefit, i) => {
        const Icon = benefit.icon || Target;
        return (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 shadow-sm hover:border-amber-300 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-start"
          >
            <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 border border-amber-100 shadow-sm">
              <Icon className="w-7 h-7" />
            </div>
            <h4 className="text-2xl font-extrabold text-slate-900 mb-3">{benefit.title}</h4>
            <p className="text-base text-slate-600 font-medium leading-relaxed">{benefit.description}</p>
          </motion.div>
        )
      })}
    </div>
  );
};

// ==========================================
// 3. VERTICAL PROCESS FLOW (Workflows)
// ==========================================
const VerticalProcessFlow = ({ applications }: { applications: string[] }) => {
  if (!applications) return null;
  return (
    <div className="mt-16 max-w-3xl mx-auto relative pl-8 md:pl-0">
      {/* Center Line for Desktop, Left Line for Mobile */}
      <div className="absolute top-0 bottom-0 left-8 md:left-1/2 w-1 bg-slate-200 transform md:-translate-x-1/2 rounded-full" />
      
      {applications.map((app, i) => {
        const isEven = i % 2 === 0;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative flex items-center justify-start md:justify-between w-full mb-12 last:mb-0 ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}
          >
            {/* Timeline Node */}
            <div className="absolute left-0 md:left-1/2 w-10 h-10 bg-white border-4 border-amber-400 rounded-full transform -translate-x-[18px] md:-translate-x-1/2 flex items-center justify-center shadow-lg z-10">
              <span className="text-sm font-bold text-amber-600">{i + 1}</span>
            </div>

            {/* Content Card */}
            <div className="w-full pl-8 md:pl-0 md:w-[45%]">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-200 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="font-bold text-slate-800 text-lg">{app}</span>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

// ==========================================
// 4. WIDE DATA-GRID SPECS TABLE
// ==========================================
const WideSpecsTable = ({ specs }: { specs: any }) => {
  if (!specs) return null;
  const entries = Object.entries(specs);

  return (
    <div className="w-full bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden mt-12">
      <div className="grid grid-cols-1 divide-y divide-slate-100">
        {entries.map(([param, spec], i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.3 }}
            className="group flex flex-col md:flex-row md:items-center px-8 py-5 hover:bg-amber-50/50 transition-colors duration-300"
          >
            <div className="w-full md:w-1/3 mb-2 md:mb-0">
              <span className="text-xs font-extrabold text-slate-400 uppercase tracking-widest group-hover:text-amber-600 transition-colors">
                {param}
              </span>
            </div>
            <div className="w-full md:w-2/3">
              <span className="text-lg font-bold text-slate-900">
                {String(spec)}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};


// ==========================================
// 5. MAIN PAGE COMPONENT
// ==========================================
const TwoDTransferSystemPage = () => {
  const product = productsData["2d-transfer-system"];
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
      <div className="min-h-screen bg-gradient-to-b from-white via-amber-50/20 to-slate-50/50 text-slate-800 font-sans selection:bg-amber-200 selection:text-amber-900 relative">
        <Navbar />

        <div 
          className="sticky z-30 w-full bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm"
          style={{ top: '64px' }}
        >
          <div className="container py-3 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
              <Link to="/" className="hover:text-amber-600 transition-colors">Home</Link>
              <span>/</span>
              <Link to="/products" className="hover:text-amber-600 transition-colors">Catalog</Link>
              <span>/</span>
              <span className="hidden sm:inline-block cursor-default">{product.category}</span>
              <span className="hidden sm:inline-block">/</span>
              <span className="text-amber-600 font-bold">{product.name}</span>
            </div>

            <motion.div style={{ opacity: headerOpacity }} className="flex items-center gap-4 pointer-events-none">
              <span className="hidden lg:block font-display font-bold text-slate-900">{product.name}</span>
              <button className="px-5 py-2.5 rounded-xl font-bold text-white bg-amber-500 text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all pointer-events-auto">
                Request Quote
              </button>
            </motion.div>
          </div>
        </div>
        
        <main className="pt-8 lg:pt-12">
          {/* HERO SECTION */}
          <section className="container pb-16 lg:pb-24 overflow-hidden relative">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.05]">
                  {product.name}
                </h1>
                <p className="text-2xl text-amber-500 font-medium mb-8">{product.subtitle}</p>
                
                <div className="space-y-6 mb-12">
                  {product.overview?.map((p: string, i: number) => (
                    <p key={i} className="text-lg text-slate-600 leading-relaxed font-medium">{p}</p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <button className="group px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-amber-500 to-amber-600 shadow-[0_10px_30px_-10px_rgba(245,158,11,0.4)] hover:shadow-[0_10px_40px_-10px_rgba(245,158,11,0.6)] transition-all duration-300 flex items-center gap-2 hover:-translate-y-1">
                    Get a Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="px-8 py-4 rounded-xl font-bold text-slate-700 bg-white border-2 border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all duration-300 flex items-center gap-2 shadow-sm hover:-translate-y-1">
                    <Download className="w-5 h-5 text-amber-500" /> Full Specs
                  </button>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative w-full aspect-[4/3] lg:aspect-square">
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-100 to-slate-200 rounded-[3rem] transform rotate-3 scale-105 opacity-60 pointer-events-none" />
                <div className="relative w-full h-full rounded-[2.5rem] bg-white border border-slate-200 shadow-2xl overflow-hidden group">
                  <AnimatePresence mode="wait">
                    {images.length > 0 && (
                      <motion.img key={currentImg} src={images[currentImg]} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.6 }} className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" />
                    )}
                  </AnimatePresence>
                  <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
                    {images.map((_, idx) => (
                      <button key={idx} onClick={() => setCurrentImg(idx)} className={`w-2.5 h-2.5 rounded-full transition-all duration-300 shadow-sm ${idx === currentImg ? "bg-amber-500 w-8" : "bg-white/80 hover:bg-white"}`} />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* TELEMETRY SECTION (Light Mode) */}
          <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
            <div className="container relative z-10">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-amber-500 font-extrabold tracking-widest uppercase text-xs mb-3 block">Sub-Micron Control</span>
                <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">Deterministic Placement</h2>
                <p className="text-lg text-slate-600 font-medium">Monitor real-time optical alignment and precise thermo-vacuum bonding profiles designed to eliminate trapped bubbles between atomic layers.</p>
              </div>
              
              <div className="max-w-6xl mx-auto">
                <TransferSystemTelemetry />
              </div>
            </div>
          </section>

          {/* UNIFORM GRID CAPABILITIES */}
          <section className="py-24 relative overflow-hidden bg-white">
            <div className="container max-w-6xl mx-auto">
              <div className="text-center mb-10">
                <span className="text-amber-500 font-extrabold tracking-widest uppercase text-xs mb-3 block">Design Architecture</span>
                <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">Core Capabilities</h2>
              </div>
              <CapabilitiesGrid benefits={product.benefits} />
            </div>
          </section>

          {/* VERTICAL TIMELINE WORKFLOWS */}
          <section className="py-24 relative overflow-hidden bg-slate-50 border-y border-slate-200">
            <div className="container max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-display text-3xl font-extrabold text-slate-900">Supported Workflows</h2>
                <p className="text-slate-500 mt-2">Automated routines for complex 2D heterostructures.</p>
              </div>
              <VerticalProcessFlow applications={product.applications} />
            </div>
          </section>

          {/* WIDE DATA-GRID TECHNICAL SPECS */}
          <section className="py-24 bg-white relative">
            <div className="container max-w-5xl mx-auto">
              <div className="mb-12">
                <h2 className="font-display text-4xl font-extrabold text-slate-900 mb-2">Technical Specifications</h2>
                <p className="text-lg text-slate-600 font-medium">Precision parameters for the 2D Transfer System.</p>
              </div>
              
              <WideSpecsTable specs={product.specs} />
            </div>
          </section>

          {/* SPEAK TO A SCIENTIST */}
          <section className="container py-24 border-t border-slate-200">
            <div className="bg-[#e2e8f0] rounded-[3rem] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 items-center justify-between shadow-sm border border-slate-300">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 border border-slate-300 text-slate-800 text-xs font-extrabold tracking-widest uppercase mb-6 shadow-sm"><div className="w-2 h-2 rounded-full bg-amber-500" /> Engineering Support</div>
                <h2 className="font-display text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-[1.1]">Speak to a <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">Specialist</span></h2>
                <p className="text-lg text-slate-700 font-bold mb-6">CRYONANO's systems engineers are available to answer your questions. Discuss your 2D stacking requirements with us today.</p>
                <div className="flex flex-wrap gap-4"><button className="px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-amber-500 to-amber-600 shadow-[0_10px_20px_-10px_rgba(245,158,11,0.5)] hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center gap-2">Get a Quote <ArrowRight className="w-4 h-4" /></button></div>
              </div>
              <div className="lg:w-5/12 flex flex-col gap-6 w-full">
                <div className="bg-white rounded-3xl p-8 flex items-center gap-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-white hover:border-slate-200 group">
                  <div className="w-16 h-16 rounded-2xl border-2 border-slate-100 flex items-center justify-center shrink-0 bg-slate-50 group-hover:border-amber-200 group-hover:bg-amber-50 transition-colors"><Phone className="w-7 h-7 text-slate-700 group-hover:text-amber-500 transition-colors" /></div>
                  <div><p className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-1.5 group-hover:text-slate-600 transition-colors">Call Us Directly</p><p className="text-2xl font-extrabold text-slate-900">+91 97481 81485</p></div>
                </div>
                <div className="bg-white rounded-3xl p-8 flex items-center gap-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-white hover:border-slate-200 group">
                  <div className="w-16 h-16 rounded-2xl border-2 border-slate-100 flex items-center justify-center shrink-0 bg-slate-50 group-hover:border-amber-200 group-hover:bg-amber-50 transition-colors"><Mail className="w-7 h-7 text-slate-700 group-hover:text-amber-500 transition-colors" /></div>
                  <div><p className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-1.5 group-hover:text-slate-600 transition-colors">Email Engineering</p><p className="text-xl md:text-2xl font-extrabold text-slate-900">contact@cryonano.com</p></div>
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

export default TwoDTransferSystemPage;