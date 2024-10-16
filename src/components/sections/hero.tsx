'use client'
// import dynamic from 'next/dynamic';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

// Dynamically import the Ai component with no SSR
// const Ai = dynamic(() => import('../ui/3d-ai'), { ssr: false });

function HeroSection() {
  // const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // useEffect(() => {
  //   const handleMouseMove = (e: MouseEvent) => {
  //     const { clientX, clientY } = e;
  //     const { innerWidth, innerHeight } = window;
  //     const centerX = innerWidth / 2;
  //     const centerY = innerHeight / 2;
  //     const dx = (clientX - centerX) / centerX;
  //     const dy = (clientY - centerY) / centerY;
  //     setCursorPosition({ x: dx, y: dy });
  //   };

  //   window.addEventListener('mousemove', handleMouseMove);

  //   return () => window.removeEventListener('mousemove', handleMouseMove);
  // }, []);

  // useEffect(() => {
  //   gsap.to('#main-image', {
  //     rotation: `${cursorPosition.x * 10}% ${cursorPosition.y * 10}%`,
  //     ease: 'none',
  //     duration: 5,
  //   });
  // }, [cursorPosition]);

  // Define animations with GSAP and apply delay on load
  useEffect(() => {
    const timeline = gsap.timeline();

    // Animate each element with staggered effect
    timeline
    gsap.fromTo(
        "#text",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      )
      gsap.fromTo(
        "#skill",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      )
      gsap.fromTo(
        "#side-mockup",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 1 }
      );
  }, []);

  return (
    <section className=" section">     
      <div className="pt-24 ">
        <div className="flex flex-col gap-12 ">
          <div className='flex flex-col gap-8'>
            <h1 id="text" className="opacity-0 font-bold text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] text-center leading-none md:leading-[5rem] tracking-[-1px] max-w-[940px] mx-auto">
              I make businesses become <span className="text-tertiary dark:text-primary">unmatchable</span>
            </h1>
            <div className=" flex flex-wrap gap-2 mx-auto  justify-center items-center">
              <div id="skill" className="opacity-0 flex gap-2 items-center text-foreground/90 text-md md:text-lg font-normal rounded-full bg-secondary/70 px-4 py-1.5 hover:bg-secondary transition-all duration-100 cursor-default">
                <Image src="/Designer.svg" alt="Designer" width={20} height={20} />
                <p>Designer</p>
              </div>
              <div id="skill" className="opacity-0 flex gap-2 items-center text-foreground/90 text-md md:text-lg font-normal rounded-full bg-secondary/70 px-4 py-1.5 hover:bg-secondary transition-all duration-100 cursor-default">
                <Image src="/Developer.svg" alt="Developer" width={20} height={20} />
                <p>Nextjs Developer</p>
              </div>
              <div id="skill" className="opacity-0 flex gap-2 items-center text-foreground/90 text-md md:text-lg font-normal rounded-full bg-secondary/70 px-4 py-1.5 hover:bg-secondary transition-all duration-100 cursor-default">
                <Image src="/wordpress-logo.png" alt="Wordpress" width={20} height={20} />
                <p>Wordpress</p>
              </div>
              <div id="skill" className="opacity-0 flex gap-2 items-center text-foreground/90 text-md md:text-lg font-normal rounded-full bg-secondary/70 px-4 py-1.5 hover:bg-secondary transition-all duration-100 cursor-default">
                <Image src="/Shop.svg" alt="Shopify" width={20} height={20} />
                <p>Shopify</p>
              </div>
            </div>
            {/* <div className='flex justify-center items-center pb-10'>
              <UpDownButton text='lets talk' />
            </div> */}
          </div>

          <div className=" flex flex-col md:flex-row justify-center items-end ">
            {/* <div id="side-mockup" className="opacity-0 hidden md:flex  h-full justify-end items-center">
              <Image className="" src="/mockup-1.avif" alt="Mockup 1" width={400} height={200} />
            </div> */}
            <div id="text" className="opacity-0 w-full h-full flex flex-col gap-8 rounded-md ">
              <video className="w-full lg:max-h-[96vh] mx-auto rounded-md flex-shrink-0" 
                src="/showcase.mp4" 
                autoPlay 
                loop 
                onMouseEnter={(e) => (e.target as HTMLVideoElement).muted = false} 
                onMouseLeave={(e) => (e.target as HTMLVideoElement).muted = true} 
                muted>
              </video>
            </div>
            {/* <div id="side-mockup" className="opacity-0 hidden  h-full md:flex justify-end items-center">
              <Image className="" src="/mockup-2.avif" alt="Mockup 2" width={400} height={200} />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
