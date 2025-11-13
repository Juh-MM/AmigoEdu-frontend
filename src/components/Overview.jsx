export default function Overview() {
    return(
        <div className="flex gap-10 w-full justify-center items-center">

            {/* USUÁRIOS CADASTRADOS (nova seção, igual à de indicações) */}
            <div className="flex flex-col justify-center bg-neutral-50 py-7 px-9 rounded-2xl items-center shadow">
                <span className="font-medium text-3xl">780</span>
                <h1 className="text-sky-800 text-base font-semibold">Usuários Cadastrados</h1>
            </div>

            {/* INDICAÇÕES VÁLIDAS (mantido) */}
            <div className="flex flex-col justify-center bg-neutral-50 py-7 px-9 rounded-2xl items-center shadow">
                <span className="font-medium text-3xl">30</span>
                <h1 className="text-sky-800 text-base font-semibold">Indicações válidas</h1>
            </div>

            {/* SAQUES SOLICITADOS (antes "Metas Batidas") */}
            <div className="flex flex-col justify-center bg-neutral-50 py-7 px-9 rounded-2xl items-center shadow">
                <span className="font-medium text-3xl">30</span>
                <h1 className="text-sky-800 text-base font-semibold">Saques Solicitados</h1>
            </div>

            {/* RENDA TOTAL GERADA (nova seção) */}
            <div className="flex flex-col justify-center bg-neutral-50 py-7 px-9 rounded-2xl items-center shadow">
                <span className="font-medium text-3xl">R$ 3.000</span>
                <h1 className="text-sky-800 text-base font-semibold">Renda Total Gerada</h1>
            </div>

        </div>
    )
}
