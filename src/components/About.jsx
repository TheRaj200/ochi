import React from 'react';

const About = () => {
  return (
    <div data-scroll  data-scroll-speed="-.1" className='w-full md:h-[140vh] p-20 bg-[#CDEA60] rounded-tl-3xl text-black overflow-hidden rounded-tr-3xl'>
      <h1 className='font-["Neue_Montreal"] text-[4.5vw] tracking-tight leading-[3.5vw]'>
        Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
      </h1>
      <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]">
        <div className='w-1/2'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold'>Our approach:</h2>
          <button className='flex items-center hover:bg-zince-700 hover:scale-105 w-[40vw] md:w-[12.5vw] ease-in duration-300 uppercase gap-4 px-6 py-4 mt-10 bg-zinc-900 rounded-full text-white'>
            Read More
            <div className='w-3 h-3 bg-zinc-100 rounded-full'></div>
          </button>
        </div>
        <div className='w-1/2'>
          <img className='h-auto sm:h-[70vh] rounded-3xl' src="./src/assets/images/Homepage-Photo-663x469.jpg" alt="Company Photo" />
        </div>
      </div>
    </div>
  );
};

export default About;
