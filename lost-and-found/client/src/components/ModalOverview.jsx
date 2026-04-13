import './ModalOverview.css'
import backpack from '../assets/black_backpack.webp'
import ID from '../assets/ID.jpg'
import Bottle from '../assets/Bottle.webp'
import Charger from '../assets/Charger.jpg'
import Keys from '../assets/Keys.webp'
import { useState } from "react";

export default function ModalOverview({ isOpen, onClose, report }) {
   const items = [
      { id: 1,image: backpack, item: "Black Backpack", category: "Backpack/Bag", dateSubmitted: "Mar 10, 2026",storage: "rm 100 shelf 2" , status: "Pending", action: "View" },
      { id: 2,image:ID, item: "Student ID", category: "ID", dateSubmitted: "Mar 09, 2026",storage: "rm 100 shelf 1" , status: "Matched", action: "Chat" },
      { id: 3,image:Bottle, item: "Water Bottle", category: "Bottles", dateSubmitted: "Mar 08, 2026",storage: "rm 100 shelf 1" , status: "Resolved", action: "View" },
      { id: 4,image:Charger, item: "Laptop Charger", category: "Electronic", dateSubmitted: "Mar 07, 2026",storage: "rm 100 shelf 2" , status: "Matched", action: "Chat" },
      { id: 5,image:Keys, item: "Keys", category: "Keys", dateSubmitted: "Mar 06, 2026",storage: "rm 100 shelf 1" , status: "Pending",  action: "View" },
    ];
  return (
    <div className={`modal ${isOpen ? 'active' : ''}`}>
      <button className="modal-close" onClick={onClose}>✕</button>

      <h1>Details Here</h1>
        
      <div className='innerModal'>
          <div className='report'>
              {report && (
                <>
                <h2>Item Details</h2>
                  <p>{report.item}</p>
                  <p>{report.category}</p>
                  <p>{report.dateSubmitted}</p>
                  <p>{report.status}</p>
                </>
              )}
          </div>
          <div className='match'>
            <h2>Search Availiable Items</h2>

          </div>
      </div>
    </div>
  );
}