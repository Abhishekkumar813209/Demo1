import { TypeAnimation } from 'react-type-animation';
import hero from '../illustrations/hero.svg';
import {Link} from 'react-scroll'

export default function Hero() {
  return (
    <div className='flex lg:h-[90vh] py-10 w-full flex-col items-center space-y-5 md:space-y-0 md:flex-row md:py-5 md:px-14 md:justify-center md:items-center max-w-screen-2xl mx-auto'>
      <div className='md:w-1/2 md:my-0 md:mx-auto px-5'>
        <h2 className='text-center font-bold text-[1.5rem] md:text-left xl:text-[2.5rem] max-[480px]:min-h-[400px] md:min-h-[280px]'>
          We Provides <br />
          <TypeAnimation
            sequence={[
              'Valuable insights that Empower informed decision-making',
              2000,
              'End-to-End Iot Monitering for Real-Time Visibility and control',
              2000,
            ]}
            repeat={Infinity}
            style={{ fontSize: '3rem', color: '#FF2929' }}
          />
        </h2>
        <div className='mt-3 text-center md:text-left md:mt-5'>
            <Link to="offerings" smooth="true" duration={700}>
            <button className='px-6 py-2 bg-[#010103] text-stone-50 rounded-md hover:bg-white hover:text-black hover:outline-1 hover:border-[2px] hover:border-black'>Our Services</button> 
            </Link>
        </div>
      </div>
      <div className='w-1/2'>
        <img src={hero} alt='hero' width={40} className='w-full h-auto object-contain my-0 mx-auto md:max-w-sm' />
      </div>
    </div>
  );
}
