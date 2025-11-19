import { useScrollReveal } from '../hooks/useScrollReveal'
import '../pages/SharedStyles.css'

const Membership = () => {
  useScrollReveal()

  const majorMembers = [
    'Mosra Energy',
    'Kursi Investment Ltd',
    'Three Crown Mines Limited',
    'AAY International Mining Company Ltd',
    'Laurel School of Mines Ltd'
  ]

  const governmentAgencies = [
    'Ministry of Solid Mineral Development and its Agencies',
    'Ministry of Steel Development and its Agencies',
    'Federal Ministry of Environment and its Agencies',
    'Nigeria Security and Civil Defense Corps',
    'Nigeria Export Promotion Council',
    'Raw Material Research and Development Agency',
    'Nigerian Extractive Industries Transparency Initiative (NEITI)',
    'Nigerian Association of Chambers of Commerce, Industries, Mines and Agriculture (NACCIMA)',
    'Abuja Chambers of Commerce and Industries',
    'The Central Bank of Nigeria',
    'Nigeria Investment Promotion Commission',
    'The Nigerian Police Force',
    'Nigeria Drug Law Enforcement Agency (NDLEA)',
    'Economic and Financial Crimes Commission (EFCC)',
    'Revenue Mobilization, Allocation and Fiscal Commission (RMAFC)',
    'Nigerian Mining and Geosciences Society (NMGS)',
    'Nigerian Society of Mining Engineers (NSME)'
  ]

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section 
        className="page-hero" 
        style={{ backgroundImage: 'url(/min (2).jpg)' }}
      >
        <div className="page-hero-content">
          <h1 className="page-hero-title">MEMBERSHIP</h1>
          <p className="page-hero-subtitle">
            Join the premier mining association in Nigeria and be part of a thriving community of legitimate operators
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="content-section">
        <div className="section-container">
          <h2 className="section-title reveal">ABOUT OUR MEMBERSHIP</h2>
          <div className="grid-2">
            <div className="text-content reveal-left">
              <h3>Our Growing Community</h3>
              <p>
                The Miners Association of Nigeria (MAN) currently has about eight thousand (8000) members, with the majority being small scale operators and mining cooperatives. Our diverse membership creates a robust ecosystem that represents the full spectrum of Nigeria's mining industry.
              </p>
              <p>
                We pride ourselves on being an inclusive association that welcomes all legitimate operators who are committed to promoting sanity and due process in the mining sector in Nigeria.
              </p>
            </div>
            <div className="reveal-right">
              <div className="card" style={{ textAlign: 'center', padding: '40px' }}>
                <div style={{ fontSize: '3rem', fontWeight: '700', color: '#d4af37', marginBottom: '10px' }}>
                  8,000+
                </div>
                <h3 className="card-title">ACTIVE MEMBERS</h3>
                <p className="card-description">
                  A growing community of legitimate mining operators across Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Types */}
      <section className="content-section gray">
        <div className="section-container">
          <h2 className="section-title reveal">MEMBERSHIP CATEGORIES</h2>
          <div className="grid-3">
            <div className="card reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="8.5" cy="7" r="4"></circle>
                  <line x1="20" y1="8" x2="20" y2="14"></line>
                  <line x1="23" y1="11" x2="17" y2="11"></line>
                </svg>
              </div>
              <h3 className="card-title">SMALL SCALE OPERATORS</h3>
              <p className="card-description">
                Individual miners and small-scale mining operations that form the backbone of Nigeria's mining industry. We provide specialized support and resources for small-scale operators.
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
              <h3 className="card-title">MINING COOPERATIVES</h3>
              <p className="card-description">
                Collaborative mining ventures that pool resources and expertise. Cooperatives benefit from collective bargaining power and shared operational support.
              </p>
            </div>
            <div className="card reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <h3 className="card-title">LARGE OPERATORS</h3>
              <p className="card-description">
                Established mining companies with significant operations and resources. These members bring industry leadership and large-scale investment to the sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Major Members */}
      <section className="content-section">
        <div className="section-container">
          <h2 className="section-title reveal">OUR MAJOR MEMBERS</h2>
          <p className="section-subtitle reveal">
            We are proud to have some of Nigeria's leading mining companies as part of our association
          </p>
          <div className="grid-2">
            <div className="card reveal" style={{ padding: '30px' }}>
              <h3 className="card-title" style={{ marginBottom: '20px' }}>PREMIER MEMBERS</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {majorMembers.map((member, index) => (
                  <li key={index} style={{ 
                    padding: '12px 0', 
                    borderBottom: '1px solid #eee',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#d4af37">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    {member}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal">
              <img 
                src="/min (5).jpg" 
                alt="Mining operations" 
                className="feature-image"
                style={{ height: '400px', width: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Membership Requirements */}
      <section className="content-section dark">
        <div className="section-container">
          <h2 className="section-title reveal">MEMBERSHIP REQUIREMENTS</h2>
          <div className="card dark reveal" style={{ maxWidth: '800px', margin: '0 auto', padding: '40px' }}>
            <h3 className="card-title" style={{ textAlign: 'center', marginBottom: '30px' }}>ELIGIBILITY CRITERIA</h3>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '30px' }}>
                Membership of the Association is open to every operator that is permitted by the <strong>Nigeria Minerals and Mining Act 2007</strong> and its <strong>Regulations 2011</strong>, to operate.
              </p>
              <div style={{ 
                backgroundColor: 'rgba(212, 175, 55, 0.2)', 
                border: '2px solid #d4af37', 
                borderRadius: '8px', 
                padding: '20px',
                margin: '20px 0'
              }}>
                <h4 style={{ color: '#d4af37', marginBottom: '10px' }}>IMPORTANT NOTICE</h4>
                <p style={{ margin: 0 }}>
                  Only legitimate licensed operators are allowed to register as members of MAN. This is imperative in order to promote sanity and due process in the mining sector in Nigeria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Government Partners */}
      <section className="content-section gray">
        <div className="section-container">
          <h2 className="section-title reveal">GOVERNMENT & INSTITUTIONAL PARTNERS</h2>
          <p className="section-subtitle reveal">
            We collaborate with key government agencies and institutions to advance Nigeria's mining sector
          </p>
          <div className="card reveal" style={{ padding: '30px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              {governmentAgencies.map((agency, index) => (
                <div key={index} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '10px',
                  padding: '10px',
                  borderRadius: '4px',
                  backgroundColor: '#f8f9fa'
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#d4af37">
                    <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                  </svg>
                  <span style={{ fontSize: '0.9rem' }}>{agency}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="content-section">
        <div className="section-container">
          <h2 className="section-title reveal">MEMBERSHIP BENEFITS</h2>
          <div className="grid-4">
            <div className="card reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3 className="card-title">REGULATORY SUPPORT</h3>
              <p className="card-description">
                Guidance on compliance with mining regulations and assistance with licensing processes.
              </p>
            </div>
            <div className="card reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4M12 8h.01"></path>
                </svg>
              </div>
              <h3 className="card-title">INDUSTRY INSIGHTS</h3>
              <p className="card-description">
                Access to market intelligence, industry reports, and emerging trends in mining.
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
              <h3 className="card-title">NETWORKING</h3>
              <p className="card-description">
                Connect with fellow miners, suppliers, and stakeholders in the mining industry.
              </p>
            </div>
            <div className="card reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <h3 className="card-title">ADVOCACY</h3>
              <p className="card-description">
                Strong representation in policy discussions and regulatory reforms affecting the mining sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="content-section dark">
        <div className="section-container">
          <div className="reveal" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="section-title">READY TO JOIN MAN?</h2>
            <p className="section-subtitle" style={{ marginBottom: '40px' }}>
              Become part of Nigeria's premier mining association and contribute to the growth of our mining sector
            </p>
            <button className="btn btn-primary" style={{ marginRight: '20px' }}>
              APPLY FOR MEMBERSHIP
            </button>
            <button className="btn btn-outline-light">
              DOWNLOAD APPLICATION FORM
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Membership
