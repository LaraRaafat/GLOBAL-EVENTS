import React from 'react';
import Carousel from './carousel'; 
import Navbar from './navbar';


const Home = () => {
  return (
    <div className="relative h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center h-[95vh]">
        <Carousel /> 
       
      </div>
    </div>
  );
};

export default Home;
