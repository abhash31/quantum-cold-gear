import { 
  Cpu, Shield, Activity, Settings, Zap, Layers, GitMerge, Link, 
  Maximize, ShieldCheck, Waves, ThermometerSnowflake, Minimize2, 
  ArrowDownToLine, Box, Crosshair, Grid, Move, MonitorPlay, Snowflake,
  Microscope, Target, Video, Maximize2, SlidersHorizontal, Wrench, Radio, 
  MapPin, Goal, GitBranch, BrainCircuit, Workflow, Focus, Rotate3d, Camera, Database, Radar,
  Car, Train, Ship, ShieldAlert, Microchip, Antenna, Stethoscope, Bot,
  Server
} from "lucide-react";

export const productsData: Record<string, any> = {
  "quantum-volt": {
    category: "Quantum Hardware",
    name: "QuantumVolt™",
    subtitle: "Precision Isolated Voltage Source",
    heroImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=800&auto=format&fit=crop"
    ],
    overview: [
      "QuantumVolt™ is an ultra-low-noise, isolated voltage source designed specifically for nanoelectronics, quantum transport, and quantum computing experiments.",
      "It delivers stable, precise gate and bias control through fully isolated bipolar outputs. This architecture enables reproducible tuning of sensitive quantum devices without introducing electrical noise or ground loops, which are critical points of failure in millikelvin environments."
    ],
    features: [
      { icon: Cpu, title: "Four Isolated Bipolar Outputs", description: "Each channel provides ±10 V independently, stackable to ±40 V for highly flexible gate control." },
      { icon: Activity, title: "16-Bit DAC Resolution", description: "High-resolution digital-to-analog conversion enables exceptionally fine voltage steps and smooth continuous sweeps." },
      { icon: Shield, title: "Ultra-Low Noise Architecture", description: "Optimized analog design with linear regulation minimizes output noise to preserve fragile quantum states." },
      { icon: Settings, title: "Native Automation", description: "Out-of-the-box LabVIEW and Python support enables seamless integration with existing automated measurement workflows." },
    ],
    specs: {
      "Output Configuration": "4 Isolated Bipolar Channels",
      "Voltage Range per Channel": "±10 V (Stackable to ±40 V)",
      "Resolution": "16-Bit DAC (~300 µV steps)",
      "Output Noise (0.1 Hz to 10 Hz)": "< 2 µV peak-to-peak",
      "Temperature Coefficient": "< 5 ppm/°C",
      "Isolation": "> 10 GΩ channel-to-channel",
      "Interface": "USB 2.0 / Native Python & LabVIEW",
      "Power Supply": "100-240 VAC, 50/60 Hz"
    },
    performanceData: {
      title: "Output Noise Spectral Density",
      description: "Comparative noise floor vs standard SMU equipment.",
      metrics: [
        { label: "1 Hz", value: 8, max: 100, unit: "nV/√Hz" },
        { label: "10 Hz", value: 5, max: 100, unit: "nV/√Hz" },
        { label: "100 Hz", value: 3, max: 100, unit: "nV/√Hz" },
        { label: "1 kHz", value: 2, max: 100, unit: "nV/√Hz" },
      ]
    },
    applications: [
      "Quantum Transport Experiments",
      "2D Material Devices (Graphene, hBN)",
      "Superconducting Qubits",
      "Spintronics Research",
      "Cryogenic Device Characterization"
    ]
  },
  
  "breakout-box": {
    category: "Quantum Hardware",
    name: "CryoConnect™",
    subtitle: "Precision Breakout Interface",
    heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop", 
    gallery: [
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=800&auto=format&fit=crop"
    ],
    overview: [
      "High-performance, fully shielded breakout solution engineered for low-temperature and quantum transport experiments.",
      "Designed to seamlessly extend your cryostat's Faraday cage while delivering clean, noise-free multi-channel measurements."
    ],
    features: [
      { icon: Layers, title: "24-Channel Architecture", description: "24 independent, shielded high-frequency channels. Integrated low-pass filters per channel." },
      { icon: Zap, title: "Superior Noise Immunity", description: "Twisted-pair wiring across all channels. Integrated filtering to block high-frequency noise." },
      { icon: Shield, title: "Fully Shielded Design", description: "Extends cryostat Faraday cage and suppresses external RF interference. Maintains high-fidelity signal paths." },
      { icon: GitMerge, title: "Integrated Switching", description: "Per-channel ground/common bus switching. Simplified ESD-sensitive measurement setup for safe, efficient device protection." },
    ],
    benefits: [
      { icon: Activity, title: "Enhanced Signal Integrity", description: "Fully shielded design and integrated filtering ensure high-quality data for sensitive low-temperature experiments." },
      { icon: Link, title: "Easy Integration", description: "Quick setup with common bus functionality, ideal for multi-terminal device testing." },
      { icon: Maximize, title: "High Flexibility", description: "Suitable for a wide range of applications in quantum computing, nanoelectronics, and other low-temperature research areas." },
      { icon: ShieldCheck, title: "Safe and Efficient", description: "Protects devices from ESD and noise interference, ensuring reliable and accurate measurements." }
    ],
    applications: [
      "Quantum Transport Measurements",
      "Nanoelectronics Research",
      "Cryogenic Electronics Testing",
      "ESD-Sensitive Device Characterization",
      "Low-Temperature Experimental Physics"
    ],
    specs: {
      "Channels": "24 independent, shielded",
      "Connectors": "BNC",
      "Filters": "Integrated low-pass (per channel)",
      "Noise Control": "Twisted-pair EMI suppression",
      "Voltage Isolation": "Channel-to-channel isolation",
      "Operating Temperature": "Down to 2 K",
      "Cable Length": "Up to 3 m (customizable)",
      "Design": "Compact, lightweight"
    },
    performanceData: {
      title: "Signal Attenuation Profile",
      description: "Exceptional frequency response with minimal insertion loss.",
      metrics: [
        { label: "DC (0 Hz)", value: 0.1, max: 5, unit: "dB" },
        { label: "10 MHz", value: 0.5, max: 5, unit: "dB" },
        { label: "100 MHz", value: 1.2, max: 5, unit: "dB" },
        { label: "500 MHz", value: 2.0, max: 5, unit: "dB" },
      ]
    }
  },

  "cryo-clean": {
    category: "Quantum Hardware",
    name: "CryoClean™",
    subtitle: "Cryogenic RF Low-Pass Filters",
    heroImage: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=1200&auto=format&fit=crop", 
    gallery: [
      "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=800&auto=format&fit=crop"
    ],
    overview: [
      "CryoClean™ RF low-pass filters are engineered to suppress high-frequency noise on cryogenic measurement lines while preserving low-frequency signal fidelity.",
      "Designed for quantum transport and quantum computing environments, CryoClean™ protects sensitive devices from RF interference and electrostatic disturbances at millikelvin temperatures."
    ],
    features: [
      { icon: Waves, title: "Broadband Noise Suppression", description: "High attenuation of RF and microwave noise prevents unwanted coupling into sensitive cryogenic devices." },
      { icon: ThermometerSnowflake, title: "Cryogenic-Stable Performance", description: "Filtering characteristics remain stable through repeated thermal cycling down to 2K." },
      { icon: ArrowDownToLine, title: "High Out-of-Band Attenuation", description: "Greater than 80 dB attenuation above cutoff frequency ensures strong suppression of environmental noise." },
      { icon: Minimize2, title: "Low Insertion Loss", description: "Preserves signal amplitude and measurement accuracy for low-frequency quantum transport signals." },
      { icon: Box, title: "Compact Integration", description: "Small form factor enables installation directly within cryostat wiring stacks and probe assemblies." },
    ],
    benefits: [
      { icon: Activity, title: "Improves Coherence", description: "Improves coherence and stability of quantum and nanoelectronic devices." },
      { icon: Shield, title: "Suppresses RF Pickup", description: "Suppresses RF pickup from room-temperature instrumentation." },
      { icon: ShieldCheck, title: "Protects Qubits", description: "Protects qubits and devices from ESD-related disturbances." },
      { icon: Zap, title: "Enhances Repeatability", description: "Enhances repeatability of highly sensitive low-temperature measurements." }
    ],
    applications: [
      "Noise Suppression in Cryogenic Lines",
      "Quantum Computing Coherence Stabilization",
      "Low-Temperature Experimental Physics",
      "ESD-Sensitive Device Characterization"
    ],
    specs: {
      "Channels": "24 independent, shielded",
      "Filter Architecture": "Multi-stage RC + LC",
      "RC Filter Range": "~65 kHz - GHz noise suppression",
      "LC Filter Range": "~225 MHz - THz attenuation",
      "Cryostat Stage": "4 K / 1 K / Mixing chamber compatible",
      "Connector Type": "Micro-D / cryogenic feedthrough",
      "Crosstalk": "< -80 dB"
    },
    integration: [
      { step: "1", title: "Wiring Stacks", description: "Initial line filtering from room temp." },
      { step: "2", title: "Probe Assemblies", description: "Intermediate stage noise rejection." },
      { step: "3", title: "Cryostat Feedthroughs", description: "Final stage ultra-clean signal delivery." }
    ]
  },

  "nano-stage": {
    category: "Cryogenics",
    name: "Cryogenic NanoStage",
    subtitle: "Vitrified Cryogenic Microscopy",
    heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop", 
    gallery: [
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop"
    ],
    overview: [
      "A liquid-nitrogen-cooled nano-positioning platform engineered for Cryo-CLEM, cryo-fluorescence, and super-resolution imaging workflows.",
      "Designed to maintain vitrification integrity while enabling nanometer-scale precision mapping."
    ],
    features: [
      { icon: ThermometerSnowflake, title: "Thermal Control", description: "Continuous liquid nitrogen cooling operating below -195°C. Frost-controlled sealed chamber with devitrification prevention." },
      { icon: Crosshair, title: "Nano Positioning", description: "Motorised encoded XY nano-positioning with high-resolution coordinate tracking for absolute accuracy." },
      { icon: Grid, title: "Automated Grid Mapping", description: "Automated EM grid mapping for accurate multi-platform relocation." },
      { icon: MonitorPlay, title: "Workflow Automation", description: "Fully software-integrated workflow automation to streamline imaging tasks." },
    ],
    benefits: [
      { icon: Shield, title: "Vitrification Protection", description: "Maintains absolute sample integrity during extended cryogenic observation sessions." },
      { icon: Move, title: "Nano-Scale Motion", description: "Ultra-smooth, drift-free motorized movement ensuring perfect super-resolution imaging." },
      { icon: Layers, title: "Multi-Grid Cassette", description: "Efficiently load and navigate multiple EM grids without breaking the cryogenic seal." },
      { icon: MonitorPlay, title: "Cross-Platform Imaging", description: "Seamless coordinate transfer between fluorescence and electron microscopes." }
    ],
    applications: [
      "Cryo-CLEM Workflows",
      "Cryo-Fluorescence Microscopy",
      "Super-Resolution Imaging",
      "Vitrified Biological Sample Analysis",
      "Correlative Coordinate Mapping"
    ],
    specs: {
      "Operating Temperature": "Below -195°C (Liquid Nitrogen)",
      "Positioning Type": "Motorised Encoded XY",
      "Environment": "Frost-controlled sealed chamber",
      "Sample Protection": "Integrated Devitrification Prevention",
      "Software Interface": "Full automation suite included",
      "Relocation Accuracy": "Sub-micron multi-platform tracking",
      "Grid Compatibility": "Standard EM Multi-Grid Cassettes"
    }
  },

  "2d-transfer-system": {
    category: "Cryogenics",
    name: "2D Transfer System",
    subtitle: "Deterministic Van der Waals Heterostructure Stacking",
    heroImage: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=1200&auto=format&fit=crop", 
    gallery: [
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop"
    ],
    overview: [
      "A precision-engineered motorized transfer system designed for the deterministic placement of 2D materials like Graphene, hBN, and Transition Metal Dichalcogenides (TMDs).",
      "Achieve sub-micron alignment accuracy with integrated temperature-controlled stages, high-resolution optical microscopes, and vibration-isolated infrastructure—essential for twistronics and magic-angle device fabrication."
    ],
    features: [
      { icon: Target, title: "Sub-Micron XYZ & Theta", description: "Ultra-precise motorized micrometers allow for perfect rotational and lateral alignment of crystal lattices." },
      { icon: ThermometerSnowflake, title: "Programmable Thermal Chuck", description: "Precision heating up to 250°C for seamless polymer melting and bubble-free stamping." },
      { icon: Video, title: "Long-WD Optical Microscope", description: "High-magnification zoom lens with a specialized coaxial illumination system for visualizing atomically thin flakes." },
      { icon: Shield, title: "Active Vibration Damping", description: "Granite base and pneumatic isolation ensure zero drift during the critical contact phase." },
    ],
    benefits: [
      { icon: Layers, title: "Perfect Interfaces", description: "Eliminate trapped air bubbles and contaminants between layers using controlled descent and heating." },
      { icon: SlidersHorizontal, title: "Twist angle Control", description: "Rotational stages with 0.01° resolution for producing highly sensitive Moiré superlattices." },
      { icon: Maximize2, title: "High Yield Scalability", description: "Automated routines significantly increase the success rate of complex, multi-layer heterostructure fabrication." },
      { icon: Microscope, title: "Live Inspection", description: "Integrated camera feeds allow continuous monitoring of the polymer/flake interface during transfer." }
    ],
    applications: [
      "Magic-Angle Graphene Devices",
      "Transition Metal Dichalcogenide (TMD) Stacking",
      "Quantum Emitter Fabrication",
      "Encapsulated Nanoelectronics",
      "Moiré Superlattice Research"
    ],
    specs: {
      "XYZ Resolution": "100 nm (Motorized)",
      "Rotational (Theta) Resolution": "0.01°",
      "Heating Chuck Range": "Ambient to 250°C",
      "Microscope Optics": "Long Working Distance, up to 100x magnification",
      "Vibration Isolation": "Passive & Active Options Available",
      "Vacuum System": "Integrated quiet diaphragm pump",
      "Software": "Custom GUI with joystick integration"
    }
  },
  // 6. NEW: 100 PSM PROBE STATION
  "psm-100": {
    category: "Cryogenics", // Or "Quantum Hardware" depending on your preference
    name: "100 PSM Probe Station",
    subtitle: "Wafer-Level Electrical Characterization",
    heroImage: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop", 
    gallery: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
    ],
    overview: [
      "The CRYONANO PSM 100 Probe Station is a cost-effective, manual wafer probe station designed for high-precision electrical probing of nanoelectronic and microscale devices.",
      "Built for reliability and ease of use, it supports up to 100 mm (4\") wafers, making it ideal for R&D labs, academic research, and early-stage production testing."
    ],
    // Mapped from "Features" & "Breakout Box & Connectivity"
    features: [
      { icon: Settings, title: "Precision Micro-Positioning", description: "Stable platen supporting up to 6 micro-positioners with smooth, precise manual motion for repeatable probe placement." },
      { icon: Shield, title: "Vibration Isolation", description: "Rigid, drift-free mechanical architecture featuring a solid station frame with integrated vibration isolation." },
      { icon: Layers, title: "Wafer Support", description: "Supports up to 100 mm (4\") wafers with quick, ergonomic sample exchange for high lab throughput." },
      { icon: GitMerge, title: "Multi-Channel Routing", description: "Includes low-noise measurement interfaces, shielded cable assemblies, and reliable signal transmission." },
    ],
    // Mapped from "Measurement Capabilities"
    capabilities: [
      "I-V and C-V device characterization",
      "Wafer-level probing and parametric testing",
      "Electrical failure analysis",
      "MEMS and electro-optic device testing",
      "Semiconductor device characterization",
      "Low-current and low-voltage measurements",
      "Research-grade electrical testing"
    ],
    // Mapped from "Flexible Probe Station Accessories"
    accessories: [
      { icon: Wrench, title: "Industry-Leading Probes", description: "Compatible with multiple probe configurations and industry-leading probe arms." },
      { icon: Zap, title: "Instrument Compatibility", description: "Seamlessly compatible with SMUs, analyzers, and LCR meters for parametric testing." },
      { icon: Radio, title: "Low-Noise Cabling", description: "Special low-noise shielded cables engineered for highly sensitive measurements." }
    ],
    specs: {
      "Wafer Capacity": "Up to 100 mm (4\")",
      "Micro-Positioners": "Supports up to 6",
      "Motion Control": "Manual, High-Precision",
      "Vibration Isolation": "Integrated in solid frame",
      "Measurement Types": "I-V, C-V, Low-Current",
      "Signal Routing": "Multi-channel, shielded",
      "Application": "R&D, Academic, Early Production"
    }
  },

  // ==========================================
  // NEW: CRYOGENIC DIP STICK (Fully Transcribed from Brochure)
  // ==========================================
  "dipstick": {
    category: "Cryogenics",
    name: "Cryogenic Dip Stick",
    subtitle: "Precision Cryogenic Sample Control for Research and Advanced Testing",
    heroImage: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=1200&auto=format&fit=crop", 
    gallery: [],
    overview: [
      "A high-performance liquid nitrogen (LN2)-cooled probe station insert engineered for precision electrical, materials, and device characterization.",
      "Designed for seamless integration into cryostats and vacuum chambers, enabling stable and repeatable measurements from 77 K to above ambient temperatures.",
      "Built to support condensed matter physics, superconductivity research, semiconductor testing, and advanced materials development."
    ],
    coreFeatures: [
      "Low thermal drift and high measurement stability",
      "High-precision probing and repeatable positioning",
      "Compatible with standard cryostat and vacuum interfaces"
    ],
    thermalControl: [
      "Operating range from ~77 K to 325 K+",
      "OFHC copper cold stage for rapid thermal equilibration",
      "Embedded heaters for variable temperature operation",
      "PT1000 sensors positioned near sample mount"
    ],
    electricalVacuum: [
      "High-reliability multi-pin electrical feedthroughs",
      "High-voltage and signal integrity support",
      "Vacuum-compatible construction",
      "Radiation shielding to minimize thermal losses",
      "Thermally optimized wiring harnesses"
    ],
    applications: [
      {
        title: "Low-Temperature Electrical Transport & I-V",
        desc: "Resistance, conductivity and current-voltage (I-V) measurements, under cryogenic conditions."
      },
      {
        title: "Superconducting Device & Materials Research",
        desc: "Investigation of superconducting transitions and material properties at low temperatures."
      },
      {
        title: "Semiconductor & PCB Testing at Cryo",
        desc: "Characterization of PCB components, semiconductor devices and nanoscale materials in high-vacuum standards."
      },
      {
        title: "Sensor Characterization & Calibration",
        desc: "Evaluation of sensor performance and calibration in cryogenic environments."
      }
    ],
    designHighlights: [
      {
        title: "Precision cold stage machined from OFHC copper",
        desc: "Minimal thermal gradients, rapid response to temperature changes."
      },
      {
        title: "Vacuum-compatible, low-outgassing construction",
        desc: "ISO-KF, CF (Conflat), and custom interface flanges, integrated vacuum shielding."
      },
      {
        title: "Replaceable flange and clamp fixtures",
        desc: "Customizable tops for different sample geometries for easy sample exchange."
      },
      {
        title: "Multi-pin electrical feedthroughs with gold contacts",
        desc: "Highly reliable, suitable for mixed power, signal, and test lines."
      }
    ],
    modularitySpecs: {
      "Configurable Design": [
        "Modular mechanical design for easy integration",
        "Options for ISO-KF, CF, and custom flanges",
        "Replaceable top flange or clamp fixtures for quick sample exchange",
        "Optional LN₂ flow channels or cold-finger configurations",
        "High-reliability electrical feedthroughs with gold-plated contacts",
        "High-vacuum-compatible, radiation shielded assembly"
      ],
      "Technical Specifications": [
        "Operating range from ~77 K to 325 K+",
        "OFHC copper cold stage for high thermal conductivity",
        "PT1000 sensor near cold stage for accurate temperature control"
      ]
    },



    modularVisualizer: {
      description: "Visualizing theoretical design Flexibility:Changeable flanges, replaceable fixtures, custom interface ports, custom wiring configurations derrived from configuration specs.",
      parts: ["Base Flange (CF/KF)", "Cold Stage (OFHC)", "Replaceable Top Flange"] // For dynamic diagram
    },
    thermalEngineeringVisualizer: {
      description: "Thermal engineering: copper stage & radiation shielding",
      components: ["OFHC Copper Stage", "Radiation Shielding"] // For dynamic diagram
    },
  },
  
  // ==========================================
