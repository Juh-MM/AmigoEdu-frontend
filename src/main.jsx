import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from "./services/authContext.jsx"; 
import App from './App.jsx'
import Login from './pages/Login.jsx'
import Cadastro from './pages/Cadastro.jsx' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/*" element={
                <App />
            } />
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
  </StrictMode>
)

if ('serviceWorker' in navigator) {
  if (import.meta.env.PROD) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then(reg => console.log('Service Worker registrado!', reg.scope, reg.active?.scriptURL))
        .catch(err => console.error('SW registration failed:', err));
    });
  } else {
    // DEV: garante que não existam SWs ativos que atrapalhem o Vite
    navigator.serviceWorker.getRegistrations()
      .then(regs => regs.forEach(r => { console.log('Unregistering in dev:', r.scope); r.unregister(); }))
      .catch(() => {});
  }
}