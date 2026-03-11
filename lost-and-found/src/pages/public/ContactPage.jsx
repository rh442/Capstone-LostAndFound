import { Link } from "react-router-dom";
import "./ContactPage.css";
import logo from "../../assets/logo.png";

export default function ContactPage() {
  return (
    <div className="contact-page">
      <header className="contact-header">
        <Link to="/" className="brand">
          <img src={logo} alt="Lost & Found Logo" className="brand-logo-img" />
          <span className="brand-text">Lost & Found</span>
        </Link>

        <div className="top-nav">
          <Link to="/" className="top-nav-link">Home</Link>
          <Link to="/login" className="top-nav-link">Login</Link>
          <Link to="/register" className="top-nav-link">Register</Link>
        </div>
      </header>

      <main className="contact-main">
        <section className="contact-hero">
          <div className="contact-badge">Need Assistance?</div>
          <h1 className="contact-title">Contact Lost &amp; Found</h1>
          <p className="contact-subtitle">
            Reach out if you need help with a lost item report, account access,
            or the verification process.
          </p>
        </section>

        <section className="contact-grid">
          <div className="contact-card">
            <h2>Contact Information</h2>

            <div className="contact-item">
              <span className="contact-label">Email</span>
              <p>lostandfound@hunter.cuny.edu</p>
            </div>

            <div className="contact-item">
              <span className="contact-label">Office</span>
              <p>Hunter College Security Office</p>
            </div>

            <div className="contact-item">
              <span className="contact-label">Hours</span>
              <p>Monday – Friday</p>
              <p>9:00 AM – 5:00 PM</p>
            </div>
          </div>

          <div className="contact-card">
            <h2>When to Contact Us</h2>
            <ul className="contact-list">
              <li>You need help submitting a lost item report.</li>
              <li>You believe an administrator may have matched your item.</li>
              <li>You have questions about account access or messaging.</li>
              <li>You need support with the item verification process.</li>
            </ul>
          </div>
        </section>

        <section className="contact-card contact-card--full">
          <h2>Support Note</h2>
          <p>
            To protect privacy and prevent fraudulent claims, detailed found-item
            information is not publicly shared. Administrators will contact you
            if additional information is needed to verify ownership.
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer-links">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy</Link>
        </div>
        <span>© 2026 Lost & Found</span>
      </footer>
    </div>
  );
}