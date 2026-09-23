import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data';

const About = () => {
  return (
    <section id="about" className="py-20 bg-card transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: About Text */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-main leading-tight">
              My name is {portfolioData.personalInfo.name} and I am a full stack developer.
            </h2>
            
            <p className="text-lg text-text-muted leading-relaxed">
              {portfolioData.personalInfo.about}
            </p>

            <div className="mt-4 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="font-bold text-text-main min-w-[80px]">Email:</span>
                <a href={`mailto:${portfolioData.personalInfo.email}`} className="text-text-muted hover:text-primary transition-colors">
                  {portfolioData.personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-text-main min-w-[80px]">From:</span>
                <span className="text-text-muted">India</span>
              </div>
            </div>

            <div className="mt-8">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-md font-bold hover:bg-primary hover:text-dark transition-all"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* Right Side: Skills */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-10"
          >
            {portfolioData.skills.map((skillGroup, index) => (
              <div key={index}>
                <h3 className="text-xl font-bold text-text-main mb-6">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-4">
                  <a href="https://skillicons.dev" target="_blank" rel="noopener noreferrer">
                    {/* Using perline=5 so they wrap nicely like the screenshot */}
                    <img 
                      src={`https://skillicons.dev/icons?i=${skillGroup.icons.join(',')}&theme=dark&perline=5`} 
                      alt={`${skillGroup.category} skills`} 
                      className="hover:scale-105 transition-transform grayscale hover:grayscale-0"
                    />
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
