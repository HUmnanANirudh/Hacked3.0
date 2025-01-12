import React, { useState, useRef } from "react";
import "./PastSponsors.css"

function PastSponsors() {
  const logos = [
    "/assets/images/image3.webp",
    "/assets/images/coding.webp",
    "/assets/images/aws.webp",
    "/assets/images/jetbrains.webp",
    "/assets/images/bugsee.webp",
    "/assets/images/hackster.webp",
    "/assets/images/xyz.webp",
    "/assets/images/inkmonk.webp",
    "/assets/images/advantEdge.webp",
    "/assets/images/balsamiq.webp",
    "/assets/images/znetlive.webp",
    "/assets/images/codechef.webp",
  ];

  const colors = ["#00FFFF", "#7FFFD4", "#1E90FF"]; 
  const [particles, setParticles] = useState(
    Array.from({ length: logos.length }, () => []) 
  );
  const [hoverActive, setHoverActive] = useState(Array(logos.length).fill(false));
  const cardRefs = useRef([]);

  const handleMouseMove = (index, e) => {
    if (!hoverActive[index]) return;

    const card = cardRefs.current[index];
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const particleCount = 200; 
    const spotlightRadius = 150; 

    const newParticles = Array.from({ length: particleCount }).map(() => {
      const angle = Math.random() * 2 * Math.PI; 
      const radius = Math.random() * spotlightRadius; 

      return {
        x: mouseX + radius * Math.cos(angle),
        y: mouseY + radius * Math.sin(angle),
        size: Math.random() * 3 + 2, 
        opacity: Math.random() * 0.6 + 0.4, 
        color: colors[Math.floor(Math.random() * colors.length)], 
        duration: Math.random() * 1.5 + 0.5, 
      };
    });

    setParticles((prev) =>
      prev.map((particleList, i) => (i === index ? newParticles : particleList))
    );
  };

  const handleMouseEnter = (index) =>
    setHoverActive((prev) => prev.map((state, i) => (i === index ? true : state)));
  const handleMouseLeave = (index) => {
    setHoverActive((prev) => prev.map((state, i) => (i === index ? false : state)));
    setParticles((prev) => prev.map((_, i) => (i === index ? [] : prev[i])));
  };

  return (
    <section className="past-sponsors">
      <h2>PAST SPONSORS</h2>
      <div className="sponsor-cards">
        {logos.map((logo, index) => (
          <div
            className="sponsor-card"
            key={index}
            onMouseMove={(e) => handleMouseMove(index, e)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <div className="particles">
              {particles[index].map((particle, idx) => (
                <div
                  key={idx}
                  className="particle"
                  style={{
                    top: `${particle.y}px`,
                    left: `${particle.x}px`,
                    width: `${particle.size}px`,
                    height: `${particle.size}px`,
                    backgroundColor: particle.color,
                    opacity: particle.opacity,
                    animationDuration: `${particle.duration}s`,
                  }}
                ></div>
              ))}
            </div>
            <div className="content">
              <img
                src={logo} 
                alt={`Sponsor Logo ${index + 1}`}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PastSponsors;
