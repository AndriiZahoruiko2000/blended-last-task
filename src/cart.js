import { LOCAL_STORAGE_KEY } from './js/constants';
import { openModal } from './js/handlers';
import { loadFromLS } from './js/helpers';
import { getProductById } from './js/products-api';
import { refs } from './js/refs';
import {
  createTemplateProducts,
  renderCartInfo,
  updateHeaderCounter,
} from './js/render-function';
import './js/modal.js';
//!================================================
document.addEventListener('DOMContentLoaded', e => {
  const cartIds = loadFromLS(LOCAL_STORAGE_KEY, []);

  const cart = cartIds.map(getProductById);
  Promise.all(cart).then(response => {
    const markup = createTemplateProducts(response);
    refs.productsList.innerHTML = markup;
    renderCartInfo(response);
  });
  updateHeaderCounter();
});

//!================================================
refs.cartProductsList.addEventListener('click', openModal);
