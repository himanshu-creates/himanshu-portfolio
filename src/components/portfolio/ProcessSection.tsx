import { motion } from "framer-motion";
import { Search, PenTool, MousePointerClick, CheckCircle } from "lucide-react";

const steps = [
  { icon: Search, label: "Research", desc: "Understanding users and market" },
  { icon: PenTool, label: "Wireframe", desc: "Sketching layout and structure" },
  { icon: MousePointerClick, label: "Prototype", desc: "Interactive design testing" },
  { icon: CheckCircle, label: "Final UI", desc: "Polished, pixel-perfect design" },
];

const ProcessSection = () => (
  <section id="process" className="section-padding">
    <div className="max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-display font-bold mb-12 gradient-text inline-block"
      >
        Design Process
      </motion.h2>

      <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2 z-0" />

        {steps.map((step, i) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative z-10 flex-1 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4 border border-primary/30">
              <step.icon className="text-primary" size={24} />
            </div>
            <h3 className="font-display font-semibold mb-1">{step.label}</h3>
            <p className="text-muted-foreground text-sm">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
