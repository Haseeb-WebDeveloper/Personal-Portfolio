"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { ModeToggle } from '../ui/mode-toggle'
import { HiMenu } from "react-icons/hi";
import { FaProjectDiagram } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";
import { SiAboutdotme } from "react-icons/si";
import { RiContactsLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

type Props = {}

function Navbar({ }: Props) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <header className='section flex justify-center'>
                <nav className='w-full flex justify-between items-center flex-col gap-2'>
                    <div id='navbar' className="max-w-[600px] w-full px-[4px] md:px-[2px] py-[2px]  bg-card sticky top-2 mt-3 flex justify-between items-center gap-x-4 rounded-lg ">
                        <div className="text-lg font-caros-medium font-[500]">
                            <Link className="flex justify-between items-center" href="/">
                                <Image className=" rounded-lg w-[30px] h-[30px]" src="/logo.svg" alt="Haseeb Ahmed Logo" width={30} height={30} />
                            </Link>
                        </div>
                        <div className="hidden lg:flex gap-x-4 font-light font-caros">
                            <Link href="#services">
                                <span className=" text-md text-foreground/80 hover:text-foreground/100 ">About</span>
                            </Link>
                            <Link href="#portfolio">
                                <span className=" text-md text-foreground/80 hover:text-foreground/100 ">Projects</span>
                            </Link>
                            <Link href="#contact" >
                                <span className=" text-md text-foreground/80 hover:text-foreground/100">Contact</span>
                            </Link>
                        </div>
                        <div className='flex gap-x-1 items-center '>
                            <div className=''>
                                <ModeToggle />
                            </div>

                            <div
                                className='md:hidden'
                                id="menu-toggle"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                {isOpen ?
                                    <div className='cursor-pointer bg-background rounded-md p-1 transition-all duration-1000 ease-in-out'>
                                        <IoClose className='text-foreground/90 text-3xl text-pretty' />
                                    </div>
                                    :
                                    <div className='cursor-pointer bg-background rounded-md p-1 transition-all duration-1000 ease-in-out'>
                                        <HiMenu className='md:hidden text-foreground/90 text-3xl text-pretty' />
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div id='mobile-menu' className={` max-w-[600px] w-full px-4 py-6  bg-card flex flex-col justify-center gap-y-4 rounded-lg ${isOpen ? 'block opacity-100' : 'hidden opacity-0 '} transition-all duration-1000 ease-in-out`}>
                        <Link href="#portfolio" className='flex items-center gap-4'>
                            <div className='p-2 bg-primary-foreground rounded-lg'>
                                <FaProjectDiagram className='text-background text-sm text-pretty ' />
                            </div>
                            <span className=" text-xl text-foreground hover:text-foreground ">Projects</span>
                        </Link>
                        <Link href="#services" className='flex items-center gap-4'>
                            <div className='p-2 bg-primary-foreground rounded-lg'>
                                <VscFeedback className='text-background text-sm text-pretty ' />
                            </div>
                            <span className=" text-xl text-foreground hover:text-foreground ">Testimonials</span>
                        </Link>
                        <Link href="#services" className='flex items-center gap-4'>
                            <div className='p-2 bg-primary-foreground rounded-lg'>
                                <SiAboutdotme className='text-background text-sm text-pretty ' />
                            </div>
                            <span className=" text-xl text-foreground hover:text-foreground ">About</span>
                        </Link>
                        <Link href="#contact" className='flex items-center gap-4'>
                            <div className='p-2 bg-primary-foreground rounded-lg'>
                                <RiContactsLine className='text-background text-sm text-pretty ' />
                            </div>
                            <span className=" text-xl text-foreground hover:text-foreground ">Contact</span>
                        </Link>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar
