import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data';
import { Mail, FileText } from 'lucide-react';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "I Build Web Apps | Train ML Models | Solve Problems";

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(typing);
      }
    }, 100);
    return () => clearInterval(typing);
  }, []);

  return (
    <section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center transition-colors duration-300">
      
      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Text Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold font-script text-text-main uppercase tracking-wide mb-4"
          >
            {portfolioData.personalInfo.name.toUpperCase()}
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-primary font-medium mb-8 h-8"
          >
            {text}<span className="typing-cursor text-text-main">|</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center md:justify-start gap-6 mb-10"
          >
            <a href={`mailto:${portfolioData.personalInfo.email}`} className="text-text-muted hover:text-text-main transition-colors">
              <Mail size={32} />
            </a>
            <a href={portfolioData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-main transition-colors">
              <GithubIcon />
            </a>
            <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-main transition-colors">
              <LinkedinIcon />
            </a>
            <a href="#projects" className="text-text-muted hover:text-text-main transition-colors">
              <FileText size={32} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg text-text-muted italic max-w-xl mx-auto md:mx-0 border-l-4 border-primary pl-4"
          >
            {portfolioData.personalInfo.quote}
          </motion.div>
        </div>

        {/* Right Side: Image Blob */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, type: "spring" }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-primary/20 blob-shape transform scale-105 z-0"></div>
            <img 
              src={portfolioData.personalInfo.avatar} 
              alt={portfolioData.personalInfo.name} 
              className="absolute inset-0 w-full h-full object-cover blob-shape shadow-xl z-10 border border-card-border"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
