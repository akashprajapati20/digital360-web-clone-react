import React, { useState } from "react";
import logo from "../images/logo-transparent.png";

import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";

import { Link } from "react-router-dom";
import Paid_advertising from "./PaidAdvertising";
import Content_marketing from "./ContentMarketing";
import Seo from "./Seo";
import Smm from "./Smm";
// import particlesConfig from "./config/particles.config";
// import Particles from "react-tsparticles" ;
const Navbar = () => {
    const [isOpen,setIsOpen]=useState(false);
   

  return (<>
  
    <nav className="navbar bg-transparent z-50 sticky    ">
      <div className="container flex  justify-center items-center">
        <a>
          <img src={logo} alt="logo" />
        </a>

        <div className="items mx-40 max-[1017px]:hidden no-underline ">
          <ul className="flex space-x-3  flex-col lg:flex-row text-white list-none">
          <Link to={'/home'} > <li className="cursor-pointer border-b-2 border-[#24cdd5]">Home</li> </Link>
          <Link to={'/aboutus'} > <li className="cursor-pointer  pl-4">About Us</li></Link>
            <li> <div onClick={()=>setIsOpen((prev)=>!prev)} className="flex flex-row items-center border-none cursor-pointer  pl-4 ">Our services <IoIosArrowDown/> </div>
            
            </li>
           <Link to={'/Contactus'} ><div className='no-underline'> <li className="cursor-pointer hover:no-underline  pl-4">Contact Us</li> </div>  </Link> 
            
          </ul>
          <div className="hamburger md:hidden lg:hidden absolute top-2 right-4 ">
            <RxHamburgerMenu />
          </div>
        </div>
      </div>
    </nav>

    <div className="dropdown ">
      {isOpen && <div className="bg-white text-black absolute right-52 z-50">
               <Link to={"/seo"}>   <div className="dropdown-item hover:bg-gray-400" onClick={()=>{setIsOpen(false)}} >Search Engine Optimization </div></Link>
               <Link to={"/Smm"}>  <div className="dropdown-item hover:bg-gray-400" onClick={()=>{setIsOpen(false)}} >Social Media Management</div> </Link>
               <Link to={"/paid_advertising"}>  <div className="dropdown-item hover:bg-gray-400" onClick={()=>{setIsOpen(false)}} >Paid Advertising</div></Link>
               <Link to={'/content_marketing'}> <div className="dropdown-item hover:bg-gray-400" onClick={()=>{setIsOpen(false)}} >Content Marketing</div></Link>
            </div>
            }

    </div>
    
    
</>
  );
};

export default Navbar;
