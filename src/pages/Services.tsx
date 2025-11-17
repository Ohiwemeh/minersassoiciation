import { useScrollReveal } from '../hooks/useScrollReveal'
import '../pages/SharedStyles.css'

const Services = () => {
  useScrollReveal()

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section 
        className="page-hero" 
        style={{ backgroundImage: 'url(/min%20(1).jpg)' }}
      >
        <div className="page-hero-content">
          <h1 className="page-hero-title">OUR SERVICES</h1>
          <p className="page-hero-subtitle">
            Comprehensive mining solutions from exploration to production
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="content-section">
        <div className="section-container">
          <h2 className="section-title reveal">CORE SERVICES</h2>
          <p className="section-subtitle reveal">
            End-to-end mining services backed by decades of industry expertise
          </p>
          <div className="grid-3">
            <div className="card reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                </svg>
              </div>
              <h3 className="card-title">MINERAL EXPLORATION</h3>
              <p className="card-description">
                Comprehensive exploration services utilizing cutting-edge geophysical and geochemical techniques to identify and evaluate mineral deposits with precision and efficiency.
              </p>
            </div>
            <div className="card reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 6v6l4 2"></path>
                </svg>
              </div>
              <h3 className="card-title">MINING OPERATIONS</h3>
              <p className="card-description">
                Full-service mining operations management including mine planning, equipment procurement, workforce management, and production optimization for maximum efficiency.
              </p>
            </div>
            <div className="card reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3 className="card-title">CONSULTING SERVICES</h3>
              <p className="card-description">
                Expert consulting for mining companies, investors, and government agencies covering feasibility studies, due diligence, valuation, and regulatory compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Exploration Services Detail */}
      <section className="content-section gray">
        <div className="section-container">
          <h2 className="section-title reveal">EXPLORATION SERVICES</h2>
          <div className="grid-2">
            <div className="reveal-left">
              <img 
                src="/min (6).jpg" 
                alt="Exploration services" 
                className="feature-image"
                style={{ height: '400px' }}
              />
            </div>
            <div className="text-content reveal-right">
              <h3>Advanced Exploration Techniques</h3>
              <p>
                Universal Metals has extensive experience in mineral exploration across various geological terrains. Our team utilizes cutting-edge technology and proven methodologies to identify and evaluate mineral deposits.
              </p>
              <ul>
                <li>Geological mapping and sampling programs</li>
                <li>Airborne and ground geophysical surveys</li>
                <li>Geochemical soil and rock sampling</li>
                <li>Diamond and RC drilling programs</li>
                <li>Resource estimation and modeling</li>
                <li>Target generation and prioritization</li>
                <li>Exploration data management systems</li>
              </ul>
              <button className="btn btn-outline" style={{ marginTop: '20px' }}>
                REQUEST EXPLORATION SERVICES
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mining Operations Detail */}
      <section className="content-section">
        <div className="section-container">
          <h2 className="section-title reveal">MINING OPERATIONS MANAGEMENT</h2>
          <div className="grid-2">
            <div className="text-content reveal-left">
              <h3>Comprehensive Operations Support</h3>
              <p>
                We operate state-of-the-art mining facilities that prioritize safety, efficiency, and environmental responsibility. Our operations are designed to maximize resource recovery while minimizing environmental impact.
              </p>
              <ul>
                <li>Open-pit and underground mining expertise</li>
                <li>Mine planning and optimization</li>
                <li>Ore processing and beneficiation</li>
                <li>Equipment selection and procurement</li>
                <li>Safety and environmental management</li>
                <li>Workforce training and development</li>
                <li>Production monitoring and reporting</li>
                <li>Cost control and budget management</li>
              </ul>
              <button className="btn btn-outline" style={{ marginTop: '20px' }}>
                LEARN MORE ABOUT OPERATIONS
              </button>
            </div>
            <div className="reveal-right">
              <img 
                src="/min (3).jpg" 
                alt="Mining operations" 
                className="feature-image"
                style={{ height: '400px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Services Detail */}
      <section className="content-section dark">
        <div className="section-container">
          <h2 className="section-title reveal">CONSULTING & ADVISORY</h2>
          <p className="section-subtitle reveal">
            Strategic guidance from industry experts with proven track records
          </p>
          <div className="grid-3">
            <div className="card dark reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h3 className="card-title">FEASIBILITY STUDIES</h3>
              <p className="card-description">
                Comprehensive technical and economic feasibility studies including resource modeling, mine design, processing options, capital and operating cost estimates, and financial analysis.
              </p>
            </div>
            <div className="card dark reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className="card-title">DUE DILIGENCE</h3>
              <p className="card-description">
                Technical due diligence for mining acquisitions and investments including site visits, data review, risk assessment, and independent valuation of mineral assets.
              </p>
            </div>
            <div className="card dark reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <h3 className="card-title">REGULATORY COMPLIANCE</h3>
              <p className="card-description">
                Support with mining permits, environmental approvals, safety regulations, and compliance with local and international mining standards and best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Services */}
      <section className="content-section gray">
        <div className="section-container">
          <h2 className="section-title reveal">TECHNICAL SERVICES</h2>
          <div className="grid-4">
            <div className="card reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <h3 className="card-title">GEOLOGICAL SERVICES</h3>
              <p className="card-description">
                Expert geological consulting including mapping, structural analysis, and resource estimation.
              </p>
            </div>
            <div className="card reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <h3 className="card-title">GEOTECHNICAL ENGINEERING</h3>
              <p className="card-description">
                Slope stability analysis, ground support design, and rock mechanics studies for safe operations.
              </p>
            </div>
            <div className="card reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="card-title">ENVIRONMENTAL MANAGEMENT</h3>
              <p className="card-description">
                Environmental impact assessments, monitoring programs, and closure planning services.
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
              <h3 className="card-title">TRAINING & DEVELOPMENT</h3>
              <p className="card-description">
                Customized training programs for mining personnel covering safety, operations, and technical skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="content-section">
        <div className="section-container">
          <h2 className="section-title reveal">WHY CHOOSE OUR SERVICES</h2>
          <div className="grid-3">
            <div className="card reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3 className="card-title">PROVEN EXPERTISE</h3>
              <p className="card-description">
                Over 30 years of mining industry experience with successful projects across multiple commodities and jurisdictions worldwide.
              </p>
            </div>
            <div className="card reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <h3 className="card-title">INNOVATIVE SOLUTIONS</h3>
              <p className="card-description">
                Cutting-edge technology and innovative approaches to solve complex mining challenges and optimize operations.
              </p>
            </div>
            <div className="card reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"></path>
                </svg>
              </div>
              <h3 className="card-title">CLIENT FOCUSED</h3>
              <p className="card-description">
                Tailored solutions designed to meet your specific needs with dedicated support throughout project lifecycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="content-section dark">
        <div className="section-container">
          <div className="reveal" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="section-title">READY TO GET STARTED?</h2>
            <p className="section-subtitle" style={{ marginBottom: '40px' }}>
              Contact our team to discuss how our services can help you achieve your mining objectives
            </p>
            <button className="btn btn-primary" style={{ marginRight: '20px' }}>
              REQUEST A CONSULTATION
            </button>
            <button className="btn btn-outline-light">
              DOWNLOAD SERVICE BROCHURE
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
