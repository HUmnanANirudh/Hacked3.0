import React, { useEffect, useRef, useState } from 'react';
import { Download } from 'lucide-react';


const HeroVideoPlayer = ({ 
  videoTitle = "Hacked 3.0 Promotional Video",
  videoDescription = "Welcome to Hacked 3.0 - Where ideas come to life through code. Join our hackathon event at BML Munjal University.",
}) => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(true); // Set to true by default
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (videoRef.current) {
            videoRef.current.play();
          }
        } else {
          if (videoRef.current) {
            videoRef.current.pause();
          }
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    const videoElement = videoRef.current;
    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      setIsMuted((prev) => !prev);
      videoRef.current.muted = !videoRef.current.muted;
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/pdf/Brochure.pdf';
    link.download = 'Hacked3.0_Brochure.pdf';
    link.setAttribute('rel', 'noopener noreferrer');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const videoSrc = "/assets/video/trailervid.webm";

  return (
    <>
      

      <section 
        className="relative w-full h-screen overflow-hidden"
        aria-label="Hero Section"
      >
        {/* Overlay gradient */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60 z-[1]" 
          aria-hidden="true"
        />
        
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          loop
          muted={isMuted}
          className="w-full h-full object-cover"
          onLoadedData={() => setIsVideoLoaded(true)}
          title={videoTitle}
          aria-label={videoDescription}
          playsInline
        >
          <track kind="captions" />
          Your browser does not support the video tag.
        </video>

        {/* Download Button */}
        <div className="absolute top-6 right-6 z-[51]">
          <button 
            onClick={handleDownload}
            className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/30 rounded-lg backdrop-blur-sm transition-all duration-300"
            aria-label="Download Brochure"
          >
            <Download className="w-4 h-4 text-white" aria-hidden="true" />
            <span className="text-white text-sm font-medium">Brochure</span>
          </button>
        </div>

        {/* Main content */}
        <div 
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-[30] transition-all duration-1000 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h1 className="m-0 flex flex-row items-center justify-center whitespace-nowrap">
            <div className="flex flex-wrap justify-center items-center text-center">
              <span className="text-4xl font-sans font-semibold tracking-wider mr-5">
                Welcome to
              </span>
              <span className="text-5xl font-serif font-semibold tracking-wider bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text transform leading-relaxed pb-1 w-full md:w-auto">
                Hacked 3.0
              </span>
            </div>
          </h1>
          
          <p className="mt-4 text-lg text-gray-200 opacity-90">
            Where ideas come to life through code
          </p>

          <a 
            href='https://unstop.com/p/hacked-30-bml-munjal-university-bmu-gurgaon-1360097'
            className="inline-block"
            rel="noopener noreferrer"
            aria-label="Register for Hacked 3.0"
          >
            <button className="mt-6 px-8 py-3 text-base font-bold text-white bg-gradient-to-r from-indigo-900/60 to-gray-900/60 border border-white/50 rounded-full cursor-pointer transition-all duration-300 backdrop-blur-md hover:scale-105 hover:from-indigo-800/70 hover:to-gray-800/70">
              Register Now
            </button>
          </a>
        </div>

        {/* Sound control */}
        <button 
          className="absolute bottom-8 right-8 w-12 h-12 bg-black/50 rounded-full flex justify-center items-center cursor-pointer z-[60] transition-all duration-300 hover:bg-black/70"
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          <i 
            className={`fas ${isMuted ? 'fa-volume-mute' : 'fa-volume-up'} text-white text-xl transition-all duration-300`}
            aria-hidden="true"
          />
        </button>

        {/* Bottom gradient */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent z-[2]"
          aria-hidden="true"
        />
      </section>
    </>
  );
};

export default HeroVideoPlayer;