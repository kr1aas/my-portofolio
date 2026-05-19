import React, { useState } from 'react';

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

const Blog: React.FC = () => {
  const [, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="blog" className="relative px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-slate-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center lg:text-left mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-slate-800 text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-normal mb-3 sm:mb-4">
            <span className="bg-portfolio-blue to-slate-600 bg-clip-text text-transparent">
              My Blog Posts
            </span>
          </h2>
          <div className="h-1 w-16 sm:w-20 md:w-24 lg:w-32 xl:w-40 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 mb-4 sm:mb-5 md:mb-6 mx-auto lg:mx-0 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-300"></div>
        </div>

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
              <div className="relative overflow-hidden">
                <img
                  src={blog.src}
                  alt={blog.title}
                  className="w-full h-40 sm:h-44 md:h-48 lg:h-52 xl:h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-portfolio-blue/10 to-transparent opacity-0 transition-opacity duration-500"></div>

                <div className="absolute top-3 sm:top-4 -left-14 sm:-left-20 xl:-left-20 bg-portfolio-orange text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium transform -translate-x-16 sm:-translate-x-24 xl:group-hover:translate-x-24 group-hover:translate-x-16 transition-transform duration-500 shadow-lg">
                  {blog.category}
                </div>

                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 xl:-right-3 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm text-slate-800 px-2 sm:px-3 py-1 rounded-full text-xs font-medium shadow-lg transform translate-x-16 sm:translate-x-20 xl:group-hover:-translate-x-4 group-hover:translate-x-0 transition-transform duration-500 delay-100 border border-orange-200/50">
                  <img
                    src={blog.platformIcon}
                    alt="icon"
                    className="w-5 h-5 inline-block"
                  />
                  <span className="hidden sm:inline">{blog.platform}</span>
                </div>
              </div>

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

                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <div className={`${blog.platformColor} text-white px-2 py-1 rounded-md text-xs font-medium flex items-center gap-1.5 shadow-sm`}>
                    <span>Published on {blog.platform}</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 sm:mb-3 group-hover:text-portfolio-orange transition-colors duration-300 line-clamp-2 leading-tight">
                  {blog.title}
                </h3>

                <div className="w-full bg-orange-100 rounded-full h-1.5 mb-3 sm:mb-4 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-orange-400 via-portfolio-orange to-orange-600 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out"
                  ></div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-slate-500">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-green-500 rounded-full animate-pulse"></div>
                    <span className="font-medium">Published</span>
                  </div>

                  <a href={`${blog.slug}`} className="text-slate-500 hover:text-portfolio-blue font-medium text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 flex items-center gap-1">
                    <span>View Article</span>
                    <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
