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
        <div className="flex flex-col gap-10 m-5 ml-0 mt-0 justify-center">
            <div className="flex flex-col text-4xl gap-1"> 
                <h1 className="font-semibold">Minhas metas</h1>
                <p className="text-base">Complete metas e ganhe recompensas extras!</p>
            </div>
            <div className="flex justify-center w-full">
                <div className="grid grid-cols-3 gap-6 max-w-7xl">
                    {metas.map((meta) => 
                <MetaCard 
                    key={meta.id}
                    titulo={meta.titulo}
                    descricao={meta.descricao}
                    recompensa={meta.recompensa}
                />
                )}
                </div>
            </div>
        </div>
    )
}