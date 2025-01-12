// src/components/Navbar/Navbar.jsx
import "../WhatIsHacked/WhatIsHacked.jsx";
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [activeSection, setActiveSection] = useState('');

  const navItems = [
    { title: 'ABOUT', id: 'WhatIsHacked' },
    { title: 'TIMELINE', id: 'Schedule' },
    { title: 'SPONSORS', id: 'PastSponsors' },
    { title: 'PRIZES', id: 'Prizes' },
    { title: 'CONTACT ', id: '#contact' },
    { title: 'TEAM', id: '#team' },
    { title: 'FAQs', id: 'FAQs' },
  ];

  // Handle scroll and intersection observer
  useEffect(() => {
    const options = {
      threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    // Observe all sections
    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      navItems.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80; // Adjust based on your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-auto z-50">
      <div className="relative">
        {/* Glow effects */}
        <div className="absolute inset-0 flex justify-between pointer-events-none">
          <div className="w-24 h-full bg-gradient-to-r from-indigo-600/20 to-transparent blur-lg" />
          <div className="w-24 h-full bg-gradient-to-l from-blue-800/20 to-transparent blur-lg" />
        </div>

        <nav className="relative px-8 py-3 rounded-full shadow-lg border border-white/5 flex items-center gap-8"
             style={{
               background: 'linear-gradient(90deg, rgba(49,46,129,0.6) 0%, rgba(17,24,39,0.6) 100%)',
               backdropFilter: 'blur(8px)',
             }}>
          <div 
            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-500 cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            SC
          </div>

          <div className="flex items-center gap-6">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-2 py-1 group ${
                  activeSection === item.id ? 'text-white' : 'text-white/90'
                }`}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <span className="relative z-10 text-sm font-medium tracking-wider transition-colors duration-200">
                  {item.title}
                </span>
                {(hoverIndex === index || activeSection === item.id) && (
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-blue-800/20 rounded-full -z-0 animate-fadeIn" />
                )}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;