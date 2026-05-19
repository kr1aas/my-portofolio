import React from 'react';

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

const Skills: React.FC = () => {
  return (
    <section id="skills" className="px-4 md:px-8 lg:px-16 py-10 md:py-16 lg:py-20 bg-gradient-to-b from-portfolio-step1 to-[#F2F3F2]">
      <h2 className="text-portfolio-blue text-2xl md:text-3xl lg:text-4xl font-normal text-center mb-4">Skills</h2>
      <p className="text-portfolio-blue text-base md:text-lg lg:text-xl xl:text-2xl italic font-medium text-center mb-8 md:mb-12 px-4">
        Below are some of the skills I have mastered:
      </p>

      <div className="w-full py-8">
        <div className="max-w-4xl mx-auto overflow-hidden">
          <div className="relative">
            <div className="flex animate-loop-scroll gap-4">
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
  );
};

export default Skills;
