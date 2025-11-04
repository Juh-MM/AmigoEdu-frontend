const API = "http://localhost:3000/api/v1/auth";

export async function login(email, senha) {
  const res = await fetch(`${API}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, senha }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Erro ao fazer login");
  return data;
}
