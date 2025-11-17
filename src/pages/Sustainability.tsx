import { useScrollReveal } from '../hooks/useScrollReveal'
import '../pages/SharedStyles.css'

const Sustainability = () => {
  useScrollReveal()

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section 
        className="page-hero" 
        style={{ backgroundImage: 'url(/min%20(4).jpg)' }}
      >
        <div className="page-hero-content">
          <h1 className="page-hero-title">SUSTAINABILITY</h1>
          <p className="page-hero-subtitle">
            Committed to responsible mining and environmental stewardship
          </p>
        </div>
      </section>

      {/* Sustainability Overview */}
      <section className="content-section">
        <div className="section-container">
          <h2 className="section-title reveal">OUR COMMITMENT</h2>
          <p className="section-subtitle reveal">
            Environmental stewardship is at the core of our business philosophy
          </p>
          <div className="grid-2">
            <div className="reveal-left">
              <img 
                src="/min (5).jpg" 
                alt="Sustainable mining" 
                className="feature-image"
                style={{ height: '450px' }}
              />
            </div>
            <div className="text-content reveal-right">
              <h3>Sustainable Mining Practices</h3>
              <p>
                We implement sustainable mining practices that minimize environmental impact and promote biodiversity. Our rehabilitation programs ensure that mined areas are restored to their natural state, leaving a positive legacy for future generations.
              </p>
              <p>
                Through innovative technologies and responsible resource management, we strive to balance economic growth with environmental protection and social responsibility.
              </p>
              <ul>
                <li>Zero harm to people and environment</li>
                <li>Reduced carbon emissions and energy consumption</li>
                <li>Water conservation and recycling programs</li>
                <li>Biodiversity protection and habitat restoration</li>
                <li>Community engagement and development</li>
                <li>Transparent reporting and accountability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Pillars */}
      <section className="content-section gray">
        <div className="section-container">
          <h2 className="section-title reveal">ENVIRONMENTAL PILLARS</h2>
          <div className="grid-3">
            <div className="card reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                </svg>
              </div>
              <h3 className="card-title">CLIMATE ACTION</h3>
              <p className="card-description">
                Committed to reducing greenhouse gas emissions through renewable energy adoption, energy efficiency improvements, and carbon offset programs. Target: Net-zero emissions by 2040.
              </p>
            </div>
            <div className="card reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
                </svg>
              </div>
              <h3 className="card-title">WATER STEWARDSHIP</h3>
              <p className="card-description">
                Comprehensive water management strategies including recycling, treatment, and conservation. We monitor water quality and ensure zero discharge of contaminated water to natural water bodies.
              </p>
            </div>
            <div className="card reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                </svg>
              </div>
              <h3 className="card-title">BIODIVERSITY</h3>
              <p className="card-description">
                Protecting and enhancing biodiversity through habitat conservation, species monitoring, and progressive rehabilitation. We work with conservation experts to minimize impact on ecosystems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Responsibility */}
      <section className="content-section dark">
        <div className="section-container">
          <h2 className="section-title reveal">SOCIAL RESPONSIBILITY</h2>
          <p className="section-subtitle reveal">
            Creating positive impact in the communities where we operate
          </p>
          <div className="grid-3">
            <div className="card dark reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="card-title">COMMUNITY DEVELOPMENT</h3>
              <p className="card-description">
                Supporting local communities through education programs, infrastructure development, healthcare initiatives, and economic opportunities. We prioritize local hiring and procurement.
              </p>
            </div>
            <div className="card dark reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="card-title">WORKER SAFETY</h3>
              <p className="card-description">
                Zero harm is our goal. Comprehensive safety programs, training, and state-of-the-art equipment ensure the well-being of every employee and contractor at our sites.
              </p>
            </div>
            <div className="card dark reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"></path>
                </svg>
              </div>
              <h3 className="card-title">INDIGENOUS PARTNERSHIPS</h3>
              <p className="card-description">
                Respectful engagement with indigenous communities, honoring traditional lands and cultural heritage. We seek free, prior, and informed consent for all operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Metrics */}
      <section className="content-section">
        <div className="section-container">
          <h2 className="section-title reveal">2024 SUSTAINABILITY PERFORMANCE</h2>
          <div className="stats-container reveal">
            <div className="stat-item">
              <div className="stat-number">35%</div>
              <div className="stat-label">Reduction in Carbon Emissions</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">85%</div>
              <div className="stat-label">Water Recycled</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1,200</div>
              <div className="stat-label">Hectares Rehabilitated</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">$12M</div>
              <div className="stat-label">Community Investment</div>
            </div>
          </div>
        </div>
      </section>

      {/* Circular Economy */}
      <section className="content-section gray">
        <div className="section-container">
          <h2 className="section-title reveal">CIRCULAR ECONOMY APPROACH</h2>
          <div className="grid-2">
            <div className="text-content reveal-left">
              <h3>Waste Reduction & Recycling</h3>
              <p>
                We embrace circular economy principles to minimize waste and maximize resource efficiency. Our operations focus on reducing, reusing, and recycling materials throughout the mining lifecycle.
              </p>
              <ul>
                <li>Tailings reprocessing and reuse programs</li>
                <li>Waste rock utilization in construction</li>
                <li>Equipment refurbishment and lifecycle extension</li>
                <li>Scrap metal and materials recycling</li>
                <li>By-product recovery and commercialization</li>
                <li>Packaging reduction initiatives</li>
              </ul>
              <button className="btn btn-outline" style={{ marginTop: '20px' }}>
                VIEW SUSTAINABILITY REPORT
              </button>
            </div>
            <div className="reveal-right">
              <img 
                src="/min (2).jpg" 
                alt="Circular economy" 
                className="feature-image"
                style={{ height: '450px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="content-section">
        <div className="section-container">
          <h2 className="section-title reveal">CERTIFICATIONS & STANDARDS</h2>
          <div className="grid-4">
            <div className="card reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className="card-title">ISO 14001</h3>
              <p className="card-description">
                Environmental Management System certification across all operations.
              </p>
            </div>
            <div className="card reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className="card-title">ISO 45001</h3>
              <p className="card-description">
                Occupational Health and Safety Management System certification.
              </p>
            </div>
            <div className="card reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className="card-title">IRMA CERTIFIED</h3>
              <p className="card-description">
                Initiative for Responsible Mining Assurance standard compliance.
              </p>
            </div>
            <div className="card reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className="card-title">UN SDGs</h3>
              <p className="card-description">
                Aligned with United Nations Sustainable Development Goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="content-section dark">
        <div className="section-container">
          <h2 className="section-title reveal">2030 SUSTAINABILITY GOALS</h2>
          <div className="grid-3">
            <div className="card dark reveal">
              <h3 className="card-title" style={{ marginBottom: '20px' }}>ENVIRONMENTAL</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '8px 0', color: '#ccc', fontSize: '0.95rem' }}>
                  <span style={{ color: '#d4af37', marginRight: '8px' }}>•</span>
                  50% reduction in GHG emissions
                </li>
                <li style={{ padding: '8px 0', color: '#ccc', fontSize: '0.95rem' }}>
                  <span style={{ color: '#d4af37', marginRight: '8px' }}>•</span>
                  90% water recycling rate
                </li>
                <li style={{ padding: '8px 0', color: '#ccc', fontSize: '0.95rem' }}>
                  <span style={{ color: '#d4af37', marginRight: '8px' }}>•</span>
                  Zero waste to landfill
                </li>
                <li style={{ padding: '8px 0', color: '#ccc', fontSize: '0.95rem' }}>
                  <span style={{ color: '#d4af37', marginRight: '8px' }}>•</span>
                  Net positive biodiversity impact
                </li>
              </ul>
            </div>
            <div className="card dark reveal">
              <h3 className="card-title" style={{ marginBottom: '20px' }}>SOCIAL</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '8px 0', color: '#ccc', fontSize: '0.95rem' }}>
                  <span style={{ color: '#d4af37', marginRight: '8px' }}>•</span>
                  Zero fatalities and serious injuries
                </li>
                <li style={{ padding: '8px 0', color: '#ccc', fontSize: '0.95rem' }}>
                  <span style={{ color: '#d4af37', marginRight: '8px' }}>•</span>
                  50% local workforce at all sites
                </li>
                <li style={{ padding: '8px 0', color: '#ccc', fontSize: '0.95rem' }}>
                  <span style={{ color: '#d4af37', marginRight: '8px' }}>•</span>
                  $50M community investment
                </li>
                <li style={{ padding: '8px 0', color: '#ccc', fontSize: '0.95rem' }}>
                  <span style={{ color: '#d4af37', marginRight: '8px' }}>•</span>
                  40% women in leadership
                </li>
              </ul>
            </div>
            <div className="card dark reveal">
              <h3 className="card-title" style={{ marginBottom: '20px' }}>GOVERNANCE</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '8px 0', color: '#ccc', fontSize: '0.95rem' }}>
                  <span style={{ color: '#d4af37', marginRight: '8px' }}>•</span>
                  100% ethical supply chain
                </li>
                <li style={{ padding: '8px 0', color: '#ccc', fontSize: '0.95rem' }}>
                  <span style={{ color: '#d4af37', marginRight: '8px' }}>•</span>
                  Full transparency in reporting
                </li>
                <li style={{ padding: '8px 0', color: '#ccc', fontSize: '0.95rem' }}>
                  <span style={{ color: '#d4af37', marginRight: '8px' }}>•</span>
                  Independent audits annually
                </li>
                <li style={{ padding: '8px 0', color: '#ccc', fontSize: '0.95rem' }}>
                  <span style={{ color: '#d4af37', marginRight: '8px' }}>•</span>
                  Stakeholder engagement programs
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Sustainability
