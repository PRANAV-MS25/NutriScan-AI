import React from 'react';

export default function NutritionPlans() {
  const plans = [
    { budget: '500', protein: 'Paneer - 45g × 7 days @ ₹50 = ₹350', fiber: 'Salad - 3 days @ ₹30 = ₹90', water: 'Lemon Water - 5 days = ₹50', total: '490', rem: '10' },
    { budget: '1000', protein: 'Paneer - 55g × 7 days @ ₹90 = ₹630', fiber: 'Salad - 4 days @ ₹60 = ₹240', water: 'Lemon Water - 7 days = ₹126', total: '996', rem: '4' },
    { budget: '1500', protein: 'Paneer - 65g × 7 days @ ₹110 = ₹770', fiber: 'Salad - 5 days @ ₹65 = ₹325', water: 'Lemon Water - 7 days = ₹140', total: '1235', rem: '265' },
    { budget: '2000', protein: 'Paneer - 70g × 7 days @ ₹120 = ₹840', fiber: 'Salad - 6 days @ ₹70 = ₹420', water: 'Coconut Water - 7 days = ₹420', total: '1680', rem: '320' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-extrabold text-slate-800 text-center mb-8">Weekly Diet Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((p, idx) => (
          <div key={idx} className="bg-white border border-emerald-200 rounded-3xl p-6 shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-emerald-800 mb-4 border-b pb-2">Budget: ₹{p.budget} /week</h3>
              <div className="space-y-3 text-xs text-slate-600">
                <div><span className="font-bold text-slate-700 block">Protein</span>{p.protein}</div>
                <div><span className="font-bold text-slate-700 block">Fiber</span>{p.fiber}</div>
                <div><span className="font-bold text-slate-700 block">Hydration</span>{p.water}</div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t bg-emerald-50 p-3 rounded-xl text-center">
              <span className="text-xs text-slate-600 block">Total Used: ₹{p.total}</span>
              <span className="text-xs font-bold text-emerald-700">Remaining Budget: ₹{p.rem}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}