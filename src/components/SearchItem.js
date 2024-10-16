import React from 'react';
import '../styles/LowStock.css'; 

const SearchItem = ({ items }) => {
  const lowStockItems = items.filter(item => item.quantity <= 5);

  if (lowStockItems.length === 0) {
    return <p>No low stock items found.</p>;
  }

  return (
    <div>
      <h2>Low Stock Items</h2>
      <table className="low-stock-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {lowStockItems.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchItem;
