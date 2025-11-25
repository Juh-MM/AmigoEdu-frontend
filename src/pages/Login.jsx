import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import Input from "../components/Input";
import Button from "../components/Button";
import { login } from "../services/authService";

export default function Login() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // ➕ Login fixo de admin
      if (email === "Admin@teste.com" && senha === "123") {
        localStorage.setItem("user", JSON.stringify({ email, role: "admin", nome: "Admin" }));
        navigate("/admin/visao-geral"); // 🔹 Redireciona para página do admin
        return;
      }

      // Login normal de usuários
      const data = await login(email, senha);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/home");

    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: "#3D70B4" }}>
      <div className="bg-white rounded-3xl shadow-2xl p-10 w-96 flex flex-col items-center">
        <Logo />

        <form onSubmit={handleLogin} className="flex flex-col w-full gap-4">
          <Input type="email" placeholder="Digite seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input type="password" placeholder="Digite sua senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
          <div className="flex justify-start text-sm text-[#3D70B4] hover:underline cursor-pointer">Esqueci minha senha</div>
          <div className="flex justify-center"><Button disabled={loading}>{loading ? "Entrando..." : "Entrar"}</Button></div>
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