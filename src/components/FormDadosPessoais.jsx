import { useState, useEffect, useContext } from "react";
import BotaoSalvar from "./BotaoSalvar";
import { BsPerson } from "react-icons/bs";
import { LuPencil } from "react-icons/lu";

import { alterarUsuario } from "../services/userService";
import { AuthContext } from "../services/authContext";

export default function FormDadosPessoais() {
    const { user, setUser } = useContext(AuthContext);
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // prioriza o contexto de autenticação quando disponível
        const stored = localStorage.getItem('user');
        const local = stored ? JSON.parse(stored) : null;
        const initial = user ?? local;

        if (initial) {
            setNome(initial.nome ?? "");
            setEmail(initial.email ?? "");
            // evita preencher com mensagem de texto que seria enviada ao servidor
            setTelefone(initial.telefone ?? "");
            setUserData(initial);
        }
    }, [user]);

    const handleAlterarUsuario = async (e) => {
        e.preventDefault();
        if (!userData || !userData.id) {
            alert("Erro: Usuário não encontrado.");
            return;
        }

        setLoading(true);
        try {
            const payload = {
                nome,
                email,
                telefone: telefone === "" ? null : telefone,
            };

            const response = await alterarUsuario(userData.id, payload);
            // response pode ter formato { data: { ... } } ou já ser o objeto atualizado
            const updated = response?.data ?? response ?? {};

            // merge com o user atual e garante formato consistente
            const newUser = {
                ...userData,
                ...(updated || {}),
                nome: updated.nome ?? payload.nome ?? userData.nome,
                email: updated.email ?? payload.email ?? userData.email,
                telefone: updated.telefone ?? payload.telefone ?? userData.telefone ?? "Não informado",
            };

            // atualiza localStorage e AuthContext (se disponível)
            localStorage.setItem('user', JSON.stringify(newUser));
            if (setUser) setUser(newUser);

            alert("Dados alterados com sucesso!");
        } catch (error) {
            alert(error.message || "Não foi possível alterar os dados.");
        } finally {
            setLoading(false);
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
                            <input type="tel" value={telefone || "Não informado"} onChange={(e) => setTelefone(e.target.value)} className=" rounded-2xl w-full text-sm p-3 pr-10" />
                            <LuPencil className="absolute right-3" />
                        </div>
                    </div>
                    <BotaoSalvar type="submit" loading={loading} disabled={loading} />
                </form>
            </div>
        </div>
    )
}