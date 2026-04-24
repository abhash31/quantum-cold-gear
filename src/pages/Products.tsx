// import { forwardRef, useState, useRef } from "react";
// import { Navbar } from "@/components/Navbar";
// import { Footer } from "@/components/Footer";
// import { PageTransition } from "@/components/PageTransition";
// import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
// import { ArrowLeft, ArrowRight, CheckCircle2, Cpu, Snowflake, Magnet, Microscope, Zap, Layers, Activity, Camera, Settings } from "lucide-react";
// import { Link } from "react-router-dom";

// // ==========================================
// // 1. DATA FROM BROCHURES
// // ==========================================
// const productCatalog = [
//   {
//     id: "quantum-volt", // Links to: /products/quantum-volt
//     category: "Quantum Hardware",
//     icon: Cpu,
//     title: "QuantumVolt™",
//     subtitle: "Precision Isolated Voltage Source",
//     description: "Ultra-low-noise gate and bias control delivering stable, precise control through fully isolated bipolar outputs for quantum experiments.",
//     features: ["Four Isolated Bipolar Outputs", "16-Bit DAC Resolution", "Native LabVIEW & Python support"],
//     image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1000&auto=format&fit=crop",
//   },
//   {
//     id: "cryo-clean", // Links to: /products/cryo-clean
//     category: "Quantum Hardware",
//     icon: Activity,
//     title: "CryoClean™",
//     subtitle: "Cryogenic RF Low-Pass Filters",
//     description: "Engineered to suppress high-frequency EMI before it reaches sensitive quantum devices. Ensures clean measurements down to 2K.",
//     features: ["~65 kHz-GHz noise suppression", "High Out-of-Band Attenuation", "4K/1K/Mixing chamber compatible"],
//     image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=1000&auto=format&fit=crop",
//   },
//   {
//     id: "breakout-box", // Links to: /products/breakout-box
//     category: "Quantum Hardware",
//     icon: Layers,
//     title: "Cryogenic Breakout Box",
//     subtitle: "Shielded Signal Integrity",
//     description: "High-performance, fully shielded breakout solution extending your cryostat's Faraday cage for clean multi-channel measurements.",
//     features: ["24 independent, shielded channels", "Integrated low-pass filters", "Twisted-pair EMI suppression"],
//     image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
//   },
//   {
//     id: "nano-stage",
//     category: "Cryogenics",
//     icon: Snowflake,
//     title: "Cryogenic NanoStage",
//     subtitle: "Vitrified Cryogenic Microscopy",
//     description: "A liquid-nitrogen-cooled nano-positioning platform engineered for Cryo-CLEM, cryo-fluorescence, and super-resolution imaging.",
//     features: ["Operating below -195°C (LN2)", "Motorised XY nano-positioning", "Devitrification prevention"],
//     image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
//   },


//   {
//     id: "2d-transfer-system", // MUST MATCH THE URL AND DATA ID
//     category: "Cryogenics",
//     icon: Layers, 
//     title: "2D Transfer System",
//     subtitle: "Deterministic Heterostructure Stacking",
//     description: "A precision-engineered motorized transfer system designed for the deterministic placement of 2D materials like Graphene and hBN.",
//     features: ["Sub-Micron XYZ & Theta", "Programmable Thermal Chuck", "Long-WD Optical Microscope"],
//     image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=1000&auto=format&fit=crop",
//   },
//   {
//     id: "psm-100",
//     category: "Cryogenics",
//     icon: Microscope,
//     title: "100 PSM Probe Station",
//     subtitle: "Wafer-Level Characterization",
//     description: "Cost-effective, manual wafer probe station built for reliable sub-micron electrical probing of nanoelectronic devices.",
//     features: ["Supports up to 100 mm wafers", "Up to 6 micro-positioners", "I-V and C-V device characterization"],
//     image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000&auto=format&fit=crop",
//   },
//   {
//     id: "dipstick",
//     category: "Cryogenics",
//     icon: Snowflake, // Import Snowflake from lucide-react if needed
//     title: "Cryogenic Dip Stick",
//     subtitle: "Precision Cryogenic Sample Control",
//     description: "A high-performance liquid nitrogen (LN2)-cooled probe station insert engineered for precision electrical, materials, and device characterization down to 77K.",
//     features: ["Operating range ~77 K to 325 K+", "OFHC copper cold stage", "Vacuum-compatible construction"],
//     image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=1000&auto=format&fit=crop",
//   },
//   {
//   id: "cryoscope-controller", // MUST MATCH the ID used in dynamic routing and data/products.ts
//   category: "Microscopes", // Matches the tab filter we created
//   icon: Microscope, // Import Microscope from lucide-react at the top
//   title: "CryoScope™ Hub",
//   subtitle: "Advanced Motorised Motion Controller",
//   description: "Deterministic sub-micron positioning for cryogenic microscopes, enabling complex CLEM workflows, stacking, and perfect twist-angle control.",
//   features: ["< 50nm Resolution", "Sub-Micron Relocation", " Twist-Angle Control"],
//   // Suggest using a high-res image of a complex precision stage or control rack
//   image: "https://images.unsplash.com/photo-1579316168884-60c70edc260f?q=80&w=1000&auto=format&fit=crop", 
//   },



