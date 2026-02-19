const Card = ({ title, value, detail, icon, color = "blue" }) => {
  const isPositive = detail?.startsWith("+");
  const bgColor = {
    blue: "bg-blue-50 text-blue-600",
    green: "bg-green-50 text-green-600",
    purple: "bg-purple-50 text-purple-600",
  }[color];

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow transition-shadow min-w-[220px]">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${bgColor}`}>
          {icon}
        </div>
        {detail && (
          <span className={`text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {detail}
          </span>
        )}
      </div>
      <h3 className="text-sm text-gray-500 font-medium mb-1">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

export default Card;