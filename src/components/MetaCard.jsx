import { LiaUserFriendsSolid } from "react-icons/lia";

export default function MetaCard({ titulo, descricao, recompensa }) {
    return (
        <div
            className="
                flex flex-col 
                bg-neutral-50 
                rounded-3xl 
                shadow 
                p-5 sm:p-7 
                gap-4 
                items-center
                transition 
                hover:shadow-lg 
                hover:-translate-y-1
                duration-200
            "
        >
            {/* Ícone responsivo */}
            <LiaUserFriendsSolid className="text-6xl sm:text-7xl md:text-8xl text-amber-400" />

            <div className="flex flex-col gap-3 items-center w-full">

                {/* Título */}
                <h1 className="font-semibold text-lg sm:text-xl text-center">
                    {titulo}
                </h1>

                {/* Descrição */}
                <p className="text-sm sm:text-base text-center text-gray-700">
                    {descricao}
                </p>

                {/* Barra de progresso */}
                <div className="w-full bg-gray-200 h-3 rounded-xl overflow-hidden">
                    <div className="bg-sky-700 h-full w-[40%] rounded-xl"></div>
                </div>

                {/* Recompensa */}
                <p className="border rounded-2xl py-2 w-full text-center text-sm sm:text-base">
                    Recompensa: R${recompensa}
                </p>

                {/* Indicações restantes */}
                <span className="text-xs text-gray-600 text-center">
                    faltam x indicações para completar essa meta
                </span>

            </div>
        </div>
    );
}
