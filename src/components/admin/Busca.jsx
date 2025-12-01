import { IoSearchSharp } from "react-icons/io5";

export default function Busca({ value, onChange }) {
  return (
    <div className="flex flex-row  w-[300px] md:w-[400px] bg-white outline-none
          shadow-sm hover:shadow-md transition 
          rounded-4xl px-5 py-2 items-center">
        <input
          type="text"
          placeholder="Procurar usuário"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full focus:outline-none
          "
        />
        <IoSearchSharp className="text-gray-500 text-xl" />
      </div>
  );
}