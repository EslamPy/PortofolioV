import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { X, Calendar, MapPin, Briefcase, Building2, Award, CheckCircle2, ArrowLeft, ExternalLink } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AnimatedBackground from '../components/Background';
import { useWorkExperiences } from '../context/WorkExperienceContext';

const WorkExperienceDetailPage = () => {
  const workExperiences = useWorkExperiences();
  const { id } = useParams();
  const navigate = useNavigate();
  const [experience, setExperience] = useState(null);
  
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 800,
      mirror: true,
    });
    
    // Find the experience by ID
    if (workExperiences && workExperiences.length > 0) {
      const foundExperience = workExperiences.find((exp, index) => index.toString() === id);
      setExperience(foundExperience);
    }
  }, [id, workExperiences]);
  
  if (!experience) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Experience not found</h2>
          <button 
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-primary-500/30 text-primary-300 hover:text-white hover:border-secondary-500/50 transition-all duration-300 group shadow-glow-sm hover:shadow-glow-md hover:shadow-secondary-500/20"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030014] overflow-hidden">
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Back button */}
        <div className="mb-8" data-aos="fade-right" data-aos-duration="800">
          <button 
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-primary-500/30 text-primary-300 hover:text-white hover:border-secondary-500/50 transition-all duration-300 group shadow-glow-sm hover:shadow-glow-md hover:shadow-secondary-500/20"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </button>
        </div>
        
        {/* Main content */}
        <div className="max-w-6xl mx-auto">
          {/* Header section */}
          <div className="mb-12" data-aos="fade-down" data-aos-duration="1000">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg blur opacity-25"></div>
              <div className="relative glass-card border border-white/10 shadow-glow-md shadow-primary-500/20 rounded-2xl p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  {/* Company logo */}
                  <div className="w-24 h-24 rounded-xl overflow-hidden glass-effect p-4 flex items-center justify-center border border-white/10 shadow-glow-sm shadow-primary-500/20">
                    {experience.logo ? (
                      <img 
                        src={experience.logo} 
                        alt={`${experience.company} logo`} 
                        className="w-full h-full object-contain drop-shadow-lg"
                      />
                    ) : (
                      <Building2 className="w-12 h-12 text-primary-400 drop-shadow-lg" />
                    )}
                  </div>
                  
                  {/* Title and company */}
                  <div className="flex-1">
                    <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-primary-100 to-secondary-200 bg-clip-text text-transparent">
                      {experience.position}
                    </h1>
                    <div className="flex items-center gap-2 mt-2">
                      <Building2 className="w-5 h-5 text-secondary-400" />
                      <span className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
                        {experience.company}
                      </span>
                    </div>
                    
                    {/* Period and location */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mt-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary-400" />
                        <span className="text-gray-300">{experience.period}</span>
                      </div>
                      
                      {experience.location && (
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-secondary-400" />
                          <span className="text-gray-300">{experience.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Company website link */}
                  {experience.website && (
                    <a 
                      href={experience.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-primary-500/30 text-primary-300 hover:text-white hover:border-secondary-500/50 transition-all duration-300 group shadow-glow-sm hover:shadow-glow-md hover:shadow-secondary-500/20"
                    >
                      Visit Website
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          {/* Content sections */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description section */}
              <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 shadow-glow-sm shadow-primary-500/20">
                    <Briefcase className="w-5 h-5 text-primary-400" />
                  </div>
                  <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
                    Role Overview
                  </h2>
                </div>
                <div className="glass-card border border-white/10 shadow-glow-sm rounded-2xl p-6">
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {experience.description}
                  </p>
                </div>
              </div>
              
              {/* Responsibilities section */}
              {experience.responsibilities && experience.responsibilities.length > 0 && (
                <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 shadow-glow-sm shadow-primary-500/20">
                      <CheckCircle2 className="w-5 h-5 text-secondary-400" />
                    </div>
                    <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
                      Key Responsibilities
                    </h2>
                  </div>
                  <div className="glass-card border border-white/10 shadow-glow-sm rounded-2xl p-6">
                    <ul className="space-y-4">
                      {experience.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-4 group">
                          <div className="mt-1 p-1.5 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 group-hover:from-primary-500/40 group-hover:to-secondary-500/40 transition-all duration-300">
                            <CheckCircle2 className="w-4 h-4 text-primary-400" />
                          </div>
                          <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              
              {/* Achievements section */}
              {experience.achievements && experience.achievements.length > 0 && (
                <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 shadow-glow-sm shadow-primary-500/20">
                      <Award className="w-5 h-5 text-primary-400" />
                    </div>
                    <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
                      Key Achievements
                    </h2>
                  </div>
                  <div className="glass-card border border-white/10 shadow-glow-sm rounded-2xl p-6">
                    <ul className="space-y-4">
                      {experience.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-4 group">
                          <div className="mt-1 p-1.5 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 group-hover:from-primary-500/40 group-hover:to-secondary-500/40 transition-all duration-300">
                            <Award className="w-4 h-4 text-secondary-400" />
                          </div>
                          <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
            
            {/* Right column */}
            <div className="space-y-8">
              {/* Skills section */}
              {experience.skills && experience.skills.length > 0 && (
                <div data-aos="fade-left" data-aos-duration="800" data-aos-delay="100">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 shadow-glow-sm shadow-primary-500/20">
                      <Award className="w-5 h-5 text-secondary-400" />
                    </div>
                    <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
                      Skills & Technologies
                    </h2>
                  </div>
                  <div className="glass-card border border-white/10 shadow-glow-sm rounded-2xl p-6">
                    <div className="flex flex-wrap gap-3">
                      {experience.skills.map((skill, idx) => (
                        <span 
                          key={idx} 
                          className="px-4 py-2 text-sm rounded-full glass-effect border border-primary-500/20 text-gray-300 hover:border-secondary-500/40 hover:shadow-glow-sm hover:shadow-secondary-500/20 transition-all duration-300 transform hover:-translate-y-1"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {/* Additional decorative elements */}
              <div className="glass-card border border-white/10 shadow-glow-sm rounded-2xl p-6 relative overflow-hidden" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl opacity-20 blur-xl"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary-500/20 to-transparent rounded-bl-3xl opacity-30"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-secondary-500/20 to-transparent rounded-tr-3xl opacity-30"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 mb-4">
                    Professional Growth
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    This role has been instrumental in shaping my professional journey, providing valuable experience and opportunities for growth in the tech industry.
                  </p>
                  <div className="mt-4 h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full animate-pulse-slow" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-16 text-center" data-aos="fade-up" data-aos-duration="800">
          <div className="w-16 h-1 mx-auto rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-50"></div>
          <p className="mt-4 text-gray-400 text-sm italic">Always learning, always growing</p>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceDetailPage;