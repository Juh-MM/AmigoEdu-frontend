import { useState, useEffect } from "react";
import BotaoSalvar from "./BotaoSalvar";
import { BsPerson } from "react-icons/bs";
import { LuPencil } from "react-icons/lu";

import { alterarUsuario } from "../services/userService";

export default function FormDadosPessoais() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const userDataString = localStorage.getItem('user');

        if (userDataString) {
            const userData = JSON.parse(userDataString);
            setNome(userData.nome);
            setEmail(userData.email);
            setTelefone(userData.telefone || "Não informado"); 
            setUserData(userData);
        }
    }, []);

    const handleAlterarUsuario = async (e) => {
        e.preventDefault();
        if (!userData || !userData.id) {
            alert("Erro: Usuário não encontrado.");
            return;
        }

        try {
            const dadosAtualizados = { nome, email, telefone };
            const response = await alterarUsuario(userData.id, dadosAtualizados);
            // Atualiza o localStorage com os novos dados do usuário
            localStorage.setItem('user', JSON.stringify({ ...userData, ...dadosAtualizados }));
            alert("Dados alterados com sucesso!");
        } catch (error) {
            alert(error.message || "Não foi possível alterar os dados.");
        }
    };

    return (
        <div className="flex flex-col gap-9 bg-white p-7 rounded-3xl shadow">
            <div className="flex flex-col gap-5 justify-center">
                <div className="flex flex-row itens-center gap-2">
                    <BsPerson className="text-3xl" />
                    <h1 className="font-semibold text-lg">Dados pessoais</h1>
                </div>
                <form className="flex flex-col gap-3" onSubmit={handleAlterarUsuario}>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-sky-950 text-base font-semibold">Nome completo</h1>
                        <div className="relative flex items-center outline rounded-2xl">
                            <input
                                type="text"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                className=" rounded-2xl w-full text-sm p-3 pr-10"
                            />
                            <LuPencil className="absolute right-3" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-sky-950 text-base font-semibold">E-mail</h1>
                        <div className="relative flex items-center outline rounded-2xl">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="rounded-2xl w-full text-sm p-3 pr-10"
                            />
                            <LuPencil className="absolute right-3" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-sky-950 text-base font-semibold">Telefone</h1>
                        <div className="relative flex items-center outline rounded-2xl">
                            <input type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} className=" rounded-2xl w-full text-sm p-3 pr-10" />
                            <LuPencil className="absolute right-3" />
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
                    <BotaoSalvar type="submit" />
                </form>
            </div>
        </div>
    )
}