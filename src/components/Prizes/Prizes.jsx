import React from "react";

const Prizes = () => {
  const cards = [
    {
      id: 1,
      title: "First Prize",
      subtitle: "Grand Award",
      gradient: "rgba(23, 25, 35, 0.8), rgba(40, 44, 71, 0.8)",
      borderGlow: "#4299e1",
      imageUrl: "/assets/images/rb_3094.png",
    },
    {
      id: 2,
      title: "Second Prize",
      subtitle: "Silver Award",
      gradient: "rgba(23, 25, 35, 0.8), rgba(40, 44, 71, 0.8)",
      borderGlow: "#ec4899",
      imageUrl: "/assets/images/rb_3100.png",
    },
    {
      id: 3,
      title: "Third Prize",
      subtitle: "Bronze Award",
      gradient: "rgba(23, 25, 35, 0.8), rgba(40, 44, 71, 0.8)",
      borderGlow: "#9333ea",
      imageUrl: "/assets/images/bronze.png",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-8 p-8 bg-gray-950">
      {cards.map((card) => (
        <div
          key={card.id}
          className="group relative w-72 h-[420px] rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 ease-out"
          style={{
            background: `linear-gradient(145deg, ${card.gradient})`,
            backdropFilter: "blur(10px)",
            border: `1px solid ${card.borderGlow}40`,
            boxShadow: `0 0 20px ${card.borderGlow}20`,
          }}
        >
          {/* Enhanced top glow effect */}
          <div className="absolute inset-0">
            <div
              className="absolute inset-x-0 top-0 h-1"
              style={{
                background: `linear-gradient(90deg,
                  transparent 0%,
                  ${card.borderGlow} 30%,
                  ${card.borderGlow} 70%,
                  transparent 100%
                )`,
                filter: "blur(1px)",
                animation: "shimmer 2s infinite",
              }}
            />
            {/* Enhanced side glows */}
            <div
              className="absolute left-0 w-32 h-full"
              style={{
                background: `radial-gradient(circle at right, ${card.borderGlow}30, transparent 70%)`,
                filter: "blur(15px)",
                animation: "pulse 3s infinite",
              }}
            />
            <div
              className="absolute right-0 w-32 h-full"
              style={{
                background: `radial-gradient(circle at left, ${card.borderGlow}30, transparent 70%)`,
                filter: "blur(15px)",
                animation: "pulse 3s infinite reverse",
              }}
            />
          </div>

          <div className="relative h-full p-6 flex flex-col items-center">
            {/* Inner box with image */}
            <div className="relative flex justify-center mb-4">
              <div className="w-48 h-48 rounded-xl relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                {/* Corner glows */}
                <div
                  className="absolute top-0 left-0 w-12 h-12"
                  style={{
                    background: `radial-gradient(circle at top left, ${card.borderGlow}40, transparent)`,
                    animation: "cornerPulse 2s infinite",
                  }}
                />
                <div
                  className="absolute top-0 right-0 w-12 h-12"
                  style={{
                    background: `radial-gradient(circle at top right, ${card.borderGlow}40, transparent)`,
                    animation: "cornerPulse 2s infinite 0.5s",
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 w-12 h-12"
                  style={{
                    background: `radial-gradient(circle at bottom left, ${card.borderGlow}40, transparent)`,
                    animation: "cornerPulse 2s infinite 1s",
                  }}
                />
                <div
                  className="absolute bottom-0 right-0 w-12 h-12"
                  style={{
                    background: `radial-gradient(circle at bottom right, ${card.borderGlow}40, transparent)`,
                    animation: "cornerPulse 2s infinite 1.5s",
                  }}
                />

                {/* Border glow */}
                <div
                  className="absolute inset-0"
                  style={{
                    border: `1px solid ${card.borderGlow}60`,
                    boxShadow: `inset 0 0 10px ${card.borderGlow}30`,
                  }}
                />

                {/* Image */}
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text content with enhanced typography */}
            <h3 className="text-2xl font-bold text-white text-center tracking-wide mb-2">
              {card.title}
            </h3>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-white to-transparent my-3 opacity-30" />
            <h4 className="text-lg font-medium text-white/80 mb-3">
              {card.subtitle}
            </h4>
            <p className="text-sm text-white/60 text-center leading-relaxed">
              Experience excellence at its finest. Discover the extraordinary rewards that await.
            </p>
          </div>
        </div>
      ))}

      <style jsx>{`
        @keyframes shimmer {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }

        @keyframes cornerPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </div>
  );
};

export default Prizes;
