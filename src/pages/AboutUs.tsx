import { useScrollReveal } from '../hooks/useScrollReveal'
import '../pages/SharedStyles.css'

const AboutUs = () => {
  useScrollReveal()

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section 
        className="page-hero" 
        style={{ backgroundImage: 'url(/min%20(5).jpg)' }}
      >
        <div className="page-hero-content">
          <h1 className="page-hero-title">ABOUT MINERS ASSOCIATION</h1>
          <p className="page-hero-subtitle">
            Connecting Africa with the World's Best for 20+ Years
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
                src="/min (2).jpg" 
                alt="Miners Association Events" 
                className="feature-image"
                style={{ height: '400px' }}
              />
            </div>
            <div className="text-content reveal-right">
              <h3>Connecting Africa's Business Leaders</h3>
              <p>
                Miners Association is Africa's premier platform for business connection and influence. For over 20 years, we have been connecting people and organisations to information and each other through signature in-person and digital environments across the African continent.
              </p>
              <p>
                We specialize in creating the conditions for extraordinary change, supporting Africa to achieve its highest potential. Our platforms span critical sectors including Mining, Energy, Smart Mobility, and Retail, bringing together industry leaders, innovators, and decision-makers.
              </p>
              <p>
                Through our trust-based influence model, we help businesses build lasting relationships, gain market visibility, and create meaningful opportunities. Our integrated approach combines live events, digital media, industry news, and year-round engagement to deliver sustained value to our clients.
              </p>
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
                To connect Africa's business leaders with global opportunities through trusted platforms that facilitate meaningful dialogue, knowledge sharing, and collaboration. We create environments where innovation thrives, relationships deepen, and sustainable progress becomes possible across key industries driving Africa's economic transformation.
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
                To be Africa's most influential business platform, recognized for catalyzing sustainable progress through authentic connections. We envision an Africa where businesses thrive through collaboration, where innovation is accessible, and where every connection creates opportunities for social flourishing, economic prosperity, and resource abundance.
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
              <h3 className="card-title">TRUST</h3>
              <p className="card-description">
                We build lasting relationships through authentic engagement, transparency, and consistent delivery on our promises to clients and partners.
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
              <h3 className="card-title">CONNECTION</h3>
              <p className="card-description">
                We create meaningful opportunities for businesses to connect, collaborate, and grow together across Africa's most dynamic industries.
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
                We deliver world-class events, media, and platforms that set the standard for business engagement and thought leadership in Africa.
              </p>
            </div>
            <div className="card reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3 className="card-title">IMPACT</h3>
              <p className="card-description">
                We are committed to driving sustainable progress and creating lasting value for Africa's business community and the continent's future.
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
              <div className="stat-number">20+</div>
              <div className="stat-label">Years Connecting Africa</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">88,000+</div>
              <div className="stat-label">Industry Contacts</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Annual Events</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4</div>
              <div className="stat-label">Key Industry Sectors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="content-section gray">
        <div className="section-container">
          <h2 className="section-title reveal">LEADERSHIP TEAM</h2>
          <p className="section-subtitle reveal">
            Our experienced leadership team brings decades of mining expertise and strategic vision
          </p>
          <div className="grid-3">
            <div className="card reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3 className="card-title">JOHN ROBERTS</h3>
              <p className="card-description" style={{ marginBottom: '10px', color: '#d4af37', fontWeight: '600' }}>
                Chief Executive Officer
              </p>
              <p className="card-description">
                With over 25 years in the mining industry, John leads our strategic vision and global operations with a focus on sustainable growth.
              </p>
            </div>
            <div className="card reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3 className="card-title">SARAH CHEN</h3>
              <p className="card-description" style={{ marginBottom: '10px', color: '#d4af37', fontWeight: '600' }}>
                Chief Financial Officer
              </p>
              <p className="card-description">
                Sarah brings extensive financial expertise, ensuring fiscal responsibility and driving investment strategies for long-term value creation.
              </p>
            </div>
            <div className="card reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3 className="card-title">MICHAEL OKONKWO</h3>
              <p className="card-description" style={{ marginBottom: '10px', color: '#d4af37', fontWeight: '600' }}>
                Chief Operations Officer
              </p>
              <p className="card-description">
                Michael oversees all mining operations, implementing innovative technologies and best practices to maximize efficiency and safety.
              </p>
            </div>
          </div>
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
