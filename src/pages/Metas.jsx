import { useEffect, useState } from "react";
import MetaCard from "../components/MetaCard";
import api from "../services/api"; // Ajuste o caminho se necessário

export default function Metas() {
    const [metas, setMetas] = useState([]);

    async function carregarMetas() {
      try {
        const res = await api.get("/metas");
        setMetas(res.data || []);
      } catch (error) {
        console.error("Erro ao carregar metas:", error);
        // Opcional: mostrar um erro para o usuário
      }
    }
  
    useEffect(() => {
      carregarMetas();
    }, []);

    return(
        <div className="flex flex-col gap-10 m-5 ml-0 mt-0 justify-center">
            <div className="flex flex-col text-4xl gap-1"> 
                <h1 className="font-semibold">Minhas metas</h1>
                <p className="text-base">Complete metas e ganhe recompensas extras!</p>
            </div>
            <div className="flex justify-center w-full">
                <div className="grid grid-cols-3 gap-6 max-w-7xl">
                    {metas.map((meta) => 
                <MetaCard 
                    key={meta.id}
                    titulo={meta.nome}
                    descricao={meta.descricao}
                    recompensa={meta.recompensa}
                />
                )}
                </div>
            </div>
        </div>
    )
}