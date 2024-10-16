import React, { useState } from 'react';
import '../styles//SortItems.css'; 

const SortItems = ({ items, setItems }) => {
  const [sortBy, setSortBy] = useState('quantity');
  const [order, setOrder] = useState('asc');

  const handleSort = () => {
    const sortedItems = [...items].sort((a, b) => {
      if (sortBy === 'quantity') {
        return order === 'asc' ? a.quantity - b.quantity : b.quantity - a.quantity;
      } else {
        return order === 'asc' ? a.price - b.price : b.price - a.price;
      }
    });
    setItems(sortedItems);
  };

  return (
    <div className="sort-items-container"> {}
      <label>Sort By:</label>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="quantity">Quantity</option>
        <option value="price">Price</option>
      </select>
      <label>Order:</label>
      <select value={order} onChange={(e) => setOrder(e.target.value)}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <button className="btn" onClick={handleSort}>Sort Items</button> {}
    </div>
  );
};

export default SortItems;
