import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import profile from "@/assets/profile.png";

const HeroSection = () => (
  <section className="min-h-screen flex items-center section-padding pt-28 relative overflow-hidden">
    
    {/* Background glow */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
    <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-accent/10 blur-[100px] pointer-events-none" />

    <div className="max-w-7xl mx-auto w-full flex flex-col-reverse lg:flex-row items-center gap-12">

      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="flex-1 text-center lg:text-left"
      >
        <p className="text-accent font-medium mb-3 tracking-widest uppercase text-sm">
          UI/UX Design Intern
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
          Hi, I'm <span className="gradient-text">Himanshu Chandola</span>
        </h1>

        <p className="text-muted-foreground text-lg max-w-xl mx-auto lg:mx-0 mb-8">
          Crafting intuitive digital experiences through thoughtful design, user research,
          and pixel-perfect interfaces.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center lg:justify-start flex-wrap">

          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            View Projects
          </a>

          <a
            href="/Resume.pdf"
            target="_blank"
            className="px-6 py-3 rounded-lg bg-accent text-white font-medium hover:opacity-90 transition-opacity"
          >
            View Resume
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-border text-foreground hover:border-primary/50 transition-colors"
          >
            Get in Touch
          </a>

        </div>
      </motion.div>

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative"
      >
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/30 glow-border">
          <img
            src={profile}
            alt="Himanshu Chandola"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute -bottom-3 -right-3 w-20 h-20 rounded-full bg-primary/20 blur-xl" />
      </motion.div>

    </div>

    {/* Scroll Arrow */}
    <motion.a
      href="#about"
      animate={{ y: [0, 8, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
    >
      <ArrowDown size={24} />
    </motion.a>

  </section>
);

export default HeroSection;