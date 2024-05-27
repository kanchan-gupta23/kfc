

import React, {} from 'react'
import { Link } from 'react-router-dom';
import gifImage from './star.gif'; 
import Navbar from './Navbar';
function Offer() {

  return (
    <div className='singpage relative w-screen h-screen bg-[url("https://wallpapers.com/images/high/kfc-colonel-sanders-anime-1mo6fdv6cpvcab7z.webp")] bg-contain'>
      <Navbar/>
   
    <div className='text-zinc-700  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2   '  >
      
       <div className="container  ">
       
        <h2 className='text-zinc-900'>Login</h2>
         <form id="loginForm">
            <input className='bg-[rgb(221,232,243)] '  type="text" id="loginEmail" placeholder="Email" required/>
             <input className='bg-[rgb(221,232,243)] mt-[3vh]' type="password" id="loginPassword" placeholder="Password" required/>
            <button className='bg-[rgb(221,232,243)] mt-[3vh] text-zinc-700' type="submit">Login
            <img className='  hidden top-1/2 left-1/2  absolute h-[100px] w-[100px] z-10 ' src={gifImage} alt="Star GIF"/></button>
        </form>
        <p className='text-zinc-900'>Dont have an account? <Link to="/" id="signupLink">Sign up</Link></p>
    </div>

    <div className="container" id="signupContainer">
        <h2 className='text-zinc-900'>Sign Up</h2>
        <form id="loginForm">
            <input className='bg-[rgb(221,232,243)]' type="text" id="signupName" placeholder="Name" required/>
            <input className='bg-[rgb(221,232,243)] mt-[3vh]' type="text" id="signupEmail" placeholder="Email" required/>
            <input className='bg-[rgb(221,232,243)] mt-[3vh]' type="password" id="signupPassword" placeholder="Password" required/>
            <button  className="bg-[rgb(221,232,243)] mt-[3vh] text-zinc-700 " type="submit">Sign Up
            <img className='hidden top-1/2 left-1/2  absolute h-[80px] w-[100px] z-10 ' src={gifImage} alt="Star GIF"/></button>
        </form> 
    </div>
    </div>
    </div>
  )
}

export default Offer
