import api from './api';

export async function alterarUsuario(id, dadosUsuario) {
  try {
    const response = await api.put(`/usuarios/${id}`, dadosUsuario);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Erro ao alterar os dados do usuário");
  }
}

export async function alterarAdmin(id, dadosAdmin) {
  try {
    const response = await api.put(`/admins/${id}`, dadosAdmin);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Erro ao alterar os dados do administrador");
  }
}