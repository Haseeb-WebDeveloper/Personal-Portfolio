import Link from "next/link"
import UpDownButton from "../ui/up-down-button"
import Image from "next/image"
import SocialMediaIcon from "../global/social-media-icon"

function CallToAction() {

    return (
        <>
            <section className="section">
                <div id="Contact" className='mb-4 md:mb-8 mt-8 md:mt-24 lg:mt-20 mx-auto w-full rounded-xl py-6 px-4 md:py-12 md:px-16 bg-chart-1/5 flex flex-col gap-8 md:gap-12 bg-opacity-10 backdrop-blur-3xl'>
                    <div className="w-full flex flex-col md:flex-row gap-12 mx-auto justify-between items-center">
                        <div className="flex flex-col gap-8 ">
                            <div className="flex flex-col gap-6 ">
                                <p className='hidden md:block text-center md:text-left text-[2rem] md:text-[3rem] font-medium  text-foreground/95 max-w-[700px] leading-tight tracking-[-1px] '><span className="text-foreground">Level Up Your Brand</span>  with Empathic Visuals?</p>
                                <h3 className=' font-medium text-center md:text-left text-[2rem] md:text-[3rem] max-w-[700px] leading-tight tracking-[-1px] '>It&apos;s time to make it happen! ✨</h3>
                            </div>
                            <div className="flex justify-center md:justify-start">
                                <UpDownButton text="Let's Talk" link="https://www.upwork.com/freelancers/~01b8c927b6fa311757"
                                    ariaLabel="Let's Talk with Haseeb Ahmed web developer"
                                />
                            </div>
                        </div>
                        <div className="md:w-[40%] w-full h-full flex justify-center items-end">
                            <Image src="/contact.svg" alt="contact illustration" width={600} height={600} className="object-contain w-full h-full"/>
                        </div>
                    </div>
                    <div className="bg-foreground/10 w-full h-[1px]"></div>
                    <div className="flex justify-between md:items-center flex-col md:flex-row gap-6">
                        <div className="flex flex-col gap-3 md:gap-4">
                            <div>
                                <p className="text-foreground/80 text-md font-normal ]">Connect</p>
                            </div>
                            <div>
                                <Link href="mailto:web.dev.haseeb@gmail.com" className="text-foreground/90 hover:text-foreground text-xl md:text-2xl tracking-tighter leading-none" aria-label="Email Haseeb Ahmed web developer">web.dev.haseeb@gmail.com</Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 md:gap-4">
                            <div>
                                <p className="text-foreground/80 text-md font-normal ]">Social</p>
                            </div>
                            <div>
                                <SocialMediaIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CallToAction