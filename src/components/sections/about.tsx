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
              <div className='flex flex-col gap-4'>
                <div>
                  <h2 className='md:hidden flex text-2xl md:text-3xl font-medium p-2 bg-primary/10   rounded-md  leading-none'>About</h2>
                  <h3 id="text" className="p-1.5 md:p-0 text-[20px] md:text-[27px] leading-[1.4] tracking-normal text-foreground">
                  Hey! I'm Haseeb Ahmed, a <span className='text-tertiary dark:text-white'>Full Stack Website Developer</span> from Pakistan who loves building websites that make businesses stand out. I work with <span className='text-tertiary dark:text-white'>React, Next.js, TypeScript, Node.js, and WordPress </span>to create fast, user-friendly sites that actually solve problems. I've helped over <span className='text-tertiary dark:text-white'>20 businesses</span>  businesses level up their online presence, and I'm always excited to take on new challenges. <span>Got a project in mind? Let's make it happen! </span>
                  {/* Hey! I'm Haseeb Ahmed, a Full Stack Developer from Pakistan who loves building websites that make businesses stand out. I work with React, Next.js, TypeScript, Node.js, and WordPress to create fast, user-friendly sites that actually solve problems. I've helped over 20 businesses level up their online presence, and I'm always excited to take on new challenges. Got a project in mind? Let's make it happen! */}
                  </h3>
                </div>
                <div className='flex justify-start gap-4'>
                  <div className='hidden md:flex '>
                    <UpDownButton text="Let's Talk" link='mailto:web.dev.haseeb@gmail.com'
                      ariaLabel="Let's Talk with Haseeb Ahmed web developer"
                    />
                  </div>
                  <div className='px-1.5 md:px-0' >
                    <SocialMediaIcon />
                  </div>
                </div>
              </div>
            </div>
            <div id="image" className='flex flex-col md:flex-row gap-2 '>
              <Image src='/haseeb.webp' alt='Haseeb Ahmed Raza Khan Web Developer' width={500} height={500} className=' object-cover max-h-[420px] opacity-90 md:opacity-100 md:max-h-[300px] object-top md:max-w-[250px] max-w-full rounded-md' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About