import './ModalOverview.css'
import backpack from '../assets/black_backpack.webp'
import ID from '../assets/ID.jpg'
import Bottle from '../assets/Bottle.webp'
import Charger from '../assets/Charger.jpg'
import Keys from '../assets/Keys.webp'
import ItemCell from './ItemCell'

export default function ModalOverview({ isOpen, onClose, report, onMatch }) {
  const items = [
    { id: 1, image: backpack, item: "Black Backpack", category: "Backpack/Bag", dateSubmitted: "Mar 10, 2026", storage: "rm 100 shelf 2", status: "Pending" },
    { id: 2, image: ID, item: "Student ID", category: "ID", dateSubmitted: "Mar 09, 2026", storage: "rm 100 shelf 1", status: "Matched" },
    { id: 3, image: Bottle, item: "Water Bottle", category: "Bottles", dateSubmitted: "Mar 08, 2026", storage: "rm 100 shelf 1", status: "Resolved" },
    { id: 4, image: Charger, item: "Laptop Charger", category: "Electronic", dateSubmitted: "Mar 07, 2026", storage: "rm 100 shelf 2", status: "Matched" },
    { id: 5, image: Keys, item: "Keys", category: "Keys", dateSubmitted: "Mar 06, 2026", storage: "rm 100 shelf 1", status: "Pending" },
  ];
  const matchedItem = items.find(i => i.id === report?.match);
  const handleMatch = (item) => {
    const updatedReport = { ...report, match: item.id };
    onMatch(updatedReport);
  };

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

        {report?.match === '' ? (
          <div className='match'>
            <div className="list_container">
              <h2>Search Available Items</h2>
              <table>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Item</th>
                    <th>Category</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Match</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr className='item-set' key={item.id}>
                      <td><img src={item.image} alt={item.item} /></td>
                      <td>{item.item}</td>
                      <td>{item.category}</td>
                      <td>{item.dateSubmitted}</td>
                      <td>{item.status}</td>
                      <td>{item.status === 'Pending' ? <button type='button' onClick={() => handleMatch(item)}>Match</button> : ""}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className='MatchedItem'>
            {/* <p>Matched to item ID: {report?.match}</p> */}
            <div className="button-container">
              <button type='button' onClick={() => handleMatch({ id: '' })}>Clear Match</button>
            </div>
             <div className="Item-container">
               <ItemCell
                  image={matchedItem?.image}
                  item={matchedItem?.item}
                  category={matchedItem?.category}
                  dateSubmitted={matchedItem?.dateSubmitted}
                  storage={matchedItem?.storage}
                />
             </div>
          </div>
         
        )}
      </div>
    </div>
  );
}