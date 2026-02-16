import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, CircuitBoard, Microscope, Zap, Cpu, Atom, Gauge, FlaskConical, Magnet, BatteryCharging, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const capabilities = [
  {
    icon: Atom,
    title: "Quantum Instrument Design & Engineering",
    items: [
      "Isolated voltage sources & DACs for quantum transport",
      "Cryogenic data acquisition & control systems",
      "Cryogenic RF low-pass filters & shielded breakout boxes",
      "Custom quantum measurement electronics",
    ],
  },
  {
    icon: Microscope,
    title: "Cryogenic Microscopy & Nano-Characterization",
    items: [
      "Cryogenic nano-positioning stages",
      "2D material transfer systems with motorised control",
      "Cryogenic probe stations & dipstick systems",
      "4K microscopy & optical characterization platforms",
    ],
  },
  {
    icon: Magnet,
    title: "Electromagnet Systems",
    items: [
      "Spectroscopy & transport electromagnets",
      "Bitter electromagnets for high-field research",
      "Optical-access electromagnet configurations",
      "Custom magnet solutions for research & industry",
    ],
  },
  {
    icon: Zap,
    title: "Power Electronics & Conversion",
    items: [
      "AC-DC & DC-DC converters (0.3 kW – 30 kW)",
      "DC-AC pure sine wave inverters",
      "400 Hz frequency inverters",
      "Battery chargers & custom power systems",
    ],
  },
];

const markets = [
  "Quantum Computing & Information",
  "Condensed Matter Physics",
  "Nanoelectronics & 2D Materials",
  "Cryogenic Electronics Testing",
  "Academic & Government Research Labs",
  "Aerospace & Defence",
  "Industrial Power Systems",
  "Renewable Energy & EV Infrastructure",
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Breadcrumb */}
        <div className="bg-secondary/50 border-b border-border">
          <div className="container py-4">
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <span className="text-foreground font-medium">About Us</span>
            </div>
          </div>
        </div>

        {/* Hero */}
        <section className="container py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">
                Who We Are
              </span>
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Innovators in Quantum Instruments, Microscopy &amp; Power Electronics
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Our innovations enable our customers' breakthroughs through access to state-of-the-art quantum hardware, cryogenic microscopy platforms, and high-performance power electronics — driving the next generation of scientific discovery and industrial systems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We are present across research and industry — from quantum computing laboratories to condensed matter physics, from nanoelectronics fabrication to aerospace power systems, and from academic institutions to defence and energy infrastructure.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-gradient-to-br from-primary/5 via-secondary to-primary/10 rounded-sm aspect-[4/3] flex items-center justify-center border border-border"
            >
              <div className="text-center p-8">
                <div className="flex justify-center gap-4 mb-6">
                  {[Atom, Microscope, Zap].map((Icon, i) => (
                    <div key={i} className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  ))}
                </div>
                <p className="font-display text-lg font-semibold text-foreground">Quantum Engineering</p>
                <p className="text-sm text-muted-foreground">Precision. Innovation. Reliability.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission */}
        <section className="bg-secondary/30 py-16 border-y border-border">
          <div className="container max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-6">Our Heritage & Mission</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  We employ some of the best minds in quantum physics and engineering who work closely with industry and academia to commercialise technologies of the future — developing high quality products, services and turnkey solutions produced through our world-class facilities that have real impact on scientific progress.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our teams' passions have led to ground-breaking contributions in quantum transport measurement, cryogenic characterization of novel materials, and reliable power conversion for critical systems. This cultivates great pride in our people and drives the organisation to continually evolve.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We bring an assurance to our people and customers of quality, precision, integrity and technical excellence that is not easily matched — from prototype to production, from laboratory to field deployment.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="container py-16 lg:py-20">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">Core Capabilities</h2>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            Our expertise spans three interconnected domains — quantum instrumentation, cryogenic microscopy, and power electronics — delivering integrated solutions for the most demanding applications.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border border-border rounded-sm p-6 bg-card hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="rounded-sm bg-primary/10 p-2.5 shrink-0">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-display font-semibold text-foreground">{cap.title}</h3>
                  </div>
                  <ul className="space-y-2 ml-12">
                    {cap.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Markets */}
        <section className="bg-secondary/30 py-16 border-y border-border">
          <div className="container">
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">Markets & Industries We Serve</h2>
            <p className="text-muted-foreground mb-10 max-w-2xl">
              Our solutions serve researchers, engineers and organisations across a wide range of sectors.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {markets.map((market, i) => (
                <motion.div
                  key={market}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="border border-border rounded-sm p-4 bg-card text-center hover:border-primary/30 transition-colors"
                >
                  <p className="text-sm font-medium text-foreground">{market}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-16">
          <div className="container text-center">
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">
              What Can We Help Your Organisation With Today?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Whether you need custom quantum instruments, cryogenic characterization systems, or high-power electronics — our engineering team is ready to help.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link to="/">
                <Button size="lg" variant="secondary" className="font-semibold">
                  Explore Products
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="font-semibold border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Mail className="h-4 w-4 mr-2" />
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