//   {
//     id: "ultraclear-4k",
//     category: "Microscopes",
//     icon: Camera, // Import Camera from lucide-react
//     title: "UltraClear 4K Smart Microscope",
//     subtitle: "Precision Imaging Meets Intelligent Automation",
//     description: "Apochromatic optics combined with a 4K ultra-HD Sony sensor and integrated AI-assisted measurement for advanced research and industrial inspection.",
//     features: ["10:1 Intelligent Zoom", "4K @ 60fps Zero-Latency", "AI Edge Detection"],
//     image: "/images/ultraclear-hero.png", // Add your cropped hero image to public/images/
//   },
//   {
//     id: "2d-transfer-motorised",
//     category: "Microscopes", // or Microscopes if that is the tab
//     icon: Layers, // You need to import 'Layers' from lucide-react at top
//     title: "2D Material Transfer System",
//     subtitle: "Motorised Controller with Sub-micron Resolution",
//     description: "Fully motorised XY, Z, R, T stages with integrated high-resolution imaging for precise deterministic placement of graphene, TMDCs, and van der Waals heterostructures.",
//     features: ["Sub-micron XY Resolution", "±5° Motorised Tilt", "Automated Flake Mapping Option"],
//     image: "/images/2d-transfer-hero.png", // Crop the system image from image_0.jpg
//   },
//   {
//     id: "spectroscopy-magnet",
//     category: "Electromagnets",
//     icon: Magnet, // Make sure Magnet is imported from lucide-react at the top of Products.tsx
//     title: "Spectroscopy Electromagnet",
//     subtitle: "Precision Dipole Architecture for Optical Integration",
//     description: "Ultra-compact and lightweight dipole electromagnet delivering exceptional magnetic field strength, ideal for spectroscopy and optical research applications.",
//     features: ["Low-profile coil geometry", "Patent-pending closed-loop cooling", "High field stability with low noise"],
//     image: "/images/spectroscopy-electromagnet.png", // Replace with your actual image path
//   },
//   {
//     id: "bitter-magnet", // MUST MATCH URL SLUG: /products/bitter-magnet
//     category: "Electromagnets",
//     icon: Zap, 
//     title: "Bitter Type Electromagnet",
//     subtitle: "High-Field Air-Core DC Magnet",
//     description: "Engineered with stacked copper plates forming a helical current path to achieve exceptionally high current density and continuous operation up to 1.1 Tesla.",
//     features: ["Stacked Copper Plates", "De-ionized Water Cooling", "Up to 1000A Operating Current"],
//     image: "/images/bitter-magnet-hero.png", 
//   },
//   {
//     id: "emc2t-2-magnet", 
//     category: "Electromagnets",
//     icon: Magnet, 
//     title: "EMC2T- 2 Tesla Electromagnet",
//     subtitle: "Advanced Variable Gap C-Frame Dipole",
//     description: "Compact 2 Tesla variable-gap C-frame dipole electromagnet engineered for laboratory-scale magnetic field experiments, featuring water-cooled coils for continuous operation.",
//     features: ["Up to 2 Tesla Field Strength", "0–50 mm Variable Pole Gap", "Water-Cooled Copper Coils"],
//     image: "/images/emc2t-hero.png", 
//   },
//   // {
//   //   id: "ultraclear-4k",
//   //   category: "Smart Microscopy",
//   //   icon: Microscope,
//   //   title: "UltraClear 4K System",
//   //   subtitle: "Apochromatic Optical Excellence",
//   //   description: "Combines apochromatic optical precision with intelligent digital automation for exceptional clarity and measurement accuracy.",
//   //   features: ["4K Ultra HD Sony Sensor", "10:1 Intelligent Zoom System", "Integrated AI measurement tools"],
//   //   image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=1000&auto=format&fit=crop",
//   // },
//   // {
//   //   id: "power-converters",
//   //   category: "Power Electronics",
//   //   icon: Zap,
//   //   title: "AC-DC / DC-DC Systems",
//   //   subtitle: "High-Power Conversion",
//   //   description: "Industrial-grade power conversion systems engineered for maximum efficiency and stability in mission-critical applications.",
//   //   features: ["0.3kW to 30kW configurations", "Pure Sine Wave Inverters", "Custom Battery Charging solutions"],
//   //   image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
//   // },
// ];

// const categories = ["All Systems", "Quantum Hardware", "Cryogenics", "Microscopes", "Electromagnets"];

// // ==========================================
// // 2. ADVANCED 3D TILT CARD COMPONENT
// // CRITICAL FIX: Wrapped in forwardRef to prevent Framer Motion console errors
// // ==========================================
// const InteractiveProductCard = forwardRef<HTMLDivElement, { product: any }>(({ product, ...props }, ref) => {
//   const cardRef = useRef<HTMLDivElement>(null);
  
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const mouseXSpring = useSpring(x, { stiffness: 800, damping: 25 });
//   const mouseYSpring = useSpring(y, { stiffness: 800, damping: 25 });

//   const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
//   const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

//   const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
//   const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!cardRef.current) return;
//     const rect = cardRef.current.getBoundingClientRect();
//     const width = rect.width;
//     const height = rect.height;
    
//     const mouseX = e.clientX - rect.left;
//     const mouseY = e.clientY - rect.top;
    
//     const xPct = mouseX / width - 0.5;
//     const yPct = mouseY / height - 0.5;
    
//     x.set(xPct);
//     y.set(yPct);
//   };

//   const handleMouseLeave = () => {
//     x.set(0);
//     y.set(0);
//   };

//   const Icon = product.icon;

//   return (
//     <motion.div
//       ref={ref}
//       layout
//       initial={{ opacity: 0, scale: 0.9, y: 20 }}
//       animate={{ opacity: 1, scale: 1, y: 0 }}
//       exit={{ opacity: 0, scale: 0.9, y: 20 }}
//       transition={{ duration: 0.5, type: "spring" }}
//       style={{ perspective: "1200px" }}
//       className="h-full"
//       {...props}
//     >
//       <motion.div
//         ref={cardRef}
//         onMouseMove={handleMouseMove}
//         onMouseLeave={handleMouseLeave}
//         style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
//         className="group relative flex flex-col h-full bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-sm hover:border-blue-400/40 hover:shadow-[0_20px_50px_-15px_rgba(37,99,235,0.15)] transition-[border-color,box-shadow] duration-300 cursor-pointer"
//       >
//         {/* Dynamic Sheen/Glare Effect */}
//         <motion.div 
//           className="absolute inset-0 z-50 pointer-events-none mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//           style={{
//             background: "radial-gradient(circle at center, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 50%)",
//             left: glareX,
//             top: glareY,
//             width: "200%",
//             height: "200%",
//             transform: "translate(-50%, -50%)"
//           }}
//         />

