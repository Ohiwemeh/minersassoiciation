import { Link } from 'react-router'
import { useScrollReveal } from '../hooks/useScrollReveal'
import '../pages/SharedStyles.css'

const NotFound = () => {
  useScrollReveal()

  return (
    <div className="page-container">
      <section className="content-section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="section-container">
          <div className="reveal" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ fontSize: '10rem', fontWeight: '700', color: '#d4af37', lineHeight: '1', marginBottom: '20px' }}>
              404
            </div>
            <h1 style={{ fontSize: '2.5rem', fontWeight: '300', letterSpacing: '3px', marginBottom: '20px', textTransform: 'uppercase', color: '#333' }}>
              PAGE NOT FOUND
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '40px', lineHeight: '1.8' }}>
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>
            
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '60px' }}>
              <Link to="/" className="btn btn-primary" style={{ textDecoration: 'none' }}>
                GO TO HOMEPAGE
              </Link>
              <Link to="/contact" className="btn btn-outline" style={{ textDecoration: 'none' }}>
                CONTACT US
              </Link>
            </div>

            <div style={{ marginTop: '80px' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '30px', color: '#333' }}>
                POPULAR PAGES
              </h3>
              <div className="grid-3">
                <Link to="/about" style={{ textDecoration: 'none' }}>
                  <div className="card hover-lift">
                    <div className="card-icon">
                      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                    <h3 className="card-title">ABOUT US</h3>
                    <p className="card-description">
                      Learn about our company, mission, and values
                    </p>
                  </div>
                </Link>
                <Link to="/operations" style={{ textDecoration: 'none' }}>
                  <div className="card hover-lift">
                    <div className="card-icon">
                      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      </svg>
                    </div>
                    <h3 className="card-title">OPERATIONS</h3>
                    <p className="card-description">
                      Explore our global mining operations
                    </p>
                  </div>
                </Link>
                <Link to="/careers" style={{ textDecoration: 'none' }}>
                  <div className="card hover-lift">
                    <div className="card-icon">
                      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      </svg>
                    </div>
                    <h3 className="card-title">CAREERS</h3>
                    <p className="card-description">
                      Join our team and build your career
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NotFound
