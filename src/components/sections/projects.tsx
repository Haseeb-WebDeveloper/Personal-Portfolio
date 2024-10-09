
'use client'
import gsap from "gsap"; 
import ScrollTrigger from "gsap/ScrollTrigger"; 
import { useEffect } from "react"; 

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  console.clear();


  useEffect(() => { 
    const panelsArray = gsap.utils.toArray(".panel"); // Converting panels DOM node to an array
    const horizontalContainer = gsap.to(".horizontal-container", {
      xPercent: -(100 * (panelsArray.length - 1)),
      ease: "none",
      scrollTrigger: {
        trigger: ".horizontal-wrapper",
        start: "top top", 
        end: "+=" + 100 * panelsArray.length + "%",
        pin: "#mainContainer",
        scrub: 1,
        markers: false
      }
    });

    // Cleanup function to kill the ScrollTrigger instance
    return () => {
      if (horizontalContainer.scrollTrigger) {
        horizontalContainer.scrollTrigger.kill();
      }
    };
  }, []);

  return (
    <>
      <section className=""></section>
      <section id="mainContainer" className="h-full w-full bg-foreground/5">
        <div className=""></div>
        <div className="horizontal-wrapper w-full h-[100vh] overflow-hidden">
          <div className="horizontal-container flex flex-nowrap h-full">
            {/* each div conatin one project */}
            <div className="panel w-[100vh] h-[100%] flex-grow flex-shrink-0 basis-full bg-foreground/5"></div>
            <div className="panel w-[100vh] h-[100%] flex-grow flex-shrink-0 basis-full bg-foreground/5"></div>
            <div className="panel w-[100vh] h-[100%] flex-grow flex-shrink-0 basis-full bg-foreground/5"></div>
            <div className="panel w-[100vh] h-[100%] flex-grow flex-shrink-0 basis-full bg-foreground/5"></div>
          </div>
        </div>
        <div className=""></div>
      </section>
      <section className=""></section>
    </>
  );
}