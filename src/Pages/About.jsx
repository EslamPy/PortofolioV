import React, { useEffect, memo, useMemo } from "react";
import { FileText, Code, Award, Globe, ArrowUpRight, Sparkles, UserCheck, Zap, Briefcase, GraduationCap, Star, Bookmark } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

// Memoized Components
const Header = memo(() => (
  <div className="text-center lg:mb-12 mb-6 px-[5%]">
    <div className="inline-block relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
      <div className="relative px-7">
        <div className="absolute -left-4 -top-4 w-8 h-8 border-t-2 border-l-2 border-primary-500/50"></div>
        <div className="absolute -right-4 -bottom-4 w-8 h-8 border-b-2 border-r-2 border-secondary-500/50"></div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400" 
            data-aos="zoom-in-up" 
            data-aos-duration="600">
          About Me
        </h2>
      </div>
    </div>
    <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2" 
       data-aos="zoom-in-up" 
       data-aos-duration="800">
      <Sparkles className="w-5 h-5 text-primary-400 animate-pulse-slow"/>
      <span className="animate-shimmer bg-clip-text text-transparent bg-[linear-gradient(110deg,#fff,45%,#94a3b8,55%,#fff)] bg-[length:250%_100%]">
        Transforming ideas into digital experiences
      </span>
      <Sparkles className="w-5 h-5 text-secondary-400 animate-pulse-slow"/>
    </p>
  </div>
));

