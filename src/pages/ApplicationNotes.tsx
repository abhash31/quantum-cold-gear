import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Microscope, Zap, Magnet, FlaskConical } from "lucide-react";
import { Link } from "react-router-dom";

const notes = [
  {
    id: "gate-voltage-graphene",
    icon: Zap,
    title: "Gate Voltage Control on Graphene Devices",
    sections: [
      {
        content: [
          "We have carried out several experiments and published two papers (Phys. Rev. Lett. 125, 076802 – Published 12 August 2020; Phys. Rev. B 104, 085304 – Published 9 August 2021).",
        ],
      },
      {
        subtitle: "Gate Voltage Control on Graphene Devices",
        content: [
          "In general graphene devices are made on SiO₂/n-Si substrate. To tune the carrier density in graphene back gate voltage (on n-Si) is controlled. The IVS can be a suitable voltage source for the back gate in graphene devices. Since IVS has isolated truly bipolar four sources, it can deliver output +/- 40 V by adding the sources in series. We found IVS is very handy in back gating purpose of the graphene devices (figure 2).",
          "Common example of graphene devices can be found in ACS Appl. Nano Mater. 2022, 5, 8, 10941–10950 (Publication Date: July 20, 2022).",
        ],
        figureCaption: "Figure 2: Graphene device for H₂ gas sensing",
      },
      {
        subtitle: "I-V Spectroscopy of Fractional Quantum Hall System",
        content: [
          "Generally, a DC and an AC voltage excitation are used to measure dI/dV conductance with DC voltage excitation. In such measurement IVS is used as a DC voltage source. Since IVS is a low noise 16-bit digital to analog converter, it is very useful for our experiments without any ground-loop problem because of isolation. Some representative data is given in figure 3.",
        ],
        figureCaption: "Figure 3: Differential transmittance conductance (e²/h) versus DC voltage bias",
      },
    ],
    figureCaptions: [
      "Figure 1: Gates g1–g4 are controlled by IVS for separately contacting edge modes",
    ],
  },
  {
    id: "josephson-junction",
    icon: FlaskConical,
    title: "Helium Dipstick with DC, RF, DC Magnet for Characterizing Josephson Junction",
    author: "Fabrication Complexities: Dr. Deep Talukdar — Cryonano LABS",
    sections: [
      {
        subtitle: "Objective",
        content: [
          "The dipstick would be used to characterize a Josephson Junction at 4K using I-V measurements. The environment would be in presence of a small magnetic field 0.1 Tesla or an RF field supplied externally from top.",
        ],
      },
      {
        subtitle: "Measurements Required",
        content: [
          "The dipstick would have 24 pin DC measurements with 24 in-line Cryogenic low pass DC-RF filters. The sample space would have chip carriers with in-plane and out of plane measurements. The connections would come out in a breakout box with Fischer connectors breaking out into 24 BNC connectors. It would also have room temperature RF filters built in.",
        ],
      },
      {
        subtitle: "What We Did",
        content: [
          "We made a stainless steel dipstick with three separate stainless steel tubes to isolate the DC lines, heater and Cernox Sensor Lines, and Magnet DC lines. A separate RF semi-rigid cable was used from the top as an antenna to send RF signal up to 18 GHz.",
          "A 24-line cryogenic low pass filter was incorporated inline and wire thermalization bobbins were used in-line. The sample holder was gold plated OFC with in-plane and out-of-plane chip carrier holders. BeCu wire looms were used for sample connections with appropriate breaks.",
          "A mu-metal shield was placed outside the sample box sealed with indium seals to guard against Earth's magnetic field.",
        ],
      },
    ],
  },
  {
    id: "2d-transfer",
    icon: Microscope,
    title: "2D Transfer of Materials — Process and Dynamics",
    author: "Short Application Note by: Mr Sourav Paul with inputs from Mr Vineet Pandey — Research Scholar, Materials Science Centre, IIT Kharagpur",
    sections: [
      {
        content: [
          "We have successfully fabricated a lot of 2D heterostructures precisely with well control using the 2D transfer system by Cryonano. We have published a research article where we described a modified transfer method using the setup. Here we write a short note on the procedure of 2D dry transfer (universal dry transfer).",
          "In the 2D transfer setup there are two types of stage: (i) XYΘ and (ii) XYZ stage. The XYZ stage has a facility to hold a cantilever type plate.",
        ],
      },
      {
        subtitle: "Step 1: Preparation",
        content: [
          "First we prepared a hemisphere structure on a cleaned coverslip using PDMS. PPC has been spin coated on PDMS. Under the microscope, the upside down PDMS/PPC on coverslip has been aligned on the sample which is placed on sample holder of our 2D transfer system.",
        ],
      },
      {
        subtitle: "Step 2: Pick-up of h-BN",
        content: [
          "The PDMS/PPC picks up the few-layer mechanically exfoliated h-BN flake from substrate at 65°C first. We use SiO₂/Si as a substrate. The microscope shows how it looks when the 2D flake is on substrate, when the PDMS/PPC touches the substrate (yellow interface), and after picking up how the picked up 2D flake on PDMS looks (transparent interface).",
        ],
      },
      {
        subtitle: "Step 3: Pick-up of 2D Materials",
        content: [
          "To pick up any exfoliated 2D materials including Graphene and TMDs using the PDMS/PPC/hBN stack, we follow the same procedure of Step 2 after precisely aligning the 2D flake with hBN which is now on the PDMS hemisphere. This time the pick up temperature is 55°C.",
        ],
      },
      {
        subtitle: "Step 4: Final Transfer",
        content: [
          "Final transfer is generally done at high temperature. In this step, the PDMS/PPC/hBN/2D flake is aligned and touched on another hBN which is exfoliated on a cleaned substrate at 85°C. Then we slowly move the cantilever plate upward. The PDMS/PPC will de-touch from the heterostructure (hBN/2D flake/hBN). The heterostructure needs to be cleaned in acetone for a few minutes followed by IPA to remove residue from PPC.",
        ],
      },
      {
        subtitle: "Publication",
        content: [
          "The full detail of the transfer process can be found in: \"Raman spectroscopic studies on the evolution of interlayer coupling and stacking order in twisted bilayers and polytypes of WSe₂\" — Sourav Paul et al., Journal of Applied Physics 133, 114301 (2023).",
          "To make a successful transfer it is important to understand the live optical micrographs during the time the sample is about to touch another sample on stamp and when it has finally touched to control the process carefully.",
        ],
      },
    ],
  },
  {
    id: "electromagnet-optical",
    icon: Magnet,
    title: "Electromagnet with Optical Access Installation at INST Mohali",
    sections: [
      {
        subtitle: "Complexity",
        content: [
          "The complexity of the electromagnet involved drilling of a bore at the center of the pole pieces for optical access. The user wanted to send laser through the center holes for Magneto-Optic experiments.",
        ],
      },
      {
        subtitle: "Setup Details",
        content: [
          "Datasheet being made with Gaussmeter and transverse probes for checking the field uniformity.",
          "The electromagnet features straight, perfectly aligned holes along the axis of the magnetic pole pieces.",
          "Final installation of the electromagnet along with the water chiller for cooling of the coils.",
        ],
      },
      {
        subtitle: "Documentation",
        content: [
          "Document: Manual of EMCT2 with optical access compatibility.",
        ],
      },
    ],
  },
];