//         {/* 3D Image Header (Parallax) */}
//         <div className="relative h-60 overflow-hidden bg-slate-100" style={{ transform: "translateZ(30px)" }}>
//           <motion.img 
//             src={product.image} 
//             alt={product.title} 
//             className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
//           />
//           <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.1)] pointer-events-none" />
          
//           <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-extrabold text-slate-800 uppercase tracking-wider shadow-sm flex items-center gap-1.5 transform-gpu group-hover:-translate-y-1 transition-transform duration-500">
//             <Icon className="w-4 h-4 text-blue-600" /> {product.category}
//           </div>
//         </div>

//         {/* Content Body (Pops out in 3D) */}
//         <div className="flex flex-col flex-grow p-6 md:p-8" style={{ transform: "translateZ(40px)" }}>
//           <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2 transform-gpu group-hover:translate-x-1 transition-transform duration-500">
//             {product.subtitle}
//           </p>
//           <h3 className="font-display text-2xl font-extrabold text-slate-900 mb-3 drop-shadow-sm group-hover:text-blue-600 transition-colors duration-300">
//             {product.title}
//           </h3>
//           <p className="text-sm text-slate-600 leading-relaxed font-medium mb-6 flex-grow group-hover:text-slate-800 transition-colors duration-300">
//             {product.description}
//           </p>

//           <div className="w-full h-px bg-slate-100 mb-6 group-hover:bg-blue-600/10 transition-colors duration-500" />

//           <ul className="space-y-3 mb-8">
//             {product.features.map((feature: string, i: number) => (
//               <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700 group-hover:translate-x-1 transition-transform duration-500" style={{ transitionDelay: `${i * 40}ms` }}>
//                 <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
//                 <span className="font-semibold group-hover:text-slate-900 transition-colors duration-300">{feature}</span>
//               </li>
//             ))}
//           </ul>

//           {/* Highly Animated Button - Routes based on Product ID */}
//           <Link to={`/products/${product.id}`} className="mt-auto block" style={{ transform: "translateZ(50px)" }}>
//             <button className="relative w-full py-4 rounded-xl font-bold overflow-hidden border-2 border-slate-200 text-slate-700 shadow-sm group/btn transition-all duration-300 hover:border-transparent">
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 bg-[length:200%_auto] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 animate-[gradient_2s_linear_infinite]" />
              
//               <span className="relative z-10 flex items-center justify-center gap-2 group-hover/btn:text-white transition-colors duration-300">
//                 View Specifications 
//                 <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 group-hover/btn:scale-110 transition-all duration-300" />
//               </span>
//             </button>
//           </Link>
//         </div>

//       </motion.div>
//     </motion.div>
//   );
// });

// InteractiveProductCard.displayName = "InteractiveProductCard";

// // ==========================================
// // 3. MAIN PAGE COMPONENT
// // ==========================================
// const Products = () => {
//   const [activeCategory, setActiveCategory] = useState("All Systems");

//   const filteredProducts = activeCategory === "All Systems" 
//     ? productCatalog 
//     : productCatalog.filter(p => p.category === activeCategory);

//   return (
//     <PageTransition>
//       <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-200 selection:text-blue-900">
//         <Navbar />
        
//         <main>
//           {/* BREADCRUMB NAVIGATION */}
//           <div className="bg-white border-b border-slate-200">
//             <div className="container py-3">
//               <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors w-fit">
//                 <ArrowLeft className="h-4 w-4" /> Back to Home
//               </Link>
//             </div>
//           </div>
          
//           {/* TIGHTER, MORE PROFESSIONAL HERO SECTION */}
//           <section className="relative pt-16 pb-12 lg:pt-20 lg:pb-16 bg-slate-50 overflow-hidden border-b border-slate-200">
//             {/* Subtle floating orbs */}
//             <motion.div 
//               animate={{ y: [0, -20, 0], scale: [1, 1.05, 1], rotate: [0, 2, 0] }}
//               transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//               className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-slate-200/50 rounded-full blur-[100px] pointer-events-none" 
//             />
//             <motion.div 
//               animate={{ y: [0, 20, 0], scale: [1, 1.1, 1], rotate: [0, -2, 0] }}
//               transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
//               className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-[100px] pointer-events-none" 
//             />
            
//             <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),linear-gradient(to_bottom,#00000004_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

//             <div className="container relative z-10 text-center max-w-4xl mx-auto">
//               <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
//                 <motion.div 
//                   initial={{ scale: 0.9, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   transition={{ delay: 0.1, duration: 0.4 }}
//                   className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-bold tracking-widest uppercase mb-5 shadow-sm"
//                 >
//                   <motion.div animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-2 h-2 rounded-full bg-blue-600" />
//                   Live Inventory Catalog
//                 </motion.div>

//                 <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-5">
//                   Precision <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Hardware</span> Catalog
//                 </h1>
                
//                 <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium max-w-3xl mx-auto">
//                   From isolating fragile qubits to generating 2 Tesla magnetic fields, explore the core instruments driving modern scientific discovery. CryoNano engineers scalable, high-fidelity infrastructure designed to integrate seamlessly into complex research and industrial workflows.
//                 </p>
//               </motion.div>
//             </div>
//           </section>

//           {/* STICKY FILTER BAR */}
//           <div className="sticky top-[var(--nav-height,72px)] z-40 bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm py-3 lg:py-4">
//             <div className="container">
//               <div className="flex overflow-x-auto hide-scrollbar gap-2 md:justify-center">
//                 {categories.map((cat) => (
//                   <button
//                     key={cat}
//                     onClick={() => setActiveCategory(cat)}
//                     className={`relative px-5 py-2.5 lg:px-6 lg:py-3 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 outline-none ${
//                       activeCategory === cat 
//                         ? "text-white shadow-md" 
//                         : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
//                     }`}
//                   >
//                     {activeCategory === cat && (
//                       <motion.div 
//                         layoutId="activeFilter" 
//                         className="absolute inset-0 bg-slate-800 rounded-full z-0" 
//                         transition={{ type: "spring", stiffness: 300, damping: 25 }}
//                       />
//                     )}
//                     <span className="relative z-10">{cat}</span>
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* 3D INTERACTIVE PRODUCT GRID */}
//           <section className="py-16 lg:py-20 container relative z-10">
//             <motion.div 
//               layout 
//               className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10"
//             >
//               <AnimatePresence mode="popLayout">
//                 {filteredProducts.map((product) => (
//                   <InteractiveProductCard key={product.id} product={product} />
//                 ))}
//               </AnimatePresence>
//             </motion.div>
//           </section>

