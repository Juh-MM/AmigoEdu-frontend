import { useState } from "react";
import { FaRegBell } from "react-icons/fa6";
import AlterarNotificacoes from "./AlterarNotificacoes";

export default function FormNotificacoes() {
  const [ligado, setLigado] = useState(true);
  const mudarEstado = () => setLigado(prev => !prev);

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col gap-8 bg-white p-6 sm:p-8 rounded-3xl shadow">

      {/* Header */}
      <div className="flex items-center gap-3">
        <FaRegBell className="text-2xl sm:text-3xl" />
        <h1 className="font-semibold text-lg sm:text-xl text-sky-950">
          Notificações
        </h1>
      </div>

      {/* Caixa de configuração */}
      <div className="
        w-full p-4 sm:p-5 rounded-2xl border border-gray-300
        flex flex-col gap-4
      ">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">

          {/* Texto */}
          <div className="flex-1">
            <span className="font-semibold text-sky-950 text-base sm:text-lg block">
              Notificações por E-mail
            </span>
            <span className="text-sm sm:text-base text-gray-700">
              Receber atualizações sobre suas indicações e recompensas
            </span>
          </div>

          {/* Switch */}
          <div className="flex-shrink-0">
            <AlterarNotificacoes ligado={ligado} mudarEstado={mudarEstado} />
          </div>
        </div>
      </div>

    </div>
  );
}
