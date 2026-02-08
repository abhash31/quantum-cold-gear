import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 bg-foreground text-primary-foreground">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
              Talk to our Engineers
            </h2>
            <p className="text-lg opacity-70 mb-6 max-w-lg">
              Whether you need a standard product or a fully custom solution, our R&D team 
              is ready to help bring your project to life.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2 font-semibold">
                Get a Quote <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 font-semibold border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Request a Demo
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 rounded-sm bg-primary-foreground/5 border border-primary-foreground/10">
              <Phone className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Call us</p>
                <p className="text-sm opacity-70">+1 (555) 000-0000</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-sm bg-primary-foreground/5 border border-primary-foreground/10">
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Email us</p>
                <p className="text-sm opacity-70">info@quantumengineering.com</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
