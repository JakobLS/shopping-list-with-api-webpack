

const items = [];
let hideCheckeditems = false;
let error = null;


function findById(id) {
  return this.items.find(currentItem => currentItem.id === id);
};

function addItem(item) {
  this.items.push(item);
};

function findAndUpdate(id, newData) {
  const currentItem = this.items.find(item => item.id === id);
  Object.assign(currentItem, newData);
};

function findAndDelete(id) {
  this.items = this.items.filter(currentItem => currentItem.id !== id);
};

function toggleCheckedFilter() {
  this.hideCheckedItems = !this.hideCheckedItems;
};

function setError(error) {
  this.error = error;
};


export default {
  items,
  hideCheckeditems,
  error,
  findById,
  findAndUpdate,
  addItem,
  findAndDelete,
  toggleCheckedFilter, 
  setError
};