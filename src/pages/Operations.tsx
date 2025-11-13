import './Operations.css'

const Operations = () => {
  const projects = [
    {
      name: "Lagos Gold Mining Project",
      location: "Lagos State",
      status: "Active",
      description: "Large-scale gold mining operation with state-of-the-art processing facilities.",
      capacity: "500 tons/day"
    },
    {
      name: "Abuja Mineral Extraction",
      location: "Federal Capital Territory",
      status: "Active",
      description: "Multi-mineral extraction focusing on limestone and marble for industrial use.",
      capacity: "1,200 tons/day"
    },
    {
      name: "Port Harcourt Steel Mining",
      location: "Rivers State",
      status: "Development Phase",
      description: "Iron ore mining project supporting local steel manufacturing industry.",
      capacity: "800 tons/day"
    },
    {
      name: "Kano Tin Mining Operation",
      location: "Kano State",
      status: "Active",
      description: "Traditional tin mining with modern environmental and safety standards.",
      capacity: "300 tons/day"
    }
  ]

  return (
    <div className="operations">
      <div className="container">
        <section className="operations-header">
          <h1>Operations & Projects</h1>
          <p className="subtitle">Managing Nigeria's Mineral Resources with Excellence and Responsibility</p>
        </section>

        <section className="operations-overview">
          <div className="overview-card">
            <h2>Our Operations</h2>
            <p>The Miners Association of Nigeria oversees and coordinates mining operations across the country, ensuring compliance with international standards while maximizing the economic benefits of Nigeria's vast mineral resources.</p>
            <div className="stats-row">
              <div className="stat">
                <h3>50+</h3>
                <p>Active Mining Sites</p>
              </div>
              <div className="stat">
                <h3>15</h3>
                <p>Mineral Types</p>
              </div>
              <div className="stat">
                <h3>24/7</h3>
                <p>Operations</p>
              </div>
            </div>
          </div>
        </section>

        <section className="minerals">
          <h2>Minerals We Extract</h2>
          <div className="minerals-grid">
            <div className="mineral-card">
              <div className="mineral-icon">🏆</div>
              <h3>Gold</h3>
              <p>Premium quality gold extraction using environmentally friendly methods.</p>
            </div>
            <div className="mineral-card">
              <div className="mineral-icon">⚡</div>
              <h3>Iron Ore</h3>
              <p>Essential for steel production and industrial development.</p>
            </div>
            <div className="mineral-card">
              <div className="mineral-icon">💎</div>
              <h3>Diamond</h3>
              <p>Precious gemstone mining with strict quality control.</p>
            </div>
            <div className="mineral-card">
              <div className="mineral-icon">🪨</div>
              <h3>Limestone</h3>
              <p>Critical for cement production and construction materials.</p>
            </div>
            <div className="mineral-card">
              <div className="mineral-icon">🔋</div>
              <h3>Coal</h3>
              <p>Energy production supporting Nigeria's power sector.</p>
            </div>
            <div className="mineral-card">
              <div className="mineral-icon">🥈</div>
              <h3>Tin</h3>
              <p>Traditional mining with modern processing techniques.</p>
            </div>
          </div>
        </section>

        <section className="projects">
          <h2>Major Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-header">
                  <h3>{project.name}</h3>
                  <span className={`status ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
                </div>
                <div className="project-details">
                  <p className="location">📍 {project.location}</p>
                  <p className="capacity">⚙️ Capacity: {project.capacity}</p>
                  <p className="description">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="technology">
          <h2>Mining Technology & Innovation</h2>
          <div className="tech-grid">
            <div className="tech-item">
              <div className="tech-icon">🤖</div>
              <h3>Automation</h3>
              <p>Advanced automated systems for efficient and safe mining operations.</p>
            </div>
            <div className="tech-item">
              <div className="tech-icon">📊</div>
              <h3>Data Analytics</h3>
              <p>Real-time monitoring and optimization of mining processes.</p>
            </div>
            <div className="tech-item">
              <div className="tech-icon">🌱</div>
              <h3>Green Technology</h3>
              <p>Environmentally friendly extraction and processing methods.</p>
            </div>
            <div className="tech-item">
              <div className="tech-icon">🔒</div>
              <h3>Safety Systems</h3>
              <p>State-of-the-art safety equipment and protocols for worker protection.</p>
            </div>
          </div>
        </section>

        <section className="certifications">
          <h2>Certifications & Standards</h2>
          <div className="cert-grid">
            <div className="cert-item">
              <h3>ISO 9001:2015</h3>
              <p>Quality Management Systems</p>
            </div>
            <div className="cert-item">
              <h3>ISO 14001:2015</h3>
              <p>Environmental Management</p>
            </div>
            <div className="cert-item">
              <h3>OHSAS 18001</h3>
              <p>Occupational Health & Safety</p>
            </div>
            <div className="cert-item">
              <h3>Responsible Mining</h3>
              <p>International Council on Mining & Metals Standards</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Operations
