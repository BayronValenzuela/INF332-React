function addInventoryItem(item) {
  let currentInventory = JSON.parse(localStorage.getItem('inventory') || '[]');
  currentInventory.push(item);
  localStorage.setItem('inventory', JSON.stringify(currentInventory));
  console.log("Added item:", item);
};

export default addInventoryItem


