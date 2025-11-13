import './News.css'

const News = () => {
  const newsArticles = [
    {
      id: 1,
      date: "March 15, 2025",
      title: "New Mining Regulations Announced by Federal Government",
      excerpt: "The Federal Government has announced comprehensive new regulations aimed at improving safety standards and environmental protection in Nigeria's mining sector...",
      category: "Regulation",
      image: "🏛️"
    },
    {
      id: 2,
      date: "March 10, 2025",
      title: "Sustainable Mining Initiative Launch",
      excerpt: "Our association launches a groundbreaking initiative to promote sustainable mining practices across Nigeria, targeting 30% reduction in environmental impact...",
      category: "Sustainability",
      image: "🌱"
    },
    {
      id: 3,
      date: "March 5, 2025",
      title: "Annual Mining Conference 2025 Registration Open",
      excerpt: "Registration is now open for our annual conference featuring industry leaders, technical experts, and government officials discussing the future of mining...",
      category: "Events",
      image: "🎤"
    },
    {
      id: 4,
      date: "February 28, 2025",
      title: "Record Gold Production in Q4 2024",
      excerpt: "Member companies reported record gold production in the fourth quarter of 2024, marking a significant milestone for Nigeria's mining industry...",
      category: "Production",
      image: "⛏️"
    },
    {
      id: 5,
      date: "February 20, 2025",
      title: "New Technology Partnership Announced",
      excerpt: "The association has partnered with leading technology firms to bring cutting-edge mining equipment and software solutions to member companies...",
      category: "Technology",
      image: "💻"
    },
    {
      id: 6,
      date: "February 15, 2025",
      title: "Community Development Project Completed",
      excerpt: "A major community development project in Kano State has been completed, providing clean water and educational facilities to local communities...",
      category: "Community",
      image: "🏘️"
    }
  ]

  return (
    <div className="news">
      <div className="container">
        <section className="news-header">
          <h1>News & Media</h1>
          <p className="subtitle">Stay Updated with the Latest from Nigeria's Mining Industry</p>
        </section>

        <section className="news-featured">
          <div className="featured-article">
            <div className="featured-content">
              <span className="featured-tag">Featured Story</span>
              <h2>New Mining Regulations Announced by Federal Government</h2>
              <p className="featured-date">March 15, 2025</p>
              <p className="featured-excerpt">The Federal Government has announced comprehensive new regulations aimed at improving safety standards and environmental protection in Nigeria's mining sector. These regulations, developed in consultation with the Miners Association of Nigeria, are expected to come into effect from June 2025.</p>
              <button className="read-more-btn">Read Full Article</button>
            </div>
            <div className="featured-image">
              <div className="image-placeholder">🏛️</div>
            </div>
          </div>
        </section>

        <section className="news-categories">
          <div className="category-tabs">
            <button className="category-btn active">All News</button>
            <button className="category-btn">Regulation</button>
            <button className="category-btn">Sustainability</button>
            <button className="category-btn">Events</button>
            <button className="category-btn">Technology</button>
            <button className="category-btn">Community</button>
          </div>
        </section>

        <section className="news-grid">
          <div className="articles-container">
            {newsArticles.map((article) => (
              <article key={article.id} className="news-card">
                <div className="news-image">
                  <div className="image-placeholder">{article.image}</div>
                </div>
                <div className="news-content">
                  <span className="news-category">{article.category}</span>
                  <h3>{article.title}</h3>
                  <p className="news-date">{article.date}</p>
                  <p className="news-excerpt">{article.excerpt}</p>
                  <button className="news-read-more">Read More →</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="newsletter">
          <div className="newsletter-card">
            <h2>Subscribe to Our Newsletter</h2>
            <p>Get the latest news and updates delivered directly to your inbox</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email address" />
              <button className="subscribe-btn">Subscribe</button>
            </div>
          </div>
        </section>

        <section className="media-resources">
          <h2>Media Resources</h2>
          <div className="media-grid">
            <div className="media-card">
              <h3>Press Releases</h3>
              <p>Official press releases and statements from the association</p>
              <button className="media-btn">View Press Releases</button>
            </div>
            <div className="media-card">
              <h3>Photo Gallery</h3>
              <p>High-quality images of mining operations and events</p>
              <button className="media-btn">Browse Gallery</button>
            </div>
            <div className="media-card">
              <h3>Video Library</h3>
              <p>Videos of conferences, operations, and interviews</p>
              <button className="media-btn">Watch Videos</button>
            </div>
            <div className="media-card">
              <h3>Publications</h3>
              <p>Annual reports, industry studies, and research papers</p>
              <button className="media-btn">Download Publications</button>
            </div>
          </div>
        </section>

        <section className="contact-media">
          <div className="contact-card">
            <h2>Media Inquiries</h2>
            <p>For press inquiries, interview requests, or media partnerships, please contact our communications team.</p>
            <div className="contact-info">
              <p>📧 media@minersassociation.ng</p>
              <p>📞 +234 800 000 0001</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default News
