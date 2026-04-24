// import { useRef, useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Cpu, Snowflake, Magnet, Microscope, Zap, ArrowRight, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
// import { Link } from "react-router-dom";

// const categories = [
//   {
//     icon: Cpu,
//     title: "Quantum Hardware",
//     description: "Ultra-low noise instrumentation designed for quantum transport and qubit stabilization. Featuring isolated voltage sources and RF filtering.",
//     products: ["QuantumVolt™", "CryoConnect", "CryoClean™"],
//   },
//   {
//     icon: Snowflake,
//     title: "Cryogenics",
//     description: "Precision thermal control and nanometer-scale positioning from 77K to millikelvin environments. Essential for advanced materials research.",
//     products: ["NanoStage", "Probe Station", "Cryo Dipstick", "2D Transfer"],
//   },
//   {
//     icon: Magnet,
//     title: "Electromagnets",
//     description: "High-field air-core and dipole magnet systems engineered for stable continuous DC operation. Custom-configurable for spintronics.",
//     products: ["EMC2T Variable Gap", "Spectroscopy Dipole", "Bitter Coils"],
//   },
//   {
//     icon: Microscope,
//     title: "Microscopes",
//     description: "Apochromatic optical precision meets intelligent digital automation. True 4K UHD imaging with AI-assisted measurement workflows.",
//     products: ["UltraClear 4K", "CryoScope™ Hub", "Motorised 2D Transfer"],
//   },
//   {
//     icon: Zap,
//     title: "Industrial Power",
//     description: "Industrial-grade rugged power systems, high-power converters, and pure sine wave inverters designed for complex environments.",
//     products: ["AC-DC Converters", "DC-DC Systems", "400Hz Inverters"],
//   },
// ];

// export function ProductCategories() {
//   const scrollerRef = useRef<HTMLDivElement>(null);
//   const [autoScroll, setAutoScroll] = useState(true);
//   const [manualSpeed, setManualSpeed] = useState(0);

//   useEffect(() => {
//     let animationFrameId: number;

//     const scroll = () => {
//       if (scrollerRef.current) {
//         let currentSpeed = 0;
//         if (manualSpeed !== 0) {
//           currentSpeed = manualSpeed; 
//         } else if (autoScroll) {
//           currentSpeed = 1; 
//         }

//         if (currentSpeed !== 0) {
//           scrollerRef.current.scrollLeft += currentSpeed;

//           const halfWidth = scrollerRef.current.scrollWidth / 2;
//           if (scrollerRef.current.scrollLeft >= halfWidth) {
//             scrollerRef.current.scrollLeft = 0;
//           } else if (scrollerRef.current.scrollLeft <= 0 && currentSpeed < 0) {
//             scrollerRef.current.scrollLeft = halfWidth;
//           }
//         }
//       }
//       animationFrameId = requestAnimationFrame(scroll);
//     };

//     animationFrameId = requestAnimationFrame(scroll);
//     return () => cancelAnimationFrame(animationFrameId);
//   }, [autoScroll, manualSpeed]);

//   return (
//     <section className="relative pt-0 pb-24 bg-background overflow-hidden">
      
//       <div className="container relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.7 }}
//           className="mb-12 md:text-center"
//         >
//           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/80 border border-primary/20 text-primary text-xs font-extrabold tracking-widest uppercase mb-6 md:mx-auto shadow-[0_0_10px_rgba(var(--primary),0.1)]">
//             <Sparkles className="w-4 h-4" />
//             Core Capabilities
//           </div>
//           <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
//             Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">Extremes</span>
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl md:mx-auto leading-relaxed">
//             From stabilizing fragile qubits to powering industrial automation, our modular hardware architecture integrates seamlessly into your most critical workflows.
//           </p>
//         </motion.div>
//       </div>

//       <div className="relative w-full group/slider">
        
//         <button 
//           onMouseDown={() => setManualSpeed(-8)}
//           onMouseUp={() => setManualSpeed(0)}
//           onMouseLeave={() => setManualSpeed(0)}
//           onTouchStart={() => setManualSpeed(-8)}
//           onTouchEnd={() => setManualSpeed(0)}
//           className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-background/80 backdrop-blur-md border border-primary/30 text-primary opacity-0 group-hover/slider:opacity-100 hover:bg-primary hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:scale-110 hidden md:flex"
//         >
//           <ChevronLeft className="w-8 h-8" />
//         </button>
        
//         <button 
//           onMouseDown={() => setManualSpeed(8)}
//           onMouseUp={() => setManualSpeed(0)}
//           onMouseLeave={() => setManualSpeed(0)}
//           onTouchStart={() => setManualSpeed(8)}
//           onTouchEnd={() => setManualSpeed(0)}
//           className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-background/80 backdrop-blur-md border border-primary/30 text-primary opacity-0 group-hover/slider:opacity-100 hover:bg-primary hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:scale-110 hidden md:flex"
//         >
//           <ChevronRight className="w-8 h-8" />
//         </button>

