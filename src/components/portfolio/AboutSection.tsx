import { motion } from "framer-motion";
import { GraduationCap, Palette, Target } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 gradient-text inline-block">About Me</h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
          I'm a BCA student at Dev Bhoomi Uttarakhand University (2023–2026), passionate about creating
          meaningful user experiences. I blend creativity with analytical thinking to design interfaces
          that are both beautiful and functional.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: Palette, title: "Design Driven", desc: "Every pixel matters. I focus on visual harmony and consistency." },
          { icon: Target, title: "User Focused", desc: "Designing with empathy, always keeping the end-user in mind." },
          { icon: GraduationCap, title: "Always Learning", desc: "Continuously expanding my skills through courses and real projects." },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="glass-card-hover rounded-xl p-6"
          >
            <item.icon className="text-primary mb-4" size={28} />
            <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
