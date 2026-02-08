import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const featured = [
  {
    title: "QuantumVibe",
    subtitle: "Isolated Voltage Source DAC",
    description: "High-precision isolated voltage source digital-to-analog converter designed for quantum computing applications with ultra-low noise performance.",
  },
  {
    title: "CryoClean",
    subtitle: "Cryogenic RF Low-Pass Filters",
    description: "Purpose-built RF low-pass filters optimized for cryogenic environments, ensuring signal integrity at millikelvin temperatures.",
  },
  {
    title: "DACsys",
    subtitle: "Cryogenic Data Acquisition & Control",
    description: "Complete data acquisition and control system engineered for cryogenic environments with real-time monitoring capabilities.",
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Our latest innovations in quantum hardware and cryogenic instrumentation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {featured.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-secondary to-secondary/50 rounded-sm aspect-[3/2] mb-5 flex items-center justify-center">
                <span className="font-display text-2xl font-bold text-primary/30 group-hover:text-primary/50 transition-colors">
                  {product.title}
                </span>
              </div>
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                {product.subtitle}
              </p>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {product.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {product.description}
              </p>
              <a href="#" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="gap-2 font-semibold">
            View All Products <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
