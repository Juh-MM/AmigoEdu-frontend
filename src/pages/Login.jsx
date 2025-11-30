// src/pages/Login.jsx (ajustes mínimos)
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../components/Logo";
import Input from "../components/Input";
import Button from "../components/Button";
import useAuth from "../hooks/useAuth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { login, loading, user } = useAuth();

  const from = location.state?.from?.pathname || (user?.role === "admin" ? "/admin/visao-geral" : "/home");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const loggedUser = await login(email, senha);

      // redireciona dependendo da role
      if (loggedUser?.role === "admin") {
        navigate("/admin/visao-geral", { replace: true });
      } else {
        navigate(from, { replace: true });
      }
    } catch (err) {
      alert(err?.message || "Erro ao logar");
    }
  };

  return (
  <div
    className="flex items-center justify-center min-h-screen px-4"
    style={{ backgroundColor: "#3D70B4" }}
  >
    <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10 w-full max-w-sm flex flex-col items-center">
      <Logo />

      <form onSubmit={handleLogin} className="flex flex-col w-full gap-4 mt-4">
        <Input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <div
          className="flex justify-start text-sm text-[#3D70B4] hover:underline cursor-pointer"
          onClick={() => navigate("/esqueci-senha")}
        >
          Esqueci minha senha
        </div>

        <div className="flex justify-center">
          <Button disabled={loading}>
            {loading ? "Entrando..." : "Entrar"}
          </Button>
        </div>
      </form>

      <div className="mt-6 text-sm text-center">
        Não tem conta?{" "}
        <span
          className="font-semibold hover:underline cursor-pointer text-[#3D70B4]"
          onClick={() => navigate("/cadastro")}
        >
          Cadastre-se
        </span>
      </div>
    </div>
  </div>
);
}