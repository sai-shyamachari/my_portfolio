import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const links = ['About', 'Education', 'Projects', 'Contact'];
  const [activeLink, setActiveLink] = useState('');
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial theme
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map(link => document.getElementById(link.toLowerCase()));
      const scrollPos = window.scrollY + 100;
      
      sections.forEach((sec, i) => {
        if (sec && sec.offsetTop <= scrollPos && (sec.offsetTop + sec.offsetHeight) > scrollPos) {
          setActiveLink(links[i]);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [links]);

  return (
    <nav className="fixed w-full bg-light/90 backdrop-blur-md z-50 border-b border-card-border py-2 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.a 
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold font-script text-text-main hover:text-primary transition-colors"
          >
            &lt; Sai Shyam Achari /&gt;
          </motion.a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#" 
              className={`text-sm font-medium transition-colors ${activeLink === '' ? 'text-primary border-b-2 border-primary pb-1' : 'text-text-muted hover:text-primary'}`}
              onClick={() => setActiveLink('')}
            >
              Home
            </a>
            {links.map((link, index) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`text-sm font-medium transition-all ${
                  activeLink === link 
                    ? 'text-primary border-b-2 border-primary pb-1' 
                    : 'text-text-muted hover:text-primary'
                }`}
              >
                {link}
              </motion.a>
            ))}
            
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-card-border transition-colors text-text-main"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
