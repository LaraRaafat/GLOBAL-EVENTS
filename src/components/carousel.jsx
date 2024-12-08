import React, { useState, useEffect } from 'react';
import oneImage from '../images/background-g.jpg'; 
import twoImage from '../images/background-g2.jpg';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    oneImage, 
    twoImage,
    oneImage,
  ];

  const texts = [
    { line1: "Elevate Your Events With", line2: "Global Events." }, 
    { line1: "This is the second image description.", line2: "" },
    { line1: "Enjoy the best services with", line2: "our platform." }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [images.length]); 

  return (
    <div
      className="relative w-full h-full transition-all duration-500" 
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
      }}
    >
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
      <div className="flex items-center right-4 absolute inset-0 p-4">
      <div className="text-white font-bold right-4 transition-transform duration-300 p-4 text-4xl group">
      <div className="transform group-hover:translate-y-40 transition-transform duration-300">
      <p>{texts[currentIndex].line1}</p>
      <p>{texts[currentIndex].line2}</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Carousel;
