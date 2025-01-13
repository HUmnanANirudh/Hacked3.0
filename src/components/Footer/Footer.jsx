  import React from "react";
  import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
  import { MdHome, MdOutlineContactMail, MdInfoOutline, MdHelpOutline, MdLocationOn } from "react-icons/md";
  import { IoArrowRedoCircleOutline } from "react-icons/io5";
  import { motion } from "motion/react";
  function Footer() {
    const currentYear = new Date().getFullYear();

    return (
      <footer className="bg-gray-900 text-white py-10 md:mt-20">
        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 container mx-auto px-6">
          {/* Logo and About Section */}
          <div className="flex flex-col items-start gap-6">
            <img src="/assets/images/logo.svg" alt="Logo" className="w-24 md:w-32" />
            <div>
              <h1 className="text-3xl font-semibold text-purple-400">Hacked 3.0</h1>
              {/* <p className="text-gray-300 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, sed?
              </p> */}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              Quick Links
            </h2>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-purple-400 transition duration-300 flex items-center gap-2">
                  <MdHome size={20} /> Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-purple-400 transition duration-300 flex items-center gap-2">
                  <MdInfoOutline size={20} /> About
                </a>
              </li>
              <li>
                <a href="#timeline" className="hover:text-purple-400 transition duration-300 flex items-center gap-2">
                  <MdOutlineContactMail size={20} /> Timeline
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-purple-400 transition duration-300 flex items-center gap-2">
                  <MdHelpOutline size={20} /> Contact
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-purple-400 transition duration-300 flex items-center gap-2">
                  <MdHelpOutline size={20} /> FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <MdLocationOn size={24} /> Address
            </h2>
            <p className="text-gray-300 mb-4">
            67th Milestone, NH 48, Kapriwas, Haryana 122413
            </p>
            <motion.button
        className="text-white py-2 rounded-md flex items-center gap-2 text-xl group"
        whileHover="hover"
        initial="initial"
        animate="initial"
        href=""
        rel="noopener noreferrer"
      >
        <span className="relative">
          See on the Map
          <motion.span
            className="absolute bottom-0 left-0 w-full h-0.5 bg-white"
            variants={{
              initial: { scaleX: 0, originX: 0 },
              hover: { scaleX: 1, originX: 0 }
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </span>
        
        <motion.div
          variants={{
            initial: { x: 0 },
            hover: { x: 5 }
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <IoArrowRedoCircleOutline size={20} />
        </motion.div>
      </motion.button>
          </div>
          <div className="flex flex-col items-start">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            Social Links
            </h2>
            <ul className="flex gap-6">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition duration-300"
                >
                  <FaInstagram size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition duration-300"
                >
                  <FaLinkedinIn size={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center mt-10 border-t border-gray-700 pt-5">
          <p className="text-gray-400">
            © {currentYear} Hacked 3.0. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }

  export default Footer;
