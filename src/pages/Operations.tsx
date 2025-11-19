import { Link } from 'react-router'
import { useScrollReveal } from '../hooks/useScrollReveal'
import '../pages/SharedStyles.css'

const Operations = () => {
  useScrollReveal()

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section 
        className="page-hero" 
        style={{ backgroundImage: 'url(https://res.cloudinary.com/dufw6bsko/image/upload/v1763397090/min_3_q5bn0x.jpg)' }}
      >
        <div className="page-hero-content">
          <h1 className="page-hero-title">OPERATIONS & PROJECTS</h1>
          <p className="page-hero-subtitle">
            World-class mining operations across multiple continents
          </p>
        </div>
      </section>

      {/* Operations Overview */}
      <section className="content-section">
        <div className="section-container">
          <h2 className="section-title reveal">OUR GLOBAL OPERATIONS</h2>
          <p className="section-subtitle reveal">
            We operate state-of-the-art mining facilities that prioritize safety, efficiency, and environmental responsibility
          </p>
          <div className="grid-3">
            <div className="card reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                </svg>
              </div>
              <h3 className="card-title">OPEN-PIT MINING</h3>
              <p className="card-description">
                Large-scale surface mining operations utilizing advanced equipment and techniques to extract minerals efficiently. Our open-pit mines feature optimized haul roads, crushing facilities, and comprehensive dust control systems.
              </p>
            </div>
            <div className="card reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <h3 className="card-title">UNDERGROUND MINING</h3>
              <p className="card-description">
                Sophisticated underground operations accessing deep ore bodies with cutting-edge ventilation, ground support, and material handling systems. Safety and worker well-being are paramount in all underground activities.
              </p>
            </div>
            <div className="card reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 6v6l4 2"></path>
                </svg>
              </div>
              <h3 className="card-title">PROCESSING FACILITIES</h3>
              <p className="card-description">
                Modern ore processing plants employing crushing, grinding, flotation, and refining technologies to produce high-quality mineral concentrates. Our facilities maximize recovery while minimizing environmental impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Active Projects */}
      <section className="content-section gray">
        <div className="section-container">
          <h2 className="section-title reveal">ACTIVE MINING PROJECTS</h2>
          <div className="grid-2" style={{ gap: '40px' }}>
            <div className="card reveal">
              <img 
                src="https://res.cloudinary.com/dufw6bsko/image/upload/v1763397090/landing_onfdtb.jpg" 
                alt="Golden Ridge Mine" 
                style={{ width: '100%', height: '250px', objectFit: 'cover', marginBottom: '20px' }}
              />
              <h3 className="card-title">GOLDEN RIDGE MINE</h3>
              <p className="card-description" style={{ marginBottom: '15px', color: '#d4af37', fontWeight: '600' }}>
                Location: North America | Type: Open-Pit Gold Mine
              </p>
              <p className="card-description">
                Our flagship gold mining operation producing over 250,000 ounces annually. Features advanced automation, real-time monitoring systems, and comprehensive environmental management programs.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '15px' }}>
                <li style={{ padding: '5px 0', color: '#666', fontSize: '0.9rem' }}>
                  <span style={{ color: '#d4af37', marginRight: '8px' }}>•</span>
                  Production: 250,000 oz/year
                </li>
                <li style={{ padding: '5px 0', color: '#666', fontSize: '0.9rem' }}>
                  <span style={{ color: '#d4af37', marginRight: '8px' }}>•</span>
                  Employees: 450+
                </li>
                <li style={{ padding: '5px 0', color: '#666', fontSize: '0.9rem' }}>
                  <span style={{ color: '#d4af37', marginRight: '8px' }}>•</span>
                  Mine Life: 15+ years
                </li>
              </ul>
            </div>

            <div className="card reveal">
              <img 
                src="https://res.cloudinary.com/dufw6bsko/image/upload/v1763397090/min_4_l3ijmr.jpg" 
                alt="Silverstone Complex" 
                style={{ width: '100%', height: '250px', objectFit: 'cover', marginBottom: '20px' }}
              />
              <h3 className="card-title">SILVERSTONE COMPLEX</h3>
              <p className="card-description" style={{ marginBottom: '15px', color: '#d4af37', fontWeight: '600' }}>
                Location: South America | Type: Underground Silver-Zinc Mine
              </p>
              <p className="card-description">
                High-grade underground operation utilizing modern sublevel stoping methods. Integrated processing facility produces silver and zinc concentrates for global markets.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '15px' }}>
                <li style={{ padding: '5px 0', color: '#666', fontSize: '0.9rem' }}>
                  <span style={{ color: '#d4af37', marginRight: '8px' }}>•</span>
                  Production: 8M oz Ag, 45K tons Zn/year
                </li>
                <li style={{ padding: '5px 0', color: '#666', fontSize: '0.9rem' }}>
                  <span style={{ color: '#d4af37', marginRight: '8px' }}>•</span>
                  Employees: 380+
                </li>
                <li style={{ padding: '5px 0', color: '#666', fontSize: '0.9rem' }}>
                  <span style={{ color: '#d4af37', marginRight: '8px' }}>•</span>
                  Mine Life: 20+ years
                </li>
              </ul>
            </div>

            <div className="card reveal">
              <img 
                src="https://res.cloudinary.com/dufw6bsko/image/upload/v1763397090/min_6_tyd5ov.jpg" 
                alt="Copper Valley Project" 
                style={{ width: '100%', height: '250px', objectFit: 'cover', marginBottom: '20px' }}
              />
              <h3 className="card-title">COPPER VALLEY PROJECT</h3>
              <p className="card-description" style={{ marginBottom: '15px', color: '#d4af37', fontWeight: '600' }}>
                Location: Africa | Type: Open-Pit Copper Mine
              </p>
              <p className="card-description">
                Large-scale copper operation with state-of-the-art concentrator and smelter facilities. Employs sustainable mining practices and supports local community development initiatives.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '15px' }}>
                <li style={{ padding: '5px 0', color: '#666', fontSize: '0.9rem' }}>
                  <span style={{ color: '#d4af37', marginRight: '8px' }}>•</span>
                  Production: 180,000 tons Cu/year
                </li>
                <li style={{ padding: '5px 0', color: '#666', fontSize: '0.9rem' }}>
                  <span style={{ color: '#d4af37', marginRight: '8px' }}>•</span>
                  Employees: 650+
                </li>
                <li style={{ padding: '5px 0', color: '#666', fontSize: '0.9rem' }}>
                  <span style={{ color: '#d4af37', marginRight: '8px' }}>•</span>
                  Mine Life: 25+ years
                </li>
              </ul>
            </div>

            <div className="card reveal">
              <img 
                src="https://res.cloudinary.com/dufw6bsko/image/upload/v1763397106/min_2_kbhgz7.jpg" 
                alt="Diamond Peak Mine" 
                style={{ width: '100%', height: '250px', objectFit: 'cover', marginBottom: '20px' }}
              />
              <h3 className="card-title">DIAMOND PEAK MINE</h3>
              <p className="card-description" style={{ marginBottom: '15px', color: '#d4af37', fontWeight: '600' }}>
                Location: Australia | Type: Underground Diamond Mine
              </p>
              <p className="card-description">
                Premium diamond mining operation producing high-quality gemstones. Features advanced sorting technology and strict quality control measures ensuring exceptional product standards.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '15px' }}>
                <li style={{ padding: '5px 0', color: '#666', fontSize: '0.9rem' }}>
                  <span style={{ color: '#d4af37', marginRight: '8px' }}>•</span>
                  Production: 500,000 carats/year
                </li>
                <li style={{ padding: '5px 0', color: '#666', fontSize: '0.9rem' }}>
                  <span style={{ color: '#d4af37', marginRight: '8px' }}>•</span>
                  Employees: 280+
                </li>
                <li style={{ padding: '5px 0', color: '#666', fontSize: '0.9rem' }}>
                  <span style={{ color: '#d4af37', marginRight: '8px' }}>•</span>
                  Mine Life: 12+ years
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mining Technology */}
      <section className="content-section dark">
        <div className="section-container">
          <h2 className="section-title reveal">ADVANCED MINING TECHNOLOGY</h2>
          <p className="section-subtitle reveal">
            Leveraging cutting-edge technology to enhance safety, efficiency, and sustainability
          </p>
          <div className="grid-3">
            <div className="card dark reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3 className="card-title">AUTOMATION & AI</h3>
              <p className="card-description">
                Autonomous haul trucks, drilling systems, and AI-powered optimization algorithms that maximize productivity while reducing operational costs and improving worker safety.
              </p>
            </div>
            <div className="card dark reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M2 12h20"></path>
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
              </div>
              <h3 className="card-title">REAL-TIME MONITORING</h3>
              <p className="card-description">
                IoT sensors and monitoring systems providing real-time data on equipment performance, environmental conditions, and worker safety across all operations.
              </p>
            </div>
            <div className="card dark reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <h3 className="card-title">3D MODELING</h3>
              <p className="card-description">
                Advanced geological modeling and mine planning software enabling precise resource estimation and optimal extraction strategies for maximum recovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Performance */}
      <section className="content-section">
        <div className="section-container">
          <h2 className="section-title reveal">SAFETY & PERFORMANCE METRICS</h2>
          <div className="stats-container reveal">
            <div className="stat-item">
              <div className="stat-number">0.12</div>
              <div className="stat-label">Total Recordable Injury Frequency Rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98.5%</div>
              <div className="stat-label">Equipment Availability</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">92%</div>
              <div className="stat-label">Recovery Rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15M</div>
              <div className="stat-label">Tons Processed Annually</div>
            </div>
          </div>
        </div>
      </section>

      {/* Exploration Projects */}
      <section className="content-section gray">
        <div className="section-container">
          <h2 className="section-title reveal">EXPLORATION & DEVELOPMENT</h2>
          <div className="grid-2">
            <div className="text-content reveal-left">
              <h3>Future Growth Pipeline</h3>
              <p>
                Our exploration team is actively developing new projects to ensure long-term growth and resource sustainability. We employ advanced exploration techniques including geophysical surveys, geochemical analysis, and core drilling programs.
              </p>
              <ul>
                <li>5 advanced exploration projects across 3 continents</li>
                <li>$50M annual exploration budget</li>
                <li>Partnership with leading geological research institutions</li>
                <li>Focus on tier-1 jurisdictions with proven mineral potential</li>
                <li>Comprehensive environmental and social impact assessments</li>
              </ul>
              <Link to="/" className="btn btn-primary border-none border-r-8 overflow-hidden " style={{ marginTop: '20px' }}>
                VIEW EXPLORATION PORTFOLIO
              </Link>
            </div>
            <div className="reveal-right">
              <img 
                src="https://res.cloudinary.com/dufw6bsko/image/upload/v1763397091/min_5_iisxwm.jpg" 
                alt="Exploration activities" 
                className="feature-image"
                style={{ height: '450px' }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Operations
