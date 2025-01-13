import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';

const NavFooter = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);

  const navItems = [
    { title: 'ABOUT', id: 'WhatIsHacked' },
    { title: 'TIMELINE', id: 'Schedule' },
    { title: 'SPONSORS', id: 'PastSponsors' },
    { title: 'PRIZES', id: 'Prizes' },
    { title: 'CONTACT', id: '#contact' },
    { title: 'TEAM', id: '#team' },
    { title: 'FAQs', id: 'FAQs' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const faqSection = document.getElementById('FAQs');
      const buffer = 50;

      if (faqSection) {
        const faqBottom = faqSection.getBoundingClientRect().bottom + window.scrollY;
        setIsAtBottom(scrollTop + windowHeight >= faqBottom - buffer);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

  const MobileMenu = () => (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="absolute bottom-full left-0 right-0 mb-2 p-4 rounded-lg md:hidden"
          style={{
            background: 'linear-gradient(90deg, rgba(49,46,129,0.95) 0%, rgba(17,24,39,0.95) 100%)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <div className="flex flex-col space-y-3">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 text-left rounded-lg transition-colors duration-200
                  ${activeSection === item.id ? 'bg-white/10 text-purple-400' : 'text-white/90 hover:bg-white/5 hover:text-white'}`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

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

  const FooterContent = () => (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-6xl mx-auto px-4">
      <div>
        <img src="/assets/images/logo.svg" alt="Logo" className="w-24" />
        <h1 className="text-xl font-semibold text-purple-400 mt-4">Hacked 3.0</h1>
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
        <ul className="space-y-2">
          {navItems.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="hover:text-purple-400 transition duration-300 text-white/90"
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <MdLocationOn /> Address
        </h2>
        <p className="text-white/90">
          67th Milestone, NH 48, Kapriwas, Haryana 122413
        </p>
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-4">Social Links</h2>
        <div className="flex gap-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition duration-300">
            <FaInstagram size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition duration-300">
            <FaLinkedinIn size={24} />
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className={`h-4 transition-all duration-500 ${isAtBottom ? 'opacity-100' : 'opacity-0 h-0'}`} />
      
      <motion.div
        className={`${
          isAtBottom 
            ? 'w-full relative mt-2'
            : 'fixed bottom-4 left-0 right-0 flex justify-center z-50'
        }`}
        layout
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 100
        }}
      >
        <div className={`${!isAtBottom ? 'w-[90%] md:w-auto' : 'w-full'} relative`}>
          <motion.div
            className={`${
              isAtBottom 
                ? 'px-4 py-6 w-full'
                : 'px-4 md:px-5 py-2.5 rounded-full'
            } shadow-lg border border-white/5 relative`}
            style={{
              background: 'linear-gradient(90deg, rgba(49,46,129,0.6) 0%, rgba(17,24,39,0.6) 100%)',
              backdropFilter: 'blur(8px)',
            }}
            layout
          >
            {isAtBottom ? (
              <FooterContent />
            ) : (
              <>
                <div className="flex items-center justify-between">
                  <img
                    src="/assets/images/logo.svg"
                    alt="Logo"
                    className="w-8 h-8 md:w-10 md:h-10 cursor-pointer"
                    onClick={() => scrollToSection('home')}
                  />
                  <DesktopNav />
                  <div className="md:hidden">
                    <button
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                    >
                      {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                  </div>
                </div>
                <MobileMenu />
              </>
            )}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default NavFooter;