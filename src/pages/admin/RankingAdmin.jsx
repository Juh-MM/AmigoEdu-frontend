import { useState } from "react";
import Ranking from "../../components/admin/Ranking";

export default function RankingAdmin() {
  const [activeTab, setActiveTab] = useState("Diário");

  const tabs = ["Diário", "Semanal", "Mensal", "Todos"];

  return (
    <div className="flex flex-col m-5 mt-10">

      {/* TÍTULO */}
      <div className="flex flex-col gap-1">
        <h1 className="text-4xl font-semibold">Ranking geral</h1>
        <p className="mb-6 text-gray-700">
          Ranking de todos os usuários cadastrados.
        </p>
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
