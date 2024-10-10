'use client'
import gsap from "gsap"; 
import ScrollTrigger from "gsap/ScrollTrigger"; 
import { useEffect } from "react"; 
import Image from "next/image";
import Link from "next/link";
import projectData from "@/app/data/project-data";


gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  console.clear();

  useEffect(() => { 
    const panelsArray = gsap.utils.toArray(".panel"); // Converting panels DOM node to an array
    const horizontalContainer = gsap.to(".horizontal-container", {
      xPercent: -(100 * (panelsArray.length - 1)),
      ease: "none",
      scrollTrigger: {
        trigger: ".horizontal-wrapper",
        start: "top 2%", 
        end: "+=" + 100 * panelsArray.length + "%",
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
        <div className="section horizontal-wrapper w-full h-[100vh] overflow-hidden">
          <div className="horizontal-container flex flex-nowrap h-full gap-4">
            {/* each div conatin one project */}
            <div className="panel w-full h-[100%]  flex-grow flex-shrink-0 basis-full  ">
                <div className=" w-[100%] h-full flex flex-col md:flex-row items-center ">
                  <div className="flex flex-col  gap-4">
                    <h2 id="mainText" className="text-3xl md:text-5xl font-medium  leading-none">See What I've Built</h2>
                    <p className="text-2xl font-normal max-w-2xl  text-foreground/70 leading-tight">Browse through the projects that demonstrate my skills, creativity, and commitment to quality. Here’s where my ideas come to life.</p>
                  </div>
                  
                </div>
            </div>
           {
            projectData.map((project) => (
              <div key={project.title} className="panel  w-full h-[96%] rounded-md  flex-grow flex-shrink-0 basis-full  bg-foreground/[2%] ">
              <div className=" w-[100%] h-full section">
                {/* Two columns one for text and one for image */}
                <div className="flex flex-col md:flex-row justify-between gap-10 h-full py-4 md:py-10 ">
                  {/* Text column */}
                  <div className="flex flex-col gap-10 justify-between">
                    {/* top text */}
                    <div className="flex flex-col gap-2">
                      <h1 className="text-primary text-3xl font-medium max-w-2xl leading-none">{project.title}</h1>
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
                        <p className="text-foreground/90 text-sm font-light">Tools</p>
                        <div className="flex gap-y-2.5 gap-x-2 max-w-md flex-wrap">
                          {
                            project.tools.map((tool) => (
                              <p key={tool} className="text-foreground/90 text-sm font-normal rounded-full bg-foreground/5 px-3 py-1">{tool}</p>
                            ))
                          }
                        </div>
                      </div>
                      {/* row 3 */}
                      <div className="flex gap-4">
                        <Link href={project.live} target="_blank">
                          <p className="text-md font-medium text-primary-foreground rounded-md bg-primary px-6 py-1">View</p>
                        </Link>
                        <Link href={project.code} target="_blank">
                          <p className="text-md font-medium text-primary-foreground rounded-md bg-primary px-6 py-1">Code</p>
                        </Link>
                      </div>
                    </div>
                    </div>
                    {/* Image column */}
                    <div className=" ">
                      {project.media.image && (
                        <Image src={project.media.image} alt="" width={500} height={500}  className="object-contain"/>
                      )}
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