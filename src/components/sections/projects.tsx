'use client'
import gsap from "gsap"; 
import ScrollTrigger from "gsap/ScrollTrigger"; 
import { useEffect } from "react"; 
import Image from "next/image";
import Link from "next/link";
import projectData from "@/app/data/project-data";
// import UpDownButton from "../ui/up-down-button";

// Dynamically import the Ai component with no SSR
// const Icon = dynamic(() => import('../ui/3d-icon'), { ssr: false });

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {

  useEffect(() => { 
    const panelsArray = gsap.utils.toArray(".panel"); // Converting panels DOM node to an array
    // Function to determine margin based on screen size
    const getMargin = () => {
      if (window.innerWidth < 640) return 16; // Small screens
      if (window.innerWidth < 768) return 8; // Medium screens
      if (window.innerWidth < 1024) return 6; // Large screens
      return 4; // Extra large screens
    };
    const margin = getMargin(); // Get the margin value based on screen size
    const totalPanels = panelsArray.length; // Total number of panels
    const totalMargin = margin; // Margin value based on screen size
    const xPercentValue = -(100 * (totalPanels - 1) + totalMargin); // Calculate xPercent

    const horizontalContainer = gsap.to(".horizontal-container", {
      xPercent: xPercentValue, // Use the calculated xPercent value
      ease: "none",
      scrollTrigger: {
        trigger: ".horizontal-wrapper",
        start: "top 2%", 
        end: "+=" + 100 * totalPanels + "%", // Use totalPanels for clarity
        pin: "#mainContainer",
        scrub: 2,
        markers: false
      }
    });



    // Cleanup function to kill the ScrollTrigger instance
    return () => {
      if (horizontalContainer.scrollTrigger) {
        horizontalContainer.scrollTrigger.kill();
      }
    };
  }, []);

  return (
    <>
      <section className=""></section>
      <section id="mainContainer" className="h-full w-full ">
        <div className=""></div>
        <div id="work" className="section  horizontal-wrapper w-full h-[100vh] overflow-hidden">
          <div className="horizontal-container flex items-start flex-nowrap  h-full gap-4">
            {/* each div conatin one project */}
            <div id="displaySection" className="panel section bg-foreground/5  rounded-md w-full h-[96%] relative  flex-grow flex-shrink-0 basis-full  ">
                <div className=" w-[100%] h-full flex flex-col md:flex-row items-center justify-between ">
                  <div className="relative flex flex-col justify-around h-80 gap-8 w-full">
                    <div>
                    <h2 id="mainText" className="text-2xl md:text-3xl font-semibold px-4 py-2 bg-primary  text-background rounded-md w-fit tracking-tight leading-none">See What I&apos;ve Built</h2>
                    </div>
                    <div>
                    <p className="text-md md:text-2xl font-normal max-w-2xl leading-tight">Browse through the projects that demonstrate my skills, creativity, and commitment to quality. Here’s where my ideas come to life.</p>
                    <div className="absolute right-16 top-20 text-xl kalam-light text-foreground/60">
                      <p>....these are some<br/> of my project =)</p>
                    </div>
                    </div>
                  </div>
                  <div className="  w-[50%] ">
                    <div className="w-full h-full flex justify-end items-center">
                      <Image src="/web-developer.webp" alt="" width={350} height={350} className="object-contain"/>
                    </div>
                    {/* <div className="absolute top-[35%] -translate-y-1/2 left-[40%] w-[100px] h-[100px]">
                      <Star/>
                    </div> */}
                    {/* <div className="absolute top-20 left-10 w-[100px] h-[100px]">
                      <Flower />
                    </div> */}
                    {/* <div className="absolute top-[50%] -translate-y-1/2 left-[55%] w-[150px] h-[100px]">
                      <Star_2/>
                    </div> */}
                    {/* <div className="absolute top-[50%] -translate-y-1/2 left-[40%] w-[100px] h-[100px] ">
                        <div className="w-full h-full">
                            <Icon/>
                        </div>
                    </div> */}
                    {/* <div className="absolute top-[30%] -translate-y-1/2 left-[80%] -translate-x-1/2 w-[350px] h-[100px]">
                      <Image src="/coding2.svg" alt="" width={500} height={500} className="object-contain"/>
                    </div> */}
                  </div>
                </div>
            </div>
           {
            projectData.map((project, index) => (
              <div key={project.title} className={`panel section w-full h-[96%] rounded-md flex-grow flex-shrink-0 basis-full bg-foreground/5 ${index === projectData.length - 1 ? 'mr-4' : ''}`}>
              <div className=" w-[100%] h-full ">
                {/* Two columns one for text and one for image */}
                <div className="flex flex-col md:flex-row justify-between gap-10 h-full py-6 md:py-10 ">
                  {/* Text column */}
                  <div className="flex flex-col gap-10 justify-between">
                    {/* top text */}
                    <div className="flex flex-col gap-2">
                      <h1 className="text-primary text-lg md:text-3xl font-medium max-w-2xl leading-none">{project.title}</h1>
                      <p className="text-foreground/90 text-lg font-light max-w-xl  leading-tight">
                      {project.description}
                      </p>
                    </div>
                    {/* bottom text */}
                    <div className="flex flex-col gap-6 max-w-xl">
                      {/* row 1 */}
                      <div className="flex gap-32 items-start">
                        {/* duration */}
                        <div className="flex flex-col gap-2">
                          <p className="text-foreground/90 text-sm font-light">Duration</p>
                          <p className="text-foreground/90 text-lg font-medium">{project.duration}</p>
                        </div>
                        {/* category */}
                        <div className="flex flex-col gap-2">
                          <p className="text-foreground/90 text-sm font-light">Category</p>
                          <p className="text-foreground/90 text-lg font-medium">{project.category}</p>
                        </div>
                      </div>
                      {/* row 2 */}
                      <div className="flex flex-col gap-2">
                        <p className="text-foreground/90 text-sm font-light">Tech Stack</p>
                        <div className="flex gap-y-2.5 gap-x-2 max-w-md flex-wrap">
                          {
                            project.tools.map((tool) => (
                              <p key={tool} className="text-foreground/90 text-sm font-normal rounded-full bg-foreground/5 px-3 py-1">{tool}</p>
                            ))
                          }
                        </div>
                      </div>
                      {/* row 3 */}
                      <div className="flex gap-2">
                       { project.live &&  
                          <Link href={project.live} target="_blank">
                            <p className="text-md font-light text-foreground/90 rounded-md bg-background hover:bg-background/60 transition ease-linear duration-200 px-6 py-1">View</p>
                          </Link>
                        }
                        { project.code && 
                          <Link href={project.code} target="_blank">
                            <p className="text-md font-light text-foreground/90 rounded-md bg-background hover:bg-background/60 transition ease-linear duration-200 px-6 py-1">Code</p>
                          </Link> 
                        }
                        
                      </div>
                    </div>
                    </div>
                    {/* Image column */}
                    <div className=" w-1/2 ">
                      <div className="flex justify-center items-center w-full h-full ">
                        {project.media.large && (
                          <Image src={project.media.large} alt="" width={700} height={700}  className="object-contain rounded-sm h-full"/>
                         )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
           }
          </div>
        </div>
        <div className=""></div>
      </section>
      <section className=""></section>
    </>
  );
}
