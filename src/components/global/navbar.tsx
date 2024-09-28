"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { ModeToggle } from '../ui/mode-toggle'

type Props = {}

function Navbar({ }: Props) {

    const [isHover, setIsHover] = useState(false)

    return (
        <>
            <header className='section font-coolcon  w-full bg-background '>
                <nav className='relative flex justify-between items-center h-16 md:h-20 px-4'>
                    <div id="logo">
                        <Link href="/" className='flex items-center gap-2'>
                            <Image src="/logo.svg" alt="logo" width={30} height={30} />
                            <span className='font-bold text-xl'>
                                Haseeb
                            </span>
                        </Link>
                    </div>
                    <div id="links" className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex gap-3 text-md text-foreground'>
                        <Link href="/" className='px-4 py-1.5 font-medium rounded-[24px] flex justify-center items-center border bg-primary/20 text-sm hover:border-primary-foreground/10 transition-all duration-200'>
                            <span>About</span>
                        </Link>
                        <Link href="/" className='px-4 py-1.5 font-medium rounded-[24px] flex justify-center items-center border bg-primary/20 text-sm hover:border-primary-foreground/10 transition-all duration-200'>
                            <span>Work</span>
                        </Link>
                        <Link href="/" className='px-4 py-1.5 font-medium rounded-[24px] flex justify-center items-center border bg-primary/20 text-sm hover:border-primary-foreground/10 transition-all duration-200'>
                            <span>Reviews</span>
                        </Link>
                    </div>
                    <div id="lets-talk" className=' flex gap-2 text-md text-foreground'>
                        <Link 
                        onMouseEnter={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}
                        href="/" 
                        className='relative z-50 overflow-hidden md:w-28 md:h-10 w-28 h-10 rounded-[24px] border-[1px] border-foreground/10 font-coolcon font-medium text-md text-background '>
                           <p className={`absolute left-0 w-full h-full transform ease-in-out duration-500 flex items-center justify-center text-md  bg-tertiary/90 text-background  ${isHover ? "top-[-100%] " : "top-[0] rotate-0"}`}>
                                Let's Talk
                            </p>
                            <p className={`transform ease-in-out duration-500 absolute left-0 md:w-28 md:h-10 w-28 h-10 flex items-center justify-center text-md  text-background bg-tertiary/95 ${isHover ? "top-[0] rotate-0" : "top-[100%]"}`}>
                                Let's Talk
                            </p>
                        </Link> 
                        <ModeToggle />
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar
