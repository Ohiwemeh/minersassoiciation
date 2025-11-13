import './Investors.css'

const Investors = () => {
  return (
    <div className="investors">
      <div className="container">
        <section className="investors-header">
          <h1>Investors & Shareholders</h1>
          <p className="subtitle">Building Value Through Sustainable Mining Investments</p>
        </section>

        <section className="investors-intro">
          <div className="intro-card">
            <h2>Investment Opportunities</h2>
            <p>The Miners Association of Nigeria offers compelling investment opportunities in one of Africa's most promising mining sectors. With vast mineral resources, supportive government policies, and growing demand, Nigeria's mining industry presents attractive returns for investors.</p>
            <div className="investment-highlights">
              <div className="highlight">
                <h3>$2.5B</h3>
                <p>Industry Value</p>
              </div>
              <div className="highlight">
                <h3>15%+</h3>
                <p>Annual Growth</p>
              </div>
              <div className="highlight">
                <h3>44</h3>
                <p>Mineral Types</p>
              </div>
            </div>
          </div>
        </section>

        <section className="investment-sectors">
          <h2>Investment Sectors</h2>
          <div className="sectors-grid">
            <div className="sector-card">
              <h3>Gold Mining</h3>
              <p>Nigeria has significant gold deposits with high-grade ore bodies suitable for both large-scale and artisanal mining operations.</p>
              <ul>
                <li>Proven reserves: 500+ metric tons</li>
                <li>High-grade deposits: 5-15 g/t</li>
                <li>Favorable mining regulations</li>
              </ul>
            </div>
            <div className="sector-card">
              <h3>Iron Ore & Steel</h3>
              <p>Extensive iron ore deposits supporting the development of Nigeria's steel industry and infrastructure projects.</p>
              <ul>
                <li>Reserves: 3+ billion metric tons</li>
                <li>Steel grade ore: 45-65% Fe</li>
                <li>Strategic location advantage</li>
              </ul>
            </div>
            <div className="sector-card">
              <h3>Limestone & Cement</h3>
              <p>Abundant limestone resources supporting Nigeria's growing construction and cement manufacturing sector.</p>
              <ul>
                <li>Reserves: 2+ billion metric tons</li>
                <li>High calcium content</li>
                <li>Growing domestic demand</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="financial-performance">
          <h2>Financial Performance</h2>
          <div className="performance-grid">
            <div className="performance-card">
              <h3>Revenue Growth</h3>
              <div className="chart-placeholder">
                <div className="chart-bar" style={{height: '60%'}}></div>
                <div className="chart-bar" style={{height: '75%'}}></div>
                <div className="chart-bar" style={{height: '85%'}}></div>
                <div className="chart-bar" style={{height: '100%'}}></div>
              </div>
              <p>Consistent 15-20% annual growth over the past 5 years</p>
            </div>
            <div className="performance-card">
              <h3>Profit Margins</h3>
              <div className="metric-display">
                <div className="big-metric">22.5%</div>
                <p>Average profit margin across member companies</p>
              </div>
            </div>
            <div className="performance-card">
              <h3>ROI</h3>
              <div className="metric-display">
                <div className="big-metric">18.3%</div>
                <p>Average return on investment for mining projects</p>
              </div>
            </div>
          </div>
        </section>

        <section className="shareholder-info">
          <h2>Shareholder Information</h2>
          <div className="shareholder-content">
            <div className="shareholder-text">
              <p>Our association represents over 500 shareholder companies, ranging from large multinational corporations to local mining enterprises. We provide comprehensive support to ensure shareholder value creation through sustainable mining practices.</p>
              <div className="shareholder-benefits">
                <h4>Shareholder Benefits:</h4>
                <ul>
                  <li>Regular dividend distributions</li>
                  <li>Transparency in financial reporting</li>
                  <li>Access to new investment opportunities</li>
                  <li>Professional management services</li>
                  <li>Regulatory compliance support</li>
                </ul>
              </div>
            </div>
            <div className="shareholder-stats">
              <div className="stat-item">
                <h3>500+</h3>
                <p>Active Shareholders</p>
              </div>
              <div className="stat-item">
                <h3>85%</h3>
                <p>Profit Distribution</p>
              </div>
              <div className="stat-item">
                <h4>Quarterly</h4>
                <p>Financial Reports</p>
              </div>
            </div>
          </div>
        </section>

        <section className="investment-process">
          <h2>Investment Process</h2>
          <div className="process-timeline">
            <div className="timeline-item">
              <div className="timeline-step">1</div>
              <div className="timeline-content">
                <h3>Initial Inquiry</h3>
                <p>Contact our investment team to discuss opportunities and requirements.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-step">2</div>
              <div className="timeline-content">
                <h3>Due Diligence</h3>
                <p>Comprehensive review of investment opportunities and regulatory compliance.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-step">3</div>
              <div className="timeline-content">
                <h3>Investment Agreement</h3>
                <p>Finalize terms and execute investment agreements.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-step">4</div>
              <div className="timeline-content">
                <h3>Capital Deployment</h3>
                <p>Fund deployment and project commencement with ongoing monitoring.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-investors">
          <div className="contact-card">
            <h2>Ready to Invest?</h2>
            <p>Join the growing number of investors benefiting from Nigeria's mining sector potential.</p>
            <button className="invest-btn">Contact Investment Team</button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Investors
