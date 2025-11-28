import SaqueButton from "./SaqueButton";
import api from "../services/api";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../services/authContext";

export default function Overview() {
    const { user } = useContext(AuthContext);
    const [overviewData, setOverviewData] = useState({
        saldoAcumulado: "0,00",
        indicacoesValidas: 0,
        metasBatidas: 0
    });
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState(null);

    const tryFetchIndicacoes = async (userId) => {
        const endpoints = [
            `/indicacoes/usuario/${userId}`,
            `/indicacoes?usuario_id=${userId}`,
            `/indicacoes/${userId}`,
            `/usuarios/${userId}/indicacoes`,
            `/usuarios/${userId}/indicacoes/validas`
        ];

        for (const ep of endpoints) {
            try {
                const res = await api.get(ep);
                if (res && res.data) return res.data;
            } catch (err) {
                // tenta próximo endpoint se 404, senão lança o erro
                if (err?.response?.status === 404) continue;
                throw err;
            }
        }
        return null;
    };

    const carregarOverview = async () => {
        try {
            setLoading(true);
            setErro(null);

            if (!user?.id) {
                setErro("Usuário não autenticado");
                return;
            }

            // Buscar indicações com tentativas de endpoints alternativos
            const indicacoesData = await tryFetchIndicacoes(user.id);

            // extrair campos de forma tolerante a variações de nome/estrutura
            const saldoAcumulado =
                indicacoesData?.saldo_acumulado ??
                indicacoesData?.saldo ??
                indicacoesData?.saldoAcumulado ??
                (indicacoesData?.data && indicacoesData.data.saldo_acumulado) ??
                "0,00";

            const indicacoesValidas =
                indicacoesData?.indicacoes_validas ??
                indicacoesData?.indicacoes_validadas ??
                indicacoesData?.indicacoesValidas ??
                (indicacoesData?.data && indicacoesData.data.indicacoes_validas) ??
                0;

            // Buscar metas batidas (gamificação)
            let metasBatidas = 0;
            try {
                const gamificacaoRes = await api.get(`/gamificacao/usuario/${user.id}`);
                metasBatidas = gamificacaoRes?.data?.metas_batidas ?? gamificacaoRes?.data?.metasBatidas ?? 0;
            } catch (err) {
                // se falhar aqui, apenas mantém 0
                console.warn("Gamificação não disponível:", err?.response?.status);
            }

            setOverviewData({
                saldoAcumulado,
                indicacoesValidas,
                metasBatidas
            });
        } catch (error) {
            console.error("Erro ao carregar dados de overview:", error);
            setErro("Não foi possível carregar os dados");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        carregarOverview();
    }, [user?.id]);

    if (loading) {
        return <div className="text-center text-gray-500">Carregando...</div>;
    }

    if (erro) {
        return <div className="text-center text-gray-500">{erro}</div>;
    }

    return(
        <div className="flex gap-10 w-full justify-center items-center flex-wrap">
            <div className="flex gap-8 justify-center items-center bg-neutral-50 py-7 px-9 rounded-3xl shadow-sm hover:shadow-lg transition">
                <div className="flex flex-col items-center">
                    <span className="font-medium text-3xl">R$ {overviewData.saldoAcumulado}</span>
                    <h1 className="text-sky-800 text-base font-semibold">Saldo acumulado</h1>
                </div>               
                <SaqueButton />
            </div>

            <div className="flex flex-col justify-center bg-neutral-50 py-7 px-9 rounded-2xl items-center shadow hover:shadow-lg transition">
                <span className="font-medium text-3xl">{overviewData.indicacoesValidas}</span>
                <h1 className="text-sky-800 text-base font-semibold">Indicações validas</h1>
            </div>          

            <div className="flex flex-col justify-center bg-neutral-50 py-7 px-9 rounded-2xl items-center shadow hover:shadow-lg transition">
                <span className="font-medium text-3xl">{overviewData.metasBatidas}</span>
                <h1 className="text-sky-800 text-base font-semibold">Metas batidas</h1>
            </div>
        </div>
    )
}