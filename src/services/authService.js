const API = "https://proleduca-backend.onrender.com/api/v1";

export async function login(email, senha) {
  const res = await fetch(`${API}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, senha }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Erro ao fazer login");
  return data;
}

export async function register(usuario) {
  const res = await fetch(`${API}/usuarios/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(usuario),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Erro ao cadastrar usuário");
  return data;
}

export async function logout(token) {
  const res = await fetch(`${API}/auth/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });}