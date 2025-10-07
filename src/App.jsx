import './App.css'
import Sidebar from './components/Sidebar'
import Ajuda from './components/Ajuda'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
      <Sidebar />
      <Ajuda />

      <Routes>
        <Route path="/" />
      </Routes>
    </Router>
  )
}

export default App