//         <div 
//           ref={scrollerRef}
//           className="flex overflow-x-hidden w-full py-8 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] cursor-grab active:cursor-grabbing"
//           onMouseEnter={() => setAutoScroll(false)}
//           onMouseLeave={() => setAutoScroll(true)} 
//         >
//           {[...categories, ...categories].map((cat, i) => (
            
//             <div 
//               key={i} 
//               className="group relative w-[380px] shrink-0 p-[1px] mx-4 rounded-[2rem] overflow-hidden transition-transform duration-500 hover:-translate-y-3"
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-border via-background to-border group-hover:from-primary/60 group-hover:to-cyan-400/60 transition-colors duration-700" />
              
//               <div className="relative h-full bg-background/95 backdrop-blur-xl rounded-[2rem] p-8 flex flex-col items-center text-center z-10 shadow-2xl">
                
//                 <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
//                   <div className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-full animate-[spin_8s_linear_infinite] group-hover:border-primary/80 transition-colors duration-500" />
//                   <div className="absolute inset-3 bg-gradient-to-br from-primary/10 to-transparent rounded-full animate-pulse group-hover:from-primary/30 transition-colors duration-500" />
//                   <div className="relative w-12 h-12 bg-background border border-primary/40 rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 z-10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
//                     <cat.icon className="w-6 h-6 text-primary drop-shadow-[0_0_8px_rgba(var(--primary),0.8)]" />
//                   </div>
//                 </div>
                
//                 <h3 className="font-display text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
//                   {cat.title}
//                 </h3>
//                 <p className="text-muted-foreground leading-relaxed mb-8 flex-grow text-sm px-2">
//                   {cat.description}
//                 </p>

//                 <div className="flex flex-wrap justify-center gap-2 mb-10">
//                   {cat.products.map((p) => (
//                     <span 
//                       key={p} 
//                       className="text-xs bg-secondary/80 border border-border/50 text-foreground px-3 py-1.5 rounded-full font-semibold group-hover:border-primary/40 group-hover:bg-primary/5 transition-colors duration-300"
//                     >
//                       {p}
//                     </span>
//                   ))}
//                 </div>

//                 {/* THE ONLY CHANGE: Width reduced to 80%, centered, with a color-shifting hover effect */}
//                 <button className="group/btn mt-auto w-[80%] mx-auto py-3.5 rounded-xl font-bold text-white bg-primary border border-primary/50 shadow-md shadow-primary/30 hover:shadow-[0_0_20px_rgba(var(--primary),0.9),0_0_40px_rgba(var(--primary),0.6),0_0_60px_rgba(34,211,238,0.5)] hover:border-cyan-400/50 hover:bg-red-600 transition-all duration-500 flex items-center justify-center gap-2 overflow-hidden relative">
//                   <span className="relative z-10 flex items-center gap-2 drop-shadow-md">
//                     Explore Division <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
//                   </span>
//                   <motion.div 
//                     animate={{ x: ["-100%", "200%"] }}
//                     transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//                     className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 z-0"
//                   />
//                 </button>

//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




















import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Cpu, Snowflake, Magnet, Microscope, Zap, ArrowRight, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

// ADDED: 'filter' and 'targetCategory' to pass routing state
const categories = [
  {
    icon: Cpu,
    title: "Quantum Hardware",
    description: "Ultra-low noise instrumentation designed for quantum transport and qubit stabilization. Featuring isolated voltage sources and RF filtering.",
    products: ["QuantumVolt™", "CryoConnect", "CryoClean™"],
    filter: "RESEARCH",
    targetCategory: "Quantum Hardware"
  },
  {
    icon: Snowflake,
    title: "Cryogenics",
    description: "Precision thermal control and nanometer-scale positioning from 77K to millikelvin environments. Essential for advanced materials research.",
    products: ["NanoStage", "Probe Station", "Cryo Dipstick", "2D Transfer"],
    filter: "RESEARCH",
    targetCategory: "Cryogenics"
  },
  {
    icon: Magnet,
    title: "Electromagnets",
    description: "High-field air-core and dipole magnet systems engineered for stable continuous DC operation. Custom-configurable for spintronics.",
    products: ["EMC2T Variable Gap", "Spectroscopy Dipole", "Bitter Coils"],
    filter: "RESEARCH",
    targetCategory: "Electromagnets"
  },
  {
    icon: Microscope,
    title: "Microscopes",
    description: "Apochromatic optical precision meets intelligent digital automation. True 4K UHD imaging with AI-assisted measurement workflows.",
    products: ["UltraClear 4K", "CryoScope™ Hub", "Motorised 2D Transfer"],
    filter: "RESEARCH",
    targetCategory: "Microscopes"
  },
  {
    icon: Zap,
    title: "Industrial Power",
    description: "Industrial-grade rugged power systems, high-power converters, and pure sine wave inverters designed for complex environments.",
    products: ["AC-DC Converters", "DC-DC Systems", "400Hz Inverters"],
    filter: "INDUSTRY",
    targetCategory: "All Solutions"
  },
];

