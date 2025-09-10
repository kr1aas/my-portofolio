

import { Wrench, AlertTriangle } from 'lucide-react';

function UnderConstruction({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4" style={{ backgroundColor: '#F2F3F2' }}>
      {/* Main Container */}
      <div className="max-w-2xl w-full text-center">
        {/* Animated Icon Section */}
        <div className="mb-8">
          <div className="relative inline-flex items-center justify-center">
            {/* Main Circle with Pulse Animation */}
            <div
              className="w-32 h-32 rounded-full flex items-center justify-center shadow-lg animate-pulse"
              style={{ backgroundColor: '#E6813E' }}
            >
              {/* Rotating Wrench */}
              <div className="animate-spin" style={{ animationDuration: '3s' }}>
                <Wrench className="w-16 h-16 text-white" />
              </div>
            </div>

            {/* Bouncing Alert Icon */}
            <div
              className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center animate-bounce"
              style={{ backgroundColor: '#45577B' }}
            >
              <AlertTriangle className="w-4 h-4 text-white" />
            </div>

            {/* Ripple Effect */}
            <div
              className="absolute inset-0 w-32 h-32 rounded-full border-4 opacity-30 animate-ping"
              style={{ borderColor: '#E6813E' }}
            ></div>
          </div>
        </div>

        {/* Main Heading with Fade Animation */}
        <div className="animate-fade-in">
          <h1
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{ color: '#46434E' }}
          >
            Under Construction
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl mb-8 opacity-80"
            style={{ color: '#45577B' }}
          >
            We working hard to bring you something amazing!
          </p>
        </div>

        {/* Description */}
        <div
          className="bg-white p-6 rounded-lg shadow-md mb-8 border-l-4 animate-slide-up"
          style={{ borderLeftColor: '#E6813E' }}
        >
          <p
            className="text-lg leading-relaxed"
            style={{ color: '#46434E' }}
          >
            🤫 This project is still cooking.
            Give us a little time — soon it’ll be ready to serve! 🍳
          </p>
        </div>

        {/* Status Cards with Staggered Animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div
              className="w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center"
              style={{ backgroundColor: '#E6813E' }}
            >
              <span className="text-white font-bold">1</span>
            </div>
            <h3 className="font-semibold mb-1" style={{ color: '#46434E' }}>Planning</h3>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="h-2 rounded-full animate-progress"
                style={{ backgroundColor: '#E6813E' }}
              ></div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div
              className="w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center"
              style={{ backgroundColor: '#E6813E' }}
            >
              <span className="text-white font-bold">2</span>
            </div>
            <h3 className="font-semibold mb-1" style={{ color: '#46434E' }}>Development</h3>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="h-2 rounded-full animate-progress"
                style={{ backgroundColor: '#E6813E', animationDelay: '0.5s' }}
              ></div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div
              className="w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center border-2"
              style={{ borderColor: '#E6813E', color: '#E6813E' }}
            >
              <span className="font-bold">3</span>
            </div>
            <h3 className="font-semibold mb-1" style={{ color: '#46434E' }}>Launch</h3>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="h-2 rounded-full animate-progress"
                style={{ backgroundColor: '#E6813E', animationDelay: '1s' }}
              ></div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            onClick={onBack}
            className="px-6 py-3 rounded-lg font-semibold shadow-md transition-transform transform hover:scale-105"
            style={{
              backgroundColor: '#E6813E',
              color: 'white'
            }}
          >
            ← Back to Landing Page
          </button>
        </div>
      </div>
    </div>
  );
}

export default UnderConstruction;