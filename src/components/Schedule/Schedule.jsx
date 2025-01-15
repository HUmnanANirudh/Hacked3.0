import React, { useState } from 'react';

const Schedule = () => {
  const [activeDay, setActiveDay] = useState(1);

  return (
    <section className="schedule flex justify-center items-center flex-col bg-[#090a37] py-8" id="Schedule">
      <div className="text-4xl text-center font-bold text-white mb-8">SCHEDULE</div>
      
      {/* Day selector - only visible on mobile and tablet */}
      <div className="md:hidden w-[90%] max-w-md mb-6">
        <div 
          className="flex rounded-full p-1 shadow-lg border border-white/5"
          style={{
            background: 'linear-gradient(90deg, rgba(49,46,129,0.6) 0%, rgba(17,24,39,0.6) 100%)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <button
            onClick={() => setActiveDay(1)}
            className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-all duration-300 ${
              activeDay === 1 
                ? 'bg-white/10 text-purple-400' 
                : 'text-white/90 hover:text-white'
            }`}
          >
            Day 1
          </button>
          <button
            onClick={() => setActiveDay(2)}
            className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-all duration-300 ${
              activeDay === 2 
                ? 'bg-white/10 text-purple-400' 
                : 'text-white/90 hover:text-white'
            }`}
          >
            Day 2
          </button>
        </div>
      </div>

      {/* Schedule images */}
      <div className="w-full max-w-6xl px-4">
        {/* Mobile/Tablet View */}
        <div className="md:hidden">
          <img 
            src={`/assets/images/Day${activeDay}.png`}
            alt={`Day ${activeDay} Schedule`}
            className="w-full h-auto"
          />
        </div>
        
        {/* Desktop View */}
        <div className="hidden md:block">
          <img 
            src="/assets/images/timeline.png" 
            alt="Complete Schedule"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Schedule;