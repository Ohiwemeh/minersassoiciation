import './Services.css'

const Services = () => {
  const services = [
    {
      title: "Mining Consultation",
      description: "Expert consultation on mining operations, feasibility studies, and project planning.",
      features: ["Feasibility Studies", "Project Planning", "Risk Assessment", "Technical Analysis"]
    },
    {
      title: "Regulatory Compliance",
      description: "Comprehensive support for navigating mining regulations and obtaining necessary permits.",
      features: ["License Applications", "Compliance Audits", "Regulatory Training", "Documentation Support"]
    },
    {
      title: "Training & Development",
      description: "Professional training programs for mining personnel at all levels.",
      features: ["Safety Training", "Technical Skills", "Management Programs", "Certification Courses"]
    },
    {
      title: "Equipment & Technology",
      description: "Access to modern mining equipment and cutting-edge technology solutions.",
      features: ["Equipment Leasing", "Technology Integration", "Maintenance Services", "Technical Support"]
    },
    {
      title: "Environmental Services",
      description: "Environmental impact assessment and sustainable mining solutions.",
      features: ["Impact Assessment", "Reclamation Planning", "Environmental Monitoring", "Sustainability Consulting"]
    },
    {
      title: "Market Intelligence",
      description: "Comprehensive market analysis and intelligence for mining stakeholders.",
      features: ["Market Analysis", "Price Trends", "Investment Opportunities", "Industry Reports"]
    }
  ]

  return (
    <div className="services">
      <div className="container">
        <section className="services-header">
          <h1>Our Services</h1>
          <p className="subtitle">Comprehensive Solutions for Nigeria's Mining Industry</p>
        </section>

        <section className="services-intro">
          <div className="intro-card">
            <h2>Supporting Mining Excellence</h2>
            <p>The Miners Association of Nigeria provides a wide range of services designed to support and enhance the success of our members and the broader mining industry. From technical expertise to regulatory guidance, we are your trusted partner in mining excellence.</p>
            <div className="service-stats">
              <div className="stat">
                <h3>500+</h3>
                <p>Companies Served</p>
              </div>
              <div className="stat">
                <h3>24/7</h3>
                <p>Support Available</p>
              </div>
              <div className="stat">
                <h3>98%</h3>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        <section className="services-grid">
          <h2>Core Services</h2>
          <div className="services-list">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-header">
                  <h3>{service.title}</h3>
                </div>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <button className="service-btn">Learn More</button>
              </div>
            ))}
          </div>
        </section>

        <section className="process">
          <h2>How We Work</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Consultation</h3>
              <p>Initial consultation to understand your specific needs and requirements.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Assessment</h3>
              <p>Comprehensive assessment of your current operations and challenges.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Solution Design</h3>
              <p>Customized solutions tailored to your specific mining operations.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Implementation</h3>
              <p>Expert implementation with ongoing support and monitoring.</p>
            </div>
          </div>
        </section>

        <section className="testimonials">
          <h2>What Our Clients Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The Miners Association has been instrumental in helping us navigate complex regulatory requirements. Their expertise is unmatched."</p>
              </div>
              <div className="testimonial-author">
                <h4>Alhaji Ibrahim Musa</h4>
                <p>CEO, Northern Mining Co.</p>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The training programs have significantly improved our team's safety awareness and operational efficiency."</p>
              </div>
              <div className="testimonial-author">
                <h4>Dr. Ngozi Adekunle</h4>
                <p>Operations Director, Southern Minerals</p>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Their environmental services helped us achieve full compliance while maintaining operational excellence."</p>
              </div>
              <div className="testimonial-author">
                <h4>Engr. Tunde Ojo</h4>
                <p>Managing Director, Western Resources</p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-cta">
          <div className="cta-card">
            <h2>Ready to Get Started?</h2>
            <p>Contact us today to learn how our services can benefit your mining operations.</p>
            <button className="cta-btn">Contact Our Team</button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Services
