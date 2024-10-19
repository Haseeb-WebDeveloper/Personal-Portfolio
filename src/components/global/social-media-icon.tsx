import Link from 'next/link'
import { BsInstagram } from 'react-icons/bs'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { SiUpwork } from 'react-icons/si'

function SocialMediaIcon() {

    const Upwork = "https://www.upwork.com/freelancers/~01b8c927b6fa311757"
    const Instagram = "https://www.instagram.com/haseeb.ahmed.raza.khan/"
    const Github = "https://github.com/Haseeb-WebDeveloper/"
    const LinkedinIn = "https://pk.linkedin.com/in/haseeb-ahmed-raza-khan"


    return (
        <div className=''>
            <div className=' inline-flex gap-3 '>
                <Link href={LinkedinIn} className='text-foreground  p-3 rounded-full bg-foreground/10 hover:bg-foreground/5 transition ease-linear ' aria-label="Haseeb Ahmed LinkedIn profile" rel="noopener noreferrer">
                    <FaLinkedinIn size={20} aria-hidden="true" />
                </Link>
                <Link href={Github} className='text-foreground  p-3 rounded-full bg-foreground/10 hover:bg-foreground/5 transition ease-linear ' aria-label="Haseeb Ahmed GitHub profile" rel="noopener noreferrer">
                    <FaGithub size={20} aria-hidden="true" />
                </Link>
                <Link href={Upwork} className='text-foreground  p-3 rounded-full bg-foreground/10 hover:bg-foreground/5 transition ease-linear ' aria-label="Haseeb Ahmed Upwork profile" rel="noopener noreferrer">
                    <SiUpwork size={20} aria-hidden="true" />
                </Link>
                <Link href={Instagram} className='text-foreground  p-3 rounded-full bg-foreground/10 hover:bg-foreground/5 transition ease-linear ' aria-label="Haseeb Ahmed Instagram profile" rel="noopener noreferrer">
                    <BsInstagram size={20} aria-hidden="true" />
                </Link>
            </div>
        </div>
    )
}

export default SocialMediaIcon
