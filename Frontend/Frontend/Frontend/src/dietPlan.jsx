import React from 'react';

const DietPlan = () => {
  const meals = [
    { title: 'Budget 1400 kcal Plan', protein: '80g', carbs: '150g', hydration: '2.5 Liters' },
    { title: 'Custom 1700 kcal Plan', protein: '110g', carbs: '180g', hydration: '3.0 Liters' },
    { title: 'Budget 2000 kcal Plan', protein: '130g', carbs: '220g', hydration: '3.5 Liters' },
  ];

  return (
    <div className="w-full space-y-4">
      {meals.map((plan, idx) => (
        <div key={idx} className="bg-[#181f2e] border border-gray-800 rounded-xl p-5 hover:border-emerald-500/50 transition-all">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-lg font-bold text-white">{plan.title}</h4>
            <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-semibold px-3 py-1 rounded-full">
              Recommended
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center pt-2">
            <div className="bg-[#0b0f17] p-2.5 rounded-lg border border-gray-800">
              <p className="text-xs text-gray-400">Protein</p>
              <p className="text-sm font-bold text-emerald-400">{plan.protein}</p>
            </div>
            <div className="bg-[#0b0f17] p-2.5 rounded-lg border border-gray-800">
              <p className="text-xs text-gray-400">Carbs</p>
              <p className="text-sm font-bold text-teal-400">{plan.carbs}</p>
            </div>
            <div className="bg-[#0b0f17] p-2.5 rounded-lg border border-gray-800">
              <p className="text-xs text-gray-400">Water</p>
              <p className="text-sm font-bold text-blue-400">{plan.hydration}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DietPlan;