import React from 'react';

const DailyNutritionLog = () => {
  const logs = [
    { meal: 'Breakfast', calories: '450 kcal', protein: '25g', carbs: '50g', fats: '15g' },
    { meal: 'Lunch', calories: '700 kcal', protein: '45g', carbs: '75g', fats: '22g' },
    { meal: 'Snack', calories: '200 kcal', protein: '10g', carbs: '25g', fats: '6g' },
    { meal: 'Dinner', calories: '550 kcal', protein: '35g', carbs: '60g', fats: '18g' },
  ];

  return (
    <div className="w-full overflow-x-auto rounded-xl border border-gray-800 bg-[#0b0f17]">
      <table className="w-full text-left text-sm text-gray-300">
        <thead className="bg-[#131926] text-emerald-400 font-semibold border-b border-gray-800">
          <tr>
            <th className="p-4">Meal</th>
            <th className="p-4">Calories</th>
            <th className="p-4">Protein</th>
            <th className="p-4">Carbs</th>
            <th className="p-4">Fats</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          {logs.map((log, idx) => (
            <tr key={idx} className="hover:bg-[#181f2e] transition-colors">
              <td className="p-4 font-bold text-white">{log.meal}</td>
              <td className="p-4 text-emerald-400 font-medium">{log.calories}</td>
              <td className="p-4">{log.protein}</td>
              <td className="p-4">{log.carbs}</td>
              <td className="p-4">{log.fats}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DailyNutritionLog;