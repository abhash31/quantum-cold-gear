// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowRight, Play, Maximize } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export function HeroSection() {
//   const [currentMedia, setCurrentMedia] = useState(0);

//   const mediaPlaceholders = [
//     "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-background to-background",
//     "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-500/10 via-background to-background",
//     "bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/10 via-background to-background",
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentMedia((prev) => (prev + 1) % mediaPlaceholders.length);
//     }, 4000);
//     return () => clearInterval(timer);
//   }, [mediaPlaceholders.length]);

//   return (
//     <section className="relative bg-background overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-24">
      
//       {/* Ambient Animated Background Glows */}
//       <motion.div 
//         animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
//         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[100px] pointer-events-none" 
//       />
//       <motion.div 
//         animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
//         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
//         className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" 
//       />

//       <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
//         {/* TEXT AREA */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="flex flex-col gap-5"
//         >
//           {/* Tagline */}
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.2, duration: 0.5 }}
//             className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase w-fit shadow-sm"
//           >
//             <motion.span 
//               animate={{ opacity: [1, 0.4, 1] }}
//               transition={{ duration: 2, repeat: Infinity }}
//               className="w-2 h-2 rounded-full bg-primary" 
//             />
//             Precision Instruments for Extreme Temperatures
//           </motion.div>

//           {/* HEADLINE UPGRADE */}
//           {/* FIX: Set to natural flow (no custom line breaks), standard casing, and REMOVED THE UNDERLINE, while keeping Picture 1 colors */}
//           <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-extrabold text-foreground leading-tight tracking-tighter pb-2">
//             Engineering the Future of{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-600 to-blue-600">
//               Quantum
//             </span>{" "}
//             &{" "}
//             {/* Standard casing applied to gradient, removing special position/underline logic */}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-slate-500 to-primary">
//               Cryogenic
//             </span>{" "}
//             Technology.
//           </h1>
          
//           <p className="text-lg text-muted-foreground max-w-xl leading-relaxed mt-2">
//             From QuantumVolt™ isolated power sources to 2 Tesla Electromagnets and UltraClear 4K systems. We build the core hardware modern science depends on.
//           </p>
          
//           {/* PRESERVED BUTTONS/LINKS (positions kept for later integration) */}
//           <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5, duration: 0.5 }}
//             className="flex flex-wrap gap-5 mt-4"
//           >
//             <Button size="lg" className="relative group overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground font-bold tracking-wide px-8 py-6 rounded-lg transition-all duration-300 shadow-xl shadow-primary/40 hover:shadow-2xl hover:shadow-primary/60 hover:-translate-y-1">
//               <span className="relative z-10 flex items-center gap-2">
//                 Explore Systems <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
//               </span>
//               {/* Button Sheen Animation */}
//               <motion.div 
//                 animate={{ x: ["-100%", "200%"] }}
//                 transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//                 className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
//               />
//             </Button>
            
//             <Button size="lg" variant="outline" className="group font-bold tracking-wide px-8 py-6 rounded-lg border-2 border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20">
//               Talk to Engineering
//             </Button>
//           </motion.div>
//         </motion.div>

//         {/* MEDIA VIEWPORT */}
//         <motion.div
//           initial={{ opacity: 0, x: 30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
//           className="relative w-full aspect-square lg:aspect-[4/3] rounded-2xl p-1 bg-gradient-to-br from-border via-background to-border shadow-2xl group"
//         >
//           <div className="absolute inset-0 rounded-2xl border border-border/50 bg-background overflow-hidden">
            
//             {/* Corner Targeting Brackets */}
//             <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary/40 rounded-tl-lg z-20 transition-all duration-500 group-hover:border-primary group-hover:w-10 group-hover:h-10" />
//             <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/40 rounded-tr-lg z-20 transition-all duration-500 group-hover:border-primary group-hover:w-10 group-hover:h-10" />
//             <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/40 rounded-bl-lg z-20 transition-all duration-500 group-hover:border-primary group-hover:w-10 group-hover:h-10" />
//             <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary/40 rounded-br-lg z-20 transition-all duration-500 group-hover:border-primary group-hover:w-10 group-hover:h-10" />

