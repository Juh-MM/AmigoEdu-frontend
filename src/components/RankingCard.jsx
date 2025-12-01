import api from "../services/api";
import { useEffect, useState } from "react";
import defaultAvatar from "../assets/user1.jpg";

export default function RankingCard({ posicao, usuario, corPosicao }) {
  const [data, setData] = useState([]);
  const [pontos, setPontos] = useState(null);
  
  useEffect(() => {
    const userId = usuario?.usuario_id ?? usuario?.id ?? usuario?.usuario?.id;
    if (!userId) return;

    async function pegarPontos() {
      try {
        const resp = await api.get(`/gamificacao/usuario/${userId}`);

        const body = resp?.data?.data ?? resp?.data ?? {};
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
  }, [usuario]);

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
          src={
            usuario?.avatar_url || usuario?.avatar || usuario?.imagem || defaultAvatar
          }
          alt={usuario?.nome ?? 'Usuário'}
          className="w-12 h-12 rounded-full object-cover"
        />
        <span className="font-medium text-[#3D70B4]">
          {usuario?.nome}
        </span>
      </div>
      <div className="font-semibold text-[#3B5474]">
        {pontos ?? usuario.indicacoes_validadas ?? "—"}
      </div>
    </div>
  )
}