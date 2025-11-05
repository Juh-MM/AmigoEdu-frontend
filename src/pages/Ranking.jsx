import React, { useState } from "react";
import User1 from '../assets/user1.jpg';

const Ranking = () => {
  const [activeTab, setActiveTab] = useState("Diário");

  const tabs = ["Diário", "Semanal", "Mensal", "Todos"];

  const rankingData = [
    { id: 1, nome: "Lucas Melo", pontos: 45, img: User1 },
    { id: 2, nome: "Maria Luiza", pontos: 30, img: User1 },
    { id: 3, nome: "Joao Matheus", pontos: 26, img: User1 },
    { id: 4, nome: "Mateus Fernando", pontos: 24, img: User1 },
    { id: 5, nome: "Lucas Serafim", pontos: 22, img: User1 },
    { id: 6, nome: "Aline Lima", pontos: 22, img: User1 },
  ];

  const getNumberColor = (position) => {
    if (position === 1) return "#D59300";
    if (position === 2) return "#818181";
    if (position === 3) return "#6B4111";
    return "#B3B5B8";
  };

  return (
    <div className="flex flex-col m-5 mt-0 ">
      <div className="flex flex-col gap-1">
        <h1 className="text-4xl font-semibold">Ranking geral</h1>
        <p className="mb-6 text-gray-700">
          Parabéns, <span className="font-medium">Maria Luiza</span>. Você está no top 3!
        </p>
      </div>
      <div>
        {/* Tabs */}
        <div className="flex space-x-1 bg-blue-100 p-1 rounded-lg w-fit">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-5 rounded-md text-sm font-medium ${activeTab === tab
                  ? "bg-[#3D70B4] text-white shadow"
                  : "text-[#3D70B4] hover:bg-[#3B5474]/20"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Ranking Cards */}
        <div className="mt-8 grid grid-cols-2 gap-8">
          <div className="space-y-4">
            {rankingData.map((user, index) => (
              <div
                key={user.id}
                className="flex items-center justify-between bg-white p-5 rounded-3xl shadow-md hover:shadow-lg transition"
              >
                <div className="flex items-center space-x-4">
                  <div
                    className="font-bold w-6 text-center"
                    style={{ color: getNumberColor(index + 1) }}
                  >
                    {index + 1}
                  </div>
                  <img
                    src={user.img}
                    alt={user.nome}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <span className="font-medium" style={{ color: "#3D70B4" }}>{user.nome}</span>
                </div>
                <div
                  className="font-semibold"
                  style={{ color: "#3B5474" }}
                >
                  {user.pontos}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {rankingData.map((user, index) => (
              <div
                key={`${user.id}-2`}
                className="flex items-center justify-between bg-white p-5 rounded-3xl shadow-md hover:shadow-lg transition"
              >
                <div className="flex items-center space-x-4">
                  <div
                    className="font-bold w-6 text-center"
                    style={{ color: "#B3B5B8" }}
                  >
                    {index + 7} { }
                  </div>
                  <img
                    src={user.img}
                    alt={user.nome}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <span className="font-medium" style={{ color: "#3D70B4" }}>{user.nome}</span>
                </div>
                <div
                  className="font-semibold"
                  style={{ color: "#3B5474" }}
                >
                  {user.pontos}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ranking;
