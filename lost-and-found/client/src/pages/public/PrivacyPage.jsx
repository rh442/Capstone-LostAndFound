import { Link } from "react-router-dom";
import "./PrivacyPage.css";
import logo from "../../assets/logo.png";

export default function PrivacyPage() {
  return (
    <div className="privacy-page">
      <header className="privacy-header">
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

      <main className="privacy-main">
        <section className="privacy-hero">
          <div className="privacy-badge">Privacy & Protection</div>
          <h1 className="privacy-title">Privacy Policy</h1>
          <p className="privacy-subtitle">
            Our system is designed to protect student information and reduce
            fraudulent item claims.
          </p>
        </section>

        <section className="privacy-card">
          <h2>How Information Is Used</h2>
          <p>
            The Lost &amp; Found system stores account and report information to
            help administrators review lost item submissions and communicate with
            students during the recovery process.
          </p>
          <p>
            Information such as item descriptions, dates, locations, and
            messages is used only for recovery, verification, and support
            related to lost items.
          </p>
        </section>

        <section className="privacy-card">
          <h2>Restricted Access to Found Items</h2>
          <p>
            To prevent false claims, detailed found-item records, descriptions,
            and images are visible only to administrators. Students may receive
            updates on report status, but sensitive matching details remain
            protected until ownership is verified.
          </p>
        </section>

        <section className="privacy-card">
          <h2>Student Communication</h2>
          <p>
            Students may use the messaging system to communicate with
            administrators when a report is being reviewed or a possible match is
            found. These messages are used only for item recovery support.
          </p>
        </section>

        <section className="privacy-card">
          <h2>Security Commitment</h2>
          <p>
            The system is intended to support secure authentication, private
            record review, and administrator-led verification before items are
            returned. This approach helps maintain privacy while improving trust
            in the campus lost-and-found process.
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