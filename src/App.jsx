import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'
import Apply from './pages/Apply'
import Gallery from './pages/Gallery'
import OurTeam from './pages/OurTeam'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/events" element={<Events />} />
      <Route path="/apply" element={<Apply />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/our-team" element={<OurTeam />} />
    </Routes>
  )
}

export default App
