import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Homepage from './pages/Homepage'
import AboutUs from './pages/AboutUs'
import Operations from './pages/Operations'
import Sustainability from './pages/Sustainability'
import Services from './pages/Services'
import Investors from './pages/Investors'
import News from './pages/News'
import Careers from './pages/Careers'
import Membership from './pages/Membership'
import Programs from './pages/Programs'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
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
            <Route path="/operations" element={<Operations />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/services" element={<Services />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/news" element={<News />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
