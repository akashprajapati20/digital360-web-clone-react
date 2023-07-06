import React from 'react'
import bg from '../images/bg-part-header.jpg'
import Number4 from './Number4'
const ContentMarketing = () => {
  return (
    <>
    <div>
        
      <img className="absolute top-0 -z-40  lg:h-[53%] h-[47%] object-fill  w-full " src={bg} alt="d" />

      <div className="page-titles z-20 text-white text-center text-3xl lg:pt-5 ">
                    <h2 className=" font-thin w-1/2 m-auto">CONTENT MARKETING </h2>
                    <h2 className="font-bold">Researching and developing content</h2>
                    <h3 class="font-light pt-2 p-16 text-sm"> as per the business requirements and long term goals. </h3>
               
                </div>
                

                <div className="container relative pl-16 pr-16 lg:pl-56 lg:pr-56 top-[30px] md:top-[60px] text-white lg:top-[120px]">
                  <div className="side">
                  <ul className="breadcrumb bg-[#2ec0d8] justify-between items-center flex flex-col lg:flex-row ">
                        <h3 className='font-bold float-left'>Service Details</h3>
                        {/* <li className="breadcrumb-item  float-right"><a >Home</a></li> */}
                        <li className="breadcrumb-item  float-right">Home/Service details</li>
                    </ul>
                   </div>
        </div>
    </div>

    <Number4/>
    </>
  )
}

export default ContentMarketing
