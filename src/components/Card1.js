import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import './style.css';

// AOS.init({
//   duration: 800,
// });

const Card1 = () => {
  return (
    
    <>
      <div className='flex justify-center lg:px-32 mb-20'>
      <div className='flex flex-wrap  lg:gap-32 pt-20'>
      <div className='text-center lg:text-left w-[333px] lg:w-[550px] animation' data-aos="fade-up" >
          <h2 className='text-[2rem]  whitespace-pre-wrap  w-[333px] pr-5 leading-tight lg:w-[550px] pl-[50px] lg:pl-0  lg:text-[3rem]  lg:pr-10 lg:leading-[50px]'>Let us take your
          <span className='text-blue-300'> Business </span>
          to the Apex
          </h2>
          <p className='pt-8 text-gray-500'>A business represented with the most innovative and captivating aspects dominates the crowd. We will help you in crafting an immaculate online presence that will take your business to new heights</p>

          <p className='pt-4 text-gray-500'>Ever since our commencement, we have seen incredible and rapid growth in our customer base. We believe in excellence, and our team works assiduously to provide you with outstanding services. Our mission and vision have always been of achieving perfection in our every venture.</p>

          <p className='pt-4 text-gray-500'>With our ever-increasing patronage, we are continually adding new talents to our team to make sure that our services are impeccable. We have successfully delivered numerous projects and have scored a trustworthy image in the market. Our devoted clients have put their utmost faith in us time and again, and we have made sure that our services are justified.</p>

<div className='flex justify-center lg:justify-start'>
          <a href="/about.html" className='text-white flex mt-10 lg:text-lg bg-blue-400 w-[160px] h-11 rounded-3xl justify-center items-center hover:bg-blue-300'>Learn More</a>
        </div>
        </div>


        <div className=''>
          <img className='pt-10 h-[350px] w-[500px] lg:pt-10 lg:h-[520px] lg:w-[460px]'data-aos="fade-up" src="http://digital360india.com/images/awesome-feature.png" alt="Error Loading Img" />
        </div>
        </div>

      </div>
    </>
      

  )
}

export default Card1