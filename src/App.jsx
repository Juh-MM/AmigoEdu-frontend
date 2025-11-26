import './App.css'
import { Routes, Route, Navigate, Outlet } from 'react-router-dom'

// Usuário
import Home from './pages/Home'
import Metas from './pages/Metas'
import Ranking from './pages/Ranking'
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
    <Routes>
      {/* fluxo usuário */}
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Navigate to="home" replace />} />
        <Route path="home" element={<Home />} />
        <Route path="metas" element={<Metas />} />
        <Route path="ranking" element={<Ranking />} />
        <Route path="configuracoes" element={<Configuracoes />} />
        <Route path="impact" element={<Impact />} />
      </Route>

      {/* fluxo admin */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<VisaoGeral />} />
        <Route path="visao-geral" element={<VisaoGeral />} />
        <Route path="usuarios" element={<Usuarios />} />
        <Route path="metas" element={<MetasAdmin />} />
        <Route path="ranking" element={<RankingAdmin />} />
        <Route path="configuracoes" element={<ConfiguracoesAdmin />} />
      </Route>
    </Routes>
  )
}

export default App