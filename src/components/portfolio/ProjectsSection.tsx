import { motion } from "framer-motion";
import { ExternalLink, Calendar } from "lucide-react";
import lokvaniImg from "@/assets/lokvani-preview.jpg";
import medicalImg from "@/assets/medical-preview.jpg";

const ProjectsSection = () => (
  <section id="projects" className="section-padding">
    <div className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-display font-bold mb-12 gradient-text inline-block"
      >
        Projects
      </motion.h2>

      {/* Project 1 - Large */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card-hover rounded-2xl overflow-hidden mb-8"
      >
        <div className="md:flex">
          <div className="md:w-3/5 overflow-hidden">
            <img src={lokvaniImg} alt="Lokvani UI Design" className="w-full h-64 md:h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="md:w-2/5 p-8 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-accent text-sm mb-3">
              <Calendar size={14} />
              <span>December 2025</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">Lokvani</h3>
            <p className="text-sm text-primary font-medium mb-3">UI/UX Design Project</p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              A UI/UX concept platform presenting community stories and traditions through a simple and engaging interface.
            </p>
           <a
  href="https://www.figma.com/site/yCoX3TNlx9dcNFcPFoSMXS/LOKVANI?node-id=0-1&t=9NzmSi1s69hq6n3z-1"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-white"
>
  View Figma Prototype
</a>
          </div>
        </div>
      </motion.div>

      {/* Project 2 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="glass-card-hover rounded-2xl overflow-hidden"
      >
        <div className="md:flex flex-row-reverse">
          <div className="md:w-1/2 overflow-hidden">
            <img src={medicalImg} alt="Medical Website UI Design" className="w-full h-64 md:h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-accent text-sm mb-3">
              <Calendar size={14} />
              <span>March 2025</span>
            </div>
            <h3 className="text-2xl font-display font-bold mb-4">Medical Website UI Design</h3>
            <p className="text-sm text-primary font-medium mb-3">Hackathon Project</p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Designed the UI/UX for a healthcare website during a hackathon, focusing on clean layout, intuitive navigation, and clear information hierarchy so users can quickly access medical services and information.
            </p>
            <button
  onClick={() => {
    const el = document.getElementById("design-process");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }}
  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition"
>
  View Design Concept
</button>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ProjectsSection;
