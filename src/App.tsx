import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Homepage from './pages/Homepage'
import AboutUs from './pages/AboutUs'
import BoardMembers from './pages/BoardMembers'
import ManagementTeam from './pages/ManagementTeam'
import Services from './pages/Services'
import News from './pages/News'
import Membership from './pages/Membership'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import NotFound from './pages/NotFound'
import EventNigeriaMiningWeek2025 from './pages/EventNigeriaMiningWeek2025'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/about/board-members" element={<BoardMembers />} />
            <Route path="/about/management" element={<ManagementTeam />} />
            <Route path="/services" element={<Services />} />
            <Route path="/news" element={<News />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />

            <Route path="/events/nigeria-mining-week-2025" element={<EventNigeriaMiningWeek2025 />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
