import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, Calendar, ExternalLink, MapPin, Briefcase, Award, Star, Zap, Code, GraduationCap, Sparkles, Eye, ChevronRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WorkExperience = ({ experiences }) => {
  const navigate = useNavigate();
  const [activeExperience, setActiveExperience] = useState(null);
  
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1000,
      mirror: true,
      disable: 'phone'
    });
  }, []);
  
  const navigateToExperienceDetail = (experience, index) => {
    console.log('Navigating to experience detail page for:', experience.company);
    navigate(`/experience/${index}`);
  };
  
  const handleExperienceHover = (index) => {
    setActiveExperience(index);
  };

  return (
    <div className="container mx-auto px-4">
      {/* Section Header with enhanced animations */}
      <div 
        className="mb-16 text-center relative" 
        data-aos="fade-down"
        data-aos-duration="800"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000 animate-pulse-slow"></div>
        <div className="relative inline-block px-7">
          <div className="absolute -left-4 -top-4 w-8 h-8 border-t-2 border-l-2 border-primary-500/50 animate-pulse-slow"></div>
          <div className="absolute -right-4 -bottom-4 w-8 h-8 border-b-2 border-r-2 border-secondary-500/50 animate-pulse-slow"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent inline-block">
            <span className="animate-shimmer bg-clip-text text-transparent bg-[linear-gradient(110deg,#fff,45%,#94a3b8,55%,#fff)] bg-[length:250%_100%]">
              Professional Journey
            </span>
          </h2>
        </div>
        <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 animate-pulse-slow"></div>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-primary-400 animate-pulse-slow"/>
          <span className="animate-shimmer bg-clip-text text-transparent bg-[linear-gradient(110deg,#fff,45%,#94a3b8,55%,#fff)] bg-[length:250%_100%]">
            Explore my professional experience and the skills I've developed throughout my career
          </span>
          <Sparkles className="w-4 h-4 text-secondary-400 animate-pulse-slow"/>
        </p>
      </div>
      
      {/* Enhanced Timeline connector */}
      <div className="relative">
        {/* Vertical timeline line with enhanced animated gradient */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1.5 bg-gradient-to-b from-primary-500 via-primary-400 to-secondary-500 opacity-40 rounded-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-500 via-secondary-400 to-secondary-500 animate-pulse-slow opacity-70"></div>
          {/* Animated light effect moving down the timeline */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent via-white to-transparent opacity-30 animate-float" style={{animationDuration: '8s'}}></div>
        </div>
        
        <div className="grid grid-cols-1 gap-16">
          {experiences.map((experience, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={index}
                className="relative"
              >
                {/* Year badge */}
                <div 
                  className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -top-8 z-20"
                  data-aos="fade-down"
                  data-aos-duration="800"
                  data-aos-delay="100"
                >
                  <div className="px-4 py-1 rounded-full glass-effect border border-primary-500/30 text-sm font-medium text-white shadow-glow-sm shadow-primary-500/20 backdrop-blur-sm inline-flex items-center gap-1.5 hover:shadow-glow-md hover:shadow-primary-500/30 transition-all duration-500">
                    <Calendar className="w-3.5 h-3.5 text-primary-400" />
                    <span>{experience.period.split(' - ')[0]}</span>
                  </div>
                </div>
                
                {/* Timeline dot with pulse effect */}
                <div 
                  className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-10 w-7 h-7 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 shadow-glow-md shadow-primary-500/30 z-10 flex items-center justify-center"
                  data-aos="zoom-in"
                  data-aos-duration="800"
                >
                  <div className="w-3 h-3 rounded-full bg-white animate-pulse-slow absolute opacity-75"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                </div>
                
                {/* Card */}
                <div 
                  className={`relative md:w-[92%] ${isEven ? 'md:ml-auto' : 'md:mr-auto'} md:w-[92%]`}
                  data-aos={isEven ? "fade-left" : "fade-right"}
                  data-aos-duration={1000}
                  data-aos-delay={200}
                >
                  <div className="group relative overflow-hidden rounded-2xl glass-card border border-white/5 shadow-glow-sm transition-all duration-500 hover:shadow-glow-md hover:shadow-primary-500/20 hover:border-white/10 hover:-translate-y-1">
                    {/* Animated gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-secondary-500/5 to-secondary-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Glow effect on hover */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 group-hover:duration-200"></div>
                    
                    {/* Corner decorations */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary-500/20 to-transparent rounded-bl-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                    <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-secondary-500/20 to-transparent rounded-tr-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10 p-6 md:p-8">
                      <div className="flex flex-col md:flex-row gap-6">
                        {/* Company Logo with enhanced styling */}
                        <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden glass-effect p-3 flex items-center justify-center border border-white/5 group-hover:border-primary-500/30 transition-all duration-500 shadow-glow-sm hover:shadow-glow-md hover:shadow-primary-500/20 transform group-hover:rotate-3 group-hover:scale-105">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          {experience.logo ? (
                            <img 
                              src={experience.logo} 
                              alt={`${experience.company} logo`} 
                              className="w-full h-full object-contain drop-shadow-lg transform transition-transform duration-500 group-hover:scale-110"
                            />
                          ) : (
                            <Building2 className="w-12 h-12 text-primary-400 drop-shadow-lg transform transition-transform duration-500 group-hover:scale-110" />
                          )}
                        </div>
                        
                        {/* Content with enhanced styling */}
                        <div className="flex-1 space-y-4">
                          {/* Position title with icon */}
                          <div className="flex items-start gap-3">
                            <div className="mt-1 p-1.5 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 shadow-glow-sm shadow-primary-500/20">
                              <Briefcase className="w-4 h-4 text-primary-400" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white via-primary-100 to-secondary-200 bg-clip-text text-transparent group-hover:from-primary-200 group-hover:via-secondary-200 group-hover:to-secondary-300 transition-all duration-500">
                              {experience.position}
                            </h3>
                          </div>
                          
                          {/* Company name with enhanced styling */}
                          <div className="flex items-start gap-3">
                            <div className="mt-0.5 p-1.5 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 shadow-glow-sm shadow-primary-500/20">
                              <Building2 className="w-4 h-4 text-secondary-400" />
                            </div>
                            <div>
                              <span className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
                                {experience.company}
                              </span>
                              {/* Period with enhanced styling */}
                              <div className="flex items-center gap-2 mt-1 text-sm text-gray-400">
                                <Calendar className="w-3.5 h-3.5 text-primary-400" />
                                <span>{experience.period}</span>
                              </div>
                            </div>
                          </div>
                          
                          {/* Location with icon */}
                          {experience.location && (
                            <div className="flex items-start gap-3">
                              <div className="mt-0.5 p-1.5 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 shadow-glow-sm shadow-primary-500/20">
                                <MapPin className="w-4 h-4 text-secondary-400" />
                              </div>
                              <span className="text-gray-300">{experience.location}</span>
                            </div>
                          )}
                          
                          {/* Description with enhanced styling */}
                          <div className="mt-4 pl-2 border-l-2 border-gradient-to-b from-primary-500/30 to-secondary-500/30 py-1">
                            <p className="text-gray-300 text-sm md:text-base leading-relaxed pl-4 glass-effect-dark p-3 rounded-lg">
                              {experience.description}
                            </p>
                          </div>
                          
                          {/* Skills with enhanced styling */}
                          {experience.skills && experience.skills.length > 0 && (
                            <div className="pt-4">
                              <div className="flex items-center gap-2 mb-3">
                                <Award className="w-4 h-4 text-primary-400" />
                                <h4 className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Skills & Technologies</h4>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {experience.skills.map((skill, idx) => (
                                  <span 
                                    key={idx} 
                                    className="px-3 py-1.5 text-xs rounded-full glass-effect border border-primary-500/20 text-gray-300 hover:border-secondary-500/40 hover:shadow-glow-sm hover:shadow-secondary-500/20 transition-all duration-300 transform hover:-translate-y-0.5"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          {/* View Details Button with enhanced styling */}
                          <div className="pt-4">
                            <button 
                              type="button"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                console.log('View Details button clicked for:', experience.company);
                                navigateToExperienceDetail(experience, index);
                              }}
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-primary-500/30 text-sm text-primary-300 hover:text-white hover:border-secondary-500/50 transition-all duration-300 group/link shadow-glow-sm hover:shadow-glow-md hover:shadow-secondary-500/20"
                            >
                              View Details
                              <Eye className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Bottom decoration */}
      <div 
        className="mt-12 text-center" 
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="w-16 h-1 mx-auto rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-50"></div>
        <p className="mt-4 text-gray-400 text-sm italic">Always learning, always growing</p>
      </div>
      
    </div>
  );
};

export default WorkExperience;