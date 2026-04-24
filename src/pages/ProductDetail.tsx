import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  ArrowLeft, ArrowRight, Download, Activity, 
  Phone, Mail, Settings, CircuitBoard, ChevronLeft, ChevronRight, TrendingDown
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { productsData } from "@/data/products";

// ==========================================
// 1. LIGHT THEME ANALYTICS DASHBOARD & TABLE
// ==========================================
const LightDashboard = () => {
  return (
    <div className="w-full bg-white/90 backdrop-blur-xl rounded-[2.5rem] border border-blue-100 shadow-[0_20px_60px_-15px_rgba(0,100,255,0.08)] overflow-hidden font-sans flex flex-col">
      <div className="bg-slate-50/80 border-b border-blue-100/50 px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_12px_rgba(16,185,129,0.6)]" />
          <span className="text-slate-600 text-xs font-bold tracking-widest uppercase font-mono">Live Telemetry: Active</span>
        </div>
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-200" />
          <div className="w-2.5 h-2.5 rounded-full bg-blue-200" />
          <div className="w-2.5 h-2.5 rounded-full bg-blue-200" />
        </div>
      </div>

      <div className="p-8">
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* CHART 1 */}
          <div className="bg-blue-50/40 border border-blue-100/60 rounded-3xl p-8 relative overflow-hidden flex flex-col shadow-sm">
            <div className="flex justify-between items-start mb-8">
              <div>
                <p className="text-blue-600 text-xs font-extrabold uppercase tracking-widest mb-2">Spectral Noise Density</p>
                <p className="text-3xl font-extrabold text-slate-800 tracking-tight">&lt; 2.0 <span className="text-sm text-slate-500 font-bold">µV p-p</span></p>
              </div>
              <div className="p-3 bg-blue-100 rounded-2xl">
                <Activity className="w-6 h-6 text-blue-600" />
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

          {/* CHART 2 */}
          <div className="bg-yellow-50/40 border border-yellow-200/60 rounded-3xl p-8 relative overflow-hidden flex flex-col shadow-sm">
            <div className="flex justify-between items-start mb-8">
              <div>
                <p className="text-yellow-600 text-xs font-extrabold uppercase tracking-widest mb-2">Thermal Drift (24h)</p>
                <p className="text-3xl font-extrabold text-slate-800 tracking-tight">&lt; 5.0 <span className="text-sm text-slate-500 font-bold">ppm/°C</span></p>
              </div>
              <div className="p-3 bg-yellow-100 rounded-2xl">
                <Settings className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
            
            <div className="flex-grow relative w-full h-36 mt-2">
              <div className="absolute inset-0 flex flex-col justify-between opacity-40 pointer-events-none">
                {[1,2,3,4,5].map(i => <div key={i} className="w-full h-px bg-yellow-300" />)}
              </div>
              <svg viewBox="0 0 400 150" className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                <motion.path d="M 0 75 L 50 72 L 100 76 L 150 74 L 200 75 L 250 73 L 300 77 L 350 75 L 400 75" fill="none" stroke="#eab308" strokeWidth="3" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 3, ease: "easeInOut" }} />
              </svg>
              <div className="absolute top-1/2 left-0 w-full h-16 bg-gradient-to-b from-yellow-400/10 to-transparent -translate-y-1/2 pointer-events-none" />
              <div className="absolute bottom-2 right-4 text-[10px] text-yellow-900 font-bold bg-yellow-300 px-3 py-1.5 rounded-lg shadow-sm">Deviation Tolerance</div>
            </div>
          </div>
        </div>

        {/* BOTTOM TABLE */}
        <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8">
          <div className="flex items-center gap-3 mb-6">
            <TrendingDown className="w-5 h-5 text-blue-600" />
            <h3 className="font-display text-lg font-bold text-slate-900">Comparative Performance Metrics</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="pb-4 text-xs font-extrabold text-slate-400 uppercase tracking-wider w-1/3">Parameter</th>
                  <th className="pb-4 text-xs font-extrabold text-blue-600 uppercase tracking-wider w-1/4">CryoNano Standard</th>
                  <th className="pb-4 text-xs font-extrabold text-slate-400 uppercase tracking-wider w-1/4">Industry Average</th>
                  <th className="pb-4 text-xs font-extrabold text-slate-400 uppercase tracking-wider w-1/6">Improvement</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-slate-100 hover:bg-white transition-colors">
                  <td className="py-4 font-semibold text-slate-700">10Hz Noise Density (µV p-p)</td>
                  <td className="py-4 font-extrabold text-slate-900">&lt; 2.0</td>
                  <td className="py-4 font-medium text-slate-500">15.0 - 25.0</td>
                  <td className="py-4 font-bold text-emerald-500 flex items-center gap-1">86% <TrendingDown className="w-3 h-3" /></td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-white transition-colors">
                  <td className="py-4 font-semibold text-slate-700">Thermal Drift (ppm/°C)</td>
                  <td className="py-4 font-extrabold text-slate-900">&lt; 5.0</td>
                  <td className="py-4 font-medium text-slate-500">15.0</td>
                  <td className="py-4 font-bold text-emerald-500 flex items-center gap-1">66% <TrendingDown className="w-3 h-3" /></td>
                </tr>
                <tr className="hover:bg-white transition-colors">
                  <td className="py-4 font-semibold text-slate-700">Ground Loop Isolation</td>
                  <td className="py-4 font-extrabold text-slate-900">&gt; 10 GΩ</td>
                  <td className="py-4 font-medium text-slate-500">Dependent on rack</td>
                  <td className="py-4 font-bold text-emerald-500">Absolute</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 2. CONTROLLED CORE ENGINEERING SLIDER
