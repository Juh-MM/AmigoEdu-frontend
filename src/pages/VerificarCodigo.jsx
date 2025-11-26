import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Logo from "../components/Logo";
import CenterButton from "../components/CenterButton";
import AuthLayout from "../components/AuthLayout";
import AuthHeader from "../components/AuthHeader";
import AuthBackLink from "../components/AuthBackLink";

export default function VerificarCodigo() {
  const [codigo, setCodigo] = useState(["", "", "", ""]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email;
  const inputsRef = [];

  if (!email) navigate("/esqueci-senha");

  const handleChange = (e, index) => {
    const val = e.target.value.replace(/\D/g, "");
    if (!val) return;

    const newCodigo = [...codigo];
    newCodigo[index] = val;
    setCodigo(newCodigo);

    if (index < 3) inputsRef[index + 1].focus();
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !codigo[index] && index > 0) {
      inputsRef[index - 1].focus();
    }
  };

  const handleVerifyCode = (e) => {
    e.preventDefault();
    setLoading(true);

    const codigoFinal = codigo.join("");

    if (codigoFinal.length !== 4) {
      alert("Digite os 4 dígitos.");
      setLoading(false);
      return;
    }

    navigate("/nova-senha", { state: { email } });
    setLoading(false);
  };

  return (
    <AuthLayout>
      <Logo />

      <AuthHeader
        title="Verificar código"
        subtitle={`Enviamos um código de 4 dígitos para: ${email}`}
      />

      <form onSubmit={handleVerifyCode} className="flex flex-col w-full">
        <div className="flex gap-3 justify-center mb-6">
          {codigo.map((num, index) => (
            <input
              key={index}
              ref={(el) => (inputsRef[index] = el)}
              maxLength={1}
              value={num}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="
                w-14 h-14 text-2xl text-center font-semibold
                border-2 rounded-xl outline-none
                focus:border-[#3D70B4] transition bg-white shadow-sm
              "
            />
          ))}
        </div>

        <CenterButton disabled={loading}>
          {loading ? "Verificando..." : "Confirmar código"}
        </CenterButton>
      </form>

      <AuthBackLink to="/esqueci-senha" label="Voltar" />
    </AuthLayout>
  );
}
