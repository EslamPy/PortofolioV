import React, { useState, useEffect, useCallback, memo, useRef } from "react"
import { Github, Linkedin, Mail, ExternalLink, Instagram, Sparkles, Code, ArrowRight, ChevronRight, Star, Zap } from "lucide-react"
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Memoized Components
const StatusBadge = memo(() => (
  <div className="inline-block animate-float lg:mx-0" data-aos="zoom-in" data-aos-delay="400">
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full blur opacity-30 group-hover:opacity-70 transition duration-1000"></div>
      <div className="relative px-3 sm:px-4 py-2 rounded-full glass-effect border border-white/10 group-hover:border-white/20 transition-all duration-500">
        <span className="bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text sm:text-sm text-[0.7rem] font-medium flex items-center">
          <Sparkles className="sm:w-4 sm:h-4 w-3 h-3 mr-2 text-primary-400 animate-pulse-slow" />
          <span className="animate-shimmer bg-clip-text text-transparent bg-[linear-gradient(110deg,#fff,45%,#94a3b8,55%,#fff)] bg-[length:250%_100%]">Ready to Innovate</span>
        </span>
      </div>
    </div>
  </div>
));

const MainTitle = memo(() => (
  <div className="space-y-2" data-aos="fade-up" data-aos-delay="600">
    <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight">
      <div className="relative inline-block">
        <span className="absolute -inset-2 bg-gradient-to-r from-primary-600 to-secondary-600 blur-2xl opacity-20"></span>
        <span className="relative bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
          Software
        </span>
        <div className="absolute -top-6 -right-6 w-12 h-12 text-primary-500 animate-spin-slower opacity-70">
          <Code className="w-full h-full" />
        </div>
      </div>
      <br />
      <div className="relative inline-block mt-2">
        <span className="absolute -inset-2 bg-gradient-to-r from-primary-600 to-secondary-600 blur-2xl opacity-20"></span>
        <span className="relative bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
          Engineer
        </span>
        <div className="absolute -bottom-2 -right-8 text-secondary-500 animate-bounce-slow opacity-70">
          <Star className="w-8 h-8" />
        </div>
      </div>
    </h1>
  </div>
));

const TechStack = memo(({ tech }) => (
  <div className="px-4 py-2 hidden sm:flex items-center gap-2 rounded-full glass-effect-dark border border-white/5 text-sm text-gray-300 hover:border-white/20 hover:shadow-glow-sm hover:shadow-primary-500/20 transition-all duration-500 group">
    <Code className="w-3.5 h-3.5 text-primary-400 group-hover:text-primary-300 transition-colors" />
    <span className="group-hover:text-white transition-colors">{tech}</span>
  </div>
));

const CTAButton = memo(({ href, text, icon: Icon, primary = true }) => (
  <a href={href}>
    <button className="group relative w-[160px]">
      {primary ? (
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl opacity-70 blur-md group-hover:opacity-100 transition-all duration-700"></div>
      ) : (
        <div className="absolute -inset-0.5 bg-white/5 rounded-xl opacity-70 blur-sm group-hover:opacity-100 transition-all duration-700"></div>
      )}
      <div className={`relative h-12 ${primary ? 'glass-effect' : 'glass-effect-dark'} rounded-lg border ${primary ? 'border-white/10' : 'border-white/5'} leading-none overflow-hidden`}>
        <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-primary-500/20 to-secondary-500/20"></div>
        <span className="absolute inset-0 flex items-center justify-center gap-2 text-sm group-hover:gap-3 transition-all duration-300">
          <span className={`${primary ? 'text-white' : 'text-gray-300'} group-hover:text-white font-medium z-10 transition-colors`}>
            {text}
          </span>
          <Icon className={`w-4 h-4 ${primary ? 'text-gray-200' : 'text-gray-400'} group-hover:text-white ${text === 'Contact' ? 'group-hover:translate-x-1' : 'group-hover:rotate-45'} transform transition-all duration-300 z-10`} />
        </span>
      </div>
    </button>
  </a>
));

