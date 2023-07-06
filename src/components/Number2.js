import React from 'react'
import imgn2 from './Number2.png'
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 800,
});

const Number2 = () => {
  return (
    <>
        <div className='lg:flex lg:h-[840px] lg:px-[200px] gap-x-20 px-10 lg:pt-32 pt-12'>
        <div className='relative'>
            <img className='lg:w-[335px]' src={imgn2} alt="Error Loading Img" />
            <div className=''  data-aos="fade-up"
     data-aos-duration="3000">
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
                <div className='pb-4 text-2xl'>Social Media Management</div>
                <p className='text-gray-500'>Today, social media has become an inseparable part of our lives. For brands to succeed and establish themselves on a global scale, Social Media serves as a paramount aspect. People are highly active on Facebook, Twitter, Instagram, etc. and the best way to catch their attention and advertise a brand is through these platforms. Nowadays, we see numerous brands advertising on their official social media handles where they also launch their new products and offers. For any budding brand, Social Media Management is a crucial factor.</p>

                <p className='pt-7 text-gray-500'>We at Digital 360, have the relevant experience and expertise in the field of Social Media Marketing and management and our team of excellent managers can make your business a Social Media success. With better content, engagement, traffic and conversion rate, we ensure that you get the maximum out of your Social Media ventures. </p>
            </div>
        </div>
    </>
  )
}

export default Number2