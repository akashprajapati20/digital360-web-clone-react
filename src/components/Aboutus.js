import React from 'react'
import aboutus from '../images/aboutus.png'
import bg from '../images/bg-part-header.jpg'
import  AboutUsCard2 from './AboutUsCard2'

const Aboutus = () => {
  return (<>
    <div>
        
      <img className="absolute top-0 -z-40 h-[245px] lg:h-[500px] lg:max-h-[350px] object-fill  w-full " src={bg} alt="d" />

      <div className="page-titles z-20 text-white text-center text-3xl lg:pt-5 ">
                    <h2 className=" font-thin">A New Idea</h2>
                    <h2 className="font-bold">Inspires Us To Make</h2>
                    <h2 className=" font-thin">Great Works</h2>
               
                </div>
                

                <div className="container relative pl-16 pr-16 lg:pl-56 lg:pr-56 top-[30px] md:top-[60px] text-white lg:top-[120px]">
                  <div className="side">
                  <ul className="breadcrumb bg-[#2ec0d8] justify-between items-center flex flex-col lg:flex-row ">
                        <h3 className='font-bold float-left'>About Our Company</h3>
                        {/* <li className="breadcrumb-item  float-right"><a >Home</a></li> */}
                        <li className="breadcrumb-item  float-right">Home/About</li>
                    </ul>
                   </div>
        </div>

    </div>
        <div className="content flex flex-col lg:flex-row lg:p-24 lg:justify-between lg:items-center">
          <div className="image pt-5 lg:p-48 lg:items-center  ">
            <img src={aboutus} alt="img" />
          </div>
          <div className=" text-center lg:text-right text lg:w-1/3 items-center  pt-5 ">
          <h2 class="darkcolor  font-thin text-3xl w-96 bottom30">Lets take your <span class="text-[#2ec0d8]">Business</span> to Next Level</h2>
          <p className='m-auto pt-4 text-[#908090]'> &nbsp; We, Digital 360 India, are a Digital Marketing and Technology firm founded in the year 2016. We assist and service businesses to grow to their apex potential and generate maximum Returns On Investments through Digital and Online Services. Our team ensure a flourishing growth and online reputation for the business through profound expertise and experience. &nbsp; </p>

          <p className='m-auto pt-4 text-[#908090]'>&nbsp;In the Digital age era, a business with the most prominent online presence is set for success and growth. With a rich experience of 5 years, we are adept in delivering result-oriented IT projects through qualitative and quantitative research. We have created milestones for many budding businesses and our team of expert IT professionals, social engineers and Managers ensure impeccable services. </p>

          <p className='m-auto pt-4 text-[#908090]'>We are one of the top SEO agencies in India and our team works assiduously in tandem with the latest marketing tools in a quest to produce the best and most successful strategy for our customers ensuring an excellent conversion ratio. </p>
          <p className='m-auto pt-4 text-[#908090]'>We are a brand of Mass Management of Contracts, a MSME registered Company. </p>


          </div>
        </div>
      <AboutUsCard2 />
    </>
  )
}

export default Aboutus
