import React from 'react';
import { portfolioData } from '../data';

const Footer = () => {
  return (
    <footer className="bg-card py-8 text-center border-t border-card-border">
      <p className="text-text-muted text-sm">
        © {new Date().getFullYear()} {portfolioData.personalInfo.name}. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
