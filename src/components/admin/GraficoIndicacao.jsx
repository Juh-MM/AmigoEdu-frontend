import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import api from "../../services/api";

export default function GraficoIndicacao() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function carregarIndicacoes() {
      try {
        const response = await api.get("/indicacoes");
        const indicacoes = response.data;

        const mesesAgrupados = {};
        indicacoes.forEach(i => {
          if (i.data_indicacao) {
            const mes = new Date(i.data_indicacao).getMonth(); // 0–11
            mesesAgrupados[mes] = (mesesAgrupados[mes] || 0) + 1;
          }
        });

        const nomesMeses = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"];
        const valores = Object.keys(mesesAgrupados).map(m => ({
          mes: nomesMeses[m],
          total: mesesAgrupados[m],
        }));

        setData(valores);
      } catch (err) {
        console.error("Erro ao carregar indicações:", err);
      }
    }

    carregarIndicacoes();
  }, []);

  return (
    <div className="bg-white rounded-2xl p-5 shadow-md h-64 w-1/2">
      <h3 className="mb-3 text-lg font-semibold">Indicações no mês</h3>
      <div className="h-[85%]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart layout="vertical" data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#eaeaea" />
            <YAxis dataKey="mes" type="category" tick={{ fontSize: 12 }} width={50} />
            <XAxis type="number" />
            <Tooltip />
            <Bar dataKey="total" barSize={18} fill="#285BB1" background={{ fill: "#dbe7ff" }} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
