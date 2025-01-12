import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { title: 'ABOUT', id: 'WhatIsHacked' },
    { title: 'TIMELINE', id: 'Schedule' },
    { title: 'SPONSORS', id: 'PastSponsors' },
    { title: 'PRIZES', id: 'Prizes' },
    { title: 'CONTACT ', id: '#contact' },
    { title: 'TEAM', id: '#team' },
    { title: 'FAQs', id: 'FAQs' },
  ];

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
      const navHeight = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  // Desktop Navigation
  const DesktopNav = () => (
    <div className="hidden md:flex items-center flex-nowrap space-x-4">
      {navItems.map((item, index) => (
        <button
          key={index}
          onClick={() => scrollToSection(item.id)}
          className={`relative px-2 py-1 whitespace-nowrap group ${activeSection === item.id ? 'text-white' : 'text-white/90'}`}
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
  );

  // Mobile Navigation
  const MobileNav = () => (
    <div className="md:hidden">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="p-2 text-white"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute bottom-full mb-4 right-0 w-48 rounded-lg shadow-lg border border-white/5 overflow-hidden"
             style={{
               background: 'linear-gradient(180deg, rgba(49,46,129,0.95) 0%, rgba(17,24,39,0.95) 100%)',
               backdropFilter: 'blur(8px)',
             }}>
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(item.id)}
              className={`w-full text-left px-4 py-2.5 ${
                activeSection === item.id 
                  ? 'bg-white/10 text-white' 
                  : 'text-white/90 hover:bg-white/5'
              }`}
            >
              <span className="text-sm font-medium tracking-wider">
                {item.title}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] md:w-auto z-50">
      <div className="relative">
        {/* Glow effects */}
        <div className="absolute inset-0 flex justify-between pointer-events-none">
          <div className="w-24 h-full bg-gradient-to-r from-indigo-600/20 to-transparent blur-lg" />
          <div className="w-24 h-full bg-gradient-to-l from-blue-800/20 to-transparent blur-lg" />
        </div>

        <nav className="relative px-4 md:px-5 py-2.5 rounded-full shadow-lg border border-white/5 flex items-center justify-between"
            style={{
              background: 'linear-gradient(90deg, rgba(49,46,129,0.6) 0%, rgba(17,24,39,0.6) 100%)',
              backdropFilter: 'blur(8px)',
            }}>
          {/* Logo */}
          <img
            src="/assets/images/logo.svg"
            alt="Logo"
            className="w-8 h-8 md:w-10 md:h-10 cursor-pointer"
            onClick={() => scrollToSection('home')}
          />

          <DesktopNav />
          <MobileNav />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;