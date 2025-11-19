// arquivo central da aplicação - guarda o usuário, token e permiçoes
import { createContext, useState } from "react";
import { login as loginApi, logout as logoutApi } from "./authService";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  async function login(email, senha) {
    const data = await loginApi(email, senha);

    const payload = {
      token: data.token,
      nome: data.user.nome,
      role: data.user.role,
      id: data.user.id,
      link_indicacao: data.user.link_indicacao,
      email: data.user.email,
      telefone: data.user.telefone,
    };

    setUser(payload);
    localStorage.setItem("user", JSON.stringify(payload));
  }

  async function logout() {
    await logoutApi();
    setUser(null);
    localStorage.removeItem("user");
  }

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}


