export default function Busca({ value, onChange }) {
  return (
    <div className="w-full flex justify-center">
      <div className="relative w-[330px]">
        <input
          type="text"
          placeholder="Procurar usuário"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="
          w-full h-10
          rounded-[30px] border border-[#dcdcdc]
          bg-white pl-[18px] pr-[45px]
          text-[16px] outline-none
          shadow-[0_3px_8px_rgba(0,0,0,0.08)]
          "
        />
        <svg
          className="absolute right-4 top-1/2 -translate-y-1/2 opacity-70 pointer-events-none"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#777"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>
    </div>
  );
}