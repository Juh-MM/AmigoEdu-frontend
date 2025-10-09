import Sidebar from '../components/Sidebar'
import Ajuda from '../components/Ajuda'
import Overview from '../components/Overview';
import Link from '../components/Link';

export default function Home() {

const nome = "Usuário teste";

    return(
        <div className="flex flex-row bg-neutral-100 ">
            <Sidebar />
            <div className="flex flex-col gap-10 justify-center">
                <div className="flex flex-row text-3xl">
                    <h1>Olá,</h1> <h1 className="font-semibold">{nome}! 👋</h1>
                </div>
                <Overview />
                <Link />
            </div>
            
            <Ajuda />
        </div>
    )
}