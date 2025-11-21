import Overview from '../components/Overview';
import GraficoUsuarios from "../components/GraficoUsuarios";
import GraficoIndicacao from '../components/GraficoIndicacao';

export default function Home() {
    const nome = "Usuário teste";

    return (
        <div className="flex flex-col gap-10 m-5 mt-0 justify-center">

            {/* Saudação */}
            <div className="flex flex-row text-4xl gap-1">
                <h1>Olá,</h1>
                <h1 className="font-semibold">{nome}! 👋</h1>
            </div>

            {/* Cards */}
            <Overview />

            {/* Gráficos centralizados */}
            <div className="flex flex-col md:flex-row gap-5 justify-center items-center w-full">
                <GraficoUsuarios />
                <GraficoIndicacao />
            </div>

        </div>
    );
}


// export default function Home() {

//     const nome = "Usuário teste";

//     return (
//         <div className="flex flex-col gap-10 m-5 mt-0 justify-center">
//             <div className="flex flex-row text-4xl gap-1">
//                 <h1>Olá,</h1> <h1 className="font-semibold">{nome}! 👋</h1>
//             </div>     
//             <Overview />
//         </div>
//     )
// }