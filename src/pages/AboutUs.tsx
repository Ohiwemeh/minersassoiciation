import { useScrollReveal } from '../hooks/useScrollReveal'
import { Link } from 'react-router'
import '../pages/SharedStyles.css'

const AboutUs = () => {
  useScrollReveal()

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section
        className="page-hero"
        style={{ backgroundImage: 'url(https://res.cloudinary.com/dufw6bsko/image/upload/v1763397091/min_5_iisxwm.jpg)' }}
      >
        <div className="page-hero-content">
          <h1 className="page-hero-title">ABOUT US</h1>
          <p className="page-hero-subtitle">
            Building business upon integrity and honesty since 1995
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="content-section">
        <div className="section-container">
          <h2 className="section-title reveal">WHO WE ARE</h2>
          <div className="grid-2">
            <div className="reveal-left">
              <img
                src="https://res.cloudinary.com/dufw6bsko/image/upload/v1763397106/min_2_kbhgz7.jpg"
                alt="Mining operations"
                className="feature-image"
                style={{ height: '400px' }}
              />
            </div>
            <div className="text-content reveal-right">
              <h3>Leading the Mining Industry</h3>
              <p>
                The Miners Association of Nigeria (MAN) is a National Industry Association whose diverse membership includes entities and individuals that are directly involved in mineral resources exploration and exploitation in Nigeria. MAN membership comprises of exploration, quarrying, and mining companies. It also encompasses services and Consultancy firms that relate to mining sector.
              </p>
              <p>
                At inception in 1944, the Association was called the Association of African Miners and it was meant to protect the interest of the African mine workers. Later in its history after the independence, it transmuted into an association of Nigerian Mine Owners which late changed its name to Miners Association of Nigeria in 1993. It is the umbrella body of all other trade and industry. </p>
              <p>
                MAN is a very responsible Association of mine owners which include Artisanal and Small-Scale Miners, Quarry operators, Traders of Mining products, etc. The Association has been collaborating with the Ministry of Solid Minerals Development and its agencies to achieve every success in the ongoing reform initiative of the Government agencies and international Community through their Embassies, on behalf of the indigenous operators (members) so as to harness the mineral potentials of the country.

              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Organizational Structure */}
      <section className="content-section gray">
        <div className="section-container">
          <h2 className="section-title reveal">ORGANIZATIONAL STRUCTURE</h2>
          <p className="section-subtitle reveal">
            A well-structured association designed to capture all categories of miners in Nigeria
          </p>
          <div className="grid-2">
            <div className="card reveal" style={{ padding: '30px' }}>
              <h3 className="card-title" style={{ marginBottom: '20px', color: '#d4af37' }}>COMPREHENSIVE REPRESENTATION</h3>
              <p style={{ marginBottom: '20px', lineHeight: '1.6' }}>
                Miners Association of Nigeria (MAN) is the only business Association in the Mining Industry that is well structured to capture all categories of Miners in Nigeria:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '20px' }}>
                <li style={{ 
                  padding: '10px 0', 
                  borderBottom: '1px solid #eee',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#d4af37">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  Gemstones Miners and Marketers Association of Nigeria
                </li>
                <li style={{ 
                  padding: '10px 0', 
                  borderBottom: '1px solid #eee',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#d4af37">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  Dimension Stones Association of Nigeria
                </li>
                <li style={{ 
                  padding: '10px 0', 
                  borderBottom: '1px solid #eee',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#d4af37">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  Association of Miners and Processors of Barite
                </li>
                <li style={{ 
                  padding: '10px 0', 
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#d4af37">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  And many other specialized mining associations
                </li>
              </ul>
            </div>
            <div className="card reveal" style={{ padding: '30px' }}>
              <h3 className="card-title" style={{ marginBottom: '20px', color: '#d4af37' }}>GOVERNANCE STRUCTURE</h3>
              <div style={{ marginBottom: '25px' }}>
                <div style={{ 
                  backgroundColor: 'rgba(212, 175, 55, 0.1)', 
                  border: '2px solid #d4af37', 
                  borderRadius: '8px', 
                  padding: '20px',
                  marginBottom: '20px'
                }}>
                  <h4 style={{ color: '#d4af37', marginBottom: '10px', fontSize: '1.1rem' }}>NATIONAL LEVEL</h4>
                  <p style={{ margin: 0, fontWeight: '600', fontSize: '1.2rem', color: '#2c3e50' }}>
                    9 Elected Executive Officers
                  </p>
                  <p style={{ margin: '5px 0 0 0', color: '#666' }}>
                    Leading the association's strategic direction and national initiatives
                  </p>
                </div>
                <div style={{ 
                  backgroundColor: '#f8f9fa', 
                  border: '2px solid #e9ecef', 
                  borderRadius: '8px', 
                  padding: '20px'
                }}>
                  <h4 style={{ color: '#2c3e50', marginBottom: '10px', fontSize: '1.1rem' }}>STATE CHAPTERS</h4>
                  <p style={{ margin: 0, fontWeight: '600', fontSize: '1.2rem', color: '#2c3e50' }}>
                    State Executive Committees
                  </p>
                  <p style={{ margin: '5px 0 0 0', color: '#666' }}>
                    Each of the 36 states plus FCT-Abuja has its own executive committee managing local operations and member interests
                  </p>
                </div>
              </div>
              <div style={{ 
                textAlign: 'center', 
                padding: '15px',
                backgroundColor: 'rgba(212, 175, 55, 0.05)',
                borderRadius: '6px',
                border: '1px solid #d4af37'
              }}>
                <p style={{ margin: 0, fontSize: '1rem', fontStyle: 'italic' }}>
                  "All member associations are integral parts of MAN, creating a unified voice for Nigeria's mining industry"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="content-section dark">
        <div className="section-container">
          <h2 className="section-title reveal">OUR MISSION & VISION</h2>
          <div className="grid-2">
            <div className="card dark reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3 className="card-title">OUR MISSION</h3>
              <p className="card-description">
               To positively engage the Governments, there agencies and other critical stakeholders to provide enabling environment for mining activities to thrive.
              </p>
            </div>
            <div className="card dark reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4M12 8h.01"></path>
                </svg>
              </div>
              <h3 className="card-title">OUR VISION</h3>
              <p className="card-description">
                To move mining activities to greater heights in which operators would be empowered to mine with ease for the betterment of mining industry, wealth creation, and employment generation in Nigeria.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="content-section gray">
        <div className="section-container">
          <h2 className="section-title reveal">CORE VALUES</h2>
          <div className="grid-4">
            <div className="card reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="card-title">INTEGRITY</h3>
              <p className="card-description">
                We conduct our business with the highest ethical standards, transparency, and accountability in all our dealings.
              </p>
            </div>
            <div className="card reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className="card-title">SAFETY</h3>
              <p className="card-description">
                The safety and well-being of our employees, contractors, and communities is our top priority in everything we do.
              </p>
            </div>
            <div className="card reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"></path>
                </svg>
              </div>
              <h3 className="card-title">EXCELLENCE</h3>
              <p className="card-description">
                We pursue operational excellence through continuous improvement, innovation, and best-in-class practices.
              </p>
            </div>
            <div className="card reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="card-title">RESPECT</h3>
              <p className="card-description">
                We treat all people with dignity and respect, valuing diversity and fostering inclusive work environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="content-section">
        <div className="section-container">
          <h2 className="section-title reveal">BY THE NUMBERS</h2>
          <div className="stats-container reveal">
            <div className="stat-item">
              <div className="stat-number">30+</div>
              <div className="stat-label">Years of Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15</div>
              <div className="stat-label">Active Mining Sites</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2,500+</div>
              <div className="stat-label">Employees Worldwide</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">25+</div>
              <div className="stat-label">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="content-section gray">
        <div className="section-container" style={{ textAlign: 'center' }}>
          <h2 className="section-title reveal">LEADERSHIP TEAM</h2>
          <p className="section-subtitle reveal">
            Meet the people guiding our mission and strategy across the association.
          </p>
          <Link to="/about/leadership" className="btn btn-primary reveal">VIEW TEAM</Link>
        </div>
      </section>

      {/* Company History */}
      <section className="content-section">
        <div className="section-container">
          <h2 className="section-title reveal">OUR JOURNEY</h2>
          <div className="timeline">
            <div className="timeline-item reveal">
              <div className="timeline-content">
                <div className="timeline-year">1995</div>
                <div className="timeline-title">Company Founded</div>
                <p className="timeline-description">
                  Universal Metals was established with a vision to revolutionize the mining industry through ethical practices and innovation.
                </p>
              </div>
            </div>
            <div className="timeline-item reveal">
              <div className="timeline-content">
                <div className="timeline-year">2003</div>
                <div className="timeline-title">Global Expansion</div>
                <p className="timeline-description">
                  Expanded operations to three continents, establishing our presence as a global mining leader.
                </p>
              </div>
            </div>
            <div className="timeline-item reveal">
              <div className="timeline-content">
                <div className="timeline-year">2012</div>
                <div className="timeline-title">Sustainability Initiative</div>
                <p className="timeline-description">
                  Launched comprehensive sustainability program, setting new industry standards for environmental responsibility.
                </p>
              </div>
            </div>
            <div className="timeline-item reveal">
              <div className="timeline-content">
                <div className="timeline-year">2020</div>
                <div className="timeline-title">Digital Transformation</div>
                <p className="timeline-description">
                  Implemented AI and automation technologies across all operations, enhancing efficiency and safety.
                </p>
              </div>
            </div>
            <div className="timeline-item reveal">
              <div className="timeline-content">
                <div className="timeline-year">2025</div>
                <div className="timeline-title">Future Forward</div>
                <p className="timeline-description">
                  Continuing to lead the industry with innovative solutions and commitment to sustainable mining practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
