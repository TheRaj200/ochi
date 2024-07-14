import { motion } from "framer-motion";
import React, { useState } from "react";

const Feature = () => {

  const [card1, setcard1] = useState(false);
  const [card2, setcard2] = useState(false);

  return (
    <div   className="w-full h-[100vh] mb-[20vh] py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className='text-6xl font-["Neue_Montreal"] tracking-tight'>
          Featured projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex flex-col md:flex-row  gap-10 mt-10">
          <div 
            onMouseEnter={()=> setcard1(true)}
            onMouseLeave={()=> setcard1(false)}
           className="cardcontainer relative  md:w-1/2 h-[30vh] md:h-[75vh]  ">
            <h1 className="absolute flex overflow-hidden   font-semibold  md:left-full text-[#CDEA60] z-[9] text-8xl leading-none tracking-tighter md:-translate-x-1/2 top-1/2 translate-y-[15vh] md:-translate-y-1/2 font-['Test_Founders_Grotesk_X-Cond_SmBd '] ">
              {"FYDE".split("").map((item, index) => (
                <motion.span initial={{y:"100%"}} animate={card1 ? ({y:"0%"}): ({y:"100%"})} transition={{ease:[0.22,1,0.36,1], delay:index*.06}} className="inline-block ">{item}</motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden ">
              <img
                className=" w-full h-full   bg-cover"
                src=".\images\Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </div>
          <div
          onMouseEnter={()=> setcard2(true)}
          onMouseLeave={()=> setcard2(false)}
          className="cardcontainer relative w-[30vh] md:w-1/2 h-[40vh] md:h-[75vh] ">
            <h1 className="absolute flex overflow-hidden md:right-full  font-semibold  text-[#CDEA60]  text-8xl leading-none tracking-tighter md:translate-x-1/2 top-1/2 translate-y-[10vh] md:-translate-y-1/2 font-['Test_Founders_Grotesk_X-Cond_SmBd '] ">
            {"VISE".split("").map((item, index) => (
                <motion.span initial={{y:"100%"}} animate={card2 ? ({y:"0%"}): ({y:"100%"})} transition={{ease:[0.22,1,0.36,1], delay:index*.06}} className="inline-block ">{item}</motion.span>
              ))}
            </h1>

            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className=" w-full h-full bg-cover"
                src=".\images\Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
