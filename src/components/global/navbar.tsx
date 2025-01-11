"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import UpDownButton from '../ui/up-down-button'
import { gsap } from 'gsap'
import { Menu, X } from 'lucide-react'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        gsap.fromTo(
            "#otherLinks",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
        );
    }, []);

    useEffect(() => {
        gsap.fromTo(
            "#navbarLink",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
        );
    }, []);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const mobileMenu = document.getElementById('mobile-menu')
            if (mobileMenu && !mobileMenu.contains(event.target as Node)) {
                setIsMenuOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [isMenuOpen])

    return (
        <>
            <header className='section font-coolcon w-full'>
                <nav className='relative flex justify-between items-center h-16 md:h-20 px-4'>
                    {/* Logo */}
                    <div id="logo">
                        <Link id="otherLinks" href="/" className='opacity-0 flex items-center gap-2'>
                            <Image src="/logo.svg" alt="Haseeb Ahmed web developer Logo" width={40} height={40} />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div id="links" className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex gap-3 text-md text-foreground'>
                        <Link id="navbarLink" href="#about" className='opacity-0 px-4 py-1.5 font-medium rounded-[24px] flex justify-center items-center border bg-foreground/10 text-sm hover:border-primary-foreground/10 hover:dark:bg-foreground/10 transition-all duration-200'>
                            <span>About</span>
                        </Link>
                        <Link id="navbarLink" href="/blog" className='opacity-0 px-4 py-1.5 font-medium rounded-[24px] flex justify-center items-center border bg-foreground/25 text-sm hover:border-primary-foreground/10 hover:dark:bg-foreground/20 transition-all duration-200'>
                            <span>Blog</span>
                        </Link>
                        <Link id="navbarLink" href="#Contact" className='opacity-0 px-4 py-1.5 font-medium rounded-[24px] flex justify-center items-center border bg-foreground/10 text-sm hover:border-primary-foreground/10 hover:dark:bg-foreground/10 transition-all duration-200'>
                            <span>Contact</span>
                        </Link>
                    </div>

                    {/* Let's Talk Button (Desktop) */}
                    <div id="otherLinks" className='opacity-0 hidden md:block'>
                        <UpDownButton 
                            text="Let's Talk" 
                            link="https://www.upwork.com/freelancers/~01b8c927b6fa311757"
                            ariaLabel="Let's Talk with Haseeb Ahmed web developer"
                        />
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-md hover:bg-foreground/10 transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Mobile Menu */}
                    <div
                        id="mobile-menu"
                        className={`fixed inset-0 bg-background/95 backdrop-blur-sm z-50 transition-transform duration-300 ease-in-out ${
                            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                        } md:hidden`}
                    >
                        <div className="flex flex-col h-full p-6">
                            {/* Mobile Menu Header */}
                            <div className="flex justify-between items-center mb-8">
                                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                                    <Image src="/logo.svg" alt="Logo" width={40} height={40} />
                                </Link>
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="p-2 rounded-md hover:bg-foreground/10 transition-colors"
                                    aria-label="Close menu"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Mobile Menu Links */}
                            <div className="flex flex-col gap-4">
                                <Link
                                    href="#about"
                                    className="text-lg font-medium px-4 py-2 rounded-md hover:bg-foreground/10 transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    About
                                </Link>
                                <Link
                                    href="/blog"
                                    className="text-lg font-medium px-4 py-2 rounded-md hover:bg-foreground/10 transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Blog
                                </Link>
                                <Link
                                    href="#Contact"
                                    className="text-lg font-medium px-4 py-2 rounded-md hover:bg-foreground/10 transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Contact
                                </Link>
                            </div>

                            {/* Mobile Let's Talk Button */}
                            <div className="mt-auto">
                                <UpDownButton 
                                    text="Let's Talk" 
                                    link="https://www.upwork.com/freelancers/~01b8c927b6fa311757"
                                    ariaLabel="Let's Talk with Haseeb Ahmed web developer"
                                />
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar