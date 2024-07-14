import React, { useEffect, useState } from 'react'

const Eye2 = () => {
  const [rotate, setRotate] = useState(0);
useEffect (() =>{
window.addEventListener("mousemove", (e)=>{
let mouseX = e.clientX;
let mouseY = e.clientY;
let deltaX = mouseX - window.innerWidth/2;
let deltaY = mouseY - window.innerHeight/2;
var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
setRotate(angle-180);
})
})
  return (
    <div data-scroll data-scroll-speed=".7"  className='  eyes w-full h-screen overflow-hidden '>
      <div  className=' relative w-full h-full bg-cover  bg-yellow-400 my20 bg-center'>
        <div className=' w-full absolute flex justify-center items-center flex-col  font-extrabold text-black  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
        <h1 className='uppercase text-7xl md:text-9xl md:leading-[9.5vw] tracking-tighter font-["Test_Founders_Grotesk_X-Cond_SmBd "] font-bold'>READY</h1>
        <h className='uppercase text-7xl md:text-9xl md:leading-[9.5vw] tracking-tighter font-["Test_Founders_Grotesk_X-Cond_SmBd "] font-bold'>TO START</h>
        <h1 className='uppercase text-7xl ml-[35px] md:text-9xl md:leading-[9.5vw] tracking-tighter font-["Test_Founders_Grotesk_X-Cond_SmBd "] font-bold' >THE PROJECT?</h1>
        </div>
      <div data-scroll data-scroll-speed=".6"  className=' absolute top-[55%] md:top-[40%] left-[63%] -translate-x-[50%] -translate-y-[50%] flex gap-1 '>
      <div className='w-[20vw] h-[10vh] md:w-[10vw] md:h-[10vw] flex items-center justify-center rounded-full bg-zinc-100'>
        <div className='w-2/3 h-2/3 relative rounded-full bg-zinc-900'>
        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)` } } className=" line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10">
<div className="w-5 h-5 rounded-full  bg-zinc-100"></div>
</div>
        
        </div>
      </div>
      <div className='w-[20vw] h-[10vh] md:w-[10vw] md:h-[10vw] flex items-center justify-center rounded-full bg-zinc-100'>
      <div className='w-2/3 h-2/3 relative  rounded-full bg-zinc-900'>
      <div  style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)` } } className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  w-full h-10">
<div className="w-5 h-5 rounded-full  bg-zinc-100"></div>
</div>
      
      </div>

      </div>
      </div>
      
      </div>
    </div>
  )
}

export default Eye2