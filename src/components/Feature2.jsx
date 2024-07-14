import React, { useState } from "react";
import { motion } from "framer-motion";

const Feature2 = () => {
  const [card1, setCard1] = useState(false);
  const [card2, setCard2] = useState(false);

  return (
    <div className="w-full h-[100vh] overflow-hidden py-10">
      <div className="w-full px-20 border-zinc-700"></div>
      <div className="px-20">
        <div className="cards w-full flex flex-col md:flex-row gap-10">
          <div
            onMouseEnter={() => setCard1(true)}
            onMouseLeave={() => setCard1(false)}
            className="cardcontainer relative md:w-1/2 h-[30vh] md:h-[75vh] mb-14 md:mb-0"
          >
            <h1 className="absolute flex overflow-hidden z-10  font-semibold md:left-full text-[#CDEA60] text-6xl md:text-8xl leading-none tracking-tighter md:-translate-x-1/2 top-1/2 translate-y-[15vh] md:-translate-y-1/2 font-['Test_Founders_Grotesk_X-Cond_SmBd']">
              {"TRAWA".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={card1 ? { y: "0%" } : { y: "100%" }}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.06,
                  }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="./src/assets/images/Frame-3875-663x551.jpg"
                alt=""
              />
            </div>
          </div>
          <div
            onMouseEnter={() => setCard2(true)}
            onMouseLeave={() => setCard2(false)}
            className="cardcontainer relative w-[30vh] mb-10 md:mb-0 md:w-1/2 h-[40vh] md:h-[75vh]"
          >
            <h1 className="absolute flex overflow-hidden  -left-4 pt-3 md:left-0 md:bt-3 md:right-full font-semibold text-[#CDEA60] text-5xl md:text-8xl leading-none tracking-tighter md:translate-x-1/2 translate-x-[-11vw] top-[30vh] md:top-1/2 translate-y-[10vh] md:-translate-y-1/2 font-['Test_Founders_Grotesk_X-Cond_SmBd']">
              {"PREMIUIM BLEND".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={card2 ? { y: "0%" } : { y: "100%" }}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.06,
                  }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full  bg-cover"
                src="./src/assets/images/PB-Front-4-663x551.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature2;
