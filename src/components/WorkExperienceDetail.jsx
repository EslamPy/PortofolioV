import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { X, Calendar, MapPin, Briefcase, Building2, Award, CheckCircle2 } from 'lucide-react';

const WorkExperienceDetail = ({ experience, onClose }) => {
  const modalRef = useRef(null);
  
  useEffect(() => {
    console.log('WorkExperienceDetail rendered with experience:', experience);
    
    // Focus the modal when it opens for accessibility
    if (modalRef.current) {
      modalRef.current.focus();
    }
    
    // Add event listener for escape key
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        console.log('Escape key pressed, closing modal');
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    // Clean up event listener
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [experience, onClose]);
  
  if (!experience) {
    console.log('WorkExperienceDetail received null experience');
    return null;
  }

  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop with blur effect */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={(e) => {
          console.log('Modal backdrop clicked');
          e.stopPropagation();
          onClose();
        }}
      ></div>
      
      {/* Modal content */}
      <div 
        ref={modalRef}
        tabIndex="-1"
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl glass-card border border-white/10 shadow-glow-md shadow-primary-500/20 z-[9999]"
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-secondary-500/5 to-secondary-400/5 rounded-2xl"></div>
        
        {/* Glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl opacity-20 blur-xl"></div>
        
        {/* Corner decorations */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary-500/20 to-transparent rounded-bl-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-secondary-500/20 to-transparent rounded-tr-3xl opacity-30"></div>
        
        <div className="relative z-10 p-6 md:p-8">
          {/* Header with close button */}
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden glass-effect p-3 flex items-center justify-center border border-white/10 shadow-glow-sm shadow-primary-500/20">
                {experience.logo ? (
                  <img 
                    src={experience.logo} 
                    alt={`${experience.company} logo`} 
                    className="w-full h-full object-contain drop-shadow-lg"
                  />
                ) : (
                  <Building2 className="w-10 h-10 text-primary-400 drop-shadow-lg" />
                )}
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-primary-100 to-secondary-200 bg-clip-text text-transparent">
                  {experience.position}
                </h2>
                <div className="flex items-center gap-2 mt-1">
                  <Building2 className="w-4 h-4 text-secondary-400" />
                  <span className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
                    {experience.company}
                  </span>
                </div>
              </div>
            </div>
            <button 
              onClick={(e) => {
                console.log('Modal close button clicked');
                onClose();
              }}
              className="p-2 rounded-full glass-effect border border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-glow-sm hover:shadow-primary-500/20"
            >
              <X className="w-5 h-5 text-gray-300" />
            </button>
          </div>
          
          {/* Content */}
          <div className="space-y-8">
            {/* Basic info section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 glass-effect-dark p-4 rounded-xl border border-white/5">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 p-1.5 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 shadow-glow-sm shadow-primary-500/20">
                  <Calendar className="w-4 h-4 text-primary-400" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-400">Period</h3>
                  <p className="text-white">{experience.period}</p>
                </div>
              </div>
              
              {experience.location && (
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 p-1.5 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 shadow-glow-sm shadow-primary-500/20">
                    <MapPin className="w-4 h-4 text-secondary-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-400">Location</h3>
                    <p className="text-white">{experience.location}</p>
                  </div>
                </div>
              )}
            </div>
            
            {/* Description section */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Briefcase className="w-5 h-5 text-primary-400" />
                <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
                  Role Overview
                </h3>
              </div>
              <div className="glass-effect-dark p-4 rounded-xl border border-white/5">
                <p className="text-gray-300 leading-relaxed">
                  {experience.description}
                </p>
              </div>
            </div>
            
            {/* Responsibilities section - This would be a new field to add to the experience data */}
            {experience.responsibilities && experience.responsibilities.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary-400" />
                  <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
                    Key Responsibilities
                  </h3>
                </div>
                <div className="glass-effect-dark p-4 rounded-xl border border-white/5">
                  <ul className="space-y-3">
                    {experience.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-1 p-1 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary-400" />
                        </div>
                        <span className="text-gray-300">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            
            {/* Achievements section - This would be a new field to add to the experience data */}
            {experience.achievements && experience.achievements.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-5 h-5 text-primary-400" />
                  <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
                    Key Achievements
                  </h3>
                </div>
                <div className="glass-effect-dark p-4 rounded-xl border border-white/5">
                  <ul className="space-y-3">
                    {experience.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-1 p-1 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20">
                          <Award className="w-3.5 h-3.5 text-secondary-400" />
                        </div>
                        <span className="text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            
            {/* Skills section */}
            {experience.skills && experience.skills.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-5 h-5 text-secondary-400" />
                  <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
                    Skills & Technologies
                  </h3>
                </div>
                <div className="glass-effect-dark p-4 rounded-xl border border-white/5">
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1.5 text-sm rounded-full glass-effect border border-primary-500/20 text-gray-300 hover:border-secondary-500/40 hover:shadow-glow-sm hover:shadow-secondary-500/20 transition-all duration-300 transform hover:-translate-y-0.5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {/* Company website link - at the bottom */}
            {experience.website && (
              <div className="pt-2 flex justify-center">
                <a 
                  href={experience.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full glass-effect border border-primary-500/30 text-primary-300 hover:text-white hover:border-secondary-500/50 transition-all duration-300 group shadow-glow-sm hover:shadow-glow-md hover:shadow-secondary-500/20"
                >
                  Visit Company Website
                  <Building2 className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
  
  return ReactDOM.createPortal(modalContent, document.body);
};

export default WorkExperienceDetail;