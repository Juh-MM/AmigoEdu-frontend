import './App.css'
import Home from './pages/Home'
import Metas from './pages/Metas'
import Sidebar from './components/Sidebar'
import Ajuda from './components/Ajuda'
import Profile from './components/Profile'

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="flex flex-row bg-neutral-100 min-h-screen">
      <Sidebar />
      
      <div className="flex flex-col w-full">
        <Profile />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Metas" element={<Metas />} />
        </Routes>
        <Ajuda />
      </div>
    </div>
  )
}

export default App
