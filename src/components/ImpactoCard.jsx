import Star from "../assets/Star.png";

export default function ImpactoCard({ Imagem, Descricao }) {
    return (
        <div className="relative flex flex-col gap-5 justify-center items-center max-w-2xl">
            <img src={Star} alt="decorative star" className="absolute w-10 top-2 left-1 z-10" />
            <img src={Star} alt="decorative star" className="absolute w-10 bottom-2 right-1/2 z-10" />

            <div className="flex flex-row gap-5 bg-white rounded-2xl h-60 p-5 shadow-md hover:shadow-lg transition w-full">
                <div className="w-1/2 bg-gray-300 rounded-xl flex items-center justify-center overflow-hidden">
                    {Imagem ? (
                        <img src={Imagem} alt="impacto" className="w-full h-full object-cover rounded-lg" />
                    ) : (
                        <div className="text-sm text-gray-500">Sem imagem</div>
                    )}
                </div>

                <div className="w-1/2 flex flex-col justify-center items-start text-justify text-base text-sky-700">
                    <p>{Descricao}</p>
                </div>
            </div>
        </div>
    );
}