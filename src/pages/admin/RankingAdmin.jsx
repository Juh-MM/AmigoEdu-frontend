import { useState } from "react"; 
import Ranking from "../../components/admin/Ranking"; 
import axios from "axios"; 

export default function RankingAdmin() { 
  const [activeTab, setActiveTab] = useState("Diário"); 
  const tabs = ["Diário", "Semanal", "Mensal", "Todos"]; 
  
  return ( 
    <div className="flex flex-col mr-5">
      {/* TÍTULO*/}

      <div className="border-b border-gray-200 pb-6">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
           Ranking
        </h1>
        <p className="text-gray-600 mt-2">Posições atualizadas automaticamente</p>
      </div>

      {/* TABS */}
      <Ranking tabs={tabs} activeTab={activeTab} onChangeTab={setActiveTab} /> 
    </div> 
  ); 
}