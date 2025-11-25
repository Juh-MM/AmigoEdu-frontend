import './App.css'

// Usuário
import Home from './pages/Home'
import Metas from './pages/Metas'
import Ranking from './pages/Ranking'
import Configuracoes from './pages/Configuracoes'
import Impact from './pages/impact'
import Sidebar from './components/Sidebar'
import Ajuda from './components/Ajuda'
import Profile from './components/Profile'
import ProtectedRoute from './components/ProtectedRoute'

// Admin
import AdminLayout from './pages/admin/AdminLayout'
import VisaoGeral from './pages/admin/VisaoGeral'
import Usuarios from './pages/admin/Usuarios'
import MetasAdmin from './pages/admin/MetasAdmin'
import RankingAdmin from './pages/admin/RankingAdmin'
import ConfiguracoesAdmin from './pages/admin/ConfiguracoesAdmin'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      {/* Fluxo de usuários */}
      <Route path="/*" element={
        <div className="flex flex-row bg-neutral-100 min-h-screen">
          <Sidebar />
          <div className="flex flex-col flex-1 h-screen overflow-y-auto">
            <Profile />
            <Routes>
              <Route path="home" element={<Home />} />
              <Route path="metas" element={<Metas />} />
              <Route path="ranking" element={<Ranking />} />
              <Route path="configuracoes" element={<Configuracoes />} />
              <Route path="impact" element={<Impact />} />
            </Routes>
            <Ajuda />
          </div>
        </div>
      }/>

      {/* Fluxo admin */}
      <Route path="/admin/*" element={
        <ProtectedRoute>
          <AdminLayout />
        </ProtectedRoute>
      }>
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
