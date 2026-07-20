import React from 'react';

const particles = [
  { x: '10%', y: '20%', size: 2, delay: 0, duration: 8 },
  { x: '25%', y: '60%', size: 1.5, delay: 1.5, duration: 10 },
  { x: '40%', y: '15%', size: 2.5, delay: 3, duration: 9 },
  { x: '55%', y: '75%', size: 1.5, delay: 0.5, duration: 11 },
  { x: '70%', y: '30%', size: 2, delay: 2, duration: 8.5 },
  { x: '85%', y: '55%', size: 1.5, delay: 4, duration: 10.5 },
  { x: '15%', y: '80%', size: 2, delay: 1, duration: 9.5 },
  { x: '60%', y: '45%', size: 1, delay: 2.5, duration: 12 },
  { x: '35%', y: '90%', size: 1.5, delay: 3.5, duration: 8 },
  { x: '80%', y: '10%', size: 2, delay: 0.8, duration: 11 },
  { x: '45%', y: '35%', size: 1, delay: 4.5, duration: 10 },
  { x: '90%', y: '70%', size: 1.5, delay: 1.2, duration: 9 },
];

export default function PixelParticles() {
  return (
    <div className='absolute inset-0 overflow-hidden pointer-events-none' aria-hidden='true'>
      {particles.map((p, i) => (
        <div
          key={i}
          className='absolute rounded-full bg-blue-400/30 animate-pixel-float'
          style={{
            left: p.x,
            top: p.y,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
