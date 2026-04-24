import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  ArrowLeft, ArrowRight, Download, Phone, Mail, 
  Activity, Cpu, Shield, Settings, Zap, CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import { productsData } from "@/data/products";

// ==========================================
// 1. LIVE TELEMETRY: WAFER MAP & I-V TRACER (Light Theme)
// ==========================================
const ProbeStationTelemetry = () => {
  // Generate a mock grid of "dies" for the wafer map
  const dies = Array.from({ length: 45 }).map((_, i) => ({
    id: i,
    delay: i * 0.15,
  }));

  return (
    <div className="w-full bg-white rounded-[2.5rem] border border-slate-200 shadow-xl overflow-hidden font-sans flex flex-col relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
      
      <div className="bg-slate-50 border-b border-slate-200 px-8 py-5 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-amber-400 animate-pulse shadow-[0_0_12px_rgba(251,191,36,0.6)]" />
          <span className="text-slate-600 text-xs font-extrabold tracking-widest uppercase font-mono">Measurement Telemetry</span>
        </div>
        <div className="flex gap-4">
          <span className="text-xs font-bold font-mono text-slate-500 bg-white border border-slate-200 px-2 py-1 rounded shadow-sm">CHUCK GROUNDED</span>
          <span className="text-xs font-bold font-mono text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-1 rounded shadow-sm">PROBE ACTIVE</span>
        </div>
      </div>

      <div className="p-8 grid lg:grid-cols-2 gap-8 relative z-10">
        
        {/* GRAPH 1: Live Wafer Map Scanner (Light) */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 relative flex flex-col shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
          <div className="flex justify-between items-start mb-6 relative z-10">
            <div>
              <p className="text-amber-500 text-xs font-extrabold uppercase tracking-widest mb-1">Wafer Topography</p>
              <p className="text-3xl font-extrabold text-slate-900 tracking-tight">100 <span className="text-sm text-slate-500 font-bold">mm Scan</span></p>
            </div>
            <div className="p-3 bg-amber-50 rounded-2xl border border-amber-100">
              <Cpu className="w-6 h-6 text-amber-500" />
            </div>
          </div>
          
          <div className="flex-grow w-full h-56 mt-2 relative flex items-center justify-center bg-slate-50 rounded-xl border border-slate-100">
            {/* The Wafer Outline */}
            <div className="absolute w-48 h-48 rounded-full border-4 border-slate-300 bg-slate-100 flex items-center justify-center overflow-hidden shadow-inner">
              {/* The "Flat" edge of a semiconductor wafer */}
              <div className="absolute bottom-0 w-full h-4 bg-slate-50 z-20 border-t-4 border-slate-300" />
              
              {/* The Dies Grid */}
              <div className="grid grid-cols-7 gap-1 p-4 relative z-10">
                {dies.map((die) => (
                  <motion.div 
                    key={die.id}
                    className="w-4 h-4 bg-slate-200 rounded-sm border border-slate-300/50"
                    animate={{ backgroundColor: ["#e2e8f0", "#fbbf24", "#34d399"] }} // Slate-200 -> Amber (Scanning) -> Emerald (Passed)
                    transition={{ duration: 1.5, delay: die.delay, ease: "linear", repeat: Infinity, repeatDelay: 6.75 }}
                  />
                ))}
              </div>

              {/* Scanning Laser Line */}
              <motion.div 
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 6.75, ease: "linear", repeat: Infinity }}
                className="absolute left-0 right-0 h-0.5 bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.6)] z-30"
              />
            </div>
            <div className="absolute bottom-2 right-2 text-[10px] font-bold font-mono text-emerald-700 bg-white border border-emerald-200 px-2 py-1 rounded shadow-sm">YIELD: 98.4%</div>
          </div>
        </div>

        {/* GRAPH 2: Real-Time I-V Curve Tracer (Light) */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 relative flex flex-col shadow-sm hover:shadow-md transition-shadow overflow-hidden">
          <div className="flex justify-between items-start mb-6 relative z-10">
            <div>
              <p className="text-blue-500 text-xs font-extrabold uppercase tracking-widest mb-1">Parametric Testing</p>
              <p className="text-3xl font-extrabold text-slate-900 tracking-tight">I-V <span className="text-sm text-slate-500 font-bold">Curve Trace</span></p>
            </div>
            <div className="p-3 bg-blue-50 rounded-2xl border border-blue-100">
              <Activity className="w-6 h-6 text-blue-500" />
            </div>
          </div>
          
          <div className="flex-grow relative w-full h-56 mt-2 border-l-2 border-b-2 border-slate-200">
            {/* Grid Lines */}
            <div className="absolute inset-0 flex flex-col justify-between opacity-50 pointer-events-none">
              {[1,2,3,4,5].map(i => <div key={i} className="w-full h-px bg-slate-100" />)}
            </div>
            <div className="absolute inset-0 flex justify-between opacity-50 pointer-events-none">
              {[1,2,3,4,5,6].map(i => <div key={i} className="h-full w-px bg-slate-100" />)}
            </div>
            
            <svg viewBox="0 0 400 200" className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
              {/* Origin Crosshairs */}
              <line x1="200" y1="0" x2="200" y2="200" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
              <line x1="0" y1="100" x2="400" y2="100" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />

              {/* Animated Diode I-V Curve */}
              <motion.path 
                d="M 0 100 L 150 100 Q 200 100, 220 90 Q 240 70, 260 20 L 280 -80" 
                fill="none" stroke="#f59e0b" strokeWidth="4" 
                initial={{ pathLength: 0 }} 
                whileInView={{ pathLength: 1 }} 
                transition={{ duration: 2, ease: "easeIn", repeat: Infinity, repeatDelay: 1 }} 
              />
            </svg>
            
            <div className="absolute top-0 -left-12 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Current (I)</div>
            <div className="absolute -bottom-6 right-0 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Voltage (V)</div>
          </div>
        </div>

      </div>
    </div>
  );
};

