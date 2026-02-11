import { useScrollReveal } from '../hooks/useScrollReveal'
import '../pages/SharedStyles.css'

const ManagementTeam = () => {
  useScrollReveal()

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section 
        className="page-hero" 
        style={{ backgroundImage: 'url(https://res.cloudinary.com/dufw6bsko/image/upload/v1763397091/min_5_iisxwm.jpg)' }}
      >
        <div className="page-hero-content">
          <h1 className="page-hero-title">MANAGEMENT TEAM</h1>
          <p className="page-hero-subtitle">
            Meet the dedicated professionals leading the Miners Association of Nigeria forward
          </p>
        </div>
      </section>

      {/* Executive Team Section */}
      <section className="content-section">
        <div className="section-container">
          <h2 className="section-title reveal">EXECUTIVE LEADERSHIP</h2>
          <p className="section-subtitle reveal" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
            Our executive team brings together diverse expertise and a shared commitment to advancing Nigeria's mining sector
          </p>
          
          <div className="grid-3">
            {/* Executive 1 */}
            <div className="team-card reveal">
              <div className="team-image-container">
                <img 
                  src="https://res.cloudinary.com/dufw6bsko/image/upload/v1763543111/slazzer-preview-5qofr_bel3he.png" 
                  alt="Executive Director" 
                  className="team-image"
                />
                <div className="team-overlay">
                  <div className="team-social">
                    <a href="#" className="social-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a href="#" className="social-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="team-info">
                <h3 className="team-name">Ms. Bilqis Audu</h3>
                <p className="team-position">Head of Operations</p>
                <p className="team-description">
                  Oversees the day-to-day operations of the association, ensuring efficient execution of programs and initiatives.
                </p>
              </div>
            </div>

            {/* Executive 2 */}
            <div className="team-card reveal">
              <div className="team-image-container">
                <img 
                  src="https://res.cloudinary.com/dufw6bsko/image/upload/v1763543111/slazzer-preview-5qofr_bel3he.png" 
                  alt="Technical Director" 
                  className="team-image"
                />
                <div className="team-overlay">
                  <div className="team-social">
                    <a href="#" className="social-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="team-info">
                <h3 className="team-name">Engr. Tunde Ogunlesi</h3>
                <p className="team-position">Technical Director</p>
                <p className="team-description">
                  Leads technical initiatives and provides expertise on mining operations, safety standards, and best practices.
                </p>
              </div>
            </div>

            {/* Executive 3 */}
            <div className="team-card reveal">
              <div className="team-image-container">
                <img 
                  src="https://res.cloudinary.com/dufw6bsko/image/upload/v1763543111/slazzer-preview-5qofr_bel3he.png" 
                  alt="Director of Member Services" 
                  className="team-image"
                />
                <div className="team-overlay">
                  <div className="team-social">
                    <a href="#" className="social-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a href="#" className="social-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="team-info">
                <h3 className="team-name">Mrs. Adeola Johnson</h3>
                <p className="team-position">Director of Member Services</p>
                <p className="team-description">
                  Manages member relations, benefits, and engagement strategies to enhance the value of membership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Heads Section */}
      <section className="content-section gray">
        <div className="section-container">
          <h2 className="section-title reveal">DEPARTMENT HEADS</h2>
          <p className="section-subtitle reveal" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px' }}>
            Our department leads bring specialized expertise to drive key initiatives and support our members
          </p>
          
          <div className="grid-4">
            <div className="team-card-sm reveal">
              <div className="team-image-container-sm">
                <img 
                  src="https://res.cloudinary.com/dufw6bsko/image/upload/v1763543111/slazzer-preview-5qofr_bel3he.png" 
                  alt="Training Manager" 
                  className="team-image-sm"
                />
              </div>
              <div className="team-info-sm">
                <h4 className="team-name-sm">Mr. Ibrahim Musa</h4>
                <p className="team-position-sm">Training & Capacity Building</p>
              </div>
            </div>
            
            <div className="team-card-sm reveal">
              <div className="team-image-container-sm">
                <img 
                  src="https://res.cloudinary.com/dufw6bsko/image/upload/v1763543111/slazzer-preview-5qofr_bel3he.png" 
                  alt="Research Manager" 
                  className="team-image-sm"
                />
              </div>
              <div className="team-info-sm">
                <h4 className="team-name-sm">Dr. Ngozi Okonkwo</h4>
                <p className="team-position-sm">Research & Development</p>
              </div>
            </div>
            
            <div className="team-card-sm reveal">
              <div className="team-image-container-sm">
                <img 
                  src="https://res.cloudinary.com/dufw6bsko/image/upload/v1763543111/slazzer-preview-5qofr_bel3he.png" 
                  alt="Finance Manager" 
                  className="team-image-sm"
                />
              </div>
              <div className="team-info-sm">
                <h4 className="team-name-sm">Mr. Femi Adebayo</h4>
                <p className="team-position-sm">Finance & Administration</p>
              </div>
            </div>
            
            <div className="team-card-sm reveal">
              <div className="team-image-container-sm">
                <img 
                  src="https://res.cloudinary.com/dufw6bsko/image/upload/v1763543111/slazzer-preview-5qofr_bel3he.png" 
                  alt="Communications Manager" 
                  className="team-image-sm"
                />
              </div>
              <div className="team-info-sm">
                <h4 className="team-name-sm">Ms. Aisha Mohammed</h4>
                <p className="team-position-sm">Communications & PR</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="content-section">
        <div className="section-container">
          <div className="grid-2">
            <div className="reveal-left">
              <h2 className="section-title">JOIN OUR TEAM</h2>
              <p>
                At Miners Association of Nigeria, we're always looking for talented professionals who are passionate about the mining sector and committed to our mission of advancing the industry.
              </p>
              <p style={{ marginTop: '20px' }}>
                We offer competitive compensation, professional development opportunities, and the chance to work with industry leaders.
              </p>
              <button className="btn btn-outline" style={{ marginTop: '20px' }}>
                VIEW CURRENT OPENINGS
              </button>
            </div>
            <div className="reveal-right">
              <img 
                src="https://res.cloudinary.com/dufw6bsko/image/upload/v1763397090/min_4_l3ijmr.jpg" 
                alt="Join our team" 
                className="feature-image"
                style={{ borderRadius: '8px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="content-section dark">
        <div className="section-container">
          <div className="reveal" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="section-title">CONTACT OUR TEAM</h2>
            <p className="section-subtitle" style={{ marginBottom: '40px' }}>
              Have questions for our management team? Reach out to us and we'll be happy to assist you.
            </p>
            <a href="/contact" className="btn btn-primary" style={{ marginRight: '20px' }}>
              CONTACT US
            </a>
            <a href="/about/board" className="btn btn-outline-light">
              MEET OUR BOARD
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ManagementTeam
