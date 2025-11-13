import './Careers.css'

const Careers = () => {
  const jobOpenings = [
    {
      title: "Mining Engineer",
      department: "Operations",
      location: "Abuja",
      type: "Full-time",
      experience: "5+ years",
      description: "Seeking experienced mining engineer for our Abuja operations..."
    },
    {
      title: "Environmental Specialist",
      department: "Sustainability",
      location: "Lagos",
      type: "Full-time",
      experience: "3+ years",
      description: "Environmental specialist to oversee compliance and sustainability programs..."
    },
    {
      title: "Safety Officer",
      department: "Health & Safety",
      location: "Port Harcourt",
      type: "Full-time",
      experience: "4+ years",
      description: "Safety officer to implement and monitor safety protocols..."
    },
    {
      title: "Geologist",
      department: "Exploration",
      location: "Kano",
      type: "Full-time",
      experience: "6+ years",
      description: "Senior geologist for mineral exploration and resource assessment..."
    }
  ]

  return (
    <div className="careers">
      <div className="container">
        <section className="careers-header">
          <h1>Careers</h1>
          <p className="subtitle">Join Our Team and Shape the Future of Mining in Nigeria</p>
        </section>

        <section className="careers-intro">
          <div className="intro-card">
            <h2>Why Work With Us?</h2>
            <p>The Miners Association of Nigeria offers exciting career opportunities for professionals passionate about the mining industry. We provide a dynamic work environment, competitive compensation, and the chance to make a meaningful impact on Nigeria's economic development.</p>
            <div className="benefits-grid">
              <div className="benefit">
                <h3>🏆 Competitive Salary</h3>
                <p>Industry-leading compensation packages</p>
              </div>
              <div className="benefit">
                <h3>📚 Professional Development</h3>
                <p>Continuous learning and training opportunities</p>
              </div>
              <div className="benefit">
                <h3>🌱 Work-Life Balance</h3>
                <p>Flexible working arrangements and benefits</p>
              </div>
              <div className="benefit">
                <h3>🤝 Team Culture</h3>
                <p>Collaborative and supportive work environment</p>
              </div>
            </div>
          </div>
        </section>

        <section className="job-openings">
          <h2>Current Openings</h2>
          <div className="jobs-grid">
            {jobOpenings.map((job, index) => (
              <div key={index} className="job-card">
                <div className="job-header">
                  <h3>{job.title}</h3>
                  <span className="job-type">{job.type}</span>
                </div>
                <div className="job-details">
                  <p><strong>Department:</strong> {job.department}</p>
                  <p><strong>Location:</strong> {job.location}</p>
                  <p><strong>Experience:</strong> {job.experience}</p>
                </div>
                <p className="job-description">{job.description}</p>
                <button className="apply-btn">Apply Now</button>
              </div>
            ))}
          </div>
        </section>

        <section className="culture">
          <h2>Our Culture & Values</h2>
          <div className="culture-grid">
            <div className="culture-item">
              <h3>Excellence</h3>
              <p>We strive for excellence in everything we do, from safety standards to operational efficiency.</p>
            </div>
            <div className="culture-item">
              <h3>Integrity</h3>
              <p>We conduct business with honesty, transparency, and ethical principles.</p>
            </div>
            <div className="culture-item">
              <h3>Innovation</h3>
              <p>We embrace new technologies and creative solutions to advance the mining industry.</p>
            </div>
            <div className="culture-item">
              <h3>Sustainability</h3>
              <p>We are committed to environmentally and socially responsible mining practices.</p>
            </div>
          </div>
        </section>

        <section className="development">
          <h2>Professional Development</h2>
          <div className="development-content">
            <div className="development-text">
              <p>We invest in our employees' growth through comprehensive training programs, mentorship opportunities, and career advancement paths. Our development programs include:</p>
              <ul>
                <li>Technical skills training</li>
                <li>Leadership development programs</li>
                <li>Industry certifications</li>
                <li>International conference attendance</li>
                <li>Cross-functional project opportunities</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="contact-careers">
          <div className="contact-card">
            <h2>Join Our Team</h2>
            <p>Ready to take the next step in your career? Explore our current openings or submit your resume for future opportunities.</p>
            <div className="contact-buttons">
              <button className="careers-btn">View All Positions</button>
              <button className="careers-btn secondary">Submit Resume</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Careers
