import React from "react";

export default function Sobre() {
  return (
    <main className="min-h-screen mr-5">
      <section className="max-w-6xl mx-auto">
        {/* HERO */}
        <header className="bg-white rounded-2xl shadow-sm p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
                Impacto social - Amigo Edu
              </h1>
              <p className="mt-3 text-gray-600 max-w-2xl">
                Conheça os resultados e as transformações geradas pelo projeto
                Prol Educa através do aplicativo Amigo Edu: oportunidades de
                bolsas, parcerias institucionais e relatos de quem teve a vida
                impactada pela educação!
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://querobolsadeestudos.com.br/portal-homolog/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-sky-600 text-white px-4 py-2 rounded-lg shadow hover:opacity-95"
                >
                  Conheça o Prol Educa
                </a>
                <button className="inline-block border border-sky-600 text-sky-600 px-4 py-2 rounded-lg hover:bg-indigo-50">
                  Tornar-me um Amigo Prol Educa
                </button>
              </div>
            </div>

            {/* KEY METRICS */}
            <div className="flex gap-4 flex-wrap justify-end">
              <div className="bg-indigo-50 p-4 rounded-xl text-center w-36">
                <div className="text-2xl font-bold">8.000</div>
                <div className="text-sm text-gray-600">Cursos disponíveis</div>
              </div>
              <div className="bg-indigo-50 p-4 rounded-xl text-center w-36">
                <div className="text-2xl font-bold">900</div>
                <div className="text-sm text-gray-600">
                  Instituições cadastradas
                </div>
              </div>
              <div className="bg-indigo-50 p-4 rounded-xl text-center w-36">
                <div className="text-2xl font-bold">20.000</div>
                <div className="text-sm text-gray-600">Alunos contemplados</div>
              </div>
            </div>
          </div>
        </header>

        {/* IMPACT DETAILS */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <article className="col-span-2 bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold mb-3">
              Como o Amigo Edu gera impacto
            </h2>
            <p className="text-gray-700 leading-relaxed">
              O Amigo Edu conecta estudantes a bolsas e oportunidades nas
              instituições parceiras, reduzindo barreiras financeiras ao ensino.
              Por meio de parcerias estratégicas com escolas, cursos técnicos e
              faculdades, o programa amplia acesso e ajuda estudantes a
              permanecerem na jornada educacional — gerando impacto econômico e
              social nas comunidades.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold">Alcance</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Mais de 20.000 estudantes já foram beneficiados com bolsas e
                  descontos; milhares de famílias relatam melhoria no acesso à
                  educação.
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold">Parcerias</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Rede com centenas de instituições — desde escolas de educação
                  infantil até cursos profissionalizantes — permitindo ofertas
                  variadas e adequadas às necessidades locais.
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold">Inclusão Financeira</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Bolsas de até 50% (e planos a partir de valores acessíveis)
                  para reduzir o custo da educação e permitir a permanência dos
                  alunos.
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold">Reconhecimento</h3>
                <p className="text-sm text-gray-600 mt-1">
                  O projeto aparece em veículos de mídia e programas de apoio ao
                  empreendedorismo social, aumentando visibilidade e confiança.
                </p>
              </div>
            </div>
          </article>

          {/* QUICK ACTIONS / CTA */}
          <aside className="bg-white rounded-2xl shadow p-6 h-full">
            <h3 className="text-lg font-semibold mb-3">Participe</h3>
            <p className="text-sm text-gray-600">
              Seja um Amigo Prol Educa: indique amigos e ganhe recompensas
              enquanto ajuda outras pessoas a conquistar bolsas.
            </p>
            <div className="mt-4 flex flex-col gap-3">
              <button className="w-full bg-sky-600 text-white py-2 rounded-lg">
                Quero ser um Amigo
              </button>
              <a
                href="mailto:atendimento@proleduca.com.br"
                className="w-full text-center border border-gray-200 py-2 rounded-lg"
              >
                Contato institucional
              </a>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-2">Apoios & prêmios</h4>
              <p className="text-sm text-gray-600">
                O projeto já contou com apoios de programas e aceleradoras
                nacionais, o que ajuda a escalar ações e garantir
                sustentabilidade.
              </p>
            </div>
          </aside>
        </section>

        {/* TESTIMONIALS */}
        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Depoimentos</h2>
          <div className="space-y-4">
            <blockquote className="p-4 border-l-4 border-sky-600 bg-sky-100 rounded-md">
              <p className="text-gray-800">
                “Maravilhoso! Trazem oportunidades às pessoas que não podem
                pagar bolsa integral.”
              </p>
              <footer className="mt-2 text-sm text-gray-600">
                — AMANDA SANTOS DA SILVA (Responsável)
              </footer>
            </blockquote>

            <blockquote className="p-4 border-l-4 border-sky-600 bg-sky-100 rounded-md">
              <p className="text-gray-800">
                “Muito bom para nós que precisamos estudar mas não temos
                condições financeira.”
              </p>
              <footer className="mt-2 text-sm text-gray-600">
                — CÁSSIA RITA OLIVEIRA MENDONÇA (Estudante)
              </footer>
            </blockquote>

            <blockquote className="p-4 border-l-4 border-sky-600 bg-sky-100 rounded-md">
              <p className="text-gray-800">
                “Eu acho que é um projeto maravilhoso para pessoas de baixa
                renda... Nunca percam a esperança. Obrigada!”
              </p>
              <footer className="mt-2 text-sm text-gray-600">
                — DAIANA CORREIA SOARES DOS SANTOS (Responsável)
              </footer>
            </blockquote>
          </div>
        </section>

        {/* PARTNERS / MEDIA */}
        <section className="bg-white rounded-2xl shadow p-6 mb-12">
          <h2 className="text-xl font-semibold mb-4">Apoios e mídia</h2>
          <p className="text-sm text-gray-600 mb-4">
            O Prol Educa já recebeu apoio e visibilidade por aceleradoras,
            organizações e veículos de imprensa.
          </p>

          {/* LOGOS COM SCROLL INFINITO */}
          <div className="scroll-container overflow-hidden relative">
            <div className="scroll-track flex items-center gap-8">
              {/* Logos originais */}
              {[
                "src/assets/impactPage/i-googleforstartups.png",
                "src/assets/impactPage/i-artemisia.png",
                "src/assets/impactPage/i-foz.png",
                "src/assets/impactPage/i-inovativabrasil.png",
                "src/assets/impactPage/i-bndes.png",
                "src/assets/impactPage/i-tdimpacta.png",
                "src/assets/impactPage/i-hackface.png",
                "src/assets/impactPage/i-vumbora.png",
                "src/assets/impactPage/i-startupne.png",
                "src/assets/impactPage/i-ambevoa.png",
                "src/assets/impactPage/i-quintessa.png",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`partner-${i}`}
                  className="h-12 object-contain"
                />
              ))}

              {/* Duplicação automática para scroll contínuo */}
              {[
                "src/assets/impactPage/i-googleforstartups.png",
                "src/assets/impactPage/i-artemisia.png",
                "src/assets/impactPage/i-foz.png",
                "src/assets/impactPage/i-inovativabrasil.png",
                "src/assets/impactPage/i-bndes.png",
                "src/assets/impactPage/i-tdimpacta.png",
                "src/assets/impactPage/i-hackface.png",
                "src/assets/impactPage/i-vumbora.png",
                "src/assets/impactPage/i-startupne.png",
                "src/assets/impactPage/i-ambevoa.png",
                "src/assets/impactPage/i-quintessa.png",
              ].map((src, i) => (
                <img
                  key={`dup-${i}`}
                  src={src}
                  alt={`partner-dup-${i}`}
                  className="h-12 object-contain"
                />
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER CTA */}
        <footer className="text-center mb-12">
          <div className="inline-block bg-white p-8 rounded-2xl shadow">
            <h3 className="text-lg font-semibold">
              Quer ajudar a transformar vidas?
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Indique o Prol Educa, seja um parceiro institucional ou apoie como
              Amigo Prol Educa.
            </p>
            <div className="mt-4 flex justify-center gap-3">
              <a
                href="https://querobolsadeestudos.com.br/portal-homolog/"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2 bg-sky-600 text-white rounded-lg"
              >
                Visitar Prol Educa
              </a>
              <a
                href="mailto:atendimento@proleduca.com.br"
                className="px-5 py-2 border border-gray-200 rounded-lg"
              >
                Fale conosco
              </a>
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
}
