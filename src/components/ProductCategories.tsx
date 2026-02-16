import { motion } from "framer-motion";
import { Cpu, Thermometer, Magnet, Zap, Battery, ArrowRight } from "lucide-react";

const categories = [
  {
    icon: Cpu,
    title: "Quantum Hardware",
    description: "Isolated voltage source DACs, cryostat breakout boxes, RF low-pass filters, and data acquisition systems for quantum computing.",
    products: ["QuantumVibe", "CryoConnect", "CryoClean", "DACsys"],
    color: "from-primary/10 to-primary/5",
  },
  {
    icon: Thermometer,
    title: "Cryogenics & Microscopes",
    description: "Cryogenic nano stages, probe stations, dipsticks, 4K microscopes, and 2D transfer systems for ultra-low temperature research.",
    products: ["Nano Stage", "Probe Station", "4K Microscope", "Dipstick"],
    color: "from-blue-500/10 to-blue-500/5",
  },
  {
    icon: Magnet,
    title: "Electromagnets",
    description: "Spectroscopy, transport, and Bitter electromagnets along with fully custom solutions for your specific needs.",
    products: ["Spectroscopy", "Transport", "Bitter", "Custom"],
    color: "from-violet-500/10 to-violet-500/5",
  },
  {
    icon: Zap,
    title: "Converters & Inverters",
    description: "AC-DC and DC-DC converters from 0.3kW to 30kW, plus DC-AC pure sine wave and 400Hz frequency inverters.",
    products: ["AC-DC Systems", "DC-DC Systems", "Sine Wave", "400Hz"],
    color: "from-amber-500/10 to-amber-500/5",
  },
  {
    icon: Battery,
    title: "Battery Chargers",
    description: "Custom battery charging solutions designed in collaboration with our R&D engineers for your exact requirements.",
    products: ["Custom Projects", "R&D Collaboration"],
    color: "from-emerald-500/10 to-emerald-500/5",
  },
];

export function ProductCategories() {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Product Range
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Comprehensive solutions across quantum hardware, cryogenics, electromagnets, and power systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card border border-border rounded-sm overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className={`bg-gradient-to-br ${cat.color} p-6`}>
                <cat.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {cat.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cat.description}
                </p>
              </div>
              <div className="p-6 border-t border-border">
                <div className="flex flex-wrap gap-2 mb-4">
                  {cat.products.map((p) => (
                    <span key={p} className="text-xs bg-secondary text-secondary-foreground px-2.5 py-1 rounded-sm font-medium">
                      {p}
                    </span>
                  ))}
                </div>
                <a href="/products/cryoconnect" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all">
                  Explore <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