const ProfileImage = memo(() => (
  <div className="flex justify-end items-center sm:p-12 sm:py-0 sm:pb-0 p-0 py-2 pb-2">
    <div className="relative group" data-aos="fade-up" data-aos-duration="1000">
      {/* Decorative elements */}
      <div className="absolute -top-6 -right-6 w-12 h-12 text-primary-500 animate-spin-slower opacity-70 z-20">
        <Code className="w-full h-full" />
      </div>
      <div className="absolute -bottom-6 -left-6 w-12 h-12 text-secondary-500 animate-bounce-slow opacity-70 z-20">
        <Star className="w-full h-full" />
      </div>
      
      {/* Optimized gradient backgrounds with reduced complexity for mobile */}
      <div className="absolute -inset-6 opacity-30 z-0 hidden sm:block">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-primary-400 to-secondary-600 rounded-full blur-2xl animate-spin-slower"/>
        <div className="absolute inset-0 bg-gradient-to-l from-secondary-500 via-secondary-400 to-primary-600 rounded-full blur-2xl animate-pulse-slow opacity-50"/>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-600 via-blue-500 to-secondary-400 rounded-full blur-2xl animate-float opacity-50"/>
      </div>

      <div className="relative">
        <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-glow-lg shadow-primary-500/30 transform transition-all duration-700 group-hover:scale-105 glass-effect">
          <div className="absolute inset-0 border-4 border-white/10 rounded-full z-20 transition-all duration-700 group-hover:border-white/30 group-hover:scale-105"/>

          {/* Optimized overlay effects - disabled on mobile */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10 transition-opacity duration-700 group-hover:opacity-0 hidden sm:block"/>
          <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 via-transparent to-secondary-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden sm:block"/>

          <img src="/Me.png" alt="Profile" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2" loading="lazy"/>

          {/* Advanced hover effects - desktop only */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 hidden sm:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"/>
            <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/10 to-transparent transform translate-y-full group-hover:-translate-y-full transition-transform duration-1000 delay-100"/>
            <div className="absolute inset-0 rounded-full border-8 border-white/10 scale-0 group-hover:scale-100 transition-transform duration-700 animate-pulse-slow"/>
          </div>
        </div>
      </div>
    </div>
  </div>
));

const StatCard = memo(
  ({ icon: Icon, color, value, label, description, animation }) => (
    <div data-aos={animation} data-aos-duration={1300} className="relative group">
      <div className="relative z-10 glass-card rounded-2xl p-6 border border-white/5 overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-glow-md hover:shadow-primary-500/20 hover:border-white/20 h-full flex flex-col justify-between">
        <div className={`absolute -z-10 inset-0 bg-gradient-to-br ${color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>

        <div className="flex items-center justify-between mb-4">
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-primary-500/10 to-secondary-500/10 backdrop-blur-sm transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 border border-white/5 group-hover:border-white/10">
            <Icon className="w-8 h-8 text-primary-400 group-hover:text-primary-300 transition-colors duration-500"/>
          </div>
          <span className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent" 
                data-aos="fade-up-left" 
                data-aos-duration="1500" 
                data-aos-anchor-placement="top-bottom">
            {value}
          </span>
        </div>

        <div>
          <p className="text-sm uppercase tracking-wider text-gray-200 mb-2 font-medium" 
             data-aos="fade-up" 
             data-aos-duration="800" 
             data-aos-anchor-placement="top-bottom">
            {label}
          </p>
          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300" 
               data-aos="fade-up" 
               data-aos-duration="1000" 
               data-aos-anchor-placement="top-bottom">
              {description}
            </p>
            <ArrowUpRight className="w-4 h-4 text-primary-400/70 group-hover:text-primary-400 transition-colors duration-300"/>
          </div>
        </div>
      </div>
    </div>
  )
);

const AboutPage = () => {
  // Memoized calculations
  const { totalProjects, totalCertificates, YearExperience } = useMemo(() => {
    const storedProjects = JSON.parse(localStorage.getItem("projects") || "[]");
    const storedCertificates = JSON.parse(localStorage.getItem("certificates") || "[]");
    
    const startDate = new Date("2021-11-06");
    const today = new Date();
    const experience = today.getFullYear() - startDate.getFullYear() -
      (today < new Date(today.getFullYear(), startDate.getMonth(), startDate.getDate()) ? 1 : 0);

    return {
      totalProjects: storedProjects.length,
      totalCertificates: storedCertificates.length,
      YearExperience: experience
    };
  }, []);

  // Optimized AOS initialization
  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        once: false,
        mirror: true,
        duration: 1000,
        easing: "ease-out-cubic",
      });
    };

    initAOS();
    
    // Debounced resize handler
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(initAOS, 250);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  // Floating particle component
  const FloatingParticle = memo(({ icon: Icon, color, size, position, delay, duration }) => (
    <div 
      className={`absolute ${position} ${size} text-${color} opacity-20 animate-float`} 
      style={{ animationDelay: `${delay}s`, animationDuration: `${duration}s` }}>
      <Icon className="w-full h-full" />
    </div>
  ));

  // Memoized stats data
  const statsData = useMemo(() => [
    {
      icon: Code,
      color: "from-primary-600 to-primary-400",
      value: totalProjects,
      label: "Total Projects",
      description: "Innovative web solutions crafted",
      animation: "fade-right",
    },
    {
      icon: Award,
      color: "from-primary-500 to-secondary-500",
      value: totalCertificates,
      label: "Certificates",
      description: "Professional skills validated",
      animation: "fade-up",
    },
    {
      icon: Briefcase,
      color: "from-secondary-600 to-secondary-400",
      value: YearExperience,
      label: "Years of Experience",
      description: "Continuous learning journey",
      animation: "fade-left",
    },
  ], [totalProjects, totalCertificates, YearExperience]);

  return (
    <section className="h-auto pb-[10%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mt-10 sm-mt-0 relative" id="About">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-900/20 rounded-full filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-900/20 rounded-full filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating tech icons */}
        <FloatingParticle icon={Code} color="primary-400" size="w-16 h-16" position="top-[15%] right-[10%]" delay={0} duration={8} />
        <FloatingParticle icon={GraduationCap} color="secondary-400" size="w-12 h-12" position="bottom-[20%] left-[15%]" delay={2} duration={10} />
        <FloatingParticle icon={Star} color="primary-300" size="w-8 h-8" position="top-[40%] left-[8%]" delay={1.5} duration={7} />
        <FloatingParticle icon={Bookmark} color="secondary-300" size="w-10 h-10" position="bottom-[30%] right-[12%]" delay={3} duration={9} />
      </div>
      
      <Header/>

      <div className="w-full mx-auto pt-8 sm:pt-12 relative">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg blur opacity-25"></div>
              <h2 className="relative text-3xl sm:text-4xl lg:text-5xl font-bold" data-aos="fade-right" data-aos-duration="1000">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 animate-pulse-slow">
                  Hello, my name is
                </span>
                <span className="block mt-2 text-gray-200" data-aos="fade-right" data-aos-duration="1300">
                  {" "}
                  Islam Hani
                </span>
              </h2>
            </div>

            <div className="glass-effect-dark p-6 rounded-xl border border-white/5 relative group hover:border-white/10 transition-all duration-500">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed text-justify pb-4 sm:pb-0" data-aos="fade-right" data-aos-duration="1500">
                  A passionate Software Engineer driven by innovation, crafting seamless experiences in Front-End, Back-End Engineering.
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-4 lg:px-0 w-full">
              <a href="https://1drv.ms/b/c/7088139028eec7a8/ERWmARPxKYRGgTBhFycHdMoBEIwwfo6IuXEPAbjJVPOpiw?e=aICOIj" className="w-full lg:w-auto">
                <button data-aos="fade-up" data-aos-duration="800" className="w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 shadow-glow-md hover:shadow-primary-500/30 group">
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce-slow"/> Download CV
                </button>
              </a>

              <a href="#Portofolio" className="w-full lg:w-auto">
                <button data-aos="fade-up" data-aos-duration="1000" className="w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg glass-effect border border-white/10 text-white font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 hover:border-white/20 hover:shadow-glow-sm hover:shadow-secondary-500/20 group">
                  <Code className="w-4 h-4 sm:w-5 sm:h-5 text-secondary-400 group-hover:animate-spin-slower"/> View Projects
                </button>
              </a>
            </div>
          </div>
          
          <ProfileImage/>
        </div>

        <a href="#Portofolio">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 cursor-pointer">
            {statsData.map((stat) => (
              <StatCard key={stat.label} {...stat}/>
            ))}
          </div>
        </a>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes spin-slower {
          to {
            transform: rotate(360deg);
          }
        }
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
        .animate-pulse-slow {
          animation: pulse 3s infinite;
        }
        .animate-spin-slower {
          animation: spin-slower 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default memo(AboutPage);
