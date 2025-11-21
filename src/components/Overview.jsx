import SaqueButton from "./SaqueButton";

export default function Overview() {
  return (
    <div
      className="
        w-full 
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        gap-6 
        place-items-center
      "
    >
      {/* Card Saldo */}
      <div
        className="
          flex 
          flex-col 
          sm:flex-row 
          gap-6 
          justify-center 
          items-center 
          bg-neutral-50 
          py-7 
          px-9 
          rounded-3xl 
          shadow-sm 
          w-full 
          max-w-xs 
          sm:max-w-sm
        "
      >
        <div className="flex flex-col items-center sm:items-start">
          <span className="font-medium text-3xl">R$ 100,00</span>
          <h1 className="text-sky-800 text-base font-semibold">
            Saldo acumulado
          </h1>
        </div>

        <SaqueButton />
      </div>

      {/* Card Indicações */}
      <div
        className="
          flex 
          flex-col 
          justify-center 
          bg-neutral-50 
          py-7 
          px-9 
          rounded-2xl 
          items-center 
          shadow 
          w-full 
          max-w-xs 
          sm:max-w-sm
        "
      >
        <span className="font-medium text-3xl">30</span>
        <h1 className="text-sky-800 text-base font-semibold">
          Indicações válidas
        </h1>
      </div>

      {/* Card Metas */}
      <div
        className="
          flex 
          flex-col 
          justify-center 
          bg-neutral-50 
          py-7 
          px-9 
          rounded-2xl 
          items-center 
          shadow 
          w-full 
          max-w-xs 
          sm:max-w-sm
        "
      >
        <span className="font-medium text-3xl">10</span>
        <h1 className="text-sky-800 text-base font-semibold">
          Metas batidas
        </h1>
      </div>
    </div>
  );
}
