import { useScrollReveal } from '../hooks/useScrollReveal'
import '../pages/SharedStyles.css'

const Investors = () => {
  useScrollReveal()

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section 
        className="page-hero" 
        style={{ backgroundImage: 'url(/min%20(6).jpg)' }}
      >
        <div className="page-hero-content">
          <h1 className="page-hero-title">INVESTOR RELATIONS</h1>
          <p className="page-hero-subtitle">
            Creating long-term value for our shareholders
          </p>
        </div>
      </section>

      {/* Financial Highlights */}
      <section className="content-section">
        <div className="section-container">
          <h2 className="section-title reveal">2024 FINANCIAL HIGHLIGHTS</h2>
          <div className="stats-container reveal">
            <div className="stat-item">
              <div className="stat-number">$2.8B</div>
              <div className="stat-label">Annual Revenue</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">$680M</div>
              <div className="stat-label">EBITDA</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24.3%</div>
              <div className="stat-label">EBITDA Margin</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">$1.85</div>
              <div className="stat-label">Earnings Per Share</div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="content-section gray">
        <div className="section-container">
          <h2 className="section-title reveal">WHY INVEST IN UNIVERSAL METALS</h2>
          <div className="grid-3">
            <div className="card reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <h3 className="card-title">STRONG GROWTH</h3>
              <p className="card-description">
                Consistent revenue and earnings growth driven by operational excellence, strategic acquisitions, and expanding production capacity across our portfolio.
              </p>
            </div>
            <div className="card reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3 className="card-title">DIVERSIFIED PORTFOLIO</h3>
              <p className="card-description">
                Balanced exposure across multiple commodities and geographies, reducing risk and providing stable returns through various market cycles.
              </p>
            </div>
            <div className="card reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3 className="card-title">SHAREHOLDER RETURNS</h3>
              <p className="card-description">
                Committed to returning value through consistent dividends and share buyback programs, with a target payout ratio of 40-50% of earnings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stock Information */}
      <section className="content-section">
        <div className="section-container">
          <h2 className="section-title reveal">STOCK INFORMATION</h2>
          <div className="grid-2">
            <div className="card reveal">
              <h3 className="card-title" style={{ marginBottom: '20px' }}>TRADING DETAILS</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                  <span style={{ color: '#666', fontWeight: '600' }}>Exchange:</span>
                  <span style={{ color: '#333' }}>NYSE</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                  <span style={{ color: '#666', fontWeight: '600' }}>Ticker Symbol:</span>
                  <span style={{ color: '#333' }}>UNVM</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                  <span style={{ color: '#666', fontWeight: '600' }}>Current Price:</span>
                  <span style={{ color: '#d4af37', fontWeight: '700' }}>$45.82</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                  <span style={{ color: '#666', fontWeight: '600' }}>52-Week Range:</span>
                  <span style={{ color: '#333' }}>$38.20 - $52.15</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                  <span style={{ color: '#666', fontWeight: '600' }}>Market Cap:</span>
                  <span style={{ color: '#333' }}>$8.2B</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#666', fontWeight: '600' }}>Dividend Yield:</span>
                  <span style={{ color: '#333' }}>3.2%</span>
                </div>
              </div>
            </div>
            <div className="card reveal">
              <h3 className="card-title" style={{ marginBottom: '20px' }}>ANALYST COVERAGE</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                  <span style={{ color: '#666', fontWeight: '600' }}>Consensus Rating:</span>
                  <span style={{ color: '#d4af37', fontWeight: '700' }}>BUY</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                  <span style={{ color: '#666', fontWeight: '600' }}>Target Price:</span>
                  <span style={{ color: '#333' }}>$52.00</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                  <span style={{ color: '#666', fontWeight: '600' }}>Analysts Covering:</span>
                  <span style={{ color: '#333' }}>18</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                  <span style={{ color: '#666', fontWeight: '600' }}>Buy Ratings:</span>
                  <span style={{ color: '#333' }}>12</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                  <span style={{ color: '#666', fontWeight: '600' }}>Hold Ratings:</span>
                  <span style={{ color: '#333' }}>5</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#666', fontWeight: '600' }}>Sell Ratings:</span>
                  <span style={{ color: '#333' }}>1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reports & Presentations */}
      <section className="content-section dark">
        <div className="section-container">
          <h2 className="section-title reveal">REPORTS & PRESENTATIONS</h2>
          <div className="grid-3">
            <div className="card dark reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                </svg>
              </div>
              <h3 className="card-title">ANNUAL REPORTS</h3>
              <p className="card-description">
                Comprehensive annual reports detailing financial performance, operations, and strategic initiatives.
              </p>
              <button className="btn btn-outline-light" style={{ marginTop: '20px', width: '100%' }}>
                VIEW REPORTS
              </button>
            </div>
            <div className="card dark reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3 className="card-title">PRESENTATIONS</h3>
              <p className="card-description">
                Investor presentations, quarterly earnings calls, and conference materials for stakeholders.
              </p>
              <button className="btn btn-outline-light" style={{ marginTop: '20px', width: '100%' }}>
                VIEW PRESENTATIONS
              </button>
            </div>
            <div className="card dark reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </div>
              <h3 className="card-title">SEC FILINGS</h3>
              <p className="card-description">
                Access to all regulatory filings including 10-K, 10-Q, 8-K, and proxy statements.
              </p>
              <button className="btn btn-outline-light" style={{ marginTop: '20px', width: '100%' }}>
                VIEW FILINGS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="content-section gray">
        <div className="section-container">
          <h2 className="section-title reveal">UPCOMING EVENTS</h2>
          <div className="grid-2">
            <div className="card reveal">
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                <div style={{ minWidth: '80px', textAlign: 'center', padding: '15px', backgroundColor: '#d4af37', color: 'white' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '700', lineHeight: '1' }}>15</div>
                  <div style={{ fontSize: '0.9rem', marginTop: '5px' }}>FEB 2025</div>
                </div>
                <div>
                  <h3 className="card-title" style={{ marginBottom: '10px' }}>Q4 2024 EARNINGS CALL</h3>
                  <p className="card-description">
                    Join our management team for the quarterly earnings conference call and Q&A session.
                  </p>
                  <p className="card-description" style={{ marginTop: '10px', color: '#d4af37', fontWeight: '600' }}>
                    10:00 AM EST | Virtual
                  </p>
                </div>
              </div>
            </div>
            <div className="card reveal">
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                <div style={{ minWidth: '80px', textAlign: 'center', padding: '15px', backgroundColor: '#d4af37', color: 'white' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '700', lineHeight: '1' }}>08</div>
                  <div style={{ fontSize: '0.9rem', marginTop: '5px' }}>MAR 2025</div>
                </div>
                <div>
                  <h3 className="card-title" style={{ marginBottom: '10px' }}>ANNUAL SHAREHOLDER MEETING</h3>
                  <p className="card-description">
                    Annual general meeting for shareholders to vote on key company matters and meet leadership.
                  </p>
                  <p className="card-description" style={{ marginTop: '10px', color: '#d4af37', fontWeight: '600' }}>
                    2:00 PM EST | New York, NY
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Governance */}
      <section className="content-section">
        <div className="section-container">
          <h2 className="section-title reveal">CORPORATE GOVERNANCE</h2>
          <div className="grid-2">
            <div className="text-content reveal-left">
              <h3>Commitment to Excellence</h3>
              <p>
                Universal Metals is committed to the highest standards of corporate governance, transparency, and ethical business practices. Our governance framework ensures accountability to shareholders and stakeholders.
              </p>
              <ul>
                <li>Independent board of directors with diverse expertise</li>
                <li>Regular board and committee meetings</li>
                <li>Comprehensive risk management framework</li>
                <li>Strong internal controls and audit processes</li>
                <li>Code of conduct and ethics policies</li>
                <li>Transparent disclosure and reporting</li>
              </ul>
              <button className="btn btn-outline" style={{ marginTop: '20px' }}>
                VIEW GOVERNANCE DOCUMENTS
              </button>
            </div>
            <div className="reveal-right">
              <img 
                src="/min (1).jpg" 
                alt="Corporate governance" 
                className="feature-image"
                style={{ height: '400px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact IR */}
      <section className="content-section dark">
        <div className="section-container">
          <div className="reveal" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="section-title">INVESTOR CONTACT</h2>
            <p className="section-subtitle" style={{ marginBottom: '30px' }}>
              For investor inquiries, please contact our Investor Relations team
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center', marginBottom: '40px' }}>
              <div style={{ color: '#ccc', fontSize: '1.1rem' }}>
                <strong>Email:</strong> investors@universalmetals.com
              </div>
              <div style={{ color: '#ccc', fontSize: '1.1rem' }}>
                <strong>Phone:</strong> +1 (212) 555-0100
              </div>
            </div>
            <button className="btn btn-primary" style={{ marginRight: '20px' }}>
              SUBSCRIBE TO ALERTS
            </button>
            <button className="btn btn-outline-light">
              EMAIL INVESTOR RELATIONS
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Investors
