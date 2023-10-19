import { Button } from 'react-bootstrap';
import getInventoryItems from '../components/getInventoryItems';
import '../styles/Inventory.css';

function Inventory() {
  const inventoryItems = getInventoryItems();

  return (
    <div className='page'>
      <h1>Página de inventario</h1>
      
      <div className="inventory-container">
        {inventoryItems.map((item, index) => (
          <div className="inventory-item" key={index}>
            <div className="objeto">{item.item}</div>
            <div className="cantidad">Cantidad: {item.quantity}</div>
            <span className="categoria">{item.category}</span>
          </div>
        ))}
      </div>
      
      <Button className="inventory-button" href="/addinventory" variant="primary">
        Añadir al Inventario
      </Button>
    </div>
  );
}

export default Inventory;




