// import Button from "@/components/Button";
import ShimmerButton from "@/components/magicui/shimmer-button";
import starBg from '@/assets/stars.png'
import gridLines from "@/assets//grid-lines.png"
import Link from "next/link";

export const CallToAction = () => {
  return (
    <>
    {/* #371A63 
    linear-gradient(to_bottom_left,rgba(140,255,255,0.3),black)
    */}
      <section className="text-white py-16 md:py-20">
        <div className="container ">
          <div className="relative py-24 border border-white/5 rounded-xl max-w-6xl mx-auto " style={{
              backgroundImage: `url(${starBg.src})`
          }}>
            <div className="z-[-10] absolute inset-0  bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_100%_at_50%_50%,black,transparent)]" style={{
              backgroundImage: `url(${gridLines.src})`
            }}></div>
            <div className="">
              <h2 className=" text-4xl md:text-5xl  font-medium text-center mb-4">AI Driven SEO for everyone.</h2>
              <p className="px-4 text-white/90 text-lg t max-w-[600px]  font-light text-md md:text-lg mx-auto text-center text-gray-300 mb-5 ">Achive clear impect result without complexilety</p>
            </div>
            <Link href="/start" className="mt-8 mx-auto flex justify-center">
              <ShimmerButton
              background=" #371A63 "
              >LETS START</ShimmerButton>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
