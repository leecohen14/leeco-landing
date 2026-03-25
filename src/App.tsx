import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Privacy from './pages/Privacy'
import './App.css'

function App() {
  return (
    <div className="app">
      <nav className="nav">
        <div className="nav-inner">
          <Link to="/" className="logo">Leeco</Link>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Leeco. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
