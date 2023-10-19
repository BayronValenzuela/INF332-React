import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import InventoryForm from '../components/InventoryForm';
import addInventoryItem from '../components/addInventoryItem';
import LoadingOverlay from '../components/LoadingOverlay';
import '../styles/addInventory.css';

function AddInventory() {
  const navigate = useNavigate();  
  const [isLoading, setIsLoading] = useState(false);

    const handleNewItem = (newItem) => {
        setIsLoading(true);
        setTimeout(() => {
            addInventoryItem(newItem);
            navigate('/inventory');
            setIsLoading(false);
        }, 1000);
    };

   return (
     <div className="container">
         <div className="add-inventory">
             <h1>Agregar Inventario</h1>
             <InventoryForm onSubmit={handleNewItem} />
             <LoadingOverlay isLoading={isLoading} message="  Registrando cambios..." />
         </div>
     </div>
 );
}

export default AddInventory;

