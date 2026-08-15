import React, { useRef } from 'react';
import Navbar from './navbar.jsx';
import Welcome from './Welcome.jsx';
import Cards from './cards.jsx';
import CaptureImage from './captureImage.jsx';
import Bmical from './bmiCal.jsx';
import Pic from './pic.jsx';
import DailyNutritionLog from './dailyNutritionLog.jsx';
import Exercise from './exercise.jsx';
import DietPlan from './dietPlan.jsx';
import Community from './community.jsx';
import Newsletter from './Newsletter.jsx';
import Footer from './footer.jsx';

function App() {
  const homeRef = useRef(null);
  const foodAIRef = useRef(null);
  const nutritionRef = useRef(null);
  const bmiRef = useRef(null);
  const exerciseRef = useRef(null);
  const communityRef = useRef(null);

  const scrollToRef = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080b10] text-gray-100 flex flex-col font-sans">
      {/* Sticky Navigation Header */}
      <header className="sticky top-0 z-50 bg-[#080b10]/90 backdrop-blur-md border-b border-gray-800">
        <Navbar
          onHomeClick={() => scrollToRef(homeRef)}
          onFoodAIClick={() => scrollToRef(foodAIRef)}
          onNutritionClick={() => scrollToRef(nutritionRef)}
          onBMIClick={() => scrollToRef(bmiRef)}
          onExerciseClick={() => scrollToRef(exerciseRef)}
          onCommunityClick={() => scrollToRef(communityRef)}
        />
      </header>

      {/* Hero Welcome */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Welcome />
      </div>

      {/* Main App Content */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-16">
        
        {/* Quick Access Cards */}
        <section ref={homeRef} className="w-full">
          <Cards />
        </section>

        {/* AI Scanner Module */}
        <section ref={foodAIRef} className="w-full bg-[#131926] border border-gray-800 rounded-2xl p-6 shadow-xl">
          <h2 className="text-2xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
            <span>📸</span> AI Food Recognition & Scanner
          </h2>
          <CaptureImage />
        </section>

        {/* Two Column Grid: BMI & Visuals */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          <section ref={bmiRef} className="bg-[#131926] border border-gray-800 rounded-2xl p-6 shadow-xl">
            <h3 className="text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2">
              <span>⚖️</span> Health Analytics (BMI)
            </h3>
            <Bmical />
          </section>

          <section className="bg-[#131926] border border-gray-800 rounded-2xl p-6 shadow-xl">
            <h3 className="text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2">
              <span>📊</span> Visual Insights
            </h3>
            <Pic />
          </section>
        </div>

        {/* Daily Nutrition Tracker */}
        <section ref={nutritionRef} className="w-full bg-[#131926] border border-gray-800 rounded-2xl p-6 shadow-xl">
          <h2 className="text-2xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
            <span>🥗</span> Daily Nutrition Log
          </h2>
          <DailyNutritionLog />
        </section>

        {/* Workouts & Diet Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          <section ref={exerciseRef} className="bg-[#131926] border border-gray-800 rounded-2xl p-6 shadow-xl">
            <h3 className="text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2">
              <span>🏋️</span> Exercise Tracker
            </h3>
            <Exercise />
          </section>

          <section className="bg-[#131926] border border-gray-800 rounded-2xl p-6 shadow-xl">
            <h3 className="text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2">
              <span>📋</span> Diet Plans
            </h3>
            <DietPlan />
          </section>
        </div>

        {/* Community Section */}
        <section ref={communityRef} className="w-full bg-[#131926] border border-gray-800 rounded-2xl p-6 shadow-xl">
          <h2 className="text-2xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
            <span>💬</span> Community Hub
          </h2>
          <Community />
        </section>

        {/* Newsletter Signup */}
        <section className="w-full">
          <Newsletter />
        </section>

      </main>

      {/* Footer */}
      <footer className="w-full bg-[#080b10] border-t border-gray-800 mt-auto">
        <Footer />
      </footer>
    </div>
  );
}

export default App;