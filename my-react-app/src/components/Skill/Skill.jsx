import React from 'react';
import './Skill.css';
const Skill = () => {
 
  return (
<div 
  style={{
    width: '250px',
    height: '250px',
    animation: 'blink 5s infinite, jump 2s infinite',
    opacity: 0.3,
    background: 'linear-gradient(103.45deg, #ffeadec4 1.14%, #ff5020c4 55.52%, #f40c0cc4 89.9%), #d9d9d9',
    filter: 'blur(60px)',
    transform: 'rotate(-90deg)',
    position: 'absolute', // Optional for positioning
    top: '50%', // Optional for centering
    left: '50%', // Optional for centering
    transform: 'translate(-50%, -50%) rotate(-90deg)', // Centering + rotation
  }}
></div>
  );
};

export default Skill;
