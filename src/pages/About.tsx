// import { Navbar } from "@/components/Navbar";
// import { Footer } from "@/components/Footer";
// import { motion } from "framer-motion";
// import { ArrowLeft, CircuitBoard, Microscope, Zap, Cpu, Atom, Gauge, FlaskConical, Magnet, BatteryCharging, Mail } from "lucide-react";
// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";

// const capabilities = [
//   {
//     icon: Atom,
//     title: "Quantum Instrument Design & Engineering",
//     items: [
//       "Isolated voltage sources & DACs for quantum transport",
//       "Cryogenic data acquisition & control systems",
//       "Cryogenic RF low-pass filters & shielded breakout boxes",
//       "Custom quantum measurement electronics",
//     ],
//   },
//   {
//     icon: Microscope,
//     title: "Cryogenic Microscopy & Nano-Characterization",
//     items: [
//       "Cryogenic nano-positioning stages",
//       "2D material transfer systems with motorised control",
//       "Cryogenic probe stations & dipstick systems",
//       "4K microscopy & optical characterization platforms",
//     ],
//   },
//   {
//     icon: Magnet,
//     title: "Electromagnet Systems",
//     items: [
//       "Spectroscopy & transport electromagnets",
//       "Bitter electromagnets for high-field research",
//       "Optical-access electromagnet configurations",
//       "Custom magnet solutions for research & industry",
//     ],
//   },
//   {
//     icon: Zap,
//     title: "Power Electronics & Conversion",
//     items: [
//       "AC-DC & DC-DC converters (0.3 kW – 30 kW)",
//       "DC-AC pure sine wave inverters",
//       "400 Hz frequency inverters",
//       "Battery chargers & custom power systems",
//     ],
//   },
// ];

// const markets = [
//   "Quantum Computing & Information",
//   "Condensed Matter Physics",
//   "Nanoelectronics & 2D Materials",
//   "Cryogenic Electronics Testing",
//   "Academic & Government Research Labs",
//   "Aerospace & Defence",
//   "Industrial Power Systems",
//   "Renewable Energy & EV Infrastructure",
// ];

// const About = () => {
//   return (
//     <div className="min-h-screen bg-background">
//       <Navbar />
//       <main>
//         {/* Breadcrumb */}
//         <div className="bg-secondary/50 border-b border-border">
//           <div className="container py-4">
//             <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
//               <ArrowLeft className="h-4 w-4" />
//               Back to Home
//             </Link>
//             <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
//               <Link to="/" className="hover:text-primary transition-colors">Home</Link>
//               <span>/</span>
//               <span className="text-foreground font-medium">About Us</span>
//             </div>
//           </div>
//         </div>

