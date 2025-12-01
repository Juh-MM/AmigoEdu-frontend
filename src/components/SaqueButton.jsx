export default function Ola() {
    const saque = () => {
        alert("Saque solicitado com sucesso!");
    }
    
    return(
        <button onClick={saque} className="bg-sky-600 text-white hover:bg-sky-700 h-11 text-center text-nowrap p-5 px-7 items-center flex justify-center rounded-3xl shadow-sm cursor-pointer">
            Solicitar saque
        </button>
    )
}