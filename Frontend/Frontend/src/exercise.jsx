import React, { useState } from 'react';

const Exercise = () => {
  const [weight, setWeight] = useState('');

  const workoutData = [
    { weight: '40-45 kg', steps: '7000', lifting: '20 kg', level: '1-2' },
    { weight: '45-50 kg', steps: '8000', lifting: '25 kg', level: '2-3' },
    { weight: '50-55 kg', steps: '9000', lifting: '30 kg', level: '3' },
    { weight: '55-60 kg', steps: '10000', lifting: '35 kg', level: '4' },
    { weight: '60-65 kg', steps: '11000', lifting: '40 kg', level: '4-5' },
    { weight: '65+ kg', steps: '12000', lifting: '45+ kg', level: '5' },
  ];

  return (
    <div className="w-full text-gray-100 space-y-6">
      {/* Weight Input Box */}
      <div className="flex flex-col sm:flex-row items-center gap-4 bg-[#181f2e] p-4 rounded-xl border border-gray-800">
        <label className="text-sm font-medium text-gray-300">Enter Your Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="e.g. 65"
          className="w-full sm:w-48 bg-[#0b0f17] border border-gray-700 text-white px-4 py-2 rounded-lg focus:border-emerald-500 outline-none"
        />
        <button className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold px-6 py-2 rounded-lg hover:opacity-90 transition">
          Calculate Target
        </button>
      </div>

      {/* Workout Intensity Table */}
      <div className="overflow-x-auto rounded-xl border border-gray-800 bg-[#181f2e]">
        <table className="w-full text-left text-sm text-gray-300">
          <thead className="bg-[#0f1522] text-emerald-400 font-semibold border-b border-gray-800">
            <tr>
              <th className="p-4">Weight Range</th>
              <th className="p-4">Daily Steps</th>
              <th className="p-4">Weight Lifting</th>
              <th className="p-4">Workout Level</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {workoutData.map((item, index) => (
              <tr key={index} className="hover:bg-[#1f293d] transition-colors">
                <td className="p-4 font-medium text-white">{item.weight}</td>
                <td className="p-4">{item.steps}</td>
                <td className="p-4">{item.lifting}</td>
                <td className="p-4 text-emerald-400 font-medium">Level {item.level}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Exercise;