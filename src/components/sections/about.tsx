import Image from 'next/image'
import SocialMediaIcon from '../global/social-media-icon'
import UpDownButton from '../ui/up-down-button'


const About = () => {
  return (
    <section id='about' className='section  rounded-md'>
      <div className=' pt-16 pb-20 md:py-28'>
        <div className='py-2 px-2 md:py-12 md:px-12 bg-primary/10 rounded-md md:rounded-xl'>
          <div className=' flex flex-col md:flex-row justify-between items-center gap-4 md:gap-12 '>
            <div className='md:w-[70%] w-full flex flex-col gap-2'>
              {/* <div>
              <h1 className='border rounded-full px-3 w-fit bg-foreground/5 text-foreground/80 hover:text-foreground/90 transition-all duration-300 py-1 inline-flex text-sm font-normal leading-normal tracking-wide shadow-sm'>Frontend Website Developer</h1>
              </div> */}
              <div className='flex flex-col gap-4'>
                <div>
                  <h1 className='md:hidden flex text-3xl md:text-3xl font-medium p-2 bg-primary/10   rounded-md  leading-none'>About</h1>
                  <h3 id="text" className="p-1.5 md:p-0 text-[20px] md:text-[30px] leading-[1.3] tracking-tight text-foreground/90">
                    Haseeb Ahmed, from Pakistan, a <span className='text-tertiary dark:text-white'>Frontend Website Developer</span> with a passion for creating digital experiences that set businesses apart. With expertise in <span className='text-tertiary dark:text-white'>HTML, CSS, JavaScript, React, Next.js, Tailwind, GSAP, and WordPress</span>, I’ve helped <span className='text-tertiary dark:text-white'>8 businesses</span> rise above the competition. <span>So let me know your thoughts, and I will make it happen.</span>
                  </h3>
                </div>
                <div className='flex justify-start gap-4'>
                  <div className='hidden md:flex '>
                    <UpDownButton text="Let's Talk" />
                  </div>
                  <div className='px-1.5 md:px-0' >
                    <SocialMediaIcon />
                  </div>
                </div>
              </div>
            </div>
            <div id="image" className='flex flex-col md:flex-row gap-2 '>
              <Image src='/haseeb.jpeg' alt='Haseeb Ahmed' width={500} height={500} className=' object-cover max-h-[420px] opacity-80 md:max-h-[300px] object-top md:max-w-[250px] max-w-full rounded-md' />
              {/* <Image src='/bg.jpeg' alt='Haseeb Ahmed' width={500} height={500} className='bg-green-500   rounded-md md:w-[300px] md:h-[300px]' /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About