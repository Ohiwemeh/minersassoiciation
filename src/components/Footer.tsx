import { Link } from 'react-router'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-blue-400 text-xl font-bold mb-4">Miners Association of Nigeria</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Promoting excellence and sustainable mining practices in Nigeria.
            </p>
            <div className="space-y-2 text-gray-300">
              <p>123 Mining Avenue, Abuja, Nigeria</p>
              <p>Phone: +234 800 000 0000</p>
              <p>Email: info@minersassociation.ng</p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-blue-400 text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/operations" className="text-gray-300 hover:text-blue-400 transition-colors">Operations & Projects</Link></li>
              <li><Link to="/sustainability" className="text-gray-300 hover:text-blue-400 transition-colors">Sustainability</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-blue-400 transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="text-blue-400 text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/news" className="text-gray-300 hover:text-blue-400 transition-colors">News & Media</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-blue-400 transition-colors">FAQ</Link></li>
              <li><Link to="/downloads" className="text-gray-300 hover:text-blue-400 transition-colors">Downloads</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-blue-400 transition-colors">Gallery</Link></li>
              <li><Link to="/technical" className="text-gray-300 hover:text-blue-400 transition-colors">Technical Information</Link></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="text-blue-400 text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-300 hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-blue-400 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/cookies" className="text-gray-300 hover:text-blue-400 transition-colors">Cookie Policy</Link></li>
              <li><Link to="/accessibility" className="text-gray-300 hover:text-blue-400 transition-colors">Accessibility</Link></li>
              <li><Link to="/anti-corruption" className="text-gray-300 hover:text-blue-400 transition-colors">Anti-Corruption</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2025 Miners Association of Nigeria. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
