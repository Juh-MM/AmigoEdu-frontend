import RankingCard from "./RankingCard";

export default function RankingList({ data, baseIndex, corPosicao }) {
  return (
    <div className="space-y-4">
      {data.map((user, index) => (
        <RankingCard
          key={`${user.id}-${baseIndex}`}
          posicao={baseIndex + index}
          usuario={user}
          corPosicao={corPosicao(index)}
        />
      ))}
    </div>
  );
}
