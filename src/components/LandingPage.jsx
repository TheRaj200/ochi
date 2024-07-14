import React, { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { FaArrowUpLong } from 'react-icons/fa6';

const LandingPage = () => {
  const [progress, setProgress] = useState(0);
  const boxRef = useRef(null);
  const textRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + Math.floor(Math.random() * 40);
        return newProgress <= 100 ? newProgress : 100;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
    gsap.from(boxRef.current, {
      opacity: 0,
      top: '-100%',
      duration: 0.5,
    });

    gsap.from(boxRef.current, {
      width: '70%',
      height: '80%',
      duration: 1,
      delay: 1,
    });

    gsap.to(bgRef.current, {
      backgroundColor: 'rgb(24 24 27)',
      delay: 1,
    });

    gsap.from('.textbox', {
      opacity: 0,
      duration: 1,
      delay: 2,
    });
  });

  return (
    <div className="relative">
      <div
        ref={bgRef}
        data-scroll
        data-scroll-section
        data-scroll-speed="-0.5"
        className="bg-white w-full h-screen pt-1"
      >
        <motion.div
          initial={{ left: '-30%' }}
          animate={{ left: '68%', duration: 4 }}
          transition={{ ease: 'linear', delay: 0.3 }}
          className="absolute h-100vh w-100vh bg-zinc-500 top-[24%] p-[30vh]"
        ></motion.div>
        <motion.div
          initial={{ right: '-30%' }}
          animate={{ right: '10%', duration: 4 }}
          transition={{ ease: 'linear', delay: 0.3 }}
          className="absolute h-100vh w-100vh bg-zinc-700 top-[24%] p-[30vh]"
        ></motion.div>
        <div
          ref={boxRef}
          className="box w-full h-[100vh] lg:h-[80vh] left-1/2 -translate-x-1/2 top-[28%] -translate-y-1/2 bg-zinc-900 relative"
        >
          <div className="textstructure mt-[15rem] md:mt-40 mr-2 md:px-20">
            {['We Create', 'Eye opening', 'presentation'].map((item, index) => (
              <div className="masker" key={index}>
                <div className="w-fit pt-[5vh] pl-[10vw] relative flex items-center overflow-hidden">
                  {index === 1 && (
                    <motion.div
                      initial={{ left: '-6vw', visibility: 'hidden' }}
                      animate={{ left: '0vw', visibility: 'visible' }}
                      transition={{ duration: 1, delay: 2, ease: 'linear' }}
                      className="w-[12vw] md:w-[9vw]  overflow-hidden mr-[1vw] rounded-md relative md:top-[0.5vw] md:h-[6vw]"
                    >
                      <img
                        className="mr-[1vw] rounded-md relative  top-[0.8vw] md:top-[0.5vw] "
                        src="./src/assets/images/content-image01.jpg"
                        alt=""
                      />
                    </motion.div>
                  )}
                  <h1 className="uppercase text-3xl md:text-8xl md:leading-[6.5vw] tracking-tighter font-['Test_Founders_Grotesk_X-Cond_SmBd'] font-bold">
                    {item}
                  </h1>
                </div>
              </div>
            ))}
            <motion.h1
              ref={textRef}
              initial={{ visibility: 'visible' }}
              animate={{
                visibility: progress < 100 ? 'visible' : 'hidden',
              }}
              className="absolute font-semibold md:translate-x-[108vh] translate-x-[10vh] text-red-400 -translate-y-[-3vh] md:-translate-y-[30vh] text-4xl md:text-6xl"
            >
              {progress}%
            </motion.h1>
          </div>
          <div className="textbox bottom-'10%' border-t-[1px] border-zinc-800 mt-80 md:mt-32 flex flex-col md:flex-row gap-4 md:gap-2 justify-between md:items-center py-2 px-20">
            {[
              'For public and private companies',
              'From the first pitch to IPO',
            ].map((item, index) => (
              <p
                key={index}
                className="text-md mt-6 md:mt-0 font-light tracking-tight leading-none"
              >
                {item}
              </p>
            ))}
            <div className="start flex items-center gap-5">
              <div className="px-5 py-2 border-[1.5px] font-light text-sm uppercase border-zinc-600 rounded-full">
                start the project
              </div>
              <div className="w-8 h-10 flex items-center justify-center border-[1.5px] text-sm rounded-full">
                <span className="rotate-[45deg]">
                  <FaArrowUpLong />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
