// import { motion } from "framer-motion";
// import { ArrowRight, Phone, Mail, UserPlus } from "lucide-react";
// import { Link } from "react-router-dom";

// export function CTASection() {
  
//   // Smooth scroll to top function
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth"
//     });
//   };

//   return (
//     // Pure white section background to contrast with the grey card
//     <section className="relative py-20 lg:py-28 bg-white overflow-hidden border-t border-slate-200">
      
//       {/* Faint structural grid */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

//       <div className="container relative z-10">
        
//         {/* ========================================= */}
//         {/* ANIMATED BACKGROUND AURA (Behind the card) */}
//         {/* ========================================= */}
//         <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//           <motion.div
//             animate={{ 
//               rotate: [0, 5, -5, 0],
//               scale: [1, 1.02, 1] 
//             }}
//             transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
//             className="w-[110%] h-[110%] bg-gradient-to-tr from-blue-100/50 via-slate-200/50 to-primary/10 rounded-[4rem] blur-3xl opacity-70"
//           />
//         </div>

//         {/* ========================================= */}
//         {/* MAIN CONTAINER (Stable Light Grey)        */}
//         {/* ========================================= */}
//         <motion.div 
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           // Stable slate-100 background creates perfect contrast against the white page
//           className="relative bg-slate-300 border border-slate-200/80 rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden"
//         >

//           <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            
//             {/* LEFT SIDE: Text and Actions */}
//             <div className="flex flex-col gap-6">
              
//               {/* ANIMATED BADGE */}
//               <motion.div 
//                 animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
//                 transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
//                 className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 via-blue-500/10 to-primary/10 bg-[length:200%_200%] border border-primary/20 text-primary text-xs font-extrabold tracking-widest uppercase w-fit shadow-sm"
//               >
//                 <motion.div 
//                   animate={{ opacity: [1, 0.4, 1], scale: [1, 1.2, 1] }}
//                   transition={{ duration: 2, repeat: Infinity }}
//                   className="w-2 h-2 rounded-full bg-primary" 
//                 />
//                 <UserPlus className="w-3.5 h-3.5" />
//                 Expert Consultation
//               </motion.div>
              
//               {/* HEADING */}
//               <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-800 leading-[1.1] tracking-tight">
//                 Speak to a <br/>
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-600 to-blue-600">
//                   Scientist
//                 </span>
//               </h2>
              
//               {/* DESCRIPTION */}
//               <div className="space-y-5 mt-2">
//                 <p className="text-xl text-slate-700 leading-relaxed font-bold">
//                   CRYONANO's analytical scientists are available to answer your questions. Have a project you'd like to discuss? Give us a call or email us!
//                 </p>
//                 <p className="text-lg text-slate-600 leading-relaxed font-medium">
//                   We are happy to talk to you about any of your applications and instruments. Please write us an email with your question, drawing requirements, etc., and we will get back to you as soon as possible.
//                 </p>
//               </div>

//               {/* BUTTONS */}
//               {/* <div className="flex flex-wrap gap-4 mt-4">
//                 <button 
//                   onClick={scrollToTop}
//                   className="group relative px-8 py-4 rounded-xl font-bold text-white bg-primary shadow-lg hover:shadow-[0_0_25px_rgba(220,38,38,0.4)] transition-all duration-300 flex items-center gap-2 overflow-hidden hover:-translate-y-1"
//                 >
//                   <span className="relative z-10 flex items-center gap-2">
//                     Get a Quote <ArrowRight className="w-5 h-5 group-hover:-rotate-90 transition-transform duration-300" />
//                   </span>
//                   <motion.div 
//                     animate={{ x: ["-100%", "200%"] }}
//                     transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
//                     className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 z-0"
//                   />
//                 </button>

//                 <button 
//                   onClick={scrollToTop}
//                   className="px-8 py-4 rounded-xl font-bold text-slate-700 bg-white border-2 border-slate-200 hover:border-primary/50 hover:bg-slate-50 hover:text-primary transition-all duration-300 flex items-center gap-2 shadow-md hover:-translate-y-1"
//                 >
//                   Technical Support
//                 </button>
//               </div>
//             </div> */}
//             {/* BUTTONS */}
//               <div className="flex flex-wrap gap-4 mt-4">
                
