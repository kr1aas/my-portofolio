import React from 'react';
import AnimatedCircles from './AnimatedCircles';

const About: React.FC = () => {
  return (
    <section id="about" className="relative px-4 md:px-8 lg:px-16 py-10 md:py-16 lg:py-20 xl:my-3 xl:py-5 bg-gradient-to-br from-portfolio-gray to-portfolio-step5">
      <AnimatedCircles variant="about" />
      <h2 className="text-portfolio-blue text-2xl md:text-3xl lg:text-4xl font-normal mb-2 md:mb-4 text-center lg:text-left">About Me</h2>
      <div className="h-1 w-32 md:w-40 lg:w-44 bg-portfolio-orange mb-8 md:mb-12 mx-auto lg:mx-0"></div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">

        <div className="flex-1">
          <p className="text-portfolio-blue animate-in fade-in slide-in-from-left duration-500 text-base md:text-lg lg:text-xl xl:text-2xl italic font-medium leading-relaxed mb-6 md:mb-8 text-center lg:text-left">
            Hello! I'm I Gede Krisna Astika Nanda, a final-year undergraduate student at Bali State Polytechnic, majoring in Software Engineering Technology. During my studies, I have built a solid foundation in software development and I enjoy using technology to solve real-world problems.
          </p>

          <div className="flex justify-center animate-in fade-in slide-in-from-top duration-1000 lg:hidden mb-6">
            <img
              src="assets/logopnb.png"
              alt="PNB Logo"
              className="w-40 h-40 md:w-48 md:h-48 backdrop-blur-sm object-contain"
            />
          </div>

          <div className="flex justify-center animate-in fade-in slide-in-from-bottom duration-1000 lg:justify-start mb-6 lg:mb-0">
            <img
              src="assets/Sertif.png"
              alt="Certificate 1"
              className="w-58 h-36 md:w-40 md:h-32 xl:mx-auto lg:w-48 lg:h-36 xl:w-[434px] xl:h-64 xl:mt-12"
            />
          </div>
        </div>

        <div className="flex-1 text-center lg:text-left">
          <div className="hidden animate-in fade-in slide-in-from-bottom duration-1000 lg:flex justify-center lg:justify-start mb-6 md:mb-8">
            <img
              src="assets/logopnb.png"
              alt="PNB Logo"
              className="w-40 h-40 md:w-48 md:h-48 xl:pad-20 xl:mx-auto xl:mb-6 xl:left-100 lg:w-56 lg:h-56 xl:w-64 xl:h-64 backdrop-blur-sm object-contain"
            />
          </div>

          <p className="text-portfolio-blue animate-in fade-in slide-in-from-right duration-1000 text-base md:text-lg lg:text-xl xl:text-2xl italic font-medium leading-relaxed mb-6 md:mb-8 text-center lg:text-left">
            I am especially interested in Data Science, particularly in how data can be transformed into valuable insights through analytics, machine learning, and artificial intelligence. With my background in Software Engineering Technology, I aim to combine strong programming skills with a data-driven approach to create solutions that are practical and impactful.
          </p>

          <div className="flex justify-center lg:justify-start">
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
