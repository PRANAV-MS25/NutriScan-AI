import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#080b10] border-t border-gray-800/80 text-gray-400 py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand Info */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🥑</span>
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Foodie AI
            </span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Your intelligent culinary & nutrition companion. Powered by AI image recognition, personalized macro tracking, and smart meal planning.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-gray-200 font-semibold mb-3">Quick Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#foodAI" className="hover:text-emerald-400 transition-colors">AI Food Scanner</a></li>
            <li><a href="#nutrition" className="hover:text-emerald-400 transition-colors">Nutrition Log</a></li>
            <li><a href="#bmi" className="hover:text-emerald-400 transition-colors">BMI Calculator</a></li>
            <li><a href="#exercise" className="hover:text-emerald-400 transition-colors">Exercise & Diet</a></li>
          </ul>
        </div>

        {/* Updated Contact Details */}
        <div className="space-y-3">
          <h4 className="text-gray-200 font-semibold mb-3">Contact & Developer</h4>
          <p className="text-sm flex items-center gap-2">
            <span className="text-emerald-400">👤</span> M Pranav
          </p>
          <p className="text-sm flex items-center gap-2">
            <span className="text-emerald-400">✉️</span> 
            <a href="mailto:mathampranav@gmail.com" className="hover:underline text-gray-300">
              mathampranav@gmail.com
            </a>
          </p>
          <p className="text-sm flex items-center gap-2">
            <span className="text-emerald-400">🔗</span> 
            <a href="https://linkedin.com/in/pranav-ms" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-300">
              linkedin.com/in/pranav-ms
            </a>
          </p>
        </div>

      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-800/60 mt-8 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Foodie AI. Built with React & FastAPI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;