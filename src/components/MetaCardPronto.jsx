import MetaCard from "./MetaCard";
import { LiaUserFriendsSolid } from "react-icons/lia";

export default function MetaCardPronto({ titulo, descricao, recompensa }) {
    return (
        <MetaCard className="w-[301px] h-[380px] items-center gap-3">
            <LiaUserFriendsSolid className="text-amber-400 text-8xl" />

            <h1 className="font-semibold text-xl text-center">{titulo}</h1>

            <p className="text-center text-sm px-3">{descricao}</p>

            {/* barra de progresso */}
            <div className="bg-sky-700 w-full h-3 rounded-xl"></div>

            <p className="outline rounded-2xl py-2 w-full text-center">
                Recompensa: R$ {recompensa}
            </p>

            <span className="text-xs text-gray-600">
                faltam x indicações para completar essa meta
            </span>
        </MetaCard>
    );
}
