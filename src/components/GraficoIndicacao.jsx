import { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function GraficoIndicacao (){
  const [data, setData] = useState([]);

  useEffect(() => {
    async function carregarIndicacoes() {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/indicacoes");
        const indicacoes = response.data;

        const mesesAgrupados = {};

        indicacoes.forEach((i) => {
          const mes = new Date(i.data_indicacao).getMonth(); // 0–11
          mesesAgrupados[mes] = (mesesAgrupados[mes] || 0) + 1;
        });

        const mesesNomes = [
          "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
          "Jul", "Ago", "Set", "Out", "Nov", "Dez",
        ];

        const valores = Object.keys(mesesAgrupados).map((m) => ({
          mes: mesesNomes[m],
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
   <div className="bg-white rounded-2xl p-5 shadow-md h-56 w-1/2">
      <h3 className="mb-3 text-lg font-semibold">Indicações no mês</h3>

      <div className="h-[85%]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart layout="vertical" data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#eaeaea" />
            <YAxis
              dataKey="mes"
              type="category"
              tick={{ fontSize: 12 }}
              width={40}
            />
            <XAxis type="number" />
            <Tooltip />
            <Bar
              dataKey="total"
              barSize={18}
              fill="#285BB1"   // azul escuro parecido com o do painel
              background={{ fill: "#dbe7ff" }} // fundo azul claro
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
