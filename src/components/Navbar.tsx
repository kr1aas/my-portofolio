import React, { useState } from 'react';
import { X, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white h-16 md:h-[93px] flex items-center justify-between px-4 md:px-8 lg:px-16 shadow-sm relative z-50">
      <div className="flex items-center">
        <img
          src="assets/KA.png"
          alt="KA Logo"
          className="w-12 h-9 md:w-16 md:h-12"
        />
      </div>

      <nav className="hidden md:flex space-x-4 lg:space-x-8 xl:space-x-12">
        <a href="#about" className="text-portfolio-blue font-bold text-sm lg:text-lg xl:text-xl hover:text-portfolio-orange transition-colors">About Me</a>
        <a href="#experience" className="text-portfolio-blue font-bold text-sm lg:text-lg xl:text-xl hover:text-portfolio-orange transition-colors">Experience</a>
        <a href="#skills" className="text-portfolio-blue font-bold text-sm lg:text-lg xl:text-xl hover:text-portfolio-orange transition-colors">Skills</a>
        <a href="#portfolio" className="text-portfolio-blue font-bold text-sm lg:text-lg xl:text-xl hover:text-portfolio-orange transition-colors">Portfolio</a>
        <a href="#blog" className="text-portfolio-blue font-bold text-sm lg:text-lg xl:text-xl hover:text-portfolio-orange transition-colors">Blog</a>
        <a href="#contact" className="text-portfolio-blue font-bold text-sm lg:text-lg xl:text-xl hover:text-portfolio-orange transition-colors">Contact</a>
      </nav>

      <button
        className="md:hidden text-portfolio-blue hover:text-portfolio-orange z-50 relative"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              onClick={toggleMobileMenu}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-40 md:hidden"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <img
                    src="assets/KA.png"
                    alt="KA Logo"
                    className="w-12 h-9"
                  />
                  <button
                    onClick={toggleMobileMenu}
                    className="text-portfolio-blue hover:text-portfolio-orange"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="flex flex-col flex-1 py-8">
                  <motion.a
                    href="#about"
                    className="text-portfolio-blue font-bold text-lg hover:text-portfolio-orange transition-colors px-6 py-4 border-b border-gray-100"
                    onClick={toggleMobileMenu}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    About Me
                  </motion.a>
                  <motion.a
                    href="#experience"
                    className="text-portfolio-blue font-bold text-lg hover:text-portfolio-orange transition-colors px-6 py-4 border-b border-gray-100"
                    onClick={toggleMobileMenu}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 }}
                  >
                    Experience
                  </motion.a>
                  <motion.a
                    href="#skills"
                    className="text-portfolio-blue font-bold text-lg hover:text-portfolio-orange transition-colors px-6 py-4 border-b border-gray-100"
                    onClick={toggleMobileMenu}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Skills
                  </motion.a>
                  <motion.a
                    href="#portfolio"
                    className="text-portfolio-blue font-bold text-lg hover:text-portfolio-orange transition-colors px-6 py-4 border-b border-gray-100"
                    onClick={toggleMobileMenu}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 }}
                  >
                    Portfolio
                  </motion.a>
                  <motion.a
                    href="#blog"
                    className="text-portfolio-blue font-bold text-lg hover:text-portfolio-orange transition-colors px-6 py-4 border-b border-gray-100"
                    onClick={toggleMobileMenu}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    Blog
                  </motion.a>
                  <motion.a
                    href="#contact"
                    className="text-portfolio-blue font-bold text-lg hover:text-portfolio-orange transition-colors px-6 py-4"
                    onClick={toggleMobileMenu}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 }}
                  >
                    Contact
                  </motion.a>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
