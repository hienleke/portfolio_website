import React, { useState } from 'react';
import './Spark.css';

const Spark = () => {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  // Helper function to generate random positions
  const moveRandomly = () => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const randomX = Math.random() * (viewportWidth - 250); // Subtract element width
    const randomY = Math.random() * (viewportHeight - 250); // Subtract element height

    setPosition({ top: randomY, left: randomX });
  };

  // Attach interval to the window object on initialization
  if (!window.sparkInterval) {
    window.sparkInterval = setInterval(moveRandomly, 2000);
  }

  return (
    <div
      style={{
        width: '250px',
        height: '250px',
        animation: 'blink 5s infinite, jump 2s infinite',
        opacity: 0.3,
        background:
          'linear-gradient(103.45deg, #ffeadec4 1.14%, #ff5020c4 55.52%, #f40c0cc4 89.9%), #d9d9d9',
        filter: 'blur(60px)',
        transform: 'rotate(-90deg)',
        position: 'absolute',
        top: `${position.top}px`,
        left: `${position.left}px`,
        transition: 'all 1s ease-in-out',
      }}
    ></div>
  );
};

// Clear interval when not needed
window.addEventListener('beforeunload', () => {
  if (window.sparkInterval) {
    clearInterval(window.sparkInterval);
  }
});

export default Spark;
