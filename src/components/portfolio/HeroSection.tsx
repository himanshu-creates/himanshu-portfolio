import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useState } from "react";
import profile from "@/assets/profile.png";
import MagneticButton from "@/components/MagneticButton";

const HeroSection = () => {

const [pos,setPos] = useState({x:0,y:0});

const handleMouseMove = (e:any)=>{
setPos({
x:e.clientX,
y:e.clientY
});
};

return (

<section
onMouseMove={handleMouseMove}
className="min-h-screen flex items-center section-padding pt-28 relative overflow-hidden"
>

{/* Dynamic glow background */}
<div
className="absolute w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] pointer-events-none transition-all duration-200"
style={{
left:pos.x-250,
top:pos.y-250
}}
/>

<div className="max-w-7xl mx-auto w-full flex flex-col-reverse lg:flex-row items-center gap-12">

{/* Text Section */}
<motion.div
initial={{ opacity: 0, x: -40 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.7 }}
className="flex-1 text-center lg:text-left"
>

<p className="text-accent font-medium mb-3 tracking-widest uppercase text-sm">
UI/UX Designer
</p>

<h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
Hi, I'm <span className="gradient-text">Himanshu Chandola</span>
</h1>

<p className="text-muted-foreground text-lg max-w-xl mx-auto lg:mx-0 mb-8">
Crafting intuitive digital experiences through thoughtful design,
user research, and pixel-perfect interfaces.
</p>

{/* Buttons */}
<div className="flex gap-4 justify-center lg:justify-start flex-wrap">

<MagneticButton>
<a
href="#projects"
className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium"
>
View Projects
</a>
</MagneticButton>

<MagneticButton>
<a
href="/Resume.pdf"
target="_blank"
className="px-6 py-3 rounded-lg bg-accent text-white font-medium"
>
View Resume
</a>
</MagneticButton>

<MagneticButton>
<a
href="#contact"
className="px-6 py-3 rounded-lg border border-border text-foreground"
>
Get in Touch
</a>
</MagneticButton>

</div>

</motion.div>

{/* Profile */}
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

</motion.div>

</div>

{/* Scroll Arrow */}
<motion.a
href="#about"
animate={{ y: [0, 8, 0] }}
transition={{ repeat: Infinity, duration: 2 }}
className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
>
<ArrowDown size={24}/>
</motion.a>

</section>

);
};

export default HeroSection;