const ApplicationNotes = () => {
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
              <span className="text-foreground font-medium">Application Notes</span>
            </div>
          </div>
        </div>

        {/* Hero */}
        <section className="container py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">
              Resources
            </span>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Application Notes
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore real-world experiments and research applications using our quantum hardware, cryogenic systems, and electromagnets — contributed by leading researchers and institutions.
            </p>
          </motion.div>
        </section>

        {/* Notes */}
        {notes.map((note, idx) => {
          const Icon = note.icon;
          return (
            <section
              key={note.id}
              id={note.id}
              className={`py-16 ${idx % 2 === 0 ? "bg-secondary/30 border-y border-border" : ""}`}
            >
              <div className="container max-w-4xl">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="rounded-sm bg-primary/10 p-3 shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground">
                        {note.title}
                      </h2>
                      {note.author && (
                        <p className="text-sm text-muted-foreground mt-1 italic">{note.author}</p>
                      )}
                    </div>
                  </div>

                  {note.sections.map((section, si) => (
                    <div key={si} className="mb-8">
                      {section.subtitle && (
                        <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                          {section.subtitle}
                        </h3>
                      )}
                      <div className="space-y-3">
                        {section.content.map((p, pi) => (
                          <p key={pi} className="text-muted-foreground leading-relaxed">{p}</p>
                        ))}
                      </div>
                      {section.figureCaption && (
                        <div className="mt-4 bg-card border border-border rounded-sm p-6 flex items-center justify-center">
                          <p className="text-xs text-muted-foreground italic">{section.figureCaption}</p>
                        </div>
                      )}
                    </div>
                  ))}

                  {note.figureCaptions?.map((cap, ci) => (
                    <div key={ci} className="mt-2 bg-card border border-border rounded-sm p-6 flex items-center justify-center">
                      <p className="text-xs text-muted-foreground italic">{cap}</p>
                    </div>
                  ))}
                </motion.div>
              </div>
            </section>
          );
        })}

        {/* CTA */}
        <section className="bg-primary py-16">
          <div className="container text-center">
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">
              Have a Research Application?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Share your application note with us or contact our engineering team for custom solutions tailored to your experiments.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link to="/">
                <button className="inline-flex items-center justify-center gap-2 h-11 rounded-md px-8 text-sm font-semibold bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors">
                  <BookOpen className="h-4 w-4" />
                  Explore Products
                </button>
              </Link>
              <button className="inline-flex items-center justify-center gap-2 h-11 rounded-md px-8 text-sm font-semibold border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-colors">
                Submit Your Application Note
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ApplicationNotes;
