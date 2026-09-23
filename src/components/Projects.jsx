import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data';
import { Code } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-dark mb-4">Featured Projects</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-light rounded-2xl p-6 border border-card-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
            >
              <div className="text-sm font-semibold text-primary mb-3">
                {project.type}
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">{project.title}</h3>
              <p className="text-text-muted mb-6 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="text-xs px-2 py-1 bg-card border border-card-border rounded text-gray-400 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-card-border">
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-medium text-text-muted hover:text-primary transition-colors"
                >
                  <Code size={18} /> Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
