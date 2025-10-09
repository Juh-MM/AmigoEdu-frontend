import Overview from '../components/Overview';
import Link from '../components/Link';
import Dashboards from '../components/Dashboards'

export default function Home() {

const nome = "Usuário teste";

    return(
            <div className="flex flex-col gap-10 m-5 justify-center">
                <div className="flex flex-row text-3xl gap-1">
                    <h1>Olá,</h1> <h1 className="font-semibold">{nome}! 👋</h1>
                </div>
                <Overview />
                <Link />
                <Dashboards/>
            </div>
    )
}