import React, { useState, useEffect } from 'react';

const projects = [
  {
    id: 1,
    title: "Nusa Batik",
    description: "This application helps both enthusiasts and beginners recognize batik patterns through image uploads. After scanning, users receive insights into the history and culture behind each pattern.",
    image: "assets/NusaBatik.png",
    color: "from-orange-500 to-purple-600",
    githubLink: null,
    webLink: null
  },
  {
    id: 2,
    title: "RoadScan AI",
    description: "RoadScanAI is an AI-powered application designed to assess road conditions using Mask R-CNN. It automatically detects and evaluates road damages, providing valuable insights.",
    image: "assets/Rectangle 40.png",
    color: "from-yellow-500 to-orange-600",
    githubLink: "https://github.com/kr1aas/penilaian_jalan.git",
    webLink: "https://roadscanai.example.com"
  },
  {
    id: 3,
    title: "Kita Donasi",
    description: "This application serves as a platform for donating items within Bali State Polytechnic. It enables students and staff to easily give or receive usable goods, reducing waste, and supporting sustainability on campus.",
    image: "assets/KitaDonasi.png",
    color: "from-yellow-500 to-red-600",
    githubLink: null,
    webLink: null
  },
  {
    id: 4,
    title: "System Amprah Bina Marga",
    description: "Amprah Management System for Bina Marga is a web-based application designed to streamline the administrative process of recording amprah activities within Bina Marga. It allows the treasurer to digitally input forms, automatically generate official documents, and print them directly.",
    image: "assets/Sistem amprahan Bina Marga.png",
    color: "from-orange-500 to-purple-600"
  },
  {
    id: 5,
    title: "Booking System Hotel",
    description: "Infinity8 Hotel offers a modern and stylish stay experience with premium facilities designed for both business and leisure travelers. Guests can enjoy spacious and comfortable rooms, a rooftop pool with a stunning view, meeting and event spaces, as well as excellent dining options.",
    image: "assets/Infinity8.png",
    color: "from-yellow-500 to-orange-600"
  }
];

interface PortfolioProps {
  onTrigger: () => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onTrigger }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [, setIsAutoPlay] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(false);
    const timer = setTimeout(() => setShow(true), 700);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsAutoPlay(false);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    } else if (isRightSwipe) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    }

    setTimeout(() => setIsAutoPlay(true), 2000);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 2000);
  };

  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(1);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [totalPages]);

  return (
    <section id="portfolio" className="px-4 md:px-8 animate-in fade-in lg:px-16 py-10 md:py-16 lg:py-20 ">
      <h2 className="text-portfolio-blue text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-normal mb-2 md:mb-4 text-center lg:text-left">Portofolio</h2>
      <div className="h-1 w-32 md:w-36 lg:w-42 bg-portfolio-orange mb-8 md:mb-12 mx-auto lg:mx-0"></div>

      <div className="w-full max-w-6xl mx-auto p-4">
        <div className="hidden lg:block">
          <div className="relative">
            {totalPages > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-14 z-10 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white hover:scale-110 transition-all duration-300"
                >
                  <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-14 z-10 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white hover:scale-110 transition-all duration-300"
                >
                  <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {Array.from({ length: totalPages }).map((_, pageIndex) => (
                  <div key={pageIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-3 gap-8">
                      {projects
                        .slice(pageIndex * 3, (pageIndex + 1) * 3)
                        .map((project, index) => (
                          <div
                            key={project.id}
                            className="group bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-2xl"
                            style={{
                              animationDelay: `${index * 0.2}s`,
                              animation: 'fadeInUp 0.8s ease-out forwards'
                            }}
                          >
                            <div className="relative overflow-hidden">
                              <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                              />
                              <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                            </div>
                            <div className="p-6">
                              <h3 className="text-slate-800 text-xl font-bold mb-3 group-hover:text-portfolio-orange transition-colors duration-300">
                                {project.title}
                              </h3>
                              <p className="text-slate-600 text-sm italic font-medium mb-4 leading-relaxed line-clamp-4">
                                {project.description}
                              </p>
                              <button onClick={onTrigger} className="bg-gradient-to-r from-orange-600 to-portfolio-orange text-white px-6 py-3 rounded-lg text-sm font-bold hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg">
                                View Project
                              </button>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center space-x-3 mt-8">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                      ? 'bg-gradient-to-r from-orange-500 to-portfolio-orange scale-125'
                      : 'bg-slate-300 hover:bg-slate-400'
                      }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="lg:hidden">
          <div className="relative">
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-14 z-10 bg-white/80 -translate-x-10 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all duration-300"
            >
              <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-14 z-10 bg-white/80 translate-x-10 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all duration-300"
            >
              <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div
              className="overflow-hidden rounded-2xl"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="w-full flex-shrink-0 bg-white shadow-2xl"
                  >
                    <div className="relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 md:h-72 object-cover"
                      />
                      <div
                        className={`absolute top-3 sm:top-4 right-3 sm:right-4 transform transition-all duration-700 ease-out ${show ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"}`}>

                        <div className="flex gap-2">

                          {project.githubLink && (
                            <button
                              onClick={() => window.open(project.githubLink, '_blank')}
                              className="bg-gradient-to-r from-gray-700 to-gray-800 text-white p-2 rounded-full text-xs sm:text-sm shadow-lg hover:from-gray-800 hover:to-gray-900 transition-all duration-300 border border-gray-600/30 group"
                              title="View on GitHub"
                            >
                              <svg
                                className="w-4 h-4 group-hover:scale-110 transition-transform duration-200"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                              </svg>
                            </button>
                          )}

                          {(project.webLink) && (
                            <button
                              onClick={() => window.open(project.webLink, '_blank')}
                              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-2 rounded-full text-xs sm:text-sm shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 border border-blue-400/30 group"
                              title="View Live Demo"
                            >
                              <svg
                                className="w-4 h-4 group-hover:scale-110 transition-transform duration-200"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </button>
                          )}

                          {!project.githubLink && !project.webLink && (
                            <button onClick={onTrigger} className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 border border-orange-400/30">
                              Read More
                            </button>
                          )}

                        </div>
                      </div>

                      <div
                        className={`absolute -bottom-6 left-4 right-4 bg-white rounded-2xl shadow-2xl p-6 transform transition-all duration-700 ease-out ${show ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                        <h3 className="text-slate-800 text-lg md:text-2xl font-bold mb-3">
                          {project.title}
                        </h3>
                        <p className="text-slate-600 text-xs md:text-base italic font-medium mb-4 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center space-x-3 mt-16">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 scale-125'
                    : 'bg-slate-300 hover:bg-slate-400'
                    }`}
                />
              ))}
            </div>

            <div className="flex justify-center mt-4">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
