import { useState } from "react";
import { register } from "../services/authService";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {

  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // ---------------------------
  // 🔢 CALCULAR IDADE
  // ---------------------------
  function calcularIdade(data) {
    const hoje = new Date();
    const nascimento = new Date(data);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }
    return idade;
  }

  // ---------------------------
  // 📝 SUBMIT
  // ---------------------------
  const handleCadastro = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const idade = calcularIdade(dataNascimento);

      const usuario = {
        nome,
        telefone,
        email,
        cpf,
        idade,
        senha,
      };

      await register(usuario);

      alert("Cadastro realizado com sucesso!");
      navigate("/login");

    } catch (err) {
      alert("Erro: " + err.message);

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cadastro-container">
      <h1>Cadastro</h1>

      <form onSubmit={handleCadastro}>

        <label>Nome:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <label>Telefone:</label>
        <input
          type="text"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          required
        />

        <label>E-mail:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>CPF:</label>
        <input
          type="text"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          required
        />

        <label>Data de nascimento:</label>
        <input
          type="date"
          value={dataNascimento}
          onChange={(e) => setDataNascimento(e.target.value)}
          required
        />

        <label>Senha:</label>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Enviando..." : "Cadastrar"}
        </button>

      </form>
    </div>
  );
}
