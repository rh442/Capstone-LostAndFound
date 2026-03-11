import StudentSidebar from "../../components/StudentSidebar";
import "./StudentDashboard.css";

export default function StudentDashboard() {
  const reports = [
    { id: 1, item: "Black Backpack", date: "Mar 10, 2026", status: "Pending" },
    { id: 2, item: "Student ID", date: "Mar 09, 2026", status: "Matched" },
    { id: 3, item: "Water Bottle", date: "Mar 08, 2026", status: "Resolved" },
    { id: 4, item: "Laptop Charger", date: "Mar 07, 2026", status: "Pending" },
  ];

  const statusClass = (status) => {
    if (status === "Pending") return "status-badge status-pending";
    if (status === "Matched") return "status-badge status-matched";
    return "status-badge status-resolved";
  };

  return (
    <div className="student-layout">
      <StudentSidebar />

      <main className="student-dashboard">
        <div className="student-dashboard__header">
          <h1 className="page-title">Welcome, [Name]</h1>
          <p className="page-subtitle">Track your lost item requests and updates.</p>
        </div>

        <div className="student-dashboard__stats">
          <div className="student-dashboard__stat card-surface">
            <div className="student-dashboard__stat-label">Pending</div>
            <div className="student-dashboard__stat-value">2</div>
          </div>

          <div className="student-dashboard__stat card-surface">
            <div className="student-dashboard__stat-label">Matched</div>
            <div className="student-dashboard__stat-value">1</div>
          </div>

          <div className="student-dashboard__stat card-surface">
            <div className="student-dashboard__stat-label">Resolved</div>
            <div className="student-dashboard__stat-value">1</div>
          </div>
        </div>

        <div className="student-dashboard__table card-surface">
          <div className="student-dashboard__table-header">
            <h2>Recent Reports</h2>
          </div>

          <table className="section-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Date</th>
                <th>Status</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report.id}>
                  <td>{report.item}</td>
                  <td>{report.date}</td>
                  <td><span className={statusClass(report.status)}>{report.status}</span></td>
                  <td><button className="primary-btn student-dashboard__view-btn">View</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}