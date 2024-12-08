import React from 'react';
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 

import image1 from '../images/background-g.jpg'; 
import image2 from '../images/background-g2.jpg';

const projects = [
  { title: 'Navatech Accounting 2023', date: 'November 2023', image: image1 },
  { title: 'Saudi Emergency Medicine Services Conference', date: 'June 2023', image: image2 },
  { title: 'Saudi Society of Clinical Pharmacy', date: 'June 2023', image: image1 },
];

const logos = [
  { src: image1, alt: 'Company 1' },
  { src: image2, alt: 'Company 2' },
  { src: image1, alt: 'Company 3' },
  { src: image2, alt: 'Company 4' },
  { src: image1, alt: 'Company 5' },
];

const Projects = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gradient-to-b from-purple-500 to-blue-500 text-white p-10">
      <h1 className="text-3xl font-bold mb-5">Our Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-white text-black p-5 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
            style={{ height: '500px', backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black opacity-60 p-4">
              <h2 className="text-xl font-semibold text-white">{project.title}</h2>
              <p className="text-white">{project.date}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-5">Trusted and backed by over 800 companies worldwide</h2>
        <Slider {...sliderSettings}>
          {logos.map((logo, index) => (
            <div key={index} className="p-4 flex justify-center">
              <div className="bg-white rounded-lg shadow-lg p-4 flex justify-center items-center max-w-xs">
                <img src={logo.src} alt={logo.alt} className="h-24 w-auto" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
