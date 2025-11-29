// src/App.jsx
import './App.css'

// Usuário
import Home from './pages/Home'
import Metas from './pages/Metas'
import RankingUser from './pages/RankingUser'
import Configuracoes from './pages/Configuracoes'
import Impact from './pages/impact'
import Sidebar from './components/Sidebar'
import Ajuda from './components/Ajuda'
import Profile from './components/Profile'

// Admin
import AdminLayout from './pages/admin/AdminLayout'
import VisaoGeral from './pages/admin/VisaoGeral'
import Usuarios from './pages/admin/Usuarios'
import MetasAdmin from './pages/admin/MetasAdmin'
import RankingAdmin from './pages/admin/RankingAdmin'
import ConfiguracoesAdmin from './pages/admin/ConfiguracoesAdmin'

// Recuperação de senha + login
import Login from './pages/Login'
import EsqueciSenhaEmail from './pages/EsqueciSenhaEmail'
import VerificarCodigo from './pages/VerificarCodigo'
import NovaSenha from './pages/NovaSenha'

// Auth
import Cadastro from './pages/Cadastro'
import { Routes, Route, Outlet, Navigate } from 'react-router-dom'
import { AuthProvider } from './services/authContext'
import { RequireAuth } from './components/RequireAuth'
import { RequireAdmin } from './components/RequireAdmin'

function UserLayout() {
  return (
    <div className="flex flex-row bg-neutral-100 min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 h-screen overflow-y-auto">
        <Profile />
        <Outlet />
        <Ajuda />
      </div>
    </div>
  )
}

function App() {
  return (
    <AuthProvider>
      <Routes>

        {/* 🔹 Rotas públicas */}
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />

        {/* Recuperação de senha */}
        <Route path="/esqueci-senha" element={<EsqueciSenhaEmail />} />
        <Route path="/verificar-codigo" element={<VerificarCodigo />} />
        <Route path="/nova-senha" element={<NovaSenha />} />

        {/* Redirecionamento padrão */}
        <Route index element={<Navigate to="/home" replace />} />

        {/* 🔹 Fluxo de usuários (protegido) */}
        <Route
          path="/*"
          element={
            <RequireAuth>
              <UserLayout />
            </RequireAuth>
          }
        >
          <Route path="home" element={<Home />} />
          <Route path="metas" element={<Metas />} />
          <Route path="ranking" element={<RankingUser />} />
          <Route path="configuracoes" element={<Configuracoes />} />
          <Route path="impact" element={<Impact />} />
        </Route>

        {/* 🔹 Fluxo admin (apenas admin) */}
        <Route
          path="/admin/*"
          element={
            <RequireAdmin>
              <AdminLayout />
            </RequireAdmin>
          }
        >
          <Route index element={<VisaoGeral />} />
          <Route path="visao-geral" element={<VisaoGeral />} />
          <Route path="usuarios" element={<Usuarios />} />
          <Route path="metas" element={<MetasAdmin />} />
          <Route path="ranking" element={<RankingAdmin />} />
          <Route path="configuracoes" element={<ConfiguracoesAdmin />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<div className="p-8">404 - Página não encontrada</div>} />
      </Routes>
    </AuthProvider>
  )
}

export default App
