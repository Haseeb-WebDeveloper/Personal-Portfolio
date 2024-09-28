import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import Link from 'next/link'
import { SiUpwork } from "react-icons/si";
import { Dock, DockIcon } from '../ui/dock';
import SocialMediaIcon from '../global/social-media-icon';
import Image from 'next/image';
import { LogoTicker } from '../global/LogoTicker';
type Props = {}

function HeroSection({}: Props) {
  return (
    <section className='relative section '>
        {/* <div className='absolute z-[-10] top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-tertiary'></div> */}
        {/* main container */}
        <div className='pb-[73px] md:pb-20 relative  '>
            {/* text and social media */}
            <div className='flex flex-col '>
                <div  className=' mt-10 md:mt-20'>
                {/* Home text including heading and paragraph */}
                <div id='id="text"' className=''>
                <h1 className='font-bold text-center text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem]  leading-none md:leading-[5rem] tracking-[-4px] max-w-[900px] mx-auto'>
                    I make bussines to become <span className='text-tertiary'>unmatchable</span>
                </h1>
                <p className='text-center text-muted-foreground text-lg mt-4 max-w-[400px] md:max-w-[600px] mx-auto'>
                Creating strategies that leave your competition behind. My vision is to push boundaries, making your business the industry leader. Let’s build something remarkable together.
                </p>
                </div>
                {/* Social links */}
                <div id="social" className='mx-auto mt-6 '>
                    <SocialMediaIcon/>
                </div>
            </div>
            {/* video and picture */}
            <div className='flex flex-col md:flex-row justify-center items-end gap-4 px-2 md:px-4 mt-10 md:-mt-32'>
                <div className='hidden md:flex w-30% h-full justify-end items-center '>
                    <Image className='w-200' src="/mockup-1.avif" alt="Image 2" width={400} height={200} />
                </div>
                <div className='w-40% h-full flex md:mb-8'>
                    <video className='w-full rounded-[10px] shadow-sm border-[1px] border-tertiary/5' src="/web-deign-presentation.mp4"  autoPlay loop muted></video>
                </div>
                <div className='hidden w-30% h-full md:flex justify-end items-center '>
                    <Image className='w-200' src="/mockup-2.avif"  alt="Image 2" width={400} height={200} />
                </div>
            </div>
            </div>
            {/* logo ticker */}
            <div id="logo-ticker" className='absolute bottom-0 left-0 w-full '>
            <LogoTicker/>
            </div>
            <div className='absolute bottom-4 left-0 w-full h-32 md:h-72 z-[-10] '>
                <Image
                src="/green-bg.avif"
                alt="Background Image"
                layout="fill"
                objectFit="cover"
                className=' filter brightness-75 opacity-90 backdrop-blur-lg'
                />
            </div>
        </div>
        <div className='w-full h-12'></div>
    </section>
  )
}

export default HeroSection