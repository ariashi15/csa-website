import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'
import Apply from './pages/Apply'
import Gallery from './pages/Gallery'
import OurTeam from './pages/OurTeam'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <NavBar/>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/our-team" element={<OurTeam />} />
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
