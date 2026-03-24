import { Navigate } from "react-router-dom";
import { useAuth, getRole } from "../context/AuthContext";

export default function ProtectedRoute({ children, requireAdmin = false }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <div style={{ padding: "40px" }}>Loading…</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const role = getRole(user);
  if (requireAdmin && role !== "admin") {
    return <Navigate to="/student-dashboard" replace />;
  }

  return children;
}