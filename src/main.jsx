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
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(() => console.log('Service Worker registrado!'))
      .catch((err) => console.error('Erro ao registrar SW:', err));
  });
}