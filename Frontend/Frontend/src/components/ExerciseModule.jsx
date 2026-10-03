import React, { useState } from 'react';

export default function ExerciseModule() {
  const [selectedGoal, setSelectedGoal] = useState('weightLoss');
  const [activeExercise, setActiveExercise] = useState(null);

  const routines = {
    weightLoss: [
      { 
        name: 'High-Intensity Interval Training (HIIT)', 
        duration: '30 mins', 
        calories: '~350 kcal', 
        intensity: 'High',
        description: 'Alternating bursts of intense anaerobic exercise with low-intensity recovery periods.',
        steps: [
          '5 mins Dynamic Warm-up (Arm circles, leg swings, light jogging in place)',
          '40 seconds Jumping Jacks / Burpees (Maximum effort)',
          '20 seconds Active Rest (Walking in place)',
          'Repeat circuit for 5 rounds, then 5 mins cool-down static stretching'
        ]
      },
      { 
        name: 'Jump Rope & Cardio Circuit', 
        duration: '20 mins', 
        calories: '~250 kcal', 
        intensity: 'Medium',
        description: 'Full-body rhythmic coordination and cardiovascular endurance builder.',
        steps: [
          '3 mins Light stretching and ankle rotations',
          '50 skips followed by 15 seconds rest',
          'Mountain climbers for 45 seconds',
          'Repeat set 4 times with deep breathing'
        ]
      },
      { 
        name: 'Brisk Walking or Jogging', 
        duration: '45 mins', 
        calories: '~300 kcal', 
        intensity: 'Low-Medium',
        description: 'Steady-state cardio ideal for fat burning and heart health.',
        steps: [
          '5 mins slow warm-up walk',
          '35 mins steady-pace jogging or brisk walking at 6km/h',
          '5 mins gradual deceleration and hamstring stretches'
        ]
      }
    ],
    muscleGain: [
      { 
        name: 'Upper Body Strength (Bench & Rows)', 
        duration: '45 mins', 
        calories: '~280 kcal', 
        intensity: 'High',
        description: 'Compound weight training targeting chest, back, and arms.',
        steps: [
          '10 mins shoulder mobility and light dumbbell warm-up',
          'Flat Barbell Bench Press: 4 sets × 8-10 reps',
          'Bent-over Barbell Rows: 4 sets × 10 reps',
          'Overhead Shoulder Press & Bicep Curls superset'
        ]
      },
      { 
        name: 'Lower Body Hypertrophy (Squats & Deadlifts)', 
        duration: '50 mins', 
        calories: '~350 kcal', 
        intensity: 'High',
        description: 'Heavy compound leg movements to stimulate muscle growth.',
        steps: [
          'Dynamic leg stretches and bodyweight squats',
          'Barbell Back Squats: 4 sets × 6-8 reps',
          'Romanian Deadlifts: 3 sets × 10 reps',
          'Calf raises and core stabilization planks'
        ]
      },
      { 
        name: 'Core & Functional Conditioning', 
        duration: '25 mins', 
        calories: '~200 kcal', 
        intensity: 'Medium',
        description: 'Strengthening abdominal walls, obliques, and lower back.',
        steps: [
          'Plank holds: 3 sets × 60 seconds',
          'Russian twists with weight plate: 3 sets × 20 reps',
          'Leg raises: 3 sets × 12 reps',
          'Cobra stretch and child’s pose cooling'
        ]
      }
    ],
    endurance: [
      { 
        name: 'Long Distance Steady Cycling', 
        duration: '60 mins', 
        calories: '~500 kcal', 
        intensity: 'Medium',
        description: 'Sustained aerobic conditioning for lower body stamina.',
        steps: [
          '5 mins low resistance pedal warm-up',
          '45 mins moderate cadence sustained cycling',
          '10 mins cool-down spin and quad stretching'
        ]
      },
      { 
        name: 'Swimming Laps', 
        duration: '40 mins', 
        calories: '~400 kcal', 
        intensity: 'High',
        description: 'Zero-impact full-body resistance cardiovascular workout.',
        steps: [
          'Gentle pool stretching and 2 laps freestyle warm-up',
          'Freestyle & breaststroke intervals: 10 laps',
          'Cool-down backstroke and breathing exercises'
        ]
      },
      { 
        name: 'Endurance Running', 
        duration: '45 mins', 
        calories: '~450 kcal', 
        intensity: 'High',
        description: 'Long-distance running focused on pacing and lung capacity.',
        steps: [
          'Dynamic warm-up and high knees',
          '40 mins continuous running at a conversational pace',
          'Post-run calf and hip flexor static stretches'
        ]
      }
    ]
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 relative">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-slate-800">Exercise & Workout Routines</h2>
        <p className="text-slate-500 text-sm mt-1">Select your fitness goal and click any routine to view workout steps and stretches</p>
      </div>

      {/* Goal Selector Tabs */}
      <div className="flex justify-center gap-3 mb-8">
        {[
          { id: 'weightLoss', label: '🔥 Weight Loss' },
          { id: 'muscleGain', label: '💪 Muscle Gain' },
          { id: 'endurance', label: '⚡ Endurance' }
        ].map((goal) => (
          <button
            key={goal.id}
            onClick={() => { setSelectedGoal(goal.id); setActiveExercise(null); }}
            className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all cursor-pointer ${
              selectedGoal === goal.id 
                ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30' 
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {goal.label}
          </button>
        ))}
      </div>

      {/* Routine Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {routines[selectedGoal].map((item, idx) => (
          <div 
            key={idx} 
            onClick={() => setActiveExercise(item)}
            className="bg-white border border-slate-200 hover:border-sky-500 rounded-3xl p-6 shadow-md cursor-pointer transform transition hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-2.5 py-1 rounded-full">
                Intensity: {item.intensity}
              </span>
              <h3 className="text-lg font-bold text-slate-800 mt-4 mb-2">{item.name}</h3>
              <p className="text-xs text-slate-500 line-clamp-2">{item.description}</p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>⏱️ {item.duration}</span>
              <span className="text-emerald-600 font-bold">{item.calories}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Exercise Detail Modal */}
      {activeExercise && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl border border-slate-100 animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-2.5 py-1 rounded-full">
                  Intensity: {activeExercise.intensity}
                </span>
                <h3 className="text-2xl font-extrabold text-slate-800 mt-2">{activeExercise.name}</h3>
              </div>
              <button 
                onClick={() => setActiveExercise(null)}
                className="text-slate-400 hover:text-slate-600 text-xl font-bold p-2 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-slate-600 text-sm mb-6">{activeExercise.description}</p>

            <div className="space-y-3 mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Workout Steps & Stretches Breakdown</h4>
              {activeExercise.steps.map((step, sIdx) => (
                <div key={sIdx} className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-100 text-sm text-slate-700">
                  <span className="bg-sky-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                    {sIdx + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-sm font-semibold text-slate-600 mb-6">
              <span>⏱️ Duration: {activeExercise.duration}</span>
              <span className="text-emerald-600 font-bold">🔥 Est. Burn: {activeExercise.calories}</span>
            </div>

            <button
              onClick={() => setActiveExercise(null)}
              className="w-full bg-sky-600 hover:bg-sky-500 text-white font-bold py-3.5 rounded-xl shadow-md transition cursor-pointer"
            >
              Got it, let's workout!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}