import { Link } from "react-router-dom";
import "./HomePage.css";
import logo from "../../assets/logo.png";

export default function HomePage() {
  const steps = [
    {
      title: "Submit a Report",
      text: "Describe your lost item, where you last saw it, and any identifying details.",
    },
    {
      title: "Admin Review",
      text: "Administrators review secure found-item records to look for a possible match.",
    },
    {
      title: "Verify & Recover",
      text: "If a match exists, you’ll be contacted to confirm ownership before pickup.",
    },
  ];

  const features = [
    {
      title: "Private Matching",
      text: "Item details stay protected so ownership can be verified securely.",
    },
    {
      title: "Admin Verification",
      text: "Returns are handled through a review process instead of public claiming.",
    },
    {
      title: "Student Messaging",
      text: "Students can communicate with admins during the matching process.",
    },
  ];

  return (
    <div className="home-page">
      <header className="home-header">
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

      <section className="home-hero">
        <div className="home-hero__badge">Hunter College Service</div>

        <h1 className="home-hero__title">
          Lost &amp; Found at Hunter College
        </h1>

        <p className="home-hero__subtitle">
          A secure system for reporting lost items and recovering them through
          administrator verification.
        </p>

        <div className="home-hero__actions">
          <Link to="/register" className="home-hero__button primary">
            Get Started
          </Link>
          <Link to="/login" className="home-hero__button secondary">
            Login
          </Link>
        </div>
      </section>

      <section className="home-section">
        <div className="home-section__heading">
          <h2>How It Works</h2>
          <p>
            Designed to protect item details while helping students recover
            belongings more efficiently.
          </p>
        </div>

        <div className="home-cards-grid">
          {steps.map((step, index) => (
            <div key={step.title} className="home-card">
              <div className="home-card__number">0{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="home-section home-section--alt">
        <div className="home-section__heading">
          <h2>Why Use This System</h2>
          <p>
            Built for a university environment where privacy, verification, and
            clear communication matter.
          </p>
        </div>

        <div className="home-cards-grid">
          {features.map((feature) => (
            <div key={feature.title} className="home-card">
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="home-cta">
        <div className="home-cta__content">
          <h2>Need help recovering an item?</h2>
          <p>
            Create an account or log in to submit a lost item report and track
            updates from administrators.
          </p>
        </div>

        <div className="home-cta__actions">
          <Link to="/register" className="home-hero__button primary">
            Register
          </Link>
          <Link to="/login" className="home-hero__button secondary">
            Login
          </Link>
        </div>
      </section>

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