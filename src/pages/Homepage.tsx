import { useState, useEffect } from 'react'
import './Homepage.css'

const Homepage = () => {
  const [showContactModal, setShowContactModal] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })

  useEffect(() => {
    // Scroll reveal animation
    const reveals = document.querySelectorAll('.reveal')
    
    const revealOnScroll = () => {
      reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active')
        }
      })
    }

    window.addEventListener('scroll', revealOnScroll)
    revealOnScroll() // Initial check
    
    return () => window.removeEventListener('scroll', revealOnScroll)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission
    setShowContactModal(false)
    setFormData({ name: '', email: '', phone: '', company: '', message: '' })
  }

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section parallax" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/min%20(2).jpg)' }}>
        <div className="hero-content">
          <h1 className="hero-title">UNIVERSAL METALS</h1>
          <h2 className="hero-subtitle">DEDICATED TO BUILDING BUSINESS UPON INTEGRITY & HONESTY</h2>
          <button className="hero-button" onClick={() => setShowContactModal(true)}>
            DISCOVER MORE
          </button>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="services-section">
        <h2 className="section-title reveal">OUR SERVICES</h2>
        <div className="services-grid">
          <div className="service-card reveal">
            <div className="service-icon">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              </svg>
            </div>
            <h3 className="service-title">MINERAL EXPLORATION</h3>
            <p className="service-description">
              Universal Metals has extensive experience in mineral exploration across various geological terrains. Our team utilizes cutting-edge technology and proven methodologies to identify and evaluate mineral deposits.
            </p>
            <ul className="service-list">
              <li>Geological mapping and sampling</li>
              <li>Geophysical and geochemical surveys</li>
              <li>Drilling programs</li>
              <li>Resource estimation</li>
            </ul>
          </div>

          <div className="service-card reveal">
            <div className="service-icon">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 6v6l4 2"></path>
              </svg>
            </div>
            <h3 className="service-title">MINING OPERATIONS</h3>
            <p className="service-description">
              We operate state-of-the-art mining facilities that prioritize safety, efficiency, and environmental responsibility. Our operations are designed to maximize resource recovery while minimizing environmental impact.
            </p>
            <ul className="service-list">
              <li>Open-pit and underground mining</li>
              <li>Ore processing and beneficiation</li>
              <li>Mine planning and optimization</li>
              <li>Safety and environmental management</li>
            </ul>
          </div>

          <div className="service-card reveal">
            <div className="service-icon">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <h3 className="service-title">CONSULTING SERVICES</h3>
            <p className="service-description">
              Our consulting division provides expert advice and technical support to mining companies, investors, and government agencies. We offer comprehensive solutions tailored to your specific needs.
            </p>
            <ul className="service-list">
              <li>Feasibility studies</li>
              <li>Due diligence and valuation</li>
              <li>Project management</li>
              <li>Regulatory compliance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <h2 className="section-title reveal">COMMITMENT TO OFFERING</h2>
        <div className="products-grid">
          <div className="product-card reveal">
            <div className="product-icon">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
            </div>
            <h3 className="product-title">QUALITY ASSURANCE</h3>
            <p className="product-description">
              We maintain the highest standards of quality control throughout our operations. Our products undergo rigorous testing to ensure they meet international specifications and customer requirements. We are committed to delivering consistent, high-quality minerals to our clients worldwide.
            </p>
          </div>

          <div className="product-card reveal">
            <div className="product-icon">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3 className="product-title">RELIABLE SUPPLY CHAIN</h3>
            <p className="product-description">
              Our robust supply chain ensures timely delivery of products to customers around the globe. We have established strong relationships with logistics partners and maintain strategic stockpiles to guarantee uninterrupted supply. Our commitment to reliability has made us a trusted partner in the industry.
            </p>
          </div>

          <div className="product-card reveal">
            <div className="product-icon">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16v-4M12 8h.01"></path>
              </svg>
            </div>
            <h3 className="product-title">SUSTAINABLE PRACTICES</h3>
            <p className="product-description">
              Environmental stewardship is at the core of our business philosophy. We implement sustainable mining practices that minimize environmental impact and promote biodiversity. Our rehabilitation programs ensure that mined areas are restored to their natural state, leaving a positive legacy for future generations.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <div className="reveal">
            <img 
              src="/min (5).jpg" 
              alt="Mining operations" 
              className="about-image"
            />
          </div>
          <div className="about-text reveal">
            <h2>ABOUT US</h2>
            <p>
              Universal Metals is a leading mining company with a proven track record of successful exploration, development, and operation of mineral properties. Founded on principles of integrity and honesty, we have built a reputation for excellence in the mining industry.
            </p>
            <p>
              Our team of experienced professionals brings together expertise in geology, mining engineering, environmental science, and business management. We are committed to creating value for our shareholders while maintaining the highest standards of corporate responsibility.
            </p>
            <p>
              With operations spanning multiple continents, we have established ourselves as a trusted partner in the global minerals market. Our focus on innovation, sustainability, and community engagement sets us apart in the industry.
            </p>
            <button className="about-button">READ MORE</button>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <h2 className="section-title reveal">OUR LOCATIONS</h2>
        <div className="map-container reveal" style={{ backgroundImage: 'url(/min (6).jpg)' }}>
          <div className="map-marker" style={{ top: '30%', left: '20%' }} title="North America">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
            </svg>
          </div>
          <div className="map-marker" style={{ top: '50%', left: '45%' }} title="Africa">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
            </svg>
          </div>
          <div className="map-marker" style={{ top: '40%', left: '70%' }} title="Asia">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
            </svg>
          </div>
          <div className="map-marker" style={{ top: '70%', left: '80%' }} title="Australia">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <h2 className="section-title reveal">OUR PARTNERS</h2>
        <div className="partners-grid reveal">
          <div className="partner-placeholder">PARTNER 1</div>
          <div className="partner-placeholder">PARTNER 2</div>
          <div className="partner-placeholder">PARTNER 3</div>
          <div className="partner-placeholder">PARTNER 4</div>
        </div>
      </section>

      {/* News Section */}
      <section className="news-section">
        <h2 className="section-title reveal">LATEST NEWS & BLOGS</h2>
        <div className="news-grid">
          <div className="news-card reveal">
            <img src="/min (1).jpg" alt="News 1" className="news-image" />
            <div className="news-content">
              <p className="news-date">NOVEMBER 10, 2025</p>
              <h3 className="news-title">
                THE MINING INDUSTRY: FROM A GEOLOGICAL AND BUSINESS PERSPECTIVE
              </h3>
              <p className="news-excerpt">
                Exploring the intersection of geological science and business strategy in modern mining operations. Learn how Universal Metals approaches mineral exploration with both technical expertise and commercial acumen.
              </p>
              <a href="#" className="news-link">READ MORE →</a>
            </div>
          </div>

          <div className="news-card reveal">
            <img src="/min (3).jpg" alt="News 2" className="news-image" />
            <div className="news-content">
              <p className="news-date">NOVEMBER 5, 2025</p>
              <h3 className="news-title">
                GOING ELECTRONIC: FROM PAPER TO DIGITAL MINE PLANS
              </h3>
              <p className="news-excerpt">
                Discover how digital transformation is revolutionizing mine planning and operations. Universal Metals leads the way in adopting cutting-edge technology for improved efficiency and safety.
              </p>
              <a href="#" className="news-link">READ MORE →</a>
            </div>
          </div>

          <div className="news-card reveal">
            <img src="/min (4).jpg" alt="News 3" className="news-image" />
            <div className="news-content">
              <p className="news-date">OCTOBER 28, 2025</p>
              <h3 className="news-title">
                JOHN ROBERTS: HOW WE'LL GET TO THE MOON AGAIN
              </h3>
              <p className="news-excerpt">
                An exclusive interview with our CEO about the future of mining technology and sustainable practices. Learn about our vision for the next generation of mineral extraction and processing.
              </p>
              <a href="#" className="news-link">READ MORE →</a>
            </div>
          </div>
        </div>
        <div className="load-more-container reveal">
          <button className="load-more-button">ALL NEWS</button>
        </div>
      </section>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="modal-overlay" onClick={() => setShowContactModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowContactModal(false)}>
              ×
            </button>
            <h2 className="modal-title">CONTACT US & LEAVE A MESSAGE</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Name *</label>
                <input
                  type="text"
                  name="name"
                  className="form-input"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email *</label>
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  className="form-input"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Company</label>
                <input
                  type="text"
                  name="company"
                  className="form-input"
                  value={formData.company}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Message *</label>
                <textarea
                  name="message"
                  className="form-textarea"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="form-submit">SEND</button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Homepage
