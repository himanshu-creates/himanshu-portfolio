import { useEffect, useState } from "react";

const CustomCursor = () => {

const [position, setPosition] = useState({ x: 0, y: 0 });

useEffect(() => {

const moveCursor = (e: MouseEvent) => {
setPosition({
x: e.clientX,
y: e.clientY
});
};

window.addEventListener("mousemove", moveCursor);

return () => {
window.removeEventListener("mousemove", moveCursor);
};

}, []);

return (

<div
className="pointer-events-none fixed top-0 left-0 w-6 h-6 rounded-full bg-purple-500/30 backdrop-blur-md border border-purple-400 z-[9999] transition-transform duration-75"
style={{
transform: `translate(${position.x - 12}px, ${position.y - 12}px)`
}}
/>

);

};

export default CustomCursor;