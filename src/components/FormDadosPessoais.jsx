import BotaoSalvar from "./BotaoSalvar";
import { BsPerson } from "react-icons/bs";
import { LuPencil } from "react-icons/lu";

export default function FormDadosPessoais() {
  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col gap-8 bg-white p-6 sm:p-8 rounded-3xl shadow">

      {/* Header */}
      <div className="flex items-center gap-3">
        <BsPerson className="text-3xl sm:text-4xl" />
        <h1 className="font-semibold text-lg sm:text-xl text-sky-950">
          Dados pessoais
        </h1>
      </div>

      {/* Campos */}
      <div className="flex flex-col gap-4">

        <Field label="Nome completo" value="Fulaninha Silva" />

        <Field label="E-mail" value="fulaninha@gmail.com" />

        <Field label="Telefone" value="(11) 90000-0000" />

        {/* Select */}
        <div className="flex flex-col gap-1">
          <label className="text-sky-950 text-sm sm:text-base font-semibold">
            Método de pagamento
          </label>

          <select className="
            w-full p-3 rounded-2xl border border-gray-300
            text-sm sm:text-base bg-white
            focus:ring-2 focus:ring-sky-300 focus:border-sky-500
            transition
          ">
            <option value="PIX">Chave PIX</option>
            <option value="PayPal">PayPal</option>
            <option value="Boleto">Boleto</option>
          </select>
        </div>
      </div>

      {/* Botão */}
      <BotaoSalvar />
    </div>
  );
}

function Field({ label, value }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sky-950 text-sm sm:text-base font-semibold">
        {label}
      </label>

      <div className="
        flex justify-between items-center 
        w-full p-3 rounded-2xl border border-gray-300
        text-sm sm:text-base
      ">
        <p className="truncate">{value}</p>
        <LuPencil className="flex-shrink-0 ml-2" />
      </div>
    </div>
  );
}
