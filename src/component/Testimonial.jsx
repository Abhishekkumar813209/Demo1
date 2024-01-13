import { useEffect, useState } from 'react';
import Slider from "react-slick";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import cards from '../constant/services.js';

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-black hover:bg-black duration-300 rounded-md text-2xl text-red-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-black hover:bg-black duration-300 rounded-md text-2xl text-red-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
  const [dotActive, setDocActive] = useState(0);

  
  useEffect(() => {
    const handleResize = () => {
      // Update the number of slidesToShow based on window width
      const width = window.innerWidth;
      let newSlidesToShow;

      if (width < 480) {
        newSlidesToShow = 1;
      } else if (width < 960) {
        newSlidesToShow = 2;
      } else {
        newSlidesToShow = 3;
      }

      // Set the new slidesToShow value in the state
      setSlidesToShow(newSlidesToShow);
    };

    // Attach the resize event listener
    window.addEventListener('resize', handleResize);

    // Initial call to handleResize to set the initial value
    handleResize();

    // Detach the resize event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [slidesToShow, setSlidesToShow] = useState(3);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,   
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "35px",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "#ff014f",
                borderRadius: "50%",
                cursor: "pointer",
              }
            : {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "gray",
                borderRadius: "50%",
                cursor: "pointer",
              }
        }
      ></div>
    ),
  };

  // Define your slider settings here
  // const [sliderSettings, setSliderSettings] = useState(null);

  return (
    <Slider {...settings}>
      {cards.map((card) => (
        <div key={card.id} className='mt-[-4rem] py-16 flex flex-wrap gap-3 max-w-[400px] px-4 sm:h-[920px] lg:h-[800px] text-justify'>
          <div
            className='flex flex-col self-auto h-full gap-3 p-4 flex-auto sm:basis-[25%] lg:basis-0 shadow-md rounded-[16px] border border-solid border-stone-600 [&:nth-child(2)]:bg-stone-600 '
          >
            <div className='sm:mx-auto hover:scale-[1.02] transition-all'>
              <div className='w-full h-auto'>
                <img src={card.img} alt='icon' className='h-[250px]' />
              </div>
            </div>
            <p className='font-medium text-lg lg:text-xl sm:text-center text-stone-100'>{card.title}</p>
            <p className='lg:text-center lg:text-justify py-2 text-gray-300 mb-auto'>{card.desc}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Testimonial;
