import React, { useEffect, useState } from "react";
import Gerenciar from "../components/Gerenciar";
import Busca from "../components/Busca";

export default function Usuarios() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  // Carregar usuários da API
  useEffect(() => {
    fetch("http://localhost:3000/usuarios")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Erro ao carregar usuários:", err));
  }, []);

  const filteredUsers = users.filter((u) =>
    u.nome.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>
        Usuários Cadastrados
      </h1>

      <Busca value={search} onChange={setSearch} />

      {filteredUsers.length > 0 ? (
        filteredUsers.map((user) => (
          <UserCard
            key={user.id}
            nome={user.nome}
            email={user.email}
            id={user.id}
            cpf={user.cpf}
            telefone={user.telefone}
            linkIndicacao={user.linkIndicacao}
            criadoEm={user.createdAt}
            atualizadoEm={user.updatedAt}
            onEdit={() => alert("Editar " + user.nome)}
            onDelete={() => alert("Excluir " + user.nome)}
          />
        ))
      ) : (
        <p style={{ marginTop: "20px", opacity: 0.6 }}>Nenhum usuário encontrado...</p>
      )}
    </div>
  );
}
