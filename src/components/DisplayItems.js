import React, { useState } from 'react';
import { Table, Form } from 'react-bootstrap';
import '../App.css';

const DisplayItems = ({ items }) => {
  const [searchId, setSearchId] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = items.filter(item => {
    const matchesId = item.id.toString().includes(searchId);
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesId && matchesCategory;
  });

  return (
    <div>
      <Form.Control 
        type="text" 
        placeholder="Search by ID" 
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
      />
      <Form.Select 
        value={selectedCategory} 
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="mt-3"
      >
        <option value="All">All Categories</option>
        <option value="Clothing">Clothing</option>
        <option value="Electronics">Electronics</option>
        <option value="Entertainment">Entertainment</option>
      </Form.Select>
      <Table className="table mt-3">
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
          {filteredItems.length > 0 ? (
            filteredItems.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">No items found.</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default DisplayItems;
