import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaList } from 'react-icons/fa'; 
import logoImage from '../images/logo.png';

const Navbar = () => {
  const [darkmode, setdarkmode] = useState(false);

  const toggleDarkMode = () => {
    setdarkmode(!darkmode);
  };

  useEffect(() => {
    if (darkmode) {
      document.documentElement.classList.add('dark'); 
    } else {
      document.documentElement.classList.remove('dark'); 
    }
  }, [darkmode]);

  return (
    <nav className="bg-gray-200 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <img src={logoImage} alt="Global Event Logo" className="h-14 w-auto" />
        </div>
        <ul className="hidden md:flex space-x-10 justify-center mx-auto">
          <li>
            <a href="/" className="text-black-600 font-bold hover:text-blue-800 hover:underline">Home</a>
          </li>
          <li>
            <a href="#about-section" className="text-black-600 font-bold hover:text-blue-800 hover:underline">About</a>
          </li>
          <li>
            <a href="/services" className="text-black-600 font-bold hover:text-blue-800 hover:underline">Services</a>
          </li>
          <li>
            <a href="/contact" className="text-black-600 font-bold hover:text-blue-800 hover:underline">Contact</a>
          </li>
        </ul>
        <div className="flex items-center space-x-10 ">
          <button onClick={toggleDarkMode} className="text-black text-2xl ml-4">
            {darkmode ? <FaSun /> : <FaMoon />}
          </button> 
          <button className="text-black text-2xl ">
            <FaList />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
