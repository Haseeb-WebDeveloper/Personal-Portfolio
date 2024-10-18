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
      gsap.fromTo(
        "#side-mockup",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 1 }
      );
  }, []);

  return (
    <section className=" section">     
      <div className="pt-12 md:pt-24 ">
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
                <Image src="/wordpress-logo.webp" alt="Wordpress" width={20} height={20} />
                <p>Wordpress</p>
              </div>
              <div id="skill" className="opacity-0 flex gap-2 items-center text-foreground/90 text-md md:text-lg font-normal rounded-full bg-secondary/70 px-4 py-1.5 hover:bg-secondary transition-all duration-100 cursor-default">
                <Image src="/Shop.svg" alt="Shopify" width={20} height={20} />
                <p>Shopify</p>
              </div>
            </div>
          </div>
          <div className=" flex flex-col md:flex-row justify-center items-end ">
            <div id="text" className="opacity-0 w-full h-full flex flex-col gap-8 rounded-md ">
              <video className="w-full lg:w-fit lg:max-h-[96vh] mx-auto rounded-md flex-shrink-0" 
                src="/showcase.mp4" 
                poster="/video-thumbnail.png"
                loop 
                onClick={(e) => {
                  (e.target as HTMLVideoElement).play();
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLVideoElement).muted = false;
                  console.log("video",e.target);
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
