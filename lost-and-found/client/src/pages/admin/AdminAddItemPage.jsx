import { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import "./AdminAddItemPage.css";

export default function AdminAddItemPage() {
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
    alert("Item added");
  };

  return (
    <div className="admin-layout">
      <AdminSidebar />

      <main className="admin-form-page">
        <div className="admin-form-page__card card-surface">
          <h1 className="admin-form-page__title">New ITEM FORM</h1>
          <p className="admin-form-page__subtitle">
            Submit the details of your found item
          </p>

          <form onSubmit={handleSubmit} className="admin-form-page__form">
            <div>
              <label className="admin-form-page__label">Item Name *</label>
              <input
                name="itemName"
                value={formData.itemName}
                onChange={handleChange}
                className="text-input"
                placeholder="Ex: Black backpack"
              />
            </div>

            <div>
              <label className="admin-form-page__label">Category *</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="select-input"
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="admin-form-page__label">Location Found *</label>
              <input
                name="locationLost"
                value={formData.locationLost}
                onChange={handleChange}
                className="text-input"
                placeholder="Ex: Hunter North, Library, Cafeteria"
              />
            </div>

            <div>
              <label className="admin-form-page__label">Date Found *</label>
              <input
                type="date"
                name="dateLost"
                value={formData.dateLost}
                onChange={handleChange}
                className="text-input"
              />
            </div>

            <div>
              <label className="admin-form-page__label">Description *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="text-area"
                placeholder="Describe color, brand, size, or unique details..."
              />
            </div>

            <div>
              <label className="admin-form-page__label">Upload Image</label>
              <input type="file" name="image" onChange={handleChange} className="admin-form-page__file" />
            </div>

            <button type="submit" className="primary-btn admin-form-page__submit">SUBMIT</button>
          </form>
        </div>
      </main>
    </div>
  );
}