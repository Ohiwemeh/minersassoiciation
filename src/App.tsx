import './App.css'

function App() {
  return (
    <div className="construction-container">
      <div className="construction-content">
        <div className="construction-icon">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h1 className="construction-title">Site Under Construction</h1>
        <p className="construction-message">
          We're working hard to bring you something amazing. Our website is currently being built and will be launching soon.
        </p>
        <div className="construction-details">
          <p>In the meantime, feel free to:</p>
          <ul>
            <li>Check back later for updates</li>
            <li>Contact us for more information</li>
            <li>Follow our progress on social media</li>
          </ul>
        </div>
        <div className="construction-footer">
          <p>© 2025 Miners Association. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default App