//                 {/* GET A QUOTE LINK */}
//                 <Link 
//                   to="/request-quote"
//                   onClick={scrollToTop}
//                   className="group relative px-8 py-4 rounded-xl font-bold text-white bg-primary shadow-lg hover:shadow-[0_0_25px_rgba(220,38,38,0.4)] transition-all duration-300 flex items-center gap-2 overflow-hidden hover:-translate-y-1"
//                 >
//                   <span className="relative z-10 flex items-center gap-2">
//                     Get a Quote <ArrowRight className="w-5 h-5 group-hover:-rotate-90 transition-transform duration-300" />
//                   </span>
//                   <motion.div 
//                     animate={{ x: ["-100%", "200%"] }}
//                     transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
//                     className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 z-0"
//                   />
//                 </Link>

//                 {/* TECHNICAL SUPPORT LINK */}
//                 <Link 
//                   to="/contact"
//                   onClick={scrollToTop}
//                   className="px-8 py-4 rounded-xl font-bold text-slate-700 bg-white border-2 border-slate-200 hover:border-primary/50 hover:bg-slate-50 hover:text-primary transition-all duration-300 flex items-center gap-2 shadow-md hover:-translate-y-1"
//                 >
//                   Technical Support
//                 </Link>

//               </div>

//             {/* RIGHT SIDE: Interactive Cards (Highly visible by default) */}
//             <div className="flex flex-col gap-6">
              
//               {/* Phone Card - Pure white to pop out from the grey container */}
//               <a 
//                 href="tel:+919748181485" 
//                 className="group relative flex items-center gap-6 p-6 md:p-8 rounded-[2rem] bg-white border-2 border-slate-200 hover:border-cyan-400 transition-all duration-500 hover:-translate-y-1.5 shadow-md hover:shadow-xl overflow-hidden"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
//                 {/* Icon Box - Thicker stroke and darker color for default visibility */}
//                 <div className="relative flex-shrink-0 w-16 h-16 rounded-2xl bg-slate-50 border-2 border-slate-200 shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-300 transition-all duration-500 z-10">
//                   <Phone strokeWidth={2.5} className="w-6 h-6 text-slate-700 group-hover:text-cyan-600 transition-colors" />
//                 </div>
//                 <div className="relative z-10">
//                   <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5 group-hover:text-cyan-600 transition-colors">Call Us Directly</p>
//                   <p className="text-2xl font-display font-extrabold text-slate-900 tracking-wide transition-colors">+91 97481 81485</p>
//                 </div>
//               </a>

//               {/* Email Card - Pure white to pop out from the grey container */}
//               <a 
//                 href="mailto:contact@cryonano.com" 
//                 className="group relative flex items-center gap-6 p-6 md:p-8 rounded-[2rem] bg-white border-2 border-slate-200 hover:border-primary/50 transition-all duration-500 hover:-translate-y-1.5 shadow-md hover:shadow-xl overflow-hidden"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
//                 {/* Icon Box - Thicker stroke and darker color for default visibility */}
//                 <div className="relative flex-shrink-0 w-16 h-16 rounded-2xl bg-slate-50 border-2 border-slate-200 shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:border-primary/40 transition-all duration-500 z-10">
//                   <Mail strokeWidth={2.5} className="w-6 h-6 text-slate-700 group-hover:text-primary transition-colors" />
//                 </div>
//                 <div className="relative z-10">
//                   <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5 group-hover:text-primary transition-colors">Email Engineering</p>
//                   <p className="text-xl md:text-2xl font-display font-extrabold text-slate-900 tracking-wide transition-colors">contact@cryonano.com</p>
//                 </div>
//               </a>

//             </div>

//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }







import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";

