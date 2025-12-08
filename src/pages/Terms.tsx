import { useScrollReveal } from '../hooks/useScrollReveal'
import '../pages/SharedStyles.css'

const Terms = () => {
  useScrollReveal()

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section 
        className="page-hero" 
        style={{ backgroundImage: 'url(/min%20(5).jpg)' }}
      >
        <div className="page-hero-content">
          <h1 className="page-hero-title">TERMS OF SERVICE</h1>
          <p className="page-hero-subtitle">
            Please read these terms carefully
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="content-section">
        <div className="section-container">
          <div className="text-content reveal">
            <p className="last-updated">Last Updated: December 8, 2025</p>
            
            <h2>1. Acceptance of Terms</h2>
            <p>
              Welcome to Miners Association. By accessing or using our website, registering for our events, or engaging with our services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services.
            </p>

            <h2>2. Description of Services</h2>
            <p>
              Miners Association provides business connection and influence platforms across Africa, including:
            </p>
            <ul>
              <li>Industry events, exhibitions, and conferences</li>
              <li>Digital media and news platforms</li>
              <li>Networking and business development opportunities</li>
              <li>Industry insights and research</li>
              <li>Marketing and sponsorship services</li>
            </ul>

            <h2>3. User Accounts and Registration</h2>
            <h3>3.1 Account Creation</h3>
            <p>
              To access certain services, you may be required to create an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate and current.
            </p>
            
            <h3>3.2 Account Security</h3>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
            </p>

            <h3>3.3 Account Termination</h3>
            <p>
              We reserve the right to suspend or terminate your account if you violate these Terms or engage in fraudulent, abusive, or illegal activities.
            </p>

            <h2>4. Event Registration and Attendance</h2>
            <h3>4.1 Registration</h3>
            <p>
              Event registration is subject to availability and acceptance by Miners Association. We reserve the right to refuse registration to any individual or organization.
            </p>

            <h3>4.2 Payment Terms</h3>
            <p>
              Payment for events must be made in accordance with the specified payment terms. All fees are non-refundable unless otherwise stated in the event-specific terms or required by law.
            </p>

            <h3>4.3 Cancellation and Refunds</h3>
            <ul>
              <li>Cancellations made 30+ days before the event: 75% refund</li>
              <li>Cancellations made 15-29 days before the event: 50% refund</li>
              <li>Cancellations made less than 15 days before the event: No refund</li>
              <li>Miners Association reserves the right to cancel or postpone events due to circumstances beyond our control</li>
            </ul>

            <h3>4.4 Code of Conduct</h3>
            <p>
              Event attendees are expected to conduct themselves professionally and respectfully. Miners Association reserves the right to remove any attendee who engages in disruptive, offensive, or inappropriate behavior.
            </p>

            <h2>5. Intellectual Property Rights</h2>
            <h3>5.1 Miners Association Content</h3>
            <p>
              All content on our website and platforms, including text, graphics, logos, images, videos, and software, is the property of Miners Association or its licensors and is protected by copyright, trademark, and other intellectual property laws.
            </p>

            <h3>5.2 User Content</h3>
            <p>
              By submitting content to our platforms (including comments, reviews, or materials), you grant Miners Association a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and distribute such content in connection with our services.
            </p>

            <h3>5.3 Prohibited Uses</h3>
            <p>You may not:</p>
            <ul>
              <li>Copy, reproduce, or distribute our content without permission</li>
              <li>Use our trademarks or branding without authorization</li>
              <li>Reverse engineer or attempt to extract source code from our platforms</li>
              <li>Use automated systems to access our services without consent</li>
            </ul>

            <h2>6. Privacy and Data Protection</h2>
            <p>
              Your use of our services is also governed by our Privacy Policy. By using our services, you consent to the collection and use of your information as described in our Privacy Policy.
            </p>

            <h2>7. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Miners Association shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities, arising from:
            </p>
            <ul>
              <li>Your use or inability to use our services</li>
              <li>Event cancellations or changes</li>
              <li>Errors or omissions in our content</li>
              <li>Unauthorized access to your account or data</li>
              <li>Actions of third parties at our events</li>
            </ul>
            <p>
              Our total liability for any claim arising from these Terms or our services shall not exceed the amount you paid to Miners Association in the 12 months preceding the claim.
            </p>

            <h2>8. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Miners Association, its affiliates, officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
            </p>
            <ul>
              <li>Your violation of these Terms</li>
              <li>Your use of our services</li>
              <li>Your violation of any rights of third parties</li>
              <li>Your conduct at our events</li>
            </ul>

            <h2>9. Third-Party Links and Services</h2>
            <p>
              Our website and services may contain links to third-party websites or services. Miners Association is not responsible for the content, privacy practices, or terms of service of these third parties. Your use of third-party services is at your own risk.
            </p>

            <h2>10. Modifications to Services and Terms</h2>
            <p>
              We reserve the right to modify, suspend, or discontinue our services at any time without notice. We may also update these Terms from time to time. Continued use of our services after changes constitutes acceptance of the modified Terms.
            </p>

            <h2>11. Governing Law and Dispute Resolution</h2>
            <h3>11.1 Governing Law</h3>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of South Africa, without regard to its conflict of law provisions.
            </p>

            <h3>11.2 Dispute Resolution</h3>
            <p>
              Any disputes arising from these Terms or our services shall be resolved through good faith negotiations. If negotiations fail, disputes shall be submitted to binding arbitration in Cape Town, South Africa, in accordance with the rules of the Arbitration Foundation of Southern Africa (AFSA).
            </p>

            <h2>12. Force Majeure</h2>
            <p>
              Miners Association shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including natural disasters, war, terrorism, pandemics, government actions, or technical failures.
            </p>

            <h2>13. Severability</h2>
            <p>
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
            </p>

            <h2>14. Entire Agreement</h2>
            <p>
              These Terms, together with our Privacy Policy and any event-specific terms, constitute the entire agreement between you and Miners Association regarding our services.
            </p>

            <h2>15. Contact Information</h2>
            <p>
              For questions or concerns about these Terms of Service, please contact us:
            </p>
            <div className="contact-box">
              <p><strong>Miners Association</strong></p>
              <p>Email: legal@minersassociation.org</p>
              <p>Address: Cape Town, South Africa</p>
              <p>Phone: +27 (0) 21 XXX XXXX</p>
            </div>

            <h2>16. Acknowledgment</h2>
            <p>
              By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Terms
