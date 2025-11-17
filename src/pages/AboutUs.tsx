import { useScrollReveal } from '../hooks/useScrollReveal'
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
                Universal Metals is a leading mining company with a proven track record of successful exploration, development, and operation of mineral properties. Founded on principles of integrity and honesty, we have built a reputation for excellence in the mining industry.
              </p>
              <p>
                Our team of experienced professionals brings together expertise in geology, mining engineering, environmental science, and business management. We are committed to creating value for our shareholders while maintaining the highest standards of corporate responsibility.
              </p>
              <p>
                With operations spanning multiple continents, we have established ourselves as a trusted partner in the global minerals market. Our focus on innovation, sustainability, and community engagement sets us apart in the industry.
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
                To responsibly extract and process mineral resources while creating sustainable value for our stakeholders, protecting the environment, and contributing positively to the communities where we operate. We strive to be the industry leader in safety, innovation, and operational excellence.
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
                To be recognized globally as the most trusted and innovative mining company, setting new standards for sustainable resource development. We envision a future where mining operations coexist harmoniously with nature and local communities, powered by cutting-edge technology and ethical practices.
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
