import React, { useState } from 'react';

export default function FoodieTracker() {
  const [step, setStep] = useState(1);
  const [metrics, setMetrics] = useState({ 
    weight: 65, 
    height: 175, 
    age: 22, 
    gender: 'male', 
    activity: 'moderate',
    selectedImage: 'pasta.jpg'
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // Available sample images from your backend folders
  const sampleImages = [
    { name: 'Pasta', file: 'pasta.jpg' },
    { name: 'Burger', file: 'burger.jpg' },
    { name: 'Pizza', file: 'pizza.jpg' },
    { name: 'Paneer', file: 'paneer.jpg' },
    { name: 'Butter Chicken', file: 'butterchicken.jpg' },
    { name: 'Dosa', file: 'dosa.jpg' }
  ];

  const handleNextToActivity = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleNextToImage = (e) => {
    e.preventDefault();
    setStep(3);
  };

  const handleBack = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const handleAnalyze = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('http://127.0.0.1:5000/api/analyze-meal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(metrics)
      });
      const data = await response.json();
      setResult(data);
      setStep(4);
    } catch (error) {
      console.error("Error connecting to backend:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-slate-50 text-slate-800 py-12 px-4 sm:px-6 lg:px-8 font-sans flex items-center justify-center">
      <div className="max-w-xl w-full">
        
        {/* Header & Step Indicator */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-3 bg-emerald-100 border border-emerald-200 rounded-2xl mb-3 shadow-sm">
            <span className="text-3xl">🥗</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Foodie<span className="text-emerald-600">AI</span> Studio
          </h1>
          <p className="text-slate-500 text-sm mt-1">Smart visual food recognition & nutrition planner</p>

          {/* Stepper Progress Bar */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className={`h-2.5 rounded-full transition-all duration-300 ${step >= 1 ? 'w-10 bg-emerald-600' : 'w-5 bg-slate-200'}`} />
            <div className={`h-2.5 rounded-full transition-all duration-300 ${step >= 2 ? 'w-10 bg-emerald-600' : 'w-5 bg-slate-200'}`} />
            <div className={`h-2.5 rounded-full transition-all duration-300 ${step >= 3 ? 'w-10 bg-emerald-600' : 'w-5 bg-slate-200'}`} />
            <div className={`h-2.5 rounded-full transition-all duration-300 ${step >= 4 ? 'w-10 bg-emerald-600' : 'w-5 bg-slate-200'}`} />
          </div>
        </div>

        {/* Step 1: Body Metrics */}
        {step === 1 && (
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Step 1 of 4</span>
                <h2 className="text-xl font-bold text-slate-800">Body Metrics</h2>
              </div>
              <span className="text-2xl">⚖️</span>
            </div>

            <form onSubmit={handleNextToActivity} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Weight (kg)</label>
                  <input 
                    type="number" 
                    required
                    value={metrics.weight} 
                    onChange={e => setMetrics({...metrics, weight: e.target.value})} 
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-800 font-medium focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Height (cm)</label>
                  <input 
                    type="number" 
                    required
                    value={metrics.height} 
                    onChange={e => setMetrics({...metrics, height: e.target.value})} 
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-800 font-medium focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Age (yrs)</label>
                <input 
                  type="number" 
                  required
                  value={metrics.age} 
                  onChange={e => setMetrics({...metrics, age: e.target.value})} 
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-800 font-medium focus:outline-none focus:border-emerald-500"
                />
              </div>

              <button 
                type="submit" 
                className="w-full mt-6 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-emerald-600/30 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                Next: Activity Profile →
              </button>
            </form>
          </div>
        )}

        {/* Step 2: Activity Profile */}
        {step === 2 && (
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Step 2 of 4</span>
                <h2 className="text-xl font-bold text-slate-800">Activity Level</h2>
              </div>
              <span className="text-2xl">🏃‍♂️</span>
            </div>

            <form onSubmit={handleNextToImage} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Gender</label>
                <select 
                  value={metrics.gender} 
                  onChange={e => setMetrics({...metrics, gender: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-800 font-medium focus:outline-none focus:border-emerald-500"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Activity Level</label>
                <select 
                  value={metrics.activity} 
                  onChange={e => setMetrics({...metrics, activity: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-800 font-medium focus:outline-none focus:border-emerald-500"
                >
                  <option value="sedentary">Sedentary (Little or no exercise)</option>
                  <option value="moderate">Moderate (Exercise 3-5 days/week)</option>
                  <option value="active">Active (Hard exercise 6-7 days/week)</option>
                </select>
              </div>

              <div className="flex gap-3 mt-6">
                <button 
                  type="button" 
                  onClick={handleBack}
                  className="w-1/3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3.5 px-4 rounded-xl transition-all cursor-pointer"
                >
                  ← Back
                </button>
                <button 
                  type="submit" 
                  className="w-2/3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-emerald-600/30 transition-all cursor-pointer"
                >
                  Next: Select Meal Image →
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Step 3: Select Processed Image Input */}
        {step === 3 && (
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Step 3 of 4</span>
                <h2 className="text-xl font-bold text-slate-800">Select Meal Image</h2>
              </div>
              <span className="text-2xl">📸</span>
            </div>

            <form onSubmit={handleAnalyze} className="space-y-5">
              <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Choose Dataset Image</label>
              <div className="grid grid-cols-3 gap-3">
                {sampleImages.map((img) => (
                  <div 
                    key={img.file}
                    onClick={() => setMetrics({...metrics, selectedImage: img.file})}
                    className={`cursor-pointer border-2 rounded-xl p-3 text-center transition-all ${
                      metrics.selectedImage === img.file 
                        ? 'border-emerald-600 bg-emerald-50/50 shadow-sm' 
                        : 'border-slate-200 hover:border-slate-300 bg-slate-50'
                    }`}
                  >
                    <span className="text-xs font-bold text-slate-700 block truncate">{img.name}</span>
                    <span className="text-[10px] text-slate-400">{img.file}</span>
                  </div>
                ))}
              </div>

              {/* Selected Image Preview Box */}
              <div className="mt-4 p-4 bg-slate-50 border border-slate-200 rounded-2xl text-center">
                <span className="text-xs text-slate-500 block mb-1">Active Input Target</span>
                <span className="text-sm font-bold text-emerald-700 font-mono">📁 /processed_images/{metrics.selectedImage}</span>
              </div>

              <div className="flex gap-3 mt-6">
                <button 
                  type="button" 
                  onClick={handleBack}
                  className="w-1/3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3.5 px-4 rounded-xl transition-all cursor-pointer"
                >
                  ← Back
                </button>
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-2/3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-emerald-600/30 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  {loading ? 'Analyzing Image...' : '✨ Run AI Recognition'}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Step 4: Results Summary */}
        {step === 4 && result && (
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Step 4 of 4</span>
                <h2 className="text-xl font-bold text-slate-800">Scan & Analysis Results</h2>
              </div>
              <span className="text-2xl">📊</span>
            </div>

            {/* Scanned Meal Info with Image tag */}
            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Processed Image Input</span>
                <span className="text-xs bg-emerald-200 text-emerald-800 font-mono px-2 py-0.5 rounded">{metrics.selectedImage}</span>
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-3">{result.scanned_meal.food_name}</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded-xl border border-emerald-200 shadow-sm">
                  <span className="text-slate-500 text-xs font-medium">Calories</span>
                  <p className="text-lg font-bold text-slate-800">{result.scanned_meal.calories} kcal</p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-emerald-200 shadow-sm">
                  <span className="text-slate-500 text-xs font-medium">Protein</span>
                  <p className="text-lg font-bold text-emerald-600">{result.scanned_meal.protein}g</p>
                </div>
              </div>
            </div>

            {/* Target Intake */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
              <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Daily Target Recommendation</span>
              <div className="mt-3 flex items-center justify-between pb-3 border-b border-slate-200">
                <span className="text-slate-600 font-medium">Target Calories</span>
                <span className="text-xl font-extrabold text-slate-900">{result.daily_target_intake.calories} kcal</span>
              </div>
              <div className="grid grid-cols-3 gap-3 mt-4 text-center">
                <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-sm">
                  <span className="text-slate-400 text-xs block font-medium">Protein</span>
                  <span className="font-bold text-emerald-600">{result.daily_target_intake.protein}g</span>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-sm">
                  <span className="text-slate-400 text-xs block font-medium">Carbs</span>
                  <span className="font-bold text-teal-600">{result.daily_target_intake.carbs}g</span>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-sm">
                  <span className="text-slate-400 text-xs block font-medium">Fat</span>
                  <span className="font-bold text-amber-600">{result.daily_target_intake.fat}g</span>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setStep(1)}
              className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3.5 px-6 rounded-xl transition-all cursor-pointer"
            >
              🔄 Start New Analysis
            </button>
          </div>
        )}

      </div>
    </div>
  );
}