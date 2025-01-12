import React from 'react';

const HeroVideoPlayer = () => {
  const videoSrc = "/assets/video/trailervid.webm"; // Correct path to the video

  return (
    <section style={styles.heroSection}>
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        style={styles.video}
      >
        Your browser does not support the video tag.
      </video>
      <div style={styles.overlay}>
        <h1 style={styles.heroText}>Welcome to Hacked 3.0</h1>
        
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
};

export default HeroVideoPlayer;
