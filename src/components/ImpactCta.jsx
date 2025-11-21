export default function ImpactCta() {
  return (
    <aside className="bg-white rounded-2xl shadow p-6 h-full flex flex-col justify-between">
      {/* Título e descrição */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Participe</h3>
        <p className="text-sm text-gray-600 mb-4">
          Seja um Amigo Prol Educa: indique amigos e ganhe recompensas...
        </p>

        {/* Botões */}
        <div className="flex flex-col gap-3">
          <button className="w-full bg-sky-600 text-white py-2 rounded-lg hover:bg-sky-700 transition">
            Quero ser um Amigo
          </button>

          <a
            href="mailto:atendimento@proleduca.com.br"
            className="w-full text-center border border-gray-200 py-2 rounded-lg hover:bg-gray-50 transition"
          >
            Contato institucional
          </a>
        </div>
      </div>

      {/* Rodapé / Informações extras */}
      <div className="mt-6">
        <h4 className="font-semibold mb-2">Apoios & prêmios</h4>
        <p className="text-sm text-gray-600">
          O projeto já contou com apoios de programas e aceleradoras...
        </p>
      </div>
    </aside>
  );
}
