import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./RegisterPage.css";

export default function RegisterPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Please fill in all fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    alert("Registered successfully.");
    navigate("/login");
  };

  return (
    <div className="auth-page">
      <header className="auth-header-bar">
        <div className="auth-header-inner">
          <Link to="/" className="auth-brand">Lost &amp; Found Portal</Link>

          <nav className="auth-nav">
            <Link to="/" className="auth-nav-link">Home</Link>
            <Link to="/about" className="auth-nav-link">About</Link>
            <Link to="/contact" className="auth-nav-link">Contact</Link>
            <Link to="/privacy" className="auth-nav-link">Privacy</Link>
          </nav>

          <Link to="/login" className="auth-lift-btn">
            <span className="auth-lift-btn__face">Sign In</span>
          </Link>
        </div>
      </header>

      <main className="register-main">
        <div className="register-card">
          <span className="auth-eyebrow">New Account</span>
          <h1 className="register-title">Create Account</h1>

          <form onSubmit={handleRegister} className="register-form">
            <div>
              <label className="auth-label">Full Name</label>
              <input
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                className="auth-input"
              />
            </div>

            <div>
              <label className="auth-label">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="auth-input"
              />
            </div>

            <div>
              <label className="auth-label">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                className="auth-input"
              />
            </div>

            <div>
              <label className="auth-label">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="auth-input"
              />
            </div>

            <button type="submit" className="auth-lift-btn auth-lift-btn--full">
              <span className="auth-lift-btn__face">Create Account</span>
            </button>

            <p className="auth-small-text">
              Already have an account?{" "}
              <Link to="/login" className="auth-text-link">
                Sign In <span aria-hidden="true">→</span>
              </Link>
            </p>
          </form>
        </div>
      </main>

      <footer className="site-footer">
        <div className="site-footer-links">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy</Link>
        </div>
        <span>© 2026 Lost &amp; Found</span>
      </footer>
    </div>
  );
}
