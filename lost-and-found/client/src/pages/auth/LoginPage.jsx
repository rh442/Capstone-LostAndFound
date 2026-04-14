import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
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
      navigate("/admin-dashboard");
    } else {
      navigate("/student-dashboard");
    }
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

          <Link to="/register" className="auth-lift-btn">
            <span className="auth-lift-btn__face">Create Account</span>
          </Link>
        </div>
      </header>

      <main className="login-main">
        <div className="login-card">
          <span className="auth-eyebrow">
            {role === "admin" ? "Admin Portal" : "Student Portal"}
          </span>
          <h1 className="login-title">Sign In</h1>

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
              <label className="auth-label">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="auth-input"
              />
            </div>

            <div>
              <label className="auth-label">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="auth-input"
              />
            </div>

            <button type="submit" className="auth-lift-btn auth-lift-btn--full">
              <span className="auth-lift-btn__face">Sign In</span>
            </button>

            <p className="auth-small-text">Forgot your password?</p>
            <p className="auth-small-text">
              Don&apos;t have an account?{" "}
              <Link to="/register" className="auth-text-link">
                Register <span aria-hidden="true">→</span>
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
