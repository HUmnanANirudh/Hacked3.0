import React, { useEffect, useRef, useState } from 'react';

const HeroVideoPlayer = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play(); // Play video when visible
          } else {
            videoRef.current.pause(); // Pause video when not visible
          }
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    // Cleanup observer when component unmounts
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
    <section style={styles.heroSection}>
      <video
        ref={videoRef}
        src={videoSrc}
        autoPlay
        loop
        muted={isMuted}
        style={styles.video}
      >
        Your browser does not support the video tag.
      </video>
      <div style={styles.overlay}>
        <h1 style={styles.heroText}>Welcome to Hacked 3.0</h1>
        
        <button style={styles.registerButton}>Register Now</button>
      </div>
      <div style={styles.audioToggle} onClick={toggleMute}>
        <i
          className={`fas ${isMuted ? 'fa-volume-mute' : 'fa-volume-up'}`}
          style={styles.audioIcon}
        />
      </div>
    </section>
  );
};

const styles = {
  heroSection: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
  },
  video: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#fff',
    textAlign: 'center',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)',
    zIndex: 1,
  },
  heroText: {
    fontSize: '3rem',
    fontWeight: 'bold',
    margin: '0',
  },
  subText: {
    fontSize: '1.5rem',
    marginTop: '10px',
  },
  registerButton: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#fff',
    background: 'linear-gradient(90deg, rgba(49,46,129,0.6) 0%, rgba(17,24,39,0.6) 100%)',
    border: '1px solid rgba(255, 255, 255, 0.5)',
    borderRadius: '25px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(8px)',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)',
  },
  audioToggle: {
    position: 'absolute',
    bottom: '20px',
    right: '20px',
    width: '50px',
    height: '50px',
    background: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    zIndex: 2,
    transition: 'all 0.3s ease',
  },
  audioIcon: {
    color: '#fff',
    fontSize: '20px',
    transition: 'all 0.3s ease',
  },
};

export default HeroVideoPlayer;
