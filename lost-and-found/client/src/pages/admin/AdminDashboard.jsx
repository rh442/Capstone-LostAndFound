import AdminSidebar from "../../components/AdminSidebar";
import './AdminDashboard.css'
import ItemCell from '../../components/ItemCell'
import backpack from '../../assets/black_backpack.webp'
import ID from '../../assets/ID.jpg'
import Bottle from '../../assets/Bottle.webp'
import Charger from '../../assets/Charger.jpg'
import Keys from '../../assets/Keys.webp'
import { useState } from "react";



export default function AdminDashboard(){
    const [selectedCategory, setSelectedCategory] = useState(null);

    const items = [
    { id: 1,image: backpack, item: "Black Backpack", category: "Backpack/Bag", dateSubmitted: "Mar 10, 2026",storage: "rm 100 shelf 2" , status: "Pending", action: "View" },
    { id: 2,image:ID, item: "Student ID", category: "ID", dateSubmitted: "Mar 09, 2026",storage: "rm 100 shelf 1" , status: "Matched", action: "Chat" },
    { id: 3,image:Bottle, item: "Water Bottle", category: "Bottles", dateSubmitted: "Mar 08, 2026",storage: "rm 100 shelf 1" , status: "Resolved", action: "View" },
    { id: 4,image:Charger, item: "Laptop Charger", category: "Electronic", dateSubmitted: "Mar 07, 2026",storage: "rm 100 shelf 2" , status: "Matched", action: "Chat" },
    { id: 5,image:Keys, item: "Keys", category: "Keys", dateSubmitted: "Mar 06, 2026",storage: "rm 100 shelf 1" , status: "Pending",  action: "View" },
  ];
    const filteredItems = selectedCategory
        ? items.filter(item => item.category === selectedCategory)
        : items;
    
    return(
    <div className="admin-layout">
        <AdminSidebar/>
        <main>
            <div className="admin-header">
                <h1>Welcome, [Admin]</h1>
            </div>
            <div className="category-filters">

                <h4 onClick={() =>
                setSelectedCategory(
                    selectedCategory === "Electronic" ? null : "Electronic"
                )}
                className={selectedCategory === "Electronic" ? "active" : ""}
                >Electronic</h4>

                <h4 onClick={() =>
                setSelectedCategory(
                    selectedCategory === "Clothing" ? null : "Clothing"
                )}
                className={selectedCategory === "Clothing" ? "active" : ""}
                >Clothing</h4>
                <h4 onClick={() =>
                setSelectedCategory(
                    selectedCategory === "Books" ? null : "Books"
                )}
                className={selectedCategory === "Books" ? "active" : ""}
                >Books</h4>
                <h4 onClick={() =>
                setSelectedCategory(
                    selectedCategory === "Backpack/Bag" ? null : "Backpack/Bag"
                )}
                className={selectedCategory === "Backpack/Bag" ? "active" : ""}
                >Backpack/Bag</h4>
                <h4 onClick={() =>
                setSelectedCategory(
                    selectedCategory === "Wallet/Purse" ? null : "Wallet/Purse"
                )}
                className={selectedCategory === "Wallet/Purse" ? "active" : ""}
                >Wallet/Purse</h4>
                <h4 onClick={() =>
                setSelectedCategory(
                    selectedCategory === "Keys" ? null : "Keys"
                )}
                className={selectedCategory === "Keys" ? "active" : ""}
                >Keys</h4>
                <h4 onClick={() =>
                setSelectedCategory(
                    selectedCategory === "ID" ? null : "ID"
                )}
                className={selectedCategory === "ID" ? "active" : ""}
                >ID card</h4>
                <h4 onClick={() =>
                setSelectedCategory(
                    selectedCategory === "Bottles" ? null : "Bottles"
                )}
                className={selectedCategory === "Bottles" ? "active" : ""}
                >Bottles</h4>
                <h4 onClick={() =>
                setSelectedCategory(
                    selectedCategory === "Accessories" ? null : "Accessories"
                )}
                className={selectedCategory === "Accessories" ? "active" : ""}
                >Accessories</h4>
                <h4 onClick={() =>
                setSelectedCategory(
                    selectedCategory === "Jewelry" ? null : "Jewelry"
                )}
                className={selectedCategory === "Jewelry" ? "active" : ""}
                >Jewelry</h4>
                <h4 onClick={() =>
                setSelectedCategory(
                    selectedCategory === "Not Specified" ? null : "Not Specified"
                )}
                className={selectedCategory === "Not Specified" ? "active" : ""}
                >Not Specified</h4>

               
            </div>
            <div className="Items_container">
                {filteredItems.map((item) => (
                    <ItemCell 
                        key={item.id}
                        image={item.image}
                        item={item.item}
                        category={item.category}
                        dateSubmitted={item.dateSubmitted}
                        storage={item.storage}
                          />
                ))}
            </div>
        </main>
    </div>
    )
}


