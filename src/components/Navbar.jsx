import React, { useState, useEffect } from "react";
import { Menu, X, Home, User, Code, Mail, Github, Linkedin, Instagram } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("Home");
    
    const navItems = [
        { href: "#Home", label: "Home", icon: Home },
        { href: "#About", label: "About", icon: User },
        { href: "#Portofolio", label: "Portfolio", icon: Code },
        { href: "#Contact", label: "Contact", icon: Mail },
    ];
    
    const socialLinks = [
        // { href: "https://github.com/EslamPy", icon: Github, label: "GitHub" },
        // { href: "https://www.linkedin.com/in/eslamdev/", icon: Linkedin, label: "LinkedIn" },
        // { href: "https://www.instagram.com/eslam.py", icon: Instagram, label: "Instagram" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            const sections = navItems.map(item => {
                const section = document.querySelector(item.href);
                if (section) {
                    return {
                        id: item.href.replace("#", ""),
                        offset: section.offsetTop - 550,
                        height: section.offsetHeight
                    };
                }
                return null;
            }).filter(Boolean);

            const currentPosition = window.scrollY;
            const active = sections.find(section => 
                currentPosition >= section.offset && 
                currentPosition < section.offset + section.height
            );

            if (active) {
                setActiveSection(active.id);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const section = document.querySelector(href);
        if (section) {
            const top = section.offsetTop - 100;
            window.scrollTo({
                top: top,
                behavior: "smooth"
            });
        }
        setIsOpen(false);
    };

    return (
        <nav
            className={`fixed w-full top-0 z-50 transition-all duration-500 ${
                isOpen
                    ? "bg-dark-300/95 backdrop-blur-lg"
                    : scrolled
                    ? "bg-dark-300/50 backdrop-blur-lg"
                    : "bg-transparent"
            }`}
        >
            <div className="mx-auto px-[5%] sm:px-[5%] lg:px-[10%]">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 relative group">
                        <div className="absolute -inset-2 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <a href="#Home" onClick={(e) => scrollToSection(e, "#Home")} className="text-xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent relative z-10 transition-all duration-300 group-hover:tracking-wider">Islam Hani</a>
                    </div>
        
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center">
                        <div className="glass-effect rounded-full px-2 py-1 mr-6">
                            <div className="flex items-center space-x-1">
                                {navItems.map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        onClick={(e) => scrollToSection(e, item.href)}
                                        className={`group relative flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                                            activeSection === item.href.substring(1)
                                                ? "bg-gradient-to-r from-primary-500/20 to-secondary-500/20 text-white shadow-glow-sm"
                                                : "text-gray-300 hover:bg-white/5"
                                        }`}
                                    >
                                        <item.icon className={`w-4 h-4 ${activeSection === item.href.substring(1) ? "text-primary-400" : "text-gray-400 group-hover:text-primary-400"} transition-colors duration-300`} />
                                        <span className="relative">
                                            {item.label}
                                            {activeSection === item.href.substring(1) && (
                                                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full animate-pulse-slow"></span>
                                            )}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                        
                        {/* Social Links */}
                        <div className="flex items-center space-x-2">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative p-2 rounded-full transition-all duration-300 hover:bg-white/5"
                                    aria-label={link.label}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 to-secondary-500/0 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                                    <link.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                                </a>
                            ))}
                        </div>
                    </div>
        
                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="relative p-2 rounded-full bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        
            {/* Mobile Menu */}
            <div
                className={`md:hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
            >
                <div className="px-6 py-8 space-y-6 glass-effect-dark mx-4 my-2 rounded-2xl">
                    <div className="space-y-4">
                        {navItems.map((item, index) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={(e) => scrollToSection(e, item.href)}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                                    activeSection === item.href.substring(1)
                                        ? "bg-gradient-to-r from-primary-500/20 to-secondary-500/20 text-white shadow-glow-sm"
                                        : "text-gray-300 hover:bg-white/5"
                                }`}
                                style={{
                                    transitionDelay: `${index * 100}ms`,
                                    transform: isOpen ? "translateY(0)" : "translateY(20px)",
                                    opacity: isOpen ? 1 : 0,
                                }}
                            >
                                <item.icon className={`w-5 h-5 ${activeSection === item.href.substring(1) ? "text-primary-400" : "text-gray-400"}`} />
                                {item.label}
                            </a>
                        ))}
                    </div>
                    
                    {/* Mobile Social Links */}
                    <div className="pt-4 border-t border-white/10">
                        <p className="text-sm text-gray-400 mb-3">Connect with me</p>
                        <div className="flex items-center space-x-4">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300"
                                    aria-label={link.label}
                                >
                                    <link.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;