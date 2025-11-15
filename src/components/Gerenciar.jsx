import { useState } from "react";
import { FiEdit2, FiTrash2, FiX } from "react-icons/fi";

export default function Gerenciar({ usuario, onAtualizarLista }) {
  const [abrir, setAbrir] = useState(false);
  const [form, setForm] = useState({
    nome: usuario.nome,
    email: usuario.email,
    telefone: usuario.telefone,
    idade: usuario.idade,
  });

  function alterar(campo, valor) {
    setForm({ ...form, [campo]: valor });
  }

  async function salvarAlteracoes() {
    await fetch(`http://localhost:3000/usuarios/${usuario.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    onAtualizarLista();
    setAbrir(false);
  }

  async function deletar() {
    if (!confirm("Deseja realmente excluir este usuário?")) return;

    await fetch(`http://localhost:3000/usuarios/${usuario.id}`, {
      method: "DELETE",
    });

    onAtualizarLista();
  }

  return (
    <>
      {/* CARD */}
      <div className="bg-white p-4 rounded-xl border border-[#e5e5e5] mb-3 flex justify-between items-center">
        <div>
          <div className="text-[17px] font-bold mb-1">{usuario.nome}</div>
          <div className="text-[14px] opacity-60">{usuario.email}</div>
        </div>

        <div className="flex gap-3">
          <button
            className="bg-[#0066FF] text-white p-2 rounded-full cursor-pointer"
            onClick={() => setAbrir(true)}
          >
            <FiEdit2 size={18} />
          </button>

          <button
            className="bg-[#FF3B3B] text-white p-2 rounded-full cursor-pointer"
            onClick={deletar}
          >
            <FiTrash2 size={18} />
          </button>
        </div>
      </div>

      {/* MODAL */}
      {abrir && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
          <div className="w-[330px] bg-white p-5 rounded-xl">
            <div className="flex justify-between mb-4">
              <h3 className="text-[18px] font-semibold">Gerenciar Usuário</h3>
              <FiX
                size={22}
                className="cursor-pointer"
                onClick={() => setAbrir(false)}
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
              className="bg-[#0066FF] text-white w-full p-3 rounded-lg text-[15px] cursor-pointer"
              onClick={salvarAlteracoes}
            >
              Salvar Alterações
            </button>
          </div>
        </div>
      )}
    </>
  );
}
