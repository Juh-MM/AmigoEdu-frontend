import './App.css'
import Home from './pages/Home'
import Metas from './pages/Metas'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Home />

        <Routes>
          <Route path="/metas" element={<Metas />} />
        </Routes>
  </Router>
  )
}

export default App
