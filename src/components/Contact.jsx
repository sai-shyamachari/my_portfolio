import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data';
import { Mail, Phone } from 'lucide-react';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-dark mb-4">Get In Touch</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          <motion.a 
            href={`mailto:${portfolioData.personalInfo.email}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 bg-card px-8 py-4 rounded-2xl border border-card-border shadow-sm hover:border-primary/50 transition-colors w-full md:w-auto"
          >
            <div className="bg-primary/10 p-3 rounded-full text-primary">
              <Mail size={24} />
            </div>
            <div>
              <div className="text-sm text-text-muted font-medium">Email</div>
              <div className="text-dark font-semibold">{portfolioData.personalInfo.email}</div>
            </div>
          </motion.a>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4 bg-card px-8 py-4 rounded-2xl border border-card-border shadow-sm hover:border-primary/50 transition-colors w-full md:w-auto"
          >
            <div className="bg-green-500/10 p-3 rounded-full text-green-500">
              <Phone size={24} />
            </div>
            <div>
              <div className="text-sm text-text-muted font-medium">Phone</div>
              <div className="text-dark font-semibold">{portfolioData.personalInfo.phone}</div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-6 mt-12"
        >
          <a href={portfolioData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <span className="sr-only">GitHub</span>
            <GithubIcon />
          </a>
          <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
            <span className="sr-only">LinkedIn</span>
            <LinkedinIcon />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
