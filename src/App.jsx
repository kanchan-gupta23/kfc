import React from 'react'

import './App.css';
import Home from './components/Home';
import Menu from './components/Menu';

import Hi from './components/Hi';
import Shop from './components/Shop';
import Offer from './components/Offer'


import LocomotiveScroll from 'locomotive-scroll';
import { useState } from 'react';
import { useEffect } from 'react';

import {
  BrowserRouter ,
  Routes,
  Route
} from "react-router-dom";
function App() { 
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 15000);

    return () => clearTimeout(timeout);
  }, []);
  
  
  

  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <>
     <BrowserRouter>
      {isLoading ? (
        <Hi />
      ) : (
        <>
        
        
       
         
        <Routes>


        <Route  path="/" Component={Home}/>
        
        <Route  path="/Menu" Component={Menu}/>
        <Route  path="/Shop" Component={Shop}/>
        <Route path='/Offer' Component={Offer}/>
       
          </Routes>
          
         
        </>
      )}
       </BrowserRouter>
       
    </>
  );
}

export default App;
