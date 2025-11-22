import MetaCardAdmin from "./MetaCardAdmin";
import { IoAddCircle } from "react-icons/io5";
import { useState } from "react";
import api from "../../services/api";

export default function MetaCardCriar({ onMetaCriada }) {
  const [loading, setLoading] = useState(false);

  async function criarMeta() {
    try {
      setLoading(true);
      const novaMeta = {
        nome: "Nova Meta",
        descricao: "",
        tipo_periodicidade: "unica",
        alvo_indicacoes: 0,
        recompensa: "0.00",
        ativo: true,
      };
      const res = await api.post("/metas", novaMeta);
      if (onMetaCriada) onMetaCriada(res.data);
    } catch (err) {
      console.error("Erro ao criar meta:", err);
      alert("Não foi possível criar a meta.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <MetaCardAdmin
      className="w-[301px] h-[380px] items-center justify-center gap-4 cursor-pointer hover:bg-neutral-100 transition"
      onClick={criarMeta}
    >
      <IoAddCircle className="text-amber-400 text-9xl" />
      <h1 className="font-semibold text-xl text-center">
        {loading ? "Criando..." : "Criar nova meta"}
      </h1>
    </MetaCardAdmin>
  );
}
