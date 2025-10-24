import MetaCard from "../components/MetaCard";

export default function Metas() {
    return(
        <div className="flex flex-col gap-10 m-5 mt-0 justify-center">
            <div className="flex flex-row text-4xl gap-1"> 
                <h1 className="font-semibold">Minhas metas</h1>
            </div>
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                    <h1 className="text-sky-950 text-lg">Metas não concluidas</h1>
                    <MetaCard />
                    <MetaCard />
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className="text-sky-950 text-lg">Metas Concluidas</h1>
                    <MetaCard />
                </div>
            </div>
        </div>
    )
}