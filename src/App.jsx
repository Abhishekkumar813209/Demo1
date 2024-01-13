import Services from './component/ServicesCards.jsx';
import HeroSection from './component/HeroSection.jsx';
import Nav from './component/Nav.jsx';
import AboutSection from './component/AboutSection.jsx';
import GetInTouch from './component/GetInTouch.jsx';
import Footer from './component/Footer.jsx';
import WhyChooseUs from './component/WhyChooseUs.jsx';
import CircleCursor from "./CircleCursor.jsx"
import Aos from 'aos';
import 'aos/dist/aos.css'
import Deck from './component/Deck.jsx';
import Testimonial from './component/Testimonial.jsx';
function App() {
  Aos.init({
    duration:1800,
    offset:1
  })
  return (
    <div className='overflow-x-hidden'>
      <Nav />
      <HeroSection />
      <CircleCursor />
      <section className='relative my-10 bg-[#2b2727] max-w-screen-2xl mx-auto'>
        <AboutSection />
      </section>

      <WhyChooseUs />

      <section className='max-w-screen-2xl mx-auto h-fit my-10 bg-[#2b2727]'>
        <div className='text-center pt-6' id="offerings">
          <h2 className='text-[3rem] font-bold text-white mt-[2rem] mb-[2rem]'>
            <span className='text-red-500'>Our </span>Services
          </h2>
          <h2 className='text-lg text-white flex justify-center'>Click on the Card to Orient them in Straight Direction and Drag them in alternate direction for best experience</h2>
          <div className='h-[90vh] relative'>
          <Deck />
          </div>
        </div>
        
        <Testimonial />
      </section>
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default App;
