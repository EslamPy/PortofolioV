import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, Code, Sparkles, Github } from 'lucide-react';

const CardProject = ({ Img, Title, Description, Link: ProjectLink, id }) => {
  // Handle kasus ketika ProjectLink kosong
  const handleLiveDemo = (e) => {
    if (!ProjectLink) {
      console.log("ProjectLink kosong");
      e.preventDefault();
      alert("Live demo link is not available");
    }
  };
  
  const handleDetails = (e) => {
    if (!id) {
      console.log("ID kosong");
      e.preventDefault();
      alert("Project details are not available");
    }
  };
  

  return (
    <div className="group relative w-full">
      {/* Decorative elements */}
      <div className="absolute -top-2 -left-2 w-6 h-6 text-primary-400 animate-pulse-slow opacity-70 z-10">
        <Code className="w-full h-full" />
      </div>
      <div className="absolute -bottom-2 -right-2 w-6 h-6 text-secondary-400 animate-spin-slower opacity-70 z-10">
        <Sparkles className="w-full h-full" />
      </div>
            
      <div className="relative overflow-hidden rounded-xl glass-card border border-white/5 shadow-glow-sm hover:shadow-glow-md hover:shadow-primary-500/20 transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-secondary-500/10 to-secondary-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
    
        <div className="relative p-5 z-10">
          <div className="relative overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10"></div>
            <img
              src={Img}
              alt={Title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          <div className="mt-4 space-y-3">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-primary-200 via-white to-secondary-200 bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%] group-hover:bg-[length:100%_100%] transition-all duration-500">
              {Title}
            </h3>
            
            <p className="text-gray-300 text-sm leading-relaxed line-clamp-2 glass-effect-dark p-3 rounded-lg">
              {Description}
            </p>
            
            <div className="pt-4 flex items-center justify-between">
              {ProjectLink ? (
                <a
                href={ProjectLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLiveDemo}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-effect border border-primary-500/30 text-primary-300 hover:text-white hover:border-secondary-500/50 transition-all duration-300 group/link shadow-glow-sm hover:shadow-glow-md hover:shadow-primary-500/20 text-sm"
                >
                  <span className="font-medium">Live Demo</span>
                  <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              ) : (
                <span className="text-gray-500 text-sm glass-effect-dark px-3 py-1.5 rounded-full">Demo Not Available</span>
              )}
              
              {id ? (
                <Link
                  to={`/project/${id}`}
                  onClick={handleDetails}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-secondary-500/30 text-secondary-300 hover:text-white hover:border-primary-500/50 transition-all duration-300 group/details shadow-glow-sm hover:shadow-glow-md hover:shadow-secondary-500/20 text-sm"
                >
                  <span className="font-medium">Details</span>
                  <ArrowRight className="w-4 h-4 group-hover/details:translate-x-1 transition-transform" />
                </Link>
              ) : (
                <span className="text-gray-500 text-sm glass-effect-dark px-3 py-1.5 rounded-full">Details Not Available</span>
              )}
            </div>
          </div>
          
          <div className="absolute inset-0 border border-white/0 group-hover:border-gradient-to-r from-primary-500/30 to-secondary-500/30 rounded-xl transition-colors duration-300 -z-50"></div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;