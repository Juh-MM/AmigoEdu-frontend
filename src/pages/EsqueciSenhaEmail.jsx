import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../components/Input";
import Logo from "../components/Logo";

import AuthLayout from "../components/AuthLayout";
import AuthHeader from "../components/AuthHeader";
import CenterButton from "../components/CenterButton";
import AuthBackLink from "../components/AuthBackLink";

export default function EsqueciSenhaEmail() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      navigate("/verificar-codigo", { state: { email } });
    } catch (err) {
      alert("Erro ao enviar código");
    } finally {
      setLoading(false);
    }
  };

  return (
  <AuthLayout className="px-4">
    <div className="w-full max-w-md mx-auto flex flex-col items-center gap-6 py-8">
      <Logo />

      <AuthHeader
        title="Recuperar senha"
        subtitle="Informe seu e-mail e enviaremos um código de verificação."
      />

      <form onSubmit={handleSendEmail} className="flex flex-col w-full gap-4">
        <Input
          className="w-full"
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <div className="w-full">
          <CenterButton className="w-full" disabled={loading}>
            {loading ? "Enviando..." : "Enviar código"}
          </CenterButton>
        </div>
      </form>

      <AuthBackLink to="/" label="Voltar ao login" />
    </div>
  </AuthLayout>
);
}