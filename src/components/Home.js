import React from 'react'
import Design from "./Design";

import bg from '../images/bg-part-header.jpg'
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import Card4 from './Card4';

const Home = () => {
  return (
    <div className='w-[100%]' >
     <div className='bg-black z-5 absolute top-0 h-[100%] w-[100%] opacity-50'></div>
      <img className="absolute top-0 -z-20 h-[100%] object-cover  w-screen" src={bg} alt="d" />
    <div className="img">
    
      <div>
        <Design />
      </div>
    </div>
    <div className="z-50 particles-text-morph p-[45px] lg:p-0   absolute top-[200px]  align-middle  lg:top-[350px] lg:left-[40%] items-center  text-white">
      <h2 className=" font-thin text-center lg:text-left w-full text-5xl ">WE CRAFT AN IMPECCABLE</h2>

      <h2 className="pl-[70px] lg:pl-30 font-bold text-4xl lg:text-5xl animate-bounce" id="morph-text"><span class=" animated flipInX">SUCCESS STRATEGY</span></h2>

      <h3 className="text-2xl text-center lg:text-right">FOR YOUR BUSINESS WITH OUR EXPERTS</h3>
      </div>
      <Card1/>
       <Card2/> 
      <Card3/>
       <Card4/> 
    </div>
  )
}

export default Home
