import React, { useState } from 'react';
import Navbar from './components/navbar';
import HomeDashboard from './components/homedashboard';
import FoodDetection from './components/fooddetection';
import NutritionPlans from './components/Nutritionplans';
import ExerciseModule from './components/ExerciseModule';
import { BmiCalculator, CommunityView } from './components/bmicalculator and CommunityView';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main>
        {activeTab === 'home' && <HomeDashboard setActiveTab={setActiveTab} />}
        {activeTab === 'foodai' && <FoodDetection />}
        {activeTab === 'nutrition' && <NutritionPlans />}
        {activeTab === 'exercise' && <ExerciseModule />}
        {activeTab === 'bmi' && <BmiCalculator />}
        {activeTab === 'community' && <CommunityView />}
      </main>
    </div>
  );
}