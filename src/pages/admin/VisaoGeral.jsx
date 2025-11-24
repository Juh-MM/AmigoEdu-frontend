import Dashboard from '../../components/admin/Dashboard';
import GraficoUsuarios from "../../components/admin/GraficoUsuarios";
import GraficoIndicacao from '../../components/admin/GraficoIndicacao';

export default function VisaoGeral() {
    const nome = "Usuário teste";

    return (
        <div className="flex flex-col gap-10 m-5 mt-10 justify-center">

            {/* Saudação alinhada mais para baixo */}
            <div className="flex flex-row text-4xl gap-1 items-center mt-4">
                <h1>Olá,</h1>
                <h1 className="font-semibold">{nome}! 👋</h1>
            </div>

            {/* Cards */}
            <Dashboard />

            {/* Gráficos centralizados */}
            <div className="flex flex-col md:flex-row gap-5 justify-center items-center w-full">
                <GraficoUsuarios />
                <GraficoIndicacao />
            </div>

        </div>
    );
}
