import { useState } from "react";
import Ranking from "../components/Ranking";

export default function RankingAdmin() {
  const [activeTab, setActiveTab] = useState("Diário");

  const tabs = ["Diário", "Semanal", "Mensal", "Todos"];

  return (
    <div className="flex flex-col m-5 mb-30 md:m-0 md:mr-5 md:mb-0">

      {/* TÍTULO */}
      <div className="border-b border-gray-200 pb-6">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
            Ranking
            </h1>
          <p className="text-gray-600 mt-2">Visualize seu ranking atual</p>
      </div>

      {/* TABS */}
      <Ranking
        tabs={tabs}
        activeTab={activeTab}
        onChangeTab={setActiveTab}
      />

    </div>
  );
}
