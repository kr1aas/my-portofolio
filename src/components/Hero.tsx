import React from 'react';
import AnimatedCircles from './AnimatedCircles';

const Hero: React.FC = () => {
  return (
    <section className="px-4 xl:my-3 xl:py-10 md:px-8 lg:px-16 py-10 md:py-16 lg:py-20 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
      <AnimatedCircles variant="hero" />
      <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
        <div className="mb-6 md:mb-8 xl:mb-8">
          <h1 className="text-portfolio-orange text-xl md:text-2xl animate-in fade-in slide-in-from-left duration-500 lg:text-3xl font-normal italic mb-2">Hi I'm</h1>
          <h2 className="text-portfolio-blue text-3xl md:text-4xl lg:text-5xl animate-in fade-in slide-in-from-left duration-600 italic font-bold mb-4">Krisna Astika</h2>
          <div className="h-1 w-48 md:w-64 lg:w-72 bg-portfolio-orange mb-6 md:mb-8 mx-auto lg:mx-0"></div>
          <p className="text-portfolio-blue text-lg animate-in fade-in slide-in-from-left duration-800 md:text-xl lg:text-2xl font-normal">
            I'm Web developer and Data Scientist Based on Bali
          </p>
        </div>
        <a
          href="assets\CV-I Gede Krisna Astika Nanda.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-portfolio-orange animate-in fade-in slide-in-from-bottom duration-1000 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl text-lg md:text-xl lg:text-2xl hover:bg-opacity-90 transition-all"
        >
          View CV
        </a>
      </div>

      <div className="flex-1 flex animate-in fade-in slide-in-from-right duration-1000 justify-center lg:justify-end order-1 lg:order-2">
        <div className="relative">
          <img
            src="assets/profil.png"
            alt="Krisna Astika"
            className="top-[-60px] md:top-[-80px] lg:top-[-100px] left-0 w-68 h-80 md:w-80 md:h-96 lg:w-[400px] lg:h-[480px] xl:w-[500px] xl:h-[562px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
