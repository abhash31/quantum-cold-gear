// import { useEffect, useRef, useState } from "react";
// import { motion, useInView, animate } from "framer-motion";
// import { Award, Briefcase, Globe2, BookOpen, Quote, ChevronRight } from "lucide-react";

// // --- DATA ARRAYS ---
// const stats = [
//   { value: 32, suffix: "+", label: "Systems Delivered" },
//   { value: 15, suffix: "+", label: "IIT Partners" },
//   { value: 5, suffix: "+", label: "Countries Reached" },
//   { value: 15, suffix: "+", label: "Publications" },
// ];

// const credentials = [
//   {
//     icon: Award,
//     title: "SIDBI–TIFAC Acknowledged",
//     desc: "Recognized for semiconductor innovation and deep-tech excellence.",
//     color: "text-blue-500",
//     bg: "bg-blue-500/10",
//   },
//   {
//     icon: Briefcase,
//     title: "End-to-End Solutions",
//     desc: "From ideation to commercial production with modular design for agile customization and faster turnaround times.",
//     color: "text-primary",
//     bg: "bg-primary/10",
//   },
//   {
//     icon: Globe2,
//     title: "International Presence",
//     desc: "Delivering state-of-the-art quantum and cryogenic infrastructure to leading research institutions worldwide.",
//     color: "text-cyan-500",
//     bg: "bg-cyan-500/10",
//   }
// ];

// const partners = [
//   "IISc Bangalore", "TATA POWER", "HAL (Hindustan Aeronautics)", "AMD", 
//   "CEA France", "Nanyang Technological University", "IIT Kharagpur", "Saha Institute of Nuclear Physics"
// ];

// const publications = [
//   {
//     year: "2025",
//     title: "Dimensional Crossover and Emergence of Novel Phases in Puckered PdSe under Pressure",
//     authors: "T Kundu, S Das, K Dey, B Joseph, C Nayak, M Palit, SK Mahatha, K Dolui",
//     journal: "Phys. Rev. B 112, 024109"
//   },
//   {
//     year: "2025",
//     title: "Tailored one-dimensional/two-dimensional van der Waals heterostructures for unified analog and digital electronics",
//     authors: "B Karmakar, B Das, S Mandal, R Paramanik, S Maity, T Kundu, S Das",
//     journal: "Phys. Rev. Applied 23, 054013"
//   },
//   {
//     year: "2025",
//     title: "Electron-Magnon Coupling Mediated Magnetotransport in Antiferromagnetic van der Waals Heterostructure",
//     authors: "S Maity, S Das, M Palit, K Dey, B Das, T Kundu, R Paramanik, BK De",
//     journal: "Phys. Rev. B 111, L140407"
//   },
//   {
//     year: "2023",
//     title: "Raman spectroscopic studies on the evolution of interlayer coupling and stacking order in twisted bilayers and polytypes of WSe2",
//     authors: "Sourav Paul et. al.",
//     journal: "Journal of Applied Physics 133, 114301"
//   },
//   {
//     year: "2020",
//     title: "Magnetic-Field-Dependent Equilibration of Fractional Quantum Hall Edge Modes",
//     authors: "Tanmay Maiti, et. al.",
//     journal: "Phys. Rev. Lett. 125, 076802"
//   },
//   {
//     year: "2019",
//     title: "Gap states controlled transmission through 1D metal-nanotube junctions",
//     authors: "U.N. Nandi et. al.",
//     journal: "Carbon, Volume 146, Pages 106-115"
//   }
// ];

// // --- ANIMATED COUNTER COMPONENT ---
// function Counter({ from, to, suffix }: { from: number, to: number, suffix: string }) {
//   const ref = useRef<HTMLSpanElement>(null);
//   const inView = useInView(ref, { once: true, margin: "-50px" });

//   useEffect(() => {
//     if (inView && ref.current) {
//       const controls = animate(from, to, {
//         duration: 2.5,
//         ease: "easeOut",
//         onUpdate(value) {
//           if (ref.current) {
//             ref.current.textContent = Math.floor(value) + suffix;
//           }
//         },
//       });
//       return () => controls.stop();
//     }
//   }, [inView, from, to, suffix]);

//   return <span ref={ref}>{from}{suffix}</span>;
// }

// // --- MAIN SECTION EXPORT ---
// export function ImpactSection() {
//   return (
//     <section className="relative overflow-hidden">
      
