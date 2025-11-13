import { Link, useLocation } from 'react-router'

const Navigation = () => {
  const location = useLocation()
  
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/operations', label: 'Operations & Projects' },
    { path: '/sustainability', label: 'Sustainability & Responsibility' },
    { path: '/services', label: 'Services' },
    { path: '/investors', label: 'Investors/Shareholders' },
    { path: '/news', label: 'News & Media' },
    { path: '/careers', label: 'Careers' },
    { path: '/contact', label: 'Contact' }
  ]

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-blue-700 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-white font-bold text-xl hover:text-blue-200 transition-colors">
              Miners Association of Nigeria
            </Link>
          </div>
          
          <div className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    className={`text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      location.pathname === item.path ? 'bg-blue-800 text-blue-100' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:hidden">
            <button className="text-white hover:text-blue-200 focus:outline-none focus:text-blue-200">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
