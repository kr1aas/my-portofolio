import React, { useState, useEffect, useRef } from 'react';
import { X, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from "emailjs-com";
import Swal from 'sweetalert2';


type Variant = "hero" | "about" | "default";
type Circle = {
  size: string;
  position: string;
  delay: `${number}s` | `${number}ms`;
};
export default function App({ onTrigger }: { onTrigger: () => void }) {
  const form = useRef<HTMLFormElement>(null);;

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) {
      alert("Form belum siap!");
      return;
    }
    emailjs
      .sendForm(
        "service_lovrhkc",   // ganti dengan service ID dari EmailJS
        "template_9y2ddk9",  // ganti dengan template ID
        form.current,
        "-A4SnbYSSNQT_46sg"       // ganti dengan public key
      )
      .then(
        () => {
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Message sent successfully!',
          }).then(() => window.location.reload());
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Failed!',
            text: 'Failed to send: ' + error.text,
          });
        }
      );

  };

  const circleVariants: Record<Variant, Circle[]> = {
    hero: [
      { size: "w-32 h-32", position: "top-32 right-10", delay: "2s" },
      { size: "w-20 h-20", position: "top-[33%] left-8", delay: "1.2s" },
      { size: "w-16 h-16", position: "bottom-28 right-[25%]", delay: "1.4s" },
    ],
    about: [
      { size: "w-24 h-24", position: "top-16 left-12", delay: "1.2s" },
      { size: "w-40 h-40", position: "bottom-12 right-10", delay: "1.6s" },
      { size: "w-12 h-12", position: "top-1/2 right-[15%]", delay: "0s" },
    ],
    default: [
      { size: "w-28 h-28", position: "top-8 right-16", delay: "0s" },
      { size: "w-16 h-16", position: "bottom-16 left-12", delay: "2.5s" },
    ],
  };

  interface AnimatedCirclesProps {
    variant?: Variant;
  }

  const AnimatedCircles: React.FC<AnimatedCirclesProps> = ({ variant = "default" }) => {
    const circles = circleVariants[variant] ?? circleVariants.default;

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {circles.map((circle, index) => (
          <div
            key={index}
            className={`absolute ${circle.size} ${circle.position} bg-portfolio-orange rounded-full opacity-20 animate-float blur-sm`}
            style={{
              animationDelay: circle.delay,
              animationDuration: '25s',
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite',
              animationFillMode: "both",
              // animationDirection: 'alternate',
              filter: 'blur(8px)'
            }}
          />
        ))}
      </div>
    );
  };

  const skills = [
    "assets/Rectangle 9.png",
    "assets/Rectangle 10.png",
    "assets/Rectangle 11.png",
    "assets/Rectangle 12.png",
    "assets/Rectangle 13.png",
    "assets/Rectangle 14.png",
    "assets/Rectangle 15.png",
    "assets/Rectangle 16.png",
    "assets/Rectangle 17.png",
    "assets/Rectangle 18.png",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [, setIsAutoPlay] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(false); // reset
    const timer = setTimeout(() => setShow(true), 700); // kasih delay biar transisi jalan
    return () => clearTimeout(timer);
  }, [currentIndex]);

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

  const [, setHoveredCard] = useState<number | null>(null);

  const blogData = [
    {
      src: "assets/Rectangle 48.png",
      title: "Menganalisa Data dan Membuat Model Regresi spasial bike sharing di Chicago",
      category: "Data Science",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      platformIcon: "assets/Logo Bisa Ai.png",
      platform: "Bisa AI",
      platformColor: "bg-blue-600",
      slug: "https://bisa.ai/portofolio/detail/NTA3MA"
    },
    {
      src: "assets/Rectangle 58.png",
      title: "Klasifikasi Biji Kopi dengan Metode Convolutional Neural Network (CNN)",
      category: "Deep Learning",
      date: "Dec 10, 2024",
      readTime: "7 min read",
      platformIcon: "assets/Logo Bisa Ai.png",
      platform: "Bisa AI",
      platformColor: "bg-blue-600",
      slug: "https://bisa.ai/portofolio/detail/NTExMQ"
    },
    {
      src: "assets/Rectangle 49.png",
      title: "Nusa Batik Website pendeteksi motif batik",
      category: "Web Development",
      date: "Dec 8, 2024",
      readTime: "6 min read",
      platformIcon: "assets/Logo Bisa Ai.png",
      platform: "Bisa AI",
      platformColor: "bg-blue-600",
      slug: "https://bisa.ai/portofolio/detail/NTEyNw"
    },
    {
      src: "assets/Rectangle 50.png",
      title: "Loan Classification and Clustering with Machine Learning",
      category: "Data Science",
      date: "Dec 5, 2024",
      readTime: "4 min read",
      platformIcon: "assets/Logo Bisa Ai.png",
      platform: "Bisa AI",
      platformColor: "bg-blue-600",
      slug: "https://bisa.ai/portofolio/detail/NDY3OQ"
    }
  ];



  // Touch handlers for mobile swipe
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

  // Update itemsPerPage sesuai ukuran layar
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3); // desktop
      } else {
        setItemsPerPage(1); // mobile
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

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Auto-slide sesuai itemsPerPage
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [totalPages]);

  return (
    <div className="min-h-screen bg-portfolio-gray font-nunito">
      {/* Navigation Header */}
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
          <a href="#skills" className="text-portfolio-blue font-bold text-sm lg:text-lg xl:text-xl hover:text-portfolio-orange transition-colors">Skills</a>
          <a href="#portfolio" className="text-portfolio-blue font-bold text-sm lg:text-lg xl:text-xl hover:text-portfolio-orange transition-colors">Portfolio</a>
          <a href="#blog" className="text-portfolio-blue font-bold text-sm lg:text-lg xl:text-xl hover:text-portfolio-orange transition-colors">Blog</a>
          <a href="#contact" className="text-portfolio-blue font-bold text-sm lg:text-lg xl:text-xl hover:text-portfolio-orange transition-colors">Contact</a>
        </nav>

        {/* Mobile menu button */}
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
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              onClick={toggleMobileMenu}
            />

            {/* Slide-out Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-40 md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Menu Header */}
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

                {/* Menu Items */}
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
                    href="#skills"
                    className="text-portfolio-blue font-bold text-lg hover:text-portfolio-orange transition-colors px-6 py-4 border-b border-gray-100"
                    onClick={toggleMobileMenu}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 }}
                  >
                    Skills
                  </motion.a>
                  <motion.a
                    href="#portfolio"
                    className="text-portfolio-blue font-bold text-lg hover:text-portfolio-orange transition-colors px-6 py-4 border-b border-gray-100"
                    onClick={toggleMobileMenu}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Portfolio
                  </motion.a>
                  <motion.a
                    href="#blog"
                    className="text-portfolio-blue font-bold text-lg hover:text-portfolio-orange transition-colors px-6 py-4 border-b border-gray-100"
                    onClick={toggleMobileMenu}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 }}
                  >
                    Blog
                  </motion.a>
                  <motion.a
                    href="#contact"
                    className="text-portfolio-blue font-bold text-lg hover:text-portfolio-orange transition-colors px-6 py-4"
                    onClick={toggleMobileMenu}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    Contact
                  </motion.a>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      {/* Hero Section */}
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
          <button className="bg-portfolio-orange animate-in fade-in slide-in-from-bottom duration-1000 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl text-lg md:text-xl lg:text-2xl hover:bg-opacity-90 transition-all">
            {/* Portofolio */} Download CV
          </button>
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

      {/* About Me Section */}
      <section id="about" className="relative px-4 md:px-8 lg:px-16 py-10 md:py-16 lg:py-20 xl:my-3 xl:py-5 bg-gradient-to-br from-portfolio-gray to-portfolio-step5">
        <AnimatedCircles variant="about" />
        <h2 className="text-portfolio-blue text-2xl md:text-3xl lg:text-4xl font-normal  mb-2 md:mb-4 text-center lg:text-left">About Me</h2>
        <div className="h-1 w-32 md:w-40 lg:w-44 bg-portfolio-orange mb-8 md:mb-12 mx-auto lg:mx-0"></div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">

          <div className="flex-1">
            <p className="text-portfolio-blue animate-in fade-in slide-in-from-left duration-500 text-base md:text-lg lg:text-xl xl:text-2xl italic font-medium leading-relaxed mb-6 md:mb-8 text-center lg:text-left">
              Hello! I'm I Gede Krisna Astika Nanda, a final-year undergraduate student at Bali State Polytechnic, majoring in Software Engineering Technology. During my studies, I have built a solid foundation in software development and I enjoy using technology to solve real-world problems.
            </p>

            {/* Mobile Layout - Logo PNB at Top */}
            <div className="flex justify-center animate-in fade-in slide-in-from-top duration-1000 lg:hidden mb-6">
              <img
                src="assets/logopnb.png"
                alt="PNB Logo"
                className="w-40 h-40 md:w-48 md:h-48 backdrop-blur-sm object-contain"
              />
            </div>

            {/* Mobile Layout - Certificate Below First Paragraph */}
            <div className="flex justify-center animate-in fade-in slide-in-from-bottom duration-1000 lg:justify-start mb-6 lg:mb-0">
              <img
                src="assets/Sertif.png"
                alt="Certificate 1"
                className="w-58 h-36 md:w-40 md:h-32 xl:mx-auto lg:w-48 lg:h-36 xl:w-[434px] xl:h-64 xl:mt-12"
              />
            </div>
          </div>

          <div className="flex-1 text-center lg:text-left">
            {/* Desktop Layout - Logo PNB (Hidden on Mobile) */}
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
              {/* <button className="bg-portfolio-orange text-white px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl text-lg md:text-xl lg:text-2xl font-bold hover:bg-opacity-90 transition-all">
                Download CV
              </button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-4 md:px-8 lg:px-16 py-10 md:py-16 lg:py-20 bg-gradient-to-b from-portfolio-step1 to-[#F2F3F2]">
        <h2 className="text-portfolio-blue text-2xl md:text-3xl lg:text-4xl font-normal text-center mb-4">Skills</h2>
        <p className="text-portfolio-blue text-base md:text-lg lg:text-xl xl:text-2xl italic font-medium text-center mb-8 md:mb-12 px-4">
          Below are some of the skills I have mastered:
        </p>

        <div className="w-full py-8">
          <div className="max-w-4xl mx-auto overflow-hidden">
            <div className="relative">
              {/* Container dengan animasi scroll */}
              <div className="flex animate-loop-scroll gap-4">
                {/* Set pertama */}
                <div className="flex gap-4 min-w-max ">
                  {skills.map((src, index) => (
                    <div
                      key={`first-${index}`}
                      className="w-16 h-16 md:w-20 md:h-20 border-2 border-gray-300 rounded-xl p-2 hover:scale-105 transition-transform bg-white shadow-sm flex-shrink-0 "
                    >
                      <img
                        src={src}
                        alt={`Skill ${index + 1}`}
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex gap-4 min-w-max">
                  {skills.map((src, index) => (
                    <div
                      key={`second-${index}`}
                      className="w-16 h-16 md:w-20 md:h-20 border-2 border-gray-300 rounded-xl p-2 hover:scale-105 transition-transform bg-white shadow-sm flex-shrink-0"
                    >
                      <img
                        src={src}
                        alt={`Skill ${index + 1}`}
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex gap-4 min-w-max">
                  {skills.map((src, index) => (
                    <div
                      key={`second-${index}`}
                      className="w-16 h-16 md:w-20 md:h-20 border-2 border-gray-300 rounded-xl p-2 hover:scale-105 transition-transform bg-white shadow-sm flex-shrink-0 "
                    >
                      <img
                        src={src}
                        alt={`Skill ${index + 1}`}
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="px-4 md:px-8 animate-in fade-in lg:px-16 py-10 md:py-16 lg:py-20 ">
        <h2 className="text-portfolio-blue text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-normal mb-2 md:mb-4 text-center lg:text-left">Portofolio</h2>
        <div className="h-1 w-32 md:w-36 lg:w-42 bg-portfolio-orange mb-8 md:mb-12 mx-auto lg:mx-0"></div>

        <div className="w-full max-w-6xl mx-auto p-4">
          {/* Desktop Grid View with Swipe */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Navigation Arrows for Desktop */}
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

              {/* Swipeable Container */}
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

              {/* Progress Indicators for Desktop */}
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
          {/* Mobile/Tablet Swipe View */}
          <div className="lg:hidden">
            <div className="relative">
              {/* Navigation Arrows */}
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

              {/* Swipe Container */}
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
                        {/* Dynamic Action Buttons (GitHub and Web icons based on available links) */}
                        <div
                          className={`absolute top-3 sm:top-4 right-3 sm:right-4 transform transition-all duration-700 ease-out ${show ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"}`}>

                          {/* Container for multiple buttons */}
                          <div className="flex gap-2">

                            {/* GitHub Button - only show if githubLink exists */}
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

                            {/* Web/Demo Button - only show if webLink or demoLink exists */}
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

                            {/* Read More Button - always show if no other buttons, or as fallback */}
                            {!project.githubLink && !project.webLink && (
                              <button onClick={onTrigger} className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 border border-orange-400/30">
                                Read More
                              </button>
                            )}

                          </div>
                        </div>

                        {/* Floating Card Overlay */}
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
              {/* Progress Indicators */}
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

              {/* Auto-play Toggle */}
              <div className="flex justify-center mt-4">
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Header */}
      <section id="blog" className="relative px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-slate-50 to-blue-50  overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center lg:text-left mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-slate-800 text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-normal   mb-3 sm:mb-4">
              <span className="bg-portfolio-blue to-slate-600 bg-clip-text text-transparent">
                My Blog Posts
              </span>
            </h2>
            <div className="h-1 w-16 sm:w-20 md:w-24 lg:w-32 xl:w-40 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 mb-4 sm:mb-5 md:mb-6 mx-auto lg:mx-0 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-300"></div>
            {/* <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Sharing my thoughts, experiences, and insights from my journey in web development and Data Science.
            </p> */}
          </div>

          {/* Blog Grid */}
          <div className="grid animate-in fade-in grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 relative z-10">
            {blogData.map((blog, index: number) => (
              <div
                key={index}
                className="group relative bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 overflow-hidden border border-orange-100/50 cursor-pointer"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={blog.src}
                    alt={blog.title}
                    className="w-full h-40 sm:h-44 md:h-48 lg:h-52 xl:h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay Gradient with Orange Tint */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-portfolio-blue/10 to-transparent opacity-0 transition-opacity duration-500"></div>

                  {/* Category Badge */}
                  <div className="absolute top-3 sm:top-4 -left-14 sm:-left-20 xl:-left-20 bg-portfolio-orange text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium transform -translate-x-16 sm:-translate-x-24 xl:group-hover:translate-x-24 group-hover:translate-x-16 transition-transform duration-500 shadow-lg">
                    {blog.category}
                  </div>

                  {/* Platform Badge */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 xl:-right-3 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm text-slate-800 px-2 sm:px-3 py-1 rounded-full text-xs font-medium shadow-lg transform translate-x-16 sm:translate-x-20 xl:group-hover:-translate-x-4 group-hover:translate-x-0 transition-transform duration-500 delay-100 border border-orange-200/50">
                    <img
                      src={blog.platformIcon}
                      alt="icon"
                      className="w-5 h-5 inline-block"
                    />
                    <span className="hidden sm:inline">{blog.platform}</span>
                  </div>

                  {/* Floating Read More Button */}
                  {/* <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 border border-orange-400/30">
                      Read More
                    </button>
                  </div> */}
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 md:p-6">
                  <div className="flex items-center justify-between mb-2 sm:mb-3 text-xs sm:text-sm text-slate-500">
                    <span className="font-medium">{blog.date}</span>
                    <span className="flex items-center gap-1 bg-portofolio-blue border border-slate-200/50 px-2 py-1 rounded-full">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-portfolio-blue" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs text-portfolio-blue">{blog.readTime}</span>
                    </span>
                  </div>

                  {/* Platform Info */}
                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <div className={`${blog.platformColor} text-white px-2 py-1 rounded-md text-xs font-medium flex items-center gap-1.5 shadow-sm`}>
                      <span>Published on {blog.platform}</span>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 sm:mb-3 group-hover:text-portfolio-orange transition-colors duration-300 line-clamp-2 leading-tight">
                    {blog.title}
                  </h3>

                  {/* Animated Progress Bar */}
                  <div className="w-full bg-orange-100 rounded-full h-1.5 mb-3 sm:mb-4 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-orange-400 via-portfolio-orange to-orange-600 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out"
                    ></div>
                  </div>

                  {/* Action Section */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-slate-500">
                      <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-green-500 rounded-full animate-pulse"></div>
                      <span className="font-medium">Published</span>
                    </div>

                    {/* View Article Button */}
                    <a href={`${blog.slug}`} className="text-slate-500 hover:text-portfolio-blue font-medium text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 flex items-center gap-1">
                      <span>View Article</span>
                      <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
                {/* Enhanced Glow Effect with Orange Tint */}
                {/* <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-orange-400/10 via-orange-300/20 to-orange-500/10 opacity-0 transition-opacity duration-500 pointer-events-none"></div> */}
              </div>
            ))}
          </div>

          {/* Load More Button with Orange Accent */}
          {/* <div className="text-center mt-8 sm:mt-10 md:mt-12 relative z-10">
            <button className="group bg-gradient-to-r from-orange-600 to-portfolio-orange text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 hover:from-orange-600 hover:to-red-600 flex items-center gap-2 mx-auto border border-orange-400/30">
              <span>View All Articles</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div> */}
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="px-4 md:px-8 lg:px-16 py-10 md:py-16 lg:py-20 bg-gradient-to-b from-blue-50 to-slate-50">
        <div className="bg-portfolio-dark rounded-t-2xl md:rounded-t-3xl p-6 md:p-12 lg:p-16 -mx-4 md:-mx-8 lg:-mx-16 -mb-10 md:-mb-16 lg:-mb-20 pb-0">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-8 lg:mb-12">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-portfolio-orange text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold italic mb-4">Contact Me!</h2>
              <p className="text-white text-lg md:text-xl lg:text-2xl italic font-medium mb-8 md:mb-12">Let's Work Together</p>

              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center justify-center lg:justify-start gap-3 md:gap-4">
                  <a href="mailto:krisnaastika71@gmail.com" target="_blank" rel="noopener noreferrer">
                    <div className="w-9 h-9 md:w-11 md:h-11 bg-gray-300 border border-black rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 md:w-7 md:h-7" viewBox="0 0 28 28" fill="none">
                        <path d="M23.3333 4.66675H4.66668C3.38334 4.66675 2.34501 5.71675 2.34501 7.00008L2.33334 21.0001C2.33334 22.2834 3.38334 23.3334 4.66668 23.3334H23.3333C24.6167 23.3334 25.6667 22.2834 25.6667 21.0001V7.00008C25.6667 5.71675 24.6167 4.66675 23.3333 4.66675ZM23.3333 9.33341L14 15.1667L4.66668 9.33341V7.00008L14 12.8334L23.3333 7.00008V9.33341Z" fill="black" />
                      </svg>
                    </div>
                  </a>
                  <span className="text-white text-sm md:text-lg lg:text-xl font-light break-all">krisnaastika71@gmail.com</span>
                </div>

                <div className="flex items-center justify-center lg:justify-start gap-3 md:gap-4">
                  <a href="https://github.com/kr1aas">
                    <div className="w-9 h-9 md:w-11 md:h-11 bg-gray-300 border border-black rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 md:w-7 md:h-7" viewBox="0 0 29 29" fill="none">
                        <path d="M8.48733 2.79113C9.39517 3.09748 10.2585 3.52247 11.055 4.05505C12.1806 3.76695 13.3381 3.62241 14.5 3.62488C15.6999 3.62488 16.8575 3.77471 17.9425 4.05384C18.7387 3.52178 19.6017 3.0972 20.509 2.79113C21.3512 2.50476 22.5511 2.04076 23.264 2.8298C23.7474 3.3663 23.8682 4.2653 23.954 4.95163C24.0507 5.71772 24.0736 6.7158 23.8199 7.70663C24.7902 8.95967 25.375 10.4544 25.375 12.0832C25.375 14.5506 24.0386 16.693 22.0605 18.1768C21.1081 18.8812 20.0524 19.4339 18.931 19.8153C19.1895 20.4074 19.3333 21.0623 19.3333 21.7499V25.3749C19.3333 25.6954 19.206 26.0027 18.9794 26.2293C18.7528 26.4559 18.4455 26.5832 18.125 26.5832H10.875C10.5545 26.5832 10.2472 26.4559 10.0206 26.2293C9.79397 26.0027 9.66666 25.6954 9.66666 25.3749V24.1774C8.5127 24.3188 7.54483 24.1931 6.72195 23.8439C5.86162 23.479 5.26228 22.9135 4.81158 22.3722C4.38383 21.8598 3.91741 20.7047 3.24316 20.4799C3.09257 20.4298 2.95333 20.3505 2.8334 20.2465C2.71346 20.1426 2.61518 20.016 2.54415 19.8741C2.40071 19.5874 2.37702 19.2555 2.47828 18.9514C2.57955 18.6473 2.79749 18.3958 3.08414 18.2524C3.3708 18.1089 3.7027 18.0852 4.00683 18.1865C4.81158 18.4548 5.33599 19.0348 5.69487 19.5012C6.27487 20.2503 6.74612 21.2291 7.66445 21.6194C8.04266 21.7801 8.59728 21.8852 9.46487 21.7668L9.66666 21.7257C9.66944 21.0682 9.80636 20.4181 10.069 19.8153C8.94755 19.4339 7.89186 18.8812 6.93945 18.1768C4.96141 16.693 3.62499 14.5518 3.62499 12.0832C3.62499 10.4568 4.20862 8.9633 5.17649 7.71146C4.92274 6.72063 4.94449 5.72013 5.04116 4.95284L5.0472 4.90692C5.13541 4.20367 5.23812 3.37596 5.73112 2.8298C6.44403 2.04076 7.64512 2.50596 8.48612 2.79234L8.48733 2.79113Z" fill="black" />
                      </svg>
                    </div>
                  </a>
                  <span className="text-white text-sm md:text-lg lg:text-xl font-light">Kr1aas</span>
                </div>

                <div className="flex items-center justify-center lg:justify-start gap-3 md:gap-4">
                  <a href="https://www.linkedin.com/in/krisna-astika-53284a22a/">
                    <div className="w-9 h-9 md:w-11 md:h-11 bg-gray-300 border border-black rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 33 33" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M24.75 4.125C25.844 4.125 26.8932 4.5596 27.6668 5.33318C28.4404 6.10677 28.875 7.15598 28.875 8.25V24.75C28.875 25.844 28.4404 26.8932 27.6668 27.6668C26.8932 28.4404 25.844 28.875 24.75 28.875H8.25C7.15598 28.875 6.10677 28.4404 5.33318 27.6668C4.5596 26.8932 4.125 25.844 4.125 24.75V8.25C4.125 7.15598 4.5596 6.10677 5.33318 5.33318C6.10677 4.5596 7.15598 4.125 8.25 4.125H24.75ZM11 13.75C10.6353 13.75 10.2856 13.8949 10.0277 14.1527C9.76987 14.4106 9.625 14.7603 9.625 15.125V22C9.625 22.3647 9.76987 22.7144 10.0277 22.9723C10.2856 23.2301 10.6353 23.375 11 23.375C11.3647 23.375 11.7144 23.2301 11.9723 22.9723C12.2301 22.7144 12.375 22.3647 12.375 22V15.125C12.375 14.7603 12.2301 14.4106 11.9723 14.1527C11.7144 13.8949 11.3647 13.75 11 13.75ZM15.125 12.375C14.7603 12.375 14.4106 12.5199 14.1527 12.7777C13.8949 13.0356 13.75 13.3853 13.75 13.75V22C13.75 22.3647 13.8949 22.7144 14.1527 22.9723C14.4106 23.2301 14.7603 23.375 15.125 23.375C15.4897 23.375 15.8394 23.2301 16.0973 22.9723C16.3551 22.7144 16.5 22.3647 16.5 22V16.9675C16.9194 16.4945 17.6275 15.939 18.4154 15.6021C18.8732 15.4069 19.5621 15.3271 20.0406 15.4784C20.1994 15.5186 20.3407 15.6094 20.4435 15.7369C20.515 15.8331 20.625 16.0476 20.625 16.5V22C20.625 22.3647 20.7699 22.7144 21.0277 22.9723C21.2856 23.2301 21.6353 23.375 22 23.375C22.3647 23.375 22.7144 23.2301 22.9723 22.9723C23.2301 22.7144 23.375 22.3647 23.375 22V16.5C23.375 15.5787 23.1413 14.7592 22.6545 14.102C22.2066 13.506 21.5797 13.069 20.8656 12.8549C19.6254 12.4657 18.2518 12.6816 17.3346 13.0749C17.041 13.2012 16.755 13.3444 16.478 13.5039C16.4204 13.1871 16.2534 12.9005 16.0061 12.6942C15.7588 12.4879 15.447 12.375 15.125 12.375ZM11 9.625C10.6353 9.625 10.2856 9.76987 10.0277 10.0277C9.76987 10.2856 9.625 10.6353 9.625 11C9.625 11.3647 9.76987 11.7144 10.0277 11.9723C10.2856 12.2301 10.6353 12.375 11 12.375C11.3647 12.375 11.7144 12.2301 11.9723 11.9723C12.2301 11.7144 12.375 11.3647 12.375 11C12.375 10.6353 12.2301 10.2856 11.9723 10.0277C11.7144 9.76987 11.3647 9.625 11 9.625Z" fill="black" />
                      </svg>
                    </div>
                  </a>
                  <span className="text-white text-sm md:text-lg lg:text-xl font-light">Krisna Astika</span>
                </div>

                <div className="flex items-center justify-center lg:justify-start gap-3 md:gap-4">
                  <a href="https://www.instagram.com/krisnaastika?igsh=bGR4Zjh5NmpsdjZt">
                    <div className="w-9 h-9 md:w-11 md:h-11 bg-gray-300 border border-black rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 md:w-6 md:h-6" viewBox="0 0 25 25" fill="none">
                        <path d="M12.5 8.33325C11.3949 8.33325 10.3351 8.77224 9.55373 9.55364C8.77233 10.335 8.33334 11.3949 8.33334 12.4999C8.33334 13.605 8.77233 14.6648 9.55373 15.4462C10.3351 16.2276 11.3949 16.6666 12.5 16.6666C13.6051 16.6666 14.6649 16.2276 15.4463 15.4462C16.2277 14.6648 16.6667 13.605 16.6667 12.4999C16.6667 11.3949 16.2277 10.335 15.4463 9.55364C14.6649 8.77224 13.6051 8.33325 12.5 8.33325Z" fill="black" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M7.5 0C5.51088 0 3.60322 0.790176 2.1967 2.1967C0.790176 3.60322 0 5.51088 0 7.5L0 17.5C0 19.4891 0.790176 21.3968 2.1967 22.8033C3.60322 24.2098 5.51088 25 7.5 25H17.5C19.4891 25 21.3968 24.2098 22.8033 22.8033C24.2098 21.3968 25 19.4891 25 17.5V7.5C25 5.51088 24.2098 3.60322 22.8033 2.1967C21.3968 0.790176 19.4891 0 17.5 0L7.5 0ZM6.66667 12.5C6.66667 10.9529 7.28125 9.46917 8.37521 8.37521C9.46917 7.28125 10.9529 6.66667 12.5 6.66667C14.0471 6.66667 15.5308 7.28125 16.6248 8.37521C17.7188 9.46917 18.3333 10.9529 18.3333 12.5C18.3333 14.0471 17.7188 15.5308 16.6248 16.6248C15.5308 17.7188 14.0471 18.3333 12.5 18.3333C10.9529 18.3333 9.46917 17.7188 8.37521 16.6248C7.28125 15.5308 6.66667 14.0471 6.66667 12.5ZM18.3333 6.66667H20V5H18.3333V6.66667Z" fill="black" />
                      </svg>
                    </div>
                  </a>
                  <span className="text-white text-sm md:text-lg lg:text-xl font-light">krisnaastika</span>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <form ref={form} onSubmit={sendEmail} className="space-y-3 md:space-y-4 mt-12">
                <div>
                  <input
                    type="text"
                    name='name'
                    placeholder="Your Name"
                    className="w-full h-10 md:h-12 border border-black rounded-lg px-3 md:px-4 bg-gray-300 text-black text-sm md:text-lg lg:text-xl italic placeholder-black"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name='email'
                    placeholder="Email address"
                    className="w-full h-10 md:h-12 border border-black rounded-lg px-3 md:px-4 bg-gray-300 text-black text-sm md:text-lg lg:text-xl italic placeholder-black"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    name='message'
                    rows={4}
                    className="w-full border border-black rounded-lg p-3 md:p-4 bg-gray-300 text-black text-sm md:text-lg lg:text-xl italic placeholder-black resize-none md:rows-6"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-orange-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg text-lg md:text-xl lg:text-2xl font-bold 
                 hover:bg-opacity-90 hover:scale-105 hover:shadow-lg
                 active:scale-95 active:bg-opacity-80
                 transition-all duration-200 ease-in-out
                 flex items-center justify-center gap-2 w-full md:w-auto
                 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-opacity-50"
                >
                  Send
                  <svg
                    className="w-4 h-4 md:w-6 md:h-6 transition-transform duration-200 ease-in-out hover:translate-x-1"
                    viewBox="0 0 27 27"
                    fill="none"
                  >
                    <path
                      d="M5.62502 13.5001L4.94552 7.38349C4.7509 5.63299 6.55315 4.34712 8.14502 5.10199L21.582 11.4672C23.2976 12.2795 23.2976 14.7207 21.582 15.533L8.14502 21.8994C6.55315 22.6531 4.7509 21.3684 4.94552 19.6179L5.62502 13.5001ZM5.62502 13.5001H13.5"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>


              </form>
            </div>
          </div>

          {/* Footer bottom */}
          <div className="border-t border-gray-600 pt-6 pb-2">
            <div className="text-center">
              <p className="text-gray-400 text-sm md:text-base">
                © 2024 Krisna Astika. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div >
  );
}
