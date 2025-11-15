import MetaCard from "./MetaCard";
import { LiaUserFriendsSolid } from "react-icons/lia";

export default function MetaCardNovaMeta() {
    return (
        <MetaCard className="w-[702px] h-[380px] items-center gap-5">

            {/* Ícone */}
            <LiaUserFriendsSolid className="text-amber-400 text-8xl" />

            {/* Inputs */}
            <input
                type="text"
                placeholder="Adicione um título"
                className="w-[592.89px] h-[38px] border rounded-xl px-3 outline-none"
            />
            <input
                type="text"
                placeholder="Adicione uma descrição"
                className="w-[592.89px] h-[38px] border rounded-xl px-3 outline-none"
            />

            {/* Cards internos */}
            <div className="flex w-full justify-between mt-2 px-4">

                {/* Card Nº de indicações */}
                <div className="flex flex-col w-[283.96px] h-[92px] bg-white shadow rounded-2xl p-3">
                    <span className="text-[12px] text-gray-600">Nº de indicações</span>
                    <div className="flex flex-1 justify-center items-center">
                        <span className="text-[30px] font-semibold">&lt;0&gt;</span>
                    </div>
                </div>

                {/* Card Recompensa */}
                <div className="flex flex-col w-[283.96px] h-[92px] bg-white shadow rounded-2xl p-3">
                    <span className="text-[12px] text-gray-600">Recompensa</span>
                    <div className="flex flex-1 justify-center items-center">
                        <span className="text-[30px] font-semibold">R$ 0,00</span>
                    </div>
                </div>

            </div>

            {/* 🔵 Botão Salvar */}
            <button
                className="
                    bg-[#3D70B4]
                    text-white
                    rounded-2xl
                    w-[199.82px]
                    h-[45px]
                    flex
                    justify-center
                    items-center
                    mt-3
                    hover:bg-[#335d93]
                "
            >
                Salvar
            </button>
        </MetaCard>
    );
}
