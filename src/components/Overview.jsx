import SaqueButton from "./SaqueButton";

export default function Overview() {
    return(
        <div className="flex gap-10 w-full     justify-center">
            <div className="flex flex-col justify-center  bg-neutral-50 h-18 p-4 rounded-2xl items-center shadow">
                <h1 className="">Indicações totais</h1>
                <span className="font-medium">0</span>
            </div>
            <div className="flex gap-8 justify-center items-center bg-neutral-50 p-5 h-18 rounded-2xl shadow">
                <div className="flex flex-col items-center">
                    <h1 className="">Saldo atual</h1>
                    <span className="font-medium">R$ 0,0</span>
                </div>               
                <SaqueButton />
            </div>
        </div>
    )
}