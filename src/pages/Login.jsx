import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../components/Logo";
import Input from "../components/Input";
import Button from "../components/Button";
import useAuth from "../hooks/useAuth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const { login, loading, user } = useAuth();

  const from =
    location.state?.from?.pathname ||
    (user?.role === "admin" ? "/admin/visao-geral" : "/home");

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    try {
      const loggedUser = await login(email, senha);

      if (loggedUser?.role === "admin") {
        navigate("/admin/visao-geral", { replace: true });
      } else {
        navigate(from, { replace: true });
      }

    } catch (err) {
      console.error("Erro no login:", err);

      let message = "Erro ao fazer login. Tente novamente.";

      // ❗ Erro de conexão (sem resposta do servidor)
      if (!err.response) {
        message =
          "Não foi possível conectar ao servidor. Verifique sua internet ou tente novamente.";
      } else {
        const status = err.response.status;

        switch (status) {
          case 400:
            message = "Dados inválidos. Verifique email e senha.";
            break;
          case 401:
            message = "Credenciais incorretas.";
            break;
          case 403:
            message = "Acesso negado. Sua conta pode estar suspensa.";
            break;
          case 404:
            message = "Usuário não encontrado.";
            break;
          case 500:
            message = "Erro interno no servidor. Tente novamente.";
            break;

          // ❗ Aqui removemos o bloqueio de limite de tentativas
          case 429:
            message =
              "Servidor ocupado no momento. Tente novamente agora mesmo.";
            break;

          default:
            message = "Erro inesperado. Tente novamente.";
        }
      }

      setErrorMsg(message);
      setTimeout(() => setErrorMsg(""), 6000);
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{ backgroundColor: "#3D70B4" }}
    >
      <div className="bg-white rounded-3xl shadow-2xl p-10 w-96 flex flex-col items-center">
        <Logo />

        <form onSubmit={handleLogin} className="flex flex-col w-full gap-4">
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

          {errorMsg && (
            <div className="text-red-600 text-sm text-center">{errorMsg}</div>
          )}

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
