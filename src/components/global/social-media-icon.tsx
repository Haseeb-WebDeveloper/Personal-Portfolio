import Link from 'next/link'
import { BsInstagram } from 'react-icons/bs'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { SiUpwork } from 'react-icons/si'

function SocialMediaIcon() {

    const Upwork = "https://www.upwork.com/freelancers/wasifwordpresswebsitedeveloper"
    const Instagram = "https://www.instagram.com/haseeb.ahmed.raza.khan/"
    const Github = "https://github.com/Haseeb-WebDeveloper/"
    const LinkedinIn = "https://pk.linkedin.com/in/haseeb-ahmed-raza-khan"


    return (
        <div className=''>
            <div className=' inline-flex gap-3 '>
                <Link href={LinkedinIn} className='text-foreground  p-3 rounded-full bg-foreground/5 hover:bg-foreground/10 transition ease-linear '>
                    <FaLinkedinIn size={20} />
                </Link>
                <Link href={Github} className='text-foreground  p-3 rounded-full bg-foreground/5 hover:bg-foreground/10 transition ease-linear '>
                    <FaGithub size={20} />
                </Link>
                <Link href={Upwork} className='text-foreground  p-3 rounded-full bg-foreground/5 hover:bg-foreground/10 transition ease-linear '>
                    <SiUpwork size={20} />
                </Link>
                <Link href={Instagram} className='text-foreground  p-3 rounded-full bg-foreground/5 hover:bg-foreground/10 transition ease-linear '>
                    <BsInstagram size={20} />
                </Link>
            </div>
        </div>
    )
}

export default SocialMediaIcon