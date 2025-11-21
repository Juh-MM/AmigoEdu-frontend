// src/components/ImpactDetails.jsx
import React from "react";

export default function ImpactDetails() {
  const details = [
    {
      title: "Alcance",
      desc: "Mais de 20.000 estudantes já foram beneficiados com bolsas e descontos; milhares de famílias relatam melhoria no acesso à educação.",
    },
    {
      title: "Parcerias",
      desc: "Rede com centenas de instituições — desde educação infantil até cursos técnicos e profissionalizantes — ampliando as oportunidades.",
    },
    {
      title: "Inclusão Financeira",
      desc: "Bolsas de até 50% e planos acessíveis que reduzem barreiras financeiras e mantêm o aluno na jornada de estudos.",
    },
    {
      title: "Reconhecimento",
      desc: "O projeto ganhou visibilidade em veículos de mídia e programas sociais, fortalecendo sua reputação e alcance.",
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 w-full">
      
      <article className="col-span-1 md:col-span-2 bg-white rounded-2xl shadow p-6">
        <h2 className="text-lg sm:text-xl font-semibold mb-3">
          Como o Amigo Edu gera impacto
        </h2>

        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
          O Amigo Edu conecta estudantes a bolsas e oportunidades nas instituições parceiras,
          reduzindo barreiras financeiras e ampliando o acesso à educação formal.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {details.map((item, index) => (
            <div key={index} className="p-4 border rounded-lg">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </article>

    </section>
  );
}
