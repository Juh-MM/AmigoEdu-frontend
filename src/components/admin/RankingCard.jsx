import api from "../../services/api";
import { useEffect, useState } from "react";

export default function RankingCard({ posicao, usuario, corPosicao }) {
  const [data, setData] = useState([]);
  const [pontos, setPontos] = useState(null);
  
  useEffect(() => {
    if (!usuario?.usuario_id) return;

    async function pegarPontos() {
      try {
        const resp = await api.get(`/gamificacao/usuario/${usuario.usuario_id}`);

        // extrai o valor de pontos/metas de forma tolerante às variações de resposta
        const body = resp?.data ?? {};
        const valor =
          body.pontos ??
          body.pontos_total ??
          body.pontos_totais ??
          body.metas_batidas ??
          body.indicacoes_validadas ??
          null;

        setPontos(valor);
      } catch (error) {
        console.error("Erro ao carregar pontos:", error);
        setPontos(null);
      }
    } 

    pegarPontos();
  }, [usuario?.usuario_id]);

  return (
    <div className="flex items-center justify-between bg-white p-5 rounded-3xl shadow-md hover:shadow-lg transition">
      <div className="flex items-center space-x-4">
        <div
          className="font-bold w-6 text-center"
          style={{ color: corPosicao }}
        >
          {posicao}
        </div>
        <img
          src="/user.png" 
          alt={usuario.nome}
          className="w-12 h-12 rounded-full object-cover"
        />
        <span className="font-medium text-[#3D70B4]">
          {usuario.nome}
        </span>
      </div>
      <div className="font-semibold text-[#3B5474]">
        {pontos ?? usuario.indicacoes_validadas ?? "—"}
      </div>
    </div>
  )
}