import { useEffect, useState } from "react";
import api from "../../services/api";
import MetaCardCriar from "../../components/admin/MetaCardCriar";
import NovaMeta from "../../components/admin/NovaMeta";

export default function MetasAdmin() {
  const [metas, setMetas] = useState([]);
  const [loading, setLoading] = useState(true);

  const carregarMetas = async () => {
    setLoading(true);
    try {
      const res = await api.get("/metas");
      setMetas(res.data || []);
    } catch (err) {
      console.error("Erro ao carregar metas:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarMetas();
  }, []);

  const adicionarMetaNaLista = (novaMeta) => {
    setMetas([novaMeta, ...metas]);
  };

  return (
    <div className="p-5">
      {/* Título */}
      <div className="flex justify-start text-4xl font-semibold mb-4">
        Gerenciar Metas
      </div>

      {/* Cards */}
      <div className="flex flex-wrap gap-6 mt-4">
        {/* Card criar nova meta */}
        <MetaCardCriar onMetaCriada={adicionarMetaNaLista} />

        {/* Cards existentes */}
        {loading ? (
          <p className="text-center w-full mt-5">Carregando metas...</p>
        ) : metas.length === 0 ? (
          <p className="text-center w-full mt-5 opacity-60">Nenhuma meta encontrada...</p>
        ) : (
          metas.map((meta) => (
            <NovaMeta key={meta.id} meta={meta} onAtualizarLista={carregarMetas} />
          ))
        )}
      </div>
    </div>
  );
}
