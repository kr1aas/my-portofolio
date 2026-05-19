import React from 'react';

const experiences = [
  {
    role: "Junior Developer",
    company: "PT. Solution Core Dev",
    period: "Jan 2024 - Present",
    description: "Developing and maintaining web applications using React.js and Node.js. Collaborating with cross-functional teams to deliver high-quality software solutions.",
    tech: ["React", "Node.js", "TypeScript", "PostgreSQL"]
  },
  {
    role: "Data Science Intern",
    company: "Bisa AI Academy",
    period: "Jun 2024 - Sep 2024",
    description: "Worked on machine learning projects including image classification and regression modeling. Analyzed datasets and built predictive models.",
    tech: ["Python", "TensorFlow", "Scikit-learn", "Pandas"]
  },
  {
    role: "Web Developer Intern",
    company: "Bali State Polytechnic",
    period: "Jan 2023 - Jun 2023",
    description: "Built internal web applications for academic administration. Improved system efficiency through automation and modern web technologies.",
    tech: ["Laravel", "MySQL", "Bootstrap", "JavaScript"]
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
