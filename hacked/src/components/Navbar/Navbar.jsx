import React, { useState } from 'react';
import "./Navbar.css";



const SciFiNavbar = () => {
  const navItems = [
    'ABOUT', 'MISSIONS', 'TIMELINE', 'SPONSORS', 
    'ACHIEVEMENTS', 'CREW', 'INTEL'
  ];

  return (
    <>
     
      <div className="nav-container">
        <div className="nav-bar">
          <div className="glow-container">
            <div className="glow-left"></div>
            <div className="glow-right"></div>
          </div>
          <div className="nav-content">
            <div className="logo">SC</div>
            <div className="nav-links">
              {navItems.map((item, index) => (
                <a key={index} href="#" className="nav-item">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SciFiNavbar;