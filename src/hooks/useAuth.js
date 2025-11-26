// src/hooks/useAuth.js
import { useContext } from "react";
import { AuthContext } from "../services/authContext";

export default function useAuth() {
  return useContext(AuthContext);
}
