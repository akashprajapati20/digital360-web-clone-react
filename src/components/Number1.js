import React from 'react'
import imgn1 from '../images/Number1.png'
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 800,
});

const Number1 = () => {
  return (
    <>
        <div className='lg:flex lg:h-[840px] lg:px-[200px] gap-x-20 px-10 lg:pt-32 pt-5'>
        <div className='relative'>
            <img className='lg:w-[340px] w-[370px]' src={imgn1} alt="Error Loading Img" />
            <div className=' ' data-aos="fade-up"
     data-aos-duration="3000" >
            <div className='pt-3'>
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


            <div className='text-center  pt-[100px] lg:pt-12 lg:text-left lg:w-[800px]'>
                <div className='pb-4 text-2xl'>Search Engine Optimization</div>
                <p className='text-gray-500'>For a business to succeed in contemporary times, online presence and google ranking play a major role. It is an undeniable fact that a majority of customers all around the globe rely on the google search engine while looking for a particular service. Search Engine Optimization helps in improving the visibility of a website, subsequently helping in reaching out to more potential customers and generating better prospects for a business on a larger scale.</p>

                <p className='pt-7 text-gray-500'>With our team of skilled SEO specialists, we can ensure that your website will ace in the google rankings. Our SEO services are proficient in the identification of your targeted customer base. We guarantee that the businesses are able to reach their customers through relevant searches. We also ensure that your business has an immaculate online reputation through Online Reputation Management (ORM).</p>
            </div>
        </div>
    </>
  )
}

export default Number1