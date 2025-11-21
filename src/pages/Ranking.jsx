import React, { useState } from "react";
import User1 from '../assets/user1.jpg';
import RankingCard from "../components/RankingCard";
import Tabs from "../components/RankingTabs";

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

  return (
    <div className="flex-1 bg-gray-50 min-h-screen p-4 sm:p-6 md:p-8">

      <h1 className="text-2xl sm:text-3xl font-semibold mb-1">Ranking geral</h1>
      <p className="mb-6 text-gray-700 text-sm sm:text-base">
        Parabéns, <span className="font-medium">Maria Luiza</span>. Você está no top 3!
      </p>

      {/* Tabs Component */}
      <Tabs 
        tabs={tabs}
        activeTab={activeTab}
        onChange={setActiveTab}
      />

      {/* Ranking Cards */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {rankingData.map((user, index) => (
          <RankingCard
            key={user.id}
            position={index + 1}
            nome={user.nome}
            pontos={user.pontos}
            img={user.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Ranking;
