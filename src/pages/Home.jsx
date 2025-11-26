import { useContext, useState, useEffect } from 'react';
import Overview from '../components/Overview';
import Link from '../components/Link';
import { AuthContext } from '../services/authContext';
import GameficacaoCard from "../components/GameficacaoCard";

export default function Home() {
    const { user } = useContext(AuthContext)
    const [nome, setNome] = useState('');
    const [gamificacao, setGamificacao] = useState(null);
    const [posicaoRanking, setPosicaoRanking] = useState(null);

    useEffect(() => {
        const userDataString = localStorage.getItem('user');

        if (userDataString) {
            const userData = JSON.parse(userDataString);
            setNome(userData.nome);

            if (userData.gamificacao) {
                setGamificacao(userData.gamificacao);
            }
        }

        // 📌 Simulação — depois você coloca sua API
        const rankingFake = [
            18,17,16,15,14,13,12,11,10,8,2 // ids em ordem
        ];

        const userPos = rankingFake.indexOf(user?.id) + 1;
        setPosicaoRanking(userPos > 0 ? userPos : null);

    }, [user]);

    return(
        <div className="flex flex-col gap-10 m-5 ml-0 mt-0 justify-center">
    
            <div className="flex flex-row text-4xl gap-1">
                <h1>Olá,</h1> 
                <h1 className="font-semibold">{nome}! 👋</h1>
            </div>
    
            {/* Primeiro Overview */}
            <Overview />
    
            {/* Depois Link */}
            <Link />
    
            {/* Por fim Gameficação */}
            <GameficacaoCard
                nivel={gamificacao?.nivel ?? 0}
                metasBatidas={gamificacao?.metas_batidas ?? 0}
                rankingPosicao={posicaoRanking ?? 0}
            />
    
        </div>
    )
}    
