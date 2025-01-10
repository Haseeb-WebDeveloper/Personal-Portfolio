import Navbar from '@/components/global/navbar';
import About from '@/components/sections/about';
import HeroSection from '@/components/sections/hero';
import Tools from '@/components/sections/tools';
import CallToAction from '@/components/sections/call-to-action';
import Projects from '@/components/sections/projects';
import MoreProjects from '@/components/sections/recent_projects';
import DotPattern from '@/components/ui/dot-pattern';
import { cn } from "@/lib/utils";
import StructuredData from '@/components/StructuredData';
import ToolProjects from '@/components/sections/tool-projects';

const Home = () => {

  return (
    <>
      <StructuredData />
      <main className=''>
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,green,transparent,transparent)] md:opacity-40 opacity-60",
          )}
        />
        <Navbar />
        <HeroSection />
        <About />
        <Tools />
        <Projects />
        <MoreProjects />
        <ToolProjects />
        <CallToAction />
      </main>

    </>
  );
};

export default Home;
