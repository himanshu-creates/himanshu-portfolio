import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const contacts = [
  { icon: Mail, label: "Email", value: "himanshuchandola61@gmail.com", href: "mailto:himanshuchandola61@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 8171182424", href: "tel:+918171182424" },
  { icon: MapPin, label: "Location", value: "Gurugram, India", href: undefined },
];

const ContactSection = () => {

const form = useRef<HTMLFormElement>(null);
const [loading,setLoading] = useState(false);
const [success,setSuccess] = useState(false);

const sendEmail = (e:any) => {

e.preventDefault();

if(!form.current) return;

setLoading(true);

emailjs.sendForm(
"service_nmqgcf8",
"template_uqc5ow8",
form.current,
"VX6sYtDmzYIkkkixS"
).then(() => {

setLoading(false);
setSuccess(true);

form.current?.reset();

setTimeout(()=>{
setSuccess(false);
},3000);

}).catch(() => {

setLoading(false);
alert("Failed to send message.");

});

};

return (

<section id="contact" className="section-padding">

<div className="max-w-5xl mx-auto">

<motion.h2
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
className="text-3xl md:text-4xl font-display font-bold mb-12 gradient-text"
>
Get in Touch
</motion.h2>

<div className="grid md:grid-cols-2 gap-10">

{/* Contact cards */}
<div className="grid gap-6">
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
<a
href={c.href}
className="text-muted-foreground text-sm hover:text-accent transition-colors break-all"
>
{c.value}
</a>
) : (
<p className="text-muted-foreground text-sm">{c.value}</p>
)}

</motion.div>
))}
</div>

{/* Contact form */}
<form
ref={form}
onSubmit={sendEmail}
className="glass-card-hover rounded-xl p-6 flex flex-col gap-4"
>

<input
type="text"
name="name"
placeholder="Your Name"
required
className="p-3 rounded-lg bg-secondary focus:ring-2 focus:ring-primary outline-none"
/>

<input
type="email"
name="email"
placeholder="Your Email"
required
className="p-3 rounded-lg bg-secondary focus:ring-2 focus:ring-primary outline-none"
/>

<textarea
name="message"
placeholder="Your Message"
required
rows={5}
className="p-3 rounded-lg bg-secondary focus:ring-2 focus:ring-primary outline-none"
/>

<button
type="submit"
disabled={loading}
className="bg-primary text-white px-6 py-3 rounded-lg hover:opacity-90 transition flex justify-center items-center"
>

{loading ? "Sending..." : "Send Message"}

</button>

{success && (
<p className="text-green-500 text-sm text-center">
Message sent successfully 🚀
</p>
)}

</form>

</div>

</div>

</section>

);
};

export default ContactSection;