// import Slider from "react-slick";
import cards from '../constant/services.js';


export default function Services() {

  return (
   
      <div className='py-8 flex flex-wrap gap-5 w-full px-8 md:px-16'>
        {cards.map((card) => {
          return (
            <div
              className='flex flex-col self-auto gap-3 p-4 flex-auto sm:basis-[25%] lg:basis-0 shadow-md rounded-[16px] border border-solid border-stone-600 [&:nth-child(2)]:bg-stone-600 '
              key={card.id}
            >
              <div className='sm:mx-auto hover:scale-[1.02] transition-all'>
                <div className='w-full h-auto'>
                  <img src={card.img} alt='icon' sizes='20' />
                </div>
              </div>
              <p className='font-medium text-lg lg:text-xl sm:text-center text-stone-100'>{card.title}</p>
              <p className='lg:text-center lg:text-justify py-2 text-gray-300 mb-auto'>{card.desc}</p>
            </div>
          );
        })}
      </div>
 
  );
}
