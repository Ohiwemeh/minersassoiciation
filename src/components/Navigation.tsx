import { Link } from 'react-router'

const Navigation = () => {
  return (
    <nav className="bg-blue-900 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Miners Association of Nigeria
        </Link>
        <div className="space-x-6">
          <Link to="/" className="hover:text-blue-200">Home</Link>
          <Link to="/about" className="hover:text-blue-200">About</Link>
          <Link to="/operations" className="hover:text-blue-200">Operations</Link>
          <Link to="/sustainability" className="hover:text-blue-200">Sustainability</Link>
          <Link to="/services" className="hover:text-blue-200">Services</Link>
          <Link to="/investors" className="hover:text-blue-200">Investors</Link>
          <Link to="/news" className="hover:text-blue-200">News</Link>
          <Link to="/careers" className="hover:text-blue-200">Careers</Link>
          <Link to="/contact" className="hover:text-blue-200">Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
