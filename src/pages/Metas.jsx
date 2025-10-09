export default function Metas() {
    return(
        <div className="flex flex-col gap-10 m-5 justify-center">
            <div className="flex flex-row text-3xl gap-1"> 
                <h1>Minhas</h1><h1 className="font-semibold">metas</h1>
            </div>
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                    <h1 className="text-sky-950 text-lg">Metas não concluidas</h1>
                    <div className="flex flex-col gap-3">
                        <p className="p-3 bg-neutral-50 w-full rounded-xl shadow">fazer isso e aquilo</p>
                        <p className="p-3 bg-neutral-50 w-full rounded-xl shadow">comprar pão</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className="text-sky-950 text-lg">Metas Concluidas</h1>
                    <div className="flex flex-col gap-3">
                        <p className="p-3 bg-neutral-50 w-full rounded-xl shadow">fazer isso e aquilo</p>
                        <p className="p-3 bg-neutral-50 w-full rounded-xl shadow">comprar pão</p>
                    </div>
                </div>
                <ul>
                    <li>

                    </li>
                </ul>
            </div>
        </div>
    )
}