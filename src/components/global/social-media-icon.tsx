import Link from 'next/link'
import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { SiUpwork } from 'react-icons/si'
type Props = {}

function SocialMediaIcon({ }: Props) {
    return (
        <div className='flex justify-center'>
            <div className='p-1 rounded-3xl inline-flex gap-1 bg-secondary shadow-lg'>
                <Link href='/' className='text-foreground px-3 py-2 rounded-2xl bg-primary hover:bg-black transition ease-linear decoration-neutral-300'>
                    <FaLinkedinIn size={20} />
                </Link>
                <Link href='/' className='text-foreground px-3 py-2 rounded-2xl bg-primary hover:bg-primary/40 transition ease-linear decoration-neutral-300'>
                    <FaGithub size={20} />
                </Link>
                <Link href='/' className='text-foreground px-3 py-2 rounded-2xl bg-primary hover:bg-primary/40 transition ease-linear decoration-neutral-300'>
                    <SiUpwork size={20} />
                </Link>
                <Link href='/' className='text-foreground px-3 py-2 rounded-2xl bg-primary hover:bg-primary/40 transition ease-linear decoration-neutral-300'>
                    <BsInstagram size={20} />
                </Link>
            </div>
        </div>
    )
}

export default SocialMediaIcon