import React from 'react'
import imgn4 from './Number4.png'
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 800,
});

const Number4 = () => {
  return (
    <>
        <div className='lg:flex lg:h-[840px] lg:px-[200px] gap-x-20 px-10 lg:pt-28 pt-10'>
        <div className='relative'>
            <img className='lg:w-[335px]' src={imgn4} alt="Error Loading Img" />
            <div className=''  data-aos="fade-up"
             data-aos-duration="1000">
            <div className='pt-3 '>
            <input className=' bg-white border border-black pl-3  w-[310px] h-10' type="text" placeholder='First Name:' />
            </div>
            <div className='pt-3'>
            <input className=' bg-white border border-black pl-3  w-[310px] h-10' type="text" placeholder='Company Name:' />
            </div>
            <div className='pt-3'>
            <input className='bg-white border border-black pl-3  w-[310px] h-10' type="text" placeholder='Email:' />
            </div>
            <div className='pt-3'>
            <textarea className='bg-white border border-black pl-3  w-[310px]' rows="10" placeholder='Request a FreeConsultation'></textarea>
            </div>
            <div className='pt-3'>
                <button className='border-2 cursor-pointer hover:bg-blue-600 border-blue-700 bg-blue-700 text-white h-10 w-[310px] rounded-2xl'>Free Consultation</button>
            </div>
            </div>
            </div>


            <div className='text-center  pt-[80px] lg:pt-12 lg:text-left lg:w-[800px]'>
                <div className='pb-4 text-2xl'>Content Marketing</div>
                <p className='text-gray-500'>Content is truly the King in the online marketing and business world. Without content, there is nothing to represent.</p>

                <p className='pt-7 text-gray-500'>At Digital 360, we have an expert Content Marketing Team that is skilful in researching, analyzing and identifying the type of content that would be required for a particular business. We also ensure that quality content is delivered in terms of graphics, social media content, blogs, multimedia, videos, pdfs, ppts, website content, press releases, etc. We have a big team of content writers, graphic designers, animators, multimedia designers and Content Delivery Managers who ensure a good content flow at all times as per the requirements. Our Content Marketing Managers oversee the optimization and execution process.</p>
            </div>
        </div>
    </>
  )
}

export default Number4