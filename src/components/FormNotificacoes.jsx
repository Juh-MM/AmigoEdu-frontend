import { useState } from "react";
import { FaRegBell } from "react-icons/fa6";
import AlterarNotificacoes from "./AlterarNotificacoes";

export default function FormNotificacoes() {
  const [ligado, setLigado] = useState(true);

  const mudarEstado = () => setLigado(prev => !prev);

  return (
    <div className="flex flex-col gap-9 bg-white p-7 rounded-3xl shadow">
      <div className="flex flex-col gap-5 justify-center">
        <div className="flex flex-row items-center gap-2">
          <FaRegBell className="text-2xl" />
          <h1 className="font-semibold text-lg">Notificações</h1>
        </div>

        <div className="flex flex-col outline rounded-2xl w-full p-3 gap-2">
          <div className="flex justify-between items-center">
            <div>
              <span className="font-semibold text-sky-950 text-base block">
                Notificações por E-mail
              </span>
              <span className="text-sm">
                Receber atualizações sobre suas indicações e recompensas
              </span>
            </div>
            <AlterarNotificacoes ligado={ligado} mudarEstado={mudarEstado} />
          </div>
        </div>
      </div>
    </div>
  );
}
