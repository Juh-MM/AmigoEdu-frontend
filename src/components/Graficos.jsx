import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Legend,
} from "recharts";

const novosUsuariosData = [
  { mes: "Jan", valor: 120 },
  { mes: "Fev", valor: 98 },
  { mes: "Mar", valor: 145 },
  { mes: "Abr", valor: 90 },
  { mes: "Mai", valor: 160 },
  { mes: "Jun", valor: 130 },
];

const indicacoesMesData = [
  { mes: "Jan", valor: 40 },
  { mes: "Fev", valor: 55 },
  { mes: "Mar", valor: 70 },
  { mes: "Abr", valor: 30 },
  { mes: "Mai", valor: 95 },
  { mes: "Jun", valor: 85 },
];

export default function Graficos() {
  return (
    <div className="w-full flex flex-col gap-10 p-6">
      {/* Gráfico de Linha - Novos Usuários */}
      <div className="w-full bg-white shadow rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-4">Novos Usuários</h2>
        <div className="w-full h-64">
          <ResponsiveContainer>
            <LineChart data={novosUsuariosData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="valor" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Gráfico de Barras Horizontais - Indicações no Mês */}
      <div className="w-full bg-white shadow rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-4">Indicações no Mês</h2>
        <div className="w-full h-72">
          <ResponsiveContainer>
            <BarChart
              data={indicacoesMesData}
              layout="vertical"
              margin={{ left: 50 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="mes" type="category" />
              <Tooltip />
              <Bar dataKey="valor" barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
