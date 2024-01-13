import React, { useState } from 'react';
import logo1 from '../assest/PiSence Logo/Group 5.png';
import logo2 from '../assest/PiSence Logo/Group 5 (1).png';
import nav from '../constant/nav';
import { IoMenuOutline, IoClose } from 'react-icons/io5';
import {Link} from "react-scroll"

export default function Nav() {
  const [navClicked, setNavClicked] = useState(true);
  return (
    <div className=' w-full max-w-screen-2xl mx-auto'>
      <div className='bg-[#010103] px-8 py-4 flex items-center justify-between md:px-16'>
        <div>
          <img src={logo1} alt='pisence-logo1' width={40} className='md:hidden' />
          <img src={logo2} alt='pisence-logo2' width={50} className='md:block hidden' />
        </div>
        <div className='md:hidden cursor-pointer'>
          {navClicked ? (
            <IoMenuOutline size={40} color='#ffff' onClick={() => setNavClicked(false)} />
          ) : (
            <IoClose size={40} color='#ffff' onClick={() => setNavClicked(true)} />
          )}
        </div>

        <div className='hidden text-stone-50 md:block w-1/2'>
          <ul className='flex justify-evenly items-center'>
            {nav.map((item) => (
              <Link key={item.id} to={item.link} smooth={true} duration={500}>
              <li key={item.id} className='py-2 px-3 hover:border-b-2 hover:text-[#FF2929] hover:border-[#FF2929] cursor-pointer'>
                 {item.title}
              </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={`absolut top-1/2 ${
          navClicked ? 'hidden' : 'right-5'
        } text-center bg-[#010103] text-stone-50 md:hidden`}
      >
        <ul className='p-5 list-none'>
          {nav.map((item) => (
             <Link key={item.id} to={item.link} smooth={true} duration={500}>
            <li key={item.id} className={`${nav.length == item.id ? 'mb-0' : 'mb-2'} p-1 hover:text-[#FF2929] hover:border-b-[#FF2929] cursor-pointer`}>
              {item.title}
            </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
// #eaeaea -inactive
