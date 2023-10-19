import { Button } from 'react-bootstrap';
import getInventoryItems from '../components/getInventoryItems';

function Inventory() {
  // Fetch the inventory items using the getInventoryItems function
  const inventoryItems = getInventoryItems();

  return (
    <div className='page'>
      <h1>Página de inventario</h1>
      {/* Display the inventory items */}
      <ul>
        {inventoryItems.map((item, index) => (
          <li key={index}>
            Categoria: {item.category}, Objeto: {item.item}, Cantidad: {item.quantity}
          </li>
        ))}
      </ul>
      <Button href="/addinventory" variant="primary">
        Añadir al Inventario
      </Button>
    </div>
  );
}

export default Inventory;


