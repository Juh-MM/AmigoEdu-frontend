import { useEffect, useState } from "react";
import api from "../../services/api";
import { FiEdit2, FiTrash2, FiX } from "react-icons/fi";

// Hook de debounce
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debouncedValue;
}

// Componente de Busca
function Busca({ value, onChange }) {
  return (
    <div className="w-full flex justify-center">
      <div className="relative w-[330px]">
        <input
          type="text"
          placeholder="Procurar usuário"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="
            w-full h-10 
            rounded-[30px] border border-[#dcdcdc]
            bg-white pl-[18px] pr-[45px]
            text-[16px] outline-none
            shadow-[0_3px_8px_rgba(0,0,0,0.08)]
          "
        />
        <svg
          className="absolute right-4 top-1/2 -translate-y-1/2 opacity-70 pointer-events-none"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#777"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>
    </div>
  );
}

// Card de gerenciamento de usuário
function Gerenciar({ usuario, onAtualizarLista }) {
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
      await api.delete(`/usuarios/${usuario.id}`);
      onAtualizarLista();
    } catch (err) {
      console.error("Erro ao deletar usuário:", err);
      alert("Não foi possível deletar o usuário.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* CARD */}
      <div className="bg-white p-4 rounded-xl border border-[#e5e5e5] mb-3 flex justify-between items-center w-full">
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
            className="bg-yellow-400 hover:bg-yellow-500 text-white p-2 rounded-full cursor-pointer transition-colors"
            onClick={deletar}
          >
            <FiTrash2 size={18} />
          </button>
        </div>
      </div>

      {/* MODAL */}
      {abrir && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="w-[330px] bg-white p-5 rounded-xl relative">
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

// Componente principal
export default function UsuariosGerenciar() {
  const [usuarios, setUsuarios] = useState([]);
  const [busca, setBusca] = useState("");
  const [loading, setLoading] = useState(true);

  const buscaDebounced = useDebounce(busca, 300);

  const carregarUsuarios = async () => {
    setLoading(true);
    try {
      const res = await api.get("/usuarios");
      setUsuarios(res.data || []);
    } catch (err) {
      console.error("Erro ao carregar usuários:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarUsuarios();
  }, []);

  const usuariosFiltrados = usuarios.filter((u) =>
    u.nome?.toLowerCase().includes(buscaDebounced.toLowerCase())
  );

  return (
    <div className="p-5">

      {/* TÍTULO ALINHADO COM O “Olá, Usuário” */}
      <div className="flex justify-start items-center text-4xl font-semibold mb-6 mt-8">
        Gerenciar Usuários
      </div>

      {/* BUSCA CENTRALIZADA MAIS ABAIXO */}
      <div className="flex justify-center mb-10">
        <Busca value={busca} onChange={setBusca} />
      </div>

      {/* LISTA DE USUÁRIOS EM 2 COLUNAS DESCENDO MAIS */}
      {loading ? (
        <p className="text-center mt-10 text-lg">Carregando usuários...</p>
      ) : usuariosFiltrados.length === 0 ? (
        <p className="mt-5 opacity-60 text-center text-[16px]">
          Nenhum usuário encontrado...
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 max-w-[900px] mx-auto">
          {usuariosFiltrados.map((u) => (
            <Gerenciar
              key={u.id}
              usuario={u}
              onAtualizarLista={carregarUsuarios}
            />
          ))}
        </div>
      )}
    </div>
  );
}
