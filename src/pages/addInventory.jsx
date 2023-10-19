import React from 'react';
import { useNavigate } from 'react-router-dom';  
import InventoryForm from '../components/InventoryForm';
import addInventoryItem from '../components/addInventoryItem';

function AddInventory() {
  const navigate = useNavigate();  

  const handleNewItem = (newItem) => {
    addInventoryItem(newItem);
    navigate('/inventory');  
  };

  return (
    <div className="add-inventory">
      <h1>Agregar Inventario</h1>
      <InventoryForm onSubmit={handleNewItem} />
    </div>
  );
}

export default AddInventory;

