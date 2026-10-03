import React from 'react';

const Navbar = ({
  onHomeClick,
  onFoodAIClick,
  onNutritionClick,
  onBMIClick,
  onExerciseClick,
  onCommunityClick,
}) => {
  return (
    <nav className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
      {/* Brand Logo */}
      <div className="flex items-center gap-2 cursor-pointer" onClick={onHomeClick}>
        <span className="text-3xl">🥑</span>
        <span className="text-2xl font-extrabold bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
          Foodie AI
        </span>
      </div>

      {/* Navigation Items */}
      <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
        <button onClick={onHomeClick} className="hover:text-emerald-400 transition-colors bg-transparent border-none p-0 !shadow-none !transform-none">Home</button>
        <button onClick={onFoodAIClick} className="hover:text-emerald-400 transition-colors bg-transparent border-none p-0 !shadow-none !transform-none">AI Scanner</button>
        <button onClick={onNutritionClick} className="hover:text-emerald-400 transition-colors bg-transparent border-none p-0 !shadow-none !transform-none">Nutrition Log</button>
        <button onClick={onBMIClick} className="hover:text-emerald-400 transition-colors bg-transparent border-none p-0 !shadow-none !transform-none">BMI</button>
        <button onClick={onExerciseClick} className="hover:text-emerald-400 transition-colors bg-transparent border-none p-0 !shadow-none !transform-none">Workouts</button>
        <button onClick={onCommunityClick} className="hover:text-emerald-400 transition-colors bg-transparent border-none p-0 !shadow-none !transform-none">Community</button>
      </div>
    </nav>
  );
};

export default Navbar;