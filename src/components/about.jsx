import React from "react";
import aboutimg from '../images/background-g.jpg';
import '../App.css'
const AboutUs = () => {
  return (
    <div id="about-section" className="bg-gray-100 text-gray-800 p-8">
      <section className="flex flex-col lg:flex-row items-center max-w-5xl mx-auto py-10 space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <h2 className="text-6xl text-gray-400 mb-6 font-istok ">About Us</h2>
          <p className="text-blue-950 font-bold text-lg leading-relaxed mb-6 font-istok">Passion, Innovation, Excellence.</p>   
          <p className="text-gray-700 text-lg leading-relaxed mb-6 font-inter">
            At Global Events, we are more than just event managers – we are passionate creators, innovators, and storytellers. With over a decade of industry experience, we have built a reputation for excellence and reliability. Our team combines expertise with creativity to bring your vision to life, ensuring every detail is meticulously planned and executed to perfection.
          </p>
          <button className="bg-blue-950 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300">
            READ MORE
          </button>
        </div>
        <div className="flex justify-center items-center">
  <img 
    src={aboutimg}
    alt="About Us"
    className="rounded-lg shadow-lg object-cover w-[525px] h-[600px]"
  />
</div>
      </section>
    </div>
  );
};

export default AboutUs;
