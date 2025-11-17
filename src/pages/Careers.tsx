import { useScrollReveal } from '../hooks/useScrollReveal'
import '../pages/SharedStyles.css'

const Careers = () => {
  useScrollReveal()

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Mining Engineer',
      location: 'Golden Ridge Mine, North America',
      type: 'Full-Time',
      department: 'Operations'
    },
    {
      id: 2,
      title: 'Geologist - Exploration',
      location: 'Various Locations',
      type: 'Full-Time',
      department: 'Exploration'
    },
    {
      id: 3,
      title: 'Environmental Specialist',
      location: 'Copper Valley, Africa',
      type: 'Full-Time',
      department: 'Sustainability'
    },
    {
      id: 4,
      title: 'Safety Manager',
      location: 'Silverstone Complex, South America',
      type: 'Full-Time',
      department: 'Health & Safety'
    },
    {
      id: 5,
      title: 'Processing Plant Operator',
      location: 'Multiple Sites',
      type: 'Full-Time',
      department: 'Operations'
    },
    {
      id: 6,
      title: 'Financial Analyst',
      location: 'Head Office, New York',
      type: 'Full-Time',
      department: 'Finance'
    }
  ]

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section 
        className="page-hero" 
        style={{ backgroundImage: 'url(/min%20(2).jpg)' }}
      >
        <div className="page-hero-content">
          <h1 className="page-hero-title">CAREERS</h1>
          <p className="page-hero-subtitle">
            Join our team and build a rewarding career in mining
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="content-section">
        <div className="section-container">
          <h2 className="section-title reveal">WHY WORK WITH US</h2>
          <p className="section-subtitle reveal">
            We offer more than just a job - we provide opportunities for growth, development, and making a real impact
          </p>
          <div className="grid-3">
            <div className="card reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <h3 className="card-title">CAREER GROWTH</h3>
              <p className="card-description">
                Comprehensive training programs, mentorship opportunities, and clear career progression paths to help you reach your full potential.
              </p>
            </div>
            <div className="card reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="card-title">COMPETITIVE BENEFITS</h3>
              <p className="card-description">
                Industry-leading compensation packages, health insurance, retirement plans, and performance bonuses.
              </p>
            </div>
            <div className="card reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"></path>
                </svg>
              </div>
              <h3 className="card-title">WORK-LIFE BALANCE</h3>
              <p className="card-description">
                Flexible work arrangements, generous vacation time, and employee wellness programs to support your well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="content-section gray">
        <div className="section-container">
          <h2 className="section-title reveal">CURRENT OPENINGS</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {jobOpenings.map((job) => (
              <div key={job.id} className="card reveal hover-lift" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
                <div style={{ flex: '1', minWidth: '250px' }}>
                  <h3 className="card-title" style={{ marginBottom: '10px' }}>{job.title}</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', fontSize: '0.9rem', color: '#666' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      {job.location}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      </svg>
                      {job.type}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                        <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
                      </svg>
                      {job.department}
                    </div>
                  </div>
                </div>
                <button className="btn btn-primary">
                  APPLY NOW
                </button>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '60px' }} className="reveal">
            <button className="btn btn-outline">
              VIEW ALL POSITIONS
            </button>
          </div>
        </div>
      </section>

      {/* Life at Universal Metals */}
      <section className="content-section">
        <div className="section-container">
          <h2 className="section-title reveal">LIFE AT UNIVERSAL METALS</h2>
          <div className="grid-2">
            <div className="text-content reveal-left">
              <h3>Our Culture</h3>
              <p>
                At Universal Metals, we foster a culture of innovation, collaboration, and continuous improvement. Our diverse team of professionals works together to achieve excellence in everything we do.
              </p>
              <ul>
                <li>Inclusive and diverse workplace</li>
                <li>Safety-first culture</li>
                <li>Innovation and continuous learning</li>
                <li>Team collaboration and support</li>
                <li>Recognition and rewards programs</li>
                <li>Community involvement opportunities</li>
              </ul>
            </div>
            <div className="reveal-right">
              <img 
                src="/min (5).jpg" 
                alt="Team at work" 
                className="feature-image"
                style={{ height: '400px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="content-section dark">
        <div className="section-container">
          <h2 className="section-title reveal">EMPLOYEE BENEFITS</h2>
          <div className="grid-4">
            <div className="card dark reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3 className="card-title">HEALTH & WELLNESS</h3>
              <p className="card-description">
                Comprehensive medical, dental, and vision coverage for you and your family.
              </p>
            </div>
            <div className="card dark reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3 className="card-title">RETIREMENT PLANS</h3>
              <p className="card-description">
                401(k) with company match and pension plans to secure your financial future.
              </p>
            </div>
            <div className="card dark reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
              </div>
              <h3 className="card-title">TRAINING & DEVELOPMENT</h3>
              <p className="card-description">
                Ongoing training programs, certifications, and tuition reimbursement.
              </p>
            </div>
            <div className="card dark reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 className="card-title">PAID TIME OFF</h3>
              <p className="card-description">
                Generous vacation days, holidays, and personal time to recharge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="content-section gray">
        <div className="section-container">
          <h2 className="section-title reveal">APPLICATION PROCESS</h2>
          <div className="grid-4">
            <div className="card reveal" style={{ textAlign: 'center' }}>
              <div style={{ width: '60px', height: '60px', backgroundColor: '#d4af37', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: '1.5rem', fontWeight: '700', color: 'white' }}>
                1
              </div>
              <h3 className="card-title">APPLY ONLINE</h3>
              <p className="card-description">
                Submit your application and resume through our online portal.
              </p>
            </div>
            <div className="card reveal" style={{ textAlign: 'center' }}>
              <div style={{ width: '60px', height: '60px', backgroundColor: '#d4af37', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: '1.5rem', fontWeight: '700', color: 'white' }}>
                2
              </div>
              <h3 className="card-title">SCREENING</h3>
              <p className="card-description">
                Our HR team reviews applications and contacts qualified candidates.
              </p>
            </div>
            <div className="card reveal" style={{ textAlign: 'center' }}>
              <div style={{ width: '60px', height: '60px', backgroundColor: '#d4af37', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: '1.5rem', fontWeight: '700', color: 'white' }}>
                3
              </div>
              <h3 className="card-title">INTERVIEW</h3>
              <p className="card-description">
                Meet with hiring managers and team members to discuss the role.
              </p>
            </div>
            <div className="card reveal" style={{ textAlign: 'center' }}>
              <div style={{ width: '60px', height: '60px', backgroundColor: '#d4af37', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: '1.5rem', fontWeight: '700', color: 'white' }}>
                4
              </div>
              <h3 className="card-title">OFFER</h3>
              <p className="card-description">
                Receive your offer and join the Universal Metals team!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="content-section dark">
        <div className="section-container">
          <div className="reveal" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="section-title">READY TO JOIN OUR TEAM?</h2>
            <p className="section-subtitle" style={{ marginBottom: '40px' }}>
              Explore our current opportunities and take the first step toward an exciting career
            </p>
            <button className="btn btn-primary" style={{ marginRight: '20px' }}>
              SEARCH JOBS
            </button>
            <button className="btn btn-outline-light">
              SUBMIT YOUR RESUME
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Careers
