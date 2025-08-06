import React from 'react';
import { Code, Sparkles } from 'lucide-react';

const TechStackIcon = ({ TechStackIcon, Language }) => {
  return (
    <div className="group p-6 rounded-2xl glass-card border border-white/5 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer shadow-glow-sm hover:shadow-glow-md hover:shadow-primary-500/20">
      {/* Decorative elements */}
      <div className="absolute -top-1 -right-1 w-4 h-4 text-primary-400 animate-pulse-slow opacity-0 group-hover:opacity-70 transition-opacity duration-300">
        <Code className="w-full h-full" />
      </div>
      <div className="absolute -bottom-1 -left-1 w-4 h-4 text-secondary-400 animate-spin-slower opacity-0 group-hover:opacity-70 transition-opacity duration-300">
        <Sparkles className="w-full h-full" />
      </div>
      
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
        <img 
          src={TechStackIcon} 
          alt={`${Language} icon`} 
          className="relative h-16 w-16 md:h-20 md:w-20 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
        />
      </div>
      <span className="text-gray-300 font-semibold text-sm md:text-base tracking-wide group-hover:text-white transition-colors duration-300 bg-gradient-to-r from-primary-200 to-secondary-200 bg-clip-text group-hover:text-transparent">
        {Language}
      </span>
    </div>
  );
};

export default TechStackIcon;