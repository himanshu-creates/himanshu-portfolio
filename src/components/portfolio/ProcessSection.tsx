import { motion } from "framer-motion";
import { Search, PenTool, MousePointerClick, CheckCircle } from "lucide-react";

const steps = [
  { icon: Search, label: "Research", desc: "Understanding users and market" },
  { icon: PenTool, label: "Wireframe", desc: "Sketching layout and structure" },
  { icon: MousePointerClick, label: "Prototype", desc: "Interactive design testing" },
  { icon: CheckCircle, label: "Final UI", desc: "Polished, pixel-perfect design" },
];

const ProcessSection = () => (
  <section id="design-process" className="section-padding">
    <div className="max-w-5xl mx-auto">

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-display font-bold mb-16 gradient-text"
      >
        Design Process
      </motion.h2>

      <div className="relative">

        {/* desktop connecting line */}
        <div className="hidden md:block absolute top-10 left-0 right-0 h-[2px]
        bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 opacity-50" />

        {/* mobile vertical line */}
        <div className="md:hidden absolute left-6 top-0 bottom-0 w-[2px]
        bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 opacity-40" />

        <div className="grid md:grid-cols-4 gap-12">

          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative flex md:flex-col items-start md:items-center text-left md:text-center gap-6 md:gap-0"
            >

              {/* icon */}
              <div className="z-10 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center
              bg-secondary/40 backdrop-blur-md
              border border-primary/30
              shadow-[0_0_25px_rgba(139,92,246,0.35)]
              hover:scale-110 transition">

                <step.icon className="text-primary" size={26} />

              </div>

              {/* text */}
              <div className="md:mt-6 max-w-[200px]">

                <h3 className="font-display font-semibold text-lg mb-1">
                  {step.label}
                </h3>

                <p className="text-muted-foreground text-sm">
                  {step.desc}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </div>
  </section>
);

export default ProcessSection;