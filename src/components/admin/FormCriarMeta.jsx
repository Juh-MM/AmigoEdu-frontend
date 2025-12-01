import { useState, useEffect } from "react";
import MetaCardAdmin from "./MetaCardAdmin";
import api from "../../services/api";

export default function FormCriarMeta({ metaParaEditar, onCancelar, onSucesso }) {
  const [form, setForm] = useState({
    nome: "",
    descricao: "",
    tipo_periodicidade: "unica",
    alvo_indicacoes: 1,
    recompensa: "0.00",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (metaParaEditar) setForm(metaParaEditar);
  }, [metaParaEditar]);

  const alterar = (campo, valor) =>
    setForm({ ...form, [campo]: valor });

  async function salvar() {
    try {
      setLoading(true);

      if (metaParaEditar) {
        await api.put(`/metas/${metaParaEditar.id}`, form);
      } else {
        await api.post("/metas", form);
      }

      onSucesso();
    } catch (err) {
      alert("Erro ao salvar meta.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <MetaCardAdmin className="w-full max-w-[800px] h-auto gap-5 items-center">
      <h2 className="text-2xl font-semibold">
        {metaParaEditar ? "Editar Meta" : "Criar Meta"}
      </h2>

      <input
        className="w-[90%] border rounded-xl h-10 px-3"
        placeholder="Nome da meta"
        value={form.nome}
        onChange={(e) => alterar("nome", e.target.value)}
      />

      <input
        className="w-[90%] border rounded-xl h-10 px-3"
        placeholder="Descrição"
        value={form.descricao}
        onChange={(e) => alterar("descricao", e.target.value)}
      />

      {/* Labels adicionadas */}
      <div className="flex gap-4 w-[90%]">
        <div className="flex flex-col w-1/2">
          <label className="text-sm font-medium">Indicações</label>
          <input
            type="number"
            className="border rounded-xl h-10 px-3"
            value={form.alvo_indicacoes}
            onChange={(e) => alterar("alvo_indicacoes", e.target.value)}
          />
        </div>

        <div className="flex flex-col w-1/2">
          <label className="text-sm font-medium">Recompensa</label>
          <input
            className="border rounded-xl h-10 px-3"
            value={form.recompensa}
            onChange={(e) => alterar("recompensa", e.target.value)}
          />
        </div>
      </div>

      <div className="flex gap-4 mt-4">
        <button
          onClick={salvar}
          className="bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-2xl px-8 py-2"
        >
          {loading ? "Salvando..." : "Salvar"}
        </button>

        <button
          onClick={onCancelar}
          className="bg-gray-300 hover:bg-gray-400 rounded-2xl px-8 py-2"
        >
          Cancelar
        </button>
      </div>
    </MetaCardAdmin>
  );
}
