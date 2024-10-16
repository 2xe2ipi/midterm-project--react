import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import '../styles/UpdateItem.css'; 

const UpdateItem = ({ items, setItems }) => {
  const [id, setId] = useState('');
  const [field, setField] = useState('quantity');
  const [newValue, setNewValue] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  const handleUpdate = (e) => {
    e.preventDefault(); 
    
    setMessage('');
    setError(null);

    
    if (parseFloat(newValue) < 0) {
      setError('Value cannot be negative!');
      return;
    }

    const index = items.findIndex(item => item.id === parseInt(id));
    if (index === -1) {
      setError('Item not found!');
      return;
    }

    const updatedItems = [...items];
    const oldValue = updatedItems[index][field];
    updatedItems[index][field] = field === 'price' ? parseFloat(newValue) : parseInt(newValue);

    setItems(updatedItems);
    setMessage(`Item "${updatedItems[index].name}" ${field} updated from ${oldValue} to ${newValue}`); 
    setId('');
    setNewValue('');
  };

  return (
    <div className="update-item-container">
      <Form onSubmit={handleUpdate}>
        <Form.Group controlId="formItemId" className="form-group">
          <Form.Label>ID:</Form.Label>
          <Form.Control
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formField" className="form-group">
          <Form.Label>Field to update:</Form.Label>
          <Form.Control as="select" value={field} onChange={(e) => setField(e.target.value)}>
            <option value="quantity">Quantity</option>
            <option value="price">Price</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formNewValue" className="form-group">
          <Form.Label>New Value:</Form.Label>
          <Form.Control
            type="number"
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
            required
          />
        </Form.Group>

        <Button type="submit">Update Item</Button>
      </Form>
      {}
      {message && <Alert variant="success" className="mt-3">{message}</Alert>}
      {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
    </div>
  );
};

export default UpdateItem;
