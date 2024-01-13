import React from 'react';
import { IoCallOutline, IoMail } from 'react-icons/io5';

import logo from '../assest/PiSence Logo/Group 5 (1).png';

export default function Footer() {
  return (
    <section className='max-w-screen-2xl mx-auto mt-10 h-fit' data-aos='fade-down' data-aos-delay='500'>
      <div className='max-[480px]:flex-col max-[480px]:gap-[3rem] flex px-8 py-4 items-center bg-[#2b2727] text-stone-100 gap-4 md:flex-row md:justify-between md:items-center'>
        <div className='flex-1 mx-auto' data-aos='fade-right' data-aos-delay='500'>
          <img src={logo} alt='logo' width={150} className='mx-auto' />
        </div>
        <div className='text-center flex-1' data-aos='fade-up' data-aos-delay='500'>
          <h2 className='mb-1'>Contact us</h2>
          <hr />
          <div className='py-1'>
            <p>
              <span>
                <IoCallOutline size={20} className='inline mr-2' />
              </span>
              Call Now
            </p>
            <p className='py-1'>+91 90805 75392</p>
          </div>
          <div>
            <h2>
              <span>
                <IoMail size={30} className='inline mr-2' />
              </span>
              Mail
            </h2>
            <p className='py-2'>support@pisence.com</p>
          </div>
        </div>
        <div className='text-center flex-1' data-aos='fade-left' data-aos-delay='500'>
          <h2 className='mb-1'>EXPLORE OUR SITE</h2>
          <hr />
          <ul className='list-none placeholder-sky-400 '>
            <li className='pt-2 pb-1 hover:border-b-2 hover:text-[#FF2929] hover:border-[#FF2929]'>Home</li>
            <li className='py-1 hover:border-b-2 hover:text-[#FF2929] hover:border-[#FF2929]'>About Us</li>
            <li className='py-1 hover:border-b-2 hover:text-[#FF2929] hover:border-[#FF2929]'>Offerings</li>
            <li className='py-1 hover:border-b-2 hover:text-[#FF2929] hover:border-[#FF2929]'>Contact</li>
          </ul>
        </div>
      </div>
      <div className='bg-[#2b2727] text-center text-stone-100'>
        <p>Copyright © PiSence 2024. All rights reserved.</p>
      </div>
    </section>
  );
}
