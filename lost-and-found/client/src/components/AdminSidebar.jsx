  import { Link, useLocation, useNavigate } from "react-router-dom";
  import logo from "../assets/logo.png";
  import "./AdminSidebar.css";

  export default function AdminSidebar() {
    const location = useLocation();
    const navigate = useNavigate();

    const links = [
      { label: "Dashboard", path: "/admin-dashboard" },
      { label: "Messages", path: "/admin-messages" },
      { label: "Add item", path: "/add-item" },
      { label: "Overview", path: "/student-reports" },
    
    ];

    const handleLogout = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/login");
    };

    return (
      <aside className="admin-sidebar">
        <div>
          <div className="admin-sidebar__brand">
              <img src={logo} alt="admin-sidebar__logo" className="brand-logo-img" />
              <span className="admin-sidebar__text">Lost & Found</span>
          </div>

          <nav className="admin-sidebar__nav">
            {links.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`admin-sidebar__link ${isActive ? "admin-sidebar__link--active" : ""}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <button onClick={handleLogout} className="admin-sidebar__logout">
          Logout
        </button>
      </aside>
    );
  }