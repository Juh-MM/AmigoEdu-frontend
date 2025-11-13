
export default function UserCard({
  nome,
  email,
  id,
  cpf,
  telefone,
  linkIndicacao,
  criadoEm,
  atualizadoEm,
  onEdit,
  onDelete,
}) {
  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <div style={styles.photo} />
        <div>
          <h3 style={styles.username}>{nome}</h3>
          <p style={styles.email}>{email}</p>
          <p style={styles.id}>ID: {id}</p>
          <p style={styles.cpf}>CPF: {cpf}</p>
        </div>
      </div>

      <div style={styles.info}>
        <p><strong>Telefone:</strong> {telefone}</p>
        <p><strong>Link de indicação:</strong> {linkIndicacao}</p>
        <p><strong>Criado em:</strong> {criadoEm}</p>
        <p><strong>Atualizado em:</strong> {atualizadoEm}</p>
      </div>

      <div style={styles.buttons}>
        <button style={styles.editBtn} onClick={onEdit}>Editar usuário</button>
        <button style={styles.deleteBtn} onClick={onDelete}>Excluir usuário</button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    width: "360px",
    background: "#fff",
    margin: "20px auto",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    display: "flex",
    gap: "15px",
  },
  photo: {
    width: "70px",
    height: "70px",
    background: "#ddd",
    borderRadius: "50%",
  },
  username: { margin: 0 },
  email: { margin: "4px 0", color: "#555" },
  id: { margin: "4px 0", fontSize: "14px", opacity: 0.7 },
  cpf: { margin: "4px 0", fontSize: "14px", opacity: 0.7 },

  info: {
    marginTop: "15px",
    fontSize: "14px",
    color: "#333",
  },

  buttons: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "15px",
  },
  editBtn: {
    background: "#2D9CDB",
    color: "#fff",
    padding: "8px 15px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
  },
  deleteBtn: {
    background: "#E0E0E0",
    color: "#000",
    padding: "8px 15px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
  },
};
