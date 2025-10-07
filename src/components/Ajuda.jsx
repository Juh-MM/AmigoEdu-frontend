import { FaQuestion } from "react-icons/fa6";

export default function Ajuda() {
    return(
        <div className="flex w-10 h-10 p-2 items-center justify-center bg-amber-400 text-amber-50 rounded-3xl fixed bottom-5 right-5 hover:bg-amber-500 hover:cursor-pointer shadow-md">
            <FaQuestion />
        </div>
    )
}