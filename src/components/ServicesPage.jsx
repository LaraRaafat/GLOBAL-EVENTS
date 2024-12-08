import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa"; 
import Image from '../images/background-g.jpg'; 

const ServiceCard = ({ imageSrc, altText }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div
      className={`relative p-4 rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform duration-300 group`}
      onClick={toggleZoom}
    >
    
      <img
        src={imageSrc}
        alt={altText}
        className={`w-full h-auto rounded-lg object-cover group-hover:scale-110 transition-transform duration-300`}
      />
      
     
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
        <FaArrowRight /> 
      </div>
      <div className="mt-4 text-center text-gray-700 font-semibold">{altText}</div>
    </div>
  );
};

const ServicesPage = () => {
  return (
    <div className="flex flex-col items-center mb-10">

      <div
        className="relative flex flex-col items-center bg-gray-100 text-gray-700 py-6 px-10 shadow-md text-center rounded-t-lg"
        style={{ backgroundColor: "#9999f" }} 
      >
        <h2 className="text-3xl font-bold">Our Services</h2>
        <p className="text-sm font-bold text-gray-500">Covering all event Management fields</p>
      </div>

     
      <div className="relative">
        <div
          className="w-full h-0 border-l-[150px] border-r-[150px] border-t-[50px] mx-auto"
          style={{
            borderTopColor: "#9999f", 
            borderLeftColor: "transparent",
            borderRightColor: "transparent",
          }}
        ></div>
      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 px-4 max-w-4xl">
        <ServiceCard
          imageSrc={Image}
          altText="Events Management"
        />
        <ServiceCard
          imageSrc={Image}
          altText="Booth Production"
        />
        
        <ServiceCard
          imageSrc={Image}
          altText="AV Solutions"
        />
        <ServiceCard
          imageSrc={Image}
          altText="Digital Marketing"
        />
        <ServiceCard
          imageSrc={Image}
          altText="2D Graphic Design"
        />
        <ServiceCard
          imageSrc={Image}
          altText="3D Design"
        />
      </div>

    
      <p className="text-gray-500 mt-8 text-center max-w-4xl">
        We provide the best services to create an unforgettable experience.
      </p>

     
      <button className="bg-blue-900 text-white px-6 py-2 rounded-[10px] hover:bg-blue-700 transition duration-300 mt-4">
        READ MORE
      </button>
    </div>
  );
};

export default ServicesPage;
