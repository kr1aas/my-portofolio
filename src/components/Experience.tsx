import React from 'react';

const experiences = [
  {
    role: "Junior Web Developer",
    company: "Bali Gatra Komunikasi",
    period: "2025 - 2026",
    description: "Developing and maintaining web applications, collaborating with the team to deliver high-quality digital solutions for clients.",
    tech: ["Laravel", "PHP", "MySQL", "JavaScript"]
  },
  {
    role: "Web Developer (Magang)",
    company: "PUPR Bina Marga",
    period: "Agu 2024 - Feb 2025",
    description: "Developed and maintained web-based systems for road infrastructure management. Built administrative applications to streamline data recording and document generation.",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap"]
  },
  {
    role: "Data Scientist (Studi Independent)",
    company: "Bisa AI",
    period: "Feb 2024 - Jul 2024",
    description: "Completed an independent study program focused on data science. Worked on machine learning projects including spatial regression, image classification, and loan data analysis.",
    tech: ["Python", "TensorFlow", "Scikit-learn", "Pandas"]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="px-4 md:px-8 lg:px-16 py-10 md:py-16 lg:py-20 bg-gradient-to-b from-portfolio-gray to-white">
      <h2 className="text-portfolio-blue text-2xl md:text-3xl lg:text-4xl font-normal mb-2 md:mb-4 text-center lg:text-left">Experience</h2>
      <div className="h-1 w-32 md:w-40 lg:w-44 bg-portfolio-orange mb-8 md:mb-12 mx-auto lg:mx-0"></div>

      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-portfolio-orange md:-translate-x-px"></div>

        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row items-start mb-10 md:mb-14 last:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
          >
            <div className="hidden md:block md:w-[35%]"></div>

            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-portfolio-orange rounded-full border-4 border-white shadow-md md:-translate-x-2 z-10 mt-1.5"></div>

            <div className={`ml-10 md:ml-0 md:w-[65%] md:px-8 ${index % 2 === 0 ? 'md:translate-x-32' : 'md:-translate-x-32'}`}>
              <div className="bg-white rounded-xl shadow-lg p-5 md:p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-xs font-bold text-portfolio-orange bg-orange-50 px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-portfolio-blue mb-1">{exp.role}</h3>
                <p className="text-sm md:text-base text-gray-500 italic font-medium mb-3">{exp.company}</p>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-3">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span key={tech} className="text-xs font-medium text-portfolio-blue bg-blue-50 px-2.5 py-1 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
