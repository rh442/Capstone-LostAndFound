import { Link } from "react-router-dom";
import "./AboutPage.css";
import logo from "../../assets/logo.png";

export default function AboutPage() {
  return (
    <div className="info-page">
      <header className="info-header">
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

      <main className="info-main">
        <section className="info-hero">
          <div className="info-badge">About the System</div>
          <h1 className="info-title">About Lost &amp; Found</h1>
          <p className="info-subtitle">
            A secure campus platform designed to help students report lost items
            and recover them through administrator verification.
          </p>
        </section>

        <section className="info-content-card">
          <h2>What This System Does</h2>
          <p>
            Lost &amp; Found is a secure platform that helps students report lost
            items on campus and communicate with administrators during the
            recovery process.
          </p>
          <p>
            Students can submit reports describing lost items, including details
            such as category, date lost, and location. Administrators manage a
            private catalog of found items and review reports to look for
            possible matches.
          </p>
          <p>
            To protect privacy and reduce fraudulent claims, detailed found-item
            descriptions and images are visible only to administrators until
            ownership is verified.
          </p>
        </section>

        <section className="info-grid">
          <div className="info-box">
            <h3>Secure Recovery</h3>
            <p>
              Item details are protected so returns are handled safely and
              responsibly.
            </p>
          </div>

          <div className="info-box">
            <h3>Student Reporting</h3>
            <p>
              Students can submit item reports quickly and track updates from
              administrators.
            </p>
          </div>

          <div className="info-box">
            <h3>Verification Process</h3>
            <p>
              Matches are reviewed carefully before an item is returned to its
              owner.
            </p>
          </div>
        </section>

        <section className="info-content-card">
          <h2>Project Information</h2>
          <p>
            This system is being developed as a capstone project for Hunter
            College to improve how lost items are reported, reviewed, and
            recovered in a campus environment.
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