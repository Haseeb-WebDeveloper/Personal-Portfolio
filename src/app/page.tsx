import Navbar from '@/components/global/navbar';
import About from '@/components/sections/about';
import HeroSection from '@/components/sections/hero';
import Tools from '@/components/sections/tools';
import CallToAction from '@/components/sections/call-to-action';
import Projects from '@/components/sections/projects';

const Home = () => {

  return (
    <>
      <main className=''>
        <Navbar />
        <HeroSection />
        <About />
        <Tools />
        <Projects/>
        <CallToAction />
      </main>
    
    </>
  );
};

export default Home;
