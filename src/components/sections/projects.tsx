'use client'
import gsap from "gsap"; 
import ScrollTrigger from "gsap/ScrollTrigger"; 
import { useEffect } from "react"; 
import Image from "next/image";
import Link from "next/link";
import projectData from "@/app/data/project-data";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {

  useEffect(() => { 
    const panelsArray = gsap.utils.toArray(".panel");
    const getMargin = () => {
      if (window.innerWidth < 640) return 16;
      if (window.innerWidth < 768) return 8;
      if (window.innerWidth < 1024) return 6;
      return 4;
    };
    const margin = getMargin();
    const totalPanels = panelsArray.length;
    const totalMargin = margin;
    const xPercentValue = -(100 * (totalPanels - 1) + totalMargin);

    const horizontalContainer = gsap.to(".horizontal-container", {
      xPercent: xPercentValue,
      ease: "none",
      scrollTrigger: {
        trigger: ".horizontal-wrapper",
        start: "top 2%", 
        end: "+=" + 100 * totalPanels + "%",
        pin: "#mainContainer",
        scrub: 2,
        markers: false
      }
    });

    return () => {
      if (horizontalContainer.scrollTrigger) {
        horizontalContainer.scrollTrigger.kill();
      }
    };
  }, []);

  return (
    <>
      {/* <section className=""></section> */}
      <section id="mainContainer" className="h-full w-full ">
        <div className=""></div>
        <div id="work" className="section  horizontal-wrapper w-full h-[100vh] overflow-hidden">
          <div className="horizontal-container flex items-start flex-nowrap  h-full gap-4">
            <div id="displaySection" className="panel  bg-foreground/10  rounded-md w-full h-[96%] relative  flex-grow flex-shrink-0 basis-full  ">
                <div className="gap-20 w-[100%] h-full flex flex-col md:flex-row items-center justify-between   md:p-12">
                  <div className="p-6  md:p-0 relative flex flex-col md:justify-around md:h-80 h-full md:gap-8 gap-12 w-full ">
                    <div>
                      <h2 id="mainText" className="text-2xl md:text-3xl font-semibold px-4 py-2 bg-primary  text-background rounded-md w-fit tracking-tight leading-none">See What I&apos;ve Built</h2>
                    </div>
                    <div>
                      <p className="text-md md:text-2xl font-normal max-w-2xl leading-tight">Browse through the projects that demonstrate my skills, creativity, and commitment to quality. Here's where my ideas come to life.</p>
                    <div className="absolute md:right-16 md:top-20 right-[40%] top-52 text-xl kalam-light text-foreground/60">
                      <p>....these are some<br/> of my project =)</p>
                    </div>
                    </div>
                  </div>
                  <div className="w-full md:w-[50%] ">
                    <div className="w-full h-full flex md:justify-end justify-center items-center">
                      <Image src="/web-developer.webp" alt="web developer illustration" width={350} height={350} className="object-contain"/>
                    </div>
                  </div>
                </div>
            </div>
           {
            projectData.map((project, index) => (
              <div key={project.title} className={`panel w-full h-[96%] rounded-md flex-grow flex-shrink-0 basis-full bg-foreground/10 ${index === projectData.length - 1 ? 'mr-4' : ''}`}>
              <div className=" w-[100%] h-full p-4 md:py-8 md:px-10 overflow-hidden">
                <div className="flex flex-col md:flex-row justify-between gap-10 h-full  ">
                  <div className="flex flex-col md:gap-10 gap-6 justify-between ">
                    <div className="flex flex-col gap-2 md:gap-4">
                      <h4 className="text-primary text-2xl md:text-3xl font-medium max-w-2xl leading-none">{project.title}</h4>
                      <p className="text-md font-normal leading-tight text-foreground/90 text-[0.9rem] md:text-lg max-w-xl">
                      {project.description}
                      </p>
                    </div>
                    <div className="flex flex-col md:gap-6 gap-8 max-w-xl ">
                      <div className="hidden md:flex gap-32 items-start ">
                        <div className="flex flex-col gap-2">
                            <p className="text-foreground/90 text-sm md:text-base font-light">Duration</p>
                            <p className="text-foreground/90 text-md font-medium leading-none">{project.duration}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                          <p className="text-foreground/90 text-sm md:text-base font-light">Category</p>
                          <p className="text-foreground/90 text-md font-medium leading-none">{project.category}</p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="text-basero font-normal max-w-2xl leading-tight text-foreground/90 text-[0.9rem] md:text-base">Tech Stack</p>
                        <div className="flex gap-y-2.5 gap-x-2 max-w-xl flex-wrap">
                          {
                            project.tools.map((tool, index) => (
                              <p key={tool} className={`${index === 0 ? "bg-foreground/10 text-foreground/90 " : "bg-foreground/10 text-foreground/90 "}  text-sm md:text-[0.92rem] font-normal rounded-full flex items-center justify-center px-4 py-1.5`}>{tool}</p>
                            ))
                          }
                        </div>
                      </div>
                      <div className="flex gap-2">
                       { project.live &&  
                          <Link href={project.live} target="_blank" aria-label={`View ${project.title} live`}>
                            <p className="bg-foreground/10 hover:bg-foreground/20 transition-all duration-300 font-semibold text-sm md:text-base rounded-md flex items-center justify-center px-10 py-2">View</p>
                          </Link>
                        }
                        { project.code && 
                          <Link href={project.code} target="_blank" aria-label={`View ${project.title} code`}>
                            <p className="bg-foreground/10 hover:bg-foreground/20 transition-all duration-300 font-semibold text-sm md:text-base rounded-md flex items-center justify-center px-10 py-2">Code</p>
                          </Link> 
                        }
                        
                      </div>
                    </div>
                    </div>
                    <div className=" md:w-1/2 h-full md:h-auto w-full">
                      <div className="flex justify-center items-center w-full h-full ">
                        {project.media.large && (
                          <Image src={project.media.large} alt={`${project.title} mockup`} width={700} height={700}  className="object-contain rounded-sm h-full"/>
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
