// src/components/ImpactHeader.jsx
import React from "react";

export default function ImpactHeader() {
  return (
    <header className="w-full bg-white rounded-2xl shadow-sm p-6 sm:p-8 mb-8">
      <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-8">

        {/* LEFT CONTENT */}
        <div className="flex-1 w-full min-w-0">
          <h1 className="w-full text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight break-words">
            Impacto social - Amigo Edu
          </h1>

          <p className="w-full mt-3 text-gray-600 text-sm sm:text-base break-words">
            Conheça os resultados e as transformações geradas pelo projeto
            Prol Educa através do aplicativo Amigo Edu...
          </p>

          <div className="mt-4 flex flex-wrap gap-3 w-full">
            <a
              href="https://querobolsadeestudos.com.br/portal-homolog/"
              target="_blank"
              rel="noreferrer"
              className="bg-sky-600 text-white px-4 py-2 rounded-lg shadow hover:opacity-95 text-sm sm:text-base"
            >
              Conheça o Prol Educa
            </a>

            <button className="border border-sky-600 text-sky-600 px-4 py-2 rounded-lg hover:bg-indigo-50 text-sm sm:text-base">
              Tornar-me um Amigo Prol Educa
            </button>
          </div>
        </div>

        {/* KEY METRICS - 100% RESPONSIVA */}
        <div className="flex-1 w-full min-w-0 grid grid-cols-3 sm:grid-cols-3 md:flex md:flex-wrap gap-4 justify-center md:justify-end">

          {[
            { num: "8.000", desc: "Cursos disponíveis" },
            { num: "900", desc: "Instituições cadastradas" },
            { num: "20.000", desc: "Alunos contemplados" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-indigo-50 p-4 rounded-xl text-center w-full md:w-28 lg:w-32 flex-shrink min-w-0"
            >
              <div className="text-xl sm:text-2xl font-bold">{item.num}</div>
              <div className="text-sm text-gray-600 break-words">{item.desc}</div>
            </div>
          ))}

        </div>

      </div>
    </header>
  );
}
