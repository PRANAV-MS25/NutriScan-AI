import React, { useState } from 'react';

// BMI Calculator Component
export function BmiCalculator() {
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(96);
  const bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);

  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-md">
        <h2 className="text-2xl font-bold text-slate-800 text-center mb-6">BMI Calculator</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Height (cm)</label>
            <input type="number" value={height} onChange={e => setHeight(e.target.value)} className="w-full border rounded-xl p-3 bg-slate-50" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Weight (kg)</label>
            <input type="number" value={weight} onChange={e => setWeight(e.target.value)} className="w-full border rounded-xl p-3 bg-slate-50" />
          </div>
          <div className="mt-6 p-4 bg-sky-50 rounded-2xl text-center">
            <span className="text-sm text-sky-700 font-medium">Your BMI Result</span>
            <p className="text-3xl font-extrabold text-sky-900 mt-1">{bmi}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Community View Component with Contact & Socials
export function CommunityView() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-8">
      {/* Community Comments Box */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-md">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Community Comments</h2>
        <textarea placeholder="Share your thoughts..." className="w-full border rounded-xl p-4 bg-slate-50 h-32 focus:outline-none focus:border-sky-500" />
        <button className="mt-4 bg-sky-600 hover:bg-sky-500 text-white font-bold px-6 py-3 rounded-xl shadow transition">Post Comment</button>
      </div>

      {/* Creator Contact & Socials Card */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-md">
        <h3 className="text-xl font-bold text-slate-800 mb-4">Connect with the Developer</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
            <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Email</span>
            <a href="mailto:mathampranav@gmail.com" className="font-semibold text-sky-600 hover:underline">mathampranav@gmail.com</a>
          </div>
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
            <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Phone</span>
            <span className="font-semibold text-slate-700">+91 8431032065</span>
          </div>
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
            <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">LinkedIn</span>
            <a href="https://www.linkedin.com/in/pranav-matham/" target="_blank" rel="noreferrer" className="font-semibold text-sky-600 hover:underline">pranav-matham</a>
          </div>
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
            <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Instagram</span>
            <a href="https://www.instagram.com/pranav_m__004?stkn=MXB0OXIyZjFrZmVrag%3D%3D" target="_blank" rel="noreferrer" className="font-semibold text-pink-600 hover:underline">@pranav_m__004</a>
          </div>
        </div>
      </div>
    </div>
  );
}