//         {/* Hero */}
//         <section className="container py-16 lg:py-24">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">
//                 Who We Are
//               </span>
//               <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
//                 Innovators in Quantum Instruments, Microscopy &amp; Power Electronics
//               </h1>
//               <p className="text-lg text-muted-foreground leading-relaxed mb-4">
//                 Our innovations enable our customers' breakthroughs through access to state-of-the-art quantum hardware, cryogenic microscopy platforms, and high-performance power electronics — driving the next generation of scientific discovery and industrial systems.
//               </p>
//               <p className="text-muted-foreground leading-relaxed">
//                 We are present across research and industry — from quantum computing laboratories to condensed matter physics, from nanoelectronics fabrication to aerospace power systems, and from academic institutions to defence and energy infrastructure.
//               </p>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.15 }}
//               className="bg-gradient-to-br from-primary/5 via-secondary to-primary/10 rounded-sm aspect-[4/3] flex items-center justify-center border border-border"
//             >
//               <div className="text-center p-8">
//                 <div className="flex justify-center gap-4 mb-6">
//                   {[Atom, Microscope, Zap].map((Icon, i) => (
//                     <div key={i} className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
//                       <Icon className="h-8 w-8 text-primary" />
//                     </div>
//                   ))}
//                 </div>
//                 <p className="font-display text-lg font-semibold text-foreground">Quantum Engineering</p>
//                 <p className="text-sm text-muted-foreground">Precision. Innovation. Reliability.</p>
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* Mission */}
//         <section className="bg-secondary/30 py-16 border-y border-border">
//           <div className="container max-w-4xl">
//             <motion.div
//               initial={{ opacity: 0, y: 15 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-6">Our Heritage & Mission</h2>
//               <div className="space-y-4">
//                 <p className="text-muted-foreground leading-relaxed">
//                   We employ some of the best minds in quantum physics and engineering who work closely with industry and academia to commercialise technologies of the future — developing high quality products, services and turnkey solutions produced through our world-class facilities that have real impact on scientific progress.
//                 </p>
//                 <p className="text-muted-foreground leading-relaxed">
//                   Our teams' passions have led to ground-breaking contributions in quantum transport measurement, cryogenic characterization of novel materials, and reliable power conversion for critical systems. This cultivates great pride in our people and drives the organisation to continually evolve.
//                 </p>
//                 <p className="text-muted-foreground leading-relaxed">
//                   We bring an assurance to our people and customers of quality, precision, integrity and technical excellence that is not easily matched — from prototype to production, from laboratory to field deployment.
//                 </p>
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* Core Capabilities */}
//         <section className="container py-16 lg:py-20">
//           <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">Core Capabilities</h2>
//           <p className="text-muted-foreground mb-10 max-w-2xl">
//             Our expertise spans three interconnected domains — quantum instrumentation, cryogenic microscopy, and power electronics — delivering integrated solutions for the most demanding applications.
//           </p>
//           <div className="grid md:grid-cols-2 gap-6">
//             {capabilities.map((cap, i) => {
//               const Icon = cap.icon;
//               return (
//                 <motion.div
//                   key={cap.title}
//                   initial={{ opacity: 0, y: 15 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: i * 0.1 }}
//                   className="border border-border rounded-sm p-6 bg-card hover:border-primary/30 transition-colors"
//                 >
//                   <div className="flex items-start gap-4 mb-4">
//                     <div className="rounded-sm bg-primary/10 p-2.5 shrink-0">
//                       <Icon className="h-5 w-5 text-primary" />
//                     </div>
//                     <h3 className="font-display font-semibold text-foreground">{cap.title}</h3>
//                   </div>
//                   <ul className="space-y-2 ml-12">
//                     {cap.items.map((item) => (
//                       <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
//                         <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </section>

//         {/* Markets */}
//         <section className="bg-secondary/30 py-16 border-y border-border">
//           <div className="container">
//             <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">Markets & Industries We Serve</h2>
//             <p className="text-muted-foreground mb-10 max-w-2xl">
//               Our solutions serve researchers, engineers and organisations across a wide range of sectors.
//             </p>
//             <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
//               {markets.map((market, i) => (
//                 <motion.div
//                   key={market}
//                   initial={{ opacity: 0, y: 10 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: i * 0.05 }}
//                   className="border border-border rounded-sm p-4 bg-card text-center hover:border-primary/30 transition-colors"
//                 >
//                   <p className="text-sm font-medium text-foreground">{market}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* CTA */}
//         <section className="bg-primary py-16">
//           <div className="container text-center">
//             <h2 className="font-display text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">
//               What Can We Help Your Organisation With Today?
//             </h2>
//             <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
//               Whether you need custom quantum instruments, cryogenic characterization systems, or high-power electronics — our engineering team is ready to help.
//             </p>
//             <div className="flex justify-center gap-4 flex-wrap">
//               <Link to="/">
//                 <Button size="lg" variant="secondary" className="font-semibold">
//                   Explore Products
//                 </Button>
//               </Link>
//               <Button size="lg" variant="outline" className="font-semibold border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
//                 <Mail className="h-4 w-4 mr-2" />
//                 Contact Us
//               </Button>
//             </div>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default About;




import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowLeft, ArrowRight, Microscope, Zap, Cpu, Atom, Magnet, Mail, ChevronRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

// 1. DATA: Industry-Related Image Cycling for the Hero Grid
const heroImages = [
  {
    type: "back",
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop", // LAB
    alt: "Precision Engineering Lab",
  },
  {
    type: "front",
    src: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1000&auto=format&fit=crop", // CHIP
    alt: "Quantum Chip Control",
  },
  {
    type: "back",
    src: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=1000&auto=format&fit=crop", // CRYOSTAT
    alt: "Cryogenic System View",
  },
  {
    type: "front",
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop", // CIRCUIT
    alt: "Power Control Board",
  },
];

