import { useState, useEffect } from "react";
import Ranking from "../../components/admin/Ranking"; // ou ajuste o caminho correto
import api from "../../services/api";

export default function RankingUser() {
  const [activeTab, setActiveTab] = useState("Diário");
  const [rankingData, setRankingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const tabs = ["Diário", "Semanal", "Mensal", "Todos"];

  useEffect(() => {
    async function carregarRanking() {
      setLoading(true);
      let endpoint = "/ranking/";

      switch (activeTab) {
        case "Diário":
          endpoint += "diario";
          break;
        case "Semanal":
          endpoint += "semanal";
          break;
        case "Mensal":
          endpoint += "mensal";
          break;
        case "Todos":
          endpoint += "todos";
          break;
        default:
          setLoading(false);
          return;
      }

      try {
        const response = await api.get(endpoint);
        const data = response.data?.data || [];
        const transformedData = data.map((item) => ({
          id: item.usuario_id,
          nome: item.nome,
          pontos: item.indicacoes_validadas,
        }));
        setRankingData(transformedData);
      } catch (error) {
        console.error("Erro ao carregar o ranking:", error);
        setRankingData([]); // Limpa os dados em caso de erro
      } finally {
        setLoading(false);
      }
    }

    carregarRanking();
  }, [activeTab]);


  return (
    <div className="flex flex-col m-5 mb-30 mt-0 md:mb-10 md:ml-0">
      <div className="border-b border-gray-200 pb-6">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
          Ranking
        </h1>
        <p className="text-gray-600 mt-2">Visualize sua posição no ranking</p>
      </div>

      {loading ? (
        <p className="text-gray-500">Carregando ranking...</p>
      ) : (
        <Ranking
          tabs={tabs}
          activeTab={activeTab}
          onChangeTab={setActiveTab}
          data={rankingData}
        />
      )}
    </div>
  );
}