//             {/* Media Carousel */}
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={currentMedia}
//                 initial={{ opacity: 0, filter: "blur(4px)" }}
//                 animate={{ opacity: 1, filter: "blur(0px)" }}
//                 exit={{ opacity: 0, filter: "blur(4px)" }}
//                 transition={{ duration: 0.8 }}
//                 className={`absolute inset-0 w-full h-full flex flex-col items-center justify-center ${mediaPlaceholders[currentMedia]}`}
//               >
//                 <motion.div 
//                   initial={{ scale: 0.8, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   transition={{ delay: 0.3 }}
//                   className="w-24 h-24 mb-4 rounded-full bg-background border border-border flex items-center justify-center shadow-lg shadow-primary/10"
//                 >
//                   <span className="font-display text-4xl font-bold text-foreground">CN</span>
//                 </motion.div>
//                 <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border text-xs font-semibold text-primary">
//                   <Play className="w-3 h-3" /> System Overview {currentMedia + 1}/3
//                 </div>
//               </motion.div>
//             </AnimatePresence>

//             {/* Grid Overlay */}
//             <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] z-10 pointer-events-none" />
            
//             {/* Expand Icon */}
//             <div className="absolute bottom-6 right-6 z-20 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
//               <div className="p-2.5 rounded-full bg-background border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary cursor-pointer shadow-lg transition-all">
//                 <Maximize className="w-4 h-4" />
//               </div>
//             </div>
            
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }














