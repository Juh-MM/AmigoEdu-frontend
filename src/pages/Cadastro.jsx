import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Logo from "../components/Logo";
import Input from "../components/Input";
import Button from "../components/Button";
import { register } from "../services/authService"; // Função que chama a API

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [data_nascimento, setData_nascimento] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleCadastro = async (e) => {
    e.preventDefault(); // impede o reload da página
    setLoading(true);

    try {
      const usuario = { nome, data_nascimento, email, telefone, cpf, senha };
      const data = await register(usuario);
      alert("✅ Cadastro realizado com sucesso!");
      navigate("/login");
    } catch (err) {
      alert("❌ Erro ao cadastrar: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
  <div
    className="flex items-center justify-center min-h-screen px-4"
    style={{ backgroundColor: "#3D70B4" }}
  >
    <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10 w-full max-w-3xl flex flex-col items-center">
      <Logo />

      <p className="text-[#3B5474] font-medium text-sm mt-2 mb-4 text-center">
        Preencha os campos a seguir:
      </p>

      <form
        onSubmit={handleCadastro}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"
      >
        <Input
          className="w-full"
          type="text"
          placeholder="Digite seu nome completo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <Input
          className="w-full"
          type="date"
          placeholder="Data de nascimento"
          value={data_nascimento}
          onChange={(e) => setData_nascimento(e.target.value)}
        />

        <Input
          className="w-full"
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          className="w-full"
          type="text"
          placeholder="Digite seu telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />

        <Input
          className="w-full"
          type="text"
          placeholder="Digite seu CPF"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />

        <Input
          className="w-full"
          type="password"
          placeholder="Crie uma senha forte"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <div className="col-span-1 sm:col-span-2 flex flex-col sm:flex-row justify-between items-center mt-4 w-full gap-3">
          <span
            className="text-sm text-[#3D70B4] hover:underline cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Retornar
          </span>

          <div className="w-full flex justify-center sm:w-auto">
            <Button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto"
            >
              {loading ? "Cadastrando..." : "Cadastrar"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  </div>
);
}