//       {/* ======================================================== */}
//       {/* PART 1 & 2: STATS & LOGOS (Dark Premium Theme)           */}
//       {/* ======================================================== */}
//       <div className="bg-slate-950 py-20 relative border-y border-slate-800">
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800/40 via-slate-950 to-slate-950" />
        
//         <div className="container relative z-10">
//           {/* Animated Stats Counter */}
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-20 divide-x divide-slate-800/50">
//             {stats.map((stat, idx) => (
//               <motion.div 
//                 key={idx}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1, duration: 0.6 }}
//                 className="flex flex-col items-center text-center px-4"
//               >
//                 <div className="font-display text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-2 tracking-tight">
//                   <Counter from={0} to={stat.value} suffix={stat.suffix} />
//                 </div>
//                 <p className="text-sm md:text-base font-semibold text-slate-400 uppercase tracking-widest">
//                   {stat.label}
//                 </p>
//               </motion.div>
//             ))}
//           </div>

//           {/* Trusted By - Infinite Marquee */}
//           <div className="text-center mb-8">
//             <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">Trusted by leading organizations worldwide</p>
//           </div>
          
//           <div className="relative w-full flex overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
//             <motion.div
//               className="flex items-center gap-12 px-6 w-max"
//               animate={{ x: ["0%", "-50%"] }}
//               transition={{ ease: "linear", duration: 40, repeat: Infinity }}
//             >
//               {[...partners, ...partners].map((partner, i) => (
//                 <div key={i} className="flex items-center justify-center shrink-0">
//                   <div className="px-6 py-3 rounded-xl bg-slate-900/50 border border-slate-800 text-slate-300 font-bold tracking-wide shadow-inner">
//                     {partner}
//                   </div>
//                 </div>
//               ))}
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* ======================================================== */}
//       {/* PART 3: CREDENTIALS & IMPACT (Light Theme)                 */}
//       {/* ======================================================== */}
//       <div className="bg-slate-50 py-24 relative">
//         <div className="container relative z-10">
          
//           <div className="text-center max-w-3xl mx-auto mb-16">
//             <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
//               Credentials & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">Impact</span>
//             </h2>
//             <p className="text-lg text-slate-600 leading-relaxed">
//               Trusted by leading research institutions worldwide to deliver uncompromising precision.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8 mb-24">
//             {credentials.map((cred, idx) => {
//               const Icon = cred.icon;
//               return (
//                 <motion.div
//                   key={idx}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: idx * 0.15, duration: 0.6 }}
//                   className="group relative bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center overflow-hidden"
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
//                   <div className={`mx-auto w-16 h-16 rounded-2xl ${cred.bg} border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-inner`}>
//                     <Icon className={`w-8 h-8 ${cred.color}`} />
//                   </div>
                  
//                   <h3 className="font-display text-xl font-bold text-slate-900 mb-4 relative z-10 group-hover:text-primary transition-colors">
//                     {cred.title}
//                   </h3>
//                   <p className="text-slate-600 text-sm leading-relaxed relative z-10">
//                     {cred.desc}
//                   </p>
                  
//                   <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
//                 </motion.div>
//               );
//             })}
//           </div>

//           {/* ======================================================== */}
//           {/* PART 4: PUBLISHED RESEARCH (Interactive Timeline)        */}
//           {/* ======================================================== */}
//           <div className="max-w-5xl mx-auto">
//             <div className="flex items-center gap-4 mb-12">
//               <div className="p-3 rounded-xl bg-slate-200 text-slate-700">
//                 <BookOpen className="w-6 h-6" />
//               </div>
//               <h2 className="font-display text-3xl font-extrabold text-slate-900 tracking-tight">
//                 Published Research Using Our Systems
//               </h2>
//             </div>

//             <div className="relative border-l-2 border-slate-200 ml-4 md:ml-8 pl-8 md:pl-12 space-y-10">
//               {publications.map((pub, idx) => (
//                 <motion.div
//                   key={idx}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true, margin: "-50px" }}
//                   transition={{ delay: idx * 0.1, duration: 0.5 }}
//                   className="relative group cursor-default"
//                 >
//                   {/* Timeline Dot */}
//                   <div className="absolute -left-[41px] md:-left-[57px] top-4 w-4 h-4 rounded-full bg-white border-4 border-slate-300 group-hover:border-primary transition-colors duration-300 shadow-sm" />
                  
//                   {/* Research Card */}
//                   <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
//                     {/* Hover Glow Edge */}
//                     <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
//                     <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center">
                      
//                       {/* Year Badge */}
//                       <div className="flex-shrink-0 bg-slate-50 border border-slate-200 text-slate-800 font-extrabold text-xl px-5 py-2.5 rounded-xl shadow-inner group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors duration-300">
//                         {pub.year}
//                       </div>

