import MetaCard from "./MetaCard";
import { IoAddCircle } from "react-icons/io5";

export default function MetaCardCriar() {
    return (
        <MetaCard className="w-[301px] h-[380px] items-center justify-center gap-4">
            <IoAddCircle className="text-amber-400 text-9xl" />
            <h1 className="font-semibold text-xl text-center">Criar nova meta</h1>
        </MetaCard>
    );
}
