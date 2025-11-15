import { useEffect, useState } from "react";
import Busca from "../components/Busca";
import Gerenciar from "../components/Gerenciar";

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [busca, setBusca] = useState("");

  async function carregarUsuarios() {
    try {
      const response = await fetch("http://localhost:3000/usuarios");
      const data = await response.json();
      setUsuarios(data);
    } catch (error) {
      console.error("Erro ao carregar usuários:", error);
    }
  }

  useEffect(() => {
    carregarUsuarios();
  }, []);

  const usuariosFiltrados = usuarios.filter((u) =>
    u.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
  <div className="p-5">

    {/* TÍTULO PRINCIPAL — ESTILO IGUAL AO DAS METAS */}
    <div className="flex flex-col text-4xl gap-1 mb-6 text-left">
      <h1 className="font-semibold">Gerenciar Usuários</h1>
    </div>

    {/* BUSCA — CENTRALIZADA */}
    <div className="w-full flex justify-center mb-6">
      <Busca value={busca} onChange={setBusca} />
    </div>


      {/* AGRUPAMENTO CENTRALIZADO APENAS DA LISTA */}
      <div className="max-w-[600px] mx-auto">


        {usuariosFiltrados.length === 0 ? (
          <p className="mt-5 opacity-60 text-center text-[16px]">
            Nenhum usuário encontrado...
          </p>
        ) : (
          usuariosFiltrados.map((u) => (
            <Gerenciar
              key={u.id}
              usuario={u}
              onAtualizarLista={carregarUsuarios}
            />
          ))
        )}
      </div>
    </div>
  );
}