const SocialLink = memo(({ icon: Icon, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <button className="group relative p-3">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl blur opacity-20 group-hover:opacity-50 transition duration-300"></div>
      <div className="relative rounded-xl glass-effect-dark p-2 flex items-center justify-center border border-white/5 group-hover:border-white/20 group-hover:shadow-glow-sm group-hover:shadow-primary-500/30 transition-all duration-300">
        <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
      </div>
    </button>
  </a>
));

const ScrollIndicator = memo(() => {
  return (
    <div className="hidden lg:flex flex-col items-center gap-2 absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-slow">
      <div className="text-gray-400 text-sm font-light">Scroll Down</div>
      <div className="w-6 h-10 rounded-full border-2 border-gray-500 flex justify-center p-1">
        <div className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-slide-down"></div>
      </div>
    </div>
  );
});

const FloatingParticle = memo(({ delay, size, left, top, color }) => (
  <div 
    className={`absolute rounded-full animate-float opacity-70 ${size === 'sm' ? 'w-1 h-1' : size === 'md' ? 'w-2 h-2' : 'w-3 h-3'}`}
    style={{
      left: `${left}%`,
      top: `${top}%`,
      backgroundColor: color,
      animationDelay: `${delay}s`,
    }}
  />
));

// Constants
const TYPING_SPEED = 100;
const ERASING_SPEED = 50;
const PAUSE_DURATION = 2000;
const WORDS = ["Full Stack & Economic Student", "Tech Enthusiast"];
const TECH_STACK = ["React", "PHP", "Java", "C"];
const SOCIAL_LINKS = [
  { icon: Github, link: "https://github.com/EslamPy" },
  { icon: Linkedin, link: "https://www.linkedin.com/in/eslamdev/" },
  { icon: Instagram, link: "https://www.instagram.com/eslam.py" },
];

// Floating particles configuration
const PARTICLES = [
  { size: 'sm', left: 15, top: 20, color: '#0ea5e9', delay: 0 },
  { size: 'md', left: 25, top: 60, color: '#10b981', delay: 1.5 },
  { size: 'lg', left: 80, top: 30, color: '#0ea5e9', delay: 3 },
  { size: 'sm', left: 70, top: 70, color: '#10b981', delay: 2 },
  { size: 'md', left: 5, top: 40, color: '#0ea5e9', delay: 2.5 },
  { size: 'sm', left: 90, top: 10, color: '#10b981', delay: 1 },
];

const Home = () => {
  const [text, setText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const containerRef = useRef(null);

  // Optimize AOS initialization
  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        once: true,
        offset: 10,
        duration: 800,
        easing: 'ease-out-cubic',
      });
    };

    initAOS();
    window.addEventListener('resize', initAOS);
    return () => window.removeEventListener('resize', initAOS);
  }, []);

  useEffect(() => {
    setIsLoaded(true);
    return () => setIsLoaded(false);
  }, []);

  // Optimize typing effect
  const handleTyping = useCallback(() => {
    if (isTyping) {
      if (charIndex < WORDS[wordIndex].length) {
        setText(prev => prev + WORDS[wordIndex][charIndex]);
        setCharIndex(prev => prev + 1);
      } else {
        setTimeout(() => setIsTyping(false), PAUSE_DURATION);
      }
    } else {
      if (charIndex > 0) {
        setText(prev => prev.slice(0, -1));
        setCharIndex(prev => prev - 1);
      } else {
        setWordIndex(prev => (prev + 1) % WORDS.length);
        setIsTyping(true);
      }
    }
  }, [charIndex, isTyping, wordIndex]);

  useEffect(() => {
    const timeout = setTimeout(
      handleTyping,
      isTyping ? TYPING_SPEED : ERASING_SPEED
    );
    return () => clearTimeout(timeout);
  }, [handleTyping]);

  // Lottie configuration
  const lottieOptions = {
    src: "https://lottie.host/58753882-bb6a-49f5-a2c0-950eda1e135a/NLbpVqGegK.lottie",
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
      progressiveLoad: true,
    },
    style: { width: "100%", height: "100%" },
    className: `w-full h-full transition-all duration-500 ${
      isHovering 
        ? "scale-[180%] sm:scale-[160%] md:scale-[150%] lg:scale-[145%] rotate-2" 
        : "scale-[175%] sm:scale-[155%] md:scale-[145%] lg:scale-[140%]"
    }`
  };

  return (
    <div className="min-h-screen bg-[#030014] overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] " id="Home">
      {/* Floating particles */}
      {PARTICLES.map((particle, index) => (
        <FloatingParticle key={index} {...particle} />
      ))}
      
      <div className={`relative z-10 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <div className="container mx-auto min-h-screen">
          <div className="flex flex-col lg:flex-row items-center justify-center h-screen md:justify-between gap-0 sm:gap-12 lg:gap-20">
            {/* Left Column */}
            <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 text-left lg:text-left order-1 lg:order-1 lg:mt-0"
              data-aos="fade-right"
              data-aos-delay="200">
              <div className="space-y-4 sm:space-y-6">
                <StatusBadge />
                <MainTitle />

                {/* Typing Effect */}
                <div className="h-8 flex items-center" data-aos="fade-up" data-aos-delay="800">
                  <span className="text-xl md:text-2xl bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent font-light">
                    {text}
                  </span>
                  <span className="w-[3px] h-6 bg-gradient-to-t from-primary-500 to-secondary-500 ml-1 animate-blink"></span>
                </div>

                {/* Description */}
                <div className="relative" data-aos="fade-up" data-aos-delay="1000">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full"></div>
                  <p className="text-base md:text-lg text-gray-300 max-w-xl leading-relaxed font-light pl-4">
                    <span className="text-white font-medium">🚀 Full Stack Developer</span> | <span className="text-white font-medium">🌐 Web Enthusiast</span> | <span className="text-white font-medium">💻 Open Source Contributor</span>
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 justify-start" data-aos="fade-up" data-aos-delay="1200">
                  {TECH_STACK.map((tech, index) => (
                    <TechStack key={index} tech={tech} />
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-row gap-4 w-full justify-start" data-aos="fade-up" data-aos-delay="1400">
                  <CTAButton href="#Portofolio" text="Projects" icon={ExternalLink} primary={true} />
                  <CTAButton href="#Contact" text="Contact" icon={Mail} primary={false} />
                </div>

                {/* Social Links */}
                <div className="hidden sm:flex gap-4 justify-start" data-aos="fade-up" data-aos-delay="1600">
                  {SOCIAL_LINKS.map((social, index) => (
                    <SocialLink key={index} {...social} />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Modern 3D Code Visualization */}
            <div className="w-full py-[10%] sm:py-0 lg:w-1/2 h-auto lg:h-[600px] xl:h-[750px] relative flex items-center justify-center order-2 lg:order-2 mt-8 lg:mt-0"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              data-aos="fade-left"
              data-aos-delay="600">
              <div className="relative w-full opacity-90">
                {/* Decorative corner elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 border-t-2 border-r-2 border-primary-500/30 rounded-tr-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b-2 border-l-2 border-secondary-500/30 rounded-bl-xl"></div>
                
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-primary-600/10 to-secondary-600/10 rounded-3xl blur-3xl transition-all duration-700 ease-in-out ${
                  isHovering ? "opacity-70 scale-105" : "opacity-30 scale-100"
                }`}>
                </div>

                {/* Main visualization container with glass effect */}
                <div className={`relative lg:left-12 z-10 w-full opacity-90 transform transition-transform duration-500 ${
                  isHovering ? "scale-105" : "scale-100"
                }`}>
                  {/* 3D Code Visualization */}
                  <div className="relative w-full h-full min-h-[300px] overflow-hidden">
                    {/* Floating code elements */}
                    <div className="absolute top-[10%] left-[5%] glass-effect-dark p-3 rounded-lg border border-primary-500/20 transform rotate-[-5deg] animate-float" style={{animationDelay: '0.5s'}}>
                      <Code className="w-6 h-6 text-primary-400" />
                    </div>
                    <div className="absolute top-[30%] right-[15%] glass-effect-dark p-3 rounded-lg border border-secondary-500/20 transform rotate-[8deg] animate-float" style={{animationDelay: '1.2s'}}>
                      <Zap className="w-6 h-6 text-secondary-400" />
                    </div>
                    <div className="absolute bottom-[20%] left-[20%] glass-effect-dark p-3 rounded-lg border border-primary-500/20 transform rotate-[-8deg] animate-float" style={{animationDelay: '0.8s'}}>
                      <Star className="w-6 h-6 text-primary-400" />
                    </div>
                    
                    {/* Central code block */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] glass-card p-4 border border-white/10 shadow-glow-md shadow-primary-500/20">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                        <div className="ml-2 text-xs text-gray-400 font-mono">Code.jsx</div>
                      </div>
                      <div className="font-mono text-xs sm:text-sm text-gray-300 space-y-1">
                        <div className="flex">
                          <span className="text-gray-500 w-5">1</span>
                          <span className="text-primary-400">import</span>
                          <span className="text-white"> React </span>
                          <span className="text-primary-400">from</span>
                          <span className="text-secondary-400"> 'react'</span>
                        </div>
                        <div className="flex">
                          <span className="text-gray-500 w-5">2</span>
                          <span></span>
                        </div>
                        <div className="flex">
                          <span className="text-gray-500 w-5">3</span>
                          <span className="text-primary-400">const</span>
                          <span className="text-blue-400"> Portfolio </span>
                          <span className="text-white">= () </span>
                          <span className="text-primary-400">= </span>
                          <span className="text-white">&#123;</span>
                        </div>
                        <div className="flex">
                          <span className="text-gray-500 w-5">4</span>
                          <span className="pl-4 text-primary-400">return</span>
                          <span className="text-white"> (</span>
                        </div>
                        <div className="flex">
                          <span className="text-gray-500 w-5">5</span>
                          <span className="pl-6 text-blue-300">&lt;div</span>
                          <span className="text-primary-300"> className</span>
                          <span className="text-white">=</span>
                          <span className="text-secondary-400">"portfolio"</span>
                          <span className="text-blue-300">&gt;</span>
                        </div>
                        <div className="flex">
                          <span className="text-gray-500 w-5">6</span>
                          <span className="pl-8 text-gray-300">// Your amazing code here</span>
                        </div>
                        <div className="flex">
                          <span className="text-gray-500 w-5">7</span>
                          <span className="pl-6 text-blue-300">&lt;/div&gt;</span>
                        </div>
                        <div className="flex">
                          <span className="text-gray-500 w-5">8</span>
                          <span className="pl-4 text-white">)</span>
                        </div>
                        <div className="flex">
                          <span className="text-gray-500 w-5">9</span>
                          <span className="text-white">&#125;</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Animated particles */}
                    <div className="absolute top-[15%] right-[10%] w-2 h-2 rounded-full bg-primary-400 animate-pulse-slow"></div>
                    <div className="absolute bottom-[25%] right-[25%] w-2 h-2 rounded-full bg-secondary-400 animate-pulse-slow" style={{animationDelay: '1s'}}></div>
                    <div className="absolute top-[40%] left-[10%] w-2 h-2 rounded-full bg-primary-400 animate-pulse-slow" style={{animationDelay: '0.5s'}}></div>
                    
                    {/* Connection lines */}
                    <div className="absolute top-[20%] left-[30%] w-[20%] h-[1px] bg-gradient-to-r from-primary-500/50 to-transparent transform rotate-[30deg]"></div>
                    <div className="absolute top-[60%] right-[20%] w-[25%] h-[1px] bg-gradient-to-l from-secondary-500/50 to-transparent transform rotate-[-20deg]"></div>
                  </div>
                </div>

                <div className={`absolute inset-0 pointer-events-none transition-all duration-700 ${
                  isHovering ? "opacity-50" : "opacity-20"
                }`}>
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-indigo-500/10 to-purple-500/10 blur-3xl animate-[pulse_6s_cubic-bezier(0.4,0,0.6,1)_infinite] transition-all duration-700 ${
                    isHovering ? "scale-110" : "scale-100"
                  }`}>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Home);