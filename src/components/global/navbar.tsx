"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'
import Image from 'next/image'
import UpDownButton from '../ui/up-down-button'
import { gsap } from 'gsap';

function Navbar() {

    useEffect(() => {
        gsap.fromTo(
            "#otherLinks",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0,  duration: 0.8, ease: "power2.out" }
        );
    }, []);

    useEffect(() => {
        gsap.fromTo(
            "#navbarLink",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
        );
    }, []);

    return (
        <>
            <header className='section font-coolcon  w-full  '>
                <nav className='relative flex justify-between items-center h-16 md:h-20 px-4'>
                    <div id="logo" className=''>
                        <Link id="otherLinks" href="/" className='opacity-0 flex items-center gap-2'>
                            <Image src="/logo.svg" alt="logo" width={40} height={40} />
                            {/* <span className='font-semibold text-2xl'>
                                HaseeB
                            </span> */}
                        </Link>
                    </div>
                    <div id="links" className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex gap-3 text-md text-foreground'>
                        <Link id="navbarLink"  href="#about" className='opacity-0 px-4 py-1.5 font-medium rounded-[24px] flex justify-center items-center border bg-foreground/5 text-sm hover:border-primary-foreground/10 hover:dark:bg-foreground/10 transition-all duration-200'>
                            <span>About</span>
                        </Link>
                        <Link id="navbarLink"  href="#work" className='opacity-0 px-4 py-1.5 font-medium rounded-[24px] flex justify-center items-center border bg-foreground/5 text-sm hover:border-primary-foreground/10 hover:dark:bg-foreground/10 transition-all duration-200'>
                            <span>Work</span>
                        </Link>
                        <Link id="navbarLink"  href="#Contact" className='opacity-0 px-4 py-1.5 font-medium rounded-[24px] flex justify-center items-center border bg-foreground/5 text-sm hover:border-primary-foreground/10 hover:dark:bg-foreground/10 transition-all duration-200'>
                            <span>Contact</span>
                        </Link>
                    </div>
                    <div  id="otherLinks" className='opacity-0'>
                        <UpDownButton text="Let's Talk" />
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar