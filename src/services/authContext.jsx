// src/contexts/AuthContext.jsx
import React, { createContext, useState, useEffect } from "react";
import { login as loginApi, logout as logoutApi } from "../services/authService";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  // carrega user/token do localStorage (se houver)
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });
  const [token, setToken] = useState(() => localStorage.getItem("token") || null);
  const [loading, setLoading] = useState(false);

  // Sincronizar localStorage quando user/token mudarem
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  const isAuthenticated = !!user && !!token;
  const isAdmin = user?.role === "admin";

  // login: pode usar loginApi (chamada real) ou setar user direto (admin fixo)
  async function login(email, senha) {
    setLoading(true);
    try {
      // login real via API
      const data = await loginApi(email, senha);
      // espera que `data` contenha { token, user }
      setToken(data.token);
      setUser({
        nome: data.user.nome,
        role: data.user.role,
        id: data.user.id,
        email: data.user.email,
        link_indicacao: data.user.link_indicacao,
        telefone: data.user.telefone ?? null
      });
      return data.user;
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    try {
      await logoutApi?.(); // se implementado
    } catch (err) {
      // ignorar erro de logout remoto
    } finally {
      setUser(null);
      setToken(null);
    }
  }

  return (
    <AuthContext.Provider value={{
      user,
      token,
      loading,
      login,
      logout,
      isAuthenticated,
      isAdmin,
      setUser, // opcional — cuidado ao usar
    }}>
      {children}
    </AuthContext.Provider>
  );
}
