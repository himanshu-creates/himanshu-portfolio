import { motion } from "framer-motion";
import { Eye, Download } from "lucide-react";

const ResumeSection = () => (
  <section id="resume" className="section-padding">
    <div className="max-w-3xl mx-auto text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 gradient-text inline-block">Resume</h2>
        <p className="text-muted-foreground mb-8">
          Interested in my background? View or download my resume to learn more about my education, experience, and skills.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
            <Eye size={18} /> View Resume
          </a>
          <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground hover:border-primary/50 transition-colors">
            <Download size={18} /> Download
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ResumeSection;
