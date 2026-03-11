import { useMemo, useState } from "react";
import StudentSidebar from "../../components/StudentSidebar";
import "./StudentReportsPage.css";

export default function StudentReportsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const reports = [
    { id: 1, item: "Black Backpack", category: "Backpack / Bag", dateSubmitted: "Mar 10, 2026", status: "Pending", action: "View" },
    { id: 2, item: "Student ID", category: "ID Card", dateSubmitted: "Mar 09, 2026", status: "Matched", action: "Chat" },
    { id: 3, item: "Water Bottle", category: "Accessories", dateSubmitted: "Mar 08, 2026", status: "Resolved", action: "View" },
    { id: 4, item: "Laptop Charger", category: "Electronic", dateSubmitted: "Mar 07, 2026", status: "Matched", action: "Chat" },
    { id: 5, item: "Keys", category: "Keys", dateSubmitted: "Mar 06, 2026", status: "Pending", action: "View" },
  ];

  const filteredReports = useMemo(() => {
    return reports.filter((report) => {
      const matchesFilter = activeFilter === "All" ? true : report.status === activeFilter;
      const q = searchTerm.toLowerCase();
      const matchesSearch =
        report.item.toLowerCase().includes(q) ||
        report.category.toLowerCase().includes(q) ||
        report.dateSubmitted.toLowerCase().includes(q) ||
        report.status.toLowerCase().includes(q);
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchTerm]);

  const statusClass = (status) => {
    if (status === "Pending") return "status-badge status-pending";
    if (status === "Matched") return "status-badge status-matched";
    return "status-badge status-resolved";
  };

  return (
    <div className="student-layout">
      <StudentSidebar />

      <main className="student-reports">
        <div className="student-reports__header">
          <h1 className="page-title">My Reports</h1>
          <p className="page-subtitle">Review the status of your lost item submissions.</p>
        </div>

        <div className="student-reports__topbar">
          <div className="student-reports__filters">
            {["All", "Pending", "Matched", "Resolved"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`student-reports__filter-btn ${activeFilter === filter ? "active" : ""}`}
              >
                {filter}
              </button>
            ))}
          </div>

          <input
            type="text"
            placeholder="Search reports..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="student-reports__search"
          />
        </div>

        <div className="student-reports__table card-surface">
          <table className="section-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Category</th>
                <th>Date Submitted</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredReports.length > 0 ? (
                filteredReports.map((report) => (
                  <tr key={report.id}>
                    <td>{report.item}</td>
                    <td>{report.category}</td>
                    <td>{report.dateSubmitted}</td>
                    <td><span className={statusClass(report.status)}>{report.status}</span></td>
                    <td>
                      <button className={report.action === "Chat" ? "secondary-btn" : "primary-btn"}>
                        {report.action}
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="student-reports__empty" colSpan="5">No reports found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}