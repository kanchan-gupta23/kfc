  import React from 'react'
  import { FaInstagram } from "react-icons/fa6";
  import { BsFacebook } from "react-icons/bs";
  import { IoLogoTwitter } from "react-icons/io5";
  function Footer() {
    return (
      <div className='bg-black  h-[60vh] w-screen relative   text-white'>
        <img className='absolute h-[8vw] w-[8vw] top-[50%] left-[45%] -translate-x-1/2  -translate-y-1/2' src='https://www.pngall.com/wp-content/uploads/13/KFC-Logo-PNG-Images-HD.png'/>
      
       
          <div className='grid grid-cols-4 w-full  z-[9]  gap-x-[3vw] px-[10rem] '>
          <div className='pt-[50%] drop-shadow-xl'>
            <h4 className='drop-shadow-xl'>Legal</h4>
          <p className='pt-3 text-[2.5vh]'>Terms and Conditions</p>
          <p className='pt-3 text-[2.5vh]'>Privacy Policy</p>
          <p className='pt-3 text-[2.5vh]'>Disclaimer</p>
          <p className='pt-3 text-[2.5vh]'>Caution Notice</p>
          </div>
          <div className='pt-[50%]'>
            <h4 className='drop-shadow-xl'>KFC India</h4>
            <p className='pt-3 text-[2.5vh]'>About KFC</p>
            <p className='pt-3 text-[2.5vh]'>KFC Care</p>
            <p className='pt-3 text-[2.5vh]'>Careers</p>
            <p className='pt-3 text-[2.5vh]'>Our Golden Past</p>
          </div>
          <div className='pt-[50%]'>
            <h4 className='drop-shadow-xl'>KFC Food</h4>
            <p className='pt-3 text-[2.5vh]'>Menu</p>
            <p className='pt-3 text-[2.5vh]'>Order Lookup</p>
            <p className='pt-3 text-[2.5vh]'>Gift Card</p>
            <p className='pt-3 text-[2.5vh]'>Nutrition & Allergen</p>
          </div>
          <div className='pt-[50%]'>
            <h4 className='drop-shadow-xl'>Support</h4>
            <p className='pt-3 text-[2.5vh]'>Get Help</p>
            <p className='pt-3 text-[2.5vh]'>Contact Us</p>
            <p className='pt-3 text-[2.5vh]'>KFC Feedback</p>
            <p className='pt-3 text-[2.5vh]'>Privacy Policy</p>
          </div>
        </div>
        <div className='flex gap-[30vw]  w-[100vw] text-[2vh] absolute bottom-[8%] mx-[30%]'>
         <div>Copyright © KFC Corporation 2024 All Rights Reserved</div> 
          <div className='flex gap-3 text-[3vh]'><FaInstagram />
          <BsFacebook />
          <IoLogoTwitter /></div>
          
        </div>
     </div>
    )
  }

  export default Footer
