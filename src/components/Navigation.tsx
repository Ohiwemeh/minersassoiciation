import { Link } from 'react-router'
import { useState, useEffect } from 'react'
import './Navigation.css'

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [opsOpen, setOpsOpen] = useState(false)
  const [eventsOpen, setEventsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <div className="logo-icon">
           <img src='https://res.cloudinary.com/dufw6bsko/image/upload/v1763543111/slazzer-preview-5qofr_bel3he.png' width={60}/>
          </div>
        </Link>
        
        <button 
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => { setMobileMenuOpen(false); setAboutOpen(false); setOpsOpen(false); setEventsOpen(false) }}>HOME</Link>
          <div 
            className={`nav-dropdown ${aboutOpen ? 'open' : ''}`}
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button 
              className="nav-link dropdown-toggle"
              onClick={() => setAboutOpen(!aboutOpen)}
            >
              ABOUT
            </button>
            <div className="dropdown-menu">
              <Link to="/about" className="dropdown-item" onClick={() => { setMobileMenuOpen(false); setAboutOpen(false) }}>About Us</Link>
              <Link to="/about/leadership" className="dropdown-item" onClick={() => { setMobileMenuOpen(false); setAboutOpen(false) }}>Partners & Owners</Link>
            </div>
          </div>
          <div 
            className={`nav-dropdown ${opsOpen ? 'open' : ''}`}
            onMouseEnter={() => setOpsOpen(true)}
            onMouseLeave={() => setOpsOpen(false)}
          >
            <button 
              className="nav-link dropdown-toggle"
              onClick={() => setOpsOpen(!opsOpen)}
            >
              OPERATIONS
            </button>
            <div className="dropdown-menu">
              <Link to="/operations" className="dropdown-item" onClick={() => { setMobileMenuOpen(false); setOpsOpen(false) }}>Operations</Link>
              <Link to="/services" className="dropdown-item" onClick={() => { setMobileMenuOpen(false); setOpsOpen(false) }}>Services</Link>
            </div>
          </div>
          {/* <Link to="/programs" className="nav-link" onClick={() => setMobileMenuOpen(false)}>PROGRAMS</Link> */}
          <Link to="/investors" className="nav-link" onClick={() => setMobileMenuOpen(false)}>INVESTORS</Link>
          <Link to="/membership" className="nav-link" onClick={() => setMobileMenuOpen(false)}>MEMBERSHIP</Link>
          <Link to="/news" className="nav-link" onClick={() => setMobileMenuOpen(false)}>NEWS</Link>
          <div 
            className={`nav-dropdown ${eventsOpen ? 'open' : ''}`}
            onMouseEnter={() => setEventsOpen(true)}
            onMouseLeave={() => setEventsOpen(false)}
          >
            <button 
              className="nav-link dropdown-toggle"
              onClick={() => setEventsOpen(!eventsOpen)}
            >
              EVENTS
            </button>
            <div className="dropdown-menu">
              <Link to="/events/nigeria-mining-week-2025" className="dropdown-item" onClick={() => { setMobileMenuOpen(false); setEventsOpen(false) }}>Nigeria Mining Week 2025</Link>
            </div>
          </div>
          <Link to="/contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>CONTACT</Link>
          {/* <button className="search-button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </button> */}
        </div>
      </div>
    </nav>
  )
}

export default Navigation
