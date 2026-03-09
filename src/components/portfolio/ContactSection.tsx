import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const contacts = [
  { icon: Mail, label: "Email", value: "himanshuchandola61@gmail.com", href: "mailto:himanshuchandola61@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 8171182424", href: "tel:+918171182424" },
  { icon: MapPin, label: "Location", value: "Gurugram, India", href: undefined },
];

const ContactSection = () => (
  <section id="contact" className="section-padding">
    <div className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-display font-bold mb-12 gradient-text inline-block"
      >
        Get in Touch
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6">
        {contacts.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="glass-card-hover rounded-xl p-6 text-center"
          >
            <c.icon className="mx-auto mb-3 text-primary" size={28} />
            <h3 className="font-display font-semibold mb-2">{c.label}</h3>
            {c.href ? (
              <a href={c.href} className="text-muted-foreground text-sm hover:text-accent transition-colors break-all">
                {c.value}
              </a>
            ) : (
              <p className="text-muted-foreground text-sm">{c.value}</p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ContactSection;
