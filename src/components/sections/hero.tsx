'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

function HeroSection() {
  useEffect(() => {
    const timeline = gsap.timeline();

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
  }, []);

  return (
    <section className=" section">     
      <div className="pt-12 md:pt-24 ">
        <div className="flex flex-col gap-12 ">
          <div className='flex flex-col gap-8'>
            <h3 id="text" className="opacity-0 font-bold text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] text-center leading-none md:leading-[5rem] tracking-[-1px] max-w-[940px] mx-auto">
              I make businesses become <span className="text-tertiary dark:text-primary">unmatchable</span>
            </h3>
            <div className=" flex flex-wrap flex-col md:flex-row gap-2 mx-auto  justify-center items-center">
              <div id='skill' className="order-1 md:order-1 md:w-auto opacity-0 flex gap-2 items-center text-foreground/90 text-md md:text-lg font-normal rounded-full bg-secondary/70 px-4 py-1.5 hover:bg-secondary transition-all duration-100 cursor-default">
                <Image src="/Designer.svg" alt="Designer svg logo" width={20} height={20} />
                <h4>Designer</h4>
              </div>
              <div id='skill' className="order-2 md:order-3 md:w-auto opacity-0 flex gap-2 items-center text-foreground/90 text-md md:text-lg font-normal rounded-full bg-secondary/70 px-4 py-1.5 hover:bg-secondary transition-all duration-100 cursor-default">
                <Image src="/wordpress-logo.webp" alt="Wordpress logo" width={20} height={20} />
                <h4 className='flex gap-1.5 items-center'>Wordpress <span className="md:hidden block">Developer</span></h4>
              </div>
              <div id='skill' className="order-3 md:order-2 w-full md:w-auto opacity-0 flex gap-2 items-center text-foreground/90 text-md md:text-lg font-normal rounded-full bg-secondary/70 px-4 py-1.5 hover:bg-secondary transition-all duration-100 cursor-default">
                <Image src="/Developer.svg" alt="Developer svg logo" width={20} height={20} />
                <h4>React & Nextjs Developer</h4>
              </div>
              {/* <div id="skill" className="opacity-0 flex gap-2 items-center text-foreground/90 text-md md:text-lg font-normal rounded-full bg-secondary/70 px-4 py-1.5 hover:bg-secondary transition-all duration-100 cursor-default">
                <Image src="/Shop.svg" alt="Shopify svg logo" width={20} height={20} />
                <h4>Shopify</h4>
              </div> */}
            </div>
          </div>
          <div className=" flex flex-col md:flex-row justify-center items-end ">
            <div id="text" className="opacity-0 w-full h-full flex flex-col gap-8 rounded-md ">
              <video className="w-full lg:w-fit lg:max-h-[96vh] mx-auto rounded-md flex-shrink-0 cursor-pointer" 
                src="/showcase.mp4" 
                poster="/video-thumbnail.webp"
                loop 
                onClick={(e) => {
                  (e.target as HTMLVideoElement).play();
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLVideoElement).muted = false;
                }} 
                onMouseLeave={(e) => {
                  (e.target as HTMLVideoElement).muted = true;
                }} 
                muted>
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
