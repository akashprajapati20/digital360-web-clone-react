import React from 'react'
import imgn3 from './Number3.png'
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 800,
});

const Number3 = () => {
  return (
    <>
        <div className='lg:flex lg:h-[840px] lg:px-[200px] gap-x-20 px-10 lg:pt-28 pt-10'>
        <div className='relative'>
            <img className='lg:w-[335px]' src={imgn3} alt="Error Loading Img" />
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
                <div className='pb-4 text-2xl'>Pay Per Click (PPC)</div>
                <p className='text-gray-500'>Paid Advertising is one of the most successful marketing strategies if implemented in an accurate way. Many business and campaigns tend to capitalize in this sector. But with unprofessional implementation, paid advertising can become costly and result in losses.</p>

                <p className='pt-7 text-gray-500'>The investment made in this domain can be high, but with the correct strategy and implementation, the Return On Investment can be lucrative. Our team of experts are well-versed in paid advertising, and they will make sure that all your investments go in the right direction with an excellent conversion ratio. Through market segmentation and SEO, the ROI involved can be increased manifold. We are skilled in managing the Pay Per Click (PPC) ads, Pay Per Impression (PPI) ads, display ads and ads space.</p>
            </div>
        </div>
    </>
  )
}

export default Number3