import Link from 'next/link'
import { BsInstagram } from 'react-icons/bs'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { SiUpwork } from 'react-icons/si'

function SocialMediaIcon() {
    return (
        <div className=''>
            <div className=' inline-flex gap-3 '>
                <Link href='/' className='text-foreground  p-3 rounded-full bg-foreground/5 hover:bg-foreground/10 transition ease-linear '>
                    <FaLinkedinIn size={20} />
                </Link>
                <Link href='/' className='text-foreground  p-3 rounded-full bg-foreground/5 hover:bg-foreground/10 transition ease-linear '>
                    <FaGithub size={20} />
                </Link>
                <Link href='/' className='text-foreground  p-3 rounded-full bg-foreground/5 hover:bg-foreground/10 transition ease-linear '>
                    <SiUpwork size={20} />
                </Link>
                <Link href='/' className='text-foreground  p-3 rounded-full bg-foreground/5 hover:bg-foreground/10 transition ease-linear '>
                    <BsInstagram size={20} />
                </Link>
            </div>
        </div>
    )
}

export default SocialMediaIcon