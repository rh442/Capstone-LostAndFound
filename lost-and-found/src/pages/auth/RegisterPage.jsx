import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
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
      <header className="auth-header">
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

      <main className="register-main">
        <div className="register-card card-surface">
          <h1 className="register-title">REGISTER</h1>

          <form onSubmit={handleRegister} className="register-form">
            <div>
              <label className="register-label">FULL NAME</label>
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="text-input"
              />
            </div>

            <div>
              <label className="register-label">EMAIL</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="text-input"
              />
            </div>

            <div>
              <label className="register-label">PASSWORD</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="text-input"
              />
            </div>

            <div>
              <label className="register-label">CONFIRM PASSWORD</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="text-input"
              />
            </div>

            <button type="submit" className="primary-btn register-submit">REGISTER</button>

            <p className="register-small-text">
              Already have an account? <Link to="/login" className="register-text-link">Login</Link>
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
        <span>© 2026 Lost & Found</span>
      </footer>
    </div>
  );
}