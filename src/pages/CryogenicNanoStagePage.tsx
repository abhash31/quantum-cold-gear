import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  ArrowLeft, ArrowRight, Download, Phone, Mail, Settings, 
  CheckCircle2, ThermometerSnowflake, Crosshair, Map, Shield, Move, Layers, MonitorPlay
} from "lucide-react";
import { Link } from "react-router-dom";
import { productsData } from "@/data/products";

// ==========================================
// 1. CRYO-THEMED TELEMETRY DASHBOARD
// ==========================================
const NanoStageTelemetry = () => {
  return (
    <div className="w-full bg-white rounded-[2.5rem] border border-slate-200 shadow-xl overflow-hidden font-sans flex flex-col relative">
      {/* Subtle Icy Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f9ff_1px,transparent_1px),linear-gradient(to_bottom,#f0f9ff_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
      
      <div className="bg-slate-50 border-b border-slate-200 px-8 py-5 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_12px_rgba(34,211,238,0.6)]" />
          <span className="text-slate-600 text-xs font-extrabold tracking-widest uppercase font-mono">Stage Telemetry: Active</span>
        </div>
        <div className="flex gap-4">
          <span className="text-xs font-bold font-mono text-cyan-700 bg-cyan-100 px-2 py-1 rounded">LN2 COOLING</span>
          <span className="text-xs font-bold font-mono text-blue-700 bg-blue-100 px-2 py-1 rounded">XY ENCODED</span>
        </div>
      </div>

      <div className="p-8 grid lg:grid-cols-2 gap-8 relative z-10">
        
        {/* GRAPH 1: Thermal Stability Tracker (Cooldown Curve) */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 relative flex flex-col shadow-sm hover:shadow-md transition-shadow overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-50 rounded-bl-full opacity-50 pointer-events-none" />
          
          <div className="flex justify-between items-start mb-6 relative z-10">
            <div>
              <p className="text-cyan-600 text-xs font-extrabold uppercase tracking-widest mb-1">Thermal Stability</p>
              <p className="text-3xl font-extrabold text-slate-900 tracking-tight">-195 <span className="text-sm text-slate-500 font-bold">°C</span></p>
            </div>
            <div className="p-3 bg-cyan-50 rounded-2xl">
              <ThermometerSnowflake className="w-6 h-6 text-cyan-600" />
            </div>
          </div>
          
          <div className="flex-grow relative w-full h-48 mt-2 border-l-2 border-b-2 border-slate-200">
            <div className="absolute inset-0 flex flex-col justify-between opacity-50 pointer-events-none">
              {[1,2,3,4,5].map(i => <div key={i} className="w-full h-px bg-slate-100" />)}
            </div>
            
            <svg viewBox="0 0 400 200" className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
              <line x1="0" y1="160" x2="400" y2="160" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 4" />
              
              <motion.path 
                d="M 0 20 Q 80 20, 120 160 T 400 160" 
                fill="none" stroke="#06b6d4" strokeWidth="4" 
                initial={{ pathLength: 0 }} 
                whileInView={{ pathLength: 1 }} 
                transition={{ duration: 2.5, ease: "easeOut" }} 
              />
              
              <motion.path 
                d="M 0 20 Q 80 20, 120 160 T 400 160 L 400 200 L 0 200 Z" 
                fill="rgba(6, 182, 212, 0.1)" 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                transition={{ duration: 1, delay: 1.5 }} 
              />
            </svg>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
              className="absolute right-4 bottom-12 flex items-center gap-2 bg-white/90 backdrop-blur px-2 py-1 rounded shadow-sm border border-cyan-100"
            >
              <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              <span className="text-[10px] font-bold text-cyan-700 uppercase tracking-wider">Temp Locked</span>
            </motion.div>
            
            <div className="absolute -left-8 top-0 text-[10px] font-bold text-slate-400">20°C</div>
            <div className="absolute -left-9 bottom-4 text-[10px] font-bold text-cyan-600">-195°C</div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-[10px] font-bold text-slate-500 tracking-widest uppercase">Time (Cooldown)</div>
          </div>
        </div>

        {/* GRAPH 2: Automated EM Grid Mapping (Radar/Scanner) */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 relative flex flex-col shadow-sm hover:shadow-md transition-shadow overflow-hidden">
          <div className="flex justify-between items-start mb-6 relative z-10">
            <div>
              <p className="text-blue-600 text-xs font-extrabold uppercase tracking-widest mb-1">XY Coordinate Tracking</p>
              <p className="text-3xl font-extrabold text-slate-900 tracking-tight">&lt; 50 <span className="text-sm text-slate-500 font-bold">nm res.</span></p>
            </div>
            <div className="p-3 bg-blue-50 rounded-2xl">
              <Crosshair className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          
          <div className="flex-grow w-full h-48 mt-2 bg-slate-50 border-2 border-slate-200 rounded-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:10%_10%]" />
            
            {[
              { top: "20%", left: "30%" }, { top: "60%", left: "50%" },
              { top: "30%", left: "70%" }, { top: "80%", left: "80%" }, { top: "40%", left: "20%" },
            ].map((pos, i) => (
              <div key={i} className="absolute w-2 h-2 rounded-full bg-slate-300" style={pos} />
            ))}

            <motion.div 
              animate={{ left: ["0%", "100%", "0%"] }}
              transition={{ duration: 4, ease: "linear", repeat: Infinity }}
              className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-blue-400 to-transparent shadow-[0_0_15px_rgba(96,165,250,0.8)] z-20"
            />

            {[
              { top: "20%", left: "30%", delay: 0.6 }, { top: "40%", left: "20%", delay: 0.4 },
              { top: "60%", left: "50%", delay: 1.0 }, { top: "30%", left: "70%", delay: 1.4 },
              { top: "80%", left: "80%", delay: 1.6 },
            ].map((pos, i) => (
              <motion.div 
                key={`glow-${i}`}
                className="absolute w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] z-10 transform -translate-x-0.5 -translate-y-0.5"
                style={{ top: pos.top, left: pos.left }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 4, repeat: Infinity, times: [pos.delay/2, (pos.delay+0.1)/2, (pos.delay+0.3)/2] }}
              />
            ))}

            <div className="absolute bottom-2 right-2 text-[10px] font-extrabold text-blue-700 bg-white/90 px-2 py-1 rounded shadow-sm border border-blue-100 flex items-center gap-1.5">
              <Map className="w-3 h-3" /> Auto-Mapping
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

// ==========================================
// 2. NEW DESIGN: FADED IMAGE CARD GRID (For Benefits)
// Based on the QuantumVolt "Core Engineering" screenshot
// ==========================================
const ImageCardBenefitsGrid = ({ benefits }: { benefits: any[] }) => {
  if (!benefits) return null;

  // Background images to match the scientific/microscopy theme
  const bgImages = [
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=600&auto=format&fit=crop",
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-12">
      {benefits.map((benefit, i) => {
        const Icon = benefit.icon || CheckCircle2;
        return (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative h-[22rem] bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* Blurred Faded Background Image */}
            <div className="absolute inset-0 opacity-[0.06] group-hover:opacity-[0.15] transition-opacity duration-500">
              <img src={bgImages[i % 4]} alt="" className="w-full h-full object-cover filter blur-[2px]" />
            </div>
            
            <div className="relative h-full p-8 flex flex-col justify-end z-10">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-6 h-6 text-cyan-600" />
              </div>
              <h4 className="text-xl font-extrabold text-slate-900 mb-3">{benefit.title}</h4>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">{benefit.description}</p>
            </div>
          </motion.div>
        )
      })}
    </div>
  );
};

// ==========================================
// 3. NEW DESIGN: BENTO BOX WORKFLOWS
// Replaces the pill tags with a numbered staggered grid
// ==========================================
const WorkflowBentoGrid = ({ applications }: { applications: string[] }) => {
  if (!applications) return null;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
      {applications.map((app, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-cyan-400 hover:shadow-md group transition-all duration-300 cursor-default"
        >
          <div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600 font-extrabold shrink-0 group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-300">
            0{i + 1}
          </div>
          <span className="font-bold text-slate-700 group-hover:text-slate-900 transition-colors">
            {app}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

// ==========================================
// 4. NEW DESIGN: COLORED BORDER SPECS GRID
// Based on the QuantumVolt "Technical Specifications" screenshot
// ==========================================
const GridSpecsTable = ({ specs }: { specs: any }) => {
  if (!specs) return null;
  const entries = Object.entries(specs);
  
  // Array of subtle border colors to rotate through
  const borderColors = [
    "border-cyan-100 hover:border-cyan-300", 
    "border-slate-200 hover:border-slate-400", 
    "border-blue-100 hover:border-blue-300"
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
      {entries.map(([param, spec], i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: (i % 3) * 0.1, duration: 0.4 }}
          className={`bg-white rounded-3xl p-8 border-2 ${borderColors[i % borderColors.length]} shadow-sm hover:shadow-lg transition-all duration-300 cursor-default`}
        >
          <span className="block text-[11px] font-extrabold text-slate-400 uppercase tracking-widest mb-3">
            {param}
          </span>
          <span className="block text-xl lg:text-2xl font-extrabold text-slate-900 leading-tight">
            {String(spec)}
          </span>
        </motion.div>
      ))}
    </div>
  );
};


// ==========================================
// 5. MAIN PAGE COMPONENT
// ==========================================
const CryogenicNanoStagePage = () => {
  const product = productsData["nano-stage"];
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
      <div className="min-h-screen bg-gradient-to-b from-white via-cyan-50/30 to-slate-50/50 text-slate-800 font-sans selection:bg-cyan-200 selection:text-cyan-900 relative">
        <Navbar />

        <div 
          className="sticky z-30 w-full bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm"
          style={{ top: '64px' }}
        >
          <div className="container py-3 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
              <Link to="/" className="hover:text-cyan-600 transition-colors">Home</Link>
              <span>/</span>
              <Link to="/products" className="hover:text-cyan-600 transition-colors">Catalog</Link>
              <span>/</span>
              <span className="hidden sm:inline-block cursor-default">{product.category}</span>
              <span className="hidden sm:inline-block">/</span>
              <span className="text-cyan-600 font-bold">{product.name}</span>
            </div>

            <motion.div style={{ opacity: headerOpacity }} className="flex items-center gap-4 pointer-events-none">
              <span className="hidden lg:block font-display font-bold text-slate-900">{product.name}</span>
              <button className="px-5 py-2.5 rounded-xl font-bold text-white bg-cyan-600 text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all pointer-events-auto">
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
                <p className="text-2xl text-cyan-600 font-medium mb-8">{product.subtitle}</p>
                
                <div className="space-y-6 mb-12">
                  {product.overview?.map((p: string, i: number) => (
                    <p key={i} className="text-lg text-slate-600 leading-relaxed font-medium">{p}</p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <button className="group px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-600 to-blue-500 shadow-[0_10px_30px_-10px_rgba(6,182,212,0.4)] hover:shadow-[0_10px_40px_-10px_rgba(6,182,212,0.6)] transition-all duration-300 flex items-center gap-2 hover:-translate-y-1">
                    Get a Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="px-8 py-4 rounded-xl font-bold text-slate-700 bg-white border-2 border-slate-200 hover:border-cyan-300 hover:bg-cyan-50 transition-all duration-300 flex items-center gap-2 shadow-sm hover:-translate-y-1">
                    <Download className="w-5 h-5 text-cyan-500" /> Full Specs
                  </button>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative w-full aspect-[4/3] lg:aspect-square">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-100 to-blue-50 rounded-[3rem] transform rotate-3 scale-105 opacity-60 pointer-events-none" />
                <div className="relative w-full h-full rounded-[2.5rem] bg-white border border-slate-200 shadow-2xl overflow-hidden group">
                  <AnimatePresence mode="wait">
                    {images.length > 0 && (
                      <motion.img key={currentImg} src={images[currentImg]} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.6 }} className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" />
                    )}
                  </AnimatePresence>
                  <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
                    {images.map((_, idx) => (
                      <button key={idx} onClick={() => setCurrentImg(idx)} className={`w-2.5 h-2.5 rounded-full transition-all duration-300 shadow-sm ${idx === currentImg ? "bg-cyan-500 w-8" : "bg-white/80 hover:bg-white"}`} />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* TELEMETRY SECTION */}
          <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
            <div className="container relative z-10">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-cyan-600 font-extrabold tracking-widest uppercase text-xs mb-3 block">Precision. Stability. Control.</span>
                <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">Absolute Stage Integrity</h2>
                <p className="text-lg text-slate-600 font-medium">Observe the extreme thermal locking mechanics and nanometer-scale precision grid mapping built specifically for Cryo-CLEM workflows.</p>
              </div>
              
              <div className="max-w-6xl mx-auto">
                <NanoStageTelemetry />
              </div>
            </div>
          </section>

          {/* NEW DESIGN: CAPABILITIES & APPLICATIONS */}
          <section className="py-24 relative overflow-hidden">
            <div className="container max-w-6xl mx-auto">
              
              <div className="text-center mb-10">
                <span className="text-cyan-600 font-extrabold tracking-widest uppercase text-xs mb-3 block">Optimised for Precision</span>
                <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">Core Benefits</h2>
              </div>
              <ImageCardBenefitsGrid benefits={product.benefits} />

              <div className="text-center mt-24 mb-8">
                <h2 className="font-display text-3xl font-extrabold text-slate-900">Supported Workflows</h2>
              </div>
              <WorkflowBentoGrid applications={product.applications} />

            </div>
          </section>

          {/* NEW DESIGN: GRID TECHNICAL SPECS */}
          <section className="py-24 bg-slate-50 border-y border-slate-200 relative">
            <div className="container max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">Technical Specifications</h2>
                <p className="text-lg text-slate-600 font-medium">Hover over specifications to inspect parameters.</p>
              </div>
              
              <GridSpecsTable specs={product.specs} />
            </div>
          </section>

          {/* SPEAK TO A SCIENTIST */}
          <section className="container py-24">
            <div className="bg-[#e2e8f0] rounded-[3rem] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 items-center justify-between shadow-sm border border-slate-300">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 border border-slate-300 text-red-600 text-xs font-extrabold tracking-widest uppercase mb-6 shadow-sm"><div className="w-2 h-2 rounded-full bg-red-600" /> Expert Consultation</div>
                <h2 className="font-display text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-[1.1]">Speak to a <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-cyan-600">Scientist</span></h2>
                <p className="text-lg text-slate-700 font-bold mb-6">CRYONANO's analytical scientists are available to answer your questions. Have a project you'd like to discuss? Give us a call or email us!</p>
                <p className="text-slate-600 font-medium mb-10">We are happy to talk to you about any of your applications and instruments. Please write us an email with your question, drawing requirements, etc., and we will get back to you as soon as possible.</p>
                <div className="flex flex-wrap gap-4"><button className="px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-red-600 to-red-500 shadow-[0_10px_20px_-10px_rgba(220,38,38,0.5)] hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center gap-2">Get a Quote <ArrowRight className="w-4 h-4" /></button><button className="px-8 py-4 rounded-xl font-bold text-slate-800 bg-white border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">Technical Support</button></div>
              </div>
              <div className="lg:w-5/12 flex flex-col gap-6 w-full"><div className="bg-white rounded-3xl p-8 flex items-center gap-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-white hover:border-slate-200 group"><div className="w-16 h-16 rounded-2xl border-2 border-slate-100 flex items-center justify-center shrink-0 bg-slate-50 group-hover:border-cyan-100 group-hover:bg-cyan-50 transition-colors"><Phone className="w-7 h-7 text-slate-700 group-hover:text-cyan-600 transition-colors" /></div><div><p className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-1.5 group-hover:text-slate-600 transition-colors">Call Us Directly</p><p className="text-2xl font-extrabold text-slate-900">+91 97481 81485</p></div></div><div className="bg-white rounded-3xl p-8 flex items-center gap-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-white hover:border-slate-200 group"><div className="w-16 h-16 rounded-2xl border-2 border-slate-100 flex items-center justify-center shrink-0 bg-slate-50 group-hover:border-red-100 group-hover:bg-red-50 transition-colors"><Mail className="w-7 h-7 text-slate-700 group-hover:text-red-600 transition-colors" /></div><div><p className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-1.5 group-hover:text-slate-600 transition-colors">Email Engineering</p><p className="text-xl md:text-2xl font-extrabold text-slate-900">contact@cryonano.com</p></div></div></div>
            </div>
          </section>

          {/* BOTTOM NAVIGATION */}
          <section className="border-t border-slate-200 bg-white py-6">
            <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-cyan-600 transition-colors px-4 py-2 rounded-lg hover:bg-cyan-50">
                <ArrowLeft className="w-4 h-4" /> Back to Homepage
              </Link>
              <Link to="/products" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-cyan-600 transition-colors px-4 py-2 rounded-lg hover:bg-cyan-50">
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

export default CryogenicNanoStagePage;