// 2. DATA: Upgraded Interactive Capabilities
const capabilities = [
  {
    icon: Atom,
    title: "Quantum Instrument Design",
    items: [
      { text: "Isolated voltage sources & DACs", detail: "High-precision transport measurement gate control." },
      { text: "Cryogenic data acquisition & control", detail: "Real-time monitoring at millikelvin temperatures." },
      { text: "Cryogenic RF low-pass filters", detail: "Ensuring clean qubit state manipulation." },
    ],
    hoverBorder: "group-hover:border-cyan-500",
    hoverShadow: "group-hover:shadow-[0_20px_40px_-15px_rgba(34,211,238,0.25)]",
    traceColor: "rgba(34,211,238,1)",
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
  {
    icon: Microscope,
    title: "Nano-Characterization Systems",
    items: [
      { text: "Cryogenic nano-positioning stages", detail: "10nm resolution, 50mm travel at 4K." },
      { text: "2D transfer systems", detail: "Motorised controller with integrated 4K microscope." },
      { text: "Cryogenic probe stations & dipsticks", detail: "Versatile setups for novel material testing." },
    ],
    hoverBorder: "group-hover:border-blue-500",
    hoverShadow: "group-hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.25)]",
    traceColor: "rgba(59,130,246,1)",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Magnet,
    title: "Electromagnet Solutions",
    items: [
      { text: "Spectroscopy & Transport Magnet Systems", detail: "Up to 3 Tesla field with split-coil access." },
      { text: "Bitter electromagnets", detail: "High-field research configurations up to 20 Tesla." },
      { text: "Optical-access electromagnet setups", detail: "Interchangeable pole pieces and sample space." },
    ],
    hoverBorder: "group-hover:border-purple-500",
    hoverShadow: "group-hover:shadow-[0_20px_40px_-15px_rgba(168,85,247,0.25)]",
    traceColor: "rgba(168,85,247,1)",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: Zap,
    title: "Power Conversion Electronics",
    items: [
      { text: "AC-DC & DC-DC converters (0.3kW–30kW)", detail: "High-efficiency industrial-grade power." },
      { text: "DC-AC pure sine wave & 400Hz inverters", detail: "Rugged aerospace power systems." },
      { text: "Battery chargers & custom power systems", detail: "Configurable multi-channel solutions." },
    ],
    hoverBorder: "group-hover:border-primary",
    hoverShadow: "group-hover:shadow-[0_20px_40px_-15px_rgba(220,38,38,0.25)]",
    traceColor: "rgba(220,38,38,1)",
    iconBg: "bg-red-50",
    iconColor: "text-primary",
  },
];

const markets = [
  "Quantum Computing",
  "Condensed Matter Physics",
  "Nanoelectronics & 2D Materials",
  "Cryogenic Electronics Testing",
  "Aerospace & Defence",
  "Industrial Power Systems",
  "Academic & Government Research",
  "Renewable Energy Infrastructure",
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About = () => {
  // Automated Image cycling logic
  const [currentBack, setCurrentBack] = useState(0);
  const [currentFront, setCurrentFront] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      // Swaps images: Back comes forward, new image comes in back
      setCurrentBack((prev) => (prev + 2) % heroImages.length);
      setCurrentFront((prev) => (prev + 2) % heroImages.length);
    }, 6000); // Changes every 6 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-primary/20 selection:text-primary">
        <Navbar />
        
        <main>
          {/* Breadcrumb */}
          <div className="bg-white/80 border-b border-slate-200 backdrop-blur-md sticky top-[var(--nav-height)] z-40 shadow-sm">
            <div className="container py-2.5">
              <Link to="/" className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-primary transition-colors uppercase tracking-widest">
                <ArrowLeft className="h-3.5 w-3.5" />
                Back to Home
              </Link>
            </div>
          </div>

          {/* Hero Section */}
          <section className="relative container py-12 lg:py-16 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-10 items-center relative z-10">
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col gap-4"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-primary text-xs font-extrabold tracking-widest uppercase w-fit shadow-sm">
                  <Sparkles className="w-4 h-4" />
                  Who We Are
                </div>
                
                <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                  Innovators in <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600">
                    Quantum
                  </span> &{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">
                    Power
                  </span>
                </h1>
                
                <p className="text-lg text-slate-600 leading-relaxed max-w-xl border-l-4 border-primary/30 pl-5 rounded-l-sm">
                  Our innovations enable breakthroughs through access to state-of-the-art quantum hardware, cryogenic microscopy platforms, and high-performance power electronics.
                </p>
                <p className="text-slate-600 leading-relaxed max-w-xl pl-5">
                  We are present across research and industry — driving the next generation of scientific discovery, from nanoelectronics fabrication to aerospace power systems.
                </p>
              </motion.div>

              {/* AUTOMATED PICTURE GRID */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative h-[400px] lg:h-[450px] w-full"
              >
                {/* Image 1 (Back/Top Right) */}
                <div className="absolute top-0 right-0 w-[70%] h-[70%] rounded-3xl overflow-hidden border border-slate-200 shadow-xl z-10 bg-slate-900">
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={currentBack}
                      src={heroImages[currentBack].src} 
                      alt={heroImages[currentBack].alt}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8 }}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-bl from-cyan-900/10 to-transparent" />
                </div>
                
                {/* Image 2 (Front/Bottom Left) */}
                <div className="absolute bottom-0 left-0 w-[65%] h-[65%] rounded-3xl overflow-hidden border-4 border-white shadow-2xl z-20 bg-slate-900">
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={currentFront}
                      src={heroImages[currentFront].src} 
                      alt={heroImages[currentFront].alt}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8 }}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>
                  
                  {/* Floating Tech Badge */}
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md border border-slate-200 rounded-xl p-3.5 flex items-center gap-3.5 shadow-lg">
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30">
                      <Atom className="w-5 h-5 text-primary animate-[spin_8s_linear_infinite]" />
                    </div>
                    <div>
                      <p className="text-slate-900 font-extrabold font-display leading-none text-sm">Precision.</p>
                      <p className="text-[10px] text-primary mt-1.5 tracking-widest uppercase font-extrabold">Reliability.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </section>

          {/* Designed Mission Section */}
          <section className="relative py-16 lg:py-20 overflow-hidden group border-y border-slate-200">
            <div className="absolute inset-0 z-0 bg-slate-100">
              <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
              <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px]" />
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGwtb3BhY2l0eT0iMC4wNSIgZmlsbD0iIzQwNDA0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6bTIwIDIwaDIwdjIwSDIWMjB6TTAgMjBoMjB2MjBIMFYyMHoyMCAwaDIwdjIwaC0yMFYweiIvPjwvZz48L2c+PC9zdmc+')] opacity-20 pointer-events-none" />
            </div>

            <div className="container relative z-10 max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
                className="bg-white/90 backdrop-blur-2xl border border-white/50 rounded-3xl p-10 md:p-14 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-primary/20 rounded-tl-md" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-primary/20 rounded-br-md" />
                <div className="absolute -top-8 -left-8 text-[12rem] font-serif text-slate-200 select-none opacity-40">"</div>
                
                <h2 className="font-display text-3xl font-bold text-slate-900 mb-8 relative z-10">
                  Our Heritage & Mission
                </h2>
                
                <div className="space-y-6 relative z-10 text-slate-700 leading-relaxed font-light">
                  <p>
                    We employ some of the best minds in quantum physics and engineering who work closely with industry and academia to commercialise technologies of the future — developing high quality products, services and turnkey solutions produced through our world-class facilities that have real impact on scientific progress.
                  </p>
                  <p>
                    Our teams' passions have led to ground-breaking contributions in quantum transport measurement, cryogenic characterization of novel materials, and reliable power conversion for critical systems. This cultivates great pride in our people and drives the organisation to continually evolve.
                  </p>
                  <div className="h-px w-20 bg-gradient-to-r from-primary to-transparent my-8" />
                  <p className="text-slate-900 text-xl leading-relaxed font-semibold tracking-wide">
                    We bring an assurance to our people and customers of quality, precision, integrity and technical excellence that is not easily matched — <span className="text-primary">from prototype to production, from laboratory to field deployment.</span>
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Upgraded Professional Core Capabilities Section */}
          <section className="relative container py-16 lg:py-20 bg-slate-50">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">Core Capabilities</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                Our expertise spans four interconnected domains, delivering integrated solutions for the most demanding applications.
              </p>
            </div>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="grid md:grid-cols-2 gap-6 lg:gap-8"
            >
              {capabilities.map((cap) => {
                const Icon = cap.icon;
                return (
                  <motion.div
                    key={cap.title}
                    variants={itemVariants}
                    className={`group relative bg-white border border-slate-200 rounded-2xl p-8 overflow-hidden transition-all duration-500 hover:-translate-y-2 ${cap.hoverShadow} ${cap.hoverBorder}`}
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div 
                        className="absolute inset-[-50%] animate-[spin_4s_linear_infinite]" 
                        style={{ background: `conic-gradient(from 0deg, transparent 0 320deg, ${cap.traceColor} 360deg)` }}
                      />
                    </div>
                    {/* THE FIX: changed cap.bgIcon to cap.iconBg to match the data array */}
                    <div className="absolute inset-[2.5px] bg-white rounded-[13.5px] z-0 transition-colors duration-500 group-hover:bg-slate-50/50" />
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`relative flex items-center justify-center w-14 h-14 rounded-2xl ${cap.iconBg} border border-slate-100 group-hover:scale-110 transition-transform duration-500 shadow-inner`}>
                          <Icon className={`h-6 w-6 ${cap.iconColor} relative z-10`} />
                        </div>
                        <h3 className="font-display text-2xl font-extrabold text-slate-900 group-hover:text-slate-800 transition-colors">{cap.title}</h3>
                      </div>
                      
                      <ul className="space-y-4 stagger-list">
                        {cap.items.map((item, idx) => (
                          <motion.li 
                            key={item.text} 
                            variants={itemVariants}
                            transition={{ delay: idx * 0.05 }}
                            className="group/item relative flex flex-col p-4 bg-slate-50 border border-slate-200 rounded-xl hover:bg-white hover:border-slate-300 transition-all duration-300 cursor-default"
                          >
                            <div className="flex items-start gap-3">
                              <ChevronRight className={`h-4 w-4 shrink-0 mt-0.5 ${cap.iconColor} opacity-70 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all`} />
                              <span className="font-bold text-slate-800 group-hover/item:text-slate-950 transition-colors">{item.text}</span>
                            </div>
                            <p className="h-0 opacity-0 overflow-hidden group-hover/item:h-auto group-hover/item:opacity-100 group-hover/item:mt-2 transition-all duration-300 text-xs text-slate-600 pl-7 leading-relaxed font-medium">
                              {item.detail}
                            </p>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </section>

          {/* Markets */}
          <section className="relative py-16 bg-white border-y border-slate-200 overflow-hidden">
            <div className="container relative z-10 text-center mb-10">
              <h2 className="font-display text-3xl font-bold text-slate-900 mb-3">Markets We Serve</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Our solutions deliver precision hardware across mission-critical sectors globally.
              </p>
            </div>
            
            <div className="container relative z-10">
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-3.5 max-w-5xl mx-auto"
              >
                {markets.map((market) => (
                  <motion.div
                    key={market}
                    variants={itemVariants}
                    className="group relative px-6 py-3.5 rounded-xl bg-slate-50 border border-slate-200 cursor-default hover:border-cyan-400 hover:shadow-md transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <p className="relative z-10 text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
                      {market}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* CTA */}
          <section className="relative py-16 lg:py-20 bg-slate-50 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-primary/5" />
            
            <div className="container relative z-10 text-center max-w-2xl">
              <div className="w-16 h-16 mx-auto bg-white rounded-2xl border border-slate-200 flex items-center justify-center mb-6 shadow-sm">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              
              <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
                Ready to accelerate <br/>your research?
              </h2>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                Whether you need custom quantum instruments, cryogenic systems, or aerospace power electronics — our R&D team is ready to help.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-5 mt-4">
                <Link to="/" className="w-full sm:w-auto">
                  <button className="w-full group relative px-10 py-4 rounded-xl font-bold text-lg text-white bg-primary shadow-xl hover:shadow-[0_0_25px_rgba(220,38,38,0.5)] transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden hover:-translate-y-1">
                    <span className="relative z-10 flex items-center gap-2 drop-shadow-md">
                      Explore Systems <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <motion.div 
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 z-0"
                    />
                  </button>
                </Link>
                
                <a href="mailto:contact@cryonano.com" className="w-full sm:w-auto">
                  <button className="w-full group px-10 py-4 rounded-xl font-bold text-lg text-slate-700 bg-white border-2 border-slate-200 hover:bg-slate-50 hover:border-primary/50 hover:text-primary transition-all duration-300 flex items-center justify-center gap-3 shadow-sm hover:shadow-md hover:-translate-y-1">
                    <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    Contact Engineering
                  </button>
                </a>
              </div>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default About;