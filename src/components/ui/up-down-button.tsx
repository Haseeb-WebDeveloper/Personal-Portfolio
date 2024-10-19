'use client'
import Link from 'next/link'
import React, { useState } from 'react'

type Props = {
    text: string
    link: string
    // size?: 'small' | 'medium' | 'large'
}

const UpDownButton = ({ text, link }: Props) => {
    const [isHover, setIsHover] = useState(false);
    return (
        <div id="lets-talk" className={` flex gap-2  text-foreground `}>
            <Link
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                href={link}
                className={` relative z-50 overflow-hidden w-28 h-10   rounded-[24px] border-[1px] border-foreground/10 font-medium  text-background ${isHover ? "bg-tertiary/90 text-background dark:bg-primary" : "bg-tertiary/95 dark:bg-primary/95"}`}>
                <p className={`absolute left-0 w-full h-full transform ease-in-out duration-500 flex items-center justify-center  bg-tertiary/90 text-background dark:bg-primary ${isHover ? "top-[-100%] " : "top-[0] rotate-0"}`}>
                    {text}
                </p>
                <p className={`transform ease-in-out duration-500 absolute left-0 w-28 h-10   flex items-center justify-center   text-background bg-tertiary/95 dark:bg-primary/95 ${isHover ? "top-[0] rotate-0" : "top-[100%]"}`}>
                    {text}
                </p>
            </Link>
        </div>
    )
}

export default UpDownButton