//                       {/* Content */}
//                       <div className="flex-grow space-y-2">
//                         <h4 className="text-lg md:text-xl font-bold text-slate-900 leading-snug group-hover:text-primary transition-colors">
//                           {pub.title}
//                         </h4>
//                         <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm">
//                           <p className="text-slate-600 font-medium flex items-center gap-1.5">
//                             <Quote className="w-3.5 h-3.5 text-slate-400" /> {pub.authors}
//                           </p>
//                           <span className="hidden sm:block text-slate-300">•</span>
//                           <p className="text-slate-800 font-bold">
//                             {pub.journal}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }













import { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Award, Briefcase, Globe2, BookOpen, Quote } from "lucide-react";

// --- DATA ARRAYS ---
const stats = [
  { value: 32, suffix: "+", label: "Systems Delivered" },
  { value: 15, suffix: "+", label: "IIT Partners" },
  { value: 5, suffix: "+", label: "Countries Reached" },
  { value: 15, suffix: "+", label: "Publications" },
];

const credentials = [
  {
    icon: Award,
    title: "SIDBI–TIFAC Acknowledged",
    desc: "Recognized for semiconductor innovation and deep-tech excellence.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Briefcase,
    title: "End-to-End Solutions",
    desc: "From ideation to commercial production with modular design for agile customization and faster turnaround times.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Globe2,
    title: "International Presence",
    desc: "Delivering state-of-the-art quantum and cryogenic infrastructure to leading research institutions worldwide.",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
  }
];

// UPDATED: Split 16 Partners into Two Rows for Dual-Track Marquee
const partnersRow1 = [
  { name: "IISc Bangalore", logo: "/logos/iisc.avif" },
  { name: "IIT ISM Dhanbad", logo: "/logos/IIT ISM.avif" },
  { name: "Chinese Academy of Sciences", logo: "/logos/CAS Beijing.avif" },
  { name: "TATA POWER", logo: "/logos/tata.avif" },
  { name: "TOBB Türkiye", logo: "/logos/TOBB Turkey.avif" },
  { name: "AMD India", logo: "/logos/dae.avif" },
  { name: "IIT Kharagpur", logo: "/logos/iit kharakpur.avif" },
  { name: "IIT Bhubaneswar", logo: "/logos/iit bhu.png" },
];

const partnersRow2 = [
  { name: "NTU Singapore", logo: "/logos/nit singapore.avif" },
  { name: "CEA France", logo: "/logos/cea.avif" },
  { name: "Saha Institute", logo: "/logos/saha institute.avif" },
  { name: "HAL India", logo: "/logos/hal.avif" },
  { name: "IIT Ropar", logo: "/logos/iit ropar.avif" },
  { name: "IIT Bhilai", logo: "/logos/iit bhilai.avif" },
  { name: "INST Mohali", logo: "/logos/inst.avif" },
  // { name: "National Quantum Lab", logo: "/logos/quantum-lab.png" }, // Or whatever your 16th logo is
];

const publications = [
  {
    year: "2025",
    title: "Dimensional Crossover and Emergence of Novel Phases in Puckered PdSe under Pressure",
    authors: "T Kundu, S Das, K Dey, B Joseph, C Nayak, M Palit, SK Mahatha, K Dolui",
    journal: "Phys. Rev. B 112, 024109"
  },
  {
    year: "2025",
    title: "Tailored one-dimensional/two-dimensional van der Waals heterostructures for unified analog and digital electronics",
    authors: "B Karmakar, B Das, S Mandal, R Paramanik, S Maity, T Kundu, S Das",
    journal: "Phys. Rev. Applied 23, 054013"
  },
  {
    year: "2025",
    title: "Electron-Magnon Coupling Mediated Magnetotransport in Antiferromagnetic van der Waals Heterostructure",
    authors: "S Maity, S Das, M Palit, K Dey, B Das, T Kundu, R Paramanik, BK De",
    journal: "Phys. Rev. B 111, L140407"
  },
  {
    year: "2023",
    title: "Raman spectroscopic studies on the evolution of interlayer coupling and stacking order in twisted bilayers and polytypes of WSe2",
    authors: "Sourav Paul et. al.",
    journal: "Journal of Applied Physics 133, 114301"
  },
  {
    year: "2020",
    title: "Magnetic-Field-Dependent Equilibration of Fractional Quantum Hall Edge Modes",
    authors: "Tanmay Maiti, et. al.",
    journal: "Phys. Rev. Lett. 125, 076802"
  },
  {
    year: "2019",
    title: "Gap states controlled transmission through 1D metal-nanotube junctions",
    authors: "U.N. Nandi et. al.",
    journal: "Carbon, Volume 146, Pages 106-115"
  }
];

// --- ANIMATED COUNTER COMPONENT ---
function Counter({ from, to, suffix }: { from: number, to: number, suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(from, to, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = Math.floor(value) + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [inView, from, to, suffix]);

  return <span ref={ref}>{from}{suffix}</span>;
}

// --- MAIN SECTION EXPORT ---
export function ImpactSection() {
  return (
    <section className="relative overflow-hidden">
      
      {/* ======================================================== */}
      {/* PART 1 & 2: STATS & LOGOS (Dark Premium Theme)           */}
      {/* ======================================================== */}
      <div className="bg-slate-950 py-20 relative border-y border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800/40 via-slate-950 to-slate-950" />
        
        <div className="container relative z-10">
          {/* Animated Stats Counter */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-20 divide-x divide-slate-800/50">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="flex flex-col items-center text-center px-4"
              >
                <div className="font-display text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-2 tracking-tight">
                  <Counter from={0} to={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm md:text-base font-semibold text-slate-400 uppercase tracking-widest">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Trusted By - Dual Track Marquee */}
          <div className="text-center mb-10">
            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Trusted by leading organizations worldwide</p>
          </div>
          
          <div className="relative w-full flex flex-col gap-6 overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            
            {/* TRACK 1: Scrolls Left */}
            {/* <motion.div
              className="flex items-center gap-6 md:gap-8 px-4 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 35, repeat: Infinity }}
            >
              {[...partnersRow1, ...partnersRow1].map((partner, i) => (
                <div key={i} className="flex items-center gap-4 shrink-0 w-64 md:w-72 h-20 px-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 group hover:bg-white/5 hover:border-slate-700 transition-all duration-500 cursor-default shadow-inner">
                  <div className="h-10 w-10 flex-shrink-0 flex items-center justify-center">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    />
                  </div>
                  <div className="text-[11px] md:text-xs text-slate-500 font-bold uppercase tracking-wide group-hover:text-slate-300 transition-colors duration-500 line-clamp-2">
                    {partner.name}
                  </div>
                </div>
              ))}
            </motion.div> */}

            {/* TRACK 2: Scrolls Right (Notice the inverted animation array) */}
            {/* <motion.div
              className="flex items-center gap-6 md:gap-8 px-4 w-max"
              animate={{ x: ["-50%", "0%"] }}
              transition={{ ease: "linear", duration: 40, repeat: Infinity }} // Slightly slower for depth effect
            >
              {[...partnersRow2, ...partnersRow2].map((partner, i) => (
                <div key={i} className="flex items-center gap-4 shrink-0 w-64 md:w-72 h-20 px-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 group hover:bg-white/5 hover:border-slate-700 transition-all duration-500 cursor-default shadow-inner">
                  <div className="h-10 w-10 flex-shrink-0 flex items-center justify-center">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    />
                  </div>
                  <div className="text-[11px] md:text-xs text-slate-500 font-bold uppercase tracking-wide group-hover:text-slate-300 transition-colors duration-500 line-clamp-2">
                    {partner.name}
                  </div>
                </div>
              ))}
            </motion.div> */}
            {/* TRACK 1: Scrolls Left */}
            <motion.div
              className="flex items-center gap-8 md:gap-10 px-4 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 35, repeat: Infinity }}
            >
              {[...partnersRow1, ...partnersRow1].map((partner, i) => (
                <div key={i} className="flex items-center gap-6 shrink-0 w-[20rem] md:w-[24rem] h-28 md:h-32 px-6 md:px-8 rounded-[1.5rem] bg-slate-900/60 border border-slate-700/80 group hover:bg-slate-800 hover:border-slate-500 transition-all duration-500 cursor-default shadow-lg">
                  
                  {/* MUCH LARGER LOGO CONTAINER */}
                  <div className="h-16 w-20 md:h-20 md:w-28 flex-shrink-0 flex items-center justify-center bg-white/10 p-2 md:p-3 rounded-xl group-hover:bg-white/20 transition-colors duration-500 shadow-inner">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      // Base opacity bumped to 90% so it is crystal clear even without hovering
                      className="max-h-full max-w-full object-contain filter grayscale opacity-90 brightness-125 group-hover:grayscale-0 group-hover:opacity-100 group-hover:brightness-100 transition-all duration-500"
                    />
                  </div>
                  
                  {/* LARGER & BRIGHTER TEXT */}
                  <div className="text-sm md:text-base text-slate-300 font-black uppercase tracking-widest group-hover:text-white transition-colors duration-500 line-clamp-2 leading-tight">
                    {partner.name}
                  </div>

                </div>
              ))}
            </motion.div>

            {/* TRACK 2: Scrolls Right */}
            <motion.div
              className="flex items-center gap-8 md:gap-10 px-4 w-max"
              animate={{ x: ["-50%", "0%"] }}
              transition={{ ease: "linear", duration: 40, repeat: Infinity }} 
            >
              {[...partnersRow2, ...partnersRow2].map((partner, i) => (
                <div key={i} className="flex items-center gap-6 shrink-0 w-[20rem] md:w-[24rem] h-28 md:h-32 px-6 md:px-8 rounded-[1.5rem] bg-slate-900/60 border border-slate-700/80 group hover:bg-slate-800 hover:border-slate-500 transition-all duration-500 cursor-default shadow-lg">
                  
                  {/* MUCH LARGER LOGO CONTAINER */}
                  <div className="h-16 w-20 md:h-20 md:w-28 flex-shrink-0 flex items-center justify-center bg-white/10 p-2 md:p-3 rounded-xl group-hover:bg-white/20 transition-colors duration-500 shadow-inner">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      // Base opacity bumped to 90% so it is crystal clear even without hovering
                      className="max-h-full max-w-full object-contain filter grayscale opacity-90 brightness-125 group-hover:grayscale-0 group-hover:opacity-100 group-hover:brightness-100 transition-all duration-500"
                    />
                  </div>
                  
                  {/* LARGER & BRIGHTER TEXT */}
                  <div className="text-sm md:text-base text-slate-300 font-black uppercase tracking-widest group-hover:text-white transition-colors duration-500 line-clamp-2 leading-tight">
                    {partner.name}
                  </div>

                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* PART 3: CREDENTIALS & IMPACT (Light Theme)                 */}
      {/* ======================================================== */}
      <div className="bg-slate-50 py-24 relative">
        <div className="container relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Credentials & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">Impact</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Trusted by leading research institutions worldwide to deliver uncompromising precision.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {credentials.map((cred, idx) => {
              const Icon = cred.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                  className="group relative bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className={`mx-auto w-16 h-16 rounded-2xl ${cred.bg} border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-inner`}>
                    <Icon className={`w-8 h-8 ${cred.color}`} />
                  </div>
                  
                  <h3 className="font-display text-xl font-bold text-slate-900 mb-4 relative z-10 group-hover:text-primary transition-colors">
                    {cred.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed relative z-10">
                    {cred.desc}
                  </p>
                  
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </motion.div>
              );
            })}
          </div>

          {/* ======================================================== */}
          {/* PART 4: PUBLISHED RESEARCH (Interactive Timeline)        */}
          {/* ======================================================== */}
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 rounded-xl bg-slate-200 text-slate-700">
                <BookOpen className="w-6 h-6" />
              </div>
              <h2 className="font-display text-3xl font-extrabold text-slate-900 tracking-tight">
                Published Research Using Our Systems
              </h2>
            </div>

            <div className="relative border-l-2 border-slate-200 ml-4 md:ml-8 pl-8 md:pl-12 space-y-10">
              {publications.map((pub, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="relative group cursor-default"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[41px] md:-left-[57px] top-4 w-4 h-4 rounded-full bg-white border-4 border-slate-300 group-hover:border-primary transition-colors duration-300 shadow-sm" />
                  
                  {/* Research Card */}
                  <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                    {/* Hover Glow Edge */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center">
                      
                      {/* Year Badge */}
                      <div className="flex-shrink-0 bg-slate-50 border border-slate-200 text-slate-800 font-extrabold text-xl px-5 py-2.5 rounded-xl shadow-inner group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors duration-300">
                        {pub.year}
                      </div>

                      {/* Content */}
                      <div className="flex-grow space-y-2">
                        <h4 className="text-lg md:text-xl font-bold text-slate-900 leading-snug group-hover:text-primary transition-colors">
                          {pub.title}
                        </h4>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm">
                          <p className="text-slate-600 font-medium flex items-center gap-1.5">
                            <Quote className="w-3.5 h-3.5 text-slate-400" /> {pub.authors}
                          </p>
                          <span className="hidden sm:block text-slate-300">•</span>
                          <p className="text-slate-800 font-bold">
                            {pub.journal}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}