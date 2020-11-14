import $ from 'jquery';
import 'normalize.css';
import './index.css';
import shoppingList from './shopping-list';
import api from './api';
import store from './store';




function main() {
  api.getItems()
  .then((items) => {
    items.forEach((item) => store.addItem(item));
    shoppingList.render();
  });



  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);

