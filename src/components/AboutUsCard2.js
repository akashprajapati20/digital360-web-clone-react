import React, { useState } from 'react'

const AboutUsCard2 = () => {
    const [bgrnd1, setBgrnd1] = useState(false);
    const [bgrnd2, setBgrnd2] = useState(false);
    const [bgrnd3, setBgrnd3] = useState(false);
    const [bgrnd4, setBgrnd4] = useState(false);
    const [bgrnd5, setBgrnd5] = useState(false);


    const bg1 = bgrnd1?`bg-cyan-500`:"bg-gray-700"
    const bg2 = bgrnd2?`bg-cyan-500`:"bg-gray-700"
    const bg3 = bgrnd3?`bg-cyan-500`:"bg-gray-700"
    const bg4 = bgrnd4?`bg-cyan-500`:"bg-gray-700"
    const bg5 = bgrnd5?`bg-cyan-500`:"bg-gray-700"


  return (
    <>

    <div className='bg-gray-700'>
        <div>
            <h2 className=' text-center text-[40px] pt-12 text-white'  data-aos="fade-up">Our Work Process</h2>
        </div>
        <div className='pt-10 lg:flex text-white px-[40px] lg:px-[180px] text-left lg:mt-12 items-center'>
        <div className='items-center text-center cursor-pointer' onMouseOver={()=>{setBgrnd1(true)}} onMouseOut={()=>setBgrnd1(false)}>
        <div className='flex items-center '>
        <div className=''>
            <button className={`border-2 h-24 w-24 border-white rounded-full text-3xl ${bg1}`}>01</button>
            
            <p className='p-5 font-bold '>Concept</p>
            <p className='w-80 lg:w-fit lg:px-4'>Understanding and identification of the business concept and focus User Selling Points.</p>
            </div>

            <div className='absolute mb-[200px] lg:ring-1 lg:ring-white lg:ml-[175px]  h-0 lg:w-[125px]'></div>
</div>
        </div>

        <div className='items-center lg:pt-0 pt-10 text-center cursor-pointer'onMouseOver={()=>{setBgrnd2(true)}} onMouseOut={()=>setBgrnd2(false)}>
        <div className='flex items-center '>
        <div>
            <button className={`border-2 h-24 w-24 border-white rounded-full text-3xl items-center ${bg2}`}>02</button>
            <p className='p-5 font-bold'>Plan</p>
            <p className='px-4 w-80 lg:w-fit'>Generating a plan by analysing the end goals and prospects.</p>
            </div>
            <div className='absolute lg:ring-1 lg:top-[1407px]  lg:ring-white lg:ml-[142px] mt-1 lg:mb-[400px]  h-0 lg:w-[121px]'></div>
            </div>
        </div>


        <div className='items-center lg:pt-0 pt-10 text-center cursor-pointer'onMouseOver={()=>{setBgrnd3(true)}} onMouseOut={()=>setBgrnd3(false)}>
        <div className='flex items-center '>
        <div className='lg:pt-5'>
            <button className={`border-2 h-24 w-24 border-white rounded-full text-3xl ${bg3}`}>03</button>
            <p className='p-5 font-bold'>Content Development</p>
            <p className='px-4 w-80 lg:w-fit'>Researching, investigating and producing content in accordance with the strategy.</p>
            </div>
            <div className='absolute mb-[196px]  lg:ring-1 lg:ring-white lg:ml-[172px]  h-0 lg:w-[136px]'></div>
            </div>
        </div>


        <div className='items-center lg:pt-0 pt-10 text-center cursor-pointer'onMouseOver={()=>{setBgrnd4(true)}} onMouseOut={()=>setBgrnd4(false)}>
        <div className='flex items-center '>
        <div>
            <button className={` border-2 h-24 w-24 border-white rounded-full text-3xl ${bg4}`}>04</button>
            <p className='p-5 font-bold'>Execution</p>
            <p className='px-4 w-80 lg:w-fit'>Mandating the process and implementing the plan as per the directives.</p>
            </div>
            <div className='absolute mb-[196px] lg:ring-1 lg:ring-white lg:ml-[156px] h-0 lg:w-[142px]'></div>
            </div>
        </div>

        <div className='items-center lg:pt-0 pt-10 text-center cursor-pointer'onMouseOver={()=>{setBgrnd5(true)}} onMouseOut={()=>setBgrnd5(false)}>
        <div className='flex items-center'>
        <div>
            <button className={` border-2 pl:40 h-24 w-24 lg:pl-0 border-white rounded-full mb-1  text-3xl ${bg5}`}>05</button>
            <p className='p-5 font-bold'>Optimization</p>
            <p className='px-4 w-80  lg:w-fit'>Ensuring the most auspicious and effective utilization of the implemented resources.</p>
            </div>
        </div>
        </div>
      
        </div>
        </div>

        <div className='pb-32'></div>
    </>
  )
}

export default  AboutUsCard2