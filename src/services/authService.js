// src/services/authService.js

const API = "https://proleduca-backend.onrender.com/api/v1";

// ---------------------------
//  LOGIN
// ---------------------------
export async function login(email, senha) {
  const res = await fetch(`${API}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, senha }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Erro ao fazer login");

  // salvar token
  localStorage.setItem("token", data.token);
  localStorage.setItem("usuario", JSON.stringify(data.usuario));

  return data;
}

// ---------------------------
//  REGISTRO
// ---------------------------
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

// ---------------------------
//  PEGAR TOKEN
// ---------------------------
export function getToken() {
  return localStorage.getItem("token");
}

// ---------------------------
//  PEGAR USUÁRIO LOGADO
// ---------------------------
export function getUsuarioLogado() {
  const u = localStorage.getItem("usuario");
  return u ? JSON.parse(u) : null;
}

// ---------------------------
//  LOGOUT
// ---------------------------
export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("usuario");
}
