'use client'
import dynamic from 'next/dynamic';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

// Dynamically import the Ai component with no SSR
const Ai = dynamic(() => import('../ui/3d-ai'), { ssr: false });

function HeroSection() {

  useEffect(() => {
    gsap.fromTo(
      "#skill",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "circ.out" }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      "#text",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "circ.out" }
    );
  }, []);


  return (
    <section className="section mt-10">
      <div className="mt-24 xl:mt-32">
        <div className="flex flex-col gap-16">
          <div>
            <h1
              id="text"
              className="font-bold text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] text-center leading-none md:leading-[5rem] tracking-[-1px] max-w-[940px] mx-auto"
            >
              I make businesses become <span className="text-tertiary dark:text-primary">unmatchable</span>
            </h1>
            <div className="relative flex flex-wrap gap-2 mx-auto mt-6 md:mt-10 justify-center items-center">
              <div id="skill" className="flex gap-2 items-center text-foreground/90 text-md md:text-lg font-normal rounded-full bg-secondary/70 px-4 py-1.5 hover:bg-secondary transition-all duration-100 cursor-default">
                <Image src="/Designer.svg" alt="Designer" width={20} height={20} />
                <p>Designer</p>
              </div>
              <div id="skill" className='flex gap-2 items-center text-foreground/90 text-md md:text-lg font-normal rounded-full bg-secondary/70 px-4 py-1.5 hover:bg-secondary transition-all duration-100 cursor-default'>
                  <Image src="/Developer.svg" alt="Designer" width={20} height={20} />
                  <p className=" ">Nextjs Developer</p>
              </div>
              <div id="skill" className='flex gap-2 items-center text-foreground/90 text-md md:text-lg font-normal rounded-full bg-secondary/70 px-4 py-1.5 hover:bg-secondary transition-all duration-100 cursor-default'>
                  <Image src="/wordpress-logo.png" alt="Designer" width={20} height={20} />
                  <p className=" ">Wordpress</p>
              </div>
            <div id="skill" className='flex gap-2 items-center text-foreground/90 text-md md:text-lg font-normal rounded-full bg-secondary/70 px-4 py-1.5 hover:bg-secondary transition-all duration-100 cursor-default'>
                  <Image src="/Shop.svg" alt="Designer" width={20} height={20} />
                  <p className=" ">Shopify</p>
              </div>
            </div>
          </div>

          {/* Lazy-loaded Spline component in the hero section */}
          <div className="relative h-auto py-12 w-full mx-auto z-10">
            <div className="absolute top-0 left-[48%] -translate-x-1/2 mx-auto z-10">
              <Ai />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
