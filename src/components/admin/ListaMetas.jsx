import NovaMeta from "./NovaMeta";

export default function ListaMetas({ metas, onAtualizarLista, onEditar }) {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-6 self-start">
        Todas as metas
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8 place-items-center w-full ">
        {metas.map((meta) => (
          <NovaMeta
            key={meta.id}
            meta={meta}
            onAtualizarLista={onAtualizarLista}
            onEditar={onEditar} // <- garante que existe
          />
        ))}
      </div>
    </div>
  );
}
