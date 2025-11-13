
export default function Busca({ value, onChange }) {
  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Procurar usuário"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={styles.input}
      />
      <span style={styles.icon}>🔍</span>
    </div>
  );
}

const styles = {
  container: {
    position: "relative",
    width: "260px",
    margin: "20px auto",
  },
  input: {
    width: "100%",
    height: "40px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    paddingLeft: "12px",
    paddingRight: "40px",
    fontSize: "15px",
  },
  icon: {
    position: "absolute",
    right: "12px",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "18px",
    opacity: 0.6,
    cursor: "pointer",
  },
};
