import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Zap, Shield, Settings, FlaskConical, CircuitBoard } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

const products: Record<string, {
  category: string;
  name: string;
  subtitle: string;
  overview: string[];
  features: { title: string; description: string }[];
  specs: { label: string; value: string }[];
  extraSections: { title: string; content: string[] }[];
  applications: string[];
  benefits: { title: string; description: string }[];
}> = {
  cryoconnect: {
    category: "Quantum Hardware",
    name: "CryoConnect",
    subtitle: "24 Channel Cryostat Breakout Box",
    overview: [
      "The CryoNano Breakout Box is a fully shielded, high-performance breakout box tailored for low-temperature and quantum transport experiments.",
      "Designed to work seamlessly with cryostats and quantum measurement systems, the CryoNano Breakout Box provides an efficient and easy-to-use interface for connecting and measuring multiple low-temperature devices simultaneously. It extends the cryostat Faraday cage, ensuring high-quality data collection by minimizing noise and electrostatic discharge (ESD) risks.",
      "The CryoNano Breakout Box is the perfect solution for simplifying your quantum transport experiments while providing reliable protection and optimal performance in cryogenic environments. It makes connecting, testing, and measuring low-temperature devices easier, allowing you to focus on your research with minimal setup time.",
    ],
    features: [
      {
        title: "24-Channel Capability",
        description: "Supports multi-terminal cryogenic measurements with 24 high-frequency channels, each equipped with low-pass filtering to minimize noise and maintain signal integrity.",
      },
      {
        title: "Shielded Design",
        description: "Fully shielded to extend the cryostat's Faraday cage to the breakout box, reducing external RF interference and maintaining signal quality in cryogenic experiments.",
      },
      {
        title: "Noise Immunity",
        description: "Employs twisted-pair wiring for all channels to reduce electromagnetic interference and improve measurement precision. Integrated filters on each channel further attenuate high-frequency noise and mitigate ESD effects.",
      },
      {
        title: "Switching Functionality",
        description: "Each channel has dedicated switches to enable quick connection to ground or a common bus. This provides an easy way to set up ESD-sensitive measurements, ensuring safe operation without complex wiring.",
      },
    ],
    specs: [
      { label: "Channels", value: "24 (11) channels" },
      { label: "Connectors", value: "BNC connectors for easy connection to laboratory equipment" },
      { label: "Filters", value: "Each channel equipped with integrated low-pass filters to block noise above the cutoff frequency" },
      { label: "Noise Immunity", value: "Twisted-pair wiring for each channel to minimize electromagnetic interference (EMI)" },
      { label: "Voltage Isolation", value: "Isolation between channels to prevent cross-talk and signal degradation" },
      { label: "Temperature Range", value: "Designed for operation in cryogenic environments (down to 2 K)" },
      { label: "Cable Length", value: "Standard cable lengths up to 3 meters (custom lengths available)" },
      { label: "Weight", value: "Compact and lightweight design for easy handling and integration into lab setups" },
    ],
    extraSections: [
      {
        title: "Simplifying the Measurement Process",
        content: [
          "The CryoNano Breakout Box simplifies the process of connecting and measuring low-temperature devices.",
          "Common Bus: A shared bus channel allows you to quickly and easily connect devices like sensors or fixed resistors to multiple channels simultaneously, saving time and effort in your experimental setup.",
          "With the included twisted-pair cable assembly, the breakout box ensures that the shielding from the cryostat extends seamlessly, maintaining the integrity of your measurements.",
        ],
      },
      {
        title: "Easy to Set Up",
        content: [
          "Flexible Cable Assembly: The CryoNano Breakout Box comes with a flexible, low-noise cable assembly that connects the cryostat's shield to the breakout box, providing a clean and reliable signal path.",
          "Effortless Integration: The 24-channel configuration makes it easy to integrate multiple devices for multi-terminal measurements, enhancing the flexibility of your setup. The common bus simplifies the connection of multiple devices across several channels, allowing you to connect quantum devices and other sensitive components quickly.",
        ],
      },
    ],
    applications: [
      "Quantum Transport Measurements",
      "Nanoelectronics Research",
      "ESD-Sensitive Device Testing",
      "Low-Temperature Experimentation",
      "Cryogenic Electronics Testing",
    ],
    benefits: [
      {
        title: "Enhanced Signal Integrity",
        description: "Fully shielded design and integrated filtering ensure high-quality data for sensitive low-temperature experiments.",
      },
      {
        title: "Easy Integration",
        description: "Quick setup with common bus functionality, ideal for multi-terminal device testing.",
      },
      {
        title: "High Flexibility",
        description: "Suitable for a wide range of applications in quantum computing, nanoelectronics, and other low-temperature research areas.",
      },
      {
        title: "Safe and Efficient",
        description: "Protects devices from ESD and noise interference, ensuring reliable and accurate measurements.",
      },
    ],
  },
};

