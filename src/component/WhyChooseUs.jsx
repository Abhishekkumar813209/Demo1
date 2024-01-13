import whyChooseUs from '../constant/whyChooseUs.js';

export default function WhyChooseUs() {
  return (
      <section className='max-w-screen-2xl mx-auto h-fit content'>
      <div className='py-4 text-center'>
        <h2 className='font-bold text-[2.5rem]'>
          Why <span className='text-red-500'>Choose</span> Us
        </h2>
      </div>

      <div className='px-4 max-w-2xl mx-auto '>
        <ul className={'list-none li'}>
          {whyChooseUs.map((item,index) => {
                    const isEven = index%2==0;
                    const aosDirection = isEven?"fade-left":'fade-right';
            
            return (
              <li key={item.id} className={`w-full m-2 p-2 border-solid border rounded-lg box-shadow`}>
                <input type='radio' name='accordion' id={item.input} className='hidden' checked />
                <label
                  htmlFor={item.input}
                  className={'label flex items-center p-2 text-[1.1rem] font-medium cursor-pointer'}
                  data-aos={aosDirection}
                  data-aos-delay='500'
                  >
                  {item.title}
                </label>
                <div className={'content px-2 leading-6 text-justify max-h-0 overflow-hidden transition-all'}>
                  <p data-aos='fade-up' data-aos-delay="500">{item.desc}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
