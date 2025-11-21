export default function ImpactFooter() {
  return (
    <footer className="text-center mb-12">
      <div className="inline-block bg-white p-6 sm:p-8 rounded-2xl shadow max-w-lg">
        <h3 className="text-lg font-semibold">Quer ajudar a transformar vidas?</h3>

        <p className="text-sm text-gray-600 mt-2">
          Indique o Prol Educa, seja um parceiro institucional...
        </p>

        <div className="mt-4 flex justify-center gap-3">
          <a
            href="https://querobolsadeestudos.com.br/portal-homolog/"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 bg-sky-600 text-white rounded-lg hover:opacity-95 transition"
          >
            Visitar Prol Educa
          </a>

          <a
            href="mailto:atendimento@proleduca.com.br"
            className="px-5 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
          >
            Fale conosco
          </a>
        </div>
      </div>
    </footer>
  );
}
