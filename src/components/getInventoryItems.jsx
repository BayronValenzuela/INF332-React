
function getInventoryItems(){
  return JSON.parse(localStorage.getItem('inventory') || '[]');
};

export default getInventoryItems
