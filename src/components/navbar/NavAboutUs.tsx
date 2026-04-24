import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { navAboutUsData } from "@/data/megaMenu";

export function NavAboutUs() {
  return (
    <div className="container p-0">
      <div className="grid grid-cols-12 gap-1 px-8 py-10">
        
        {/* Left Column: A summary or featured fact */}
        <div className="col-span-3 pr-6 border-r border-slate-100 flex flex-col justify-center gap-6">
          <div className="p-5 rounded-2xl bg-blue-50/50 border border-blue-100 shadow-sm">
            <Sparkles className="w-5 h-5 text-blue-500 mb-3" />
            <h4 className="font-display text-base font-bold text-slate-900 mb-1.5">Cryonano Precision</h4>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">Building the complete one-stop lab stack, from sample preparation through to publishable data acquisition.</p>
          </div>
          
          <div className="flex flex-col gap-1.5 border border-slate-200 rounded-xl p-4 bg-slate-50/50">
            <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Fast Facts</div>
            <div className="text-sm font-extrabold text-slate-900">32+ Systems Delivered</div>
            <div className="text-sm font-extrabold text-slate-900">15+ publications</div>
            <div className="text-sm font-extrabold text-slate-900">ISO 9001:2015</div>
          </div>
        </div>

        {/* Right Column: Grid of Links */}
        <div className="col-span-9 pl-6 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-8">
          {navAboutUsData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                <Link to={item.path} className="group block h-full">
                  <div className="flex items-start gap-3.5 h-full">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 bg-slate-100 group-hover:bg-blue-50 transition-colors border border-slate-200 group-hover:border-blue-200 shadow-sm">
                      <Icon className="w-4 h-4 text-slate-500 group-hover:text-blue-600 transition-colors" />
                    </div>
                    <div>
                      <h5 className="font-bold text-sm text-slate-800 leading-tight mb-0.5 group-hover:text-blue-700 transition-colors">
                        {item.name}
                      </h5>
                      <p className="text-[10px] text-blue-700/80 font-semibold tracking-wider uppercase mb-1 line-clamp-1 group-hover:text-blue-700 transition-colors">
                        {item.tagline}
                      </p>
                      <p className="text-[11px] text-slate-500 font-medium leading-relaxed line-clamp-2">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}