//         </main>
//         <Footer />
//       </div>
//     </PageTransition>
//   );
// };

// export default Products;


























import { forwardRef, useState, useRef, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { 
  ArrowLeft, ArrowRight, CheckCircle2, Cpu, Snowflake, Magnet, 
  Microscope, Zap, Layers, Activity, Camera, Settings, Database, 
  Beaker, Factory, Waves
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";


// ==========================================
// 1. DATA FROM BROCHURES (RESEARCH / PRODUCTS)
// ==========================================
const productCatalog = [
  {
    id: "quantum-volt", 
    category: "Quantum Hardware",
    icon: Cpu,
    title: "QuantumVolt™",
    subtitle: "Precision Isolated Voltage Source",
    description: "Ultra-low-noise gate and bias control delivering stable, precise control through fully isolated bipolar outputs for quantum experiments.",
    features: ["Four Isolated Bipolar Outputs", "16-Bit DAC Resolution", "Native LabVIEW & Python support"],
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "cryo-clean", 
    category: "Quantum Hardware",
    icon: Activity,
    title: "CryoClean™",
    subtitle: "Cryogenic RF Low-Pass Filters",
    description: "Engineered to suppress high-frequency EMI before it reaches sensitive quantum devices. Ensures clean measurements down to 2K.",
    features: ["~65 kHz-GHz noise suppression", "High Out-of-Band Attenuation", "4K/1K/Mixing chamber compatible"],
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "breakout-box", 
    category: "Quantum Hardware",
    icon: Layers,
    title: "Cryogenic Breakout Box",
    subtitle: "Shielded Signal Integrity",
    description: "High-performance, fully shielded breakout solution extending your cryostat's Faraday cage for clean multi-channel measurements.",
    features: ["24 independent, shielded channels", "Integrated low-pass filters", "Twisted-pair EMI suppression"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "nano-stage",
    category: "Cryogenics",
    icon: Snowflake,
    title: "Cryogenic NanoStage",
    subtitle: "Vitrified Cryogenic Microscopy",
    description: "A liquid-nitrogen-cooled nano-positioning platform engineered for Cryo-CLEM, cryo-fluorescence, and super-resolution imaging.",
    features: ["Operating below -195°C (LN2)", "Motorised XY nano-positioning", "Devitrification prevention"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "2d-transfer-system", 
    category: "Cryogenics",
    icon: Layers, 
    title: "2D Transfer System",
    subtitle: "Deterministic Heterostructure Stacking",
    description: "A precision-engineered motorized transfer system designed for the deterministic placement of 2D materials like Graphene and hBN.",
    features: ["Sub-Micron XYZ & Theta", "Programmable Thermal Chuck", "Long-WD Optical Microscope"],
    image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "psm-100",
    category: "Cryogenics",
    icon: Microscope,
    title: "100 PSM Probe Station",
    subtitle: "Wafer-Level Characterization",
    description: "Cost-effective, manual wafer probe station built for reliable sub-micron electrical probing of nanoelectronic devices.",
    features: ["Supports up to 100 mm wafers", "Up to 6 micro-positioners", "I-V and C-V device characterization"],
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "dipstick",
    category: "Cryogenics",
    icon: Snowflake, 
    title: "Cryogenic Dip Stick",
    subtitle: "Precision Cryogenic Sample Control",
    description: "A high-performance liquid nitrogen (LN2)-cooled probe station insert engineered for precision electrical, materials, and device characterization down to 77K.",
    features: ["Operating range ~77 K to 325 K+", "OFHC copper cold stage", "Vacuum-compatible construction"],
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=1000&auto=format&fit=crop",
  },
  {
  id: "cryoscope-controller", 
  category: "Microscopes", 
  icon: Microscope, 
  title: "CryoScope™ Hub",
  subtitle: "Advanced Motorised Motion Controller",
  description: "Deterministic sub-micron positioning for cryogenic microscopes, enabling complex CLEM workflows, stacking, and perfect twist-angle control.",
  features: ["< 50nm Resolution", "Sub-Micron Relocation", " Twist-Angle Control"],
  image: "https://images.unsplash.com/photo-1579316168884-60c70edc260f?q=80&w=1000&auto=format&fit=crop", 
  },
  {
    id: "ultraclear-4k",
    category: "Microscopes",
    icon: Camera, 
    title: "UltraClear 4K Smart Microscope",
    subtitle: "Precision Imaging Meets Intelligent Automation",
    description: "Apochromatic optics combined with a 4K ultra-HD Sony sensor and integrated AI-assisted measurement for advanced research and industrial inspection.",
    features: ["10:1 Intelligent Zoom", "4K @ 60fps Zero-Latency", "AI Edge Detection"],
    image: "/images/ultraclear-hero.png", 
  },
  {
    id: "2d-transfer-motorised",
    category: "Microscopes", 
    icon: Layers, 
    title: "2D Material Transfer System",
    subtitle: "Motorised Controller with Sub-micron Resolution",
    description: "Fully motorised XY, Z, R, T stages with integrated high-resolution imaging for precise deterministic placement of graphene, TMDCs, and van der Waals heterostructures.",
    features: ["Sub-micron XY Resolution", "±5° Motorised Tilt", "Automated Flake Mapping Option"],
    image: "/images/2d-transfer-hero.png", 
  },
  {
    id: "spectroscopy-magnet",
    category: "Electromagnets",
    icon: Magnet, 
    title: "Spectroscopy Electromagnet",
    subtitle: "Precision Dipole Architecture for Optical Integration",
    description: "Ultra-compact and lightweight dipole electromagnet delivering exceptional magnetic field strength, ideal for spectroscopy and optical research applications.",
    features: ["Low-profile coil geometry", "Patent-pending closed-loop cooling", "High field stability with low noise"],
    image: "/images/spectroscopy-electromagnet.png", 
  },
  {
    id: "bitter-magnet", 
    category: "Electromagnets",
    icon: Zap, 
    title: "Bitter Type Electromagnet",
    subtitle: "High-Field Air-Core DC Magnet",
    description: "Engineered with stacked copper plates forming a helical current path to achieve exceptionally high current density and continuous operation up to 1.1 Tesla.",
    features: ["Stacked Copper Plates", "De-ionized Water Cooling", "Up to 1000A Operating Current"],
    image: "/images/bitter-magnet-hero.png", 
  },
  {
    id: "emc2t-2-magnet", 
    category: "Electromagnets",
    icon: Magnet, 
    title: "EMC2T- 2 Tesla Electromagnet",
    subtitle: "Advanced Variable Gap C-Frame Dipole",
    description: "Compact 2 Tesla variable-gap C-frame dipole electromagnet engineered for laboratory-scale magnetic field experiments, featuring water-cooled coils for continuous operation.",
    features: ["Up to 2 Tesla Field Strength", "0–50 mm Variable Pole Gap", "Water-Cooled Copper Coils"],
    image: "/images/emc2t-hero.png", 
  }
];

const researchCategories = ["All Systems", "Quantum Hardware", "Cryogenics", "Microscopes", "Electromagnets"];

// ==========================================
// 1.5 DATA FOR INDUSTRY / SERVICES
// ==========================================
const servicesCatalog = [
  {
    id: "ac-dc-system-low",
    category: "Converters",
    icon: Zap,
    title: "AC-DC System (Low Power)",
    subtitle: "0.3kW - 6kW Power Conversion",
    description: "High-efficiency AC to DC power conversion modules designed for stable, continuous industrial delivery with integrated thermal management.",
    features: ["0.3kW to 6kW Output", "High-efficiency Topology", "Industrial Grade Housing"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
  },
  {
  id: "ac-dc-system-high",
  category: "Converters",
  icon: Zap, // Or a specific heavy power icon if available
  title: "AC-DC System (High Power)",
  subtitle: "6 kW - 30 kW Scalable Solutions",
  description: "Rugged, parallel-redundant AC-DC power systems delivering master-synchronized high current for heavy industrial, defense, and data center loads.",
  features: ["Up to 30 kW Chassis", "Industrial 3-Phase Input", "N+1 Modular Redundancy"],
  image: "/images/ac-dc-high-hero.png", // Or the specific image provided for this tier
  },
  {
  id: "dc-dc-system-low",
  category: "Converters",
  icon: Zap, // Or a custom low-power icon
  title: "DC-DC Converter (Low Power)",
  subtitle: "Up to 5 kW Compact Solutions",
  description: "Space-optimized, high-efficiency DC-DC systems engineered for precise regulation in critical embedded instrumentation and telecom hubs.",
  features: ["<5kW Output", "Compact Bento Density", "±0.1% Stability"],
  image: "/images/dc-dc-low-hero.png", // Reference extracted brochure unit
  },
  {
  id: "dc-dc-system-high",
  category: "Converters",
  icon: Zap, // Or a custom high-power DC-DC icon if you create one
  title: "DC-DC Converter (High Power)",
  subtitle: "6 kW – 30 kW Solutions",
  description: "Rugged, N+1 redundant DC-DC systems for severe industrial and defense loads, featuring master-orchestrated load sharing.",
  features: ["30kW Chassis Density", "N+1 Redundancy", "MIL-STD Validated"],
  image: "/images/dc-dc-high-hero.png", // Or the extracted image
  },
  {
  id: "dc-ac-inverters",
  category: "Inverters",
  icon: Waves, 
  title: "DC-AC Pure Sine Wave Inverters",
  subtitle: "Up to 10 kW Conversion",
  description: "Convert DC power into high-quality, grid-grade AC output with minimal distortion for sensitive mission-critical electronics.",
  features: ["Pure Sine Wave", "Low EMI Design", "Up to 10 kW"],
  image: "/images/dc-ac-inverter-hero.png",
  },
  {
  id: "inverter-400hz-rugged",
  category: "Inverters",
  icon: Activity, 
  title: "400Hz Frequency Inverters",
  subtitle: "Precision AC Power for Aerospace",
  description: "Deliver crystal-controlled AC power with exceptional frequency accuracy and waveform purity for aerospace, defense, and testing applications.",
  features: ["400Hz Pure Sine Wave", "MIL-STD Validated", "Low EMI Design"],
  image: "/images/400hz-inverter-hero.png", // Or the exact path to your extracted image
  }
];

const industryCategories = ["All Solutions", "Converters", "Inverters", "Battery Chargers"];

// ==========================================
// 2. ADVANCED 3D TILT CARD COMPONENT (Upgraded Tilt)
// ==========================================
const InteractiveProductCard = forwardRef<HTMLDivElement, { product: any }>(({ product, ...props }, ref) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 800, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 800, damping: 25 });

  // UPGRADED TILT: Increased degrees from 5deg to 15deg for a much stronger 3D flick effect
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Icon = product.icon;

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ duration: 0.5, type: "spring" }}
      style={{ perspective: "1200px" }}
      className="h-full z-10 hover:z-20 relative"
      {...props}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative flex flex-col h-full bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-sm hover:border-blue-300 hover:shadow-2xl transition-[border-color,box-shadow] duration-300 cursor-pointer"
      >
        <motion.div 
          className="absolute inset-0 z-50 pointer-events-none mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: "radial-gradient(circle at center, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 50%)",
            left: glareX,
            top: glareY,
            width: "200%",
            height: "200%",
            transform: "translate(-50%, -50%)"
          }}
        />
        <div className="relative h-56 overflow-hidden bg-slate-100" style={{ transform: "translateZ(40px)" }}>
          <motion.img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.05)] pointer-events-none" />
          
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-extrabold text-slate-800 uppercase tracking-wider shadow-sm flex items-center gap-1.5 transform-gpu group-hover:-translate-y-1 transition-transform duration-500">
            <Icon className="w-4 h-4 text-blue-600" /> {product.category}
          </div>
        </div>
        <div className="flex flex-col flex-grow p-6 md:p-8" style={{ transform: "translateZ(50px)" }}>
          <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2 transform-gpu group-hover:translate-x-1 transition-transform duration-500">
            {product.subtitle}
          </p>
          <h3 className="font-display text-2xl font-extrabold text-slate-900 mb-3 drop-shadow-sm group-hover:text-blue-600 transition-colors duration-300">
            {product.title}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed font-medium mb-6 flex-grow group-hover:text-slate-800 transition-colors duration-300">
            {product.description}
          </p>
          <div className="w-full h-px bg-slate-100 mb-6 group-hover:bg-blue-600/10 transition-colors duration-500" />
          <ul className="space-y-3 mb-8">
            {product.features.map((feature: string, i: number) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700 group-hover:translate-x-1 transition-transform duration-500" style={{ transitionDelay: `${i * 40}ms` }}>
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-semibold group-hover:text-slate-900 transition-colors duration-300">{feature}</span>
              </li>
            ))}
          </ul>
          <Link to={`/products/${product.id}`} className="mt-auto block" style={{ transform: "translateZ(60px)" }}>
            <button className="relative w-full py-4 rounded-xl font-bold overflow-hidden border-2 border-slate-200 bg-white text-slate-700 shadow-sm group/btn transition-all duration-300 hover:border-blue-600 hover:shadow-md">
              <div className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover/btn:scale-x-100 origin-left transition-transform duration-500 ease-out" />
              <span className="relative z-10 flex items-center justify-center gap-2 group-hover/btn:text-white transition-colors duration-300">
                View Specifications 
                <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 group-hover/btn:scale-110 transition-all duration-300" />
              </span>
            </button>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
});
InteractiveProductCard.displayName = "InteractiveProductCard";

