import Link from "next/link"
import UpDownButton from "../ui/up-down-button"
import Image from "next/image"

function CallToAction() {

    const Upwork = "https://www.upwork.com/freelancers/wasifwordpresswebsitedeveloper"
    return (
        <>
            <section className="section section-my ">
                <div id="Contact" className=' mx-auto rounded-xl py-4 md:py-20 xl:py-24 px-4 md:px-20 bg-foreground/5'>
                    <div className=" flex flex-col gap-12 mx-auto ">
                        <div className="flex flex-col gap-12 ">
                            <div className="flex flex-col gap-8 ">
                                <p className='text-5xl font-medium  text-foreground/95 max-w-[700px] leading-tight tracking-[-1px] '>Ready to <span className="text-foreground">Level Up Your Brand</span>  with Empathic Visuals?</p>
                                <p className='font-medium text-4xl md:text-5xl max-w-[700px] leading-normal tracking-[-1px] '>Let's make it happen!✨</p>
                            </div>
                            <div className="">
                                <UpDownButton text="Contact Me" size="medium" />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export default CallToAction