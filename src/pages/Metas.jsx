import MetaCard from "../components/MetaCard";

const metas = [
    {
        id: 1,
        titulo: "Primeiros passos",
        descricao: "Chame 5 amigos para o AmigoEdu através do seu link.",
        recompensa: "5,00"
    },
    {
        id: 2,
        titulo: "Explorador",
        descricao: "Chame 7 amigos para o AmigoEdu através do seu link.",
        recompensa: "7,00"
    },
    {
        id: 3,
        titulo: "Influenciador",
        descricao: "Continue chamando amigos para o AmigoEdu através do seu link por 5 dias seguidos.",
        recompensa: "9,50"
    },
    {
        id: 4,
        titulo: "Amigo de verdade", 
        descricao: "Chame 10 amigos para o AmigoEdu através do seu link.",
        recompensa: "10,00"
    } 
];

export default function Metas() {
    return(
        <div className="flex flex-col gap-10 m-5 mt-0 lg:m-10 max-w-[1200px]">
            
            <div className="flex flex-col gap-1">
                <h1 className="text-3xl sm:text-4xl font-semibold">Minhas metas</h1>
                <p className="text-sm sm:text-base text-gray-700">
                    Complete metas e ganhe recompensas extras!
                </p>
            </div>

            {/* GRID RESPONSIVO */}
            <div
                className="
                    grid 
                    grid-cols-1
                    sm:grid-cols-2 
                    lg:grid-cols-3 
                    xl:grid-cols-4
                    gap-5
                "
            >
                {metas.map((meta) => (
                    <MetaCard 
                        key={meta.id}
                        titulo={meta.titulo}
                        descricao={meta.descricao}
                        recompensa={meta.recompensa}
                    />
                ))}
            </div>
        </div>
    );
}