// ==========================================
// 3. FULL WIDTH AUTONOMOUS CAROUSEL WITH VIDEO BACKGROUNDS
// ==========================================
const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: "brand",
      label: "CRYONANO LABS",
      title: "CRYONANO",
      subtitle: "Engineering the Future of Quantum & Cryogenic Technology",
      description: "We design and manufacture the mission-critical hardware that modern science depends on—from isolated quantum voltage sources to high-field electromagnets and advanced power electronics.",
      icon: Database,
      // Video 1: Technical Quantum / Data nodes
      videoUrl: "https://cdn.pixabay.com/video/2020/07/31/46074-445474431_large.mp4" 
    },
    {
      id: "discover",
      label: "LIVE INVENTORY",
      title: "Discover the Catalog",
      subtitle: "Explore our complete range of precision instruments.",
      description: "Navigate through our highly engineered product lines. Every system is built to uncompromising standards to support the most demanding research and industrial environments.",
      icon: Settings,
      // Video 2: Clean room / Laboratory equipment vibe
      videoUrl: "https://cdn.pixabay.com/video/2023/03/26/156170-811776510_large.mp4" 
    },
    {
      id: "interface",
      label: "SEAMLESS NAVIGATION",
      title: "Explore the Interface",
      subtitle: "Research-Grade Hardware & Industrial Solutions",
      description: "Below you will find our comprehensive catalog divided into logical segments. Use the interactive buttons to seamlessly switch between our core Research products and Industrial Power solutions.",
      icon: Layers,
      // Video 3: High-tech electronics / Circuit lines
      videoUrl: "https://cdn.pixabay.com/video/2020/11/11/56885-481358989_large.mp4"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden border-b border-slate-200 bg-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {/* Video Background (Opacity slightly increased for better visibility) */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-luminosity pointer-events-none" 
            src={slides[currentSlide].videoUrl} 
          />
          
          {/* Light Overlay to ensure strict light theme compliance & text readability */}
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px]" />
          
          {/* <div className="container relative z-10 text-center max-w-4xl mx-auto px-4">
            <motion.div initial={{ y: 15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur border border-slate-200 text-slate-700 text-xs font-extrabold tracking-widest uppercase mb-6 shadow-sm">
                {(() => { const Icon = slides[currentSlide].icon; return <Icon className="w-4 h-4 text-blue-600" /> })()}
                {slides[currentSlide].label}
              </div>
              
              
              {slides[currentSlide].id === "brand" && (
                <div className="flex justify-center items-center gap-1.5 mb-3">
                  <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0 }} className="w-3.5 h-3.5 rounded-full bg-rose-500" />
                  <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }} className="w-3.5 h-3.5 rounded-full bg-rose-500" />
                  <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }} className="w-3.5 h-3.5 rounded-full bg-rose-500" />
                </div>
              )}

              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-4">
                {slides[currentSlide].title}
              </h1>
              
              <h2 className="text-xl md:text-2xl text-blue-600 font-extrabold mb-5">
                {slides[currentSlide].subtitle}
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed font-medium max-w-3xl mx-auto">
                {slides[currentSlide].description}
              </p>
            </motion.div>
          </div> */}



          <div className="container relative z-10 text-center max-w-4xl mx-auto px-4">
            <motion.div initial={{ y: 15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
              
              {/* FIX 1: Wrapped in a full-width flex container to force it on its own line */}
              <div className="w-full flex justify-center mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur border border-slate-200 text-slate-700 text-xs font-extrabold tracking-widest uppercase shadow-sm">
                  {(() => { const Icon = slides[currentSlide].icon; return <Icon className="w-4 h-4 text-blue-600" /> })()}
                  {slides[currentSlide].label}
                </div>
              </div>
              
              {/* Conditional Title Rendering for Brand Logo vs Regular Title */}
              {slides[currentSlide].id === "brand" ? (
                /* FIX 2: Outer container centers the logo block, inner container aligns dots to the left */
                <div className="w-full flex justify-center mb-6">
                  <div className="flex flex-col items-start">
                    <div className="flex gap-2 mb-1.5 ml-1">
                      <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0 }} className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-rose-500" />
                      <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }} className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-rose-500" />
                      <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }} className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-rose-500" />
                    </div>
                    <h1 className="font-sans text-6xl md:text-7xl lg:text-[5rem] font-black text-slate-900 leading-none tracking-[0.15em] uppercase">
                      {slides[currentSlide].title}
                    </h1>
                  </div>
                </div>
              ) : (
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6">
                  {slides[currentSlide].title}
                </h1>
              )}
              
              <h2 className="text-xl md:text-2xl text-blue-600 font-extrabold mb-5">
                {slides[currentSlide].subtitle}
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed font-medium max-w-3xl mx-auto">
                {slides[currentSlide].description}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Carousel Dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-20">
        {slides.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setCurrentSlide(i)}
            className={`h-2.5 rounded-full transition-all duration-500 ${currentSlide === i ? "w-10 bg-blue-600" : "w-2.5 bg-slate-300 hover:bg-slate-400"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};


// // ==========================================
// // 4. MAIN PAGE COMPONENT 
// // ==========================================
// const Products = () => {
//   const [primaryFilter, setPrimaryFilter] = useState<"RESEARCH" | "INDUSTRY">("RESEARCH");
//   const [activeCategory, setActiveCategory] = useState("All Systems");

//   useEffect(() => {
//     setActiveCategory(primaryFilter === "RESEARCH" ? "All Systems" : "All Solutions");
//   }, [primaryFilter]);

//   const isResearch = primaryFilter === "RESEARCH";
//   const currentCategories = isResearch ? researchCategories : industryCategories;
//   const currentCatalog = isResearch ? productCatalog : servicesCatalog;

//   const filteredProducts = activeCategory === "All Systems" || activeCategory === "All Solutions"
//     ? currentCatalog 
//     : currentCatalog.filter(p => p.category === activeCategory);

//   return (
//     <PageTransition>
//       <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-200 selection:text-blue-900 overflow-x-hidden">
//         <Navbar />
        
//         <main>
//           <div className="bg-white border-b border-slate-200">
//             <div className="container py-2.5">
//               <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors w-fit">
//                 <ArrowLeft className="h-4 w-4" /> Back to Home
//               </Link>
//             </div>
//           </div>
          
//           <HeroCarousel />

//           <section className="pt-8 pb-6 bg-white border-b border-slate-200 relative overflow-hidden">
//             <div className="container max-w-4xl mx-auto text-center relative z-10">
//               <span className="text-blue-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">Catalog Interface</span>
//               <h2 className="font-display text-4xl font-extrabold text-slate-900 mb-4">Precision Hardware Catalog</h2>
//               <p className="text-base text-slate-600 font-medium mb-8">
//                 Select your area of interest below. The <strong className="text-slate-900">Research</strong> catalog features our cryogenic, quantum, and microscopy instruments. The <strong className="text-slate-900">Industry</strong> catalog features our heavy-duty power electronics, converters, and industrial inverters.
//               </p>

//               <div className="flex flex-col sm:flex-row justify-center items-center gap-4 bg-slate-100 p-2 rounded-3xl w-fit mx-auto border border-slate-200">
//                 <button
//                   onClick={() => setPrimaryFilter("RESEARCH")}
//                   className={`relative w-48 h-14 rounded-2xl font-extrabold text-sm tracking-wide uppercase transition-all duration-300 flex items-center justify-center gap-2 outline-none ${
//                     primaryFilter === "RESEARCH" ? "text-white shadow-lg shadow-blue-500/30" : "text-slate-500 hover:text-slate-800 hover:bg-slate-200/50"
//                   }`}
//                 >
//                   {primaryFilter === "RESEARCH" && (
//                     <motion.div layoutId="toggleBg" className="absolute inset-0 bg-blue-600 rounded-2xl z-0" transition={{ type: "spring", stiffness: 300, damping: 25 }} />
//                   )}
//                   <Beaker className="w-5 h-5 relative z-10" />
//                   <span className="relative z-10">Research</span>
//                 </button>
                
//                 <button
//                   onClick={() => setPrimaryFilter("INDUSTRY")}
//                   className={`relative w-48 h-14 rounded-2xl font-extrabold text-sm tracking-wide uppercase transition-all duration-300 flex items-center justify-center gap-2 outline-none ${
//                     primaryFilter === "INDUSTRY" ? "text-white shadow-lg shadow-amber-500/30" : "text-slate-500 hover:text-slate-800 hover:bg-slate-200/50"
//                   }`}
//                 >
//                   {primaryFilter === "INDUSTRY" && (
//                     <motion.div layoutId="toggleBg" className="absolute inset-0 bg-amber-500 rounded-2xl z-0" transition={{ type: "spring", stiffness: 300, damping: 25 }} />
//                   )}
//                   <Factory className="w-5 h-5 relative z-10" />
//                   <span className="relative z-10">Industry</span>
//                 </button>
//               </div>
//             </div>
//           </section>

//           {/* STICKY FILTER BAR */}
//           <div className="sticky top-[var(--nav-height,72px)] z-40 bg-slate-50/90 backdrop-blur-xl border-b border-slate-200 shadow-sm py-3">
//             <div className="container">
//               <div className="flex overflow-x-auto hide-scrollbar gap-2 md:justify-center px-4">
//                 <AnimatePresence mode="popLayout">
//                   {currentCategories.map((cat) => {
//                     const isActive = activeCategory === cat;
//                     const activeBgColor = isResearch ? "bg-slate-800" : "bg-amber-500";
                    
//                     return (
//                       <motion.button
//                         key={cat}
//                         initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.2 }}
//                         onClick={() => setActiveCategory(cat)}
//                         className={`relative px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 outline-none ${
//                           isActive ? "text-white shadow-md" : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
//                         }`}
//                       >
//                         {isActive && (
//                           <motion.div layoutId="activeFilter" className={`absolute inset-0 ${activeBgColor} rounded-full z-0`} transition={{ type: "spring", stiffness: 300, damping: 25 }} />
//                         )}
//                         <span className="relative z-10">{cat}</span>
//                       </motion.button>
//                     )
//                   })}
//                 </AnimatePresence>
//               </div>
//             </div>
//           </div>

//           {/* 3D INTERACTIVE PRODUCT GRID */}
//           <section className="py-10 lg:py-12 container relative z-10 min-h-[50vh]">
//             <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
//               <AnimatePresence mode="popLayout">
//                 {filteredProducts.map((product) => (
//                   <InteractiveProductCard key={product.id} product={product} />
//                 ))}
//               </AnimatePresence>
//             </motion.div>
//           </section>

//         </main>
//         <Footer />
//       </div>
//     </PageTransition>
//   );
// };

// export default Products;

// ==========================================
// 4. MAIN PAGE COMPONENT 
// ==========================================
const Products = () => {
  const location = useLocation();

  // 1. Read state passed from Home Page links, otherwise default to RESEARCH / All Systems
  const initialFilter = location.state?.filter || "RESEARCH";
  const initialCategory = location.state?.category || "All Systems";

  const [primaryFilter, setPrimaryFilter] = useState<"RESEARCH" | "INDUSTRY">(initialFilter);
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  // 2. Added a useEffect to catch if location.state changes while already on the page
  useEffect(() => {
    if (location.state?.filter) setPrimaryFilter(location.state.filter);
    if (location.state?.category) setActiveCategory(location.state.category);
  }, [location.state]);

  const isResearch = primaryFilter === "RESEARCH";
  const currentCategories = isResearch ? researchCategories : industryCategories;
  const currentCatalog = isResearch ? productCatalog : servicesCatalog;

  const filteredProducts = activeCategory === "All Systems" || activeCategory === "All Solutions"
    ? currentCatalog 
    : currentCatalog.filter(p => p.category === activeCategory);

  return (
    <PageTransition>
      <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-200 selection:text-blue-900 overflow-x-hidden">
        <Navbar />
        
        <main>
          <div className="bg-white border-b border-slate-200">
            <div className="container py-2.5">
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors w-fit">
                <ArrowLeft className="h-4 w-4" /> Back to Home
              </Link>
            </div>
          </div>
          
          <HeroCarousel />

          <section className="pt-8 pb-6 bg-white border-b border-slate-200 relative overflow-hidden">
            <div className="container max-w-4xl mx-auto text-center relative z-10">
              <span className="text-blue-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">Catalog Interface</span>
              <h2 className="font-display text-4xl font-extrabold text-slate-900 mb-4">Precision Hardware Catalog</h2>
              <p className="text-base text-slate-600 font-medium mb-8">
                Select your area of interest below. The <strong className="text-slate-900">Research</strong> catalog features our cryogenic, quantum, and microscopy instruments. The <strong className="text-slate-900">Industry</strong> catalog features our heavy-duty power electronics, converters, and industrial inverters.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 bg-slate-100 p-2 rounded-3xl w-fit mx-auto border border-slate-200">
                
                {/* 3. Manually reset activeCategory when switching to Research */}
                <button
                  onClick={() => {
                    setPrimaryFilter("RESEARCH");
                    setActiveCategory("All Systems");
                  }}
                  className={`relative w-48 h-14 rounded-2xl font-extrabold text-sm tracking-wide uppercase transition-all duration-300 flex items-center justify-center gap-2 outline-none ${
                    primaryFilter === "RESEARCH" ? "text-white shadow-lg shadow-blue-500/30" : "text-slate-500 hover:text-slate-800 hover:bg-slate-200/50"
                  }`}
                >
                  {primaryFilter === "RESEARCH" && (
                    <motion.div layoutId="toggleBg" className="absolute inset-0 bg-blue-600 rounded-2xl z-0" transition={{ type: "spring", stiffness: 300, damping: 25 }} />
                  )}
                  <Beaker className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Research</span>
                </button>
                
                {/* 3. Manually reset activeCategory when switching to Industry */}
                <button
                  onClick={() => {
                    setPrimaryFilter("INDUSTRY");
                    setActiveCategory("All Solutions");
                  }}
                  className={`relative w-48 h-14 rounded-2xl font-extrabold text-sm tracking-wide uppercase transition-all duration-300 flex items-center justify-center gap-2 outline-none ${
                    primaryFilter === "INDUSTRY" ? "text-white shadow-lg shadow-amber-500/30" : "text-slate-500 hover:text-slate-800 hover:bg-slate-200/50"
                  }`}
                >
                  {primaryFilter === "INDUSTRY" && (
                    <motion.div layoutId="toggleBg" className="absolute inset-0 bg-amber-500 rounded-2xl z-0" transition={{ type: "spring", stiffness: 300, damping: 25 }} />
                  )}
                  <Factory className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Industry</span>
                </button>

              </div>
            </div>
          </section>

          {/* STICKY FILTER BAR */}
          <div className="sticky top-[var(--nav-height,72px)] z-40 bg-slate-50/90 backdrop-blur-xl border-b border-slate-200 shadow-sm py-3">
            <div className="container">
              <div className="flex overflow-x-auto hide-scrollbar gap-2 md:justify-center px-4">
                <AnimatePresence mode="popLayout">
                  {currentCategories.map((cat) => {
                    const isActive = activeCategory === cat;
                    const activeBgColor = isResearch ? "bg-slate-800" : "bg-amber-500";
                    
                    return (
                      <motion.button
                        key={cat}
                        initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.2 }}
                        onClick={() => setActiveCategory(cat)}
                        className={`relative px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 outline-none ${
                          isActive ? "text-white shadow-md" : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                        }`}
                      >
                        {isActive && (
                          <motion.div layoutId="activeFilter" className={`absolute inset-0 ${activeBgColor} rounded-full z-0`} transition={{ type: "spring", stiffness: 300, damping: 25 }} />
                        )}
                        <span className="relative z-10">{cat}</span>
                      </motion.button>
                    )
                  })}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* 3D INTERACTIVE PRODUCT GRID */}
          <section className="py-10 lg:py-12 container relative z-10 min-h-[50vh]">
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => (
                  <InteractiveProductCard key={product.id} product={product} />
                ))}
              </AnimatePresence>
            </motion.div>
          </section>

        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Products;