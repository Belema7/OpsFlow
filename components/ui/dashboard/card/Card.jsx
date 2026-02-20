import React from 'react';

const Card = ({ title, number, icon, change, color }) => {
  const isPositive = change.startsWith('+');

  return (
    <div className="dark:bg-(--color-page) p-5 rounded-xl shadow-sm  flex flex-col gap-4 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center justify-between">
        {/* Icon container with dynamic color */}
        <div className={`p-2 rounded-lg bg-slate-50 ${color}`}>
          {icon}
        </div>
        <h3 className="text-slate-500 text-sm font-medium">{title}</h3>
      </div>

      <div className="space-y-1">
        <p className="text-2xl font-bold text-slate-800">{number}</p>
      </div>
      
      <div className="text-xs text-slate-400 flex gap-2">
        {/* Percentage badge */}
         <span className={`text-xs font-medium px-2 py-1 rounded-full ${
          isPositive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
        }`}>
          {change}
        </span>
        <span>vs last month</span>
      </div>
    </div>
  );
};

export default Card;
