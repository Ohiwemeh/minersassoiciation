import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router'
import LocationsMap from '../components/LocationMap'
import SponsorsCarousel from '../components/SponsorsCarousel'
import './Homepage.css'


const Homepage = () => {
  const navigate = useNavigate()
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
     <section className="hero-section parallax" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://res.cloudinary.com/dufw6bsko/image/upload/v1763397090/landing_onfdtb.jpg)` }} >
        <div className="hero-content">
          <h1 className="hero-title">Connecting Africa with the World's Best, to Influence Sustainable* Progress</h1>
          <p className="hero-tagline">*social flourishing, just economic prosperity, resource abundance</p>
          <button className="hero-button" onClick={() => navigate('/about')}>
            LET'S BUILD A STRATEGY
          </button>
        </div>
      </section>

      {/* Why Miners Association Section */}
      <section className="services-section">
        <h2 className="section-title reveal">Why Miners Association of Nigeria?</h2>
        <div className="vuka-intro reveal">
          <p className="vuka-description">
            As the umbrella body for all mining-related trade and industry in Nigeria, the Miners Association of Nigeria (MAN) has been at the forefront of promoting and protecting the interests of miners since 1944. We are committed to fostering sustainable mining practices and driving economic growth in Nigeria's solid minerals sector.
          </p>
        </div>
        <div className="services-grid">
          <div className="service-card reveal">
            <h3 className="service-title">Unified Voice for Miners</h3>
            <p className="service-description">
              We represent and advocate for the interests of all miners in Nigeria, from artisanal and small-scale miners to large-scale operators, ensuring your voice is heard at all levels of government.
            </p>
          </div>

          <div className="service-card reveal">
            <h3 className="service-title">Industry Leadership</h3>
            <p className="service-description">
              With over 75 years of experience, we provide thought leadership, policy guidance, and technical expertise to drive the sustainable development of Nigeria's mining sector.
            </p>
          </div>

          <div className="service-card reveal">
            <h3 className="service-title">Capacity Building</h3>
            <p className="service-description">
              We offer training programs, workshops, and resources to enhance the skills and knowledge of our members, ensuring they operate efficiently, safely, and in compliance with regulations.
            </p>
          </div>
        </div>
      </section>

      {/* Influence Cycle Section */}
      <section className="influence-section">
        <div className="influence-content">
          <div className="influence-left reveal">
            <h2 className="section-title">Trust-based Influence Model</h2>
            <div className="influence-cycle">
              <p className="cycle-description">The Miners Association trust-based influence model creates lasting connections through:</p>
              <ul className="cycle-list">
                <li><strong>Awareness & Visibility</strong> - Building your brand presence</li>
                <li><strong>Conversation & Community</strong> - Engaging with industry leaders</li>
                <li><strong>Connection & Collaboration</strong> - Creating meaningful partnerships</li>
              </ul>
            </div>
          </div>
          <div className="influence-right reveal">
            <h2 className="section-title">Create New Opportunities & Influence Prospects</h2>
            <h3 className="subsection-title">The Influence Cycle Explained</h3>
            <p className="influence-description">
              The power of influencing thinking, building awareness & cultivating trust takes time. While traditional networking and advertising is short term, businesses by nature make decisions across prolonged periods of 6-18 months or more.
            </p>
            <p className="influence-description">
              In reality, success comes from retaining the market (or your prospects') attention with consistent brand visibility that builds awareness, trust and confidence. It opens doors, and gives you a seat at the table with industry heavyweights.
            </p>
            <h4 className="subsection-title">Traditional Exhibitions & Advertising vs The Miners Association</h4>
            <p className="influence-description">
              Miners Association opens the door to true 365 marketing, producing evergreen awareness of your company. Imagine staying in contact with your prospects 365 days a year, across multiple media channels to influence the way customers think about your brand. Miners Association clients achieve much more with their investments. Isn't it time you discovered what you've been missing out on?
            </p>
            <p className="influence-description">
              Position your company as an authority via: live events, tradeshows, online events, news cycles, and more.
            </p>
            <ul className="benefits-list">
              <li>✓ Create evergreen brand visibility 365 days per year</li>
              <li>✓ Targeted marketing before, during and after events/exhibitions</li>
              <li>✓ Leverage trusted industry media to present your brand</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Industry Sectors Section */}
      <section className="products-section">
        <h2 className="section-title reveal">Our Focus Areas</h2>
        <p className="section-subtitle reveal" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px' }}>
          The Miners Association of Nigeria serves as the umbrella body for all categories of miners, providing representation, support, and advocacy across these key areas:
        </p>
        <div className="products-grid">
          <div className="product-card reveal">
            <h3 className="product-title">Artisanal & Small-Scale Mining</h3>
            <p className="product-description">
              Supporting the backbone of Nigeria's mining sector through capacity building, formalization, and access to markets and finance.
            </p>
            <ul className="service-list">
              <li>✓ Training and capacity development programs</li>
              <li>✓ Formalization and best practices</li>
              <li>✓ Access to funding and equipment</li>
              <li>✓ Market linkages and value addition</li>
            </ul>
          </div>

          <div className="product-card reveal">
            <h3 className="product-title">Large-Scale Mining Operations</h3>
            <p className="product-description">
              Facilitating the growth of industrial mining operations through policy advocacy and stakeholder engagement.
            </p>
            <ul className="service-list">
              <li>✓ Policy and regulatory advocacy</li>
              <li>✓ Investment promotion</li>
              <li>✓ Community relations and social license to operate</li>
              <li>✓ Technology transfer and innovation</li>
            </ul>
          </div>

          <div className="product-card reveal">
            <h3 className="product-title">Mineral Processing & Value Addition</h3>
            <p className="product-description">
              Promoting local beneficiation and value addition to minerals for economic development and job creation.
            </p>
            <ul className="service-list">
              <li>✓ Technology and skills development</li>
              <li>✓ Market access and trade facilitation</li>
              <li>✓ Quality control and standardization</li>
              <li>✓ Research and development</li>
            </ul>
          </div>

          <div className="product-card reveal">
            <h3 className="product-title">Regulatory Compliance & Standards</h3>
            <p className="product-description">
              Ensuring members operate within the legal framework while maintaining best practices in environmental and social governance.
            </p>
            <ul className="service-list">
              <li>✓ Regulatory guidance and compliance</li>
              <li>✓ Environmental and social governance</li>
              <li>✓ Health and safety standards</li>
              <li>✓ Certification and accreditation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Green Economy & Global Trust Project Section */}
      <section className="initiatives-section">
        <div className="initiatives-container">
          <div className="initiative-card reveal">
            <h2 className="initiative-title">Green Economy</h2>
            <p className="initiative-description">
              Relationships bring confidence to change. Miners Association connects the full spectrum of stakeholders to build meaningful dialogue with the intention of moving forward the African Green Economy sectors.
            </p>
            <ul className="initiative-list">
              <li>✓ Connect with people and organisations that make a difference</li>
              <li>✓ Spotlight on project opportunities from start-up to national infrastructure</li>
              <li>✓ Part of E Fest, a series of co-located projects to the ABB Formula e, Cape Town race</li>
            </ul>
            <button className="initiative-button" onClick={() => navigate('/sustainability')}>
              More on Green Economy →
            </button>
          </div>

          <div className="initiative-card reveal">
            <h2 className="initiative-title">The Global Trust Project</h2>
            <p className="initiative-description">
              Trust is a cornerstone of building rich, empowered, respectful, and engaged relationships at every touchpoint: personal, professional, and societal. Delivering content, workshops, and tailored programs, our objective is to take the core principles of trust and help create an abundance of trust in all relationships.
            </p>
            <ul className="initiative-list">
              <li>✓ High-trust organisations outperform competitors by &gt; 300%.</li>
              <li>✓ Engage our trust coaches to work with individuals, companies, and organisations.</li>
              <li>✓ Access articles, research, and workshop content for online learning.</li>
            </ul>
            <button className="initiative-button" onClick={() => navigate('/about')}>
              More on TGTP →
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <div className="reveal">
            <img
              src="https://res.cloudinary.com/dufw6bsko/image/upload/v1763397091/min_5_iisxwm.jpg" 
              alt="Mining operations" 
              className="about-image"
            />
          </div>
          <div className="about-text reveal">
            <h2>ABOUT US</h2>
            <p>
              The Miners Association of Nigeria (MAN) is a National Industry Association whose diverse membership includes entities and individuals that are directly involved in mineral resources exploration and exploitation in Nigeria. MAN membership comprises of exploration, quarrying, and mining companies. It also encompasses services and Consultancy firms that relate to mining sector.
            </p>
            <button className="about-button" onClick={() => navigate('/about')}>READ MORE</button>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <LocationsMap />

      {/* Partners Section */}
      <SponsorsCarousel title="OUR SPONSORS" />

      {/* News Section */}
      <section className="news-section">
        <h2 className="section-title reveal">LATEST NEWS & INSIGHTS</h2>
        <div className="news-grid">
          <div className="news-card reveal">
            <img src="https://res.cloudinary.com/dufw6bsko/image/upload/v1763397090/landing_onfdtb.jpg" alt="News 1" className="news-image" />
            <div className="news-content">
              <p className="news-date">DECEMBER 1, 2025</p>
              <h3 className="news-title">
                CONNECTING AFRICA'S MINING SECTOR WITH GLOBAL INNOVATION
              </h3>
              <p className="news-excerpt">
                Discover how Miners Association is bridging the gap between African mining companies and international technology providers. Our platforms create opportunities for collaboration and knowledge sharing across the continent.
              </p>
              <Link to="/news" className="news-link">READ MORE →</Link>
            </div>
          </div>

          <div className="news-card reveal">
            <img src="https://res.cloudinary.com/dufw6bsko/image/upload/v1763397090/min_3_q5bn0x.jpg" alt="News 2" className="news-image" />
            <div className="news-content">
              <p className="news-date">NOVEMBER 20, 2025</p>
              <h3 className="news-title">
                THE POWER OF 365-DAY MARKETING IN AFRICA'S ENERGY SECTOR
              </h3>
              <p className="news-excerpt">
                Learn how continuous brand visibility transforms business relationships in Africa's dynamic energy market. Miners Association's integrated approach delivers sustained engagement with key decision-makers throughout the year.
              </p>
              <Link to="/news" className="news-link">READ MORE →</Link>
            </div>
          </div>

          <div className="news-card reveal">
            <img src="https://res.cloudinary.com/dufw6bsko/image/upload/v1763397090/min_4_l3ijmr.jpg" alt="News 3" className="news-image" />
            <div className="news-content">
              <p className="news-date">NOVEMBER 10, 2025</p>
              <h3 className="news-title">
                BUILDING TRUST: THE FOUNDATION OF SUCCESSFUL B2B RELATIONSHIPS
              </h3>
              <p className="news-excerpt">
                Explore the Miners Association trust-based influence model and how it creates lasting connections between businesses. Our approach goes beyond traditional networking to build meaningful, long-term partnerships.
              </p>
              <Link to="/news" className="news-link">READ MORE →</Link>
            </div>
          </div>
        </div>
        <div className="load-more-container reveal">
          <button className="load-more-button" onClick={() => navigate('/news')}>ALL NEWS</button>
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
