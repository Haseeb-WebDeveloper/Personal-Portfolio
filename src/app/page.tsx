import Navbar from '@/components/global/navbar';
import About from '@/components/sections/about';
import featureData from '@/app/data/feature-data';
import Feature from '@/components/sections/feature';
import HeroSection from '@/components/sections/hero';
import Testimonial from '@/components/sections/testimonial';
import Footer from '@/components/sections/footer';
import Tools from '@/components/sections/tools';
import CallToAction from '@/components/sections/call-to-action';
import Projects from '@/components/sections/projects';

const Home = () => {

  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Tools />
      {/* <Feature feature={featureData}/> */}
      {/* <Testimonial /> */}
      <Projects/>
      <CallToAction />
      <Footer />
    </>
  );
};

export default Home;
