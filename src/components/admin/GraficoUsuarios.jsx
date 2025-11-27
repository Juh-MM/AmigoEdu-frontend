import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import api from "../../services/api";

export default function GraficoUsuarios() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function carregarUsuarios() {
      try {
        const response = await api.get("/usuarios");
        const usuarios = response.data;

        const meses = {};
        usuarios.forEach(u => {
          if (u.criado_em) {
            const mes = new Date(u.criado_em).getMonth();
            meses[mes] = (meses[mes] || 0) + 1;
          }
        });

        const nomesMeses = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"];
        const valores = Object.keys(meses).map(m => ({
          mes: nomesMeses[m],
          total: meses[m],
        }));

        setData(valores);
      } catch (err) {
        console.error("Erro ao carregar usuários:", err);
      }
    }

    carregarUsuarios();
  }, []);

  return (
    <div className="bg-white rounded-2xl p-5 shadow-md h-64 w-full lg:w-1/2">
      <h3 className="mb-3 text-lg font-semibold">Usuários novos</h3>
      <div className="h-[85%]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#eaeaea" />
            <XAxis dataKey="mes" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="total" stroke="#FFC107" strokeWidth={3} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
