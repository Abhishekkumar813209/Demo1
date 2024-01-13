import about from '../constant/aboutCard.js';

export default function AboutSection() {
  return (
     <div className='text-stone-100 max-w-screen-xl mx-auto md:flex content' id="about" >
    <div className='w-full md:w-1/2 p-4' data-aos='fade-right' data-aos-delay='500'>
      <h2 className='px-2 py-1 font-bold text-[2.5rem] flex justify-center' >
        <span className='text-red-500'>About &nbsp; </span>    Us
      </h2>
      <p className='font-medium px-2 py-2 text-justify leading-[26px]'>
        At PiSence, we are dedicated to delivering top-quality monitoring services to meet the diverse needs of
        industries and sectors across the globe. With our advanced technology, expertise, and commitment to
        excellence, we aim to be your trusted partner in ensuring safety, security, and efficiency. Our company,
        PiSence, is built on a foundation of innovation, reliability, and customer satisfaction. We understand the
        critical importance of monitoring systems in today&apos;s fast-paced world, where safety and security are
        paramount. Whether it&apos;s protecting assets, ensuring compliance with regulations, or optimizing operational
        efficiency, we have you covered. What sets PiSence apart is our comprehensive range of monitoring services. We
        offer a wide spectrum of solutions tailored to various industries, including security monitoring,
        environmental monitoring, infrastructure monitoring, industrial process monitoring, IT infrastructure
        monitoring, healthcare monitoring, energy management monitoring, and vehicle and fleet monitoring. Whatever
        your monitoring needs may be, we have the expertise and technology to provide effective and customized
        solutions.
      </p>
      {/* <div className='text-center mt-3'>
        <button className='px-4 py-2 border border-solid rounded-md outline-none'>Read More</button>
      </div> */}
    </div>
    <div className='w-full p-4  md:w-1/2'>
      {about.map((item,index) => {
        const isEven = index%2==0;
        const aosDirection = isEven?"fade-left":'fade-right';
        return (
          <div
            key={item.id}
            className='[&:nth-child(even)]:bg-stone-700 [&:nth-child(odd)]:border [&:nth-child(odd)]:border-solid mt-5 p-4'
            data-aos={aosDirection} data-aos-delay='500'
          >
            <div className='w-20'>
              <img src={item.img} alt='img' className='card-icon-red'  />
            </div>
            <p className='py-4 font-bold text-lg' >{item.title}</p>
            <p className='text-gray-300'>{item.about}</p>
            </div>
        );
      })}
    </div>
  </div>
  );
}
