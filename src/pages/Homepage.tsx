import { Link } from 'react-router'

const Homepage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center">
          <div className="flex-1 lg:pr-12">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Miners Association of Nigeria
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100">
              Leading the Future of Sustainable Mining in Nigeria
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/about" 
                className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:-translate-y-1 hover:shadow-lg"
              >
                Learn More
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-full font-semibold transition-all transform hover:-translate-y-1"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="flex-1 mt-12 lg:mt-0">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8">
              <svg className="w-full h-64" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="300" fill="#f0f4f8" fillOpacity="0.1"/>
                <path d="M200 150L100 200L100 100L200 50L300 100L300 200L200 150Z" fill="#60a5fa" opacity="0.3"/>
                <path d="M200 100L150 125L150 75L200 50L250 75L250 125L200 100Z" fill="#1e40af" opacity="0.5"/>
                <circle cx="200" cy="150" r="30" fill="#60a5fa"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-gray-800">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-2">
              <div className="text-4xl mb-6">⛏️</div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Excellence in Mining</h3>
              <p className="text-gray-600">Setting industry standards for mining operations and safety protocols across Nigeria.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-2">
              <div className="text-4xl mb-6">🌱</div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Sustainability</h3>
              <p className="text-gray-600">Committed to environmentally responsible mining practices that protect our planet.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-2">
              <div className="text-4xl mb-6">🤝</div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Community Partnership</h3>
              <p className="text-gray-600">Building strong relationships with local communities and stakeholders.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-2">
              <div className="text-4xl mb-6">🔬</div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Innovation</h3>
              <p className="text-gray-600">Embracing cutting-edge technology and innovation in mining processes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl lg:text-5xl font-bold mb-2">500+</h3>
              <p className="text-blue-200">Member Companies</p>
            </div>
            <div>
              <h3 className="text-4xl lg:text-5xl font-bold mb-2">50+</h3>
              <p className="text-blue-200">Years of Excellence</p>
            </div>
            <div>
              <h3 className="text-4xl lg:text-5xl font-bold mb-2">1M+</h3>
              <p className="text-blue-200">Tons Mined Annually</p>
            </div>
            <div>
              <h3 className="text-4xl lg:text-5xl font-bold mb-2">10,000+</h3>
              <p className="text-blue-200">Jobs Created</p>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-gray-800">Latest News & Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-blue-600 text-sm font-semibold mb-2">March 15, 2025</div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">New Mining Regulations Announced</h3>
              <p className="text-gray-600 mb-4">The Federal Government has announced new regulations to improve safety and environmental standards...</p>
              <Link to="/news" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                Read More →
              </Link>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-blue-600 text-sm font-semibold mb-2">March 10, 2025</div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Sustainable Mining Initiative Launch</h3>
              <p className="text-gray-600 mb-4">Our association launches a new initiative to promote sustainable mining practices across Nigeria...</p>
              <Link to="/news" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                Read More →
              </Link>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-blue-600 text-sm font-semibold mb-2">March 5, 2025</div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Annual Mining Conference 2025</h3>
              <p className="text-gray-600 mb-4">Registration is now open for our annual conference featuring industry leaders and experts...</p>
              <Link to="/news" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                Read More →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Homepage
