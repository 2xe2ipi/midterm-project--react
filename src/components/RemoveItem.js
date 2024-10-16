import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import '../styles/RemoveItem.css';

const RemoveItem = ({ items, setItems }) => {
  const [id, setId] = useState('');
  const [message, setMessage] = useState('');

  const handleRemoveItem = (e) => {
    e.preventDefault();
    const itemToRemove = items.find(item => item.id === parseInt(id));
    if (itemToRemove) {
      setItems(items.filter(item => item.id !== parseInt(id)));
      setMessage(`Item ${itemToRemove.name} has been removed from the inventory.`);
    } else {
      setMessage('Item not found!');
    }
    setId('');
  };

  return (
    <div className="remove-item-container"> {}
      {message && <Alert variant="danger">{message}</Alert>}
      <Form onSubmit={handleRemoveItem}>
        <Form.Group controlId="formRemoveItemId">
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </Form.Group>

        <Button type="submit">Remove Item</Button>
      </Form>
    </div>
  );
};

export default RemoveItem;
