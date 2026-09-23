import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-light transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header like in the screenshot with a book icon */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="p-3 bg-card rounded-xl border border-card-border shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-text-main">Education</h2>
        </motion.div>

        <div className="relative border-l border-card-border ml-6 pb-4">
          {portfolioData.education.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-12 ml-8 relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[2.35rem] top-1.5 w-3 h-3 bg-primary rounded-full ring-4 ring-light"></div>
              
              <h3 className="text-xl font-bold text-text-main mb-1">{edu.institution}</h3>
              <p className="text-primary font-semibold mb-2">{edu.period}</p>
              <p className="text-text-muted mb-1">{edu.degree}</p>
              <p className="text-text-muted font-medium">{edu.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
