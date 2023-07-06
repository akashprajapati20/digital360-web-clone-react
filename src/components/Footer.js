import React,{useState} from 'react'
import img2 from '../images/logo-transparent.png'
import { Link } from "react-router-dom";

const Footer = () => {
    const [isOpen,setIsOpen]=useState(false);
  return (
    <>
    <div className='bg-gray-700 pt-10 p-5 text-white lg:flex lg:px-[100px]'>
    <div className='lg:px-10 lg:w-[480px] '>
        <div className='pt-10'>
            <img src={img2} alt="Error Loading Img" />
        </div>
        <p className='pt-8 pb-5 text-sm'>We are one of the top SEO agencies in India and our team works assiduously in tandem with the latest marketing tools in a quest to produce the best and most successful strategy for our customers ensuring an excellent conversion ratio.</p>
        <a href="tel:+918303022306">+91 83030 22306</a><br />
        <a href="mailto:info@digital360india.com">info@digital360india.com</a>
        </div>
        <div className='pt-10'>
            <div className='text-2xl lg:w-[200px]'>Our Services</div> 
            <ul className='pt-5'>
                <a href="/">Home</a>
                </ul>
                <ul className='pt-3 '>
                <a href="about.html">About Us</a>
                </ul>
                <ul className='pt-3 pl-5 '>
                <li><div className='cursor-pointer' onClick={()=>setIsOpen((prev)=>!prev)}>Services</div></li>
                </ul>
                <ul className='pt-3 '>
                <a href="context.html">Contact Us</a>
                </ul>
                </div>


                <div className='pt-10 lg:px-10'>
                    <div className='text-2xl pb-5] lg:w-[250px]'>Latest News</div>
                   <div>Aenean tristique justo et...</div>
                    <span className='text-blue-500'>15 March 2019</span>
                    <hr className='py-2 mt-3' />

                   <div>Phasellus dapibus dictum augue... </div>
                    <span className='text-blue-500'>15 March 2019</span>
                    <hr className='py-2 mt-3' />

                   <div>Mauris blandit vitae. Praesent non... </div>
                    <span className='text-blue-500'>15 March 2019</span>
                    <hr className='py-2 mt-3' />

                </div>


                <div className=''>
                    <div className='text-2xl pb-5 pt-10 lg;w-[500px]'>Business hours</div>
                    <p>Our support available to help you 24 hours a day, seven days week</p>
                    <div className='pt-3'>
                    <span>Monday-Saturday : ....................................</span>
                    <span> 09.00-18.00</span>
                    </div>

                    <div className='pt-3'>
                    <span>Friday : ............................................................</span>
                    <span> 09:00-13:00</span>
                    </div>

                    <div className='pt-3'>
                    <span>Sunday : ........................................................</span>
                    <span> 09:00-13:00</span>
                    </div>

                    <div className='pt-3'>
                    <span>Calendar Events : ...................................</span>
                    <span> 24-Hour Shift</span>
                    </div>
                </div>

                </div>
    </>
  )
}

export default Footer