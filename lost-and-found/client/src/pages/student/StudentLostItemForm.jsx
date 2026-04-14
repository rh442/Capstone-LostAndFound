import { useState } from "react";
import StudentSidebar from "../../components/StudentSidebar";
import "./StudentLostItemForm.css";

export default function StudentLostItemForm() {
  const [formData, setFormData] = useState({
    itemName: "",
    category: "",
    locationLost: "",
    dateLost: "",
    description: "",
    image: null,
  });

  const categories = [
    "Electronic",
    "Clothing",
    "Books",
    "Backpack / Bag",
    "Wallet / Purse",
    "Keys",
    "ID Card",
    "Water Bottle",
    "Accessories",
    "Jewelry",
    "Not Specified",
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Lost item form submitted.");
  };

  return (
    <div className="student-layout">
      <StudentSidebar />

      <main className="student-form-page">
        <div className="student-card student-form-page__card">
          <span className="student-eyebrow">New Submission</span>
          <h1 className="student-form-page__title">Lost Item Form</h1>
          <p className="student-form-page__subtitle">
            Submit the details of your lost item so the admin team can review it.
          </p>

          <form onSubmit={handleSubmit} className="student-form-page__form">
            <div>
              <label className="student-label">Item Name *</label>
              <input
                name="itemName"
                value={formData.itemName}
                onChange={handleChange}
                className="student-input"
                placeholder="Ex: Black backpack"
              />
            </div>

            <div>
              <label className="student-label">Category *</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="student-select"
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="student-label">Location Lost *</label>
              <input
                name="locationLost"
                value={formData.locationLost}
                onChange={handleChange}
                className="student-input"
                placeholder="Ex: Hunter North, Library, Cafeteria"
              />
            </div>

            <div>
              <label className="student-label">Date Lost *</label>
              <input
                type="date"
                name="dateLost"
                value={formData.dateLost}
                onChange={handleChange}
                className="student-input"
              />
            </div>

            <div>
              <label className="student-label">Description *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="student-textarea"
                placeholder="Describe color, brand, size, or unique details..."
              />
            </div>

            <div>
              <label className="student-label">Upload Image</label>
              <input
                type="file"
                name="image"
                onChange={handleChange}
                className="student-form-page__file"
              />
            </div>

            <button type="submit" className="student-lift-btn student-lift-btn--full">
              <span className="student-lift-btn__face">Submit Report</span>
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
