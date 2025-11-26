import { FaTrophy, FaBullseye, FaUserAlt } from "react-icons/fa";

export default function GameficacaoCard({ nivel, metasBatidas, rankingPosicao }) {
  return (
    <div className="w-full bg-white rounded-2xl shadow-md p-5 flex flex-col gap-5">

      <h2 className="text-2xl font-semibold text-gray-800">Sua Gamificação ⭐</h2>

      <div className="grid grid-cols-3 gap-3 text-center">

        {/* Nivel */}
        <div className="bg-blue-100 rounded-xl p-4 flex flex-col items-center">
          <FaUserAlt className="text-blue-600 text-3xl" />
          <span className="text-gray-700 mt-2 text-lg font-semibold">
            Nível
          </span>
          <span className="text-blue-700 text-2xl font-bold">
            {nivel ?? 0}
          </span>
        </div>

        {/* Metas Batidas */}
        <div className="bg-green-100 rounded-xl p-4 flex flex-col items-center">
          <FaBullseye className="text-green-600 text-3xl" />
          <span className="text-gray-700 mt-2 text-lg font-semibold">
            Metas
          </span>
          <span className="text-green-700 text-2xl font-bold">
            {metasBatidas ?? 0}
          </span>
        </div>

        {/* Ranking */}
        <div className="bg-yellow-100 rounded-xl p-4 flex flex-col items-center">
          <FaTrophy className="text-yellow-600 text-3xl" />
          <span className="text-gray-700 mt-2 text-lg font-semibold">
            Ranking
          </span>
          <span className="text-yellow-700 text-2xl font-bold">
            {rankingPosicao ? `#${rankingPosicao}` : "-"}
          </span>
        </div>

      </div>
    </div>
  );
}
