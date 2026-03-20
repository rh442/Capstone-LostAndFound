import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/public/HomePage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import StudentDashboard from "../pages/student/StudentDashboard";
import StudentLostItemForm from "../pages/student/StudentLostItemForm";
import StudentReportsPage from "../pages/student/StudentReportsPage";
import StudentMessagesPage from "../pages/student/StudentMessagesPage";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AboutPage from "../pages/public/AboutPage";
import ContactPage from "../pages/public/ContactPage";
import PrivacyPage from "../pages/public/PrivacyPage";
import AdminMessagesPage from "../pages/admin/AdminMessagesPage";
import AdminAddItemPage from '../pages/admin/AdminAddItemPage'

function AdminRequestsPage() {
  return <h1 style={{ padding: "40px" }}>Admin Requests Page</h1>;
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/student-report-item" element={<StudentLostItemForm />} />
        <Route path="/student-reports" element={<StudentReportsPage />} />
        <Route path="/student-messages" element={<StudentMessagesPage />} />

        <Route path="/admin-requests" element={<AdminRequestsPage />} />
        <Route path='/admin-dashboard' element={<AdminDashboard/>}/>
        <Route path='/admin-message' element={<AdminMessagesPage/>}/>
        <Route path='/admin-add' element={<AdminAddItemPage/>}/>

        <Route path="/about" element={<AboutPage />}/>
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
    </BrowserRouter>
  );
}