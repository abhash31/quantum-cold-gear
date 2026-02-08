import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative bg-background overflow-hidden">
      <div className="container grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-6">
            Engineering the future of{" "}
            <span className="text-primary">quantum</span> &{" "}
            <span className="text-primary">cryogenic</span> technology
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
            From quantum hardware and cryogenic instruments to precision power systems — 
            we deliver cutting-edge solutions for research, industry, and innovation.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="gap-2 font-semibold">
              Explore Products <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="font-semibold">
              Contact Us
            </Button>
          </div>
        </motion.div>

        {/* Hero image area */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-primary/10 via-secondary to-primary/5 rounded-lg aspect-[4/3] flex items-center justify-center overflow-hidden">
            <div className="text-center p-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="font-display text-5xl font-bold text-primary">QE</span>
              </div>
              <p className="font-display text-xl font-semibold text-foreground">Quantum Engineering</p>
              <p className="text-sm text-muted-foreground mt-2">Precision. Innovation. Reliability.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
