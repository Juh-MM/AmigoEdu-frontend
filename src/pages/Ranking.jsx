import React, { useState } from "react";
import User1 from "../assets/user1.jpg";

import RankingTabs from "../components/Ranking";
import RankingList from "../components/RankingLista";
import RankingCard from "../components/RankingCard";

export default function Ranking() {
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

  // Função que determina cor da posição
  const getColor = (pos) => {
    if (pos === 0) return "#D59300"; // 1°
    if (pos === 1) return "#818181"; // 2°
    if (pos === 2) return "#6B4111"; // 3°
    return "#B3B5B8"; // resto
  };

  return (
    <div className="flex flex-col m-5 mt-0">

      {/* TÍTULO */}
      <div className="flex flex-col gap-1">
        <h1 className="text-4xl font-semibold">Ranking geral</h1>
        <p className="mb-6 text-gray-700">
          Ranking de todos os usuários cadastrados.
        </p>
      </div>

      {/* TABS */}
      <RankingTabs
        tabs={tabs}
        activeTab={activeTab}
        onChange={setActiveTab}
      />

      {/* LISTAS */}
      <div className="mt-8 grid grid-cols-2 gap-8">
        <RankingList
          data={rankingData}
          baseIndex={1}
          corPosicao={(i) => getColor(i)}
        />

        <RankingList
          data={rankingData}
          baseIndex={7}
          corPosicao={() => "#B3B5B8"}
        />
      </div>
    </div>
  );
}
