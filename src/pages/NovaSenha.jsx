import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import Input from "../components/Input";
import Logo from "../components/Logo";

import AuthLayout from "../components/AuthLayout";
import AuthHeader from "../components/AuthHeader";
import CenterButton from "../components/CenterButton";
import AuthBackLink from "../components/AuthBackLink";

export default function NovaSenha() {
  const [senha, setSenha] = useState("");
  const [confirmar, setConfirmar] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email;
  if (!email) navigate("/esqueci-senha");

  const handleReset = (e) => {
    e.preventDefault();
    setLoading(true);

    if (senha !== confirmar) {
      alert("As senhas não coincidem!");
      setLoading(false);
      return;
    }

    alert("Senha redefinida com sucesso!");
    navigate("/");
  };

  return (
    <AuthLayout>
      <Logo />

      <AuthHeader title="Criar nova senha" />

      <form onSubmit={handleReset} className="flex flex-col w-full gap-4">
        <Input
          type="password"
          placeholder="Nova senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />

        <Input
          type="password"
          placeholder="Confirmar senha"
          value={confirmar}
          onChange={(e) => setConfirmar(e.target.value)}
          required
        />

        <CenterButton disabled={loading}>
          {loading ? "Salvando..." : "Salvar" }
        </CenterButton>
      </form>

      <AuthBackLink to="/" label="Voltar ao login" />
    </AuthLayout>
  );
}
