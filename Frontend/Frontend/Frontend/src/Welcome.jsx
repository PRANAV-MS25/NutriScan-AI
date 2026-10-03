import React from 'react';

const Welcome = () => {
  return (
    <div className="text-center space-y-3 py-6">
      <span className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
        AI-Powered Nutrition Engine
      </span>
      <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
        Welcome to <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Foodie AI</span>
      </h1>
      <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
        Scan your meals, track precise macro distributions, calculate optimal workout intensity, and manage your health seamlessly.
      </p>
    </div>
  );
};

export default Welcome;