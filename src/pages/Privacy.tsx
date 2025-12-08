import { useScrollReveal } from '../hooks/useScrollReveal'
import '../pages/SharedStyles.css'

const Privacy = () => {
  useScrollReveal()

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section 
        className="page-hero" 
        style={{ backgroundImage: 'url(/min%20(5).jpg)' }}
      >
        <div className="page-hero-content">
          <h1 className="page-hero-title">PRIVACY POLICY</h1>
          <p className="page-hero-subtitle">
            Your privacy is important to us
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="content-section">
        <div className="section-container">
          <div className="text-content reveal">
            <p className="last-updated">Last Updated: December 8, 2025</p>
            
            <h2>Introduction</h2>
            <p>
              Miners Association ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, attend our events, or engage with our services.
            </p>

            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul>
              <li>Register for events, exhibitions, or conferences</li>
              <li>Subscribe to our newsletters or publications</li>
              <li>Fill out contact forms or request information</li>
              <li>Create an account on our platforms</li>
              <li>Participate in surveys or feedback forms</li>
            </ul>
            <p>This information may include:</p>
            <ul>
              <li>Name and contact details (email, phone number, address)</li>
              <li>Company name and job title</li>
              <li>Professional interests and industry sector</li>
              <li>Payment information (processed securely through third-party providers)</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect certain information about your device, including:</p>
            <ul>
              <li>IP address and browser type</li>
              <li>Operating system and device information</li>
              <li>Pages visited and time spent on our site</li>
              <li>Referring website addresses</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide and manage our events, services, and platforms</li>
              <li>Process registrations and payments</li>
              <li>Send you relevant industry news, updates, and marketing communications</li>
              <li>Improve our website, events, and services</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Analyze usage patterns and trends</li>
              <li>Comply with legal obligations and protect our rights</li>
              <li>Facilitate networking opportunities at our events</li>
            </ul>

            <h2>Information Sharing and Disclosure</h2>
            <p>We may share your information with:</p>
            <ul>
              <li><strong>Event Partners and Sponsors:</strong> When you register for events, your information may be shared with event sponsors and exhibitors for networking purposes</li>
              <li><strong>Service Providers:</strong> Third-party vendors who assist us with website hosting, payment processing, email delivery, and analytics</li>
              <li><strong>Business Transfers:</strong> In connection with any merger, sale, or acquisition of our business</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
            </ul>
            <p>We do not sell your personal information to third parties.</p>

            <h2>Your Rights and Choices</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access, update, or delete your personal information</li>
              <li>Opt-out of marketing communications at any time</li>
              <li>Disable cookies through your browser settings</li>
              <li>Request a copy of the information we hold about you</li>
              <li>Object to processing of your personal information</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2>International Data Transfers</h2>
            <p>
              As Miners Association operates across Africa and internationally, your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
            </p>

            <h2>Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law. Event registration data is typically retained for 7 years for business and legal purposes.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>

            <h2>Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar technologies to enhance your experience on our website. You can control cookie preferences through your browser settings. Note that disabling cookies may affect the functionality of our website.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="contact-box">
              <p><strong>Miners Association</strong></p>
              <p>Email: privacy@minersassociation.org</p>
              <p>Address: Cape Town, South Africa</p>
              <p>Phone: +27 (0) 21 XXX XXXX</p>
            </div>

            <h2>Consent</h2>
            <p>
              By using our website, registering for our events, or engaging with our services, you consent to the collection and use of your information as described in this Privacy Policy.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Privacy
