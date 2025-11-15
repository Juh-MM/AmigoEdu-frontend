import MetaCard from "../components/MetaCard";
import CriarMeta from "../components/CriarMeta";
import MetasComplet from "../components/MetasComplet";

export default function Metas() {
    return (
        <div className="flex flex-col gap-10 m-5 mt-0">

            {/* Títulos da página */}
            <div className="flex flex-col text-4xl gap-1">
                <h1 className="font-semibold">Minhas metas</h1>
                <p className="text-base">Complete metas e ganhe recompensas extras!</p>
            </div>

            {/* Cards principais */}
            <div className="grid grid-cols-3 justify-center gap-5">
                <CriarMeta />
                <MetasComplet />
            </div>

        </div>
    );
}

