import React from 'react';

const Cards = () => {
  const items = [
    { title: 'Food Detection AI', desc: 'Instant macro estimation', icon: '📸' },
    { title: 'BMI Calculator', desc: 'Track healthy weight', icon: '⚖️' },
    { title: 'Diet Plans', desc: 'Tailored calorie targets', icon: '🥗' },
    { title: 'Nutrition Log', desc: 'Daily macro breakdown', icon: '📊' },
    { title: 'Exercise Guide', desc: 'Activity & workouts', icon: '🏋️' },
    { title: 'Community Hub', desc: 'Connect & share progress', icon: '💬' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full">
      {items.map((card, idx) => (
        <div
          key={idx}
          className="bg-[#131926] border border-gray-800 hover:border-emerald-500/50 rounded-2xl p-4 text-center transition-all duration-300 hover:-translate-y-1 shadow-lg group cursor-pointer flex flex-col items-center justify-center space-y-2"
        >
          <span className="text-3xl group-hover:scale-110 transition-transform">{card.icon}</span>
          <h4 className="text-sm font-bold text-gray-200 group-hover:text-emerald-400 transition-colors">{card.title}</h4>
          <p className="text-xs text-gray-400">{card.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;