import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HeroSection() {
  // const [currentMedia, setCurrentMedia] = useState(0);

  // const mediaPlaceholders = [
  //   "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-background to-background",
  //   "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-500/10 via-background to-background",
  //   "bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/10 via-background to-background",
  // ];

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentMedia((prev) => (prev + 1) % mediaPlaceholders.length);
  //   }, 4000);
  //   return () => clearInterval(timer);
  // }, [mediaPlaceholders.length]);



  const [currentMedia, setCurrentMedia] = useState(0);

  // 1. Put your actual video file names here!
  const videoUrls = [
    "/videos/hero-vid-1.mp4", // Make sure these are in your public/videos folder
    "/videos/hero-vid-2.mp4",
    "/videos/hero-vid-3.mp4",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMedia((prev) => (prev + 1) % videoUrls.length);
    }, 4000); // 4000ms = 4 seconds per video. Change this if you want them to play longer!
    return () => clearInterval(timer);
  }, [videoUrls.length]);

  return (
    <section className="relative bg-background overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-24">
      
      {/* Ambient Animated Background Glows */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[100px] pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" 
      />

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* TEXT AREA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-5"
        >
          {/* Tagline */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase w-fit shadow-sm"
          >
            <motion.span 
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-primary" 
            />
            Precision Instruments for Extreme Temperatures
          </motion.div>

          {/* HEADLINE */}
          <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-extrabold text-foreground leading-tight tracking-tighter pb-2">
            Engineering the Future of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-600 to-blue-600">
              Quantum
            </span>{" "}
            &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-slate-500 to-primary">
              Cryogenic
            </span>{" "}
            Technology
          </h1>
          
          {/* REFINED PARAGRAPH: Clearer and more professional */}
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed mt-2">
            We design and manufacture the mission-critical hardware that modern science depends on—from isolated quantum voltage sources to high-field electromagnets and advanced cryogenic control systems.
          </p>
          
          {/* <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-wrap gap-5 mt-4"
          > */}
            {/* <Button size="lg" className="relative group overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground font-bold tracking-wide px-8 py-6 rounded-lg transition-all duration-300 shadow-xl shadow-primary/40 hover:shadow-2xl hover:shadow-primary/60 hover:-translate-y-1">
              <span className="relative z-10 flex items-center gap-2">
                Explore Systems <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div 
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
              />
            </Button>
            
            <Button size="lg" variant="outline" className="group font-bold tracking-wide px-8 py-6 rounded-lg border-2 border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20">
              Talk to Engineering
            </Button>
          </motion.div>
        </motion.div> */}



        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-wrap gap-5 mt-4"
          >
            {/* LINK ADDED: Routes to Products Catalog */}
            <Link to="/products">
              <Button size="lg" className="relative group overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground font-bold tracking-wide px-8 py-6 rounded-lg transition-all duration-300 shadow-xl shadow-primary/40 hover:shadow-2xl hover:shadow-primary/60 hover:-translate-y-1">
                <span className="relative z-10 flex items-center gap-2">
                  Explore Systems <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div 
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                />
              </Button>
            </Link>
            
            {/* LINK ADDED: Routes to Contact Page */}
            <Link to="/contact">
              <Button size="lg" variant="outline" className="group font-bold tracking-wide px-8 py-6 rounded-lg border-2 border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20">
                Talk to Engineering
              </Button>
            </Link>
          </motion.div>
        </motion.div> 

        {/* MEDIA VIEWPORT */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="relative w-full aspect-square lg:aspect-[4/3] rounded-2xl p-1 bg-gradient-to-br from-border via-background to-border shadow-2xl group"
        >
          <div className="absolute inset-0 rounded-2xl border border-border/50 bg-background overflow-hidden">
            
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary/40 rounded-tl-lg z-20 transition-all duration-500 group-hover:border-primary group-hover:w-10 group-hover:h-10" />
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/40 rounded-tr-lg z-20 transition-all duration-500 group-hover:border-primary group-hover:w-10 group-hover:h-10" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/40 rounded-bl-lg z-20 transition-all duration-500 group-hover:border-primary group-hover:w-10 group-hover:h-10" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary/40 rounded-br-lg z-20 transition-all duration-500 group-hover:border-primary group-hover:w-10 group-hover:h-10" />

            {/* <AnimatePresence mode="wait">
              <motion.div
                key={currentMedia}
                initial={{ opacity: 0, filter: "blur(4px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(4px)" }}
                transition={{ duration: 0.8 }}
                className={`absolute inset-0 w-full h-full flex flex-col items-center justify-center ${mediaPlaceholders[currentMedia]}`}
              >
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="w-24 h-24 mb-4 rounded-full bg-background border border-border flex items-center justify-center shadow-lg shadow-primary/10"
                >
                  <span className="font-display text-4xl font-bold text-foreground">CN</span>
                </motion.div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border text-xs font-semibold text-primary">
                  <Play className="w-3 h-3" /> System Overview {currentMedia + 1}/3
                </div>
              </motion.div>
            </AnimatePresence> */}

            <AnimatePresence mode="wait">
              <motion.div
                key={currentMedia}
                initial={{ opacity: 0, filter: "blur(4px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(4px)" }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 w-full h-full flex flex-col items-center justify-center overflow-hidden"
              >
                {/* THE ACTUAL ROTATING VIDEO */}
                <video 
                  src={videoUrls[currentMedia]} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Optional dark overlay so the white text/logo stays readable */}
                <div className="absolute inset-0 bg-slate-900/40 mix-blend-overlay z-0" />

                {/* YOUR EXISTING UI OVERLAY (Stays on top of the video) */}
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="relative z-10 w-24 h-24 mb-4 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center shadow-lg shadow-primary/10"
                >
                  <span className="font-display text-4xl font-bold text-foreground">CN</span>
                </motion.div>
                <div className="relative z-10 flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border text-xs font-semibold text-primary">
                  <Play className="w-3 h-3" /> System Overview {currentMedia + 1}/3
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] z-10 pointer-events-none" />
            
            <div className="absolute bottom-6 right-6 z-20 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
              <div className="p-2.5 rounded-full bg-background border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary cursor-pointer shadow-lg transition-all">
                <Maximize className="w-4 h-4" />
              </div>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}