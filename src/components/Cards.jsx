import React from "react";

const Cards = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full    mt-[34vh] md:mt-0 flex-col md:flex-row  h-screen bg-zinc-900 flex items-center px-32 gap-5">
      <div className=" container h-[40vh] md:h-[50vh] w-[40vh] md:w-1/2">
        <div className="card rounded-xl w-full h-full  bg-[#004D43] relative flex items-center justify-center ">
            <img className="w-32" src=".\images\logo001.svg" alt="" />
            <button className='absolute px-2 py-1 text-yellow-200 border-yellow-200 rounded-full border-[1.5px] left-10 bottom-10'>&copy;2019-2020</button>
        </div>
      </div>
      <div className="card container flex gap-2 h-[30vh] md:h-[50vh] w-[40vh] md:w-1/2 ">
      <div className="card rounded-xl w-full h-full  bg-[#111313] relative flex items-center justify-center ">

        <img className="w-32" src=".\images\logo002.svg" alt="" />
        <button className='absolute px-2 py-1  border-zinc-200  rounded-full border-[1.5px] left-10 bottom-10'>&copy;2019-2020</button>
        </div>
        <div className="card rounded-xl w-full h-full   bg-[#111313] relative flex items-center justify-center ">

        <img className="w-32" src=".\images\logo003.png" alt="" />
        <button className='absolute px-2 py-1 border-zinc-200 rounded-full border-[1.5px] left-10 bottom-10'>&copy;2019-2020</button>
        </div>
      </div> 
    </div>
  );
};

export default Cards;
