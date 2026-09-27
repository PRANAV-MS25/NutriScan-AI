import React, { useState } from 'react';

const Bmical = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculateBMI = (e) => {
    e.preventDefault();
    if (height && weight) {
      const hInMeters = height / 100;
      const bmiVal = (weight / (hInMeters * hInMeters)).toFixed(1);
      setBmi(bmiVal);
    }
  };

  return (
    <div className="w-full space-y-4">
      <form onSubmit={calculateBMI} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-gray-400 mb-1">Height (cm)</label>
          <input
            type="number"
            placeholder="e.g. 175"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full bg-[#0b0f17] border border-gray-800 text-white p-3 rounded-xl focus:border-emerald-500 outline-none text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-400 mb-1">Weight (kg)</label>
          <input
            type="number"
            placeholder="e.g. 70"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full bg-[#0b0f17] border border-gray-800 text-white p-3 rounded-xl focus:border-emerald-500 outline-none text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold p-3 rounded-xl hover:opacity-90 transition text-sm"
        >
          Calculate BMI
        </button>
      </form>

      {bmi && (
        <div className="bg-[#0b0f17] border border-emerald-500/40 p-4 rounded-xl text-center space-y-1">
          <p className="text-xs text-gray-400">Your Calculated BMI</p>
          <p className="text-3xl font-extrabold text-emerald-400">{bmi}</p>
        </div>
      )}
    </div>
  );
};

export default Bmical;