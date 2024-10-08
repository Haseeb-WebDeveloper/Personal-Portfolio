"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { ModeToggle } from '../ui/mode-toggle'
import UpDownButton from '../ui/up-down-button'

type Props = {}

function Navbar({ }: Props) {

    const [isHover, setIsHover] = useState(false)
    if (isHover) {
        console.log(isHover)
    }
    return (
        <>
        
            <header className='section font-coolcon  w-full  '>
                <nav className='relative flex justify-between items-center h-16 md:h-20 px-4'>
                    <div id="logo">
                        <Link href="/" className='flex items-center gap-2'>
                            <Image src="/logo.svg" alt="logo" width={40} height={40} />
                            {/* <span className='font-semibold text-2xl'>
                                HaseeB
                            </span> */}
                        </Link>
                    </div>
                    <div id="links" className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex gap-3 text-md text-foreground'>
                        <Link href="#about" className='px-4 py-1.5 font-medium rounded-[24px] flex justify-center items-center border bg-foreground/5 text-sm hover:border-primary-foreground/10 hover:dark:bg-foreground/10 transition-all duration-200'>
                            <span>About</span>
                        </Link>
                        <Link href="#work" className='px-4 py-1.5 font-medium rounded-[24px] flex justify-center items-center border bg-foreground/5 text-sm hover:border-primary-foreground/10 hover:dark:bg-foreground/10 transition-all duration-200'>
                            <span>Work</span>
                        </Link>
                        <Link href="#Contact" className='px-4 py-1.5 font-medium rounded-[24px] flex justify-center items-center border bg-foreground/5 text-sm hover:border-primary-foreground/10 hover:dark:bg-foreground/10 transition-all duration-200'>
                            <span>Contact</span>
                        </Link>
                    </div>
                    <UpDownButton text="Let's Talk" />
                </nav>
            </header>
        </>
    )
}

export default Navbar
