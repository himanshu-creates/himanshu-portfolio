import { motion } from "framer-motion";
import { Figma, Layout, MousePointerClick, Smartphone, Search, Layers, PenTool, Users } from "lucide-react";

const skills = [
  { name: "UI/UX Design", icon: Layout },
  { name: "Wireframing", icon: PenTool },
  { name: "Prototyping", icon: MousePointerClick },
  { name: "Figma", icon: Figma },
  { name: "User Interface Design", icon: Layers },
  { name: "User Experience Basics", icon: Users },
  { name: "Responsive Design", icon: Smartphone },
  { name: "Basic User Research", icon: Search },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding">
    <div className="max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-display font-bold mb-12 gradient-text inline-block"
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="glass-card-hover rounded-xl p-5 text-center group"
          >
            <skill.icon className="mx-auto mb-3 text-primary group-hover:text-accent transition-colors" size={28} />
            <p className="text-sm font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
