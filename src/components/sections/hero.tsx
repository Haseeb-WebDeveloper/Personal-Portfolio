import React from 'react'
import { Spotlight } from '../ui/spotlight'
import Ai from '../ui/3d-ai'
import UpDownButton from '../ui/up-down-button'
import { skills } from '@/app/data/tools-data'
import Image from 'next/image'

type Props = {}

function HeroSection({ }: Props) {
  return (
    <section className=' section mt-10 '>
      <div className='  mt-24 xl:mt-32'>
        <div className='flex flex-col  gap-16'>
          <div id='id="text"' className=''>
            <h1 className='font-bold text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] text-center leading-none md:leading-[5rem] tracking-[-1px] max-w-[940px] mx-auto'>
              I make bussines to become <span className='text-tertiary dark:text-primary'>unmatchable</span>
            </h1>
            <div className="relative flex flex-wrap gap-2 mx-auto mt-6 md:mt-10 justify-center items-center">
              <div className='flex gap-2 items-center text-foreground/90 text-md md:text-lg font-normal rounded-full bg-secondary/70 px-4 py-1.5 hover:bg-secondary transition-all duration-100 cursor-default'>
                  <Image src="/Designer.svg" alt="Designer" width={20} height={20} />
                  <p className=" ">Designer</p>
              </div>
              <div className='flex gap-2 items-center text-foreground/90 text-md md:text-lg font-normal rounded-full bg-secondary/70 px-4 py-1.5 hover:bg-secondary transition-all duration-100 cursor-default'>
                  <Image src="/Developer.svg" alt="Designer" width={20} height={20} />
                  <p className=" ">Nextjs Developer</p>
              </div>
              <div className='flex gap-2 items-center text-foreground/90 text-md md:text-lg font-normal rounded-full bg-secondary/70 px-4 py-1.5 hover:bg-secondary transition-all duration-100 cursor-default'>
                  <Image src="/wordpress-logo.png" alt="Designer" width={20} height={20} />
                  <p className=" ">Wordpress</p>
              </div>
            <div className='flex gap-2 items-center text-foreground/90 text-md md:text-lg font-normal rounded-full bg-secondary/70 px-4 py-1.5 hover:bg-secondary transition-all duration-100 cursor-default'>
                  <Image src="/Shop.svg" alt="Designer" width={20} height={20} />
                  <p className=" ">Shopify</p>
              </div>
            
            </div>
            {/* <p className='text-center text-muted-foreground text-lg mt-10 max-w-[400px] md:max-w-[600px] mx-auto'>
              Creating strategies that leave your competition behind. My vision is to push boundaries, making your business the industry leader.
            </p> */}
          </div>
          {/* <div className='mx-auto inline-flex'>
            <UpDownButton/>
          </div> */}

          <div className=' relative h-auto py-12 w-full mx-auto z-10'>
            <div className='absolute top-0 left-[48%] -translate-x-1/2   mx-auto z-10'>
            <Ai />
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default HeroSection