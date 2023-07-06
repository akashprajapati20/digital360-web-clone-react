import React from 'react'
import bg from '../images/bg-part-header.jpg'
import './style2.css';
const Contactus = () => {
  return (
    <>
    <div>
        
      <img className="absolute top-0 -z-40  lg:h-[48%] h-[32%] object-fill  w-full " src={bg} alt="d" />

      <div className="page-titles z-20 text-white text-center text-3xl lg:pt-5 ">
                    <h2 className=" font-thin w-1/2 m-auto">Contact Us</h2>
                    <h3 class="font-light pt-2 p-16 text-sm">We'd Love To Here From You. </h3>
               
                </div>
                

                <div className="container relative pl-16 pr-16 lg:pl-56 lg:pr-56 top-[30px] md:top-[60px] text-white lg:top-[120px]">
                  <div className="side">
                  <ul className="breadcrumb bg-[#2ec0d8] justify-between items-center flex flex-col lg:flex-row ">
                        <h3 className='font-bold float-left'>Service Details</h3>
                        <li className="breadcrumb-item  float-right">Home/Service details</li>
                    </ul>
                   </div>
        </div>
    </div>

    
    <div className='lg:flex lg:px-[200px] px-10 pt-10'>
        <div className=' lg:pl-[200px]'>
            <h1 className='pl-8 text-5xl pt-20 lg:pl-[130px] text-gray-500'>Contact <span className='font-thin'>Us</span></h1>
            <p className='pl-2 pt-12 pr-5 text-center'>Feel free to contact us. Our services are always available for you.</p>
        </div>
        <div className=' lg:absolute lg:left-[500px] lg:text-left lg:pt-[100px] lg:pl-[100px]'>
        <div className='text-blue-500 pl-6 lg:pl-[40px]  pt-16 lg:pt-40'>Digital Marketing Agency Worldwide</div>
        <div className=' pt-8 text-2xl font-[400px] lg:text-4xl text-gray-700 text-center'> Our Agency Office In Dehradun </div>
        <div className='pt-5 pl-10  text-center text-gray-600'>Address: C Block, Nehru Colony, Dalanwala, Dehradun, Uttarakhand 248001</div>
        <div className='pt-3 pl-1 text-center lg:text-left lg:pr-[378px] text-gray-600'>+91 83030 22306</div>
        <div className='pt-3 pl-1 text-center lg:text-left lg:pr-[310px] text-gray-600'>info@digital360india.com</div>
        <div className='pt-3 pl-1 text-center lg:text-left lg:pr-[295px]  text-gray-600'>Mon-Sun: 9:30 AM -6:30 PM</div>
        </div>

        <div >
            <div className='animation1 lg:pt-[250px] pt-[240px] lg:absolute lg:left-72'>
            <div className='lg:pt-60 pt-[680px]'>
            <input className=' bg-white border border-black pl-3  w-[310px] h-10' type="text" placeholder='Name:' />
            </div>
            <div className='pt-5'>
            <input className='bg-white border border-black pl-3  w-[310px] h-10' type="text" placeholder='Email:' />
            </div>
            <div className='pt-5'>
            <textarea className='bg-white border border-black pl-3  w-[310px]' rows="10" placeholder='Message'></textarea>
            </div>
            <div className='pt-5'>
                <button className='border-2 cursor-pointer hover:bg-blue-600 border-blue-700 bg-blue-700 text-white h-10 w-[310px] rounded-2xl'>Send</button>
            </div>
            </div>
            </div>
            </div>
    <div className='pb-[590px]'></div>

            </>
  )
}

export default Contactus
