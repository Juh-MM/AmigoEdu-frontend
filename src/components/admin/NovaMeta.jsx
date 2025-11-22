import MetaCardAdmin from "./MetaCardAdmin";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { useState } from "react";
import api from "../../services/api";

export default function NovaMeta({ meta, onAtualizarLista }) {
  const [form, setForm] = useState({
    nome: meta.nome || "",
    descricao: meta.descricao || "",
    tipo_periodicidade: meta.tipo_periodicidade || "unica",
    alvo_indicacoes: meta.alvo_indicacoes || 0,
    recompensa: meta.recompensa || "0.00",
    ativo: meta.ativo || true,
  });

  const [loading, setLoading] = useState(false);

  function alterar(campo, valor) {
    setForm({ ...form, [campo]: valor });
  }

  async function salvar() {
    try {
      setLoading(true);
      await api.put(`/metas/${meta.id}`, form);
      if (onAtualizarLista) onAtualizarLista();
    } catch (err) {
      console.error("Erro ao salvar meta:", err);
      alert("Não foi possível salvar a meta.");
    } finally {
      setLoading(false);
    }
  }

  async function deletar() {
    if (!confirm("Deseja realmente excluir esta meta?")) return;
    try {
      setLoading(true);
      await api.delete(`/metas/${meta.id}`);
      if (onAtualizarLista) onAtualizarLista();
    } catch (err) {
      console.error("Erro ao deletar meta:", err);
      alert("Não foi possível excluir a meta.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <MetaCardAdmin className="w-[702px] h-[380px] items-center gap-5">
      {/* Ícone */}
      <LiaUserFriendsSolid className="text-amber-400 text-8xl" />

      {/* Inputs */}
      <input
        type="text"
        placeholder="Adicione um título"
        className="w-[592.89px] h-[38px] border rounded-xl px-3 outline-none"
        value={form.nome}
        onChange={(e) => alterar("nome", e.target.value)}
      />
      <input
        type="text"
        placeholder="Adicione uma descrição"
        className="w-[592.89px] h-[38px] border rounded-xl px-3 outline-none"
        value={form.descricao}
        onChange={(e) => alterar("descricao", e.target.value)}
      />

      {/* Cards internos */}
      <div className="flex w-full justify-between mt-2 px-4">
        <div className="flex flex-col w-[283.96px] h-[92px] bg-white shadow rounded-2xl p-3">
          <span className="text-[12px] text-gray-600">Nº de indicações</span>
          <div className="flex flex-1 justify-center items-center">
            <span className="text-[30px] font-semibold">{form.alvo_indicacoes}</span>
          </div>
        </div>
        <div className="flex flex-col w-[283.96px] h-[92px] bg-white shadow rounded-2xl p-3">
          <span className="text-[12px] text-gray-600">Recompensa</span>
          <div className="flex flex-1 justify-center items-center">
            <span className="text-[30px] font-semibold">R$ {form.recompensa}</span>
          </div>
        </div>
      </div>

      {/* Botões */}
      <div className="flex gap-4 mt-3">
        <button
          className={`bg-[#3D70B4] text-white rounded-2xl w-[199.82px] h-[45px] flex justify-center items-center hover:bg-[#335d93] ${loading ? "opacity-60 pointer-events-none" : ""}`}
          onClick={salvar}
        >
          {loading ? "Salvando..." : "Salvar"}
        </button>
        <button
          className="bg-yellow-400 hover:bg-yellow-500 text-white rounded-2xl w-[199.82px] h-[45px] flex justify-center items-center"
          onClick={deletar}
        >
          Excluir
        </button>
      </div>
    </MetaCardAdmin>
  );
}
