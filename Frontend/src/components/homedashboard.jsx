import React from 'react';

export default function HomeDashboard({ setActiveTab }) {
  const cards = [
    { id: 'foodai', title: 'Food Detection AI', icon: '📸', desc: 'Scan & analyze meals instantly' },
    { id: 'bmi', title: 'BMI', icon: '⚖️', desc: 'Calculate body mass index' },
    { id: 'nutrition', title: 'Diet Plans', icon: '📋', desc: 'Weekly budget-friendly nutrition' },
    { id: 'nutrition', title: 'Nutrition Log', icon: '📊', desc: 'Track your daily intake' },
    { id: 'exercise', title: 'Exercise', icon: '💪', desc: 'Custom workout routines' },
    { id: 'community', title: 'Community Poll', icon: '🗳️', desc: 'Engage with health enthusiasts' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-slate-700 tracking-tight">Welcome back to Foodie</h1>
        <p className="text-slate-500 mt-2">Select a module below to get started on your health journey</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            onClick={() => setActiveTab(card.id)}
            className="bg-cyan-700 hover:bg-cyan-600 text-white rounded-2xl p-8 shadow-lg cursor-pointer transform transition hover:-translate-y-1 flex flex-col items-center justify-center text-center min-h-[180px]"
          >
            <span className="text-4xl mb-3">{card.icon}</span>
            <h3 className="text-xl font-bold">{card.title}</h3>
            <p className="text-cyan-100 text-xs mt-1">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}