import { LiaUserFriendsSolid } from "react-icons/lia";

export default function Metas() {
    return(
        <div className="flex bg-neutral-50 w-full rounded-3xl shadow p-7 gap-5 items-center justify-center">
            <LiaUserFriendsSolid className="text-8xl text-amber-400" />
            <div className="flex flex-col gap-3">
                <p className="flex max-w-120 text-center text-base font-medium ">Chame 5 amigos para o AmigoEdu através do seu link e ganhe um bônus de 7 reais!</p>
                {/* barra de progresso */}
                <div className="flex bg-sky-700 max-w-120 h-5 rounded-xl justify-center items-center">
                    <p className="text-xs text-amber-50">5/5 amigos</p>
                </div>
                <span className="flex justify-end text-xs text-gray-600">Ler mais</span>
            </div>
            
        </div>
    )
}