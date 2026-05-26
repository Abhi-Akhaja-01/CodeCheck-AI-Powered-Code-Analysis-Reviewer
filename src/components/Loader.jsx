import React from 'react';

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 w-full h-full">
      <div className="relative w-24 h-24">
        {/* Outer glowing rings */}
        <div className="absolute inset-0 rounded-full border-t-2 border-primary animate-spin"></div>
        <div className="absolute inset-2 rounded-full border-r-2 border-secondary animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        <div className="absolute inset-4 rounded-full border-b-2 border-accent animate-spin" style={{ animationDuration: '2s' }}></div>
        
        {/* Central glowing core */}
        <div className="absolute inset-0 m-auto w-4 h-4 bg-white rounded-full animate-pulse-glow shadow-[0_0_15px_rgba(255,255,255,0.8)]"></div>
        
        {/* Orbiting particle */}
        <div className="absolute top-0 left-1/2 -ml-1 w-2 h-2 bg-primary rounded-full animate-spin-slow origin-[0_48px]"></div>
      </div>
      
      <p className="mt-8 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 font-medium tracking-widest animate-pulse">
        ANALYZING CODE...
      </p>
    </div>
  );
};

export default Loader;