// ==========================================
const CoreEngineeringSlider = ({ features = [] }: { features?: any[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const itemsPerView = 3; 
  const maxIndex = Math.max(0, features.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    if (isHovered || features.length <= itemsPerView) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [isHovered, features.length, maxIndex]);

  if (!features || features.length === 0) return null;

  return (
    <div className="relative group/slider w-full max-w-[1400px] mx-auto">
      {features.length > itemsPerView && (
        <>
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/90 backdrop-blur border border-slate-200 shadow-xl flex items-center justify-center text-slate-600 hover:text-blue-600 hover:scale-110 transition-all opacity-0 group-hover/slider:opacity-100"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/90 backdrop-blur border border-slate-200 shadow-xl flex items-center justify-center text-slate-600 hover:text-blue-600 hover:scale-110 transition-all opacity-0 group-hover/slider:opacity-100"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      <div 
        className="overflow-hidden px-4 py-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div 
          className="flex gap-6"
          animate={{ x: `calc(-${currentIndex * 100}%/3 - ${currentIndex * 1.5}rem/3)` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {features.map((feat: any, i: number) => {
            const Icon = feat.icon || CircuitBoard;
            const cardImages = [
              "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=800&auto=format&fit=crop"
            ];
            const bgImage = cardImages[i % cardImages.length];

            return (
              <div key={i} className="relative w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] h-[450px] shrink-0 rounded-[2.5rem] overflow-hidden shadow-lg border border-slate-200 group/card cursor-pointer">
                <img src={bgImage} alt="Engineering Detail" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" />
                <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px] transition-opacity duration-500 group-hover/card:opacity-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-blue-800/80 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-end z-10 transition-transform duration-500 group-hover/card:-translate-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-6 group-hover/card:bg-blue-500 transition-colors duration-500">
                    <Icon className="w-7 h-7 text-blue-600 group-hover/card:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="font-display text-2xl font-extrabold text-slate-900 group-hover/card:text-white mb-3 transition-colors duration-500">
                    {feat.title}
                  </h3>
                  <p className="text-slate-600 font-medium group-hover/card:text-blue-100 transition-colors duration-500 line-clamp-3 group-hover/card:line-clamp-none">
                    {feat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {features.length > itemsPerView && (
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button 
              key={idx} 
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-8 bg-blue-600" : "w-2.5 bg-slate-300 hover:bg-slate-400"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};


// ==========================================
// 3. MAIN PRODUCT DETAIL PAGE
// ==========================================
const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? productsData[slug] : null;

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

        {/* BULLETPROOF FIX: We physically push the page content down by 76px 
          using inline styles to guarantee it sits under the Navbar.
        */}
        <div>
          
          {/* UPDATED: Breadcrumb is now the only element on the left side */}
          <div 
            className="sticky z-30 bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm"
            style={{ top: '64px' }}
          >
            <div className="container py-3 flex items-center justify-between">
              
              {/* Left: Pure Breadcrumb Trail */}
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
          
          {/* REDUCED GAP: Changed from pt-20 to pt-8 lg:pt-12 and removed internal breadcrumbs */}
          <main className="pt-8 lg:pt-12">
            
            {/* HERO SECTION */}
            <section className="container pb-16 lg:pb-24 overflow-hidden relative">
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

            {/* PERFORMANCE DASHBOARD */}
            <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
              <div className="container relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <span className="text-blue-600 font-extrabold tracking-widest uppercase text-xs mb-3 block">Performance Analytics</span>
                  <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">Unprecedented Signal Fidelity</h2>
                  <p className="text-lg text-slate-600 font-medium">See how our linear regulation architecture flattens the noise floor and maintains extreme thermal stability compared to standard systems.</p>
                </div>
                <div className="max-w-6xl mx-auto">
                  <LightDashboard />
                </div>
              </div>
            </section>

            {/* CONTROLLED CORE ENGINEERING SLIDER */}
            <section className="py-24 overflow-hidden">
              <div className="container mb-12 text-center max-w-3xl mx-auto">
                <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">Core Engineering</h2>
                <p className="text-lg text-slate-600 font-medium">Explore the architectural innovations driving our hardware. <span className="text-blue-600 font-bold">Use arrows to navigate or hover to inspect.</span></p>
              </div>
              
              <CoreEngineeringSlider features={product.features || []} />
            </section>

            {/* COLORFUL MASONRY TECHNICAL SPECS */}
            <section className="py-24 bg-slate-50 border-y border-slate-200 relative">
              <div className="container">
                <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900 mb-16 text-center">Technical Specifications</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
                  {Object.entries(product.specs || {}).map(([label, value], i) => {
                    const colors = [
                      "bg-white border-blue-100 hover:border-blue-400 hover:shadow-[0_10px_30px_-10px_rgba(59,130,246,0.2)]",
                      "bg-white border-slate-200 hover:border-slate-400 hover:shadow-[0_10px_30px_-10px_rgba(100,116,139,0.2)]",
                      "bg-white border-yellow-100 hover:border-yellow-400 hover:shadow-[0_10px_30px_-10px_rgba(234,179,8,0.2)]"
                    ];
                    const colorClass = colors[i % colors.length];

                    return (
                      <motion.div 
                        key={label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (i % 3) * 0.1, duration: 0.4 }}
                        className={`rounded-[2rem] p-8 border-2 transition-all duration-300 group cursor-default ${colorClass}`}
                      >
                        <span className="block text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-3 group-hover:text-slate-600 transition-colors">{label}</span>
                        <span className="block text-2xl font-extrabold text-slate-900">{String(value)}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* SPEAK TO A SCIENTIST */}
            <section className="container py-24">
              <div className="bg-[#e2e8f0] rounded-[3rem] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 items-center justify-between shadow-sm border border-slate-300">
                
                <div className="lg:w-1/2">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 border border-slate-300 text-red-600 text-xs font-extrabold tracking-widest uppercase mb-6 shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-red-600" /> Expert Consultation
                  </div>
                  <h2 className="font-display text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-[1.1]">
                    Speak to a <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-600">Scientist</span>
                  </h2>
                  <p className="text-lg text-slate-700 font-bold mb-6">
                    CRYONANO's analytical scientists are available to answer your questions. Have a project you'd like to discuss? Give us a call or email us!
                  </p>
                  <p className="text-slate-600 font-medium mb-10">
                    We are happy to talk to you about any of your applications and instruments. Please write us an email with your question, drawing requirements, etc., and we will get back to you as soon as possible.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <button className="px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-red-600 to-red-500 shadow-[0_10px_20px_-10px_rgba(220,38,38,0.5)] hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center gap-2">
                      Get a Quote <ArrowRight className="w-4 h-4" />
                    </button>
                    <button className="px-8 py-4 rounded-xl font-bold text-slate-800 bg-white border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                      Technical Support
                    </button>
                  </div>
                </div>

                <div className="lg:w-5/12 flex flex-col gap-6 w-full">
                  <div className="bg-white rounded-3xl p-8 flex items-center gap-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-white hover:border-slate-200 group">
                    <div className="w-16 h-16 rounded-2xl border-2 border-slate-100 flex items-center justify-center shrink-0 bg-slate-50 group-hover:border-blue-100 group-hover:bg-blue-50 transition-colors">
                      <Phone className="w-7 h-7 text-slate-700 group-hover:text-blue-600 transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-1.5 group-hover:text-slate-600 transition-colors">Call Us Directly</p>
                      <p className="text-2xl font-extrabold text-slate-900">+91 97481 81485</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-3xl p-8 flex items-center gap-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-white hover:border-slate-200 group">
                    <div className="w-16 h-16 rounded-2xl border-2 border-slate-100 flex items-center justify-center shrink-0 bg-slate-50 group-hover:border-red-100 group-hover:bg-red-50 transition-colors">
                      <Mail className="w-7 h-7 text-slate-700 group-hover:text-red-600 transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-1.5 group-hover:text-slate-600 transition-colors">Email Engineering</p>
                      <p className="text-xl md:text-2xl font-extrabold text-slate-900">contact@cryonano.com</p>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* BOTTOM NAVIGATION (Fixed above footer) */}
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
        </div>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default ProductDetail;