import Dashboard from '../../components/admin/Dashboard';
import GraficoUsuarios from "../../components/admin/GraficoUsuarios";
import GraficoIndicacao from '../../components/admin/GraficoIndicacao';

export default function VisaoGeral() {
    const nome = "Usuário teste";

    return (
        <div className="flex flex-col gap-5 justify-center">
            <div className="flex flex-row text-3xl lg:text-4xl gap-1 items-center">
                <h1>Olá,</h1>
                <h1 className="font-semibold">{nome}! 👋</h1>
            </div>
            <Dashboard />
            <div className="flex flex-col md:flex-row gap-5 justify-center items-center w-full">
                <GraficoUsuarios />
                <GraficoIndicacao />
            </div>

        </div>
    );
}
