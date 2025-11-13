import './Sustainability.css'

const Sustainability = () => {
  return (
    <div className="sustainability">
      <div className="container">
        <section className="sustainability-header">
          <h1>Sustainability & Responsibility</h1>
          <p className="subtitle">Committed to Environmental Stewardship and Social Responsibility</p>
        </section>

        <section className="sustainability-intro">
          <div className="intro-card">
            <h2>Our Sustainability Commitment</h2>
            <p>At the Miners Association of Nigeria, we believe that responsible mining is essential for the long-term prosperity of our nation. We are dedicated to balancing economic growth with environmental protection and social responsibility, ensuring that our operations benefit current and future generations.</p>
            <div className="commitment-stats">
              <div className="stat">
                <h3>100%</h3>
                <p>Environmental Compliance</p>
              </div>
              <div className="stat">
                <h3>50+</h3>
                <p>Community Projects</p>
              </div>
              <div className="stat">
                <h3>30%</h3>
                <p>Reduced Carbon Footprint</p>
              </div>
            </div>
          </div>
        </section>

        <section className="environmental">
          <h2>Environmental Responsibility</h2>
          <div className="env-grid">
            <div className="env-item">
              <div className="env-icon">🌍</div>
              <h3>Land Rehabilitation</h3>
              <p>Systematic restoration of mined areas to their natural state or beneficial land use.</p>
            </div>
            <div className="env-item">
              <div className="env-icon">💧</div>
              <h3>Water Management</h3>
              <p>Advanced water treatment and conservation systems to protect local water resources.</p>
            </div>
            <div className="env-item">
              <div className="env-icon">🌱</div>
              <h3>Biodiversity Protection</h3>
              <p>Programs to protect and enhance local flora and fauna around mining areas.</p>
            </div>
            <div className="env-item">
              <div className="env-icon">♻️</div>
              <h3>Waste Management</h3>
              <p>Comprehensive waste reduction, recycling, and responsible disposal programs.</p>
            </div>
          </div>
        </section>

        <section className="social">
          <h2>Social Responsibility</h2>
          <div className="social-grid">
            <div className="social-card">
              <h3>Community Development</h3>
              <p>Investing in local infrastructure, education, and healthcare programs in mining communities.</p>
              <ul>
                <li>School construction and renovation</li>
                <li>Healthcare facility support</li>
                <li>Water and sanitation projects</li>
                <li>Infrastructure development</li>
              </ul>
            </div>
            <div className="social-card">
              <h3>Employment & Training</h3>
              <p>Creating quality jobs and providing training opportunities for local communities.</p>
              <ul>
                <li>Local hiring initiatives</li>
                <li>Skills development programs</li>
                <li>Scholarship programs</li>
                <li>Apprenticeship opportunities</li>
              </ul>
            </div>
            <div className="social-card">
              <h3>Cultural Heritage</h3>
              <p>Preserving and respecting the cultural heritage of communities in mining areas.</p>
              <ul>
                <li>Archaeological site protection</li>
                <li>Cultural awareness programs</li>
                <li>Heritage site preservation</li>
                <li>Community engagement initiatives</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="safety">
          <h2>Health & Safety</h2>
          <div className="safety-content">
            <div className="safety-text">
              <p>Safety is our top priority. We maintain world-class health and safety standards across all operations, ensuring the well-being of our workers and surrounding communities.</p>
              <div className="safety-metrics">
                <div className="metric">
                  <h4>Zero Harm Policy</h4>
                  <p>Our commitment to zero workplace accidents and injuries.</p>
                </div>
                <div className="metric">
                  <h4>Regular Training</h4>
                  <p>Continuous safety training and emergency response drills.</p>
                </div>
                <div className="metric">
                  <h4>Advanced Equipment</h4>
                  <p>State-of-the-art safety equipment and monitoring systems.</p>
                </div>
              </div>
            </div>
            <div className="safety-visual">
              <div className="safety-icon">🛡️</div>
            </div>
          </div>
        </section>

        <section className="initiatives">
          <h2>Key Sustainability Initiatives</h2>
          <div className="initiatives-grid">
            <div className="initiative-card">
              <h3>Green Mining Program</h3>
              <p>Implementing renewable energy sources and reducing carbon emissions across all operations.</p>
              <div className="initiative-progress">
                <div className="progress-bar">
                  <div className="progress" style={{width: '75%'}}></div>
                </div>
                <span>75% Complete</span>
              </div>
            </div>
            <div className="initiative-card">
              <h3>Community Trust Fund</h3>
              <p>Established to support long-term community development projects beyond mining operations.</p>
              <div className="initiative-progress">
                <div className="progress-bar">
                  <div className="progress" style={{width: '60%'}}></div>
                </div>
                <span>60% Complete</span>
              </div>
            </div>
            <div className="initiative-card">
              <h3>Reforestation Project</h3>
              <p>Planting native trees and vegetation to restore ecosystems in former mining areas.</p>
              <div className="initiative-progress">
                <div className="progress-bar">
                  <div className="progress" style={{width: '85%'}}></div>
                </div>
                <span>85% Complete</span>
              </div>
            </div>
          </div>
        </section>

        <section className="reporting">
          <h2>Sustainability Reporting</h2>
          <div className="reporting-content">
            <p>We maintain transparency in our sustainability efforts through regular reporting and third-party verification. Our annual sustainability report details our progress against key environmental, social, and governance (ESG) metrics.</p>
            <div className="report-links">
              <button className="report-btn">Download 2024 Report</button>
              <button className="report-btn">View ESG Metrics</button>
              <button className="report-btn">Certification Documents</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Sustainability
