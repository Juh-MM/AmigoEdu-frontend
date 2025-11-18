import BotaoSalvar from "./BotaoSalvar";
import { BsPerson } from "react-icons/bs";
import { LuPencil } from "react-icons/lu";

export default function FormDadosPessoais() {
    return (
        <div className="flex flex-col gap-9 bg-white p-7 rounded-3xl shadow">
            <div className="flex flex-col gap-5 justify-center">
                <div className="flex flex-row itens-center gap-2">
                    <BsPerson className="text-3xl" />
                    <h1 className="font-semibold text-lg">Dados pessoais</h1>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-sky-950 text-base font-semibold">Nome completo</h1>
                        <div className="flex flex-row justify-between items-center outline rounded-2xl w-full text-sm p-3">
                            <p className="">Fulaninha silva</p>
                            <LuPencil />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-sky-950 text-base font-semibold">E-mail</h1>
                        <div className="flex flex-row justify-between items-center outline rounded-2xl w-full text-sm p-3">
                            <p className="">Fulaninha silva</p>
                            <LuPencil />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-sky-950 text-base font-semibold">Telefone</h1>
                        <div className="flex flex-row justify-between items-center outline rounded-2xl w-full text-sm p-3">
                            <p className="">Fulaninha silva</p>
                            <LuPencil />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-sky-950 text-base font-semibold">Método de pagamento</h1>
                        <select className="flex flex-row justify-between items-center outline rounded-2xl text-sm p-3">
                            <option value="PIX">Chave PIX</option>
                            <option value="PayPal">PayPal</option>
                            <option value="Boleto">Boleto</option>
                        </select>
                    </div>
                </div>
            </div>
            <BotaoSalvar />
        </div>
    )
}