// ==========================================
// 2. STICKY-SCROLL FEATURE PANEL (Light Theme)
// ==========================================
const StickyScrollFeatures = ({ features }: { features: any[] }) => {
  if (!features) return null;
  return (
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
      {/* Left: Sticky Image / Title */}
      <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
        <span className="text-amber-500 font-extrabold tracking-widest uppercase text-xs mb-3 block">Mechanical Architecture</span>
        <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">Engineered for Absolute Stability.</h2>
        <p className="text-slate-600 font-medium">The PSM 100 is built on a rigid, drift-free foundation designed to eliminate environmental vibrations during sub-micron probing.</p>
      </div>

      {/* Right: Scrolling Feature Cards */}
      <div className="lg:w-2/3 flex flex-col gap-6">
        {features.map((feature, i) => {
          const Icon = feature.icon || Settings;
          return (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-slate-200 rounded-3xl p-8 lg:p-10 flex flex-col sm:flex-row gap-6 sm:items-center shadow-sm hover:shadow-lg hover:border-amber-300 transition-all duration-300"
            >
              <div className="w-16 h-16 shrink-0 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center">
                <Icon className="w-8 h-8 text-amber-500" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h4>
                <p className="text-slate-600 leading-relaxed font-medium">{feature.description}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  );
};

// ==========================================
// 3. LIGHT GLASSMORPHISM ACCESSORIES GRID
// ==========================================
const AccessoriesGrid = ({ accessories }: { accessories: any[] }) => {
  if (!accessories) return null;
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
      {accessories.map((acc, i) => {
        const Icon = acc.icon || Zap;
        return (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="relative bg-white rounded-[2rem] p-8 border border-slate-200 overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-100 rounded-full blur-3xl group-hover:bg-amber-200 transition-colors duration-500 pointer-events-none" />
            <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center mb-6 relative z-10 border border-amber-100 group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-7 h-7 text-amber-500" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3 relative z-10">{acc.title}</h4>
            <p className="text-slate-600 font-medium relative z-10">{acc.description}</p>
          </motion.div>
        )
      })}
    </div>
  );
};

// ==========================================
// 4. MAIN PAGE COMPONENT
// ==========================================
const ProbeStationPage = () => {
  const product = productsData["psm-100"];
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
      {/* LIGHT AIRY THEME */}
      <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-800 font-sans selection:bg-amber-200 selection:text-amber-900 relative">
        <Navbar />

        <div 
          className="sticky z-30 w-full bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm"
          style={{ top: '64px' }}
        >
          <div className="container py-3 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
              <Link to="/" className="hover:text-amber-500 transition-colors">Home</Link>
              <span>/</span>
              <Link to="/products" className="hover:text-amber-500 transition-colors">Catalog</Link>
              <span>/</span>
              <span className="hidden sm:inline-block cursor-default">{product.category}</span>
              <span className="hidden sm:inline-block">/</span>
              <span className="text-amber-500 font-bold">{product.name}</span>
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
                  <button className="group px-8 py-4 rounded-xl font-bold text-white bg-amber-500 shadow-[0_10px_20px_rgba(245,158,11,0.3)] hover:shadow-[0_10px_30px_rgba(245,158,11,0.5)] transition-all duration-300 flex items-center gap-2 hover:-translate-y-1">
                    Get a Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="px-8 py-4 rounded-xl font-bold text-slate-700 bg-white border-2 border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all duration-300 flex items-center gap-2 shadow-sm hover:-translate-y-1">
                    <Download className="w-5 h-5 text-amber-500" /> Full Specs
                  </button>
                </div>
              </motion.div>

              {/* Light Themed Image Container */}
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative w-full aspect-[4/3] lg:aspect-square">
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-100 to-white rounded-[3rem] transform rotate-3 scale-105 opacity-60 pointer-events-none" />
                <div className="relative w-full h-full rounded-[2.5rem] bg-white border border-slate-200 shadow-2xl overflow-hidden group">
                  <AnimatePresence mode="wait">
                    {images.length > 0 && (
                      <motion.img key={currentImg} src={images[currentImg]} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.6 }} className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" />
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </section>

          {/* LIGHT TELEMETRY SECTION */}
          <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
            <div className="container relative z-10">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-amber-500 font-extrabold tracking-widest uppercase text-xs mb-3 block">Sub-Micron Control</span>
                <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">Electrical Characterization</h2>
                <p className="text-lg text-slate-600 font-medium">Monitor real-time wafer scanning topography and non-destructive I-V curve traces across varying semiconductor devices.</p>
              </div>
              
              <div className="max-w-6xl mx-auto">
                <ProbeStationTelemetry />
              </div>
            </div>
          </section>

          {/* STICKY SCROLL FEATURES - LIGHT THEME */}
          <section className="py-24 relative overflow-hidden bg-slate-100">
            <div className="container max-w-7xl mx-auto">
              <StickyScrollFeatures features={product.features} />
            </div>
          </section>

          {/* CAPABILITIES LIST - LIGHT THEME */}
          <section className="py-24 relative overflow-hidden bg-white border-y border-slate-200">
            <div className="container max-w-5xl mx-auto text-center">
              <span className="text-amber-500 font-extrabold tracking-widest uppercase text-xs mb-3 block">Parametric Testing</span>
              <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900 mb-12">Measurement Capabilities</h2>
              <div className="flex flex-wrap gap-4 justify-center">
                {product.capabilities?.map((cap: string, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-700 font-semibold shadow-sm hover:border-amber-300 hover:bg-amber-50 transition-colors cursor-default"
                  >
                    <CheckCircle className="w-5 h-5 text-amber-500" /> {cap}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ACCESSORIES GRID - LIGHT THEME */}
          <section className="py-24 relative overflow-hidden bg-slate-50 border-b border-slate-200">
            <div className="container max-w-6xl mx-auto">
              <div className="text-center mb-10">
                <span className="text-amber-500 font-extrabold tracking-widest uppercase text-xs mb-3 block">Expansion</span>
                <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">Flexible Accessories</h2>
              </div>
              <AccessoriesGrid accessories={product.accessories} />
            </div>
          </section>

          {/* SPEAK TO A SCIENTIST - LIGHT THEME */}
          <section className="container py-24">
            <div className="bg-[#e2e8f0] rounded-[3rem] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 items-center justify-between shadow-sm border border-slate-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-100/50 to-transparent pointer-events-none" />
              
              <div className="lg:w-1/2 relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 border border-slate-300 text-slate-800 text-xs font-extrabold tracking-widest uppercase mb-6 shadow-sm"><div className="w-2 h-2 rounded-full bg-amber-500" /> Engineering Support</div>
                <h2 className="font-display text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-[1.1]">Speak to a <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">Specialist</span></h2>
                <p className="text-lg text-slate-700 font-medium mb-10">CRYONANO's systems engineers are available to answer your questions. Discuss your wafer testing requirements with us today.</p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-4 rounded-xl font-bold text-white bg-amber-500 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center gap-2">Get a Quote <ArrowRight className="w-4 h-4" /></button>
                </div>
              </div>

              <div className="lg:w-5/12 flex flex-col gap-6 w-full relative z-10">
                <div className="bg-white rounded-3xl p-8 flex items-center gap-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-white hover:border-amber-200 group">
                  <div className="w-16 h-16 rounded-2xl border border-slate-100 bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-amber-50 transition-colors"><Phone className="w-7 h-7 text-slate-500 group-hover:text-amber-500 transition-colors" /></div>
                  <div><p className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-1.5">Call Us Directly</p><p className="text-2xl font-extrabold text-slate-900">+91 97481 81485</p></div>
                </div>
                <div className="bg-white rounded-3xl p-8 flex items-center gap-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-white hover:border-amber-200 group">
                  <div className="w-16 h-16 rounded-2xl border border-slate-100 bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-amber-50 transition-colors"><Mail className="w-7 h-7 text-slate-500 group-hover:text-amber-500 transition-colors" /></div>
                  <div><p className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-1.5">Email Engineering</p><p className="text-xl md:text-2xl font-extrabold text-slate-900">contact@cryonano.com</p></div>
                </div>
              </div>
            </div>
          </section>

          {/* BOTTOM NAVIGATION */}
          <section className="border-t border-slate-200 bg-white py-6">
            <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-amber-500 transition-colors px-4 py-2 rounded-lg hover:bg-amber-50">
                <ArrowLeft className="w-4 h-4" /> Back to Homepage
              </Link>
              <Link to="/products" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-amber-500 transition-colors px-4 py-2 rounded-lg hover:bg-amber-50">
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

export default ProbeStationPage;