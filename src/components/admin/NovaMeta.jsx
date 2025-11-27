import MetaCardAdmin from "./MetaCardAdmin";
import api from "../../services/api";
import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";

export default function NovaMeta({ meta, onAtualizarLista, onEditar }) {
  const [loading, setLoading] = useState(false);

  async function deletar() {
    if (!confirm("Deseja excluir esta meta?")) return;

    try {
      setLoading(true);
      await api.delete(`/metas/${meta.id}`);
      onAtualizarLista();
    } catch (err) {
      alert("Erro ao deletar meta");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <MetaCardAdmin className="w-[330px] h-[230px] gap-3 relative">
      <h2 className="font-semibold text-lg">{meta.nome}</h2>
      <p className="text-sm opacity-70">{meta.descricao}</p>

      <span className="text-sm">Indicações: {meta.alvo_indicacoes}</span>
      <span className="text-sm">Recompensa: R$ {meta.recompensa}</span>

      <div className="absolute top-4 right-4 flex gap-3">
        <button
          className="hover:opacity-70"
          onClick={() => onEditar(meta)}
        >
          <Pencil size={20} />
        </button>

        <button
          className="hover:opacity-70 text-red-500"
          onClick={deletar}
        >
          <Trash2 size={20} />
        </button>
      </div>
    </MetaCardAdmin>
  );
}
