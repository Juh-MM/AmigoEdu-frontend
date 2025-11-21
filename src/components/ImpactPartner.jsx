export default function ImpactPartner() {
  const logos = [
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
  ];

  return (
    <section className="bg-white rounded-2xl shadow p-6 mb-12">
      <h2 className="text-lg sm:text-xl font-semibold mb-4">Apoios e mídia</h2>

      <p className="text-sm text-gray-600 mb-4">
        O Prol Educa já recebeu apoio e visibilidade...
      </p>

      <div className="overflow-hidden">
        <div className="flex items-center gap-8 animate-scroll">
          {logos.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Logo de apoio"
              className="h-10 sm:h-12 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
