const footerLinks = [
  {
    title: "Quantum Hardware",
    links: ["QuantumVibe", "CryoConnect", "CryoClean", "DACsys"],
  },
  {
    title: "Cryogenics",
    links: ["Nano Stage", "Probe Station", "4K Microscope", "Dipstick", "Electromagnets"],
  },
  {
    title: "Power Systems",
    links: ["AC-DC Converters", "DC-DC Converters", "Inverters", "Battery Chargers"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Service & Support", "Contact"],
  },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground border-t border-primary-foreground/10">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary text-primary-foreground font-display font-bold text-lg px-2.5 py-1 rounded">
                QE
              </div>
            </div>
            <p className="text-sm opacity-60 leading-relaxed">
              Engineering the future of quantum & cryogenic technology.
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-semibold text-sm mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm opacity-60 hover:opacity-100 hover:text-primary transition-all">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs opacity-50">
            © {new Date().getFullYear()} Quantum Engineering. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs opacity-50 hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="text-xs opacity-50 hover:opacity-100 transition-opacity">Terms of Service</a>
            <a href="#" className="text-xs opacity-50 hover:opacity-100 transition-opacity">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
