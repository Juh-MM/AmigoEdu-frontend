import Dashboard from '../../components/admin/Dashboard';
import GraficoUsuarios from "../../components/admin/GraficoUsuarios";
import GraficoIndicacao from '../../components/admin/GraficoIndicacao';
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../services/authContext';
import api from '../../services/api';

export default function VisaoGeral() {
    const { user } = useContext(AuthContext)
    const [nome, setNome] = useState('');

    useEffect(() => {
        const carregarNome = async () => {
            try {
                const userDataString = localStorage.getItem('user');
                if (userDataString) {
                    const userData = JSON.parse(userDataString);
                    setNome(userData.nome);
                }
            } catch (err) {
                console.error('Erro ao carregar nome do usuário:', err);
            }
        };
        carregarNome();
    }, [user]);

    return (
        <div className="flex flex-col gap-5 justify-center">
            <div className="text-3xl lg:text-4xl font-semibold">
                <h1>Olá, {nome}! 👋</h1>
            </div>
            <Dashboard />
            <div className="flex flex-col md:flex-row gap-5 justify-center items-center w-full">
                <GraficoUsuarios />
                <GraficoIndicacao />
            </div>

        </div>
    );
}
