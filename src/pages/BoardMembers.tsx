import { useScrollReveal } from '../hooks/useScrollReveal'
import '../pages/SharedStyles.css'

const BoardMembers = () => {
  useScrollReveal()

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section 
        className="page-hero" 
        style={{ backgroundImage: 'url(https://res.cloudinary.com/dufw6bsko/image/upload/v1763397090/landing_onfdtb.jpg)' }}
      >
        <div className="page-hero-content">
          <h1 className="page-hero-title">BOARD OF DIRECTORS</h1>
          <p className="page-hero-subtitle">
            Meet the distinguished members guiding the Miners Association of Nigeria
          </p>
        </div>
      </section>

      {/* Board Members Section */}
      <section className="content-section">
        <div className="section-container">
          <h2 className="section-title reveal">OUR BOARD MEMBERS</h2>
          <p className="section-subtitle reveal" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
            Our Board of Directors brings together experienced professionals and industry leaders dedicated to advancing Nigeria's mining sector
          </p>
          
          <div className="grid-3">
            {/* National President */}
            <div className="team-card reveal">
              <div className="team-image-container">
                <img 
                  src="https://res.cloudinary.com/dufw6bsko/image/upload/v1770732847/WhatsApp_Image_2026-02-09_at_10.56.59_1_iqnltz.jpg" 
                  alt="Mr. Dele Ayanleke" 
                  className="team-image"
                />
              </div>
              <div className="team-info">
                <h3 className="team-name">Mr. Dele Ayanleke</h3>
                <p className="team-position">National President</p>
              </div>
            </div>

            {/* 1st Vice President */}
            <div className="team-card reveal">
              <div className="team-image-container">
                <img 
                  src="https://res.cloudinary.com/dufw6bsko/image/upload/v1763543111/slazzer-preview-5qofr_bel3he.png" 
                  alt="Hon. Ibrahim Muhammad Danyaro" 
                  className="team-image"
                />
              </div>
              <div className="team-info">
                <h3 className="team-name">Hon. Ibrahim Muhammad Danyaro</h3>
                <p className="team-position">1st Vice President</p>
              </div>
            </div>

            {/* 2nd Vice President */}
            <div className="team-card reveal">
              <div className="team-image-container">
                <img 
                  src="https://res.cloudinary.com/dufw6bsko/image/upload/v1763543111/slazzer-preview-5qofr_bel3he.png" 
                  alt="Hon. Benjamin Obayi" 
                  className="team-image"
                />
              </div>
              <div className="team-info">
                <h3 className="team-name">Hon. Benjamin Obayi</h3>
                <p className="team-position">2nd Vice President</p>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid-3" style={{ marginTop: '40px' }}>
            {/* National Secretary */}
            <div className="team-card reveal">
              <div className="team-image-container">
                <img 
                  src="https://res.cloudinary.com/dufw6bsko/image/upload/v1763543111/slazzer-preview-5qofr_bel3he.png" 
                  alt="Alh. Suleiman Liman" 
                  className="team-image"
                />
              </div>
              <div className="team-info">
                <h3 className="team-name">Alh. Suleiman Liman</h3>
                <p className="team-position">National Secretary</p>
              </div>
            </div>

            {/* National Treasurer */}
            <div className="team-card reveal">
              <div className="team-image-container">
                <img 
                  src="https://res.cloudinary.com/dufw6bsko/image/upload/v1763543111/slazzer-preview-5qofr_bel3he.png" 
                  alt="Alh. Suleiman Arzuka" 
                  className="team-image"
                />
              </div>
              <div className="team-info">
                <h3 className="team-name">Alh. Suleiman Arzuka</h3>
                <p className="team-position">National Treasurer</p>
              </div>
            </div>

            {/* National Financial Secretary */}
            <div className="team-card reveal">
              <div className="team-image-container">
                <img 
                  src="https://res.cloudinary.com/dufw6bsko/image/upload/v1763543111/slazzer-preview-5qofr_bel3he.png" 
                  alt="Mr. Tope Adebanjo" 
                  className="team-image"
                />
              </div>
              <div className="team-info">
                <h3 className="team-name">Mr. Tope Adebanjo</h3>
                <p className="team-position">National Financial Secretary</p>
              </div>
            </div>
          </div>

          {/* Third Row */}
          <div className="grid-3" style={{ marginTop: '40px' }}>
            {/* National Publicity Secretary */}
            <div className="team-card reveal">
              <div className="team-image-container">
                <img 
                  src="https://res.cloudinary.com/dufw6bsko/image/upload/v1763543111/slazzer-preview-5qofr_bel3he.png" 
                  alt="Engr. Fatai Jimoh" 
                  className="team-image"
                />
              </div>
              <div className="team-info">
                <h3 className="team-name">Engr. Fatai Jimoh</h3>
                <p className="team-position">National Publicity Secretary</p>
              </div>
            </div>

            {/* Assistant National Secretary */}
            <div className="team-card reveal">
              <div className="team-image-container">
                <img 
                  src="https://res.cloudinary.com/dufw6bsko/image/upload/v1763543111/slazzer-preview-5qofr_bel3he.png" 
                  alt="Alh. Shehu Dinawa" 
                  className="team-image"
                />
              </div>
              <div className="team-info">
                <h3 className="team-name">Alh. Shehu Dinawa</h3>
                <p className="team-position">Assistant National Secretary</p>
              </div>
            </div>

            {/* National Legal Advisor */}
            <div className="team-card reveal">
              <div className="team-image-container">
                <img 
                  src="https://res.cloudinary.com/dufw6bsko/image/upload/v1763543111/slazzer-preview-5qofr_bel3he.png" 
                  alt="Alh. Shuhu Birma" 
                  className="team-image"
                />
              </div>
              <div className="team-info">
                <h3 className="team-name">Alh. Shuhu Birma</h3>
                <p className="team-position">National Legal Advisor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board Committees Section */}
      <section className="content-section gray">
        <div className="section-container">
          <h2 className="section-title reveal">BOARD COMMITTEES</h2>
          <p className="section-subtitle reveal" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px' }}>
            Our board operates through specialized committees that focus on key areas of governance and strategy
          </p>
          
          <div className="grid-3">
            <div className="card reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="card-title">EXECUTIVE COMMITTEE</h3>
              <p className="card-description">
                Provides leadership and guidance on strategic matters between board meetings, ensuring the association's objectives are met.
              </p>
            </div>
            
            <div className="card reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="card-title">AUDIT & FINANCE</h3>
              <p className="card-description">
                Oversees financial reporting, internal controls, and ensures the association's financial health and integrity.
              </p>
            </div>
            
            <div className="card reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="card-title">NOMINATIONS & GOVERNANCE</h3>
              <p className="card-description">
                Ensures effective board composition, director recruitment, and governance best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="content-section dark">
        <div className="section-container">
          <div className="reveal" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="section-title">CONTACT OUR BOARD</h2>
            <p className="section-subtitle" style={{ marginBottom: '40px' }}>
              For inquiries or to schedule a meeting with our board members, please contact our executive office
            </p>
            <a href="/contact" className="btn btn-primary">
              CONTACT US
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BoardMembers