export function ProductCategories() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [autoScroll, setAutoScroll] = useState(true);
  const [manualSpeed, setManualSpeed] = useState(0);

  useEffect(() => {
    let animationFrameId: number;

    const scroll = () => {
      if (scrollerRef.current) {
        let currentSpeed = 0;
        if (manualSpeed !== 0) {
          currentSpeed = manualSpeed; 
        } else if (autoScroll) {
          currentSpeed = 1; 
        }

        if (currentSpeed !== 0) {
          scrollerRef.current.scrollLeft += currentSpeed;

          const halfWidth = scrollerRef.current.scrollWidth / 2;
          if (scrollerRef.current.scrollLeft >= halfWidth) {
            scrollerRef.current.scrollLeft = 0;
          } else if (scrollerRef.current.scrollLeft <= 0 && currentSpeed < 0) {
            scrollerRef.current.scrollLeft = halfWidth;
          }
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [autoScroll, manualSpeed]);

  return (
    <section className="relative pt-0 pb-24 bg-background overflow-hidden">
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-12 md:text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/80 border border-primary/20 text-primary text-xs font-extrabold tracking-widest uppercase mb-6 md:mx-auto shadow-[0_0_10px_rgba(var(--primary),0.1)]">
            <Sparkles className="w-4 h-4" />
            Core Capabilities
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
            Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">Extremes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl md:mx-auto leading-relaxed">
            From stabilizing fragile qubits to powering industrial automation, our modular hardware architecture integrates seamlessly into your most critical workflows.
          </p>
        </motion.div>
      </div>

      <div className="relative w-full group/slider">
        
        <button 
          onMouseDown={() => setManualSpeed(-8)}
          onMouseUp={() => setManualSpeed(0)}
          onMouseLeave={() => setManualSpeed(0)}
          onTouchStart={() => setManualSpeed(-8)}
          onTouchEnd={() => setManualSpeed(0)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-background/80 backdrop-blur-md border border-primary/30 text-primary opacity-0 group-hover/slider:opacity-100 hover:bg-primary hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:scale-110 hidden md:flex"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        
        <button 
          onMouseDown={() => setManualSpeed(8)}
          onMouseUp={() => setManualSpeed(0)}
          onMouseLeave={() => setManualSpeed(0)}
          onTouchStart={() => setManualSpeed(8)}
          onTouchEnd={() => setManualSpeed(0)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-background/80 backdrop-blur-md border border-primary/30 text-primary opacity-0 group-hover/slider:opacity-100 hover:bg-primary hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:scale-110 hidden md:flex"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        <div 
          ref={scrollerRef}
          className="flex overflow-x-hidden w-full py-8 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setAutoScroll(false)}
          onMouseLeave={() => setAutoScroll(true)} 
        >
          {[...categories, ...categories].map((cat, i) => (
            
            <div 
              key={i} 
              className="group relative w-[380px] shrink-0 p-[1px] mx-4 rounded-[2rem] overflow-hidden transition-transform duration-500 hover:-translate-y-3"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-border via-background to-border group-hover:from-primary/60 group-hover:to-cyan-400/60 transition-colors duration-700" />
              
              <div className="relative h-full bg-background/95 backdrop-blur-xl rounded-[2rem] p-8 flex flex-col items-center text-center z-10 shadow-2xl">
                
                <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
                  <div className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-full animate-[spin_8s_linear_infinite] group-hover:border-primary/80 transition-colors duration-500" />
                  <div className="absolute inset-3 bg-gradient-to-br from-primary/10 to-transparent rounded-full animate-pulse group-hover:from-primary/30 transition-colors duration-500" />
                  <div className="relative w-12 h-12 bg-background border border-primary/40 rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 z-10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <cat.icon className="w-6 h-6 text-primary drop-shadow-[0_0_8px_rgba(var(--primary),0.8)]" />
                  </div>
                </div>
                
                <h3 className="font-display text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {cat.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8 flex-grow text-sm px-2">
                  {cat.description}
                </p>

                <div className="flex flex-wrap justify-center gap-2 mb-10">
                  {cat.products.map((p) => (
                    <span 
                      key={p} 
                      className="text-xs bg-secondary/80 border border-border/50 text-foreground px-3 py-1.5 rounded-full font-semibold group-hover:border-primary/40 group-hover:bg-primary/5 transition-colors duration-300"
                    >
                      {p}
                    </span>
                  ))}
                </div>

                {/* UPDATED: Wrapped in Link, button width adjusted to w-full, Link wrapper takes the w-[80%] mx-auto */}
                <Link 
                  to="/products" 
                  state={{ filter: cat.filter, category: cat.targetCategory }}
                  className="mt-auto w-[80%] mx-auto block"
                >
                  <button className="group/btn w-full py-3.5 rounded-xl font-bold text-white bg-primary border border-primary/50 shadow-md shadow-primary/30 hover:shadow-[0_0_20px_rgba(var(--primary),0.9),0_0_40px_rgba(var(--primary),0.6),0_0_60px_rgba(34,211,238,0.5)] hover:border-cyan-400/50 hover:bg-red-600 transition-all duration-500 flex items-center justify-center gap-2 overflow-hidden relative">
                    <span className="relative z-10 flex items-center gap-2 drop-shadow-md">
                      Explore Division <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                    </span>
                    <motion.div 
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 z-0"
                    />
                  </button>
                </Link>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}