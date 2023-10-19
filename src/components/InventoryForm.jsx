import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function InventoryForm({ onSubmit }) {
  const [category, setCategory] = useState("");
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (category && item && quantity) {
      onSubmit({ category, item, quantity });
      setCategory("");
      setItem("");
      setQuantity("");
    }
  };

  return (
      
    <div className="container mt-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="category">
          <Form.Label>Categoria</Form.Label>
          <Form.Control 
            type="text" 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="item">
          <Form.Label>Objeto</Form.Label>
          <Form.Control 
            type="text" 
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="quantity">
          <Form.Label>Cantidad</Form.Label>
          <Form.Control 
            type="number" 
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Confirmar
        </Button>
      </Form>
    </div>
  );
}

export default InventoryForm;

