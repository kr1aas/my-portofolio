import React from 'react';

type Variant = "hero" | "about" | "default";
type Circle = {
  size: string;
  position: string;
  delay: `${number}s` | `${number}ms`;
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
            filter: 'blur(8px)'
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedCircles;