// 7. NEW: CRYOSCOPE™ MOTION HUB (MOTORIZED CONTROLLER)
// FULLY TRANSCRIBED DATA FROM 5 BROCHURE IMAGES
// ==========================================
"cryoscope-controller": {
  category: "Microscopes",
  name: "Motorized Controller with Precision Stages",
  subtitle: "High-Accuracy Motion Control for Scientific and Industrial Systems",
  // Fixed, reliable industrial multiply-blending image URLs
  heroImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200&auto=format&fit=crop", 
  gallery: [
    "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop"
  ],
  overview: [
    "CryoNano's Motorized Controller with Precision Stages is engineered for applications requiring sub-micron positioning accuracy, repeatable motion, and stable long-term operation.",
    "Designed around compact motorized stages and intelligent electronic control, the system delivers precise linear and rotational motion in space-constrained experimental and industrial setups.",
    "Built with high-precision mechanical components and closed-loop electronic feedback, the controller enables smooth, programmable motion control for alignment, scanning, and positioning tasks where accuracy and reliability are critical."
  ],
  // 6 capabilities Mapped from Image 1 (Full list)
  coreFeatures: [
    "Sub-micron positioning capability",
    "Closed-loop electronic feedback",
    "Compact, integration-ready design",
    "High repeatability and motion stability",
    "Programmable multi-mode operation"
  ],
  // Comprehensive Architectural details Mapped from Image 2
  architecture: {
    description: "The motorized controller integrates precision-machined linear and rotary stages driven by high-resolution motors and controlled via an intelligent electronic interface. The modular architecture enables independent or synchronized multi-axis operation for flexible system integration.",
    mechanical: [
      "Rigid aluminum alloy stage bodies for structural stability",
      "Precision lead screw or linear guide mechanisms",
      "Integrated motor and encoder assemblies",
      "Compact footprint for instrument integration",
      "Engineered to minimize backlash and mechanical vibration, ensuring smooth motion even at ultra-low speeds."
    ],
    modular: [
      "Multi-axis configuration capability",
      "Stackable vertical and horizontal layouts",
      "Flexible mounting interfaces",
      "Suitable for custom instrumentation assemblies"
    ]
  },
  // Detailed Multi-Category Motion Control Mapped from Image 3
  motionControl: {
    description: "The system delivers precise, repeatable motion through high-resolution motor drive and closed-loop electronic feedback. Engineered for smooth, stable operation, it ensures consistent positioning performance across repeated cycles.",
    performance: [
      "Sub-micron motion resolution",
      "High repeatability across repeated operations",
      "Stable positioning under continuous use",
      "Optimized motion at ultra-low speeds"
    ],
    modes: [
      "Step-based incremental positioning",
      "Continuous scanning motion",
      "Synchronized axis control movement",
      "External control signal compatibility"
    ],
    electronics: {
      description: "The intelligent controller manages motion profiles, acceleration curves, and position verification through integrated feedback systems.",
      items: [
        "Closed-loop electronic position feedback",
        "Smooth acceleration and deceleration curves",
        "External control signal compatibility",
        "Integration-ready communication interface",
        "Deterministic workflow integration."
      ]
    }
  },
  // Multi-Category Integration Mapped from Image 4
  integration: {
    description: "The mechanical layout and mounting interfaces are designed to support optical assemblies, sensors, probes, and custom fixtures while maintaining alignment stability throughout motion. Engineered for compact system integration, the controller enables stable vertical and horizontal configurations in space-constrained environments.",
    features: [
      "Precision mounting interfaces for optical components",
      "Stable support for lenses, cameras, and probes",
      "Reduced mechanical drift during extended operation",
      "Compact footprint for instrument embedding",
      "Multi-axis alignment capability",
      "CLEM Workflow Integration Feed."
    ]
  },
  // Stacking routines Mapped from Image 4
  stacking: [
    "Initial 2D flake identification and coordinate mapping via optical system.",
    "Autonomous relocation feed for deterministic downstream electron microscopy analysis.",
    "Engages rotational stage for precise twist-angle Moire lattice control (0.01° resolution)."
  ],
  applications: [
    "Precision alignment systems",
    "Automated scanning and inspection setups",
    "Optical and imaging instruments",
    "Laboratory automation platforms",
    "Micro-positioning and fine adjustment tasks",
    "Magic-angle device fabrication",
    "Nanopositioning Workflows"
  ],
  // Comprehensive Specs Mapped from Image 5 (MASSIVE NESTED GRID)
  detailedSpecs: {
    "XYZ Precision Stage": {
      "Axes": "X, Y, Z",
      "Drive Mechanism": "Precision LM screw drives",
      "Guide System": "Linear rail guides",
      "Travel Range (X)": "25 mm",
      "Travel Range (Y)": "25 mm",
      "Travel Range (Z)": "25 mm",
      "Resolution (Full-Step)": "1 µm",
      "Resolution (Microstepping)": "Down to 0.6 µm (1/256 microstepping)",
      "Load Capacity": "5 kg"
    },
    "XYθ Precision Stage": {
      "Axes": "X, Y, θ",
      "Drive Mechanism": "Precision LM screw drives (X/Y), Worm gear (θ)",
      "Travel Range (X)": "25 mm",
      "Travel Range (Y)": "25 mm",
      "Rotation Range (θ)": "360° continuous",
      "Resolution (X/Y)": "Down to 0.1 µm",
      "Resolution (θ)": "Down to 0.005°",
      "Load Capacity": "3 kg"
    },
    "Motion Controller": {
      "Controller Type": "Advanced 4-axis microstepping controller",
      "Microstepping Resolution": "Up to 1/256",
      "Communication Interface": "USB 3.0 / Ethernet",
      "Digital Inputs": "4 Opto-isolated inputs",
      "Supported Functions": "Limit switches, emergency stop, external triggers",
      "Input Power": "24V DC"
    },
    "Imaging System": {
      "Camera Type": "CMOS Machine Vision Camera",
      "Sensor": "Sony IMX CMOS Global Shutter",
      "Resolution": "3840 × 2160 (4K UHD)",
      "Frame Rate": "45 fps",
      "Pixel Size": "~ 2.0 µm × 2.0 µm",
      "Interface": "USB 3.0",
      "Trigger": "Hardware trigger input"
    },
    "Optical System": {
      "Microscope Type": "Motorized Zoom Microscope",
      "Zoom Ratio": "1:10",
      "Optical Magnification": "0.3x – 3.0x",
      "Working Distance": "9 mm",
      "Lens Design": "Apochromatic 20X lens",
      "Motorization": "Motorized zoom and fine focus",
      "Illumination": "Coaxial (epi) illumination"
    },
    "Temperature Controller": {
      "Controller Type": "SSD-based precision temperature controller",
      "Temperature Range": "Ambient to 200°C",
      "Control Accuracy": "± 0.5°C",
      "Sensor Type": "Thermocouple",
      "Illumination": "Coaxial (epi) illumination"
    },
    "Computer System": {
      "Computer Type": "High-performance laptop",
      "Processor": "Intel Core i3",
      "Memory": "8 GB RAM",
      "Storage": "512 GB NVMe SSD",
      "Operating System": "Windows 10 / 11 Pro (64-bit)",
      "Ports": "USB 3.0, Ethernet, HDMI"
    }
  }
},




