export default function ImpactFeedbacks() {
  const testimonials = [
    {
      text: "“Maravilhoso! Trazem oportunidades...”",
      person: "— AMANDA SANTOS DA SILVA (Responsável)",
    },
    {
      text: "“Muito bom para nós que precisamos estudar...”",
      person: "— CÁSSIA RITA OLIVEIRA MENDONÇA (Estudante)",
    },
    {
      text: "“Um projeto maravilhoso para pessoas de baixa renda...”",
      person: "— DAIANA CORREIA...",
    },
  ];

  return (
    <section className="bg-white rounded-2xl shadow p-6 mb-8">
      <h2 className="text-lg sm:text-xl font-semibold mb-4">Depoimentos</h2>

      <div className="space-y-4">
        {testimonials.map((d, i) => (
          <blockquote
            key={i}
            className="p-4 border-l-4 border-sky-600 bg-sky-100 rounded-md"
          >
            <p className="text-gray-800 text-sm sm:text-base">{d.text}</p>

            <footer className="mt-2 text-xs sm:text-sm text-gray-600">
              {d.person}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
