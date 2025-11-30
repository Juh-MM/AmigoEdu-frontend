import { useState } from "react";
import { FiEdit2, FiTrash2, FiX } from "react-icons/fi";
import { MdBlock } from "react-icons/md";
import api from "../../services/api";

export default function GerenciarUsuario({ usuario, onAtualizarLista }) {
  const [abrir, setAbrir] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    nome: usuario.nome || "",
    email: usuario.email || "",
    telefone: usuario.telefone || "",
    idade: usuario.idade || "",
  });

  function alterar(campo, valor) {
    setForm({ ...form, [campo]: valor });
  }

  async function salvarAlteracoes() {
    try {
      setLoading(true);
      await api.put(`/usuarios/${usuario.id}`, form);
      onAtualizarLista();
      setAbrir(false);
    } catch (err) {
      console.error("Erro ao salvar alterações:", err);
      alert("Não foi possível salvar alterações.");
    } finally {
      setLoading(false);
    }
  }

  async function deletar() {
    if (!confirm("Deseja realmente excluir este usuário?")) return;

    try {
      setLoading(true);
      await api.delete(`/admin/usuarios/${usuario.id}`);
      onAtualizarLista();
    } catch (err) {
      console.error("Erro ao deletar usuário:", err);
      alert("Não foi possível deletar o usuário.");
    } finally {
      setLoading(false);
    }
  }

  // async function suspender() {
  //   try {
  //     setLoading(true);
  //     await api.post(`/usuarios/${usuario.id}/suspender`);
  //     onAtualizarLista();
  //   } catch (err) {
  //     console.error("Erro ao suspender usuário:", err);
  //     alert("Não foi possível suspender o usuário.");
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  return (
  <>
    {/* CARD */}
    <div className="bg-white p-4 rounded-xl mb-3 gap-3 flex flex-col sm:flex-row justify-between items-start sm:items-center w-full shadow hover:shadow-lg transition">
      {/* Info */}
      <div className="w-full sm:w-2/3">
        <div className="text-lg sm:text-xl font-bold mb-1 truncate">{usuario.nome}</div>
        <div className="text-sm sm:text-base opacity-60 truncate">E-mail: {usuario.email}</div>
        <div className="text-sm sm:text-base opacity-60">CPF: {usuario.cpf}</div>
        <div className="text-sm sm:text-base opacity-60">Id: {usuario.id}</div>
      </div>

      {/* Ações */}
      <div className="w-full sm:w-auto mt-3 sm:mt-0 flex flex-row sm:flex-col gap-2 sm:gap-3 items-center sm:items-end">
        <button
          className="flex-shrink-0 bg-[#0066FF] text-white p-2 rounded-full cursor-pointer"
          onClick={() => setAbrir(true)}
          aria-label={`Editar ${usuario.nome}`}
          title="Editar usuário"
        >
          <FiEdit2 size={18} />
        </button>

        <button
          className="flex-shrink-0 bg-gray-400 hover:bg-gray-500 text-white p-2 rounded-full cursor-pointer transition-colors"
          aria-label={`Suspender ${usuario.nome}`}
          title="Suspender usuário"
        >
          <MdBlock size={18} />
        </button>

        <button
          className="flex-shrink-0 bg-yellow-400 hover:bg-yellow-500 text-white p-2 rounded-full cursor-pointer transition-colors"
          onClick={deletar}
          aria-label={`Deletar ${usuario.nome}`}
          title="Deletar usuário"
        >
          <FiTrash2 size={18} />
        </button>
      </div>
    </div>

    {/* MODAL */}
    {abrir && (
      <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 p-4">
        <div className="w-full max-w-md bg-white p-4 sm:p-5 rounded-xl relative">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[18px] font-semibold">Gerenciar Usuário</h3>
            <FiX
              size={22}
              className="cursor-pointer"
              onClick={() => setAbrir(false)}
              aria-label="Fechar modal"
              title="Fechar"
            />
          </div>

          <input
            className="w-full p-3 border border-gray-300 rounded-lg mb-3 text-[15px]"
            value={form.nome}
            onChange={(e) => alterar("nome", e.target.value)}
            placeholder="Nome"
          />
          <input
            className="w-full p-3 border border-gray-300 rounded-lg mb-3 text-[15px]"
            value={form.email}
            onChange={(e) => alterar("email", e.target.value)}
            placeholder="Email"
          />
          <input
            className="w-full p-3 border border-gray-300 rounded-lg mb-3 text-[15px]"
            value={form.telefone}
            onChange={(e) => alterar("telefone", e.target.value)}
            placeholder="Telefone"
          />
          <input
            className="w-full p-3 border border-gray-300 rounded-lg mb-3 text-[15px]"
            type="number"
            value={form.idade}
            onChange={(e) => alterar("idade", e.target.value)}
            placeholder="Idade"
          />

          <button
            className={`bg-[#0066FF] text-white w-full p-3 rounded-lg text-[15px] cursor-pointer ${
              loading ? "opacity-60 pointer-events-none" : ""
            }`}
            onClick={salvarAlteracoes}
          >
            {loading ? "Salvando..." : "Salvar Alterações"}
          </button>
        </div>
      </div>
    )}
  </>

  );
}
