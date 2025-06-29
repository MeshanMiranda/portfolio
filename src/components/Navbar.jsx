import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/My Logo.png";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const handleMobileNavClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    setTimeout(() => setMenuOpen(false), 1000);
  };


  const menuVariants = {
    hidden: { opacity: 0, y: -10, transition: { duration: 0.2 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };


  return (
    <nav className="flex items-center justify-between flex-wrap py-6 px-4 md:pr-10 mt-4">
      {/* Social Media Icons */}
      <div className="hidden md:flex md:items-center flex items-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/meshan-miranda"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/MeshanMiranda"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/prashansa_meshan?igsh=MTBrdmp5N2k2ZDR1MQ%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/prashansa.meshan.2025?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex justify-between items-center w-full">
        {/* Social Media Icons */}
        <div className="md:hidden flex items-center gap-4 text-2xl">
          <a
            href="https://www.linkedin.com/in/meshan-miranda"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/MeshanMiranda"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/prashansa_meshan?igsh=MTBrdmp5N2k2ZDR1MQ%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/prashansa.meshan.2025?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
        </div>

        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
          aria-label="Toggle navigation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            key="mobileMenu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="flex flex-col mt-4 space-y-2 text-base font-medium md:hidden"
          >
            <li><a href="#hero" onClick={handleMobileNavClick} className="text-blue-500 hover:underline">Home</a></li>
            <li><a href="#technologies" onClick={handleMobileNavClick} className="text-white hover:text-blue-500">Technologies</a></li>
            <li><a href="#projects" onClick={handleMobileNavClick} className="text-white hover:text-blue-500">Projects</a></li>
            <li><a href="#experience" onClick={handleMobileNavClick} className="text-white hover:text-blue-500">Experience</a></li>
            <li><a href="#contact" onClick={handleMobileNavClick} className="text-white hover:text-blue-500">Contact</a></li>
          </motion.ul>
        )}
      </AnimatePresence>

      {/* Desktop Menu */}
      <div className="hidden md:flex md:items-center">
        <ul className="flex space-x-8 text-base font-medium">
          <li><a href="#hero" className="text-blue-700 dark:text-blue-500 hover:underline">Home</a></li>
          <li><a href="#technologies" className="text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500">Technologies</a></li>
          <li><a href="#projects" className="text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500">Projects</a></li>
          <li><a href="#experience" className="text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500">Experience</a></li>
          <li><a href="#contact" className="text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
