import { useRef } from "react";

const TiltCard = ({ children }: any) => {

const ref = useRef<HTMLDivElement>(null);

const handleMouseMove = (e:any) => {

const card = ref.current;
if(!card) return;

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const centerX = rect.width / 2;
const centerY = rect.height / 2;

const rotateX = -(y - centerY) / 10;
const rotateY = (x - centerX) / 10;

card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

};

const resetTilt = () => {

const card = ref.current;
if(!card) return;

card.style.transform = "rotateX(0deg) rotateY(0deg)";

};

return (

<div
ref={ref}
onMouseMove={handleMouseMove}
onMouseLeave={resetTilt}
className="transition-transform duration-200 will-change-transform"
style={{ transformStyle: "preserve-3d" }}
>

{children}

</div>

);

};

export default TiltCard;