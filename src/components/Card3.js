import React from 'react'


const Card3 = () => {
  return (
    <>

       <div className='pt-20'>

       <div className='flex flex-col lg:flex-row lg:justify-around text-center lg:pt-[5px]'>
        <div className='lg:w-[400px]'>
            <div className='text-lg lg:text-2xl text-blue-500' data-aos="fade-up">What we do?</div>
            <div className='text-[38px]'data-aos="fade-up" >Our Services</div>
        </div>
        <p className='pt-8 p-5 lg:w-[600px] text-center lg:text-left text-gray-500' data-aos="fade-up" >A business represented with the most innovative and captivating design aspects dominates the crowd. We will help you in crafting an immaculate user experience that will take your business to new heights.</p>
       </div>

       <div className='p-8 lg:flex lg:gap-x-20 relative'>

       <div className=' lg:pl-12'>
        <div className='flex flex-col text-center lg:text-right lg:text-[20px]'>
            <div className='text-2xl lg:text-4xl lg:pt-[120px] text-gray-600'data-aos="fade-up">Search Engine Optimization </div>
            <p className='pt-5 text-gray-500' data-aos="fade-up">Optimization of your website to attain a superior edge and domain authority through maximum visibility and website traffic.</p>
        </div>
        <div className='pt-16 flex flex-col text-center lg:text-right lg:pl-2 lg:text-[20px]'>
            <div className='text-2xl lg:text-4xl lg:pt-8 text-gray-600' data-aos="fade-up">Social Media Management</div>
            <p className='pt-5 text-gray-500'data-aos="fade-up" >Accentuating a business’s online presence on numerous Social Media Platforms like Facebook, Instagram, Twitter, etc.</p>
        </div>
       </div>
       <div className='flex justify-center pt-16'>
       <img className='relative h-[520px] pt-3 rounded-3xl w-[230px] lg:w-[532px] top-0  left-0' data-aos="fade-up" src="http://digital360india.com/images/iphone-slide-lock.jpg" alt="Error Loading Img"/> 
       <img className='absolute' data-aos="fade-up" src="http://digital360india.com/images/iphone.png" alt="Error Loading Img" />  
        
        </div>

        <div className=' lg:pr-24 lg:text-[20px]'>
        <div className='pt-10 flex flex-col text-center lg:text-left'>
            <div className='text-2xl pt-[120px] lg:text-4xl lg:pt-[100px] text-gray-600' data-aos="fade-up" >Paid Advertising</div>
            <p className='pt-5 text-gray-500'data-aos="fade-up" >Pay Per Click (PPC), Pay Per Impression (PPI), display ads, ads space etc. ensuring a lucrative Return On Investment (ROI)..</p>
        </div>
        <div className='pt-20 flex flex-col text-center lg:text-left'>
            <div className='text-2xl lg:text-4xl lg:pt-[12px] text-gray-600' data-aos="fade-up" >Content Marketing </div>
            <p className='pt-5 text-gray-500'data-aos="fade-up" >Researching and developing content as per the business requirements and long term goals.</p>
        </div>
       </div>
       </div>
       </div>
    </>
  )
}

export default Card3