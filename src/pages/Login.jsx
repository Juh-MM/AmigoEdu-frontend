import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png"; 

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "teste@email.com" && senha === "123456") {
      navigate("/home"); // vai para o dashboard
    } else {
      alert("E-mail ou senha incorretos!");
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{ backgroundColor: "#3D70B4" }}
    >
      <div className="bg-white rounded-3xl shadow-2xl p-10 w-96 flex flex-col items-center">
        {/* LOGO */}
        <img src={Logo} alt="Logo AmigoEdu" className="w-16 mb-4" />

        {/* TÍTULO */}
        <h1 className="text-3xl mb-8 flex gap-1 items-baseline">
          <span
            style={{
              color: "#3B5474",
              fontFamily: '"Saira Condensed", sans-serif',
              fontWeight: "700",
              letterSpacing: "1px",
            }}
          >
            AMIGO
          </span>
          <span
            style={{
              color: "#FDC240",
              fontFamily: '"Playwrite US Modern", sans-serif',
              fontWeight: "300",
              letterSpacing: "1px",
            }}
          >
            EDU
          </span>
        </h1>

        {/* FORMULÁRIO */}
        <form onSubmit={handleLogin} className="flex flex-col w-full gap-4">
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3D70B4]"
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3D70B4]"
            required
          />

          <div className="flex justify-end text-sm text-[#3D70B4] hover:underline cursor-pointer">
            Esqueci minha senha
          </div>

          <button
            type="submit"
            className="text-white font-semibold py-2 rounded-lg transition-all"
            style={{
              backgroundColor: "#FDC240",
              color: "#3B5474",
              fontWeight: "600",
            }}
          >
            Entrar
          </button>
        </form>

        <div className="mt-6 text-sm text-center">
          Não tem conta?{" "}
          <span
            className="font-semibold hover:underline cursor-pointer"
            style={{ color: "#3D70B4" }}
            onClick={() => navigate("/cadastro")}
          >
            Cadastre-se
          </span>
        </div>
      </div>
    </div>
  );
}
