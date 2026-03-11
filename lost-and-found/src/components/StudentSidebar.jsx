import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "./StudentSidebar.css";

export default function StudentSidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const links = [
    { label: "Dashboard", path: "/student-dashboard" },
    { label: "Submit Lost Item", path: "/student-report-item" },
    { label: "My Reports", path: "/student-reports" },
    { label: "Messages", path: "/student-messages" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <aside className="student-sidebar">
      <div>
        <div className="student-sidebar__brand">
            <img src={logo} alt="student-sidebar__logo" className="brand-logo-img" />
            <span className="student-sidebar__text">Lost & Found</span>
        </div>

        <nav className="student-sidebar__nav">
          {links.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`student-sidebar__link ${isActive ? "student-sidebar__link--active" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <button onClick={handleLogout} className="student-sidebar__logout">
        Logout
      </button>
    </aside>
  );
}