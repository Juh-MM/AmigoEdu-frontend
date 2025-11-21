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

  const handleCadastro = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const idade = calcularIdade(dataNascimento);

      const usuario = { nome, telefone, email, cpf, idade, senha };

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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">

      {/* Card de cadastro */}
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg flex flex-col gap-6">

        <h1 className="text-2xl font-bold text-center text-sky-950">
          Cadastro
        </h1>

        <form onSubmit={handleCadastro} className="flex flex-col gap-4">

          {/* CAMPO */}
          <Field label="Nome" type="text" value={nome} onChange={setNome} />
          <Field label="Telefone" type="text" value={telefone} onChange={setTelefone} />
          <Field label="E-mail" type="email" value={email} onChange={setEmail} />
          <Field label="CPF" type="text" value={cpf} onChange={setCpf} />
          <Field label="Data de nascimento" type="date" value={dataNascimento} onChange={setDataNascimento} />
          <Field label="Senha" type="password" value={senha} onChange={setSenha} />

          {/* Botão */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-sky-600 hover:bg-sky-700 disabled:bg-gray-400 text-white font-semibold py-3 rounded-xl transition"
          >
            {loading ? "Enviando..." : "Cadastrar"}
          </button>
        </form>
      </div>

    </div>
  );
}

function Field({ label, type, value, onChange }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-sky-950">{label}</label>

      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
        className="
          w-full p-3 rounded-xl border border-gray-300 
          focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200
          transition text-sm
        "
      />
    </div>
  );
}
