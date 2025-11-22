import { useEffect, useState } from "react";
import api from "../../services/api";

export default function Dashboard() {
  const [usuarios, setUsuarios] = useState([]);
  const [indicacoesValidas, setIndicacoesValidas] = useState(0);
  const [saques, setSaques] = useState(0);
  const [rendaTotal, setRendaTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const res = await api.get("/usuarios");
        const data = Array.isArray(res.data) ? res.data : [];
        setUsuarios(data);

        // cálculo seguro das métricas
        const indicacoesCount = data.filter(u => u.gamificacao && u.gamificacao.pontos >= 10).length;
        const saquesCount = data.filter(u => u.gamificacao && u.gamificacao.metas_batidas > 0).length;
        const renda = data.reduce((acc, u) => acc + ((u.gamificacao?.pontos || 0) * 10), 0);

        setIndicacoesValidas(indicacoesCount);
        setSaques(saquesCount);
        setRendaTotal(renda);

      } catch (err) {
        console.error("Erro ao buscar dados do dashboard:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return <p className="text-center mt-10 text-lg">Carregando dashboard...</p>;
  }

  return (
    <div className="flex flex-wrap gap-10 justify-center items-center mt-10">

      {/* Usuários cadastrados */}
      <div className="flex flex-col justify-center bg-neutral-50 py-7 px-9 rounded-2xl items-center shadow hover:shadow-lg transition">
        <span className="font-medium text-3xl">{usuarios.length}</span>
        <h1 className="text-sky-800 text-base font-semibold mt-2">Usuários Cadastrados</h1>
      </div>

      {/* Indicações válidas */}
      <div className="flex flex-col justify-center bg-neutral-50 py-7 px-9 rounded-2xl items-center shadow hover:shadow-lg transition">
        <span className="font-medium text-3xl">{indicacoesValidas}</span>
        <h1 className="text-sky-800 text-base font-semibold mt-2">Indicações válidas</h1>
      </div>

      {/* Saques solicitados */}
      <div className="flex flex-col justify-center bg-neutral-50 py-7 px-9 rounded-2xl items-center shadow hover:shadow-lg transition">
        <span className="font-medium text-3xl">{saques}</span>
        <h1 className="text-sky-800 text-base font-semibold mt-2">Saques Solicitados</h1>
      </div>

      {/* Renda total gerada */}
      <div className="flex flex-col justify-center bg-neutral-50 py-7 px-9 rounded-2xl items-center shadow hover:shadow-lg transition">
        <span className="font-medium text-3xl">R$ {rendaTotal}</span>
        <h1 className="text-sky-800 text-base font-semibold mt-2">Renda Total Gerada</h1>
      </div>

    </div>
  );
}
