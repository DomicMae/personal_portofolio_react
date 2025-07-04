import React, { useEffect, useState } from "react";

export function BackgroundBeamsWithCollision({ children }) {
  const [meteorCount, setMeteorCount] = useState(20);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
      setMeteorCount(8); // mobile
    } else if (screenWidth <= 1024) {
      setMeteorCount(15); // tablet
    } else {
      setMeteorCount(20); // desktop
    }
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-neutral-950 overflow-hidden flex items-center justify-center">
      {/* Beam Circle - Efek Glow */}
      <div
        className="absolute w-[500px] h-[500px] bg-gradient-to-br from-fuchsia-500 via-indigo-500 to-blue-500
  blur-[150px] opacity-30 mix-blend-lighten rounded-full top-1/2 right-1 md:right-1/4 -translate-y-1/2"
      />
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(meteorCount)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 bg-gradient-to-b from-transparent to-white animate-meteor-vertical blur-sm"
            style={{
              height: `${50 + Math.random() * 100}px`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              top: "-150px",
              opacity: 0.2 + Math.random() * 0.3,
            }}
          />
        ))}
      </div>

      {/* Optional beam stripes or glow ring */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-pink-900/5 z-0" />

      {/* Konten Utama */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
