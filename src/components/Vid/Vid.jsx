import React, { useEffect, useRef, useState } from 'react';
import { Download } from 'lucide-react';

const HeroVideoPlayer = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play();
          } else {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      setIsMuted((prev) => !prev);
      videoRef.current.muted = !videoRef.current.muted;
    }
  };

  const videoSrc = "/assets/video/trailervid.webm";

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60 z-[1]" />
      
      <video
        ref={videoRef}
        src={videoSrc}
        autoPlay
        loop
        muted={isMuted}
        className="w-full h-full object-cover"
      >
        Your browser does not support the video tag.
      </video>

      {/* Download Button */}
      <div className="absolute top-6 right-6 z-20">
        <button className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/30 rounded-lg backdrop-blur-sm transition-all duration-300">
          <Download className="w-4 h-4 text-white" />
          <span className="text-white text-sm font-medium">Brochure</span>
        </button>
      </div>

      {/* Main content */}
      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className="m-0 flex flex-row items-center justify-center whitespace-nowrap">
          <span className="text-4xl font-sans font-semibold tracking-wider mr-5">
            Welcome to
          </span>
          <span className="text-5xl font-serif font-semibold tracking-wider bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text transform leading-relaxed pb-1">
            Hacked 3.0
          </span>
        </h1>
        
        <p className="mt-4 text-lg text-gray-200 opacity-90">
          Where ideas come to life through code
        </p>

        <button className="mt-6 px-8 py-3 text-base font-bold text-white bg-gradient-to-r from-indigo-900/60 to-gray-900/60 border border-white/50 rounded-full cursor-pointer transition-all duration-300 backdrop-blur-md hover:scale-105 hover:from-indigo-800/70 hover:to-gray-800/70">
          Register Now
        </button>
      </div>

      {/* Sound control */}
      <div 
        className="absolute bottom-8 right-8 w-12 h-12 bg-black/50 rounded-full flex justify-center items-center cursor-pointer z-20 transition-all duration-300 hover:bg-black/70"
        onClick={toggleMute}
      >
        <i className={`fas ${isMuted ? 'fa-volume-mute' : 'fa-volume-up'} text-white text-xl transition-all duration-300`} />
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent z-[2]" />
    </section>
  );
};

export default HeroVideoPlayer;