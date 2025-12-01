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
    <MetaCardAdmin className="w-full relative flex flex-col justify-between gap-1">
      <h2 className="font-semibold text-xl">{meta.nome}</h2>
      <p className="text-base opacity-70">{meta.descricao}</p>

      <span className="text-sm text-sky-900">Indicações: {meta.alvo_indicacoes}</span>
      <span className="text-sm text-sky-900">Recompensa: R$ {meta.recompensa}</span>
      <span className="text-sm text-sky-900">Id: {meta.id}</span>

      <div className="absolute top-7 right-7 flex gap-3">
        <button
          className="hover:opacity-70 text-sky-600"
          onClick={() => onEditar(meta)}
        >
          <Pencil size={20} />
        </button>

        <button
          className="hover:opacity-70 text-amber-500"
          onClick={deletar}
        >
          <Trash2 size={20} />
        </button>
      </div>
    </MetaCardAdmin>
  );
}
