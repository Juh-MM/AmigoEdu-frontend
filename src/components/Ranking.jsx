import { useEffect, useState } from "react";
import api from "../services/api";
import RankingTabs from "./RankingTabs";
import RankingLista from "./RankingLista";

export default function Ranking({ tabs, activeTab, onChangeTab }) {
  const [data, setData] = useState([]);

  // DEFINE QUAL ENDPOINT CHAMAR
  const rotas = {
    "Diário": "/ranking/diario",
    "Semanal": "/ranking/semanal",
    "Mensal": "/ranking/mensal",
    "Todos": "/ranking/todos"
  };

  useEffect(() => {
    async function carregar() {
      try {
        const resp = await api.get(
          rotas[activeTab] || "/ranking/todos"
        );

        setData(resp.data.data || []);
      } catch (error) {
        console.error("Erro ao carregar ranking:", error);
      }
    }

    carregar();
  }, [activeTab]);

  // CORES POR POSIÇÃO (mantidas iguaizinhas ao seu layout)
  const getColor = (pos) => {
    if (pos === 0) return "#D59300"; // 1°
    if (pos === 1) return "#818181"; // 2°
    if (pos === 2) return "#6B4111"; // 3°
    return "#B3B5B8"; // resto
  };

  return (
    <div className="flex flex-col">

      {/* TABS */}
      <RankingTabs
        tabs={tabs}
        activeTab={activeTab}
        onChange={onChangeTab}
      />

      {/* LISTAS */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">

        <RankingLista
          data={data.slice(0, 6)}
          baseIndex={1}
          corPosicao={(i) => getColor(i)}
        />

        <RankingLista
          data={data.slice(6)}
          baseIndex={7}
          corPosicao={() => "#B3B5B8"}
        />

      </div>
    </div>
  );
}
