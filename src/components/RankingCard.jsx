export default function RankingCard({ posicao, usuario, corPosicao }) {
  return (
    <div className="flex items-center justify-between bg-white p-5 rounded-3xl shadow-md hover:shadow-lg transition">

      <div className="flex items-center space-x-4">
        <div
          className="font-bold w-6 text-center"
          style={{ color: corPosicao }}
        >
          {posicao}
        </div>

        <img
          src={usuario.img}
          alt={usuario.nome}
          className="w-12 h-12 rounded-full object-cover"
        />

        <span className="font-medium text-[#3D70B4]">
          {usuario.nome}
        </span>
      </div>

      <div className="font-semibold text-[#3B5474]">
        {usuario.pontos}
      </div>
    </div>
  );
}