export function CTASection() {
  
  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    // Pure white section background to contrast with the grey card
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden border-t border-slate-200">
      
      {/* Faint structural grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="container relative z-10">
        
        {/* ========================================= */}
        {/* ANIMATED BACKGROUND AURA (Behind the card) */}
        {/* ========================================= */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.02, 1] 
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="w-[110%] h-[110%] bg-gradient-to-tr from-blue-100/50 via-slate-200/50 to-primary/10 rounded-[4rem] blur-3xl opacity-70"
          />
        </div>

        {/* ========================================= */}
        {/* MAIN CONTAINER (Stable Light Grey)        */}
        {/* ========================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          // Stable slate-100 background creates perfect contrast against the white page
          className="relative bg-slate-300 border border-slate-200/80 rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden"
        >

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            
            {/* LEFT SIDE: Text and Actions */}
            <div className="flex flex-col gap-6">
              
              {/* ANIMATED BADGE */}
              <motion.div 
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 via-blue-500/10 to-primary/10 bg-[length:200%_200%] border border-primary/20 text-primary text-xs font-extrabold tracking-widest uppercase w-fit shadow-sm"
              >
                <motion.div 
                  animate={{ opacity: [1, 0.4, 1], scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-primary" 
                />
                <UserPlus className="w-3.5 h-3.5" />
                Expert Consultation
              </motion.div>
              
              {/* HEADING */}
              <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-800 leading-[1.1] tracking-tight">
                Speak to a <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-600 to-blue-600">
                  Scientist
                </span>
              </h2>
              
              {/* DESCRIPTION */}
              <div className="space-y-5 mt-2">
                <p className="text-xl text-slate-700 leading-relaxed font-bold">
                  CRYONANO's analytical scientists are available to answer your questions. Have a project you'd like to discuss? Give us a call or email us!
                </p>
                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                  We are happy to talk to you about any of your applications and instruments. Please write us an email with your question, drawing requirements, etc., and we will get back to you as soon as possible.
                </p>
              </div>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-4 mt-4">
                
                {/* GET A QUOTE LINK */}
                <Link 
                  to="/request-quote"
                  onClick={scrollToTop}
                  className="group relative px-8 py-4 rounded-xl font-bold text-white bg-primary shadow-lg hover:shadow-[0_0_25px_rgba(220,38,38,0.4)] transition-all duration-300 flex items-center gap-2 overflow-hidden hover:-translate-y-1"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get a Quote <ArrowRight className="w-5 h-5 group-hover:-rotate-90 transition-transform duration-300" />
                  </span>
                  <motion.div 
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 z-0"
                  />
                </Link>

                {/* TECHNICAL SUPPORT LINK */}
                <Link 
                  to="/contact"
                  onClick={scrollToTop}
                  className="px-8 py-4 rounded-xl font-bold text-slate-700 bg-white border-2 border-slate-200 hover:border-primary/50 hover:bg-slate-50 hover:text-primary transition-all duration-300 flex items-center gap-2 shadow-md hover:-translate-y-1"
                >
                  Technical Support
                </Link>

              </div>
            </div>

            {/* RIGHT SIDE: Interactive Cards (Highly visible by default) */}
            <div className="flex flex-col gap-6">
              
              {/* Phone Card - Pure white to pop out from the grey container */}
              <a 
                href="tel:+919748181485" 
                className="group relative flex items-center gap-6 p-6 md:p-8 rounded-[2rem] bg-white border-2 border-slate-200 hover:border-cyan-400 transition-all duration-500 hover:-translate-y-1.5 shadow-md hover:shadow-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Icon Box - Thicker stroke and darker color for default visibility */}
                <div className="relative flex-shrink-0 w-16 h-16 rounded-2xl bg-slate-50 border-2 border-slate-200 shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-300 transition-all duration-500 z-10">
                  <Phone strokeWidth={2.5} className="w-6 h-6 text-slate-700 group-hover:text-cyan-600 transition-colors" />
                </div>
                <div className="relative z-10">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5 group-hover:text-cyan-600 transition-colors">Call Us Directly</p>
                  <p className="text-2xl font-display font-extrabold text-slate-900 tracking-wide transition-colors">+91 97481 81485</p>
                </div>
              </a>

              {/* Email Card - Pure white to pop out from the grey container */}
              <a 
                href="mailto:contact@cryonano.com" 
                className="group relative flex items-center gap-6 p-6 md:p-8 rounded-[2rem] bg-white border-2 border-slate-200 hover:border-primary/50 transition-all duration-500 hover:-translate-y-1.5 shadow-md hover:shadow-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Icon Box - Thicker stroke and darker color for default visibility */}
                <div className="relative flex-shrink-0 w-16 h-16 rounded-2xl bg-slate-50 border-2 border-slate-200 shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:border-primary/40 transition-all duration-500 z-10">
                  <Mail strokeWidth={2.5} className="w-6 h-6 text-slate-700 group-hover:text-primary transition-colors" />
                </div>
                <div className="relative z-10">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5 group-hover:text-primary transition-colors">Email Engineering</p>
                  <p className="text-xl md:text-2xl font-display font-extrabold text-slate-900 tracking-wide transition-colors">contact@cryonano.com</p>
                </div>
              </a>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}