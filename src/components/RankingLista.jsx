import RankingCard from "./RankingCard";

export default function RankingLista({ data, baseIndex, corPosicao }) {
  return (
    <div className="space-y-4">
      {data.map((user, index) => (
        <RankingCard
          key={`${user.usuario_id}-${baseIndex}-${index}`}
          posicao={baseIndex + index}
          usuario={user}
          corPosicao={corPosicao(index)}
        />
      ))}
    </div>
  );
}
