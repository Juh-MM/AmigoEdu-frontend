import Overview from '../components/Overview';
import Link from '../components/Link';

export default function Home() {

const nome = "Usuário teste";

    return(
            <div className="flex flex-col gap-10 m-5 mt-0 justify-center">
                <div className="flex flex-row text-4xl gap-1">
                    <h1>Olá,</h1> <h1 className="font-semibold">{nome}! 👋</h1>
                </div>
                
                <Link />
                <Overview />
            </div>
    )
}