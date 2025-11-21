import React from "react";

const RankingCard = ({ position, nome, pontos, img }) => {

  const getNumberColor = (position) => {
    if (position === 1) return "text-yellow-600";
    if (position === 2) return "text-gray-500";
    if (position === 3) return "text-orange-800";
    return "text-gray-400";
  };

  return (
    <div className="flex items-center justify-between bg-white p-4 sm:p-5 rounded-3xl shadow-md hover:shadow-lg transition">
      <div className="flex items-center gap-4">
        <div className={`font-bold w-6 text-center ${getNumberColor(position)}`}>
          {position}
        </div>

        <img
          src={img}
          alt={nome}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
        />

        <span className="font-medium text-blue-700 text-sm sm:text-base">
          {nome}
        </span>
      </div>

      <div className="font-semibold text-blue-900 text-sm sm:text-base">
        {pontos}
      </div>
    </div>
  );
};

export default RankingCard;
