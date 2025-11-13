const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get in touch with the Miners Association of Nigeria. We're here to help and answer any questions you may have.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="membership">Membership Inquiry</option>
                  <option value="investment">Investment Opportunities</option>
                  <option value="partnership">Partnership</option>
                  <option value="media">Media Inquiry</option>
                  <option value="general">General Question</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Office Information */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Our Office</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="text-blue-600 text-xl">📍</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Address</h4>
                    <p className="text-gray-600">123 Mining Avenue<br />Central Business District<br />Abuja, Nigeria</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-blue-600 text-xl">📞</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <p className="text-gray-600">+234 800 000 0000</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-blue-600 text-xl">📧</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">info@minersassociation.ng</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-blue-600 text-xl">🕒</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Office Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM<br />Saturday: 9:00 AM - 2:00 PM<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Department Contacts */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Department Contacts</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800">Membership Services</h4>
                  <p className="text-gray-600">membership@minersassociation.ng</p>
                  <p className="text-gray-600">+234 800 000 0001</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800">Investment Relations</h4>
                  <p className="text-gray-600">investors@minersassociation.ng</p>
                  <p className="text-gray-600">+234 800 000 0002</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800">Media & Communications</h4>
                  <p className="text-gray-600">media@minersassociation.ng</p>
                  <p className="text-gray-600">+234 800 000 0003</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800">Technical Support</h4>
                  <p className="text-gray-600">technical@minersassociation.ng</p>
                  <p className="text-gray-600">+234 800 000 0004</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors">
                  <span className="sr-only">Facebook</span>
                  📘
                </a>
                <a href="#" className="bg-blue-400 hover:bg-blue-500 text-white p-3 rounded-lg transition-colors">
                  <span className="sr-only">Twitter</span>
                  🐦
                </a>
                <a href="#" className="bg-blue-800 hover:bg-blue-900 text-white p-3 rounded-lg transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  💼
                </a>
                <a href="#" className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-lg transition-colors">
                  <span className="sr-only">YouTube</span>
                  📺
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Find Us</h3>
            <div className="bg-gray-200 h-96 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-gray-600">Interactive map will be displayed here</p>
                <p className="text-sm text-gray-500">123 Mining Avenue, Central Business District, Abuja, Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
