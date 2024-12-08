
import React from 'react';
import Home from './components/homepage';
import AboutUs from './components/about'; 
import ServicesPage from "./components/ServicesPage";
import Projects from './components/Projects'
import './App.css'
function App() {
  return (
    <div>
      <Home />
      <AboutUs />
      <ServicesPage />
      <Projects />
    </div>
  );
}

export default App;
