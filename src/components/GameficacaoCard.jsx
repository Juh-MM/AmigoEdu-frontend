import { FaTrophy, FaBullseye, FaUserAlt } from "react-icons/fa";

export default function GameficacaoCard({ nivel, metasBatidas, rankingPosicao }) {
  return (
    <div className="w-full h-[300px] bg-white rounded-2xl shadow-md p-5 flex flex-col gap-5">

      <h2 className="text-2xl font-semibold text-gray-800">Sua Gamificação ⭐</h2>

      <div className="grid grid-cols-3 gap-3 text-center h-full">

        {/* Nivel */}
        <div className="bg-blue-100 rounded-xl p-4 flex flex-col items-center justify-center">
          <FaUserAlt className="text-sky-600 text-5xl" />
          <span className="text-gray-700 mt-2 text-lg font-semibold">
            Nível
          </span>
          <span className="text-sky-700 text-4xl font-bold">
            {nivel ?? 0}
          </span>
        </div>

        {/* Metas Batidas */}
        <div className="bg-green-100 rounded-xl p-4 flex flex-col items-center justify-center">
          <FaBullseye className="text-lime-600 text-5xl" />
          <span className="text-gray-700 mt-2 text-lg font-semibold">
            Metas
          </span>
          <span className="text-lime-700 text-4xl font-bold">
            {metasBatidas ?? 0}
          </span>
        </div>

        {/* Ranking */}
        <div className="bg-yellow-100 rounded-xl p-4 flex flex-col items-center justify-center">
          <FaTrophy className="text-amber-600 text-5xl" />
          <span className="text-gray-700 mt-2 text-lg font-semibold">
            Ranking
          </span>
          <span className="text-amber-700 text-4xl font-bold">
            {rankingPosicao ? `#${rankingPosicao}` : "-"}
          </span>
        </div>
        
      </div>
    </div>
  );
}
