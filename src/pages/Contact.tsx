import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import '../pages/SharedStyles.css'

const Contact = () => {
  useScrollReveal()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for contacting us! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' })
  }

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section 
        className="page-hero" 
        style={{ backgroundImage: 'url(/min%20(3).jpg)' }}
      >
        <div className="page-hero-content">
          <h1 className="page-hero-title">CONTACT US</h1>
          <p className="page-hero-subtitle">
            Get in touch with our team
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="content-section">
        <div className="section-container">
          <h2 className="section-title reveal">GET IN TOUCH</h2>
          <div className="grid-3">
            <div className="card reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3 className="card-title">HEAD OFFICE</h3>
              <p className="card-description">
                123 Mining Street<br />
                New York, NY 10001<br />
                United States
              </p>
            </div>
            <div className="card reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3 className="card-title">PHONE</h3>
              <p className="card-description">
                Main: +1 (212) 555-0100<br />
                Toll-Free: 1-800-MINING<br />
                Fax: +1 (212) 555-0101
              </p>
            </div>
            <div className="card reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <h3 className="card-title">EMAIL</h3>
              <p className="card-description">
                General: info@universalmetals.com<br />
                Investors: investors@universalmetals.com<br />
                Media: media@universalmetals.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="content-section gray">
        <div className="section-container">
          <h2 className="section-title reveal">SEND US A MESSAGE</h2>
          <div className="grid-2">
            <div className="text-content reveal-left">
              <h3>We're Here to Help</h3>
              <p>
                Whether you have questions about our operations, investment opportunities, career openings, or partnership possibilities, our team is ready to assist you.
              </p>
              <p>
                Fill out the form and we'll get back to you within 24 hours during business days.
              </p>
              <ul>
                <li>General inquiries and information</li>
                <li>Partnership and business opportunities</li>
                <li>Media and press inquiries</li>
                <li>Investor relations</li>
                <li>Career opportunities</li>
                <li>Site visit requests</li>
              </ul>
            </div>
            <div className="card reveal-right">
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    style={{ width: '100%', padding: '12px', border: '1px solid #ddd', fontSize: '1rem', transition: 'border-color 0.3s ease', fontFamily: 'inherit' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={{ width: '100%', padding: '12px', border: '1px solid #ddd', fontSize: '1rem', transition: 'border-color 0.3s ease', fontFamily: 'inherit' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    style={{ width: '100%', padding: '12px', border: '1px solid #ddd', fontSize: '1rem', transition: 'border-color 0.3s ease', fontFamily: 'inherit' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    style={{ width: '100%', padding: '12px', border: '1px solid #ddd', fontSize: '1rem', transition: 'border-color 0.3s ease', fontFamily: 'inherit' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    style={{ width: '100%', padding: '12px', border: '1px solid #ddd', fontSize: '1rem', transition: 'border-color 0.3s ease', fontFamily: 'inherit' }}
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="investor">Investor Relations</option>
                    <option value="media">Media Inquiry</option>
                    <option value="career">Career Opportunities</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    style={{ width: '100%', padding: '12px', border: '1px solid #ddd', fontSize: '1rem', transition: 'border-color 0.3s ease', fontFamily: 'inherit', resize: 'vertical' }}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="content-section">
        <div className="section-container">
          <h2 className="section-title reveal">GLOBAL OFFICES</h2>
          <div className="grid-4">
            <div className="card reveal">
              <h3 className="card-title">NORTH AMERICA</h3>
              <p className="card-description">
                <strong>New York, USA</strong><br />
                123 Mining Street<br />
                +1 (212) 555-0100
              </p>
            </div>
            <div className="card reveal">
              <h3 className="card-title">SOUTH AMERICA</h3>
              <p className="card-description">
                <strong>Lima, Peru</strong><br />
                Av. Minerales 456<br />
                +51 1 234 5678
              </p>
            </div>
            <div className="card reveal">
              <h3 className="card-title">AFRICA</h3>
              <p className="card-description">
                <strong>Johannesburg, SA</strong><br />
                789 Gold Avenue<br />
                +27 11 123 4567
              </p>
            </div>
            <div className="card reveal">
              <h3 className="card-title">AUSTRALIA</h3>
              <p className="card-description">
                <strong>Perth, Australia</strong><br />
                321 Mining Road<br />
                +61 8 9123 4567
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="content-section dark">
        <div className="section-container">
          <div className="reveal" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="section-title">BUSINESS HOURS</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', marginTop: '40px' }}>
              <div>
                <h3 style={{ color: '#d4af37', fontSize: '1.2rem', marginBottom: '10px' }}>HEAD OFFICE</h3>
                <p style={{ color: '#ccc', lineHeight: '1.8' }}>
                  Monday - Friday<br />
                  8:00 AM - 6:00 PM EST
                </p>
              </div>
              <div>
                <h3 style={{ color: '#d4af37', fontSize: '1.2rem', marginBottom: '10px' }}>OPERATIONS</h3>
                <p style={{ color: '#ccc', lineHeight: '1.8' }}>
                  24/7<br />
                  Year-Round
                </p>
              </div>
              <div>
                <h3 style={{ color: '#d4af37', fontSize: '1.2rem', marginBottom: '10px' }}>EMERGENCY</h3>
                <p style={{ color: '#ccc', lineHeight: '1.8' }}>
                  24/7 Hotline<br />
                  1-800-EMERGENCY
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
