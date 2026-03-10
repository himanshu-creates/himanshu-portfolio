import { useEffect, useState } from "react";

const ScrollProgress = () => {

const [scroll,setScroll] = useState(0);

useEffect(()=>{

const handleScroll = () => {

const totalHeight =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

const scrollPosition = window.scrollY;

setScroll((scrollPosition / totalHeight) * 100);

};

window.addEventListener("scroll",handleScroll);

return () => window.removeEventListener("scroll",handleScroll);

},[]);

return (

<div className="fixed top-0 left-0 w-full h-[3px] z-50">

<div
className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 transition-all"
style={{ width: `${scroll}%` }}
/>

</div>

);

};

export default ScrollProgress;