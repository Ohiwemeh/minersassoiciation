const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">About Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Leading Nigeria's Mining Industry into a Sustainable Future
          </p>
        </section>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 pb-2 inline-block">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              To promote and advance the mining industry in Nigeria through advocacy, education, and the establishment of best practices that ensure sustainable development, environmental responsibility, and economic growth for all stakeholders.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 pb-2 inline-block">
              Our Vision
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              To be the leading voice and authority in Nigeria's mining sector, driving innovation, sustainability, and excellence while positioning Nigeria as a global leader in responsible mining practices.
            </p>
          </div>
        </div>

        {/* History */}
        <div className="bg-white p-8 rounded-2xl shadow-lg mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 pb-2 inline-block">
            Our History
          </h2>
          <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
            <p>
              Founded in 1975, the Miners Association of Nigeria has been at the forefront of developing Nigeria's mining industry. Over the past five decades, we have grown from a small group of mining pioneers to a comprehensive association representing over 500 mining companies across the country.
            </p>
            <p>
              Our journey has been marked by significant milestones including the establishment of industry standards, advocacy for favorable policies, and the development of training programs that have elevated the professionalism of Nigeria's mining sector.
            </p>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 border-b-4 border-blue-500 pb-2 inline-block">
            Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl text-gray-500">
                👤
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Dr. Adebayo Johnson</h3>
              <p className="text-blue-600 font-semibold mb-3">President</p>
              <p className="text-gray-600 text-sm">With over 30 years of experience in mining engineering and industry leadership.</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl text-gray-500">
                👤
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Engr. Fatima Mohammed</h3>
              <p className="text-blue-600 font-semibold mb-3">Vice President</p>
              <p className="text-gray-600 text-sm">Expert in sustainable mining practices and environmental management.</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl text-gray-500">
                👤
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Mr. Chukwu Okafor</h3>
              <p className="text-blue-600 font-semibold mb-3">Secretary General</p>
              <p className="text-gray-600 text-sm">Specializing in mining policy development and regulatory compliance.</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl text-gray-500">
                👤
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Dr. Ngozi Adekunle</h3>
              <p className="text-blue-600 font-semibold mb-3">Treasurer</p>
              <p className="text-gray-600 text-sm">Financial expert with extensive experience in mining investment and economics.</p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 border-b-4 border-blue-500 pb-2 inline-block">
            Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Excellence</h3>
              <p className="text-gray-600">We strive for the highest standards in all our operations and initiatives.</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Integrity</h3>
              <p className="text-gray-600">We conduct our business with transparency, honesty, and ethical principles.</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Sustainability</h3>
              <p className="text-gray-600">We are committed to environmentally and socially responsible mining practices.</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Innovation</h3>
              <p className="text-gray-600">We embrace new technologies and approaches to advance the mining sector.</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Collaboration</h3>
              <p className="text-gray-600">We work together with stakeholders to achieve common goals.</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Safety</h3>
              <p className="text-gray-600">We prioritize the health and safety of our workers and communities.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
