import { useContext, useState, useEffect } from 'react';
import Overview from '../components/Overview';
import Link from '../components/Link';
import { AuthContext } from '../services/authContext';
import GameficacaoCard from "../components/GameficacaoCard";
import api from '../services/api';

export default function Home() {
    const { user } = useContext(AuthContext)
    const [nome, setNome] = useState('');
    const [gamificacao, setGamificacao] = useState(null);
    const [posicaoRanking, setPosicaoRanking] = useState(null);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        const carregarDados = async () => {
            try {
                setLoading(true);
                const userDataString = localStorage.getItem('user');

                if (userDataString) {
                    const userData = JSON.parse(userDataString);
                    setNome(userData.nome);
                }

                if (user?.id) {
                    // Buscar gamificação
                    const gamificacaoResponse = await api.get(`/gamificacao/usuario/${user.id}`);
                    setGamificacao(gamificacaoResponse.data);

                    // Buscar impacto (renda gerada)
                    const impactoResponse = await api.get(`/impactos/usuario/${user.id}`);
                    console.log('Impacto:', impactoResponse.data);

                    // Buscar ranking para obter posição
                    const rankingResponse = await api.get('/ranking/todos');
                    const usuarios = rankingResponse.data.data; // Acesse .data.data
                    
                    const userPos = usuarios.findIndex(u => u.usuario_id === user.id) + 1;
                    setPosicaoRanking(userPos > 0 ? userPos : null);

                }
            } catch (err) {
                console.error('Erro ao carregar dados:', err);
                setErro('Não foi possível carregar os dados. Tente novamente.');
            } finally {
                setLoading(false);
            }
        };

        carregarDados();
    }, [user]);

    if (loading) {
        return <div className="flex justify-center items-center h-screen">Carregando...</div>;
    }

    if (erro) {
        return <div className="flex justify-center items-center h-screen text-gray-500">{erro}</div>;
    }

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