import { Link } from 'react-router'
import { useState, useEffect } from 'react'
import './Navigation.css'

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
          <Link to="/" className="nav-link">HOME</Link>
          <Link to="/about" className="nav-link">ABOUT</Link>
          <Link to="/operations" className="nav-link">OPERATIONS</Link>
          <Link to="/services" className="nav-link">SERVICES</Link>
          <Link to="/investors" className="nav-link">INVESTORS</Link>
          <Link to="/membership" className="nav-link">MEMBERSHIP</Link>
          <Link to="/news" className="nav-link">NEWS</Link>
          <Link to="/contact" className="nav-link">CONTACT</Link>
          <button className="search-button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
