import { useState } from "react"; 
import Ranking from "../../components/admin/Ranking"; 
import axios from "axios"; 

export default function RankingAdmin() { 
  const [activeTab, setActiveTab] = useState("Diário"); 
  const tabs = ["Diário", "Semanal", "Mensal", "Todos"]; 
  
  return ( 
    <div className="flex flex-col mr-5">
      
      {/* TABS */}
      <Ranking tabs={tabs} activeTab={activeTab} onChangeTab={setActiveTab} /> 
    </div> 
  ); 
}