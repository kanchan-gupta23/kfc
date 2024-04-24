import React from 'react'

import './App.css';
import Home from './components/Home';
// import Menu from './components/Menu';
import Offer from './components/Offer';
import Hi from './components/Hi';
import Shop from './components/Shop';


import Navbar from './components/Navbar';
import LocomotiveScroll from 'locomotive-scroll';
import { useState } from 'react';
import { useEffect } from 'react';
import Footer from './components/Footer';
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
      {isLoading ? (
        <Hi />
      ) : (
        <>
          <Navbar />
          <Home />
          
          {/* <Menu /> */}
         
          <Offer/>
          <Shop/>
          <Footer/>
        </>
      )}
    </>
  );
}

export default App;
