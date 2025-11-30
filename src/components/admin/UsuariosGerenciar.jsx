import { useState } from "react";
import { FiEdit2, FiTrash2, FiX } from "react-icons/fi";
import { MdBlock } from "react-icons/md";
import api from "../../services/api";

export default function GerenciarUsuario({ usuario, onAtualizarLista }) {
  const [abrir, setAbrir] = useState(false);
  const [loading, setLoading] = useState(false);
  const [suspenso, setSuspenso] = useState(usuario.suspended || false); // Estado local
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
      await api.put(`/admins/users/${usuario.id}`, form);
      // Atualiza local sem recarregar lista completa
      usuario.nome = form.nome;
      usuario.email = form.email;
      usuario.telefone = form.telefone;
      usuario.idade = form.idade;
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
      await api.delete(`/admins/usuarios/${usuario.id}`);
      onAtualizarLista();
    } catch (err) {
      console.error("Erro ao deletar usuário:", err);
      alert("Não foi possível deletar o usuário.");
    } finally {
      setLoading(false);
    }
  }

async function suspender() {
  try {
    setLoading(true);
    await api.patch(`/admins/users/${usuario.id}/suspender`, { suspended: !suspenso });
    setSuspenso(prev => !prev); // Atualiza só o card
  } catch (err) {
    console.error("Erro ao suspender usuário:", err);
    alert("Não foi possível suspender o usuário.");
  } finally {
    setLoading(false);
  }
}


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

        <div className="flex gap-3">
          <button
            className="bg-[#0066FF] text-white p-2 rounded-full cursor-pointer"
            onClick={() => setAbrir(true)}
            aria-label={`Editar ${usuario.nome}`}
            title="Editar usuário"
          >
            <FiEdit2 size={18} />
          </button>

          <button
            className={`${
              suspenso ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"
            } text-white p-2 rounded-full cursor-pointer transition-colors ${
              loading ? "opacity-60 pointer-events-none" : ""
            }`}
            onClick={suspender}
            aria-label={suspenso ? `Reativar ${usuario.nome}` : `Suspender ${usuario.nome}`}
            title={suspenso ? "Reativar usuário" : "Suspender usuário"}
          >
            <FiClock size={18} />
          </button>

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
