import React from 'react';
import { motion } from 'framer-motion';

const SpaceLoader = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-900 z-50">
      {/* Stars background - Adjusted number of stars for smaller screens */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 md:w-1 md:h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main loader container - Responsive sizing */}
      <div className="relative scale-75 md:scale-100">
        {/* Outer orbit ring */}
        <motion.div 
          className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border border-purple-500/30"
          animate={{ rotate: 360 }}
          transition={{
            duration: 8,
            ease: "linear",
            repeat: Infinity
          }}
        >
          {/* Orbiting planet - Adjusted size */}
          <motion.div
            className="absolute w-3 h-3 md:w-4 md:h-4 rounded-full bg-purple-400"
            style={{
              top: '-6px',
              left: 'calc(50% - 6px)',
              boxShadow: '0 0 20px rgba(167,139,250,0.5)'
            }}
          />
        </motion.div>

        {/* Middle ring - Responsive sizing */}
        <motion.div 
          className="absolute top-1/2 left-1/2 w-20 h-20 sm:w-22 sm:h-22 md:w-24 md:h-24 -translate-x-1/2 -translate-y-1/2 rounded-full border-2"
          style={{
            borderImage: 'linear-gradient(90deg, rgba(49,46,129,0.8), rgba(17,24,39,0.8)) 1',
          }}
          animate={{ rotate: -360 }}
          transition={{
            duration: 6,
            ease: "linear",
            repeat: Infinity
          }}
        />

        {/* Core planet - Responsive sizing */}
        <motion.div 
          className="absolute top-1/2 left-1/2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background: 'linear-gradient(90deg, rgba(49,46,129,0.9) 0%, rgba(17,24,39,0.9) 100%)',
            boxShadow: '0 0 30px rgba(49,46,129,0.4)'
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity
          }}
        />

        {/* Inner glow - Responsive sizing */}
        <motion.div 
          className="absolute top-1/2 left-1/2 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/20"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity
          }}
        />
      </div>

      {/* Loading text - Responsive text sizes */}
      <motion.div 
        className="mt-8 md:mt-12 text-center px-4"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity
        }}
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-indigo-600 bg-clip-text text-transparent">
          HACKED 3.0
        </h2>
        <div className="text-sm sm:text-base md:text-lg text-purple-300/80 mt-2">
          Initializing hackathon...
        </div>
      </motion.div>
    </div>
  );
};

export default SpaceLoader;