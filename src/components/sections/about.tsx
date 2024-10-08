import Image from 'next/image'
import React from 'react'
import SocialMediaIcon from '../global/social-media-icon'
import UpDownButton from '../ui/up-down-button'

type Props = {}

const About = (props: Props) => {

  return (
    <section id='about' className='section section-my  '>
      <div className='py-20'>
        <div className=' flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16'>
            <div className='md:w-[60%] w-full flex flex-col gap-6'>
              {/* <div>
              <h1 className='border rounded-full px-3 w-fit bg-foreground/5 text-foreground/80 hover:text-foreground/90 transition-all duration-300 py-1 inline-flex text-sm font-normal leading-normal tracking-wide shadow-sm'>Frontend Website Developer</h1>
              </div> */}
              <div>
              <h3 id="text" className=" text-[20px] md:text-[30px] leading-[1.3] tracking-tight text-foreground/90">
              Haseeb Ahmed, from Pakistan, a <span className='text-tertiary dark:text-white'>Frontend Website Developer</span> with a passion for creating digital experiences that set businesses apart. With expertise in <span className='text-tertiary dark:text-white'>HTML, CSS, JavaScript, React, Next.js, Tailwind, GSAP, and WordPress</span>, I’ve helped <span className='text-tertiary dark:text-white'>8 businesses</span> rise above the competition. <span>So let me know your thoughts, and I will make it happen.</span>
              </h3>
              <div className='mt-8 flex justify-start gap-4'>
                <UpDownButton text="Let's Talk" />
                <SocialMediaIcon/>
              </div>
              </div>
            </div>
            <div id="image" className='flex gap-2'>
                <Image src='/bg.jpeg' alt='Haseeb Ahmed' width={500} height={500} className=' max-w-[200px] rotate-[15deg]' />
                <Image src='/bg.jpeg' alt='Haseeb Ahmed' width={500} height={500} className=' max-w-[200px] rotate-[5deg]' />
            </div>
        </div>
      </div>
    </section>
  )
}

export default About