import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./LoginPage.css";

export default function LoginPage() {
  const navigate = useNavigate();
  const [role, setRole] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    if (role === "admin") {
      navigate("/admin-requests");
    } else {
      navigate("/student-dashboard");
    }
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

      <main className="login-main">
        <div className="login-card card-surface">
          <h1 className="login-title">LOGIN</h1>

          <div className="login-role-switch">
            <button
              type="button"
              onClick={() => setRole("student")}
              className={role === "student" ? "login-role-btn active" : "login-role-btn"}
            >
              Student
            </button>

            <button
              type="button"
              onClick={() => setRole("admin")}
              className={role === "admin" ? "login-role-btn active" : "login-role-btn"}
            >
              Admin
            </button>
          </div>

          <form onSubmit={handleLogin} className="login-form">
            <div>
              <label className="login-label">EMAIL</label>
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-input"
              />
            </div>

            <div>
              <label className="login-label">PASSWORD</label>
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-input"
              />
            </div>

            <button type="submit" className="primary-btn login-submit">LOGIN</button>

            <p className="login-small-text">Forgot your password?</p>
            <p className="login-small-text">
              Don’t have an account? <Link to="/register" className="login-text-link">Register</Link>
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