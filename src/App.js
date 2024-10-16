import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import AddItem from './components/AddItem';
import UpdateItem from './components/UpdateItem';
import RemoveItem from './components/RemoveItem';
import DisplayItems from './components/DisplayItems';
import SearchItem from './components/SearchItem';
import SortItems from './components/SortItems';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [activeTab, setActiveTab] = useState('addItem'); 

  return (
    <div className="app">
      <div className="left-side">
        <Navbar bg="light" expand="lg" className="navbar">
          <Container>
            <Navbar.Brand href="#" className="navbar-brand">Inventory Management</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Button className="custom-button" onClick={() => setActiveTab('addItem')}>
                  Add
                </Button>
                <Button className="custom-button" onClick={() => setActiveTab('updateItem')}>
                  Update
                </Button>
                <Button className="custom-button" onClick={() => setActiveTab('removeItem')}>
                  Remove
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {activeTab === 'addItem' && <AddItem items={items} setItems={setItems} />}
        {activeTab === 'updateItem' && <UpdateItem items={items} setItems={setItems} />}
        {activeTab === 'removeItem' && <RemoveItem items={items} setItems={setItems} />}
      </div>

      <div className="right-side">
        <div className="button-group">
          <Button className="custom-button" onClick={() => setActiveTab('sortItems')}>
            Sort Items
          </Button>
          <Button className="custom-button" onClick={() => setActiveTab('displayLowStock')}>
            Display Low Stock
          </Button>
        </div>

        <DisplayItems items={items} />
        {activeTab === 'sortItems' && <SortItems items={items} setItems={setItems} />}
        {activeTab === 'displayLowStock' && <SearchItem items={items} />}
      </div>
    </div>
  );
};

export default App;
