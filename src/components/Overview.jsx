import SaqueButton from "./SaqueButton";

export default function Overview() {
    return(
        <div className="flex gap-10 w-full justify-center items-center">
            <div className="flex gap-8 justify-center items-center bg-neutral-50 py-7 px-9 rounded-3xl shadow-sm">
                <div className="flex flex-col items-center">
                    <span className="font-medium text-3xl">R$ 100,00</span>
                    <h1 className="text-sky-800 text-base font-semibold">Saldo acumulado</h1>
                </div>               
                <SaqueButton />
            </div>

            <div className="flex flex-col justify-center bg-neutral-50 py-7 px-9 rounded-2xl items-center shadow">
                <span className="font-medium text-3xl">30</span>
                <h1 className="text-sky-800 text-base font-semibold">Indicações validas</h1>
            </div>          

            <div className="flex flex-col justify-center bg-neutral-50 py-7 px-9 rounded-2xl items-center shadow">
                <span className="font-medium text-3xl">10</span>
                <h1 className="text-sky-800 text-base font-semibold">Metas batidas</h1>
            </div>
        </div>
    )
}