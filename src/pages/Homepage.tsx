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

      {/* Why VUKA Section */}
      <section className="services-section">
        <h2 className="section-title reveal">Why Miners Association?</h2>
        <div className="vuka-intro reveal">
          <p className="vuka-description">
            We connect people & organisations to information and each other through signature in-person and digital environments. Creating the conditions for extraordinary change, supporting Africa to achieve its highest potential.
          </p>
        </div>
        <div className="services-grid">
          <div className="service-card reveal">
            <h3 className="service-title">Creating Opportunity in Connection</h3>
            <p className="service-description">
              Open the door to more conversations and opportunities through Miners Association events, exhibitions & industry news. Compelling entry form to learn how to generate more connections within Africa.
            </p>
          </div>

          <div className="service-card reveal">
            <h3 className="service-title">Dedicated to Africa</h3>
            <p className="service-description">
              Explore opportunity in every connection, digital or in-person across the African continent. Miners Association has been connecting businesses in Africa for 20 years, providing unparalleled access to key contacts, innovative thinking and business opportunities.
            </p>
          </div>

          <div className="service-card reveal">
            <h3 className="service-title">Access The News Cycle Your Industry Relies On</h3>
            <p className="service-description">
              Gain insights and knowledge via the industry's most trusted source of information. Seize the opportunity to keep your finger on the pulse and have your company featured for the industries most influential figures to see.
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
        <h2 className="section-title reveal">Industry Sectors We Serve</h2>
        <div className="products-grid">
          <div className="product-card reveal">
            <h3 className="product-title">Mining</h3>
            <p className="product-description">
              Local knowledge is key in the African mining industry. Leverage Miners Association's 20 years' on-the-ground experience to connect with key stakeholders.
            </p>
            <ul className="service-list">
              <li>✓ High engagement levels across digital, magazine and in-person channels across Africa</li>
              <li>✓ Trusted by regional SME's, Corporates & Governments</li>
              <li>✓ Largest exhibition in Africa's hottest mining destinations</li>
            </ul>
          </div>

          <div className="product-card reveal">
            <h3 className="product-title">Energy</h3>
            <p className="product-description">
              Discover the place where innovators and industry titans meet. Miners Association hosts some of the key platforms where members of the energy ecosystem connect.
            </p>
            <ul className="service-list">
              <li>✓ Reach a qualified African energy audience of &gt;88,000 contacts</li>
              <li>✓ Market leading industry news and resource media</li>
              <li>✓ Mapping Africa's Energy Transition</li>
            </ul>
          </div>

          <div className="product-card reveal">
            <h3 className="product-title">Smart Mobility</h3>
            <p className="product-description">
              Key players in EV's, transport and infrastructure connect through Miners Association media & events. We're able to reach suppliers, buyers, innovators, investors & policy makers.
            </p>
            <ul className="service-list">
              <li>✓ Latest industry news and technical information</li>
              <li>✓ The only Electric Vehicle Road Trip in Africa</li>
              <li>✓ Stakeholder Partners to Influence Adoption</li>
            </ul>
          </div>

          <div className="product-card reveal">
            <h3 className="product-title">Retail</h3>
            <p className="product-description">
              Miners Association connects cutting edge technologists with the businesses searching for their solutions. Discover the latest in UX, ecommerce & digital marketing.
            </p>
            <ul className="service-list">
              <li>✓ Internationally recognised experts</li>
              <li>✓ Showcase of new technology solutions</li>
              <li>✓ Exciting blend of digital and in-person solutions to connect the sector</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="case-study-section">
        <h2 className="section-title reveal">Success Stories</h2>
        <div className="case-study-content">
          <div className="case-study-image reveal">
            <img 

              src="/min (5).jpg" 
              alt="DRC Mining Week" 
              className="case-image"
            />
          </div>
          <div className="case-study-text reveal">
            <h3 className="case-study-title">Strengthening presence in the DRC mining sector</h3>
            <div className="case-study-client">
              <h4>Client:</h4>
              <p>Mining Engineering Services (MES)</p>
            </div>
            <div className="case-study-section-content">
              <h4>Objective:</h4>
              <p>
                MES aimed to strengthen its presence in the mining sector of the DRC, showcase its expertise in delivering cutting-edge engineering solutions, and build direct relationships with decision-makers and project leaders from mining companies. With the DRC Mining Week being a premier event in the region, MES sought to leverage this platform to emphasize its commitment to infrastructure development and reliable services, particularly in scaffolding, energy, and construction support.
              </p>
            </div>
            <div className="case-study-section-content">
              <h4>Solution:</h4>
              <p>
                MES participated in the DRC Mining Week as a key sponsor and exhibitor. The company's stand showcased a comprehensive portfolio, including scaffolding solutions, HDPE pipes for water projects, cable manufacturing through Congo Cables and Transformers (CCT), and its expertise in renewable energy projects. MES also actively engaged in panel discussions and networking sessions to highlight its role in driving sustainable growth in the mining sector.
              </p>
            </div>
            <div className="case-study-section-content">
              <h4>Results:</h4>
              <p>
                The event significantly boosted MES's visibility among industry leaders. As a direct result of its participation, MES secured multiple business enquiries. Additionally, MES forged new partnerships with prominent companies in the mining sector as well as other allied industries, setting the stage for long-term collaborations in infrastructure development.
              </p>
            </div>
            <div className="case-study-quote">
              <blockquote>
                "MES's participation in the DRC Mining Week not only reinforced its position as a leader in engineering solutions but also highlighted its role in supporting the region's industrial growth. We are excited to collaborate with a company that prioritizes innovation and sustainability."
              </blockquote>
              <p className="quote-author">- Mr Manoj Patil, Director</p>
            </div>
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
            <img src="/min (1).jpg" alt="News 1" className="news-image" />
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
            <img src="/min (3).jpg" alt="News 2" className="news-image" />
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
            <img src="/min (4).jpg" alt="News 3" className="news-image" />
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
