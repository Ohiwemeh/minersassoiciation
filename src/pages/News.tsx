import { useScrollReveal } from '../hooks/useScrollReveal'
import { Link } from 'react-router'
import '../pages/SharedStyles.css'

const News = () => {
  useScrollReveal()

  const newsArticles = [
    {
      id: 1,
      date: 'NOVEMBER 10, 2025',
      title: 'THE MINING INDUSTRY: FROM A GEOLOGICAL AND BUSINESS PERSPECTIVE',
      excerpt: 'Exploring the intersection of geological science and business strategy in modern mining operations. Learn how Universal Metals approaches mineral exploration with both technical expertise and commercial acumen.',
      image: '/min (1).jpg',
      category: 'Industry Insights'
    },
    {
      id: 2,
      date: 'NOVEMBER 5, 2025',
      title: 'GOING ELECTRONIC: FROM PAPER TO DIGITAL MINE PLANS',
      excerpt: 'Discover how digital transformation is revolutionizing mine planning and operations. Universal Metals leads the way in adopting cutting-edge technology for improved efficiency and safety.',
      image: '/min (3).jpg',
      category: 'Technology'
    },
    {
      id: 3,
      date: 'OCTOBER 28, 2025',
      title: 'JOHN ROBERTS: HOW WE\'LL GET TO THE MOON AGAIN',
      excerpt: 'An exclusive interview with our CEO about the future of mining technology and sustainable practices. Learn about our vision for the next generation of mineral extraction and processing.',
      image: '/min (4).jpg',
      category: 'Leadership'
    },
    {
      id: 4,
      date: 'OCTOBER 15, 2025',
      title: 'UNIVERSAL METALS ACHIEVES RECORD PRODUCTION AT GOLDEN RIDGE',
      excerpt: 'Our flagship gold mine sets new production records while maintaining industry-leading safety standards. Q3 results exceed expectations with 68,000 ounces produced.',
      image: '/min (2).jpg',
      category: 'Operations'
    },
    {
      id: 5,
      date: 'SEPTEMBER 22, 2025',
      title: 'SUSTAINABILITY MILESTONE: 35% REDUCTION IN CARBON EMISSIONS',
      excerpt: 'Universal Metals announces significant progress toward net-zero goals. New renewable energy installations and efficiency improvements drive emissions reduction.',
      image: '/min (5).jpg',
      category: 'Sustainability'
    },
    {
      id: 6,
      date: 'SEPTEMBER 8, 2025',
      title: 'NEW EXPLORATION PROJECT LAUNCHED IN SOUTH AMERICA',
      excerpt: 'Company announces major exploration initiative targeting high-grade copper deposits. Initial drilling program to commence in Q4 2025.',
      image: '/min (6).jpg',
      category: 'Exploration'
    }
  ]

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section 
        className="page-hero" 
        style={{ backgroundImage: 'url(/min%20(1).jpg)' }}
      >
        <div className="page-hero-content">
          <h1 className="page-hero-title">NEWS & MEDIA</h1>
          <p className="page-hero-subtitle">
            Latest updates and insights from Universal Metals
          </p>
        </div>
      </section>

      {/* Featured News */}
      <section className="content-section">
        <div className="section-container">
          <h2 className="section-title reveal">LATEST NEWS</h2>
          <div className="grid-3">
            {newsArticles.map((article) => (
              <div key={article.id} className="card reveal hover-lift" style={{ padding: 0, overflow: 'hidden' }}>
                <img 
                  src={article.image} 
                  alt={article.title}
                  style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                />
                <div style={{ padding: '30px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                    <span style={{ color: '#999', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      {article.date}
                    </span>
                    <span style={{ backgroundColor: '#d4af37', color: 'white', padding: '4px 12px', fontSize: '0.75rem', borderRadius: '3px', textTransform: 'uppercase', fontWeight: '600' }}>
                      {article.category}
                    </span>
                  </div>
                  <h3 className="card-title" style={{ fontSize: '1.1rem', lineHeight: '1.4', marginBottom: '15px' }}>
                    {article.title}
                  </h3>
                  <p className="card-description" style={{ marginBottom: '20px' }}>
                    {article.excerpt}
                  </p>
                  <Link to="#" style={{ color: '#d4af37', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    READ MORE →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '60px' }} className="reveal">
            <button className="btn btn-outline">
              LOAD MORE ARTICLES
            </button>
          </div>
        </div>
      </section>

      {/* Media Resources */}
      <section className="content-section gray">
        <div className="section-container">
          <h2 className="section-title reveal">MEDIA RESOURCES</h2>
          <div className="grid-3">
            <div className="card reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
              </div>
              <h3 className="card-title">PRESS RELEASES</h3>
              <p className="card-description">
                Access our latest press releases and official company announcements.
              </p>
              <button className="btn btn-outline" style={{ marginTop: '20px', width: '100%' }}>
                VIEW RELEASES
              </button>
            </div>
            <div className="card reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
              </div>
              <h3 className="card-title">PHOTO GALLERY</h3>
              <p className="card-description">
                High-resolution images of our operations, facilities, and events.
              </p>
              <button className="btn btn-outline" style={{ marginTop: '20px', width: '100%' }}>
                VIEW GALLERY
              </button>
            </div>
            <div className="card reveal">
              <div className="card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="23 7 16 12 23 17 23 7"></polygon>
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                </svg>
              </div>
              <h3 className="card-title">VIDEO LIBRARY</h3>
              <p className="card-description">
                Watch videos showcasing our operations, technology, and people.
              </p>
              <button className="btn btn-outline" style={{ marginTop: '20px', width: '100%' }}>
                WATCH VIDEOS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="content-section dark">
        <div className="section-container">
          <div className="reveal" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="section-title">MEDIA INQUIRIES</h2>
            <p className="section-subtitle" style={{ marginBottom: '30px' }}>
              For media inquiries, interview requests, or press information
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center', marginBottom: '40px' }}>
              <div style={{ color: '#ccc', fontSize: '1.1rem' }}>
                <strong>Email:</strong> media@universalmetals.com
              </div>
              <div style={{ color: '#ccc', fontSize: '1.1rem' }}>
                <strong>Phone:</strong> +1 (212) 555-0150
              </div>
            </div>
            <button className="btn btn-primary">
              CONTACT MEDIA RELATIONS
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default News
