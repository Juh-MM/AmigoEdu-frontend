export default function BotaoSalvar({ onClick, type = "button", disabled = false, loading = false }) {
    return (
        <div className="flex flex-row justify-center mt-5">
            <button
                type={type}
                onClick={onClick}
                disabled={disabled || loading}
                className="text-white font-semibold bg-amber-400 py-2 px-4 rounded-3xl w-50 flex justify-center hover:bg-amber-500 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed transition"
            >
                {loading ? "Salvando..." : "Salvar alterações"}
            </button>
        </div>
    )
}