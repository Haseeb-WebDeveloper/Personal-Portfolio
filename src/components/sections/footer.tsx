import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { SiUpwork } from 'react-icons/si'
import Link from 'next/link'
import Image from 'next/image'

type Props = {}

function Footer({}: Props) {
  return (
    <section className=''>
        {/* <div className="relative h-[150px]"
        style={{
            clipPath: 'polygon(100% 100%, 0 100%, 0 0, 100% 0)',
        }}
        >
         <div className='fixed bg-secondary bottom-0  left-0 h-[150px] w-full  flex item-end '>
         <footer className="section w-full h-[150px] relative">
            <div className=''>
                <div className='absolute bottom-4 left-0 w-full '>
                    <div className='flex justify-center items-center gap-6'>
                        <div className=''>
                            <Image src='/logo.svg' alt='logo' width={100} height={100} />
                        </div>
                     <div>
                        <h2 className='text-[5.5vw] text-center leading-[8vw] tracking-[-0.05em] '>Haseeb Ahmed Raza Khan</h2>
                    </div>   
                    </div>
                    <Link 
                        href="mailto:web.dev.haseeb@gmail.com" 
                        className='text-background hover:text-primary text-[2.5vw]'
                    >
                        web.dev.haseeb@gmail.com
                    </Link>
                 </div>
            <div>

            </div>
            </div>
        </footer>
         </div>
        </div> */}
    </section>
  )
}

export default Footer