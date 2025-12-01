import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export function RequireAdmin({ children }) {
  const { isAuthenticated, isAdmin } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!isAdmin) {
    // caso usuário autenticado, mas não admin -> redireciona para home com aviso
    // você pode trocar por uma página "403" personalizada
    return <Navigate to="/home" replace />;
  }

  return children;
}