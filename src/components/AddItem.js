import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import '../styles/AddItem.css'; 

const AddItem = ({ items, setItems }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Clothing');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  const handleAddItem = (e) => {
    e.preventDefault();

    setMessage('');
    setError(null);

   
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      setError('ID must be a valid number!');
      return;
    }

   
    const parsedQuantity = parseInt(quantity);
    const parsedPrice = parseFloat(price);

    if (parsedQuantity < 0 || parsedPrice < 0) {
      setError('Quantity and Price cannot be negative!');
      return;
    }

    const newItem = {
      id: parsedId,
      name,
      quantity: parsedQuantity,
      price: parsedPrice,
      category,
    };

    const existingItem = items.find((item) => item.id === newItem.id);

    if (existingItem) {
      setError('Item with the same ID already exists!');
    } else {
      setItems([...items, newItem]);
      setMessage(`Item "${name}" added successfully!`);
      
      setId('');
      setName('');
      setQuantity('');
      setPrice('');
    }
  };

  return (
    <div className="add-item-container">
      <Form onSubmit={handleAddItem}>
        <Form.Group controlId="formItemId" className="form-group">
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formItemName" className="form-group">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formItemQuantity" className="form-group">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formItemPrice" className="form-group">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formItemCategory" className="form-group">
          <Form.Label>Category</Form.Label>
          <Form.Control
            as="select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Clothing</option>
            <option>Electronics</option>
            <option>Entertainment</option>
          </Form.Control>
        </Form.Group>

        <Button type="submit">Add Item</Button>
      </Form>
      {message && <Alert variant="success" className="mt-3">{message}</Alert>}
      {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
    </div>
  );
};

export default AddItem;
