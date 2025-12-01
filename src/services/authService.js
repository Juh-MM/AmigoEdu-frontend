import api from './api';

export async function login(email, senha) {
  try {
    const response = await api.post('/auth/login', { email, senha });
    return response.data;

  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
      error.response?.data?.error ||
      "Erro ao fazer login"
    );
  }
}
export async function register(usuario) { 
  try { 
    const response = await api.post('/usuarios/', usuario); 
    return response.data; 
  } catch (error) { 
    throw new Error(error.response?.data?.message || "Erro ao cadastrar usuário"); 
  } 
}

export async function logout() {
  try { 
    const response = await api.post('/auth/logout'); 
    return response.data; 
  } catch (error) { 
  console.error("Erro no logout da API:", error.response?.data?.message || error.message); 
  } 
}
