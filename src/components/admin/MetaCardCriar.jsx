import MetaCardAdmin from "./MetaCardAdmin";
import { IoAddCircle } from "react-icons/io5";

export default function MetaCardCriar({ onAbrirFormulario }) {
  return (
    <MetaCardAdmin
      className="w-[240px] h-[300px] items-center justify-center gap-3 cursor-pointer 
                 hover:bg-neutral-100 transition"
      onClick={onAbrirFormulario}
    >
      <IoAddCircle className="text-amber-400 text-7xl" />
      <h1 className="text-lg text-center">Criar nova meta</h1>
    </MetaCardAdmin>
  );
}
