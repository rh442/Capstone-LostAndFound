import { useMemo, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import "./AdminOverview.css";
import ModalOverview from "../../components/ModalOverview";

export default function AdminOverview() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [Visibility,setVisibility] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);

  const reports = [
    { id: 1, item: "Black Backpack", category: "Backpack / Bag", dateSubmitted: "Mar 10, 2026", status: "Pending", action: "View" },
    { id: 2, item: "admin ID", category: "ID Card", dateSubmitted: "Mar 09, 2026", status: "Matched", action: "Chat" },
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
  const changeVisibility = () => {
        console.log("clicked");
        setVisibility(prev => !prev);
};
  return (
    <>
    <div className="admin-layout">
      <AdminSidebar />

      <main className="admin-reports">
        <div className="admin-reports__header">
          <h1 className="page-title">Overview</h1>
          <p className="page-subtitle">Review the status of submissions</p>
        </div>

        <div className="admin-reports__topbar">
          <div className="admin-reports__filters">
            {["All", "Pending", "Matched", "Resolved"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`admin-reports__filter-btn ${activeFilter === filter ? "active" : ""}`}
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
            className="admin-reports__search"
          />
        </div>

        <div className="admin-reports__table card-surface">
          <table className="section-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Category</th>
                <th>Date Submitted</th>
                <th>Status</th>
                <th>Action</th>
                <th>Details</th>
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
                      <span className="Chat_button secondary-btn">Chat</span>
                    </td>
                    <td>
                        <span className="Details_button primary-btn" onClick={()=>{
                            setSelectedReport(report);
                            setVisibility(true);
                        }}>View</span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="admin-reports__empty" colSpan="5">No reports found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
      </main>
    </div>
          <ModalOverview
            isOpen={Visibility}
            onClose={changeVisibility}
            report={selectedReport}
          />
    </>
  );
}