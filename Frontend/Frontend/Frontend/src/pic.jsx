import React from 'react';

const Pic = () => {
  return (
    <div className="w-full bg-[#0b0f17] border border-gray-800 rounded-xl p-6 text-center space-y-4">
      <div className="flex justify-around items-center h-48 border border-dashed border-gray-800 rounded-lg p-4">
        <div className="space-y-2">
          <div className="w-16 h-16 rounded-full border-4 border-emerald-500 border-t-transparent animate-spin mx-auto"></div>
          <p className="text-xs text-gray-400">Macro Distribution</p>
        </div>
        <div className="space-y-1 text-left text-xs">
          <p className="text-emerald-400 font-semibold">● Protein: 35%</p>
          <p className="text-teal-400 font-semibold">● Carbs: 45%</p>
          <p className="text-blue-400 font-semibold">● Fats: 20%</p>
        </div>
      </div>
    </div>
  );
};

export default Pic;