// ==========================================
  // ULTRACLEAR 4K SMART MICROSCOPE
  // ==========================================
  "ultraclear-4k": {
    category: "Microscopes",
    name: "UltraClear 4K Smart Microscope System",
    subtitle: "Precision Imaging Meets Intelligent Automation",
    heroImage: "/images/ultraclear-hero.png", // Ensure this exists in public/images
    gallery: [],
    overview: [
      "The UltraClear 4K Smart Microscope System combines apochromatic optical precision with intelligent digital automation to deliver exceptional clarity, measurement accuracy, and operational efficiency.",
      "Engineered for both advanced research laboratories and industrial inspection environments, the system integrates high-performance optics, a 4K ultra-HD imaging platform, and real-time measurement intelligence into a modular, upgrade-ready architecture.",
      "From semiconductor inspection to biological imaging, UltraClear provides true-color fidelity, stable long-term performance, and smart analysis tools."
    ],
    coreAdvantages: [
      "Apochromatic optics for true-color imaging across wavelengths",
      "10:1 intelligent zoom with expanded field of view",
      "4K ultra-HD Sony sensor with zero-latency output",
      "Integrated smart measurement & AI-assisted analysis",
      "Modular upgrade-ready architecture"
    ],
    opticalExcellence: {
      zoom: [
        "0.3X – 3.0X zoom range",
        "Available in fully motorized or manual configurations",
        "Ultra-low distortion parallel optical path",
        "Modular zoom bodies: Compact (up to 2/3\" sensors) & High-performance (up to 1\" sensors)",
        "Field of View optimized – up to 1.5× wider at equivalent magnification"
      ],
      objectives: [
        { mag: "20X", na: "0.4 - 0.55", wd: "8 - 10 mm" },
        { mag: "50X", na: "0.4 - 0.55", wd: "Long working distance" }
      ]
    },
    imagingAndIllumination: {
      illumination: [
        "Epi-illumination module for surface and metallurgical studies",
        "High-intensity LED point source with precise brightness control",
        "Polarization imaging for birefringent material analysis",
        "Uniform field illumination for consistent contrast"
      ],
      camera: [
        "Sony high-performance imaging sensor",
        "Resolution: 3840 × 2160 @ 60 fps (zero-latency live view)",
        "C-Mount compatibility for modular camera upgrades",
        "HDMI 2.0 output for direct display integration",
        "Local & online storage support (up to 32M HD images)",
        "Standalone operation with wireless keyboard & mouse"
      ]
    },
    smartAnalysis: {
      measurement: [
        "Parallel line measurement",
        "Concentric circle analysis",
        "Angle and point-to-line measurement",
        "Distance and contour evaluation",
        "Real-time calibrated overlays",
        "Instant image and video review with playback features"
      ],
      ai: [
        "Automatic edge and contour detection",
        "Real-time object recognition",
        "Intelligent contrast enhancement",
        "High-speed quad-core processor platform",
        "Network streaming capability"
      ]
    },
    applications: [
      { title: "Semiconductor Inspection", desc: "Microchip structure evaluation and defect analysis" },
      { title: "Metallurgical Failure Analysis", desc: "Surface integrity and material characterization" },
      { title: "Biological Tissue Observation", desc: "High-contrast cellular and microstructure imaging" },
      { title: "Food Safety & Contamination", desc: "Foreign particle and structural inspection" },
      { title: "Academic & Industrial R&D", desc: "Research laboratories and quality control environments" }
    ],
    designHighlights: [
      { title: "CNC-machined aluminum alloy body", desc: "Rigid structure ensures optical stability" },
      { title: "Anodized, wear-resistant finish", desc: "Long-term durability under frequent operation" },
      { title: "Precision handwheel focus control", desc: "Smooth, stable fine adjustment" },
      { title: "Stable optical alignment", desc: "Maintains calibration across extended use" },
      { title: "Maintains working distance stability", desc: "No shift during focus adjustment" }
    ],
    comparison: [
      { feature: "Apochromatic optics", ultra: "Yes", conventional: "Limited" },
      { feature: "Zoom ratio", ultra: "10:1", conventional: "Often 6:1" },
      { feature: "Field of view", ultra: "1.5×", conventional: "Lens-limited" },
      { feature: "Upgrade support", ultra: "Open architecture", conventional: "Closed" },
      { feature: "Intelligent measurement", ultra: "Automated + Export", conventional: "Manual" }
    ]
  },

  "2d-transfer-motorised": {
    category: "2D Materials Prototyping",
    name: "2D TRANSFER SYSTEM with Motorised Controller",
    subtitle: "Motorised Control of XY, Z, R & Tilt Axes",
    // Replace with the cropped image of the full system from Image 1 or 2
    heroImage: "/images/2d-transfer-hero.png", 
    gallery: [],
    overview: [
      "CRYO introduces a state-of-the-art fully motorised 2D material transfer system, engineered to handle atomic-thin flakes with precise deterministic placement.",
      "The integrated design provides sub-micron resolution control across XY, Z, Rotation, and Tilt axes, making it an ideal research-grade solution for graphene, TMDCs, and advanced materials development.",
      "This system is designed for seamless integration and customization, enabling precise deterministic placement and multilayer heterostructure assembly, essential for twistronics, and nanoscale device fabrication.",
    ],
    keyFeatures: [
      "Fully motorised XY stages with sub-micron resolution",
      "Precise motorised rotation and tilt control of both sample and transfer probe",
      "Motorised Z-axis with fine-focus capability",
      "Integrated high-resolution imaging system with motorised zoom",
      "Vacuum chuck sample stage",
      "User-friendly control software",
      "Compact footprint",
      "Vibration isolation system (optional)"
    ],
    //NEW FOR ANIMATION: Subsystems Structured Data for interactive diagram
    subsystems: [
      { id: "stage", title: "Motorised stages (XY, Z, R, T)", icon: Cpu, desc: "High-precision motorised control" },
      { id: "holder", title: "Vacuum Chuck Sample Stage", icon: Layers, desc: "Standard 2-inch, upgradable to 4-inch" },
      { id: "transfer", title: "Transfer Heads (Heating & Non-heating)", icon: Zap, desc: "Modular, customisable configurations" },
      { id: "optical", title: "Integrated Imaging System", icon: Camera, desc: "Microscope, camera, & motorised zoom" },
      { id: "control", title: "Control Electronics & Software", icon: Settings, desc: "User-friendly PC control platform" }
    ],
    // NEW FOR ANIMATION: Special section for special visualizer
    automationProcess: [
      "Deterministic Placement",
      "Multilayer Heterostructure Assembly",
      "Twist angle control",
      "Flake mapping and search (optional)",
      "Automated sample and probe alignment (optional)"
    ],
    applications: [
      { title: "Graphene Devices", desc: "Fabrication of high-performance graphene-based electronics." },
      { title: "TMDCs and Van der Waals", desc: "Assembly of Transition Metal Dichalcogenides and heterostructures." },
      { title: "Twistronics Research", desc: "Precise twist angle control for novel quantum material studies." },
      { title: "Flexible Electronics", desc: "Deterministic transfer of nanoscale components onto flexible substrates." },
      { title: "Photovoltaic Cells", desc: "Development and testing of advanced solar cell materials." },
      { title: "Sensor Development", desc: "Integrating 2D materials for high-sensitivity sensor applications." }
    ],
    // NEW FOR ANIMATION: Structured for Auto-playing Showcase
    designHighlights: [
      { title: "Fully Automated deterministic placement", desc: "Sub-micron repeatability across mapping grids.", component: "Logic Core" },
      { title: "Customisable Transfer Heads", desc: "Modular heating stages or custom probe options.", component: "Transfer Arm" },
      { title: "Motorised Zoom & High-Resolution Imaging", desc: "Integrated digital microscope path with motorised focus.", component: "Optical Path" },
      { title: "PC-Based Control Software", desc: "User-friendly interface for axis control and sequence automation.", component: "Software UI" }
    ],
    modularitySpecs: {
      "Technical Specifications": [
        "Fully fully motorised 2D material transfer system with customised options",
        "Deterministic placement for twistronics and Multilayer Heterostructure Assembly",
        "Integrated vibration isolation option available"
      ]
    },
    // NEW FOR ANIMATION: Detailed Specs Structured for a special visualization
    technicalSpecsStructured: {
      "Motorised Stages": [
        { axis: "XY Travel Range", spec: "Up to 100 mm", res: "0.1 µm" },
        { axis: "Z Travel Range", spec: "Up to 25 mm", res: "0.1 µm" },
        { axis: "Rotation (R) Range", spec: "360°", res: "0.01°" },
        { axis: "Tilt (T) Range", spec: "±5°", res: "0.01°" },
      ],
      "Microscope/Optical": [
        { feature: "Imaging System", spec: "Integrated High-Resolution Camera", res: "Sub-micron visible" },
        { feature: "Zoom", spec: "Integrated Motorised Zoom", res: "Manual/Software control" },
        { feature: "Lighting", spec: "LED", res: "Adjustable Brightness" },
      ],
      "Sample Holder": [
        { component: "Sample Holder Size", spec: "Standard 2 inch (up to 4 inch option)", res: "Vacuum chuck" },
        { component: "Heating Stage", spec: "Heating up to 200°C option", res: "Optional" },
      ],
      "Controller": [
        { type: "Control Unit", spec: "Compact Footprint", res: "Stand-alone Controller Box" },
        { type: "Interface", spec: "USB", res: "Compatible with PC-Based Software" },
      ]
    }
  },

  "spectroscopy-magnet": {
    category: "Electromagnets",
    name: "Variable Gap Electromagnet System",
    subtitle: "High Field Strength and Unmatched Uniformity for Research.",
    // Replace with a high-resolution, light-themed product image from brochure
    heroImage: "/images/variable-gap-electromagnet.png", 
    gallery: [],
    overview: [
      "CRYO presents a versatile Variable Gap Electromagnet System, meticulously engineered to produce high magnetic field strengths with sub-micron uniformity. This system is designed for researchers demanding precise, deterministic variable field generation.",
      "The integrated modular architecture allows for seamless integration into custom experimental setups. With support for both air and water cooling, sub-micron resolution gap automated control, and high purity soft iron core optimization, this system delivers consistent, stable long-term performance.",
      "Available in multiple standardized and custom model configurations, including the PE-series, this platform is compatible with high-performance bipolar power supplies, making it an ideal research-grade solution for spintronics, magneto-optics, and advanced materials development.",
    ],
    keyFeatures: [
        "Uniform Magnetic Field",
        "Variable Pole Gap",
        "Variable Pole Shape",
        "Custom designs are available",
        "Water Cooled Electromagnets",
        "Air Cooled Electromagnets",
        "High Magnetic Field",
        "Bipolar Power Supply Compatibility",
        "Robust construction",
        "High Purity Soft Iron Core Optimization"
    ],
    // NEW STRUCTURED DATA: Models & key performance indicators (Images 1 & 2)
    models: [
      { id: "50mm", name: "50mm Pole Diameter", field_T: 1.85, field_Oe: 18500, maxGap: 50, cooling: "Water" },
      { id: "100mm", name: "100mm Pole Diameter", field_T: 2.2, field_Oe: 22000, maxGap: 50, cooling: "Water" },
      { id: "PE-1", name: "PE-1 Standard Model", field_T: 1.0, field_Oe: 10000, maxGap: 50, cooling: "Air/Water" },
      { id: "PE-2", name: "PE-2 Standard Model", field_T: 1.0, field_Oe: 10000, maxGap: 60, cooling: "Air/Water" },
      { id: "PE-3", name: "PE-3 Standard Model", field_T: 0.6, field_Oe: 6000, maxGap: 80, cooling: "Air/Water" },
    ],
    // NEW STRUCTURED DATA: Specific Performance Points for Interactive Graph (Image 3)
    // Points simulated to match graph curves. Data: Field (Tesla) vs Current (Amps)
    performanceCurves: {
      "PE-1": [ { current: 0, field: 0.00 }, { current: 0.5, field: 0.23 }, { current: 1.0, field: 0.51 }, { current: 1.5, field: 0.73 }, { current: 2.0, field: 0.89 }, { current: 2.5, field: 1.00 } ],
      "PE-2": [ { current: 0, field: 0.00 }, { current: 0.5, field: 0.20 }, { current: 1.0, field: 0.44 }, { current: 1.5, field: 0.62 }, { current: 2.0, field: 0.75 }, { current: 2.5, field: 0.85 }, { current: 3.0, field: 1.00 } ],
      "PE-3": [ { current: 0, field: 0.00 }, { current: 1.0, field: 0.22 }, { current: 2.0, field: 0.46 }, { current: 3.0, field: 0.60 } ]
    },
    // NEW STRUCTURED DATA: Matrix layout for specification tables (Images 1, 2, 3)
    // Structured by Model, then by specification key.
    modelMatrix: {
        "Technical Specifications": {
            columns: ["Metric", "PE-1", "PE-2", "PE-3"],
            rows: [
                ["Field Strength (Gap: 10mm)", "1.0 T / 10,000 Oe", "1.0 T / 10,000 Oe", "0.6 T / 6,000 Oe"],
                ["Gap Range", "0 – 50 mm", "0 – 60 mm", "0 – 80 mm"],
                ["Max Gap Range (PE Series)", "50 mm", "60 mm", "80 mm"],
                ["Current (Max)", "2.5 Amps", "3.0 Amps", "3.0 Amps"],
                ["Coil Resistance", "12 Ω", "13 Ω", "23 Ω"],
                ["Power Consumption", "75 Watts (Max)", "117 Watts (Max)", "207 Watts (Max)"],
                ["Cooling Method", "Air or Water-Cooled", "Air or Water-Cooled", "Air or Water-Cooled"],
                ["Pole Shape Options", "Customisable: 2-stage/4-stage/Radial", "Customisable: 2-stage/4-stage/Radial", "Customisable: 2-stage/4-stage/Radial"],
                ["Robust Construction", "ISO 9001:2008 Certified Design", "ISO 9001:2008 Certified Design", "ISO 9001:2008 Certified Design"]
            ]
        },
        "Physical Specifications": {
            columns: ["Metric", "PE-1", "PE-2", "PE-3"],
            rows: [
                ["Weight", "60 kg (Approx)", "70 kg (Approx)", "75 kg (Approx)"],
                ["Dimensions (L x W x H)", "300 x 200 x 250 mm", "320 x 210 x 260 mm", "330 x 220 x 270 mm"],
                ["Sub-micron Resolution", "< 1 µm (With Encoder)", "< 1 µm (With Encoder)", "< 1 µm (With Encoder)"]
            ]
        }
    },
    probingCompatibility: {}, // Removed as not microscope related
    designHighlights: [
        { title: "Bipolar power supply compatible", desc: "Supports rapid field inversion and complex AC field generation sequences.", component: "Logic Core" },
        { title: "High Purity soft iron core optimization", desc: "Designed for stable long-term performance with minimal thermal drift.", component: "Transfer Arm" },
        { title: "Iso-Certified Robust Construction", desc: "Engineered for repeatable sub-micron variable gap automated control.", component: "Optical Path" },
        { title: "Variable Pole Gap and Pole Shape", desc: "Provides ultimate flexibility for custom deterministic placement of magnetic experimental conditions.", component: "Software UI" }
    ],
    modularitySpecs: {
      "Custom Designs": [
        "ISO-Certified custom pole diameter configurations",
        "Multiple standardized and custom pole shape options",
        "Water cooled and air cooled system optimization available",
        "Optional vibration isolation system available",
        "High-performance bipolar power supply integration available"
      ]
    },
  },

  "bitter-magnet": {
    category: "Electromagnets",
    name: "Bitter Type Electromagnet",
    subtitle: "(Air-Core DC Magnet)",
    tagline: "High-Field Air-Core DC Magnet Systems for Precision Research and Industrial Applications.",
    heroImage: "/images/bitter-magnet-hero.png", // Image 1 (Full system)
    gallery: [
      "/images/bitter-magnet-internal.png", // Image 2 (Cutaway view)
      "/images/bitter-magnet-specs.png"     // Image 3 (Plates/Coils)
    ],
    overview: [
      "Engineered for generating stable, high magnetic fields under continuous operation for advanced research environments.",
      "Our Bitter type electromagnets apply advanced precision machining and thermally managed cooling solutions to handle exceptionally high current densities and mechanical stresses."
    ],
    applications: [
      "Gyrotron Magnet Systems",
      "High-Power Microwave & RF Research",
      "Plasma Physics Experiments",
      "Accelerator & Beamline Laboratories",
      "Magnetic Field-Dependent Material Characterization"
    ],
    whyBitter: {
      description: "Unlike conventional wire-wound solenoids, CryoNano Bitter magnets use stacked copper plates forming a helical current path:",
      points: [
        "Extremely High Current Density",
        "Superior Heat Dissipation",
        "Excellent Mechanical Strength",
        "Scalable High-Field Architecture"
      ]
    },
    // Using numerical labels for the diagram integration
    systemArchitecture: [
      { id: "1.1", title: "Copper Bitter Plates", desc: "Precision-machined copper plates forming the core helical current path." },
      { id: "1.2", title: "Insulating Spacers", desc: "High-strength insulating spacers placed between plates." },
      { id: "1.3", title: "Cooling Channels", desc: "Aligned channels allowing axial flow of de-ionized water." },
      { id: "1.4", title: "Dual Coils (Series)", desc: "Dual concentric coils, series-connected for scalable high-field generation." }
    ],
    constructionDetails: [
      "Precision-machined copper Bitter plates",
      "High-strength insulating spacers",
      "Helical current path geometry",
      "Dual concentric coils, series-connected",
      "High mechanical robustness under Lorentz forces"
    ],
    coolingSystem: [
      "Axial De-ionized Water Cooling Architecture",
      "Cooling through aligned plate channels",
      "Typical inlet temperature ~10°C",
      "Pressure up to 12 bar",
      "Continuous-duty rated design"
    ],
    footers: [
      "Engineered for High-Field Stability • Built for Continuous Operation",
      "Advanced Thermal Engineering • Built for Continuous High-Current Operation",
      "Research-Grade High-Field Performance • Custom Engineered Systems"
    ],
    technicalSpecifications: {
      header: "Precision-engineered air-core DC Bitter magnet for stable high-field operation.",
      coreParameters: [
        { label: "Magnet Type", value: "Air-Core DC Bitter Electromagnet" },
        { label: "Bore Diameter", value: "65 mm" },
        { label: "Axial Length", value: "300 mm" },
        { label: "Maximum Central Field", value: "Up to 1.1 Tesla" },
        { label: "Field Profile", value: "Peak at center, symmetric axial decay" },
        { label: "Coil Configuration", value: "Dual concentric coils, series connected" }
      ],
      electricCoolingParameters: [
        { label: "Cooling Method", value: "De-ionized water cooling" },
        { label: "Cooling Flow Direction", value: "Axial through aligned Bitter plate channels" },
        { label: "Cooling Water Temperature", value: "~10 °C" },
        { label: "Cooling Water Pressure", value: "Up to 12 bar" },
        { label: "Operating Current", value: "~1000 A (application dependent)" },
        { label: "Continuous Operation", value: "Yes" }
      ]
    }
  },




 "emc2t-2-magnet": {
    category: "Electromagnets",
    name: "EMC2T- 2 Tesla Variable Gap C-Frame Electromagnet",
    subtitle: "Advanced Coil Design & Precision Power Supply System",
    tagline: "Optimized Magnet Architecture for Cryogenic and Precision Measurement Systems",
    heroImage: "/images/emc2t-hero.png", 
    overview: [
      "The EMC2T is a compact 2 Tesla variable-gap C-frame dipole electromagnet engineered for laboratory-scale magnetic field experiments. Featuring water-cooled coils and a wide, adjustable pole gap, it enables stable, high-field operation while accommodating cryostats and auxiliary experimental hardware.",
      "Ideal for condensed-matter, low-temperature, and spin-based research, the EMC2T provides reliable 2 Tesla field generation for a wide range of magneto-transport and magneto-optical studies.",
      "Optimized for seamless laboratory integration, the EMC2T brings robust and flexible magnet design to precision cryogenic, optical, and transport experiments."
    ],
    keyFeatures: {
      header: "Advanced C-Frame Dipole and Precision Coil Design",
      features: [
        { title: "2 Tesla Field Strength", desc: "Generates stable magnetic fields up to 2 T for demanding laboratory experiments." },
        { title: "Variable Pole Gap", desc: "Adjustable gap accommodates samples, cryostats, and optical access requirements." },
        { title: "C-Frame Dipole Geometry", desc: "Open mechanical design allows easy sample access and integration of ancillary equipment." },
        { title: "Water-Cooled Coils", desc: "Efficient thermal management enables continuous operation at high fields." },
        { title: "Compact Footprint", desc: "Optimized for small-scale laboratory environments without compromising performance." },
        { title: "Wide Experimental Compatibility", desc: "Supports electrical, optical, and transport measurements under applied magnetic fields." }
      ]
    },
    magnetDesign: {
      header: "Robust Variable-Gap Dipole Architecture",
      components: [
        { id: "1.1", title: "C-Frame Geometry", desc: "Open architecture provides unobstructed access to the sample region and simplifies experimental integration." },
        { id: "1.2", title: "Variable Pole Gap", desc: "Wide adjustable gap accommodates cryostats, optical components and transport measurement setups." },
        { id: "1.3", title: "Precision Pole Faces", desc: "Machined pole surfaces ensure stable and uniform magnetic field distribution within the experimental region." },
        { id: "1.4", title: "Water-Cooled Coils", desc: "Thermally stabilized copper coils enable reliable continuous high-field operation." }
      ]
    },
    experimentalIntegration: {
      header: "Optimized for Laboratory Integration",
      features: [
        { title: "Cryostat Compatibility", desc: "The EMC2T accommodates low-temperature experimental systems positioned directly within the magnet gap." },
        { title: "Optical Access", desc: "Open C-frame structure allows laser beams and optical diagnostics to access the sample region." },
        { title: "Transport Measurement Ready", desc: "Supports magneto-transport experiments such as Hall and spin Hall measurements." },
        { title: "Flexible Laboratory Installation", desc: "Suitable for both bench-top and floor-mounted experimental platforms." }
      ]
    },
    technicalSpecifications: {
      header: "Precisely Engineered C-Frame Dipole Magnet",
      data: {
        "Magnetic Field": "Up to 2 Tesla",
        "Pole Gap": "0–50 mm (variable)",
        "Pole Face Area": "25 × 25 mm",
        "Pole Shape": "Square",
        "Pole Material": "Low-carbon steel",
        "Cooling": "Water-cooled copper coils",
        "Max Continuous Current": "140 A (80 V)",
        "Sample Region": "Compatible with Ø2–Ø25 mm samples in cryostats",
        "Mass": "60 kg (magnet only)"
      }
    },
    applications: [
      "Spintronics Research",
      "Quantum Materials Testing",
      "Magneto-Transport Measurements",
      "Magneto-Optical Studies",
      "Cryogenic Device Evaluation"
    ],
    footers: [
      "High-Field Capable • Variable Pole Gap • Precision Laboratory Instrument",
      "Precise Magnetic Control • Broad Experimental Integration • Compact Laboratory Instrument"
    ]
  },
  // --------------------------------------------
  // SERVICES SECTION 
  // --------------------------------------------

  "ac-dc-system-low": {
    category: "Converters",
    name: "AC-DC System",
    subtitle: "Low Power (0.3 kW – 6 kW)",
    tagline: "Compact, high-efficiency AC-DC converters designed for embedded systems, instrumentation, and industrial electronics.",
    heroImage: "/images/ac-dc-hero.png", // Ensure this is your black chassis image
    overview: [
      "Engineered to guarantee absolute power stability in mission-critical environments, our scalable AC-DC architecture delivers pure, low-ripple DC output under extreme operational stress.",
      "Featuring comprehensive protection circuits and active power factor correction (PFC), these high-density systems are built for defense, aerospace, and heavy industrial integration where failure is not an option."
    ],
    keyFeatures: [
      "Up to 95% Peak Efficiency",
      "Active Power Factor Correction (PFC > 0.99)",
      "Wide Universal Input: 85–265 VAC, 47–63 Hz",
      "Low Ripple & Noise (< 50mV pk-pk)",
      "High-Density Compact Chassis",
      "MTBF > 500,000 Hours"
    ],
    protection: [
      "Over-Voltage Protection (OVP) with Auto-Recovery",
      "Over-Current Protection (OCP)",
      "Continuous Short-Circuit Isolation",
      "Active Thermal Foldback & Protection",
      "3000 VAC Input-to-Output Isolation"
    ],
    designRange: [
      "Output Power: 300 W to 6 kW Scalable",
      "Standard Outputs: 12V, 24V, 28V, 48V DC",
      "Custom Voltage Trimming Available",
      "Conduction & Baseplate Cooling Optimized"
    ],
    environmental: {
      desc: "Built to withstand the most extreme operational environments.",
      specs: [
        "Shock & Vibration: MIL-STD-810G Compatible",
        "Operating Temperature: -40°C to +85°C (Baseplate)",
        "Dust and Ingress Resistance (Conformal Coating)",
        "High-Altitude Operation (Up to 30,000 ft)",
        "Severe Thermal Cycling Endurance"
      ]
    },
    applications: [
      { name: "Defense Systems", desc: "Radar, Electronic Warfare (EW), C4ISR platforms." },
      { name: "Aerospace Systems", desc: "Avionics, UAV payloads, and ground-support equipment." },
      { name: "Marine Platforms", desc: "Shipboard navigation and naval power grids." },
      { name: "Railways", desc: "EN50155 compliant rolling stock power delivery." },
      { name: "Telecom Infrastructure", desc: "Base station, 5G relay, and off-grid power delivery." },
      { name: "Industrial Control", desc: "Heavy manufacturing, robotics, and automation systems." }
    ],
    highPowerTier: {
      title: "High Power (6 kW – 30 kW)",
      desc: "Rugged AC-DC systems engineered for mission-critical heavy industrial environments."
    },
    technicalSpecifications: {
      "Input Voltage Range": "85–265 VAC (Universal)",
      "Input Frequency": "47–63 Hz",
      "Power Factor": "> 0.99 (Active PFC)",
      "Output Voltage Range": "12 VDC – 48 VDC (Factory Configurable)",
      "Output Power": "0.3 kW to 6.0 kW",
      "Efficiency": "Up to 95% (Load dependent)",
      "Ripple & Noise": "< 50 mV pk-pk (20MHz Bandwidth)",
      "Line/Load Regulation": "± 0.5% / ± 1.0%",
      "Isolation (In/Out)": "3000 VAC",
      "Operating Temp": "-40°C to +85°C",
      "MTBF": "> 500,000 Hours (MIL-HDBK-217F)"
    },
    footers: [
      "Reliable Power • High Efficiency • Rugged and Compliant"
    ]
  },




  "ac-dc-system-high": {
    category: "Converters",
    name: "AC-DC System (High Power Tier)",
    subtitle: "6 kW – 30 kW Solutions",
    tagline: "Rugged, master-orchestrated parallel systems delivering high current for heavy industrial power demands.",
    heroImage: "/images/ac-dc-high-hero.png", // Cropped chassis image
    overview: [
      "Compact, high-density AC-DC converters engineered for large-scale embedded instrumentation and industrial electronics enclosures.",
      "Optimized for high current output, these modules are designed to promise unwavering power stability and efficiency in severe industrial and defense environments.",
      "Ideally suited for high-power Radar, EW, Telecom, and marine platforms, this series represents the pinnacle of mission-critical electrical conversion."
    ],
    telemetryPatterns: {
      loadSharing: {
        totalLoad: 28.5,
        targetVoltage: 220,
        rippleV: 0.15,
        ripplePct: 0.07,
        redundancyState: "N+1 AVAILABLE"
      },
      // Accent logic for the new specifications table
      tableSpecs: {
        coolingFanStatus: ["FANS: ACTIVE", "FANS: NOMINAL"],
        deratingTemp: 60,
        currentPFC: 0.992
      }
    },
    systemArchitecture: {
      powerScaling: {
        title: "Scaling Density",
        data: ["6 kW to 30 kW range", "High power density", "Up to 30 kW chassis"]
      },
      redundancy: {
        title: "Modular N+1 Redundancy",
        data: ["Fault-Tolerant Operation", "Parallel current sharing", "N+1 architecture link"]
      },
      phaseInput: {
        title: "Phase Inputs",
        data: ["Universal 3-Phase Input", "380–480 VAC compatible", "PFC > 0.99"]
      },
      mechanical: {
        title: "Form Factors",
        data: ["19” Rack mount option", "Custom heavy-duty encl.", "Liquid / Air cooled chassis"]
      }
    },
    controlInterfaces: [
      { name: "CANbus", icon: Cpu, latency: "<5ms", standard: "J1939 Compliant" },
      { name: "Modbus TCP", icon: Database, latency: "<10ms", standard: "Industrial Ethernet" },
      { name: "RS485", icon: Layers, latency: "<20ms", standard: "Master/Slave link" }
    ],
    environmental: {
      desc: "Validated environmental durability for mission-critical loads.",
      specs: ["MIL-STD compatible", "Severe thermal cycling", "IP54/IP67 chassis options"]
    },
    // Comprehensive high-power researched data for the new table
    technicalSpecifications: {
      electricalInput: {
        "Phase Type": "Industrial 3-Phase",
        "Voltage Range": "208-480 VAC (+/-10%)",
        "Frequency Range": "47–63 Hz",
        "Power Factor (PFC)": "> 0.99 at full load",
        "Efficiency": "Up to 96% peak",
        "Hold-up Time": "> 15ms at full load"
      },
      electricalOutput: {
        "Nominal Voltage": "48 VDC (Customizable)",
        "Max Output Power": "30 kW per Chassis",
        "Line Regulation": "<0.1% for full range VAC",
        "Load Regulation": "<0.1% for 0–100% load",
        "Voltage Ripple": "<150mV peak-to-peak",
        "THD": "< 3% at full load",
        "Dynamic Response": "<500µs to 50% load step"
          
      },
      mechanicalEnv: {
        "Module Density": "3.5 kW / 1U Chassis",
        "Total Scalability": "Up to 1.2 MW in single rack",
        "Operating Temp": "-20°C to +60°C (with derating)",
        "Humidity": "95% Non-condensing",
        "Ingress Protection": "IP54 (Chassis) / Liquid opt.",
        "Acoustic Noise": "<65 dBA at 1 meter",
        "Altitude": "Up to 10,000 ft (operating)"
      }
    },
    applications: [
      { name: "Defense Systems", desc: "High-power Radar, Electronic Warfare (EW), C4ISR centers." },
      { name: "Aerospace Infrastructure", desc: "Avionics ground-support power and launch systems." },
      { name: "Marine Platforms", desc: "Shipboard grids and heavy naval electronics." },
      { name: "Telecom Infrastructure", desc: "Massive base station hubs and data center backup." },
      { name: "Railways", desc: "Substation power and EN compliant rolling stock systems." },
      { name: "Heavy Industrial Automation", desc: "Process control, massive PLC racks, and material handling." }
    ],
    footers: [
      "Reliable Power • High Efficiency • Rugged and Compliant"
    ]
  },

  "dc-dc-system-high": {
    category: "Converters",
    name: "DC-DC Converter",
    subtitle: "High Power Tier (6 kW – 30 kW Solutions)",
    tagline: "Unwavering, Master-Orchestrated Power Density for Heavy Industrial and Defense Platforms.",
    heroImage: "/images/dc-dc-high-hero.png", // Render showing a heavy-duty 19" rack-mount chassis
    overview: [
      "Engineered from the ground up to promise unwavered electrical stability for massive industrial and defense loads, our High Power DC-DC Tier represents the pinnacle of power management technology.",
      "This tier is designed to Promissing High-density configuration, delivering customizable output from 6 kW up to an impressive 30 kW per single 19” chassis.",
      "Optimized for N+1 redundant parallel operation, these systems feature autonomous current sharing and severe thermal cycling resistance, validated environmental durability in severe operational environments."
    ],
    // New data structure for the interactive "Module Pulse" visualizer
    modulePulse: {
      voltageIn: 650.4, // e.g., High Voltage DC input
      voltageOut: 48.2,  // Telecom/Industrial standard
      totalAmps: 622.5,  // Massive current
      efficiencyPercent: 96.8,
      modules: [
        { id: "M1", status: "MASTER", temp: 45, amps: 155.6, loadPct: 94 },
        { id: "M2", status: "SLAVE", temp: 47, amps: 155.8, loadPct: 94 },
        { id: "M3", status: "SLAVE", temp: 44, amps: 155.4, loadPct: 94 },
        { id: "M4", status: "SLAVE", temp: 46, amps: 155.7, loadPct: 94 },
        { id: "M5 (N+1)", status: "HOT STANDBY", temp: 28, amps: 0.1, loadPct: 0 } // Standby module
      ]
    },
    systemArchitecture: {
      powerScaling: {
        title: "Chassis Scaling",
        data: ["6 kW to 30 kW range", "Scalable Density per unit", "High Density configuration"]
      },
      redundancy: {
        title: "Modular N+1 Redundancy",
        data: ["Active Load Sharing", "Seamless Fault Tolerance", "Hot-Swappable Modules"]
      },
      inputFlex: {
        title: "Input Dynamics",
        data: ["Industrial Wide-Range Input", "e.g., 300V - 900V DC Source", "PFC & Stability Link"]
      },
      cooling: {
        title: "Thermal Management",
        data: ["Forced Air Cooling", "High-Velocity Internal Fans", "Optimized Airflow path"]
      }
    },
    performanceMetrics: {
      regulationV: "<0.1%",
      thdPercent: "<3%",
      dynamicResponse: "<2ms to 50% load step"
    },
    // New control interfaces data
    controlInterfaces: [
      { name: "CANbus", latency: "<10ms", type: "J1939 Compliant" },
      { name: "Modbus TCP", latency: "<20ms", type: "Industrial Ethernet" },
      { name: "RS485", latency: "<50ms", type: "Serial / Scada Link" }
    ],
    // Extracting environmental data directly from image description
    environmental: {
      validatedSpecs: ["MIL-STD Compatible", "Severe Thermal Cycling", "Shock & Vibration Validated", "Validated environmental durability", "NEMA / IP54 chassis options"]
    },
    // Researched for accuracy (representing as shared/research data mix)
    technicalSpecifications: {
      "Input Voltage Range": "300VDC - 900VDC (Customizable)",
      "Output Voltage Range": "24V / 48V / 110V / 220VDC (Customizable)",
      "Continuous Power": "30 kW Max per Chassis",
      "Peak Power (60s)": "36 kW (N+1 configuration)",
      "Efficiency": "Up to 96.8% at full load",
      "Module Weight": "Approx. 12kg",
      "Chassis Form Factor": "19” Rack mount option, 4U/5U Chassis",
      "Isolation (I/O)": ">2500 VDC",
      "Operating Temperature": "-20°C to +60°C (with derating)",
      "Storage Temperature": "-40°C to +85°C",
      "Protection": "Short Circuit, Over-Voltage, Under-Voltage, Over-Temp, Fan Fail"
    },
    // Extracting applications based on high-power tier capabilities
    applications: [
      { name: "Defense Platforms", icon: Radar, desc: "High-power Radar, EW, C4ISR infrastructure." },
      { name: "EV Charging Infrastructure", icon: Car, desc: "DC Fast Charging station master convertors." },
      { name: "Telecom Hubs", icon: Radio, desc: "Massive base station backup power and grid link." },
      { name: "Railways", icon: Train, desc: "Substation auxiliary power and track switching." },
      { name: "Marine Systems", icon: Ship, desc: "Naval shipboard power grids and weapon systems." },
      { name: "Heavy Industrial Automation", desc: "PLC banks, massive material handling, robotics centers." }
    ],
    // Shared structure for bottom footer band
    footers: [
      "Rugged. Scalable. Master-Orchestrated.",
      "MIL-STD Validation in Severe Environments",
      "High Power DC-DC Technology"
    ]
  },

  "dc-dc-system-low": {
    category: "Converters",
    name: "DC-DC Converter",
    subtitle: "Low Power Tier (Up to 5 kW Solutions)",
    tagline: "Compact Precision, Uncompromised Stability for High-Density Embedded Environments.",
    heroImage: "/images/dc-dc-low-hero.png", // Render showing a compact, multi-output embedded brick
    overview: [
      "Engineered from the ground up for Promissing High-density configuration, our Low Power DC-DC Tier represents the pinnacle of compact, efficient electrical conversion.",
      "Optimized to deliver Promissing High Efficiency and compact design, these systems ensure unwavering Promissing electrical stability for critical embedded instrumentation.",
      "Ideally suited for Embedded Instrumentation, Telecom Hubs, and Defense platforms, this series delivers scalable power up to 5 kW with meticulous regulation in space-constrained layouts."
    ],
    // Unique data for the "Live Regulation Oscilloscope" telemetry
    liveOscilloscope: {
      nominalVoltage: 48.0,
      simulatedRipple: 120, // mV peak-to-peak
      simulatedTHD: 0.8, // percent
      inputBus: 110.1,
      efficiencyPercent: 94.8,
      regulationNodes: [
        { id: "A", voltage: 48.01, stability: 99.98 },
        { id: "B", voltage: 47.99, stability: 99.97 },
        { id: "C", voltage: 48.00, stability: 99.99 },
        { id: "D", voltage: 48.02, stability: 99.98 }
      ]
    },
    // Extracted directly from brochure description text
    keyValueProposition: [
      { title: "Compact Design", icon: Box, desc: "Optimized for high power density per cubic inch." },
      { title: "High Efficiency", icon: ShieldAlert, desc: "Minimized thermal footprint through advanced topology." },
      { title: "Electrical Stability", icon: Activity, desc: "Ultra-precise regulation for sensitive instrumentation." }
    ],
    // Expanded based on brochure mention (embedded instrumentation, telecom, defense)
    deploymentSuitability: {
      telecom: ["Base Station Auxiliary Power", "Remote Radio Heads", "Network Interface Devices"],
      defense: ["Embedded Radar Processing", "Secure Communications", "Avionics Subsystems"],
      instrumentation: ["Medical Scanning Equipment", "High-Speed Data Acquisition", "Precision Lab Power"]
    },
    // Technical specifications extracted from brochure image + accurate research
    technicalSpecifications: {
      inputData: {
        "Nominal Inputs": "24V, 48V, 110V, 220VDC",
        "Input Range": "Wide Range Options (e.g., 2:1 / 4:1)",
        "Input Protection": "Reverse Polarity, Surge Suppression",
        "Soft Start": "Autonomous ramp control included"
      },
      outputData: {
        "Continuous Power": "Up to 5 kW Max",
        "Customization": "Fully customizable voltage ranges",
        "Regulation": "<±0.1% Line/Load Regulation",
        "Efficiency": "Up to 94.8% (typical)",
        "Noise/Ripple": "<1% Vout (peak-to-peak)",
        "Transient Response": "<200µs to 50% load change"
      },
      mechanicalEnv: {
        "Cooling": "Convection / Forced Air Options",
        "Form Factor": "Space-Optimized Brick / Embedded",
        "Operating Temp": "-40°C to +85°C (Case Temp)",
        "Storage Temp": "-55°C to +125°C",
        "Isolation": ">2000 VDC Input-to-Output",
        "Safety Compliance": "UL/IEC/MIL-STD applicable options"
      }
    },

    protectionProtocols: [
      { name: "Over-Voltage Protection (OVP)", threshold: "115% Vout Nom", recovery: "Autonomous Auto-Recovery" },
      { name: "Over-Current Protection (OCP)", threshold: "110–140% Iout Max", recovery: "Continuous Hiccup Mode" },
      { name: "Short-Circuit Protection (SCP)", threshold: "Impedance < 50mΩ", recovery: "Auto-Restart on clear" },
      { name: "Thermal Shutdown (OTP)", threshold: "+105°C Baseplate", recovery: "Auto-Recovery at +90°C" }
    ],
    applicationGrid: [
      { name: "Embedded Instrumentation", icon: Microchip, desc: "Providing meticulous stability for high-speed analysis racks." },
      { name: "Telecom Infrastructure", icon: Antenna, desc: "Compact auxiliary power for hubs and base stations." },
      { name: "Defense Systems", icon: Radar, desc: "Validated rugged performance for battlefield electronics." },
      { name: "Medical Equipment", icon: Stethoscope, desc: "Ultra-low noise conversion for sensitive scanning platforms." },
      { name: "Robotics Control", icon: Bot, desc: "High-density power for mobile and fixed robotic joints." },
      { name: "Data Centers", icon: Server, desc: "Precision localized power rails for localized server nodes." }
    ],
    footers: [
      "Compact Density • Precise Regulation • Unwavering Stability",
      "5kW Embedded Power Solutions",
      "Low Power DC-DC Technology"
    ]
  },


  "dc-ac-inverters": {
    category: "Inverters",
    name: "DC-AC Pure Sine Wave Inverters",
    subtitle: "Clean, Stable AC Power from DC Sources",
    tagline: "Grid-quality AC power conversion with minimal distortion for mission-critical infrastructure.",
    heroImage: "/images/dc-ac-inverter-hero.png", // Render of the inverter
    overview: [
      "CRYONANO’s DC–AC pure sine wave inverters are engineered to convert DC power into high-quality AC output with minimal distortion.",
      "Designed for mission-critical environments, these systems ensure reliable operation of sensitive electronics and heavy infrastructure.",
      "From onboard railway supplies to remote defense mobile systems, our inverters guarantee continuous, low-EMI operation under dynamic load conditions."
    ],
    // New data structure for the "Pure Wave Transformation" visualizer
    waveTelemetry: {
      inputDC: "24V / 48V / 110V DC",
      outputAC: "120V / 230V AC",
      frequency: "50Hz / 60Hz",
      distortionTHD: "< 2%",
      efficiency: "Up to 96%"
    },
    // Extracted Key Features
    keyFeatures: [
      { title: "Pure Sine Wave", desc: "Grid-quality power output ensuring zero interference with sensitive loads." },
      { title: "Low EMI/RFI", desc: "Advanced filtering for low electromagnetic interference design." },
      { title: "Thermal Stability", desc: "High thermal efficiency with advanced cooling management." },
      { title: "Rugged Build", desc: "Constructed for continuous operation in harsh, high-vibration environments." }
    ],
    // Extracted Technical Overview
    technicalSpecs: {
      "Maximum Output Power": "Up to 10 kW",
      "DC Input Source": "Onboard DC supply / Battery systems",
      "AC Output Waveform": "Clean Pure Sine Wave",
      "Thermal Management": "Advanced active cooling architecture",
      "Noise Profile": "Low-EMI / Low-noise design",
      "Load Handling": "Reliable operation under varying dynamic loads"
    },
    // Extracted Use Case Insight
    useCaseInsight: {
      title: "Architectural Insight",
      desc: "Ideal for systems powered by battery banks or DC bus architectures where stable AC output is absolutely essential for operational reliability and equipment safety."
    },
    // Extracted Applications
    applications: [
      { name: "Railway Networks", desc: "Locomotives, metro systems, passenger coaches, and signaling." },
      { name: "Defense Systems", desc: "Military vehicles, mobile command units, and tactical systems." },
      { name: "Marine Platforms", desc: "Naval vessels, offshore rigs, and maritime communication." },
      { name: "Control Systems", desc: "Remote communication hubs and automated control systems." },
      { name: "HVAC & Onboard", desc: "Auxiliary power for HVAC systems and critical onboard electronics." }
    ],
    footers: [
      "Clean Power",
      "Reliable Operation",
      "Rugged and Efficient"
    ]
  },




  "inverter-400hz-rugged": {
    category: "Inverters",
    name: "400Hz Frequency Inverter",
    subtitle: "30 kW Rugged Aerospace Platform",
    tagline: "Precision Aviation Frequency Power Conversion for Demanding Military Mobile Platforms and Aerospace GSE.",
    heroImage: "/images/400hz-inverter-hero.png", // Render of the rugged module
    overview: [
      "CRYONANO’s 400Hz Frequency Inverter series is engineered for high-density, mission-critical aviation power conversion.",
      "Specifically engineered for high density configuration, this 30 kW unit converts 480VAC 3-phase to meticulous 115 / 200VAC, 3-phase, 400Hz output.",
      "Optimized to deliver exceptional stability and low EMI, this series utilizes an autonomous parallel redundant design with N+1 capability."
    ],
    // Unique data for the "Parallel Rack Synchronization" telemetry
    parallelSyncTelemetry: {
      inputACSource: "480VAC / 3Φ / 60Hz",
      outputACBus: "115V / 200VAC / 3Φ / 400Hz",
      frequencyPulse: 400, // Visual representation (Hz)
      modules: [
        { id: "M01", amps: 75.1, loadPct: 75, status: "MASTER", syncTime: "12ms" },
        { id: "M02", amps: 74.9, loadPct: 74, status: "SYNCED", syncTime: "15ms" },
        { id: "M03", amps: 75.0, loadPct: 75, status: "SYNCED", syncTime: "10ms" },
        { id: "M04", amps: 0.0, loadPct: 0, status: "HOT STANDBY", syncTime: "N/A" } // N+1 module
      ]
    },
    // Extracted directly from brochure description text
    keyValueProposition: [
      { title: "N+1 Redundancy", icon: Layers, desc: "Modular architecture ensuring zero downtime operation." },
      { title: "High Power Density", icon: Shield, desc: "Compact 30 kW platform optimized for severe constraints." },
      { title: "Autonomous Control", icon: Settings, desc: "Automatic parallel current sharing and active synchronization." },
      { title: "Meticulous Stability", icon: Target, desc: "Unwavering 400Hz frequency and voltage regulation." }
    ],
    // Expanded based on brochure mention
    deploymentApplications: {
      hangarGSE: ["Hangar Floor Auxiliary Power", "Cockpit Avionics Test", "Aircraft Maintenance Service"],
      mobileMilitary: ["Military Mobile Radar Racks", "Defense Mobile Command Units", "Towed Support Electronics"]
    },
    // Technical specifications extracted from brochure image + accurate research
    technicalSpecifications: {
      inputData: {
        "Nominal Input": "480VAC, 3-Phase",
        "Input Frequency": "60Hz (typical)",
        "Input Protection": "Reverse Polarity, Surge Suppression",
        "Filtering": "Integrated Active Input Filter"
      },
      outputData: {
        "Continuous Power": "30 kW Max",
        "Output Voltage": "115V / 200VAC, 3-Phase (Wye/Star)",
        "Output Frequency": "Meticulous 400Hz",
        "Regulation": "<±1.0% Line/Load Regulation",
        "THD": "< 3% typical (Linear Load)",
        "Overload Cap": "110% for 10 min, 125% for 1 min"
      },
      mechanicalEnv: {
        "Cooling": "Rugged Active Cooling Architecture",
        "Form Factor": "Compact, High-Density configuration",
        "Operating Temp": "-40°C to +60°C (Extended Range)",
        "MIL-STD Environment": "Validated against Shock/Vibe (MIL-STD-810G)",
        "MIL-STD EMI": "Optimized low EMI design (MIL-STD-461G)"
      }
    },
    controlInterfaces: [
      { name: "RS-232 / RS-485", latency: "< 5ms" },
      { name: "CANbus / J1939", latency: "< 2ms" },
      { name: "Ethernet / SNMP", latency: "< 10ms" },
      { name: "Local Control Panel", latency: "Immediate" }
    ],
    footers: [
      "Rugged Design • Meticulous Frequency • High Density",
      "30 kW Aerospace Power Solutions",
      "GSE Auxiliary & Mobile Military Platform"
    ]
  }
};