const featureIcons = [Zap, Shield, CircuitBoard, Settings, FlaskConical];

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? products[slug] : null;

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container py-32 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Product Not Found</h1>
          <Link to="/" className="text-primary hover:underline">← Back to Home</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Breadcrumb + Back */}
        <div className="bg-secondary/50 border-b border-border">
          <div className="container py-4">
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Products
            </Link>
            <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <span>{product.category}</span>
              <span>/</span>
              <span className="text-foreground font-medium">{product.name}</span>
            </div>
          </div>
        </div>

        {/* Hero */}
        <section className="container py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">
                {product.category}
              </span>
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-2">
                {product.name}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">{product.subtitle}</p>
              <div className="flex gap-4">
                <Button size="lg" className="font-semibold">Request a Quote</Button>
                <Button size="lg" variant="outline" className="font-semibold">Download Datasheet</Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-gradient-to-br from-primary/5 via-secondary to-primary/10 rounded-sm aspect-[4/3] flex items-center justify-center border border-border"
            >
              <div className="text-center p-8">
                <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <CircuitBoard className="h-14 w-14 text-primary" />
                </div>
                <p className="font-display text-lg font-semibold text-foreground">{product.name}</p>
                <p className="text-sm text-muted-foreground">{product.subtitle}</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Overview */}
        <section className="bg-secondary/30 py-16 border-y border-border">
          <div className="container max-w-4xl">
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-6">Product Overview</h2>
            <div className="space-y-4">
              {product.overview.map((p, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="container py-16 lg:py-20">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-10">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {product.features.map((feat, i) => {
              const Icon = featureIcons[i % featureIcons.length];
              return (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border border-border rounded-sm p-6 bg-card hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-sm bg-primary/10 p-2.5 shrink-0">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-2">{feat.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feat.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="bg-secondary/30 py-16 border-y border-border">
          <div className="container">
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-10">Technical Specifications</h2>
            <div className="bg-card border border-border rounded-sm overflow-hidden">
              {product.specs.map((spec, i) => (
                <div
                  key={spec.label}
                  className={`flex flex-col sm:flex-row sm:items-center gap-2 px-6 py-4 ${
                    i !== product.specs.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <span className="font-semibold text-sm text-foreground sm:w-48 shrink-0">{spec.label}</span>
                  <span className="text-sm text-muted-foreground">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Extra sections */}
        {product.extraSections.map((section, i) => (
          <section key={i} className={`py-16 ${i % 2 === 0 ? "" : "bg-secondary/30 border-y border-border"}`}>
            <div className="container max-w-4xl">
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-6">{section.title}</h2>
              <div className="space-y-4">
                {section.content.map((p, j) => (
                  <p key={j} className="text-muted-foreground leading-relaxed">{p}</p>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Applications & Benefits */}
        <section className="container py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Applications */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Applications</h2>
              <ul className="space-y-3">
                {product.applications.map((app) => (
                  <li key={app} className="flex items-center gap-3 text-muted-foreground">
                    <div className="h-2 w-2 rounded-full bg-primary shrink-0" />
                    {app}
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Benefits</h2>
              <div className="space-y-5">
                {product.benefits.map((b) => (
                  <div key={b.title} className="flex items-start gap-3">
                    <div className="mt-1 rounded-full bg-primary/10 p-1 shrink-0">
                      <Check className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm text-foreground">{b.title}</h3>
                      <p className="text-sm text-muted-foreground">{b.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-16">
          <div className="container text-center">
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">
              Interested in {product.name}?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Contact our engineering team for detailed specifications, pricing, and custom configuration options.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" variant="secondary" className="font-semibold">
                Request a Quote
              </Button>
              <Button size="lg" variant="outline" className="font-semibold border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Talk to an Engineer
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
