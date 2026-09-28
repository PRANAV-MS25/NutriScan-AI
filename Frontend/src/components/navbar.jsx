import React from 'react';

export default function Navbar({ activeTab, setActiveTab }) {
  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'foodai', label: 'Food AI', icon: '🤖' },
    { id: 'nutrition', label: 'Nutrition', icon: '🥗' },
    { id: 'exercise', label: 'Exercise', icon: '🏋️‍♂️' },
    { id: 'bmi', label: 'BMI', icon: '⚖️' },
    { id: 'community', label: 'Community', icon: '💬' }
  ];

  return (
    <header className="bg-sky-600 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logo / Brand */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('home')}>
          <div className="bg-white text-sky-600 w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-xl shadow">
            F
          </div>
          <span className="text-xl font-bold tracking-tight">Foodie</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === item.id 
                  ? 'bg-sky-700 text-white shadow-inner' 
                  : 'text-sky-100 hover:bg-sky-500 hover:text-white'
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Mobile Nav Bar */}
      <div className="flex md:hidden overflow-x-auto bg-sky-700 px-2 py-2 gap-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`whitespace-nowrap px-3 py-1.5 rounded-md text-xs font-medium ${
              activeTab === item.id ? 'bg-sky-800 text-white' : 'text-sky-200'
            }`}
          >
            {item.icon} {item.label}
          </button>
        ))}
      </div>
    </header>
  );
}